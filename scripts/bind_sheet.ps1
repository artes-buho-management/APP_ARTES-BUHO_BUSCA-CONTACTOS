param(
  [string]$SpreadsheetId = "REPLACE_WITH_ID",
  [string]$ProjectTitle = "busca-contactos-booking-bound",
  [string]$ClaspRcPath = "C:\Users\elrub\.clasprc.json",
  [string]$TokenProfile = "default"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $ClaspRcPath)) {
  throw "No existe .clasprc: $ClaspRcPath"
}

$cfg = Get-Content -LiteralPath $ClaspRcPath -Raw | ConvertFrom-Json
$tok = $cfg.tokens.$TokenProfile
if (-not $tok) {
  throw "No existe perfil en .clasprc: $TokenProfile"
}

$tokenResp = Invoke-RestMethod -Method Post -Uri "https://oauth2.googleapis.com/token" -Body @{
  client_id = $tok.client_id
  client_secret = $tok.client_secret
  refresh_token = $tok.refresh_token
  grant_type = "refresh_token"
}

$accessToken = [string]$tokenResp.access_token
if ([string]::IsNullOrWhiteSpace($accessToken)) {
  throw "No se pudo obtener access_token"
}

$headers = @{ Authorization = "Bearer $accessToken" }
$body = @{
  title = $ProjectTitle
  parentId = $SpreadsheetId
} | ConvertTo-Json -Depth 6

Write-Output "CREANDO_PROYECTO_BOUND_EN_HOJA_EXISTENTE..."
$create = Invoke-RestMethod -Method Post -Uri "https://script.googleapis.com/v1/projects" -Headers $headers -ContentType "application/json; charset=utf-8" -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
$scriptId = [string]$create.scriptId

if ([string]::IsNullOrWhiteSpace($scriptId)) {
  throw "No se obtuvo scriptId al crear el proyecto"
}

$claspObj = [ordered]@{
  scriptId = $scriptId
  rootDir = ""
  scriptExtensions = @(".js", ".gs")
  htmlExtensions = @(".html")
  jsonExtensions = @(".json")
  filePushOrder = @()
  skipSubdirectories = $false
}
$claspObj | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath ".clasp.json" -Encoding UTF8

Write-Output ("BIND_OK scriptId=" + $scriptId)
Write-Output ("SCRIPT_URL=https://script.google.com/d/" + $scriptId + "/edit")
