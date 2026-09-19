#!/usr/bin/env python3
"""Bundle the site into ONE self-contained HTML file for publishing.

Usage:  python3 build-artifact.py
Output: dist/unipath.html

The output is body-content only (no <!doctype>/<html>/<head>/<body>), which is
what the Artifact publisher expects — it supplies the document skeleton.

Everything is escaped to pure ASCII (JS \\uXXXX, CSS \\XXXX) so the bundle
renders identically no matter what charset the host declares. The local site
in index.html stays the source of truth; this file is generated from it.
"""
import pathlib
import re
import shutil

ROOT = pathlib.Path(__file__).parent
DIST = ROOT / "dist"      # the website itself — upload THIS folder
BUILD = ROOT / "build"    # helper outputs (Claude bundle, zip)
BUILD.mkdir(exist_ok=True)

JS_FILES = [
    "data/registry.js",
    "data/countries.js",
    "data/universities.us.js",
    "data/universities.jp.js",
    "data/universities.kr.js",
    "data/universities.uk.js",
    "data/universities.de.js",
    "data/admission-profiles.js",
    "data/match.js",
    "data/i18n/ru.js",
    "assets/js/i18n.js",
    "assets/js/app.js",
    "assets/js/pages.js",
    "assets/js/views.js",
    "assets/js/match.js",
    "assets/js/router.js",
]
CSS_FILES = ["assets/css/styles.css"]

NON_ASCII = re.compile(r"[^\x00-\x7F]")


def js_escape(text: str) -> str:
    """Replace every non-ASCII character with a \\uXXXX escape.

    Astral characters (emoji) become surrogate pairs, which is what a JS
    string literal needs. Non-ASCII only ever appears inside string literals
    and comments in these files, so a blanket replacement is safe.
    """
    def sub(m):
        units = m.group(0).encode("utf-16-be")
        return "".join(
            "\\u%04x" % int.from_bytes(units[i:i + 2], "big")
            for i in range(0, len(units), 2)
        )
    return NON_ASCII.sub(sub, text)


def css_escape(text: str) -> str:
    """Replace non-ASCII with CSS escapes (\\XXXX plus a space terminator)."""
    return NON_ASCII.sub(lambda m: "\\%04X " % ord(m.group(0)), text)


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


parts = [
    "<title>UniPath</title>",
    "<style>",
    *[css_escape(read(f)) for f in CSS_FILES],
    "</style>",
    '<div id="site-header"></div>',
    '<main id="main"></main>',
    '<div id="site-footer"></div>',
]

for f in JS_FILES:
    parts.append(f"<!-- {f} -->")
    parts.append("<script>")
    parts.append(js_escape(read(f)))
    parts.append("</script>")

out = BUILD / "unipath.html"
body = "\n".join(parts)
out.write_text(body, encoding="ascii")
print(f"{out}  —  {out.stat().st_size / 1024:.0f} KB, pure ASCII: {body.isascii()}")


# ---------------------------------------------------------------------------
# Static-site export for any web host (Netlify, Cloudflare Pages, GitHub Pages).
# dist/ contains ONLY the public site, with index.html at its root, so
# dragging the dist folder onto Netlify works directly.
# ---------------------------------------------------------------------------
if DIST.exists():
    shutil.rmtree(DIST)
DIST.mkdir()
shutil.copy2(ROOT / "index.html", DIST / "index.html")
shutil.copytree(ROOT / "assets", DIST / "assets")
shutil.copytree(ROOT / "data", DIST / "data")
(DIST / ".nojekyll").write_text("")  # GitHub Pages: serve files as-is

# Indexable static pages (/university/<id>/, /country/<code>/) + sitemap,
# generated from the same data files — see tools/prerender.py.
import sys
sys.path.insert(0, str(ROOT / "tools"))
import prerender  # noqa: E402
print(f"prerender: {prerender.build(ROOT, DIST)} static pages")

zip_base = BUILD / "unipath-site"
shutil.make_archive(str(zip_base), "zip", DIST)
print(f"{DIST}/  (upload this folder)  +  {zip_base}.zip")
