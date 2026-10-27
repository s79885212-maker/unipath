# -*- coding: utf-8 -*-
"""Fields of study missing from Canadian records (priority: Economics, Psychology,
Mathematics, Computer Science), each added only with a named bachelor's programme found in
the university's official undergraduate programme directory on 27 October 2026. Minors,
single courses, graduate programmes, certificates and admission categories are not counted.
programsStatus stays 'partial': the directories were scanned for these four areas only."""
import claude_v159 as C
from claude_v159 import G

h, rs, t = G.load()
EN, FR = 'English', 'French'
ADD = {
 'university-of-waterloo': [('economics', 'Economics (Faculty of Arts)', 'https://uwaterloo.ca/future-students/programs/economics', EN),
                            ('psychology', 'Psychology – Bachelor of Arts', 'https://uwaterloo.ca/future-students/programs/psychology-arts', EN)],
 'york-university': [('economics', 'Economics (Faculty of Liberal Arts & Professional Studies)', 'https://futurestudents.yorku.ca/program/economics/laps', EN),
                     ('psychology', 'Psychology (Faculty of Health)', 'https://futurestudents.yorku.ca/program/psychology/health', EN),
                     ('mathematics', 'Mathematics (Faculty of Science)', 'https://futurestudents.yorku.ca/program/mathematics/science', EN)],
 'concordia-university': [('economics', 'Economics (BA)', 'https://www.concordia.ca/academics/undergraduate/economics.html', EN),
                          ('psychology', 'Psychology (BA, BSc)', 'https://www.concordia.ca/academics/undergraduate/psychology.html', EN),
                          ('mathematics', 'Actuarial Mathematics (BA, BSc)', 'https://www.concordia.ca/academics/undergraduate/actuarial-mathematics.html', EN)],
 'university-of-new-brunswick': [('economics', 'Economics, Bachelor of Arts (Fredericton)', 'https://www.unb.ca/academics/programs/arts/economics-fr.html', EN),
                                 ('psychology', 'Psychology, Bachelor of Arts (Fredericton)', 'https://www.unb.ca/academics/programs/arts/psychology.html', EN),
                                 ('mathematics', 'Mathematics, Bachelor of Arts (Fredericton)', 'https://www.unb.ca/academics/programs/arts/mathematics.html', EN),
                                 ('computer-science', 'Computer Science (Fredericton)', 'https://www.unb.ca/academics/programs/computer-science/computer-science_f.html', EN)],
 'university-of-regina': [('economics', 'Economics — Bachelor’s Degree', 'https://www.uregina.ca/academics/index.html', EN),
                          ('mathematics', 'Mathematics — Bachelor’s Degree', 'https://www.uregina.ca/academics/index.html', EN),
                          ('computer-science', 'Computer Science — Bachelor’s Degree', 'https://www.uregina.ca/academics/index.html', EN)],
 'ontario-tech-university': [('economics', 'Commerce — Economics', 'https://ontariotechu.ca/programs/undergraduate/business/economics-commerce/index.php', EN),
                             ('psychology', 'Psychology (Bachelor of Arts)', 'https://ontariotechu.ca/programs/undergraduate/social-science-and-humanities/psychology-bachelor-of-arts/index.php', EN),
                             ('mathematics', 'Mathematics for Science and Industry', 'https://ontariotechu.ca/programs/undergraduate/science/mathematics-for-science-and-industry/index.php', EN)],
 'wilfrid-laurier-university': [('psychology', 'Psychology (BA or BSc), Waterloo campus', 'https://www.wlu.ca/programs/index.html', EN),
                                ('mathematics', 'Mathematics, Bachelor of Science (BSc)', 'https://www.wlu.ca/programs/index.html', EN)],
 'lakehead-university': [('economics', 'Economics', 'https://www.lakeheadu.ca/programs/undergraduate-programs/economics', EN),
                         ('psychology', 'Psychology', 'https://www.lakeheadu.ca/programs/undergraduate-programs/psychology', EN),
                         ('mathematics', 'Mathematics', 'https://www.lakeheadu.ca/programs/undergraduate-programs/mathematics', EN)],
 'university-of-prince-edward-island': [('economics', 'Economics', 'https://www.upei.ca/programs/economics', EN),
                                        ('psychology', 'Psychology', 'https://www.upei.ca/programs/psychology', EN),
                                        ('mathematics', 'Mathematics', 'https://www.upei.ca/programs/mathematics', EN),
                                        ('computer-science', 'Computer Science', 'https://www.upei.ca/programs/computer-science', EN)],
 'acadia-university': [('economics', 'Economics (BA)', 'https://www2.acadiau.ca/academics/undergraduate/economics.html', EN),
                       ('psychology', 'Psychology', 'https://www2.acadiau.ca/academics/undergraduate/psychology.html', EN),
                       ('mathematics', 'Mathematics and Statistics', 'https://www2.acadiau.ca/academics/undergraduate/mathematics-and-statistics.html', EN),
                       ('computer-science', 'Computer Science (BCS, BACS, BSc)', 'https://www2.acadiau.ca/academics/undergraduate/computer-science.html', EN)],
 'mount-allison-university': [('economics', 'Economics', 'https://mta.ca/academics/programs-and-degrees/economics', EN),
                              ('psychology', 'Psychology', 'https://mta.ca/academics/programs-and-degrees/psychology', EN),
                              ('mathematics', 'Mathematics', 'https://mta.ca/academics/programs-and-degrees/mathematics', EN),
                              ('computer-science', 'Computer Science', 'https://mta.ca/academics/programs-and-degrees/computer-science', EN)],
 'university-of-lethbridge': [('economics', 'Economics (Arts & Science), bachelor’s degree', 'https://www.ulethbridge.ca/future-student/programs', EN),
                              ('psychology', 'Psychology (Arts & Science), bachelor’s degree', 'https://www.ulethbridge.ca/future-student/programs', EN),
                              ('mathematics', 'Mathematics (Arts & Science), bachelor’s degree', 'https://www.ulethbridge.ca/future-student/programs', EN),
                              ('computer-science', 'Computer Science (Arts & Science), bachelor’s degree', 'https://www.ulethbridge.ca/future-student/programs', EN)],
 'mount-saint-vincent-university': [('economics', 'Economics — Bachelor of Arts', 'https://www.msvu.ca/academics/bachelor-of-arts-ba/economics/', EN),
                                    ('psychology', 'Psychology — Bachelor of Science', 'https://www.msvu.ca/academics/bachelor-of-science-bsc/psychology/', EN),
                                    ('mathematics', 'Mathematics — Bachelor of Science', 'https://www.msvu.ca/academics/bachelor-of-science-bsc/mathematics/', EN)],
 'mount-royal-university': [('psychology', 'Bachelor of Arts — Psychology', 'https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Arts/Departments/Psychology/PsychologyMajor/index.htm', EN)],
 'thompson-rivers-university': [('economics', 'Bachelor of Arts, Major in Economics', 'https://www.tru.ca/programs/catalogue/economics-major.html', EN),
                                ('psychology', 'Bachelor of Arts, Major in Psychology', 'https://www.tru.ca/programs/catalogue/psychology-major.html', EN),
                                ('mathematics', 'Bachelor of Arts, Major in Mathematics', 'https://www.tru.ca/programs/catalogue/mathematics-major.html', EN),
                                ('computer-science', 'Bachelor of Computing Science', 'https://www.tru.ca/programs/catalogue/bachelor-of-computing-science.html', EN)],
 'university-of-the-fraser-valley': [('mathematics', 'Bachelor of Science (Mathematics major)', 'https://www.ufv.ca/programs/science/mathematics-bsc-or-ba/', EN)],
 'university-of-victoria': [('economics', 'Economics', 'https://www.uvic.ca/undergraduate/programs/undergraduate-programs/pages/economics.php', EN),
                            ('psychology', 'Psychology and Computer Science (combined)', 'https://www.uvic.ca/undergraduate/programs/undergraduate-programs/pages/psychology-and-computer-science.php', EN),
                            ('mathematics', 'Financial Mathematics and Economics', 'https://www.uvic.ca/undergraduate/programs/undergraduate-programs/pages/financial-mathematics-and-economics.php', EN)],
 'universite-de-montreal': [('economics', 'Baccalauréat en économie et politique', 'https://admission.umontreal.ca/programmes/economie-et-politique/', FR)],
 'universite-du-quebec-a-montreal': [('economics', 'Baccalauréat en économique', 'https://etudier.uqam.ca/programme/baccalaureat-economique', FR)],
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
    # The English list is, by rule, the fields whose named programme is taught in English.
    if isinstance(r.get('englishTaughtPrograms'), list):
        r['englishTaughtPrograms'] = [f for f in r['programs'] if 'English' in ((ev.get(f) or {}).get('language') or '')]
print('fields added:', n)
G.save(h, rs, t)
C.flush_research()
