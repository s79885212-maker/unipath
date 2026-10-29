# -*- coding: utf-8 -*-
"""Fields of study, third pass (29 October 2026): universities whose directories are built
by script, checked through their official programme pages (each page names a bachelor's
degree; campus where it matters). Same rules as tools/claude_v159_fields.py."""
import claude_v159 as C
from claude_v159 import G

h, rs, t = G.load()
EN, FR, BI = 'English', 'French', 'English and French'
ADD = {
 'brock-university': [('economics', 'BA in Economics', 'https://brocku.ca/programs/undergraduate/economics/', EN),
                      ('psychology', 'BA or BSc in Psychology', 'https://brocku.ca/programs/undergraduate/psychology/', EN)],
 'st-francis-xavier-university': [('economics', 'Economics (BA, BSc or BBA honours)', 'https://www.stfx.ca/programs-courses/programs/economics', EN),
                                  ('psychology', 'Psychology (Bachelor of Arts or Bachelor of Science)', 'https://www.stfx.ca/programs-courses/programs/psychology', EN),
                                  ('computer-science', 'Computer Science (Bachelor of Arts or Bachelor of Science)', 'https://www.stfx.ca/programs-courses/programs/computer-science', EN)],
 'saint-marys-university': [('economics', 'Economics (Bachelor of Arts)', 'https://www.smu.ca/future-students/ba-programs/economics-program.html', EN),
                            ('psychology', 'Psychology (BA or BSc)', 'https://www.smu.ca/future-students/ba-programs/psychology-program.html', EN),
                            ('mathematics', 'Mathematics (BA or BSc)', 'https://www.smu.ca/future-students/ba-programs/mathematics-program.html', EN),
                            ('computer-science', 'Computing Science (BSc)', 'https://www.smu.ca/future-students/bsc-programs/computing-science-program.html', EN)],
 'vancouver-island-university': [('psychology', 'Psychology (BA)', 'https://www.viu.ca/programs/arts-humanities-social-sciences/psychology-ba', EN),
                                 ('computer-science', 'Computer Science (BSc), Nanaimo', 'https://www.viu.ca/programs/science-and-technology/computer-science-bsc', EN)],
 'laurentian-university': [('economics', 'Economics, Bachelor of Arts', 'https://laurentian.ca/academics/program/economics', EN),
                           ('psychology', 'Psychology, Bachelor of Arts or Bachelor of Science', 'https://laurentian.ca/program/psychology/details', EN)],
 'universite-de-sherbrooke': [('economics', 'Baccalauréat en économique', 'https://www.usherbrooke.ca/admission/programme/208/baccalaureat-en-economique/', FR),
                              ('psychology', 'Baccalauréat en psychologie', 'https://www.usherbrooke.ca/admission/programme/225/baccalaureat-en-psychologie/', FR),
                              ('mathematics', 'Baccalauréat en mathématiques', 'https://www.usherbrooke.ca/admission/programme/222/baccalaureat-en-mathematiques/', FR)],
 'universite-de-moncton': [('computer-science', 'Baccalauréat ès sciences (majeure en informatique)', 'https://www.umoncton.ca/repertoire/programmes?programme_select=148', FR)],
 'university-of-winnipeg': [],
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
