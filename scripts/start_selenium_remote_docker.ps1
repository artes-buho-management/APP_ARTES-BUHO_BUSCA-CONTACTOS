param(
  [Parameter(Mandatory = $false)]
  [string]$ApiToken = ""
)

$ErrorActionPreference = "Stop"

$serviceDir = Join-Path (Split-Path -Parent $PSScriptRoot) "selenium_remote_service"
if (-not (Test-Path $serviceDir)) {
  throw "No existe la carpeta: $serviceDir"
}

Set-Location $serviceDir
$env:API_TOKEN = $ApiToken

Write-Host "Levantando Selenium remoto en Docker..." -ForegroundColor Cyan
docker compose up -d --build

Write-Host "Servicio arriba. Health local: http://localhost:8080/health" -ForegroundColor Green
