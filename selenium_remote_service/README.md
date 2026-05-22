# SELENIUM REMOTE SERVICE

Servicio API para usar Selenium como motor de scraping remoto.

Se conecta con el Apps Script por `HYBRID_SCRAPER_ENDPOINT`.

Stack open source activo:

- `requests` + `BeautifulSoup` + `lxml` para crawling/parsing rapido.
- `Selenium` como fallback para webs dinamicas.
- `SearXNG` opcional como metabuscador (si defines `SEARXNG_BASE_URL`).
- `Ollama` local opcional para sembrar fuentes relevantes sin coste API externo.

## 1) ENDPOINTS

- `GET /health`
- `POST /api/search`

## 2) ARRANQUE RAPIDO (DOCKER)

Desde la raiz del proyecto:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start_selenium_remote_docker.ps1 -ApiToken "TU_TOKEN"
```

Health local:

- `http://localhost:8080/health`

## 3) PARAR SERVICIO

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\stop_selenium_remote_docker.ps1
```

## 4) CONECTARLO CON APPS SCRIPT

Cuando tengas URL publica (o tunel), configura:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\configure_hybrid_remote.ps1 `
  -Endpoint "https://tu-dominio-publico/api/search" `
  -Token "TU_TOKEN" `
  -Enabled $true `
  -ClaspUser default
```

## 5) VARIABLES DE ENTORNO

- `API_TOKEN` (opcional, recomendado)
- `SELENIUM_PAGELOAD_TIMEOUT` (default 10)
- `SELENIUM_WAIT_AFTER_LOAD_MS` (default 600)
- `SEARCH_HTTP_TIMEOUT` (default 10)
- `SEARCH_HTTP_ATTEMPTS` (default 1)
- `SEARCH_QUERY_TIME_BUDGET_SEC` (default 18)
- `MAX_SEARCH_QUERIES` (default 6)
- `MAX_SOURCE_LINKS` (default 50)
- `MAX_SEARCH_SECONDS` (default 45)
- `MAX_PAGES_PER_HOST` (default 4)
- `MAX_LINKS_PER_QUERY` (default 28)
- `PAGE_HTTP_TIMEOUT` (default 7)
- `SELENIUM_FALLBACK_MAX_PER_REQUEST` (default 2)
- `SEARCH_PROVIDER_ORDER` (default `searxng,duckduckgo_html,bing_html,bing_rss,brave_html`)
- `SEARXNG_BASE_URL` (opcional, ejemplo `http://localhost:8081`)
- `SEARXNG_LANGUAGE` (default `es`)
- `SEARXNG_ENGINES` (opcional, lista separada por comas)
- `ENABLE_OLLAMA_ENTITY_SEEDS` (default `1`)
- `OLLAMA_ENDPOINT` (default `http://127.0.0.1:11434/api/generate`)
- `OLLAMA_MODEL` (opcional, si no se define se auto-selecciona el mejor modelo local disponible por perfil)
- `OLLAMA_TIMEOUT_SEC` (default `24`)
- `OLLAMA_SEED_CACHE_TTL_SEC` (default `3600`)
- `OLLAMA_MODEL_CACHE_TTL_SEC` (default `600`)
- `STRICT_NON_GENERIC_CONTACTS` (default `1`)
- `FORCE_FULL_NAME_WHEN_REQUIRE_NAME` (default `1`)
- `MAX_CONTACTS_PER_DOMAIN` (default `3`)

## 6) EJEMPLO PAYLOAD /api/search

```json
{
  "query": "periodistas musicales madrid indie rock",
  "scope": "PROV_COM_MADRID",
  "targetCount": 20,
  "strict": {
    "requireEmail": true,
    "requirePhone": false,
    "requireName": false,
    "requireCompany": false
  },
  "options": {
    "disallowGenericMailboxEmails": true,
    "allowPhoneCollection": false
  },
  "metadata": {
    "jobId": "abc",
    "step": 1,
    "profile": "HIBRIDO_AHORRO",
    "timezone": "Europe/Madrid"
  }
}
```

## 7) FORMATO RESPUESTA

El servicio devuelve:

- `ok`
- `contacts[]` con campos compatibles con Apps Script:
  - `empresa`
  - `nombre_contacto`
  - `descripcion_medio_empresa`
  - `cargo`
  - `funcion_cargo`
  - `email`
  - `telefono`
  - `web`
  - `dominio_web_generico`
  - `source_url`
  - `source_title`
  - `source_snippet`
  - `fuente`
  - `notas`
- `meta`
  - incluye `sourceUrlsSample` para trazabilidad de fuentes candidatas.

## 8) NOTAS DE CALIDAD

- En consultas musicales (indie/rock/musica), el servicio agrega semillas curadas de medios/entidades para evitar arrancar en cero.
- El filtro de nombre en modo estricto bloquea alias genericos (`tienda`, `libros`, etc.) y mantiene nombres de persona verificables.
- Anti-web-generica reforzado: bloquea agregadores/grandes plataformas y prioriza paginas con contexto real de persona/equipo/prensa.
- Seleccion automatica de modelo Ollama: en `CALIDAD_MAXIMA` intenta usar modelos locales mas potentes sin coste API externo.
