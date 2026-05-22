param(
  [string]$ClaspUser = "default",
  [switch]$Force
)

$ErrorActionPreference = "Stop"

$clasp = "C:\Users\elrub\AppData\Roaming\npm\clasp.cmd"
if (-not (Test-Path -LiteralPath $clasp)) {
  throw "No se encontro clasp.cmd en: $clasp"
}

$projectPath = (Get-Location).Path
if (-not (Test-Path -LiteralPath ".clasp.json")) {
  throw "No existe .clasp.json. Ejecuta primero scripts/bind_sheet.ps1"
}

$args = @("-u", $ClaspUser, "-P", $projectPath, "push")
if ($Force) { $args += "-f" }

Write-Output "CLASP_PUSH..."
& $clasp @args
if ($LASTEXITCODE -ne 0) {
  throw "Fallo clasp push"
}

Write-Output "PUSH_OK"
