# APP_ARTES-BUHO_BUSCA-CONTACTOS - GOOGLE SHEETS + GOOGLE PLACES API

## 1) OBJETIVO

Buscar contactos reales en internet.

Guardar solo contactos con evidencia web.

Evitar datos inventados.

---

## 1.0) POLITICA DE FUENTE (OBLIGATORIA)

- discovery de empresas y leads: solo Google Places API
- prohibido usar scraping de resultados de Google Search para discovery
- enriquecimiento posterior: solo sobre web oficial publica de cada empresa detectada
- hoja operativa principal alineada al libro `BUSCA-CONTACTOS` (`10HvM6MRq2s8nhg-ZTssAWFxuw6VhBxe7RVu006NDUC8`)
- en ejecucion vinculada a hoja, se prioriza siempre la hoja activa y se usa `spreadsheetId` como respaldo

---

## 1.1) MARCA DEL PROYECTO

Empresa:

- `Artes BÃºho`

Desarrollador:

- `RUBEN COTON`

Colores corporativos:

- rojo
- amarillo
- blanco

---

## 2) RESUMEN RAPIDO

Al abrir la hoja:

- se abre automaticamente el popup de busqueda
- aparece la marca con icono de buho
- no pide API key en pantalla
- recuerda automaticamente la ultima busqueda (texto, cantidad, alcance y columnas)
- permite definir:
  - que buscar
  - cuantos contactos
  - objetivo de contactos hasta 10000 por busqueda
  - alcance (Municipal, Provincial, Nacional, Europeo, Internacional)
  - columnas de salida

Durante la busqueda:

- motor principal por defecto: Google Places API (Google Maps Platform) para discovery de empresas/leads
- politica activa: NO scraping de resultados de Google Search para discovery
- fuente de busqueda de negocios: Places API (nombre, direccion, telefono, website, tipo)
- despues del discovery, se visita la web oficial de cada empresa para extraer contacto publico (email/formulario)
- cada candidato se valida con URL real
- se aplican minimo 3 comprobaciones web por contacto
- el tiempo maximo del proceso se ajusta automaticamente segun objetivo y modo estricto
- auto-reintento por tiempo activo: si una ventana se agota, continua sola sin parar
- segundo plano real: un trigger temporal sigue avanzando el job aunque cierres el popup o la pestana
- persistencia duradera de estado: el job se guarda en almacenamiento persistente (ademas de cache) para sobrevivir cortes y ventanas largas
- continuidad multi-dia: puedes cerrar navegador, apagar PC y volver al dia siguiente para reanudar monitorizando el mismo job
- monitor reanudable: al abrir el popup puedes recuperar el job activo y ver estado, restantes y errores
- backoff inteligente por errores: si hay timeout/cuota temporal, entra en pausa de seguridad y reintenta solo sin romper el proceso
- tolerancia a almacenamiento: si Google devuelve un error temporal de lectura/escritura (`DEADLINE_EXCEEDED`), el estado intenta recuperarse desde persistencia sin cortar el job
- polling robusto en popup: ante fallo temporal de servidor/almacenamiento, la ventana no se detiene; reintenta sola con backoff
- si no hay evidencia real en HTML, se descarta
- se bloquean falsos emails tecnicos (por ejemplo `logo@2x.png`)
- modo estricto activo por columna: si pides EMAIL/TELEFONO/NOMBRE CONTACTO/EMPRESA, ese dato debe quedar verificado
- no hay columnas obligatorias: solo se exige de forma estricta la columna que tu incluyes
- saneamiento de columnas activo: solo se eliminan columnas vacias o cabeceras duplicadas exactas (ya no se eliminan por "tipo duplicado")
- se respeta al 100% la configuracion del popup: al reabrir, aparecen las mismas columnas y descripciones de la ultima busqueda
- clasificacion de columnas mejorada: `Descripcion del medio/empresa`, `Funcion del cargo` y `Dominio web generico` ya no se rellenan con el nombre de empresa
- completado inteligente de columnas informativas: si `Descripcion del medio/empresa` o `Funcion del cargo` llegan vacias, el sistema intenta completarlas con evidencia real de la web (meta description, snippet y texto de pagina) y, si no alcanza, aplica inferencia controlada por cargo
- descripcion anti-publicidad: cuando detecta texto promocional tipo "Visita ... informate ...", lo adapta a una descripcion neutra/profesional del medio o empresa
- sin inventar texto semantico: si no hay evidencia suficiente para `Descripcion del medio/empresa` o `Funcion del cargo`, queda vacio y se escribe `IA no encuentra`
- filtros de busqueda adaptativos: si no pides TELEFONO, no se consulta telefono
- modo rapido de verificacion: valida primero la web origen y solo abre paginas extra si faltan evidencias
- perfil de ejecucion preconfigurado en `CALIDAD_MAXIMA` para maximizar calidad con IA local (sin coste Gemini)
- mapeo de perfil GAS -> IA local forzado a pensamiento avanzado:
  - `CALIDAD_MAXIMA` -> `investigacion`
  - `AGRESIVO_CAUDAL` -> `pro`
  - `HIBRIDO_AHORRO` -> `pro`
  - `TURBO` -> `equilibrado`
- en `AGRESIVO_CAUDAL`, prioridad absoluta a caudal:
  - permite mas candidatos y mas fuentes por paso
  - reduce checks minimos (web/email) ignorando quality lock global
  - desactiva auditoria email estricta como bloqueo duro
  - permite buzones de rol cuando son la unica evidencia publica
  - no exige nombre/empresa para no frenar el llenado de filas
- en `HIBRIDO_AHORRO`, se usa extraccion por codigo (sin LLM por pagina) para dar velocidad y coste estable sin Gemini
- en `CALIDAD_MAXIMA`, el endpoint local combina extraccion rapida + enriquecimiento IA solo cuando hace falta (evita timeouts largos por pagina)
- en `CALIDAD_MAXIMA`, se fuerza profundidad maxima (mas validaciones y filtro de rol mas estricto) para priorizar calidad
- en `CALIDAD_MAXIMA`, se amplio la profundidad de rastreo local (mas fuentes, mas subpaginas y mayor presupuesto por llamada) sin activar Gemini
- fallback Gemini desactivado (`fallback=never`) para coste minimo
- IA externa desactivada por defecto (`forceDisableGeminiEverywhere=true`) para no consumir Gemini en la busqueda normal
- modo hibrido activo: endpoint remoto de IA local (`/api/search`) como motor principal y continuo
- email profesional directo: se descartan buzones genericos (`info@`, `contacto@`, `hello@`, `admin@`, etc.)
- filtro email reforzado por perfil:
  - `CALIDAD_MAXIMA`: bloquea tambien buzones de rol (`comunicacion@`, `prensa@`, `media@`, `events@`, etc.)
  - `HIBRIDO_AHORRO` / `TURBO`: prioriza directos, pero no bloquea de inicio todos los buzones de rol para evitar quedarse en `0` candidatos
  - `AGRESIVO_CAUDAL`: acepta tambien buzones de rol si vienen con evidencia real en web
- auditoria de email muy estricta: validacion sintactica, evidencia en web, coherencia de dominio y verificacion DNS/MX
- contraste de dominio de email: cruza dominio del correo con web declarada, URL fuente y contexto real de la entidad para evitar dominios cruzados
- modo ULTRA activado: auditoria profunda de email; se permiten dominios personales (gmail/outlook/etc.) solo si estan verificados en web real
- inferencia de nombre desde email mejorada:
  - si el local-part viene compacto (ej. `gabricarcoba@...`), intenta recuperar nombre corto real (`Gabri`)
  - evita aceptar tokens de rol como si fueran persona (`redes`, `oficina`, `marketing`, etc.)
- fallback de contacto por rol + empresa:
  - si no hay persona verificable y el correo es de rol (ej. `oficina@`, `redes@`), genera etiqueta util
  - ejemplos: `Oficina de Sala El Sol`, `Redes de Sala El Sol`, `Contacto de <Empresa>`
- boton PURGAR: detiene cualquier proceso en marcha
- consola detallada: muestra cada paso y motivo de descarte/validacion
- anti-duplicados por email en tiempo real: se valida durante la busqueda y no se guarda el mismo correo dos veces
- visibilidad de columnas: al iniciar, el script vuelve a mostrar las columnas de salida (si alguna estaba oculta)
- visibilidad de filas: al iniciar y al escribir, el script muestra las filas para evitar ocultas
- legibilidad: cada fila nueva ajusta altura automaticamente segun el texto (wrap + auto alto)
- scraping remoto optimizado: primero intenta HTTP ligero y usa Selenium como refuerzo
- Selenium autorecuperable: si el driver falla o se bloquea, se reinicia automaticamente
- stack open source de busqueda: `requests + BeautifulSoup + lxml + Selenium` con opcion `SearXNG` para metabuscador propio
- cache por URL en cada ciclo de scraping para evitar refetch duplicado y acelerar
- cache por URL tambien en verificacion de Apps Script para evitar refetch repetido en el mismo paso
- limite por host en scraping para evitar atasco en un solo dominio y mejorar variedad
- presupuesto de tiempo por ejecucion del endpoint remoto para evitar bloqueos largos
- filtro geotematico en enlaces: prioriza fuentes alineadas con alcance (ej. Espana/Madrid) y bloquea dominios de ruido
- Selenium acotado por paso: solo entra como refuerzo en pocos enlaces para evitar bloqueos y reducir coste/latencia
- scraping mas exhaustivo: explora subpaginas internas relevantes (`contacto`, `equipo`, `prensa`, `about`, etc.)
- anti-duplicados reforzado: deduplicacion prioritaria por email durante la extraccion remota
- filtro anti-basura de origen: se descartan URLs de baja calidad tipo `tablon`, `listado`, `directorio`, `clasificados`, `feed`, `sitemap`
- filtro anti-paginas genericas: se descartan paginas origen con patrones de anuncios/listados/contactos sin calidad de contacto profesional
- filtro anti-nombre generico: no se aceptan nombres como `Tablon de anuncios`, `Contacto`, `Medios`, etc.
- filtro anti-empresa generica: no se aceptan empresas con etiquetas genericas (`Contacto`, `Inicio`, `Equipo`, `Menu`, etc.)
- filtro anti-email de rol ampliado: se bloquean tambien `call.center@`, `newsletter@`, `suscripciones@`, `atencioncliente@`, etc.
- si la consulta pide persona fisica / nombre completo, se exige nombre de persona (nombre+apellido) en la salida
- filtro anti-descripcion basura: se descartan textos tipo `ultimas noticias, opinion, fotos y videos de contactos`
- refuerzo de mapeo de nombre: se reduce el peso de `source_title` para evitar arrastrar titulos de listados a `NOMBRE COMPLETO`
- IA minimizada al maximo: Gemini queda desactivado por defecto en produccion para control de coste
- objetivos altos (ej. 3000) optimizados: anti-estancamiento adaptativo y ampliacion automatica del plan de consultas antes de parar
- objetivos altos con contador coherente: el maximo de pasos del job se ajusta al objetivo para evitar confusion visual (ej. objetivo 3000 -> pasos hasta 3000)
- anti-bloqueo en estancamiento: si hay varias rondas sin candidatos, el endpoint local activa relajacion controlada (sin abrir Gemini) para recuperar captacion sin perder trazabilidad
- anti-estancamiento v118: el endpoint conserva tambien el final del prompt (cola) para no perder variaciones por paso en consultas largas
- anti-estancamiento v118: cuando se acumulan rondas sin resultados, reduce prioridad de semillas curadas fijas y fuerza mas diversidad de busqueda
- anti-estancamiento v119: si las SERP no aportan enlaces utiles en 1-2 intentos, corta esa fase y pasa antes al fetch real de fuentes curadas para no perder la ventana de tiempo
- captacion reforzada en modo local: no bloquea `/contacto` solo por URL; primero lee contenido real y decide calidad con evidencia
- extraccion email mejorada: decodifica emails protegidos por Cloudflare (`data-cfemail` y `/cdn-cgi/l/email-protection#...`)
- filtro de buzones de rol en scraper remoto ahora respeta la opcion recibida (`disallowRoleMailboxEmails`) en vez de bloquear siempre
- anti-estancamiento v118: reserva tiempo minimo para fase de lectura/verificacion de paginas (evita gastar todo el tiempo solo en buscar enlaces)
- anti-estancamiento v122: en rondas sin resultados reduce proveedores/tiempos de busqueda y prioriza lectura real de fuentes para evitar `paginas=0`
- consola reforzada: muestra explicitamente el modelo de IA local activo por paso (`[CLIENTE] IA local activa: ...`)
- filtro de nombre personal reforzado: se bloquean nombres de 1 sola palabra y etiquetas basura (`http`, `oficina`, `bandas`, `webmaster`, etc.)
- filtro de nombre personal ampliado: bloquea tambien patrones no-persona de contenido (`noticias`, `lanzamientos`, `conciertos`, `agenda`, `cartelera`, etc.)
- filtro de nombre personal anti-rol: bloquea tambien etiquetas no-persona como `publicidad`, `marketing`, `comercial`, `redaccion`, `comunicacion`
- extraccion por email endurecida: no se genera nombre desde local-part generico o tecnico (`oficina@`, `adminweb@`, `http...`)
- diagnostico hibrido robusto: evita ceros falsos en trazas cuando llegan valores string (`\"0\"`) y muestra mejor `pages_scanned/emails_candidates`
- captura de nombre mas estable: si en fase remota no sale nombre inmediato, el candidato no se pierde; la verificacion final en GAS intenta reconstruir nombre real y filtra ahi con calidad
- procesos locales silenciosos: servicio Selenium/tunel arrancan en segundo plano sin abrir ventanas CMD visibles
- priorizacion de consultas sectoriales: en prompts CRM largos, el endpoint local lanza primero queries musicales directas (periodista/redactor/booking/promotor) y deja las consultas largas para despues
- semillas web musicales de Espana: se inyectan fuentes base verificadas para no arrancar en vacio cuando el buscador externo devuelve ruido
- semillas por IA local (Ollama): el endpoint puede proponer dominios oficiales candidatos sin usar Gemini, con cache local y coste externo 0
- selector automatico de modelo local potente: si no fijas `OLLAMA_MODEL`, el endpoint elige el mejor modelo local disponible segun perfil (`investigacion/pro/equilibrado`)
- anti-web-generica reforzado: se bloquean plataformas masivas/agregadores y se prioriza contexto de persona real (equipo/prensa/staff/management)
- control anti-concentracion: limite de contactos por dominio para evitar que una sola web domine toda la base
- anti-bucle de dominios ajustado para alto caudal: la supresion por dominio entra mas tarde y se relaja de forma controlada cuando hay estancamiento en `AGRESIVO_CAUDAL`
- diversificacion por ciclo en modo hibrido: cada paso genera variaciones nuevas por rol/ciudad/canal para abrir fuentes distintas y no repetir siempre el mismo dominio
- deduplicacion CRM reforzada entre pestanas objetivo: el volcado CRM evita repetir emails ya guardados en cualquier pestana del bloque CRM
- coherencia nombre-email reforzada en salida final: si el nombre no encaja con el email, se repara desde el email o se reemplaza por etiqueta de rol util
- trazabilidad ampliada del endpoint local: ahora incluye muestra de URLs fuente candidatas (`sourceUrlsSample`) para auditar por que una ronda encontro o no encontro contactos
- correccion de codificacion UTF-8 en extraccion local: arreglado bug de regex con caracteres mojibake (`Ãƒ...`) que cortaba palabras con tilde y reducia calidad de busqueda
- validacion geotematica afinada: para Comunidad de Madrid, permite dominios globales (`.com/.net/.org/.eu`) si el contenido es claramente musical y de contacto, evitando falsos descartes
- extraccion local reforzada en perfiles `pro/equilibrado/hibrido_ahorro`: activa parsing IA local limitado por pagina para subir captacion sin disparar coste
- ahorro hibrido optimizado: en primeras rondas usa estrategia `seed-first` (sin abrir buscadores externos) para sacar contactos validos mas rapido y barato
- timeout dinamico por presupuesto: las llamadas web del endpoint local se ajustan al tiempo restante del paso para evitar desbordes y parones largos
- fusion IA+regex por pagina: si la IA local devuelve pocos contactos, se combinan con candidatos extraidos por codigo para no perder resultados validos
- saneamiento de nombres reforzado: se bloquean artefactos tipo `u003e...` y etiquetas no personales para evitar nombres basura
- filtro de descripcion ajustado: en calidad alta ya no se descarta toda la fila por descripcion vacia; se completa con texto estimado de fuente para no perder contactos validos
- candado de calidad activo: aunque se optimice velocidad/coste, no baja el minimo de verificacion web y auditoria de email
- coherencia nombre-email reforzada en IA local: en calidad maxima, si el nombre no cuadra con el email, el contacto se corrige o se descarta
- cuando el prompt pide persona fisica/nombre completo, se exige nombre completo real (si no hay evidencia suficiente, no se guarda)
- consola mas limpia: evita repetir lineas identicas consecutivas al iniciar/reanudar

Resultado:

- contactos en `CONTACTOS_WEB`
- trazabilidad en `TRAZA_OBTENCION`
- cabeceras en rojo, texto blanco y borde amarillo
- al regenerar columnas, se limpian cabeceras antiguas y se escriben solo las nuevas
- no se autoagregan columnas obligatorias (solo se usan las que tu configuras)
- los telefonos se guardan sin simbolo `+` al inicio para evitar formulas en hoja

---

## 2.1) PROGRAMA ABIERTO (MEMORIA DE CASOS)

Este proyecto es **abierto y evolutivo**:

- el usuario define prompt
- el usuario define cabeceras
- el usuario define que significa cada columna

Por eso, cada caso real nuevo se convierte en regla de producto:

- se detecta en consola/hoja
- se corrige en codigo
- se deja documentado aqui
- se valida en ejecucion real

### Casos incorporados (contactos musicales, Madrid)

- deduplicado por email solo dentro de la ejecucion actual (no bloquea por historico antiguo)
- `min_checks` rebajado y equilibrado para mejorar caudal sin perder control de calidad
- inferencia de nombre desde email directo:
  - ejemplo: `pablo@marca.com` -> `Pablo`
  - con filtro anti-buzones de rol/tecnicos para evitar basura
- si falta nombre en fase remota, no se descarta de forma agresiva:
  - la capa final de verificacion en GAS intenta reconstruirlo con evidencia real
- mejora de uso de IA local para semillas:
  - evita modelos que devuelven respuesta vacia en `/api/generate`
  - fallback automatico a modelo local estable
- anti-estancamiento reforzado:
  - mas diversidad de fuentes
  - menos bucles en las mismas webs
  - mejor reparto de tiempo entre busqueda y lectura real de paginas
- replanificacion temprana por estancamiento (nuevo):
  - no espera a agotar todo el contador de rondas sin avance
  - cada bloque corto sin nuevos contactos inyecta consultas nuevas automaticamente
  - evita la sensacion de "atasco" durante muchos pasos seguidos
- anti-reciclado por dominio (nuevo):
  - si detecta repeticion de dominios ya explotados, aplica exclusiones temporales `-site:...`
  - fuerza entrada de fuentes nuevas y reduce bucles de emails duplicados
  - la exclusion es dinamica y reversible dentro de la misma ejecucion
- prefiltro hibrido relajado (nuevo):
  - no bloquea tan pronto por nombre/empresa/rol en la fase de candidatos
  - deja pasar mas URLs a la verificacion final estricta
  - resultado: menos pasos en `0 candidatos` cuando si hay seÃ±ales en web
- bloqueo por dominio en estancamiento (ajustado):
  - por defecto ya no bloquea dominios completos al estancarse
  - evita quedarte sin caudal en nichos pequenos con pocas fuentes repetidas
- inferencia de nombre desde email mejorada (nuevo):
  - acepta casos mixtos tipo `booking.marta@dominio.com` y extrae `Marta`
  - mantiene filtros anti-basura para no aceptar tokens de rol como nombre
  - bloquea locales no-persona como `tienda@`, `lopd@`, `rgpd@`, `legal@`, `privacidad@`
  - evita falsos nombres tipo `Tienda` o `Lopd` en columna de contacto
- auditoria semantica final por fila (nuevo):
  - revisa coherencia de `NOMBRE`, `DESCRIPCION`, `CARGO` y `FUNCION` antes de escribir
  - si detecta texto de cronica/noticia en `DESCRIPCION`, lo reemplaza por descripcion neutra de categoria
  - si `NOMBRE` no parece persona real, intenta recuperar desde email; si no, limpia el campo
  - rellena `FUNCION` desde `CARGO` cuando falta y hay contexto suficiente
- ajuste de velocidad en `CALIDAD_MAXIMA`:
  - se reduce exploracion extra por candidato para recortar tiempo por paso
  - objetivo: mantener calidad y bajar latencia de `Revision fuentes`
- redes sociales optimizadas (nuevo):
  - LinkedIn priorizado en captacion (`/in/` y `/company/`)
  - Instagram/TikTok/Facebook permitidos con filtro de perfil valido
  - desenvuelve redirecciones sociales (`l.instagram`, `l.facebook`, `linkedin redir`)
  - si el perfil social enlaza web oficial, se visita esa web para buscar correo verificable
- persistencia real del perfil en popup (nuevo):
  - se respeta el perfil guardado por el usuario entre aperturas
  - ya no se fuerza siempre el perfil por defecto al reabrir
- limpieza reforzada de empresa generica (nuevo):
  - se bloquean etiquetas basura como `somos`, `quienes-somos`, `about`, `sobre`
  - si la empresa llega generica, se recupera desde dominio real (`rockdelux.com` -> `Rockdelux`)
- fallback de contacto generico por empresa (nuevo):
  - si no hay nombre de persona ni buzon de rol claro, usa `Contacto de <Empresa>`
  - ejemplo: `ruta66@...` sin nombre verificable -> `Contacto de Ruta 66`

### Regla de mantenimiento continuo

Cada nuevo caso que reportes se trata asi:

1. se reproduce con log real
2. se clasifica (captacion, verificacion, dedupe, rendimiento, UX)
3. se aplica correccion en codigo
4. se actualiza esta seccion del `README`
5. se valida con nueva corrida en la hoja

---

## 3) GARANTIA DE EXTRACCION WEB REAL

El sistema NO guarda un contacto solo por venir del modelo.

Reglas:

- debe existir `source_url`
- se hace `UrlFetchApp.fetch(source_url)`
- se extraen emails y telefonos desde el HTML real
- comprobacion 1: URL valida y accesible
- comprobacion 2: evidencia del dato estricto pedido (email/telefono/nombre/empresa) en web real
- comprobacion 3: validacion minima de calidad sobre la evidencia web encontrada
- comprobacion 4 (si aplica): email con formato valido (anti-archivos como `.png`, `.jpg`, `.svg`)
- si una columna EMAIL, TELEFONO, NOMBRE CONTACTO o EMPRESA existe y no se verifica en web, ese contacto no se guarda
- si una columna queda sin dato, se escribe `IA no encuentra`

---

## 4) HOJAS QUE USA

`CONTACTOS_WEB`

- hoja principal de resultados
- cabeceras personalizables
- estructura minima aplicada: 5000 filas, 40 columnas

`TRAZA_OBTENCION`

- pestaÃ±a de evidencia
- deja rastro de como se obtuvo cada contacto
- incluye URL origen y evidencia detectada

---

## 4.1) INSPECCION COMPLETA DE HOJA (REMOTO)

Endpoint web app:

- `...?action=inspect_sheet_full`
- `...?action=active_job_status`
- `...?action=purge_running_jobs`
- `...?action=start_job_autotest`
- `...?action=run_job_step&jobId=...`
- `...?action=cancel_job&jobId=...`
- `...?action=background_tick`

Devuelve auditoria detallada:

- estructura completa por pestana (rangos usados, filas/columnas)
- datos visibles de muestra y formulas detectadas
- formatos (colores, tipografias, negritas/cursivas, alineaciones, formatos numericos, altos/anchos)
- celdas combinadas
- validaciones y desplegables
- filtros basicos y filter views (si la API los expone)
- reglas de formato condicional
- protecciones de hoja/rango y editores

---

## 4.1.1) AUTOTEST CONTINUO REMOTO (SIN FLUJO MANUAL)

Objetivo:

- lanzar/reusar job activo
- ejecutar pasos en bucle
- revisar estado activo
- auditar hoja al final de cada ciclo

Script recomendado:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\autotest_continuo.ps1 `
  -Cycles 0 `
  -MaxStepsPerCycle 180 `
  -StaleStepsLimit 0 `
  -StepPauseSeconds 0 `
  -TargetCount 3000 `
  -Profile "AGRESIVO_CAUDAL" `
  -Scope "PROV_COM_MADRID" `
  -PurgeOnBoot $false `
  -ClearPreviousDataOnNewJob $false
```

Notas:

- `Cycles 0` = modo infinito (monitor continuo)
- reutiliza el job activo para no resetear progreso en cada ciclo
- por defecto ya NO purga al arrancar (evita perder progreso si reinicias el script)
- `StaleStepsLimit 0` desactiva corte local por estancamiento y deja que el job siga largo
- deja log en `reports/autotest_continuo_YYYYMMDD_HHMMSS.log`
- no requiere que el usuario pulse `INICIAR` manualmente

---

## 4.2) CONFIGURACION MODO HIBRIDO (IA LOCAL POTENTE)

Estado rapido:

- `...?action=hybrid_status`
- `...?action=hybrid_test`
- Al iniciar una busqueda, ahora se hace health-check automatico del endpoint.
- Si el endpoint hibrido cae varias veces seguidas (ejemplo `HTTP 502`), el job se detiene con motivo claro: `ENDPOINT_HIBRIDO_NO_DISPONIBLE` (evita bucles vacios).
- Resiliencia reforzada: si el endpoint hibrido cae (502/tunel), el job no se detiene; entra en reintento automatico con backoff en segundo plano.
- La consulta enviada al endpoint local conserva mucho mas contexto (menos recorte), para mejorar captacion de candidatos en prompts largos.

Levantar endpoint IA local potente (en tu PC):

```powershell
cd "C:\Users\elrub\Desktop\CARPETA CODEX\01_PROYECTOS\IA-RUBEN-COTON"
scripts\iniciar_endpoint_contactos_potente.cmd TU_TOKEN_OPCIONAL
```

Nota operativa importante:

- Si usas tunel Cloudflare, el puerto de origen del tunel debe coincidir con el puerto del endpoint local.
- Ejemplo correcto de este proyecto: `cloudflared tunnel --url http://127.0.0.1:8080 --no-autoupdate`
- Si el endpoint local esta en `8765` pero el tunel apunta a `8080`, veras errores `502 Bad Gateway` y el buscador no encontrara contactos.

Modo SOLO LOCAL (forzado en codigo):

- No arranca si no hay endpoint hibrido valido.
- Token del endpoint: opcional (si lo configuras, se envia; si no, no bloquea).
- Solo permite endpoint local/tunel propio (`localhost`, `127.0.0.1`, `*.trycloudflare.com`).
- Bloqueo por email de usuario (cuando Google lo expone en sesion).
- Emails permitidos por defecto: `booking@artesbuhomanagement.com`, `booking@arteburomanagement.com`, `booking@artesbuhoomanagement.com`.

Recuperacion rapida del tunel (automatico):

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\recover_hybrid_tunnel.ps1 -LocalPort 8080
```

Recuperacion + configuracion en Apps Script:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\recover_hybrid_tunnel.ps1 -LocalPort 8080 -AutoConfigure -ClaspUser default
```

Stress test continuo del endpoint local (sin Gemini):

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\stress_test_hybrid_endpoint.ps1 `
  -Endpoint "http://127.0.0.1:8080/api/search" `
  -Iterations 5 `
  -TargetCount 12 `
  -MaxSeconds 60 `
  -Profile "CALIDAD_MAXIMA" `
  -OutputJson "C:\Users\elrub\Desktop\CARPETA CODEX\04_TEMPORAL\stress_hybrid_latest.json"
```

Monitor continuo 24/7 del endpoint local (log permanente):

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\continuous_hybrid_monitor.ps1 `
  -Endpoint "http://127.0.0.1:8080/api/search" `
  -Profile "CALIDAD_MAXIMA" `
  -TargetCount 30 `
  -MaxSeconds 60 `
  -IntervalSeconds 45 `
  -Loops 0 `
  -LogFile "C:\Users\elrub\Desktop\CARPETA CODEX\04_TEMPORAL\monitor_hibrido_continuo.log"
```

Revision automatica hasta las 09:00 (salud + busqueda sample + tests):

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\revision_hasta_9am.ps1
```

Conectar endpoint remoto en Apps Script:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\configure_hybrid_remote.ps1 `
  -Endpoint "https://tu-endpoint-publico/api/search" `
  -Token "TU_TOKEN" `
  -Enabled $true `
  -ClaspUser default
```

Atajo para IA local:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\configure_hybrid_local_ia.ps1 `
  -Endpoint "https://tu-endpoint-ia-local/api/search" `
  -Token "TU_TOKEN" `
  -ClaspUser default
```

Configurar endpoint/token desde Apps Script (una sola vez):

```javascript
function configurarHibridoInicial() {
  setHybridScraperConfig({
    endpoint: "https://tu-endpoint-ia-local/api/search",
    token: "tu_token_opcional",
    enabled: true
  });
}
```

Notas:

- si `endpointReady=false`, la busqueda no arranca
- con endpoint activo, se ejecuta IA local + scraping por codigo como via principal de bajo coste
- Gemini queda apagado por defecto para evitar coste
- el endpoint acepta tambien dominio base sin ruta (se normaliza a `/api/search`)

---

## 5) API EXTERNA (GEMINI)

Gemini esta desactivado por defecto en produccion.

- no se muestra ni se pide API key en el popup
- `forceDisableGeminiEverywhere=true`
- `hybridFallbackMode=never`

- coste objetivo de IA externa: `0` en ejecucion normal

---

## 6) IDS DEL PROYECTO

- Spreadsheet ID: `10HvM6MRq2s8nhg-ZTssAWFxuw6VhBxe7RVu006NDUC8`
- Script ID (bound): `1e5bHhU8inchWZh030QwFYHhc1IIYiP1_BZYH-U31bC4sAeH1ccxWN5QS`
- Repositorio: `https://github.com/rubencoton/busca-contactos-booking-gas`

---

## 7) PUSH + DEPLOY (UN SOLO PASO)

```powershell
cd "C:\Users\elrub\Desktop\CARPETA CODEX\01_PROYECTOS\busca-contactos-booking-gas"
powershell -ExecutionPolicy Bypass -File .\scripts\push_and_deploy.ps1 -ClaspUser default -VersionDescription "tu cambio" -DeploymentDescription "tu cambio" -DeploymentId "AKfycbxxxxxxxxxxxxxxxx"
```

Ese script hace:

1. `clasp push`
2. `clasp version`
3. `clasp deploy` (si pasas `DeploymentId`, actualiza siempre el mismo webapp)

---

## 8) COMANDOS UTILES

```powershell
git status --short
git log -1 --oneline
git add .
git commit -m "mensaje"
git push origin main
```

---

## 9) NOTAS IMPORTANTES

- revisa `CONTACTOS_WEB` y `TRAZA_OBTENCION` para control de calidad
- si una web bloquea acceso, ese contacto se descarta
- si pides muchos y solo hay una parte validable, el proceso para y lo explica

---

## 11) TESTS DE REGRESION

Archivo de tests:

- `tests/regression.test.js`

Cobertura incluida:

- no duplicados por email en la misma busqueda
- no columnas fantasma en salida (tipos no soportados o duplicados)
- no basura en `Descripcion del medio/empresa` y `Funcion del cargo`

Ejecucion local:

```powershell
node --test tests/regression.test.js
```

---

## 12) SI APARECE DEADLINE_EXCEEDED

Que significa:

- Google devolvio un error temporal de almacenamiento interno

Que hace ahora el sistema:

- no corta el job por un unico fallo temporal
- reintenta estado automaticamente desde el popup
- intenta leer estado persistente si la cache falla

Que hacer como usuario:

1. Esperar unos segundos (reintento automatico)
2. Si sigue, pulsar `REANUDAR ESTADO`
3. Si aun falla, cerrar y abrir popup (el job sigue en segundo plano)

---

## 13) AJUSTES 2026-03-21 (CALIDAD DE CONTACTOS)

Cambios aplicados:

- ya no se descarta automaticamente una fuente por tener URL tipo `/contacto` o `/author`
- ahora primero se lee contenido real de la pagina y despues se decide si es valida o no
- si la URL parece de baja calidad, el sistema sube automaticamente el minimo de checks para ese candidato
- se anadio soporte para emails ocultos por Cloudflare (`data-cfemail` y `email-protection#...`)

Objetivo:

- evitar falsos descartes
- recuperar emails reales que antes salian como vacios
- mantener filtro estricto sin perder oportunidades validas

---

## 14) AJUSTES 2026-03-22 (MODO ALTO VOLUMEN 1000+)

Cambios aplicados:

- al pedir objetivos altos (>=1000), el requisito estricto de nombre se relaja antes (desde la primera fase de estancamiento)
- en alto volumen, se permite continuar con paginas de baja senal si traen evidencia util (en vez de descartarlas demasiado pronto)
- en alto volumen, se reduce el minimo de checks web para aumentar caudal sin desactivar validacion
- en alto volumen, la auditoria de email reduce exigencia tras estancamiento
- en alto volumen, se puede omitir comprobacion DNS/MX para acelerar cada paso (manteniendo evidencia web + dominio corporativo)

Objetivo:

- subir la velocidad real de captacion
- reducir pasos vacios con `0 contactos nuevos`
- acercar ejecuciones largas a volumen rentable (base grande en una sola corrida)

---

## 15) AJUSTES 2026-03-23 (ANTI-BUCLE + DIVERSIFICACION REAL)

Cambios aplicados:

- el motor hibrido ahora pide un pool mas grande por paso (sobre-muestreo) para evitar quedarse con 4-5 candidatos repetidos
- se fuerza tope por dominio dentro del mismo paso (cap por dominio) para abrir variedad de fuentes
- se anadieron intentos de consulta diversificada por paso (consultas alternativas) cuando hay estancamiento
- se pasan exclusiones de dominio al endpoint hibrido (`excludeDomains/forceExcludeDomains`) para romper reciclado
- se filtran antes de verificar los emails ya vistos (`hybridExcludeSeenEmailsAtSource`) para no gastar pasos en duplicados
- se reforzo la coherencia nombre-email:
  - si el nombre no encaja con el email, se corrige por inferencia desde el email
  - si no se puede corregir y el nombre no es obligatorio, se limpia para no guardar dato falso
- se ampliaron consultas base sin prefijo fijo del prompt largo (`periodistas`, `criticos`, `linkedin`, `facebook`, `instagram`) para aumentar cobertura de dominios nuevos

Objetivo:

- salir del bucle de un unico dominio repetido (ej. `mondosonoro.com`)
- reducir pasos vacios con `dup_email_busqueda` o `drop_bucle_dom` constante
- aumentar caudal real de contactos nuevos por minuto manteniendo control de calidad

---

## 16) AJUSTES 2026-03-23 (ACUMULACION + WATCHDOG DE VOLUMEN)

Cambios aplicados:

- corregido bug de acumulacion al reiniciar jobs:
  - antes: al arrancar nuevo job escribia desde `nextRow=2` y podia sobreescribir filas existentes
  - ahora: si `clearPreviousData=false`, calcula `nextRow` desde la ultima fila real y hace append
- cuando no se limpia la hoja, se carga estado de deduplicacion existente para evitar repetir emails ya guardados en `CONTACTOS_WEB`
- watchdog operativo actualizado:
  - reinicio automatico por estancamiento
  - rotacion de consultas para abrir fuentes nuevas (no quedarse en un solo dominio)
  - control por conteo real en hoja (`CONTACTOS_WEB`) en lugar de mirar solo el `found` del job actual
  - alcance nacional fijo en watchdog (`scope=NACIONAL_ES`) y pool de consultas en Espana
  - ejecucion silenciosa en segundo plano (sin ventanas emergentes):
    - `scripts/watchdog_hidden.vbs` lanza PowerShell oculto
    - `scripts/configurar_watchdog_oculto.ps1` deja la tarea `CodexWatchdogContactos` en modo oculto (`wscript.exe //B //nologo ...`)
  - perfil por defecto equilibrado para no saturar PC (`HIBRIDO_AHORRO`) manteniendo caudal util
  - selector de modelo local ajustado para priorizar 7B/8B y usar 14B solo como fallback (`selenium_remote_service/app/main.py`)

Objetivo:

- que los reinicios sumen contactos de verdad (no reescriban filas)
- mantener crecimiento continuo hasta objetivos altos (1000+)

---

## 17) AJUSTES 2026-04-06 (PLACES API + EXCLUSIONES DE PROMPT)

Cambios aplicados:

- el prompt ahora detecta dominios excluidos del usuario (`-site:dominio.com` y `-dominio.com`)
- esos dominios se guardan en estado (`queryExcludedDomains`) y se aplican al discovery de Google Places API
- se anaden al bloqueo de dominios del paso, junto al anti-bucle dinamico
- aunque se relaje la supresion por estancamiento, las exclusiones del usuario se mantienen activas
- se registra en diagnostico cuantas filas se descartan por exclusion de prompt (`drop_prompt_domain_excluded`)
- mejora de consultas Places:
  - limpieza mas agresiva de operadores de busqueda (`site:`, URLs, dominios literales, ruido de query)
  - extraccion de terminos foco para crear variaciones nuevas
  - tipos dinamicos segun prompt (sello, booking, management, festival, sala, prensa, estudio, etc.)
  - combinacion de consultas por tipo + ciudad + alcance para abrir dominios nuevos
- refuerzo de coherencia nombre-email en verificacion final:
  - si nombre y email no cuadran, se intenta reparar con inferencia por email
  - si no hay nombre personal fiable, se usa etiqueta util de rol (`Oficina de X`, `Redes de X`, etc.)
  - solo se descarta si no hay reparacion segura

Objetivo:

- evitar bucles en un unico dominio
- respetar exclusiones del prompt desde el primer paso
- subir volumen sin sacrificar calidad minima de dato

---

## 18) AJUSTES 2026-04-08 (ANTI-BUCLE PLACES + COHERENCIA NOMBRE-EMAIL)

Cambios aplicados:

- anti-bucle por dominio reforzado en discovery Places:
  - cuando hay estancamiento real (`staleRounds`/expansiones), fuerza diversidad por dominio
  - limita a 1 contacto por dominio en paso y reduce cap por job en modo recuperacion
  - bloquea temporalmente dominios dominantes ya repetidos para abrir fuentes nuevas
  - registra diagnostico adicional: `domain_diversity_forced`, `domain_cap_step`, `domain_cap_job`
- coherencia nombre-email reforzada en verificacion:
  - si en una web hay varios correos candidatos, vuelve a elegir el email segun el nombre detectado
  - evita cruces tipo `nombre A` con `email de B`
  - mantiene auditoria de email despues del ajuste para no perder control de calidad
- pruebas de regresion ampliadas:
  - nuevo test: `scoreEmailDomainFit_` prioriza email coherente con nombre
  - estado actual: `10/10` tests OK

Objetivo:

- reducir estancamiento en dominios repetidos (ej. un solo medio dominante)
- mejorar calidad real del CRM evitando emparejados incorrectos
- mantener velocidad alta en `AGRESIVO_CAUDAL` sin degradar trazabilidad

---

## 19) AJUSTES 2026-04-08 (ANTIESTANCAMIENTO DE CONSULTAS PLACES)

Cambios aplicados:

- evitacion de consultas repetidas sin avance:
  - si una query de Places no aporta contactos nuevos varias veces seguidas, se salta temporalmente
  - memoria por query en estado del job (`placesQueryNoGainCount`)
  - nuevo diagnostico: `drop_query_no_gain_skip`
- marcado de `place_id` descartados para no reciclar resultados:
  - cuando un lugar se descarta por dominio bloqueado, cap de dominio o falta de web en flujo con email obligatorio
  - ese `place_id` pasa a memoria y no se vuelve a evaluar en cada paso
- parametros nuevos en `APP_CONFIG`:
  - `placesMarkDroppedPlaceIdsSeen`
  - `placesSkipQueryAfterNoGainCount`
  - `placesQueryNoGainMemoryCap`
- tests de regresion ampliados:
  - `extractExcludedDomainsFromQuery_`: sintaxis variada de exclusiones
  - `getQueryExcludedDomainsForStep_`: mezcla de exclusiones base + paso sin duplicados
  - `callPlacesApiCandidates_`: salta queries estancadas sin avance repetido
  - `normalizePersonName_`: bloquea ruido tipo `New Peper` para no guardar falsos nombres
  - estado actual: `14/14` tests OK

Objetivo:

- reducir pasos vacios reciclando siempre los mismos resultados
- abrir mas rapido consultas nuevas y dominios nuevos
- mejorar caudal real de contactos por ventana de tiempo

---

## 20) AJUSTES 2026-04-08 (ANTIBUCLE POR EMPRESA EN PLACES)

Cambios aplicados:

- anti-bucle adicional por empresa normalizada:
  - no solo se controla el dominio
  - ahora tambien se limita cuantas veces entra la misma entidad (empresa) por paso y por job
  - evita reciclar multiples fichas de Places del mismo negocio cuando cambian `place_id` o URL intermedia
- memoria persistente de empresas vistas:
  - nuevo mapa en estado: `placesSeenCompanyCount`
  - seeded desde datos ya existentes en hoja (`seenCompanies`) al iniciar
  - seeded tambien al continuar jobs persistidos
- nuevos parametros en `APP_CONFIG`:
  - `placesUsePersistentSeenCompanyMemory`
  - `placesSeenCompanyMemoryCap`
  - `placesPerCompanyCapPerStep`
  - `placesPerCompanyCapPerJob`
  - `placesMaxAcceptedPerQuery`
  - `placesMaxAcceptedPerQueryDiversity`
- nuevo diagnostico:
  - `drop_per_company_cap`
  - `accepted_per_query_cap`
  - en modo diversidad forzada tambien expone `company_cap_step` y `company_cap_job`
- dedupe interno ampliado:
  - `collectExistingDedupState_` ahora devuelve `seenCompanies`
  - `dedupeRecords_` actualiza memoria de empresas ya escritas
  - compactacion de estado incluye `seenCompanies` para jobs largos

Objetivo:

- cortar estancamientos donde Places repite la misma empresa una y otra vez
- abrir discovery real a mas negocios nuevos por ciclo
- aumentar volumen util de contactos sin romper el flujo actual

---

## 21) AJUSTES 2026-04-08 (ERROR DE KEY PLACES AL INICIAR)

Cambios aplicados:

- guardado de key de Places desde popup:
  - nuevo campo en UI: `Google Places API key (opcional si ya estaba guardada)`
  - si pegas key en ese campo y pulsas `INICIAR`, se guarda en Script Properties
- lectura de key con aliases:
  - ademas de `GOOGLE_PLACES_API_KEY`, ahora busca tambien:
    - `GOOGLE_MAPS_API_KEY`
    - `PLACES_API_KEY`
    - `MAPS_API_KEY`
    - `GOOGLE_API_KEY`
  - si detecta la key en un alias antiguo, la migra automaticamente a `GOOGLE_PLACES_API_KEY`
- estado remoto de configuracion:
  - nueva accion `doGet?action=places_status`
  - devuelve si la key esta configurada, en que propiedad se detecto y preview seguro

Objetivo:

- evitar bloqueos al iniciar por cambio de nombre de propiedad
- reducir soporte manual cuando la key ya existia pero con nombre viejo
- permitir configurar la key sin salir del popup

---

## CIERRE DE ENTORNO LOCAL (MIGRACION)

- Fecha de cierre: 2026-04-08 15:24:45
- Estado: preparado para migrar a nuevo PC/sistema cloud.
- Repositorio: sincronizado con GitHub en la rama activa.
- Nota: este proyecto queda listo para retomar desde otro equipo clonando el repo.

### CHECKLIST RAPIDA

- [x] Codigo versionado en GitHub.
- [x] README actualizado para traspaso.
- [x] Trabajo local preparado para cierre.


<!-- CIERRE_MIGRACION_2026_04_08 -->
## Cierre de migracion (2026-04-08)
- Estado: preparado para mover a nuevo PC/sistema cloud.
- Fecha de cierre: 
2026-04-08 15:25:38 +02:00
- Rama activa: 
main
- Nota: cambios subidos a GitHub para reanudar desde otro entorno.



## CIERRE CLOUD (2026-04-08)

- Estado: repositorio preparado para migracion a nuevo sistema.
- Ultimo cierre tecnico: 2026-04-08 (Europe/Madrid).
- Siguiente uso recomendado: clonar desde GitHub y continuar en la rama actual.


## CIERRE MIGRACION CLOUD

- Fecha: 2026-04-08
- Estado: preparado para retomar desde nuevo sistema


## CIERRE CLOUD 2026-04-08
- Estado: sincronizado para migracion a nuevo PC/sistema.
- Preparado para retomar desde GitHub.
- Ultima revision: 2026-04-08 15:26:05 +02:00

<!-- MIGRACION_CLOUD_START -->
## ESTADO MIGRACION CLOUD
- Revisado: 2026-04-08
- Repo listo para continuar en otro sistema.
- Estado Git al cerrar: sincronizado en GitHub.
<!-- MIGRACION_CLOUD_END -->
