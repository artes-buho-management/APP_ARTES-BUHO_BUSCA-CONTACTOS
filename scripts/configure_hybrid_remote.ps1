param(
  [Parameter(Mandatory = $true)]
  [string]$Endpoint,

  [Parameter(Mandatory = $false)]
  [string]$Token = "",

  [Parameter(Mandatory = $false)]
  [bool]$Enabled = $true,

  [Parameter(Mandatory = $false)]
  [string]$ClaspUser = "default"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
$clasp = "C:\Users\elrub\AppData\Roaming\npm\clasp.cmd"

if (-not (Test-Path $clasp)) {
  throw "No se encontro clasp en: $clasp"
}

$arg = @{
  endpoint = $Endpoint
  token    = $Token
  enabled  = $Enabled
}

$paramsJson = "[" + ($arg | ConvertTo-Json -Compress) + "]"

Write-Host "Configurando endpoint hibrido remoto..." -ForegroundColor Cyan
& $clasp -u $ClaspUser run setHybridScraperConfig --params $paramsJson

Write-Host "Leyendo estado hibrido..." -ForegroundColor Cyan
& $clasp -u $ClaspUser run getHybridScraperConfigStatus

Write-Host "Probando health del endpoint..." -ForegroundColor Cyan
& $clasp -u $ClaspUser run testHybridRemoteSelenium

Write-Host "Listo." -ForegroundColor Green
