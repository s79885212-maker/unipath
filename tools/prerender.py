"""Write indexable static pages for every university and country.

The site itself is a single-page app with hash routes (#/university/<id>),
which search engines and link previews do not see. At build time this
module reads the SAME data files the site uses, runs the site's own merge
(UNIPATH.applyLayers in data/registry.js) in a JavaScript engine, and
writes:

    dist/university/<id>/index.html   one page per university
    dist/country/<code>/index.html    one page per country
    dist/sitemap.xml, dist/robots.txt

Each page is the normal site shell (so the app takes over when JavaScript
runs) with its own <title>, meta description, canonical URL and Open Graph
tags, plus the key facts already written into <main> as plain HTML.

No university data is copied by hand: everything comes from data/*.js.
"""
import html
import json
import os
import pathlib
import re
import shutil
import subprocess
import tempfile

# Where the site is published. Set by the build environment:
#   SITE_URL  — full public address, no trailing slash
#   BASE_PATH — path the site lives under ("/" on its own domain,
#               "/unipath/" on a GitHub Pages project site)
SITE_URL = os.environ.get("SITE_URL", "https://unipath-edu.netlify.app").rstrip("/")
BASE = "/" + os.environ.get("BASE_PATH", "/").strip("/") + "/" if os.environ.get("BASE_PATH", "/").strip("/") else "/"
SITE = SITE_URL

DATA_FILES = [
    "data/registry.js",
    "data/countries.js",
    "data/universities.us.js",
    "data/universities.us2.js",
    "data/universities.jp.js",
    "data/universities.kr.js",
    "data/universities.uk.js",
    "data/universities.de.js",
    "data/photos.js",
    "data/admission-profiles.js",
]

DISCLAIMER = ("Information on this website is provided for research purposes. University requirements, "
              "deadlines, tuition fees and scholarship policies can change. Always verify important "
              "information on the university’s official website before applying.")

TOEFL_PERIOD = {
    "pre2026": "Tests taken before 21 Jan 2026",
    "post2026": "Tests taken from 21 Jan 2026 (1–6 scale)",
}


# ---------------------------------------------------------------- data ----

def load_data(root: pathlib.Path):
    """Evaluate the data files and return the merged database as a dict.

    Uses Node.js when available (Netlify's build image has it) and falls back
    to macOS JavaScriptCore (osascript) for local builds. Returns None if no
    JavaScript engine is available — the build then skips the static pages.
    """
    src = "var window = {};\n" + "\n".join((root / f).read_text(encoding="utf-8") for f in DATA_FILES)
    src += """
window.UNIPATH.applyLayers();
var __out = JSON.stringify({ countries: window.UNIPATH.countries,
  universities: window.UNIPATH.universities, fields: window.UNIPATH.fields });
"""
    engines = []
    if shutil.which("node"):
        engines.append(("node", src + "process.stdout.write(__out);\n", ["node"]))
    if shutil.which("osascript"):
        engines.append(("osascript", src + "__out;\n", ["osascript", "-l", "JavaScript"]))
    for name, program, cmd in engines:
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tmp:
            tmp.write(program)
        try:
            res = subprocess.run(cmd + [tmp.name], capture_output=True, timeout=120)
            if res.returncode == 0 and res.stdout.strip():
                return json.loads(res.stdout.decode("utf-8"))
            print(f"prerender: {name} failed: {res.stderr.decode('utf-8', 'replace')[:300]}")
        finally:
            pathlib.Path(tmp.name).unlink(missing_ok=True)
    return None


# ------------------------------------------------------------- helpers ----

def e(value) -> str:
    """Escape any value for HTML text or attributes."""
    return html.escape("" if value is None else str(value), quote=True)


def has(value) -> bool:
    if value is None or value == "":
        return False
    if isinstance(value, (list, dict)) and not value:
        return False
    return True


def money(amount, currency):
    sym = {"USD": "$", "JPY": "¥", "KRW": "₩", "GBP": "£", "EUR": "€"}.get(currency, "")
    if isinstance(amount, float) and not amount.is_integer():
        return f"{sym}{amount:,.2f}"
    return f"{sym}{int(amount):,}"


def score_parts(x, lowest=False):
    parts = []
    if has(x.get("min")):
        parts.append(("lowest minimum " if lowest else "minimum ") + str(x["min"]))
    if has(x.get("recommended")):
        parts.append("recommended " + str(x["recommended"]))
    return ", ".join(parts)


def english_lines(t, name):
    """Plain-text lines for one English test — mirrors the site's display."""
    if not t:
        return []
    if t.get("scales"):
        out = []
        for sc in t["scales"]:
            label = TOEFL_PERIOD.get(sc.get("period"), sc.get("period"))
            if sc.get("accepted") is False:
                out.append(f"{label}: not accepted")
            else:
                out.append(f"{label}: {score_parts(sc, t.get('lowestLevel')) or 'not published'}")
        return out
    one = score_parts(t, t.get("lowestLevel"))
    if one:
        return [one[0].upper() + one[1:]]
    if has(t.get("estimate")):
        return [f"{t['estimate']} (UniPath estimate — not an official requirement)"]
    return [f"{name}: not published by the university"]


def sat_label(u):
    p = ((u.get("academics") or {}).get("sat") or {}).get("policy")
    return {"required": "SAT/ACT required", "optional": "Test-optional", "accepted": "SAT/ACT accepted",
            "not-used": "SAT/ACT not used"}.get(p, "Policy not confirmed")


def fee_text(u):
    fee = (u.get("admissions") or {}).get("applicationFee") or {}
    if fee.get("amount") == 0:
        return "No application fee"
    if has(fee.get("amount")):
        return money(fee["amount"], fee.get("currency") or "USD")
    return "Not confirmed — check the official source"


def head_tags(title, description, url, image=None, og_type="website"):
    tags = [
        f"<title>{e(title)}</title>",
        f'<meta name="description" content="{e(description)}">',
        f'<link rel="canonical" href="{e(url)}">',
        f'<meta property="og:type" content="{e(og_type)}">',
        f'<meta property="og:site_name" content="UniPath">',
        f'<meta property="og:title" content="{e(title)}">',
        f'<meta property="og:description" content="{e(description)}">',
        f'<meta property="og:url" content="{e(url)}">',
        '<meta name="twitter:card" content="summary_large_image">' if image else '<meta name="twitter:card" content="summary">',
    ]
    if image:
        tags.append(f'<meta property="og:image" content="{e(image)}">')
    return "\n".join(tags)


def shell(template: str, head: str, main_html: str) -> str:
    """Put page-specific head tags and prerendered content into the site shell."""
    page = template
    # Drop the generic tags the page overrides.
    page = re.sub(r"<title>.*?</title>\n?", "", page, flags=re.S)
    page = re.sub(r'<meta (name="description"|property="og:[a-z_]+")[^>]*>\n?', "", page)
    # Pages live at /university/<id>/, so every local file must be requested
    # from the site root. The meta tag tells the app it is on such a page
    # (photo paths from data/photos.js and #/ links are then made root-based).
    page = re.sub(r'(src|href)="(assets|data)/', r'\1="' + BASE + r'\2/', page)
    page = page.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="unipath-root" content="' + BASE + '">\n' + head, 1)
    page = page.replace('<main id="main"></main>', f'<main id="main">{main_html}</main>', 1)
    return page


# ---------------------------------------------------------------- pages ----

def university_page(u, country, fields):
    url = f"{SITE}/university/{u['id']}/"
    c_name = country.get("name", "")
    title = f"{u['name']} — admissions, costs & scholarships for international students | UniPath"
    description = (f"{u['name']} ({u.get('city', '')}, {c_name}): admission requirements, English scores, "
                   f"costs, deadlines and scholarships for international undergraduates, from official sources. "
                   f"Last verified {u.get('lastVerified', '')}.")
    photo = (u.get("photos") or {}).get("main")
    image = f"{SITE}/{photo}" if photo else None

    adm = u.get("admissions") or {}
    eng = u.get("english") or {}
    costs = u.get("costs") or {}
    sch = u.get("scholarships") or {}
    fr = sch.get("fullRide") or {}
    need = sch.get("needBased") or {}

    rows = []
    def row(label, value_html):
        rows.append(f"<div><dt>{e(label)}</dt><dd>{value_html}</dd></div>")

    if has(costs.get("headline")):
        row("Cost", e(costs["headline"]) + (f" <span class=\"small muted\">({e(costs.get('academicYear'))})</span>" if has(costs.get("academicYear")) else ""))
    deadlines = adm.get("deadlines") or []
    if deadlines:
        def one(d):
            text = d.get("displayDate") or d.get("date") or ""
            year = bool(d.get("dateISO")) or bool(re.search(r"\b(19|20)\d{2}\b", text))
            term = f" ({e(d['entryTerm'])})" if d.get("entryTerm") else ""
            flag = "" if year else " \u2014 current cycle date not confirmed"
            return f"{e(d.get('name'))}{term}: <strong>{e(text)}</strong>{flag}"
        row("Deadlines", "<br>".join(one(d) for d in deadlines))
    row("Application fee", e(fee_text(u)))
    for key, name in (("ielts", "IELTS"), ("toefl", "TOEFL"), ("duolingo", "Duolingo English Test")):
        lines = english_lines(eng.get(key), name)
        if lines:
            row(name, "<br>".join(e(x) for x in lines))
    row("SAT / ACT", e(sat_label(u)))
    if fr.get("available") is True:
        who = " — open to international students" if fr.get("internationalEligible") is True else ""
        row("Full scholarship route", "Yes" + e(who))
    row("Need-based aid for internationals",
        "Yes" if need.get("availableToInternational") is True else "No" if need.get("availableToInternational") is False else "Not confirmed")

    merit = sch.get("merit") or []
    scholarships = ""
    if merit:
        scholarships = "<h2>Scholarships</h2><ul>" + "".join(
            f"<li><strong>{e(m.get('name'))}</strong>" + (f" — {e(m.get('amount'))}" if has(m.get("amount")) else "") + "</li>"
            for m in merit) + "</ul>"
    if has(fr.get("note")):
        scholarships += f"<p>{e(fr['note'])}</p>"

    labels = {f["id"]: f["label"] for f in fields}
    programs = ""
    if u.get("programs"):
        programs = ("<h2>Undergraduate programs</h2><p><strong>All undergraduate fields:</strong> "
                    + e(", ".join(labels.get(p, p) for p in u["programs"])) + "</p>")
        en = u.get("englishTaughtPrograms") or []
        if en:
            programs += "<p><strong>Available fully in English:</strong> " + e(", ".join(labels.get(p, p) for p in en)) + "</p>"
        elif u.get("englishTaught") is True:
            programs += "<p><strong>Available fully in English:</strong> not confirmed \u2014 check the official programme list.</p>"
        if has(u.get("programNote")):
            programs += f"<p>{e(u['programNote'])}</p>"

    links = u.get("links") or {}
    apply_links = [(k, v) for k, v in (("Official website", links.get("website")), ("Admissions", links.get("admissions")),
                                       ("International applicants", links.get("internationalAdmissions")),
                                       ("Application portal", links.get("applicationPortal")),
                                       ("Tuition and costs", links.get("cost"))) if has(v)]
    apply_html = ("<h2>Apply and learn more</h2><ul>" + "".join(
        f'<li><a href="{e(v)}" rel="noopener">{e(k)}</a></li>' for k, v in apply_links) + "</ul>") if apply_links else ""

    sources = u.get("sources") or []
    sources_html = ("<h2>Sources</h2><ul>" + "".join(
        f'<li><a href="{e(s.get("url"))}" rel="noopener">{e(s.get("label"))}</a></li>' for s in sources) + "</ul>") if sources else ""

    where = ", ".join(x for x in (u.get("city"), u.get("region"), c_name) if x)
    facts = " · ".join(x for x in (where, f"Founded {u['founded']}" if u.get("founded") else "", u.get("type")) if x)
    main_html = (
        '<section class="section"><div class="wrap">'
        f'<p class="small"><a href="{BASE}">Home</a> › <a href="{BASE}country/{e(u["country"])}/">{e(c_name)}</a> › {e(u["name"])}</p>'
        f"<h1>{e(u['name'])}</h1>"
        f'<p class="muted">{e(facts)}</p>'
        f"<p>{e(u.get('description'))}</p>"
        f"<h2>Key facts for international applicants</h2><dl class=\"deflist\">{''.join(rows)}</dl>"
        f"{scholarships}{programs}{apply_html}{sources_html}"
        f'<p class="small muted">Last verified: {e(u.get("lastVerified"))}. {e(DISCLAIMER)}</p>'
        f'<p><a href="{BASE}#/university/{e(u["id"])}">Open the full interactive profile</a></p>'
        "</div></section>"
    )
    return url, head_tags(title, description, url, image, "article"), main_html


def country_page(c, unis):
    url = f"{SITE}/country/{c['code']}/"
    title = f"Study in {c['name']} as an international student — universities & scholarships | UniPath"
    description = f"{c['name']}: {c.get('tagline', '')} Compare {len(unis)} universities, costs, deadlines and scholarships from official sources."
    items = "".join(
        f'<li><a href="{BASE}university/{e(u["id"])}/">{e(u["name"])}</a> — {e(u.get("city"))}'
        + (f" · {e(u['costs']['headline'])}" if has((u.get('costs') or {}).get('headline')) else "") + "</li>"
        for u in unis)
    notes = "".join(f"<li>{e(n)}</li>" for n in c.get("notes") or [])
    sources = "".join(f'<li><a href="{e(s.get("url"))}" rel="noopener">{e(s.get("label"))}</a></li>' for s in c.get("sources") or [])
    main_html = (
        '<section class="section"><div class="wrap">'
        f'<p class="small"><a href="{BASE}">Home</a> › {e(c["name"])}</p>'
        f"<h1>{e(c.get('flag'))} {e(c['name'])}</h1>"
        f"<p>{e(c.get('tagline'))}</p><p>{e(c.get('overview'))}</p>"
        f"<h2>How applications work</h2><p>{e(c.get('applicationInfo'))}</p>"
        f"<h2>Universities</h2><ul>{items}</ul>"
        + (f"<h2>Good to know</h2><ul>{notes}</ul>" if notes else "")
        + (f"<h2>Sources</h2><ul>{sources}</ul>" if sources else "")
        + f'<p class="small muted">{e(DISCLAIMER)}</p>'
        "</div></section>"
    )
    return url, head_tags(title, description, url), main_html


# ---------------------------------------------------------------- build ----

def build(root: pathlib.Path, dist: pathlib.Path) -> int:
    template = (root / "index.html").read_text(encoding="utf-8")
    db = load_data(root)
    urls = [f"{SITE}/"]
    written = 0
    if db is None:
        print("prerender: no JavaScript engine found (node or osascript) — static pages skipped")
    else:
        countries = {c["code"]: c for c in db["countries"]}
        for u in db["universities"]:
            url, head, main_html = university_page(u, countries.get(u["country"], {}), db["fields"])
            out = dist / "university" / u["id"] / "index.html"
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(shell(template, head, main_html), encoding="utf-8")
            urls.append(url)
            written += 1
        for c in db["countries"]:
            unis = [u for u in db["universities"] if u["country"] == c["code"]]
            url, head, main_html = country_page(c, unis)
            out = dist / "country" / c["code"] / "index.html"
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(shell(template, head, main_html), encoding="utf-8")
            urls.append(url)
            written += 1
        # The home page gets its canonical URL too.
        home = dist / "index.html"
        home.write_text(home.read_text(encoding="utf-8").replace(
            '<meta charset="utf-8">', f'<meta charset="utf-8">\n<link rel="canonical" href="{SITE}/">', 1), encoding="utf-8")

    (dist / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"  <url><loc>{e(x)}</loc></url>\n" for x in urls) + "</urlset>\n", encoding="utf-8")
    (dist / "robots.txt").write_text(f"User-agent: *\nAllow: {BASE}\n\nSitemap: {SITE}/sitemap.xml\n", encoding="utf-8")
    return written
