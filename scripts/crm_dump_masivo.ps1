param(
  [int]$DurationHours = 24,
  [int]$SleepSeconds = 20,
  [int]$BurstPerSheet = 4,
  [int]$TargetRows = 3001,
  [int]$TargetCountPerCall = 400,
  [string]$OnlySheet = "",
  [string]$ExcludeDomainsCsv = "",
  [string]$DeployId = "AKfycbwrSBQ2kqEffaGHPxkGkwia0kHEYtMeb4yS-sz1HuzZ",
  [switch]$EnableBooster,
  [switch]$DryRun
)

$ErrorActionPreference = "Continue"

$deployId = [string]$DeployId
$baseUrl = "https://script.google.com/macros/s/$deployId/exec"

$rootDir = Split-Path -Parent $PSScriptRoot
$reportsDir = Join-Path $rootDir "reports"
if (-not (Test-Path -LiteralPath $reportsDir)) {
  New-Item -ItemType Directory -Path $reportsDir | Out-Null
}
$logPath = Join-Path $reportsDir "crm_dump_masivo.log"
$countsPath = Join-Path $reportsDir "crm_dump_masivo_counts.json"
$queryStatePath = Join-Path $reportsDir "query_state.json"
$script:lastRowMapCache = @{}
$cleanupEveryCycles = 4
$defaultExcludeDomains = @()

$plans = @(
  @{ sheet = "CONTACTOS_WEB"; entities = @("medios", "radios", "revistas", "festivales", "salas", "clubs", "promotoras", "management", "booking", "discograficas") },
  @{ sheet = "PRELEVANTES POP"; entities = @("medios", "radios", "revistas", "festivales", "salas", "clubs", "promotoras", "management", "booking", "discograficas") },
  @{ sheet = "RELEVANTES ROCK"; entities = @("medios", "radios", "revistas", "festivales", "salas", "clubs", "promotoras", "management", "booking", "discograficas") },
  @{ sheet = "RELEVANTES MUSICA CLASICA"; entities = @("orquestas", "auditorios", "ciclos", "festivales", "agencias artisticas", "prensa cultural") },
  @{ sheet = "RELEVANTES MUSICA REGIONAL"; entities = @("festivales folk", "entidades culturales", "medios regionales", "promotoras locales") },
  @{ sheet = "RELEVANTES FLAMENCO"; entities = @("tablaos", "penas", "festivales", "promotoras", "medios especializados") },
  @{ sheet = "RELEVANTES RUMBA"; entities = @("promotoras", "festivales", "salas", "medios", "management") },
  @{ sheet = "RELEVANTES ELECTRONICO"; entities = @("medios", "radios", "revistas", "festivales", "salas", "clubs", "promotoras", "management", "booking", "discograficas") }
)

$functionsList = @(
  "PRENSA",
  "COMUNICACION",
  "BOOKING",
  "CONTRATACION",
  "PROGRAMACION",
  "MANAGEMENT",
  "REDACCION",
  "PRODUCCION"
)

$provinces = @(
  "Madrid", "Barcelona", "Valencia", "Sevilla", "Malaga", "Bilbao", "Zaragoza",
  "Murcia", "Granada", "Vigo", "A Coruna", "Alicante", "Santander", "Valladolid",
  "Cordoba", "Cadiz", "Salamanca", "Oviedo", "Pamplona", "Burgos",
  "Albacete", "Almeria", "Avila", "Badajoz", "Caceres", "Castellon", "Ciudad Real",
  "Cuenca", "Girona", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaen",
  "La Rioja", "Leon", "Lleida", "Lugo", "Ourense", "Palencia", "Pontevedra",
  "Segovia", "Soria", "Tarragona", "Teruel", "Toledo", "Zamora", "Ceuta", "Melilla"
)
$coreProvinces = @("Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Malaga", "Zaragoza", "Alicante", "Murcia", "A Coruna", "Valladolid", "Granada")

$queryModes = @(
  "LINKEDIN_EMAIL_DIRECT",
  "DIRECT_EMAIL",
  "CONTACT_PAGE",
  "ROLE_MAILBOX",
  "PRESS_KIT",
  "TEAM_CONTACT",
  "SITE_ES_DIRECT",
  "ROLE_TITLE"
)

$brandSeeds = @{
  "CONTACTOS_WEB" = @("MondoSonoro", "Muzikalia", "Jenesaispop", "Ruta 66", "Subterfuge", "Sonido Muchacho", "Intromusica", "Binaural", "Indiespot", "Efe Eme")
  "PRELEVANTES POP" = @("Los40", "Cadena 100", "Europa FM", "Dial", "FormulaTV Musica", "Warner Music Spain", "Sony Music Spain", "Universal Music Spain", "M2Music Group", "Must Producciones")
  "RELEVANTES ROCK" = @("MariskalRock", "RockFM", "Rafabasa", "RockZone", "Metal Journal", "The Fish Factory", "Rock Estatal", "Madness Live", "Route Resurrection", "Last Tour")
  "RELEVANTES MUSICA CLASICA" = @("Teatro Real", "Auditorio Nacional", "Fundacion Juan March", "Scherzo", "Ritmo", "Codalario", "Orquesta y Coro RTVE", "Ibermusica", "Fundacion Scherzo", "OCNE")
  "RELEVANTES MUSICA REGIONAL" = @("Canal Fiesta", "Faro de Vigo Cultura", "El Correo Cultura", "Diario Vasco Cultura", "La Verdad Cultura", "Festivales de Folk", "Asociaciones Culturales", "Promotoras Locales", "Medios Regionales", "Entidades Folk")
  "RELEVANTES FLAMENCO" = @("Deflamenco", "JondoWeb", "Festival de Jerez", "Bienal de Sevilla", "Flamenco Radio", "Tablao Cordobes", "Casa Patas", "Pena Flamenca", "Flamenco Festival", "Andalucia Flamenca")
  "RELEVANTES RUMBA" = @("Rumba Catalana", "Sabor de Gracia", "Taller de Musics", "Mestizo", "Promotora Rumba", "Festival Rumba", "Sala Apolo", "Rumba Tour", "Management Rumba", "Medios Rumba")
  "RELEVANTES ELECTRONICO" = @("Vicious Magazine", "DJ Mag Espana", "Resident Advisor", "elrow", "Brunch Electronik", "Mondo Disko", "Amnesia Ibiza", "Club4", "Neo2 Musica", "Beatburguer")
}

$brandDomainMap = @{
  "MondoSonoro" = "mondosonoro.com"
  "Muzikalia" = "muzikalia.com"
  "Jenesaispop" = "jenesaispop.com"
  "Ruta 66" = "ruta66.es"
  "Subterfuge" = "subterfuge.com"
  "Sonido Muchacho" = "sonidomuchacho.com"
  "Intromusica" = "intromusica.com"
  "Binaural" = "binaural.es"
  "Indiespot" = "indiespot.es"
  "Efe Eme" = "efeeme.com"
  "Los40" = "los40.com"
  "Cadena 100" = "cadena100.es"
  "Europa FM" = "europafm.com"
  "Dial" = "cadenadial.com"
  "FormulaTV Musica" = "formulatv.com"
  "Warner Music Spain" = "warnermusic.es"
  "Sony Music Spain" = "sonymusic.es"
  "Universal Music Spain" = "universalmusic.es"
  "M2Music Group" = "m2musicgroup.com"
  "Must Producciones" = "mustproducciones.com"
  "MariskalRock" = "mariskalrock.com"
  "RockFM" = "rockfm.fm"
  "Rafabasa" = "rafabasa.com"
  "RockZone" = "rockzonemag.com"
  "Metal Journal" = "metaljournal.net"
  "The Fish Factory" = "thefishfactory.es"
  "Rock Estatal" = "rockestatal.com"
  "Madness Live" = "madnesslive.es"
  "Route Resurrection" = "resurrectionfest.es"
  "Last Tour" = "lasttour.org"
  "Teatro Real" = "teatroreal.es"
  "Auditorio Nacional" = "auditorionacional.mcu.es"
  "Fundacion Juan March" = "march.es"
  "Scherzo" = "scherzo.es"
  "Ritmo" = "ritmo.es"
  "Codalario" = "codalario.com"
  "Orquesta y Coro RTVE" = "rtve.es"
  "Ibermusica" = "ibermusica.es"
  "Deflamenco" = "deflamenco.com"
  "JondoWeb" = "jondoweb.com"
  "Festival de Jerez" = "festivaldejerez.es"
  "Bienal de Sevilla" = "labienal.com"
  "Tablao Cordobes" = "tablaocordobes.es"
  "Rumba Catalana" = "rumbacatalana.com"
  "Taller de Musics" = "tallerdemusics.com"
  "Vicious Magazine" = "viciousmagazine.com"
  "DJ Mag Espana" = "djmag.es"
  "Resident Advisor" = "ra.co"
  "elrow" = "elrow.com"
  "Brunch Electronik" = "brunchelectronik.com"
  "Mondo Disko" = "mondodisko.es"
  "Amnesia Ibiza" = "amnesia.es"
  "Neo2 Musica" = "neo2.com"
}

function Write-Log {
  param([string]$Message)
  $stamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  Add-Content -Path $logPath -Value "[$stamp] $Message" -Encoding UTF8
}

function Invoke-Json {
  param(
    [string]$Url,
    [int]$TimeoutSec = 120
  )
  $resp = Invoke-WebRequest -UseBasicParsing -Uri $Url -TimeoutSec $TimeoutSec
  return ($resp.Content | ConvertFrom-Json)
}

function Get-RowMap {
  $map = @{}
  for ($attempt = 1; $attempt -le 2; $attempt += 1) {
    try {
      $inspect = Invoke-Json -Url ($baseUrl + "?action=inspect_sheet_full") -TimeoutSec 150
      if ($inspect -and $inspect.ok -eq $true) {
        foreach ($s in ($inspect.sheets | Where-Object { $_ })) {
          $name = [string]$s.name
          if ([string]::IsNullOrWhiteSpace($name)) { continue }
          $map[$name] = [int]$s.usedRows
        }
      }
    } catch {
      Write-Log ("ERROR inspect_sheet_full intento {0}: {1}" -f $attempt, $_.Exception.Message)
    }
    if ($map.Count -gt 0) {
      $script:lastRowMapCache = $map
      return $map
    }
    if ($attempt -lt 2) {
      Start-Sleep -Milliseconds (Get-Random -Minimum 500 -Maximum 1201)
    }
  }

  if ($script:lastRowMapCache -and $script:lastRowMapCache.Count -gt 0) {
    Write-Log "WARN rowMap en cache usado por fallo de inspeccion."
    return $script:lastRowMapCache
  }

  $snapshotMap = Load-RowMapFromCountsSnapshot
  if ($snapshotMap -and $snapshotMap.Count -gt 0) {
    $script:lastRowMapCache = $snapshotMap
    Write-Log "WARN rowMap desde snapshot local por timeout de inspeccion."
    return $snapshotMap
  }

  $defaultMap = @{}
  foreach ($plan in $plans) {
    $sheetName = [string]$plan.sheet
    if ([string]::IsNullOrWhiteSpace($sheetName)) { continue }
    $defaultMap[$sheetName] = 2
  }
  Write-Log "WARN rowMap por defecto aplicado (sin inspeccion disponible)."
  $script:lastRowMapCache = $defaultMap
  return $defaultMap
}

function Convert-FunctionToKeyword {
  param([string]$Function)
  $f = [string]$Function
  switch ($f.ToUpperInvariant()) {
    "PRENSA" { return "prensa" }
    "COMUNICACION" { return "comunicacion" }
    "BOOKING" { return "booking" }
    "CONTRATACION" { return "contratacion" }
    "PROGRAMACION" { return "programacion" }
    "MANAGEMENT" { return "management" }
    "REDACCION" { return "redaccion" }
    "PRODUCCION" { return "produccion" }
    default { return "contacto" }
  }
}

function Get-QueryHash {
  param(
    [string]$Sheet,
    [string]$Query
  )
  $src = "{0}|{1}" -f ([string]$Sheet), ([string]$Query)
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($src)
  $md5 = [System.Security.Cryptography.MD5]::Create()
  try {
    $hashBytes = $md5.ComputeHash($bytes)
  } finally {
    $md5.Dispose()
  }
  $hex = ([System.BitConverter]::ToString($hashBytes)).Replace("-", "").ToLowerInvariant()
  return $hex.Substring(0, 12)
}

function Get-StateEntry {
  param(
    [hashtable]$State,
    [string]$QueryHash,
    [string]$Sheet,
    [string]$Family
  )
  $entry = [ordered]@{
    sheet = [string]$Sheet
    family = [string]$Family
    runs = 0
    zeroStreak = 0
    lowYieldStreak = 0
    errorStreak = 0
    lastCandidates = 0
    lastAppended = 0
    lastYield = 0
    lastRun = ""
    cooldownUntil = ""
  }
  if (-not $State.ContainsKey($QueryHash)) {
    return $entry
  }
  $existing = $State[$QueryHash]
  if ($existing) {
    foreach ($p in $existing.PSObject.Properties) {
      $entry[$p.Name] = $p.Value
    }
  }
  $entry.sheet = [string]$Sheet
  $entry.family = [string]$Family
  return $entry
}

function Load-QueryState {
  if (-not (Test-Path -LiteralPath $queryStatePath)) {
    return @{}
  }
  try {
    $raw = Get-Content -LiteralPath $queryStatePath -Raw -Encoding UTF8
    if ([string]::IsNullOrWhiteSpace($raw)) { return @{} }
    $parsed = $raw | ConvertFrom-Json
    $state = @{}
    if ($parsed) {
      foreach ($p in $parsed.PSObject.Properties) {
        $state[[string]$p.Name] = $p.Value
      }
    }
    return $state
  } catch {
    Write-Log ("WARN query_state.json invalido: " + $_.Exception.Message)
    return @{}
  }
}

function Save-QueryState {
  param([hashtable]$State)
  try {
    $ordered = [ordered]@{}
    foreach ($k in ($State.Keys | Sort-Object)) {
      $ordered[[string]$k] = $State[$k]
    }
    $ordered | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $queryStatePath -Encoding UTF8
  } catch {
    Write-Log ("ERROR guardando query_state.json: " + $_.Exception.Message)
  }
}

function Load-RowMapFromCountsSnapshot {
  $map = @{}
  try {
    if (-not (Test-Path -LiteralPath $countsPath)) { return $map }
    $raw = Get-Content -LiteralPath $countsPath -Raw -Encoding UTF8
    if ([string]::IsNullOrWhiteSpace($raw)) { return $map }
    $parsed = $raw | ConvertFrom-Json
    $items = @($parsed)
    foreach ($it in $items) {
      if (-not $it) { continue }
      $sheetName = [string]$it.sheet
      if ([string]::IsNullOrWhiteSpace($sheetName)) { continue }
      $rows = 0
      try { $rows = [int]$it.usedRows } catch { $rows = 0 }
      if ($rows -le 0) { continue }
      $map[$sheetName] = $rows
    }
  } catch {
    Write-Log ("WARN snapshot rows no disponible: " + $_.Exception.Message)
  }
  return $map
}

function Get-CooldownUntil {
  param([object]$Entry)
  if (-not $Entry) { return $null }
  try {
    $v = [string]$Entry.cooldownUntil
    if ([string]::IsNullOrWhiteSpace($v)) { return $null }
    return [datetime]$v
  } catch {
    return $null
  }
}

function Is-QueryOnCooldown {
  param(
    [hashtable]$State,
    [string]$QueryHash,
    [string]$Sheet,
    [string]$Family,
    [datetime]$Now
  )
  $entry = Get-StateEntry -State $State -QueryHash $QueryHash -Sheet $Sheet -Family $Family
  $until = Get-CooldownUntil -Entry $entry
  if ($until -and $until -gt $Now) { return $true }
  return $false
}

function Get-FamilyBoostMap {
  param([hashtable]$State)
  $out = @{}
  foreach ($k in $State.Keys) {
    $entry = $State[$k]
    if (-not $entry) { continue }
    $family = [string]$entry.family
    if ([string]::IsNullOrWhiteSpace($family)) { continue }
    $yield = 0.0
    try { $yield = [double]$entry.lastYield } catch {}
    if ($yield -ge 8.0) {
      if (-not $out.ContainsKey($family)) { $out[$family] = 0 }
      $out[$family] = [int]$out[$family] + 1
    }
  }
  return $out
}

function Get-TaskPriority {
  param(
    [hashtable]$State,
    [string]$QueryHash,
    [string]$Sheet,
    [string]$Family,
    [hashtable]$FamilyBoost,
    [bool]$IsFollowUp
  )
  $entry = Get-StateEntry -State $State -QueryHash $QueryHash -Sheet $Sheet -Family $Family
  $priority = 45
  if ($IsFollowUp) { $priority = 60 }
  try { if ([int]$entry.zeroStreak -ge 2) { $priority -= 20 } } catch {}
  try { if ([int]$entry.lowYieldStreak -ge 1) { $priority -= 10 } } catch {}
  try { if ([int]$entry.errorStreak -ge 1) { $priority -= 12 } } catch {}
  try { if ([int]$entry.errorStreak -ge 3) { $priority -= 18 } } catch {}
  try { if ([double]$entry.lastYield -ge 8) { $priority += 15 } } catch {}
  if ($FamilyBoost.ContainsKey($Family)) {
    $priority += ([int]$FamilyBoost[$Family] * 5)
  }
  return [int]$priority
}

function Get-SheetGenreHint {
  param([string]$Sheet)
  $s = [string]$Sheet
  switch ($s) {
    "CONTACTOS_WEB" { return "musica conciertos festivales salas radios sellos management booking" }
    "RELEVANTES INDIE" { return "indie alternativa" }
    "PRELEVANTES POP" { return "pop comercial" }
    "RELEVANTES ROCK" { return "rock metal" }
    "RELEVANTES MUSICA CLASICA" { return "musica clasica orquesta" }
    "RELEVANTES MUSICA REGIONAL" { return "regional folk tradicional" }
    "RELEVANTES FLAMENCO" { return "flamenco jondo" }
    "RELEVANTES RUMBA" { return "rumba catalana" }
    "RELEVANTES ELECTRONICO" { return "electronica dj techno house" }
    default { return "musica" }
  }
}

function Build-QueryText {
  param(
    [string]$Sheet,
    [string]$Province,
    [string]$Entity,
    [string]$FunctionKeyword,
    [string]$Mode = "DIRECT_EMAIL",
    [string]$Brand = "",
    [string]$BrandDomain = ""
  )
  $s = [string]$Sheet
  $p = [string]$Province
  $e = [string]$Entity
  $f = [string]$FunctionKeyword
  $b = [string]$Brand
  $m = [string]$Mode
  $g = Get-SheetGenreHint -Sheet $s
  $scope = "Espana"
  if (-not [string]::IsNullOrWhiteSpace($p) -and $p -ne "Nacional") {
    $scope = ("{0} Espana" -f $p).Trim()
  }
  $baseIntent = "industria musical"
  $rolePack = "booking management prensa redaccion programacion contratacion"
  switch ($m.ToUpperInvariant()) {
    "AT_CONTACT" {
      return ("{0} {1} {2} {3} ""@"" email contacto" -f $scope, $e, $g, $f).Trim()
    }
    "MAILTO_CONTACT" {
      return ("{0} {1} {2} {3} mailto contacto email" -f $scope, $e, $g, $f).Trim()
    }
    "LINKEDIN_EMAIL_DIRECT" {
      return ("{0} {1} {2} {3} linkedin contacto email" -f $scope, $e, $g, $f).Trim()
    }
    "DIRECT_EMAIL" {
      return ("{0} {1} {2} {3} contacto correo email" -f $scope, $e, $g, $f).Trim()
    }
    "CONTACT_PAGE" {
      return ("{0} {1} {2} equipo contacto prensa booking management" -f $scope, $e, $g).Trim()
    }
    "ROLE_MAILBOX" {
      return ("{0} {1} {2} {3} prensa booking management email" -f $scope, $e, $g, $f).Trim()
    }
    "PRESS_KIT" {
      return ("{0} {1} {2} prensa dossier media kit contacto email" -f $scope, $e, $g).Trim()
    }
    "DIRECTORY_DISCOVERY" {
      return ("{0} {1} {2} directorio musica booking management contacto email" -f $scope, $e, $g).Trim()
    }
    "SOCIAL_DISCOVERY" {
      return ("{0} {1} {2} linkedin instagram contacto email" -f $scope, $e, $g).Trim()
    }
    "ASSOCIATION_DISCOVERY" {
      return ("{0} {1} {2} asociacion federacion union musica contacto email" -f $scope, $e, $g).Trim()
    }
    "TEAM_CONTACT" {
      return ("{0} {1} {2} equipo staff contacto prensa email" -f $scope, $e, $g).Trim()
    }
    "SITE_ES_DIRECT" {
      return ("site:.es {0} {1} contacto email" -f $scope, $e).Trim()
    }
    "ROLE_TITLE" {
      return ("{0} {1} {2} {3} periodista redactor locutor email" -f $scope, $e, $g, $f).Trim()
    }
    "BRAND_FOCUS" {
      $brandDomain = Normalize-DomainToken -DomainRaw ([string]$BrandDomain)
      if (-not [string]::IsNullOrWhiteSpace($brandDomain)) {
        return ("site:{0} {1} {2} {3} contacto email prensa booking" -f $brandDomain, $scope, $baseIntent, $b).Trim()
      }
      if ([string]::IsNullOrWhiteSpace($b)) {
        return ("{0} {1} {2} {3} email contacto" -f $scope, $e, $baseIntent, $f).Trim()
      }
      return ("{0} {1} {2} contacto email prensa booking" -f $scope, $b, $baseIntent).Trim()
    }
    "BRAND_ROLE_MAILBOX" {
      $brandDomain = Normalize-DomainToken -DomainRaw ([string]$BrandDomain)
      if (-not [string]::IsNullOrWhiteSpace($brandDomain)) {
        return ("site:{0} {1} {2} {3} ""{4}@"" ""mailto:"" contacto" -f $brandDomain, $scope, $baseIntent, $b, $f).Trim()
      }
      if ([string]::IsNullOrWhiteSpace($b)) {
        return ("{0} {1} {2} {3} email contacto" -f $scope, $e, $baseIntent, $f).Trim()
      }
      return ("{0} {1} {2} {3} email contacto" -f $scope, $b, $baseIntent, $f).Trim()
    }
    default {
      return ("{0} {1} {2} {3} email contacto" -f $scope, $e, $baseIntent, $f).Trim()
    }
  }
}

function Normalize-DomainToken {
  param([string]$DomainRaw)
  $v = [string]$DomainRaw
  $v = $v.Trim().ToLowerInvariant()
  if ([string]::IsNullOrWhiteSpace($v)) { return "" }
  $v = $v -replace '^https?://', ''
  $v = $v -replace '^www\.', ''
  if ($v.Contains('/')) { $v = $v.Split('/')[0] }
  if ($v.Contains('?')) { $v = $v.Split('?')[0] }
  if ($v.Contains('#')) { $v = $v.Split('#')[0] }
  if ($v -notmatch '^[a-z0-9.-]+\.[a-z]{2,24}$') { return "" }
  return $v
}

function Resolve-BrandDomain {
  param([string]$Brand)
  $name = [string]$Brand
  if ([string]::IsNullOrWhiteSpace($name)) { return "" }
  if ($brandDomainMap.ContainsKey($name)) {
    return (Normalize-DomainToken -DomainRaw ([string]$brandDomainMap[$name]))
  }
  if ($name -match '([a-z0-9.-]+\.[a-z]{2,24})') {
    return (Normalize-DomainToken -DomainRaw ([string]$Matches[1]))
  }
  return ""
}

function Pick-BrandCandidate {
  param(
    [string[]]$Brands,
    [int]$Seed,
    [string[]]$ExcludeDomains
  )
  $list = @($Brands | Where-Object { $_ })
  if (-not $list -or $list.Count -eq 0) { return $null }
  $exclude = @($ExcludeDomains | Where-Object { $_ })
  $count = $list.Count
  $base = [Math]::Abs([int]$Seed)

  for ($offset = 0; $offset -lt $count; $offset += 1) {
    $idx = ($base + $offset) % $count
    $brand = [string]$list[$idx]
    if ([string]::IsNullOrWhiteSpace($brand)) { continue }
    $domain = Resolve-BrandDomain -Brand $brand
    if (-not [string]::IsNullOrWhiteSpace($domain) -and ($exclude -contains $domain)) {
      continue
    }
    return [PSCustomObject]@{
      brand = $brand
      domain = $domain
    }
  }

  $fallback = [string]$list[$base % $count]
  return [PSCustomObject]@{
    brand = $fallback
    domain = (Resolve-BrandDomain -Brand $fallback)
  }
}

function Get-DomainFromUrl {
  param([string]$UrlRaw)
  try {
    $raw = [string]$UrlRaw
    $raw = $raw.Trim()
    if ([string]::IsNullOrWhiteSpace($raw)) { return "" }
    if ($raw -notmatch '^https?://') { $raw = "https://$raw" }
    $uri = [System.Uri]$raw
    return (Normalize-DomainToken -DomainRaw ([string]$uri.Host))
  } catch {
    return ""
  }
}

function Get-TaskExcludeDomains {
  param(
    [int]$Cycle,
    [int]$SheetIndex,
    [string[]]$GlobalDomains,
    [int]$TakeCount = 3
  )
  $domains = @($GlobalDomains | Where-Object { $_ })
  if (-not $domains -or $domains.Count -eq 0) { return @() }
  $take = [Math]::Max(1, [Math]::Min($TakeCount, $domains.Count))
  $base = [Math]::Abs(($Cycle * 13) + ($SheetIndex * 7))
  $out = @()

  foreach ($hot in @("mondosonoro.com", "rockdelux.com", "binaural.es", "salaelsol.com", "sonidomuchacho.com")) {
    if ($domains -contains $hot -and $out -notcontains $hot) {
      $out += $hot
      if ($out.Count -ge $take) { return @($out) }
    }
  }

  for ($i = 0; $i -lt $take; $i += 1) {
    $idx = ($base + ($i * 5)) % $domains.Count
    $d = [string]$domains[$idx]
    if (-not [string]::IsNullOrWhiteSpace($d) -and ($out -notcontains $d)) {
      $out += $d
    }
  }
  return @($out)
}

function Resolve-PlanSheetName {
  param(
    [string]$RequestedSheet,
    [hashtable]$RowMap
  )
  $name = [string]$RequestedSheet
  if ([string]::IsNullOrWhiteSpace($name)) { return "" }
  if ($RowMap -and $RowMap.ContainsKey($name)) { return $name }

  $fallbackMap = @{
    "RELEVANTES INDIE" = "CONTACTOS_WEB"
  }
  if ($fallbackMap.ContainsKey($name)) {
    $alt = [string]$fallbackMap[$name]
    if (-not [string]::IsNullOrWhiteSpace($alt) -and $RowMap -and $RowMap.ContainsKey($alt)) {
      return $alt
    }
  }
  return ""
}

function Build-EffectivePlansForRowMap {
  param(
    [array]$Plans,
    [hashtable]$RowMap
  )
  $out = @()
  foreach ($plan in ($Plans | Where-Object { $_ })) {
    $sourceSheet = [string]$plan.sheet
    $resolvedSheet = Resolve-PlanSheetName -RequestedSheet $sourceSheet -RowMap $RowMap
    if ([string]::IsNullOrWhiteSpace($resolvedSheet)) {
      Write-Log ("WARN hoja no disponible para plan: {0}" -f $sourceSheet)
      continue
    }
    $out += [PSCustomObject]@{
      sheet = $resolvedSheet
      sourceSheet = $sourceSheet
      entities = @($plan.entities)
    }
  }
  return @($out)
}

function Append-QuerySiteExclusions {
  param(
    [string]$Query,
    [string[]]$Domains
  )
  $q = [string]$Query
  if ([string]::IsNullOrWhiteSpace($q)) { return "" }
  $out = $q
  foreach ($dRaw in ($Domains | Where-Object { $_ })) {
    $d = Normalize-DomainToken -DomainRaw ([string]$dRaw)
    if ([string]::IsNullOrWhiteSpace($d)) { continue }
    $token = "-site:$d"
    if ($out.IndexOf($token, [System.StringComparison]::OrdinalIgnoreCase) -ge 0) { continue }
    $out = ("{0} {1}" -f $out, $token).Trim()
  }
  return $out
}

function Build-SeedTasks {
  param(
    [array]$PendingPlans,
    [int]$Cycle,
    [hashtable]$RowMap,
    [hashtable]$State,
    [hashtable]$FamilyBoost
  )
  $tasks = @()
  $now = Get-Date
  $sheetIdx = -1
  foreach ($plan in $PendingPlans) {
    $sheetIdx += 1
    $sheetName = [string]$plan.sheet
    $rows = 1
    if ($RowMap.ContainsKey($sheetName)) { $rows = [int]$RowMap[$sheetName] }
    $remaining = [Math]::Max(0, ($TargetRows - $rows))
    if ($remaining -le 0) { continue }
    $burstThisSheet = [Math]::Min($BurstPerSheet, [Math]::Max(1, [Math]::Ceiling($remaining / 300.0)))
    $brands = @()
    if ($brandSeeds.ContainsKey($sheetName)) {
      $brands = @($brandSeeds[$sheetName])
    }
    for ($b = 0; $b -lt $burstThisSheet; $b += 1) {
      $province = $provinces[($Cycle * 7 + $b + ($sheetIdx * 5)) % $provinces.Count]
      $scopeRoll = (($Cycle * 3) + $b + $sheetIdx) % 10
      if ($scopeRoll -lt 7) {
        $province = "Nacional"
      } elseif ($scopeRoll -lt 9) {
        $province = $coreProvinces[($Cycle + $b + $sheetIdx) % $coreProvinces.Count]
      }
      $entity = $plan.entities[($Cycle + ($b * 2) + $sheetIdx) % $plan.entities.Count]
      $functionCode = $functionsList[($Cycle * 3 + $b + $sheetIdx) % $functionsList.Count]
      $functionKeyword = Convert-FunctionToKeyword -Function $functionCode
      $weightedModes = @(
        "CONTACT_PAGE",
        "DIRECTORY_DISCOVERY",
        "SOCIAL_DISCOVERY",
        "DIRECT_EMAIL",
        "TEAM_CONTACT",
        "ROLE_MAILBOX",
        "AT_CONTACT",
        "MAILTO_CONTACT",
        "PRESS_KIT",
        "ASSOCIATION_DISCOVERY",
        "SITE_ES_DIRECT",
        "ROLE_TITLE",
        "DIRECT_EMAIL",
        "CONTACT_PAGE"
      )
      $mode = $weightedModes[($Cycle * 7 + $b + $sheetIdx) % $weightedModes.Count]
      $brand = ""
      $brandDomain = ""
      if ($brands.Count -gt 0) {
        $picked = Pick-BrandCandidate -Brands $brands -Seed ($Cycle * 11 + $b + ($sheetIdx * 2)) -ExcludeDomains $globalExcludeDomains
        if ($picked) {
          $brand = [string]$picked.brand
          $brandDomain = [string]$picked.domain
        }
      }
      $family = ("{0}|{1}|{2}" -f $entity, $functionCode, $mode).ToLowerInvariant()
      $query = Build-QueryText -Sheet $sheetName -Province $province -Entity $entity -FunctionKeyword $functionKeyword -Mode $mode -Brand $brand
      $excludeTakeCount = 0
      if ($globalExcludeDomains.Count -gt 0) {
        $excludeTakeCount = [Math]::Min(2, $globalExcludeDomains.Count)
        if ((($Cycle + $b + $sheetIdx) % 5) -eq 0) {
          $excludeTakeCount = [Math]::Min(3, $globalExcludeDomains.Count)
        }
      }
      $excludeDomainsForTask = @()
      if ($excludeTakeCount -gt 0) {
        $excludeDomainsForTask = Get-TaskExcludeDomains -Cycle $Cycle -SheetIndex $sheetIdx -GlobalDomains $globalExcludeDomains -TakeCount $excludeTakeCount
      }
      $query = Append-QuerySiteExclusions -Query $query -Domains $excludeDomainsForTask
      $queryHash = Get-QueryHash -Sheet $sheetName -Query $query
      if (Is-QueryOnCooldown -State $State -QueryHash $queryHash -Sheet $sheetName -Family $family -Now $now) {
        continue
      }
      $priority = Get-TaskPriority -State $State -QueryHash $queryHash -Sheet $sheetName -Family $family -FamilyBoost $FamilyBoost -IsFollowUp:$false
      if ([string]$entity -match 'festival') { $priority += 4 }
      if ([string]$mode -eq 'TEAM_CONTACT') { $priority += 3 }
      $tasks += [PSCustomObject]@{
        sheet = $sheetName
        family = $family
        query = $query
        queryHash = $queryHash
        priority = $priority
        followUp = $false
      }

      $secondaryModes = @("TEAM_CONTACT", "ROLE_TITLE", "DIRECT_EMAIL", "ROLE_MAILBOX", "CONTACT_PAGE", "AT_CONTACT", "MAILTO_CONTACT", "SITE_ES_DIRECT", "PRESS_KIT", "DIRECTORY_DISCOVERY", "SOCIAL_DISCOVERY", "ASSOCIATION_DISCOVERY")
      $secondaryMode = $secondaryModes[($Cycle * 9 + ($b * 3) + $sheetIdx) % $secondaryModes.Count]
      if ($secondaryMode -ne $mode) {
        $secondaryFamily = ("{0}|{1}|alt|{2}" -f $entity, $functionCode, $secondaryMode).ToLowerInvariant()
        $secondaryQuery = Build-QueryText -Sheet $sheetName -Province $province -Entity $entity -FunctionKeyword $functionKeyword -Mode $secondaryMode -Brand $brand
        $secondaryQuery = Append-QuerySiteExclusions -Query $secondaryQuery -Domains $excludeDomainsForTask
        $secondaryHash = Get-QueryHash -Sheet $sheetName -Query $secondaryQuery
        if (-not (Is-QueryOnCooldown -State $State -QueryHash $secondaryHash -Sheet $sheetName -Family $secondaryFamily -Now $now)) {
          $secondaryPriority = Get-TaskPriority -State $State -QueryHash $secondaryHash -Sheet $sheetName -Family $secondaryFamily -FamilyBoost $FamilyBoost -IsFollowUp:$false
          $secondaryPriority -= 4
          $tasks += [PSCustomObject]@{
            sheet = $sheetName
            family = $secondaryFamily
            query = $secondaryQuery
            queryHash = $secondaryHash
            priority = $secondaryPriority
            followUp = $false
          }
        }
      }

      if (-not [string]::IsNullOrWhiteSpace($brand) -and $sheetName -ne "CONTACTOS_WEB" -and $rows -lt 2800 -and ((($Cycle + $b + $sheetIdx) % 7) -eq 0)) {
        $brandMode = "BRAND_FOCUS"
        $brandDomainTag = "nodomain"
        if (-not [string]::IsNullOrWhiteSpace($brandDomain)) { $brandDomainTag = $brandDomain }
        $brandFamily = ("brand|{0}|{1}|{2}" -f $brand, $functionCode, $brandDomainTag).ToLowerInvariant()
        $brandQuery = Build-QueryText -Sheet $sheetName -Province $province -Entity $entity -FunctionKeyword $functionKeyword -Mode $brandMode -Brand $brand -BrandDomain $brandDomain
        $brandExcludeDomains = @($excludeDomainsForTask)
        if (-not [string]::IsNullOrWhiteSpace($brandDomain)) {
          $brandExcludeDomains = @($brandExcludeDomains | Where-Object {
            (Normalize-DomainToken -DomainRaw ([string]$_)) -ne $brandDomain
          })
        }
        $brandQuery = Append-QuerySiteExclusions -Query $brandQuery -Domains $brandExcludeDomains
        $brandHash = Get-QueryHash -Sheet $sheetName -Query $brandQuery
        if (-not (Is-QueryOnCooldown -State $State -QueryHash $brandHash -Sheet $sheetName -Family $brandFamily -Now $now)) {
          $brandPriority = Get-TaskPriority -State $State -QueryHash $brandHash -Sheet $sheetName -Family $brandFamily -FamilyBoost $FamilyBoost -IsFollowUp:$false
          $brandPriority += 4
          $tasks += [PSCustomObject]@{
            sheet = $sheetName
            family = $brandFamily
            query = $brandQuery
            queryHash = $brandHash
            priority = $brandPriority
            followUp = $false
          }
        }

      }
    }

    if ($EnableBooster) {
      $boosterProvincePool = @("Nacional", "Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Malaga", "Zaragoza", "Alicante", "Murcia")
      $boosterFunctions = @("management", "programacion", "contratacion", "booking", "prensa", "comunicacion")
      $boosterModes = @("TEAM_CONTACT", "ROLE_TITLE", "DIRECT_EMAIL", "ROLE_MAILBOX", "CONTACT_PAGE", "DIRECTORY_DISCOVERY", "SOCIAL_DISCOVERY")
      $boosterProvince = $boosterProvincePool[($Cycle + $sheetIdx) % $boosterProvincePool.Count]
      $boosterFn = $boosterFunctions[($Cycle * 2 + $sheetIdx) % $boosterFunctions.Count]
      $boosterEntity = [string]$plan.entities[($Cycle + ($sheetIdx * 2)) % $plan.entities.Count]
      if ([string]::IsNullOrWhiteSpace($boosterEntity)) { $boosterEntity = [string]$plan.entities[0] }
      $boosterMode = $boosterModes[($Cycle + $sheetIdx) % $boosterModes.Count]
      $boosterFamily = ("booster|{0}|{1}" -f $boosterEntity, $boosterFn).ToLowerInvariant()
      $boosterQuery = Build-QueryText -Sheet $sheetName -Province $boosterProvince -Entity $boosterEntity -FunctionKeyword $boosterFn -Mode $boosterMode
      $boosterExcludeTake = 0
      if ($globalExcludeDomains.Count -gt 0) { $boosterExcludeTake = 1 }
      $boosterExcludeDomains = @()
      if ($boosterExcludeTake -gt 0) {
        $boosterExcludeDomains = Get-TaskExcludeDomains -Cycle ($Cycle + 1) -SheetIndex ($sheetIdx + 1) -GlobalDomains $globalExcludeDomains -TakeCount $boosterExcludeTake
      }
      $boosterQuery = Append-QuerySiteExclusions -Query $boosterQuery -Domains $boosterExcludeDomains
      $boosterHash = Get-QueryHash -Sheet $sheetName -Query $boosterQuery
      if (-not (Is-QueryOnCooldown -State $State -QueryHash $boosterHash -Sheet $sheetName -Family $boosterFamily -Now $now)) {
        $boosterPriority = Get-TaskPriority -State $State -QueryHash $boosterHash -Sheet $sheetName -Family $boosterFamily -FamilyBoost $FamilyBoost -IsFollowUp:$false
        $boosterPriority += 6
        $tasks += [PSCustomObject]@{
          sheet = $sheetName
          family = $boosterFamily
          query = $boosterQuery
          queryHash = $boosterHash
          priority = $boosterPriority
          followUp = $false
        }
      }
    }
  }
  return @($tasks | Sort-Object -Property @{Expression = "priority"; Descending = $true}, @{Expression = "sheet"; Descending = $false})
}

function Write-JsonExecutionLog {
  param(
    [string]$Sheet,
    [string]$Family,
    [string]$Query,
    [string]$QueryHash,
    [int]$CandidatesIn,
    [int]$AfterEmail,
    [int]$AfterSpain,
    [int]$AfterQuality,
    [int]$AfterDedupe,
    [int]$Appended,
    [object]$Reasons,
    [int]$ElapsedMs
  )
  $payload = [ordered]@{
    timestamp = (Get-Date).ToString("o")
    sheet = $Sheet
    family = $Family
    query = $Query
    queryHash = $QueryHash
    candidates_in = $CandidatesIn
    after_email = $AfterEmail
    after_spain = $AfterSpain
    after_quality = $AfterQuality
    after_dedupe = $AfterDedupe
    appended = $Appended
    reasons = $Reasons
    elapsed_ms = $ElapsedMs
  }
  Add-Content -Path $logPath -Value ($payload | ConvertTo-Json -Depth 12 -Compress) -Encoding UTF8
}

function Parse-DumpResponse {
  param([string]$RawContent)
  if ([string]::IsNullOrWhiteSpace($RawContent)) { return $null }
  $text = [string]$RawContent
  $trimmed = $text.Trim()
  if ([string]::IsNullOrWhiteSpace($trimmed)) { return $null }
  if ($trimmed -eq ".") { return $null }

  try {
    return ($trimmed | ConvertFrom-Json)
  } catch {}

  $start = $trimmed.IndexOf("{")
  $end = $trimmed.LastIndexOf("}")
  if ($start -ge 0 -and $end -gt $start) {
    $slice = $trimmed.Substring($start, ($end - $start + 1))
    try {
      return ($slice | ConvertFrom-Json)
    } catch {}
  }
  return $null
}

function Update-QueryStateAfterRun {
  param(
    [hashtable]$State,
    [pscustomobject]$Task,
    [int]$Candidates,
    [int]$Appended,
    [bool]$ResponseOk = $true
  )
  $entry = Get-StateEntry -State $State -QueryHash $Task.queryHash -Sheet $Task.sheet -Family $Task.family
  $entry.lastRun = (Get-Date).ToString("o")
  if (-not $ResponseOk) {
    $entry.errorStreak = [int]$entry.errorStreak + 1
    if ([int]$entry.errorStreak -ge 4) {
      $entry.cooldownUntil = (Get-Date).AddHours(24).ToString("o")
    } elseif ([int]$entry.errorStreak -ge 2) {
      $entry.cooldownUntil = (Get-Date).AddHours(6).ToString("o")
    }
    $State[$Task.queryHash] = [PSCustomObject]$entry
    $prevYield = 0.0
    try { $prevYield = [double]$entry.lastYield } catch {}
    return [double]$prevYield
  }
  $entry.errorStreak = 0
  $entry.runs = [int]$entry.runs + 1
  $entry.lastCandidates = [int]$Candidates
  $entry.lastAppended = [int]$Appended
  $yield = 0.0
  if ($Candidates -gt 0) {
    $yield = ([double]$Appended / [double]$Candidates) * 100.0
  }
  $entry.lastYield = [math]::Round($yield, 4)

  if ($Appended -eq 0) { $entry.zeroStreak = [int]$entry.zeroStreak + 1 }
  else { $entry.zeroStreak = 0 }

  if ($Candidates -gt 0 -and $yield -lt 1.0) {
    $entry.lowYieldStreak = [int]$entry.lowYieldStreak + 1
  } else {
    $entry.lowYieldStreak = 0
  }

  if ([int]$entry.zeroStreak -ge 3) {
    $entry.cooldownUntil = (Get-Date).AddDays(7).ToString("o")
  } elseif ([int]$entry.lowYieldStreak -ge 2) {
    $entry.cooldownUntil = (Get-Date).AddHours(72).ToString("o")
  } elseif ($yield -ge 8.0) {
    $entry.cooldownUntil = ""
  }

  $State[$Task.queryHash] = [PSCustomObject]$entry
  return [double]$yield
}

function Add-FollowUpTasks {
  param(
    [System.Collections.Generic.List[object]]$Queue,
    [hashtable]$KnownHashes,
    [hashtable]$State,
    [hashtable]$FamilyBoost,
    [string]$Sheet,
    [object[]]$Companies,
    [object[]]$Domains
  )
  $terms = @()
  foreach ($c in ($Companies | Where-Object { $_ })) {
    $txt = ([string]$c).Trim()
    if ($txt) { $terms += $txt }
  }
  foreach ($d in ($Domains | Where-Object { $_ })) {
    $txt = ([string]$d).Trim()
    if ($txt) { $terms += $txt }
  }
  $terms = @($terms | Select-Object -Unique | Select-Object -First 8)
  if (-not $terms -or $terms.Count -eq 0) { return 0 }

  $followupDomainBlocklist = @(
    "el-nacional.es",
    "elnacional.com",
    "loteriasyapuestas.es",
    "marca.com",
    "as.com",
    "elmundo.es",
    "elpais.com"
  )
  $musicSignalRegex = '(musica|music|festival|concierto|radio|sala|club|booking|management|promotor|promotora|records|discograf|label|artist|prensa)'
  $filteredTerms = @()
  foreach ($t in $terms) {
    $txt = ([string]$t).Trim()
    if ([string]::IsNullOrWhiteSpace($txt)) { continue }
    $txtLower = $txt.ToLowerInvariant()
    if ($txtLower -match '^[a-z0-9.-]+\.[a-z]{2,24}$') {
      if ($followupDomainBlocklist -contains $txtLower) { continue }
      if ($txtLower -notmatch $musicSignalRegex) { continue }
    } else {
      if ($txtLower -notmatch $musicSignalRegex) { continue }
    }
    if ($filteredTerms -notcontains $txt) { $filteredTerms += $txt }
    if ($filteredTerms.Count -ge 8) { break }
  }
  $terms = @($filteredTerms)
  if (-not $terms -or $terms.Count -eq 0) { return 0 }

  $added = 0
  $now = Get-Date
  foreach ($term in $terms) {
    $termLower = ([string]$term).Trim().ToLowerInvariant()
    if ([string]::IsNullOrWhiteSpace($termLower)) { continue }
    if ($termLower -match 'linkedin\.com|facebook\.com|instagram\.com|tiktok\.com') { continue }
    if ($termLower -match '^[a-z0-9.-]+\.[a-z]{2,24}$' -and ($globalExcludeDomains -contains $termLower)) { continue }
    foreach ($fn in @("PRENSA", "BOOKING", "PROGRAMACION", "MANAGEMENT")) {
      $keyword = Convert-FunctionToKeyword -Function $fn
      $query = ""
      if ([string]$term -match '^[a-z0-9.-]+\.[a-z]{2,24}$') {
        $query = ("site:{0} espana industria musical {1} email contacto directo" -f $term, $keyword).Trim()
      } else {
        $query = ("{0} {1} email contacto directo espana industria musical ""@"" ""contacto""" -f $term, $keyword).Trim()
      }
      $family = ("followup|{0}" -f $fn).ToLowerInvariant()
      $queryHash = Get-QueryHash -Sheet $Sheet -Query $query
      if ($KnownHashes.ContainsKey($queryHash)) { continue }
      if (Is-QueryOnCooldown -State $State -QueryHash $queryHash -Sheet $Sheet -Family $family -Now $now) {
        continue
      }
      $priority = Get-TaskPriority -State $State -QueryHash $queryHash -Sheet $Sheet -Family $family -FamilyBoost $FamilyBoost -IsFollowUp:$true
      $task = [PSCustomObject]@{
        sheet = $Sheet
        family = $family
        query = $query
        queryHash = $queryHash
        priority = $priority
        followUp = $true
      }
      [void]$Queue.Add($task)
      $KnownHashes[$queryHash] = $true
      $added += 1
    }
  }
  return $added
}

function Build-DumpUrl {
  param(
    [pscustomobject]$Task,
    [int]$TargetCount,
    [switch]$UseDryRun
  )
  $qEnc = [System.Uri]::EscapeDataString([string]$Task.query)
  $sEnc = [System.Uri]::EscapeDataString([string]$Task.sheet)
  $url = ("{0}?action=crm_dump&sheet={1}&targetCount={2}&profile=AGRESIVO_CAUDAL&query={3}" -f $baseUrl, $sEnc, $TargetCount, $qEnc)
  if ($UseDryRun) { $url += "&dryRun=1" }
  return $url
}

$DurationHours = [Math]::Max(1, $DurationHours)
$SleepSeconds = [Math]::Max(3, $SleepSeconds)
$BurstPerSheet = [Math]::Max(1, $BurstPerSheet)
$TargetRows = [Math]::Max(50, $TargetRows)
$TargetCountPerCall = [Math]::Min(400, [Math]::Max(40, $TargetCountPerCall))
$OnlySheet = [string]$OnlySheet
$OnlySheet = $OnlySheet.Trim()
$globalExcludeDomains = @()
if (-not [string]::IsNullOrWhiteSpace($ExcludeDomainsCsv)) {
  $chunks = @($ExcludeDomainsCsv.Split(","))
  foreach ($chunk in $chunks) {
    $d = Normalize-DomainToken -DomainRaw ([string]$chunk)
    if ([string]::IsNullOrWhiteSpace($d)) { continue }
    if ($globalExcludeDomains -notcontains $d) { $globalExcludeDomains += $d }
  }
}
foreach ($defaultDomain in $defaultExcludeDomains) {
  $d = Normalize-DomainToken -DomainRaw ([string]$defaultDomain)
  if ([string]::IsNullOrWhiteSpace($d)) { continue }
  if ($globalExcludeDomains -notcontains $d) { $globalExcludeDomains += $d }
}
if (-not [string]::IsNullOrWhiteSpace($OnlySheet)) {
  $plans = @($plans | Where-Object { [string]$_.sheet -eq $OnlySheet })
}
if (-not $plans -or $plans.Count -eq 0) {
  Write-Log ("No hay hojas objetivo para ejecutar. OnlySheet=" + $OnlySheet)
  return
}
$deadline = (Get-Date).AddHours($DurationHours)
$queryState = Load-QueryState
$effectivePlans = @()

Write-Log ("INICIO crm_dump_masivo | deadline={0} | targetRows={1} | burstPerSheet={2} | targetCountPerCall={3} | onlySheet={4} | dryRun={5} | booster={6} | excludeDomains={7}" -f $deadline.ToString("yyyy-MM-dd HH:mm:ss"), $TargetRows, $BurstPerSheet, $TargetCountPerCall, $OnlySheet, [bool]$DryRun, [bool]$EnableBooster, ($globalExcludeDomains -join ","))

$cycle = 0
while ((Get-Date) -lt $deadline) {
  $cycle += 1
  Write-Log ("CICLO {0} START" -f $cycle)

  $rowMap = Get-RowMap
  if (-not $rowMap) {
    Write-Log "No se pudo leer estado de filas. Reintento tras pausa."
    Start-Sleep -Seconds $SleepSeconds
    continue
  }

  $effectivePlans = Build-EffectivePlansForRowMap -Plans $plans -RowMap $rowMap
  if (-not $effectivePlans -or $effectivePlans.Count -eq 0) {
    Write-Log "No hay planes efectivos para las hojas disponibles. Reintento tras pausa."
    Start-Sleep -Seconds $SleepSeconds
    continue
  }

  $pending = @()
  foreach ($plan in $effectivePlans) {
    $sheet = [string]$plan.sheet
    $sheetLabel = $sheet
    $src = [string]$plan.sourceSheet
    if (-not [string]::IsNullOrWhiteSpace($src) -and $src -ne $sheet) {
      $sheetLabel = ("{0}=>{1}" -f $src, $sheet)
    }
    $rows = 1
    if ($rowMap.ContainsKey($sheet)) { $rows = [int]$rowMap[$sheet] }
    Write-Log ("ESTADO_PRE {0} rows={1}" -f $sheetLabel, $rows)
    if ($rows -lt $TargetRows) { $pending += $plan }
  }

  if (-not $pending -or $pending.Count -eq 0) {
    Write-Log "OBJETIVO COMPLETADO EN TODAS LAS PESTANAS."
    break
  }

  $familyBoost = Get-FamilyBoostMap -State $queryState
  $seedTasks = Build-SeedTasks -PendingPlans $pending -Cycle $cycle -RowMap $rowMap -State $queryState -FamilyBoost $familyBoost
  $taskQueue = New-Object 'System.Collections.Generic.List[object]'
  $knownHashes = @{}
  foreach ($t in $seedTasks) {
    if ($knownHashes.ContainsKey($t.queryHash)) { continue }
    [void]$taskQueue.Add($t)
    $knownHashes[$t.queryHash] = $true
  }

  $running = @()
  $maxGlobalParallel = 2
  while ($taskQueue.Count -gt 0 -or $running.Count -gt 0) {
    if ($taskQueue.Count -gt 1) {
      $sorted = @($taskQueue.ToArray() | Sort-Object -Property @{Expression = "priority"; Descending = $true}, @{Expression = "followUp"; Descending = $true})
      $taskQueue.Clear()
      foreach ($it in $sorted) { [void]$taskQueue.Add($it) }
    }

    while ($running.Count -lt $maxGlobalParallel -and $taskQueue.Count -gt 0) {
      $startIndex = -1
      for ($i = 0; $i -lt $taskQueue.Count; $i += 1) {
        $candidateTask = $taskQueue[$i]
        $sheetBusy = @($running | Where-Object { $_.sheet -eq $candidateTask.sheet }).Count -gt 0
        $familyBusy = @($running | Where-Object { $_.family -eq $candidateTask.family }).Count -gt 0
        if ($sheetBusy -or $familyBusy) { continue }
        $startIndex = $i
        break
      }
      if ($startIndex -lt 0) { break }

      $task = $taskQueue[$startIndex]
      $taskQueue.RemoveAt($startIndex)
      $jitterMs = Get-Random -Minimum 220 -Maximum 950
      Start-Sleep -Milliseconds $jitterMs

      $url = Build-DumpUrl -Task $task -TargetCount $TargetCountPerCall -UseDryRun:$DryRun
      $job = Start-Job -ScriptBlock {
        param([string]$RequestUrl)
        $lastErr = ""
        $lastContent = ""
        $usedAttempts = 0
        for ($attempt = 1; $attempt -le 2; $attempt += 1) {
          $usedAttempts = $attempt
          try {
            $response = Invoke-WebRequest -UseBasicParsing -Uri $RequestUrl -TimeoutSec 90
            $content = [string]$response.Content
            $lastContent = $content
            if (-not [string]::IsNullOrWhiteSpace($content) -and $content.Trim() -ne ".") {
              [PSCustomObject]@{
                ok = $true
                content = $content
                error = ""
                statusCode = [int]$response.StatusCode
                contentType = [string]$response.Headers["Content-Type"]
                attemptsUsed = $attempt
              }
              return
            }
            $lastErr = "respuesta vacia o no-JSON"
          } catch {
            $lastErr = $_.Exception.Message
          }
          if ($attempt -lt 2) {
            Start-Sleep -Milliseconds (Get-Random -Minimum 450 -Maximum 1300)
          }
        }
        try {
          [PSCustomObject]@{
            ok = $false
            content = [string]$lastContent
            error = [string]$lastErr
            statusCode = 0
            contentType = ""
            attemptsUsed = $usedAttempts
          }
        } catch {
          [PSCustomObject]@{
            ok = $false
            content = ""
            error = $_.Exception.Message
            statusCode = 0
            contentType = ""
            attemptsUsed = $usedAttempts
          }
        }
      } -ArgumentList @($url)

      $running += [PSCustomObject]@{
        job = $job
        sheet = [string]$task.sheet
        family = [string]$task.family
        task = $task
      }
      Write-Log ("QUEUE_START sheet={0} family={1} priority={2} qh={3}" -f $task.sheet, $task.family, $task.priority, $task.queryHash)
    }

    if ($running.Count -eq 0) { break }

    $ready = Wait-Job -Job @($running | ForEach-Object { $_.job }) -Any -Timeout 5
    if (-not $ready) { continue }

    $wrapper = $running | Where-Object { $_.job.Id -eq $ready.Id } | Select-Object -First 1
    $running = @($running | Where-Object { $_.job.Id -ne $ready.Id })

    $task = $wrapper.task
    $result = $null
    try {
      $result = Receive-Job -Job $ready -ErrorAction SilentlyContinue
    } catch {}
    Remove-Job -Job $ready -Force -ErrorAction SilentlyContinue

    $appended = 0
    $candidates = 0
    $afterEmail = 0
    $afterSpain = 0
    $afterQuality = 0
    $afterDedupe = 0
    $elapsedMs = 0
    $reasons = @{}
    $companies = @()
    $domains = @()
    $responseOk = $false

    if ($result -and $result.ok -eq $true -and -not [string]::IsNullOrWhiteSpace([string]$result.content)) {
      $res = Parse-DumpResponse -RawContent ([string]$result.content)
      if ($res) {
        $responseOk = $true
        try { $appended = [int]$res.appended } catch {}
        try { $candidates = [int]$res.candidates_in } catch {}
        if ($candidates -le 0) { try { $candidates = [int]$res.candidatesReceived } catch {} }
        try { $afterEmail = [int]$res.after_email } catch {}
        try { $afterSpain = [int]$res.after_spain } catch {}
        try { $afterQuality = [int]$res.after_quality } catch {}
        try { $afterDedupe = [int]$res.after_dedupe } catch {}
        try { $elapsedMs = [int]$res.elapsed_ms } catch {}
        if ($elapsedMs -le 0) { try { $elapsedMs = [int]$res.meta.elapsedMs } catch {} }
        if ($res.reasons) { $reasons = $res.reasons }
        if ($res.appended_companies) { $companies = @($res.appended_companies) }
        if ($res.appended_domains) { $domains = @($res.appended_domains) }

        if (($reasons.Count -eq 0) -and $res.dropped) {
          $legacyMissing = 0
          $legacyGeneric = 0
          $legacyDup = 0
          $legacyOutside = 0
          $legacyName = 0
          $legacyCompany = 0
          try { $legacyMissing = [int]$res.dropped.missingEmail } catch {}
          try { $legacyGeneric = [int]$res.dropped.genericEmail } catch {}
          try { $legacyDup = [int]$res.dropped.duplicateEmail } catch {}
          try { $legacyOutside = [int]$res.dropped.outsideSpain } catch {}
          try { $legacyName = [int]$res.dropped.missingName } catch {}
          try { $legacyCompany = [int]$res.dropped.missingCompany } catch {}
          if ($legacyMissing -gt 0) { $reasons["INVALID_EMAIL"] = $legacyMissing }
          if ($legacyGeneric -gt 0) { $reasons["GENERIC_WEAK"] = $legacyGeneric }
          if ($legacyDup -gt 0) { $reasons["DUPLICATE_IN_SHEET"] = $legacyDup }
          if ($legacyOutside -gt 0) { $reasons["NO_SPAIN_SIGNAL"] = $legacyOutside }
          if ($legacyName -gt 0) { $reasons["MISSING_NAME_AND_ROLE"] = $legacyName }
          if ($legacyCompany -gt 0) { $reasons["MISSING_COMPANY"] = $legacyCompany }
          $reasons["APPENDED"] = [int]$appended

          if ($afterEmail -le 0 -and $candidates -gt 0) {
            $afterEmail = [Math]::Max(0, $candidates - $legacyMissing)
          }
          if ($afterSpain -le 0 -and $afterEmail -gt 0) {
            $afterSpain = [Math]::Max(0, $afterEmail - $legacyOutside)
          }
          if ($afterQuality -le 0 -and $afterSpain -gt 0) {
            $afterQuality = [Math]::Max(0, $afterSpain - $legacyGeneric - $legacyName - $legacyCompany)
          }
          if ($afterDedupe -le 0 -and $afterQuality -gt 0) {
            $afterDedupe = [Math]::Max(0, $afterQuality - $legacyDup)
          }
        }

        if ($appended -gt 0 -and ($domains.Count -eq 0) -and $res.meta -and $res.meta.sourceUrlsSample) {
          foreach ($u in @($res.meta.sourceUrlsSample | Select-Object -First 12)) {
            $dom = Get-DomainFromUrl -UrlRaw ([string]$u)
            if ([string]::IsNullOrWhiteSpace($dom)) { continue }
            if ($domains -notcontains $dom) { $domains += $dom }
          }
        }
      } else {
        $rawPreview = [string]$result.content
        if ($rawPreview.Length -gt 180) { $rawPreview = $rawPreview.Substring(0, 180) }
        $rawPreview = $rawPreview.Replace("`r", " ").Replace("`n", " ")
        Write-Log ("ERROR parse JSON sheet={0} qh={1}: respuesta no parseable preview='{2}'" -f $task.sheet, $task.queryHash, $rawPreview)
      }
    } else {
      $errMsg = ""
      if ($result) { $errMsg = [string]$result.error }
      Write-Log ("ERROR DUMP sheet={0} family={1} qh={2}: {3}" -f $task.sheet, $task.family, $task.queryHash, $errMsg)
    }

    $yieldPct = Update-QueryStateAfterRun -State $queryState -Task $task -Candidates $candidates -Appended $appended -ResponseOk:$responseOk
    if ($yieldPct -ge 8.0) {
      if (-not $familyBoost.ContainsKey($task.family)) { $familyBoost[$task.family] = 0 }
      $familyBoost[$task.family] = [int]$familyBoost[$task.family] + 1
    }
    Save-QueryState -State $queryState

    Write-Log ("DUMP {0} family={1} appended={2} candidates={3} yield={4:N2}% query={5}" -f $task.sheet, $task.family, $appended, $candidates, $yieldPct, $task.query)
    Write-JsonExecutionLog -Sheet $task.sheet -Family $task.family -Query $task.query -QueryHash $task.queryHash -CandidatesIn $candidates -AfterEmail $afterEmail -AfterSpain $afterSpain -AfterQuality $afterQuality -AfterDedupe $afterDedupe -Appended $appended -Reasons $reasons -ElapsedMs $elapsedMs

    if ($responseOk -and $appended -ge 1 -and (($companies.Count -gt 0) -or ($domains.Count -gt 0))) {
      $addedFollowUps = Add-FollowUpTasks -Queue $taskQueue -KnownHashes $knownHashes -State $queryState -FamilyBoost $familyBoost -Sheet $task.sheet -Companies $companies -Domains $domains
      if ($addedFollowUps -gt 0) {
        Write-Log ("FOLLOW_UP_ADDED sheet={0} qh={1} tasks={2}" -f $task.sheet, $task.queryHash, $addedFollowUps)
      }
    }
  }

  if (-not $DryRun -and (($cycle % $cleanupEveryCycles) -eq 0)) {
    try {
      $cleanup = Invoke-Json -Url ($baseUrl + "?action=crm_cleanup_ai") -TimeoutSec 240
      $totalChanges = 0
      if ($cleanup -and $cleanup.reviewedSheets) {
        foreach ($it in $cleanup.reviewedSheets) {
          try { $totalChanges += [int]$it.changesCount } catch {}
        }
      }
      Write-Log ("CLEANUP_AI cambios={0}" -f $totalChanges)
    } catch {
      Write-Log ("ERROR CLEANUP_AI: " + $_.Exception.Message)
    }
  } elseif (-not $DryRun) {
    Write-Log ("CLEANUP_AI pospuesto: se ejecuta cada {0} ciclos para priorizar caudal." -f $cleanupEveryCycles)
  } else {
    Write-Log "CLEANUP_AI omitido en DryRun."
  }

  $postMap = Get-RowMap
  if ($postMap) {
    $allDone = $true
    $snapshot = @()
    $plansForPost = @($effectivePlans)
    if (-not $plansForPost -or $plansForPost.Count -eq 0) { $plansForPost = @($plans) }
    foreach ($plan in $plansForPost) {
      $sheet = [string]$plan.sheet
      $sheetLabel = $sheet
      $src = [string]$plan.sourceSheet
      if (-not [string]::IsNullOrWhiteSpace($src) -and $src -ne $sheet) {
        $sheetLabel = ("{0}=>{1}" -f $src, $sheet)
      }
      $rows = 1
      if ($postMap.ContainsKey($sheet)) { $rows = [int]$postMap[$sheet] }
      $snapshot += [PSCustomObject]@{
        sheet = $sheet
        usedRows = $rows
        contacts = [Math]::Max(0, $rows - 1)
      }
      Write-Log ("ESTADO_POST {0} rows={1}" -f $sheetLabel, $rows)
      if ($rows -lt $TargetRows) { $allDone = $false }
    }
    $snapshot | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $countsPath -Encoding UTF8
    if ($allDone) {
      Write-Log "OBJETIVO COMPLETADO TRAS CICLO."
      break
    }
  }

  Write-Log ("CICLO {0} END" -f $cycle)
  Start-Sleep -Seconds $SleepSeconds
}

Save-QueryState -State $queryState
Write-Log "FIN crm_dump_masivo"
