param(
  [string]$Endpoint = "http://127.0.0.1:8080/api/search",
  [string]$Token = "",
  [string]$Query = "periodistas musica indie espana email directo",
  [string]$Scope = "NACIONAL_ES",
  [string]$Profile = "CALIDAD_MAXIMA",
  [int]$TargetCount = 30,
  [int]$MaxSeconds = 60,
  [int]$IntervalSeconds = 45,
  [int]$Loops = 0,
  [string]$LogFile = "C:\Users\elrub\Desktop\CARPETA CODEX\04_TEMPORAL\monitor_hibrido_continuo.log"
)

$ErrorActionPreference = "Stop"

function New-RequestPayload {
  param(
    [string]$Prompt,
    [string]$ScopeCode,
    [int]$Target,
    [string]$ProfileKey,
    [int]$BudgetSeconds
  )
  return @{
    query = $Prompt
    scope = $ScopeCode
    targetCount = [Math]::Max(1, $Target)
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
      profile = $ProfileKey
      localModelProfile = "investigacion"
      staleRounds = 0
      maxSeconds = [Math]::Max(15, $BudgetSeconds)
    }
  } | ConvertTo-Json -Depth 8
}

function Write-LogLine {
  param(
    [string]$Path,
    [string]$Text
  )
  $dir = Split-Path -Parent $Path
  if ($dir -and -not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
  }
  $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Text
  Add-Content -Path $Path -Value $line -Encoding UTF8
  Write-Host $line
}

$headers = @{}
if ($Token) {
  $headers["Authorization"] = "Bearer $Token"
}

$iteration = 0
$ok = 0
$fail = 0

Write-LogLine -Path $LogFile -Text ("Monitor iniciado | endpoint={0} | profile={1} | loops={2} | interval={3}s" -f $Endpoint, $Profile, $Loops, $IntervalSeconds)

while ($true) {
  $iteration += 1
  $payload = New-RequestPayload -Prompt $Query -ScopeCode $Scope -Target $TargetCount -ProfileKey $Profile -BudgetSeconds $MaxSeconds
  $t0 = Get-Date
  try {
    $res = Invoke-RestMethod -Method Post -Uri $Endpoint -Headers $headers -ContentType "application/json" -Body $payload -TimeoutSec ([Math]::Max(120, $MaxSeconds + 60))
    $elapsed = ((Get-Date) - $t0).TotalSeconds
    $contacts = if ($res -and $res.contacts) { @($res.contacts).Count } else { 0 }
    $ok += 1
    $msg = "OK iter=$iteration elapsed={0:N2}s contactos={1} sources={2} pages={3} timeout={4}" -f $elapsed, $contacts, $res.meta.sourceLinks, $res.meta.pagesFetched, $res.meta.timedOutByBudget
    Write-LogLine -Path $LogFile -Text $msg
  } catch {
    $elapsed = ((Get-Date) - $t0).TotalSeconds
    $fail += 1
    $msg = "ERROR iter=$iteration elapsed={0:N2}s detalle={1}" -f $elapsed, $_.Exception.Message
    Write-LogLine -Path $LogFile -Text $msg
  }

  if ($Loops -gt 0 -and $iteration -ge $Loops) {
    break
  }

  Start-Sleep -Seconds ([Math]::Max(5, $IntervalSeconds))
}

Write-LogLine -Path $LogFile -Text ("Monitor finalizado | iteraciones={0} | ok={1} | errores={2}" -f $iteration, $ok, $fail)
