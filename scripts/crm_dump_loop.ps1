param(
  [int]$DurationHours = 8,
  [int]$SleepSeconds = 45
)

$ErrorActionPreference = "Continue"

$base = "https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec"
$deadline = (Get-Date).AddHours([Math]::Max(1, $DurationHours))
$logPath = "C:\Users\elrub\Desktop\CARPETA CODEX\01_PROYECTOS\busca-contactos-booking-gas\reports\crm_dump_loop.log"

$plans = @(
  @{sheet='RELEVANTES INDIE'; q='Espana industria musical indie periodistas promotores productores discograficas influencers emails directos profesionales'; target=60},
  @{sheet='PRELEVANTES POP'; q='Espana industria musical pop periodistas promotores productores discograficas influencers emails directos profesionales'; target=60},
  @{sheet='RELEVANTES ROCK'; q='Espana industria musical rock periodistas promotores productores discograficas influencers emails directos profesionales'; target=60},
  @{sheet='RELEVANTES MUSICA CLASICA'; q='Espana industria musical clasica periodistas promotores productores programadores discograficas emails directos profesionales'; target=60},
  @{sheet='RELEVANTES MUSICA REGIONAL'; q='Espana industria musical regional periodistas promotores productores discograficas influencers emails directos profesionales'; target=60},
  @{sheet='RELEVANTES FLAMENCO'; q='Espana flamenco industria musical tablaos festivales managers booking periodistas productores emails directos profesionales'; target=60},
  @{sheet='RELEVANTES RUMBA'; q='Espana industria musical rumba periodistas promotores productores discograficas representantes emails directos profesionales'; target=60},
  @{sheet='RELEVANTES ELECTRONICO'; q='Espana industria musical electronica periodistas promotores productores labels djs agencias emails directos profesionales'; target=60}
)

function Write-Log {
  param([string]$Message)
  $stamp = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
  Add-Content -Path $logPath -Value "[$stamp] $Message" -Encoding UTF8
}

Write-Log "INICIO crm_dump_loop"

$cycle = 0
while ((Get-Date) -lt $deadline) {
  $cycle += 1
  Write-Log "CICLO $cycle START"

  foreach ($p in $plans) {
    $sheet = [uri]::EscapeDataString([string]$p.sheet)
    $q = [uri]::EscapeDataString([string]$p.q)
    $url = "${base}?action=crm_dump&sheet=$sheet&targetCount=$($p.target)&profile=CALIDAD_MAXIMA&query=$q"
    try {
      $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 300
      $obj = $resp.Content | ConvertFrom-Json
      Write-Log ("sheet=" + $obj.sheet + " requested=" + $obj.requested + " candidates=" + $obj.candidatesReceived + " appended=" + $obj.appended)
    } catch {
      Write-Log ("sheet=" + $p.sheet + " ERROR=" + $_.Exception.Message)
    }
  }

  try {
    $inspect = Invoke-WebRequest -Uri ("${base}?action=inspect_sheet_full") -UseBasicParsing -TimeoutSec 240
    $data = $inspect.Content | ConvertFrom-Json
    $allDone = $true
    foreach ($s in $data.sheets) {
      $usedRows = [int]$s.usedRows
      Write-Log ("estado " + $s.name + " usedRows=" + $usedRows)
      if ($usedRows -lt 3001) {
        $allDone = $false
      }
    }
    if ($allDone) {
      Write-Log "OBJETIVO 3000+ ALCANZADO EN TODAS LAS PESTANAS"
      break
    }
  } catch {
    Write-Log ("ERROR inspeccion: " + $_.Exception.Message)
  }

  Write-Log "CICLO $cycle END"
  Start-Sleep -Seconds ([Math]::Max(20, $SleepSeconds))
}

Write-Log "FIN crm_dump_loop"
