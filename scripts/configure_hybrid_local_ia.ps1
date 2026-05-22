param(
  [Parameter(Mandatory = $true)]
  [string]$Endpoint,

  [Parameter(Mandatory = $false)]
  [string]$Token = "",

  [Parameter(Mandatory = $false)]
  [string]$ClaspUser = "default"
)

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Configurando BUSCA-CONTACTOS para IA local remota..." -ForegroundColor Cyan
$configureProc = Start-Process -FilePath "powershell.exe" `
  -ArgumentList @(
    "-NoProfile",
    "-ExecutionPolicy", "Bypass",
    "-File", (Join-Path $scriptDir "configure_hybrid_remote.ps1"),
    "-Endpoint", $Endpoint,
    "-Token", $Token,
    "-Enabled", "true",
    "-ClaspUser", $ClaspUser
  ) `
  -WindowStyle Hidden `
  -PassThru `
  -Wait

if ($configureProc.ExitCode -ne 0) {
  throw "configure_hybrid_remote.ps1 devolvio ExitCode=$($configureProc.ExitCode)"
}

Write-Host "Listo. Gemini queda apagado por defecto y el motor principal es el endpoint de IA local." -ForegroundColor Green
