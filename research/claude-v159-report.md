# Claude — data quality pass on v159 (27 October 2026)

Branch `claude/data-quality-v159`, base `0fd4d6a` (dev, v167). Only data/research files changed (data/universities.ca.js, data/award-details.js, research/*, tools/claude_v159*.py). No assets/js, assets/css, tests or ru.js edits; cache-buster not bumped (integrator). Tests: 278 passed, 0 failed.

| Task | What changed | Result | What remains |
|---|---|---|---|
| Deadlines (priority 1) | 91 Canadian events marked confirmed without cycle evidence | 59 got cycleEvidence with verbatim quotes (Fall 2027); 31 printed without a year → annual-rule; Laurier ILS intake not established | — |
| Awards, 50 profiles | Largest award re-read on official lists; note on every profile | 42 → awardNotDescribed with the largest award named; Toronto/UBC keep full awards; Alberta, McMaster, Winnipeg, Lethbridge, UNBC, Moncton: reason why largest cannot be named | McMaster C$210,000 award unnamed; Concordia/MSVU/MRU/SMU amounts unpublished |
| Errors fixed | Queen's Major Admission Awards (+2 deadlines) and Bishop's Goldbloom scholarships were domestic-only | removed from international aid | — |
| Awards added/updated | Western Neen Hodgins + IPES, Alberta Chan Pang Kuen + Aga Khan (partner), Ottawa English awards, Manitoba IEES (linked to its Fall 2027 deadline), VIU international award + Fall 2027 deadline, Winnipeg Wu Chung (regional), Laval BCCM 2026 (previous cycle) | — | Brock, York, Winnipeg tables are 2026–27 (previous cycle) |
| SAT/ACT (9) | re-checked calendars and country tables | no explicit rule found; USask 2027–28 catalogue confirms SAT/ACT only for home-schooled Business/Engineering applicants | all 9 stay unknown; UNBC 2026–27 calendar is a PDF (not downloaded) |
| Annual cost (7) | re-read | none can be computed honestly (TRU rate not for Fall 2027; VIU year not stated; Capilano workload not stated; Western draft PDF; Manitoba/Winnipeg per-course; MSVU conflict) | all 7 |
| Fields | 135 Econ/Psych/Math/CS tags (third pass 29.10: Brock, StFX, SMU, VIU, Laurentian, Sherbrooke, Moncton) with named bachelor programmes (Econ 35→+1, Psych 35+, Math 37+, CS 41+ of 50) + Winnipeg catalogue | lists stay partial | Alberta (directory by script), Capilano (course pages only), MRU (no Economics major or Mathematics BSc listed), VIU Economics BA major suspended since 14.12.2023 |
| Founded | 46 of 50 from official history pages (research/claude-v159-founded.md) | — | UBC (archives behind bot check), Alberta, Lakehead, Laurentian; proposal: optional foundedNote field |
| Windsor fee, Lesley | re-checked 27.10 | still unknown / previous cycle | — |
| Photos SRH/Karlshochschule | Commons searched again 29.10: only logos and a portrait | placeholders kept | open |
| Uzbekistan 21 | official country tables re-searched 29.10 (McMaster, Queen's, Laurier, Regina, MSVU, TRU, UPEI, StFX, UFV) | no Uzbekistan entry found | all 21 open |

Registers: research/claude-v159-sources.json (294 entries with quotes), research/claude-v159-ru.json (113 English→Russian pairs for Codex to add to ru.js).
