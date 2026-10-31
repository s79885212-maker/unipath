# -*- coding: utf-8 -*-
"""Winnipeg: official programme directory (read in a browser on 27 October 2026; the static
copy is refused to automated readers) and four fields named on its bachelor's programme pages."""
import claude_v159 as C
from claude_v159 import G
h, rs, t = G.load()
r = C.rec(rs, 'university-of-winnipeg')
r['links']['programs'] = 'https://www.uwinnipeg.ca/programs/'
ev = r.setdefault('programEvidence', {})
for f, p, u in [('economics', 'Economics (Bachelor of Arts)', 'https://www.uwinnipeg.ca/programs/economics.html'),
                ('psychology', 'Psychology (Bachelor of Arts)', 'https://www.uwinnipeg.ca/programs/psychology.html'),
                ('mathematics', 'Mathematics (Bachelor of Science or Bachelor of Arts)', 'https://www.uwinnipeg.ca/programs/mathematics.html'),
                ('computer-science', 'Applied Computer Science (Bachelor of Science)', 'https://www.uwinnipeg.ca/programs/applied-computer-science.html')]:
    if f in r['programs']: continue
    r['programs'].append(f)
    ev[f] = {'program': p, 'level': 'bachelor', 'language': 'English', 'url': u, 'checked': C.DAY}
    C.register(r['id'], 'field: ' + f, u, p)
if isinstance(r.get('englishTaughtPrograms'), list):
    r['englishTaughtPrograms'] = [f for f in r['programs'] if 'English' in ((ev.get(f) or {}).get('language') or '')]
G.checked(r, 'official programme directory')
G.save(h, rs, t); C.flush_research()
