# Release review v250

Baseline dev 2e83754539a35ede1fdc58487e89567f81f48976; main d2f275a6e39af6be3f25febf4fca434039ea5ea9.

- [x] Isolated branch, previous work preserved.
- [x] Rechecked all 54 via GET/full content: 23 replacements, 16 originals readable, 3 web/direct disagreement, 11 explicitly unresolved, 1 unverified secondary photo removed.
- [x] Reverified 12 material profiles, two/country; extra source review found SKKU progression/semester and Kyushu conditional MEXT issues.
- [x] Logic review; 588 tests, both final builds and 19,723 internal links pass; 56 profile opens and 28 local scenario records pass.
- [x] Baseline live v250: 16 scenario records, four locale/width combinations; 12 dark-theme direct profiles, no errors. WebKit executable unavailable. Candidate retest pending.
- [ ] Publish reports/fixes through dev PR; repeat on live staging; draft release PR. Published SHA and final protocols will be recorded in PR comments to avoid a self-referential evidence commit.

Confirmed additional fixes: unknown-year comparisons reproduced on all 9 records for Any intake; all now unknown, values preserved. Pending-source status and continuing-student exclusions now apply to aid filters and labels. Sejong candidate rejected after reading: 43-page application tutorial is not an admission-policy source.
