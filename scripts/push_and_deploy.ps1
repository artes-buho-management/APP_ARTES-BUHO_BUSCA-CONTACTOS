param(
  [string]$VersionDescription = "initial deploy - busca contactos booking",
  [string]$DeploymentDescription = "webapp deploy busca contactos booking",
  [string]$DeploymentId = "",
  [string]$ClaspUser = "default",
  [switch]$SkipDeployOnVersionLimit = $true
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

Write-Output "CLASP_PUSH..."
& $clasp -u $ClaspUser -P $projectPath push -f
if ($LASTEXITCODE -ne 0) {
  throw "Fallo clasp push"
}

Write-Output "CLASP_VERSION..."
$versionOutput = @()
$versionExit = 0
try {
  $versionOutput = & $clasp -u $ClaspUser -P $projectPath version $VersionDescription 2>&1
  $versionExit = $LASTEXITCODE
} catch {
  $versionExit = 1
  $versionOutput = @($_.ToString())
}
if ($versionOutput) {
  $versionOutput | ForEach-Object { Write-Output $_ }
}
if ($versionExit -ne 0) {
  $versionText = ($versionOutput | Out-String)
  $isVersionLimit = $versionText -match "reached the limit of 200 versions"
  if ($SkipDeployOnVersionLimit -and $isVersionLimit) {
    Write-Warning "Limite de versiones alcanzado en Apps Script (200)."
    Write-Warning "El push del codigo SI se aplico, pero se omite deploy versionado."
    Write-Output "DEPLOY_SKIP_VERSION_LIMIT"
    exit 0
  }
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
