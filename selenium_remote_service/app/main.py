import os
import re
import time
import random
import threading
import base64
import json
import unicodedata
import xml.etree.ElementTree as ET
from urllib.parse import quote_plus, urlparse, urlsplit, parse_qs, unquote, urljoin

import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request
from selenium import webdriver
from selenium.common.exceptions import TimeoutException, WebDriverException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from waitress import serve


APP_TITLE = "selenium-contacts-api"
APP_VERSION = "1.5.1"

GENERIC_ROLE_PREFIXES = {
    "info",
    "contacto",
    "contact",
    "hello",
    "hola",
    "admin",
    "support",
    "soporte",
    "prensa",
    "press",
    "media",
    "events",
    "eventos",
    "booking",
    "bookings",
    "bandas",
    "call",
    "center",
    "callcenter",
    "atencioncliente",
    "customerservice",
    "customer",
    "service",
    "newsletter",
    "suscripciones",
    "assinaturas",
    "informacion",
    "infoes",
    "oficina",
    "office",
    "ventas",
    "sales",
    "comercial",
    "rrpp",
    "rrhh",
    "rh",
    "recursoshumanos",
    "publicidad",
    "editorial",
    "redaccion",
    "contenidos",
    "digital",
    "marketing",
    "press",
    "pr",
    "tienda",
    "shop",
    "lopd",
    "rgpd",
    "legal",
    "privacidad",
    "privacy",
    "compliance",
    "datos",
    "data",
    "noreply",
    "no-reply",
    "comunicacion",
}

BLOCKED_EMAIL_TLDS = {
    "png",
    "jpg",
    "jpeg",
    "svg",
    "webp",
    "gif",
    "ico",
    "css",
    "js",
    "woff",
    "woff2",
    "pdf",
    "zip",
    "rar",
}

SEARCH_USER_AGENT = (
    "Mozilla/5.0"
)

EMAIL_RE = re.compile(r"[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}")
PHONE_RE = re.compile(r"(?:\+?\d[\d\s().-]{6,}\d)")
TRACKING_QUERY_RE = re.compile(r"(?:^|&)(utm_[^=]+|gclid|fbclid|mc_cid|mc_eid)=[^&]*", re.IGNORECASE)
INTERNAL_LINK_HINTS = (
    "contact",
    "contacto",
    "contacta",
    "about",
    "sobre",
    "nosotros",
    "quienessomos",
    "quienes-somos",
    "equipo",
    "team",
    "staff",
    "autor",
    "author",
    "colaborador",
    "colaboradores",
    "redaccion",
    "editorial",
    "masthead",
    "prensa",
    "press",
    "media",
    "booking",
    "management",
    "bio",
    "biografia",
    "who-we-are",
    "quienes-somos",
)
LOW_QUALITY_URL_HINTS = (
    "tablon",
    "anuncio",
    "anuncios",
    "clasificados",
    "directorio",
    "directory",
    "listing",
    "listado",
    "foro",
    "forum",
    "tag/",
    "category/",
    "archive",
    "sitemap",
    "feed",
)
NOISY_HOST_HINTS = (
    "zhihu.com",
    "quora.com",
    "pinterest.",
    "stackexchange.com",
    "stackoverflow.com",
    "support.google.com",
    "play.google.com",
    "apps.apple.com",
    "googleusercontent.com",
)
GENERIC_BIG_HOST_HINTS = (
    "wikipedia.org",
    "facebook.com",
    "instagram.com",
    "tiktok.com",
    "youtube.com",
    "x.com",
    "twitter.com",
    "reddit.com",
    "quora.com",
    "pinterest.",
    "medium.com",
    "blogspot.",
    "wordpress.com",
    "fandom.com",
    "tripadvisor.",
    "yelp.",
    "eventbrite.",
    "meetup.com",
    "change.org",
    "amazon.",
    "mercadolibre.",
    "aliexpress.",
)
SPECIFIC_CONTACT_URL_HINTS = (
    "/equipo",
    "/team",
    "/staff",
    "/prensa",
    "/press",
    "/redaccion",
    "/editor",
    "/about",
    "/sobre",
    "/management",
    "/booking",
    "/bio",
    "/autor",
    "/author",
)
SPECIFIC_CONTACT_TEXT_HINTS = (
    "periodista",
    "redactor",
    "editor",
    "prensa",
    "press",
    "management",
    "booking",
    "promotor",
    "a&r",
    "agencia",
    "staff",
    "equipo",
    "team",
    "bio",
    "autor",
    "director",
)
DEFAULT_SEARCH_PROVIDER_ORDER = (
    "searxng",
    "duckduckgo_html",
    "bing_html",
    "bing_rss",
    "brave_html",
)
GENERIC_COMPANY_LABELS = {
    "contacto",
    "contact",
    "contactos",
    "contacts",
    "inicio",
    "home",
    "menu",
    "equipo",
    "team",
    "staff",
    "medios",
    "medio",
    "tablon de anuncios",
    "anuncios",
    "aviso legal",
    "assinaturas",
    "suscripciones",
    "newsletter",
}
GENERIC_NAME_TOKENS = {
    "tablon",
    "anuncios",
    "contacto",
    "contact",
    "medios",
    "medio",
    "equipo",
    "team",
    "staff",
    "inicio",
    "home",
    "menu",
    "empresa",
    "agencia",
    "records",
    "producciones",
    "management",
    "booking",
    "tienda",
    "shop",
    "libros",
    "emergentes",
    "mzk",
    "editorial",
    "comunicacion",
    "prensa",
    "online",
    "assinaturas",
    "suscripciones",
    "newsletter",
    "call",
    "center",
    "atencion",
    "cliente",
    "service",
    "customer",
    "internet",
    "usuarios",
    "usuario",
    "technology",
    "technologies",
    "tecnologia",
    "tecnologias",
    "digital",
    "online",
    "radio",
    "news",
    "http",
    "https",
    "oficina",
    "bandas",
    "pizzapop",
    "webmaster",
    "adminweb",
    "noticias",
    "noticia",
    "volumen",
    "brutal",
    "lanzamientos",
    "lanzamiento",
    "conciertos",
    "concierto",
    "agenda",
    "cartelera",
    "programacion",
    "fotos",
    "foto",
    "videos",
    "video",
    "opinion",
    "magazine",
    "mag",
    "magazin",
    "revista",
    "publicidad",
    "marketing",
    "comercial",
    "redaccion",
    "comunicacion",
    "prensa",
    "lopd",
    "rgpd",
    "legal",
    "privacidad",
    "privacy",
    "compliance",
    "datos",
    "data",
}
ROLE_HINTS = (
    ("redactor", "Redactor/a", "Redaccion y cobertura de contenidos musicales."),
    ("periodista", "Periodista", "Cobertura periodistica y comunicacion musical."),
    ("editor", "Editor/a", "Edicion y coordinacion de contenidos."),
    ("director", "Director/a", "Direccion y coordinacion de la actividad del medio/empresa."),
    ("promotor", "Promotor/a", "Promocion y organizacion de eventos musicales."),
    ("booking", "Booking / Management", "Gestion de contratacion, giras y booking."),
    ("manager", "Management", "Gestion de carrera y representacion artistica."),
    ("a&r", "A&R", "Scouting y desarrollo de talento artistico."),
    ("prensa", "Comunicacion / Prensa", "Gestion de prensa y comunicacion externa."),
)

app = Flask(__name__)
_driver_lock = threading.Lock()
_driver = None
_ollama_seed_cache = {}
_ollama_model_cache = {}
CREATE_NO_WINDOW = 0x08000000 if os.name == "nt" else 0


def _env_int(name, default):
    raw = str(os.getenv(name, "")).strip()
    if not raw:
        return default
    try:
        return int(raw)
    except ValueError:
        return default


def _sanitize_text(value, max_len=500):
    text = re.sub(r"\s+", " ", str(value or "")).strip()
    return text[:max_len]


def _truncate_keep_tail(value, max_len=1200, tail_len=260):
    text = _sanitize_text(value, max_len=max_len * 3)
    if len(text) <= max_len:
        return text
    keep_tail = max(0, min(tail_len, max_len - 80))
    if keep_tail <= 0:
        return text[:max_len]
    head_len = max_len - keep_tail - 3
    if head_len <= 0:
        return text[-max_len:]
    return f"{text[:head_len]}...{text[-keep_tail:]}"


def _normalize_ascii(text):
    value = str(text or "").strip().lower()
    if not value:
        return ""
    normalized = unicodedata.normalize("NFD", value)
    normalized = "".join(ch for ch in normalized if unicodedata.category(ch) != "Mn")
    return normalized


def _cleanup_url(url):
    value = str(url or "").strip()
    if not value:
        return ""
    try:
        parsed = urlsplit(value)
        if parsed.scheme not in {"http", "https"}:
            return ""
        query = TRACKING_QUERY_RE.sub("", parsed.query or "")
        query = re.sub(r"^&+|&+$", "", query)
        query = re.sub(r"&&+", "&", query)
        clean = f"{parsed.scheme}://{parsed.netloc}{parsed.path or ''}"
        if query:
            clean = f"{clean}?{query}"
        return clean.split("#", 1)[0]
    except Exception:
        return value.split("#", 1)[0]


def _root_domain(url):
    try:
        host = urlparse(url).netloc.lower().strip()
        return host[4:] if host.startswith("www.") else host
    except Exception:
        return ""


def _root_web(url):
    host = _root_domain(url)
    if not host:
        return ""
    return f"https://{host}"


def _url_path(url):
    value = str(url or "").strip()
    if not value:
        return ""
    try:
        return str(urlparse(value).path or "").lower()
    except Exception:
        return ""


def _is_linkedin_candidate_url(url):
    value = str(url or "").strip().lower()
    host = _root_domain(value)
    if "linkedin.com" not in host:
        return False
    path = _url_path(value)
    return path.startswith("/in/") or path.startswith("/pub/") or path.startswith("/company/")


def _is_instagram_candidate_url(url):
    value = str(url or "").strip().lower()
    host = _root_domain(value)
    if "instagram.com" not in host:
        return False
    parts = [p for p in _url_path(value).split("/") if p]
    if len(parts) != 1:
        return False
    blocked = {
        "p", "reel", "reels", "stories", "explore", "accounts", "about", "developer",
        "privacy", "legal", "direct", "ads", "api", "web",
    }
    return parts[0] not in blocked


def _is_tiktok_candidate_url(url):
    value = str(url or "").strip().lower()
    host = _root_domain(value)
    if "tiktok.com" not in host:
        return False
    parts = [p for p in _url_path(value).split("/") if p]
    return bool(parts) and parts[0].startswith("@")


def _is_facebook_candidate_url(url):
    value = str(url or "").strip().lower()
    host = _root_domain(value)
    if "facebook.com" not in host:
        return False
    parts = [p for p in _url_path(value).split("/") if p]
    if not parts:
        return False
    blocked = {
        "groups", "events", "watch", "reel", "reels", "photo", "photos", "posts",
        "share", "sharer.php", "marketplace", "gaming", "pages", "story.php", "login.php",
    }
    return parts[0] not in blocked


def _is_x_candidate_url(url):
    value = str(url or "").strip().lower()
    host = _root_domain(value)
    if ("x.com" not in host) and ("twitter.com" not in host):
        return False
    parts = [p for p in _url_path(value).split("/") if p]
    if len(parts) != 1:
        return False
    blocked = {"home", "explore", "search", "i", "settings", "privacy", "tos", "compose"}
    return parts[0] not in blocked


def _is_youtube_candidate_url(url):
    value = str(url or "").strip().lower()
    host = _root_domain(value)
    if "youtube.com" not in host:
        return False
    path = _url_path(value)
    return path.startswith("/@")


def _is_social_candidate_url(url):
    return (
        _is_linkedin_candidate_url(url)
        or _is_instagram_candidate_url(url)
        or _is_tiktok_candidate_url(url)
        or _is_facebook_candidate_url(url)
        or _is_x_candidate_url(url)
        or _is_youtube_candidate_url(url)
    )


def _is_noisy_host(host):
    value = str(host or "").strip().lower()
    if not value:
        return True
    return any(hint in value for hint in NOISY_HOST_HINTS)


def _is_generic_big_site_url(url):
    value = str(url or "").strip().lower()
    if not value:
        return True
    host = _root_domain(value)
    if not host:
        return True

    if any(hint in host for hint in GENERIC_BIG_HOST_HINTS):
        # Permitimos perfiles/paginas sociales candidatas concretas
        # (no feeds, reels, posts, grupos, etc.).
        if _is_social_candidate_url(value):
            return False
        return True
    return False


def _has_specific_contact_context(url, page_title, page_text):
    if _is_social_candidate_url(url):
        return True
    path = _url_path(url)
    if any(h in path for h in SPECIFIC_CONTACT_URL_HINTS):
        return True

    merged = _normalize_ascii(
        f"{_sanitize_text(page_title, 260)} {_sanitize_text(page_text, 6000)} {path}"
    )
    return any(hint in merged for hint in SPECIFIC_CONTACT_TEXT_HINTS)


def _name_token_count(value):
    tokens = [t for t in re.split(r"\s+", _sanitize_text(value, 120)) if t]
    return len(tokens)


def _resolve_search_provider_order():
    raw = str(os.getenv("SEARCH_PROVIDER_ORDER", "")).strip().lower()
    if raw:
        items = []
        for part in raw.split(","):
            name = str(part or "").strip().lower()
            if not name:
                continue
            if name not in items:
                items.append(name)
        if items:
            return items
    return list(DEFAULT_SEARCH_PROVIDER_ORDER)


def _extract_urls_from_text(raw_text, max_urls=20):
    text = str(raw_text or "")
    if not text:
        return []
    out = []
    seen = set()
    for match in re.findall(r"https?://[^\s\"'<>]+", text, flags=re.IGNORECASE):
        url = _cleanup_url(match)
        if not url:
            continue
        host = _root_domain(url)
        if not host or _is_noisy_host(host) or _is_generic_big_site_url(url):
            continue
        if url in seen:
            continue
        seen.add(url)
        out.append(url)
        if len(out) >= max_urls:
            break
    return out


def _extract_domains_from_text(raw_text, max_domains=20):
    text = str(raw_text or "")
    if not text:
        return []
    out = []
    seen = set()
    for match in re.findall(r"\b(?:www\.)?[a-z0-9.-]+\.(?:es|com|net|org|info|eu)\b", text, flags=re.IGNORECASE):
        domain = _root_domain(f"https://{match}")
        if not domain or _is_noisy_host(domain) or _is_generic_big_site_url(f"https://{domain}"):
            continue
        if domain in seen:
            continue
        seen.add(domain)
        out.append(domain)
        if len(out) >= max_domains:
            break
    return out


def _normalize_root_domain_value(value):
    raw = str(value or "").strip().lower()
    if not raw:
        return ""
    if raw.startswith("http://") or raw.startswith("https://"):
        return _root_domain(raw)
    return _root_domain(f"https://{raw}")


def _ollama_tags_url_from_generate_endpoint(generate_endpoint):
    endpoint = str(generate_endpoint or "").strip()
    if not endpoint:
        return ""
    try:
        parsed = urlsplit(endpoint)
        if not parsed.scheme or not parsed.netloc:
            return ""
        return f"{parsed.scheme}://{parsed.netloc}/api/tags"
    except Exception:
        return ""


def _parse_param_size_billion(value):
    text = str(value or "").strip().upper()
    if not text:
        return 0.0
    m = re.search(r"(\d+(?:\.\d+)?)\s*B", text)
    if m:
        try:
            return float(m.group(1))
        except Exception:
            return 0.0
    return 0.0


def _pick_best_ollama_model(generate_endpoint, profile_hint):
    forced = str(os.getenv("OLLAMA_MODEL", "")).strip()
    if forced:
        return forced
    allow_qwen3_generate = str(os.getenv("ALLOW_QWEN3_GENERATE_MODELS", "0")).strip().lower() in {"1", "true", "yes", "on"}

    tags_url = _ollama_tags_url_from_generate_endpoint(generate_endpoint)
    if not tags_url:
        return "qwen2.5:7b"

    cache_ttl_sec = max(60, _env_int("OLLAMA_MODEL_CACHE_TTL_SEC", 600))
    now = time.time()
    profile_key = str(profile_hint or "").strip().lower() or "pro"
    cache_key = f"{tags_url}|{profile_key}"
    cached = _ollama_model_cache.get(cache_key)
    if cached and (now - float(cached.get("ts") or 0)) <= cache_ttl_sec:
        cached_model = str(cached.get("model") or "qwen2.5:7b")
        if allow_qwen3_generate or not cached_model.lower().startswith("qwen3:"):
            return cached_model

    preferred_by_profile = {
        "investigacion": ["llama3.1:8b", "qwen2.5:7b", "gemma3:4b", "mistral:7b", "qwen2.5:14b"],
        "pro": ["llama3.1:8b", "qwen2.5:7b", "mistral:7b", "gemma3:4b", "qwen2.5:14b"],
        "equilibrado": ["qwen2.5:7b", "gemma3:4b", "mistral:7b", "llama3.1:8b", "qwen2.5:14b"],
    }
    preferred = preferred_by_profile.get(profile_key, preferred_by_profile["pro"])

    try:
        resp = requests.get(tags_url, timeout=max(4, _env_int("OLLAMA_TAGS_TIMEOUT_SEC", 8)))
        if int(resp.status_code or 0) < 200 or int(resp.status_code or 0) >= 300:
            _ollama_model_cache[cache_key] = {"ts": now, "model": "qwen2.5:7b"}
            return "qwen2.5:7b"
        data = resp.json() if resp.text else {}
        models = data.get("models") or []
        names = []
        sizes = {}
        for item in models:
            model_name = str((item or {}).get("name") or (item or {}).get("model") or "").strip()
            if not model_name:
                continue
            low_name = model_name.lower()
            if "-vl" in low_name or "coder" in low_name or "embed" in low_name:
                continue
            # En /api/generate, los modelos qwen3 base pueden devolver respuesta vacia.
            # Los dejamos fuera por defecto para garantizar salida util.
            if (not allow_qwen3_generate) and low_name.startswith("qwen3:"):
                continue
            names.append(model_name)
            details = (item or {}).get("details") or {}
            sizes[model_name] = _parse_param_size_billion(details.get("parameter_size"))

        names_l = {n.lower(): n for n in names}
        for wanted in preferred:
            picked = names_l.get(wanted.lower())
            if picked:
                _ollama_model_cache[cache_key] = {"ts": now, "model": picked}
                return picked

        if names:
            names_sorted = sorted(names, key=lambda n: (sizes.get(n, 0.0), len(n)), reverse=True)
            picked = names_sorted[0]
            _ollama_model_cache[cache_key] = {"ts": now, "model": picked}
            return picked
    except Exception:
        pass

    _ollama_model_cache[cache_key] = {"ts": now, "model": "qwen2.5:7b"}
    return "qwen2.5:7b"


def _get_ollama_seed_urls(query_text, scope_hint, max_urls=14, model_profile="pro"):
    enabled = str(os.getenv("ENABLE_OLLAMA_ENTITY_SEEDS", "1")).strip().lower() not in {"0", "false", "no", "off"}
    if not enabled:
        return [], ""

    query_norm = _normalize_ascii(_sanitize_text(query_text, 1200))
    if not query_norm:
        return [], ""

    cache_ttl_sec = max(60, _env_int("OLLAMA_SEED_CACHE_TTL_SEC", 3600))
    now = time.time()
    cached = _ollama_seed_cache.get(query_norm)
    if cached and (now - float(cached.get("ts") or 0)) <= cache_ttl_sec:
        return list(cached.get("urls") or [])[:max_urls], str(cached.get("model") or "")

    endpoint = str(os.getenv("OLLAMA_ENDPOINT", "http://127.0.0.1:11434/api/generate")).strip()
    model = _pick_best_ollama_model(endpoint, model_profile)
    timeout_sec = max(8, _env_int("OLLAMA_TIMEOUT_SEC", 24))
    if not endpoint or not model:
        return [], ""

    prompt = (
        "Devuelve SOLO una lista corta de webs oficiales (URLs) de medios/empresas/personas "
        "potencialmente relevantes para esta busqueda de contactos profesionales.\n"
        f"Alcance: {scope_hint}\n"
        f"Busqueda: {query_text}\n"
        "Reglas:\n"
        "- Solo URLs web oficiales, una por linea.\n"
        "- Prioriza Espana/Madrid si aplica.\n"
        "- Evita directorios, foros, agregadores y webs genericas.\n"
        "- Prioriza paginas de personas/equipo/prensa/management.\n"
        "- Maximo 20 URLs.\n"
        "- Escribe SIEMPRE URLs completas con https://\n"
        "- No expliques nada."
    )
    model_chain = [model]
    if model.lower() != "qwen2.5:14b":
        model_chain.append("qwen2.5:14b")

    for current_model in model_chain:
        payload = {
            "model": current_model,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": 0.1,
                "num_predict": 220,
            },
        }
        try:
            resp = requests.post(endpoint, json=payload, timeout=timeout_sec)
            if int(resp.status_code or 0) < 200 or int(resp.status_code or 0) >= 300:
                continue
            data = resp.json() if resp.text else {}
            text_resp = str((data or {}).get("response") or "")
            urls = _extract_urls_from_text(text_resp, max_urls=max_urls)
            if len(urls) < max_urls:
                for domain in _extract_domains_from_text(text_resp, max_domains=max_urls):
                    candidate = f"https://{domain}"
                    if candidate not in urls:
                        urls.append(candidate)
                    if len(urls) >= max_urls:
                        break
            if urls:
                _ollama_seed_cache[query_norm] = {"ts": now, "urls": list(urls), "model": current_model}
                return urls[:max_urls], current_model
        except Exception:
            continue

    _ollama_seed_cache[query_norm] = {"ts": now, "urls": [], "model": model}
    return [], model
def _get_curated_seed_urls(query_keywords, scope_value):
    kws = {str(k or "").strip().lower() for k in (query_keywords or []) if str(k or "").strip()}
    if not kws:
        return []
    music_markers = {
        "musica", "musical", "musicales", "indie", "rock", "periodista",
        "periodistas", "redactor", "redactores", "promotor", "promotores",
        "management", "booking", "festival", "festivales", "radio",
    }
    if not any(marker in kws for marker in music_markers):
        return []

    seeds = [
        "https://www.mondosonoro.com/",
        "https://jenesaispop.com/",
        "https://muzikalia.com/",
        "https://www.ruta66.es/",
        "https://www.rockdelux.com/",
        "https://mariskalrock.com/",
        "https://dodmagazine.es/",
        "https://www.binaural.es/",
        "https://www.intromusica.com/",
        "https://www.subterfuge.com/",
        "https://sonidomuchacho.com/",
        "https://gruta77.com/",
    ]
    if str(scope_value or "").strip().upper() in {"MUNI_MADRID", "PROV_COM_MADRID"}:
        seeds.extend(
            [
                "https://www.salamon.com/",
                "https://salaelsol.com/",
                "https://www.conciertospormadrid.com/",
            ]
        )
    out = []
    seen = set()
    for seed in seeds:
        clean = _cleanup_url(seed)
        if not clean:
            continue
        if clean in seen:
            continue
        seen.add(clean)
        out.append(clean)
    return out


def _is_scope_aligned_url(url, scope):
    value = str(url or "").strip()
    if not value:
        return False
    scope_key = str(scope or "").strip().upper()
    if scope_key not in {"MUNI_MADRID", "PROV_COM_MADRID", "NACIONAL_ES"}:
        return True

    host = _root_domain(value)
    if not host:
        return False
    if host.endswith(".es"):
        return True
    if any(social in host for social in ("linkedin.com", "instagram.com", "facebook.com", "youtube.com", "tiktok.com", "x.com", "twitter.com")):
        return True

    merged = _normalize_ascii(value)
    return any(token in merged for token in ("madrid", "espana", "spain", "espanol", "espanola"))


def _is_low_quality_source_url(url):
    value = str(url or "").strip().lower()
    if not value:
        return True
    if _is_generic_big_site_url(value):
        return True
    path = _url_path(value)
    merged = f"{value} {path}"
    for hint in LOW_QUALITY_URL_HINTS:
        if hint in merged:
            return True
    # No descartamos paginas /contacto solo por URL.
    # La calidad real se decide despues leyendo el contenido de la pagina.
    return False


def _is_generic_company_label(value):
    text = _sanitize_text(value, 180).strip().lower()
    if not text:
        return True
    if text in GENERIC_COMPANY_LABELS:
        return True
    if re.search(r"(tablon|anuncios?|directorio|directory|listing|listado|clasificados|aviso legal|politica de privacidad)", text):
        return True
    return False


def _looks_like_person_name(value):
    text = _sanitize_text(value, 120).strip()
    if not text:
        return False
    if len(text) < 4 or len(text) > 80:
        return False
    if re.search(r"\d", text):
        return False
    lower = _normalize_ascii(text)
    if any(token in lower for token in GENERIC_NAME_TOKENS):
        return False
    chunks = [c for c in re.split(r"\s+", text) if c]
    if len(chunks) < 2 or len(chunks) > 5:
        return False
    stopwords = {"de", "del", "la", "las", "los", "y", "the", "of", "se"}
    score = 0
    score_len3 = 0
    for chunk in chunks:
        token = _normalize_ascii(chunk)
        if token in stopwords:
            continue
        if token in GENERIC_NAME_TOKENS:
            return False
        if len(token) <= 1:
            return False
        if re.match(r"^[a-z'`.-]{2,}$", token):
            score += 1
            if len(token) >= 3:
                score_len3 += 1
    return score >= 2 and score_len3 >= 1


def _looks_like_org_or_generic_name(name, company, page_title, source_url):
    value = _normalize_ascii(_sanitize_text(name, 120))
    if not value:
        return True
    tokens = [t for t in re.split(r"\s+", value) if t and t not in {"de", "del", "la", "las", "los", "y"}]
    if not tokens:
        return True

    # Nombres claramente genericos/no personales
    blocked = {
        "internet",
        "usuarios",
        "usuario",
        "technology",
        "technologies",
        "tecnologia",
        "tecnologias",
        "appmind",
        "radio",
        "news",
        "editorial",
        "contacto",
        "contact",
        "equipo",
        "team",
        "staff",
    }
    if any(t in blocked for t in tokens):
        return True

    company_norm = _normalize_ascii(_sanitize_text(company, 180))
    title_norm = _normalize_ascii(_sanitize_text(page_title, 220))
    domain_root = _normalize_ascii((_root_domain(source_url) or "").split(".", 1)[0])
    merged = f"{company_norm} {title_norm} {domain_root}"
    if all(t in merged for t in tokens):
        return True
    return False


def _is_low_signal_page(url, page_title, text):
    if _is_low_quality_source_url(url):
        return True
    merged = f"{_sanitize_text(page_title, 200)} {_sanitize_text(text, 5000)}".lower()
    if re.search(r"(tablon|anuncios?|clasificados|directorio|directory|listado|listing|publica tu anuncio|publicar anuncio|subir anuncio)", merged):
        return True
    if re.search(r"(contactos?|contacts?|ultimas noticias|últimas noticias|opinion|opiniao|fotos y videos|fotos e videos|suscribete|assinaturas|suscripciones|newsletter|aviso legal|politica de privacidad|política de privacidad|cookies)", merged):
        if not re.search(r"(prensa|press|editor|redactor|periodista|a&r|booking|management|promotor|manager|comunicacion|comunicación|agencia|representacion|representación)", merged):
            return True
    return False


def _resolve_search_result_href(href):
    value = str(href or "").strip()
    if not value:
        return ""
    if value.startswith("//"):
        value = f"https:{value}"
    host = _root_domain(value)
    if host.endswith("bing.com"):
        try:
            parsed = urlsplit(value)
            qs = parse_qs(parsed.query or "")
            raw = ""
            if qs.get("u"):
                raw = str(qs.get("u")[0] or "")
            elif qs.get("url"):
                raw = str(qs.get("url")[0] or "")
            raw = raw.strip()
            if raw:
                if raw.startswith("a1"):
                    encoded = raw[2:]
                    padding = "=" * (-len(encoded) % 4)
                    decoded = base64.urlsafe_b64decode((encoded + padding).encode("utf-8")).decode("utf-8", "ignore")
                    if decoded.startswith("http"):
                        return decoded
                raw_decoded = unquote(raw)
                if raw_decoded.startswith("http"):
                    return raw_decoded
        except Exception:
            return value
    if host.endswith("duckduckgo.com"):
        try:
            parsed = urlsplit(value)
            qs = parse_qs(parsed.query or "")
            raw = str((qs.get("uddg") or [""])[0] or "").strip()
            if raw:
                raw_decoded = unquote(raw)
                if raw_decoded.startswith("http"):
                    return raw_decoded
        except Exception:
            return value
    # Desenvuelve redirecciones sociales frecuentes para llegar a la URL real.
    try:
        parsed = urlsplit(value)
        host = (parsed.netloc or "").lower()
        qs = parse_qs(parsed.query or "")
        if "l.instagram.com" in host:
            raw = str((qs.get("u") or [""])[0] or "").strip()
            raw_decoded = unquote(raw) if raw else ""
            if raw_decoded.startswith("http"):
                return raw_decoded
        if "l.facebook.com" in host:
            raw = str((qs.get("u") or [""])[0] or "").strip()
            raw_decoded = unquote(raw) if raw else ""
            if raw_decoded.startswith("http"):
                return raw_decoded
        if "linkedin.com" in host and "/redir/" in (parsed.path or ""):
            raw = str((qs.get("url") or [""])[0] or "").strip()
            raw_decoded = unquote(raw) if raw else ""
            if raw_decoded.startswith("http"):
                return raw_decoded
    except Exception:
        return value
    return value


def _is_valid_email_shape(email):
    value = str(email or "").strip().lower()
    if not value or "@" not in value:
        return False
    local, domain = value.split("@", 1)
    if not local or not domain or "." not in domain:
        return False
    tld = domain.rsplit(".", 1)[-1].lower()
    if tld in BLOCKED_EMAIL_TLDS:
        return False
    if ".." in value:
        return False
    return True


def _is_generic_mailbox(email):
    value = str(email or "").strip().lower()
    if "@" not in value:
        return False
    local = value.split("@", 1)[0].replace(".", "").replace("-", "").replace("_", "")
    return local in GENERIC_ROLE_PREFIXES


def _is_role_like_mailbox(email):
    value = str(email or "").strip().lower()
    if "@" not in value:
        return False
    local = value.split("@", 1)[0]
    normalized = re.sub(r"[\d._-]+", " ", local).strip().lower()
    if not normalized:
        return False
    tokens = [t for t in re.split(r"\s+", normalized) if t]
    if not tokens:
        return False
    if any(token in GENERIC_ROLE_PREFIXES for token in tokens):
        return True
    joined = "".join(tokens)
    if joined in {
        "callcenter",
        "atencioncliente",
        "customerservice",
        "newsletter",
        "suscripciones",
        "assinaturas",
    }:
        return True
    return False


def _tokenize_name_for_email_match(name):
    text = _normalize_ascii(_sanitize_text(name, 120))
    if not text:
        return []
    stop = {"de", "del", "la", "las", "los", "y", "the", "of", "se"}
    return [t for t in re.split(r"\s+", text) if t and t not in stop and len(t) >= 2][:6]


def _tokenize_email_local_for_name_match(email):
    value = str(email or "").strip().lower()
    if "@" not in value:
        return []
    local = value.split("@", 1)[0]
    local = re.sub(r"[0-9]+", " ", local)
    local = re.sub(r"[._\-+]+", " ", local)
    local = re.sub(r"\s+", " ", local).strip()
    if not local:
        return []
    return [t for t in re.split(r"\s+", local) if t and len(t) >= 2][:6]


def _name_matches_email_local(name, email):
    person = _sanitize_text(name, 120).strip()
    mail = str(email or "").strip().lower()
    if not person or "@" not in mail:
        return False
    if _is_role_like_mailbox(mail):
        return False
    name_tokens = _tokenize_name_for_email_match(person)
    email_tokens = _tokenize_email_local_for_name_match(mail)
    if not name_tokens or not email_tokens:
        return False
    for n in name_tokens:
        if len(n) < 3:
            continue
        for e in email_tokens:
            if len(e) < 3:
                continue
            if n == e:
                return True
            n4 = n[:4]
            e4 = e[:4]
            if n.startswith(e4) or e.startswith(n4):
                return True
            if len(n) >= 5 and n[:5] in e:
                return True
            if len(e) >= 5 and e[:5] in n:
                return True
    return False


def _decode_cfemail(encoded_hex):
    value = str(encoded_hex or "").strip().lower()
    if not value or len(value) < 4 or (len(value) % 2) != 0:
        return ""
    if not re.match(r"^[0-9a-f]+$", value):
        return ""
    try:
        key = int(value[:2], 16)
        out = []
        for idx in range(2, len(value), 2):
            out.append(chr(int(value[idx:idx + 2], 16) ^ key))
        candidate = "".join(out).strip().lower()
        return candidate if _is_valid_email_shape(candidate) else ""
    except Exception:
        return ""


def _name_from_email(email):
    value = str(email or "").strip().lower()
    if "@" not in value:
        return ""
    local = value.split("@", 1)[0]
    local = re.sub(r"[^a-z0-9._-]", "", local)
    chunks = [c for c in re.split(r"[._-]+", local) if c]
    if len(chunks) < 2:
        return ""
    if len(chunks) > 4:
        chunks = chunks[:4]
    candidate = " ".join([c.capitalize() for c in chunks])
    return candidate if _looks_like_person_name(candidate) else ""


def _name_from_email_relaxed(email):
    value = str(email or "").strip().lower()
    if "@" not in value:
        return ""
    local_tokens = _tokenize_email_local_for_name_match(value)
    if len(local_tokens) != 1:
        return ""
    token = _normalize_ascii(local_tokens[0]).strip()
    if not token:
        return ""
    if len(token) < 3 or len(token) > 14:
        return ""
    if token in GENERIC_NAME_TOKENS or token in GENERIC_ROLE_PREFIXES:
        return ""
    if token.startswith("http"):
        return ""
    if re.search(
        r"(test|demo|noreply|mail|web|studio|music|radio|records|team|office|contact|info|press|prensa|booking|ventas|sales|admin|support|comunicacion|media|marketing|events?|eventos?|rrpp|publicidad|editorial|redaccion|contenidos|oficina|bandas|tienda|shop|lopd|rgpd|legal|privacidad|privacy|compliance|datos|data)",
        token,
    ):
        return ""
    if re.search(r"([a-z])\1{3,}", token):
        return ""
    if re.match(r"^[a-z][a-z'`.-]{2,}$", token):
        return token.capitalize()
    return ""


def _extract_name_near_email(text, email):
    raw_text = _sanitize_text(text, 60000)
    mail = str(email or "").strip()
    if not raw_text or not mail:
        return ""
    # Nombre justo antes del email: "Nombre Apellido email@dominio.com"
    before_pattern = re.compile(
        r"([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}(?:\s+[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}){1,3})\s*[\(<\[]?\s*"
        + re.escape(mail),
        re.UNICODE,
    )
    m = before_pattern.search(raw_text)
    if m:
        candidate = _sanitize_text(m.group(1), 120)
        if _looks_like_person_name(candidate):
            return candidate

    # Nombre justo despues del email: "email@dominio.com - Nombre Apellido"
    after_pattern = re.compile(
        re.escape(mail)
        + r"\s*[-–—|,:;]*\s*([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}(?:\s+[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ'`.-]{1,24}){1,3})",
        re.UNICODE,
    )
    m = after_pattern.search(raw_text)
    if m:
        candidate = _sanitize_text(m.group(1), 120)
        if _looks_like_person_name(candidate):
            return candidate
    return ""


def _normalize_phone(phone_raw):
    value = str(phone_raw or "").strip()
    if not value:
        return ""
    digits = re.sub(r"[^\d+]", "", value)
    if digits.startswith("+"):
        digits = digits[1:]
    if len(digits) < 7:
        return ""
    return digits


def _extract_meta_description(soup):
    for selector in [
        'meta[name="description"]',
        'meta[property="og:description"]',
        'meta[name="twitter:description"]',
    ]:
        tag = soup.select_one(selector)
        if tag and tag.get("content"):
            text = _sanitize_text(tag.get("content"), 500)
            if text:
                return text
    return ""


def _extract_fallback_description(soup, text):
    for p in soup.select("p"):
        candidate = _sanitize_text(p.get_text(" ", strip=True), 420)
        if len(candidate) >= 60:
            return candidate
    compact = _sanitize_text(text, 420)
    if not compact:
        return ""
    chunks = re.split(r"(?<=[.!?])\s+", compact)
    if not chunks:
        return compact
    out = " ".join(chunks[:2]).strip()
    return _sanitize_text(out or compact, 420)


def _is_low_value_description(text):
    value = _normalize_ascii(_sanitize_text(text, 320))
    if not value:
        return True
    if len(value) < 18:
        return True
    if re.search(r"(ultimas noticias|latest news|opinion|opiniao|fotos y videos|fotos e videos|contactos?|contacts?|suscribete|assinaturas|suscripciones|newsletter|aviso legal|politica de privacidad|cookies|menu|inicio|home)", value):
        return True
    return False


def _guess_role_and_function(title, description, text):
    combined = f"{title} {description} {_sanitize_text(text, 2500)}".lower()
    for keyword, role, fn in ROLE_HINTS:
        if keyword in combined:
            return role, fn
    if "agencia" in combined:
        return "Contacto de agencia", "Gestion de proyectos y servicios de la entidad."
    if "festival" in combined or "concierto" in combined:
        return "Organizacion de eventos", "Gestion y promocion de eventos musicales."
    if "revista" in combined or "medio" in combined:
        return "Contacto editorial", "Creacion y publicacion de contenidos del medio."
    return "IA no encuentra", "IA no encuentra"


def _extract_company_name(soup, source_url):
    for selector in [
        'meta[property="og:site_name"]',
        'meta[name="application-name"]',
    ]:
        tag = soup.select_one(selector)
        if tag and tag.get("content"):
            text = _sanitize_text(tag.get("content"), 180)
            if text and not _is_generic_company_label(text):
                return text
    title = _sanitize_text(soup.title.text if soup.title and soup.title.text else "", 180)
    if title:
        chunks = [c.strip() for c in re.split(r"[|\-–—]", title) if c.strip()]
        for chunk in chunks:
            if not _is_generic_company_label(chunk):
                return chunk
    domain_name = _root_domain(source_url)
    return "" if _is_generic_company_label(domain_name) else domain_name


def _extract_emails(text, include_generic):
    found = set()
    raw_text = str(text or "")
    normalized_text = raw_text
    normalized_text = re.sub(r"\s*(?:\(|\[)?\s*(?:at|arroba)\s*(?:\)|\])?\s*", "@", normalized_text, flags=re.IGNORECASE)
    normalized_text = re.sub(r"\s*(?:\(|\[)?\s*(?:dot|punto)\s*(?:\)|\])?\s*", ".", normalized_text, flags=re.IGNORECASE)
    normalized_text = normalized_text.replace(" (.) ", ".").replace(" [.] ", ".")

    for match in EMAIL_RE.findall(raw_text + " " + normalized_text):
        value = match.strip().lower()
        if not _is_valid_email_shape(value):
            continue
        if not include_generic and _is_generic_mailbox(value):
            continue
        found.add(value)
    return sorted(found)


def _extract_emails_from_soup(soup, include_generic):
    found = set()
    if not soup:
        return []
    for node in soup.select("[data-cfemail]"):
        encoded = str(node.get("data-cfemail") or "").strip()
        candidate = _decode_cfemail(encoded)
        if not candidate:
            continue
        if not include_generic and _is_generic_mailbox(candidate):
            continue
        found.add(candidate)
    for anchor in soup.select("a[href]"):
        href = str(anchor.get("href") or "").strip()
        if not href:
            continue
        if "/cdn-cgi/l/email-protection#" in href:
            encoded = href.split("#", 1)[1].strip() if "#" in href else ""
            candidate = _decode_cfemail(encoded)
            if candidate:
                if include_generic or not _is_generic_mailbox(candidate):
                    found.add(candidate)
            continue
        if href.lower().startswith("mailto:"):
            candidate = href.split(":", 1)[1].split("?", 1)[0].strip().lower()
            if not candidate:
                continue
            if not _is_valid_email_shape(candidate):
                continue
            if not include_generic and _is_generic_mailbox(candidate):
                continue
            found.add(candidate)
    return sorted(found)


def _extract_phones(text):
    found = set()
    for match in PHONE_RE.findall(str(text or "")):
        normalized = _normalize_phone(match)
        if normalized:
            found.add(normalized)
    return sorted(found)


def _extract_query_keywords(raw_query, max_terms=12):
    query = _truncate_keep_tail(raw_query, max_len=1200, tail_len=300)
    tokens = re.findall(r"[A-Za-z0-9ÁÉÍÓÚáéíóúÑñüÜ]+", query)
    stop = {
        "busca", "buscar", "informacion", "informacion", "contacto", "contactos", "publico", "publica",
        "profesionales", "profesional", "objetivo", "extraer", "direcciones", "correo", "electronico",
        "validas", "validos", "persona", "personas", "tipo", "directo", "directa", "para", "con", "sin",
        "por", "de", "del", "la", "el", "los", "las", "y", "o", "que", "como", "donde", "desde",
        "com", "www", "http", "https", "mail", "email", "web", "pagina", "sitio",
        "quiero", "necesito", "hacer", "solo", "ningun", "ninguna"
    }
    priority_terms = {
        "madrid", "espana", "spain", "indie", "rock", "musica", "musical", "musicales",
        "periodista", "periodistas", "redactor", "redactores", "critico", "criticos",
        "locutor", "locutores", "management", "booking", "promotor", "promotores",
        "festival", "festivales", "radio", "agencia", "medios", "medio", "blog", "revista",
        "ar", "a", "r"
    }
    prioritized = []
    regular = []
    seen = set()
    for token in tokens:
        part = _normalize_ascii(token).strip().strip(".-_")
        if len(part) < 3:
            continue
        if part in stop:
            continue
        if part in seen:
            continue
        seen.add(part)
        if part in priority_terms:
            prioritized.append(part)
        else:
            regular.append(part)
    ordered = prioritized + regular
    return ordered[: max(1, max_terms)]


def _keyword_hits(text, keywords):
    haystack = _normalize_ascii(_sanitize_text(text, 8000))
    if not haystack:
        return 0
    hits = 0
    for kw in keywords:
        if kw and kw in haystack:
            hits += 1
    return hits


def _passes_query_relevance(payload, source_url, page_title, page_text, keywords):
    query_keywords = keywords or []
    if not query_keywords:
        return True
    hay = " ".join([
        str(source_url or ""),
        str(page_title or ""),
        str(page_text or "")[:6000],
    ])
    scope = str((payload or {}).get("scope", "")).upper()
    scope_aligned = _is_scope_aligned_url(source_url, scope)
    hits = _keyword_hits(hay, query_keywords)
    min_hits = 1 if len(query_keywords) <= 10 else 2
    if scope_aligned:
        min_hits = 1
    if hits < min_hits:
        return False

    if scope in {"MUNI_MADRID", "PROV_COM_MADRID", "NACIONAL_ES"}:
        geo_hay = _normalize_ascii(hay)
        has_geo = any(
            marker in geo_hay
            for marker in (
                "madrid",
                "comunidad de madrid",
                "espana",
                "spain",
            )
        )
        geo_required_hits = 1 if scope_aligned else 2
        if not has_geo and hits < geo_required_hits:
            return False
    return True


def _build_search_queries(payload):
    raw_query = _truncate_keep_tail(payload.get("query", ""), max_len=1100, tail_len=340)
    keywords = _extract_query_keywords(raw_query, max_terms=18)
    geo_tokens = {"madrid", "espana", "spain", "europa", "europeo", "internacional", "comunidad"}
    role_tokens = {
        "periodista", "periodistas", "redactor", "redactores", "critico", "criticos",
        "locutor", "locutores", "management", "booking", "promotor", "promotores",
        "ar", "a&r", "editor", "editores", "concejal", "concejal",
    }
    stop_industry = {"email", "correo", "contacto", "contact", "profesional", "profesionales", "directo", "directa"}

    industry_terms = []
    role_terms = []
    for item in keywords:
        token = str(item or "").strip().lower()
        if not token or token in geo_tokens:
            continue
        if token in {"musicales", "musical"}:
            token = "musica"
        if token in role_tokens:
            if token not in role_terms:
                role_terms.append(token)
            continue
        if token in stop_industry:
            continue
        if token not in industry_terms:
            industry_terms.append(token)

    if not industry_terms:
        industry_terms = ["musica", "indie", "rock"]
    if not role_terms:
        role_terms = ["periodista", "redactor", "management", "promotor"]

    industry = _sanitize_text(" ".join(industry_terms[:2]), 80)
    role_focus = _sanitize_text(" ".join(role_terms[:2]), 60)

    scope = str(payload.get("scope", "NACIONAL_ES")).strip().upper()
    scope_hint = {
        "MUNI_MADRID": "Madrid ciudad",
        "PROV_COM_MADRID": "Comunidad de Madrid",
        "NACIONAL_ES": "Espana",
        "EUROPEO": "Europa",
        "INTERNACIONAL": "Internacional",
    }.get(scope, "Espana")

    variants = [
        f"{industry} {role_focus} email {scope_hint}",
        f"{industry} periodista email directo {scope_hint}",
        f"{industry} redactor email directo {scope_hint}",
        f"{industry} management booking email {scope_hint}",
        f"{industry} promotora conciertos prensa email {scope_hint}",
        f"site:.es {industry} prensa contacto email {scope_hint}",
        f"site:.es {industry} redaccion equipo email {scope_hint}",
        f"site:linkedin.com/in {industry} contacto email {scope_hint}",
        f"site:linkedin.com/company {industry} prensa email {scope_hint}",
        f"site:instagram.com {industry} booking email {scope_hint}",
        f"site:tiktok.com/@ {industry} management email {scope_hint}",
        f"site:facebook.com {industry} management email {scope_hint}",
    ]
    max_queries = max(1, _env_int("MAX_SEARCH_QUERIES", 9))
    out = []
    seen = set()
    for item in variants:
        key = item.lower().strip()
        if not key or key in seen:
            continue
        seen.add(key)
        out.append(item)
        if len(out) >= max_queries:
            break
    return out


def _build_fallback_seed_queries(payload, query_keywords):
    scope = str(payload.get("scope", "NACIONAL_ES")).strip().upper()
    scope_hint = {
        "MUNI_MADRID": "Madrid ciudad",
        "PROV_COM_MADRID": "Comunidad de Madrid",
        "NACIONAL_ES": "Espana",
        "EUROPEO": "Europa",
        "INTERNACIONAL": "Internacional",
    }.get(scope, "Espana")
    topic_tokens = []
    for kw in (query_keywords or []):
        token = str(kw or "").strip().lower()
        if not token or token in {"madrid", "espana", "spain", "europa", "internacional"}:
            continue
        topic_tokens.append(token)
        if len(topic_tokens) >= 2:
            break
    topic = " ".join(topic_tokens).strip() or "musica"
    return [
        f"periodista {topic} email {scope_hint}",
        f"management booking {topic} email {scope_hint}",
        f"promotora {topic} contacto email {scope_hint}",
        f"site:.es {topic} prensa contacto email {scope_hint}",
        f"site:.es {topic} redaccion equipo email {scope_hint}",
        f"site:linkedin.com/in {topic} contacto email {scope_hint}",
        f"site:instagram.com {topic} booking email {scope_hint}",
    ]


def _is_link_relevant_for_query(anchor_text, resolved_url, keywords, scope, strict_level=1):
    kws = keywords or []
    host = _root_domain(resolved_url)
    if _is_noisy_host(host):
        return False
    if _is_generic_big_site_url(resolved_url):
        return False
    scope_aligned = _is_scope_aligned_url(resolved_url, scope)
    scope_key = str(scope or "").strip().upper()
    if scope_key in {"MUNI_MADRID", "PROV_COM_MADRID", "NACIONAL_ES"} and not scope_aligned:
        # En alcance espanol, bloqueamos dominios no alineados salvo redes clave
        # donde suele vivir el contacto profesional.
        if not any(
            social in host for social in (
                "linkedin.com",
                "instagram.com",
                "facebook.com",
                "youtube.com",
                "tiktok.com",
                "x.com",
                "twitter.com",
            )
        ):
            return False
    social_candidate = _is_social_candidate_url(resolved_url)
    if strict_level >= 2 and not scope_aligned and not social_candidate:
        return False
    if not kws:
        return scope_aligned or strict_level <= 1 or social_candidate
    hay = _normalize_ascii(f"{anchor_text} {resolved_url}")
    if not hay:
        return False
    hits = 0
    for kw in kws:
        if kw and kw in hay:
            hits += 1
    required = 1 if strict_level <= 1 else 2
    if strict_level > 1 and not scope_aligned and not social_candidate:
        required += 1
    if host.endswith(".es"):
        required = max(1, required - 1)
    if hits >= required:
        return True

    # Fallback controlado: aceptamos enlaces de ambito alineado con señales
    # claras de contacto profesional, para evitar quedarnos en cero.
    if strict_level <= 1 and scope_aligned:
        contact_signals = (
            "prensa", "press", "periodista", "redactor", "editor",
            "management", "booking", "promotor", "festival", "radio",
            "contacto", "contact", "equipo", "team", "staff"
        )
        has_contact_signal = any(signal in hay for signal in contact_signals)
        if not has_contact_signal:
            return False
        # Anti-web generica: en fallback exigimos tambien contexto de pagina de contacto real.
        return _has_specific_contact_context(resolved_url, anchor_text, hay)
    return False


def _search_links_via_searxng(query, timeout, headers, append_link):
    base = str(os.getenv("SEARXNG_BASE_URL", "")).strip()
    if not base:
        return 0
    endpoint = f"{base.rstrip('/')}/search"
    language = str(os.getenv("SEARXNG_LANGUAGE", "es")).strip() or "es"
    engines = str(os.getenv("SEARXNG_ENGINES", "")).strip()
    params = {
        "q": query,
        "format": "json",
        "language": language,
        "safesearch": 0,
        "categories": "general",
    }
    if engines:
        params["engines"] = engines

    try:
        resp = requests.get(endpoint, params=params, timeout=timeout, headers=headers)
        if resp.status_code < 200 or resp.status_code >= 300:
            return 0
        data = resp.json() if resp.text else {}
        results = data.get("results") or []
        added = 0
        for item in results:
            href = _sanitize_text((item or {}).get("url") or "", 1400)
            title = _sanitize_text((item or {}).get("title") or "", 260)
            if not href:
                continue
            before = append_link(title, href, strict_level=1)
            if before:
                added += 1
        return added
    except Exception:
        return 0


def _search_links_for_query(
    query,
    query_keywords,
    scope,
    telemetry=None,
    query_budget_override_sec=None,
    timeout_override_sec=None,
    max_links_override=None,
    providers_limit=None,
):
    timeout = max(2, int(timeout_override_sec or _env_int("SEARCH_HTTP_TIMEOUT", 10)))
    attempts = max(1, _env_int("SEARCH_HTTP_ATTEMPTS", 1))
    max_links_per_query = max(6, int(max_links_override or _env_int("MAX_LINKS_PER_QUERY", 36)))
    query_budget_sec = max(3, int(query_budget_override_sec or _env_int("SEARCH_QUERY_TIME_BUDGET_SEC", 18)))
    started_at = time.time()
    links = []
    headers = {"User-Agent": SEARCH_USER_AGENT}
    scope_key = str(scope or "").strip().upper() or "NACIONAL_ES"
    providers_used = []
    providers_stats = {}
    blocked_hosts = {
        "bing.com",
        "duckduckgo.com",
        "search.brave.com",
        "brave.com",
        "www.brave.com",
        "google.com",
        "www.google.com",
        "play.google.com",
        "apps.apple.com",
        "r.bing.com",
        "go.microsoft.com",
    }

    def _append_link(anchor_text, href, strict_level):
        if len(links) >= max_links_per_query:
            return False
        resolved = _resolve_search_result_href(href)
        if not str(resolved or "").startswith("http"):
            return False
        if _is_social_candidate_url(resolved):
            strict_level = 1
        host = _root_domain(resolved)
        if not host or host in blocked_hosts:
            return False
        # No bloqueamos por "low quality" en fase de captacion de enlaces:
        # esa limpieza se aplica despues al parsear contenido real.
        if not _is_link_relevant_for_query(anchor_text, resolved, query_keywords, scope_key, strict_level=strict_level):
            # En modo normal NO dejamos pasar enlaces irrelevantes.
            # El unico modo permisivo se gestiona en _append_link_permissive
            # cuando la captacion estricta da cero resultados.
            return False
        if resolved in links:
            return False
        links.append(resolved)
        return True

    def _append_link_permissive(anchor_text, href):
        if len(links) >= max_links_per_query:
            return False
        resolved = _resolve_search_result_href(href)
        if not str(resolved or "").startswith("http"):
            return False
        host = _root_domain(resolved)
        if not host or host in blocked_hosts:
            return False
        if _is_noisy_host(host):
            return False
        if _is_generic_big_site_url(resolved):
            return False
        if not _is_scope_aligned_url(resolved, scope_key):
            return False
        if _is_low_quality_source_url(resolved):
            return False
        if resolved in links:
            return False
        links.append(resolved)
        return True

    provider_order = _resolve_search_provider_order()
    if providers_limit is not None:
        try:
            lim = max(1, int(providers_limit))
            provider_order = provider_order[:lim]
        except Exception:
            pass
    if str(os.getenv("SEARCH_ENGINE_MODE", "bing")).strip().lower() in {"all", "multi"}:
        for provider in ("duckduckgo_html", "brave_html"):
            if provider not in provider_order:
                provider_order.append(provider)

    def _mark_provider(provider_name, added_count):
        if added_count <= 0:
            return
        if provider_name not in providers_used:
            providers_used.append(provider_name)
        providers_stats[provider_name] = providers_stats.get(provider_name, 0) + int(added_count)

    for provider in provider_order:
        if len(links) >= max_links_per_query:
            break
        if (time.time() - started_at) > query_budget_sec:
            break
        added = 0
        if provider == "searxng":
            added = _search_links_via_searxng(query, timeout, headers, _append_link)
            _mark_provider(provider, added)
            continue
        if provider == "bing_rss":
            rss_url = f"https://www.bing.com/search?q={quote_plus(query)}&format=rss&count=20"
            try:
                resp = requests.get(rss_url, timeout=timeout, headers=headers)
                if 200 <= int(resp.status_code or 0) < 300:
                    root = ET.fromstring(resp.text or "")
                    for item in root.findall(".//item"):
                        if len(links) >= max_links_per_query:
                            break
                        title = _sanitize_text(item.findtext("title") or "", 240)
                        href = _sanitize_text(item.findtext("link") or "", 1200)
                        if _append_link(title, href, strict_level=1):
                            added += 1
            except Exception:
                added = 0
            _mark_provider(provider, added)
            continue
        if provider in {"bing_html", "duckduckgo_html", "brave_html"}:
            url = {
                "bing_html": f"https://www.bing.com/search?q={quote_plus(query)}&count=20",
                "duckduckgo_html": f"https://duckduckgo.com/html/?q={quote_plus(query)}",
                "brave_html": f"https://search.brave.com/search?q={quote_plus(query)}&source=web",
            }[provider]
            try:
                resp = None
                for attempt in range(attempts):
                    try:
                        resp = requests.get(url, timeout=timeout, headers=headers)
                    except Exception:
                        resp = None
                    if resp is not None and 200 <= int(resp.status_code or 0) < 300:
                        break
                    if attempt < (attempts - 1):
                        time.sleep(0.2 + random.random() * 0.2)
                if resp is not None and 200 <= int(resp.status_code or 0) < 300:
                    soup = BeautifulSoup(resp.text, "lxml")
                    for anchor in soup.select("li.b_algo h2 a[href], a.result__a[href], h2 a[href], a[href]"):
                        if len(links) >= max_links_per_query:
                            break
                        href = str(anchor.get("href") or "").strip()
                        if not href:
                            continue
                        if href.startswith("/"):
                            href = urljoin(url, href)
                        if not href.startswith("http"):
                            continue
                        anchor_text = _sanitize_text(anchor.get_text(" ", strip=True), 240)
                        strict_level = 1 if anchor.parent and anchor.parent.name == "h2" else 2
                        if _append_link(anchor_text, href, strict_level=strict_level):
                            added += 1
            except Exception:
                added = 0
            _mark_provider(provider, added)
            continue

    out = []
    seen = set()
    for link in links:
        if link in seen:
            continue
        seen.add(link)
        out.append(link)

    # Fallback anti-bloqueo: si el filtro estricto dejo la consulta en 0 enlaces,
    # hacemos una segunda pasada permisiva para no cortar todo el pipeline.
    permissive_added = 0
    if not out:
        rss_url = f"https://www.bing.com/search?q={quote_plus(query)}&format=rss&count=20"
        try:
            resp = requests.get(rss_url, timeout=timeout, headers=headers)
            if 200 <= int(resp.status_code or 0) < 300:
                root = ET.fromstring(resp.text or "")
                for item in root.findall(".//item"):
                    if len(links) >= max_links_per_query:
                        break
                    title = _sanitize_text(item.findtext("title") or "", 240)
                    href = _sanitize_text(item.findtext("link") or "", 1200)
                    if _append_link_permissive(title, href):
                        permissive_added += 1
        except Exception:
            permissive_added = 0

        if permissive_added > 0:
            out = []
            seen = set()
            for link in links:
                if link in seen:
                    continue
                seen.add(link)
                out.append(link)

    if isinstance(telemetry, dict):
        telemetry["providers_used"] = list(providers_used)
        telemetry["providers_stats"] = dict(providers_stats)
        telemetry["links_raw"] = len(links)
        telemetry["query_budget_sec"] = query_budget_sec
        telemetry["permissive_fallback_added"] = permissive_added
    return out[:max_links_per_query]


def _ensure_driver():
    global _driver
    with _driver_lock:
        if _driver is not None:
            return _driver

        options = Options()
        options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        options.add_argument("--disable-logging")
        options.add_argument("--log-level=3")
        options.add_argument("--silent")
        options.add_argument("--window-size=1365,1024")
        options.add_argument("--blink-settings=imagesEnabled=false")
        options.add_argument(f"--user-agent={SEARCH_USER_AGENT}")
        options.add_experimental_option("excludeSwitches", ["enable-logging", "enable-automation"])
        options.add_experimental_option("useAutomationExtension", False)

        chrome_bin = str(os.getenv("CHROME_BIN", "")).strip()
        if chrome_bin:
            options.binary_location = chrome_bin

        chromedriver_path = str(os.getenv("CHROMEDRIVER_PATH", "")).strip()
        service_kwargs = {"creationflags": CREATE_NO_WINDOW} if CREATE_NO_WINDOW else {}
        if chromedriver_path:
            service = Service(executable_path=chromedriver_path, **service_kwargs)
            _driver = webdriver.Chrome(service=service, options=options)
        else:
            service = Service(**service_kwargs)
            _driver = webdriver.Chrome(service=service, options=options)

        _driver.set_page_load_timeout(max(6, _env_int("SELENIUM_PAGELOAD_TIMEOUT", 12)))
        return _driver


def _reset_driver():
    global _driver
    with _driver_lock:
        if _driver is None:
            return
        try:
            _driver.quit()
        except Exception:
            pass
        _driver = None


def _fetch_page_html(url, timeout_sec=None):
    try:
        driver = _ensure_driver()
        wait_ms = max(120, _env_int("SELENIUM_WAIT_AFTER_LOAD_MS", 700))
        page_timeout = max(4, int(timeout_sec or _env_int("SELENIUM_PAGELOAD_TIMEOUT", 12)))
        with _driver_lock:
            try:
                driver.set_page_load_timeout(page_timeout)
            except Exception:
                pass
            driver.get(url)
            time.sleep(wait_ms / 1000.0)
            html = driver.page_source or ""
            title = _sanitize_text(driver.title or "", 220)
        return {"url": url, "html": html, "title": title}
    except (WebDriverException, TimeoutException):
        _reset_driver()
        return None
    except Exception:
        _reset_driver()
        return None


def _fetch_page_http(url, timeout_override=None):
    timeout = max(3, int(timeout_override or _env_int("PAGE_HTTP_TIMEOUT", 8)))
    headers = {
        "User-Agent": SEARCH_USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    }
    try:
        resp = requests.get(url, timeout=timeout, headers=headers, allow_redirects=True)
        if resp.status_code < 200 or resp.status_code >= 300:
            return None
        content_type = str(resp.headers.get("Content-Type", "")).lower()
        html = str(resp.text or "")
        if "html" not in content_type and not html.lstrip().startswith("<"):
            return None
        if len(html.strip()) < 80:
            return None
        soup = BeautifulSoup(html, "lxml")
        title = _sanitize_text(soup.title.text if soup.title and soup.title.text else "", 220)
        final_url = _cleanup_url(resp.url or url) or _cleanup_url(url)
        return {"url": final_url, "html": html, "title": title, "method": "http"}
    except Exception:
        return None


def _fetch_page_data(url, deadline_ts=None, allow_selenium=True):
    clean_url = _cleanup_url(url)
    if not clean_url:
        return None
    now = time.time()
    if deadline_ts and now >= deadline_ts:
        return None
    remaining = max(0.0, (deadline_ts - now)) if deadline_ts else 0.0
    http_timeout = None
    if remaining:
        http_timeout = max(3, min(_env_int("PAGE_HTTP_TIMEOUT", 8), int(max(3.0, remaining - 0.8))))

    page = _fetch_page_http(clean_url, timeout_override=http_timeout)
    if page:
        return page

    allow_selenium_fallback = str(os.getenv("ALLOW_SELENIUM_FALLBACK", "1")).strip().lower() not in {"0", "false", "no", "off"}
    if not allow_selenium_fallback or not allow_selenium:
        return None
    min_left = max(6, _env_int("MIN_SECONDS_LEFT_FOR_SELENIUM", 7))
    if remaining and remaining < min_left:
        return None
    selenium_timeout = None
    if remaining:
        selenium_timeout = max(5, min(_env_int("SELENIUM_PAGELOAD_TIMEOUT", 12), int(max(5.0, remaining - 1.0))))
    page = _fetch_page_html(clean_url, timeout_sec=selenium_timeout)
    if not page:
        return None
    page["url"] = _cleanup_url(page.get("url") or clean_url) or clean_url
    page["method"] = "selenium"
    return page


def _extract_internal_candidate_links(source_url, page_html):
    base = _cleanup_url(source_url)
    host = _root_domain(base)
    if not base or not host or not page_html:
        return []
    soup = BeautifulSoup(page_html, "lxml")
    out = []
    seen = set()
    scored = []
    max_links = max(0, _env_int("MAX_INTERNAL_LINKS_PER_SOURCE", 6))
    if max_links <= 0:
        return out

    for anchor in soup.select("a[href]"):
        href = str(anchor.get("href") or "").strip()
        if not href or href.startswith(("mailto:", "tel:", "javascript:", "#")):
            continue
        merged_text = f"{href} {_sanitize_text(anchor.get_text(' ', strip=True), 160)}".lower()
        if not any(hint in merged_text for hint in INTERNAL_LINK_HINTS):
            continue
        absolute = _cleanup_url(urljoin(base, href))
        if not absolute:
            continue
        link_host = _root_domain(absolute)
        if not link_host or link_host != host:
            continue
        if re.search(r"\.(png|jpg|jpeg|webp|gif|svg|pdf|zip|rar|mp4|mp3|css|js)(\?|$)", absolute, re.IGNORECASE):
            continue
        if absolute in seen or absolute == base:
            continue
        seen.add(absolute)
        score = 0
        path_hint = f"{absolute} {merged_text}"
        if re.search(r"/(contact|contacto|contacta)(/|$)", path_hint):
            score += 120
        if re.search(r"/(equipo|team|staff|author|autor|colaborador|redaccion|editorial|masthead)(/|$)", path_hint):
            score += 100
        if re.search(r"/(prensa|press|media)(/|$)", path_hint):
            score += 95
        if re.search(r"/(booking|management|bio|biografia)(/|$)", path_hint):
            score += 80
        if re.search(r"/(about|sobre|quienes-somos|who-we-are|nosotros)(/|$)", path_hint):
            score += 70
        if any(h in merged_text for h in ("email", "correo", "mail", "contact")):
            score += 20
        scored.append((score, absolute))

    if not scored:
        return out
    scored.sort(key=lambda item: (-int(item[0]), len(str(item[1] or ""))))
    for _, candidate in scored:
        if candidate in out:
            continue
        out.append(candidate)
        if len(out) >= max_links:
            break
    return out


def _extract_social_external_candidate_links(source_url, page_html):
    base = _cleanup_url(source_url)
    host = _root_domain(base)
    if not base or not host or not page_html:
        return []
    if not _is_social_candidate_url(base):
        return []

    max_links = max(0, _env_int("MAX_SOCIAL_EXTERNAL_LINKS_PER_SOURCE", 3))
    if max_links <= 0:
        return []

    soup = BeautifulSoup(page_html, "lxml")
    scored = []
    seen = set()
    blocked_hosts = {
        "linkedin.com",
        "instagram.com",
        "facebook.com",
        "tiktok.com",
        "x.com",
        "twitter.com",
        "youtube.com",
    }

    for anchor in soup.select("a[href]"):
        href = str(anchor.get("href") or "").strip()
        if not href or href.startswith(("mailto:", "tel:", "javascript:", "#")):
            continue
        absolute = _resolve_search_result_href(urljoin(base, href) if href.startswith("/") else href)
        absolute = _cleanup_url(absolute)
        if not absolute:
            continue
        ext_host = _root_domain(absolute)
        if not ext_host or ext_host == host:
            continue
        if any(ext_host.endswith(bh) for bh in blocked_hosts):
            continue
        if _is_noisy_host(ext_host):
            continue
        if re.search(r"\.(png|jpg|jpeg|webp|gif|svg|pdf|zip|rar|mp4|mp3|css|js)(\?|$)", absolute, re.IGNORECASE):
            continue
        if absolute in seen:
            continue
        seen.add(absolute)

        merged_text = _normalize_ascii(
            f"{href} {_sanitize_text(anchor.get_text(' ', strip=True), 180)}"
        )
        score = 0
        if any(k in merged_text for k in ("web", "website", "sitio", "site", "oficial", "official", "bio", "link")):
            score += 90
        if any(k in merged_text for k in ("contacto", "contact", "email", "correo", "prensa", "press", "booking", "management")):
            score += 70
        if _is_scope_aligned_url(absolute, "NACIONAL_ES"):
            score += 15
        if ext_host.endswith(".es"):
            score += 12
        scored.append((score, absolute))

    if not scored:
        return []
    scored.sort(key=lambda item: (-int(item[0]), len(str(item[1] or ""))))
    out = []
    for _, candidate in scored:
        if candidate in out:
            continue
        out.append(candidate)
        if len(out) >= max_links:
            break
    return out


def _build_contacts_from_page(payload, source_url, page_html, page_title, query_keywords, diagnostics=None):
    strict_raw = payload.get("strict")
    if isinstance(strict_raw, dict):
        strict = strict_raw
    elif isinstance(strict_raw, bool):
        strict = {"requireEmail": strict_raw}
    else:
        strict = {}

    options_raw = payload.get("options")
    options = options_raw if isinstance(options_raw, dict) else {}

    require_email = bool(payload.get("strictRequireEmail", strict.get("requireEmail", True)))
    require_phone = bool(payload.get("strictRequirePhone", strict.get("requirePhone", False)))
    require_name = bool(payload.get("strictRequireName", strict.get("requireName", False)))
    require_company = bool(payload.get("strictRequireCompany", strict.get("requireCompany", False)))
    allow_phone = bool(payload.get("allowPhoneCollection", options.get("allowPhoneCollection", False)))
    disallow_generic = bool(payload.get("disallowGenericMailboxEmails", options.get("disallowGenericMailboxEmails", True)))
    disallow_role = bool(payload.get("disallowRoleMailboxEmails", options.get("disallowRoleMailboxEmails", False)))
    strict_non_generic_contacts = str(os.getenv("STRICT_NON_GENERIC_CONTACTS", "1")).strip().lower() not in {"0", "false", "no", "off"}
    meta = payload.get("metadata") or {}
    columns = meta.get("columns") if isinstance(meta, dict) else []
    require_full_name = False
    if require_name:
        force_full_name = str(os.getenv("FORCE_FULL_NAME_WHEN_REQUIRE_NAME", "0")).strip().lower() not in {"0", "false", "no", "off"}
        has_nombre_completo = False
        if isinstance(columns, list):
            for col in columns:
                header = ""
                if isinstance(col, dict):
                    header = str(col.get("header") or "")
                if "nombre completo" in _normalize_ascii(header):
                    has_nombre_completo = True
                    break
        require_full_name = force_full_name and has_nombre_completo

    if isinstance(diagnostics, dict):
        diagnostics["pages_scanned"] = diagnostics.get("pages_scanned", 0) + 1
        diagnostics.setdefault("pages_irrelevant", 0)
        diagnostics.setdefault("pages_scope_mismatch", 0)
        diagnostics.setdefault("emails_candidates", 0)
        diagnostics.setdefault("rows_dropped_require_name", 0)
        diagnostics.setdefault("rows_dropped_name_email_mismatch", 0)
        diagnostics.setdefault("rows_dropped_require_company", 0)

    scope_value = str(payload.get("scope", "")).strip().upper()
    if isinstance(diagnostics, dict) and scope_value in {"MUNI_MADRID", "PROV_COM_MADRID", "NACIONAL_ES"}:
        if not _is_scope_aligned_url(source_url, scope_value):
            diagnostics["scope_mismatch"] = diagnostics.get("scope_mismatch", 0) + 1
            diagnostics["pages_scope_mismatch"] = diagnostics.get("pages_scope_mismatch", 0) + 1

    if _is_low_quality_source_url(source_url):
        if isinstance(diagnostics, dict):
            diagnostics["skip_low_quality_url"] = diagnostics.get("skip_low_quality_url", 0) + 1
        return []

    soup = BeautifulSoup(page_html or "", "lxml")
    text = _sanitize_text(soup.get_text(" ", strip=True), 45000)
    is_low_signal = _is_low_signal_page(source_url, page_title, text)
    if is_low_signal and isinstance(diagnostics, dict):
        diagnostics["skip_low_signal_page"] = diagnostics.get("skip_low_signal_page", 0) + 1
    is_relevant = _passes_query_relevance(payload, source_url, page_title, text, query_keywords)
    if (not is_relevant) and isinstance(diagnostics, dict):
        diagnostics["skip_irrelevant_page"] = diagnostics.get("skip_irrelevant_page", 0) + 1
        diagnostics["pages_irrelevant"] = diagnostics.get("pages_irrelevant", 0) + 1
    description = _extract_meta_description(soup) or _extract_fallback_description(soup, text)
    if _is_low_value_description(description):
        description = ""
    company = _extract_company_name(soup, source_url)
    if _is_generic_company_label(company):
        company = _root_domain(source_url)
    emails = _extract_emails(text, include_generic=not disallow_generic)
    emails_from_links = _extract_emails_from_soup(soup, include_generic=not disallow_generic)
    if emails_from_links:
        merged = set(emails or [])
        for em in emails_from_links:
            merged.add(em)
        emails = sorted(merged)
    if isinstance(diagnostics, dict):
        diagnostics["emails_seen"] = diagnostics.get("emails_seen", 0) + len(emails)
        diagnostics["emails_candidates"] = diagnostics.get("emails_candidates", 0) + len(emails)
        if not emails:
            diagnostics["pages_without_email"] = diagnostics.get("pages_without_email", 0) + 1
    phones = _extract_phones(text) if allow_phone else []
    cargo_guess, funcion_guess = _guess_role_and_function(page_title, description, text)
    has_specific_context = _has_specific_contact_context(source_url, page_title, text)
    weak_context = strict_non_generic_contacts and not has_specific_context
    exclude_emails_set = payload.get("_exclude_emails_set")
    if not isinstance(exclude_emails_set, set):
        exclude_emails_set = set()
    exclude_email_domains_set = payload.get("_exclude_email_domains_set")
    if not isinstance(exclude_email_domains_set, set):
        exclude_email_domains_set = set()
    exclude_root_domains_set = payload.get("_exclude_root_domains_set")
    if not isinstance(exclude_root_domains_set, set):
        exclude_root_domains_set = set()
    allow_single_name_from_email = str(os.getenv("ALLOW_SINGLE_NAME_FROM_EMAIL_FALLBACK", "1")).strip().lower() not in {"0", "false", "no", "off"}
    source_root_domain = _root_domain(source_url)

    contacts = []
    if emails:
        for email in emails:
            email = str(email or "").strip().lower()
            if not email:
                continue
            if email in exclude_emails_set:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_seen_email"] = diagnostics.get("skip_seen_email", 0) + 1
                continue
            email_domain = email.split("@", 1)[1].strip().lower() if "@" in email else ""
            if email_domain and email_domain in exclude_email_domains_set:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_seen_email_domain"] = diagnostics.get("skip_seen_email_domain", 0) + 1
                continue
            email_root_domain = _normalize_root_domain_value(email_domain)
            if email_root_domain and email_root_domain in exclude_root_domains_set:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_excluded_domain_contact"] = diagnostics.get("skip_excluded_domain_contact", 0) + 1
                continue
            if source_root_domain and source_root_domain in exclude_root_domains_set:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_excluded_domain_contact"] = diagnostics.get("skip_excluded_domain_contact", 0) + 1
                continue
            if disallow_role and _is_role_like_mailbox(email):
                if isinstance(diagnostics, dict):
                    diagnostics["skip_role_mailbox"] = diagnostics.get("skip_role_mailbox", 0) + 1
                    samples = diagnostics.get("sample_role_mailbox", [])
                    if len(samples) < 5:
                        samples.append(email)
                        diagnostics["sample_role_mailbox"] = samples
                continue
            name_source = ""
            name = _name_from_email(email)
            if name:
                name_source = "email_split"
            if not name:
                name = _extract_name_near_email(text, email)
                if name:
                    name_source = "near_email"
            if not name:
                name = _name_from_email_relaxed(email)
                if name:
                    name_source = "email_relaxed"
            if name and not _looks_like_person_name(name):
                if not _name_from_email_relaxed(email):
                    name = ""
                    name_source = ""
            if name and _looks_like_org_or_generic_name(name, company, page_title, source_url):
                name = ""
                name_source = ""
            if name and not _name_matches_email_local(name, email):
                if isinstance(diagnostics, dict):
                    diagnostics["skip_name_email_mismatch"] = diagnostics.get("skip_name_email_mismatch", 0) + 1
                    diagnostics["rows_dropped_name_email_mismatch"] = diagnostics.get("rows_dropped_name_email_mismatch", 0) + 1
                name = ""
                name_source = ""

            # Si el nombre viene "flojo" (una sola palabra) y no fue hallado
            # en contexto real de la web, lo descartamos para evitar basura.
            if name and name_source not in {"email_split", "email_relaxed"}:
                parts = [p for p in re.split(r"\s+", name) if p]
                if len(parts) == 1:
                    token = _normalize_ascii(parts[0])
                    domain_root = _normalize_ascii((_root_domain(source_url) or "").split(".", 1)[0])
                    company_norm = _normalize_ascii(company)
                    company_words = {w for w in re.split(r"\s+", company_norm) if len(w) >= 3}
                    if (
                        len(token) < 4
                        or token in GENERIC_NAME_TOKENS
                        or token in GENERIC_ROLE_PREFIXES
                        or (domain_root and token == domain_root)
                        or token in company_words
                        or token.startswith("http")
                    ):
                        name = ""
                        name_source = ""
            if require_name and not name:
                # No descartamos aun: dejamos que la verificacion final en GAS
                # intente reconstruir nombre real desde pagina y evidencias.
                if isinstance(diagnostics, dict):
                    diagnostics["skip_require_name"] = diagnostics.get("skip_require_name", 0) + 1
                    diagnostics["rows_dropped_require_name"] = diagnostics.get("rows_dropped_require_name", 0) + 1
                    samples = diagnostics.get("sample_require_name_rejects", [])
                    if len(samples) < 5:
                        samples.append(email)
                        diagnostics["sample_require_name_rejects"] = samples
            single_name_from_email = allow_single_name_from_email and name_source in {"email_split", "email_relaxed"}
            if require_full_name and name and _name_token_count(name) < 2 and not single_name_from_email:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_require_full_name"] = diagnostics.get("skip_require_full_name", 0) + 1
                    diagnostics["rows_dropped_name_email_mismatch"] = diagnostics.get("rows_dropped_name_email_mismatch", 0) + 1
                continue
            if weak_context and name and _name_token_count(name) < 2 and not single_name_from_email:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_generic_context"] = diagnostics.get("skip_generic_context", 0) + 1
                    diagnostics["rows_dropped_name_email_mismatch"] = diagnostics.get("rows_dropped_name_email_mismatch", 0) + 1
                continue
            if require_company and not company:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_require_company"] = diagnostics.get("skip_require_company", 0) + 1
                    diagnostics["rows_dropped_require_company"] = diagnostics.get("rows_dropped_require_company", 0) + 1
                continue
            if require_phone and not phones:
                if isinstance(diagnostics, dict):
                    diagnostics["skip_require_phone"] = diagnostics.get("skip_require_phone", 0) + 1
                continue
            contacts.append(
                {
                    "empresa": company,
                    "nombre_contacto": name,
                    "descripcion_medio_empresa": description,
                    "cargo": cargo_guess,
                    "funcion_cargo": funcion_guess,
                    "email": email,
                    "telefono": phones[0] if phones else "",
                    "web": _root_web(source_url),
                    "dominio_web_generico": _root_domain(source_url),
                    "source_url": source_url,
                    "source_title": page_title,
                    "source_snippet": description,
                    "fuente": "selenium_remote",
                    "notas": "extraido_via_selenium",
                }
            )
            if isinstance(diagnostics, dict):
                diagnostics["emails_kept"] = diagnostics.get("emails_kept", 0) + 1
    elif not require_email:
        if require_company and not company:
            return []
        if require_name:
            return []
        contacts.append(
            {
                "empresa": company,
                "nombre_contacto": "",
                "descripcion_medio_empresa": description,
                "cargo": cargo_guess,
                "funcion_cargo": funcion_guess,
                "email": "",
                "telefono": phones[0] if phones else "",
                "web": _root_web(source_url),
                "dominio_web_generico": _root_domain(source_url),
                "source_url": source_url,
                "source_title": page_title,
                "source_snippet": description,
                "fuente": "selenium_remote",
                "notas": "sin_email_en_pagina",
            }
        )
        if isinstance(diagnostics, dict):
            diagnostics["contacts_without_email"] = diagnostics.get("contacts_without_email", 0) + 1
    if isinstance(diagnostics, dict):
        diagnostics["contacts_built"] = diagnostics.get("contacts_built", 0) + len(contacts)
    return contacts


def _dedupe_contacts(items):
    out = []
    seen = set()
    seen_email = set()
    per_domain = {}
    max_per_domain = max(1, _env_int("MAX_CONTACTS_PER_DOMAIN", 3))
    for item in items:
        email = str(item.get("email", "")).strip().lower()
        source_url = str(item.get("source_url", "")).strip().lower()
        company = str(item.get("empresa", "")).strip().lower()
        domain = _root_domain(source_url)
        if email:
            if email in seen_email:
                continue
            seen_email.add(email)
            key = f"email:{email}"
        else:
            key = "|".join(["", source_url, company])
        if key in seen:
            continue
        if domain:
            current = int(per_domain.get(domain) or 0)
            if current >= max_per_domain:
                continue
            per_domain[domain] = current + 1
        seen.add(key)
        out.append(item)
    return out


def _build_exclusion_sets_from_metadata(meta_in, stale_rounds):
    exclude_emails = set()
    exclude_email_domains = set()
    exclude_root_domains = set()
    if not isinstance(meta_in, dict):
        return exclude_emails, exclude_email_domains, exclude_root_domains

    raw_emails = meta_in.get("excludeEmails")
    if isinstance(raw_emails, list):
        for item in raw_emails:
            email = str(item or "").strip().lower()
            if email and "@" in email:
                exclude_emails.add(email)

    # En modo volumen necesitamos cortar bucles de dominio antes.
    # Se puede desactivar con EXCLUDE_EMAIL_DOMAINS_ON_STALE=0.
    exclude_domains_on_stale = str(os.getenv("EXCLUDE_EMAIL_DOMAINS_ON_STALE", "1")).strip().lower() in {"1", "true", "yes", "on"}
    if exclude_domains_on_stale and stale_rounds >= 1:
        raw_domains = meta_in.get("excludeEmailDomains")
        if isinstance(raw_domains, list):
            for item in raw_domains:
                domain = str(item or "").strip().lower()
                if domain and "." in domain:
                    exclude_email_domains.add(domain)
                    root = _normalize_root_domain_value(domain)
                    if root:
                        exclude_root_domains.add(root)

    for key in ("excludeDomains", "excludeRootDomains", "forceExcludeDomains", "blockedDomains", "excludedDomains"):
        raw_domains = meta_in.get(key)
        if not isinstance(raw_domains, list):
            continue
        for item in raw_domains:
            root = _normalize_root_domain_value(item)
            if root:
                exclude_root_domains.add(root)

    return exclude_emails, exclude_email_domains, exclude_root_domains


def _check_auth():
    required_token = str(os.getenv("API_TOKEN", "")).strip()
    if not required_token:
        return None
    auth = str(request.headers.get("Authorization", "")).strip()
    if not auth.lower().startswith("bearer "):
        return jsonify({"ok": False, "error": "Missing Bearer token"}), 401
    token = auth.split(" ", 1)[1].strip()
    if token != required_token:
        return jsonify({"ok": False, "error": "Invalid token"}), 401
    return None


@app.get("/health")
def health():
    auth_error = _check_auth()
    if auth_error:
        return auth_error
    return jsonify(
        {
            "ok": True,
            "service": APP_TITLE,
            "version": APP_VERSION,
            "time": int(time.time()),
        }
    )


@app.post("/api/search")
def api_search():
    auth_error = _check_auth()
    if auth_error:
        return auth_error

    payload = request.get_json(silent=True) or {}
    query = _sanitize_text(payload.get("query", ""), 3000)
    if len(query) < 2:
        return jsonify({"ok": False, "error": "query is required"}), 400

    target_count = int(payload.get("targetCount") or 25)
    target_limit = max(1, min(target_count, 10000))
    configured_max_source_links = max(10, _env_int("MAX_SOURCE_LINKS", 60))
    dynamic_max_links = max(20, min(180, target_limit * 4))
    max_source_links = min(configured_max_source_links, dynamic_max_links)
    max_search_seconds = max(18, _env_int("MAX_SEARCH_SECONDS", 45))
    max_pages_per_host = max(1, _env_int("MAX_PAGES_PER_HOST", 6))
    started_at = time.time()
    deadline_at = started_at + max_search_seconds
    fetch_phase_min_seconds = max(10, _env_int("FETCH_PHASE_MIN_SECONDS", 14))
    search_phase_deadline = max(started_at + 3, deadline_at - fetch_phase_min_seconds)
    selenium_fallback_max = max(0, _env_int("SELENIUM_FALLBACK_MAX_PER_REQUEST", 2))
    selenium_fallback_max_social = max(selenium_fallback_max, _env_int("SELENIUM_FALLBACK_MAX_SOCIAL_PER_REQUEST", 4))

    meta_in = payload.get("metadata") or {}
    query_variant = _sanitize_text(meta_in.get("queryVariant") or "", 1500)
    effective_query = query_variant or query
    stale_rounds = max(0, int(meta_in.get("staleRounds") or 0))
    step_index = max(0, int(meta_in.get("step") or 0))
    exclude_emails_set, exclude_email_domains_set, exclude_root_domains_set = _build_exclusion_sets_from_metadata(meta_in, stale_rounds)
    payload["_exclude_emails_set"] = exclude_emails_set
    payload["_exclude_email_domains_set"] = exclude_email_domains_set
    payload["_exclude_root_domains_set"] = exclude_root_domains_set

    query_keywords = _extract_query_keywords(effective_query, max_terms=12)
    payload_for_queries = dict(payload)
    payload_for_queries["query"] = effective_query
    queries = _build_search_queries(payload_for_queries)
    scope_value = str(payload.get("scope", "")).strip().upper()
    scope_hint = {
        "MUNI_MADRID": "Madrid ciudad",
        "PROV_COM_MADRID": "Comunidad de Madrid",
        "NACIONAL_ES": "España",
        "EUROPEO": "Europa",
        "INTERNACIONAL": "Internacional",
    }.get(scope_value, "España")
    source_links = []
    query_provider_telemetry = []
    diagnostics = {}
    # Semillas curadas por vertical (musica/indie/rock) para mejorar precision.
    curated_seed_urls = _get_curated_seed_urls(query_keywords, scope_value)
    prefer_curated_first = str(os.getenv("CURATED_ONLY_FIRST_PASS", "0")).strip().lower() not in {"0", "false", "no", "off"}
    disable_curated_after_stale = max(0, _env_int("CURATED_DISABLE_AFTER_STALE_ROUNDS", 1))
    if stale_rounds >= disable_curated_after_stale:
        prefer_curated_first = False
    min_sources_before_external = max(5, _env_int("CURATED_MIN_SOURCES_BEFORE_EXTERNAL", 12))
    skip_external_search = prefer_curated_first and len(curated_seed_urls) >= min_sources_before_external
    if curated_seed_urls and step_index > 0:
        shift = step_index % len(curated_seed_urls)
        curated_seed_urls = curated_seed_urls[shift:] + curated_seed_urls[:shift]

    # Evita estancamiento: en rondas sin resultados mantenemos tambien busqueda externa.
    # Si cerramos esta via, el sistema puede quedarse iterando siempre las mismas semillas.
    if stale_rounds >= 1:
        skip_external_search = False

    if not skip_external_search:
        external_links_added_total = 0
        external_empty_rounds = 0
        max_external_queries = len(queries)
        if curated_seed_urls:
            # En estancamiento abrimos mas consultas externas para evitar
            # repetir siempre las mismas semillas curadas.
            # Manteniendo margen de tiempo para la fase de fetch.
            if stale_rounds <= 0:
                curated_query_cap = 2
            elif stale_rounds == 1:
                curated_query_cap = 3
            else:
                curated_query_cap = 4
            max_external_queries = min(max_external_queries, curated_query_cap)
        query_index = 0
        for query_item in queries:
            if query_index >= max_external_queries:
                break
            query_index += 1
            if time.time() >= search_phase_deadline:
                break
            telemetry = {}
            per_query_keywords = _extract_query_keywords(query_item, max_terms=8) or list(query_keywords or [])[:8]
            remaining_search_sec = max(1, int(search_phase_deadline - time.time()))
            if stale_rounds >= 1:
                dynamic_query_budget = max(3, min(6, remaining_search_sec))
                dynamic_timeout = max(2, min(4, dynamic_query_budget))
                dynamic_max_links = 20
                dynamic_providers = 4
            else:
                dynamic_query_budget = max(3, min(5, remaining_search_sec))
                dynamic_timeout = max(2, min(4, dynamic_query_budget))
                dynamic_max_links = 18
                dynamic_providers = 4
            links_before = len(source_links)
            links = _search_links_for_query(
                query_item,
                per_query_keywords,
                scope_value,
                telemetry=telemetry,
                query_budget_override_sec=dynamic_query_budget,
                timeout_override_sec=dynamic_timeout,
                max_links_override=dynamic_max_links,
                providers_limit=dynamic_providers,
            )
            query_provider_telemetry.append(
                {
                    "query": _sanitize_text(query_item, 180),
                    "providers_used": list(telemetry.get("providers_used") or []),
                    "providers_stats": dict(telemetry.get("providers_stats") or {}),
                    "links_raw": int(telemetry.get("links_raw") or 0),
                }
            )
            for link in links:
                clean_link = _cleanup_url(link)
                if not clean_link:
                    continue
                link_host = _root_domain(clean_link)
                if link_host and link_host in exclude_root_domains_set:
                    diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
                    continue
                if clean_link not in source_links:
                    source_links.append(clean_link)
                if len(source_links) >= max_source_links:
                    break
            links_added_now = max(0, len(source_links) - links_before)
            if links_added_now > 0:
                external_links_added_total += links_added_now
                external_empty_rounds = 0
            else:
                external_empty_rounds += 1
            if len(source_links) >= max_source_links:
                break
            empty_round_limit = 1 if stale_rounds <= 0 else 2
            if curated_seed_urls and external_links_added_total == 0 and external_empty_rounds >= empty_round_limit:
                # Si las SERP no aportan y ya tenemos semillas curadas,
                # pasamos pronto a fase de fetch para no consumir toda la ventana.
                break
    else:
        query_provider_telemetry.append(
            {
                "query": _sanitize_text(query, 180),
                "providers_used": ["curated_first"],
                "providers_stats": {"curated_first": int(len(curated_seed_urls))},
                "links_raw": 0,
            }
        )

    if curated_seed_urls:
        added = 0
        for seed_url in curated_seed_urls:
            if time.time() >= search_phase_deadline:
                break
            if len(source_links) >= max_source_links:
                break
            clean_seed = _cleanup_url(seed_url)
            if not clean_seed:
                continue
            seed_host = _root_domain(clean_seed)
            if seed_host and seed_host in exclude_root_domains_set:
                diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
                continue
            if clean_seed not in source_links:
                source_links.append(clean_seed)
                added += 1
        query_provider_telemetry.append(
            {
                "query": _sanitize_text(query, 180),
                "providers_used": ["curated_music_seed"],
                "providers_stats": {"curated_music_seed": int(added)},
                "links_raw": int(added),
            }
        )

    # Semillas via IA local (Ollama): añade webs oficiales candidatas sin coste API externo.
    seed_query = _sanitize_text(meta_in.get("queryVariant") or meta_in.get("originalQuery") or query, 1400)
    model_profile = str(meta_in.get("localModelProfile") or "pro").strip().lower()
    ollama_seed_urls, ollama_model_used = _get_ollama_seed_urls(
        seed_query,
        scope_hint,
        max_urls=min(35, max_source_links),
        model_profile=model_profile,
    )
    if ollama_seed_urls:
        added = 0
        for seed_url in ollama_seed_urls:
            if time.time() >= search_phase_deadline:
                break
            clean = _cleanup_url(seed_url)
            if not clean:
                continue
            if not _is_scope_aligned_url(clean, scope_value):
                continue
            if _is_noisy_host(_root_domain(clean)):
                continue
            if _is_generic_big_site_url(clean):
                continue
            if _root_domain(clean) in exclude_root_domains_set:
                diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
                continue
            if clean not in source_links:
                source_links.append(clean)
                added += 1
            if len(source_links) >= max_source_links:
                break
        query_provider_telemetry.append(
            {
                "query": _sanitize_text(seed_query, 180),
                "providers_used": ["ollama_local_seed"],
                "providers_stats": {"ollama_local_seed": int(added)},
                "links_raw": int(added),
            }
        )

    min_source_links_floor = max(8, _env_int("MIN_SOURCE_LINKS_FOR_EXTRA_FALLBACK", 14))
    if not source_links or (len(source_links) < min_source_links_floor and stale_rounds >= 1):
        relaxed_keywords = (query_keywords or [])[:3]
        for query_item in _build_fallback_seed_queries(payload, query_keywords):
            if time.time() >= search_phase_deadline:
                break
            telemetry = {}
            per_query_keywords = _extract_query_keywords(query_item, max_terms=6) or list(relaxed_keywords or [])
            remaining_search_sec = max(1, int(search_phase_deadline - time.time()))
            dynamic_query_budget = max(5, min(12, remaining_search_sec))
            dynamic_timeout = max(3, min(7, dynamic_query_budget))
            links = _search_links_for_query(
                query_item,
                per_query_keywords,
                scope_value,
                telemetry=telemetry,
                query_budget_override_sec=dynamic_query_budget,
                timeout_override_sec=dynamic_timeout,
                max_links_override=18,
                providers_limit=4,
            )
            query_provider_telemetry.append(
                {
                    "query": _sanitize_text(query_item, 180),
                    "providers_used": list(telemetry.get("providers_used") or []),
                    "providers_stats": dict(telemetry.get("providers_stats") or {}),
                    "links_raw": int(telemetry.get("links_raw") or 0),
                }
            )
            for link in links:
                clean_link = _cleanup_url(link)
                if not clean_link:
                    continue
                link_host = _root_domain(clean_link)
                if link_host and link_host in exclude_root_domains_set:
                    diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
                    continue
                if clean_link not in source_links:
                    source_links.append(clean_link)
                if len(source_links) >= max_source_links:
                    break
            if len(source_links) >= max_source_links:
                break

    # Orden estable: prioriza fuentes captadas por estrategia y evita resultados
    # aleatorios entre ejecuciones (mejor para depurar/calidad).
    contacts = []
    fetched_pages = 0
    expanded_pages = 0
    cache_hits = 0
    host_quota_skips = 0
    timed_out = False
    selenium_fallback_used = 0
    selenium_fallback_social_used = 0
    http_only_skips = 0
    page_cache = {}
    host_pages_count = {}

    def _get_cached_page(url):
        nonlocal cache_hits, selenium_fallback_used, selenium_fallback_social_used, http_only_skips
        key = _cleanup_url(url)
        if not key:
            return None
        if key in page_cache:
            cache_hits += 1
            return page_cache[key]
        is_social_candidate = _is_social_candidate_url(key)
        if is_social_candidate:
            allow_selenium = selenium_fallback_used < selenium_fallback_max_social
        else:
            allow_selenium = selenium_fallback_used < selenium_fallback_max
        if not allow_selenium:
            http_only_skips += 1
        page = _fetch_page_data(key, deadline_ts=deadline_at, allow_selenium=allow_selenium)
        page_cache[key] = page
        if page and str(page.get("method", "")).lower() == "selenium":
            selenium_fallback_used += 1
            if is_social_candidate:
                selenium_fallback_social_used += 1
        return page

    for link in source_links:
        if time.time() >= deadline_at:
            timed_out = True
            break
        if len(contacts) >= target_limit:
            break
        host = _root_domain(link)
        if host and host in exclude_root_domains_set:
            diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
            continue
        if host and host_pages_count.get(host, 0) >= max_pages_per_host:
            host_quota_skips += 1
            continue
        page = _get_cached_page(link)
        if not page:
            continue
        fetched_pages += 1
        if host:
            host_pages_count[host] = host_pages_count.get(host, 0) + 1
        built = _build_contacts_from_page(
            payload,
            page["url"],
            page["html"],
            page.get("title", ""),
            query_keywords,
            diagnostics=diagnostics,
        )
        if not built:
            built = []
        contacts.extend(built)

        internal_links = _extract_internal_candidate_links(page["url"], page["html"])
        for internal_url in internal_links:
            if time.time() >= deadline_at:
                timed_out = True
                break
            if len(contacts) >= target_limit:
                break
            internal_host = _root_domain(internal_url)
            if internal_host and internal_host in exclude_root_domains_set:
                diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
                continue
            if internal_host and host_pages_count.get(internal_host, 0) >= max_pages_per_host:
                host_quota_skips += 1
                continue
            internal_page = _get_cached_page(internal_url)
            if not internal_page:
                continue
            fetched_pages += 1
            expanded_pages += 1
            if internal_host:
                host_pages_count[internal_host] = host_pages_count.get(internal_host, 0) + 1
            internal_built = _build_contacts_from_page(
                payload,
                internal_page["url"],
                internal_page["html"],
                internal_page.get("title", ""),
                query_keywords,
                diagnostics=diagnostics,
            )
            if internal_built:
                contacts.extend(internal_built)

        social_external_links = _extract_social_external_candidate_links(page["url"], page["html"])
        for external_url in social_external_links:
            if time.time() >= deadline_at:
                timed_out = True
                break
            if len(contacts) >= target_limit:
                break
            external_host = _root_domain(external_url)
            if external_host and external_host in exclude_root_domains_set:
                diagnostics["skip_excluded_domain_link"] = diagnostics.get("skip_excluded_domain_link", 0) + 1
                continue
            if external_host and host_pages_count.get(external_host, 0) >= max_pages_per_host:
                host_quota_skips += 1
                continue
            external_page = _get_cached_page(external_url)
            if not external_page:
                continue
            fetched_pages += 1
            expanded_pages += 1
            if external_host:
                host_pages_count[external_host] = host_pages_count.get(external_host, 0) + 1
            external_built = _build_contacts_from_page(
                payload,
                external_page["url"],
                external_page["html"],
                external_page.get("title", ""),
                query_keywords,
                diagnostics=diagnostics,
            )
            if external_built:
                contacts.extend(external_built)

        contacts = _dedupe_contacts(contacts)

    contacts = contacts[:target_limit]
    return jsonify(
        {
            "ok": True,
            "contacts": contacts,
            "meta": {
                "queriesUsed": len(queries),
                "sourceLinks": len(source_links),
                "pagesFetched": fetched_pages,
                "expandedPagesFetched": expanded_pages,
                "contacts": len(contacts),
                "cacheHits": cache_hits,
                "hostQuotaSkips": host_quota_skips,
                "seleniumFallbackUsed": selenium_fallback_used,
                "seleniumFallbackSocialUsed": selenium_fallback_social_used,
                "httpOnlySkips": http_only_skips,
                "timedOutByBudget": timed_out,
                "elapsedMs": int((time.time() - started_at) * 1000),
                "scope": payload.get("scope", ""),
                "profile": (payload.get("metadata") or {}).get("profile", ""),
                "engine": "open_web_stack_v2",
                "ollamaModelUsed": ollama_model_used,
                "searchProviders": _resolve_search_provider_order(),
                "queryProviders": query_provider_telemetry[:10],
                "sourceUrlsSample": source_links[:40],
                "diagnostics": diagnostics,
            },
        }
    )


if __name__ == "__main__":
    port = _env_int("PORT", 8080)
    waitress_threads = max(4, _env_int("WAITRESS_THREADS", 12))
    waitress_connection_limit = max(100, _env_int("WAITRESS_CONNECTION_LIMIT", 300))
    serve(
        app,
        host="0.0.0.0",
        port=port,
        threads=waitress_threads,
        connection_limit=waitress_connection_limit,
    )
