# -*- coding: utf-8 -*-
"""Fields of study, fourth pass (29 October 2026): universities whose directories are built
by script, checked through their official programme pages (each page names a bachelor's
degree; campus where it matters). Same rules as tools/claude_v159_fields.py."""
import claude_v159 as C
from claude_v159 import G

h, rs, t = G.load()
EN, FR, BI = 'English', 'French', 'English and French'
ADD = {
 'mcmaster-university': [('psychology', 'Honours Psychology, Neuroscience & Behaviour (Bachelor of Science)', 'https://future.mcmaster.ca/programs/psychology-neuroscience-behaviour/', EN)],
 'university-of-guelph': [('economics', 'Economics (ECON) major, Bachelor of Arts', 'https://calendar.uoguelph.ca/undergraduate-calendar/programs-majors-minors/economics-econ/', EN)],
 'university-of-regina': [('psychology', 'Psychology (Bachelor of Arts)', 'https://www.uregina.ca/academics/programs/arts/psychology.html', EN)],
 'universite-du-quebec-a-montreal': [('psychology', 'Baccalauréat en psychologie (6589)', 'https://etudier.uqam.ca/programme?code=6589', FR),
                                     ('computer-science', 'Baccalauréat en informatique et génie logiciel (7416)', 'https://etudier.uqam.ca/programme?code=7416', FR)],
}
n = 0
for uid, items in ADD.items():
    r = C.rec(rs, uid)
    assert r['programsBasis'] == 'evidence', uid
    ev = r.setdefault('programEvidence', {})
    for field, prog, url, lang in items:
        if field in r['programs']: continue
        r['programs'].append(field)
        ev[field] = {'program': prog, 'level': 'bachelor', 'language': lang, 'url': url, 'checked': C.DAY}
        C.register(uid, 'field: ' + field, url, prog)
        n += 1
    if isinstance(r.get('englishTaughtPrograms'), list):
        r['englishTaughtPrograms'] = [f for f in r['programs'] if 'English' in ((ev.get(f) or {}).get('language') or '')]
print('fields added:', n)
G.save(h, rs, t)
C.flush_research()
