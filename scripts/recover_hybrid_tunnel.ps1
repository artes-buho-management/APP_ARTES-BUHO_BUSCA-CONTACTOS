param(
  [Parameter(Mandatory = $false)]
  [int]$LocalPort = 8080,

  [Parameter(Mandatory = $false)]
  [string]$Token = "",

  [Parameter(Mandatory = $false)]
  [switch]$AutoConfigure,

  [Parameter(Mandatory = $false)]
  [string]$ClaspUser = "default"
)

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$serviceDir = Join-Path $projectRoot "selenium_remote_service"
$stderrLog = Join-Path $serviceDir "cloudflared_stderr.log"
$stdoutLog = Join-Path $serviceDir "cloudflared_stdout.log"

if (-not (Test-Path $serviceDir)) {
  New-Item -ItemType Directory -Path $serviceDir | Out-Null
}

Write-Host "Parando cloudflared previo (si existe)..." -ForegroundColor Cyan
Get-Process -Name cloudflared -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Start-Sleep -Seconds 1
if (Test-Path $stderrLog) { Remove-Item $stderrLog -Force -ErrorAction SilentlyContinue }
if (Test-Path $stdoutLog) { Remove-Item $stdoutLog -Force -ErrorAction SilentlyContinue }

$cloudflared = (Get-Command cloudflared -ErrorAction SilentlyContinue).Source
if (-not $cloudflared) {
  throw "No encuentro cloudflared en PATH. Instala cloudflared y vuelve a ejecutar."
}

$origin = "http://127.0.0.1:$LocalPort"
Write-Host "Levantando tunel: $origin" -ForegroundColor Cyan
Start-Process -FilePath $cloudflared `
  -ArgumentList @("tunnel", "--url", $origin, "--no-autoupdate") `
  -RedirectStandardOutput $stdoutLog `
  -RedirectStandardError $stderrLog `
  -WindowStyle Hidden | Out-Null

$url = ""
for ($i = 0; $i -lt 30; $i++) {
  Start-Sleep -Milliseconds 700
  if (-not (Test-Path $stderrLog)) { continue }
  $line = Select-String -Path $stderrLog -Pattern "https://[a-z0-9-]+\.trycloudflare\.com" -AllMatches -ErrorAction SilentlyContinue |
    Select-Object -Last 1
  if ($line -and $line.Matches.Count -gt 0) {
    $url = $line.Matches[0].Value
    break
  }
}

if (-not $url) {
  throw "No pude obtener URL publica del tunel. Revisa $stderrLog."
}

$endpoint = "$url/api/search"
$health = "$url/health"

Write-Host "Tunel OK" -ForegroundColor Green
Write-Host "Health : $health"
Write-Host "API    : $endpoint"

try {
  $resp = Invoke-WebRequest -UseBasicParsing -Uri $health -TimeoutSec 15
  Write-Host "Health status code: $($resp.StatusCode)" -ForegroundColor Green
} catch {
  Write-Warning "Health remoto no responde aun: $($_.Exception.Message)"
}

if ($AutoConfigure.IsPresent) {
  $configureScript = Join-Path $PSScriptRoot "configure_hybrid_remote.ps1"
  if (-not (Test-Path $configureScript)) {
    throw "No existe $configureScript"
  }
  Write-Host "Aplicando endpoint en Apps Script..." -ForegroundColor Cyan
  $configureProc = Start-Process -FilePath "powershell.exe" `
    -ArgumentList @(
      "-NoProfile",
      "-ExecutionPolicy", "Bypass",
      "-File", $configureScript,
      "-Endpoint", $endpoint,
      "-Token", $Token,
      "-ClaspUser", $ClaspUser
    ) `
    -WindowStyle Hidden `
    -PassThru `
    -Wait

  if ($configureProc.ExitCode -ne 0) {
    throw "configure_hybrid_remote.ps1 devolvio ExitCode=$($configureProc.ExitCode)"
  }
}
