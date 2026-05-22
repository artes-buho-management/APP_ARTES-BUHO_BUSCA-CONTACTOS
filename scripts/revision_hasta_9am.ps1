param(
  [datetime]$Until = [datetime]::Today.AddHours(9),
  [int]$IntervalMinutes = 20,
  [string]$LocalEndpoint = "http://127.0.0.1:8080/api/search",
  [string]$CloudflareHealth = "https://guided-studios-planner-pubs.trycloudflare.com/health",
  [string]$LogFile = "C:\Users\elrub\Desktop\CARPETA CODEX\04_TEMPORAL\revision_hasta_9am.log"
)

$ErrorActionPreference = "Continue"

if ((Get-Date) -ge $Until) {
  Write-Host "La hora objetivo ya paso para hoy. Fin."
  exit 0
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$iaRoot = Join-Path (Split-Path -Parent $repoRoot) "IA-RUBEN-COTON"
$query = "Busca informacion de contacto publico en la web de profesionales de la industria musical en Espana. Filtra por perfiles clave: periodistas musicales, criticos, redactores, locutores de radio, directores de management/booking, promotores, A&R y organizadores de festivales. El objetivo es extraer direcciones de correo electronico profesionales validas de personas fisicas. Prioriza perfiles afines al indie y rock y evita emails genericos tipo info@ o contacto@."

function Write-Log {
  param([string]$Message)
  $stamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  $line = "[$stamp] $Message"
  Add-Content -Path $LogFile -Value $line
  Write-Host $line
}

function Test-Health {
  param([string]$Url, [int]$TimeoutSec = 12)
  try {
    $resp = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec $TimeoutSec
    return "OK " + [string]$resp.StatusCode
  } catch {
    return "ERROR " + $_.Exception.Message
  }
}

function Test-LocalSearch {
  param([string]$Endpoint, [int]$TimeoutSec = 120)
  try {
    $payload = @{
      query = $query
      scope = "NACIONAL_ES"
      targetCount = 8
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
        maxSeconds = 30
      }
    } | ConvertTo-Json -Depth 10

    $res = Invoke-RestMethod -Method Post -Uri $Endpoint -ContentType "application/json" -Body $payload -TimeoutSec $TimeoutSec
    $contacts = @($res.contacts).Count
    $diag = $res.meta.diagnostics
    $mismatch = if ($diag) { [int]$diag.rows_dropped_name_email_mismatch } else { -1 }
    $scanned = if ($diag) { [int]$diag.pages_scanned } else { -1 }
    return "OK contacts=$contacts pages_scanned=$scanned dropped_name_email_mismatch=$mismatch"
  } catch {
    return "ERROR " + $_.Exception.Message
  }
}

function Test-GasRegression {
  try {
    Push-Location $repoRoot
    $out = & node --test tests\regression.test.js 2>&1
    $code = $LASTEXITCODE
    Pop-Location
    if ($code -eq 0) {
      return "OK"
    }
    return "ERROR exit=$code output=" + (($out | Select-Object -Last 5) -join " | ")
  } catch {
    try { Pop-Location } catch {}
    return "ERROR " + $_.Exception.Message
  }
}

function Test-IaUnit {
  try {
    Push-Location $iaRoot
    $out = & python -m pytest tests\unit -q 2>&1
    $code = $LASTEXITCODE
    Pop-Location
    if ($code -eq 0) {
      return "OK"
    }
    return "ERROR exit=$code output=" + (($out | Select-Object -Last 5) -join " | ")
  } catch {
    try { Pop-Location } catch {}
    return "ERROR " + $_.Exception.Message
  }
}

$iter = 0
Write-Log "INICIO REVISION HASTA 09:00"
Write-Log "Until=$($Until.ToString('yyyy-MM-dd HH:mm:ss')) | IntervalMinutes=$IntervalMinutes"

while ((Get-Date) -lt $Until) {
  $iter += 1
  Write-Log "CICLO ${iter}: START"
  Write-Log ("Health local: " + (Test-Health -Url "http://127.0.0.1:8080/health"))
  Write-Log ("Health cloudflare: " + (Test-Health -Url $CloudflareHealth))
  Write-Log ("Search local sample: " + (Test-LocalSearch -Endpoint $LocalEndpoint))
  Write-Log ("Test GAS regression: " + (Test-GasRegression))
  Write-Log ("Test IA unit: " + (Test-IaUnit))
  Write-Log "CICLO ${iter}: END"

  $remaining = ($Until - (Get-Date)).TotalMinutes
  if ($remaining -le 0) { break }
  $sleepMinutes = [Math]::Min([Math]::Max(1, $IntervalMinutes), [Math]::Ceiling($remaining))
  Start-Sleep -Seconds ([int]($sleepMinutes * 60))
}

Write-Log "FIN REVISION HASTA 09:00"
