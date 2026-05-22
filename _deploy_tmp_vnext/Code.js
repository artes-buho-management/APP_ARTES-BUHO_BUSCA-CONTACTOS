const APP_CONFIG = Object.freeze({
  spreadsheetId: "REPLACE_WITH_SHEET_ID",
  mainSheetName: "CONTACTOS_WEB",
  traceSheetName: "TRAZA_OBTENCION",
  brandCompany: "Artes B\u00FAho",
  brandDeveloper: "RUBEN COTON",
  brandRed: "#C8102E",
  brandYellow: "#FFD447",
  brandWhite: "#FFFFFF",
  brandTextDark: "#1F1F1F",
  autoOpenDialogOnOpen: true,
  autoPrepareSheetOnOpen: false,
  showAutoPrepareToastOnOpen: false,
  remoteGeminiApiKey: "",
  maxTargetCount: 10000,
  maxRuntimeMs: 12 * 60 * 1000,
  strictRuntimeBonusMs: 6 * 60 * 1000,
  runtimeBonusPerContactMs: 3000,
  runtimeBonusMaxMs: 10 * 60 * 1000,
  autoContinueOnTimeLimit: true,
  maxAutoTimeWindows: 0,
  continuousRunEnabled: true,
  continuousRunRestartOnNoMatches: true,
  continuousRunRestartOnIterationLimit: true,
  continuousRunRestartOnTimeLimit: true,
  continuousRunRestartPauseMs: 90 * 1000,
  continuousRunMaxCycles: 0,
  maxIterations: 1000,
  maxContactsPerStep: 25,
  maxStaleRounds: 8,
  staleRecoveryProbeEveryRounds: 3,
  maxDynamicPlanExpansions: 6,
  antiLoopDomainSuppressionEnabled: true,
  antiLoopDomainSuppressionAfterStaleRounds: 3,
  antiLoopDomainSuppressionMinHits: 3,
  antiLoopDomainSuppressionMaxDomains: 16,
  antiLoopDomainSuppressionMaxSitesPerQuery: 8,
  maxSourcePagesPerStep: 24,
  maxSourceHtmlLength: 250000,
  hybridModeEnabled: true,
  hybridPreferCodeFirst: true,
  hybridGeminiFallbackMode: "never",
  forceDisableGeminiEverywhere: true,
  geminiPunctualAssistEnabled: false,
  geminiPunctualMaxCallsPerJob: 2,
  geminiPunctualMinStaleRounds: 4,
  hybridFallbackMinContacts: 2,
  hybridEndpointDefault: "https://brilliant-tan-similarly-advance.trycloudflare.com/api/search",
  hybridEndpointPropertyKey: "HYBRID_SCRAPER_ENDPOINT",
  hybridTokenPropertyKey: "HYBRID_SCRAPER_TOKEN",
  hybridModePropertyKey: "HYBRID_MODE_ENABLED",
  hybridRequestTimeoutMs: 35000,
  hybridRequestMaxAttempts: 2,
  hybridRequestRetryBaseMs: 1200,
  hybridRequestRetryMaxMs: 5000,
  hybridRequestMaxSeconds: 26,
  hybridCandidatePoolMultiplier: 3,
  hybridCandidatePoolMin: 60,
  hybridPerDomainCapPerStep: 2,
  hybridMinUniqueDomainsGoal: 3,
  hybridDiversifyMaxQueryAttempts: 5,
  hybridDiversifyExplorationEnabled: true,
  hybridSuppressSeenDomainsOnStale: true,
  hybridSuppressSeenDomainsMinHits: 3,
  hybridSuppressSeenDomainsMax: 12,
  hybridRelaxDomainSuppressionAfterStaleRounds: 4,
  hybridRelaxDomainSuppressionForProfiles: [
    "AGRESIVO_CAUDAL"
  ],
  hybridExcludeSeenEmailsAtSource: true,
  hybridHealthCheckOnStart: true,
  hybridHealthCheckTimeoutMs: 12000,
  hybridMaxUnavailableSteps: 2,
  hybridQueryMaxChars: 1200,
  localOnlyMode: true,
  localOnlyRequireHybridToken: false,
  localOnlyAllowedRunnerEmails: [
    "booking@artesbuhomanagement.com",
    "booking@arteburomanagement.com",
    "booking@artesbuhoomanagement.com"
  ],
  maxQueryCharsForPlan: 420,
  minWebChecksRequired: 3,
  qualityLockEnabled: true,
  qualityLockMinWebChecksRequired: 4,
  qualityLockMinEmailAuditChecks: 6,
  strictRequireEmailAndPhone: true,
  strictRequireContactName: true,
  strictRequireCompanyName: true,
  disallowGenericMailboxEmails: true,
  strictEmailAuditEnabled: true,
  strictEmailAuditMinChecks: 6,
  strictEmailAuditRequireMxOrA: true,
  strictEmailAuditRequireDomainCoherence: true,
  strictEmailDomainContrastEnabled: true,
  strictEmailDomainContextWindowChars: 260,
  strictEmailDomainRequireEntityContextForPublicMailbox: true,
  strictEmailDomainRequireEntityContextWhenDomainMismatch: true,
  strictEmailAuditDnsTimeoutMs: 4500,
  strictEmailAuditDomainCacheTtlMs: 6 * 60 * 60 * 1000,
  ultraModeEnabled: true,
  ultraEmailRequireCorporateDomain: true,
  strictEmailRejectRoleLikeMailbox: true,
  strictNameEmailCoherence: true,
  forceEmailNameCoherenceInOutput: true,
  allowLooseTextNameCandidates: false,
  allowSingleNameFromEmailFallback: true,
  highVolumeTargetThreshold: 1000,
  highVolumeRelaxNameAfterStaleRounds: 0,
  highVolumeRelaxEmailAuditAfterStaleRounds: 1,
  highVolumeSkipDnsAudit: true,
  highVolumeAllowLowSignalSourcePage: true,
  highVolumeMinWebChecksFloor: 3,
  highVolumeMinEmailChecksFloor: 4,
  maxExtraPagesPerCandidate: 1,
  fastModeEnabled: true,
  fastModeSkipExtraPagesIfStrictReady: true,
  maxExtraLinksFromSource: 20,
  missingWebValue: "IA no encuentra",
  jobTtlSeconds: 6 * 60 * 60,
  geminiApiBase: "https://generativelanguage.googleapis.com/v1beta",
  geminiPrimaryModel: "gemini-2.5-flash",
  geminiModelCacheTtlSeconds: 10 * 60,
  geminiGenerateMaxAttempts: 3,
  geminiGenerateRetryBaseMs: 1200,
  geminiGenerateRetryMaxMs: 7000,
  geminiRetryableHttpCodes: [408, 429, 500, 502, 503, 504],
  geminiPreferredModels: [
    "gemini-2.5-flash",
    "gemini-flash-latest",
    "gemini-2.5-pro",
    "gemini-3.1-pro-preview",
    "gemini-3-pro-preview",
    "gemini-pro-latest"
  ],
  maxLogLines: 180,
  maxStepDiagnosticLogs: 16,
  backgroundRunnerEnabled: true,
  backgroundRunnerIntervalMinutes: 1,
  backgroundRunnerFunctionName: "runBackgroundJobsTick",
  backgroundRunnerTriggerIdKey: "BUSCA_CONTACTOS_BACKGROUND_TRIGGER_ID",
  backgroundTickMaxJobs: 2,
  backgroundTickMaxMs: 4 * 60 * 1000,
  backgroundStepErrorBackoffBaseMs: 90 * 1000,
  backgroundStepErrorBackoffMaxMs: 2 * 60 * 60 * 1000,
  maxConsecutiveStepErrors: 40,
  jobPersistentStoreEnabled: true,
  jobPersistentRetentionDays: 21,
  jobPersistentChunkSize: 8000,
  jobPersistentMinIntervalMs: 5 * 60 * 1000,
  jobPersistentCleanupIntervalMs: 6 * 60 * 60 * 1000,
  jobPersistentIdsKey: "BUSCA_CONTACTOS_JOB_STORE_IDS",
  lastDialogPrefsKey: "BUSCA_CONTACTOS_LAST_DIALOG_V1",
  defaultSearchProfile: "HIBRIDO_AHORRO",
  searchProfiles: {
    TURBO: {
      label: "Turbo",
      maxContactsPerStep: 40,
      maxSourcePagesPerStep: 12,
      maxExtraPagesPerCandidate: 1,
      minWebChecksRequired: 4,
      strictEmailAuditMinChecks: 5,
      hybridEnabled: true,
      hybridPreferCodeFirst: true,
      hybridFallbackMode: "never",
      hybridFallbackMinContacts: 0,
      hybridRequestMaxSeconds: 20,
      maxStaleRounds: 8
    },
    CALIDAD_MAXIMA: {
      label: "Calidad maxima",
      maxContactsPerStep: 36,
      maxSourcePagesPerStep: 34,
      maxExtraPagesPerCandidate: 1,
      minWebChecksRequired: 4,
      strictEmailAuditMinChecks: 6,
      hybridEnabled: true,
      hybridPreferCodeFirst: true,
      hybridFallbackMode: "never",
      hybridFallbackMinContacts: 0,
      hybridRequestMaxSeconds: 36,
      maxStaleRounds: 30
    },
    HIBRIDO_AHORRO: {
      label: "Hibrido ahorro",
      maxContactsPerStep: 55,
      maxSourcePagesPerStep: 14,
      maxExtraPagesPerCandidate: 1,
      minWebChecksRequired: 4,
      strictEmailAuditMinChecks: 5,
      hybridEnabled: true,
      hybridPreferCodeFirst: true,
      hybridFallbackMode: "never",
      hybridFallbackMinContacts: 0,
      hybridRequestMaxSeconds: 24,
      maxStaleRounds: 18
    },
    AGRESIVO_CAUDAL: {
      label: "Agresivo caudal",
      maxContactsPerStep: 90,
      maxSourcePagesPerStep: 24,
      maxExtraPagesPerCandidate: 0,
      minWebChecksRequired: 2,
      strictEmailAuditMinChecks: 3,
      hybridEnabled: true,
      hybridPreferCodeFirst: true,
      hybridFallbackMode: "never",
      hybridFallbackMinContacts: 0,
      hybridRequestMaxSeconds: 28,
      maxStaleRounds: 12,
      forceLargeTargetStaleFloor: false,
      ignoreQualityLock: true,
      strictEmailAuditEnabled: false,
      allowRoleMailboxEmails: true,
      allowLooseNameEmailCoherence: false,
      requireName: false,
      requireCompany: false,
      disallowGenericMailboxEmails: false,
      hybridDiversifyMaxQueryAttempts: 5,
      hybridCandidatePoolMultiplier: 5,
      hybridCandidatePoolMin: 120,
      hybridPerDomainCapPerStep: 6
    }
  },
  crmTargetSheets: [
    "RELEVANTES INDIE",
    "PRELEVANTES POP",
    "RELEVANTES ROCK",
    "RELEVANTES MUSICA CLASICA",
    "RELEVANTES MUSICA REGIONAL",
    "RELEVANTES FLAMENCO",
    "RELEVANTES RUMBA",
    "RELEVANTES ELECTRONICO"
  ],
  crmHeaders: [
    "NOMBRE COMPLETO",
    "MEDIO / EMPRESA",
    "DESCRIPCION DEL MEDIO / EMPRESA",
    "CARGO",
    "FUNCION DEL CARGO",
    "EMAIL",
    "TELEFONO",
    "OBSERVACIONES"
  ],
  crmMinRows: 3001,
  crmMinColumns: 8,
  crmColumnWidths: [240, 260, 360, 220, 360, 260, 170, 320],
  crmExcludeEmailsWindow: 800,
  crmExcludeDomainsMax: 120,
  crmPerDomainCap: 3,
  crmDedupeAcrossTargetSheets: true
});

const CRM_PIPELINE_CONFIG = Object.freeze({
  validSheets: [
    "RELEVANTES INDIE",
    "PRELEVANTES POP",
    "RELEVANTES ROCK",
    "RELEVANTES MUSICA CLASICA",
    "RELEVANTES MUSICA REGIONAL",
    "RELEVANTES FLAMENCO",
    "RELEVANTES RUMBA",
    "RELEVANTES ELECTRONICO"
  ],
  spainAutonomousCommunities: [
    "andalucia", "aragon", "asturias", "illes balears", "baleares", "canarias", "cantabria",
    "castilla la mancha", "castilla y leon", "cataluna", "catalunya", "comunitat valenciana",
    "comunidad valenciana", "extremadura", "galicia", "madrid", "murcia", "navarra",
    "pais vasco", "la rioja", "ceuta", "melilla"
  ],
  spainProvinces: [
    "alava", "albacete", "alicante", "almeria", "asturias", "avila", "badajoz", "barcelona",
    "burgos", "caceres", "cadiz", "cantabria", "castellon", "ciudad real", "cordoba", "cuenca",
    "girona", "granada", "guadalajara", "guipuzcoa", "huelva", "huesca", "jaen", "a coruna",
    "la coruna", "la rioja", "las palmas", "leon", "lleida", "lugo", "madrid", "malaga",
    "murcia", "navarra", "ourense", "orense", "palencia", "pontevedra", "salamanca",
    "santa cruz de tenerife", "segovia", "sevilla", "soria", "tarragona", "teruel", "toledo",
    "valencia", "valladolid", "vizcaya", "zamora", "zaragoza", "ceuta", "melilla"
  ],
  spainCities: [
    "madrid", "barcelona", "valencia", "sevilla", "malaga", "bilbao", "zaragoza", "murcia",
    "granada", "vigo", "a coruna", "alicante", "cordoba", "valladolid", "gijon", "oviedo",
    "pamplona", "donostia", "santander", "cadiz", "huelva", "jaen", "salamanca", "toledo"
  ],
  roleVerticalWhitelist: [
    "prensa", "press", "media", "comunicacion", "booking", "bookings", "contratacion",
    "programacion", "redaccion", "management", "manager", "produccion", "promocion",
    "ar", "a&r", "artistico"
  ],
  emailBlacklist: [
    "noreply", "no-reply", "donotreply", "do-not-reply", "postmaster", "webmaster", "abuse",
    "privacy", "legal", "billing", "factura", "facturacion", "soporte", "support", "help",
    "rrhh", "empleo", "jobs", "admin"
  ],
  weakGenericEmails: [
    "info", "hola", "hello", "contacto", "contact", "office", "oficina", "team", "equipo"
  ],
  allowedFunctions: [
    "PRENSA",
    "COMUNICACION",
    "BOOKING",
    "CONTRATACION",
    "PROGRAMACION",
    "MANAGEMENT",
    "PRODUCCION",
    "DIRECCION ARTISTICA",
    "REDACCION",
    "A&R",
    "OTRO"
  ],
  thresholds: {
    MIN_SPAIN_SCORE: 40,
    MIN_SCORE_PERSONAL: 45,
    MIN_SCORE_ROLE: 50,
    MIN_SCORE_WEAK_GENERIC: 65
  }
});

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("\uD83E\uDD89 ARTES B\u00DAHO - CONTACTOS")
    .addItem("Abrir buscador", "showSearchDialog")
    .addToUi();

  ensureGeminiApiKeyConfigured_();

  if (APP_CONFIG.autoOpenDialogOnOpen) {
    showSearchDialog();
  }
}

function showSearchDialog() {
  const template = HtmlService.createTemplateFromFile("SearchDialog");
  template.defaultsJson = JSON.stringify(getDefaultDialogConfig_());
  template.brandingJson = JSON.stringify(getBrandingConfig_());
  const title = `\uD83E\uDD89 BUSCA CONTACTOS - ${APP_CONFIG.brandCompany}`;
  const html = template
    .evaluate()
    .setWidth(760)
    .setHeight(860)
    .setTitle(title);
  SpreadsheetApp.getUi().showModalDialog(html, title);
}

function getDialogDefaults() {
  return getDefaultDialogConfig_();
}

function getBrandingConfig_() {
  return {
    company: String(APP_CONFIG.brandCompany || "Artes B\u00FAho"),
    developer: String(APP_CONFIG.brandDeveloper || "RUBEN COTON"),
    colors: {
      red: String(APP_CONFIG.brandRed || "#C8102E"),
      yellow: String(APP_CONFIG.brandYellow || "#FFD447"),
      white: String(APP_CONFIG.brandWhite || "#FFFFFF"),
      textDark: String(APP_CONFIG.brandTextDark || "#1F1F1F")
    }
  };
}

function ensureGeminiApiKeyConfigured_() {
  try {
    resolveGeminiApiKey_("");
    return true;
  } catch (err) {
    return false;
  }
}

function prepareSingleSheet() {
  const ss = getTargetSpreadsheet_();
  const result = ensureSingleSheet_(ss);
  styleExistingHeaderRow_(result.sheet);
  return {
    ok: true,
    spreadsheetId: ss.getId(),
    spreadsheetName: ss.getName(),
    mainSheet: result.sheet.getName(),
    rowsAdded: result.rowsAdded,
    columnsAdded: result.columnsAdded,
    renamedMainSheet: result.renamedMainSheet,
    minRowsTarget: result.minRowsTarget,
    minColumnsTarget: result.minColumnsTarget,
    removedEmptySheets: result.removedEmptySheets,
    preservedSheetsWithData: result.preservedSheetsWithData
  };
}

function autoPrepareSheetVisualOnOpen_() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet() || getTargetSpreadsheet_();
    if (!ss) return;

    const result = ensureSingleSheet_(ss);
    styleExistingHeaderRow_(result.sheet);

    if (APP_CONFIG.showAutoPrepareToastOnOpen) {
      ss.toast(buildAutoPrepareToastMessage_(result), "BUSCA CONTACTOS", 5);
    }
  } catch (err) {
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      if (ss && APP_CONFIG.showAutoPrepareToastOnOpen) {
        ss.toast("No se pudo aplicar la preparacion visual automatica.", "BUSCA CONTACTOS", 5);
      }
    } catch (toastErr) {
      // Sin accion: en onOpen no bloqueamos el popup por errores visuales.
    }
  }
}

function buildAutoPrepareToastMessage_(result) {
  const parts = [];
  if (result.renamedMainSheet) parts.push("hoja principal renombrada");
  if (result.rowsAdded > 0) parts.push(`+${result.rowsAdded} filas`);
  if (result.columnsAdded > 0) parts.push(`+${result.columnsAdded} columnas`);
  if (!parts.length) parts.push("estructura visual ya estaba actualizada");
  return `Visual aplicado: ${parts.join(" | ")}`;
}

function startSearchJob(request) {
  const cfg = normalizeRequest_(request || {});
  const ss = getTargetSpreadsheet_();
  const prep = ensureSingleSheet_(ss);
  const sheet = prep.sheet;
  const traceInfo = ensureTraceSheet_(ss, cfg.clearPreviousData);

  const parsedColumns = parseColumnsDefinition_(cfg.columnsDefinition, cfg.columnsRows);
  const withRequired = ensureRequiredColumns_(parsedColumns);
  const profileConfig = getSearchProfileConfig_(cfg.profile);
  const searchOptions = buildSearchOptions_(cfg.query, withRequired.columns, profileConfig);
  const hybridConfig = resolveHybridRuntimeConfig_(profileConfig);
  const geminiEnabledForJob = isGeminiFallbackEnabled_(profileConfig, hybridConfig);
  const fallbackModeForJob = normalizeHybridFallbackMode_(
    (profileConfig && profileConfig.hybridFallbackMode)
    || (hybridConfig && hybridConfig.fallbackMode)
    || APP_CONFIG.hybridGeminiFallbackMode
    || "if_empty"
  );
  const headers = withRequired.columns.map((c) => c.header);
  const strictRequireEmailOnWeb = APP_CONFIG.strictRequireEmailAndPhone === true && searchOptions.requireEmail;
  const strictRequirePhoneOnWeb = APP_CONFIG.strictRequireEmailAndPhone === true && searchOptions.allowPhoneCollection;
  const strictRequireContactNameOnWeb = APP_CONFIG.strictRequireContactName === true && searchOptions.requireName;
  const strictRequireCompanyOnWeb = APP_CONFIG.strictRequireCompanyName === true && searchOptions.requireCompany;
  saveLastDialogConfig_(cfg, cfg.columnsRows);

  writeHeaders_(sheet, headers);
  if (cfg.clearPreviousData) {
    clearDataRows_(sheet);
  }
  // Si no se limpia la hoja, continuamos append y evitamos duplicados ya existentes.
  const existingDedupState = cfg.clearPreviousData
    ? { seenHashes: [], seenEmails: [] }
    : collectExistingDedupState_(sheet, withRequired.columns, cfg.scope);
  const nextRowStart = Math.max(2, Number(sheet.getLastRow() || 1) + 1);

  const geminiCanRunAsPrimary = geminiEnabledForJob && fallbackModeForJob !== "puntual";
  if (!hybridConfig.enabled && !geminiCanRunAsPrimary) {
    throw new Error("No hay motor de busqueda activo. Configura endpoint remoto de IA local en /api/search.");
  }
  enforceLocalOnlyRuntimeOrThrow_(hybridConfig);
  if (hybridConfig.enabled && APP_CONFIG.hybridHealthCheckOnStart === true) {
    ensureHybridEndpointReachableOrThrow_(hybridConfig);
  }

  let modelInfo = {
    model: "desactivado",
    preferredModel: String(APP_CONFIG.geminiPrimaryModel || ""),
    usingPreferredModel: false,
    modelSource: "disabled",
    fallbackReason: "gemini_off_by_profile"
  };
  if (geminiEnabledForJob) {
    const geminiApiKey = resolveGeminiApiKey_(cfg.geminiApiKey);
    modelInfo = resolveBestGeminiModel_(geminiApiKey);
  }
  const queryPlan = buildQueryPlan_(cfg.query, cfg.scope, searchOptions);
  const runtimeLimitMs = getRuntimeLimitMs_(cfg.targetCount);
  const maxIterations = getMaxIterationsForTarget_(cfg.targetCount);
  const backgroundWorker = ensureBackgroundRunnerTrigger_();

  const state = {
    jobId: Utilities.getUuid(),
    status: "running",
    createdAt: new Date().toISOString(),
    startedAtMs: Date.now(),
    timeWindowStartedAtMs: Date.now(),
    timeWindowCount: 1,
    spreadsheetId: ss.getId(),
    sheetName: sheet.getName(),
    columns: withRequired.columns,
    autoAddedColumns: withRequired.autoAdded,
    autoRemovedColumns: withRequired.autoRemoved || [],
    strictRequireEmailOnWeb: strictRequireEmailOnWeb,
    strictRequirePhoneOnWeb: strictRequirePhoneOnWeb,
    strictRequireContactNameOnWeb: strictRequireContactNameOnWeb,
    strictRequireCompanyOnWeb: strictRequireCompanyOnWeb,
    searchOptions: searchOptions,
    query: cfg.query,
    scope: cfg.scope,
    profile: profileConfig.key,
    profileLabel: profileConfig.label,
    profileConfig: profileConfig,
    hybrid: hybridConfig,
    hybridStepsUsed: 0,
    hybridCandidatesTotal: 0,
    hybridFallbackToGeminiCount: 0,
    hybridUnavailableStreak: 0,
    geminiStepsUsed: 0,
    geminiAllowed: geminiEnabledForJob,
    geminiFallbackMode: fallbackModeForJob,
    geminiPunctualCallsUsed: 0,
    geminiPunctualCallsMax: Math.max(0, Number(APP_CONFIG.geminiPunctualMaxCallsPerJob || 2)),
    geminiPunctualMinStaleRounds: Math.max(1, Number(APP_CONFIG.geminiPunctualMinStaleRounds || 4)),
    maxStaleRounds: getMaxStaleRoundsForTarget_(cfg.targetCount, profileConfig),
    dynamicPlanExpansions: 0,
    baseQueryPlan: queryPlan.slice(0),
    continuousRunEnabled: APP_CONFIG.continuousRunEnabled === true,
    continuousCycleCount: 1,
    continuousRestartPauseMs: Math.max(15000, Number(APP_CONFIG.continuousRunRestartPauseMs || 90000)),
    continuousLastCycleAtMs: Date.now(),
    continuousLastCycleAt: new Date().toISOString(),
    continuousMaxCycles: Math.max(0, Number(APP_CONFIG.continuousRunMaxCycles || 0)),
    targetCount: cfg.targetCount,
    maxIterations: maxIterations,
    geminiModel: modelInfo.model,
    queryPlan: queryPlan,
    planIndex: 0,
    found: 0,
    nextRow: nextRowStart,
    traceSheetName: traceInfo.sheet.getName(),
    traceNextRow: traceInfo.nextRow,
    seenHashes: existingDedupState.seenHashes,
    seenEmails: existingDedupState.seenEmails,
    emailDomainAuditCache: {},
    iterations: 0,
    staleRounds: 0,
    stopReason: "",
    stopMessage: "",
    runtimeLimitMs: runtimeLimitMs,
    searchPagesVisited: 0,
    linksVisited: 0,
    verifiedWebTotal: 0,
    rejectedNoSourceTotal: 0,
    rejectedNoEvidenceTotal: 0,
    rejectedDuplicateEmailTotal: 0,
    rejectedEmailAuditTotal: 0,
    totalStepErrors: 0,
    consecutiveStepErrors: 0,
    nextRetryAtMs: 0,
    retryBackoffMs: 0,
    nextRetryReason: "",
    retryNoticeAtMs: 0,
    lastError: "",
    lastErrorAt: "",
    backgroundModeEnabled: backgroundWorker.enabled === true,
    backgroundWorkerActive: backgroundWorker.installed === true,
    backgroundTriggerId: String(backgroundWorker.triggerId || ""),
    backgroundTickCount: 0,
    lastBackgroundRunAt: "",
    persistentStoreEnabled: APP_CONFIG.jobPersistentStoreEnabled === true,
    persistentSaveCount: 0,
    lastPersistentSaveAtMs: 0,
    lastPersistentSaveAt: "",
    removedEmptySheets: prep.removedEmptySheets,
    preservedSheetsWithData: prep.preservedSheetsWithData,
    logs: []
  };

  pushLog_(state, `Job creado. Motor remoto IA: ${state.geminiAllowed ? "habilitado" : "desactivado"}`);
  pushLog_(state, `Perfil activo: ${state.profileLabel} (${state.profile})`);
  if (state.continuousRunEnabled) {
    pushLog_(
      state,
      `Modo larga duracion activo: reinicio automatico de ciclo si hay estancamiento o limite de iteraciones.`
    );
  }
  if (state.geminiAllowed) {
    pushLog_(state, `Modelo remoto preferido: ${modelInfo.preferredModel || APP_CONFIG.geminiPrimaryModel}`);
    if (/flash/i.test(String(modelInfo.preferredModel || APP_CONFIG.geminiPrimaryModel || ""))) {
      pushLog_(state, "Modo ahorro preseleccionado: se prioriza modelo remoto ligero para reducir coste.");
    }
    pushLog_(state, `Seleccion de modelo: ${modelInfo.modelSource || "live"} | preferido_activo=${modelInfo.usingPreferredModel ? "si" : "no"}`);
    if (modelInfo.fallbackReason) {
      pushLog_(state, `Fallback de modelo: ${modelInfo.fallbackReason}`);
    }
    if (state.geminiFallbackMode === "puntual") {
      pushLog_(
        state,
        `IA puntual activa: solo si faltan resultados tras ${state.geminiPunctualMinStaleRounds} pasos sin avance (max ${state.geminiPunctualCallsMax} llamada(s) por busqueda).`
      );
    }
  } else {
    pushLog_(state, "Modo IA minimizado: IA remota desactivada para esta busqueda.");
    pushLog_(state, "Motor activo: IA local + scraping por codigo + validacion web.");
  }
  pushLog_(state, `Busqueda: "${state.query}"`);
  pushLog_(state, `Alcance: ${getScopeLabel_(state.scope)}`);
  pushLog_(state, `Objetivo: ${state.targetCount} contactos`);
  pushLog_(state, `Maximo de pasos del job: ${state.maxIterations}`);
  pushLog_(state, `Umbral anti-estancamiento: ${state.maxStaleRounds} pasos sin nuevos contactos antes de cortar.`);
  if (state.hybrid && state.hybrid.enabled) {
    pushLog_(state, "Modo hibrido activo: primero scraping por codigo (endpoint IA local/API).");
    pushLog_(state, `Hibrido endpoint: ${state.hybrid.endpoint}`);
    pushLog_(state, `Hibrido fallback IA remota: ${state.hybrid.fallbackMode} (min=${state.hybrid.fallbackMinContacts}).`);
    pushLog_(state, `Modo solo local: ${APP_CONFIG.localOnlyMode === true ? "activo" : "inactivo"}.`);
    pushLog_(state, `Fail-fast endpoint: corte tras ${Math.max(1, Number(APP_CONFIG.hybridMaxUnavailableSteps || 2))} paso(s) sin respuesta del endpoint.`);
    pushLog_(
      state,
      `Presupuesto maximo por llamada al endpoint hibrido: ${Math.max(15, Number((state.profileConfig && state.profileConfig.hybridRequestMaxSeconds) || APP_CONFIG.hybridRequestMaxSeconds || 26))}s.`
    );
  } else if (state.hybrid && state.hybrid.enabledByOverride && !state.hybrid.endpointReady && state.geminiAllowed) {
    pushLog_(state, "Modo hibrido solicitado pero sin endpoint valido. Se usa IA remota como motor principal.");
  } else {
    pushLog_(state, "Modo hibrido no activo.");
  }
  if (state.backgroundModeEnabled) {
    pushLog_(state, "Ejecucion en segundo plano activa: el proceso seguira aunque cierres el buscador.");
    pushLog_(state, `Trigger de fondo: ${state.backgroundWorkerActive ? "activo" : "pendiente"} | intervalo: ${APP_CONFIG.backgroundRunnerIntervalMinutes} min.`);
    if (backgroundWorker.error) {
      pushLog_(state, `Aviso segundo plano: ${backgroundWorker.error}`);
    }
  }
  if (state.persistentStoreEnabled) {
    pushLog_(state, "Persistencia robusta activa: el estado del job se guarda para soportar reinicios largos.");
  }
  pushLog_(state, `Tiempo maximo por ventana: ${msToMinutesLabel_(state.runtimeLimitMs)}.`);
  if (APP_CONFIG.autoContinueOnTimeLimit) {
    pushLog_(state, "Auto-reintento activo por tiempo: al llegar al limite, el proceso continua solo.");
  }
  pushLog_(state, "Solo se guardan contactos verificados en web publica.");
  const ignoreQualityLock = state.profileConfig && state.profileConfig.ignoreQualityLock === true;
  const strictEmailAuditEnabled = state.profileConfig && state.profileConfig.strictEmailAuditEnabled === false
    ? false
    : APP_CONFIG.strictEmailAuditEnabled === true;
  const rejectRoleLikeMailbox = APP_CONFIG.strictEmailRejectRoleLikeMailbox === true
    && !(state.profileConfig && state.profileConfig.allowRoleMailboxEmails === true);
  const minChecksFloor = ignoreQualityLock ? 2 : 3;
  const minChecksBase = Math.max(minChecksFloor, Number((state.profileConfig && state.profileConfig.minWebChecksRequired) || APP_CONFIG.minWebChecksRequired || minChecksFloor));
  const strictColumnsCount = getStrictRequiredColumnsCount_(state);
  const minChecksEffective = computeRequiredChecksByStrictColumns_(minChecksBase, strictColumnsCount, 0);
  pushLog_(state, `Comprobaciones minimas por contacto: ${minChecksEffective}.`);
  if (APP_CONFIG.qualityLockEnabled === true && !ignoreQualityLock) {
    pushLog_(state, `Candado de calidad activo: minimo web=${getQualityMinWebChecks_()} | minimo auditoria email=${getQualityMinEmailChecks_()}.`);
  } else if (ignoreQualityLock) {
    pushLog_(state, "Candado de calidad relajado por perfil: prioridad a volumen.");
  }
  if (strictColumnsCount > 0) {
    pushLog_(state, `Ajuste automatico por columnas estrictas activas: ${strictColumnsCount}.`);
  }
  if (APP_CONFIG.strictRequireEmailAndPhone) {
    const strictFields = [];
    if (state.strictRequireEmailOnWeb) strictFields.push("email");
    if (state.strictRequirePhoneOnWeb) strictFields.push("telefono");
    if (strictFields.length) {
      pushLog_(state, `Modo estricto activo: solo se guardan contactos con ${strictFields.join(" y ")} verificados en la web.`);
    } else {
      pushLog_(state, "Modo estricto activo sin email/telefono en columnas: ese requisito se omite para esta busqueda.");
    }
  }
  if (state.strictRequireContactNameOnWeb) {
    pushLog_(state, "Modo nombre obligatorio activo: solo se guardan contactos con nombre de persona verificado.");
  }
  if (state.strictRequireCompanyOnWeb) {
    pushLog_(state, "Modo empresa obligatorio activo: solo se guardan contactos con empresa validada en la web.");
  }
  if (!state.searchOptions.allowPhoneCollection) {
    pushLog_(state, "Telefono desactivado para esta busqueda: se omite en consultas y validacion.");
  }
  if (state.searchOptions.disallowGenericMailboxEmails) {
    pushLog_(state, "Filtro de email profesional activo: se descartan buzones genericos (info@, contacto@, etc.).");
  }
  if (strictEmailAuditEnabled) {
    const emailChecksMin = Math.max(
      ignoreQualityLock ? 3 : 4,
      Number((state.profileConfig && state.profileConfig.strictEmailAuditMinChecks) || APP_CONFIG.strictEmailAuditMinChecks || 6)
    );
    pushLog_(state, `Auditoria profunda de email activa: minimo ${emailChecksMin} comprobaciones.`);
  } else {
    pushLog_(state, "Auditoria profunda de email en modo relajado por perfil (no bloquea altas por defecto).");
  }
  if (APP_CONFIG.fastModeEnabled) {
    pushLog_(state, "Modo rapido activo: primero valida web origen y solo amplifica paginas si faltan evidencias estrictas.");
  }
  if (rejectRoleLikeMailbox) {
    pushLog_(state, "Filtro email estricto activo: se descartan buzones de rol (comunicacion@, prensa@, media@, events@, etc.).");
  } else if (state.profileConfig && state.profileConfig.allowRoleMailboxEmails === true) {
    pushLog_(state, "Perfil caudal: se permiten buzones de rol si vienen con evidencia publica.");
  }
  if (APP_CONFIG.strictEmailDomainContrastEnabled && strictEmailAuditEnabled) {
    pushLog_(state, "Contraste de dominio activo: el dominio del email se cruza con web/fuente y contexto de entidad.");
  }
  if (strictEmailAuditEnabled && APP_CONFIG.ultraModeEnabled && APP_CONFIG.ultraEmailRequireCorporateDomain && state.strictRequireEmailOnWeb) {
    pushLog_(state, "Modo ULTRA activo: si pides EMAIL, se exige dominio corporativo (sin gmail/outlook/hotmail/yahoo/icloud).");
  }
  pushLog_(state, `Trazabilidad activa en pestana: ${state.traceSheetName}`);
  pushLog_(state, `Columnas activas de salida: ${headers.join(" | ")}`);
  pushLog_(state, "Filas visibles forzadas: no se ocultan filas durante la ejecucion.");
  pushLog_(state, "Lectura mejorada: ajuste automatico de altura de fila segun texto.");
  if (state.autoAddedColumns.length) {
    pushLog_(state, `Columnas autoagregadas: ${state.autoAddedColumns.join(", ")}`);
  }
  if (state.autoRemovedColumns.length) {
    pushLog_(state, `Columnas descartadas por calidad: ${state.autoRemovedColumns.join(", ")}`);
  }
  pushLog_(state, "Control anti-duplicados de email activo: comprobacion en tiempo real durante la busqueda.");

  registerActiveJobId_(state.jobId);
  saveSearchJobState_(state);

  return {
    ok: true,
    jobId: state.jobId,
    status: state.status,
    geminiModel: state.geminiModel,
    geminiAllowed: state.geminiAllowed === true,
    geminiFallbackMode: String(state.geminiFallbackMode || ""),
    geminiPunctualCallsUsed: Number(state.geminiPunctualCallsUsed || 0),
    geminiPunctualCallsMax: Number(state.geminiPunctualCallsMax || 0),
    profile: state.profile || "",
    profileLabel: state.profileLabel || "",
    backgroundModeEnabled: state.backgroundModeEnabled === true,
    backgroundWorkerActive: state.backgroundWorkerActive === true,
    requested: state.targetCount,
    found: state.found,
    autoAddedColumns: state.autoAddedColumns || [],
    autoRemovedColumns: state.autoRemovedColumns || [],
    logs: state.logs.slice(-8),
    removedEmptySheets: state.removedEmptySheets,
    preservedSheetsWithData: state.preservedSheetsWithData
  };
}

function runSearchJobStep(jobId) {
  const id = String(jobId || "").trim();
  if (!id) {
    throw new Error("Job invalido.");
  }

  const lock = LockService.getScriptLock();
  const acquired = lock.tryLock(7000);
  if (!acquired) {
    const snapshot = loadSearchJobState_(id);
    if (snapshot) {
      return buildStepResponse_(snapshot, [], snapshot.status !== "running");
    }
    throw new Error("No se pudo bloquear el proceso para ejecutar el paso.");
  }

  try {
    const state = loadSearchJobState_(id);
    if (!state) {
      throw new Error("El proceso ya no existe o caduco. Inicia una busqueda nueva.");
    }

    const stepLogs = [];
    if (state.status !== "running") {
      return buildStepResponse_(state, stepLogs, true);
    }

    const nowMs = Date.now();
    const retryAtMs = Number(state.nextRetryAtMs || 0);
    if (retryAtMs > nowMs) {
      const remainingRetryMs = retryAtMs - nowMs;
      const nextNoticeAtMs = Number(state.retryNoticeAtMs || 0);
      if (!nextNoticeAtMs || nowMs >= nextNoticeAtMs) {
        pushStepLog_(
          state,
          stepLogs,
          `Pausa de seguridad activa por errores temporales. Reintento automatico en ${msToMinutesLabel_(remainingRetryMs)}.`
        );
        state.retryNoticeAtMs = nowMs + Math.max(60000, Math.min(5 * 60 * 1000, remainingRetryMs));
        saveSearchJobState_(state);
      }
      return buildStepResponse_(state, stepLogs, false);
    }
    if (retryAtMs > 0) {
      state.nextRetryAtMs = 0;
      state.retryNoticeAtMs = 0;
      state.nextRetryReason = "";
    }

    const runtimeLimitMs = Number(state.runtimeLimitMs || getRuntimeLimitMs_(state.targetCount));
    const windowStartedAtMs = Number(state.timeWindowStartedAtMs || state.startedAtMs || Date.now());
    const elapsed = Date.now() - windowStartedAtMs;
    if (elapsed > runtimeLimitMs) {
      if (APP_CONFIG.autoContinueOnTimeLimit) {
        const maxWindows = Number(APP_CONFIG.maxAutoTimeWindows || 0);
        const nextWindow = Number(state.timeWindowCount || 1) + 1;
        if (maxWindows > 0 && nextWindow > maxWindows) {
          if (!maybeRestartContinuousRun_(state, stepLogs, "LIMITE_TIEMPO")) {
            finishJob_(state, "LIMITE_TIEMPO");
          }
          saveSearchJobState_(state);
          return buildStepResponse_(state, stepLogs, state.status !== "running");
        }
        state.timeWindowCount = nextWindow;
        state.timeWindowStartedAtMs = Date.now();
        pushStepLog_(
          state,
          stepLogs,
          `Auto-reintento por tiempo: nueva ventana ${state.timeWindowCount} iniciada. El proceso continua solo.`
        );
        saveSearchJobState_(state);
        return buildStepResponse_(state, stepLogs, false);
      }
      if (!maybeRestartContinuousRun_(state, stepLogs, "LIMITE_TIEMPO")) {
        finishJob_(state, "LIMITE_TIEMPO");
      }
      saveSearchJobState_(state);
      return buildStepResponse_(state, stepLogs, state.status !== "running");
    }

    if (state.found >= state.targetCount) {
      finishJob_(state, "OBJETIVO_COMPLETADO");
      saveSearchJobState_(state);
      return buildStepResponse_(state, stepLogs, true);
    }

    const maxIterations = Math.max(1, Number(state.maxIterations || getMaxIterationsForTarget_(state.targetCount)));
    state.maxIterations = maxIterations;
    if (state.iterations >= maxIterations) {
      if (!maybeRestartContinuousRun_(state, stepLogs, "LIMITE_ITERACIONES")) {
        finishJob_(state, "LIMITE_ITERACIONES");
      }
      saveSearchJobState_(state);
      return buildStepResponse_(state, stepLogs, state.status !== "running");
    }

    const planPos = state.planIndex % state.queryPlan.length;
    const queryVariantBase = state.queryPlan[planPos];
    const queryVariant = buildRuntimeQueryVariant_(queryVariantBase, state, stepLogs);
    state.planIndex += 1;
    state.iterations += 1;
    const queryVariantLog = truncateForLog_(queryVariant, 220);

    pushStepLog_(state, stepLogs, `Paso ${state.iterations}/${maxIterations}: buscando "${queryVariantLog}"`);

    const remaining = state.targetCount - state.found;
    const perStepLimit = Math.max(1, Number((state.profileConfig && state.profileConfig.maxContactsPerStep) || APP_CONFIG.maxContactsPerStep || 25));
    const desired = Math.min(perStepLimit, remaining);
    let stepResult = null;
    let hybridStepResult = null;
    const hybridCfg = (state.hybrid && typeof state.hybrid === "object") ? state.hybrid : {};
    if (hybridCfg.enabled && hybridCfg.preferCodeFirst) {
      try {
        hybridStepResult = callHybridScraperCandidates_(state, queryVariant, desired);
        state.hybridUnavailableStreak = 0;
        if (hybridStepResult && Number(hybridStepResult.sourceCandidatesCount || 0) > 0) {
          state.hybridStepsUsed = Number(state.hybridStepsUsed || 0) + 1;
          state.hybridCandidatesTotal = Number(state.hybridCandidatesTotal || 0) + Number(hybridStepResult.sourceCandidatesCount || 0);
          pushStepLog_(
            state,
            stepLogs,
            `Hibrido candidatos: ${hybridStepResult.sourceCandidatesCount}. IA remota evitada en primera fase para ahorrar coste.`
          );
        } else {
          pushStepLog_(state, stepLogs, "Hibrido sin candidatos nuevos en este paso.");
        }
      } catch (hybridErr) {
        const hybridErrMsg = formatErrorForLog_(hybridErr);
        pushStepLog_(state, stepLogs, `Aviso hibrido en este paso: ${hybridErrMsg}`);
        if (isHybridEndpointUnavailableError_(hybridErrMsg)) {
          state.hybridUnavailableStreak = Number(state.hybridUnavailableStreak || 0) + 1;
          const maxUnavailable = Math.max(1, Number(APP_CONFIG.hybridMaxUnavailableSteps || 2));
          pushStepLog_(
            state,
            stepLogs,
            `Endpoint hibrido no disponible (${state.hybridUnavailableStreak}/${maxUnavailable}).`
          );
          if (state.hybridUnavailableStreak >= maxUnavailable && state.geminiAllowed === false) {
            registerStepError_(
              state,
              new Error("Endpoint hibrido no disponible (502/conexion). Reintentando en segundo plano."),
              "hybrid"
            );
            pushStepLog_(
              state,
              stepLogs,
              "Endpoint hibrido caido: se mantiene el job activo con reintento automatico (no se detiene)."
            );
            saveSearchJobState_(state);
            return buildStepResponse_(state, stepLogs, false);
          }
        } else {
          state.hybridUnavailableStreak = 0;
        }
      }
    }
    stepResult = hybridStepResult;

    const fallbackMode = getGeminiFallbackModeForState_(state);
    const mustRunGemini = shouldRunGeminiFallback_(state, stepResult, desired);
    if (!mustRunGemini && state.geminiAllowed === false) {
      pushStepLog_(state, stepLogs, "IA remota desactivada por perfil: este paso usa solo scraping por codigo.");
    }
    if (mustRunGemini) {
      if (fallbackMode === "puntual") {
        state.geminiPunctualCallsUsed = Number(state.geminiPunctualCallsUsed || 0) + 1;
        pushStepLog_(
          state,
          stepLogs,
          `IA puntual activada (${state.geminiPunctualCallsUsed}/${state.geminiPunctualCallsMax}) por falta de resultados en scraping.`
        );
      }
      if (stepResult && Number(stepResult.sourceCandidatesCount || 0) > 0) {
        state.hybridFallbackToGeminiCount = Number(state.hybridFallbackToGeminiCount || 0) + 1;
        pushStepLog_(state, stepLogs, "Fallback a IA remota activado para completar candidatos del paso.");
      }
      let geminiResult = null;
      try {
        geminiResult = geminiGroundedSearchContacts_(state.geminiModel, queryVariant, state.scope, desired, state.searchOptions);
        state.geminiStepsUsed = Number(state.geminiStepsUsed || 0) + 1;
      } catch (err) {
        const errMsg = formatErrorForLog_(err);
        pushStepLog_(state, stepLogs, `Aviso IA remota en este paso: ${errMsg}`);

        // Recuperacion automatica: refresca modelo disponible e intenta 1 vez adicional.
        let recovered = false;
        if (fallbackMode !== "puntual") {
          try {
            const apiKey = getStoredGeminiApiKey_();
            if (apiKey) {
              const modelInfo = resolveBestGeminiModel_(apiKey, true);
              const refreshedModel = String(modelInfo.model || "").trim();
              if (refreshedModel && refreshedModel !== String(state.geminiModel || "")) {
                const prevModel = state.geminiModel;
                state.geminiModel = refreshedModel;
                pushStepLog_(state, stepLogs, `Cambio automatico de modelo por error temporal: ${prevModel} -> ${refreshedModel}`);
                geminiResult = geminiGroundedSearchContacts_(state.geminiModel, queryVariant, state.scope, desired, state.searchOptions);
                state.geminiStepsUsed = Number(state.geminiStepsUsed || 0) + 1;
                recovered = true;
              }
            }
          } catch (recoveryErr) {
            pushStepLog_(state, stepLogs, `Recuperacion de modelo no disponible: ${formatErrorForLog_(recoveryErr)}`);
          }
        }

        if (!recovered && !geminiResult && !stepResult) {
          state.staleRounds += 1;
          const staleLimit = getStateMaxStaleRounds_(state);
          pushStepLog_(
            state,
            stepLogs,
            `Paso omitido por error temporal de red/API (${state.staleRounds}/${staleLimit}). El proceso continua.`
          );
          if (state.staleRounds >= staleLimit) {
            if (!maybeExpandQueryPlanAfterStale_(state, stepLogs)) {
              if (!maybeRestartContinuousRun_(state, stepLogs, "SIN_MAS_COINCIDENCIAS")) {
                finishJob_(state, "SIN_MAS_COINCIDENCIAS");
              }
            }
          }
          saveSearchJobState_(state);
          return buildStepResponse_(state, stepLogs, state.status !== "running");
        }
      }
      if (geminiResult && stepResult) {
        stepResult = mergeSearchStepResults_(stepResult, geminiResult, desired);
      } else if (geminiResult) {
        stepResult = geminiResult;
      }
    }

    if (!stepResult) {
      state.staleRounds += 1;
      const staleLimit = getStateMaxStaleRounds_(state);
      pushStepLog_(state, stepLogs, `Paso omitido sin respuesta valida (${state.staleRounds}/${staleLimit}).`);
      if (state.staleRounds >= staleLimit) {
        if (!maybeExpandQueryPlanAfterStale_(state, stepLogs)) {
          if (!maybeRestartContinuousRun_(state, stepLogs, "SIN_MAS_COINCIDENCIAS")) {
            finishJob_(state, "SIN_MAS_COINCIDENCIAS");
          }
        }
      }
      saveSearchJobState_(state);
      return buildStepResponse_(state, stepLogs, state.status !== "running");
    }

  state.linksVisited += Number(stepResult.webSearchQueriesCount || 0);
  const stepSourceLabel = getStepResultSourceLabel_(stepResult, mustRunGemini);
  const stepMeta = (stepResult && stepResult.meta && typeof stepResult.meta === "object") ? stepResult.meta : {};
  const stepSources = Math.max(0, Number(stepMeta.sourceLinks || 0));
  const stepPages = Math.max(0, Number(stepMeta.pagesFetched || 0));
  const stepExpanded = Math.max(0, Number(stepMeta.expandedPagesFetched || 0));
  const stepDiag = (stepMeta.diagnostics && typeof stepMeta.diagnostics === "object")
    ? stepMeta.diagnostics
    : null;
  const stepLocalModel = String(stepMeta.ollamaModelUsed || "").trim();
  if (stepLocalModel && stepLocalModel !== String(state.lastHybridLocalModel || "")) {
    state.lastHybridLocalModel = stepLocalModel;
    pushStepLog_(state, stepLogs, `[CLIENTE] IA local activa: ${stepLocalModel}`);
  }
  let extraTelemetry = "";
  if (stepSources > 0 || stepPages > 0 || stepExpanded > 0) {
    extraTelemetry = ` | fuentes=${stepSources} | paginas=${stepPages} | ampliadas=${stepExpanded}`;
  }
  pushStepLog_(
    state,
    stepLogs,
    `${stepSourceLabel} candidatos: ${stepResult.sourceCandidatesCount}. Consultas web activadas: ${stepResult.webSearchQueriesCount}${extraTelemetry}.`
  );
  if (stepDiag && Number(stepResult.sourceCandidatesCount || 0) <= 0) {
    const pickPositiveMetric_ = (candidates, fallback) => {
      const values = Array.isArray(candidates) ? candidates : [candidates];
      for (let i = 0; i < values.length; i += 1) {
        const n = Number(values[i]);
        if (isFinite(n) && n > 0) return n;
      }
      const fb = Number(fallback);
      if (isFinite(fb) && fb > 0) return fb;
      return 0;
    };
    const diagPagesScanned = pickPositiveMetric_(
      [stepDiag.pages_scanned, stepDiag.pages_fetched],
      stepPages
    );
    const diagPagesIrrelevant = pickPositiveMetric_(
      [stepDiag.pages_irrelevant, stepDiag.skip_irrelevant_page],
      0
    );
    const diagPagesScopeMismatch = pickPositiveMetric_(
      [stepDiag.pages_scope_mismatch, stepDiag.scope_mismatch],
      0
    );
    const diagEmailsCandidates = pickPositiveMetric_(
      [stepDiag.emails_candidates, stepDiag.emails_seen],
      0
    );
    const diagDropNombre = pickPositiveMetric_(
      [stepDiag.rows_dropped_require_name, stepDiag.skip_require_name],
      0
    );
    const diagDropNombreEmail = pickPositiveMetric_(
      [stepDiag.rows_dropped_name_email_mismatch, stepDiag.skip_require_full_name, stepDiag.skip_generic_context],
      0
    );
    const diagDropEmpresa = pickPositiveMetric_(
      [stepDiag.rows_dropped_require_company, stepDiag.skip_require_company],
      0
    );
    const diagDropRoleMailbox = pickPositiveMetric_(
      [stepDiag.skip_role_mailbox],
      0
    );
    const diagDropSeen = pickPositiveMetric_(
      [stepDiag.skip_seen_email, stepDiag.skip_seen_email_domain],
      0
    );
    pushStepLog_(
      state,
      stepLogs,
      `Hibrido diagnostico: pages_scanned=${diagPagesScanned} | pages_irrelevant=${diagPagesIrrelevant} | pages_scope_mismatch=${diagPagesScopeMismatch} | emails_candidates=${diagEmailsCandidates} | drop_nombre=${diagDropNombre} | drop_nombre_email=${diagDropNombreEmail} | drop_empresa=${diagDropEmpresa} | drop_role_mailbox=${diagDropRoleMailbox} | drop_seen=${diagDropSeen}.`
    );
  }
  if (stepSourceLabel === "Hibrido" && Number(stepResult.sourceCandidatesCount || 0) <= 0 && stepSources <= 0) {
    pushStepLog_(state, stepLogs, "Hibrido sin fuentes web detectadas en este paso. Revisa endpoint/token o ajusta texto de busqueda.");
  }

  const verifyStartedAtMs = Date.now();
  const verified = verifyContactsWithWebSource_(stepResult.contacts, state, queryVariant, desired);
  const verifyElapsedMs = Math.max(0, Date.now() - verifyStartedAtMs);
  state.searchPagesVisited += Number(verified.fetchedPages || 0);
  state.verifiedWebTotal += Number(verified.verifiedContacts.length || 0);
  state.rejectedNoSourceTotal += Number(verified.droppedNoSource || 0);
  state.rejectedNoEvidenceTotal += Number(verified.droppedUnverified || 0);
  state.rejectedEmailAuditTotal += Number(verified.droppedEmailAudit || 0);
  state.rejectedDuplicateEmailTotal += Number(verified.droppedDuplicateEmail || 0);
  pushStepLog_(
    state,
    stepLogs,
    `Revision fuentes: con_url=${verified.withSource} | fetch_ok=${verified.fetchedPages} | sin_url=${verified.droppedNoSource} | url_archivo=${verified.droppedInvalidSource} | fetch_error=${verified.droppedFetchError} | cache_hits=${Number(verified.sourcePageCacheHits || 0)} | fetch_calls=${Number(verified.sourcePageFetchCalls || 0)} | verif_ms=${verifyElapsedMs}.`
  );
  pushStepLog_(
    state,
    stepLogs,
    `Revision evidencias: sin_email=${verified.droppedMissingEmail} | sin_email_generico=${verified.droppedGenericEmail || 0} | sin_email_auditoria=${verified.droppedEmailAudit || 0} | sin_telefono=${verified.droppedMissingPhone} | sin_nombre=${verified.droppedMissingName} | sin_empresa=${verified.droppedMissingCompany} | dup_email_busqueda=${verified.droppedDuplicateEmail || 0} | drop_bucle_dom=${verified.droppedSuppressedDomain || 0} | checks_insuf=${verified.droppedChecks} | min_checks=${verified.requiredChecks}.`
  );
  if (verified.diagnosticLogs && verified.diagnosticLogs.length) {
    for (let d = 0; d < verified.diagnosticLogs.length; d += 1) {
      pushStepLog_(state, stepLogs, `[DETALLE] ${verified.diagnosticLogs[d]}`);
    }
  }

  const normalized = normalizeGeminiContacts_(verified.verifiedContacts, state.query, state.scope, {
    requireEmail: state.strictRequireEmailOnWeb !== false,
    requirePhone: state.strictRequirePhoneOnWeb !== false,
    requireName: state.strictRequireContactNameOnWeb === true,
    requireCompany: state.strictRequireCompanyOnWeb === true
  });
  const dedupe = dedupeRecords_(normalized, state.seenHashes, state.seenEmails);
  state.rejectedDuplicateEmailTotal += Number(dedupe.duplicatesByEmail || 0);
  if (Number(dedupe.duplicatesByEmail || 0) > 0) {
    pushStepLog_(state, stepLogs, `Duplicados por email bloqueados en este paso: ${dedupe.duplicatesByEmail}.`);
  }
  if (Number(dedupe.duplicatesByKey || 0) > 0) {
    pushStepLog_(state, stepLogs, `Duplicados por clave de contacto bloqueados en este paso: ${dedupe.duplicatesByKey}.`);
  }

  if (dedupe.newRecords.length) {
    const ss = SpreadsheetApp.openById(state.spreadsheetId);
    const sheet = ss.getSheetByName(state.sheetName);
    const traceSheet = ss.getSheetByName(state.traceSheetName) || ensureTraceSheet_(ss, false).sheet;
    const written = appendRecordsToSheet_(sheet, state.columns, dedupe.newRecords, state.nextRow);
    const traceWritten = appendTraceRowsFromRecords_(traceSheet, dedupe.newRecords, state, queryVariant, state.traceNextRow);
    state.nextRow += written;
    state.traceNextRow += traceWritten;
    state.found += written;
    state.staleRounds = 0;
    pushStepLog_(state, stepLogs, `+${written} contactos nuevos. Total: ${state.found}/${state.targetCount}`);
    pushStepLog_(
      state,
      stepLogs,
      `Verificados web: ${verified.verifiedContacts.length}/${verified.candidatesProcessed}. Sin fuente: ${verified.droppedNoSource}. Sin evidencia: ${verified.droppedUnverified}. Checks min: ${verified.requiredChecks}.`
    );
  } else {
    state.staleRounds += 1;
    const staleLimit = getStateMaxStaleRounds_(state);
    pushStepLog_(
      state,
      stepLogs,
      `Sin contactos nuevos en este paso (${state.staleRounds}/${staleLimit}). Verificados web: ${verified.verifiedContacts.length}/${verified.candidatesProcessed}. Checks min: ${verified.requiredChecks}.`
    );
    const probeEvery = Math.max(0, Number(APP_CONFIG.staleRecoveryProbeEveryRounds || 0));
    if (
      probeEvery > 0
      && state.staleRounds > 0
      && (state.staleRounds % probeEvery === 0)
      && state.found < state.targetCount
    ) {
      const staleRoundsAtProbe = state.staleRounds;
      if (maybeExpandQueryPlanAfterStale_(state, stepLogs)) {
        pushStepLog_(
          state,
          stepLogs,
          `Replanificacion temprana aplicada tras ${staleRoundsAtProbe} pasos sin avance.`
        );
      }
    }
  }

  if (state.found >= state.targetCount) {
    finishJob_(state, "OBJETIVO_COMPLETADO");
  } else if (state.staleRounds >= getStateMaxStaleRounds_(state)) {
    if (!maybeExpandQueryPlanAfterStale_(state, stepLogs)) {
      if (!maybeRestartContinuousRun_(state, stepLogs, "SIN_MAS_COINCIDENCIAS")) {
        finishJob_(state, "SIN_MAS_COINCIDENCIAS");
      }
    }
  }

    state.consecutiveStepErrors = 0;
    state.nextRetryAtMs = 0;
    state.retryBackoffMs = 0;
    state.nextRetryReason = "";
    state.retryNoticeAtMs = 0;
    state.lastStepAt = new Date().toISOString();
    saveSearchJobState_(state);
    return buildStepResponse_(state, stepLogs, state.status !== "running");
  } catch (err) {
    const stateOnError = loadSearchJobState_(id);
    if (stateOnError && stateOnError.status === "running") {
      registerStepError_(stateOnError, err, "manual");
      saveSearchJobState_(stateOnError);
      return buildStepResponse_(stateOnError, [], stateOnError.status !== "running");
    }
    throw err;
  } finally {
    try { lock.releaseLock(); } catch (releaseErr) {}
  }
}

function getSearchJobStatus(jobId) {
  const id = String(jobId || "").trim();
  try {
    const state = loadSearchJobState_(id);
    if (!state) {
      return {
        ok: false,
        done: true,
        status: "missing",
        message: "Job no encontrado"
      };
    }
    return buildStepResponse_(state, [], state.status !== "running");
  } catch (err) {
    const msg = formatErrorForLog_(err);
    let fallback = null;
    try {
      const persisted = loadJobStateFromPersistentStore_(id);
      fallback = persisted && persisted.state ? persisted.state : null;
    } catch (persistErr) {
      fallback = null;
    }
    if (fallback) {
      pushLog_(fallback, `[WARN] Error temporal leyendo estado (${msg}). Reintentando automaticamente.`);
      saveSearchJobState_(fallback);
      const out = buildStepResponse_(fallback, [], fallback.status !== "running");
      out.transientError = true;
      out.transientErrorMessage = msg;
      return out;
    }
    return {
      ok: false,
      done: false,
      status: "running",
      message: `Error temporal de estado (${msg}).`,
      stopMessage: "",
      found: 0,
      requested: 0,
      remaining: 0,
      totalStepErrors: 1,
      logs: [`[WARN] Error temporal de estado (${msg}). Reintento automatico en curso.`],
      lastLogs: [`[WARN] Error temporal de estado (${msg}). Reintento automatico en curso.`],
      transientError: true,
      transientErrorMessage: msg
    };
  }
}

function cancelSearchJob(jobId) {
  const state = loadSearchJobState_(jobId);
  if (!state) {
    unregisterActiveJobId_(jobId);
    return { ok: false, cancelled: false };
  }
  if (state.status === "running") {
    state.status = "cancelled";
    state.stopReason = "CANCELADO_USUARIO";
    state.stopMessage = "Busqueda cancelada por usuario.";
    state.backgroundWorkerActive = false;
    pushLog_(state, state.stopMessage);
    saveSearchJobState_(state);
  }
  unregisterActiveJobId_(state.jobId || jobId);
  return { ok: true, cancelled: true };
}

function purgeAllRunningJobs() {
  const activeIds = pruneActiveJobsRegistry_();
  let stopped = 0;
  let missing = 0;
  let alreadyStopped = 0;

  for (let i = 0; i < activeIds.length; i += 1) {
    const jobId = activeIds[i];
    const state = loadSearchJobState_(jobId);
    if (!state) {
      missing += 1;
      continue;
    }
    if (state.status !== "running") {
      alreadyStopped += 1;
      continue;
    }
    state.status = "cancelled";
    state.stopReason = "PURGADO_USUARIO";
    state.stopMessage = "Proceso purgado por usuario.";
    state.backgroundWorkerActive = false;
    pushLog_(state, state.stopMessage);
    saveSearchJobState_(state);
    stopped += 1;
  }

  setActiveJobIds_([]);
  return {
    ok: true,
    stopped: stopped,
    missing: missing,
    alreadyStopped: alreadyStopped,
    message: `Purgado completado. Parados: ${stopped}. Ya parados: ${alreadyStopped}. No encontrados: ${missing}.`
  };
}

function runBackgroundJobsTick() {
  if (APP_CONFIG.backgroundRunnerEnabled !== true) {
    return { ok: true, enabled: false, processed: 0 };
  }

  const activeIds = pruneActiveJobsRegistry_();
  if (!activeIds.length) {
    return { ok: true, enabled: true, processed: 0, message: "Sin jobs en ejecucion." };
  }

  const startedAt = Date.now();
  const maxJobs = Math.max(1, Number(APP_CONFIG.backgroundTickMaxJobs || 2));
  let processed = 0;
  let failed = 0;
  let skippedCooldown = 0;

  for (let i = 0; i < activeIds.length; i += 1) {
    if (processed >= maxJobs) break;
    if (Date.now() - startedAt > Math.max(30000, Number(APP_CONFIG.backgroundTickMaxMs || 240000))) break;

    const jobId = activeIds[i];
    const state = loadSearchJobState_(jobId);
    if (!state || state.status !== "running") continue;
    const nowMs = Date.now();
    const nextRetryAtMs = Number(state.nextRetryAtMs || 0);
    if (nextRetryAtMs > nowMs) {
      state.backgroundWorkerActive = true;
      state.backgroundTickCount = Number(state.backgroundTickCount || 0) + 1;
      state.lastBackgroundRunAt = new Date().toISOString();
      const nextNoticeAtMs = Number(state.retryNoticeAtMs || 0);
      if (!nextNoticeAtMs || nowMs >= nextNoticeAtMs) {
        pushLog_(
          state,
          `Runner en espera por enfriamiento de error. Reintento en ${msToMinutesLabel_(nextRetryAtMs - nowMs)}.`
        );
        state.retryNoticeAtMs = nowMs + 5 * 60 * 1000;
      }
      saveSearchJobState_(state);
      skippedCooldown += 1;
      continue;
    }

    try {
      const result = runSearchJobStep(jobId);
      const latest = loadSearchJobState_(jobId) || state;
      latest.backgroundWorkerActive = true;
      latest.backgroundTickCount = Number(latest.backgroundTickCount || 0) + 1;
      latest.lastBackgroundRunAt = new Date().toISOString();
      if (result && result.done) {
        latest.backgroundWorkerActive = false;
      }
      saveSearchJobState_(latest);
      processed += 1;
    } catch (err) {
      const latest = loadSearchJobState_(jobId) || state;
      registerStepError_(latest, err, "background");
      latest.backgroundWorkerActive = true;
      latest.backgroundTickCount = Number(latest.backgroundTickCount || 0) + 1;
      latest.lastBackgroundRunAt = new Date().toISOString();
      saveSearchJobState_(latest);
      failed += 1;
    }
  }

  return {
    ok: true,
    enabled: true,
    processed: processed,
    failed: failed,
    skippedCooldown: skippedCooldown,
    active: activeIds.length
  };
}

function getActiveRunningJobStatus() {
  try {
    const ids = pruneActiveJobsRegistry_();
    if (!ids.length) {
      return { ok: true, exists: false, message: "No hay procesos activos." };
    }

    const worker = ensureBackgroundRunnerTrigger_();

    const states = [];
    for (let i = 0; i < ids.length; i += 1) {
      const state = loadSearchJobState_(ids[i]);
      if (!state || state.status !== "running") continue;
      states.push(state);
    }
    if (!states.length) {
      return { ok: true, exists: false, message: "No hay procesos activos." };
    }

    states.sort((a, b) => Number(b.startedAtMs || 0) - Number(a.startedAtMs || 0));
    const current = states[0];
    const status = buildStepResponse_(current, [], current.status !== "running");
    return {
      ok: true,
      exists: true,
      jobId: current.jobId,
      backgroundWorkerActive: worker.installed === true,
      status: status
    };
  } catch (err) {
    return {
      ok: false,
      exists: false,
      transientError: true,
      transientErrorMessage: formatErrorForLog_(err),
      message: "Error temporal recuperando estado. Reintenta en unos segundos."
    };
  }
}

function runConfiguredSearch(request) {
  const start = startSearchJob(request);
  const maxIterations = getMaxIterationsForTarget_(Number(start.requested || 0));
  let final = null;
  for (let i = 0; i < maxIterations + 2; i += 1) {
    final = runSearchJobStep(start.jobId);
    if (final.done) break;
    Utilities.sleep(350);
  }
  return final || start;
}

function setupConnection() {
  const ss = getTargetSpreadsheet_();
  const keyExists = !!(getStoredGeminiApiKey_() || String(APP_CONFIG.remoteGeminiApiKey || "").trim());
  return {
    ok: true,
    spreadsheetId: ss.getId(),
    spreadsheetName: ss.getName(),
    sheetCount: ss.getSheets().length,
    activeUser: Session.getActiveUser().getEmail() || "",
    mainSheetName: APP_CONFIG.mainSheetName,
    geminiKeyStored: keyExists
  };
}

function getGeminiConnectionStatus() {
  let key = getStoredGeminiApiKey_();
  if (!key) {
    try {
      key = resolveGeminiApiKey_("");
    } catch (err) {
      key = "";
    }
  }
  if (!key) {
    return {
      ok: false,
      connected: false,
      message: "No hay API key de Gemini guardada."
    };
  }

  const modelInfo = resolveBestGeminiModel_(key);
  return {
    ok: true,
    connected: true,
    bestModel: modelInfo.model,
    preferredModel: modelInfo.preferredModel || APP_CONFIG.geminiPrimaryModel || "",
    usingPreferredModel: modelInfo.usingPreferredModel === true,
    modelSource: modelInfo.modelSource || "live",
    fallbackReason: String(modelInfo.fallbackReason || ""),
    availableModels: modelInfo.availableModels
  };
}

function getSheetInspection() {
  const ss = getTargetSpreadsheet_();
  const filterViewsBySheet = getFilterViewsBySheet_(ss.getId());
  const permissions = getDrivePermissions_(ss.getId());
  const sheets = ss.getSheets().map((sheet) => inspectSingleSheet_(sheet, filterViewsBySheet));
  return {
    ok: true,
    spreadsheetId: ss.getId(),
    spreadsheetName: ss.getName(),
    timezone: Session.getScriptTimeZone() || "",
    generatedAt: new Date().toISOString(),
    sheetCount: sheets.length,
    sheets: sheets,
    permissions: permissions
  };
}

function runSetupCrmWithAudit() {
  const before = getSheetInspection();
  const setup = setupCrmEnvironment();
  const after = getSheetInspection();
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    before: before,
    setup: setup,
    after: after
  };
}

function setupCrmEnvironment() {
  const ss = getTargetSpreadsheet_();
  const targetSheets = (APP_CONFIG.crmTargetSheets || []).slice();
  const headers = (APP_CONFIG.crmHeaders || []).slice();
  const targetMap = {};
  targetSheets.forEach((name) => { targetMap[String(name)] = true; });

  const createdSheets = [];
  const deletedSheets = [];
  const deleteErrors = [];
  const orderApplied = [];
  const layoutApplied = [];

  for (let i = 0; i < targetSheets.length; i += 1) {
    const name = String(targetSheets[i] || "");
    if (!name) continue;
    if (!ss.getSheetByName(name)) {
      ss.insertSheet(name);
      createdSheets.push(name);
    }
  }

  const allSheets = ss.getSheets();
  for (let i = 0; i < allSheets.length; i += 1) {
    const sheet = allSheets[i];
    const name = String(sheet.getName() || "");
    if (targetMap[name]) continue;
    try {
      if (ss.getSheets().length <= 1) {
        deleteErrors.push({ sheet: name, reason: "No se puede eliminar la ultima pestana." });
        continue;
      }
      ss.deleteSheet(sheet);
      deletedSheets.push(name);
    } catch (err) {
      deleteErrors.push({ sheet: name, reason: formatErrorForLog_(err) });
    }
  }

  for (let i = 0; i < targetSheets.length; i += 1) {
    const name = String(targetSheets[i] || "");
    const sheet = ss.getSheetByName(name);
    if (!sheet) continue;

    ss.setActiveSheet(sheet);
    ss.moveActiveSheet(i + 1);
    orderApplied.push(name);
    layoutApplied.push(applyCrmSheetLayout_(sheet, headers));
  }

  const first = ss.getSheetByName(targetSheets[0]);
  if (first) {
    ss.setActiveSheet(first);
  }

  return {
    ok: true,
    spreadsheetId: ss.getId(),
    spreadsheetName: ss.getName(),
    targetSheets: targetSheets,
    createdSheets: createdSheets,
    deletedSheets: deletedSheets,
    deleteErrors: deleteErrors,
    orderApplied: orderApplied,
    layoutApplied: layoutApplied
  };
}

function applyCrmSheetLayout_(sheet, headers) {
  const cols = headers.length;
  const minRows = Math.max(2, Number(APP_CONFIG.crmMinRows || 3001));
  const minColumns = Math.max(cols, Number(APP_CONFIG.crmMinColumns || cols));

  try {
    const filter = sheet.getFilter();
    if (filter) filter.remove();
  } catch (errFilter) {}

  sheet.clear();

  if (sheet.getMaxColumns() < minColumns) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), minColumns - sheet.getMaxColumns());
  }
  if (sheet.getMaxRows() < minRows) {
    sheet.insertRowsAfter(sheet.getMaxRows(), minRows - sheet.getMaxRows());
  }

  const headerRange = sheet.getRange(1, 1, 1, cols);
  headerRange.setValues([headers]);
  headerRange.setBackgrounds([buildCrmHeaderBackgrounds_()]);
  headerRange.setFontColors([buildCrmHeaderFontColors_()]);
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  headerRange.setWrap(true);
  headerRange.setBorder(true, true, true, true, true, true, APP_CONFIG.brandYellow, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  const widths = Array.isArray(APP_CONFIG.crmColumnWidths) ? APP_CONFIG.crmColumnWidths : [];
  for (let i = 0; i < widths.length; i += 1) {
    try {
      sheet.setColumnWidth(i + 1, Number(widths[i] || 200));
    } catch (errWidth) {}
  }

  sheet.setRowHeight(1, 34);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(0);

  const dataRows = Math.max(1, sheet.getMaxRows() - 1);
  if (dataRows > 0) {
    sheet.getRange(2, 1, dataRows, cols).setWrap(true);
    sheet.getRange(2, 6, dataRows, 1).setNumberFormat("@");
    sheet.getRange(2, 7, dataRows, 1).setNumberFormat("@");
  }

  sheet.getRange(1, 1, sheet.getMaxRows(), cols).createFilter();

  return {
    sheet: sheet.getName(),
    maxRows: sheet.getMaxRows(),
    maxColumns: sheet.getMaxColumns(),
    headerRange: `A1:${columnToLetter_(cols)}1`,
    frozenRows: sheet.getFrozenRows()
  };
}

function buildCrmHeaderBackgrounds_() {
  const out = [];
  const total = (APP_CONFIG.crmHeaders || []).length;
  for (let i = 0; i < total; i += 1) {
    out.push(i % 2 === 0 ? APP_CONFIG.brandRed : APP_CONFIG.brandYellow);
  }
  return out;
}

function buildCrmHeaderFontColors_() {
  const out = [];
  const total = (APP_CONFIG.crmHeaders || []).length;
  for (let i = 0; i < total; i += 1) {
    out.push(i % 2 === 0 ? APP_CONFIG.brandWhite : APP_CONFIG.brandRed);
  }
  return out;
}

function getDrivePermissions_(spreadsheetId) {
  const out = {
    ok: false,
    permissionCount: 0,
    permissions: [],
    error: ""
  };
  try {
    const id = String(spreadsheetId || "").trim();
    if (!id) {
      out.error = "spreadsheetId vacio";
      return out;
    }
    const token = ScriptApp.getOAuthToken();
    const url = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}/permissions?fields=permissions(id,type,role,emailAddress,displayName,domain,allowFileDiscovery)`;
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
      muteHttpExceptions: true
    });
    const code = Number(resp.getResponseCode() || 0);
    if (code < 200 || code >= 300) {
      out.error = `HTTP ${code}: ${String(resp.getContentText() || "")}`;
      return out;
    }
    const parsed = parseJsonSafely_(String(resp.getContentText() || "{}")) || {};
    const permissions = Array.isArray(parsed.permissions) ? parsed.permissions : [];
    out.ok = true;
    out.permissionCount = permissions.length;
    out.permissions = permissions;
    return out;
  } catch (err) {
    out.error = formatErrorForLog_(err);
    return out;
  }
}

function runInitialCrmDump() {
  const plans = [
    { sheet: "RELEVANTES INDIE", query: buildDefaultCrmQueryBySheet_("RELEVANTES INDIE"), targetCount: 120 },
    { sheet: "PRELEVANTES POP", query: buildDefaultCrmQueryBySheet_("PRELEVANTES POP"), targetCount: 120 },
    { sheet: "RELEVANTES ROCK", query: buildDefaultCrmQueryBySheet_("RELEVANTES ROCK"), targetCount: 120 },
    { sheet: "RELEVANTES MUSICA CLASICA", query: buildDefaultCrmQueryBySheet_("RELEVANTES MUSICA CLASICA"), targetCount: 120 },
    { sheet: "RELEVANTES MUSICA REGIONAL", query: buildDefaultCrmQueryBySheet_("RELEVANTES MUSICA REGIONAL"), targetCount: 120 },
    { sheet: "RELEVANTES FLAMENCO", query: buildDefaultCrmQueryBySheet_("RELEVANTES FLAMENCO"), targetCount: 120 },
    { sheet: "RELEVANTES RUMBA", query: buildDefaultCrmQueryBySheet_("RELEVANTES RUMBA"), targetCount: 120 },
    { sheet: "RELEVANTES ELECTRONICO", query: buildDefaultCrmQueryBySheet_("RELEVANTES ELECTRONICO"), targetCount: 120 }
  ];
  const out = [];
  for (let i = 0; i < plans.length; i += 1) {
    out.push(crmDumpFromHybrid_(plans[i]));
  }
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    batches: out
  };
}

function crmDumpFromHybrid_(params) {
  return crmDumpFromHybridV2_(params);
  const ss = getTargetSpreadsheet_();
  const p = params || {};
  const sheetName = String(p.sheet || p.sheetName || "").trim();
  const query = String(p.query || "").trim();
  const targetCount = Math.max(10, Math.min(400, Number(p.targetCount || p.target || 120)));
  const profile = normalizeSearchProfileKey_(String(p.profile || "CALIDAD_MAXIMA"));

  if (!sheetName) {
    throw new Error("Falta sheet para volcado CRM.");
  }
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error(`No existe la pestana ${sheetName}.`);
  }

  const profileConfig = getSearchProfileConfig_(profile);
  const hybridCfg = resolveHybridRuntimeConfig_(profileConfig);
  enforceLocalOnlyRuntimeOrThrow_(hybridCfg);
  if (!hybridCfg.enabled || !hybridCfg.endpointReady) {
    throw new Error("Endpoint hibrido no disponible para volcado CRM.");
  }

  const existingIndex = collectExistingEmailIndexForCrm_(sheet, {
    includeTargetSheets: APP_CONFIG.crmDedupeAcrossTargetSheets === true,
    spreadsheet: ss,
    currentSheetName: sheetName
  });
  const existingEmails = existingIndex.list;
  const existingEmailMap = existingIndex.map;
  const existingEmailDomains = existingIndex.emailDomains;
  const existingRootDomains = existingIndex.rootDomains;
  const existingEmailsTail = existingEmails.slice(-Math.max(100, Number(APP_CONFIG.crmExcludeEmailsWindow || 800)));
  const existingRootDomainsTail = existingRootDomains.slice(0, Math.max(10, Number(APP_CONFIG.crmExcludeDomainsMax || 120)));
  const desiredPool = Math.max(80, Math.min(500, targetCount * 4));
  const payload = {
    query: query,
    scope: "NACIONAL_ES",
    targetCount: desiredPool,
    strict: {
      requireEmail: false,
      requirePhone: false,
      requireName: false,
      requireCompany: false
    },
    options: {
      disallowGenericMailboxEmails: false,
      disallowRoleMailboxEmails: false,
      allowPhoneCollection: true
    },
    metadata: {
      profile: profile,
      localModelProfile: getHybridLocalModelProfileForSearchProfile_(profile),
      staleRounds: 6,
      step: 1,
      crmSheet: sheetName,
      timezone: Session.getScriptTimeZone() || "Europe/Madrid",
      excludeEmails: existingEmailsTail,
      excludeEmailDomains: existingEmailDomains.slice(0, Math.max(10, Number(APP_CONFIG.crmExcludeDomainsMax || 120))),
      excludeDomains: existingRootDomainsTail,
      excludeRootDomains: existingRootDomainsTail,
      forceExcludeDomains: existingRootDomainsTail,
      blockedDomains: existingRootDomainsTail,
      excludedDomains: existingRootDomainsTail
    }
  };
  const attempts = Math.max(1, Number(APP_CONFIG.hybridRequestMaxAttempts || 2));
  const baseWait = Math.max(300, Number(APP_CONFIG.hybridRequestRetryBaseMs || 1200));
  const maxWait = Math.max(baseWait, Number(APP_CONFIG.hybridRequestRetryMaxMs || 5000));
  const hybridRaw = requestHybridPayloadWithRetry_(
    hybridCfg.endpoint,
    hybridCfg,
    payload,
    attempts,
    baseWait,
    maxWait
  );
  const contactsRaw = Array.isArray(hybridRaw.rawContacts) ? hybridRaw.rawContacts : [];
  const normalizedContacts = [];
  for (let i = 0; i < contactsRaw.length; i += 1) {
    const normalized = normalizeHybridCandidateRecord_(contactsRaw[i], "");
    if (normalized) normalizedContacts.push(normalized);
  }
  const hybridMeta = (hybridRaw.parsedMeta && typeof hybridRaw.parsedMeta === "object") ? hybridRaw.parsedMeta : {};
  const rows = [];
  const seenEmailNow = {};
  const dropped = {
    missingEmail: 0,
    genericEmail: 0,
    duplicateEmail: 0,
    duplicateDomain: 0,
    missingName: 0,
    missingCompany: 0,
    outsideSpain: 0,
    nameRepaired: 0,
    nameFromEmail: 0,
    nameRoleFallback: 0,
    companyInferred: 0
  };
  const seenDomainNow = {};
  const perDomainCap = Math.max(1, Number(profileConfig.crmPerDomainCap || APP_CONFIG.crmPerDomainCap || APP_CONFIG.hybridPerDomainCapPerStep || 2));

  for (let i = 0; i < normalizedContacts.length; i += 1) {
    const rec = normalizedContacts[i] || {};
    const email = String(rec.email || "").trim().toLowerCase();
    if (!email) {
      dropped.missingEmail += 1;
      continue;
    }
    if (!isValidEmail_(email)) {
      dropped.missingEmail += 1;
      continue;
    }
    if (isGenericMailboxEmail_(email)) {
      dropped.genericEmail += 1;
      continue;
    }
    if (existingEmailMap[email] || seenEmailNow[email]) {
      dropped.duplicateEmail += 1;
      continue;
    }
    if (!isLikelySpanishCrmRecord_(rec)) {
      dropped.outsideSpain += 1;
      continue;
    }

    const sourceUrl = normalizeWeb_(String(rec.source_url || rec.web || "").trim());
    const emailDomain = String(email.split("@")[1] || "").trim().toLowerCase();
    const emailRoot = getRootDomain_(emailDomain) || emailDomain;
    if (emailRoot) {
      const used = Number(seenDomainNow[emailRoot] || 0);
      if (used >= perDomainCap) {
        dropped.duplicateDomain += 1;
        continue;
      }
    }

    const role = String(rec.cargo || "").trim();
    const roleFunc = String(rec.funcion_cargo || "").trim();
    const desc = String(rec.descripcion_medio_empresa || "").trim();
    const phone = sanitizePhoneForCrm_(String(rec.telefono || "").trim());
    const notes = [String(rec.fuente || "").trim(), String(sourceUrl || "").trim(), String(rec.notas || "").trim()]
      .filter((x) => x)
      .join(" | ");

    let company = normalizeCompanyName_(String(rec.empresa || "").trim());
    if (!company && email) {
      company = normalizeCompanyName_(deriveCompanyFromEmailOrNotes_(email, notes));
      if (company) dropped.companyInferred += 1;
    }
    if (!company) {
      company = normalizeCompanyName_(companyFromDomain_(sourceUrl));
      if (company) dropped.companyInferred += 1;
    }

    let name = normalizePersonName_(String(rec.nombre_contacto || rec.contacto || "").trim());
    if (name && !isNameConsistentWithEmailLocal_(name, email)) {
      const repaired = normalizePersonName_(
        String(
          guessContactNameFromEmail_(email)
          || guessSingleNameFromEmailLocal_(email)
          || ""
        ).trim()
      );
      const repairedAllowed =
        !!repaired
        && (
          looksLikePersonName_(repaired, company, sourceUrl)
          || isSingleTokenNameAllowedByEmail_(repaired, email, company, sourceUrl)
          || isNameConsistentWithEmailLocal_(repaired, email)
        );
      if (repairedAllowed) {
        name = repaired;
        dropped.nameRepaired += 1;
      } else {
        name = "";
      }
    }
    if (!name) {
      const inferredName = normalizePersonName_(String(guessSingleNameFromEmailLocal_(email) || "").trim());
      if (inferredName && isSingleTokenNameAllowedByEmail_(inferredName, email, company, sourceUrl)) {
        name = inferredName;
        dropped.nameFromEmail += 1;
      }
    }
    if (!name) {
      const roleFallback = buildRoleBasedContactFallbackLabel_(email, company, sourceUrl);
      if (roleFallback) {
        name = roleFallback;
        dropped.nameRoleFallback += 1;
      }
    }

    if (!name) {
      dropped.missingName += 1;
      continue;
    }
    if (!company) {
      dropped.missingCompany += 1;
      continue;
    }

    rows.push([name, company, desc, role, roleFunc, email, phone, notes]);
    seenEmailNow[email] = true;
    if (emailRoot) seenDomainNow[emailRoot] = Number(seenDomainNow[emailRoot] || 0) + 1;
    if (rows.length >= targetCount) break;
  }

  const writeInfo = appendCrmRows_(sheet, rows);
  return {
    ok: true,
    sheet: sheetName,
    query: query,
    profile: profile,
    requested: targetCount,
    candidatesReceived: normalizedContacts.length,
    appended: writeInfo.appended,
    startRow: writeInfo.startRow,
    endRow: writeInfo.endRow,
    dropped: dropped,
    source: hybridRaw.sourceEngine || "hybrid_endpoint",
    meta: hybridMeta
  };
}

function crmDumpFromHybridV2_(params) {
  const startedMs = Date.now();
  const ss = getTargetSpreadsheet_();
  const p = params || {};
  const sheetName = String(p.sheet || p.sheetName || "").trim();
  const query = String(p.query || "").trim();
  const targetCount = Math.max(10, Math.min(400, Number(p.targetCount || p.target || 120)));
  const profile = normalizeSearchProfileKey_(String(p.profile || "CALIDAD_MAXIMA"));
  const queryHash = buildQueryHash_(query, sheetName);

  if (!sheetName) throw new Error("Falta sheet para volcado CRM.");
  if ((CRM_PIPELINE_CONFIG.validSheets || []).indexOf(sheetName) < 0) {
    throw new Error(`Pestana CRM invalida: ${sheetName}`);
  }
  if (!query) throw new Error("Falta query para volcado CRM.");

  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error(`No existe la pestana ${sheetName}.`);

  const profileConfig = getSearchProfileConfig_(profile);
  const hybridCfg = resolveHybridRuntimeConfig_(profileConfig);
  enforceLocalOnlyRuntimeOrThrow_(hybridCfg);
  if (!hybridCfg.enabled || !hybridCfg.endpointReady) {
    throw new Error("Endpoint hibrido no disponible para volcado CRM.");
  }

  const fastIndex = collectExistingEmailIndexForCrm_(sheet);
  const desiredPool = Math.max(80, Math.min(500, targetCount * 4));
  const payload = {
    query: query,
    scope: "NACIONAL_ES",
    targetCount: desiredPool,
    strict: {
      requireEmail: false,
      requirePhone: false,
      requireName: false,
      requireCompany: false
    },
    options: {
      disallowGenericMailboxEmails: false,
      disallowRoleMailboxEmails: false,
      allowPhoneCollection: true
    },
    metadata: {
      profile: profile,
      localModelProfile: getHybridLocalModelProfileForSearchProfile_(profile),
      staleRounds: 6,
      step: 1,
      crmSheet: sheetName,
      timezone: Session.getScriptTimeZone() || "Europe/Madrid",
      excludeEmails: fastIndex.list.slice(-Math.max(100, Number(APP_CONFIG.crmExcludeEmailsWindow || 800))),
      excludeEmailDomains: fastIndex.emailDomains.slice(0, Math.max(10, Number(APP_CONFIG.crmExcludeDomainsMax || 120))),
      excludeDomains: fastIndex.rootDomains.slice(0, Math.max(10, Number(APP_CONFIG.crmExcludeDomainsMax || 120))),
      excludeRootDomains: fastIndex.rootDomains.slice(0, Math.max(10, Number(APP_CONFIG.crmExcludeDomainsMax || 120)))
    }
  };

  const attempts = Math.max(1, Number(APP_CONFIG.hybridRequestMaxAttempts || 2));
  const baseWait = Math.max(300, Number(APP_CONFIG.hybridRequestRetryBaseMs || 1200));
  const maxWait = Math.max(baseWait, Number(APP_CONFIG.hybridRequestRetryMaxMs || 5000));
  const hybridRaw = requestHybridPayloadWithRetry_(
    hybridCfg.endpoint,
    hybridCfg,
    payload,
    attempts,
    baseWait,
    maxWait
  );

  const contactsRaw = Array.isArray(hybridRaw.rawContacts) ? hybridRaw.rawContacts : [];
  const normalizedContacts = [];
  for (let i = 0; i < contactsRaw.length; i += 1) {
    const normalized = normalizeHybridCandidateRecord_(contactsRaw[i], "");
    if (normalized) normalizedContacts.push(normalized);
  }

  const reasons = initCrmReasonStats_();
  const thresholds = CRM_PIPELINE_CONFIG.thresholds || {};
  const isAggressiveCaudal = profile === "AGRESIVO_CAUDAL";
  const minSpainScore = isAggressiveCaudal ? 28 : Number(thresholds.MIN_SPAIN_SCORE || 40);
  const minScorePersonal = isAggressiveCaudal ? 34 : Number(thresholds.MIN_SCORE_PERSONAL || 45);
  const minScoreRole = isAggressiveCaudal ? 34 : Number(thresholds.MIN_SCORE_ROLE || 50);
  const minScoreWeak = isAggressiveCaudal ? 42 : Number(thresholds.MIN_SCORE_WEAK_GENERIC || 65);

  let afterEmail = 0;
  let afterSpain = 0;
  let afterQuality = 0;
  const stage = [];
  const seenEmailBatch = {};
  const seenHardBatch = {};

  for (let i = 0; i < normalizedContacts.length; i += 1) {
    const rec = normalizedContacts[i] || {};
    const candidate = buildCrmCandidateFromRecord_(rec, sheetName, query, queryHash);

    const email = normalizeEmail_(candidate.email);
    if (!email) {
      incrementCrmReason_(reasons, "INVALID_EMAIL");
      continue;
    }
    if (!isValidEmail_(email)) {
      if (isBlacklistedEmailLocal_(email)) incrementCrmReason_(reasons, "BLACKLIST_EMAIL");
      else incrementCrmReason_(reasons, "INVALID_EMAIL");
      continue;
    }
    candidate.email = email;
    afterEmail += 1;

    const emailClass = classifyEmail_(email, candidate);
    candidate.emailClass = emailClass;
    if (emailClass === "BLACKLIST") {
      incrementCrmReason_(reasons, "BLACKLIST_EMAIL");
      continue;
    }
    if (emailClass === "GENERIC_WEAK") {
      incrementCrmReason_(reasons, "GENERIC_WEAK");
    }

    const spainEval = scoreSpain_(candidate, query, sheetName);
    candidate.spainScore = Number(spainEval.score || 0);
    if (spainEval.rejected || candidate.spainScore < minSpainScore) {
      incrementCrmReason_(reasons, "NO_SPAIN_SIGNAL");
      continue;
    }
    afterSpain += 1;

    candidate.roleFunction = normalizeAllowedFunction_(candidate.roleFunction || candidate.role || detectRoleVerticalFunctionFromEmail_(email) || "OTRO");
    candidate.totalScore = scoreCandidate_(candidate);

    let allowByScore = false;
    if (emailClass === "PERSONAL_CORP") {
      allowByScore = candidate.totalScore >= minScorePersonal;
    } else if (emailClass === "ROLE_VERTICAL") {
      allowByScore = candidate.totalScore >= minScoreRole;
    } else if (emailClass === "GENERIC_WEAK") {
      if (isAggressiveCaudal) {
        allowByScore = candidate.totalScore >= minScoreWeak && !!candidate.company;
      } else {
        allowByScore = candidate.totalScore >= minScoreWeak
          && !!candidate.company
          && normalizeAllowedFunction_(candidate.roleFunction) !== "OTRO";
      }
    }
    if (!allowByScore) {
      incrementCrmReason_(reasons, "LOW_SCORE");
      continue;
    }

    if (!candidate.company) {
      incrementCrmReason_(reasons, "MISSING_COMPANY");
      continue;
    }
    if (!candidate.name && isAggressiveCaudal) {
      const inferred = inferNameFromEmail_(candidate.email);
      if (inferred) {
        candidate.name = inferred;
      } else {
        const normalizedFn = normalizeAllowedFunction_(candidate.roleFunction || "OTRO");
        candidate.name = buildRoleBasedContactFallbackLabel_(
          candidate.email,
          candidate.company,
          candidate.sourceDomain || candidate.sourceUrl || ""
        );
        if (!candidate.name && normalizedFn !== "OTRO") {
          candidate.name = buildRoleVerticalDisplayName_(candidate.email, normalizedFn);
        }
      }
    }
    if (!candidate.name && emailClass !== "ROLE_VERTICAL") {
      incrementCrmReason_(reasons, "MISSING_NAME_AND_ROLE");
      continue;
    }
    if (!candidate.name && emailClass === "ROLE_VERTICAL") {
      candidate.name = buildRoleVerticalDisplayName_(candidate.email, candidate.roleFunction);
    }

    const keys = buildDedupeKeys_(candidate, sheetName);
    if (keys.emailKey && seenEmailBatch[keys.emailKey]) {
      incrementCrmReason_(reasons, "DUPLICATE_IN_SHEET");
      continue;
    }
    if (keys.personCompanyRoleKey && seenHardBatch[keys.personCompanyRoleKey]) {
      incrementCrmReason_(reasons, "DUPLICATE_IN_SHEET");
      continue;
    }
    if (keys.emailKey) seenEmailBatch[keys.emailKey] = true;
    if (keys.personCompanyRoleKey) seenHardBatch[keys.personCompanyRoleKey] = true;

    afterQuality += 1;
    stage.push(candidate);
  }

  let afterDedupe = 0;
  const appendedDomains = [];
  const appendedCompanies = [];
  let writeInfo = { appended: 0, startRow: 0, endRow: 0 };

  const lock = LockService.getScriptLock();
  lock.waitLock(28000);
  try {
    const localIndex = buildSheetDedupeIndex_(sheet);
    const globalIndex = buildGlobalEmailSheetMap_(ss);
    const dedupedInSheet = [];
    for (let i = 0; i < stage.length; i += 1) {
      const cand = stage[i];
      const keys = buildDedupeKeys_(cand, sheetName);
      if (keys.emailKey && localIndex.emailMap[keys.emailKey]) {
        incrementCrmReason_(reasons, "DUPLICATE_IN_SHEET");
        continue;
      }
      if (keys.personCompanyRoleKey && localIndex.personRoleMap[keys.personCompanyRoleKey]) {
        incrementCrmReason_(reasons, "DUPLICATE_IN_SHEET");
        continue;
      }
      dedupedInSheet.push(cand);
    }

    const selected = chooseBestCandidatePerCompanyRole_(dedupedInSheet);
    afterDedupe = selected.length;
    const rows = [];
    for (let i = 0; i < selected.length; i += 1) {
      const cand = selected[i];
      const keys = buildDedupeKeys_(cand, sheetName);

      const otherSheets = [];
      if (keys.emailKey && globalIndex[keys.emailKey]) {
        const allSheets = globalIndex[keys.emailKey];
        for (let s = 0; s < allSheets.length; s += 1) {
          const sh = String(allSheets[s] || "");
          if (sh && sh !== sheetName) otherSheets.push(sh);
        }
      }
      const globalDup = otherSheets.length ? 1 : 0;
      const obs = buildCrmObservation_(cand, queryHash, globalDup, otherSheets);

      rows.push([
        String(cand.name || "").trim(),
        String(cand.company || "").trim(),
        String(cand.description || "").trim(),
        String(cand.role || "").trim(),
        normalizeAllowedFunction_(cand.roleFunction || "OTRO"),
        normalizeEmail_(cand.email),
        normalizePhoneForCrmPipeline_(cand.phone),
        obs
      ]);

      if (keys.emailKey) {
        localIndex.emailMap[keys.emailKey] = true;
        if (!globalIndex[keys.emailKey]) globalIndex[keys.emailKey] = [];
        if (globalIndex[keys.emailKey].indexOf(sheetName) < 0) globalIndex[keys.emailKey].push(sheetName);
      }
      if (keys.personCompanyRoleKey) localIndex.personRoleMap[keys.personCompanyRoleKey] = true;

      if (cand.sourceDomain) appendedDomains.push(cand.sourceDomain);
      if (cand.company) appendedCompanies.push(cand.company);
      incrementCrmReason_(reasons, "APPENDED");
      if (rows.length >= targetCount) break;
    }
    writeInfo = appendRowsBatch_(sheet, rows);

    const elapsedMsInLock = Date.now() - startedMs;
    logDumpStats_({
      timestamp: new Date().toISOString(),
      sheet: sheetName,
      query: query,
      queryHash: queryHash,
      candidates_in: normalizedContacts.length,
      after_email: afterEmail,
      after_spain: afterSpain,
      after_quality: afterQuality,
      after_dedupe: afterDedupe,
      appended: Number(writeInfo.appended || 0),
      reasons: reasons,
      elapsed_ms: elapsedMsInLock
    });
  } finally {
    lock.releaseLock();
  }

  const elapsedMs = Date.now() - startedMs;

  const dropped = {
    missingEmail: Number(reasons.INVALID_EMAIL || 0),
    genericEmail: Number(reasons.GENERIC_WEAK || 0),
    duplicateEmail: Number(reasons.DUPLICATE_IN_SHEET || 0),
    missingName: Number(reasons.MISSING_NAME_AND_ROLE || 0),
    missingCompany: Number(reasons.MISSING_COMPANY || 0),
    outsideSpain: Number(reasons.NO_SPAIN_SIGNAL || 0),
    lowScore: Number(reasons.LOW_SCORE || 0)
  };

  return {
    ok: true,
    action: "crm_dump",
    sheet: sheetName,
    query: query,
    queryHash: queryHash,
    profile: profile,
    requested: targetCount,
    candidatesReceived: normalizedContacts.length,
    candidates_in: normalizedContacts.length,
    after_email: afterEmail,
    after_spain: afterSpain,
    after_quality: afterQuality,
    after_dedupe: afterDedupe,
    appended: writeInfo.appended,
    startRow: writeInfo.startRow,
    endRow: writeInfo.endRow,
    dropped: dropped,
    reasons: reasons,
    appended_domains: uniqueArray_(appendedDomains).slice(0, 80),
    appended_companies: uniqueArray_(appendedCompanies).slice(0, 80),
    elapsed_ms: elapsedMs,
    source: hybridRaw.sourceEngine || "hybrid_endpoint",
    meta: (hybridRaw.parsedMeta && typeof hybridRaw.parsedMeta === "object") ? hybridRaw.parsedMeta : {}
  };
}

function initCrmReasonStats_() {
  return {
    INVALID_EMAIL: 0,
    BLACKLIST_EMAIL: 0,
    GENERIC_WEAK: 0,
    NO_SPAIN_SIGNAL: 0,
    DUPLICATE_IN_SHEET: 0,
    LOW_SCORE: 0,
    MISSING_COMPANY: 0,
    MISSING_NAME_AND_ROLE: 0,
    APPENDED: 0
  };
}

function incrementCrmReason_(reasons, key) {
  if (!reasons || !key) return;
  const k = String(key || "").trim();
  if (!k) return;
  reasons[k] = Number(reasons[k] || 0) + 1;
}

function normalizeEmail_(email) {
  let value = String(email || "").trim().toLowerCase();
  if (!value) return "";
  value = value.replace(/^mailto:/i, "").replace(/\s+/g, "");
  return value;
}

function normalizePhoneForCrmPipeline_(phone) {
  const raw = String(phone || "").trim();
  if (!raw) return "NO ENCONTRADO";
  const cleaned = raw
    .replace(/[+\s\-\(\)\.]/g, "")
    .replace(/[^\d]/g, "")
    .trim();
  return cleaned || "NO ENCONTRADO";
}

function normalizeTextKey_(text) {
  return normalizeTextForMatch_(String(text || "").trim());
}

function normalizeCompanyKey_(company) {
  return normalizeTextKey_(String(company || "").trim())
    .replace(/\b(s\.?l\.?|s\.?a\.?|slne|cooperativa|coop|group|grupo|music|records?)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function inferNameFromEmail_(email) {
  const value = normalizeEmail_(email);
  if (!value || !isValidEmail_(value)) return "";
  const local = String(value.split("@")[0] || "").trim().toLowerCase();
  if (!local) return "";
  if (isRoleLikeMailboxToken_(local)) return "";

  const blacklist = CRM_PIPELINE_CONFIG.emailBlacklist || [];
  for (let i = 0; i < blacklist.length; i += 1) {
    const token = String(blacklist[i] || "").toLowerCase();
    if (token && local.indexOf(token) >= 0) return "";
  }
  const weak = CRM_PIPELINE_CONFIG.weakGenericEmails || [];
  for (let i = 0; i < weak.length; i += 1) {
    const token = String(weak[i] || "").toLowerCase();
    if (token && localPartMatchesToken_(local, token)) return "";
  }

  const full = normalizePersonName_(String(guessContactNameFromEmail_(value) || "").trim());
  if (full && looksLikePersonName_(full, "", "")) return full;

  const single = normalizePersonName_(String(guessSingleNameFromEmailLocal_(value) || "").trim());
  if (single && isSingleTokenNameAllowedByEmail_(single, value, "", "")) return single;
  return "";
}

function localPartMatchesToken_(localPart, token) {
  const local = String(localPart || "").trim().toLowerCase();
  const rawToken = String(token || "").trim().toLowerCase();
  if (!local || !rawToken) return false;
  const normLocal = local.replace(/[^a-z0-9]+/g, " ").trim();
  const normToken = rawToken.replace(/[^a-z0-9]+/g, " ").trim();
  if (!normLocal || !normToken) return false;
  const words = normLocal.split(/\s+/);
  const tokenWords = normToken.split(/\s+/);
  if (!tokenWords.length) return false;
  if (tokenWords.length === 1) {
    const t = tokenWords[0];
    if (!t) return false;
    if (words.indexOf(t) >= 0) return true;
    if (t.length >= 4) {
      if (local === t) return true;
      if (local.indexOf(`${t}.`) >= 0) return true;
      if (local.indexOf(`${t}_`) >= 0) return true;
      if (local.indexOf(`${t}-`) >= 0) return true;
    }
    return false;
  }
  for (let i = 0; i <= words.length - tokenWords.length; i += 1) {
    let same = true;
    for (let j = 0; j < tokenWords.length; j += 1) {
      if (words[i + j] !== tokenWords[j]) {
        same = false;
        break;
      }
    }
    if (same) return true;
  }
  return false;
}

function isBlacklistedEmailLocal_(email) {
  const value = normalizeEmail_(email);
  if (!value || value.indexOf("@") <= 0) return false;
  const local = String(value.split("@")[0] || "").trim().toLowerCase();
  if (!local) return false;
  const blacklist = CRM_PIPELINE_CONFIG.emailBlacklist || [];
  for (let i = 0; i < blacklist.length; i += 1) {
    const token = String(blacklist[i] || "").trim().toLowerCase();
    if (!token) continue;
    if (localPartMatchesToken_(local, token)) return true;
  }
  return false;
}

function classifyEmail_(email, candidate) {
  const value = normalizeEmail_(email);
  if (!value) return "BLACKLIST";
  const local = String(value.split("@")[0] || "").trim().toLowerCase();
  if (!local) return "BLACKLIST";

  const blacklist = CRM_PIPELINE_CONFIG.emailBlacklist || [];
  for (let i = 0; i < blacklist.length; i += 1) {
    const token = String(blacklist[i] || "").trim().toLowerCase();
    if (!token) continue;
    if (localPartMatchesToken_(local, token)) return "BLACKLIST";
  }

  const roleWhite = CRM_PIPELINE_CONFIG.roleVerticalWhitelist || [];
  for (let i = 0; i < roleWhite.length; i += 1) {
    const token = String(roleWhite[i] || "").trim().toLowerCase();
    if (!token) continue;
    if (localPartMatchesToken_(local, token)) return "ROLE_VERTICAL";
  }

  const weak = CRM_PIPELINE_CONFIG.weakGenericEmails || [];
  for (let i = 0; i < weak.length; i += 1) {
    const token = String(weak[i] || "").trim().toLowerCase();
    if (!token) continue;
    if (localPartMatchesToken_(local, token)) return "GENERIC_WEAK";
  }

  if (isGenericMailboxEmail_(value)) return "GENERIC_WEAK";
  return "PERSONAL_CORP";
}

function detectRoleVerticalFunctionFromEmail_(email) {
  const value = normalizeEmail_(email);
  if (!value) return "";
  const local = String(value.split("@")[0] || "").toLowerCase();
  if (!local) return "";
  if (/(prensa|press|media|redaccion)/.test(local)) return "PRENSA";
  if (/(booking|bookings|contratacion)/.test(local)) return "BOOKING";
  if (/(programacion)/.test(local)) return "PROGRAMACION";
  if (/(comunicacion|promo|promocion)/.test(local)) return "COMUNICACION";
  if (/(management|manager|artistico|a&r|\bar\b)/.test(local)) return "MANAGEMENT";
  if (/(produccion)/.test(local)) return "PRODUCCION";
  return "";
}

function buildRoleVerticalDisplayName_(email, roleFunction) {
  const fn = normalizeAllowedFunction_(roleFunction || detectRoleVerticalFunctionFromEmail_(email) || "OTRO");
  if (fn === "PRENSA" || fn === "REDACCION") return "CONTACTO DE PRENSA";
  if (fn === "BOOKING" || fn === "CONTRATACION") return "CONTACTO BOOKING";
  if (fn === "PROGRAMACION") return "CONTACTO PROGRAMACION";
  if (fn === "COMUNICACION") return "CONTACTO COMUNICACION";
  if (fn === "MANAGEMENT") return "CONTACTO MANAGEMENT";
  if (fn === "PRODUCCION") return "CONTACTO PRODUCCION";
  return "CONTACTO PROFESIONAL";
}

function normalizeAllowedFunction_(raw) {
  const value = normalizeTextKey_(raw);
  if (!value) return "OTRO";
  if (/(prensa|press)/.test(value)) return "PRENSA";
  if (/(comunicacion|communication|promo|promocion|media)/.test(value)) return "COMUNICACION";
  if (/(booking|bookings)/.test(value)) return "BOOKING";
  if (/(contratacion|hiring)/.test(value)) return "CONTRATACION";
  if (/(programacion|programador|curador)/.test(value)) return "PROGRAMACION";
  if (/(management|manager|mgmt)/.test(value)) return "MANAGEMENT";
  if (/(produccion|production)/.test(value)) return "PRODUCCION";
  if (/(direccion artistica|artistica|artistico)/.test(value)) return "DIRECCION ARTISTICA";
  if (/(redaccion|editorial|redactor|periodista|journalist)/.test(value)) return "REDACCION";
  if (/(a&r|artist and repertoire|\bar\b)/.test(value)) return "A&R";
  return "OTRO";
}

function hasExplicitForeignCountry_(text) {
  const value = normalizeTextKey_(text);
  if (!value) return false;
  const countries = /(argentina|chile|peru|mexico|colombia|ecuador|uruguay|paraguay|bolivia|venezuela|brasil|brazil|francia|france|italia|italy|alemania|germany|united states|usa|canada|uk|reino unido|portugal|belgica|belgium|netherlands|paises bajos)/;
  return countries.test(value);
}

function hasForeignCityDominant_(candidate, text) {
  const value = normalizeTextKey_(text);
  if (!value) return false;
  const foreignCities = /(london|paris|berlin|rome|new york|los angeles|miami|bogota|lima|santiago de chile|buenos aires|lisboa|porto)/;
  const city = normalizeTextKey_(candidate && candidate.city);
  if (city && foreignCities.test(city)) return true;
  if (!foreignCities.test(value)) return false;
  const spainSignals = /(espana|spain|madrid|barcelona|valencia|sevilla|bilbao|zaragoza|malaga|granada|murcia|vigo|a coruna|alicante|cordoba|valladolid|gijon|oviedo|pamplona|donostia|santander|cadiz|huelva|jaen|salamanca|toledo)/;
  return !spainSignals.test(value);
}

function scoreSpain_(candidate, query, sheetName) {
  let score = 0;
  let rejected = false;
  const text = normalizeTextKey_([
    candidate.country,
    candidate.city,
    candidate.province,
    candidate.description,
    candidate.notes,
    candidate.sourceUrl,
    candidate.web,
    candidate.company
  ].join(" "));
  const queryText = normalizeTextKey_(query);

  if (/(espana|spain)/.test(text)) score += 60;
  if ((candidate.sourceDomain && /\.es$/i.test(candidate.sourceDomain)) || (candidate.emailDomain && /\.es$/i.test(candidate.emailDomain))) {
    score += 20;
  }
  const phone = normalizePhoneForCrmPipeline_(candidate.phone);
  if (/^(34|0034)\d+/.test(phone)) score += 25;

  let geoHit = false;
  const geoLists = [
    CRM_PIPELINE_CONFIG.spainProvinces || [],
    CRM_PIPELINE_CONFIG.spainAutonomousCommunities || [],
    CRM_PIPELINE_CONFIG.spainCities || []
  ];
  const geoText = `${text} ${queryText}`.trim();
  for (let g = 0; g < geoLists.length && !geoHit; g += 1) {
    const list = geoLists[g];
    for (let i = 0; i < list.length; i += 1) {
      const item = String(list[i] || "").toLowerCase();
      if (item && geoText.indexOf(item) >= 0) {
        geoHit = true;
        break;
      }
    }
  }
  if (geoHit) score += 20;
  if (queryText.indexOf("espana") >= 0 || queryText.indexOf("spain") >= 0) score += 10;

  if (hasExplicitForeignCountry_(text) || hasExplicitForeignCountry_(queryText)) {
    score -= 100;
    rejected = true;
  }
  if (hasForeignCityDominant_(candidate, text) || hasForeignCityDominant_(candidate, queryText)) {
    score -= 60;
    rejected = true;
  }
  return { score: score, rejected: rejected };
}

function isMusicalCompanySignal_(candidate) {
  const text = normalizeTextKey_([
    candidate.company,
    candidate.description,
    candidate.role,
    candidate.roleFunction,
    candidate.notes
  ].join(" "));
  if (!text) return false;
  return /(musica|music|festival|concierto|booking|management|radio|revista|medio|discograf|label|promotor|promotora|orquesta|tablao|flamenco|rumba|electro|rock|pop|indie|clasica|sala|club|cultural)/.test(text);
}

function scoreCandidate_(candidate) {
  let score = 0;
  const emailClass = String(candidate.emailClass || "");
  const hasName = !!normalizePersonName_(candidate.name || "");
  const fn = normalizeAllowedFunction_(candidate.roleFunction || candidate.role || "OTRO");
  if (hasName) score += 25;
  if (emailClass === "PERSONAL_CORP") score += 20;
  if (emailClass === "ROLE_VERTICAL") score += 15;
  if (fn !== "OTRO") score += 15;
  if (isMusicalCompanySignal_(candidate)) score += 10;
  if (Number(candidate.spainScore || 0) >= 60) score += 15;
  else if (Number(candidate.spainScore || 0) >= 40) score += 10;
  if (emailClass === "GENERIC_WEAK") score -= 20;
  if (!hasName && emailClass !== "ROLE_VERTICAL") score -= 20;
  return score;
}

function buildDedupeKeys_(candidate, sheetName) {
  const emailKey = normalizeEmail_(candidate && candidate.email);
  const nameKey = normalizeTextKey_(candidate && candidate.name);
  const companyKey = normalizeCompanyKey_(candidate && candidate.company);
  const roleKey = normalizeTextKey_(normalizeAllowedFunction_(candidate && (candidate.roleFunction || candidate.role || "OTRO")));
  return {
    emailKey: emailKey,
    personCompanyRoleKey: [String(sheetName || ""), nameKey, companyKey, roleKey].join("|")
  };
}

function chooseBestCandidatePerCompanyRole_(candidates) {
  const items = Array.isArray(candidates) ? candidates : [];
  const bestMap = {};
  for (let i = 0; i < items.length; i += 1) {
    const c = items[i] || {};
    const companyKey = normalizeCompanyKey_(c.company || "");
    if (!companyKey) continue;
    const fnKey = normalizeTextKey_(normalizeAllowedFunction_(c.roleFunction || c.role || "OTRO"));
    const key = [companyKey, fnKey].join("|");
    if (!bestMap[key]) {
      bestMap[key] = c;
      continue;
    }
    const prev = bestMap[key];
    const cScore = Number(c.totalScore || 0);
    const pScore = Number(prev.totalScore || 0);
    if (cScore > pScore) {
      bestMap[key] = c;
      continue;
    }
    if (cScore === pScore) {
      const cSpain = Number(c.spainScore || 0);
      const pSpain = Number(prev.spainScore || 0);
      if (cSpain > pSpain) {
        bestMap[key] = c;
        continue;
      }
      if (cSpain === pSpain) {
        const cType = String(c.emailClass || "");
        const pType = String(prev.emailClass || "");
        if (cType === "PERSONAL_CORP" && pType !== "PERSONAL_CORP") bestMap[key] = c;
      }
    }
  }
  const out = [];
  const keys = Object.keys(bestMap);
  for (let i = 0; i < keys.length; i += 1) out.push(bestMap[keys[i]]);
  return out;
}

function buildQueryHash_(query, sheetName) {
  const src = `${String(sheetName || "").trim()}|${String(query || "").trim()}`;
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, src, Utilities.Charset.UTF_8);
  const hex = bytes.map((b) => {
    const n = b < 0 ? b + 256 : b;
    return (`0${n.toString(16)}`).slice(-2);
  }).join("");
  return hex.slice(0, 12);
}

function buildCrmCandidateFromRecord_(rec, sheetName, query, queryHash) {
  const sourceUrl = normalizeWeb_(String(rec.source_url || rec.web || "").trim());
  const email = normalizeEmail_(rec.email);
  const notesBase = [
    String(rec.fuente || "").trim(),
    String(sourceUrl || "").trim(),
    String(rec.notas || "").trim()
  ].filter((x) => x).join(" | ");

  let company = normalizeCompanyName_(String(rec.empresa || "").trim());
  if (!company && email) company = normalizeCompanyName_(deriveCompanyFromEmailOrNotes_(email, notesBase));
  if (!company) company = normalizeCompanyName_(companyFromDomain_(sourceUrl));

  let name = normalizePersonName_(String(rec.nombre_contacto || rec.contacto || "").trim());
  if (!name) name = inferNameFromEmail_(email);

  const roleRaw = normalizeCrmText_(String(rec.cargo || "").trim()) || "Profesional industria musical";
  const roleFnRaw = normalizeCrmText_(String(rec.funcion_cargo || "").trim());
  const roleFunction = normalizeAllowedFunction_(roleFnRaw || roleRaw || detectRoleVerticalFunctionFromEmail_(email) || "OTRO");

  const descRaw = normalizeCrmText_(String(rec.descripcion_medio_empresa || "").trim());
  const description = (!descRaw || isLikelyUnstructuredDescription_(descRaw))
    ? buildDefaultCrmDescription_(sheetName, company)
    : descRaw;

  return {
    query: String(query || ""),
    queryHash: String(queryHash || ""),
    name: name,
    company: company,
    description: description,
    role: roleRaw,
    roleFunction: roleFunction,
    email: email,
    phone: normalizePhoneForCrmPipeline_(String(rec.telefono || "").trim()),
    notes: notesBase,
    sourceUrl: sourceUrl,
    web: normalizeWeb_(String(rec.web || "").trim()),
    sourceDomain: getRootDomain_(sourceUrl),
    emailDomain: getRootDomain_(String(email.split("@")[1] || "").trim()),
    country: String(rec.pais || "").trim(),
    city: String(rec.ciudad || "").trim(),
    province: String(rec.provincia || "").trim()
  };
}

function buildSheetDedupeIndex_(sheet) {
  const out = { emailMap: {}, personRoleMap: {} };
  const lastRow = Number(sheet.getLastRow() || 1);
  if (lastRow < 2) return out;
  const values = sheet.getRange(2, 1, lastRow - 1, 8).getDisplayValues();
  for (let i = 0; i < values.length; i += 1) {
    const row = values[i] || [];
    const email = normalizeEmail_(row[5]);
    if (email) out.emailMap[email] = true;
    const key = [
      sheet.getName(),
      normalizeTextKey_(row[0]),
      normalizeCompanyKey_(row[1]),
      normalizeTextKey_(normalizeAllowedFunction_(row[4] || row[3] || "OTRO"))
    ].join("|");
    out.personRoleMap[key] = true;
  }
  return out;
}

function buildGlobalEmailSheetMap_(ss) {
  const out = {};
  const sheets = CRM_PIPELINE_CONFIG.validSheets || [];
  for (let i = 0; i < sheets.length; i += 1) {
    const name = String(sheets[i] || "");
    const sh = ss.getSheetByName(name);
    if (!sh) continue;
    const lastRow = Number(sh.getLastRow() || 1);
    if (lastRow < 2) continue;
    const vals = sh.getRange(2, 6, lastRow - 1, 1).getDisplayValues();
    for (let r = 0; r < vals.length; r += 1) {
      const email = normalizeEmail_(vals[r][0]);
      if (!email) continue;
      if (!out[email]) out[email] = [];
      if (out[email].indexOf(name) < 0) out[email].push(name);
    }
  }
  return out;
}

function appendRowsBatch_(sheet, rows) {
  if (!Array.isArray(rows) || !rows.length) {
    return { appended: 0, startRow: 0, endRow: 0 };
  }
  const startRow = Math.max(2, Number(sheet.getLastRow() || 1) + 1);
  sheet.getRange(startRow, 1, rows.length, 8).setValues(rows);
  sheet.getRange(startRow, 6, rows.length, 1).setNumberFormat("@");
  sheet.getRange(startRow, 7, rows.length, 1).setNumberFormat("@");
  return {
    appended: rows.length,
    startRow: startRow,
    endRow: startRow + rows.length - 1
  };
}

function buildCrmObservation_(candidate, queryHash, globalDup, otherSheets) {
  const source = String(candidate.sourceDomain || "NA").trim() || "NA";
  const parts = [
    `TIPO=${String(candidate.emailClass || "PERSONAL_CORP")}`,
    `ES=${Number(candidate.spainScore || 0)}`,
    `QH=${String(queryHash || "")}`,
    `SRC=${source}`,
    `GLOBAL_DUP=${globalDup ? 1 : 0}`
  ];
  if (Array.isArray(otherSheets) && otherSheets.length) {
    parts.push(`EN_OTRA_PESTANA=${otherSheets.join(",")}`);
  }
  const compact = parts.join(";");
  if (candidate.notes) return `${compact} | ${candidate.notes}`;
  return compact;
}

function ensureCrmStatsSheet_(ss) {
  const sheetName = "_CRM_STATS";
  let sheet = ss.getSheetByName(sheetName);
  const headers = [
    "timestamp",
    "sheet",
    "query",
    "queryHash",
    "candidates_in",
    "after_email",
    "after_spain",
    "after_quality",
    "after_dedupe",
    "appended",
    "reasons_json",
    "elapsed_ms"
  ];
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    sheet.hideSheet();
  } else {
    const current = sheet.getRange(1, 1, 1, headers.length).getDisplayValues()[0] || [];
    let same = true;
    for (let i = 0; i < headers.length; i += 1) {
      if (String(current[i] || "").trim() !== headers[i]) { same = false; break; }
    }
    if (!same) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    try { sheet.hideSheet(); } catch (err) {}
  }
  return sheet;
}

function logDumpStats_(stats) {
  try {
    const ss = getTargetSpreadsheet_();
    const sh = ensureCrmStatsSheet_(ss);
    const nextRow = Math.max(2, Number(sh.getLastRow() || 1) + 1);
    const row = [[
      new Date().toISOString(),
      String((stats && stats.sheet) || ""),
      String((stats && stats.query) || ""),
      String((stats && stats.queryHash) || ""),
      Number((stats && stats.candidates_in) || 0),
      Number((stats && stats.after_email) || 0),
      Number((stats && stats.after_spain) || 0),
      Number((stats && stats.after_quality) || 0),
      Number((stats && stats.after_dedupe) || 0),
      Number((stats && stats.appended) || 0),
      JSON.stringify((stats && stats.reasons) || {}),
      Number((stats && stats.elapsed_ms) || 0)
    ]];
    sh.getRange(nextRow, 1, 1, row[0].length).setValues(row);
  } catch (err) {
    // No interrumpimos el flujo por errores de logging.
  }
}

function uniqueArray_(arr) {
  const out = [];
  const seen = {};
  const list = Array.isArray(arr) ? arr : [];
  for (let i = 0; i < list.length; i += 1) {
    const v = String(list[i] || "").trim();
    if (!v || seen[v]) continue;
    seen[v] = true;
    out.push(v);
  }
  return out;
}

function appendCrmRows_(sheet, rows) {
  return appendRowsBatch_(sheet, rows);
}

function collectExistingEmailsForCrm_(sheet) {
  return collectExistingEmailIndexForCrm_(sheet).list;
}

function collectExistingEmailIndexForCrm_(sheet, options) {
  const opts = (options && typeof options === "object") ? options : {};
  const ss = (opts.spreadsheet && typeof opts.spreadsheet.getSheetByName === "function")
    ? opts.spreadsheet
    : getTargetSpreadsheet_();
  const includeTargetSheets = opts.includeTargetSheets === true;
  const out = {
    list: [],
    map: {},
    emailDomains: [],
    rootDomains: []
  };
  const domainMap = {};
  const rootDomainMap = {};
  const scanSheetEmails = (targetSheet) => {
    if (!targetSheet) return;
    const lastRow = Number(targetSheet.getLastRow() || 1);
    if (lastRow < 2) return;
    const values = targetSheet.getRange(2, 6, lastRow - 1, 1).getDisplayValues();
    for (let i = 0; i < values.length; i += 1) {
      const email = String(values[i][0] || "").trim().toLowerCase();
      if (!email) continue;
      if (!isValidEmail_(email)) continue;
      if (!out.map[email]) {
        out.map[email] = true;
        out.list.push(email);
      }
      const domain = String(email.split("@")[1] || "").trim().toLowerCase();
      if (domain && !domainMap[domain]) {
        domainMap[domain] = true;
        out.emailDomains.push(domain);
      }
      const root = getRootDomain_(domain) || domain;
      if (root && !rootDomainMap[root]) {
        rootDomainMap[root] = true;
        out.rootDomains.push(root);
      }
    }
  };

  scanSheetEmails(sheet);

  if (includeTargetSheets) {
    const targetNamesRaw = Array.isArray(APP_CONFIG.crmTargetSheets) ? APP_CONFIG.crmTargetSheets : [];
    const targetNames = uniqueArray_(targetNamesRaw.concat([String(opts.currentSheetName || "")]));
    for (let i = 0; i < targetNames.length; i += 1) {
      const targetName = String(targetNames[i] || "").trim();
      if (!targetName) continue;
      const targetSheet = ss.getSheetByName(targetName);
      if (!targetSheet || targetSheet.getSheetId() === sheet.getSheetId()) continue;
      scanSheetEmails(targetSheet);
    }
  }
  return out;
}

function sanitizePhoneForCrm_(raw) {
  const normalized = normalizePhone_(String(raw || "").trim(), "NACIONAL_ES");
  if (!normalized) return "NO ENCONTRADO";
  return String(normalized || "").replace(/^\+/, "");
}

function isLikelySpanishCrmRecord_(rec) {
  const text = [
    rec.source_url,
    rec.web,
    rec.source_snippet,
    rec.descripcion_medio_empresa,
    rec.empresa,
    rec.notas
  ].map((x) => String(x || "").toLowerCase()).join(" ");
  if (/\.es([\/\?#]|$)/i.test(text)) return true;
  if (/(espana|españa|madrid|barcelona|valencia|sevilla|bilbao|zaragoza|malaga|granada|murcia|vigo|a coruna|a coruña)/i.test(text)) return true;
  return false;
}

function buildDefaultCrmQueryBySheet_(sheetName) {
  const name = String(sheetName || "").toUpperCase();
  if (name.indexOf("INDIE") >= 0) {
    return "Espana industria musical indie periodistas promotores productores discograficas influencers emails directos de profesionales";
  }
  if (name.indexOf("POP") >= 0) {
    return "Espana industria musical pop periodistas promotores productores discograficas influencers emails directos de profesionales";
  }
  if (name.indexOf("ROCK") >= 0) {
    return "Espana industria musical rock periodistas promotores productores discograficas influencers emails directos de profesionales";
  }
  if (name.indexOf("CLASICA") >= 0) {
    return "Espana industria musical clasica periodistas programadores promotores productores discograficas emails directos de profesionales";
  }
  if (name.indexOf("REGIONAL") >= 0) {
    return "Espana industria musical regional periodistas promotores productores discograficas influencers emails directos de profesionales";
  }
  if (name.indexOf("FLAMENCO") >= 0) {
    return "Espana industria musical flamenco periodistas promotores productores discograficas representantes emails directos de profesionales";
  }
  if (name.indexOf("RUMBA") >= 0) {
    return "Espana industria musical rumba periodistas promotores productores discograficas representantes emails directos de profesionales";
  }
  if (name.indexOf("ELECTRONICO") >= 0) {
    return "Espana industria musical electronica periodistas promotores productores labels djs agencias emails directos de profesionales";
  }
  return "Espana industria musical profesionales periodistas promotores productores discograficas influencers emails directos";
}

function cleanupCrmUnusedColumnsAndAiReview() {
  const ss = getTargetSpreadsheet_();
  const targetSheets = (APP_CONFIG.crmTargetSheets || []).slice();
  const reviewed = [];

  for (let i = 0; i < targetSheets.length; i += 1) {
    const sheetName = String(targetSheets[i] || "");
    if (!sheetName) continue;
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) continue;

    const removedColumns = Math.max(0, Number(sheet.getMaxColumns() || 0) - 8);
    if (removedColumns > 0) {
      sheet.deleteColumns(9, removedColumns);
    }

    const lastRow = Number(sheet.getLastRow() || 1);
    const changedRows = [];
    let changesCount = 0;
    if (lastRow >= 2) {
      const range = sheet.getRange(2, 1, lastRow - 1, 8);
      const values = range.getDisplayValues();
      const updated = [];
      for (let r = 0; r < values.length; r += 1) {
        const reviewedRow = reviewCrmRowHeuristic_(values[r], sheetName, r + 2);
        updated.push(reviewedRow.row);
        if (reviewedRow.changed) {
          changesCount += reviewedRow.changes.length;
          changedRows.push({
            row: r + 2,
            changes: reviewedRow.changes
          });
        }
      }
      if (updated.length) {
        range.setValues(updated);
        sheet.getRange(2, 6, updated.length, 1).setNumberFormat("@");
        sheet.getRange(2, 7, updated.length, 1).setNumberFormat("@");
      }
    }

    reviewed.push({
      sheet: sheetName,
      removedColumns: removedColumns,
      reviewedRows: Math.max(0, lastRow - 1),
      changesCount: changesCount,
      changedRows: changedRows
    });
  }

  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    reviewedSheets: reviewed
  };
}

function reviewCrmRowHeuristic_(row, sheetName, rowNumber) {
  const original = Array.isArray(row) ? row.slice(0, 8) : ["", "", "", "", "", "", "", ""];
  const out = original.slice();
  const changes = [];

  let name = normalizePersonName_(String(out[0] || "").trim());
  let company = normalizeCompanyName_(String(out[1] || "").trim());
  let description = normalizeCrmText_(out[2]);
  let role = normalizeCrmText_(out[3]);
  let roleFunction = normalizeCrmText_(out[4]);
  let email = normalizeEmail_(out[5]);
  let phone = String(out[6] || "").trim();
  let notes = normalizeCrmText_(out[7]);
  let emailClass = "BLACKLIST";

  if (email && !isValidEmail_(email)) {
    email = "";
    changes.push("EMAIL marcado como invalido");
  }
  if (email) {
    emailClass = classifyEmail_(email, {
      email: email,
      company: company,
      role: role,
      roleFunction: roleFunction
    });
  }

  if (!company) {
    company = deriveCompanyFromEmailOrNotes_(email, notes);
    if (company) changes.push("MEDIO / EMPRESA derivado");
  }

  const nameWasNotFoundLabel = isCrmNotFoundLabel_(name);
  const currentNameLooksValid = !nameWasNotFoundLabel && looksLikePersonName_(name, company, "");
  if (!name || nameWasNotFoundLabel || !currentNameLooksValid) {
    if (email && emailClass === "PERSONAL_CORP") {
      const inferred = inferNameFromEmail_(email);
      if (inferred && looksLikePersonName_(inferred, company, "")) {
        name = inferred;
        changes.push("NOMBRE COMPLETO inferido desde email");
      }
    }
    if ((!name || isCrmNotFoundLabel_(name)) && email && emailClass === "ROLE_VERTICAL") {
      name = buildCleanupRoleVerticalName_(email, roleFunction || role);
      changes.push("NOMBRE COMPLETO rol vertical");
    }
    const nameLooksValidAfterInference = looksLikePersonName_(name, company, "");
    if (!name || (!nameLooksValidAfterInference && emailClass !== "ROLE_VERTICAL")) {
      if (email && emailClass === "ROLE_VERTICAL") {
        name = buildCleanupRoleVerticalName_(email, roleFunction || role);
      } else {
        name = "NO ENCONTRADO";
      }
      changes.push("NOMBRE COMPLETO marcado como no encontrado");
    }
  }

  if (
    !description
    || description.toLowerCase() === String(company || "").toLowerCase()
    || isLikelyUnstructuredDescription_(description)
  ) {
    description = buildDefaultCrmDescription_(sheetName, company);
    changes.push("DESCRIPCION corregida");
  }

  if (!role || role.length < 4 || role.length > 90 || /^https?:\/\//i.test(role)) {
    role = "Profesional industria musical";
    changes.push("CARGO corregido");
  }

  const normalizedFunction = normalizeAllowedFunction_(roleFunction || role || detectRoleVerticalFunctionFromEmail_(email) || "OTRO");
  if (normalizedFunction !== roleFunction) {
    roleFunction = normalizedFunction;
    changes.push("FUNCION DEL CARGO normalizada");
  }

  const normalizedPhone = normalizePhoneForCrmPipeline_(phone);
  if (normalizedPhone !== phone) {
    phone = normalizedPhone;
    changes.push("TELEFONO normalizado");
  }
  if (!phone) phone = "NO ENCONTRADO";

  if (changes.length) {
    const marker = `[REV_IA ${sheetName} F${rowNumber}]`;
    if (String(notes || "").indexOf(marker) < 0) {
      notes = notes ? `${notes} | ${marker}` : marker;
    }
  }

  out[0] = name;
  out[1] = company;
  out[2] = description;
  out[3] = role;
  out[4] = roleFunction;
  out[5] = email;
  out[6] = phone;
  out[7] = notes;

  return {
    row: out,
    changed: changes.length > 0,
    changes: changes
  };
}

function buildCleanupRoleVerticalName_(email, roleFunction) {
  const fn = normalizeAllowedFunction_(roleFunction || detectRoleVerticalFunctionFromEmail_(email) || "OTRO");
  if (fn === "PRENSA" || fn === "REDACCION") return "CONTACTO DE PRENSA";
  if (fn === "BOOKING" || fn === "CONTRATACION") return "CONTACTO BOOKING";
  if (fn === "PROGRAMACION") return "CONTACTO PROGRAMACION";
  if (fn === "COMUNICACION") return "CONTACTO COMUNICACION";
  return "CONTACTO MANAGEMENT";
}

function crmPipelineSmokeTest() {
  const sheetName = "RELEVANTES INDIE";
  const otherSheet = "RELEVANTES ROCK";
  const query = "Espana Madrid industria musical contacto profesional";
  const queryHash = buildQueryHash_(query, sheetName);
  const localIndex = { emailMap: { "duplicado@indie.es": true }, personRoleMap: {} };
  const globalIndex = { "global@compartido.es": [otherSheet] };
  const thresholds = CRM_PIPELINE_CONFIG.thresholds || {};
  const results = [];

  const runCase = (id, title, candidate, expectedAccepted, expectedContains) => {
    const evaluated = evaluateCrmCandidateForSmoke_(
      candidate,
      sheetName,
      query,
      queryHash,
      localIndex,
      globalIndex,
      thresholds
    );
    const hasExpectedText = expectedContains
      ? String(evaluated.observation || "").indexOf(String(expectedContains || "")) >= 0
      : true;
    const pass = (evaluated.accepted === expectedAccepted) && hasExpectedText;
    results.push({
      caseId: id,
      title: title,
      accepted: evaluated.accepted,
      expectedAccepted: expectedAccepted,
      pass: pass,
      reason: evaluated.reason,
      observation: evaluated.observation || ""
    });
  };

  runCase(
    1,
    "persona valida espanola",
    {
      name: "Ana Ruiz",
      company: "Mondo Sonoro",
      role: "Periodista",
      roleFunction: "PRENSA",
      email: "ana.ruiz@mondosonoro.com",
      phone: "34 6XX XXX XXX",
      description: "Revista musical en Espana",
      country: "Espana",
      city: "Madrid",
      sourceDomain: "mondosonoro.com",
      emailDomain: "mondosonoro.com"
    },
    true
  );

  runCase(
    2,
    "booking role vertical con empresa y funcion",
    {
      name: "",
      company: "Promotora Sur",
      role: "Booking",
      roleFunction: "BOOKING",
      email: "booking@promotorasur.es",
      phone: "34600111222",
      description: "Promotora de conciertos en Sevilla",
      country: "Espana",
      city: "Sevilla",
      sourceDomain: "promotorasur.es",
      emailDomain: "promotorasur.es"
    },
    true
  );

  runCase(
    3,
    "blacklist noreply",
    {
      name: "Mario",
      company: "Label Norte",
      role: "Comunicacion",
      roleFunction: "COMUNICACION",
      email: "noreply@labelnorte.es",
      phone: "34600111333",
      description: "Sello musical espanol",
      country: "Espana",
      city: "Bilbao",
      sourceDomain: "labelnorte.es",
      emailDomain: "labelnorte.es"
    },
    false
  );

  runCase(
    4,
    "email invalido",
    {
      name: "Lucia",
      company: "Radio Centro",
      role: "Redactora",
      roleFunction: "REDACCION",
      email: "lucia.radio-centro.es",
      phone: "34600111444",
      description: "Radio musical espana",
      country: "Espana",
      city: "Madrid",
      sourceDomain: "radiocentro.es",
      emailDomain: "radiocentro.es"
    },
    false
  );

  runCase(
    5,
    "fuera de espana",
    {
      name: "Paul Martin",
      company: "Festival Paris",
      role: "Programador",
      roleFunction: "PROGRAMACION",
      email: "paul.martin@festivalparis.fr",
      phone: "33144556677",
      description: "Festival de musica en Paris Francia",
      country: "Francia",
      city: "Paris",
      sourceDomain: "festivalparis.fr",
      emailDomain: "festivalparis.fr"
    },
    false
  );

  runCase(
    6,
    "mismo email en misma pestana",
    {
      name: "Clara Diaz",
      company: "Indie Norte",
      role: "Prensa",
      roleFunction: "PRENSA",
      email: "duplicado@indie.es",
      phone: "34600999888",
      description: "Medio indie espana",
      country: "Espana",
      city: "Oviedo",
      sourceDomain: "indie.es",
      emailDomain: "indie.es"
    },
    false
  );

  runCase(
    7,
    "mismo email en otra pestana permite append",
    {
      name: "Irene Campos",
      company: "Comparti2",
      role: "Comunicacion",
      roleFunction: "COMUNICACION",
      email: "global@compartido.es",
      phone: "34600777111",
      description: "Agencia de management musical en Espana",
      country: "Espana",
      city: "Valencia",
      sourceDomain: "compartido.es",
      emailDomain: "compartido.es"
    },
    true,
    "GLOBAL_DUP=1"
  );

  const case8a = evaluateCrmCandidateForSmoke_(
    {
      name: "Pedro Soler",
      company: "Agencia Compas",
      role: "Prensa",
      roleFunction: "PRENSA",
      email: "pedro@agenciacompas.es",
      phone: "34600666111",
      description: "Agencia artistica espanola",
      country: "Espana",
      city: "Madrid",
      sourceDomain: "agenciacompas.es",
      emailDomain: "agenciacompas.es"
    },
    sheetName,
    query,
    queryHash,
    localIndex,
    globalIndex,
    thresholds
  );
  const case8b = evaluateCrmCandidateForSmoke_(
    {
      name: "Pedro Soler",
      company: "Agencia Compas",
      role: "Booking",
      roleFunction: "BOOKING",
      email: "pedro.booking@agenciacompas.es",
      phone: "34600666222",
      description: "Agencia artistica espanola",
      country: "Espana",
      city: "Madrid",
      sourceDomain: "agenciacompas.es",
      emailDomain: "agenciacompas.es"
    },
    sheetName,
    query,
    queryHash,
    localIndex,
    globalIndex,
    thresholds
  );
  results.push({
    caseId: 8,
    title: "misma empresa con distinta funcion",
    accepted: case8a.accepted && case8b.accepted,
    expectedAccepted: true,
    pass: case8a.accepted && case8b.accepted,
    reason: `${case8a.reason}/${case8b.reason}`,
    observation: `${case8a.observation || ""} || ${case8b.observation || ""}`
  });

  const passed = results.filter((r) => r.pass).length;
  const failed = results.length - passed;
  return {
    ok: failed === 0,
    total: results.length,
    passed: passed,
    failed: failed,
    cases: results
  };
}

function evaluateCrmCandidateForSmoke_(candidate, sheetName, query, queryHash, localIndex, globalIndex, thresholds) {
  const minSpainScore = Number((thresholds && thresholds.MIN_SPAIN_SCORE) || 40);
  const minScorePersonal = Number((thresholds && thresholds.MIN_SCORE_PERSONAL) || 45);
  const minScoreRole = Number((thresholds && thresholds.MIN_SCORE_ROLE) || 50);
  const minScoreWeak = Number((thresholds && thresholds.MIN_SCORE_WEAK_GENERIC) || 65);
  const c = candidate || {};
  c.email = normalizeEmail_(c.email);
  c.name = normalizePersonName_(c.name || "");
  c.company = normalizeCompanyName_(c.company || "");
  c.role = normalizeCrmText_(c.role || "");
  c.roleFunction = normalizeAllowedFunction_(c.roleFunction || c.role || detectRoleVerticalFunctionFromEmail_(c.email) || "OTRO");
  c.phone = normalizePhoneForCrmPipeline_(c.phone);
  c.sourceDomain = String(c.sourceDomain || "").trim().toLowerCase();
  c.emailDomain = String(c.emailDomain || "").trim().toLowerCase();
  c.description = normalizeCrmText_(c.description || "");
  c.country = String(c.country || "").trim();
  c.city = String(c.city || "").trim();

  if (!c.email) {
    return { accepted: false, reason: "INVALID_EMAIL", observation: "" };
  }
  if (!isValidEmail_(c.email)) {
    if (isBlacklistedEmailLocal_(c.email)) {
      return { accepted: false, reason: "BLACKLIST_EMAIL", observation: "" };
    }
    return { accepted: false, reason: "INVALID_EMAIL", observation: "" };
  }
  c.emailClass = classifyEmail_(c.email, c);
  if (c.emailClass === "BLACKLIST") {
    return { accepted: false, reason: "BLACKLIST_EMAIL", observation: "" };
  }

  const sp = scoreSpain_(c, query, sheetName);
  c.spainScore = Number(sp.score || 0);
  if (sp.rejected || c.spainScore < minSpainScore) {
    return { accepted: false, reason: "NO_SPAIN_SIGNAL", observation: "" };
  }

  c.totalScore = scoreCandidate_(c);
  let passScore = false;
  if (c.emailClass === "PERSONAL_CORP") passScore = c.totalScore >= minScorePersonal;
  else if (c.emailClass === "ROLE_VERTICAL") passScore = c.totalScore >= minScoreRole;
  else if (c.emailClass === "GENERIC_WEAK") {
    passScore = c.totalScore >= minScoreWeak && !!c.company && c.roleFunction !== "OTRO";
  }
  if (!passScore) {
    return { accepted: false, reason: "LOW_SCORE", observation: "" };
  }
  if (!c.company) return { accepted: false, reason: "MISSING_COMPANY", observation: "" };
  if (!c.name && c.emailClass !== "ROLE_VERTICAL") return { accepted: false, reason: "MISSING_NAME_AND_ROLE", observation: "" };
  if (!c.name && c.emailClass === "ROLE_VERTICAL") c.name = buildRoleVerticalDisplayName_(c.email, c.roleFunction);

  const keys = buildDedupeKeys_(c, sheetName);
  if (keys.emailKey && localIndex.emailMap[keys.emailKey]) {
    return { accepted: false, reason: "DUPLICATE_IN_SHEET", observation: "" };
  }
  if (keys.personCompanyRoleKey && localIndex.personRoleMap[keys.personCompanyRoleKey]) {
    return { accepted: false, reason: "DUPLICATE_IN_SHEET", observation: "" };
  }

  const otherSheets = [];
  if (keys.emailKey && globalIndex[keys.emailKey]) {
    const allSheets = globalIndex[keys.emailKey];
    for (let i = 0; i < allSheets.length; i += 1) {
      const sh = String(allSheets[i] || "");
      if (sh && sh !== sheetName) otherSheets.push(sh);
    }
  }
  const observation = buildCrmObservation_(c, queryHash, otherSheets.length ? 1 : 0, otherSheets);
  if (keys.emailKey) localIndex.emailMap[keys.emailKey] = true;
  if (keys.personCompanyRoleKey) localIndex.personRoleMap[keys.personCompanyRoleKey] = true;
  return { accepted: true, reason: "APPENDED", observation: observation };
}

function deriveCompanyFromEmailOrNotes_(email, notes) {
  const value = String(email || "").trim().toLowerCase();
  if (value.indexOf("@") > 0) {
    const domain = value.split("@").pop();
    const root = domain ? domain.replace(/^www\./, "").replace(/\.[a-z]{2,}(\.[a-z]{2,})?$/i, "") : "";
    if (root) {
      return root
        .split(/[\.\-_]+/)
        .map((p) => p ? p.charAt(0).toUpperCase() + p.slice(1) : "")
        .join(" ")
        .trim();
    }
  }
  const noteText = String(notes || "");
  const webMatch = noteText.match(/https?:\/\/([^\/\s]+)/i);
  if (webMatch && webMatch[1]) {
    const host = String(webMatch[1]).replace(/^www\./i, "");
    const root = host.replace(/\.[a-z]{2,}(\.[a-z]{2,})?$/i, "");
    if (root) {
      return root
        .split(/[\.\-_]+/)
        .map((p) => p ? p.charAt(0).toUpperCase() + p.slice(1) : "")
        .join(" ")
        .trim();
    }
  }
  return "";
}

function normalizeCrmText_(value) {
  return String(value == null ? "" : value).trim();
}

function isCrmNotFoundLabel_(value) {
  const raw = String(value || "").trim();
  if (!raw) return true;
  const normalized = normalizeTextForMatch_(raw);
  if (!normalized) return true;
  return /^(no encontrado|noencontrado|not found|notfound|n\/a|na)$/i.test(normalized);
}

function isLikelyUnstructuredDescription_(value) {
  const text = String(value || "").trim();
  if (!text) return true;
  if (/^https?:\/\//i.test(text)) return true;
  if (text.length > 260) return true;
  const normalized = normalizeTextForMatch_(text);
  if (!normalized) return true;
  if (
    /(leer mas|organiza la gira|y las fechas son|sabado|domingo|lunes|martes|miercoles|jueves|viernes|concierto|festival|entradas|ticket|presenta actualmente|leer mas)/i.test(normalized)
  ) {
    return true;
  }
  const punctuationCount = (text.match(/[.!?]/g) || []).length;
  if (punctuationCount > 5 && text.length > 180) return true;
  return false;
}

function crmGenreLabelFromSheet_(sheetName) {
  const name = String(sheetName || "").toUpperCase();
  if (name.indexOf("INDIE") >= 0) return "musica indie y similares";
  if (name.indexOf("POP") >= 0) return "musica pop y similares";
  if (name.indexOf("ROCK") >= 0) return "musica rock y similares";
  if (name.indexOf("CLASICA") >= 0) return "musica clasica y similares";
  if (name.indexOf("REGIONAL") >= 0) return "musica regional y similares";
  if (name.indexOf("FLAMENCO") >= 0) return "flamenco y similares";
  if (name.indexOf("RUMBA") >= 0) return "rumba y similares";
  if (name.indexOf("ELECTRONICO") >= 0) return "musica electronica y similares";
  return "la industria musical";
}

function buildDefaultCrmDescription_(sheetName, company) {
  const genre = crmGenreLabelFromSheet_(sheetName);
  const entity = String(company || "").trim();
  if (entity) return `${entity}: entidad de la industria musical en Espana, enfocada en ${genre}.`;
  return `Entidad de la industria musical en Espana, enfocada en ${genre}.`;
}

function inspectSingleSheet_(sheet, filterViewsBySheet) {
  const dataRange = sheet.getDataRange();
  const usedRows = Number(dataRange.getNumRows() || 0);
  const usedColumns = Number(dataRange.getNumColumns() || 0);
  const usedRangeA1 = dataRange.getA1Notation();
  const previewRows = Math.max(1, Math.min(30, usedRows));
  const previewCols = Math.max(1, Math.min(12, usedColumns));
  const previewRange = sheet.getRange(1, 1, previewRows, previewCols);
  const previewDisplay = previewRange.getDisplayValues();
  const previewFormulas = previewRange.getFormulas();
  const previewBackgrounds = previewRange.getBackgrounds();
  const previewFonts = previewRange.getFontFamilies();
  const previewFontSizes = previewRange.getFontSizes();
  const previewFontWeights = previewRange.getFontWeights();
  const previewFontStyles = previewRange.getFontStyles();
  const previewHAlign = previewRange.getHorizontalAlignments();
  const previewVAlign = previewRange.getVerticalAlignments();
  const previewNumberFormats = previewRange.getNumberFormats();
  const mergedRanges = dataRange.getMergedRanges().map((r) => r.getA1Notation());

  const formulaScanRows = Math.max(1, Math.min(2000, usedRows));
  const formulaScanCols = Math.max(1, Math.min(50, usedColumns));
  const formulaRange = sheet.getRange(1, 1, formulaScanRows, formulaScanCols);
  const formulaCells = collectFormulaCells_(formulaRange.getFormulas(), 1, 1, 800);

  const validationScanRows = Math.max(1, Math.min(2000, usedRows));
  const validationScanCols = Math.max(1, Math.min(50, usedColumns));
  const validationRange = sheet.getRange(1, 1, validationScanRows, validationScanCols);
  const validations = collectValidations_(validationRange.getDataValidations(), 1, 1, 800);

  const filterInfo = collectBasicFilterInfo_(sheet);
  const conditionalRules = collectConditionalRules_(sheet);
  const protections = collectSheetProtections_(sheet);
  const rowHeights = collectRowHeights_(sheet, Math.max(1, Math.min(120, usedRows)));
  const columnWidths = collectColumnWidths_(sheet, Math.max(1, Math.min(60, usedColumns)));
  const hiddenRows = collectHiddenRows_(sheet, Math.max(1, Number(sheet.getMaxRows() || usedRows || 1)), 3000, 300);
  const hiddenColumns = collectHiddenColumns_(sheet, Math.max(1, Number(sheet.getMaxColumns() || usedColumns || 1)), 120, 120);
  const filterViews = (filterViewsBySheet && filterViewsBySheet[sheet.getName()]) || [];

  return {
    name: sheet.getName(),
    sheetId: sheet.getSheetId(),
    hiddenSheet: sheet.isSheetHidden ? sheet.isSheetHidden() : false,
    maxRows: sheet.getMaxRows(),
    maxColumns: sheet.getMaxColumns(),
    usedRangeA1: usedRangeA1,
    usedRows: usedRows,
    usedColumns: usedColumns,
    frozenRows: sheet.getFrozenRows(),
    frozenColumns: sheet.getFrozenColumns(),
    dataPreview: {
      rows: previewRows,
      columns: previewCols,
      headers: previewDisplay.length ? previewDisplay[0] : [],
      firstRows: previewDisplay.slice(0, Math.min(previewDisplay.length, 20)),
      formulaCells: formulaCells.items,
      formulaScanRows: formulaScanRows,
      formulaScanCols: formulaScanCols,
      formulaScanTruncated: usedRows > formulaScanRows || usedColumns > formulaScanCols
    },
    formats: {
      uniqueBackgrounds: flattenUniqueValues_(previewBackgrounds, 30),
      uniqueFontFamilies: flattenUniqueValues_(previewFonts, 20),
      uniqueFontSizes: flattenUniqueValues_(previewFontSizes, 20),
      uniqueFontWeights: flattenUniqueValues_(previewFontWeights, 10),
      uniqueFontStyles: flattenUniqueValues_(previewFontStyles, 10),
      uniqueHorizontalAlign: flattenUniqueValues_(previewHAlign, 10),
      uniqueVerticalAlign: flattenUniqueValues_(previewVAlign, 10),
      uniqueNumberFormats: flattenUniqueValues_(previewNumberFormats, 30),
      headerStyle: buildHeaderStyleSnapshot_(
        previewBackgrounds,
        previewFonts,
        previewFontSizes,
        previewFontWeights,
        previewFontStyles,
        previewHAlign,
        previewVAlign,
        previewNumberFormats,
        previewDisplay.length ? previewDisplay[0] : []
      ),
      rowHeights: rowHeights.items,
      rowHeightsTruncated: rowHeights.truncated,
      columnWidths: columnWidths.items,
      columnWidthsTruncated: columnWidths.truncated
    },
    mergedCells: {
      count: mergedRanges.length,
      ranges: mergedRanges
    },
    dataValidations: {
      count: validations.items.length,
      scanRows: validationScanRows,
      scanCols: validationScanCols,
      scanTruncated: usedRows > validationScanRows || usedColumns > validationScanCols,
      items: validations.items
    },
    filters: {
      basicFilter: filterInfo,
      filterViews: filterViews
    },
    conditionalFormatting: {
      count: conditionalRules.length,
      rules: conditionalRules
    },
    protections: protections,
    hiddenRows: hiddenRows,
    hiddenColumns: hiddenColumns
  };
}

function flattenUniqueValues_(matrix, limit) {
  const maxItems = Math.max(1, Number(limit || 20));
  const seen = {};
  const out = [];
  const rows = Array.isArray(matrix) ? matrix : [];
  for (let r = 0; r < rows.length; r += 1) {
    const cols = Array.isArray(rows[r]) ? rows[r] : [];
    for (let c = 0; c < cols.length; c += 1) {
      const key = String(cols[c] === undefined || cols[c] === null ? "" : cols[c]).trim();
      if (!key || seen[key]) continue;
      seen[key] = true;
      out.push(key);
      if (out.length >= maxItems) return out;
    }
  }
  return out;
}

function collectFormulaCells_(formulas, rowOffset, colOffset, limit) {
  const out = [];
  const maxItems = Math.max(1, Number(limit || 400));
  const rows = Array.isArray(formulas) ? formulas : [];
  for (let r = 0; r < rows.length; r += 1) {
    const cols = Array.isArray(rows[r]) ? rows[r] : [];
    for (let c = 0; c < cols.length; c += 1) {
      const formula = String(cols[c] || "").trim();
      if (!formula) continue;
      out.push({
        cell: toA1FromRowCol_(Number(rowOffset || 1) + r, Number(colOffset || 1) + c),
        formula: formula
      });
      if (out.length >= maxItems) {
        return { items: out, truncated: true };
      }
    }
  }
  return { items: out, truncated: false };
}

function collectValidations_(validations, rowOffset, colOffset, limit) {
  const out = [];
  const maxItems = Math.max(1, Number(limit || 300));
  const rows = Array.isArray(validations) ? validations : [];
  for (let r = 0; r < rows.length; r += 1) {
    const cols = Array.isArray(rows[r]) ? rows[r] : [];
    for (let c = 0; c < cols.length; c += 1) {
      const rule = cols[c];
      if (!rule) continue;
      let criteriaType = "";
      let criteriaValues = [];
      let allowInvalid = true;
      let helpText = "";
      try { criteriaType = String(rule.getCriteriaType() || ""); } catch (errType) { criteriaType = ""; }
      try { criteriaValues = serializeValidationValues_(rule.getCriteriaValues()); } catch (errValues) { criteriaValues = []; }
      try { allowInvalid = rule.getAllowInvalid() !== false; } catch (errAllow) { allowInvalid = true; }
      try { helpText = String(rule.getHelpText() || ""); } catch (errHelp) { helpText = ""; }
      out.push({
        cell: toA1FromRowCol_(Number(rowOffset || 1) + r, Number(colOffset || 1) + c),
        criteriaType: criteriaType,
        criteriaValues: criteriaValues,
        allowInvalid: allowInvalid,
        helpText: helpText
      });
      if (out.length >= maxItems) {
        return { items: out, truncated: true };
      }
    }
  }
  return { items: out, truncated: false };
}

function serializeValidationValues_(values) {
  const items = Array.isArray(values) ? values : [];
  return items.map((value) => {
    if (value === null || value === undefined) return "";
    if (value instanceof Date) return value.toISOString();
    if (value && typeof value.getA1Notation === "function") {
      try {
        return value.getA1Notation();
      } catch (errRange) {
        return String(value);
      }
    }
    if (typeof value === "object") {
      try {
        return JSON.stringify(value);
      } catch (errObj) {
        return String(value);
      }
    }
    return String(value);
  });
}

function collectBasicFilterInfo_(sheet) {
  const filter = sheet.getFilter();
  if (!filter) {
    return {
      active: false,
      rangeA1: "",
      criteria: []
    };
  }
  const range = filter.getRange();
  const totalCols = Math.max(1, Number(range.getNumColumns() || 1));
  const criteria = [];
  for (let offset = 1; offset <= totalCols; offset += 1) {
    const rule = filter.getColumnFilterCriteria(offset);
    if (!rule) continue;
    const item = {
      columnOffset: offset,
      columnA1: columnToLetter_(range.getColumn() + offset - 1),
      criteriaType: "",
      criteriaValues: [],
      hiddenValues: []
    };
    try { item.criteriaType = String(rule.getCriteriaType() || ""); } catch (errType) {}
    try { item.criteriaValues = serializeValidationValues_(rule.getCriteriaValues()); } catch (errValues) {}
    try { item.hiddenValues = (rule.getHiddenValues() || []).map((x) => String(x)); } catch (errHidden) {}
    criteria.push(item);
  }
  return {
    active: true,
    rangeA1: range.getA1Notation(),
    criteria: criteria
  };
}

function collectConditionalRules_(sheet) {
  const rules = sheet.getConditionalFormatRules() || [];
  const out = [];
  for (let i = 0; i < rules.length; i += 1) {
    const rule = rules[i];
    const ranges = (rule.getRanges() || []).map((r) => r.getA1Notation());
    const row = {
      index: i + 1,
      ranges: ranges,
      type: "UNKNOWN",
      criteriaType: "",
      criteriaValues: [],
      style: {
        background: "",
        fontColor: "",
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false
      }
    };
    const boolCondition = rule.getBooleanCondition();
    const gradientCondition = rule.getGradientCondition();
    if (boolCondition) {
      row.type = "BOOLEAN";
      row.criteriaType = String(boolCondition.getCriteriaType() || "");
      row.criteriaValues = serializeValidationValues_(boolCondition.getCriteriaValues());
    } else if (gradientCondition) {
      row.type = "GRADIENT";
    }
    try { row.style.background = String(rule.getBackground() || ""); } catch (errBg) {}
    try { row.style.fontColor = String(rule.getFontColor() || ""); } catch (errColor) {}
    try { row.style.bold = rule.getBold() === true; } catch (errBold) {}
    try { row.style.italic = rule.getItalic() === true; } catch (errItalic) {}
    try { row.style.underline = rule.getUnderline() === true; } catch (errUnderline) {}
    try { row.style.strikethrough = rule.getStrikethrough() === true; } catch (errStrike) {}
    out.push(row);
  }
  return out;
}

function collectSheetProtections_(sheet) {
  const out = {
    sheet: [],
    ranges: []
  };
  const sheetProtections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET) || [];
  const rangeProtections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE) || [];
  for (let i = 0; i < sheetProtections.length; i += 1) {
    out.sheet.push(serializeProtection_(sheetProtections[i], "SHEET"));
  }
  for (let j = 0; j < rangeProtections.length; j += 1) {
    out.ranges.push(serializeProtection_(rangeProtections[j], "RANGE"));
  }
  return out;
}

function serializeProtection_(protection, type) {
  const row = {
    type: String(type || ""),
    description: "",
    warningOnly: false,
    canDomainEdit: false,
    editors: [],
    rangeA1: "",
    unprotectedRanges: []
  };
  try { row.description = String(protection.getDescription() || ""); } catch (errDesc) {}
  try { row.warningOnly = protection.isWarningOnly() === true; } catch (errWarn) {}
  try { row.canDomainEdit = protection.canDomainEdit() === true; } catch (errDomain) {}
  try {
    row.editors = (protection.getEditors() || [])
      .map((u) => {
        try { return String(u.getEmail() || ""); } catch (errMail) { return ""; }
      })
      .filter((x) => x);
  } catch (errEditors) {
    row.editors = [];
  }
  try {
    const rg = protection.getRange();
    if (rg) row.rangeA1 = rg.getA1Notation();
  } catch (errRange) {}
  try {
    row.unprotectedRanges = (protection.getUnprotectedRanges() || []).map((r) => r.getA1Notation());
  } catch (errUnprotected) {}
  return row;
}

function collectRowHeights_(sheet, maxRows) {
  const count = Math.max(1, Number(maxRows || 1));
  const out = [];
  for (let row = 1; row <= count; row += 1) {
    out.push({
      row: row,
      px: sheet.getRowHeight(row)
    });
  }
  return {
    items: out,
    truncated: sheet.getMaxRows() > count
  };
}

function collectColumnWidths_(sheet, maxColumns) {
  const count = Math.max(1, Number(maxColumns || 1));
  const out = [];
  for (let col = 1; col <= count; col += 1) {
    out.push({
      column: columnToLetter_(col),
      px: sheet.getColumnWidth(col)
    });
  }
  return {
    items: out,
    truncated: sheet.getMaxColumns() > count
  };
}

function collectHiddenRows_(sheet, maxRowsToScan, hardLimit, sampleLimit) {
  const limit = Math.max(1, Math.min(Number(maxRowsToScan || 1), Number(hardLimit || 3000)));
  const sampleMax = Math.max(1, Number(sampleLimit || 200));
  const sample = [];
  let count = 0;
  for (let row = 1; row <= limit; row += 1) {
    let hidden = false;
    try {
      hidden = sheet.isRowHiddenByUser(row) === true;
    } catch (err) {
      hidden = false;
    }
    if (!hidden) continue;
    count += 1;
    if (sample.length < sampleMax) sample.push(row);
  }
  return {
    count: count,
    sampleRows: sample,
    scanRows: limit,
    scanTruncated: Number(maxRowsToScan || 1) > limit
  };
}

function collectHiddenColumns_(sheet, maxColumnsToScan, hardLimit, sampleLimit) {
  const limit = Math.max(1, Math.min(Number(maxColumnsToScan || 1), Number(hardLimit || 120)));
  const sampleMax = Math.max(1, Number(sampleLimit || 120));
  const sample = [];
  let count = 0;
  for (let col = 1; col <= limit; col += 1) {
    let hidden = false;
    try {
      hidden = sheet.isColumnHiddenByUser(col) === true;
    } catch (err) {
      hidden = false;
    }
    if (!hidden) continue;
    count += 1;
    if (sample.length < sampleMax) sample.push(columnToLetter_(col));
  }
  return {
    count: count,
    sampleColumns: sample,
    scanColumns: limit,
    scanTruncated: Number(maxColumnsToScan || 1) > limit
  };
}

function buildHeaderStyleSnapshot_(backgrounds, fonts, fontSizes, fontWeights, fontStyles, hAlign, vAlign, numberFormats, headers) {
  const out = [];
  const firstRowBackgrounds = backgrounds[0] || [];
  const firstRowFonts = fonts[0] || [];
  const firstRowSizes = fontSizes[0] || [];
  const firstRowWeights = fontWeights[0] || [];
  const firstRowStyles = fontStyles[0] || [];
  const firstRowHAlign = hAlign[0] || [];
  const firstRowVAlign = vAlign[0] || [];
  const firstRowNumberFormats = numberFormats[0] || [];
  const firstRowHeaders = headers || [];
  const cols = Math.max(
    firstRowBackgrounds.length,
    firstRowFonts.length,
    firstRowSizes.length,
    firstRowWeights.length,
    firstRowStyles.length,
    firstRowHAlign.length,
    firstRowVAlign.length,
    firstRowNumberFormats.length,
    firstRowHeaders.length
  );
  for (let i = 0; i < cols; i += 1) {
    out.push({
      column: columnToLetter_(i + 1),
      header: String(firstRowHeaders[i] || ""),
      background: String(firstRowBackgrounds[i] || ""),
      fontFamily: String(firstRowFonts[i] || ""),
      fontSize: Number(firstRowSizes[i] || 0),
      fontWeight: String(firstRowWeights[i] || ""),
      fontStyle: String(firstRowStyles[i] || ""),
      horizontalAlign: String(firstRowHAlign[i] || ""),
      verticalAlign: String(firstRowVAlign[i] || ""),
      numberFormat: String(firstRowNumberFormats[i] || "")
    });
  }
  return out;
}

function toA1FromRowCol_(row, col) {
  return `${columnToLetter_(col)}${row}`;
}

function columnToLetter_(columnIndex) {
  let value = Math.max(1, Number(columnIndex || 1));
  let result = "";
  while (value > 0) {
    const modulo = (value - 1) % 26;
    result = String.fromCharCode(65 + modulo) + result;
    value = Math.floor((value - modulo) / 26);
  }
  return result;
}

function getFilterViewsBySheet_(spreadsheetId) {
  const out = {};
  try {
    const id = String(spreadsheetId || "").trim();
    if (!id) return out;
    const token = ScriptApp.getOAuthToken();
    const fields = "sheets(properties(title,sheetId),filterViews(filterViewId,title,range,criteria,sortSpecs))";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(id)}?fields=${encodeURIComponent(fields)}`;
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
      muteHttpExceptions: true
    });
    const code = Number(resp.getResponseCode() || 0);
    if (code < 200 || code >= 300) {
      out.__meta = [{ error: `No se pudieron leer filter views (HTTP ${code}).` }];
      return out;
    }
    const parsed = parseJsonSafely_(String(resp.getContentText() || "{}")) || {};
    const sheets = Array.isArray(parsed.sheets) ? parsed.sheets : [];
    for (let i = 0; i < sheets.length; i += 1) {
      const sh = sheets[i] || {};
      const props = sh.properties || {};
      const title = String(props.title || "");
      if (!title) continue;
      const views = Array.isArray(sh.filterViews) ? sh.filterViews : [];
      out[title] = views.map((view) => ({
        id: Number(view.filterViewId || 0),
        title: String(view.title || ""),
        range: view.range || {},
        criteriaColumns: view.criteria ? Object.keys(view.criteria).length : 0,
        sortSpecsCount: Array.isArray(view.sortSpecs) ? view.sortSpecs.length : 0
      }));
    }
  } catch (err) {
    out.__meta = [{ error: formatErrorForLog_(err) }];
  }
  return out;
}

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "status";
  const params = (e && e.parameter) ? e.parameter : {};
  let payload;

  if (action === "inspect_sheet" || action === "inspect_sheet_full") {
    payload = getSheetInspection();
  } else if (action === "setup_crm_environment") {
    payload = setupCrmEnvironment();
  } else if (action === "setup_crm_with_audit") {
    payload = runSetupCrmWithAudit();
  } else if (action === "crm_dump") {
    payload = crmDumpFromHybrid_(params);
  } else if (action === "crm_dump_all") {
    payload = runInitialCrmDump();
  } else if (action === "crm_cleanup_ai") {
    payload = cleanupCrmUnusedColumnsAndAiReview();
  } else if (action === "crm_smoke_test") {
    payload = crmPipelineSmokeTest();
  } else if (action === "defaults") {
    payload = getDialogDefaults();
  } else if (action === "gemini_status") {
    payload = getGeminiConnectionStatus();
  } else if (action === "hybrid_status") {
    payload = getHybridScraperConfigStatus();
  } else if (action === "hybrid_test") {
    payload = testHybridRemoteSelenium();
  } else if (action === "purge_running_jobs") {
    payload = purgeAllRunningJobs();
  } else if (action === "active_job_status") {
    payload = getActiveRunningJobStatus();
  } else if (action === "start_job_autotest") {
    payload = startAutotestJob_(params);
  } else if (action === "run_job_step") {
    payload = runJobStepByApi_(params);
  } else if (action === "cancel_job") {
    payload = cancelJobByApi_(params);
  } else if (action === "background_tick") {
    payload = runBackgroundJobsTick();
  } else {
    payload = setupConnection();
  }

  return ContentService
    .createTextOutput(JSON.stringify(payload, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

function toBooleanParam_(rawValue, fallbackValue) {
  if (rawValue === undefined || rawValue === null || rawValue === "") {
    return fallbackValue === true;
  }
  const normalized = String(rawValue || "").trim().toLowerCase();
  if (!normalized) return fallbackValue === true;
  if (/(^1$|^true$|^si$|^sí$|^yes$|^on$)/.test(normalized)) return true;
  if (/(^0$|^false$|^no$|^off$)/.test(normalized)) return false;
  return fallbackValue === true;
}

function parsePositiveIntParam_(rawValue, fallbackValue, minValue, maxValue) {
  const fallback = Math.max(minValue || 1, Number(fallbackValue || 1));
  const parsed = Number(rawValue);
  if (!isFinite(parsed) || parsed <= 0) return fallback;
  const floor = Math.floor(parsed);
  const min = Math.max(1, Number(minValue || 1));
  const max = Math.max(min, Number(maxValue || Math.max(floor, min)));
  return Math.min(Math.max(floor, min), max);
}

function resolveApiJobId_(requestedJobId) {
  const raw = String(requestedJobId || "").trim();
  if (raw) return raw;
  const active = getActiveRunningJobStatus();
  if (active && active.ok && active.exists && active.jobId) {
    return String(active.jobId);
  }
  return "";
}

function startAutotestJob_(params) {
  const defaults = getDefaultDialogConfig_();
  const query = String((params && params.query) || defaults.query || "").trim();
  if (!query) {
    return { ok: false, message: "No hay query disponible para iniciar el autotest." };
  }
  const columnsRows = Array.isArray(defaults.columnsRows) ? defaults.columnsRows : [];
  const request = {
    query: query,
    targetCount: parsePositiveIntParam_(
      params && params.targetCount,
      defaults.targetCount || 120,
      1,
      Number(APP_CONFIG.maxTargetCount || 10000)
    ),
    scope: String((params && params.scope) || defaults.scope || "NACIONAL_ES"),
    profile: String((params && params.profile) || defaults.profile || APP_CONFIG.defaultSearchProfile || "CALIDAD_MAXIMA"),
    clearPreviousData: toBooleanParam_(params && params.clearPreviousData, true),
    columnsRows: columnsRows,
    columnsDefinition: String(defaults.columnsDefinition || "").trim() || buildColumnsDefinitionFromRows_(columnsRows),
    geminiApiKey: ""
  };

  const started = startSearchJob(request);
  return {
    ok: true,
    started: started
  };
}

function runJobStepByApi_(params) {
  try {
    const jobId = resolveApiJobId_(params && params.jobId);
    if (!jobId) {
      return { ok: false, message: "No hay job activo para ejecutar paso." };
    }
    const result = runSearchJobStep(jobId);
    return {
      ok: true,
      jobId: jobId,
      result: result
    };
  } catch (err) {
    return {
      ok: false,
      transientError: isTransientStepError_(err),
      message: formatErrorForLog_(err)
    };
  }
}

function cancelJobByApi_(params) {
  const jobId = resolveApiJobId_(params && params.jobId);
  if (!jobId) {
    return { ok: true, cancelled: false, message: "No habia job activo." };
  }
  return cancelSearchJob(jobId);
}

function getBaseDialogConfig_() {
  const columnsRows = [
    { header: "EMPRESA", description: "Nombre de la empresa o entidad (tipo empresa)" },
    { header: "NOMBRE CONTACTO", description: "Nombre de la persona de contacto (tipo contacto)" },
    { header: "CARGO", description: "Cargo o rol del contacto (tipo cargo)" },
    { header: "EMAIL", description: "Correo electronico principal (tipo email)" },
    { header: "TELEFONO", description: "Telefono principal de contacto (tipo telefono)" },
    { header: "WEB", description: "Web oficial del contacto (tipo web)" },
    { header: "LINKEDIN", description: "Perfil de LinkedIn (tipo linkedin)" },
    { header: "CIUDAD", description: "Ciudad o municipio (tipo ciudad)" },
    { header: "PROVINCIA", description: "Provincia o comunidad (tipo provincia)" },
    { header: "PAIS", description: "Pais del contacto (tipo pais)" },
    { header: "FUENTE", description: "Fuente web donde se encontro (tipo fuente)" }
  ];
  return {
    query: "empresas de programacion de eventos",
    targetCount: 200,
    scope: "NACIONAL_ES",
    profile: normalizeSearchProfileKey_(APP_CONFIG.defaultSearchProfile || "TURBO"),
    clearPreviousData: true,
    geminiApiKey: "",
    columnsRows: columnsRows,
    columnsDefinition: buildColumnsDefinitionFromRows_(columnsRows)
  };
}

function getDefaultDialogConfig_() {
  const base = getBaseDialogConfig_();
  const saved = loadLastDialogConfig_();
  if (!saved) return base;

  const query = String(saved.query || "").trim() || base.query;
  const rawTarget = Number(saved.targetCount || base.targetCount || 200);
  const targetCount = Math.max(1, Math.min(APP_CONFIG.maxTargetCount, Math.floor(rawTarget || base.targetCount || 200)));
  const scope = normalizeScope_(saved.scope || base.scope);
  const profile = normalizeSearchProfileKey_(
    saved.profile
    || APP_CONFIG.defaultSearchProfile
    || base.profile
    || "CALIDAD_MAXIMA"
  );
  const clearPreviousData = saved.clearPreviousData !== false;

  const savedRows = Array.isArray(saved.columnsRows)
    ? saved.columnsRows
      .map((row) => ({
        header: String((row && row.header) || "").trim(),
        description: String((row && row.description) || "").trim()
      }))
      .filter((row) => row.header || row.description)
    : [];
  const rowsForUi = savedRows.length ? savedRows : base.columnsRows;

  return {
    query: query,
    targetCount: targetCount,
    scope: scope,
    profile: profile,
    clearPreviousData: clearPreviousData,
    geminiApiKey: "",
    columnsRows: rowsForUi,
    columnsDefinition: buildColumnsDefinitionFromRows_(rowsForUi)
  };
}

function getDialogPrefsStore_() {
  try {
    return PropertiesService.getUserProperties();
  } catch (err) {
    return PropertiesService.getScriptProperties();
  }
}

function loadLastDialogConfig_() {
  try {
    const store = getDialogPrefsStore_();
    const key = String(APP_CONFIG.lastDialogPrefsKey || "BUSCA_CONTACTOS_LAST_DIALOG_V1");
    const raw = String(store.getProperty(key) || "").trim();
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch (err) {
    return null;
  }
}

function saveLastDialogConfig_(cfg, columns) {
  try {
    const store = getDialogPrefsStore_();
    const key = String(APP_CONFIG.lastDialogPrefsKey || "BUSCA_CONTACTOS_LAST_DIALOG_V1");
    const inputColumns = Array.isArray(columns) ? columns : [];
    const normalizedRows = inputColumns.length
      ? inputColumns.map((col) => ({
          header: normalizeHeader_(col.header || ""),
          description: String(col.description || "").trim() || `tipo ${String(col.type || "texto").trim()}`
        }))
      : parseColumnsRows_(cfg.columnsRows || []).map((row) => ({
          header: row.header,
          description: row.description || `tipo ${row.type}`
        }));

    const rawTarget = Number(cfg.targetCount || 200);
    const targetCount = Math.max(1, Math.min(APP_CONFIG.maxTargetCount, Math.floor(rawTarget || 200)));
    const payload = {
      query: String(cfg.query || "").trim(),
      targetCount: targetCount,
      scope: normalizeScope_(cfg.scope || "NACIONAL_ES"),
      profile: normalizeSearchProfileKey_(cfg.profile || APP_CONFIG.defaultSearchProfile || "CALIDAD_MAXIMA"),
      clearPreviousData: cfg.clearPreviousData !== false,
      columnsRows: normalizedRows,
      updatedAt: new Date().toISOString()
    };

    if (!payload.query) return false;
    store.setProperty(key, JSON.stringify(payload));
    return true;
  } catch (err) {
    return false;
  }
}

function getTargetSpreadsheet_() {
  try {
    return SpreadsheetApp.openById(APP_CONFIG.spreadsheetId);
  } catch (err) {
    return SpreadsheetApp.getActiveSpreadsheet();
  }
}

function ensureSingleSheet_(ss) {
  const sheets = ss.getSheets();
  const main = sheets[0];
  const removedEmptySheets = [];
  const preservedSheetsWithData = [];
  const minRows = 5000;
  const minColumns = 40;
  let rowsAdded = 0;
  let columnsAdded = 0;
  let renamedMainSheet = false;

  if (main.getName() !== APP_CONFIG.mainSheetName) {
    main.setName(APP_CONFIG.mainSheetName);
    renamedMainSheet = true;
  }

  for (let i = 1; i < sheets.length; i += 1) {
    const sheet = sheets[i];
    if (isSheetEmpty_(sheet)) {
      removedEmptySheets.push(sheet.getName());
      ss.deleteSheet(sheet);
    } else {
      preservedSheetsWithData.push(sheet.getName());
    }
  }

  if (main.getMaxRows() < minRows) {
    rowsAdded = minRows - main.getMaxRows();
    main.insertRowsAfter(main.getMaxRows(), rowsAdded);
  }

  if (main.getMaxColumns() < minColumns) {
    columnsAdded = minColumns - main.getMaxColumns();
    main.insertColumnsAfter(main.getMaxColumns(), columnsAdded);
  }

  return {
    sheet: main,
    rowsAdded: rowsAdded,
    columnsAdded: columnsAdded,
    renamedMainSheet: renamedMainSheet,
    minRowsTarget: minRows,
    minColumnsTarget: minColumns,
    removedEmptySheets: removedEmptySheets,
    preservedSheetsWithData: preservedSheetsWithData
  };
}

function ensureTraceSheet_(ss, clearData) {
  const headers = [
    "FECHA_HORA",
    "JOB_ID",
    "PASO",
    "BUSQUEDA_OBJETIVO",
    "BUSQUEDA_EJECUTADA",
    "ALCANCE",
    "EMPRESA",
    "EMAIL",
    "TELEFONO",
    "WEB",
    "SOURCE_URL",
    "FUENTE_TEXTO",
    "VERIFICACION",
    "EVIDENCIA_EMAIL",
    "EVIDENCIA_TELEFONO",
    "EMAILS_DETECTADOS",
    "TELEFONOS_DETECTADOS",
    "METODO"
  ];

  let sheet = ss.getSheetByName(APP_CONFIG.traceSheetName);
  const created = !sheet;
  if (!sheet) {
    sheet = ss.insertSheet(APP_CONFIG.traceSheetName);
  }
  moveSheetToLast_(ss, sheet);

  const resetNeeded = created || clearData || !sheetHasExactHeaders_(sheet, headers);
  if (resetNeeded) {
    sheet.clear();
    const headRange = sheet.getRange(1, 1, 1, headers.length);
    headRange.setValues([headers]);
    headRange.setBackground(APP_CONFIG.brandRed);
    headRange.setFontColor(APP_CONFIG.brandWhite);
    headRange.setFontWeight("bold");
    headRange.setHorizontalAlignment("center");
    headRange.setBorder(true, true, true, true, true, true, APP_CONFIG.brandYellow, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
    sheet.setFrozenRows(1);
    if (sheet.getMaxColumns() < headers.length) {
      sheet.insertColumnsAfter(sheet.getMaxColumns(), headers.length - sheet.getMaxColumns());
    }
  }

  return {
    sheet: sheet,
    headers: headers,
    nextRow: Math.max(2, sheet.getLastRow() + 1)
  };
}

function sheetHasExactHeaders_(sheet, expectedHeaders) {
  if (!sheet || !expectedHeaders || !expectedHeaders.length) return false;
  const lastCol = Math.max(expectedHeaders.length, Number(sheet.getLastColumn() || 1));
  const current = sheet.getRange(1, 1, 1, lastCol).getDisplayValues()[0] || [];
  for (let i = 0; i < expectedHeaders.length; i += 1) {
    if (String(current[i] || "").trim() !== String(expectedHeaders[i] || "").trim()) {
      return false;
    }
  }
  return true;
}

function moveSheetToLast_(ss, sheet) {
  if (!ss || !sheet) return;
  const total = ss.getSheets().length;
  if (sheet.getIndex() === total) return;

  const active = ss.getActiveSheet();
  ss.setActiveSheet(sheet);
  ss.moveActiveSheet(total);
  if (active && active.getSheetId && active.getSheetId() !== sheet.getSheetId()) {
    ss.setActiveSheet(active);
  }
}

function isSheetEmpty_(sheet) {
  const data = sheet.getDataRange().getDisplayValues();
  if (!data || !data.length) return true;
  for (let r = 0; r < data.length; r += 1) {
    for (let c = 0; c < data[r].length; c += 1) {
      if (String(data[r][c] || "").trim() !== "") {
        return false;
      }
    }
  }
  return true;
}

function normalizeRequest_(request) {
  const q = String(request.query || "").trim();
  if (!q) {
    throw new Error("Debes indicar que quieres buscar en internet.");
  }

  let target = Number(request.targetCount || 0);
  if (!Number.isFinite(target) || target <= 0) {
    target = 100;
  }
  target = Math.floor(target);
  target = Math.min(target, APP_CONFIG.maxTargetCount);

  const scope = normalizeScope_(request.scope || "NACIONAL_ES");
  const profile = normalizeSearchProfileKey_(request.profile || APP_CONFIG.defaultSearchProfile || "TURBO");
  const columnsRows = Array.isArray(request.columnsRows) ? request.columnsRows : [];
  const columnsDefinitionRaw = String(request.columnsDefinition || "").trim();
  const columnsDefinition = columnsDefinitionRaw || buildColumnsDefinitionFromRows_(columnsRows);

  return {
    query: q,
    targetCount: target,
    scope: scope,
    clearPreviousData: request.clearPreviousData !== false,
    profile: profile,
    columnsRows: columnsRows,
    columnsDefinition: columnsDefinition,
    geminiApiKey: String(request.geminiApiKey || "").trim()
  };
}

function normalizeScope_(rawScope) {
  const key = String(rawScope || "")
    .trim()
    .toUpperCase();

  if (!key) return "NACIONAL_ES";

  const aliases = {
    ES: "NACIONAL_ES",
    ESPANA: "NACIONAL_ES",
    "ESPANA": "NACIONAL_ES",
    NACIONAL: "NACIONAL_ES",
    NACIONAL_ES: "NACIONAL_ES",
    MUNI_MADRID: "MUNI_MADRID",
    MUNICIPAL: "MUNI_MADRID",
    MUNICIPAL_MADRID: "MUNI_MADRID",
    MADRID: "MUNI_MADRID",
    MADRID_CIUDAD: "MUNI_MADRID",
    PROV_COM_MADRID: "PROV_COM_MADRID",
    PROVINCIAL: "PROV_COM_MADRID",
    PROVINCIAL_MADRID: "PROV_COM_MADRID",
    "COMUNIDAD DE MADRID": "PROV_COM_MADRID",
    COMUNIDAD_DE_MADRID: "PROV_COM_MADRID",
    EUROPEO: "EUROPEO",
    EUROPA: "EUROPEO",
    EUROPE: "EUROPEO",
    EU: "EUROPEO",
    INT: "INTERNACIONAL",
    INTERNACIONAL: "INTERNACIONAL",
    GLOBAL: "INTERNACIONAL"
  };

  return aliases[key] || "NACIONAL_ES";
}

function normalizeSearchProfileKey_(rawProfile) {
  const key = String(rawProfile || "").trim().toUpperCase().replace(/\s+/g, "_");
  if (!key) return String(APP_CONFIG.defaultSearchProfile || "TURBO");
  if (key === "CALIDAD" || key === "QUALITY" || key === "MAXIMA") return "CALIDAD_MAXIMA";
  if (key === "TURBO" || key === "RAPIDO" || key === "FAST") return "TURBO";
  if (key === "HIBRIDO" || key === "HYBRID" || key === "AHORRO_HIBRIDO") return "HIBRIDO_AHORRO";
  if (key === "AGRESIVO" || key === "CAUDAL" || key === "ULTRA_CAUDAL" || key === "MAXIMO_CAUDAL") return "AGRESIVO_CAUDAL";
  const profiles = APP_CONFIG.searchProfiles || {};
  return profiles[key] ? key : String(APP_CONFIG.defaultSearchProfile || "TURBO");
}

function getHybridLocalModelProfileForSearchProfile_(profileKey) {
  const key = normalizeSearchProfileKey_(profileKey);
  if (key === "CALIDAD_MAXIMA") return "investigacion";
  if (key === "TURBO") return "equilibrado";
  if (key === "HIBRIDO_AHORRO") return "equilibrado";
  if (key === "AGRESIVO_CAUDAL") return "equilibrado";
  return "pro";
}

function getQualityMinWebChecks_() {
  if (APP_CONFIG.qualityLockEnabled !== true) return 0;
  return Math.max(3, Number(APP_CONFIG.qualityLockMinWebChecksRequired || 4));
}

function getQualityMinEmailChecks_() {
  if (APP_CONFIG.qualityLockEnabled !== true) return 0;
  return Math.max(4, Number(APP_CONFIG.qualityLockMinEmailAuditChecks || APP_CONFIG.strictEmailAuditMinChecks || 6));
}

function getSearchProfileConfig_(profileKey) {
  const key = normalizeSearchProfileKey_(profileKey);
  const profiles = APP_CONFIG.searchProfiles || {};
  const selected = profiles[key] || {};
  const ignoreQualityLock = selected.ignoreQualityLock === true;
  const minWebFloor = ignoreQualityLock ? 2 : 3;
  const minEmailFloor = ignoreQualityLock ? 3 : 4;
  const rawMinWebChecks = Math.max(minWebFloor, Number(selected.minWebChecksRequired || APP_CONFIG.minWebChecksRequired || minWebFloor));
  const rawMinEmailChecks = Math.max(minEmailFloor, Number(selected.strictEmailAuditMinChecks || APP_CONFIG.strictEmailAuditMinChecks || 6));
  const minWebChecksRequired = ignoreQualityLock
    ? rawMinWebChecks
    : Math.max(rawMinWebChecks, getQualityMinWebChecks_());
  const strictEmailAuditMinChecks = ignoreQualityLock
    ? rawMinEmailChecks
    : Math.max(rawMinEmailChecks, getQualityMinEmailChecks_());
  const hybridEnabled = selected.hybridEnabled !== undefined
    ? selected.hybridEnabled === true
    : APP_CONFIG.hybridModeEnabled === true;
  const hybridPreferCodeFirst = selected.hybridPreferCodeFirst !== undefined
    ? selected.hybridPreferCodeFirst === true
    : APP_CONFIG.hybridPreferCodeFirst === true;
  const hybridFallbackMode = normalizeHybridFallbackMode_(selected.hybridFallbackMode || APP_CONFIG.hybridGeminiFallbackMode || "if_empty");
  const hybridFallbackMinContacts = Math.max(0, Number(selected.hybridFallbackMinContacts || APP_CONFIG.hybridFallbackMinContacts || 2));
  return {
    key: key,
    label: String(selected.label || key),
    maxContactsPerStep: Math.max(1, Number(selected.maxContactsPerStep || APP_CONFIG.maxContactsPerStep || 25)),
    maxSourcePagesPerStep: Math.max(1, Number(selected.maxSourcePagesPerStep || APP_CONFIG.maxSourcePagesPerStep || 24)),
    maxExtraPagesPerCandidate: Math.max(0, Number(selected.maxExtraPagesPerCandidate || APP_CONFIG.maxExtraPagesPerCandidate || 2)),
    minWebChecksRequired: minWebChecksRequired,
    strictEmailAuditMinChecks: strictEmailAuditMinChecks,
    strictEmailAuditEnabled: selected.strictEmailAuditEnabled !== false,
    allowRoleMailboxEmails: selected.allowRoleMailboxEmails === true,
    allowLooseNameEmailCoherence: selected.allowLooseNameEmailCoherence === true,
    requireName: selected.requireName,
    requireCompany: selected.requireCompany,
    disallowGenericMailboxEmails: selected.disallowGenericMailboxEmails,
    ignoreQualityLock: ignoreQualityLock,
    hybridEnabled: hybridEnabled,
    hybridPreferCodeFirst: hybridPreferCodeFirst,
    hybridFallbackMode: hybridFallbackMode,
    hybridFallbackMinContacts: hybridFallbackMinContacts
  };
}

function normalizeHybridFallbackMode_(rawMode) {
  const mode = String(rawMode || "").trim().toLowerCase();
  if (!mode) return "if_empty";
  if (mode === "never" || mode === "none" || mode === "off") return "never";
  if (mode === "puntual" || mode === "on_demand" || mode === "solo_puntual" || mode === "smart_puntual") return "puntual";
  if (mode === "always" || mode === "on" || mode === "siempre") return "always";
  if (mode === "if_low" || mode === "low" || mode === "si_bajo") return "if_low";
  return "if_empty";
}

function isGeminiFallbackEnabled_(profileConfig, hybridConfig) {
  if (APP_CONFIG.forceDisableGeminiEverywhere === true) return false;
  const profileCfg = (profileConfig && typeof profileConfig === "object") ? profileConfig : {};
  const hybridCfg = (hybridConfig && typeof hybridConfig === "object") ? hybridConfig : {};
  const mode = normalizeHybridFallbackMode_(
    profileCfg.hybridFallbackMode
    || hybridCfg.fallbackMode
    || APP_CONFIG.hybridGeminiFallbackMode
    || "if_empty"
  );
  if (mode === "puntual" && APP_CONFIG.geminiPunctualAssistEnabled !== true) return false;
  return mode !== "never";
}

function getGeminiFallbackModeForState_(state) {
  const st = state || {};
  const hybridCfg = (st.hybrid && typeof st.hybrid === "object") ? st.hybrid : {};
  return normalizeHybridFallbackMode_(
    hybridCfg.fallbackMode
    || (st.profileConfig && st.profileConfig.hybridFallbackMode)
    || APP_CONFIG.hybridGeminiFallbackMode
    || "if_empty"
  );
}

function parseBooleanConfig_(rawValue) {
  const value = String(rawValue || "").trim().toLowerCase();
  if (!value) return null;
  if (["1", "true", "yes", "si", "on"].indexOf(value) >= 0) return true;
  if (["0", "false", "no", "off"].indexOf(value) >= 0) return false;
  return null;
}

function normalizeHybridEndpointUrl_(rawEndpoint) {
  let value = String(rawEndpoint || "").trim();
  if (!value) return "";
  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`;
  }
  value = value.replace(/\/+$/, "");
  if (/\/api\/search$/i.test(value)) return value;
  if (/^https?:\/\/[^\/]+$/i.test(value)) return `${value}/api/search`;
  return value;
}

function buildHybridHealthUrl_(searchEndpoint) {
  const endpoint = String(searchEndpoint || "").trim();
  if (!endpoint) return "";
  if (/\/api\/search$/i.test(endpoint)) {
    return endpoint.replace(/\/api\/search$/i, "/health");
  }
  return `${endpoint.replace(/\/+$/, "")}/health`;
}

function getStoredHybridScraperConfig_() {
  try {
    const props = PropertiesService.getScriptProperties();
    const endpointFromProps = String(
      props.getProperty(String(APP_CONFIG.hybridEndpointPropertyKey || "HYBRID_SCRAPER_ENDPOINT"))
      || ""
    ).trim();
    // En modo local forzamos el endpoint del build actual para evitar URLs antiguas guardadas en propiedades.
    const endpointRaw = String(
      APP_CONFIG.localOnlyMode === true
        ? (APP_CONFIG.hybridEndpointDefault || endpointFromProps || "")
        : (endpointFromProps || APP_CONFIG.hybridEndpointDefault || "")
    ).trim();
    const endpoint = normalizeHybridEndpointUrl_(endpointRaw);
    const token = String(
      props.getProperty(String(APP_CONFIG.hybridTokenPropertyKey || "HYBRID_SCRAPER_TOKEN"))
      || ""
    ).trim();
    const enabledRaw = String(
      props.getProperty(String(APP_CONFIG.hybridModePropertyKey || "HYBRID_MODE_ENABLED"))
      || ""
    ).trim();
    return {
      endpoint: endpoint,
      token: token,
      enabledOverride: parseBooleanConfig_(enabledRaw)
    };
  } catch (err) {
    return {
      endpoint: String(APP_CONFIG.hybridEndpointDefault || "").trim(),
      token: "",
      enabledOverride: null
    };
  }
}

function resolveHybridRuntimeConfig_(profileConfig) {
  const profileCfg = (profileConfig && typeof profileConfig === "object") ? profileConfig : {};
  const stored = getStoredHybridScraperConfig_();
  const baseEnabled = profileCfg.hybridEnabled === true || APP_CONFIG.hybridModeEnabled === true;
  const enabledByOverride = stored.enabledOverride === null ? baseEnabled : stored.enabledOverride === true;
  const endpoint = String(stored.endpoint || "").trim();
  const endpointReady = /^https?:\/\//i.test(endpoint);
  const enabled = enabledByOverride && endpointReady;
  return {
    enabled: enabled,
    enabledByOverride: enabledByOverride,
    endpoint: endpoint,
    endpointReady: endpointReady,
    hasToken: !!String(stored.token || "").trim(),
    token: String(stored.token || "").trim(),
    preferCodeFirst: profileCfg.hybridPreferCodeFirst !== false,
    fallbackMode: normalizeHybridFallbackMode_(profileCfg.hybridFallbackMode || APP_CONFIG.hybridGeminiFallbackMode || "if_empty"),
    fallbackMinContacts: Math.max(0, Number(profileCfg.hybridFallbackMinContacts || APP_CONFIG.hybridFallbackMinContacts || 2))
  };
}

function setHybridScraperConfig(config) {
  const cfg = config || {};
  const props = PropertiesService.getScriptProperties();
  const endpointKey = String(APP_CONFIG.hybridEndpointPropertyKey || "HYBRID_SCRAPER_ENDPOINT");
  const tokenKey = String(APP_CONFIG.hybridTokenPropertyKey || "HYBRID_SCRAPER_TOKEN");
  const modeKey = String(APP_CONFIG.hybridModePropertyKey || "HYBRID_MODE_ENABLED");

  if (Object.prototype.hasOwnProperty.call(cfg, "endpoint")) {
    const endpoint = normalizeHybridEndpointUrl_(cfg.endpoint);
    if (endpoint) props.setProperty(endpointKey, endpoint);
    else props.deleteProperty(endpointKey);
  }
  if (Object.prototype.hasOwnProperty.call(cfg, "token")) {
    const token = String(cfg.token || "").trim();
    if (token) props.setProperty(tokenKey, token);
    else props.deleteProperty(tokenKey);
  }
  if (Object.prototype.hasOwnProperty.call(cfg, "enabled")) {
    const bool = cfg.enabled === true;
    props.setProperty(modeKey, bool ? "true" : "false");
  }
  return getHybridScraperConfigStatus();
}

function getHybridScraperConfigStatus() {
  const stored = getStoredHybridScraperConfig_();
  const endpoint = String(stored.endpoint || "").trim();
  const token = String(stored.token || "").trim();
  const healthUrl = buildHybridHealthUrl_(endpoint);
  return {
    ok: true,
    endpoint: endpoint,
    endpointReady: /^https?:\/\//i.test(endpoint),
    healthUrl: healthUrl,
    tokenConfigured: !!token,
    tokenPreview: token ? `${token.slice(0, 4)}***${token.slice(-3)}` : "",
    enabledOverride: stored.enabledOverride
  };
}

function testHybridRemoteSelenium() {
  const stored = getStoredHybridScraperConfig_();
  const endpoint = String(stored.endpoint || "").trim();
  if (!endpoint || !/^https?:\/\//i.test(endpoint)) {
    return {
      ok: false,
      connected: false,
      message: "Endpoint hibrido no configurado."
    };
  }
  const healthUrl = buildHybridHealthUrl_(endpoint);
  const headers = {};
  if (String(stored.token || "").trim()) {
    headers.Authorization = `Bearer ${String(stored.token || "").trim()}`;
  }
  const startMs = Date.now();
  const resp = UrlFetchApp.fetch(healthUrl, {
    method: "get",
    muteHttpExceptions: true,
    headers: headers,
    followRedirects: true,
    validateHttpsCertificates: true
  });
  const elapsedMs = Date.now() - startMs;
  const code = Number(resp.getResponseCode() || 0);
  const rawBody = String(resp.getContentText() || "").trim();
  const body = parseJsonSafely_(rawBody) || {};
  return {
    ok: code >= 200 && code < 300,
    connected: code >= 200 && code < 300,
    endpoint: endpoint,
    healthUrl: healthUrl,
    statusCode: code,
    elapsedMs: elapsedMs,
    response: body || {}
  };
}

function isSpainScope_(scope) {
  return ["MUNI_MADRID", "PROV_COM_MADRID", "NACIONAL_ES"].indexOf(scope) >= 0;
}

function getScopeLabel_(scope) {
  switch (scope) {
    case "MUNI_MADRID":
      return "Municipal (Madrid ciudad)";
    case "PROV_COM_MADRID":
      return "Provincial (Comunidad de Madrid)";
    case "NACIONAL_ES":
      return "Nacional (Espana)";
    case "EUROPEO":
      return "Europeo";
    case "INTERNACIONAL":
      return "Internacional";
    default:
      return "Nacional (Espana)";
  }
}

function getStrictRequiredColumnsCount_(state) {
  const s = state || {};
  let count = 0;
  if (s.strictRequireEmailOnWeb === true) count += 1;
  if (s.strictRequirePhoneOnWeb === true) count += 1;
  if (s.strictRequireContactNameOnWeb === true) count += 1;
  if (s.strictRequireCompanyOnWeb === true) count += 1;
  return count;
}

function computeRequiredChecksByStrictColumns_(baseMinChecks, strictColumnsCount, checksTotal) {
  const base = Math.max(3, Number(baseMinChecks || APP_CONFIG.minWebChecksRequired || 3));
  const strictCount = Math.max(0, Number(strictColumnsCount || 0));
  // Regla mas equilibrada:
  // - mantiene exigencia por columnas estrictas
  // - evita sobrepenalizar con +2 fijo que en la practica llevaba a min_checks=5
  //   incluso en perfiles pensados para mayor caudal.
  const required = Math.max(base, 1 + strictCount);
  const total = Math.max(0, Number(checksTotal || 0));
  if (total > 0) {
    return Math.min(required, total);
  }
  return required;
}

function parseColumnsDefinition_(rawDefinition, rowsFromUi) {
  const parsedRows = parseColumnsRows_(rowsFromUi);
  if (parsedRows.length) {
    return parsedRows;
  }

  const lines = String(rawDefinition || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== "");

  if (!lines.length) {
    return parseColumnsRows_(getDefaultDialogConfig_().columnsRows);
  }

  const columns = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const idx = line.indexOf("=");
    let header = line;
    let description = "";
    if (idx >= 0) {
      header = line.slice(0, idx).trim();
      description = line.slice(idx + 1).trim();
    }
    const normalizedHeader = normalizeHeader_(header);
    if (!normalizedHeader) continue;
    const typeByHeader = normalizeColumnType_(normalizedHeader);
    const typeByDescription = normalizeColumnType_(description);
    const finalType = typeByHeader !== "texto"
      ? typeByHeader
      : (typeByDescription !== "texto" ? typeByDescription : "texto");
    columns.push({
      header: normalizedHeader,
      type: finalType,
      description: description
    });
  }

  return columns.length ? columns : parseColumnsRows_(getDefaultDialogConfig_().columnsRows);
}

function parseColumnsRows_(rowsFromUi) {
  const input = Array.isArray(rowsFromUi) ? rowsFromUi : [];
  const out = [];

  for (let i = 0; i < input.length; i += 1) {
    const row = input[i] || {};
    const headerRaw = String(row.header || "").trim();
    const description = String(row.description || "").trim();
    if (!headerRaw && !description) continue;

    const header = normalizeHeader_(headerRaw || description);
    if (!header) continue;

    const typeByHeader = normalizeColumnType_(header);
    const typeByDescription = normalizeColumnType_(description);
    const finalType = typeByHeader !== "texto"
      ? typeByHeader
      : (typeByDescription !== "texto" ? typeByDescription : "texto");
    out.push({
      header: header,
      type: finalType,
      description: description
    });
  }

  return out;
}

function buildColumnsDefinitionFromRows_(rowsFromUi) {
  const parsed = parseColumnsRows_(rowsFromUi);
  if (!parsed.length) return "";
  return parsed.map((c) => `${c.header}=${c.type}`).join("\n");
}

function normalizeHeader_(rawHeader) {
  return String(rawHeader || "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function normalizeColumnType_(rawType) {
  const t = String(rawType || "").trim().toLowerCase();
  const compact = t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
  const merged = `${t} ${compact}`;
  const mergedFlat = merged.replace(/[^\w\s]/g, " ");
  if (!t) return "texto";
  if (/email|correo|mail/.test(merged)) return "email";
  if (/telefono|movil|phone|tel/.test(merged)) return "telefono";
  if ((/funcion|que hace exactamente|responsabilidades?|day to day/.test(mergedFlat)) && /cargo|puesto|role|position/.test(mergedFlat)) return "funcion_cargo";
  if ((/descrip|resumen|actividad principal/.test(mergedFlat)) && /medio|empresa|entidad|organizacion|compania/.test(mergedFlat)) return "descripcion_medio_empresa";
  if (/funcion del cargo|funcion cargo|responsabilidades del cargo|day to day|que hace exactamente/.test(merged)) return "funcion_cargo";
  if (/descripcion del medio|descripcion medio|descripcion de la empresa|actividad principal de la entidad|descripcion\/resumen/.test(merged)) return "descripcion_medio_empresa";
  if (/dominio web generico|dominio web gen[eé]rico|dominio web|dominio raiz|domain root|root domain|(^|\s)dominio($|\s)|(^|\s)domain($|\s)/.test(merged)) return "dominio_web_generico";
  if (/nombre de contacto|persona de contacto|nombre completo|contacto principal|contact person|responsable|influencer|creador/.test(merged)) return "contacto";
  if (/cargo|puesto|role|position/.test(merged)) return "cargo";
  if (/medio o empresa|empresa|organizacion|entidad|compania/.test(merged)) return "empresa";
  if (/linkedin/.test(merged)) return "linkedin";
  if (/instagram/.test(merged)) return "instagram";
  if (/youtube/.test(merged)) return "youtube";
  if (/tiktok/.test(merged)) return "tiktok";
  if (/(^|\s)x($|\s)|twitter/.test(merged)) return "x";
  if (/tipo de contenido|contenido|nicho|genre/.test(merged)) return "contenido";
  if (/(^|\s)web($|\s)|url|sitio/.test(merged)) return "web";
  if (/pais|country/.test(merged)) return "pais";
  if (/busqueda|query|keyword/.test(merged)) return "busqueda";
  if (/fuente|source/.test(merged)) return "fuente";
  if (/dominio|domain/.test(merged)) return "dominio_web_generico";
  if (/ciudad|city|municipio/.test(merged)) return "ciudad";
  if (/provincia|region|state|comunidad/.test(merged)) return "provincia";
  if (/estado|status/.test(merged)) return "estado";
  if (/notas|observaciones|notes/.test(merged)) return "notas";
  return "texto";
}

function ensureRequiredColumns_(columns) {
  const input = Array.isArray(columns) ? columns : [];
  const out = [];
  const autoAdded = [];
  const autoRemoved = [];
  const seenHeaders = {};
  const seenTypes = {};

  for (let i = 0; i < input.length; i += 1) {
    const rawCol = input[i] || {};
    const rawHeader = normalizeHeader_(rawCol.header || "");
    const rawDescription = String(rawCol.description || "").trim();
    if (!rawHeader && !rawDescription) continue;

    let type = normalizeColumnType_(String(rawCol.type || "").trim());
    if (type === "texto") {
      type = normalizeColumnType_(`${rawHeader} ${rawDescription}`.trim());
    }
    if (type === "texto") {
      type = inferSupportedColumnType_(rawHeader, rawDescription);
    }
    const header = rawHeader || defaultHeaderForColumnType_(type);
    if (!header) continue;
    if (!isSupportedColumnType_(type)) {
      autoRemoved.push(`${header} (tipo no soportado)`);
      continue;
    }
    if (seenHeaders[header]) {
      autoRemoved.push(`${header} (cabecera duplicada)`);
      continue;
    }
    seenHeaders[header] = true;
    seenTypes[type] = true;
    out.push({
      header: header,
      type: type,
      description: rawDescription || `tipo ${type}`
    });
  }

  if (!out.length) {
    const fallback = getSafeFallbackColumns_();
    for (let i = 0; i < fallback.length; i += 1) {
      const col = fallback[i];
      if (seenTypes[col.type]) continue;
      out.push(col);
      seenTypes[col.type] = true;
      seenHeaders[col.header] = true;
      autoAdded.push(col.header);
    }
  }

  return { columns: out, autoAdded, autoRemoved };
}

function isSupportedColumnType_(type) {
  switch (String(type || "").trim()) {
    case "texto":
    case "empresa":
    case "contacto":
    case "descripcion_medio_empresa":
    case "cargo":
    case "funcion_cargo":
    case "email":
    case "telefono":
    case "web":
    case "linkedin":
    case "instagram":
    case "youtube":
    case "tiktok":
    case "x":
    case "contenido":
    case "pais":
    case "busqueda":
    case "fuente":
    case "dominio_web_generico":
    case "ciudad":
    case "provincia":
    case "estado":
    case "notas":
      return true;
    default:
      return false;
  }
}

function defaultHeaderForColumnType_(type) {
  const key = String(type || "").trim();
  const map = {
    texto: "COLUMNA",
    empresa: "EMPRESA",
    contacto: "NOMBRE CONTACTO",
    descripcion_medio_empresa: "DESCRIPCION DEL MEDIO / EMPRESA",
    cargo: "CARGO",
    funcion_cargo: "FUNCION DEL CARGO",
    email: "EMAIL",
    telefono: "TELEFONO",
    web: "WEB",
    linkedin: "LINKEDIN",
    instagram: "INSTAGRAM",
    youtube: "YOUTUBE",
    tiktok: "TIKTOK",
    x: "X",
    contenido: "TIPO DE CONTENIDO",
    pais: "PAIS",
    busqueda: "BUSQUEDA",
    fuente: "FUENTE",
    dominio_web_generico: "DOMINIO WEB GENERICO",
    ciudad: "CIUDAD",
    provincia: "PROVINCIA",
    estado: "ESTADO",
    notas: "NOTAS"
  };
  return map[key] || "";
}

function inferSupportedColumnType_(header, description) {
  const merged = normalizeTextForMatch_(`${header || ""} ${description || ""}`);
  if (!merged) return "texto";
  if ((/funcion|que hace|responsabilidades?|day to day/.test(merged)) && /cargo|puesto|role|position/.test(merged)) return "funcion_cargo";
  if ((/descrip|resumen|actividad\s+principal/.test(merged)) && /medio|empresa|entidad|organizacion|compania/.test(merged)) return "descripcion_medio_empresa";
  if (/funcion\s+del\s+cargo|responsabilidades?\s+del\s+cargo/.test(merged)) return "funcion_cargo";
  if (/descripcion\s+del\s+medio|descripcion\s+de\s+la\s+empresa|actividad\s+principal/.test(merged)) return "descripcion_medio_empresa";
  if (/nombre\s+completo|persona\s+de\s+contacto|nombre\s+de\s+contacto|responsable/.test(merged)) return "contacto";
  if (/dominio\s+web|dominio\s+raiz|root\s+domain/.test(merged)) return "dominio_web_generico";
  if (/telefono|movil|phone/.test(merged)) return "telefono";
  if (/email|correo/.test(merged)) return "email";
  if (/linkedin/.test(merged)) return "linkedin";
  if (/instagram/.test(merged)) return "instagram";
  if (/youtube/.test(merged)) return "youtube";
  if (/tiktok/.test(merged)) return "tiktok";
  if (/(^|\s)x($|\s)|twitter/.test(merged)) return "x";
  if (/empresa|medio|organizacion|entidad|compania/.test(merged)) return "empresa";
  if (/cargo|puesto|role|position/.test(merged)) return "cargo";
  if (/web|sitio|url/.test(merged)) return "web";
  if (/ciudad|municipio/.test(merged)) return "ciudad";
  if (/provincia|comunidad|region/.test(merged)) return "provincia";
  if (/pais|country/.test(merged)) return "pais";
  if (/fuente|source/.test(merged)) return "fuente";
  if (/estado|status/.test(merged)) return "estado";
  if (/notas|observaciones|notes/.test(merged)) return "notas";
  return "texto";
}

function getSafeFallbackColumns_() {
  return [
    { header: "EMPRESA", type: "empresa", description: "tipo empresa" },
    { header: "NOMBRE CONTACTO", type: "contacto", description: "tipo contacto" },
    { header: "CARGO", type: "cargo", description: "tipo cargo" },
    { header: "EMAIL", type: "email", description: "tipo email" },
    { header: "WEB", type: "web", description: "tipo web" },
    { header: "FUENTE", type: "fuente", description: "tipo fuente" }
  ];
}

function writeHeaders_(sheet, headers) {
  if (!headers.length) return;
  ensureVisibleOutputColumns_(sheet, headers.length);
  ensureVisibleRows_(sheet, 1, Number(sheet.getMaxRows() || 1));
  const maxCols = Math.max(headers.length, Number(sheet.getMaxColumns() || headers.length));
  const fullHeaderRange = sheet.getRange(1, 1, 1, maxCols);
  fullHeaderRange.clearContent();
  fullHeaderRange.clearFormat();
  fullHeaderRange.setBorder(false, false, false, false, false, false);

  const range = sheet.getRange(1, 1, 1, headers.length);
  range.setValues([headers]);
  range.setBackground(APP_CONFIG.brandRed);
  range.setFontColor(APP_CONFIG.brandWhite);
  range.setFontWeight("bold");
  range.setHorizontalAlignment("center");
  range.setBorder(true, true, true, true, true, true, APP_CONFIG.brandYellow, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  sheet.setFrozenRows(1);
}

function ensureVisibleOutputColumns_(sheet, outputColumnsCount) {
  if (!sheet) return;
  const total = Math.max(1, Math.min(Number(sheet.getMaxColumns() || 1), Number(outputColumnsCount || 1)));
  try {
    sheet.showColumns(1, total);
  } catch (err) {
    // Si no se pueden mostrar columnas por estado de hoja, continuamos.
  }
}

function ensureVisibleRows_(sheet, startRow, rowCount) {
  if (!sheet) return;
  const maxRows = Number(sheet.getMaxRows() || 0);
  if (maxRows <= 0) return;
  const from = Math.max(1, Number(startRow || 1));
  const count = Math.max(1, Number(rowCount || maxRows));
  const safeCount = Math.max(1, Math.min(count, maxRows - from + 1));
  try {
    sheet.showRows(from, safeCount);
  } catch (err) {
    // Si no se pueden mostrar filas por estado de hoja, continuamos.
  }
}

function styleExistingHeaderRow_(sheet) {
  if (!sheet) return;

  const lastCol = Math.max(1, Number(sheet.getLastColumn() || 1));
  const headerValues = sheet.getRange(1, 1, 1, lastCol).getDisplayValues()[0] || [];
  let headerCount = 0;

  for (let i = headerValues.length - 1; i >= 0; i -= 1) {
    if (String(headerValues[i] || "").trim() !== "") {
      headerCount = i + 1;
      break;
    }
  }

  if (headerCount <= 0) {
    sheet.setFrozenRows(1);
    return;
  }

  const headerRange = sheet.getRange(1, 1, 1, headerCount);
  headerRange.setBackground(APP_CONFIG.brandRed);
  headerRange.setFontColor(APP_CONFIG.brandWhite);
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");
  headerRange.setBorder(true, true, true, true, true, true, APP_CONFIG.brandYellow, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  sheet.setFrozenRows(1);
}

function clearDataRows_(sheet) {
  const maxRows = sheet.getMaxRows();
  const maxCols = sheet.getMaxColumns();
  if (maxRows > 1 && maxCols > 0) {
    sheet.getRange(2, 1, maxRows - 1, maxCols).clearContent();
  }
}

function buildSearchOptions_(query, columns, profileConfig) {
  const cols = Array.isArray(columns) ? columns : [];
  const profileCfg = (profileConfig && typeof profileConfig === "object") ? profileConfig : {};
  const rawQuery = String(query || "");
  const normalizedQuery = normalizeTextForMatch_(rawQuery);
  const queryDemandsPersonName = /(nombre\s+completo|nombre(?:s)?\s+y\s+apellidos|nombre\s+de\s+persona|persona(?:s)?\s+fisica(?:s)?|persona(?:s)?\s+f[ií]sica(?:s)?|contacto\s+personal|email\s+personal)/i.test(normalizedQuery);
  const requireEmail = cols.some((c) => c && c.type === "email");
  const allowPhoneCollection = cols.some((c) => c && c.type === "telefono") && !queryForbidsPhone_(rawQuery);
  const requireNameByInput = cols.some((c) => c && c.type === "contacto") || queryDemandsPersonName;
  const requireCompanyByInput = cols.some((c) => c && c.type === "empresa");
  const disallowGenericByInput = APP_CONFIG.disallowGenericMailboxEmails === true || queryDemandsDirectEmail_(rawQuery);
  const requireName = profileCfg.requireName === undefined ? requireNameByInput : profileCfg.requireName === true;
  const requireCompany = profileCfg.requireCompany === undefined ? requireCompanyByInput : profileCfg.requireCompany === true;
  const disallowGenericMailboxEmails = profileCfg.disallowGenericMailboxEmails === undefined
    ? disallowGenericByInput
    : profileCfg.disallowGenericMailboxEmails === true;
  return {
    requireEmail: requireEmail,
    allowPhoneCollection: allowPhoneCollection,
    requireName: requireName,
    requireCompany: requireCompany,
    disallowGenericMailboxEmails: disallowGenericMailboxEmails
  };
}

function queryForbidsPhone_(text) {
  const raw = String(text || "").trim().toLowerCase();
  if (!raw) return false;
  return /(no extraer|omitir|sin)\s+(numeros?\s+de\s+)?telefon(o|os|ia|ias)|sin telefono|no telefono/.test(raw);
}

function queryDemandsDirectEmail_(text) {
  const raw = String(text || "").trim().toLowerCase();
  if (!raw) return false;
  return /(email|correo).*(directo|personal)|descartar.*(info@|contacto@|no-reply)|omitir.*(info@|contacto@|no-reply)/.test(raw);
}

function buildQueryPlan_(query, scope, searchOptions) {
  const base = compactQueryForPlan_(query);
  const opts = searchOptions || {};
  const includePhone = opts.allowPhoneCollection === true;
  const requireEmail = opts.requireEmail === true;
  const requireName = opts.requireName === true;
  const disallowGeneric = opts.disallowGenericMailboxEmails === true;
  const scopeHint = String(normalizeTextForMatch_(getScopeLabel_(scope)) || "espana")
    .replace(/\s+/g, " ")
    .trim();
  const focusTerms = [];
  if (requireName) focusTerms.push("nombre de persona");
  if (requireEmail) focusTerms.push("email profesional directo");
  if (includePhone) focusTerms.push("telefono");
  if (disallowGeneric) focusTerms.push("sin info@ ni contacto@");
  const focus = focusTerms.join(" ").trim();

  const variants = [
    `${base} ${focus}`.trim(),
    `${base} contacto profesional`,
    `${base} correo electronico profesional directo`,
    `${base} formulario de contacto`,
    `${base} empresa`,
    `${base} linkedin contacto email`,
    `${base} site:linkedin.com/in contacto`,
    `${base} instagram contacto email`,
    `${base} youtube canal contacto email`,
    `${base} tiktok contacto email`,
    `${base} x twitter contacto email`,
    `periodistas musicales ${scopeHint} email directo`,
    `criticos musicales ${scopeHint} contacto profesional`,
    `site:linkedin.com/in musica ${scopeHint} email`,
    `site:linkedin.com/company medio musical ${scopeHint} contacto`,
    `site:facebook.com promotora conciertos ${scopeHint} contacto`,
    `site:instagram.com booking management ${scopeHint} email`
  ];
  if (includePhone) {
    variants.push(`${base} telefono`);
    variants.push(`${base} linkedin contacto email telefono`);
  }

  if (scope === "MUNI_MADRID") {
    variants.push(`${base} Madrid ciudad contacto email`);
    variants.push(`${base} Ayuntamiento de Madrid cultura contacto`);
    variants.push(`${base} concejalia festejos Madrid contacto`);
    variants.push(`${base} distrito Madrid contacto`);
    variants.push(`${base} site:.es Madrid contacto`);
    variants.push(`${base} Madrid linkedin influencer contacto`);
    if (includePhone) {
      variants.push(`${base} Madrid ciudad contacto email telefono`);
    }
  } else if (scope === "PROV_COM_MADRID") {
    variants.push(`${base} Comunidad de Madrid contacto email`);
    variants.push(`${base} municipios Comunidad de Madrid contacto`);
    variants.push(`${base} consejeria cultura Comunidad de Madrid contacto`);
    variants.push(`${base} site:.es "Comunidad de Madrid" contacto`);
    variants.push(`${base} Comunidad de Madrid linkedin contacto`);
    if (includePhone) {
      variants.push(`${base} Comunidad de Madrid contacto email telefono`);
    }
  } else if (scope === "NACIONAL_ES") {
    variants.push(`${base} Espana contacto email`);
    variants.push(`${base} site:.es contacto`);
    variants.push(`${base} ayuntamiento cultura contacto`);
    variants.push(`${base} concejalia festejos contacto`);
    variants.push(`${base} Espana linkedin contacto email`);
    if (includePhone) {
      variants.push(`${base} Espana contacto email telefono`);
    }
  } else if (scope === "EUROPEO") {
    variants.push(`${base} Europa contacto email`);
    variants.push(`${base} European contacts`);
    variants.push(`${base} site:.eu contact email`);
    variants.push(`${base} union europea cultura contacto`);
    variants.push(`${base} Europe linkedin contact email`);
    if (includePhone) {
      variants.push(`${base} Europa contacto email telefono`);
      variants.push(`${base} site:.eu contact email phone`);
    }
  } else {
    variants.push(`${base} contact email`);
    variants.push(`${base} international contacts`);
    variants.push(`${base} global contact directory`);
    variants.push(`${base} international linkedin contact`);
    if (includePhone) {
      variants.push(`${base} contact email phone`);
    }
  }

  const seen = {};
  const out = [];
  for (let i = 0; i < variants.length; i += 1) {
    const v = variants[i].trim();
    if (!v) continue;
    if (!seen[v]) {
      seen[v] = true;
      out.push(v);
    }
  }
  return out;
}

function getMaxStaleRoundsForTarget_(targetCount, profileConfig) {
  const profileCfg = (profileConfig && typeof profileConfig === "object") ? profileConfig : {};
  const base = Math.max(3, Number(profileCfg.maxStaleRounds || APP_CONFIG.maxStaleRounds || 8));
  const useLargeTargetFloor = profileCfg.forceLargeTargetStaleFloor !== false;
  if (!useLargeTargetFloor) return base;
  const target = Math.max(1, Number(targetCount || 0));
  if (target >= 3000) return Math.max(base, 35);
  if (target >= 1000) return Math.max(base, 24);
  if (target >= 500) return Math.max(base, 18);
  if (target >= 200) return Math.max(base, 12);
  return base;
}

function getStateMaxStaleRounds_(state) {
  const st = state || {};
  const current = Number(st.maxStaleRounds || 0);
  if (current > 0) return current;
  return getMaxStaleRoundsForTarget_(Number(st.targetCount || 0), st.profileConfig);
}

function getSuppressedDomainsForStale_(state) {
  const st = state || {};
  if (APP_CONFIG.antiLoopDomainSuppressionEnabled !== true) return [];

  const staleRoundsNow = Math.max(0, Number(st.staleRounds || 0));
  const staleThreshold = Math.max(1, Number(APP_CONFIG.antiLoopDomainSuppressionAfterStaleRounds || 6));
  if (staleRoundsNow < staleThreshold) return [];

  const minHits = Math.max(1, Number(APP_CONFIG.antiLoopDomainSuppressionMinHits || 2));
  const maxDomains = Math.max(0, Number(APP_CONFIG.antiLoopDomainSuppressionMaxDomains || 8));
  if (maxDomains <= 0) return [];

  const seenEmails = Array.isArray(st.seenEmails) ? st.seenEmails : [];
  const domainCount = {};

  for (let i = 0; i < seenEmails.length; i += 1) {
    const email = String(seenEmails[i] || "").trim().toLowerCase();
    if (!isValidEmail_(email)) continue;
    const domain = String(email.split("@")[1] || "").trim().toLowerCase();
    const root = getRootDomain_(domain) || domain;
    if (!root) continue;
    if (isPublicMailboxDomain_(root)) continue;
    domainCount[root] = Number(domainCount[root] || 0) + 1;
  }

  return Object.keys(domainCount)
    .filter((domain) => Number(domainCount[domain] || 0) >= minHits)
    .sort((a, b) => Number(domainCount[b] || 0) - Number(domainCount[a] || 0))
    .slice(0, maxDomains);
}

function buildRuntimeQueryVariant_(queryVariant, state, stepLogs) {
  const st = state || {};
  const logs = Array.isArray(stepLogs) ? stepLogs : [];
  const base = String(queryVariant || "").replace(/\s+/g, " ").trim();
  if (!base) return "";

  const suppressedDomains = getSuppressedDomainsForStale_(st);
  if (!suppressedDomains.length) return base;

  const maxSites = Math.max(1, Number(APP_CONFIG.antiLoopDomainSuppressionMaxSitesPerQuery || 4));
  const selectedDomains = suppressedDomains.slice(0, maxSites);
  const lowerBase = ` ${base.toLowerCase()} `;
  const extra = [];

  for (let i = 0; i < selectedDomains.length; i += 1) {
    const domain = String(selectedDomains[i] || "").trim().toLowerCase();
    if (!domain) continue;
    const token = `-site:${domain}`;
    if (lowerBase.indexOf(` ${token} `) >= 0) continue;
    extra.push(token);
  }

  if (!extra.length) return base;

  const signature = selectedDomains.join("|");
  if (st.lastSuppressionSignature !== signature) {
    st.lastSuppressionSignature = signature;
    pushStepLog_(
      st,
      logs,
      `Anti-bucle dominios activo: se excluyen temporalmente ${selectedDomains.join(", ")} para abrir fuentes nuevas.`
    );
  }

  const merged = `${base} ${extra.join(" ")}`.replace(/\s+/g, " ").trim();
  return compactQueryForHybrid_(merged);
}

function buildRecoveryQueryPlan_(query, scope, searchOptions, expansionIndex, context) {
  const base = compactQueryForPlan_(query);
  const opts = searchOptions || {};
  const ctx = (context && typeof context === "object") ? context : {};
  const includePhone = opts.allowPhoneCollection === true;
  const requireEmail = opts.requireEmail === true;
  const requireName = opts.requireName === true;
  const disallowGeneric = opts.disallowGenericMailboxEmails === true;
  const tier = Math.max(0, Number(expansionIndex || 0));
  const scopeLabel = normalizeTextForMatch_(getScopeLabel_(scope));
  const scopeHint = scopeLabel ? scopeLabel.replace(/\s+/g, " ").trim() : "espana";
  const focusTerms = [];
  if (requireName) focusTerms.push("nombre y apellidos");
  if (requireEmail) focusTerms.push("email directo persona");
  if (disallowGeneric) focusTerms.push("sin info@ ni contacto@");
  if (includePhone) focusTerms.push("telefono");
  const focus = focusTerms.join(" ").trim();
  const suppressedDomains = Array.isArray(ctx.suppressedDomains) ? ctx.suppressedDomains : [];
  const maxSites = Math.max(0, Number(APP_CONFIG.antiLoopDomainSuppressionMaxSitesPerQuery || 4));
  const selectedDomains = suppressedDomains
    .map((d) => String(d || "").trim().toLowerCase())
    .filter((d) => d)
    .slice(0, maxSites);
  const exclusionSuffix = selectedDomains.length
    ? ` ${selectedDomains.map((d) => `-site:${d}`).join(" ")}`
    : "";

  const plans = [
    [
      `${base} directorio profesionales musica ${scopeHint} ${focus}`,
      `${base} equipo editorial musica ${scopeHint} contacto`,
      `${base} staff management booking ${scopeHint} email`,
      `${base} agencia prensa musical ${scopeHint} email directo`,
      `${base} promotora conciertos ${scopeHint} contacto profesional`,
      `periodistas musicales ${scopeHint} email directo`,
      `criticos musicales ${scopeHint} contacto profesional`,
      `locutores radio musical ${scopeHint} correo contacto`,
      `promotores conciertos ${scopeHint} email`,
      `agencia booking artistas ${scopeHint} contacto`
    ],
    [
      `${base} site:linkedin.com/in ${scopeHint} music journalist email`,
      `${base} site:linkedin.com/company ${scopeHint} music media contacto`,
      `${base} site:facebook.com ${scopeHint} pagina oficial contacto email`,
      `${base} site:instagram.com ${scopeHint} booking manager email`,
      `${base} site:tiktok.com ${scopeHint} musica contacto profesional`,
      `site:linkedin.com/in periodista musical ${scopeHint} email`,
      `site:linkedin.com/company sala conciertos ${scopeHint} contacto`,
      `site:facebook.com promotora conciertos ${scopeHint} contacto`,
      `site:instagram.com agencia booking ${scopeHint} email`
    ],
    [
      `${base} revista indie rock ${scopeHint} equipo contacto`,
      `${base} sala conciertos ${scopeHint} prensa contacto email`,
      `${base} festival musica ${scopeHint} organizacion contacto`,
      `${base} sello discografico ${scopeHint} a&r contacto`,
      `${base} agencia booking artistas ${scopeHint} contacto directo`,
      `revista musical ${scopeHint} redaccion correo`,
      `medio musical digital ${scopeHint} equipo editorial contacto`,
      `festival independiente ${scopeHint} contacto organizacion`,
      `sello discografico independiente ${scopeHint} contacto prensa`
    ],
    [
      `${base} podcast musica ${scopeHint} redaccion contacto`,
      `${base} blog musical ${scopeHint} autor contacto email`,
      `${base} promotora eventos musica ${scopeHint} equipo contacto`,
      `${base} manager artistas ${scopeHint} contacto profesional`,
      `${base} plataforma streaming musica ${scopeHint} prensa contacto`,
      `podcast musica ${scopeHint} correo contacto`,
      `blog musica ${scopeHint} autor email`,
      `agenda conciertos ${scopeHint} contacto editorial`
    ],
    [
      `${base} radio musical ${scopeHint} equipo editorial correo`,
      `${base} newsletter musical ${scopeHint} responsable contenidos email`,
      `${base} estudio grabacion ${scopeHint} booking contacto`,
      `${base} agencia comunicacion musica ${scopeHint} contacto`,
      `${base} discografica independiente ${scopeHint} equipo email`,
      `radio musical ${scopeHint} contacto redaccion`,
      `agencia comunicacion musical ${scopeHint} correo`,
      `estudio grabacion ${scopeHint} contacto management`
    ],
    [
      `${base} revista digital musica ${scopeHint} redactor contacto`,
      `${base} promotor conciertos ${scopeHint} contacto directo`,
      `${base} sala festivales ${scopeHint} organizacion email`,
      `${base} management musical ${scopeHint} equipo`,
      `${base} A&R musica ${scopeHint} contacto`,
      `redactor musical freelance ${scopeHint} email`,
      `promotor eventos musicales ${scopeHint} contacto`,
      `manager artistas musicales ${scopeHint} correo`
    ]
  ];

  let selected = plans[tier] || [];
  if (!selected.length) {
    const rotatingTerms = [
      "periodista musical",
      "critico musical",
      "redactor musica",
      "locutor radio musical",
      "agencia booking artistas",
      "promotor conciertos",
      "sello discografico",
      "manager de artistas"
    ];
    const t1 = rotatingTerms[tier % rotatingTerms.length];
    const t2 = rotatingTerms[(tier + 2) % rotatingTerms.length];
    const t3 = rotatingTerms[(tier + 4) % rotatingTerms.length];
    selected = [
      `${base} ${t1} ${scopeHint} contacto email`,
      `${base} ${t2} ${scopeHint} equipo contacto`,
      `${base} ${t3} ${scopeHint} correo profesional`,
      `${base} site:linkedin.com/in ${scopeHint} ${t1} email`,
      `${base} site:facebook.com ${scopeHint} ${t2} contacto`
    ];
  }

  const out = [];
  const seen = {};
  for (let i = 0; i < selected.length; i += 1) {
    let q = String(selected[i] || "").replace(/\s+/g, " ").trim();
    if (!q) continue;
    if (exclusionSuffix) {
      q = `${q}${exclusionSuffix}`.replace(/\s+/g, " ").trim();
    }
    if (!q || seen[q]) continue;
    seen[q] = true;
    out.push(q);
  }
  return out;
}

function maybeExpandQueryPlanAfterStale_(state, stepLogs) {
  const st = state || {};
  const logs = Array.isArray(stepLogs) ? stepLogs : [];
  const maxExpansions = Math.max(0, Number(APP_CONFIG.maxDynamicPlanExpansions || 3));
  const usedExpansions = Math.max(0, Number(st.dynamicPlanExpansions || 0));
  if (usedExpansions >= maxExpansions) return false;

  const suppressedDomains = getSuppressedDomainsForStale_(st);
  const extraQueries = buildRecoveryQueryPlan_(
    st.query,
    st.scope,
    st.searchOptions,
    usedExpansions,
    { suppressedDomains: suppressedDomains }
  );
  if (!extraQueries.length) return false;

  const existing = {};
  const currentPlan = Array.isArray(st.queryPlan) ? st.queryPlan : [];
  for (let i = 0; i < currentPlan.length; i += 1) {
    const q = String(currentPlan[i] || "").trim();
    if (q) existing[q] = true;
  }

  const newOnes = [];
  for (let i = 0; i < extraQueries.length; i += 1) {
    const q = String(extraQueries[i] || "").trim();
    if (!q || existing[q]) continue;
    existing[q] = true;
    newOnes.push(q);
  }
  if (!newOnes.length) return false;

  st.queryPlan = currentPlan.concat(newOnes);
  st.dynamicPlanExpansions = usedExpansions + 1;
  st.staleRounds = 0;
  st.planIndex = Math.max(0, st.queryPlan.length - newOnes.length);

  pushStepLog_(
    st,
    logs,
    `Sin nuevos contactos: ampliando plan (${st.dynamicPlanExpansions}/${maxExpansions}) con ${newOnes.length} consultas extra para alcanzar objetivos altos.`
  );
  if (suppressedDomains.length) {
    pushStepLog_(
      st,
      logs,
      `Expansion anti-bucle: exclusiones por dominio activas (${suppressedDomains.slice(0, 4).join(", ")}).`
    );
  }
  return true;
}

function compactQueryForPlan_(query) {
  const raw = String(query || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  const limit = Math.max(160, Number(APP_CONFIG.maxQueryCharsForPlan || 420));
  if (raw.length <= limit) return raw;
  const slice = raw.slice(0, limit);
  const lastSentence = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("; "));
  const compact = lastSentence > 120 ? slice.slice(0, lastSentence + 1) : slice;
  return `${compact} [consulta resumida]`;
}

function compactQueryForHybrid_(query) {
  const raw = String(query || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  const maxChars = Math.max(260, Number(APP_CONFIG.hybridQueryMaxChars || 1200));
  if (raw.length <= maxChars) return raw;
  const headLen = Math.max(180, Math.floor(maxChars * 0.72));
  const tailLen = Math.max(60, maxChars - headLen - 8);
  const head = raw.slice(0, headLen).trim();
  const tail = raw.slice(-tailLen).trim();
  return `${head} ... ${tail}`.slice(0, maxChars);
}

function getRuntimeLimitMs_(targetCount) {
  const base = Math.max(60 * 1000, Number(APP_CONFIG.maxRuntimeMs || 8 * 60 * 1000));
  const strictBonus = APP_CONFIG.strictRequireEmailAndPhone
    ? Math.max(0, Number(APP_CONFIG.strictRuntimeBonusMs || 0))
    : 0;
  const perContact = Math.max(0, Number(APP_CONFIG.runtimeBonusPerContactMs || 0));
  const maxBonus = Math.max(0, Number(APP_CONFIG.runtimeBonusMaxMs || 0));
  const target = Math.max(0, Number(targetCount || 0));
  const sizeBonus = Math.min(maxBonus, target * perContact);
  return base + strictBonus + sizeBonus;
}

function getMaxIterationsForTarget_(targetCount) {
  const base = Math.max(200, Number(APP_CONFIG.maxIterations || 1000));
  const target = Math.max(1, Number(targetCount || 0));
  // Ajuste visual/operativo: si pides objetivos altos, el techo de iteraciones tambien sube.
  // El proceso sigue parando antes por estancamiento, tiempo o objetivo alcanzado.
  return Math.max(base, Math.min(APP_CONFIG.maxTargetCount || 10000, target));
}

function msToMinutesLabel_(ms) {
  const minutes = Number(ms || 0) / (60 * 1000);
  return `${minutes.toFixed(1)} min`;
}

function resolveGeminiApiKey_(providedApiKey) {
  const key = String(providedApiKey || "").trim();
  if (key) {
    saveGeminiApiKey_(key);
    return key;
  }
  const stored = getStoredGeminiApiKey_();
  if (stored) return stored;
  const remote = String(APP_CONFIG.remoteGeminiApiKey || "").trim();
  if (remote) {
    saveGeminiApiKey_(remote);
    return remote;
  }
  throw new Error("Falta API key de Gemini. Pegala en el popup para continuar.");
}

function saveGeminiApiKey_(apiKey) {
  const props = PropertiesService.getScriptProperties();
  props.setProperty("GEMINI_API_KEY", apiKey);
}

function getStoredGeminiApiKey_() {
  return String(PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY") || "").trim();
}

function resolveBestGeminiModel_(apiKey, forceRefresh) {
  const key = String(apiKey || "").trim();
  if (!key) {
    throw new Error("API key de Gemini vacia.");
  }

  const bypassCache = forceRefresh === true;
  if (!bypassCache) {
    const cached = readGeminiModelCache_(key);
    if (cached) return cached;
  }

  const url = `${APP_CONFIG.geminiApiBase}/models?key=${encodeURIComponent(key)}`;
  const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  const code = resp.getResponseCode();
  if (code < 200 || code >= 300) {
    throw new Error("No se pudo conectar con Gemini API. Revisa la API key.");
  }

  const data = JSON.parse(resp.getContentText() || "{}");
  const available = parseAvailableGeminiModels_(data);
  if (!available.length) {
    throw new Error("La API key no tiene modelos de generacion disponibles.");
  }

  const chosen = chooseGeminiModel_(available);
  const result = {
    model: chosen.model,
    preferredModel: chosen.preferredModel,
    usingPreferredModel: chosen.usingPreferredModel,
    fallbackReason: chosen.fallbackReason,
    availableModels: available.slice(0, 30),
    modelSource: "live"
  };
  writeGeminiModelCache_(key, result);
  return result;
}

function parseAvailableGeminiModels_(apiModelsPayload) {
  const payload = apiModelsPayload || {};
  const models = Array.isArray(payload.models) ? payload.models : [];
  const out = [];
  const seen = {};
  for (let i = 0; i < models.length; i += 1) {
    const model = models[i] || {};
    const methods = Array.isArray(model.supportedGenerationMethods) ? model.supportedGenerationMethods : [];
    if (methods.indexOf("generateContent") < 0) continue;
    const name = String(model.name || "").replace(/^models\//, "").trim();
    if (!name || seen[name]) continue;
    seen[name] = true;
    out.push(name);
  }
  return out;
}

function chooseGeminiModel_(available) {
  const availableList = Array.isArray(available) ? available : [];
  const preferred = String(APP_CONFIG.geminiPrimaryModel || APP_CONFIG.geminiPreferredModels[0] || "").trim();
  const preferredList = Array.isArray(APP_CONFIG.geminiPreferredModels) ? APP_CONFIG.geminiPreferredModels : [];

  if (preferred && availableList.indexOf(preferred) >= 0) {
    return {
      model: preferred,
      preferredModel: preferred,
      usingPreferredModel: true,
      fallbackReason: ""
    };
  }

  for (let i = 0; i < preferredList.length; i += 1) {
    const wanted = String(preferredList[i] || "").trim();
    if (!wanted) continue;
    if (availableList.indexOf(wanted) >= 0) {
      return {
        model: wanted,
        preferredModel: preferred,
        usingPreferredModel: wanted === preferred,
        fallbackReason: preferred
          ? `No disponible ${preferred}; se usa ${wanted}.`
          : ""
      };
    }
  }

  const fallback = String(availableList[0] || "").trim();
  return {
    model: fallback,
    preferredModel: preferred,
    usingPreferredModel: false,
    fallbackReason: preferred
      ? `No disponible ${preferred}; se usa ${fallback}.`
      : `Sin preferencia disponible; se usa ${fallback}.`
  };
}

function getGeminiModelCacheKey_() {
  return "BUSCA_CONTACTOS_GEMINI_MODEL_CACHE_V2";
}

function getGeminiApiFingerprint_(apiKey) {
  const key = String(apiKey || "");
  if (!key) return "";
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, key);
  return Utilities.base64EncodeWebSafe(digest).replace(/=+$/, "");
}

function readGeminiModelCache_(apiKey) {
  const props = PropertiesService.getScriptProperties();
  const raw = String(props.getProperty(getGeminiModelCacheKey_()) || "").trim();
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const ttlSeconds = Math.max(30, Number(APP_CONFIG.geminiModelCacheTtlSeconds || 600));
    const now = Date.now();
    const updatedAtMs = Number(parsed.updatedAtMs || 0);
    if (!updatedAtMs || now - updatedAtMs > ttlSeconds * 1000) return null;
    const fp = getGeminiApiFingerprint_(apiKey);
    if (!fp || String(parsed.apiFingerprint || "") !== fp) return null;
    const model = String(parsed.model || "").trim();
    if (!model) return null;
    const availableModels = Array.isArray(parsed.availableModels) ? parsed.availableModels : [];
    return {
      model: model,
      preferredModel: String(parsed.preferredModel || APP_CONFIG.geminiPrimaryModel || ""),
      usingPreferredModel: parsed.usingPreferredModel === true,
      fallbackReason: String(parsed.fallbackReason || ""),
      availableModels: availableModels.slice(0, 30),
      modelSource: "cache"
    };
  } catch (err) {
    return null;
  }
}

function writeGeminiModelCache_(apiKey, modelInfo) {
  const props = PropertiesService.getScriptProperties();
  const info = modelInfo || {};
  const payload = {
    updatedAtMs: Date.now(),
    apiFingerprint: getGeminiApiFingerprint_(apiKey),
    model: String(info.model || ""),
    preferredModel: String(info.preferredModel || APP_CONFIG.geminiPrimaryModel || ""),
    usingPreferredModel: info.usingPreferredModel === true,
    fallbackReason: String(info.fallbackReason || ""),
    availableModels: Array.isArray(info.availableModels) ? info.availableModels.slice(0, 30) : []
  };
  try {
    props.setProperty(getGeminiModelCacheKey_(), JSON.stringify(payload));
  } catch (err) {
    // Si falla la cache no bloqueamos el proceso de busqueda.
  }
}

function geminiGroundedSearchContacts_(model, queryVariant, scope, targetCount, searchOptions) {
  if (APP_CONFIG.forceDisableGeminiEverywhere === true) {
    throw new Error("Gemini desactivado globalmente por modo ahorro extremo.");
  }
  const apiKey = getStoredGeminiApiKey_();
  if (!apiKey) {
    throw new Error("No hay API key de Gemini guardada.");
  }
  const opts = searchOptions || {};
  const requireEmail = opts.requireEmail === true;
  const allowPhoneCollection = opts.allowPhoneCollection === true;
  const requireName = opts.requireName === true;
  const requireCompany = opts.requireCompany === true;
  const disallowGenericMailboxEmails = opts.disallowGenericMailboxEmails === true;
  const focusSummary = [
    requireName ? "nombre_persona" : "",
    requireCompany ? "empresa" : "",
    requireEmail ? "email_directo" : "",
    allowPhoneCollection ? "telefono" : "sin_telefono",
    disallowGenericMailboxEmails ? "sin_info_contacto" : ""
  ].filter((x) => x).join(", ");

  const prompt = [
    "Busca en internet contactos reales y devuelve solo JSON valido.",
    `Tema de busqueda: ${queryVariant}`,
    `Alcance: ${getScopeLabel_(scope)}`,
    `Cantidad maxima a devolver: ${targetCount}`,
    `Foco de salida: ${focusSummary || "contacto_profesional"}.`,
    "Solo contactos que aparezcan en web publica.",
    "Incluye tambien fuentes sociales publicas cuando aporten evidencia real (LinkedIn, Instagram, YouTube, TikTok, X).",
    "No inventes datos.",
    requireName
      ? "No devuelvas registros sin nombre_contacto (persona real)."
      : "Si no hay nombre_contacto, deja nombre_contacto vacio.",
    requireCompany
      ? "Prioriza entidades del sector musical con empresa/medio claramente identificable."
      : "Si no hay empresa clara, deja empresa vacio.",
    requireEmail
      ? "Prioriza email profesional directo de persona."
      : "Si no hay email, deja email vacio.",
    allowPhoneCollection
      ? "Si hay telefono profesional verificable, puedes incluirlo."
      : "No incluyas telefonos. Deja telefono vacio.",
    disallowGenericMailboxEmails
      ? "No devuelvas emails genericos (info@, contacto@, hola@, hello@, admin@, support@, prensa@, booking@, no-reply@)."
      : "Evita buzones tecnicos no utiles cuando sea posible.",
    "Para influencers, artistas o prensa, intenta nombre y apellido o nombre artistico verificable en fuente publica.",
    "Cada contacto debe incluir URL de origen exacta (source_url) de donde sale el dato.",
    "No uses archivos o recursos tecnicos como origen (png, jpg, svg, css, js, pdf).",
    "Si no hay URL origen valida, no incluyas ese contacto.",
    "Formato exacto:",
    "{",
    '  "contacts": [',
    "    {",
      '      "empresa": "",',
      '      "nombre_contacto": "",',
      '      "descripcion_medio_empresa": "",',
      '      "cargo": "",',
      '      "funcion_cargo": "",',
      '      "email": "",',
      '      "telefono": "",',
      '      "web": "",',
      '      "dominio_web_generico": "",',
    '      "source_url": "",',
    '      "source_title": "",',
    '      "source_snippet": "",',
    '      "notas": ""',
    "    }",
    "  ]",
    "}",
    "Sin markdown. Sin texto extra."
  ].join("\n");

  const url = `${APP_CONFIG.geminiApiBase}/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    tools: [{ google_search: {} }],
    generationConfig: {
      temperature: 0.1
    }
  };

  const resp = callGeminiGenerateWithRetries_(url, body);

  const data = JSON.parse(resp.getContentText() || "{}");
  const candidate = data.candidates && data.candidates[0] ? data.candidates[0] : null;
  const text = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0]
    ? String(candidate.content.parts[0].text || "")
    : "";
  const parsed = parseJsonSafely_(text);
  const contacts = parsed && Array.isArray(parsed.contacts) ? parsed.contacts : [];

  const webSearchQueries = candidate && candidate.groundingMetadata && Array.isArray(candidate.groundingMetadata.webSearchQueries)
    ? candidate.groundingMetadata.webSearchQueries
    : [];

  return {
    contacts: contacts.slice(0, targetCount),
    sourceCandidatesCount: contacts.length,
    webSearchQueriesCount: webSearchQueries.length,
    source: "gemini"
  };
}

function shouldRunGeminiFallback_(state, currentStepResult, desired) {
  if (APP_CONFIG.forceDisableGeminiEverywhere === true) return false;
  const st = state || {};
  const hybridCfg = (st.hybrid && typeof st.hybrid === "object") ? st.hybrid : {};
  const mode = getGeminiFallbackModeForState_(st);
  if (st.geminiAllowed === false) return false;
  if (mode === "never") return false;
  if (mode === "puntual") {
    if (APP_CONFIG.geminiPunctualAssistEnabled !== true) return false;
    if (!hybridCfg.enabled || hybridCfg.preferCodeFirst !== true) return false;
    const maxCalls = Math.max(0, Number(st.geminiPunctualCallsMax || APP_CONFIG.geminiPunctualMaxCallsPerJob || 2));
    const usedCalls = Math.max(0, Number(st.geminiPunctualCallsUsed || 0));
    if (usedCalls >= maxCalls) return false;
    const minStale = Math.max(1, Number(st.geminiPunctualMinStaleRounds || APP_CONFIG.geminiPunctualMinStaleRounds || 4));
    const staleRounds = Math.max(0, Number(st.staleRounds || 0));
    const currentCountPunctual = Number((currentStepResult && currentStepResult.sourceCandidatesCount) || 0);
    if (currentCountPunctual > 0) return false;
    return staleRounds >= minStale;
  }
  if (!hybridCfg.enabled || hybridCfg.preferCodeFirst !== true) return true;

  const currentCount = Number((currentStepResult && currentStepResult.sourceCandidatesCount) || 0);
  const minContacts = Math.max(0, Number(hybridCfg.fallbackMinContacts || APP_CONFIG.hybridFallbackMinContacts || 2));
  const desiredCount = Math.max(1, Number(desired || 1));
  const threshold = Math.min(desiredCount, Math.max(1, minContacts));

  if (mode === "always") return true;
  if (mode === "if_low") return currentCount < threshold;
  return currentCount <= 0;
}

function mergeSearchStepResults_(primaryResult, secondaryResult, desired) {
  const first = primaryResult || {};
  const second = secondaryResult || {};
  const firstContacts = Array.isArray(first.contacts) ? first.contacts : [];
  const secondContacts = Array.isArray(second.contacts) ? second.contacts : [];
  const desiredCount = Math.max(1, Number(desired || 1));
  const maxKeep = Math.max(desiredCount, Math.min(200, desiredCount * 4));
  const out = [];
  const seen = {};

  const add = (rec) => {
    const item = rec || {};
    const email = String(item.email || "").trim().toLowerCase();
    const sourceUrl = normalizeWeb_(String(item.source_url || item.sourceUrl || item.web || "").trim());
    const company = normalizeCompanyName_(String(item.empresa || item.company || "").trim());
    const contact = normalizePersonName_(String(item.nombre_contacto || item.contacto || item.full_name || "").trim());
    const keyRaw = [email, sourceUrl, company, contact].join("|").trim();
    const key = keyRaw ? keyRaw : hashText_(JSON.stringify(item));
    if (seen[key]) return;
    seen[key] = true;
    out.push(item);
  };

  for (let i = 0; i < firstContacts.length; i += 1) add(firstContacts[i]);
  for (let i = 0; i < secondContacts.length; i += 1) add(secondContacts[i]);

  return {
    contacts: out.slice(0, maxKeep),
    sourceCandidatesCount: out.length,
    webSearchQueriesCount: Number(first.webSearchQueriesCount || 0) + Number(second.webSearchQueriesCount || 0),
    source: [String(first.source || "").trim(), String(second.source || "").trim()].filter((x) => x).join("+")
  };
}

function getStepResultSourceLabel_(stepResult, usedGeminiFallback) {
  const src = String((stepResult && stepResult.source) || "").toLowerCase();
  if (src.indexOf("ia_ruben_coton_local") >= 0 || src.indexOf("ia_ruben_coton") >= 0) return "IA Local";
  if (src.indexOf("hybrid") >= 0 && src.indexOf("gemini") >= 0) return "Hibrido+IA Remota";
  if (src.indexOf("hybrid") >= 0) return "Hibrido";
  if (src.indexOf("gemini") >= 0) return "IA Remota";
  return usedGeminiFallback ? "IA Remota" : "Hibrido";
}

function buildHybridDiversifyQueries_(state, primaryQuery) {
  const st = state || {};
  const out = [];
  const seen = {};
  const profileCfg = (st.profileConfig && typeof st.profileConfig === "object") ? st.profileConfig : {};
  const maxAttempts = Math.max(
    1,
    Number(profileCfg.hybridDiversifyMaxQueryAttempts || APP_CONFIG.hybridDiversifyMaxQueryAttempts || 1)
  );
  const add = (raw) => {
    const value = compactQueryForHybrid_(String(raw || "").trim());
    if (!value || seen[value]) return;
    seen[value] = true;
    out.push(value);
  };

  add(primaryQuery || st.query || "");
  if (maxAttempts <= 1) return out.slice(0, 1);

  const suppressedDomains = getSuppressedDomainsForStale_(st);
  const recoveryTier = Math.max(0, Number(st.dynamicPlanExpansions || 0));
  const recoveryQueries = buildRecoveryQueryPlan_(
    st.query,
    st.scope,
    st.searchOptions,
    recoveryTier,
    { suppressedDomains: suppressedDomains }
  );
  for (let i = 0; i < recoveryQueries.length; i += 1) {
    add(recoveryQueries[i]);
    if (out.length >= maxAttempts) return out.slice(0, maxAttempts);
  }

  if (APP_CONFIG.hybridDiversifyExplorationEnabled === true) {
    const explorationQueries = buildStepExplorationQueries_(st, primaryQuery || st.query || "");
    for (let i = 0; i < explorationQueries.length; i += 1) {
      add(explorationQueries[i]);
      if (out.length >= maxAttempts) return out.slice(0, maxAttempts);
    }
  }

  const scopeHint = String(normalizeTextForMatch_(getScopeLabel_(st.scope)) || "espana")
    .replace(/\s+/g, " ")
    .trim();
  add(`periodistas musicales ${scopeHint} email directo contacto profesional`);
  add(`site:linkedin.com/in musica ${scopeHint} contacto email`);
  add(`site:facebook.com promotora conciertos ${scopeHint} contacto`);
  add(`site:instagram.com booking management ${scopeHint} email`);
  add(`site:tiktok.com musica ${scopeHint} contacto profesional`);
  return out.slice(0, maxAttempts);
}

function buildStepExplorationQueries_(state, primaryQuery) {
  const st = state || {};
  const scopeHint = String(normalizeTextForMatch_(getScopeLabel_(st.scope)) || "espana")
    .replace(/\s+/g, " ")
    .trim();
  const base = compactQueryForPlan_(primaryQuery || st.query || "contactos industria musical");
  if (!base) return [];

  const rolePool = [
    "periodista musical",
    "redactor de musica",
    "booking manager",
    "promotor conciertos",
    "manager de artistas",
    "a&r",
    "responsable prensa",
    "programador de sala"
  ];
  const cityPool = [
    "madrid",
    "barcelona",
    "valencia",
    "sevilla",
    "bilbao",
    "malaga",
    "zaragoza",
    "murcia",
    "vigo",
    "granada",
    "alicante",
    "a coruna"
  ];
  const channelPool = [
    "site:linkedin.com/in",
    "site:linkedin.com/company",
    "site:instagram.com",
    "site:facebook.com",
    "site:tiktok.com",
    "site:youtube.com"
  ];

  const indexBase = Math.max(
    0,
    Number(st.iterations || 0) + Number(st.dynamicPlanExpansions || 0) * 11 + Number(st.found || 0)
  );
  const roleA = rolePool[indexBase % rolePool.length];
  const roleB = rolePool[(indexBase + 3) % rolePool.length];
  const cityA = cityPool[(indexBase * 2 + 1) % cityPool.length];
  const cityB = cityPool[(indexBase * 3 + 5) % cityPool.length];
  const channelA = channelPool[(indexBase * 5 + 2) % channelPool.length];
  const channelB = channelPool[(indexBase * 7 + 4) % channelPool.length];

  const rawQueries = [
    `${base} ${roleA} ${cityA} ${scopeHint} email directo`,
    `${base} ${roleB} ${cityB} ${scopeHint} contacto profesional`,
    `${channelA} ${roleA} ${cityA} ${scopeHint} email`,
    `${channelB} ${roleB} ${cityB} ${scopeHint} contacto`,
    `${base} medio musical ${cityA} ${scopeHint} equipo editorial contacto`,
    `${base} promotora conciertos ${cityB} ${scopeHint} contacto booking`
  ];

  const out = [];
  const seen = {};
  for (let i = 0; i < rawQueries.length; i += 1) {
    const q = compactQueryForHybrid_(String(rawQueries[i] || "").trim());
    if (!q || seen[q]) continue;
    seen[q] = true;
    out.push(q);
  }
  return out;
}

function shouldRelaxDomainSuppressionForState_(state) {
  const st = state || {};
  const staleRoundsNow = Math.max(0, Number(st.staleRounds || 0));
  const threshold = Math.max(1, Number(APP_CONFIG.hybridRelaxDomainSuppressionAfterStaleRounds || 4));
  if (staleRoundsNow < threshold) return false;

  const profile = normalizeSearchProfileKey_(String(st.profile || ""));
  const allowedProfiles = Array.isArray(APP_CONFIG.hybridRelaxDomainSuppressionForProfiles)
    ? APP_CONFIG.hybridRelaxDomainSuppressionForProfiles.map((p) => normalizeSearchProfileKey_(p))
    : [];
  if (!allowedProfiles.length) return true;
  return allowedProfiles.indexOf(profile) >= 0;
}

function buildHybridDomainExclusions_(state, baseSuppressedDomains) {
  const st = state || {};
  const seenEmails = Array.isArray(st.seenEmails) ? st.seenEmails : [];
  const domainCount = {};
  const outMap = {};
  const base = Array.isArray(baseSuppressedDomains) ? baseSuppressedDomains : [];
  for (let i = 0; i < base.length; i += 1) {
    const root = String(base[i] || "").trim().toLowerCase();
    if (root) outMap[root] = true;
  }
  if (APP_CONFIG.hybridSuppressSeenDomainsOnStale !== true) {
    return Object.keys(outMap);
  }

  const staleRoundsNow = Math.max(0, Number(st.staleRounds || 0));
  if (staleRoundsNow < 1) return Object.keys(outMap);

  const minHits = Math.max(1, Number(APP_CONFIG.hybridSuppressSeenDomainsMinHits || 3));
  const maxDomains = Math.max(1, Number(APP_CONFIG.hybridSuppressSeenDomainsMax || 12));
  for (let i = 0; i < seenEmails.length; i += 1) {
    const email = String(seenEmails[i] || "").trim().toLowerCase();
    if (!isValidEmail_(email)) continue;
    const domain = String(email.split("@")[1] || "").trim().toLowerCase();
    const root = getRootDomain_(domain) || domain;
    if (!root || isPublicMailboxDomain_(root)) continue;
    domainCount[root] = Number(domainCount[root] || 0) + 1;
  }
  const top = Object.keys(domainCount)
    .filter((d) => Number(domainCount[d] || 0) >= minHits)
    .sort((a, b) => Number(domainCount[b] || 0) - Number(domainCount[a] || 0))
    .slice(0, maxDomains);
  for (let i = 0; i < top.length; i += 1) {
    const root = String(top[i] || "").trim().toLowerCase();
    if (root) outMap[root] = true;
  }
  return Object.keys(outMap);
}

function getHybridCandidateRootDomain_(rec) {
  const row = rec || {};
  const email = String(row.email || "").trim().toLowerCase();
  if (isValidEmail_(email)) {
    const fromEmail = getRootDomain_(String(email.split("@")[1] || "").trim().toLowerCase());
    if (fromEmail) return fromEmail;
  }
  const source = normalizeWeb_(String(row.source_url || row.web || "").trim());
  if (source) {
    const fromSource = getRootDomain_(source);
    if (fromSource) return fromSource;
  }
  const domainHint = normalizeDomainGeneric_(String(row.dominio_web_generico || row.dominio || "").trim());
  if (domainHint) {
    const fromDomainHint = getRootDomain_(domainHint) || domainHint.toLowerCase();
    if (fromDomainHint) return fromDomainHint;
  }
  return "";
}

function requestHybridPayloadWithRetry_(endpoint, hybridCfg, payload, attempts, baseWait, maxWait) {
  const cfg = (hybridCfg && typeof hybridCfg === "object") ? hybridCfg : {};
  const requestAttempts = Math.max(1, Number(attempts || 1));
  const requestBaseWait = Math.max(300, Number(baseWait || 1200));
  const requestMaxWait = Math.max(requestBaseWait, Number(maxWait || 5000));
  let lastError = "";

  for (let attempt = 1; attempt <= requestAttempts; attempt += 1) {
    try {
      const headers = {};
      if (cfg.hasToken && cfg.token) {
        headers.Authorization = `Bearer ${cfg.token}`;
      }
      const resp = UrlFetchApp.fetch(endpoint, {
        method: "post",
        contentType: "application/json",
        muteHttpExceptions: true,
        headers: headers,
        payload: JSON.stringify(payload),
        followRedirects: true,
        validateHttpsCertificates: true
      });
      const code = Number(resp.getResponseCode() || 0);
      const bodyText = String(resp.getContentText() || "");
      if (code < 200 || code >= 300) {
        lastError = `HTTP ${code}: ${truncateForLog_(bodyText, 220)}`;
        if (attempt < requestAttempts && shouldRetryGeminiHttpCode_(code)) {
          Utilities.sleep(Math.min(requestMaxWait, requestBaseWait * Math.pow(2, attempt - 1)));
          continue;
        }
        throw new Error(`Hybrid scraper fallo (${lastError})`);
      }

      const parsed = parseJsonSafely_(bodyText);
      const parsedMeta = (parsed && parsed.meta && typeof parsed.meta === "object") ? parsed.meta : {};
      const parsedEngine = String((parsedMeta && parsedMeta.engine) || parsed.engine || "").trim().toLowerCase();
      const sourceEngine = parsedEngine
        ? `hybrid_${parsedEngine.replace(/[^a-z0-9]+/g, "_")}`
        : "hybrid_endpoint";
      const sourceUrlHints = extractHybridSourceUrlHints_(parsed, parsedMeta);
      const rawContacts = Array.isArray(parsed.contacts)
        ? parsed.contacts
        : (Array.isArray(parsed.items)
          ? parsed.items
          : (Array.isArray(parsed.candidates) ? parsed.candidates : []));

      return {
        sourceEngine: sourceEngine,
        rawContacts: rawContacts,
        parsedMeta: parsedMeta,
        sourceUrlHints: sourceUrlHints
      };
    } catch (err) {
      lastError = formatErrorForLog_(err);
      if (attempt < requestAttempts) {
        Utilities.sleep(Math.min(requestMaxWait, requestBaseWait * Math.pow(2, attempt - 1)));
        continue;
      }
      throw new Error(`Hybrid scraper no disponible tras ${attempt} intento(s): ${lastError}`);
    }
  }

  throw new Error(`Hybrid scraper sin respuesta valida (${lastError || "sin detalle"})`);
}

function callHybridScraperCandidates_(state, queryVariant, targetCount) {
  const st = state || {};
  const hybridCfg = (st.hybrid && typeof st.hybrid === "object") ? st.hybrid : {};
  const endpoint = String(hybridCfg.endpoint || "").trim();
  if (!endpoint || !/^https?:\/\//i.test(endpoint)) {
    return {
      contacts: [],
      sourceCandidatesCount: 0,
      webSearchQueriesCount: 0,
      source: "hybrid_off"
    };
  }

  const desired = Math.max(1, Number(targetCount || 1));
  const hybridQuery = compactQueryForHybrid_(String(queryVariant || st.query || ""));
  const profileCfg = (st.profileConfig && typeof st.profileConfig === "object") ? st.profileConfig : {};
  const poolMultiplier = Math.max(
    1,
    Number(profileCfg.hybridCandidatePoolMultiplier || APP_CONFIG.hybridCandidatePoolMultiplier || 2)
  );
  const poolMin = Math.max(
    desired,
    Number(profileCfg.hybridCandidatePoolMin || APP_CONFIG.hybridCandidatePoolMin || desired)
  );
  const poolTarget = Math.max(desired, Math.min(400, Math.max(poolMin, desired * poolMultiplier)));
  const perDomainCap = Math.max(
    1,
    Number(profileCfg.hybridPerDomainCapPerStep || APP_CONFIG.hybridPerDomainCapPerStep || 2)
  );
  const minUniqueDomainsGoal = Math.max(1, Number(APP_CONFIG.hybridMinUniqueDomainsGoal || 2));
  const staleRoundsNow = Number(st.staleRounds || 0);
  const suppressedDomains = getSuppressedDomainsForStale_(st);
  let blockedDomains = buildHybridDomainExclusions_(st, suppressedDomains);
  let relaxedDomainSuppression = false;
  if (blockedDomains.length && shouldRelaxDomainSuppressionForState_(st)) {
    blockedDomains = [];
    relaxedDomainSuppression = true;
  }
  const blockedDomainSet = {};
  for (let i = 0; i < blockedDomains.length; i += 1) {
    const root = String(blockedDomains[i] || "").trim().toLowerCase();
    if (root) blockedDomainSet[root] = true;
  }
  const seenEmailsTail = Array.isArray(st.seenEmails) ? st.seenEmails.slice(-300) : [];
  const excludeEmails = [];
  const excludeEmailDomains = [];
  const excludeEmailMap = {};
  const excludeDomainMap = {};
  const seenEmailMap = {};
  for (let i = 0; i < seenEmailsTail.length; i += 1) {
    const raw = String(seenEmailsTail[i] || "").trim().toLowerCase();
    if (!raw || raw.indexOf("@") < 1) continue;
    if (!excludeEmailMap[raw]) {
      excludeEmailMap[raw] = true;
      seenEmailMap[raw] = true;
      excludeEmails.push(raw);
    }
    const domain = raw.split("@").pop();
    if (!domain) continue;
    if (!excludeDomainMap[domain]) {
      excludeDomainMap[domain] = true;
      excludeEmailDomains.push(domain);
    }
  }
  const strictRoleMailboxInHybrid =
    APP_CONFIG.strictEmailRejectRoleLikeMailbox === true
    && String(st.profile || "").trim().toUpperCase() === "CALIDAD_MAXIMA";
  // Prefiltro del endpoint hibrido:
  // cuanto mas amplio sea, mas URLs candidatas llegan a la fase de verificacion
  // (que es donde se aplica la criba estricta real).
  const relaxedHybridPrefilter = true;
  const hybridPrefilterRequireEmail = st.strictRequireEmailOnWeb === true && staleRoundsNow <= 1;
  const payloadBase = {
    query: hybridQuery,
    scope: String(st.scope || "NACIONAL_ES"),
    targetCount: poolTarget,
    strict: {
      requireEmail: hybridPrefilterRequireEmail,
      requirePhone: relaxedHybridPrefilter ? false : st.strictRequirePhoneOnWeb === true,
      requireName: relaxedHybridPrefilter ? false : st.strictRequireContactNameOnWeb === true,
      requireCompany: relaxedHybridPrefilter ? false : st.strictRequireCompanyOnWeb === true
    },
    options: {
      // En prefiltro no bloqueamos por generic/role para no perder fuentes utiles.
      disallowGenericMailboxEmails: relaxedHybridPrefilter
        ? false
        : !!(st.searchOptions && st.searchOptions.disallowGenericMailboxEmails),
      disallowRoleMailboxEmails: relaxedHybridPrefilter ? false : strictRoleMailboxInHybrid,
      allowPhoneCollection: !!(st.searchOptions && st.searchOptions.allowPhoneCollection)
    },
    metadata: {
      jobId: String(st.jobId || ""),
      step: Number(st.iterations || 0),
      staleRounds: Number(st.staleRounds || 0),
      profile: String(st.profile || ""),
      localModelProfile: getHybridLocalModelProfileForSearchProfile_(st.profile),
      columns: Array.isArray(st.columns)
        ? st.columns.map((c) => ({
          header: String(c && c.header || "").trim(),
          type: String(c && c.type || "").trim(),
          description: String(c && c.description || "").trim()
        }))
        : [],
      originalQuery: String(st.query || ""),
      queryVariant: String(queryVariant || ""),
      excludeEmails: excludeEmails,
      excludeEmailDomains: excludeEmailDomains,
      excludeDomains: blockedDomains,
      excludeRootDomains: blockedDomains,
      forceExcludeDomains: blockedDomains,
      blockedDomains: blockedDomains,
      excludedDomains: blockedDomains,
      timezone: Session.getScriptTimeZone() || "Europe/Madrid",
      maxSeconds: Math.max(
        15,
        Number(
          (st.profileConfig && st.profileConfig.hybridRequestMaxSeconds)
          || APP_CONFIG.hybridRequestMaxSeconds
          || 26
        )
      )
    }
  };

  const attempts = Math.max(1, Number(APP_CONFIG.hybridRequestMaxAttempts || 2));
  const baseWait = Math.max(300, Number(APP_CONFIG.hybridRequestRetryBaseMs || 1200));
  const maxWait = Math.max(baseWait, Number(APP_CONFIG.hybridRequestRetryMaxMs || 5000));
  const queryAttempts = buildHybridDiversifyQueries_(st, hybridQuery);
  const contacts = [];
  const seenContactKeys = {};
  const perDomainCount = {};
  const sourceUrlHintsGlobal = [];
  const sourceUrlHintsSeen = {};
  const diagnosticsMerged = {};
  let totalQueriesUsed = 0;
  let totalSourceLinks = 0;
  let totalPagesFetched = 0;
  let totalExpandedPagesFetched = 0;
  let sourceEngine = "hybrid_endpoint";
  let ollamaModelUsed = "";
  let lastError = "";

  const syncMeta = (metaObj) => {
    const meta = (metaObj && typeof metaObj === "object") ? metaObj : {};
    totalQueriesUsed += Math.max(0, Number(meta.queriesUsed || 0));
    totalSourceLinks += Math.max(0, Number(meta.sourceLinks || 0));
    totalPagesFetched += Math.max(0, Number(meta.pagesFetched || 0));
    totalExpandedPagesFetched += Math.max(0, Number(meta.expandedPagesFetched || 0));
    if (!ollamaModelUsed) {
      ollamaModelUsed = String(meta.ollamaModelUsed || "").trim();
    }
    const diag = (meta.diagnostics && typeof meta.diagnostics === "object") ? meta.diagnostics : {};
    const keys = Object.keys(diag);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const n = Number(diag[key] || 0);
      if (isFinite(n)) diagnosticsMerged[key] = Number(diagnosticsMerged[key] || 0) + n;
    }
  };
  const pushSourceHint = (urlValue) => {
    const value = normalizeWeb_(String(urlValue || "").trim());
    if (!value || sourceUrlHintsSeen[value]) return;
    sourceUrlHintsSeen[value] = true;
    sourceUrlHintsGlobal.push(value);
  };
  const normalizeCandidateName = (rawName, email, companyHint, domainHint) => {
    const candidateEmail = String(email || "").trim().toLowerCase();
    const value = normalizePersonName_(String(rawName || "").trim());
    if (!value) return "";
    const validByShape = looksLikePersonName_(value, companyHint, domainHint);
    if (!candidateEmail || APP_CONFIG.strictNameEmailCoherence !== true) {
      return validByShape ? value : "";
    }
    if (isNameConsistentWithEmailLocal_(value, candidateEmail)) return value;
    const recovered = normalizePersonName_(
      String(
        guessContactNameFromEmail_(candidateEmail)
        || guessSingleNameFromEmailLocal_(candidateEmail)
        || ""
      ).trim()
    );
    if (!recovered) return "";
    const recoveredByShape = looksLikePersonName_(recovered, companyHint, domainHint);
    const recoveredByEmail = isNameConsistentWithEmailLocal_(recovered, candidateEmail);
    if (recoveredByShape || recoveredByEmail) return recovered;
    return "";
  };
  const maxQueries = Math.max(
    1,
    Number(profileCfg.hybridDiversifyMaxQueryAttempts || APP_CONFIG.hybridDiversifyMaxQueryAttempts || 3)
  );
  for (let qi = 0; qi < queryAttempts.length && qi < maxQueries; qi += 1) {
    const activeQuery = String(queryAttempts[qi] || "").trim();
    if (!activeQuery) continue;
    const payload = JSON.parse(JSON.stringify(payloadBase));
    payload.query = activeQuery;
    payload.targetCount = poolTarget;
    payload.metadata = payload.metadata || {};
    payload.metadata.queryVariant = activeQuery;
    payload.metadata.excludeDomains = blockedDomains;
    payload.metadata.excludeRootDomains = blockedDomains;
    payload.metadata.forceExcludeDomains = blockedDomains;
    payload.metadata.blockedDomains = blockedDomains;
    payload.metadata.excludedDomains = blockedDomains;
    payload.metadata.stepQueryAttempt = qi + 1;
    payload.metadata.stepQueryAttempts = maxQueries;

    try {
      const stepData = requestHybridPayloadWithRetry_(
        endpoint,
        hybridCfg,
        payload,
        attempts,
        baseWait,
        maxWait
      );
      sourceEngine = String(stepData.sourceEngine || sourceEngine || "hybrid_endpoint");
      const parsedMeta = stepData.parsedMeta || {};
      const sourceUrlHints = Array.isArray(stepData.sourceUrlHints) ? stepData.sourceUrlHints : [];
      const rawContacts = Array.isArray(stepData.rawContacts) ? stepData.rawContacts : [];
      syncMeta(parsedMeta);
      for (let h = 0; h < sourceUrlHints.length; h += 1) pushSourceHint(sourceUrlHints[h]);

      for (let i = 0; i < rawContacts.length; i += 1) {
        if (contacts.length >= poolTarget) break;
        const fallbackSourceUrl = sourceUrlHints.length ? sourceUrlHints[i % sourceUrlHints.length] : "";
        const normalized = normalizeHybridCandidateRecord_(rawContacts[i], fallbackSourceUrl);
        if (!normalized) continue;
        const candidateSourceUrl = normalizeWeb_(
          String(normalized.source_url || normalized.web || fallbackSourceUrl || "").trim()
        );
        const candidateEmail = isValidEmail_(normalized.email) ? String(normalized.email || "").trim().toLowerCase() : "";
        if (!candidateSourceUrl && !candidateEmail) continue;
        if (candidateEmail && APP_CONFIG.hybridExcludeSeenEmailsAtSource === true && seenEmailMap[candidateEmail]) continue;

        normalized.source_url = candidateSourceUrl || normalized.source_url || "";
        normalized.web = normalizeWeb_(String(normalized.web || candidateSourceUrl || "").trim());
        normalized.email = candidateEmail;
        normalized.empresa = normalizeCompanyName_(String(normalized.empresa || "").trim()) || "";

        const domainHint = normalized.dominio_web_generico || getDomain_(normalized.web || normalized.source_url || "");
        const rootDomain = getHybridCandidateRootDomain_(normalized);
        if (rootDomain && blockedDomainSet[rootDomain]) continue;
        if (rootDomain) {
          const used = Number(perDomainCount[rootDomain] || 0);
          if (used >= perDomainCap) continue;
        }

        const candidateName = normalizeCandidateName(
          String(normalized.nombre_contacto || normalized.contacto || "").trim(),
          candidateEmail,
          normalized.empresa,
          domainHint
        );
        normalized.nombre_contacto = candidateName || "";
        normalized.contacto = candidateName || "";

        const dedupeKey = [
          candidateEmail,
          normalized.source_url || normalized.web || "",
          normalized.empresa || "",
          normalized.nombre_contacto || ""
        ].join("|").trim();
        const key = dedupeKey || hashText_(JSON.stringify(normalized));
        if (seenContactKeys[key]) continue;
        seenContactKeys[key] = true;
        contacts.push(normalized);
        if (rootDomain) {
          perDomainCount[rootDomain] = Number(perDomainCount[rootDomain] || 0) + 1;
        }
      }
    } catch (err) {
      lastError = formatErrorForLog_(err);
      if (qi === 0) throw err;
    }

    if (contacts.length >= desired && Object.keys(perDomainCount).length >= minUniqueDomainsGoal) break;
  }

  if (!contacts.length && lastError) {
    throw new Error(`Hybrid scraper sin respuesta valida (${lastError})`);
  }
  if (relaxedDomainSuppression) {
    diagnosticsMerged.domain_suppression_relaxed = Number(diagnosticsMerged.domain_suppression_relaxed || 0) + 1;
  }

  return {
    contacts: contacts,
    sourceCandidatesCount: contacts.length,
    webSearchQueriesCount: Math.max(0, totalQueriesUsed, totalSourceLinks),
    source: sourceEngine,
    meta: {
      queriesUsed: Math.max(0, totalQueriesUsed),
      sourceLinks: Math.max(0, totalSourceLinks),
      sourceUrlsSample: sourceUrlHintsGlobal.slice(0, 30),
      pagesFetched: Math.max(0, totalPagesFetched),
      expandedPagesFetched: Math.max(0, totalExpandedPagesFetched),
      ollamaModelUsed: String(ollamaModelUsed || "").trim(),
      diagnostics: diagnosticsMerged
    }
  };
}

function extractHybridSourceUrlHints_(parsedPayload, parsedMeta) {
  const out = [];
  const seen = {};
  const add = (value) => {
    const normalized = normalizeWeb_(String(value || "").trim());
    if (!normalized || seen[normalized]) return;
    if (isLikelyAssetUrl_(normalized)) return;
    seen[normalized] = true;
    out.push(normalized);
  };
  const meta = (parsedMeta && typeof parsedMeta === "object") ? parsedMeta : {};
  const payload = (parsedPayload && typeof parsedPayload === "object") ? parsedPayload : {};
  const fromMeta = Array.isArray(meta.sourceUrlsSample) ? meta.sourceUrlsSample : [];
  const fromPayload = Array.isArray(payload.sourceUrlsSample) ? payload.sourceUrlsSample : [];
  const fromLinks = Array.isArray(payload.source_links)
    ? payload.source_links
    : (Array.isArray(payload.links) ? payload.links : []);

  for (let i = 0; i < fromMeta.length; i += 1) add(fromMeta[i]);
  for (let i = 0; i < fromPayload.length; i += 1) add(fromPayload[i]);
  for (let i = 0; i < fromLinks.length; i += 1) add(fromLinks[i]);
  return out;
}

function normalizeHybridCandidateRecord_(rawRecord, fallbackSourceUrl) {
  const rec = rawRecord || {};
  const fallback = normalizeWeb_(String(fallbackSourceUrl || "").trim());
  const sourceUrl = pickSourceUrl_(rec) || normalizeWeb_(String(rec.source || rec.url || rec.origin || "").trim()) || fallback;
  const email = String(rec.email || rec.mail || rec.correo || "").trim().toLowerCase();
  const name = String(rec.nombre_contacto || rec.contacto || rec.full_name || rec.nombre || rec.persona || "").trim();
  const company = String(rec.empresa || rec.company || rec.medio || rec.entity || "").trim();
  const cargo = String(rec.cargo || rec.role || rec.puesto || "").trim();
  const description = String(rec.descripcion_medio_empresa || rec.description || rec.descripcion || rec.company_description || "").trim();
  const functionRole = String(rec.funcion_cargo || rec.function_role || rec.responsabilidades || rec.role_function || "").trim();
  const phone = String(rec.telefono || rec.phone || rec.mobile || "").trim();
  const web = normalizeWeb_(String(rec.web || rec.website || rec.site || sourceUrl || "").trim());
  const domain = normalizeDomainGeneric_(String(rec.dominio_web_generico || rec.domain || "").trim()) || normalizeDomainGeneric_(web);
  if (!sourceUrl && !web) return null;

  return {
    empresa: company,
    nombre_contacto: name,
    contacto: name,
    descripcion_medio_empresa: description,
    cargo: cargo,
    funcion_cargo: functionRole,
    email: email,
    telefono: phone,
    web: web,
    dominio_web_generico: domain,
    source_url: sourceUrl || web,
    source_title: String(rec.source_title || rec.title || rec.fuente || "").trim(),
    source_snippet: String(rec.source_snippet || rec.snippet || rec.summary || "").trim(),
    fuente: String(rec.fuente || rec.source_name || "Hybrid Selenium Scraper").trim(),
    notas: String(rec.notas || rec.notes || "").trim()
  };
}

function callGeminiGenerateWithRetries_(url, payloadObj) {
  const maxAttempts = Math.max(1, Number(APP_CONFIG.geminiGenerateMaxAttempts || 3));
  const retryBaseMs = Math.max(250, Number(APP_CONFIG.geminiGenerateRetryBaseMs || 1200));
  const retryMaxMs = Math.max(retryBaseMs, Number(APP_CONFIG.geminiGenerateRetryMaxMs || 7000));
  const payload = JSON.stringify(payloadObj || {});
  let lastError = "sin detalle";

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    let resp = null;
    try {
      resp = UrlFetchApp.fetch(url, {
        method: "post",
        contentType: "application/json",
        muteHttpExceptions: true,
        payload: payload
      });
    } catch (err) {
      lastError = formatErrorForLog_(err);
      const retryableNetwork = isLikelyTimeoutError_(lastError) || /service invoked too many times/i.test(lastError);
      if (retryableNetwork && attempt < maxAttempts) {
        const waitMs = Math.min(retryMaxMs, retryBaseMs * Math.pow(2, attempt - 1));
        Utilities.sleep(waitMs);
        continue;
      }
      throw new Error(`Gemini fallo tras ${attempt} intento(s): ${lastError}`);
    }

    const code = Number(resp.getResponseCode() || 0);
    if (code >= 200 && code < 300) {
      return resp;
    }

    const bodyText = String(resp.getContentText() || "").trim();
    lastError = `HTTP ${code}: ${truncateForLog_(bodyText, 180)}`;
    if (shouldRetryGeminiHttpCode_(code) && attempt < maxAttempts) {
      const waitMs = Math.min(retryMaxMs, retryBaseMs * Math.pow(2, attempt - 1));
      Utilities.sleep(waitMs);
      continue;
    }
    throw new Error(`Gemini no respondio correctamente (${lastError})`);
  }

  throw new Error(`Gemini no respondio tras ${maxAttempts} intentos (${lastError}).`);
}

function shouldRetryGeminiHttpCode_(code) {
  const num = Number(code || 0);
  const list = Array.isArray(APP_CONFIG.geminiRetryableHttpCodes) ? APP_CONFIG.geminiRetryableHttpCodes : [];
  return list.indexOf(num) >= 0;
}

function isLikelyTimeoutError_(message) {
  const msg = String(message || "").toLowerCase();
  if (!msg) return false;
  return msg.indexOf("tiempo de espera") >= 0
    || msg.indexOf("timed out") >= 0
    || msg.indexOf("deadline") >= 0
    || msg.indexOf("socket timeout") >= 0
    || msg.indexOf("connection reset") >= 0
    || msg.indexOf("temporarily unavailable") >= 0;
}

function truncateForLog_(text, maxLen) {
  const value = String(text || "");
  const limit = Math.max(20, Number(maxLen || 180));
  if (value.length <= limit) return value;
  return `${value.slice(0, limit)}...`;
}

function formatErrorForLog_(err) {
  const raw = err && err.message ? String(err.message) : String(err || "error desconocido");
  return truncateForLog_(raw.replace(/\s+/g, " ").trim(), 220);
}

function parseJsonSafely_(text) {
  const raw = String(text || "").trim();
  if (!raw) return {};

  let clean = raw
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  try {
    return JSON.parse(clean);
  } catch (err) {
    const firstObj = clean.indexOf("{");
    const lastObj = clean.lastIndexOf("}");
    if (firstObj >= 0 && lastObj > firstObj) {
      const sub = clean.slice(firstObj, lastObj + 1);
      try {
        return JSON.parse(sub);
      } catch (e2) {
        return {};
      }
    }
    return {};
  }
}

function verifyContactsWithWebSource_(contacts, state, queryVariant, desired) {
  const candidates = Array.isArray(contacts) ? contacts : [];
  const desiredContacts = Math.max(1, Number(desired || 1));
  const profileCfg = (state && state.profileConfig && typeof state.profileConfig === "object") ? state.profileConfig : {};
  const maxToProcessLimit = Math.max(1, Number(profileCfg.maxSourcePagesPerStep || APP_CONFIG.maxSourcePagesPerStep || 24));
  const dynamicProcessCap = Math.max(desiredContacts * 4, desiredContacts + 8);
  const maxToProcess = Math.min(candidates.length, maxToProcessLimit, dynamicProcessCap);
  const suppressedDomains = getSuppressedDomainsForStale_(state);
  const suppressedDomainSet = {};
  for (let sd = 0; sd < suppressedDomains.length; sd += 1) {
    const root = String(suppressedDomains[sd] || "").trim().toLowerCase();
    if (root) suppressedDomainSet[root] = true;
  }
  const opts = state && state.searchOptions ? state.searchOptions : {};
  const allowPhoneCollection = opts.allowPhoneCollection === true;
  const disallowGenericMailboxEmails = opts.disallowGenericMailboxEmails === true;
  const strictEmailAuditEnabled = profileCfg.strictEmailAuditEnabled !== false && APP_CONFIG.strictEmailAuditEnabled !== false;
  const allowRoleMailboxEmails = profileCfg.allowRoleMailboxEmails === true;
  const enforceNameEmailCoherence = APP_CONFIG.strictNameEmailCoherence === true && profileCfg.allowLooseNameEmailCoherence !== true;
  const ignoreQualityLock = profileCfg.ignoreQualityLock === true;
  const seenEmailMap = {};
  const priorEmails = Array.isArray(state && state.seenEmails) ? state.seenEmails : [];
  for (let ei = 0; ei < priorEmails.length; ei += 1) {
    const email = String(priorEmails[ei] || "").trim().toLowerCase();
    if (!isValidEmail_(email)) continue;
    seenEmailMap[email] = true;
  }
  const strictPairRequired = APP_CONFIG.strictRequireEmailAndPhone === true;
  const requireEmail = strictPairRequired ? (state.strictRequireEmailOnWeb !== false) : false;
  const requirePhone = strictPairRequired ? (state.strictRequirePhoneOnWeb !== false) : false;
  const strictNameRequired = state.strictRequireContactNameOnWeb === true;
  const strictCompanyRequired = state.strictRequireCompanyOnWeb === true;
  const targetCountNow = Math.max(0, Number(state.targetCount || 0));
  const staleRoundsNow = Math.max(0, Number(state.staleRounds || 0));
  const highVolumeMode = targetCountNow >= Math.max(200, Number(APP_CONFIG.highVolumeTargetThreshold || 1000));
  const relaxNameInHighVolume = highVolumeMode
    && staleRoundsNow >= Math.max(0, Number(APP_CONFIG.highVolumeRelaxNameAfterStaleRounds || 6));
  const allowLowSignalSourceInHighVolume = highVolumeMode && APP_CONFIG.highVolumeAllowLowSignalSourcePage === true;
  const highVolumeWebChecksFloor = Math.max(2, Number(APP_CONFIG.highVolumeMinWebChecksFloor || 3));
  const effectiveStrictNameRequired = strictNameRequired && !relaxNameInHighVolume;
  const effectiveStrictCompanyRequired = strictCompanyRequired;
  const requiredChecksFloor = ignoreQualityLock ? 2 : 3;
  const requiredChecksBase = Math.max(
    requiredChecksFloor,
    ignoreQualityLock ? 0 : getQualityMinWebChecks_(),
    Number(profileCfg.minWebChecksRequired || APP_CONFIG.minWebChecksRequired || requiredChecksFloor)
  );
  const strictRequiredCount = (requireEmail ? 1 : 0)
    + (requirePhone ? 1 : 0)
    + (effectiveStrictNameRequired ? 1 : 0)
    + (effectiveStrictCompanyRequired ? 1 : 0);
  let requiredChecks = computeRequiredChecksByStrictColumns_(requiredChecksBase, strictRequiredCount, 0);
  const verifiedContacts = [];
  const diagnosticLogs = [];
  const maxDiagnosticLogs = Math.max(4, Number(APP_CONFIG.maxStepDiagnosticLogs || 10));
  let fetchedPages = 0;
  let withSource = 0;
  let droppedNoSource = 0;
  let droppedInvalidSource = 0;
  let droppedFetchError = 0;
  let droppedUnverified = 0;
  let droppedMissingEmail = 0;
  let droppedMissingPhone = 0;
  let droppedMissingName = 0;
  let droppedMissingCompany = 0;
  let droppedGenericEmail = 0;
  let droppedEmailAudit = 0;
  let droppedDuplicateEmail = 0;
  let droppedChecks = 0;
  let droppedSuppressedDomain = 0;
  let sourcePageCacheHits = 0;
  let sourcePageFetchCalls = 0;
  const sourcePageCache = {};

  const getSourcePageWithCache = (pageUrl) => {
    const normalizedUrl = normalizeWeb_(String(pageUrl || "").trim());
    if (!normalizedUrl) return { ok: false, rawHtml: "", text: "" };
    if (Object.prototype.hasOwnProperty.call(sourcePageCache, normalizedUrl)) {
      sourcePageCacheHits += 1;
      return sourcePageCache[normalizedUrl];
    }
    sourcePageFetchCalls += 1;
    const fetched = fetchSourcePageText_(normalizedUrl);
    sourcePageCache[normalizedUrl] = fetched;
    return fetched;
  };

  const addDiagnostic = (msg) => {
    if (diagnosticLogs.length >= maxDiagnosticLogs) return;
    diagnosticLogs.push(msg);
  };
  if (relaxNameInHighVolume) {
    addDiagnostic(
      `Modo alto volumen activo: se relaja requisito estricto de nombre tras ${staleRoundsNow} pasos sin avance para priorizar caudal de emails validos.`
    );
  }

  for (let i = 0; i < maxToProcess; i += 1) {
    if (verifiedContacts.length >= desiredContacts) break;

    const rec = candidates[i] || {};
    const recLabel = String(
      rec.empresa || rec.nombre_contacto || rec.contacto || rec.source_title || rec.web || `candidato_${i + 1}`
    ).trim();
    const sourceUrl = pickSourceUrl_(rec);
    if (!sourceUrl) {
      droppedNoSource += 1;
      addDiagnostic(`Descartado "${recLabel}": sin URL publica de origen.`);
      continue;
    }
    if (isLikelyAssetUrl_(sourceUrl)) {
      droppedInvalidSource += 1;
      droppedUnverified += 1;
      addDiagnostic(`Descartado "${recLabel}": URL origen es archivo tecnico (${sourceUrl}).`);
      continue;
    }
    const sourceRootDomain = getRootDomain_(sourceUrl);
    if (sourceRootDomain && suppressedDomainSet[sourceRootDomain]) {
      droppedSuppressedDomain += 1;
      droppedUnverified += 1;
      addDiagnostic(`Descartado "${recLabel}": dominio temporalmente excluido por anti-bucle (${sourceRootDomain}).`);
      continue;
    }
    const lowQualityByUrl = isLowQualitySourceUrl_(sourceUrl);
    if (lowQualityByUrl) {
      addDiagnostic(`Aviso "${recLabel}": URL potencialmente generica (${sourceUrl}); se evalua por contenido real.`);
    }
    withSource += 1;

    const sourcePage = getSourcePageWithCache(sourceUrl);
    if (!sourcePage.ok) {
      droppedUnverified += 1;
      droppedFetchError += 1;
      addDiagnostic(`Descartado "${recLabel}": no se pudo leer la web origen.`);
      continue;
    }
    const lowSignalByContent = isLowSignalSourcePage_(sourceUrl, sourcePage.rawHtml, sourcePage.text);
    if (lowSignalByContent && !allowLowSignalSourceInHighVolume) {
      droppedInvalidSource += 1;
      droppedUnverified += 1;
      addDiagnostic(`Descartado "${recLabel}": pagina de origen generica o de listados sin calidad de contacto directo.`);
      continue;
    }
    if (lowSignalByContent && allowLowSignalSourceInHighVolume) {
      addDiagnostic(`Aviso "${recLabel}": pagina de origen generica/listado; se mantiene por modo alto volumen.`);
    }
    fetchedPages += 1;

    const pages = [{
      url: sourceUrl,
      rawHtml: sourcePage.rawHtml,
      text: sourcePage.text
    }];

    const candidateEmail = String(rec.email || "").trim().toLowerCase();
    const candidateEmailValid = isValidEmail_(candidateEmail);
    const candidateEmailRoot = candidateEmailValid ? getRootDomain_(String(candidateEmail.split("@")[1] || "")) : "";
    if (candidateEmailRoot && suppressedDomainSet[candidateEmailRoot]) {
      droppedSuppressedDomain += 1;
      droppedUnverified += 1;
      addDiagnostic(`Descartado "${recLabel}": email de dominio suprimido temporalmente (${candidateEmailRoot}).`);
      continue;
    }
    const candidatePhone = allowPhoneCollection ? normalizePhone_(String(rec.telefono || ""), state.scope) : "";
    const collectEvidenceFromPages = () => {
      const detectedEmailsLocal = [];
      const emailSetLocal = {};
      const detectedPhonesLocal = [];
      const phoneSetLocal = {};

      for (let pg = 0; pg < pages.length; pg += 1) {
        const page = pages[pg];
        const pageEmails = extractEmailCandidates_(page.rawHtml, page.text);
        for (let e = 0; e < pageEmails.length; e += 1) {
          const email = pageEmails[e];
          if (!emailSetLocal[email]) {
            emailSetLocal[email] = true;
            detectedEmailsLocal.push(email);
          }
        }
        if (allowPhoneCollection) {
          const pagePhones = extractPhoneCandidates_(page.rawHtml, page.text, state.scope);
          for (let p = 0; p < pagePhones.length; p += 1) {
            const phone = pagePhones[p];
            const key = phoneDigitsKey_(phone);
            if (!key || phoneSetLocal[key]) continue;
            phoneSetLocal[key] = phone;
            detectedPhonesLocal.push(phone);
          }
        }
      }

      const candidateEmailVerified = (candidateEmailValid && candidateEmail && emailSetLocal[candidateEmail]) ? candidateEmail : "";
      const evidenceEmailLocal = pickBestEmailEvidence_(
        candidateEmailVerified,
        detectedEmailsLocal,
        disallowGenericMailboxEmails,
        rec,
        sourceUrl,
        pages,
        allowRoleMailboxEmails
      );
      const evidencePhoneLocal = allowPhoneCollection ? findBestPhoneEvidence_(candidatePhone, detectedPhonesLocal, phoneSetLocal) : "";
      const nameEvidenceLocal = findBestContactNameEvidence_(rec, pages, evidenceEmailLocal, sourceUrl);
      const evidenceNameLocal = String(nameEvidenceLocal.name || "").trim();
      const companyEvidenceLocal = findBestCompanyEvidence_(rec, pages, sourceUrl);
      const evidenceCompanyLocal = String(companyEvidenceLocal.company || "").trim();
      const emailAuditLocal = auditEmailEvidenceStrict_(evidenceEmailLocal, rec, pages, sourceUrl, state);

      return {
        detectedEmails: detectedEmailsLocal,
        emailSet: emailSetLocal,
        detectedPhones: detectedPhonesLocal,
        phoneSet: phoneSetLocal,
        evidenceEmail: evidenceEmailLocal,
        evidencePhone: evidencePhoneLocal,
        nameEvidence: nameEvidenceLocal,
        evidenceName: evidenceNameLocal,
        companyEvidence: companyEvidenceLocal,
        evidenceCompany: evidenceCompanyLocal,
        emailAudit: emailAuditLocal
      };
    };

    const isStrictReadyWithBundle = (bundle) => {
      const b = bundle || {};
      const emailReady = !requireEmail || (!!b.evidenceEmail && (!strictEmailAuditEnabled || (b.emailAudit && b.emailAudit.ok)));
      const phoneReady = !requirePhone || !!b.evidencePhone;
      const nameReady = !effectiveStrictNameRequired || !!b.evidenceName;
      const companyReady = !effectiveStrictCompanyRequired || !!b.evidenceCompany;
      return emailReady && phoneReady && nameReady && companyReady;
    };

    let evidenceBundle = collectEvidenceFromPages();

    const extraUrls = buildSupplementaryUrlsForCandidate_(rec, sourceUrl, sourcePage.rawHtml);
    const extraLimit = Math.max(0, Number(profileCfg.maxExtraPagesPerCandidate || APP_CONFIG.maxExtraPagesPerCandidate || 0));
    const fastShortCircuit = APP_CONFIG.fastModeEnabled === true && APP_CONFIG.fastModeSkipExtraPagesIfStrictReady === true;
    let extraFetched = 0;
    let strictReadyNow = isStrictReadyWithBundle(evidenceBundle);
    for (let eu = 0; eu < extraUrls.length; eu += 1) {
      if (extraFetched >= extraLimit) break;
      if (fastShortCircuit && strictReadyNow) break;
      const extraUrl = extraUrls[eu];
      const extraPage = getSourcePageWithCache(extraUrl);
      if (!extraPage.ok) continue;
      pages.push({
        url: extraUrl,
        rawHtml: extraPage.rawHtml,
        text: extraPage.text
      });
      extraFetched += 1;
      fetchedPages += 1;
      evidenceBundle = collectEvidenceFromPages();
      strictReadyNow = isStrictReadyWithBundle(evidenceBundle);
    }

    const detectedEmails = evidenceBundle.detectedEmails;
    const detectedPhones = evidenceBundle.detectedPhones;
    const phoneSet = evidenceBundle.phoneSet;
    const evidenceEmail = evidenceBundle.evidenceEmail;
    const evidencePhone = evidenceBundle.evidencePhone;
    const nameEvidence = evidenceBundle.nameEvidence;
    const companyEvidence = evidenceBundle.companyEvidence;
    const evidenceCompany = evidenceBundle.evidenceCompany;
    let evidenceName = evidenceBundle.evidenceName;
    if (
      !evidenceName
      && APP_CONFIG.allowSingleNameFromEmailFallback === true
      && evidenceEmail
    ) {
      const fallbackSingleName = guessSingleNameFromEmailLocal_(evidenceEmail);
      if (isSingleTokenNameAllowedByEmail_(fallbackSingleName, evidenceEmail, evidenceCompany || rec.empresa || "", sourceUrl)) {
        evidenceName = fallbackSingleName;
      }
    }
    if (!evidenceName && evidenceEmail) {
      const fallbackRoleContact = buildRoleBasedContactFallbackLabel_(
        evidenceEmail,
        evidenceCompany || rec.empresa || "",
        sourceUrl
      );
      if (fallbackRoleContact) {
        evidenceName = fallbackRoleContact;
      }
    }
    if (
      evidenceName
      && evidenceEmail
      && !isRoleBasedContactLabel_(evidenceName)
      && !isNameConsistentWithEmailLocal_(evidenceName, evidenceEmail)
    ) {
      const repairedByEmail = normalizePersonName_(
        String(
          guessContactNameFromEmail_(evidenceEmail)
          || guessSingleNameFromEmailLocal_(evidenceEmail)
          || ""
        ).trim()
      );
      const repairedAllowed =
        !!repairedByEmail
        && (
          looksLikePersonName_(repairedByEmail, evidenceCompany || rec.empresa || "", sourceUrl)
          || isSingleTokenNameAllowedByEmail_(repairedByEmail, evidenceEmail, evidenceCompany || rec.empresa || "", sourceUrl)
          || isNameConsistentWithEmailLocal_(repairedByEmail, evidenceEmail)
        );
      if (repairedAllowed) {
        evidenceName = repairedByEmail;
        addDiagnostic(`Ajustado "${recLabel}": nombre corregido por coherencia email (${evidenceName}).`);
      } else if (!effectiveStrictNameRequired) {
        evidenceName = "";
        addDiagnostic(`Ajustado "${recLabel}": nombre incoherente eliminado para evitar dato erróneo.`);
      }
    }
    const emailAudit = evidenceBundle.emailAudit;
    const evidenceEmailKey = isValidEmail_(evidenceEmail) ? String(evidenceEmail || "").trim().toLowerCase() : "";
    if (evidenceEmailKey && seenEmailMap[evidenceEmailKey]) {
      droppedUnverified += 1;
      droppedDuplicateEmail += 1;
      addDiagnostic(`Descartado "${recLabel}": email duplicado en busqueda (${evidenceEmailKey}).`);
      continue;
    }

    if (disallowGenericMailboxEmails && !evidenceEmail && detectedEmails.length) {
      droppedUnverified += 1;
      droppedMissingEmail += 1;
      droppedGenericEmail += 1;
      addDiagnostic(`Descartado "${recLabel}": solo emails genericos en web publica.`);
      continue;
    }

    if (strictEmailAuditEnabled && requireEmail && !emailAudit.ok) {
      droppedUnverified += 1;
      droppedMissingEmail += 1;
      droppedEmailAudit += 1;
      addDiagnostic(`Descartado "${recLabel}": auditoria email estricta no superada (${emailAudit.summary}).`);
      continue;
    }

    const checks = [
      { id: "source_url_publica", ok: !isLikelyAssetUrl_(sourceUrl) },
      { id: "fetch_html_ok", ok: true }
    ];
    if (requireEmail) {
      checks.push({ id: "email_en_web", ok: !!evidenceEmail });
      checks.push({ id: "email_formato_valido", ok: !!evidenceEmail && isValidEmail_(evidenceEmail) });
      if (strictEmailAuditEnabled) {
        checks.push({ id: "email_auditoria_profunda", ok: emailAudit.ok });
      }
    }
    if (requirePhone) {
      checks.push({ id: "telefono_en_web", ok: !!evidencePhone });
    }
    if (effectiveStrictNameRequired) {
      checks.push({ id: "nombre_contacto_en_web", ok: !!evidenceName });
      checks.push({
        id: "nombre_email_coherente",
        ok: !enforceNameEmailCoherence
          || !evidenceEmail
          || !evidenceName
          || isRoleBasedContactLabel_(evidenceName)
          || isNameConsistentWithEmailLocal_(evidenceName, evidenceEmail)
      });
    }
    if (effectiveStrictCompanyRequired) {
      checks.push({ id: "empresa_en_web", ok: !!evidenceCompany });
    }
    checks.push({
      id: "algun_dato_publico_en_web",
      ok: !!(evidenceEmail || evidencePhone || evidenceName || evidenceCompany)
    });
    const checksPassed = checks.filter((c) => c.ok).length;
    const checksTotal = checks.length;
    requiredChecks = computeRequiredChecksByStrictColumns_(requiredChecksBase, strictRequiredCount, checksTotal);
    if (lowQualityByUrl || lowSignalByContent) {
      requiredChecks = Math.min(checksTotal, requiredChecks + 1);
    }
    if (highVolumeMode) {
      requiredChecks = Math.max(2, Math.min(requiredChecks, highVolumeWebChecksFloor));
    }

    if (strictPairRequired) {
      if (requireEmail && !evidenceEmail) {
        droppedUnverified += 1;
        droppedMissingEmail += 1;
        addDiagnostic(`Descartado "${recLabel}": falta email verificado en web.`);
        continue;
      }
      if (requirePhone && !evidencePhone) {
        droppedUnverified += 1;
        droppedMissingPhone += 1;
        addDiagnostic(`Descartado "${recLabel}": falta telefono verificado en web.`);
        continue;
      }
    } else if (!evidenceEmail && !evidencePhone) {
      droppedUnverified += 1;
      addDiagnostic(`Descartado "${recLabel}": sin email ni telefono verificables.`);
      continue;
    }
    if (effectiveStrictNameRequired && !evidenceName) {
      droppedUnverified += 1;
      droppedMissingName += 1;
      addDiagnostic(`Descartado "${recLabel}": falta nombre de contacto verificable.`);
      continue;
    }
    if (
      effectiveStrictNameRequired
      && enforceNameEmailCoherence
      && evidenceName
      && evidenceEmail
      && !isRoleBasedContactLabel_(evidenceName)
      && !isNameConsistentWithEmailLocal_(evidenceName, evidenceEmail)
    ) {
      droppedUnverified += 1;
      droppedMissingName += 1;
      addDiagnostic(`Descartado "${recLabel}": nombre y email sin coherencia directa (${evidenceName} / ${evidenceEmail}).`);
      continue;
    }
    if (effectiveStrictCompanyRequired && !evidenceCompany) {
      droppedUnverified += 1;
      droppedMissingCompany += 1;
      addDiagnostic(`Descartado "${recLabel}": falta empresa verificable en web.`);
      continue;
    }
    if (checksPassed < requiredChecks) {
      droppedUnverified += 1;
      droppedChecks += 1;
      addDiagnostic(`Descartado "${recLabel}": checks ${checksPassed}/${checksTotal}, minimo ${requiredChecks}.`);
      continue;
    }

    const resolvedDescription = resolveDescriptionField_(
      rec,
      pages,
      evidenceCompany || normalizeCompanyName_(String(rec.empresa || "").trim()),
      sourceUrl
    );
    const resolvedFunction = resolveRoleFunctionField_(
      rec,
      pages,
      String(rec.cargo || rec.puesto || rec.rol || "").trim(),
      evidenceName || String(rec.nombre_contacto || rec.contacto || "").trim(),
      evidenceCompany || normalizeCompanyName_(String(rec.empresa || "").trim()),
      resolvedDescription
    );

    const verified = {
      empresa: evidenceCompany || normalizeCompanyName_(String(rec.empresa || "").trim()),
      nombre_contacto: evidenceName || "",
      contacto: evidenceName || "",
      descripcion_medio_empresa: resolvedDescription,
      cargo: String(rec.cargo || rec.puesto || rec.rol || "").trim(),
      funcion_cargo: resolvedFunction,
      email: evidenceEmail || "",
      telefono: evidencePhone || "",
      web: normalizeWeb_(String(rec.web || "")) || normalizeWeb_(sourceUrl),
      dominio_web_generico: normalizeDomainGeneric_(String(rec.dominio_web_generico || rec.dominio || "").trim()) || normalizeDomainGeneric_(normalizeWeb_(String(rec.web || "")) || normalizeWeb_(sourceUrl)),
      linkedin: normalizeWeb_(String(rec.linkedin || rec.linkedin_url || pickSocialUrlFromPages_(pages, "linkedin") || "").trim()),
      instagram: normalizeWeb_(String(rec.instagram || rec.instagram_url || pickSocialUrlFromPages_(pages, "instagram") || "").trim()),
      youtube: normalizeWeb_(String(rec.youtube || rec.youtube_url || pickSocialUrlFromPages_(pages, "youtube") || "").trim()),
      tiktok: normalizeWeb_(String(rec.tiktok || rec.tiktok_url || pickSocialUrlFromPages_(pages, "tiktok") || "").trim()),
      x_url: normalizeWeb_(String(rec.x_url || rec.x || rec.twitter || rec.twitter_url || pickSocialUrlFromPages_(pages, "x") || "").trim()),
      tipo_contenido: String(rec.tipo_contenido || rec.contenido || rec.nicho || "").trim(),
      ciudad: String(rec.ciudad || "").trim(),
      provincia: String(rec.provincia || "").trim(),
      pais: String(rec.pais || "").trim(),
      fuente: String(rec.fuente || "").trim() || String(rec.source_title || "").trim() || "Extraccion web verificada",
      notas: String(rec.notas || "").trim(),
      _trace: {
        sourceUrl: sourceUrl,
        sourceText: String(rec.source_title || rec.fuente || "").trim(),
        verification: `verificado_web_${checksPassed}de${checksTotal}_min${requiredChecks}`,
        evidenceEmail: evidenceEmail || "",
        evidencePhone: evidencePhone || "",
        evidenceContactName: evidenceName || "",
        evidenceCompany: evidenceCompany || "",
        emailAuditSummary: emailAudit.summary || "",
        emailAuditChecks: `${emailAudit.checksPassed || 0}/${emailAudit.checksTotal || 0}`,
        detectedEmailsCount: detectedEmails.length,
        detectedPhonesCount: detectedPhones.length,
        detectedNamesCount: Number(nameEvidence.candidatesCount || 0),
        detectedCompanyCandidatesCount: Number(companyEvidence.candidatesCount || 0),
        pagesConsultadas: pages.length,
        sourceType: classifySourceType_(sourceUrl),
        method: "web_search+social_search+urlfetch_regex+multipage_namecheck",
        checksPassed: checksPassed,
        checksTotal: checksTotal,
        checksRequired: requiredChecks,
        checksDetail: checks.map((c) => `${c.id}:${c.ok ? "ok" : "no"}`).join("|")
      }
    };

    verifiedContacts.push(verified);
    if (evidenceEmailKey) {
      seenEmailMap[evidenceEmailKey] = true;
    }
    addDiagnostic(
      `Validado "${recLabel}": nombre=${evidenceName || "n/a"} | email=${evidenceEmail || "n/a"} | telefono=${evidencePhone || "n/a"} | paginas=${pages.length}`
    );
  }

  return {
    verifiedContacts: verifiedContacts,
    candidatesProcessed: maxToProcess,
    withSource: withSource,
    fetchedPages: fetchedPages,
    droppedNoSource: droppedNoSource,
    droppedInvalidSource: droppedInvalidSource,
    droppedFetchError: droppedFetchError,
    droppedUnverified: droppedUnverified,
    droppedMissingEmail: droppedMissingEmail,
    droppedMissingPhone: droppedMissingPhone,
    droppedMissingName: droppedMissingName,
    droppedMissingCompany: droppedMissingCompany,
    droppedGenericEmail: droppedGenericEmail,
    droppedEmailAudit: droppedEmailAudit,
    droppedDuplicateEmail: droppedDuplicateEmail,
    droppedChecks: droppedChecks,
    droppedSuppressedDomain: droppedSuppressedDomain,
    sourcePageCacheHits: sourcePageCacheHits,
    sourcePageFetchCalls: sourcePageFetchCalls,
    diagnosticLogs: diagnosticLogs,
    requiredChecks: requiredChecks
  };
}

function ensureHybridEndpointReachableOrThrow_(hybridConfig) {
  const cfg = (hybridConfig && typeof hybridConfig === "object") ? hybridConfig : {};
  const endpoint = String(cfg.endpoint || "").trim();
  if (!endpoint || !/^https?:\/\//i.test(endpoint)) {
    throw new Error("Endpoint hibrido no configurado o invalido.");
  }
  const healthUrl = buildHybridHealthUrl_(endpoint);
  const headers = {};
  if (cfg.hasToken && cfg.token) {
    headers.Authorization = `Bearer ${cfg.token}`;
  }
  try {
    const resp = UrlFetchApp.fetch(healthUrl, {
      method: "get",
      muteHttpExceptions: true,
      headers: headers,
      followRedirects: true,
      validateHttpsCertificates: true
    });
    const code = Number(resp.getResponseCode() || 0);
    if (code < 200 || code >= 300) {
      const body = truncateForLog_(String(resp.getContentText() || ""), 180);
      throw new Error(`Health check endpoint hibrido fallo (HTTP ${code}: ${body})`);
    }
  } catch (err) {
    const msg = formatErrorForLog_(err);
    throw new Error(`No se puede alcanzar el endpoint hibrido (${msg}).`);
  }
}

function isHybridEndpointUnavailableError_(message) {
  const lowered = String(message || "").toLowerCase();
  if (!lowered) return false;
  if (/http 50\d/.test(lowered)) return true;
  if (/bad gateway|gateway timeout|connectex|connection refused|timed out/.test(lowered)) return true;
  if (/unable to reach the origin service|cloudflared|sin respuesta valida/.test(lowered)) return true;
  return false;
}

function enforceLocalOnlyRuntimeOrThrow_(hybridConfig) {
  if (APP_CONFIG.localOnlyMode !== true) return;
  const cfg = (hybridConfig && typeof hybridConfig === "object") ? hybridConfig : {};
  const endpoint = String(cfg.endpoint || "").trim();
  if (!endpoint || !/^https?:\/\//i.test(endpoint)) {
    throw new Error("Modo local: endpoint hibrido invalido o vacio.");
  }
  if (APP_CONFIG.localOnlyRequireHybridToken === true && !(cfg.hasToken && cfg.token)) {
    throw new Error("Modo local: falta token del endpoint hibrido.");
  }

  if (!isLocalHybridEndpointAllowed_(endpoint)) {
    throw new Error("Modo local: endpoint no permitido. Usa endpoint local/tunel propio.");
  }

  const allowed = Array.isArray(APP_CONFIG.localOnlyAllowedRunnerEmails)
    ? APP_CONFIG.localOnlyAllowedRunnerEmails.map((v) => String(v || "").trim().toLowerCase()).filter((v) => v)
    : [];
  if (!allowed.length) return;
  let actor = "";
  try {
    actor = String(Session.getActiveUser().getEmail() || "").trim().toLowerCase();
  } catch (err) {
    actor = "";
  }
  if (!actor) return;
  if (allowed.indexOf(actor) < 0) {
    throw new Error(`Modo local: usuario no autorizado (${actor}).`);
  }
}

function isLocalHybridEndpointAllowed_(endpoint) {
  const value = String(endpoint || "").trim();
  if (!/^https?:\/\//i.test(value)) return false;
  const noProto = value.replace(/^https?:\/\//i, "");
  const slashIdx = noProto.indexOf("/");
  const hostPort = slashIdx >= 0 ? noProto.slice(0, slashIdx) : noProto;
  const host = String(hostPort || "").split(":")[0].trim().toLowerCase();
  if (!host) return false;
  if (host === "localhost" || host === "127.0.0.1") return true;
  if (host.endsWith(".trycloudflare.com")) return true;
  return false;
}

function pickSourceUrl_(rec) {
  if (!rec) return "";
  const candidates = [];
  addUrlCandidate_(candidates, rec.source_url);
  addUrlCandidate_(candidates, rec.web);
  addUrlCandidate_(candidates, rec.linkedin);
  addUrlCandidate_(candidates, rec.linkedin_url);
  addUrlCandidate_(candidates, rec.instagram);
  addUrlCandidate_(candidates, rec.instagram_url);
  addUrlCandidate_(candidates, rec.youtube);
  addUrlCandidate_(candidates, rec.youtube_url);
  addUrlCandidate_(candidates, rec.tiktok);
  addUrlCandidate_(candidates, rec.tiktok_url);
  addUrlCandidate_(candidates, rec.x_url);
  addUrlCandidate_(candidates, rec.x);
  addUrlCandidate_(candidates, rec.twitter);
  addUrlCandidate_(candidates, rec.twitter_url);
  addUrlCandidate_(candidates, extractFirstUrl_(String(rec.fuente || "")));
  addUrlCandidate_(candidates, extractFirstUrl_(String(rec.source_snippet || "")));

  const seen = {};
  for (let i = 0; i < candidates.length; i += 1) {
    const value = candidates[i];
    if (!value || seen[value]) continue;
    seen[value] = true;
    if (!isLikelyAssetUrl_(value)) return value;
  }
  return "";
}

function addUrlCandidate_(list, value) {
  const normalized = normalizeWeb_(String(value || "").trim());
  if (!normalized) return;
  list.push(normalized);
}

function isLikelyAssetUrl_(url) {
  const raw = String(url || "").trim().toLowerCase();
  if (!raw) return false;
  const noQuery = raw.split("?")[0].split("#")[0];
  return /\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?|avif|pdf|css|js|json|xml|woff2?|ttf|otf|eot|map|mp3|mp4|mov|avi|webm|zip|rar|7z)$/i.test(noQuery);
}

function getUrlPathForQuality_(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  try {
    const path = String(new URL(value).pathname || "").toLowerCase();
    return path.replace(/\/+/g, "/");
  } catch (err) {
    const noProto = value.replace(/^https?:\/\//i, "");
    const slash = noProto.indexOf("/");
    if (slash < 0) return "/";
    return `/${noProto.slice(slash + 1).toLowerCase()}`.replace(/\/+/g, "/");
  }
}

function isLowQualitySourceUrl_(url) {
  const value = String(url || "").trim().toLowerCase();
  if (!value) return true;
  const sourceType = classifySourceType_(value);
  if (sourceType !== "web") return false;
  const path = getUrlPathForQuality_(value);
  if (!path) return false;

  if (/\/(tablon|anuncios?|clasificados|directorio|directory|listado|listing|foro|forum|tag|tags|categoria|category|archivo|archive|feed|sitemap)(\/|$)/i.test(path)) return true;
  return false;
}

function isLowSignalSourcePage_(url, rawHtml, text) {
  const path = getUrlPathForQuality_(url);
  const lowQualityByPath = isLowQualitySourceUrl_(url);
  const title = extractTitleFromHtml_(rawHtml);
  const combined = `${String(title || "")} ${String(text || "").slice(0, 5000)}`.toLowerCase();
  const hasListingSignals = /(tablon|anuncios?|clasificados|directorio|directory|listado|listing|publica tu anuncio|publicar anuncio|anade anuncio|subir anuncio)/i.test(combined);
  const hasGenericContactSignals = /(contactos?|contacts?|ultimas noticias|opinion|opiniao|fotos y videos|fotos e videos|suscribete|assinaturas|suscripciones|newsletter|aviso legal|politica de privacidad|cookies)/i.test(combined);
  const hasProfessionalSignals = /(prensa|press|editor|redactor|periodista|a&r|booking|management|promotor|manager|comunicacion|agencia|representacion)/i.test(combined);
  const emails = extractEmailCandidates_(rawHtml, text);
  const hasDirectMailSignals = emails.some((email) => !isRoleLikeMailboxEmailStrict_(email));

  if (hasGenericContactSignals && !hasProfessionalSignals && !hasDirectMailSignals) return true;
  if (!hasListingSignals && !lowQualityByPath) return false;
  if (path && /\/(tablon|anuncios?|clasificados|directorio|directory|listado|listing)(\/|$)/i.test(path)) return true;
  if (lowQualityByPath && !hasProfessionalSignals && !hasDirectMailSignals) return true;
  return emails.length >= 3 && !hasDirectMailSignals;
}

function extractTitleFromHtml_(rawHtml) {
  const html = String(rawHtml || "");
  if (!html) return "";
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!m || !m[1]) return "";
  return stripHtmlForText_(String(m[1] || ""));
}

function classifySourceType_(url) {
  const value = String(url || "").toLowerCase();
  if (!value) return "web";
  if (/linkedin\.com/.test(value)) return "linkedin";
  if (/instagram\.com/.test(value)) return "instagram";
  if (/youtube\.com|youtu\.be/.test(value)) return "youtube";
  if (/tiktok\.com/.test(value)) return "tiktok";
  if (/twitter\.com|x\.com/.test(value)) return "x";
  return "web";
}

function pickSocialUrlFromPages_(pages, socialType) {
  const list = Array.isArray(pages) ? pages : [];
  const wanted = String(socialType || "").trim().toLowerCase();
  if (!wanted) return "";
  for (let i = 0; i < list.length; i += 1) {
    const page = list[i] || {};
    const url = normalizeWeb_(String(page.url || "").trim());
    if (!url) continue;
    if (classifySourceType_(url) === wanted) return url;
  }
  return "";
}

function buildSupplementaryUrlsForCandidate_(rec, sourceUrl, rawHtml) {
  const out = [];
  const seen = {};
  const source = normalizeWeb_(sourceUrl);

  const add = (value) => {
    const url = normalizeWeb_(String(value || "").trim());
    if (!url) return;
    if (url === source) return;
    if (isLikelyAssetUrl_(url)) return;
    if (seen[url]) return;
    seen[url] = true;
    out.push(url);
  };

  add(rec.web);
  add(rec.source_url);
  add(rec.linkedin || rec.linkedin_url);
  add(rec.instagram || rec.instagram_url);
  add(rec.youtube || rec.youtube_url);
  add(rec.tiktok || rec.tiktok_url);
  add(rec.x_url || rec.x || rec.twitter || rec.twitter_url);

  const links = extractCandidateLinksFromHtml_(rawHtml, source);
  const maxLinks = Math.max(1, Number(APP_CONFIG.maxExtraLinksFromSource || 20));
  for (let i = 0; i < links.length; i += 1) {
    if (out.length >= maxLinks) break;
    add(links[i]);
  }

  out.sort((a, b) => scoreSupplementaryUrl_(b) - scoreSupplementaryUrl_(a));
  return out.slice(0, maxLinks);
}

function extractCandidateLinksFromHtml_(rawHtml, baseUrl) {
  const html = String(rawHtml || "");
  if (!html) return [];
  const out = [];
  const seen = {};
  const regex = /href\s*=\s*["']([^"'#]+)["']/ig;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const href = String(match[1] || "").trim();
    if (!href) continue;
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const resolved = resolveUrlAgainstBase_(baseUrl, href);
    if (!resolved) continue;
    if (seen[resolved]) continue;
    seen[resolved] = true;
    if (!isInterestingContactUrl_(resolved)) continue;
    out.push(resolved);
  }
  return out;
}

function resolveUrlAgainstBase_(baseUrl, target) {
  const rawTarget = String(target || "").trim();
  if (!rawTarget) return "";
  if (/^https?:\/\//i.test(rawTarget)) return normalizeWeb_(rawTarget);
  if (!baseUrl) return "";
  try {
    const resolved = new URL(rawTarget, baseUrl).toString();
    return normalizeWeb_(resolved);
  } catch (err) {
    return "";
  }
}

function isInterestingContactUrl_(url) {
  const value = String(url || "").toLowerCase();
  if (!value) return false;
  if (classifySourceType_(value) !== "web") return true;
  return /(contact|contacto|about|sobre|equipo|team|staff|author|autor|press|prensa|booking|management|manager|bio|perfil|profile|influencer|creator|creador)/i.test(value);
}

function isLikelyProfileOrAuthorUrl_(url) {
  const value = normalizeWeb_(String(url || "").trim()).toLowerCase();
  if (!value) return false;
  const sourceType = classifySourceType_(value);
  if (sourceType !== "web") return true;
  return /\/(author|autor|perfil|profile|equipo|team|staff|in|about|bio)(\/|$)/i.test(value);
}

function scoreSupplementaryUrl_(url) {
  const value = String(url || "").toLowerCase();
  if (!value) return 0;
  let score = 0;
  const sourceType = classifySourceType_(value);
  if (sourceType === "linkedin") score += 240;
  if (sourceType === "instagram") score += 210;
  if (sourceType === "youtube") score += 200;
  if (sourceType === "tiktok") score += 200;
  if (sourceType === "x") score += 190;
  if (/\/(contact|contacto)(\/|$)/i.test(value)) score += 160;
  if (/\/(about|sobre|equipo|team|staff|author|autor|press|prensa|booking|management|bio|perfil|profile)(\/|$)/i.test(value)) score += 120;
  if (/\/in\//i.test(value)) score += 90;
  return score;
}

function findBestContactNameEvidence_(rec, pages, evidenceEmail, sourceUrl) {
  const input = rec || {};
  const pageList = Array.isArray(pages) ? pages : [];
  const company = String(input.empresa || "").trim();
  const domainHint = getDomain_(normalizeWeb_(String(input.web || "")) || normalizeWeb_(sourceUrl) || "");
  const allowLooseTextNames = APP_CONFIG.allowLooseTextNameCandidates === true;
  const candidates = [];
  const map = {};

  const add = (rawName, score, source, options) => {
    const opts = options || {};
    const allowSingleToken = opts.allowSingleToken === true;
    const normalized = normalizePersonName_(rawName);
    if (!normalized) return;
    if (!looksLikePersonName_(normalized, company, domainHint)) {
      if (!allowSingleToken || !isSingleTokenNameAllowedByEmail_(normalized, evidenceEmail, company, domainHint)) return;
    }
    const key = normalized.toLowerCase();
    if (!map[key] || score > map[key].score) {
      map[key] = { name: normalized, score: score, source: source };
    }
  };

  add(input.nombre_contacto, 120, "campo_nombre_contacto");
  add(input.contacto, 120, "campo_contacto");
  add(input.persona, 118, "campo_persona");
  add(input.nombre_completo, 118, "campo_nombre_completo");
  add(input.nombre, 105, "campo_nombre");
  add(input.full_name, 115, "campo_full_name");

  const fromEmail = guessContactNameFromEmail_(evidenceEmail);
  add(fromEmail, 88, "email_localpart");
  const singleFromEmail = guessSingleNameFromEmailLocal_(evidenceEmail);
  add(singleFromEmail, 76, "email_localpart_single", { allowSingleToken: true });
  if (
    !isLowQualitySourceUrl_(String(input.source_url || sourceUrl || "").trim())
    && isLikelyProfileOrAuthorUrl_(String(input.source_url || sourceUrl || "").trim())
  ) {
    add(input.source_title, 20, "source_title");
  }

  for (let i = 0; i < pageList.length; i += 1) {
    const page = pageList[i] || {};
    const pageUrl = normalizeWeb_(String(page.url || "").trim());
    const pageType = classifySourceType_(pageUrl);
    const profileLikePage = isLikelyProfileOrAuthorUrl_(pageUrl);
    const profileName = extractNameFromProfileUrl_(pageUrl, pageType);
    add(profileName, pageType === "linkedin" ? 112 : 85, `perfil_${pageType}`);

    const nearEmailName = extractNameNearEmailFromText_(page.text, evidenceEmail);
    add(nearEmailName, 114, `near_email_${pageType || "web"}`);

    if (profileLikePage || pageType !== "web") {
      const htmlNames = extractNameCandidatesFromHtml_(page.rawHtml);
      for (let h = 0; h < htmlNames.length; h += 1) {
        add(htmlNames[h], pageType === "linkedin" ? 102 : 72, `html_${pageType}`);
      }
    }

    if (allowLooseTextNames) {
      const textNames = extractLikelyPersonNamesFromText_(page.text, 14);
      for (let t = 0; t < textNames.length; t += 1) {
        add(textNames[t], pageType === "linkedin" ? 96 : 66, `texto_${pageType}`);
      }
    }
  }

  const keys = Object.keys(map);
  for (let k = 0; k < keys.length; k += 1) {
    candidates.push(map[keys[k]]);
  }
  candidates.sort((a, b) => b.score - a.score);

  return {
    name: candidates.length ? candidates[0].name : "",
    source: candidates.length ? candidates[0].source : "",
    candidatesCount: candidates.length
  };
}

function findBestCompanyEvidence_(rec, pages, sourceUrl) {
  const input = rec || {};
  const pageList = Array.isArray(pages) ? pages : [];
  const candidates = [];
  const map = {};

  const add = (rawCompany, score, source) => {
    const company = normalizeCompanyName_(rawCompany);
    if (!company) return;
    const key = company.toLowerCase();
    if (!map[key] || score > map[key].score) {
      map[key] = { company: company, score: score, source: source };
    }
  };

  add(input.empresa, 120, "campo_empresa");
  add(extractCompanyFromText_(String(input.source_title || "")), 70, "source_title");
  add(extractCompanyFromText_(String(input.fuente || "")), 50, "fuente");
  add(companyFromDomain_(normalizeWeb_(String(input.web || input.source_url || sourceUrl || "").trim())), 65, "dominio");

  for (let i = 0; i < pageList.length; i += 1) {
    const page = pageList[i] || {};
    const pageUrl = normalizeWeb_(String(page.url || "").trim());
    add(companyFromDomain_(pageUrl), 60, "dominio_pagina");
    add(extractCompanyFromHtml_(page.rawHtml), 90, "html_title_meta");
    add(extractCompanyFromText_(page.text), 55, "texto_pagina");
  }

  const keys = Object.keys(map);
  for (let k = 0; k < keys.length; k += 1) {
    candidates.push(map[keys[k]]);
  }
  candidates.sort((a, b) => b.score - a.score);

  return {
    company: candidates.length ? candidates[0].company : "",
    source: candidates.length ? candidates[0].source : "",
    candidatesCount: candidates.length
  };
}

function normalizeCompanyName_(rawCompany) {
  const value = String(rawCompany || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!value) return "";
  if (value.length < 2 || value.length > 120) return "";
  if (/@|https?:\/\//i.test(value)) return "";
  if (isLikelyAddressText_(value)) return "";

  const lower = normalizeTextForMatch_(value);
  const blocked = {
    "ia no encuentra": true,
    "no encontrado": true,
    "no disponible": true,
    "unknown": true,
    "linkedin": true,
    "instagram": true,
    "youtube": true,
    "tiktok": true,
    "x": true,
    "twitter": true,
    "aviso": true,
    "contacto": true,
    "contact": true,
    "inicio": true,
    "home": true,
    "menu": true,
    "equipo": true,
    "team": true,
    "staff": true,
    "medios": true,
    "medio": true,
    "tablon de anuncios": true,
    "anuncios": true,
    "quienes": true,
    "somos": true,
    "quienes somos": true,
    "quienes-somos": true,
    "contactos": true,
    "contacts": true,
    "assinaturas": true,
    "suscripciones": true,
    "newsletter": true
  };
  if (blocked[lower]) return "";
  if (/(^|\b)(contacto|contact|contactos|contacts|tablon|anuncios?|directorio|directory|listado|listing|clasificados|menu principal|inicio|home|aviso legal|politica de privacidad|suscripciones|assinaturas|newsletter|quienes|somos|about|sobre)(\b|$)/i.test(lower)) return "";
  return value;
}

function isLikelyAddressText_(value) {
  const text = String(value || "").toLowerCase();
  if (!text) return false;
  const hasStreetWord = /(calle|c\/|avenida|avda|paseo|plaza|poligono|codigo postal|cp\s*\d{2,}|madrid|espana)/i.test(text);
  const hasDigits = /\d{2,}/.test(text);
  return hasStreetWord && hasDigits;
}

function extractCompanyFromHtml_(rawHtml) {
  const html = String(rawHtml || "");
  if (!html) return "";
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    const titleText = stripHtmlForText_(String(titleMatch[1] || ""));
    const company = extractCompanyFromText_(titleText);
    if (company) return company;
  }

  const ogSite = html.match(/<meta[^>]+(?:property|name)=["'](?:og:site_name|application-name)["'][^>]+content=["']([^"']+)["'][^>]*>/i);
  if (ogSite && ogSite[1]) {
    const company = normalizeCompanyName_(decodeBasicHtmlEntities_(String(ogSite[1] || "")));
    if (company) return company;
  }

  return "";
}

function extractCompanyFromText_(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  const chunks = raw.split(/[|:\-]/).map((part) => normalizeCompanyName_(part));
  for (let i = 0; i < chunks.length; i += 1) {
    const candidate = chunks[i];
    if (!candidate) continue;
    if (/contacto|contact|about|equipo|team|perfil|profile|inicio|home/i.test(candidate)) continue;
    if (looksLikePersonName_(candidate, "", "")) continue;
    return candidate;
  }
  return "";
}

function companyFromDomain_(url) {
  const domain = getDomain_(url).replace(/^www\./, "");
  if (!domain) return "";
  const parts = domain.split(".");
  if (parts.length <= 1) return normalizeCompanyName_(domain);
  parts.pop();
  return normalizeCompanyName_(parts.join("."));
}

function normalizePersonName_(rawName) {
  let value = String(rawName || "")
    .replace(/[_|]+/g, " ")
    .replace(/[<>[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!value) return "";

  value = value
    .replace(/^@+/, "")
    .replace(/^[\-Ã¢â‚¬â€œÃ¢â‚¬â€:]+/, "")
    .replace(/[\-Ã¢â‚¬â€œÃ¢â‚¬â€:]+$/, "")
    .trim();

  if (!value) return "";
  if (/[0-9]{3,}/.test(value)) return "";
  if (/[@]/.test(value)) return "";
  if (/https?:\/\//i.test(value)) return "";
  if (/^https?/i.test(value)) return "";

  const tokens = value.split(" ").filter((token) => token);
  if (!tokens.length || tokens.length > 5) return "";
  for (let i = 0; i < tokens.length; i += 1) {
    const token = normalizeTextForMatch_(tokens[i]);
    if (!token) return "";
    if (/^https?/.test(token)) return "";
    if (/(oficina|office|webmaster|adminweb|bandas|pizzapop|call|center|contacto|contact|info|support|soporte|noticias|noticia|volumen|brutal|lanzamientos|conciertos|publicidad|marketing|comercial|redaccion|comunicacion|redes|social|sociales|facebook|instagram|twitter|tiktok|youtube|linkedin|siguenos|follow|whatsapp|quienes|somos|http|https)/i.test(token)) {
      return "";
    }
  }
  return tokens.map((token) => titleCaseToken_(token)).join(" ");
}

function titleCaseToken_(token) {
  const value = String(token || "").trim();
  if (!value) return "";
  if (/^[A-ZÃƒÂÃƒâ€°ÃƒÂÃƒâ€œÃƒÅ¡Ãƒâ€˜0-9]+$/.test(value) && value.length <= 5) return value;
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function isGenericContactLabel_(value) {
  const normalized = normalizeTextForMatch_(value || "");
  if (!normalized) return true;
  return /(tablon|anuncios?|clasificados|directorio|directory|listado|listing|contacto|contact|contactos|contacts|medios?|equipo|team|staff|inicio|home|menu|aviso legal|politica de privacidad|assina|suscrip|newsletter|online|quienes|somos)/i.test(normalized);
}

function looksLikePersonName_(name, company, domainHint) {
  const value = String(name || "").trim();
  if (!value) return false;
  if (value.length < 3 || value.length > 80) return false;
  if (/[0-9]/.test(value)) return false;

  const tokens = value.split(" ").filter((token) => token);
  if (tokens.length < 2 || tokens.length > 5) return false;

  const lower = normalizeTextForMatch_(value);
  const companyLower = normalizeTextForMatch_(String(company || "").trim());
  if (companyLower && lower === companyLower) return false;
  if (companyLower && lower.indexOf(companyLower) >= 0 && tokens.length <= 2) return false;
  if (domainHint && lower.indexOf(normalizeTextForMatch_(String(domainHint).toLowerCase())) >= 0) return false;
  if (hasCompanyLikeWords_(lower)) return false;
  if (isGenericContactLabel_(lower)) return false;

  const stopwords = {
    de: true,
    del: true,
    la: true,
    las: true,
    los: true,
    y: true,
    the: true,
    of: true,
    se: true
  };

  const blocked = {
    info: true,
    contacto: true,
    contact: true,
    contactos: true,
    contacts: true,
    prensa: true,
    press: true,
    publicidad: true,
    marketing: true,
    comercial: true,
    redaccion: true,
    comunicacion: true,
    booking: true,
    soporte: true,
    support: true,
    ventas: true,
    sales: true,
    admin: true,
    equipo: true,
    team: true,
    online: true,
    assinaturas: true,
    suscripciones: true,
    newsletter: true,
    call: true,
    center: true,
    cliente: true,
    atencion: true,
    servicio: true,
    oficina: true,
    office: true,
    webmaster: true,
    adminweb: true,
    bandas: true,
    tienda: true,
    shop: true,
    lopd: true,
    rgpd: true,
    legal: true,
    privacidad: true,
    privacy: true,
    compliance: true,
    datos: true,
    data: true,
    mag: true,
    redes: true,
    social: true,
    sociales: true,
    facebook: true,
    instagram: true,
    twitter: true,
    tiktok: true,
    youtube: true,
    linkedin: true,
    siguenos: true,
    follow: true,
    whatsapp: true,
    noticias: true,
    noticia: true,
    volumen: true,
    brutal: true,
    lanzamientos: true,
    lanzamiento: true,
    conciertos: true,
    concierto: true,
    fotos: true,
    foto: true,
    videos: true,
    video: true,
    opinion: true,
    agenda: true,
    cartelera: true,
    programacion: true,
    quienes: true,
    somos: true,
    musica: true,
    music: true,
    http: true,
    https: true
  };

  if (tokens.length >= 2) {
    let meaningfulTokens = 0;
    let meaningfulTokensLen3 = 0;
    for (let i = 0; i < tokens.length; i += 1) {
      const token = normalizeTextForMatch_(tokens[i] || "");
      if (!token) continue;
      if (stopwords[token]) continue;
      if (blocked[token]) return false;
      if (token.length <= 1) return false;
      if (/(tablon|anuncios?|medios?|contacto|contact|contactos|contacts|equipo|team|staff|empresa|agencia|records|producciones|management|online|assinaturas|suscripciones|newsletter|call|center|atencion|cliente|servicio|noticias?|conciertos?|lanzamientos?|agenda|cartelera|programacion|revista|mag|magazin|magazine|publicidad|marketing|comercial|redaccion|comunicacion|tienda|shop|lopd|rgpd|legal|privacidad|privacy|compliance|datos|data)/i.test(token)) {
        return false;
      }
      meaningfulTokens += 1;
      if (token.length >= 3) meaningfulTokensLen3 += 1;
    }
    if (meaningfulTokens < 2) return false;
    if (meaningfulTokensLen3 < 1) return false;
  }

  return true;
}

function maybeRestartContinuousRun_(state, stepLogs, reason) {
  const st = state || {};
  const logs = Array.isArray(stepLogs) ? stepLogs : [];
  const stopReason = String(reason || "").trim();
  if (!stopReason) return false;
  if (st.status !== "running") return false;
  if (st.continuousRunEnabled !== true) return false;

  if (stopReason === "OBJETIVO_COMPLETADO") return false;
  if (stopReason === "SIN_MAS_COINCIDENCIAS" && APP_CONFIG.continuousRunRestartOnNoMatches !== true) return false;
  if (stopReason === "LIMITE_ITERACIONES" && APP_CONFIG.continuousRunRestartOnIterationLimit !== true) return false;
  if (stopReason === "LIMITE_TIEMPO" && APP_CONFIG.continuousRunRestartOnTimeLimit !== true) return false;

  const currentCycle = Math.max(1, Number(st.continuousCycleCount || 1));
  const maxCycles = Math.max(0, Number(st.continuousMaxCycles || APP_CONFIG.continuousRunMaxCycles || 0));
  const nextCycle = currentCycle + 1;
  if (maxCycles > 0 && nextCycle > maxCycles) {
    return false;
  }

  const restartPauseMs = Math.max(15000, Number(st.continuousRestartPauseMs || APP_CONFIG.continuousRunRestartPauseMs || 90000));
  const nowMs = Date.now();
  const basePlan = Array.isArray(st.baseQueryPlan) && st.baseQueryPlan.length
    ? st.baseQueryPlan.slice(0)
    : buildQueryPlan_(st.query, st.scope, st.searchOptions);

  st.iterations = 0;
  st.staleRounds = 0;
  st.dynamicPlanExpansions = 0;
  st.queryPlan = basePlan;
  st.planIndex = 0;
  st.maxIterations = getMaxIterationsForTarget_(st.targetCount);
  st.timeWindowStartedAtMs = nowMs;
  st.timeWindowCount = Number(st.timeWindowCount || 1) + 1;
  st.continuousCycleCount = nextCycle;
  st.continuousLastCycleAtMs = nowMs;
  st.continuousLastCycleAt = new Date(nowMs).toISOString();
  st.nextRetryAtMs = nowMs + restartPauseMs;
  st.retryBackoffMs = restartPauseMs;
  st.nextRetryReason = `CONTINUOUS_RESTART_${stopReason}`;
  st.retryNoticeAtMs = 0;
  st.lastError = "";
  st.lastErrorAt = "";
  st.stopReason = "";
  st.stopMessage = "";

  pushStepLog_(
    st,
    logs,
    `Modo larga duracion: ciclo ${nextCycle} iniciado por ${stopReason}. Reinicio automatico aplicado.`
  );
  pushStepLog_(
    st,
    logs,
    `Pausa corta de estabilidad: ${msToMinutesLabel_(restartPauseMs)} antes del siguiente bloque de busqueda.`
  );
  return true;
}

function hasCompanyLikeWords_(lowerText) {
  const value = String(lowerText || "");
  if (!value) return false;
  return /(s\.?l\.?|s\.?a\.?|ltda|sl|sa|records|magazine|radio|media|agency|agencia|producciones|production|festival|shop|store|events|management|promociones|group|grupo|fundacion|fundaciÃƒÂ³n)/i.test(value);
}

function tokenizeNameForEmailAudit_(rawName) {
  const value = normalizeTextForMatch_(String(rawName || "").trim());
  if (!value) return [];
  const stop = { de: true, del: true, la: true, las: true, los: true, y: true, the: true, of: true, se: true };
  const tokens = value.split(/\s+/).filter((t) => t && !stop[t] && t.length >= 2);
  return tokens.slice(0, 6);
}

function tokenizeEmailLocalForNameAudit_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return [];
  const local = String(value.split("@")[0] || "")
    .replace(/[0-9]+/g, " ")
    .replace(/[._\-+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!local) return [];
  return local.split(" ").filter((t) => t && t.length >= 2).slice(0, 6);
}

function isNameConsistentWithEmailLocal_(name, email) {
  const normalizedName = normalizePersonName_(name);
  const emailValue = String(email || "").trim().toLowerCase();
  if (!normalizedName || !isValidEmail_(emailValue)) return false;
  if (isRoleLikeMailboxEmailStrict_(emailValue)) return false;

  const nameTokens = tokenizeNameForEmailAudit_(normalizedName);
  const emailTokens = tokenizeEmailLocalForNameAudit_(emailValue);
  if (!nameTokens.length || !emailTokens.length) return false;

  for (let i = 0; i < nameTokens.length; i += 1) {
    const n = nameTokens[i];
    if (!n || n.length < 3) continue;
    for (let j = 0; j < emailTokens.length; j += 1) {
      const e = emailTokens[j];
      if (!e || e.length < 3) continue;
      if (n === e) return true;
      const n4 = n.slice(0, 4);
      const e4 = e.slice(0, 4);
      if (n.indexOf(e4) === 0) return true;
      if (e.indexOf(n4) === 0) return true;
      if (n.length >= 5 && e.indexOf(n.slice(0, 5)) >= 0) return true;
      if (e.length >= 5 && n.indexOf(e.slice(0, 5)) >= 0) return true;
    }
  }
  return false;
}

function isRoleLikeMailboxToken_(token) {
  const value = normalizeTextForMatch_(String(token || "").trim());
  if (!value || value.length < 2) return false;
  if (/^(info|contacto|contact|hello|hola|admin|support|soporte|booking|bookings|press|prensa|office|team|ventas|sales|reservas|events?|eventos?|music|oficina|webmaster|adminweb|mail|correo|manager|management|comunicacion|communication|media|marketing|editorial|redaccion|contenidos|publicidad|comercial|rrpp|tienda|shop|lopd|rgpd|legal|privacidad|privacy|compliance|datos|data|redes|social|sociales|community|comunidad|digital)$/.test(value)) {
    return true;
  }
  return false;
}

function isSingleTokenNameAllowedByEmail_(name, email, company, domainHint) {
  const normalized = normalizePersonName_(name);
  const emailValue = String(email || "").trim().toLowerCase();
  if (!normalized || !isValidEmail_(emailValue)) return false;
  if (isGenericMailboxEmail_(emailValue)) return false;

  const nameTokens = tokenizeNameForEmailAudit_(normalized);
  if (nameTokens.length !== 1) return false;
  const token = String(nameTokens[0] || "").trim();
  if (!token || token.length < 3 || token.length > 10) return false;

  const emailTokens = tokenizeEmailLocalForNameAudit_(emailValue);
  if (!emailTokens.length || emailTokens.length > 4) return false;

  const tokenNorm = normalizeTextForMatch_(token);
  if (!tokenNorm || tokenNorm.length < 3) return false;
  let matchedToken = false;
  for (let i = 0; i < emailTokens.length; i += 1) {
    const localToken = normalizeTextForMatch_(String(emailTokens[i] || "").trim());
    if (!localToken) continue;
    const token4 = tokenNorm.slice(0, 4);
    const local4 = localToken.slice(0, 4);
    const matches = tokenNorm === localToken
      || tokenNorm.indexOf(local4) === 0
      || localToken.indexOf(token4) === 0;
    if (matches) {
      matchedToken = true;
      continue;
    }
    if (isRoleLikeMailboxToken_(localToken)) continue;
    return false;
  }
  if (!matchedToken) return false;

  const companyNorm = normalizeTextForMatch_(String(company || "").trim());
  if (companyNorm && companyNorm.indexOf(tokenNorm) >= 0) return false;

  const rootHint = getRootDomain_(String(domainHint || "").trim()) || getRootDomain_(String(emailValue.split("@")[1] || "").trim());
  const rootNorm = normalizeTextForMatch_(String(rootHint || "").replace(/\..*$/, ""));
  if (rootNorm && rootNorm.indexOf(tokenNorm) >= 0) return false;
  return true;
}

function guessSingleNameFromEmailLocal_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return "";
  if (isGenericMailboxEmail_(value)) return "";
  const localRaw = String(value.split("@")[0] || "").trim();
  if (!localRaw) return "";
  if (/[0-9]/.test(localRaw)) return "";
  const localTokens = tokenizeEmailLocalForNameAudit_(value);
  if (!localTokens.length || localTokens.length > 4) return "";
  const candidates = [];
  for (let i = 0; i < localTokens.length; i += 1) {
    const t = normalizeTextForMatch_(localTokens[i]);
    if (!t || t.length < 3) continue;
    if (isRoleLikeMailboxToken_(t)) continue;
    candidates.push(t);
  }
  if (candidates.length !== 1) return "";
  const token = String(candidates[0] || "").trim();
  if (!token || token.length < 3 || token.length > 14) return "";
  if (!/^[a-z][a-z'`.-]+$/i.test(token)) return "";
  if (/^https?/.test(token)) return "";
  if (/(test|demo|noreply|mail|web|studio|music|radio|records|team|office|contact|info|press|prensa|booking|ventas|sales|admin|support|comunicacion|media|marketing|events?|eventos?|rrpp|publicidad|editorial|redaccion|contenidos|oficina|bandas|tienda|shop|lopd|rgpd|legal|privacidad|privacy|compliance|datos|data|redes|social|sociales|community|comunidad|digital)/i.test(token)) return "";
  if (/([a-z])\1{3,}/i.test(token)) return "";
  if (token.length > 10) {
    return inferGivenNameFromCompactEmailToken_(token);
  }
  const inferred = inferGivenNameFromCompactEmailToken_(token);
  if (inferred) return inferred;
  return titleCaseToken_(token);
}

function inferGivenNameFromCompactEmailToken_(rawToken) {
  const token = normalizeTextForMatch_(String(rawToken || "").trim());
  if (!token || token.length < 4 || token.length > 18) return "";
  if (!/^[a-z]+$/.test(token)) return "";
  if (isRoleLikeMailboxToken_(token)) return "";

  const commonPrefixes = [
    "gabri",
    "gabi",
    "ruben",
    "raul",
    "dani",
    "david",
    "jorge",
    "jose",
    "joan",
    "maria",
    "paula",
    "pablo",
    "marta",
    "laura",
    "lucia",
    "sara",
    "luis",
    "ana",
    "carlos",
    "miguel",
    "sergio",
    "diego"
  ];

  for (let i = 0; i < commonPrefixes.length; i += 1) {
    const prefix = commonPrefixes[i];
    if (!prefix) continue;
    if (token === prefix) return titleCaseToken_(prefix);
    if (token.indexOf(prefix) === 0 && token.length >= prefix.length + 2) {
      return titleCaseToken_(prefix);
    }
  }
  return "";
}

function mapRoleTokenToContactLabel_(token) {
  const key = normalizeTextForMatch_(String(token || "").trim());
  if (!key) return "";
  const map = {
    info: "Contacto",
    contacto: "Contacto",
    contact: "Contacto",
    oficina: "Oficina",
    office: "Oficina",
    redes: "Redes",
    social: "Redes",
    sociales: "Redes",
    community: "Redes",
    comunidad: "Redes",
    prensa: "Prensa",
    press: "Prensa",
    booking: "Booking",
    bookings: "Booking",
    comunicacion: "Comunicacion",
    communication: "Comunicacion",
    media: "Prensa",
    marketing: "Marketing",
    comercial: "Comercial",
    publicidad: "Publicidad",
    soporte: "Soporte",
    support: "Soporte",
    legal: "Legal",
    lopd: "Legal",
    rgpd: "Legal",
    privacidad: "Legal",
    privacy: "Legal",
    compliance: "Legal",
    admin: "Administracion",
    webmaster: "Administracion",
    adminweb: "Administracion",
    tienda: "Tienda",
    shop: "Tienda",
    suscripciones: "Suscripciones",
    assinaturas: "Suscripciones"
  };
  return map[key] || titleCaseToken_(key);
}

function resolveEntityLabelForRoleContact_(company, domainHint, email) {
  let entity = normalizeCompanyName_(String(company || "").trim());
  if (entity && /^[a-z0-9.-]+\.[a-z]{2,24}$/i.test(entity)) {
    const fromCompanyDomain = companyFromDomain_(`https://${entity}`);
    if (fromCompanyDomain) entity = fromCompanyDomain;
  }
  if (entity && !/\s/.test(entity) && /^[a-z0-9-]+$/i.test(entity)) {
    entity = titleCaseToken_(entity);
  }
  if (entity) return entity;

  const emailDomain = isValidEmail_(email) ? String(email.split("@")[1] || "").trim().toLowerCase() : "";
  const domainCandidate = getRootDomain_(String(domainHint || "").trim()) || getRootDomain_(emailDomain) || emailDomain;
  if (!domainCandidate) return "";
  const fromDomain = companyFromDomain_(`https://${domainCandidate}`);
  const normalized = normalizeCompanyName_(fromDomain);
  if (normalized && !/\s/.test(normalized) && /^[a-z0-9-]+$/i.test(normalized)) {
    return titleCaseToken_(normalized);
  }
  return normalized;
}

function buildRoleBasedContactFallbackLabel_(email, company, domainHint) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return "";
  const localTokens = tokenizeEmailLocalForNameAudit_(value);
  if (!localTokens.length) return "";

  let roleToken = "";
  for (let i = 0; i < localTokens.length; i += 1) {
    const token = normalizeTextForMatch_(localTokens[i]);
    if (!token) continue;
    if (isRoleLikeMailboxToken_(token)) {
      roleToken = token;
      break;
    }
  }
  if (!roleToken) return "";

  const roleLabel = mapRoleTokenToContactLabel_(roleToken);
  if (!roleLabel) return "";
  const entityLabel = resolveEntityLabelForRoleContact_(company, domainHint, value);
  if (entityLabel) return `${roleLabel} de ${entityLabel}`;
  return roleLabel;
}

function buildGenericCompanyContactFallbackLabel_(email, company, domainHint) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return "";

  // Si ya podemos recuperar nombre de persona por email, no forzamos etiqueta generica.
  const recoveredSingle = guessSingleNameFromEmailLocal_(value);
  if (recoveredSingle && isSingleTokenNameAllowedByEmail_(recoveredSingle, value, company, domainHint)) {
    return "";
  }

  const localTokens = tokenizeEmailLocalForNameAudit_(value);
  if (!localTokens.length) return "";
  for (let i = 0; i < localTokens.length; i += 1) {
    const token = normalizeTextForMatch_(localTokens[i]);
    if (!token) continue;
    if (isRoleLikeMailboxToken_(token)) return "";
  }

  const entityLabel = resolveEntityLabelForRoleContact_(company, domainHint, value);
  if (!entityLabel) return "";
  return `Contacto de ${entityLabel}`;
}

function isRoleBasedContactLabel_(value) {
  const normalized = normalizeTextForMatch_(String(value || "").trim());
  if (!normalized) return false;
  return /^(contacto|oficina|redes|prensa|booking|comunicacion|marketing|comercial|publicidad|soporte|legal|administracion|tienda|suscripciones)(\s+de\s+.+)?$/.test(normalized);
}

function guessContactNameFromEmail_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return "";
  const local = value.split("@")[0] || "";
  if (!local) return "";
  if (/^https?/.test(local)) return "";

  const genericLocals = {
    info: true,
    contacto: true,
    contact: true,
    hello: true,
    hola: true,
    admin: true,
    support: true,
    soporte: true,
    booking: true,
    press: true,
    prensa: true,
    office: true,
    team: true,
    ventas: true,
    sales: true,
    reservas: true,
    events: true,
    music: true,
    oficina: true,
    office: true,
    webmaster: true,
    adminweb: true,
    bandas: true,
    pizzapop: true,
    tienda: true,
    shop: true,
    lopd: true,
    rgpd: true,
    legal: true,
    privacidad: true,
    privacy: true,
    compliance: true,
    datos: true,
    data: true,
    redes: true,
    social: true,
    sociales: true,
    community: true,
    comunidad: true,
    digital: true
  };

  if (genericLocals[local]) return "";

  const cleaned = local
    .replace(/[0-9]+/g, " ")
    .replace(/[._\-+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return "";

  const tokens = cleaned.split(" ").filter((t) => t && !genericLocals[t]);
  if (tokens.length < 2 || tokens.length > 3) return "";
  if (tokens[0].length < 3) return "";
  return tokens.map((t) => titleCaseToken_(t)).join(" ");
}

function extractNameFromProfileUrl_(url, sourceType) {
  const value = String(url || "").trim();
  if (!value) return "";
  const t = String(sourceType || classifySourceType_(value));

  const readSlug = (regex) => {
    const m = value.match(regex);
    if (!m) return "";
    const slug = String(m[1] || "").trim();
    if (!slug) return "";
    const cleaned = slug
      .replace(/^@+/, "")
      .replace(/[-_.]+/g, " ")
      .replace(/[0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return cleaned;
  };

  if (t === "linkedin") return normalizePersonName_(readSlug(/linkedin\.com\/in\/([^/?#]+)/i));
  if (t === "instagram") return normalizePersonName_(readSlug(/instagram\.com\/([^/?#]+)/i));
  if (t === "tiktok") return normalizePersonName_(readSlug(/tiktok\.com\/@([^/?#]+)/i));
  if (t === "x") return normalizePersonName_(readSlug(/(?:x\.com|twitter\.com)\/([^/?#]+)/i));
  if (t === "youtube") {
    const handle = readSlug(/youtube\.com\/@([^/?#]+)/i) || readSlug(/youtu\.be\/([^/?#]+)/i);
    return normalizePersonName_(handle);
  }
  return "";
}

function extractNameCandidatesFromHtml_(rawHtml) {
  const html = String(rawHtml || "");
  if (!html) return [];
  const out = [];
  const seen = {};

  const pushName = (value) => {
    const cleaned = normalizePersonName_(value);
    if (!cleaned) return;
    const key = cleaned.toLowerCase();
    if (seen[key]) return;
    seen[key] = true;
    out.push(cleaned);
  };

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    const text = stripHtmlForText_(String(titleMatch[1] || ""));
    const chunks = String(text || "").split(/[|\-:]/);
    for (let i = 0; i < chunks.length; i += 1) {
      pushName(chunks[i]);
    }
  }

  const ogRegex = /<meta[^>]+(?:property|name)=["'](?:og:title|twitter:title|author|article:author)["'][^>]+content=["']([^"']+)["'][^>]*>/ig;
  let match;
  while ((match = ogRegex.exec(html)) !== null) {
    const value = decodeBasicHtmlEntities_(String(match[1] || ""));
    const chunks = value.split(/[|\-:]/);
    for (let i = 0; i < chunks.length; i += 1) {
      pushName(chunks[i]);
    }
  }

  return out.slice(0, 12);
}

function extractLikelyPersonNamesFromText_(text, maxItems) {
  const raw = String(text || "");
  if (!raw) return [];
  const max = Math.max(1, Number(maxItems || 12));
  const out = [];
  const seen = {};
  const regex = /\b([A-ZÃƒÂÃƒâ€°ÃƒÂÃƒâ€œÃƒÅ¡Ãƒâ€˜][a-zÃƒÂ¡ÃƒÂ©ÃƒÂ­ÃƒÂ³ÃƒÂºÃƒÂ±'`.-]{1,24}(?:\s+[A-ZÃƒÂÃƒâ€°ÃƒÂÃƒâ€œÃƒÅ¡Ãƒâ€˜][a-zÃƒÂ¡ÃƒÂ©ÃƒÂ­ÃƒÂ³ÃƒÂºÃƒÂ±'`.-]{1,24}){0,3})\b/g;
  let match;

  while ((match = regex.exec(raw)) !== null) {
    const candidate = normalizePersonName_(match[1]);
    if (!candidate) continue;
    const key = candidate.toLowerCase();
    if (seen[key]) continue;
    seen[key] = true;
    out.push(candidate);
    if (out.length >= max) break;
  }
  return out;
}

function extractNameNearEmailFromText_(text, email) {
  const raw = String(text || "");
  const mail = String(email || "").trim();
  if (!raw || !mail || !isValidEmail_(mail)) return "";

  const escapedMail = mail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const beforePattern = new RegExp(
    "([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}(?:\\s+[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}){1,3})\\s*[\\(<\\[]?\\s*" + escapedMail,
    "u"
  );
  const beforeMatch = raw.match(beforePattern);
  if (beforeMatch && beforeMatch[1]) {
    const candidateBefore = normalizePersonName_(beforeMatch[1]);
    if (candidateBefore && looksLikePersonName_(candidateBefore, "", "")) return candidateBefore;
  }

  const afterPattern = new RegExp(
    escapedMail + "\\s*[-–—|,:;]*\\s*([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}(?:\\s+[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}){1,3})",
    "u"
  );
  const afterMatch = raw.match(afterPattern);
  if (afterMatch && afterMatch[1]) {
    const candidateAfter = normalizePersonName_(afterMatch[1]);
    if (candidateAfter && looksLikePersonName_(candidateAfter, "", "")) return candidateAfter;
  }

  return "";
}

function extractFirstUrl_(text) {
  const raw = String(text || "");
  if (!raw) return "";
  const m = raw.match(/https?:\/\/[^\s<>"')]+/i);
  return m ? m[0] : "";
}

function fetchSourcePageText_(url) {
  if (!url) return { ok: false, rawHtml: "", text: "" };
  try {
    const resp = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      followRedirects: true,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; BUSCA-CONTACTOS/1.0)"
      }
    });
    const code = Number(resp.getResponseCode() || 0);
    if (code < 200 || code >= 300) {
      return { ok: false, rawHtml: "", text: "" };
    }
    const raw = String(resp.getContentText() || "").slice(0, APP_CONFIG.maxSourceHtmlLength);
    if (!raw) return { ok: false, rawHtml: "", text: "" };
    const text = stripHtmlForText_(raw);
    return { ok: true, rawHtml: raw, text: text };
  } catch (err) {
    return { ok: false, rawHtml: "", text: "" };
  }
}

function stripHtmlForText_(html) {
  const raw = String(html || "");
  if (!raw) return "";
  let text = raw
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  text = decodeBasicHtmlEntities_(text);
  return text;
}

function decodeBasicHtmlEntities_(text) {
  return String(text || "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'");
}

function decodeCloudflareEmail_(hexEncoded) {
  const hex = String(hexEncoded || "").trim();
  if (!hex || (hex.length % 2 !== 0) || !/^[0-9a-f]+$/i.test(hex)) return "";
  const key = parseInt(hex.slice(0, 2), 16);
  if (!isFinite(key)) return "";
  let out = "";
  for (let i = 2; i < hex.length; i += 2) {
    const value = parseInt(hex.slice(i, i + 2), 16);
    if (!isFinite(value)) return "";
    out += String.fromCharCode(value ^ key);
  }
  return out;
}

function extractEmailCandidates_(rawHtml, cleanText) {
  const html = String(rawHtml || "");
  const joined = `${html}\n${String(cleanText || "")}`;
  const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/ig;
  const map = {};
  const out = [];
  let match;
  while ((match = regex.exec(joined)) !== null) {
    const email = String(match[0] || "").trim().toLowerCase();
    const start = Number(match.index || 0);
    const end = start + email.length;
    const prevChar = start > 0 ? joined.charAt(start - 1) : " ";
    const nextChar = end < joined.length ? joined.charAt(end) : " ";
    if (/[\/\\]/.test(prevChar) || /[\/\\]/.test(nextChar)) continue;
    if (!isValidEmail_(email)) continue;
    if (/example\.(com|org|net)$/i.test(email)) continue;
    if (!map[email]) {
      map[email] = true;
      out.push(email);
    }
  }

  const cfDataRegex = /data-cfemail=["']([0-9a-f]{6,})["']/ig;
  while ((match = cfDataRegex.exec(html)) !== null) {
    const decoded = decodeCloudflareEmail_(String(match[1] || ""));
    const email = String(decoded || "").trim().toLowerCase();
    if (!isValidEmail_(email)) continue;
    if (/example\.(com|org|net)$/i.test(email)) continue;
    if (!map[email]) {
      map[email] = true;
      out.push(email);
    }
  }

  const cfHrefRegex = /\/cdn-cgi\/l\/email-protection#([0-9a-f]{6,})/ig;
  while ((match = cfHrefRegex.exec(html)) !== null) {
    const decoded = decodeCloudflareEmail_(String(match[1] || ""));
    const email = String(decoded || "").trim().toLowerCase();
    if (!isValidEmail_(email)) continue;
    if (/example\.(com|org|net)$/i.test(email)) continue;
    if (!map[email]) {
      map[email] = true;
      out.push(email);
    }
  }

  return out;
}

function extractPhoneCandidates_(rawHtml, cleanText, scope) {
  const joined = `${String(rawHtml || "")}\n${String(cleanText || "")}`;
  const found = joined.match(/(?:\+?\d[\d().\-\s]{7,}\d)/g) || [];
  const map = {};
  const out = [];
  for (let i = 0; i < found.length; i += 1) {
    const normalized = normalizePhone_(String(found[i] || ""), scope);
    if (!normalized) continue;
    const key = phoneDigitsKey_(normalized);
    if (!key || map[key]) continue;
    map[key] = true;
    out.push(normalized);
  }
  return out;
}

function phoneDigitsKey_(phone) {
  return String(phone || "")
    .replace(/[^\d]/g, "")
    .replace(/^00/, "");
}

function findBestPhoneEvidence_(candidatePhone, detectedPhones, detectedMap) {
  const candidate = String(candidatePhone || "").trim();
  if (candidate) {
    const key = phoneDigitsKey_(candidate);
    if (key && detectedMap[key]) {
      return detectedMap[key];
    }
  }
  return detectedPhones.length ? detectedPhones[0] : "";
}

function appendTraceRowsFromRecords_(traceSheet, records, state, queryVariant, startRow) {
  if (!traceSheet || !records || !records.length) return 0;

  const tz = Session.getScriptTimeZone() || "Europe/Madrid";
  const stamp = Utilities.formatDate(new Date(), tz, "yyyy-MM-dd HH:mm:ss");
  const missingValue = String(APP_CONFIG.missingWebValue || "IA no encuentra");
  const rows = records.map((record) => {
    const trace = record._trace || {};
    return [
      stamp,
      state.jobId || "",
      state.iterations || 0,
      state.query || "",
      queryVariant || "",
      getScopeLabel_(state.scope),
      record.empresa || "",
      record.email || "",
      record.telefono || "",
      record.web || "",
      trace.sourceUrl || "",
      trace.sourceText || "",
      trace.verification || "verificado_web",
      trace.evidenceEmail || missingValue,
      trace.evidencePhone || missingValue,
      Number(trace.detectedEmailsCount || 0),
      Number(trace.detectedPhonesCount || 0),
      `${trace.method || "web_search+urlfetch_regex"}|source:${trace.sourceType || "web"}|checks:${Number(trace.checksPassed || 0)}/${Number(trace.checksTotal || 0)}|min:${Number(trace.checksRequired || 0)}`
    ];
  });

  const range = traceSheet.getRange(startRow, 1, rows.length, rows[0].length);
  range.setValues(rows);
  return rows.length;
}

function normalizeGeminiContacts_(contacts, query, scope, requirements) {
  const input = Array.isArray(contacts) ? contacts : [];
  const out = [];
  for (let i = 0; i < input.length; i += 1) {
    const rec = input[i] || {};
    const normalized = normalizeContact_(rec, query, scope, requirements);
    if (!normalized) continue;
    out.push(normalized);
  }
  return out;
}

function normalizeContact_(rec, query, scope, requirements) {
  const req = requirements || {};
  const rawEmail = String(rec.email || "").trim().toLowerCase();
  const email = isValidEmail_(rawEmail) ? rawEmail : "";
  const telefono = normalizePhone_(String(rec.telefono || ""), scope);
  const strictMode = APP_CONFIG.strictRequireEmailAndPhone === true;
  const requireEmail = strictMode ? (req.requireEmail !== false) : false;
  const requirePhone = strictMode ? (req.requirePhone !== false) : false;
  const strictNameRequired = req.requireName !== false && APP_CONFIG.strictRequireContactName === true;
  const strictCompanyRequired = req.requireCompany === true;
  const web = normalizeWeb_(String(rec.web || ""));
  const empresa = normalizeCompanyName_(String(rec.empresa || "").trim()) || normalizeCompanyName_(companyFromDomain_(web));
  const contacto = normalizeContactName_(rec);
  const cargo = normalizeInformativeText_(String(rec.cargo || rec.puesto || rec.rol || "").trim(), [empresa, contacto], 3);
  const descripcionMedioEmpresaRaw = String(rec.descripcion_medio_empresa || rec.descripcion || rec.descripcion_empresa || "").trim();
  const descripcionMedioEmpresa = normalizeInformativeText_(
    descripcionMedioEmpresaRaw,
    [empresa, contacto, cargo],
    12
  );
  const funcionCargoRaw = String(rec.funcion_cargo || rec.funcion || rec.funcion_del_cargo || "").trim();
  const funcionCargo = normalizeInformativeText_(
    funcionCargoRaw,
    [empresa, contacto, cargo],
    12
  );
  const descripcionMedioEmpresaResolved = descripcionMedioEmpresa || resolveDescriptionField_(rec, [], empresa, web);
  const funcionCargoResolved = funcionCargo || resolveRoleFunctionField_(rec, [], cargo, contacto, empresa, descripcionMedioEmpresaResolved);
  const contenido = String(rec.tipo_contenido || rec.contenido || rec.nicho || "").trim();
  const linkedin = normalizeWeb_(String(rec.linkedin || rec.linkedin_url || "").trim());
  const instagram = normalizeWeb_(String(rec.instagram || rec.instagram_url || "").trim());
  const youtube = normalizeWeb_(String(rec.youtube || rec.youtube_url || "").trim());
  const tiktok = normalizeWeb_(String(rec.tiktok || rec.tiktok_url || "").trim());
  const x = normalizeWeb_(String(rec.x || rec.x_url || rec.twitter || rec.twitter_url || "").trim());
  const dominioWebGenerico = normalizeDomainGeneric_(String(rec.dominio_web_generico || rec.dominio || "").trim()) || normalizeDomainGeneric_(web);
  const trace = rec && rec._trace ? rec._trace : null;
  const missingValue = String(APP_CONFIG.missingWebValue || "IA no encuentra");

  if (requireEmail && !email) return null;
  if (requirePhone && !telefono) return null;
  if (!strictMode && !email && !telefono) return null;
  if (strictNameRequired && !contacto) return null;
  if (strictCompanyRequired && !empresa) return null;

  const emailOut = requireEmail ? email : (email || missingValue);
  const telefonoOut = requirePhone ? telefono : (telefono || missingValue);
  const missingParts = [];
  if (!requireEmail) {
    if (!email) missingParts.push("email");
  }
  if (!requirePhone) {
    if (!telefono) missingParts.push("telefono");
  }
  if (!strictNameRequired && !contacto) {
    missingParts.push("nombre de contacto");
  }
  if (!strictCompanyRequired && !empresa) {
    missingParts.push("empresa");
  }
  const autoMissingNote = missingParts.length
    ? `No se encontro ${missingParts.join(" y ")} en la web.`
    : "";

  const normalized = {
    empresa: empresa || missingValue,
    contacto: contacto || missingValue,
    cargo: cargo || missingValue,
    descripcion_medio_empresa: descripcionMedioEmpresaResolved || missingValue,
    funcion_cargo: funcionCargoResolved || missingValue,
    email: emailOut,
    telefono: telefonoOut,
    web: web,
    linkedin: linkedin || missingValue,
    instagram: instagram || missingValue,
    youtube: youtube || missingValue,
    tiktok: tiktok || missingValue,
    x: x || missingValue,
    contenido: contenido || missingValue,
    pais: String(rec.pais || "").trim() || (isSpainScope_(scope) ? "Espana" : ""),
    busqueda: query,
    fuente: String(rec.fuente || "").trim() || "Web publica validada",
    dominio_web_generico: dominioWebGenerico || missingValue,
    dominio: dominioWebGenerico || getDomain_(web),
    ciudad: String(rec.ciudad || "").trim(),
    provincia: String(rec.provincia || "").trim(),
    estado: ((!requireEmail || !!email) && (!requirePhone || !!telefono) && (!strictNameRequired || !!contacto))
      && (!strictCompanyRequired || !!empresa)
      ? "completo"
      : "incompleto",
    notas: String(rec.notas || "").trim() || autoMissingNote
  };

  const reviewed = applySemanticFinalReviewToRecord_(normalized, rec, scope);

  if (strictNameRequired && isOutputMissingValue_(reviewed.contacto)) return null;
  if (strictCompanyRequired && isOutputMissingValue_(reviewed.empresa)) return null;

  if (trace) {
    reviewed._trace = trace;
  }

  return reviewed;
}

function isOutputMissingValue_(value) {
  const raw = String(value || "").trim();
  if (!raw) return true;
  const missing = String(APP_CONFIG.missingWebValue || "IA no encuentra").trim();
  return normalizeTextForMatch_(raw) === normalizeTextForMatch_(missing);
}

function toMeaningfulOutputText_(value) {
  if (isOutputMissingValue_(value)) return "";
  return String(value || "").trim();
}

function isLikelyNarrativeReviewText_(value) {
  const normalized = normalizeTextForMatch_(value || "");
  if (!normalized) return false;
  if (normalized.length < 40) return false;
  const hasConcertNarrative = /(concierto|sala|publico|asistentes|entrada|setlist|cronica|gira|banda|grupo|artista|festival)/.test(normalized);
  const hasSubjectiveStory = /(a pesar|practicamente|respondieron|apenas|se vio|se noto|resulto|registro|solemne|sepulcral|emocionante)/.test(normalized);
  if (hasConcertNarrative && hasSubjectiveStory) return true;
  if (/(ayer|anoche|esta noche|en directo|sobre el escenario)/.test(normalized) && hasConcertNarrative) return true;
  return false;
}

function inferCargoFromSemanticContext_(functionText, descriptionText, companyText) {
  const merged = normalizeTextForMatch_(`${functionText || ""} ${descriptionText || ""} ${companyText || ""}`);
  if (!merged) return "";
  if (/(redaccion|redactor|editor|periodist|critic|entrevista|medio|revista|magazine|prensa|radio|podcast)/.test(merged)) return "Redactor/a";
  if (/(booking|management|representacion|contratacion|giras|manager)/.test(merged)) return "Booking / Management";
  if (/(promotora|promotor|conciertos?|festivales?|sala|eventos?|programacion)/.test(merged)) return "Promotor/a";
  if (/(comunicacion|prensa|rrpp|publicidad|marketing|media)/.test(merged)) return "Comunicacion / Prensa";
  if (/(editorial|edicion|contenidos)/.test(merged)) return "Editor/a";
  return "";
}

function applySemanticFinalReviewToRecord_(normalizedRecord, originalRecord, scope) {
  const output = Object.assign({}, normalizedRecord || {});
  const rec = originalRecord || {};
  const missingValue = String(APP_CONFIG.missingWebValue || "IA no encuentra");

  const webContext = toMeaningfulOutputText_(output.web) || String(rec.web || rec.source_url || "").trim();
  let company = normalizeCompanyName_(toMeaningfulOutputText_(output.empresa));
  if (!company) {
    company = normalizeCompanyName_(String(rec.empresa || "").trim());
  }
  if (!company) {
    company = normalizeCompanyName_(companyFromDomain_(webContext));
  }
  const email = toMeaningfulOutputText_(output.email).toLowerCase();
  const domainHint = toMeaningfulOutputText_(output.dominio_web_generico) || getDomain_(webContext);

  let contact = normalizePersonName_(toMeaningfulOutputText_(output.contacto));
  if (contact) {
    const validByShape = looksLikePersonName_(contact, company, domainHint);
    const validBySingleEmail = APP_CONFIG.allowSingleNameFromEmailFallback === true
      && isSingleTokenNameAllowedByEmail_(contact, email, company, domainHint);
    if (!validByShape && !validBySingleEmail) {
      contact = "";
    }
  }
  if (contact && email && !isRoleBasedContactLabel_(contact)) {
    const coherentByEmail = isNameConsistentWithEmailLocal_(contact, email);
    if (!coherentByEmail) {
      const repairedByEmail = normalizePersonName_(
        String(
          guessContactNameFromEmail_(email)
          || guessSingleNameFromEmailLocal_(email)
          || ""
        ).trim()
      );
      const repairedAllowed =
        !!repairedByEmail
        && (
          looksLikePersonName_(repairedByEmail, company, domainHint)
          || isSingleTokenNameAllowedByEmail_(repairedByEmail, email, company, domainHint)
          || isNameConsistentWithEmailLocal_(repairedByEmail, email)
        );
      if (repairedAllowed) {
        contact = repairedByEmail;
      } else if (APP_CONFIG.forceEmailNameCoherenceInOutput === true) {
        contact = "";
      }
    }
  }
  if (!contact && APP_CONFIG.allowSingleNameFromEmailFallback === true && email) {
    const recovered = guessSingleNameFromEmailLocal_(email);
    if (isSingleTokenNameAllowedByEmail_(recovered, email, company, domainHint)) {
      contact = recovered;
    }
  }
  if (!contact && email) {
    const roleFallback = buildRoleBasedContactFallbackLabel_(
      email,
      company || String(rec.empresa || "").trim(),
      domainHint || String(rec.web || rec.source_url || "").trim()
    );
    if (roleFallback) {
      contact = roleFallback;
    }
  }
  if (!contact && email) {
    const genericFallback = buildGenericCompanyContactFallbackLabel_(
      email,
      company || String(rec.empresa || "").trim(),
      domainHint || String(rec.web || rec.source_url || "").trim()
    );
    if (genericFallback) {
      contact = genericFallback;
    }
  }
  output.contacto = contact || missingValue;

  let description = sanitizeInformativeFieldText_(toMeaningfulOutputText_(output.descripcion_medio_empresa));
  const inferredCategory = inferEntityCategoryFromEvidence_(rec, [], toMeaningfulOutputText_(output.web));
  const neutralDescription = buildNeutralDescriptionFromCategory_(inferredCategory);
  if (description) {
    if (isLowValueInformativeText_(description) || isLikelyNarrativeReviewText_(description)) {
      description = neutralDescription || "";
    } else {
      const adapted = adaptDescriptionToneForOutput_(description, rec, [], toMeaningfulOutputText_(output.web));
      description = sanitizeInformativeFieldText_(adapted || description);
      if (isLikelyNarrativeReviewText_(description)) {
        description = neutralDescription || "";
      }
    }
  } else {
    description = neutralDescription || "";
  }
  output.descripcion_medio_empresa = trimInformativeField_(description, 220) || missingValue;

  let cargo = sanitizeInformativeFieldText_(toMeaningfulOutputText_(output.cargo));
  const cargoNormalized = normalizeTextForMatch_(cargo);
  if (cargoNormalized && /(organizacion|gestion|coordinacion).*(eventos?|conciertos?|festivales?)/.test(cargoNormalized)) {
    cargo = "Promotor/a";
  }
  if (cargoNormalized && /(redaccion|editorial|contenidos?)/.test(cargoNormalized)) {
    cargo = "Redactor/a";
  }
  if (cargo && (isLowValueInformativeText_(cargo) || isLikelyNarrativeReviewText_(cargo) || cargo.length > 56)) {
    cargo = "";
  }
  if (!cargo) {
    cargo = inferCargoFromSemanticContext_(toMeaningfulOutputText_(output.funcion_cargo), description, company);
  }
  output.cargo = cargo || missingValue;

  let funcion = sanitizeInformativeFieldText_(toMeaningfulOutputText_(output.funcion_cargo));
  if (funcion && (isLowValueInformativeText_(funcion) || isLikelyNarrativeReviewText_(funcion))) {
    funcion = "";
  }
  if (!funcion && cargo) {
    funcion = inferFunctionFromCargo_(cargo, description);
  }
  output.funcion_cargo = trimInformativeField_(funcion, 220) || missingValue;

  output.empresa = company || missingValue;

  return output;
}

function normalizeContactName_(rec) {
  const source = rec || {};
  const company = String(source.empresa || "").trim();
  const domainHint = getDomain_(normalizeWeb_(String(source.web || source.source_url || "").trim()) || "");
  const emailHint = String(source.email || "").trim().toLowerCase();
  const candidates = [
    source.nombre_contacto,
    source.contacto,
    source.persona,
    source.nombre_completo,
    source.nombre,
    source.full_name,
    guessContactNameFromEmail_(String(source.email || "").trim().toLowerCase())
  ];
  for (let i = 0; i < candidates.length; i += 1) {
    const value = normalizePersonName_(String(candidates[i] || "").trim());
    if (!value) continue;
    if (!looksLikePersonName_(value, company, domainHint)) {
      const allowSingleTokenByEmail = APP_CONFIG.allowSingleNameFromEmailFallback === true
        && isSingleTokenNameAllowedByEmail_(value, emailHint, company, domainHint);
      if (!allowSingleTokenByEmail) continue;
    }
    return value;
  }
  const title = String(source.source_title || "").trim();
  if (!title) return "";
  const firstChunk = normalizePersonName_(title.split("|")[0].split(" - ")[0].trim());
  if (!firstChunk) return "";
  if (firstChunk.split(" ").filter((t) => t).length < 2) return "";
  if (!looksLikePersonName_(firstChunk, company, domainHint)) return "";
  return firstChunk;
}

function dedupeRecords_(records, seenHashes, seenEmails) {
  const hashArray = Array.isArray(seenHashes) ? seenHashes : [];
  const emailArray = Array.isArray(seenEmails) ? seenEmails : [];
  const seenMap = {};
  const seenEmailMap = {};
  for (let i = 0; i < hashArray.length; i += 1) {
    seenMap[hashArray[i]] = true;
  }
  for (let i = 0; i < emailArray.length; i += 1) {
    const email = String(emailArray[i] || "").trim().toLowerCase();
    if (!isValidEmail_(email)) continue;
    seenEmailMap[email] = true;
  }

  const newRecords = [];
  let duplicatesByEmail = 0;
  let duplicatesByKey = 0;
  for (let i = 0; i < records.length; i += 1) {
    const r = records[i];
    const email = String(r.email || "").trim().toLowerCase();
    const validEmail = isValidEmail_(email) ? email : "";
    if (validEmail && seenEmailMap[validEmail]) {
      duplicatesByEmail += 1;
      continue;
    }
    const rawKey = [
      validEmail,
      normalizePhone_(r.telefono || "", /espa/i.test(String(r.pais || "")) ? "NACIONAL_ES" : "INTERNACIONAL"),
      getDomain_(r.web || ""),
      (r.empresa || "").toLowerCase()
    ].join("|");
    const hash = hashText_(rawKey);
    if (seenMap[hash]) {
      duplicatesByKey += 1;
      continue;
    }
    seenMap[hash] = true;
    hashArray.push(hash);
    if (validEmail) {
      seenEmailMap[validEmail] = true;
      emailArray.push(validEmail);
    }
    newRecords.push(r);
  }

  return {
    newRecords: newRecords,
    duplicatesByEmail: duplicatesByEmail,
    duplicatesByKey: duplicatesByKey
  };
}

function collectExistingDedupState_(sheet, columns, scope) {
  const outHashes = [];
  const outEmails = [];
  if (!sheet || !Array.isArray(columns) || !columns.length) {
    return { seenHashes: outHashes, seenEmails: outEmails };
  }

  const lastRow = Number(sheet.getLastRow() || 0);
  if (lastRow <= 1) {
    return { seenHashes: outHashes, seenEmails: outEmails };
  }

  const emailIdx = findColumnIndexByType_(columns, "email");
  const phoneIdx = findColumnIndexByType_(columns, "telefono");
  const webIdx = findColumnIndexByType_(columns, "web");
  const companyIdx = findColumnIndexByType_(columns, "empresa");

  const values = sheet.getRange(2, 1, lastRow - 1, columns.length).getDisplayValues();
  const seenHashMap = {};
  const seenEmailMap = {};

  for (let i = 0; i < values.length; i += 1) {
    const row = values[i] || [];
    const emailRaw = emailIdx >= 0 ? String(row[emailIdx] || "").trim().toLowerCase() : "";
    const email = isValidEmail_(emailRaw) ? emailRaw : "";
    if (email && !seenEmailMap[email]) {
      seenEmailMap[email] = true;
      outEmails.push(email);
    }

    const phoneRaw = phoneIdx >= 0 ? String(row[phoneIdx] || "").trim() : "";
    const phone = normalizePhone_(phoneRaw, scope);
    const web = webIdx >= 0 ? normalizeWeb_(String(row[webIdx] || "").trim()) : "";
    const company = companyIdx >= 0 ? normalizeCompanyName_(String(row[companyIdx] || "").trim()) : "";
    const rawKey = [
      email,
      phone,
      getDomain_(web),
      String(company || "").toLowerCase()
    ].join("|");

    if (!rawKey.replace(/\|/g, "").trim()) continue;
    const hash = hashText_(rawKey);
    if (seenHashMap[hash]) continue;
    seenHashMap[hash] = true;
    outHashes.push(hash);
  }

  return {
    seenHashes: outHashes,
    seenEmails: outEmails
  };
}

function findColumnIndexByType_(columns, wantedType) {
  const list = Array.isArray(columns) ? columns : [];
  const type = String(wantedType || "").trim();
  if (!type) return -1;
  for (let i = 0; i < list.length; i += 1) {
    if (String(list[i] && list[i].type || "").trim() === type) return i;
  }
  return -1;
}

function writeRecordsToSheet_(sheet, columns, records) {
  if (!records.length) return 0;
  ensureVisibleRows_(sheet, 1, Number(sheet.getMaxRows() || 1));
  const rows = records.map((record) => columns.map((col) => pickValueByType_(record, col.type)));
  const range = sheet.getRange(2, 1, rows.length, columns.length);
  range.setValues(rows);
  range.setVerticalAlignment("top");
  range.setHorizontalAlignment("left");
  range.setWrap(true);
  ensureVisibleRows_(sheet, 2, rows.length);
  sheet.autoResizeColumns(1, columns.length);
  sheet.autoResizeRows(2, rows.length);
  return rows.length;
}

function appendRecordsToSheet_(sheet, columns, records, startRow) {
  if (!records.length) return 0;
  ensureVisibleRows_(sheet, 1, Number(sheet.getMaxRows() || 1));
  const rows = records.map((record) => columns.map((col) => pickValueByType_(record, col.type)));
  const range = sheet.getRange(startRow, 1, rows.length, columns.length);
  range.setValues(rows);
  range.setVerticalAlignment("top");
  range.setHorizontalAlignment("left");
  range.setWrap(true);
  ensureVisibleRows_(sheet, startRow, rows.length);
  sheet.autoResizeColumns(1, columns.length);
  sheet.autoResizeRows(startRow, rows.length);
  return rows.length;
}

function pickValueByType_(record, type) {
  switch (type) {
    case "texto": return outputOrMissing_(record.notas || "");
    case "empresa": return outputOrMissing_(record.empresa);
    case "contacto": return outputOrMissing_(record.contacto);
    case "descripcion_medio_empresa": return outputOrMissing_(record.descripcion_medio_empresa);
    case "cargo": return outputOrMissing_(record.cargo);
    case "funcion_cargo": return outputOrMissing_(record.funcion_cargo);
    case "email": return outputOrMissing_(record.email);
    case "telefono": return outputOrMissing_(record.telefono);
    case "web": return outputOrMissing_(record.web);
    case "linkedin": return outputOrMissing_(record.linkedin);
    case "instagram": return outputOrMissing_(record.instagram);
    case "youtube": return outputOrMissing_(record.youtube);
    case "tiktok": return outputOrMissing_(record.tiktok);
    case "x": return outputOrMissing_(record.x);
    case "contenido": return outputOrMissing_(record.contenido);
    case "pais": return outputOrMissing_(record.pais);
    case "busqueda": return outputOrMissing_(record.busqueda);
    case "fuente": return outputOrMissing_(record.fuente);
    case "dominio_web_generico": return outputOrMissing_(record.dominio_web_generico || record.dominio);
    case "dominio": return outputOrMissing_(record.dominio_web_generico || record.dominio);
    case "ciudad": return outputOrMissing_(record.ciudad);
    case "provincia": return outputOrMissing_(record.provincia);
    case "estado": return outputOrMissing_(record.estado);
    case "notas": return outputOrMissing_(record.notas);
    default: return outputOrMissing_("");
  }
}

function outputOrMissing_(value) {
  const raw = String(value == null ? "" : value).trim();
  if (raw) return raw;
  return String(APP_CONFIG.missingWebValue || "IA no encuentra");
}

function normalizePhone_(raw, scope) {
  const source = String(raw || "").trim();
  if (!source) return "";
  let plain = source.replace(/[^\d]/g, "");
  if (!plain) return "";
  plain = plain.replace(/^00+/, "");

  if (isSpainScope_(scope)) {
    if (plain.indexOf("34") === 0 && plain.length >= 11) {
      plain = plain.slice(2);
    }
    if (plain.length !== 9) return "";
    return plain;
  }

  if (plain.length < 8 || plain.length > 15) return "";
  return plain;
}

function isValidEmail_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!value) return false;
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/.test(value)) return false;
  if (value.indexOf("..") >= 0) return false;

  const parts = value.split("@");
  if (parts.length !== 2) return false;

  const local = parts[0];
  const domain = parts[1];
  if (!local || !domain) return false;
  if (local.startsWith(".") || local.endsWith(".")) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  if (/\.(png|jpg|jpeg|gif|svg|webp|ico|bmp|pdf|css|js|json|xml|woff2?|ttf|otf|eot|map)$/i.test(local)) return false;
  if (isLikelyTechnicalLocalPart_(local)) return false;

  const labels = domain.split(".");
  if (labels.length < 2) return false;
  for (let i = 0; i < labels.length; i += 1) {
    const label = labels[i];
    if (!label) return false;
    if (!/^[a-z0-9-]+$/.test(label)) return false;
    if (label.startsWith("-") || label.endsWith("-")) return false;
  }

  if (isLikelyAssetEmail_(value)) return false;
  return true;
}

function isGenericMailboxEmail_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return false;
  const local = value.split("@")[0] || "";
  if (!local) return false;
  const genericLocals = {
    info: true,
    contacto: true,
    contact: true,
    hola: true,
    hello: true,
    admin: true,
    support: true,
    soporte: true,
    prensa: true,
    press: true,
    booking: true,
    office: true,
    team: true,
    ventas: true,
    sales: true,
    call: true,
    center: true,
    callcenter: true,
    "call-center": true,
    "call.center": true,
    publicidad: true,
    comercial: true,
    rrpp: true,
    tienda: true,
    shop: true,
    lopd: true,
    rgpd: true,
    legal: true,
    privacidad: true,
    privacy: true,
    compliance: true,
    datos: true,
    data: true,
    redes: true,
    social: true,
    sociales: true,
    community: true,
    comunidad: true,
    digital: true,
    atencioncliente: true,
    customer: true,
    customerservice: true,
    newsletter: true,
    suscripciones: true,
    assinaturas: true,
    noreply: true,
    "no-reply": true,
    donotreply: true,
    "do-not-reply": true
  };
  return !!genericLocals[local];
}

function isRoleLikeMailboxEmailStrict_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return false;
  if (isGenericMailboxEmail_(value)) return true;
  const local = String(value.split("@")[0] || "").trim().toLowerCase();
  if (!local) return false;

  const normalized = local.replace(/[\d._-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!normalized) return false;
  const tokens = normalized.split(" ").filter((x) => x);
  if (!tokens.length) return false;

  const roleTokens = {
    info: true,
    contacto: true,
    contact: true,
    hola: true,
    hello: true,
    admin: true,
    support: true,
    soporte: true,
    prensa: true,
    press: true,
    booking: true,
    office: true,
    team: true,
    ventas: true,
    sales: true,
    noreply: true,
    reply: true,
    comunicacion: true,
    communication: true,
    media: true,
    marketing: true,
    events: true,
    eventos: true,
    oficina: true,
    bandas: true,
    editorial: true,
    redaccion: true,
    contenidos: true,
    publicidad: true,
    comercial: true,
    rrpp: true,
    tienda: true,
    shop: true,
    lopd: true,
    rgpd: true,
    legal: true,
    privacidad: true,
    privacy: true,
    compliance: true,
    datos: true,
    data: true,
    redes: true,
    social: true,
    sociales: true,
    community: true,
    comunidad: true,
    digital: true,
    newsletter: true,
    call: true,
    center: true,
    atencion: true,
    cliente: true,
    customer: true,
    service: true,
    suscripciones: true,
    assinaturas: true
  };

  if (roleTokens[tokens[0]]) return true;
  const joined = tokens.join("");
  if (/^(info|contacto|contact|soporte|support|prensa|press|booking|ventas|sales|comunicacion|communication|media|marketing|events?|eventos?|callcenter|atencioncliente|customerservice|newsletter|suscripciones|assinaturas|oficina|bandas|editorial|redaccion|contenidos|publicidad|comercial|rrpp|tienda|shop|lopd|rgpd|legal|privacidad|privacy|compliance|datos|data|redes|social|sociales|community|comunidad|digital)$/.test(joined)) {
    return true;
  }
  return false;
}

function isPublicMailboxDomain_(domain) {
  const d = String(domain || "").trim().toLowerCase();
  if (!d) return false;
  const publicDomains = {
    "gmail.com": true,
    "googlemail.com": true,
    "outlook.com": true,
    "hotmail.com": true,
    "hotmail.es": true,
    "live.com": true,
    "msn.com": true,
    "yahoo.com": true,
    "yahoo.es": true,
    "ymail.com": true,
    "aol.com": true,
    "proton.me": true,
    "protonmail.com": true,
    "icloud.com": true,
    "me.com": true,
    "gmx.com": true,
    "gmx.es": true,
    "mail.com": true
  };
  return !!publicDomains[d];
}

function getRootDomain_(domainOrUrl) {
  const normalized = normalizeDomainGeneric_(domainOrUrl);
  if (!normalized) return "";
  const labels = normalized.split(".").filter((x) => x);
  if (labels.length <= 2) return normalized;
  const tail2 = `${labels[labels.length - 2]}.${labels[labels.length - 1]}`;
  const knownSecondLevel = {
    "co.uk": true,
    "org.uk": true,
    "ac.uk": true,
    "com.es": true,
    "org.es": true,
    "gob.es": true,
    "edu.es": true,
    "com.mx": true,
    "com.br": true,
    "co.jp": true
  };
  if (knownSecondLevel[tail2] && labels.length >= 3) {
    return `${labels[labels.length - 3]}.${tail2}`;
  }
  return tail2;
}

function verifyDomainHasDnsRecords_(domain, state) {
  const normalized = normalizeDomainGeneric_(domain);
  if (!normalized) {
    return { ok: false, mxOk: false, aOk: false, source: "invalid" };
  }

  const cache = (state && state.emailDomainAuditCache && typeof state.emailDomainAuditCache === "object")
    ? state.emailDomainAuditCache
    : {};
  if (state && (!state.emailDomainAuditCache || typeof state.emailDomainAuditCache !== "object")) {
    state.emailDomainAuditCache = cache;
  }
  const ttlMs = Math.max(60000, Number(APP_CONFIG.strictEmailAuditDomainCacheTtlMs || 6 * 60 * 60 * 1000));
  const now = Date.now();
  const cached = cache[normalized];
  if (cached && Number(cached.checkedAtMs || 0) > 0 && now - Number(cached.checkedAtMs || 0) <= ttlMs) {
    return {
      ok: cached.ok === true,
      mxOk: cached.mxOk === true,
      aOk: cached.aOk === true,
      source: "cache"
    };
  }

  const mxOk = queryDnsRecordExists_(normalized, "MX");
  const aOk = mxOk ? true : queryDnsRecordExists_(normalized, "A");
  const ok = mxOk || aOk;
  cache[normalized] = {
    checkedAtMs: now,
    ok: ok,
    mxOk: mxOk,
    aOk: aOk
  };
  return {
    ok: ok,
    mxOk: mxOk,
    aOk: aOk,
    source: "live"
  };
}

function queryDnsRecordExists_(domain, type) {
  const d = normalizeDomainGeneric_(domain);
  const t = String(type || "").trim().toUpperCase();
  if (!d || !t) return false;
  try {
    const url = `https://dns.google/resolve?name=${encodeURIComponent(d)}&type=${encodeURIComponent(t)}`;
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: true
    });
    const code = Number(resp.getResponseCode() || 0);
    if (code < 200 || code >= 300) return false;
    const body = JSON.parse(resp.getContentText() || "{}");
    if (Number(body.Status || 0) !== 0) return false;
    const answers = Array.isArray(body.Answer) ? body.Answer : [];
    return answers.length > 0;
  } catch (err) {
    return false;
  }
}

function normalizeTextForMatch_(text) {
  let out = String(text || "").toLowerCase();
  try {
    out = out.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } catch (err) {
    // Si el entorno no soporta normalize, seguimos con el texto original.
  }
  out = out
    .replace(/[^a-z0-9@.\s_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return out;
}

function buildEntityTokensForDomainContrast_(rec) {
  const input = rec || {};
  const rawParts = [
    input.empresa,
    input.nombre_contacto,
    input.contacto,
    input.persona,
    input.nombre_completo,
    input.nombre,
    input.source_title,
    input.fuente
  ];
  const stop = {
    de: true,
    del: true,
    la: true,
    el: true,
    los: true,
    las: true,
    y: true,
    en: true,
    por: true,
    para: true,
    con: true,
    the: true,
    and: true,
    of: true,
    music: true,
    records: true,
    media: true,
    group: true,
    company: true
  };

  const out = [];
  const seen = {};
  for (let i = 0; i < rawParts.length; i += 1) {
    const normalized = normalizeTextForMatch_(rawParts[i]);
    if (!normalized) continue;
    const tokens = normalized.split(/\s+/).filter((t) => t && t.length >= 4 && !stop[t] && !/^\d+$/.test(t));
    for (let j = 0; j < tokens.length; j += 1) {
      const token = tokens[j];
      if (seen[token]) continue;
      seen[token] = true;
      out.push(token);
      if (out.length >= 24) return out;
    }
  }
  return out;
}

function hasEmailEntityContextMatch_(email, rec, pages) {
  const value = normalizeTextForMatch_(email);
  if (!value) return false;
  const tokens = buildEntityTokensForDomainContrast_(rec);
  if (!tokens.length) return false;
  const list = Array.isArray(pages) ? pages : [];
  const windowSize = Math.max(120, Number(APP_CONFIG.strictEmailDomainContextWindowChars || 260));

  for (let i = 0; i < list.length; i += 1) {
    const page = list[i] || {};
    const pageText = normalizeTextForMatch_(String(page.text || "") || stripHtmlForText_(String(page.rawHtml || "")));
    if (!pageText) continue;
    let idx = pageText.indexOf(value);
    while (idx >= 0) {
      const start = Math.max(0, idx - windowSize);
      const end = Math.min(pageText.length, idx + value.length + windowSize);
      const snippet = pageText.slice(start, end);
      for (let t = 0; t < tokens.length; t += 1) {
        if (snippet.indexOf(tokens[t]) >= 0) {
          return true;
        }
      }
      idx = pageText.indexOf(value, idx + value.length);
    }
  }
  return false;
}

function auditEmailEvidenceStrict_(email, rec, pages, sourceUrl, state) {
  const value = String(email || "").trim().toLowerCase();
  const output = {
    ok: false,
    checksPassed: 0,
    checksTotal: 0,
    summary: "email vacio",
    failedChecks: []
  };
  if (!value) return output;

  const domain = String(value.split("@")[1] || "").trim().toLowerCase();
  const local = String(value.split("@")[0] || "").trim().toLowerCase();
  const profileCfg = (state && state.profileConfig && typeof state.profileConfig === "object") ? state.profileConfig : {};
  const ignoreQualityLock = profileCfg.ignoreQualityLock === true;
  const allowRoleMailboxEmails = profileCfg.allowRoleMailboxEmails === true;
  const rejectRoleLikeMailbox = APP_CONFIG.strictEmailRejectRoleLikeMailbox === true && !allowRoleMailboxEmails;
  const recObj = rec || {};
  const pageList = Array.isArray(pages) ? pages : [];
  const targetCountNow = Math.max(0, Number((state && state.targetCount) || 0));
  const staleRoundsNow = Math.max(0, Number((state && state.staleRounds) || 0));
  const highVolumeMode = targetCountNow >= Math.max(200, Number(APP_CONFIG.highVolumeTargetThreshold || 1000));
  const relaxEmailAuditInHighVolume = highVolumeMode
    && staleRoundsNow >= Math.max(0, Number(APP_CONFIG.highVolumeRelaxEmailAuditAfterStaleRounds || 3));
  const requireDnsCheck = APP_CONFIG.strictEmailAuditRequireMxOrA
    && !(highVolumeMode && APP_CONFIG.highVolumeSkipDnsAudit === true);
  const recWebRoot = getRootDomain_(String(recObj.web || ""));
  const sourceRoot = getRootDomain_(String(sourceUrl || ""));
  const emailRoot = getRootDomain_(domain);
  const pageRoots = {};
  for (let i = 0; i < pageList.length; i += 1) {
    const pageUrl = normalizeWeb_(String(pageList[i] && pageList[i].url || "").trim());
    const root = getRootDomain_(pageUrl);
    if (root) pageRoots[root] = true;
  }

  const appearsInPages = (() => {
    for (let i = 0; i < pageList.length; i += 1) {
      const html = String(pageList[i] && pageList[i].rawHtml || "").toLowerCase();
      const text = String(pageList[i] && pageList[i].text || "").toLowerCase();
      if (html.indexOf(value) >= 0 || text.indexOf(value) >= 0) return true;
    }
    return false;
  })();
  const dnsResult = requireDnsCheck
    ? verifyDomainHasDnsRecords_(domain, state)
    : { ok: true, mxOk: false, aOk: false, source: highVolumeMode ? "skip_high_volume" : "skip_config" };
  const publicMailboxDomain = isPublicMailboxDomain_(domain);
  const ultraRequireCorporateDomain = APP_CONFIG.ultraModeEnabled === true && APP_CONFIG.ultraEmailRequireCorporateDomain === true;
  const recDeclaredRoot = getRootDomain_(String(recObj.dominio_web_generico || recObj.web || ""));
  const domainMatchesDeclaredRoot = !!(emailRoot && recDeclaredRoot && emailRoot === recDeclaredRoot);
  const domainMatchesFetchedRoots = !!(emailRoot && (emailRoot === sourceRoot || !!pageRoots[emailRoot]));
  const entityContextOk = hasEmailEntityContextMatch_(value, recObj, pageList);
  const domainContrastEnabled = APP_CONFIG.strictEmailDomainContrastEnabled === true;
  const requireDomainContrast = domainContrastEnabled && !relaxEmailAuditInHighVolume;
  const requireDomainCoherence = APP_CONFIG.strictEmailAuditRequireDomainCoherence && !relaxEmailAuditInHighVolume;

  const publicMailboxContextOk = APP_CONFIG.strictEmailDomainRequireEntityContextForPublicMailbox === true
    ? entityContextOk
    : true;
  const mismatchContextOk = APP_CONFIG.strictEmailDomainRequireEntityContextWhenDomainMismatch === true
    ? entityContextOk
    : true;

  const domainContrastOk = !requireDomainContrast
    ? true
    : (publicMailboxDomain
      ? publicMailboxContextOk
      : (domainMatchesDeclaredRoot || (domainMatchesFetchedRoots && mismatchContextOk)));

  const domainCoherence = requireDomainCoherence
    ? (domainMatchesDeclaredRoot
      || (emailRoot && (emailRoot === recWebRoot || emailRoot === sourceRoot || !!pageRoots[emailRoot]))
      || (!ultraRequireCorporateDomain && publicMailboxDomain && publicMailboxContextOk))
    : true;
  const blockedDomains = {
    "example.com": true,
    "example.org": true,
    "example.net": true,
    "test.com": true,
    "invalid.com": true,
    "mailinator.com": true,
    "guerrillamail.com": true,
    "10minutemail.com": true
  };
  const checks = [
    { id: "syntax_ok", ok: isValidEmail_(value) },
    { id: "local_quality_ok", ok: !!local && !isLikelyTechnicalLocalPart_(local) },
    { id: "not_generic_role_mailbox", ok: !isGenericMailboxEmail_(value) },
    { id: "not_role_like_mailbox_strict", ok: rejectRoleLikeMailbox ? !isRoleLikeMailboxEmailStrict_(value) : true },
    { id: "web_evidence_ok", ok: appearsInPages },
    { id: "domain_shape_ok", ok: !!normalizeDomainGeneric_(domain) },
    { id: "domain_not_blacklisted", ok: !blockedDomains[domain] },
    { id: "mx_or_a_dns_ok", ok: requireDnsCheck ? dnsResult.ok : true },
    { id: "domain_matches_declared_root", ok: recDeclaredRoot ? domainMatchesDeclaredRoot : true },
    { id: "email_entity_context_ok", ok: entityContextOk || !requireDomainContrast },
    { id: "domain_contrast_ok", ok: domainContrastOk || !requireDomainContrast },
    { id: "corporate_domain_required", ok: ultraRequireCorporateDomain ? !publicMailboxDomain : true },
    { id: "domain_coherence_ok", ok: domainCoherence || !requireDomainCoherence }
  ];
  const passed = checks.filter((x) => x.ok).length;
  const total = checks.length;
  const minChecksFloor = ignoreQualityLock ? 3 : 4;
  let minChecks = Math.max(
    minChecksFloor,
    ignoreQualityLock ? 0 : getQualityMinEmailChecks_(),
    Number(profileCfg.strictEmailAuditMinChecks || APP_CONFIG.strictEmailAuditMinChecks || 6)
  );
  if (relaxEmailAuditInHighVolume) {
    const highVolumeEmailFloor = Math.max(3, Number(APP_CONFIG.highVolumeMinEmailChecksFloor || 4));
    minChecks = Math.min(minChecks, highVolumeEmailFloor);
  }
  const effectiveMin = Math.min(minChecks, total);
  const failed = checks.filter((x) => !x.ok).map((x) => x.id);
  const checkOk = (id) => {
    for (let i = 0; i < checks.length; i += 1) {
      if (checks[i].id === id) return checks[i].ok === true;
    }
    return false;
  };

  let ok = passed >= effectiveMin;
  if (!checkOk("syntax_ok")) ok = false; // syntax_ok obligatorio
  if (rejectRoleLikeMailbox && !checkOk("not_role_like_mailbox_strict")) ok = false;
  if (!checkOk("web_evidence_ok")) ok = false; // web_evidence_ok obligatorio
  if (requireDnsCheck && !checkOk("mx_or_a_dns_ok")) ok = false;
  if (requireDomainContrast && !checkOk("domain_contrast_ok")) ok = false;
  if (ultraRequireCorporateDomain && !checkOk("corporate_domain_required")) ok = false;
  if (requireDomainCoherence && !checkOk("domain_coherence_ok")) ok = false;

  output.ok = ok;
  output.checksPassed = passed;
  output.checksTotal = total;
  output.failedChecks = failed;
  output.summary = ok
    ? `ok ${passed}/${total}`
    : `fallo ${passed}/${total}; ${failed.join(", ")}`;
  return output;
}

function pickBestEmailEvidence_(candidateEmailVerified, detectedEmails, disallowGenericMailboxEmails, rec, sourceUrl, pages, allowRoleMailboxEmails) {
  const disallowGeneric = disallowGenericMailboxEmails === true;
  const disallowRoleLike = APP_CONFIG.strictEmailRejectRoleLikeMailbox === true && allowRoleMailboxEmails !== true;
  const candidate = String(candidateEmailVerified || "").trim().toLowerCase();
  const detected = Array.isArray(detectedEmails) ? detectedEmails : [];
  const unique = [];
  const seen = {};
  if (candidate && isValidEmail_(candidate)) {
    seen[candidate] = true;
    unique.push(candidate);
  }
  for (let i = 0; i < detected.length; i += 1) {
    const email = String(detected[i] || "").trim().toLowerCase();
    if (!isValidEmail_(email) || seen[email]) continue;
    seen[email] = true;
    unique.push(email);
  }
  if (!unique.length) return "";
  const filtered = [];
  for (let i = 0; i < unique.length; i += 1) {
    const email = unique[i];
    if (disallowGeneric && isGenericMailboxEmail_(email)) continue;
    if (disallowRoleLike && isRoleLikeMailboxEmailStrict_(email)) continue;
    filtered.push(email);
  }
  const candidates = filtered.length ? filtered : unique;

  let best = "";
  let bestScore = -999999;
  for (let i = 0; i < candidates.length; i += 1) {
    const email = candidates[i];
    const score = scoreEmailDomainFit_(email, rec, sourceUrl, pages, candidate && email === candidate, allowRoleMailboxEmails);
    if (score > bestScore) {
      bestScore = score;
      best = email;
    }
  }
  return best;
}

function scoreEmailDomainFit_(email, rec, sourceUrl, pages, preferredCandidate, allowRoleMailboxEmails) {
  const value = String(email || "").trim().toLowerCase();
  if (!isValidEmail_(value)) return -9999;
  const domain = String(value.split("@")[1] || "").trim().toLowerCase();
  const root = getRootDomain_(domain);
  const recObj = rec || {};
  const recRoot = getRootDomain_(String(recObj.dominio_web_generico || recObj.web || ""));
  const sourceRoot = getRootDomain_(String(sourceUrl || ""));
  const list = Array.isArray(pages) ? pages : [];
  const pageRoots = {};
  for (let i = 0; i < list.length; i += 1) {
    const pageUrl = normalizeWeb_(String(list[i] && list[i].url || "").trim());
    const r = getRootDomain_(pageUrl);
    if (r) pageRoots[r] = true;
  }

  let score = 0;
  if (preferredCandidate) score += 35;
  if (recRoot && root && recRoot === root) score += 70;
  if (sourceRoot && root && sourceRoot === root) score += 30;
  if (root && pageRoots[root]) score += 22;
  if (isPublicMailboxDomain_(domain)) score -= 8;
  if (isGenericMailboxEmail_(value)) score -= 120;
  if (APP_CONFIG.strictEmailRejectRoleLikeMailbox && allowRoleMailboxEmails !== true && isRoleLikeMailboxEmailStrict_(value)) score -= 160;
  return score;
}

function normalizeDomainGeneric_(rawDomainOrUrl) {
  const raw = String(rawDomainOrUrl || "").trim().toLowerCase();
  if (!raw) return "";
  let domain = raw;
  if (/^https?:\/\//i.test(raw)) {
    domain = getDomain_(raw);
  } else {
    domain = raw.replace(/^www\./, "");
  }
  domain = String(domain || "").trim().toLowerCase().replace(/^www\./, "");
  if (!/^[a-z0-9.-]+\.[a-z]{2,24}$/i.test(domain)) return "";
  return domain;
}

function resolveDescriptionField_(rec, pages, companyHint, sourceUrl) {
  const input = rec || {};
  const pageList = Array.isArray(pages) ? pages : [];
  const company = normalizeCompanyName_(companyHint || input.empresa || "");
  const contact = normalizePersonName_(String(input.nombre_contacto || input.contacto || "").trim());
  const cargo = normalizeInformativeText_(String(input.cargo || input.puesto || input.rol || "").trim(), [company, contact], 3);
  const banned = [company, contact, cargo];
  const directCandidates = [
    input.descripcion_medio_empresa,
    input.descripcion,
    input.descripcion_empresa,
    input.about,
    input.bio
  ];
  for (let i = 0; i < directCandidates.length; i += 1) {
    const clean = sanitizeInformativeFieldText_(directCandidates[i]);
    const normalized = normalizeInformativeText_(clean, banned, 12);
    if (normalized) {
      const adapted = adaptDescriptionToneForOutput_(normalized, input, pageList, sourceUrl);
      if (adapted) return trimInformativeField_(adapted, 220);
    }
  }

  const snippetSources = [
    input.source_snippet,
    input.source_title,
    input.notas
  ];
  for (let i = 0; i < snippetSources.length; i += 1) {
    const sentences = extractInformativeSentences_(snippetSources[i], 3);
    for (let s = 0; s < sentences.length; s += 1) {
      const normalized = normalizeInformativeText_(sanitizeInformativeFieldText_(sentences[s]), banned, 18);
      if (normalized) {
        const adapted = adaptDescriptionToneForOutput_(normalized, input, pageList, sourceUrl);
        if (adapted) return trimInformativeField_(adapted, 220);
      }
    }
  }

  const metaDescription = extractMetaDescriptionFromPages_(pageList);
  if (metaDescription) {
    const normalizedMeta = normalizeInformativeText_(sanitizeInformativeFieldText_(metaDescription), banned, 18);
    if (normalizedMeta) {
      const adaptedMeta = adaptDescriptionToneForOutput_(normalizedMeta, input, pageList, sourceUrl);
      if (adaptedMeta) return trimInformativeField_(adaptedMeta, 220);
    }
  }

  const sentenceFromPage = extractDescriptionSentenceFromPages_(pageList, company);
  if (sentenceFromPage) {
    const normalizedPage = normalizeInformativeText_(sanitizeInformativeFieldText_(sentenceFromPage), banned, 18);
    if (normalizedPage) {
      const adaptedPage = adaptDescriptionToneForOutput_(normalizedPage, input, pageList, sourceUrl);
      if (adaptedPage) return trimInformativeField_(adaptedPage, 220);
    }
  }

  const inferredCategory = inferEntityCategoryFromEvidence_(input, pageList, sourceUrl);
  const inferredNeutral = buildNeutralDescriptionFromCategory_(inferredCategory);
  if (inferredNeutral) return trimInformativeField_(inferredNeutral, 220);

  // Sin evidencia semantica suficiente en web publica, dejamos vacio.
  // La capa de salida escribira "IA no encuentra" de forma consistente.
  return "";
}

function adaptDescriptionToneForOutput_(description, rec, pages, sourceUrl) {
  const text = String(description || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  if (!isPromotionalDescriptionText_(text)) return text;
  const category = inferEntityCategoryFromEvidence_(rec || {}, Array.isArray(pages) ? pages : [], sourceUrl);
  const neutral = buildNeutralDescriptionFromCategory_(category);
  return neutral || text;
}

function isPromotionalDescriptionText_(value) {
  const normalized = normalizeTextForMatch_(value || "");
  if (!normalized) return false;
  if (/(^|\s)(visita|informate|descubre|entra|haz clic|click aqui|suscribete|suscribase|lee mas|ver mas|contacta|contactanos|escribenos|envianos|no dudes)\b/.test(normalized)) return true;
  if (/(para enviarnos|tambien puedes contactarnos|ponte en contacto|solicitar informacion)/.test(normalized)) return true;
  if (/(actualidad|noticias?|entrevistas?|especiales?|cronicas?|agenda|criticas?|podcast|playlists?|videos?|fotos?|opinion)/.test(normalized) && /(visita|informate|descubre|entra|contacta|suscribete)/.test(normalized)) return true;
  const contentTokenMatches = normalized.match(/\b(noticias?|entrevistas?|especiales?|cronicas?|agenda|criticas?|podcast|playlists?|videos?|fotos?|opinion)\b/g);
  if (contentTokenMatches && contentTokenMatches.length >= 3) return true;
  if (/(noticias?,\s*entrevistas?,\s*especiales?)/.test(normalized)) return true;
  return false;
}

function buildNeutralDescriptionFromCategory_(categoryLabel) {
  const category = normalizeTextForMatch_(categoryLabel || "");
  if (!category) return "";
  if (/medio de comunicacion musical/.test(category)) {
    return "Medio de comunicacion musical especializado en actualidad, entrevistas y critica.";
  }
  if (/agencia de management y booking/.test(category)) {
    return "Agencia de management y booking de artistas y proyectos musicales.";
  }
  if (/promotora de conciertos/.test(category)) {
    return "Promotora de conciertos, festivales y eventos musicales.";
  }
  if (/sello discografico/.test(category) || /editorial musical/.test(category)) {
    return "Sello discografico o editorial centrado en lanzamientos y desarrollo artistico.";
  }
  if (/productora del sector musical/.test(category)) {
    return "Productora especializada en servicios y proyectos del sector musical.";
  }
  if (/entidad cultural vinculada a la musica/.test(category)) {
    return "Entidad cultural vinculada a la musica y su ecosistema profesional.";
  }
  return "";
}

function resolveRoleFunctionField_(rec, pages, cargoHint, contactHint, companyHint, descriptionHint) {
  const input = rec || {};
  const pageList = Array.isArray(pages) ? pages : [];
  const company = normalizeCompanyName_(companyHint || input.empresa || "");
  const contact = normalizePersonName_(String(contactHint || input.nombre_contacto || input.contacto || "").trim());
  const cargo = normalizeInformativeText_(String(cargoHint || input.cargo || input.puesto || input.rol || "").trim(), [company, contact], 3);
  const banned = [company, contact, cargo];
  const directCandidates = [
    input.funcion_cargo,
    input.funcion,
    input.funcion_del_cargo,
    input.responsabilidades
  ];
  for (let i = 0; i < directCandidates.length; i += 1) {
    const normalized = normalizeInformativeText_(sanitizeInformativeFieldText_(directCandidates[i]), banned, 12);
    if (normalized) return trimInformativeField_(normalized, 220);
  }

  const snippetSources = [
    input.source_snippet,
    input.notas
  ];
  for (let i = 0; i < snippetSources.length; i += 1) {
    const sentences = extractInformativeSentences_(snippetSources[i], 6);
    let bestSentence = "";
    let bestScore = -1;
    for (let s = 0; s < sentences.length; s += 1) {
      const sentence = sentences[s];
      const score = scoreFunctionSentence_(sentence, cargo, contact, company);
      if (score > bestScore) {
        bestScore = score;
        bestSentence = sentence;
      }
    }
    if (bestScore >= 40 && bestSentence) {
      const normalized = normalizeInformativeText_(sanitizeInformativeFieldText_(bestSentence), banned, 12);
      if (normalized) return trimInformativeField_(normalized, 220);
    }
  }

  let bestPageSentence = "";
  let bestPageScore = -1;
  for (let i = 0; i < pageList.length; i += 1) {
    const page = pageList[i] || {};
    const pageText = String(page.text || "").slice(0, 5500);
    const sentences = extractInformativeSentences_(pageText, 14);
    for (let s = 0; s < sentences.length; s += 1) {
      const sentence = sentences[s];
      const score = scoreFunctionSentence_(sentence, cargo, contact, company);
      if (score > bestPageScore) {
        bestPageScore = score;
        bestPageSentence = sentence;
      }
    }
  }
  if (bestPageScore >= 48 && bestPageSentence) {
    const normalized = normalizeInformativeText_(sanitizeInformativeFieldText_(bestPageSentence), banned, 12);
    if (normalized) return trimInformativeField_(normalized, 220);
  }

  // Sin evidencia semantica suficiente en web publica, dejamos vacio.
  // La capa de salida escribira "IA no encuentra" de forma consistente.
  return "";
}

function sanitizeInformativeFieldText_(rawValue) {
  let text = String(rawValue || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  text = text
    .replace(/https?:\/\/[^\s]+/gi, " ")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/ig, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text;
}

function extractInformativeSentences_(rawText, maxSentences) {
  const text = sanitizeInformativeFieldText_(rawText);
  if (!text) return [];
  const maxOut = Math.max(1, Number(maxSentences || 8));
  const out = [];
  const seen = {};
  const parts = text.split(/[.!?\n\r]+/);
  for (let i = 0; i < parts.length; i += 1) {
    const sentence = String(parts[i] || "").replace(/\s+/g, " ").trim();
    if (!sentence) continue;
    if (sentence.length < 20 || sentence.length > 260) continue;
    const lower = sentence.toLowerCase();
    if (/^ia no encuentra$/i.test(lower)) continue;
    if (/^(n\/a|na)$/i.test(lower)) continue;
    if (seen[lower]) continue;
    seen[lower] = true;
    out.push(sentence);
    if (out.length >= maxOut) break;
  }
  return out;
}

function extractMetaDescriptionFromPages_(pages) {
  const pageList = Array.isArray(pages) ? pages : [];
  for (let i = 0; i < pageList.length; i += 1) {
    const rawHtml = String(pageList[i] && pageList[i].rawHtml || "");
    if (!rawHtml) continue;
    const patterns = [
      /<meta[^>]+(?:name|property)=["']description["'][^>]+content=["']([^"']{20,320})["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']{20,320})["'][^>]+(?:name|property)=["']description["'][^>]*>/i,
      /<meta[^>]+(?:name|property)=["']og:description["'][^>]+content=["']([^"']{20,320})["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']{20,320})["'][^>]+(?:name|property)=["']og:description["'][^>]*>/i,
      /<meta[^>]+(?:name|property)=["']twitter:description["'][^>]+content=["']([^"']{20,320})["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']{20,320})["'][^>]+(?:name|property)=["']twitter:description["'][^>]*>/i
    ];
    for (let p = 0; p < patterns.length; p += 1) {
      const match = rawHtml.match(patterns[p]);
      if (!match || !match[1]) continue;
      const clean = sanitizeInformativeFieldText_(decodeBasicHtmlEntities_(String(match[1] || "")));
      if (clean.length >= 20) return clean;
    }
  }
  return "";
}

function extractDescriptionSentenceFromPages_(pages, company) {
  const pageList = Array.isArray(pages) ? pages : [];
  const companyTokens = normalizeTextForMatch_(company || "").split(" ").filter((t) => t && t.length >= 4);
  let bestSentence = "";
  let bestScore = -1;
  for (let i = 0; i < pageList.length; i += 1) {
    const page = pageList[i] || {};
    const sentences = extractInformativeSentences_(String(page.text || "").slice(0, 6500), 16);
    for (let s = 0; s < sentences.length; s += 1) {
      const sentence = sentences[s];
      const normalized = normalizeTextForMatch_(sentence);
      if (!normalized) continue;
      let score = 0;
      if (/(revista|medio|blog|magazine|agencia|management|booking|promotora|festival|radio|podcast|sello|discograf|productora|editorial|prensa|musical)/.test(normalized)) score += 30;
      if (/(es|somos|dedicado|especializado|especializada|ofrece|servicio|actividad|empresa|entidad)/.test(normalized)) score += 16;
      if (companyTokens.length) {
        for (let t = 0; t < companyTokens.length; t += 1) {
          if (normalized.indexOf(companyTokens[t]) >= 0) score += 8;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestSentence = sentence;
      }
    }
  }
  return bestScore >= 28 ? bestSentence : "";
}

function inferEntityCategoryFromEvidence_(rec, pages, sourceUrl) {
  const input = rec || {};
  const pageList = Array.isArray(pages) ? pages : [];
  const textParts = [
    input.empresa,
    input.cargo,
    input.puesto,
    input.rol,
    input.source_title,
    input.source_snippet,
    input.fuente,
    input.descripcion_medio_empresa,
    input.descripcion,
    input.descripcion_empresa,
    sourceUrl
  ];
  for (let i = 0; i < pageList.length; i += 1) {
    textParts.push(String(pageList[i] && pageList[i].text || "").slice(0, 1800));
  }
  const haystack = normalizeTextForMatch_(textParts.join(" ").slice(0, 22000));
  if (!haystack) return "una entidad profesional del sector musical";
  const rules = [
    { regex: /(revista|medio|blog|magazine|periodist|critic|prensa|radio|podcast)/, label: "un medio de comunicacion musical" },
    { regex: /(agencia|management|booking|representacion|manager)/, label: "una agencia de management y booking musical" },
    { regex: /(promotora|promotor|conciert|festival|eventos|sala)/, label: "una promotora de conciertos y eventos musicales" },
    { regex: /(sello|discograf|label|records)/, label: "un sello discografico o editorial musical" },
    { regex: /(productora|produccion|studio|estudio)/, label: "una productora del sector musical" },
    { regex: /(asociacion|fundacion|colectivo|federacion)/, label: "una entidad cultural vinculada a la musica" }
  ];
  for (let i = 0; i < rules.length; i += 1) {
    if (rules[i].regex.test(haystack)) return rules[i].label;
  }
  return "una entidad profesional del sector musical";
}

function inferFunctionFromCargo_(cargo, descriptionHint) {
  const role = normalizeTextForMatch_(cargo || "");
  const desc = normalizeTextForMatch_(descriptionHint || "");
  if (!role && !desc) return "";
  if (/(redactor|periodista|editor|critico|locutor|presentador|reportero)/.test(role)) {
    return "Crea, edita y difunde contenidos musicales para su medio.";
  }
  if (/(manager|management|booking|representante|agent|agente|coordinador general|director)/.test(role)) {
    return "Gestiona contrataciones, relaciones profesionales y estrategia de artistas o proyectos.";
  }
  if (/(promotor|promotora|eventos|festival|concierto|programador)/.test(role)) {
    return "Coordina la planificacion y promocion de conciertos, festivales o programaciones.";
  }
  if (/(a&r|anr)/.test(role)) {
    return "Identifica talento y participa en decisiones de repertorio y desarrollo artistico.";
  }
  if (/(prensa|comunicacion|marketing|publicidad|rrpp|media)/.test(role)) {
    return "Lidera comunicacion, prensa y difusion de proyectos musicales.";
  }
  if (/(produccion|productor|tecnico|sonido)/.test(role)) {
    return "Organiza la produccion tecnica y operativa de proyectos o directos.";
  }
  if (/(coordinacion|coordinador|asistente)/.test(role)) {
    return "Coordina agendas, procesos y seguimiento diario de la actividad profesional.";
  }
  if (/(contacto|responsable)/.test(role) && /medio de comunicacion/.test(desc)) {
    return "Actua como punto de contacto editorial para propuestas y cobertura musical.";
  }
  if (role) {
    return `Desarrolla las tareas operativas y de gestion asociadas al cargo de ${cargo}.`;
  }
  return "";
}

function scoreFunctionSentence_(sentence, cargo, contact, company) {
  const normalized = normalizeTextForMatch_(sentence || "");
  if (!normalized) return 0;
  let score = 0;
  if (/(coordina|gestiona|dirige|planifica|organiza|produce|promueve|representa|redacta|edita|comunica|contrata|programa|desarrolla|supervisa|lidera)/.test(normalized)) score += 34;
  if (normalized.length >= 35 && normalized.length <= 220) score += 12;
  if (/@|https?:\/\//i.test(sentence || "")) score -= 30;
  const tokensFrom = (value) => normalizeTextForMatch_(value || "").split(" ").filter((t) => t && t.length >= 4).slice(0, 4);
  const roleTokens = tokensFrom(cargo);
  const contactTokens = tokensFrom(contact);
  const companyTokens = tokensFrom(company);
  for (let i = 0; i < roleTokens.length; i += 1) {
    if (normalized.indexOf(roleTokens[i]) >= 0) score += 10;
  }
  for (let i = 0; i < contactTokens.length; i += 1) {
    if (normalized.indexOf(contactTokens[i]) >= 0) score += 8;
  }
  for (let i = 0; i < companyTokens.length; i += 1) {
    if (normalized.indexOf(companyTokens[i]) >= 0) score += 4;
  }
  return score;
}

function trimInformativeField_(text, maxLen) {
  const raw = String(text || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  const limit = Math.max(40, Number(maxLen || 220));
  if (raw.length <= limit) return raw;
  return `${raw.slice(0, limit - 1).trim()}.`;
}

function isLowValueInformativeText_(rawValue) {
  const value = normalizeTextForMatch_(String(rawValue || ""));
  if (!value) return true;
  if (value.length < 12) return true;
  const tokenCount = value.split(" ").filter((token) => token).length;
  if (tokenCount < 3) return true;
  if (/^(ia no encuentra|n\/a|na|no disponible|sin informacion)$/i.test(value)) return true;
  if (/(ultimas noticias|ultimos articulos|latest news|opinion|opiniao|fotos y videos|fotos e videos|contactos?|contacts?|suscribete|assinaturas|suscripciones|newsletter|aviso legal|politica de privacidad|politica de cookies|terminos y condiciones|cookies?|haz clic|click aqui|leer mas|read more|ver mas|menu|inicio|home|sitemap|feed|tablon|clasificados|directorio)\b/i.test(value)) return true;
  if (/^(sobre|inicio|home|menu|contacto|contactos|newsletter)$/i.test(value)) return true;
  return false;
}

function normalizeInformativeText_(rawValue, bannedValues, minLength) {
  const value = String(rawValue || "").replace(/\s+/g, " ").trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return "";
  if (/@/.test(value)) return "";
  const minLen = Math.max(0, Number(minLength || 0));
  if (minLen > 0 && value.length < minLen) return "";
  if (minLen <= 5 && isLowValueRoleText_(value)) return "";

  const banned = Array.isArray(bannedValues) ? bannedValues : [];
  const lower = value.toLowerCase();
  for (let i = 0; i < banned.length; i += 1) {
    const rawBan = String(banned[i] || "").trim().toLowerCase();
    if (!rawBan) continue;
    if (lower === rawBan) return "";
  }
  if (minLen >= 10 && isLowValueInformativeText_(value)) return "";
  return value;
}

function isLowValueRoleText_(rawValue) {
  const value = normalizeTextForMatch_(String(rawValue || ""));
  if (!value) return true;
  if (/^(ia no encuentra|n\/a|na|no disponible|sin informacion)$/i.test(value)) return true;
  if (/^(sobre|inicio|home|menu|contacto|contactos|newsletter|suscripciones|assinaturas|equipo|team|staff|perfil|about|servicios|services?)$/i.test(value)) return true;
  if (/(ultimas noticias|politica de privacidad|politica de cookies|aviso legal|cookies?|tablon|anuncios?|clasificados|directorio|sitemap|feed)/i.test(value)) return true;
  return false;
}

function isLikelyTechnicalLocalPart_(localPart) {
  const local = String(localPart || "").trim().toLowerCase();
  if (!local) return false;
  if (/^(noreply|no-reply|donotreply|do-not-reply)$/i.test(local)) return true;
  if (/^(image|img|logo|icon|banner|sprite|assets?)$/i.test(local)) return true;
  if (/^(webmaster|postmaster)$/i.test(local)) return true;
  if (/^logo[-_.]?(dark|light|white|black|small|large|2x|3x)?$/i.test(local)) return true;
  return false;
}

function isLikelyAssetEmail_(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!value || value.indexOf("@") < 0) return false;
  const domain = value.split("@")[1] || "";
  const tld = domain.split(".").pop() || "";
  const blockedTlds = {
    png: true,
    jpg: true,
    jpeg: true,
    gif: true,
    svg: true,
    webp: true,
    bmp: true,
    ico: true,
    tif: true,
    tiff: true,
    avif: true,
    pdf: true,
    css: true,
    js: true,
    json: true,
    xml: true,
    map: true,
    woff: true,
    woff2: true,
    ttf: true,
    otf: true,
    eot: true,
    mp3: true,
    mp4: true,
    mov: true,
    avi: true,
    webm: true,
    zip: true,
    rar: true
  };
  if (blockedTlds[tld]) return true;
  if (/^[0-9]+x\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(domain)) return true;
  return false;
}

function normalizeWeb_(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  if (/^[a-z0-9.-]+\.[a-z]{2,}/i.test(value)) return "https://" + value;
  return "";
}

function getDomain_(url) {
  const m = /^https?:\/\/([^\/?#]+)/i.exec(String(url || ""));
  return m ? m[1].toLowerCase() : "";
}

function guessCompanyFromWeb_(web) {
  const d = getDomain_(web);
  if (!d) return "";
  return d.replace(/^www\./, "");
}

function hashText_(text) {
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, String(text || ""));
  return Utilities.base64EncodeWebSafe(digest).replace(/=+$/, "");
}

function buildStepResponse_(state, stepLogs, done) {
  return {
    ok: true,
    done: !!done,
    jobId: state.jobId,
    status: state.status,
    geminiModel: state.geminiModel,
    profile: state.profile || "",
    profileLabel: state.profileLabel || "",
    requested: state.targetCount,
    found: state.found,
    remaining: Math.max(0, Number(state.targetCount || 0) - Number(state.found || 0)),
    iterations: Number(state.iterations || 0),
    stopReason: state.stopReason || "",
    stopMessage: state.stopMessage || "",
    backgroundModeEnabled: state.backgroundModeEnabled === true,
    backgroundWorkerActive: state.backgroundWorkerActive === true,
    backgroundTriggerId: String(state.backgroundTriggerId || ""),
    backgroundTickCount: Number(state.backgroundTickCount || 0),
    lastBackgroundRunAt: String(state.lastBackgroundRunAt || ""),
    nextRetryAtMs: Number(state.nextRetryAtMs || 0),
    nextRetryAt: Number(state.nextRetryAtMs || 0) > 0 ? new Date(Number(state.nextRetryAtMs || 0)).toISOString() : "",
    retryBackoffMs: Number(state.retryBackoffMs || 0),
    nextRetryReason: String(state.nextRetryReason || ""),
    persistentStoreEnabled: state.persistentStoreEnabled === true,
    persistentSaveCount: Number(state.persistentSaveCount || 0),
    lastPersistentSaveAtMs: Number(state.lastPersistentSaveAtMs || 0),
    lastPersistentSaveAt: String(state.lastPersistentSaveAt || ""),
    totalStepErrors: Number(state.totalStepErrors || 0),
    consecutiveStepErrors: Number(state.consecutiveStepErrors || 0),
    lastError: String(state.lastError || ""),
    lastErrorAt: String(state.lastErrorAt || ""),
    searchPagesVisited: state.searchPagesVisited || 0,
    linksVisited: state.linksVisited || 0,
    verifiedWebTotal: state.verifiedWebTotal || 0,
    rejectedNoSourceTotal: state.rejectedNoSourceTotal || 0,
    rejectedNoEvidenceTotal: state.rejectedNoEvidenceTotal || 0,
    rejectedEmailAuditTotal: state.rejectedEmailAuditTotal || 0,
    rejectedDuplicateEmailTotal: state.rejectedDuplicateEmailTotal || 0,
    timeWindowCount: Number(state.timeWindowCount || 1),
    runtimeLimitMs: Number(state.runtimeLimitMs || 0),
    continuousRunEnabled: state.continuousRunEnabled === true,
    continuousCycleCount: Math.max(1, Number(state.continuousCycleCount || 1)),
    continuousLastCycleAt: String(state.continuousLastCycleAt || ""),
    removedEmptySheets: state.removedEmptySheets || [],
    preservedSheetsWithData: state.preservedSheetsWithData || [],
    autoAddedColumns: state.autoAddedColumns || [],
    autoRemovedColumns: state.autoRemovedColumns || [],
    logs: stepLogs,
    lastLogs: state.logs ? state.logs.slice(-15) : []
  };
}

function finishJob_(state, reason) {
  state.status = "done";
  state.stopReason = reason;
  state.stopMessage = getStopMessage_(reason, state.targetCount, state.found);
  state.backgroundWorkerActive = false;
  pushLog_(state, state.stopMessage);
  pushLog_(
    state,
    `Resumen verificacion web: ok=${state.verifiedWebTotal || 0} | sin_fuente=${state.rejectedNoSourceTotal || 0} | sin_evidencia=${state.rejectedNoEvidenceTotal || 0} | email_auditoria=${state.rejectedEmailAuditTotal || 0} | duplicados_email=${state.rejectedDuplicateEmailTotal || 0}`
  );
  unregisterActiveJobId_(state.jobId);
}

function getStopMessage_(stopReason, requested, found) {
  if (stopReason === "OBJETIVO_COMPLETADO") {
    return `Busqueda completada: ${found} de ${requested}.`;
  }
  if (stopReason === "LIMITE_TIEMPO") {
    return `Se paro por tiempo limite. Encontrados: ${found} de ${requested}.`;
  }
  if (stopReason === "LIMITE_ITERACIONES") {
    return `Se paro por limite de iteraciones. Encontrados: ${found} de ${requested}.`;
  }
  if (stopReason === "ERROR_REPETIDO") {
    return `Se paro por errores repetidos en ejecucion. Encontrados: ${found} de ${requested}.`;
  }
  if (stopReason === "ENDPOINT_HIBRIDO_NO_DISPONIBLE") {
    return `Se paro porque el endpoint hibrido no responde (502/conexion). Encontrados: ${found} de ${requested}. Levanta endpoint local + tunel y reintenta.`;
  }
  if (stopReason === "CANCELADO_USUARIO") {
    return "Busqueda cancelada por usuario.";
  }
  if (stopReason === "PURGADO_USUARIO") {
    return "Proceso purgado por usuario.";
  }
  return `Se paro en ${found} contactos porque no se encontraron mas coincidencias en web.`;
}

function registerStepError_(state, err, origin) {
  if (!state) return;
  const src = String(origin || "runtime");
  const message = formatErrorForLog_(err);
  const nowMs = Date.now();
  state.totalStepErrors = Number(state.totalStepErrors || 0) + 1;
  state.consecutiveStepErrors = Number(state.consecutiveStepErrors || 0) + 1;
  state.lastError = message;
  state.lastErrorAt = new Date().toISOString();
  const baseBackoff = Math.max(15000, Number(APP_CONFIG.backgroundStepErrorBackoffBaseMs || 60000));
  const maxBackoff = Math.max(baseBackoff, Number(APP_CONFIG.backgroundStepErrorBackoffMaxMs || 30 * 60 * 1000));
  const prevBackoff = Math.max(0, Number(state.retryBackoffMs || 0));
  let nextBackoff = prevBackoff > 0 ? Math.min(maxBackoff, prevBackoff * 2) : baseBackoff;
  const lowered = String(message || "").toLowerCase();
  if (/(quota|429|rate|too many|limit exceeded)/.test(lowered)) {
    nextBackoff = Math.min(maxBackoff, Math.max(nextBackoff, baseBackoff * 3));
  }
  const endpointUnavailable = /(endpoint hibrido|bad gateway|cloudflared|unable to reach the origin service|http 502|http 503|http 504)/.test(lowered);
  if (endpointUnavailable) {
    // Mantiene el proceso vivo durante caidas del tunel/endpoint local.
    state.consecutiveStepErrors = Math.min(Number(state.consecutiveStepErrors || 0), 1);
    nextBackoff = Math.min(maxBackoff, Math.max(nextBackoff, baseBackoff * 2));
  }
  state.retryBackoffMs = nextBackoff;
  state.nextRetryAtMs = nowMs + nextBackoff;
  state.nextRetryReason = message;
  state.retryNoticeAtMs = 0;
  pushLog_(state, `[ERROR:${src}] ${message}`);
  pushLog_(state, `Reintento automatico programado en ${msToMinutesLabel_(nextBackoff)}.`);
  const maxErr = Math.max(2, Number(APP_CONFIG.maxConsecutiveStepErrors || 5));
  if (state.consecutiveStepErrors >= maxErr) {
    finishJob_(state, "ERROR_REPETIDO");
  }
}

function pushStepLog_(state, stepLogs, message) {
  pushLog_(state, message);
  stepLogs.push(state.logs[state.logs.length - 1]);
}

function pushLog_(state, message) {
  const msg = String(message || "");
  const nowMs = Date.now();
  const lastMsg = String(state.lastLogMessage || "");
  const lastAt = Number(state.lastLogAtMs || 0);
  if (msg && lastMsg === msg && lastAt > 0 && (nowMs - lastAt) <= 2500) {
    return;
  }
  const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "Europe/Madrid", "HH:mm:ss");
  state.logs = state.logs || [];
  state.logs.push(`[${stamp}] ${msg}`);
  state.lastLogMessage = msg;
  state.lastLogAtMs = nowMs;
  if (state.logs.length > APP_CONFIG.maxLogLines) {
    state.logs = state.logs.slice(-APP_CONFIG.maxLogLines);
  }
}

function jobCacheKey_(jobId) {
  return `BUSCA_CONTACTOS_JOB_${jobId}`;
}

function ensureBackgroundRunnerTrigger_() {
  const enabled = APP_CONFIG.backgroundRunnerEnabled === true;
  const functionName = String(APP_CONFIG.backgroundRunnerFunctionName || "runBackgroundJobsTick");
  const key = String(APP_CONFIG.backgroundRunnerTriggerIdKey || "BUSCA_CONTACTOS_BACKGROUND_TRIGGER_ID");
  if (!enabled) {
    return { enabled: false, installed: false, triggerId: "" };
  }
  try {
    const props = PropertiesService.getScriptProperties();
    const triggers = ScriptApp.getProjectTriggers();
    const storedId = String(props.getProperty(key) || "").trim();
    let chosen = null;

    for (let i = 0; i < triggers.length; i += 1) {
      const t = triggers[i];
      if (String(t.getHandlerFunction() || "") !== functionName) continue;
      const tid = String(t.getUniqueId() || "").trim();
      if (!chosen) {
        if (storedId && tid === storedId) {
          chosen = t;
        } else if (!storedId) {
          chosen = t;
        }
      } else {
        // Limpiamos duplicados para que quede un solo worker.
        try { ScriptApp.deleteTrigger(t); } catch (err) {}
      }
    }

    if (!chosen) {
      const interval = normalizeBackgroundInterval_(APP_CONFIG.backgroundRunnerIntervalMinutes);
      chosen = ScriptApp.newTrigger(functionName).timeBased().everyMinutes(interval).create();
    }

    const triggerId = String(chosen && chosen.getUniqueId ? chosen.getUniqueId() : "").trim();
    if (triggerId) {
      props.setProperty(key, triggerId);
    }

    return {
      enabled: true,
      installed: !!chosen,
      triggerId: triggerId,
      error: ""
    };
  } catch (err) {
    return {
      enabled: false,
      installed: false,
      triggerId: "",
      error: `No se pudo activar trigger de fondo (${formatErrorForLog_(err)})`
    };
  }
}

function normalizeBackgroundInterval_(minutes) {
  const m = Number(minutes || 1);
  if (m <= 1) return 1;
  if (m <= 5) return 5;
  if (m <= 10) return 10;
  if (m <= 15) return 15;
  return 30;
}

function getActiveJobIds_() {
  let raw = "";
  try {
    const props = PropertiesService.getScriptProperties();
    raw = String(props.getProperty("BUSCA_CONTACTOS_ACTIVE_JOB_IDS") || "").trim();
  } catch (err) {
    return [];
  }
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const clean = [];
    const seen = {};
    for (let i = 0; i < parsed.length; i += 1) {
      const id = String(parsed[i] || "").trim();
      if (!id || seen[id]) continue;
      seen[id] = true;
      clean.push(id);
    }
    return clean;
  } catch (err) {
    return [];
  }
}

function setActiveJobIds_(ids) {
  let props = null;
  try {
    props = PropertiesService.getScriptProperties();
  } catch (err) {
    return;
  }
  const input = Array.isArray(ids) ? ids : [];
  const out = [];
  const seen = {};
  for (let i = 0; i < input.length; i += 1) {
    const id = String(input[i] || "").trim();
    if (!id || seen[id]) continue;
    seen[id] = true;
    out.push(id);
  }
  if (!out.length) {
    try {
      props.deleteProperty("BUSCA_CONTACTOS_ACTIVE_JOB_IDS");
    } catch (err) {}
    return;
  }
  try {
    props.setProperty("BUSCA_CONTACTOS_ACTIVE_JOB_IDS", JSON.stringify(out.slice(-500)));
  } catch (err) {}
}

function registerActiveJobId_(jobId) {
  const id = String(jobId || "").trim();
  if (!id) return;
  const ids = getActiveJobIds_();
  if (ids.indexOf(id) < 0) ids.push(id);
  setActiveJobIds_(ids);
}

function unregisterActiveJobId_(jobId) {
  const id = String(jobId || "").trim();
  if (!id) return;
  const ids = getActiveJobIds_().filter((x) => x !== id);
  setActiveJobIds_(ids);
}

function pruneActiveJobsRegistry_() {
  const ids = getActiveJobIds_();
  const alive = [];
  for (let i = 0; i < ids.length; i += 1) {
    const id = ids[i];
    const state = loadSearchJobState_(id);
    if (!state) continue;
    if (state.status === "running") {
      alive.push(id);
    }
  }
  setActiveJobIds_(alive);
  return alive;
}

function saveSearchJobState_(state) {
  if (!state || !state.jobId) return;
  compactJobStateForStorage_(state);
  const cache = CacheService.getScriptCache();
  const key = jobCacheKey_(state.jobId);
  let raw = JSON.stringify(state);

  if (raw.length > 75000) {
    state.logs = (state.logs || []).slice(-35);
    state.seenHashes = (state.seenHashes || []).slice(-900);
    state.seenEmails = (state.seenEmails || []).slice(-900);
    raw = JSON.stringify(state);
  }

  try {
    cache.put(key, raw, APP_CONFIG.jobTtlSeconds);
  } catch (err) {
    // Si cache falla por cuota/timeout no paramos el job.
  }
  const forcePersistent = String(state.status || "") !== "running";
  const persisted = saveJobStateToPersistentStore_(state, raw, forcePersistent);
  if (persisted && persisted.saved && persisted.raw && persisted.raw !== raw) {
    try {
      cache.put(key, persisted.raw, APP_CONFIG.jobTtlSeconds);
    } catch (err) {
      // No bloqueamos por errores de cache.
    }
  }
}

function loadSearchJobState_(jobId) {
  const id = String(jobId || "").trim();
  if (!id) return null;
  const cache = CacheService.getScriptCache();
  const key = jobCacheKey_(id);
  let raw = "";
  try {
    raw = String(cache.get(key) || "");
  } catch (err) {
    raw = "";
  }
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (err) {
      // Seguimos con fallback persistente.
    }
  }

  const persisted = loadJobStateFromPersistentStore_(id);
  if (!persisted || !persisted.state) return null;
  try {
    cache.put(key, persisted.raw, APP_CONFIG.jobTtlSeconds);
  } catch (err) {
    // No bloqueamos por cache.
  }
  return persisted.state;
}

function compactJobStateForStorage_(state) {
  if (!state || typeof state !== "object") return;
  if (!Array.isArray(state.logs)) state.logs = [];
  if (!Array.isArray(state.seenHashes)) state.seenHashes = [];
  if (!Array.isArray(state.seenEmails)) state.seenEmails = [];

  const logsLimit = Math.max(80, Number(APP_CONFIG.maxLogLines || 320));
  if (state.logs.length > logsLimit) {
    state.logs = state.logs.slice(-logsLimit);
  }
  if (state.seenHashes.length > 20000) {
    state.seenHashes = state.seenHashes.slice(-20000);
  }
  if (state.seenEmails.length > 20000) {
    state.seenEmails = state.seenEmails.slice(-20000);
  }

  if (!state.emailDomainAuditCache || typeof state.emailDomainAuditCache !== "object") {
    state.emailDomainAuditCache = {};
  }
  const cacheKeys = Object.keys(state.emailDomainAuditCache);
  if (cacheKeys.length > 3000) {
    const keepFrom = cacheKeys.length - 3000;
    const trimmed = {};
    for (let i = keepFrom; i < cacheKeys.length; i += 1) {
      const k = cacheKeys[i];
      trimmed[k] = state.emailDomainAuditCache[k];
    }
    state.emailDomainAuditCache = trimmed;
  }
}

function saveJobStateToPersistentStore_(state, rawState, force) {
  if (APP_CONFIG.jobPersistentStoreEnabled !== true) {
    return { saved: false, raw: rawState };
  }
  if (!state || !state.jobId) {
    return { saved: false, raw: rawState };
  }

  const nowMs = Date.now();
  const minInterval = Math.max(30000, Number(APP_CONFIG.jobPersistentMinIntervalMs || 90000));
  const lastSavedAtMs = Number(state.lastPersistentSaveAtMs || 0);
  const mustPersist = force === true || lastSavedAtMs <= 0 || (nowMs - lastSavedAtMs) >= minInterval;
  if (!mustPersist) {
    return { saved: false, raw: rawState };
  }

  try {
    state.lastPersistentSaveAtMs = nowMs;
    state.lastPersistentSaveAt = new Date(nowMs).toISOString();
    state.persistentSaveCount = Number(state.persistentSaveCount || 0) + 1;
    compactJobStateForStorage_(state);
    let raw = JSON.stringify(state);
    if (raw.length > 380000) {
      state.logs = (state.logs || []).slice(-120);
      state.seenHashes = (state.seenHashes || []).slice(-8000);
      state.seenEmails = (state.seenEmails || []).slice(-8000);
      raw = JSON.stringify(state);
    }

    const chunkSize = Math.max(2000, Math.min(8000, Number(APP_CONFIG.jobPersistentChunkSize || 8000)));
    const chunks = splitStringBySize_(raw, chunkSize);
    const props = PropertiesService.getScriptProperties();
    const jobId = String(state.jobId || "").trim();
    const metaKey = jobPersistentMetaKey_(jobId);
    const prevMetaRaw = String(props.getProperty(metaKey) || "").trim();
    let prevChunkCount = 0;
    if (prevMetaRaw) {
      try {
        const prevMeta = JSON.parse(prevMetaRaw);
        prevChunkCount = Number(prevMeta.chunkCount || 0);
      } catch (err) {
        prevChunkCount = 0;
      }
    }

    for (let i = 0; i < chunks.length; i += 1) {
      props.setProperty(jobPersistentChunkKey_(jobId, i), chunks[i]);
    }
    if (prevChunkCount > chunks.length) {
      for (let i = chunks.length; i < prevChunkCount; i += 1) {
        props.deleteProperty(jobPersistentChunkKey_(jobId, i));
      }
    }

    const meta = {
      jobId: jobId,
      status: String(state.status || ""),
      found: Number(state.found || 0),
      target: Number(state.targetCount || 0),
      savedAtMs: nowMs,
      savedAt: new Date(nowMs).toISOString(),
      chunkCount: chunks.length
    };
    props.setProperty(metaKey, JSON.stringify(meta));
    upsertPersistentJobId_(jobId, props);
    cleanupPersistentJobStore_(props, nowMs);
    return { saved: true, raw: raw };
  } catch (err) {
    return { saved: false, raw: rawState };
  }
}

function loadJobStateFromPersistentStore_(jobId) {
  if (APP_CONFIG.jobPersistentStoreEnabled !== true) return null;
  const id = String(jobId || "").trim();
  if (!id) return null;
  try {
    const props = PropertiesService.getScriptProperties();
    const metaRaw = String(props.getProperty(jobPersistentMetaKey_(id)) || "").trim();
    if (!metaRaw) return null;
    const meta = JSON.parse(metaRaw);
    const chunkCount = Number(meta.chunkCount || 0);
    if (chunkCount <= 0 || chunkCount > 200) return null;
    const parts = [];
    for (let i = 0; i < chunkCount; i += 1) {
      const chunk = props.getProperty(jobPersistentChunkKey_(id, i));
      if (typeof chunk !== "string") return null;
      parts.push(chunk);
    }
    const raw = parts.join("");
    if (!raw) return null;
    const state = JSON.parse(raw);
    if (!state || String(state.jobId || "").trim() !== id) return null;
    return { state: state, raw: raw, meta: meta };
  } catch (err) {
    return null;
  }
}

function splitStringBySize_(text, size) {
  const input = String(text || "");
  const chunkSize = Math.max(1000, Number(size || 8000));
  if (!input) return [""];
  const out = [];
  for (let i = 0; i < input.length; i += chunkSize) {
    out.push(input.substring(i, i + chunkSize));
  }
  return out;
}

function jobPersistentMetaKey_(jobId) {
  return `BUSCA_CONTACTOS_JOB_PERSIST_META_${jobId}`;
}

function jobPersistentChunkKey_(jobId, index) {
  return `BUSCA_CONTACTOS_JOB_PERSIST_CHUNK_${jobId}_${index}`;
}

function getPersistentJobIds_(props) {
  const key = String(APP_CONFIG.jobPersistentIdsKey || "BUSCA_CONTACTOS_JOB_STORE_IDS");
  let raw = "";
  try {
    raw = String((props || PropertiesService.getScriptProperties()).getProperty(key) || "").trim();
  } catch (err) {
    return [];
  }
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out = [];
    const seen = {};
    for (let i = 0; i < parsed.length; i += 1) {
      const id = String(parsed[i] || "").trim();
      if (!id || seen[id]) continue;
      seen[id] = true;
      out.push(id);
    }
    return out;
  } catch (err) {
    return [];
  }
}

function setPersistentJobIds_(ids, props) {
  const key = String(APP_CONFIG.jobPersistentIdsKey || "BUSCA_CONTACTOS_JOB_STORE_IDS");
  let p = null;
  try {
    p = props || PropertiesService.getScriptProperties();
  } catch (err) {
    return;
  }
  const clean = [];
  const seen = {};
  const input = Array.isArray(ids) ? ids : [];
  for (let i = 0; i < input.length; i += 1) {
    const id = String(input[i] || "").trim();
    if (!id || seen[id]) continue;
    seen[id] = true;
    clean.push(id);
  }
  if (!clean.length) {
    try {
      p.deleteProperty(key);
    } catch (err) {}
    return;
  }
  try {
    p.setProperty(key, JSON.stringify(clean.slice(-500)));
  } catch (err) {}
}

function upsertPersistentJobId_(jobId, props) {
  const id = String(jobId || "").trim();
  if (!id) return;
  const p = props || PropertiesService.getScriptProperties();
  const ids = getPersistentJobIds_(p);
  if (ids.indexOf(id) < 0) ids.push(id);
  setPersistentJobIds_(ids, p);
}

function cleanupPersistentJobStore_(props, nowMs) {
  if (APP_CONFIG.jobPersistentStoreEnabled !== true) return;
  try {
    const p = props || PropertiesService.getScriptProperties();
    const markerKey = "BUSCA_CONTACTOS_JOB_STORE_LAST_CLEANUP_MS";
    const now = Number(nowMs || Date.now());
    const lastCleanup = Number(p.getProperty(markerKey) || 0);
    const minInterval = Math.max(10 * 60 * 1000, Number(APP_CONFIG.jobPersistentCleanupIntervalMs || 6 * 60 * 60 * 1000));
    if (lastCleanup > 0 && (now - lastCleanup) < minInterval) return;

    const retentionMs = Math.max(24 * 60 * 60 * 1000, Number(APP_CONFIG.jobPersistentRetentionDays || 21) * 24 * 60 * 60 * 1000);
    const ids = getPersistentJobIds_(p);
    const keep = [];

    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      const metaRaw = String(p.getProperty(jobPersistentMetaKey_(id)) || "").trim();
      if (!metaRaw) continue;
      let meta = null;
      try {
        meta = JSON.parse(metaRaw);
      } catch (err) {
        meta = null;
      }
      if (!meta) continue;

      const savedAtMs = Number(meta.savedAtMs || 0);
      const status = String(meta.status || "");
      const ageMs = savedAtMs > 0 ? (now - savedAtMs) : retentionMs + 1;
      if (status === "running" || ageMs <= retentionMs) {
        keep.push(id);
        continue;
      }

      const chunkCount = Math.max(0, Number(meta.chunkCount || 0));
      for (let c = 0; c < chunkCount; c += 1) {
        p.deleteProperty(jobPersistentChunkKey_(id, c));
      }
      p.deleteProperty(jobPersistentMetaKey_(id));
    }

    setPersistentJobIds_(keep, p);
    p.setProperty(markerKey, String(now));
  } catch (err) {
    // Si la limpieza falla por almacenamiento temporal no interrumpimos el flujo.
  }
}


