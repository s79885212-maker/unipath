# Working on UniPath (for AI coding agents)

Read this before changing anything. It applies to every agent (Codex, Claude Code, others).

## Talking to the owner
- The owner writes in English or Russian; **answer in Russian**.
- Commits show the owner alone: **no `Co-Authored-By` lines**, no agent attribution.

## Branches, test copy and releases
| Branch | Address | What it is |
|---|---|---|
| `dev` | https://s79885212-maker.github.io/unipath/staging/ | test copy — **all work goes here** |
| `main` | https://s79885212-maker.github.io/unipath/ | public site — **only on a release the owner asks for** ("заливай") |

- Commit to `dev` and push `origin dev`. The "Staging check" workflow runs the tests; if they pass, "Deploy to GitHub Pages" rebuilds both copies.
- Release (only when the owner says so): `git checkout main && git merge --ff-only dev && git push origin main && git checkout dev`.
- Never push to `main` otherwise. Never force-push. Stage files explicitly (no `git add -A`).
- Do not commit these local files: `data/universities.us2 2.js`, `scratchpad_photos_new.json`, `scratchpad_photos_us200.json`, `assets/img/universities/wheaton-college-massachusetts/`. No file names with spaces in the repo (`git ls-files | grep -c " "` must be 0).
- Two agents must not edit the same working tree at the same time. Coordinate through the owner, or work in a separate `git worktree` on your own branch and merge into `dev`.

## Before every commit
1. `node tests/run.js` — all tests pass (the run prints `N passed, 0 failed`).
2. Bump the cache-buster in `index.html` (`?v=NN` → `?v=NN+1`, every occurrence).
3. Add a short entry (in Russian) to `AUDIT_EXPANSION_PROGRESS.md`.
4. Check the change on the test copy after the push (Russian version `?lang=ru`, phone width 360 px, no console errors; `?i18n=collect&lang=ru` lists untranslated strings in `I18N.missing`, a Set).

## Data rules (the site's whole value is that the data is true)
- **Never invent data.** Official university pages only; aggregators and search summaries are leads to verify on the official page, never sources.
- Every dated or priced fact keeps its source URL and the day it was read (`source`, `verified`).
- A field the pages do not state stays `null` and shows as "not checked". Write what is unconfirmed into `verification.unconfirmed`.
- Do not compute averages from ranges, do not carry last year's dates forward (mark them `previous-cycle`), do not call a sum of lines the university's total, keep per-semester figures per semester (a yearly figure must say "calculated by UniPath").
- Every university with a confirmed yearly cost gets an `annualCost` entry in `data/match.js`.
- New English strings need Russian translations in `data/i18n/ru.js` (the Python builders register them with `L(en, ru)` from `tools/us200_std.py` and write them with `flush()`).
- JSON-format record files (`data/universities.ca.js`, `data/universities.us3.js`) are edited with `tools/ca50_gaps.py` (`load(path)` / `save(...)` keep the layout); see `tools/ca50_gaps1.py`…`ca50_gaps5.py` and `tools/fix_v134.py` for examples.

## What an agent must not do
- No downloads of files (PDFs, images, archives) without the owner's explicit permission for those files. Campus photos come only from Wikimedia Commons under free licences, with author and licence shown.
- Do not bypass CAPTCHAs, bot checks ("Just a moment…"), geo-blocks or "Access denied" pages — mark the item unconfirmed instead.
- Do not submit forms with personal data; calculators may be used only to read published figures.
- Do not log in to services for the owner, make purchases, or change repository or hosting settings.
