# UniPath

A research platform for international students: universities, admission requirements,
scholarships, costs and official application links for the USA, Japan and South Korea.

## Live site

- Public site: <https://unipath-edu.netlify.app> (Netlify, deployed by dragging the `dist` folder)
- Claude preview: <https://claude.ai/artifact/HTHwS5L1cXbNZ2rp7GJQqm> (private unless shared)

## Running it locally

**Simplest:** double-click `index.html`. The site is plain HTML/CSS/JS with no build
step and no dependencies, so it runs straight from disk.

**Optional local server** (nicer URLs, avoids browser file:// caching quirks):

```bash
python3 -m http.server 8777
```

Then open <http://127.0.0.1:8777>.

## Publishing an update

The published page is a single self-contained file generated from the source:

```bash
python3 build-artifact.py
```

That writes `build/unipath.html` (all CSS, JS and data inlined and escaped to pure
ASCII). Ask Claude to republish that file to the same URL — publishing the same
path keeps the existing link.

## Admission statistics

`data/admission-profiles.js` is a separate layer, updated yearly, holding the
"who gets in" data for every university:

- `stats.official`: numbers the university itself publishes (US: the Common Data
  Set, sections C1/C9/C11/C12; Waseda: the SILS admissions data page).
- `stats.targets`: UniPath guidance bands for IELTS, SAT and GPA. They are always
  shown labelled as guidance, with the reasoning in `basis`.
- `english`, `academics`, `admissions` and `costs` overrides, for fields confirmed
  after the base records were written.

## Bot check (invisible CAPTCHA)

`assets/js/gate.js` runs Cloudflare Turnstile in the background:

- **Real visitors:** the site opens immediately and the check finishes without clicks.
- **Suspicious visitors:** if Cloudflare asks for interaction, a full-screen check
  blocks the site until it is solved.
- **Search engines and link-preview bots:** never challenged, so the site can still
  be indexed and shared.
- **Repeat visits:** a pass is remembered for 24 hours.

Setup:

1. Cloudflare dashboard, then Turnstile, then Add widget. Use your domain as the
   hostname and set the widget mode to **Managed**.
2. Paste the **site key** into `SITE_KEY` in `assets/js/gate.js`, then rebuild and
   redeploy. The configured key is registered for `unipath-edu.netlify.app`.

A key only works on the hostnames registered for it. If you move to a custom domain,
add that domain to the widget in Cloudflare. Local previews use Cloudflare's
always-pass test key automatically; add `?botcheck=challenge` to preview the visible
challenge.

The check runs in the browser only, so a determined scraper can still fetch the data
files directly. Real protection needs Cloudflare in front of a custom domain (Bot
Fight Mode). The check is skipped for `file://` and is not part of the Claude bundle.

## Languages

The site is available in English and Russian. Use the **EN / RU** button in the header
to switch; the choice is remembered. On a first visit, a Russian-language browser
gets Russian automatically. `?lang=ru` in a link opens the site in Russian.

`assets/js/i18n.js` translates the page after it is rendered, using
`data/i18n/ru.js`, a dictionary keyed by the exact English text:

- **Placeholders.** `{0}` matches any text and `{#0}` matches a number, as in
  `"{#0} universities": "Университетов: {0}"`.
- **Missing entries.** Anything without an entry stays in English, so a missing
  translation never breaks a page.
- **Rich text.** Paragraphs with inline markup carry `data-i18n-html` and are
  translated as one HTML string.
- **Official names** (universities, programmes, scholarships, tests) stay in English
  on purpose.
- **Search** in Russian also matches translated field names and facets.

After changing any English text, open the site with `?lang=ru&i18n=collect`, visit
the pages you changed, and read `I18N.missing` in the browser console to see what
still needs translating. To add a language, create `data/i18n/<code>.js`, add the
code to `SUPPORTED` in `i18n.js`, and load the file in `index.html` and
`build-artifact.py`.

## Night theme

The site follows the device's light/dark setting. The 🌙/☀️ button in the header
overrides it and remembers the choice (`localStorage` key `unipath.theme`, applied
as `data-theme` on `<html>` before first paint). All colours are CSS variables at
the top of `assets/css/styles.css`; the dark values are in the "Night theme" block
at the end of that file.

## Hosting on your own domain

A claude.ai artifact link cannot use a custom domain, so the site is also exported
as a plain static site that any host can serve:

```bash
python3 build-artifact.py
```

This produces `dist/` (the website itself, upload this folder) and `build/unipath-site.zip`.

Recommended free host: **Netlify** — open <https://app.netlify.com/drop>, sign in,
and drag the `dist` folder onto the page. You get `https://<name>.netlify.app`
immediately. To use your own domain, buy it from any registrar, then in Netlify go
to *Domain management → Add a domain* and follow the DNS instructions it shows.

## Structure

The site is a single page with a hash router, so it works identically from disk,
from a local server and from a hosted URL.

```
index.html              Shell: header, #main, footer, script tags

assets/css/styles.css   Design system
assets/js/app.js        Data access, search, filters, comparison store, shared chrome
assets/js/pages.js      Renderers: university profile, browse, country, compare
assets/js/views.js      Renderers: home, countries, scholarships, about
assets/js/router.js     Hash router
assets/js/gate.js       Invisible bot check (Cloudflare Turnstile)
assets/js/i18n.js       Translation layer (EN / RU)

data/registry.js        Bootstrap + study-field taxonomy
data/countries.js       Country profiles
data/universities.us.js 8 universities
data/universities.jp.js 8 universities
data/universities.kr.js 8 universities
data/photos.js          Campus photos + attribution
data/i18n/ru.js         Russian dictionary
data/admission-profiles.js  Admission statistics + target bands (updated yearly)

build-artifact.py       Builds dist/ (the website to upload) and build/unipath.html
```

### Routes

```
#/                              Home
#/countries                     All countries
#/country/us                    One country
#/universities                  Browse (accepts ?q= ?c= ?field= ?scholarship=)
#/university/mit                University profile
#/university/mit/scholarships   Profile, scrolled to a section
#/scholarships  #/compare  #/about
```

## Adding a university

Append one object to the relevant `data/universities.<code>.js` file. Nothing else
changes — routing, search, filters, the scholarship page and comparison all pick it
up automatically. Only `id`, `name`, `country`, `city` and `links.website` are
strictly required; every other field may be `null` and will render as
*"Not confirmed — check the official source"*.

## Adding a country

1. Append an object to `data/countries.js` (`code`, `name`, `flag`, `currency`,
   `tagline`, `overview`, `applicationInfo`, `fieldsPopular`, `notes`, `sources`).
2. Create `data/universities.<code>.js`.
3. Add one `<script src="data/universities.<code>.js"></script>` tag to `index.html`,
   next to the existing ones, and add the same path to `JS_FILES` in
   `build-artifact.py`.

## Data rules

- Every figure was read from the university's own website. Each profile lists the
  exact pages used, and carries a `lastVerified` date.
- Anything a university does not publish is `null` in the base records. The only
  estimates on the site are the IELTS/SAT/GPA target bands in
  `data/admission-profiles.js`, which are always labelled as UniPath guidance.
- A scholarship is called a **full ride** only when the official source states what it
  covers. Coverage has three states: covered, not covered, not confirmed.
- Campus photos come only from Wikimedia Commons under free licences (CC BY,
  CC BY-SA, CC0, public domain). They are listed in `data/photos.js`, stored in
  `assets/img/universities/<id>/`, and every photo is credited on its profile
  with its author, licence and source link. A university with no photo gets a
  generated placeholder in its own colours.

## Disclaimer

Information on this website is provided for research purposes. University requirements,
deadlines, tuition fees and scholarship policies can change. Always verify important
information on the university's official website before applying.
