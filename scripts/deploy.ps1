param(
  [string]$VersionDescription = "deploy busca contactos booking",
  [string]$DeploymentDescription = "webapp deploy busca contactos booking",
  [string]$DeploymentId = "",
  [string]$ClaspUser = "default"
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

Write-Output "CLASP_VERSION..."
& $clasp -u $ClaspUser -P $projectPath version $VersionDescription
if ($LASTEXITCODE -ne 0) {
  throw "Fallo clasp version"
}

Write-Output "CLASP_DEPLOY..."
if ([string]::IsNullOrWhiteSpace($DeploymentId)) {
  & $clasp -u $ClaspUser -P $projectPath deploy --description $DeploymentDescription
} else {
  & $clasp -u $ClaspUser -P $projectPath deploy --deploymentId $DeploymentId --description $DeploymentDescription
}
if ($LASTEXITCODE -ne 0) {
  throw "Fallo clasp deploy"
}

Write-Output "DEPLOY_OK"
