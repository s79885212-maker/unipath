# -*- coding: utf-8 -*-
"""Founding years for the four records left null on 27 October, read on other official pages
on 29 October 2026, and Alberta's four fields from its programme pages (rendered in a browser)."""
import claude_v159 as C
from claude_v159 import G, L

h, rs, t = G.load()
for uid, year, url, quote in [
  ('university-of-british-columbia', 1908, 'https://vancouver.calendar.ubc.ca/establishment-and-constitution/introduction', 'In 1908 the earlier act was repealed and a new act was established, incorporating the University.'),
  ('university-of-alberta', 1908, 'https://www.ualberta.ca/en/toolkit/communications/overview.html', 'Founded in 1908 (created by legislation in 1906, first classes held in 1908)'),
  ('lakehead-university', 1965, 'https://www.lakeheadu.ca/about/sg/secretariat/university-act', 'Statutes of Ontario, 1965 … The Lakehead College of Arts, Science and Technology, hereafter to be known as "Lakehead University"'),
  ('laurentian-university', 1960, 'https://laurentian.ca/faculties/arts/our-tricultural-mandate', 'Founded in 1960, Laurentian University offers a rich array of programs')]:
    r = C.rec(rs, uid)
    r['founded'] = year
    G.source(r, str(L('History and founding year', 'История и год основания')), url)
    G.checked(r, 'founding year')
    C.register(uid, 'founded', url, quote)

r = C.rec(rs, 'university-of-alberta')
ev = r.setdefault('programEvidence', {})
for f, p, u in [('economics', 'Economics (Bachelor of Arts)', 'https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-arts-economics.html'),
                ('psychology', 'Psychology (Bachelor of Arts)', 'https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-arts-psychology.html'),
                ('mathematics', 'Mathematics (Bachelor of Science with Major)', 'https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-mathematics.html'),
                ('computer-science', 'Computing Science (Bachelor of Science with Major)', 'https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-computing-science.html')]:
    if f in r['programs']: continue
    r['programs'].append(f)
    ev[f] = {'program': p, 'level': 'bachelor', 'language': 'English', 'url': u, 'checked': C.DAY}
    C.register(r['id'], 'field: ' + f, u, p)
if isinstance(r.get('englishTaughtPrograms'), list):
    r['englishTaughtPrograms'] = [f for f in r['programs'] if 'English' in ((ev.get(f) or {}).get('language') or '')]
G.save(h, rs, t)
C.flush_research()
