$ErrorActionPreference = "Stop"

$deployId = "AKfycbwVZRydxVYjfLaA9p-7mpErqIf-3Wp5MtP5Zfmuy_tzQEWBi4wYFefHoCWUFw4zmFP-7w"
$baseUrl = "https://script.google.com/macros/s/$deployId/exec"
$goal = 1000
$deadline = Get-Date -Hour 15 -Minute 0 -Second 0
if ((Get-Date) -ge $deadline) {
  $deadline = (Get-Date).AddHours(2)
}
$pollSeconds = 45
$staleRestartThreshold = 4
$sameFoundRestartThreshold = 5
$sameIterRestartThreshold = 5
$inspectEveryPolls = 2
$queryIndex = 0
$pollIndex = 0

$queryPool = @(
  "espana industria musical contacto email prensa booking management -site:mondosonoro.com -site:rockdelux.com -site:binaural.es",
  "espana salas conciertos booking contacto email -site:mondosonoro.com -site:rockdelux.com",
  "espana festivales musica equipo contacto email prensa -site:mondosonoro.com -site:binaural.es",
  "espana agencias management artistas contacto email -site:mondosonoro.com -site:rockdelux.com",
  "espana promotoras conciertos contacto email programacion -site:mondosonoro.com -site:salaelsol.com",
  "espana medios musicales redaccion contacto email -site:mondosonoro.com -site:rockdelux.com",
  "espana radios musicales locutores contacto email -site:mondosonoro.com -site:binaural.es",
  "espana discograficas independientes a&r contacto email -site:mondosonoro.com -site:rockdelux.com",
  "site:.es espana musica equipo quienes somos contacto email -site:mondosonoro.com -site:binaural.es",
  "site:.es espana booking management contacto email prensa -site:mondosonoro.com -site:rockdelux.com",
  "madrid espana industria musical contacto email booking management -site:mondosonoro.com",
  "barcelona espana industria musical contacto email booking management -site:mondosonoro.com",
  "valencia espana industria musical contacto email booking management -site:mondosonoro.com",
  "sevilla espana industria musical contacto email booking management -site:mondosonoro.com",
  "bilbao espana industria musical contacto email booking management -site:mondosonoro.com",
  "malaga espana industria musical contacto email booking management -site:mondosonoro.com"
)

$rootDir = Split-Path -Parent $PSScriptRoot
$reportsDir = Join-Path $rootDir "reports"
if (-not (Test-Path $reportsDir)) {
  New-Item -ItemType Directory -Path $reportsDir | Out-Null
}
$logPath = Join-Path $reportsDir "watchdog_objetivo_1000.log"

function Write-Log([string]$msg) {
  $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $msg
  $line | Tee-Object -FilePath $logPath -Append
}

function Invoke-Json([string]$url) {
  $uriText = [string]$url
  if ([string]::IsNullOrWhiteSpace($uriText) -or $uriText -notmatch '^https?://') {
    throw ("URL invalida watchdog: '{0}'" -f $uriText)
  }
  $resp = Invoke-WebRequest -UseBasicParsing -Uri $uriText -TimeoutSec 120
  return ($resp.Content | ConvertFrom-Json)
}

function Get-StaleFromLastLogs($lastLogs) {
  if (-not $lastLogs) { return 0 }
  foreach ($line in ($lastLogs | Select-Object -Last 8)) {
    $m = [regex]::Match([string]$line, "Sin contactos nuevos en este paso \((\d+)\/35\)")
    if ($m.Success) {
      return [int]$m.Groups[1].Value
    }
  }
  return 0
}

function Get-NextQuery {
  if (-not $queryPool -or $queryPool.Count -le 0) {
    return "periodistas musicales espana contacto email"
  }
  $idx = $script:queryIndex % $queryPool.Count
  $script:queryIndex += 1
  return [string]$queryPool[$idx]
}

function Get-GlobalContactsCount {
  try {
    $inspectUrl = "${baseUrl}?action=inspect_sheet"
    $sheet = Invoke-Json $inspectUrl
    if (-not $sheet -or -not $sheet.ok) { return -1 }
    $targets = @(
      "CONTACTOS_WEB",
      "PRELEVANTES POP",
      "RELEVANTES ROCK",
      "RELEVANTES MUSICA CLASICA",
      "RELEVANTES MUSICA REGIONAL",
      "RELEVANTES FLAMENCO",
      "RELEVANTES RUMBA",
      "RELEVANTES ELECTRONICO"
    )
    $sum = 0
    foreach ($t in $targets) {
      $info = $sheet.sheets | Where-Object { [string]$_.name -eq $t } | Select-Object -First 1
      if (-not $info) { continue }
      $usedRows = [int]$info.usedRows
      if ($usedRows -gt 1) { $sum += ($usedRows - 1) }
    }
    return $sum
  } catch {
    return -1
  }
}

function Start-Run([string]$reason = "inicio") {
  $q = Get-NextQuery
  $qEnc = [System.Uri]::EscapeDataString($q)
  $startUrl = "${baseUrl}?action=start_job_autotest&targetCount=3000&scope=NACIONAL_ES&profile=AGRESIVO_CAUDAL&clearPreviousData=false&query=$qEnc"
  $result = Invoke-Json $startUrl
  if ($result.ok -ne $true) {
    throw "No se pudo iniciar job autotest"
  }
  $jobId = ""
  try { $jobId = [string]$result.started.jobId } catch {}
  if ([string]::IsNullOrWhiteSpace($jobId)) {
    $jobId = "sin_jobId"
  }
  Write-Log ("INICIO job -> {0} | motivo={1} | query={2}" -f $jobId, $reason, $q)
}

function Purge-Run {
  $purgeUrl = "${baseUrl}?action=purge_running_jobs"
  $result = Invoke-Json $purgeUrl
  if ($result.ok -eq $true) {
    $count = 0
    try { $count = [int]$result.cancelledCount } catch {}
    Write-Log ("PURGA ejecutada. Jobs cancelados: {0}" -f $count)
  } else {
    Write-Log "PURGA intentada con respuesta no-ok"
  }
}

Write-Log ("WATCHDOG INICIADO. Objetivo={0} | Deadline={1}" -f $goal, ($deadline.ToString("yyyy-MM-dd HH:mm:ss")))

$lastFound = -1
$sameFoundCount = 0
$lastIter = -1
$sameIterCount = 0
$lastGlobalCount = -1
$sameGlobalCount = 0

Purge-Run
Start-Sleep -Seconds 3
Start-Run "arranque_watchdog"
Start-Sleep -Seconds 8

while ((Get-Date) -lt $deadline) {
  try {
    $script:pollIndex += 1
    $statusUrl = "${baseUrl}?action=active_job_status"
    $state = Invoke-Json $statusUrl
    $exists = $false
    try { $exists = [bool]$state.exists } catch {}

    if (-not $exists) {
      Write-Log "No hay job activo. Inicio inmediato."
      Start-Run "sin_job_activo"
      Start-Sleep -Seconds 10
      continue
    }

    $job = $state.status
    $jobId = [string]$state.jobId
    $running = ([string]$job.status -eq "running")
    $found = [int]$job.found
    $iter = [int]$job.iterations
    $done = [bool]$job.done
    $lastLogs = $job.lastLogs
    $stale = Get-StaleFromLastLogs $lastLogs

    Write-Log ("ESTADO job={0} running={1} found={2} iter={3} stale={4}" -f $jobId, $running, $found, $iter, $stale)

    $globalCount = -1
    if (($script:pollIndex % $inspectEveryPolls) -eq 0) {
      $globalCount = Get-GlobalContactsCount
      if ($globalCount -ge 0) {
        Write-Log ("CRM TOTAL (8 pestanas): {0} contactos acumulados" -f $globalCount)
        if ($lastGlobalCount -eq $globalCount) {
          $sameGlobalCount += 1
        } else {
          $sameGlobalCount = 0
          $lastGlobalCount = $globalCount
        }
      }
    }

    if ($globalCount -ge $goal) {
      Write-Log ("OBJETIVO ALCANZADO EN HOJA ({0} contactos). Fin watchdog." -f $globalCount)
      break
    }

    if ($lastFound -eq $found) {
      $sameFoundCount += 1
    } else {
      $sameFoundCount = 0
      $lastFound = $found
    }
    if ($lastIter -eq $iter) {
      $sameIterCount += 1
    } else {
      $sameIterCount = 0
      $lastIter = $iter
    }

    $mustRestart = $false
    if (-not $running -or $done) { $mustRestart = $true }
    if ($stale -ge $staleRestartThreshold) { $mustRestart = $true }
    if ($sameFoundCount -ge $sameFoundRestartThreshold) { $mustRestart = $true }
    if ($sameIterCount -ge $sameIterRestartThreshold) { $mustRestart = $true }

    if ($mustRestart) {
      Write-Log ("REINICIO automatico: running={0} done={1} stale={2} sameFoundCount={3} sameIterCount={4} sameGlobalCount={5}" -f $running, $done, $stale, $sameFoundCount, $sameIterCount, $sameGlobalCount)
      Purge-Run
      Start-Sleep -Seconds 3
      Start-Run "reinicio_automatico"
      $sameFoundCount = 0
      $sameIterCount = 0
      $sameGlobalCount = 0
      Start-Sleep -Seconds 12
      continue
    }
  } catch {
    Write-Log ("ERROR watchdog: {0}" -f $_.Exception.Message)
  }

  Start-Sleep -Seconds $pollSeconds
}

Write-Log "WATCHDOG FINALIZADO."
