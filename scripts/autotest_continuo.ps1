param(
  [int]$Cycles = 0,
  [int]$MaxStepsPerCycle = 180,
  [int]$StepPauseSeconds = 0,
  [int]$StaleStepsLimit = 0,
  [int]$TargetCount = 3000,
  [string]$Profile = "AGRESIVO_CAUDAL",
  [string]$Scope = "NACIONAL_ES",
  [bool]$PurgeOnBoot = $false,
  [bool]$PurgeEveryCycle = $false,
  [bool]$ClearPreviousDataOnNewJob = $false,
  [string]$WebAppExec = "",
  [string]$LogFile = ""
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
if (-not $LogFile) {
  $stamp = Get-Date -Format "yyyyMMdd_HHmmss"
  $LogFile = Join-Path $repoRoot ("reports\\autotest_continuo_" + $stamp + ".log")
}

if (-not (Test-Path (Split-Path -Parent $LogFile))) {
  New-Item -ItemType Directory -Path (Split-Path -Parent $LogFile) -Force | Out-Null
}

function Write-Log {
  param([string]$Message)
  $line = ("[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message)
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

function Resolve-WebAppExec {
  param([string]$Requested)
  $raw = [string]$Requested
  if ($raw.Trim()) { return $raw.Trim() }
  $auditScript = Join-Path $PSScriptRoot "auditoria_hasta_18.ps1"
  if (-not (Test-Path $auditScript)) {
    throw "No se encontro auditoria_hasta_18.ps1 para resolver WebAppExec."
  }
  $line = (Select-String -Path $auditScript -Pattern "WebAppExec" | Select-Object -First 1).Line
  if (-not $line) {
    throw "No se pudo leer WebAppExec desde auditoria_hasta_18.ps1"
  }
  $parts = $line -split '"'
  if ($parts.Length -lt 2 -or -not $parts[1]) {
    throw "Formato inesperado de WebAppExec en auditoria_hasta_18.ps1"
  }
  return ([string]$parts[1]).Trim()
}

function To-QueryString {
  param([hashtable]$Params)
  $pairs = @()
  foreach ($key in $Params.Keys) {
    $value = $Params[$key]
    if ($null -eq $value -or ([string]$value) -eq "") { continue }
    $pairs += ("{0}={1}" -f [uri]::EscapeDataString([string]$key), [uri]::EscapeDataString([string]$value))
  }
  return ($pairs -join "&")
}

function Invoke-WebAction {
  param(
    [string]$BaseUrl,
    [string]$Action,
    [hashtable]$ExtraParams
  )

  $queryData = @{ action = $Action }
  if ($ExtraParams) {
    foreach ($k in $ExtraParams.Keys) {
      $queryData[$k] = $ExtraParams[$k]
    }
  }
  $query = To-QueryString -Params $queryData
  $url = "${BaseUrl}?${query}"

  try {
    $resp = Invoke-RestMethod -Method Get -Uri $url -TimeoutSec 150
    return @{
      ok = $true
      url = $url
      data = $resp
    }
  } catch {
    return @{
      ok = $false
      url = $url
      error = $_.Exception.Message
    }
  }
}

function Extract-StatusSummary {
  param($StepResult)
  if (-not $StepResult) {
    return "sin_datos"
  }
  $found = 0
  $requested = 0
  $remaining = 0
  $iterations = 0
  $errors = 0
  try { $found = [int]$StepResult.found } catch {}
  try { $requested = [int]$StepResult.requested } catch {}
  try { $remaining = [int]$StepResult.remaining } catch {}
  try { $iterations = [int]$StepResult.iterations } catch {}
  try { $errors = [int]$StepResult.errors } catch {}
  $iterations = $iterations
  if (-not $iterations -and $StepResult.iterations -ne $null) {
    try { $iterations = [int]$StepResult.iterations } catch {}
  }
  $done = [bool]($StepResult.done)
  return ("found={0}/{1} remaining={2} iter={3} errors={4} done={5}" -f $found, $requested, $remaining, $iterations, $errors, $done)
}

function Resolve-ActiveJob {
  param([string]$BaseUrl)
  $status = Invoke-WebAction -BaseUrl $BaseUrl -Action "active_job_status" -ExtraParams @{}
  if (-not $status.ok -or -not $status.data) {
    return @{
      ok = $false
      exists = $false
      message = if ($status.ok -and $status.data) { [string]$status.data.message } else { [string]$status.error }
      data = $null
    }
  }
  return @{
    ok = $true
    exists = [bool]$status.data.exists
    message = [string]$status.data.message
    data = $status.data
  }
}

$baseUrl = Resolve-WebAppExec -Requested $WebAppExec
Write-Log ("AUTOTEST_CONTINUO inicio | webapp=" + $baseUrl)
Write-Log ("params cycles={0} max_steps={1} stale_limit={2} pause={3}s target={4} profile={5} scope={6} purge_boot={7} purge_cycle={8}" -f $Cycles, $MaxStepsPerCycle, $StaleStepsLimit, $StepPauseSeconds, $TargetCount, $Profile, $Scope, $PurgeOnBoot, $PurgeEveryCycle)

if ($PurgeOnBoot) {
  $bootPurge = Invoke-WebAction -BaseUrl $baseUrl -Action "purge_running_jobs" -ExtraParams @{}
  if ($bootPurge.ok -and $bootPurge.data) {
    Write-Log ("boot purge => ok={0} msg={1}" -f [string]$bootPurge.data.ok, [string]$bootPurge.data.message)
  } else {
    Write-Log ("boot purge ERROR => " + [string]$bootPurge.error)
  }
}

$cycle = 0
while ($true) {
  $cycle += 1
  Write-Log ("CICLO {0} START" -f $cycle)

  if ($PurgeEveryCycle) {
    $purge = Invoke-WebAction -BaseUrl $baseUrl -Action "purge_running_jobs" -ExtraParams @{}
    if ($purge.ok -and $purge.data) {
      Write-Log ("purge_running_jobs => ok={0} msg={1}" -f [string]$purge.data.ok, [string]$purge.data.message)
    } else {
      Write-Log ("purge_running_jobs ERROR => " + [string]$purge.error)
    }
  }

  $jobId = ""
  $active = Resolve-ActiveJob -BaseUrl $baseUrl
  if ($active.ok -and $active.exists -and $active.data -and $active.data.jobId) {
    $jobId = [string]$active.data.jobId
    Write-Log ("reutilizando job activo => " + $jobId)
  } else {
    $start = Invoke-WebAction -BaseUrl $baseUrl -Action "start_job_autotest" -ExtraParams @{
      targetCount = $TargetCount
      profile = $Profile
      scope = $Scope
      clearPreviousData = $(if($ClearPreviousDataOnNewJob){'true'} else {'false'})
    }
    if (-not $start.ok -or -not $start.data -or -not $start.data.ok) {
      $msg = if ($start.ok -and $start.data) { [string]$start.data.message } else { [string]$start.error }
      Write-Log ("start_job_autotest ERROR => " + $msg)
      if ($Cycles -gt 0 -and $cycle -ge $Cycles) { break }
      Start-Sleep -Seconds 4
      continue
    }
    $jobId = [string]$start.data.started.jobId
    Write-Log ("job creado => " + $jobId)
  }

  if (-not $jobId) {
    Write-Log "ERROR => sin jobId"
    if ($Cycles -gt 0 -and $cycle -ge $Cycles) { break }
    Start-Sleep -Seconds 4
    continue
  }

  $foundPrev = -1
  $staleSteps = 0
  $done = $false

  for ($stepNum = 1; $stepNum -le $MaxStepsPerCycle; $stepNum += 1) {
    $run = Invoke-WebAction -BaseUrl $baseUrl -Action "run_job_step" -ExtraParams @{ jobId = $jobId }
    if (-not $run.ok -or -not $run.data -or -not $run.data.ok) {
      $msg = if ($run.ok -and $run.data) { [string]$run.data.message } else { [string]$run.error }
      Write-Log ("run_job_step ERROR (step={0}) => {1}" -f $stepNum, $msg)
      Start-Sleep -Seconds 2
      continue
    }

    $result = $run.data.result
    $summary = Extract-StatusSummary -StepResult $result
    Write-Log ("run_job_step OK (step={0}) => {1}" -f $stepNum, $summary)
    $lastDetail = ""
    try {
      if ($result.lastLogs -and $result.lastLogs.Count -gt 0) {
        $lastDetail = [string]($result.lastLogs[$result.lastLogs.Count - 1])
      }
    } catch {}
    if ($lastDetail) {
      Write-Log ("detalle => " + $lastDetail)
    }

    $foundNow = 0
    try { $foundNow = [int]$result.found } catch { $foundNow = 0 }
    if ($foundNow -le $foundPrev) {
      $staleSteps += 1
    } else {
      $staleSteps = 0
    }
    $foundPrev = $foundNow

    if ([bool]$result.done) {
      $done = $true
      break
    }

    if ($StaleStepsLimit -gt 0 -and $staleSteps -ge $StaleStepsLimit) {
      Write-Log ("detenido por estancamiento local del ciclo ({0} pasos sin avance)." -f $StaleStepsLimit)
      break
    }

    Start-Sleep -Seconds $StepPauseSeconds
  }

  $status = Invoke-WebAction -BaseUrl $baseUrl -Action "active_job_status" -ExtraParams @{}
  if ($status.ok -and $status.data) {
    if ([bool]$status.data.exists -and $status.data.status) {
      $s = $status.data.status
      Write-Log ("active_job_status => exists=true | " + (Extract-StatusSummary -StepResult $s))
    } else {
      Write-Log "active_job_status => sin job activo"
    }
  } else {
    Write-Log ("active_job_status ERROR => " + [string]$status.error)
  }

  $inspect = Invoke-WebAction -BaseUrl $baseUrl -Action "inspect_sheet_full" -ExtraParams @{}
  if ($inspect.ok -and $inspect.data -and $inspect.data.ok) {
    $sheetMain = $inspect.data.sheets | Where-Object { $_.name -eq "CONTACTOS_WEB" } | Select-Object -First 1
    $used = if ($sheetMain) { [string]$sheetMain.usedRangeA1 } else { "n/a" }
    $rows = if ($sheetMain) { [int]$sheetMain.usedRows } else { 0 }
    Write-Log ("inspect_sheet_full => CONTACTOS_WEB usedRange={0} rows={1}" -f $used, $rows)
  } else {
    $msg = if ($inspect.ok -and $inspect.data) { [string]$inspect.data.message } else { [string]$inspect.error }
    Write-Log ("inspect_sheet_full ERROR => " + $msg)
  }

  Write-Log ("CICLO {0} END | done={1}" -f $cycle, $done)
  if ($Cycles -gt 0 -and $cycle -ge $Cycles) { break }
}

Write-Log "AUTOTEST_CONTINUO fin"
