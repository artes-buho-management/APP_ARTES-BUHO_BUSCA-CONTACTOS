param(
  [datetime]$Until = [datetime]::Today.AddHours(18),
  [int]$IntervalMinutes = 8,
  [string]$DeploymentId = "AKfycbwVZRydxVYjfLaA9p-7mpErqIf-3Wp5MtP5Zfmuy_tzQEWBi4wYFefHoCWUFw4zmFP-7w",
  [string]$WebAppExec = "https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec",
  [string]$LogFile = "C:\Users\elrub\Desktop\CARPETA CODEX\04_TEMPORAL\auditoria_hasta_18.log"
)

$ErrorActionPreference = "Continue"

$repoRoot = Split-Path -Parent $PSScriptRoot
$serviceDir = Join-Path $repoRoot "selenium_remote_service"
$codeFile = Join-Path $repoRoot "Code.js"
$clasp = "C:\Users\elrub\AppData\Roaming\npm\clasp.cmd"
$py = Join-Path $serviceDir ".venv_selenium_service\Scripts\python.exe"
$cloudflaredLog = Join-Path $serviceDir "cloudflared_stderr.log"
$recoverScript = Join-Path $PSScriptRoot "recover_hybrid_tunnel.ps1"
$serviceStdout = Join-Path $repoRoot "service_stdout.log"
$serviceStderr = Join-Path $repoRoot "service_stderr.log"

function Write-Log {
  param([string]$Message)
  $stamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  $line = "[$stamp] $Message"
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

function Get-ConfiguredEndpoint {
  try {
    $raw = Get-Content -Path $codeFile -Raw -Encoding UTF8
    $m = [regex]::Match($raw, 'hybridEndpointDefault:\s*"([^"]+)"')
    if ($m.Success) { return [string]$m.Groups[1].Value }
    return ""
  } catch {
    return ""
  }
}

function Set-ConfiguredEndpointAndDeploy {
  param([string]$EndpointUrl)
  if (-not $EndpointUrl) { return $false }
  $apiEndpoint = "$EndpointUrl/api/search"
  $current = Get-ConfiguredEndpoint
  if ($current -eq $apiEndpoint) { return $true }

  try {
    $raw = Get-Content -Path $codeFile -Raw -Encoding UTF8
    $newRaw = [regex]::Replace($raw, 'hybridEndpointDefault:\s*"[^"]+"', ('hybridEndpointDefault: "' + $apiEndpoint + '"'))
    if ($newRaw -eq $raw) { return $false }
    Set-Content -Path $codeFile -Value $newRaw -Encoding UTF8

    Push-Location $repoRoot
    & $clasp push -f | Out-Null
    & $clasp version ("auto endpoint refresh " + (Get-Date -Format "yyyyMMdd-HHmmss")) | Out-Null
    & $clasp deploy --deploymentId $DeploymentId --description "auto endpoint refresh" | Out-Null
    Pop-Location
    Write-Log "Endpoint GAS actualizado a $apiEndpoint"
    return $true
  } catch {
    try { Pop-Location } catch {}
    Write-Log ("ERROR actualizando endpoint GAS: " + $_.Exception.Message)
    return $false
  }
}

function Get-TunnelUrl {
  if (-not (Test-Path $cloudflaredLog)) { return "" }
  $match = Select-String -Path $cloudflaredLog -Pattern "https://[a-z0-9-]+\.trycloudflare\.com" -AllMatches -ErrorAction SilentlyContinue | Select-Object -Last 1
  if ($match -and $match.Matches.Count -gt 0) {
    return [string]$match.Matches[0].Value
  }
  return ""
}

function Test-Url {
  param([string]$Url, [int]$TimeoutSec = 15)
  try {
    $r = Invoke-RestMethod -Method Get -Uri $Url -TimeoutSec $TimeoutSec
    return @{ ok = $true; body = $r }
  } catch {
    return @{ ok = $false; error = $_.Exception.Message }
  }
}

function Ensure-LocalService {
  $health = Test-Url -Url "http://127.0.0.1:8080/health" -TimeoutSec 8
  if ($health.ok) { return $true }
  Write-Log "Health local KO. Reiniciando servicio..."
  try {
    Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'selenium_remote_service\\\.venv_selenium_service\\Scripts\\python\.exe" app\\main\.py' } | ForEach-Object {
      Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 1
    Start-Process -FilePath $py -ArgumentList "app\main.py" -WorkingDirectory $serviceDir -RedirectStandardOutput $serviceStdout -RedirectStandardError $serviceStderr -WindowStyle Hidden | Out-Null
    Start-Sleep -Seconds 3
    $health2 = Test-Url -Url "http://127.0.0.1:8080/health" -TimeoutSec 10
    if ($health2.ok) {
      Write-Log "Servicio local recuperado."
      return $true
    }
  } catch {
    Write-Log ("ERROR reiniciando servicio local: " + $_.Exception.Message)
  }
  return $false
}

function Ensure-Tunnel {
  $url = Get-TunnelUrl
  $needsRecover = $true
  if ($url) {
    $h = Test-Url -Url ($url + "/health") -TimeoutSec 10
    if ($h.ok) { $needsRecover = $false }
  }

  if ($needsRecover) {
    Write-Log "Tunel KO. Recuperando cloudflare tunnel..."
    try {
      $recoverProc = Start-Process -FilePath "powershell.exe" -ArgumentList @("-NoProfile", "-ExecutionPolicy", "Bypass", "-File", $recoverScript, "-LocalPort", "8080") -WindowStyle Hidden -PassThru -Wait
      if ($recoverProc.ExitCode -ne 0) {
        throw "recover_hybrid_tunnel.ps1 devolvio ExitCode=$($recoverProc.ExitCode)"
      }
      Start-Sleep -Seconds 2
      $url = Get-TunnelUrl
      if (-not $url) { return "" }
      $h2 = Test-Url -Url ($url + "/health") -TimeoutSec 12
      if (-not $h2.ok) { return "" }
      Write-Log ("Tunel recuperado: " + $url)
      return $url
    } catch {
      Write-Log ("ERROR recuperando tunel: " + $_.Exception.Message)
      return ""
    }
  }
  return $url
}

function Run-Simulation {
  param([string]$ApiUrl)
  try {
    $query = "Busca informacion de contacto publico en la web de profesionales de la industria musical en Espana. Filtra por perfiles clave: periodistas musicales, criticos, redactores, locutores de radio, directores de management/booking, promotores, A&R y organizadores de festivales. El objetivo es extraer direcciones de correo electronico profesionales validas de personas fisicas para invitarlos a la presentacion del nuevo disco de la banda Linze en la Sala Villanos el 11 de abril de 2026. Prioriza perfiles afines al indie y rock y evita emails genericos tipo info@ o contacto@."
    $payload = @{
      query = $query
      scope = "NACIONAL_ES"
      targetCount = 30
      strict = @{
        requireEmail = $true
        requirePhone = $false
        requireName = $true
        requireCompany = $true
      }
      options = @{
        allowPhoneCollection = $false
        disallowGenericMailboxEmails = $true
        disallowRoleMailboxEmails = $true
      }
      metadata = @{
        profile = "CALIDAD_MAXIMA"
        localModelProfile = "investigacion"
        staleRounds = 0
        step = 1
      }
    } | ConvertTo-Json -Depth 10

    $res = Invoke-RestMethod -Method Post -Uri $ApiUrl -ContentType "application/json" -Body $payload -TimeoutSec 140
    $meta = $res.meta
    $contacts = if ($meta) { [int]$meta.contacts } else { 0 }
    $sources = if ($meta) { [int]$meta.sourceLinks } else { 0 }
    $pages = if ($meta) { [int]$meta.pagesFetched } else { 0 }
    $expanded = if ($meta) { [int]$meta.expandedPagesFetched } else { 0 }
    $model = if ($meta) { [string]$meta.ollamaModelUsed } else { "" }
    $timeout = if ($meta) { [string]$meta.timedOutByBudget } else { "n/a" }
    Write-Log ("SIM ok | contacts=$contacts | sources=$sources | pages=$pages | expanded=$expanded | model=$model | timeout=$timeout")
    return $true
  } catch {
    Write-Log ("SIM error | " + $_.Exception.Message)
    return $false
  }
}

if ((Get-Date) -ge $Until) {
  Write-Host "La hora objetivo ya paso para hoy. Fin."
  exit 0
}

Write-Log "INICIO AUDITORIA CONTINUA HASTA 18:00"
Write-Log ("Until=" + $Until.ToString("yyyy-MM-dd HH:mm:ss") + " | IntervalMinutes=$IntervalMinutes")

$inspect = Test-Url -Url ($WebAppExec + "?action=inspect_sheet_full") -TimeoutSec 30
if ($inspect.ok) {
  try {
    $sheetCount = [int]$inspect.body.sheetCount
    Write-Log "Inspeccion hoja OK | sheets=$sheetCount"
  } catch {
    Write-Log "Inspeccion hoja OK"
  }
} else {
  Write-Log ("Inspeccion hoja KO | " + $inspect.error)
}

$iter = 0
while ((Get-Date) -lt $Until) {
  $iter += 1
  Write-Log ("CICLO " + $iter + " START")

  $serviceOk = Ensure-LocalService
  if (-not $serviceOk) {
    Write-Log "Servicio local no disponible tras recuperacion."
  }

  $tunnelUrl = Ensure-Tunnel
  if (-not $tunnelUrl) {
    Write-Log "Tunel no disponible. Se reintentara en siguiente ciclo."
  } else {
    [void](Set-ConfiguredEndpointAndDeploy -EndpointUrl $tunnelUrl)
    $hy = Test-Url -Url ($WebAppExec + "?action=hybrid_test") -TimeoutSec 35
    if ($hy.ok) {
      try {
        Write-Log ("Hybrid test OK | statusCode=" + [string]$hy.body.statusCode + " | endpoint=" + [string]$hy.body.endpoint)
      } catch {
        Write-Log "Hybrid test OK"
      }
    } else {
      Write-Log ("Hybrid test KO | " + $hy.error)
    }
    [void](Run-Simulation -ApiUrl ($tunnelUrl + "/api/search"))
  }

  $st = Test-Url -Url ($WebAppExec + "?action=active_job_status") -TimeoutSec 25
  if ($st.ok) {
    try {
      Write-Log ("Job status | exists=" + [string]$st.body.exists)
    } catch {
      Write-Log "Job status leido"
    }
  } else {
    Write-Log ("Job status KO | " + $st.error)
  }

  Write-Log ("CICLO " + $iter + " END")

  $remaining = ($Until - (Get-Date)).TotalMinutes
  if ($remaining -le 0) { break }
  $sleepMinutes = [Math]::Min([Math]::Max(1, $IntervalMinutes), [Math]::Ceiling($remaining))
  Start-Sleep -Seconds ([int]($sleepMinutes * 60))
}

Write-Log "FIN AUDITORIA CONTINUA HASTA 18:00"

