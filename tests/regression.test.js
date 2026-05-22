const test = require("node:test");
const assert = require("node:assert/strict");
const { loadGasCode } = require("./gas_harness");

const gas = loadGasCode();

test("dedupeRecords_: no duplica emails en la misma busqueda", () => {
  const seenHashes = [];
  const seenEmails = [];
  const records = [
    { email: "ana@empresa.com", telefono: "", web: "https://empresa.com", empresa: "Empresa", pais: "Espana" },
    { email: "ANA@empresa.com", telefono: "", web: "https://empresa.com/contacto", empresa: "Empresa", pais: "Espana" },
    { email: "ventas@empresa.com", telefono: "", web: "https://empresa.com", empresa: "Empresa", pais: "Espana" },
    { email: "", telefono: "912345678", web: "https://otra.com", empresa: "Otra", pais: "Espana" }
  ];

  const result = gas.dedupeRecords_(records, seenHashes, seenEmails);
  const uniqueEmails = result.newRecords
    .map((item) => String(item.email || "").trim().toLowerCase())
    .filter((value) => value);

  assert.equal(result.duplicatesByEmail, 1);
  assert.equal(new Set(uniqueEmails).size, uniqueEmails.length);
  assert.equal(result.newRecords.length, 3);
});

test("ensureRequiredColumns_: conserva tipos duplicados y mapea campo libre a texto", () => {
  const result = gas.ensureRequiredColumns_([
    { header: "EMAIL", description: "correo profesional", type: "email" },
    { header: "CORREO SECUNDARIO", description: "correo profesional", type: "email" },
    { header: "CAMPO INVENTADO", description: "dato libre sin tipo" },
    { header: "FUNCION DEL CARGO", description: "responsabilidades del cargo" }
  ]);

  const outputTypes = Array.from(result.columns.map((col) => col.type));
  assert.equal(JSON.stringify(outputTypes), JSON.stringify(["email", "email", "texto", "funcion_cargo"]));
  assert.equal(outputTypes.includes("telefono"), false);
  assert.equal(result.autoRemoved.some((item) => item.includes("CAMPO INVENTADO")), false);
});

test("campos semanticos: limpia basura y no inventa descripcion/funcion", () => {
  const noisyDescription = gas.normalizeInformativeText_(
    "Ultimas noticias, opinion, fotos y videos de contactos.",
    [],
    12
  );
  const noisyRole = gas.normalizeInformativeText_("Sobre", [], 3);
  const resolvedDescription = gas.resolveDescriptionField_({}, [], "", "");
  const resolvedFunction = gas.resolveRoleFunctionField_({}, [], "", "", "", "");
  const validDescription = gas.normalizeInformativeText_(
    "Coordina la produccion tecnica y logistica de eventos en directo.",
    [],
    12
  );

  assert.equal(noisyDescription, "");
  assert.equal(noisyRole, "");
  assert.equal(resolvedDescription, "");
  assert.equal(resolvedFunction, "");
  assert.equal(validDescription, "Coordina la produccion tecnica y logistica de eventos en directo.");
});

test("inferencia de nombre: recupera nombre corto desde local-part compacto", () => {
  assert.equal(gas.guessSingleNameFromEmailLocal_("gabricarcoba@gmail.com"), "Gabri");
  assert.equal(gas.guessSingleNameFromEmailLocal_("rubenpo78@gmail.com"), "Ruben");
  assert.equal(gas.guessSingleNameFromEmailLocal_("redes@salaelsol.com"), "");
});

test("fallback por rol: completa contacto util con empresa cuando no hay persona", () => {
  assert.equal(
    gas.buildRoleBasedContactFallbackLabel_("oficina@salaelsol.com", "Sala El Sol", "salaelsol.com"),
    "Oficina de Sala El Sol"
  );
  assert.equal(
    gas.buildRoleBasedContactFallbackLabel_("redes@salaelsol.com", "Sala El Sol", "salaelsol.com"),
    "Redes de Sala El Sol"
  );
});

test("fallback generico por empresa: usa 'Contacto de ...' cuando no hay persona ni rol", () => {
  assert.equal(
    gas.buildGenericCompanyContactFallbackLabel_("ruta66@www.ruta66.es", "Ruta 66", "ruta66.es"),
    "Contacto de Ruta 66"
  );
  assert.equal(
    gas.buildGenericCompanyContactFallbackLabel_("pablo@binaural.es", "Binaural", "binaural.es"),
    ""
  );
});

test("normaliza empresa: bloquea etiquetas genericas tipo 'somos' y recupera vacio", () => {
  assert.equal(gas.normalizeCompanyName_("somos"), "");
  assert.equal(gas.normalizeCompanyName_("quienes-somos"), "");
  assert.equal(gas.normalizeCompanyName_("Rockdelux"), "Rockdelux");
});

test("normaliza nombre: bloquea ruido tipo 'New Peper' para evitar falsos positivos", () => {
  assert.equal(gas.normalizePersonName_("New Peper"), "");
  assert.equal(gas.looksLikePersonName_("New Peper", "MondoSonoro", "mondosonoro.com"), false);
});

test("anti-bucle: detecta dominios repetidos para excluirlos temporalmente", () => {
  const state = {
    staleRounds: 7,
    seenEmails: [
      "a@mondosonoro.com",
      "b@mondosonoro.com",
      "c@mondosonoro.com",
      "x@salaelsol.com",
      "y@salaelsol.com",
      "z@gmail.com"
    ]
  };

  const suppressed = gas.getSuppressedDomainsForStale_(state);
  assert.equal(suppressed.includes("mondosonoro.com"), true);
  assert.equal(suppressed.includes("salaelsol.com"), true);
  assert.equal(suppressed.includes("gmail.com"), false);
});

test("buildRecoveryQueryPlan_: aplica -site para romper reciclado de dominios", () => {
  const queries = gas.buildRecoveryQueryPlan_(
    "contactos industria musical madrid",
    "PROV_COM_MADRID",
    { requireEmail: true, requireName: true, disallowGenericMailboxEmails: true },
    1,
    { suppressedDomains: ["mondosonoro.com", "binaural.es"] }
  );

  assert.equal(Array.isArray(queries), true);
  assert.equal(queries.length > 0, true);
  assert.equal(queries.some((q) => q.includes("-site:mondosonoro.com")), true);
  assert.equal(queries.some((q) => q.includes("-site:binaural.es")), true);
});

test("extractExcludedDomainsFromQuery_: detecta dominios excluidos con sintaxis variada", () => {
  const query = "espana industria musical contacto –site:mondosonoro.com - rockdelux.com excluir binaural.es;";
  const out = gas.extractExcludedDomainsFromQuery_(query);

  assert.equal(Array.isArray(out), true);
  assert.equal(out.includes("mondosonoro.com"), true);
  assert.equal(out.includes("rockdelux.com"), true);
  assert.equal(out.includes("binaural.es"), true);
});

test("getQueryExcludedDomainsForStep_: mezcla estado + paso y elimina duplicados", () => {
  const state = {
    queryExcludedDomains: ["mondosonoro.com", "rockdelux.com"]
  };
  const out = gas.getQueryExcludedDomainsForStep_(
    state,
    "contactos musica nacional -site:mondosonoro.com -site:binaural.es"
  );

  assert.equal(Array.isArray(out), true);
  assert.equal(out.includes("mondosonoro.com"), true);
  assert.equal(out.includes("rockdelux.com"), true);
  assert.equal(out.includes("binaural.es"), true);
  assert.equal(new Set(out).size, out.length);
});

test("scoreEmailDomainFit_: prioriza email coherente con nombre detectado", () => {
  const rec = {
    empresa: "MondoSonoro",
    contacto: "David Morell",
    nombre_contacto: "David Morell",
    dominio_web_generico: "mondosonoro.com",
    web: "https://mondosonoro.com"
  };
  const pages = [{ url: "https://mondosonoro.com/contacto", text: "", rawHtml: "" }];

  const coherentScore = gas.scoreEmailDomainFit_(
    "david@mondosonoro.com",
    rec,
    "https://mondosonoro.com/contacto",
    pages,
    true,
    false
  );
  const mismatchScore = gas.scoreEmailDomainFit_(
    "luna@mondosonoro.com",
    rec,
    "https://mondosonoro.com/contacto",
    pages,
    false,
    false
  );

  assert.equal(coherentScore > mismatchScore, true);
});

test("buildCompanyCountFromNames_: crea memoria de empresas normalizadas para anti-bucle", () => {
  const out = gas.buildCompanyCountFromNames_([
    "MondoSonoro",
    "mondosonoro",
    "IA no encuentra",
    "Sala El Sol"
  ]);

  assert.equal(typeof out, "object");
  assert.equal(Number(out.mondosonoro || 0) >= 1, true);
  const keys = Object.keys(out);
  assert.equal(keys.some((k) => String(k).includes("sala") && String(k).includes("sol")), true);
});

test("callPlacesApiCandidates_: limita empresas repetidas aunque cambie dominio/place_id", () => {
  gas.resolvePlacesApiKeyOrThrow_ = () => "fake-key";
  gas.buildPlacesSearchQueries_ = () => ["musica espana"];
  gas.requestPlacesTextSearchWithRetry_ = () => ({
    places: [
      {
        id: "place-1",
        displayName: { text: "MondoSonoro" },
        websiteUri: "https://dominio-uno.test",
        googleMapsUri: "https://maps.google.com/?q=uno"
      },
      {
        id: "place-2",
        displayName: { text: "MondoSonoro" },
        websiteUri: "https://dominio-dos.test",
        googleMapsUri: "https://maps.google.com/?q=dos"
      }
    ],
    nextPageToken: ""
  });
  gas.Utilities.sleep = () => {};

  const state = {
    scope: "NACIONAL_ES",
    query: "musica espana",
    profileConfig: {
      placesPerDomainCapPerStep: 5,
      placesPerDomainCapPerJob: 5,
      placesPerCompanyCapPerStep: 1,
      placesPerCompanyCapPerJob: 1
    },
    searchOptions: { requireEmail: false },
    seenEmails: [],
    seenCompanies: [],
    staleRounds: 0,
    dynamicPlanExpansions: 0,
    iterations: 0,
    found: 0
  };

  const step = gas.callPlacesApiCandidates_(state, "musica espana", 5);
  const diag = (step.meta && step.meta.diagnostics) || {};

  assert.equal(step.contacts.length, 1);
  assert.equal(Number(diag.drop_per_company_cap || 0) >= 1, true);
});

test("callPlacesApiCandidates_: salta queries estancadas tras varios intentos sin avance", () => {
  gas.resolvePlacesApiKeyOrThrow_ = () => "fake-key";
  gas.buildPlacesSearchQueries_ = () => ["musica madrid"];
  gas.requestPlacesTextSearchWithRetry_ = () => ({
    places: [
      {
        id: "place-1",
        displayName: { text: "Sala Demo" },
        websiteUri: "https://salademo.es",
        googleMapsUri: "https://maps.google.com/?q=sala-demo"
      }
    ],
    nextPageToken: ""
  });
  gas.Utilities.sleep = () => {};

  const state = {
    scope: "NACIONAL_ES",
    query: "musica madrid",
    profileConfig: {},
    searchOptions: { requireEmail: false },
    seenEmails: [],
    staleRounds: 0,
    dynamicPlanExpansions: 0,
    iterations: 0,
    found: 0
  };

  const step1 = gas.callPlacesApiCandidates_(state, "musica madrid", 5);
  const step2 = gas.callPlacesApiCandidates_(state, "musica madrid", 5);
  const step3 = gas.callPlacesApiCandidates_(state, "musica madrid", 5);
  const step4 = gas.callPlacesApiCandidates_(state, "musica madrid", 5);

  assert.equal(step1.contacts.length > 0, true);
  assert.equal(step2.contacts.length, 0);
  assert.equal(step3.contacts.length, 0);
  assert.equal((state.placesQueryNoGainCount || {})["musica madrid"] >= 2, true);
  assert.equal((step4.meta && step4.meta.diagnostics && step4.meta.diagnostics.drop_query_no_gain_skip || 0) >= 1, true);
  assert.equal(Number(step4.meta && step4.meta.queriesUsed || 0), 0);
});
