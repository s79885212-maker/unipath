# Europe handoff — 22 November 2026

Branch: codex/europe-foundation. Base dev: f064ff8776ff8fa4f6839acdf25dc9dda6b6be30 (v269 comparison fix, PR31 already merged to dev). Main stays129c5b96a4562455919a1fc5f18bb7ef1044123f, productionv268. Europe PR lookup (draft opens immediately after this push): https://github.com/s79885212-maker/unipath/pulls?q=is%3Apr+head%3Acodex%2Feurope-foundation . Exact draft PR: https://github.com/s79885212-maker/unipath/pull/32 . Do not merge or deploy this European branch.

## Current package

Italy: Bocconi (English BSc Management, Milan, 2027/28) and Bologna (English CLEF, Bologna, published2026/27 entry procedure). Authoring/source ledger: research/europe/country-it.json. Generated data: data/country.it.js, data/universities.it.js. Common generator: python tools/europe_batch.py (run from repo root). It uses the existing bilingual L/flush helpers; never edit packed dictionaries. Manifest: research/europe/manifest.json. Each important fact has a direct official source and reading date. Only reviewed programme tags are listed; unknown is not absence. Photos are explicit normal placeholders; no unlicensed or generated campus photos.

Bocconi redirects older International Economics and Management to Management; do not restore old programme names. Ordinary2027/28 BSc tuition+fees is EUR17700 (official PDF p1), not full cost; HEC double degree p2 is different. IELTS6.5 with every section6.0; SAT/ACT/Bocconi test are alternatives, not optional from silence. Italian time is mapped to Europe/Rome. Bologna fixedEUR157.04 is only one component of2026/27 fees; do not turn it into full tuition or full2027 annual cost. Its entrance-test/language minima and new call still require review; the current page explicitly uses26_27 documents.

## Checks

node tests/run.js
BASE_PATH=/unipath/ SITE_URL=https://s79885212-maker.github.io/unipath python build-artifact.py
node tests/links.js
BASE_PATH=/unipath/staging/ SITE_URL=https://s79885212-maker.github.io/unipath/staging STAGING=1 python build-artifact.py
node tests/links.js
Browser: tools/europe_browser.cjs (to be added before final review), RU/EN, country filter/search/direct profiles/comparison at390/1280. Chrome viewport emulation is not iPhone/Threads. Gate/access must not be changed.

## Next sources / queue

1. Italy: University of Padua Information Engineering — https://www.unipd.it/en/corsi-di-laurea/information-engineering and https://www.unipd.it/en/ammissioni-information-engineering ; use foreign-qualification non-EU call, not the Italian-title call. Current visible guide2026/27; no invented2027 dates.
2. France: Ecole Polytechnique Bachelor Mathematics/Computer Science, ESSEC Global BBA, EPITA Bachelor Computer Science. Read programme and international admissions, campuses/language and actual fee year separately.
3. Spain: UC3M Data Science and Engineering, IE Computer Science and AI, UAB English Business Administration. Check UNEDasiss/qualification route and exact campus; do not treat SAT as a universal waiver.

Push after each verified country package. Update this handoff, progress/report and draft PR with exact commit/checks. Keep initial Italy commit usable even if later research is interrupted.

Italy validation:644 passed/0failed, staging550HTML/22028internal links;4 direct profile openings RU/EN and4 catalogue/search/compare flows passed. Full cumulative production build remains pending.

## France package
Three records: data/country.fr.js and data/universities.fr.js; authoring research/europe/country-fr.json. Polytechnique: English BSc maths double majors; programme feeEUR19600 is undated, timeline heading says2026 while rows are2026–27: not confirmed Fall2027 calendar events. ESSEC: Cergy English Global BBA only;2027tuition20900 +annualregistration2000 +one-offservice2730, not full budget. References checklist saysoptional, FAQ asks2: flagconflict. EUR10000 award competitive, interest in admissionform, not deducted. EPITA: Kremlin-Bicetre EnglishBSc; FrenchB2 at graduation, not admission; IELTS6, entrance mathematics/interview; olddeadline31July2026 not carried forward;2027tuition8490 separately from200additionalcharges and60application. Legacy admissions URL404 replaced by programme admission section.

France package v271: 647 tests passed; local staging build 554 pages / 23,293 internal links; Chrome RU390/EN1280: 10 direct profile openings and 6 catalogue/search/comparison/reload flows, no errors. Country-filter browser isolation fixed: clear prior search between countries. No shared staging deployment.
