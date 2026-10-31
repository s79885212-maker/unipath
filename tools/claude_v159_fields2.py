# -*- coding: utf-8 -*-
"""Fields of study, second pass (27 October 2026): universities whose directories are built
by script, checked through their official programme pages (each page names a bachelor's
degree; campus where it matters). Same rules as tools/claude_v159_fields.py."""
import claude_v159 as C
from claude_v159 import G

h, rs, t = G.load()
EN, FR, BI = 'English', 'French', 'English and French'
ADD = {
 'university-of-toronto': [('economics', 'Economics', 'https://future.utoronto.ca/program/economics', EN),
                           ('psychology', 'Psychology', 'https://future.utoronto.ca/program/psychology', EN),
                           ('mathematics', 'Applied Mathematics', 'https://future.utoronto.ca/program/applied-mathematics', EN)],
 'university-of-british-columbia': [('psychology', 'Psychology (BA), Vancouver campus', 'https://you.ubc.ca/programs/psychology-vancouver-ba/', EN),
                                    ('mathematics', 'Mathematics (BSc), Vancouver campus', 'https://you.ubc.ca/programs/mathematics-vancouver-bsc/', EN)],
 'mcgill-university': [('economics', 'Economics Major Concentration (B.A.)', 'https://coursecatalogue.mcgill.ca/en/undergraduate/arts/programs/economics/economics-major-concentration-ba/', EN),
                       ('mathematics', 'Mathematics (Faculty of Science, B.Sc.)', 'https://www.mcgill.ca/undergraduate-admissions/program/mathematics-faculty-science', EN),
                       ('computer-science', 'Computer Science (Faculty of Science)', 'https://www.mcgill.ca/undergraduate-admissions/program/computer-science-faculty-science', EN)],
 'western-university': [('psychology', 'Major in Psychology (BA or BSc)', 'https://www.psychology.uwo.ca/undergraduate/programs_modules/major/index.html', EN),
                        ('computer-science', 'Computer Science', 'https://welcome.uwo.ca/what-can-i-study/undergraduate-programs/computer-science.html', EN)],
 'university-of-ottawa': [('economics', 'Honours in Economics', 'https://www.uottawa.ca/faculty-social-sciences/programs/undergraduate/course-sequences/honours-economics', BI),
                          ('psychology', 'Honours BA Psychology', 'https://catalogue.uottawa.ca/en/undergrad/honours-ba-psychology/', BI),
                          ('mathematics', 'Major in Mathematics', 'https://catalogue.uottawa.ca/en/undergrad/major-mathematics/', BI),
                          ('computer-science', 'Computer Science (BSc)', 'https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/computer-science', BI)],
 'university-of-calgary': [('economics', 'Economics (BA)', 'https://www.ucalgary.ca/future-students/undergraduate/explore-programs/economics', EN),
                           ('mathematics', 'Mathematics (BSc)', 'https://www.ucalgary.ca/future-students/undergraduate/explore-programs/mathematics', EN),
                           ('computer-science', 'Computer Science (BSc)', 'https://www.ucalgary.ca/future-students/undergraduate/explore-programs/computer-science', EN)],
 'queens-university': [('economics', 'Economics – Major (Arts) – Bachelor of Arts (Honours)', 'https://www.queensu.ca/academic-calendar/arts-science/schools-departments-programs/economics/economics-major-arts-ba-honours/', EN),
                       ('psychology', 'Psychology – Major (Arts) – Bachelor of Arts (Honours)', 'https://www.queensu.ca/academic-calendar/arts-science/schools-departments-programs/psychology/psychology-major-arts-ba-honours/', EN),
                       ('mathematics', 'Mathematics and Statistics (BA, BSc plans)', 'https://www.queensu.ca/academic-calendar/arts-science/schools-departments-programs/mathematics-statistics/', EN)],
 'dalhousie-university': [('economics', 'Economics (BSc) or (BA)', 'https://www.dal.ca/study/programs/undergraduate/economics-bsc.html', EN),
                          ('psychology', 'Psychology (BSc) or (BA)', 'https://www.dal.ca/study/programs/undergraduate/psychology-bsc-ba.html', EN),
                          ('mathematics', 'Mathematics (BSc) or (BA)', 'https://www.dal.ca/study/programs/undergraduate/mathematics-ba-bsc.html', EN)],
 'simon-fraser-university': [('economics', 'Economics (Bachelor of Arts or Bachelor of Science)', 'https://www.sfu.ca/students/admission/programs/a-z/e/economics.html', EN),
                             ('psychology', 'Psychology (Bachelor of Arts)', 'https://www.sfu.ca/students/admission/programs/a-z/p/psychology.html', EN),
                             ('mathematics', 'Mathematics (Bachelor of Science)', 'https://www.sfu.ca/students/admission/programs/a-z/m/mathematics.html', EN),
                             ('computer-science', 'Computing Science (Bachelor of Science or Bachelor of Arts)', 'https://www.sfu.ca/students/admission/programs/a-z/c/computing-science.html', EN)],
 'universite-laval': [('economics', 'Baccalauréat en économique', 'https://www.ulaval.ca/etudes/programmes/baccalaureat-en-economique', FR),
                      ('psychology', 'Baccalauréat en psychologie', 'https://www.ulaval.ca/etudes/programmes/baccalaureat-en-psychologie', FR),
                      ('mathematics', 'Baccalauréat en mathématiques', 'https://www.ulaval.ca/etudes/programmes/baccalaureat-en-mathematiques', FR),
                      ('computer-science', 'Baccalauréat en informatique', 'https://www.ulaval.ca/etudes/programmes/baccalaureat-en-informatique', FR)],
 'university-of-saskatchewan': [('economics', 'Economics (Bachelor of Arts)', 'https://admissions.usask.ca/economics.php', EN),
                                ('psychology', 'Psychology (Bachelor of Arts or Bachelor of Science)', 'https://admissions.usask.ca/psychology.php', EN),
                                ('mathematics', 'Mathematics (Bachelor of Science)', 'https://admissions.usask.ca/mathematics.php', EN)],
 'university-of-manitoba': [('economics', 'Economics (BA)', 'https://umanitoba.ca/explore/programs-of-study/economics-ba', EN),
                            ('psychology', 'Psychology (BA)', 'https://umanitoba.ca/explore/programs-of-study/psychology-ba', EN),
                            ('mathematics', 'Mathematics (BSc)', 'https://umanitoba.ca/explore/programs-of-study/mathematics-bsc', EN),
                            ('computer-science', 'Computer Science (BCSc) (BSc)', 'https://umanitoba.ca/explore/programs-of-study/computer-science-bsc', EN)],
 'university-of-guelph': [('psychology', 'Bachelor of Arts (B.A.) Psychology Major', 'https://www.uoguelph.ca/psychology/undergraduate/programs/bachelor-arts-ba-psychology-majorminor', EN)],
 'carleton-university': [('psychology', 'Psychology (BA)', 'https://admissions.carleton.ca/programs/psychology-ba/', EN),
                         ('mathematics', 'Mathematics (BMath)', 'https://admissions.carleton.ca/programs/mathematics/', EN)],
 'memorial-university-of-newfoundland': [('economics', 'Economics (BA or B.Sc.)', 'https://www.mun.ca/undergrad/programs/humanities-and-social-sciences/economics/', EN),
                                         ('psychology', 'Psychology (BA or B.Sc.)', 'https://www.mun.ca/undergrad/programs/science/psychology/', EN),
                                         ('mathematics', 'Mathematics (BA or B.Sc.)', 'https://www.mun.ca/undergrad/programs/science/mathematics/', EN),
                                         ('computer-science', 'Computer Science (BA or B.Sc.)', 'https://www.mun.ca/undergrad/programs/science/computer-science/', EN)],
 'university-of-windsor': [('economics', 'Economics (BA, BSc)', 'https://future.uwindsor.ca/economics', EN),
                           ('psychology', 'Psychology (BA)', 'https://future.uwindsor.ca/psychology', EN),
                           ('mathematics', 'Mathematics & Statistics (BMath)', 'https://future.uwindsor.ca/mathematics-statistics', EN)],
 'toronto-metropolitan-university': [('economics', 'Economics and Finance – BA (Hons)', 'https://www.torontomu.ca/programs/undergraduate/economics-finance/', EN),
                                     ('psychology', 'Psychology – BA (Hons)', 'https://www.torontomu.ca/programs/undergraduate/psychology/', EN),
                                     ('mathematics', 'Mathematics and Its Applications – BSc (Hons)', 'https://www.torontomu.ca/programs/undergraduate/mathematics-applications/', EN),
                                     ('computer-science', 'Computer Science – BSc (Hons)', 'https://www.torontomu.ca/programs/undergraduate/computer-science/', EN)],
 'bishops-university': [('psychology', 'Psychology (Bachelor of Arts)', 'https://www.ubishops.ca/program/psychology/', EN),
                        ('mathematics', 'Mathematics (Bachelor of Arts)', 'https://www.ubishops.ca/program/mathematics/', EN),
                        ('computer-science', 'Computer Science (Bachelor of Science)', 'https://www.ubishops.ca/program/computer-science/', EN)],
 'university-of-northern-british-columbia': [('economics', 'Bachelor of Arts in Economics', 'https://www.unbc.ca/economics', EN),
                                             ('psychology', 'Psychology (BSc)', 'https://www.unbc.ca/psychology', EN),
                                             ('computer-science', 'Computer Science (Bachelor of Science)', 'https://www.unbc.ca/computer-science', EN)],
 'universite-de-montreal': [('psychology', 'Baccalauréat en psychologie (campus Montréal)', 'https://admission.umontreal.ca/programmes/baccalaureat-en-psychologie/', FR),
                            ('mathematics', 'Baccalauréat en mathématiques', 'https://admission.umontreal.ca/programmes/baccalaureat-en-mathematiques/', FR)],
 'trent-university': [('mathematics', 'Mathematics (Bachelor of Science)', 'https://www.trentu.ca/futurestudents/degree/mathematics', EN)],
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
