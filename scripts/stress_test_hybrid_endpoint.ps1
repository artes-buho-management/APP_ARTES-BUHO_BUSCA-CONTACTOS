param(
  [string]$Endpoint = "http://127.0.0.1:8080/api/search",
  [string]$Token = "",
  [int]$Iterations = 5,
  [int]$PauseSeconds = 2,
  [int]$TargetCount = 10,
  [int]$MaxSeconds = 35,
  [string]$Query = "periodistas musica indie espana email directo",
  [string]$Scope = "NACIONAL_ES",
  [string]$Profile = "CALIDAD_MAXIMA",
  [string]$OutputJson = ""
)

$ErrorActionPreference = "Stop"

$runs = @()
$ok = 0
$err = 0

for ($i = 1; $i -le [Math]::Max(1, $Iterations); $i++) {
  $headers = @{}
  if ($Token) {
    $headers["Authorization"] = "Bearer $Token"
  }

  $payload = @{
    query = $Query
    scope = $Scope
    targetCount = [Math]::Max(1, $TargetCount)
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
      profile = $Profile
      localModelProfile = "investigacion"
      staleRounds = 0
      maxSeconds = [Math]::Max(15, $MaxSeconds)
    }
  } | ConvertTo-Json -Depth 8

  $t0 = Get-Date
  try {
    $res = Invoke-RestMethod -Method Post -Uri $Endpoint -Headers $headers -ContentType "application/json" -Body $payload -TimeoutSec 180
    $elapsed = ((Get-Date) - $t0).TotalSeconds
    $contacts = 0
    if ($res -and $res.contacts) {
      $contacts = @($res.contacts).Count
    }
    $meta = $res.meta
    $ok += 1
    Write-Host ("[{0}/{1}] OK | {2:N2}s | contactos={3} | sources={4} | pages={5} | timeout={6}" -f $i, $Iterations, $elapsed, $contacts, $meta.sourceLinks, $meta.pagesFetched, $meta.timedOutByBudget) -ForegroundColor Green
    $runs += [PSCustomObject]@{
      iteration = $i
      ok = $true
      elapsed_s = [Math]::Round($elapsed, 3)
      contacts = $contacts
      sourceLinks = [int]($meta.sourceLinks)
      pagesFetched = [int]($meta.pagesFetched)
      expandedPagesFetched = [int]($meta.expandedPagesFetched)
      timedOutByBudget = [bool]($meta.timedOutByBudget)
      diagnostics = $meta.diagnostics
    }
  } catch {
    $elapsed = ((Get-Date) - $t0).TotalSeconds
    $err += 1
    $msg = $_.Exception.Message
    Write-Host ("[{0}/{1}] ERROR | {2:N2}s | {3}" -f $i, $Iterations, $elapsed, $msg) -ForegroundColor Red
    $runs += [PSCustomObject]@{
      iteration = $i
      ok = $false
      elapsed_s = [Math]::Round($elapsed, 3)
      error = $msg
    }
  }

  if ($i -lt $Iterations) {
    Start-Sleep -Seconds ([Math]::Max(0, $PauseSeconds))
  }
}

$okRuns = @($runs | Where-Object { $_.ok -eq $true })
$summary = [PSCustomObject]@{
  generatedAt = (Get-Date).ToString("o")
  endpoint = $Endpoint
  iterations = $Iterations
  success = $ok
  failed = $err
  avgElapsedSuccess = if ($okRuns.Count -gt 0) { [Math]::Round((($okRuns | Measure-Object -Property elapsed_s -Average).Average), 3) } else { 0 }
  avgContactsSuccess = if ($okRuns.Count -gt 0) { [Math]::Round((($okRuns | Measure-Object -Property contacts -Average).Average), 3) } else { 0 }
  runs = $runs
}

Write-Host ""
Write-Host "=== RESUMEN STRESS TEST ===" -ForegroundColor Cyan
Write-Host ("Endpoint: {0}" -f $summary.endpoint)
Write-Host ("Exitos: {0} | Fallos: {1}" -f $summary.success, $summary.failed)
Write-Host ("Media tiempo (OK): {0}s" -f $summary.avgElapsedSuccess)
Write-Host ("Media contactos (OK): {0}" -f $summary.avgContactsSuccess)

if ($OutputJson) {
  $outPath = [System.IO.Path]::GetFullPath($OutputJson)
  $outDir = Split-Path -Parent $outPath
  if ($outDir -and -not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
  }
  ($summary | ConvertTo-Json -Depth 10) | Out-File -Encoding UTF8 -FilePath $outPath
  Write-Host ("Reporte JSON: {0}" -f $outPath) -ForegroundColor Yellow
}
