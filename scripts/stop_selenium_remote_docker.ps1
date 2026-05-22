$ErrorActionPreference = "Stop"

$serviceDir = Join-Path (Split-Path -Parent $PSScriptRoot) "selenium_remote_service"
if (-not (Test-Path $serviceDir)) {
  throw "No existe la carpeta: $serviceDir"
}

Set-Location $serviceDir
Write-Host "Parando Selenium remoto en Docker..." -ForegroundColor Yellow
docker compose down
Write-Host "Servicio parado." -ForegroundColor Green
