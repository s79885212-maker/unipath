# -*- coding: utf-8 -*-
"""v112 — fields of study of the 17 records whose list of majors had not been read.

For every broad field one named undergraduate programme is recorded, exactly as
the official list prints it, with the page it was read on and the day. A field
gets a tag only when such a programme exists; a minor, a pre-professional track,
a dual-degree route with another institution, an online-only programme and a
graduate programme are not counted. Admission rules of individual programmes
(auditions, direct-admission limits) were not checked.

The lists were read on 13 October 2026. Where a list is drawn by a script, it
was read in an ordinary browser window; no check was passed or bypassed."""
import us3_edit
from us200_std import L, flush

V = '2026-10-13'
UC = 'https://webapps2.uc.edu/ecurriculum/degreeprograms/program/detail/'
WVU = 'https://catalog.wvu.edu/undergraduate/'

# id: (list URL, note or None, status or None, {tag: name | (name, url)})
P = {
 'indiana-university-indianapolis': ('https://indianapolis.iu.edu/academics/degrees-majors/?program_type=2',
   L('The official list has 136 bachelor’s degrees; online-only programmes are not counted here. Purdue University in Indianapolis is a separate institution and has no record here.',
     'В официальном списке 136 программ бакалавриата; программы, идущие только онлайн, здесь не учитываются. Purdue University in Indianapolis — отдельный вуз, записи о нём здесь нет.'), None, {
   'business': 'Accounting — Bachelor of Science (Kelley School of Business)', 'economics': 'Economics — Bachelor of Arts',
   'computer-science': 'Computer Science — Bachelor of Science', 'engineering': 'Biomedical Engineering — Bachelor of Science',
   'psychology': 'Psychology — Bachelor of Science', 'biology': 'Biology — Bachelor of Science', 'mathematics': 'Mathematics — Bachelor of Science',
   'social-sciences': 'Political Science — Bachelor of Arts', 'humanities': 'History — Bachelor of Arts',
   'arts': 'Painting — Bachelor of Fine Arts (Herron School of Art and Design)', 'law': 'Law in Liberal Arts — Bachelor of Arts',
   'medicine': 'Nursing (Traditional BSN) — Bachelor of Science', 'education': 'Elementary Education — Bachelor of Science'}),
 'university-of-cincinnati': ('https://webapps2.uc.edu/ecurriculum/degreeprograms/list',
   L('The university’s programme list has 223 bachelor’s entries across its campuses. English minimums differ by college.', 'В списке программ университета 223 записи бакалавриата по всем кампусам. Минимумы по английскому различаются по колледжам.'), None, {
   'business': ('Accounting BBA', UC + '22BAC-ACCT-BBA'), 'economics': ('Economics BA', UC + '22BAC-ECON-BA'),
   'computer-science': ('Computer Science BSCS', UC + '20BC-CS-BSCS'), 'engineering': ('Mechanical Engineering BSME', UC + '20BC-ME-BSME'),
   'psychology': ('Psychology BS', UC + '15BAC-PSYC-BS'), 'biology': ('Biological Sciences BS', UC + '15BAC-BIOL-BS'),
   'mathematics': ('Statistics BS', UC + '15BAC-STAT-BS'), 'social-sciences': ('Political Science BA', UC + '15BAC-POL-BA'),
   'humanities': ('History BA', UC + '15BAC-HIST-BA'), 'arts': ('Music BA', UC + '16BAC-MUSC-BA'),
   'medicine': ('Bachelor of Science in Nursing BSN', UC + '29BAC-NURS-BSN'), 'education': ('Elementary Education BSED', UC + '18BAC-ELEM-BSED')}),
 'agnes-scott-college': ('https://www.agnesscott.edu/academics/majors-minors/index.html',
   L('Computer science, engineering and nursing appear in the list only as dual-degree routes with partner institutions, so they are not counted as fields of Agnes Scott.',
     'Информатика, инженерия и сестринское дело есть в списке только как программы двойного диплома с партнёрскими вузами, поэтому как направления Agnes Scott они не учитываются.'), None, {
   'business': 'Business Management', 'economics': 'Economics', 'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics',
   'social-sciences': 'Political Science', 'humanities': 'History', 'medicine': 'Public Health'}),
 'pitzer-college': ('https://www.pitzer.edu/academics/programs?type%5B1%5D=1',
   L('Management Engineering is a joint programme with other institutions and is not counted as a field. Pitzer students may also take courses at the other Claremont Colleges.',
     'Management Engineering — совместная программа с другими вузами и как направление не учитывается. Студенты Pitzer могут также брать курсы в других колледжах Claremont.'), None, {
   'economics': 'Economics', 'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics',
   'social-sciences': 'Political Science', 'humanities': 'English and World Literature', 'arts': 'Art'}),
 'temple-university': ('https://bulletin.temple.edu/academic-programs/', None, None, {
   'business': 'Accounting — BBA', 'economics': 'Economics — BA', 'computer-science': 'Computer Science — BS', 'engineering': 'Mechanical Engineering — BSME',
   'psychology': 'Psychology — BA', 'biology': 'Biology — BS', 'mathematics': 'Mathematics — BS', 'social-sciences': 'Political Science — BA',
   'humanities': 'History — BA', 'arts': 'Dance — BFA', 'law': 'Legal Studies — BBA', 'medicine': 'Nursing — BSN',
   'education': 'Secondary Education/English Education — BSEd'}),
 'university-of-arizona': ('https://www.arizona.edu/degree-search/majors',
   L('Only part of the list was read: the university’s degree search is drawn by a script and did not load on this check, so the fields below are the ones confirmed on separate official programme pages. Other fields may well exist.',
     'Список прочитан лишь частично: поиск программ университета строится скриптом и при этой проверке не загрузился, поэтому ниже — только направления, подтверждённые на отдельных официальных страницах программ. Другие направления вполне могут быть.'), 'partial', {
   'computer-science': ('Bachelor of Science in Computer Science', 'https://cs.arizona.edu/undergraduate/bachelor-science'),
   'social-sciences': ('Political Science (major)', 'https://www.arizona.edu/degree-search/majors/political-science'),
   'psychology': ('Psychological Science (major)', 'https://www.arizona.edu/degree-search/majors/psychological-science'),
   'arts': ('Dance (major)', 'https://www.arizona.edu/degree-search/majors/dance')}),
 'unc-chapel-hill': ('https://catalog.unc.edu/undergraduate/programs-study/', None, None, {
   'business': 'Business Administration Major, B.S.B.A.', 'economics': 'Economics Major, B.A.', 'computer-science': 'Computer Science Major, B.S.',
   'engineering': 'Biomedical Engineering Major, B.S.', 'psychology': 'Psychology Major, B.A.', 'biology': 'Biology Major, B.S.',
   'mathematics': 'Mathematics Major, B.S.', 'social-sciences': 'Political Science Major, B.A.', 'humanities': 'History Major, B.A.',
   'arts': 'Music Major, B.A.', 'medicine': 'Nursing Major, B.S.N.', 'education': 'Elementary Education Major, B.A.Ed.'}),
 'university-of-denver': ('https://bulletin.du.edu/undergraduate/majorsminorscoursedescriptions/',
   L('The undergraduate bulletin lists majors and minors by department; where it prints no degree name, the department entry is shown.', 'Бюллетень бакалавриата перечисляет основные и дополнительные специальности по кафедрам; где название степени не напечатано, показана запись кафедры.'), None, {
   'business': 'Bachelor of Science in Accounting (BSAcc)', 'economics': 'Economics', 'computer-science': 'Computer Science',
   'engineering': 'Bachelor of Science in Computer Engineering (BSCpE)', 'psychology': 'Psychology', 'biology': 'Biological Sciences',
   'mathematics': 'Mathematics', 'social-sciences': 'Political Science', 'humanities': 'History', 'arts': 'Bachelor of Music (BM)'}),
 'university-of-maryland': ('https://academiccatalog.umd.edu/undergraduate/colleges-schools/', None, None, {
   'business': 'Finance Major', 'economics': 'Economics Major', 'computer-science': 'Computer Science Major', 'engineering': 'Electrical Engineering Major',
   'psychology': 'Psychology Major', 'biology': 'Biological Sciences Major', 'mathematics': 'Mathematics Major',
   'social-sciences': 'Government and Politics Major', 'humanities': 'History Major', 'arts': 'Music Major',
   'medicine': 'Public Health Science Major', 'education': 'Elementary Education Major'}),
 'university-of-san-diego': ('https://www.sandiego.edu/academics/majors-and-minors.php',
   L('Teaching credentials appear in the list as emphases and credentials, not as a major, so education is not counted as a field.', 'Педагогические квалификации стоят в списке как специализации и сертификаты, а не как основная специальность, поэтому образование как направление не учитывается.'), None, {
   'business': 'Business Administration — BBA', 'economics': 'Economics', 'computer-science': 'Computer Science', 'engineering': 'Mechanical Engineering',
   'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics — BA', 'social-sciences': 'International Relations',
   'humanities': 'History', 'arts': 'Music'}),
 'hofstra-university': ('https://www.hofstra.edu/academics/academic-offerings/?programs=undergraduate-programs', None, None, {
   'business': 'BBA in Accounting', 'economics': 'BA in Economics', 'computer-science': 'BS in Computer Science', 'engineering': 'BS in Civil Engineering',
   'psychology': 'Psychology (BA)', 'biology': 'BS in Biology', 'mathematics': 'BS in Financial and Actuarial Mathematics',
   'social-sciences': 'BA in Political Science', 'humanities': 'BA in Art History', 'arts': 'BA in Art', 'medicine': 'BS in Nursing',
   'education': 'BSEd in Dance Education'}),
 'rochester-institute-of-technology': ('https://www.rit.edu/study/bachelors', None, None, {
   'business': 'Accounting BS', 'economics': 'Economics BS', 'computer-science': ('Computer Science BS', 'https://www.rit.edu/study/computer-science-bs'),
   'engineering': 'Computer Engineering BS', 'psychology': 'Psychology BS', 'biology': 'Biology BS', 'mathematics': 'Applied Mathematics BS',
   'social-sciences': 'Political Science BS', 'humanities': 'History BS', 'arts': 'Film and Animation BFA', 'medicine': 'Global Public Health BS'}),
 'gonzaga-university': ('https://www.gonzaga.edu/academics/undergraduate', None, None, {
   'business': 'Accounting', 'economics': 'Economics BA', 'computer-science': 'Computer Science BS', 'engineering': 'Engineering — Civil',
   'psychology': 'Psychology', 'biology': 'Biology', 'mathematics': 'Mathematics', 'social-sciences': 'Political Science', 'humanities': 'History',
   'arts': 'Dance', 'medicine': 'Nursing', 'education': 'Special Education'}),
 'cornell-college': ('https://catalog.cornellcollege.edu/content.php?catoid=17&navoid=433',
   L('From “Programs of Instruction” in the 2026–2027 Undergraduate Catalogue.', 'Из раздела «Programs of Instruction» каталога бакалавриата на 2026–2027.'), None, {
   'business': 'Business Management, B.A.', 'economics': 'Economics, B.A.', 'computer-science': 'Computer Science, B.A.',
   'engineering': 'Bachelor of Science in Engineering, B.S.E.', 'psychology': 'Psychological Sciences, B.A.', 'biology': 'Biology, B.A.',
   'mathematics': 'Mathematics, B.A.', 'social-sciences': 'Politics, B.A.', 'humanities': 'History, B.A.', 'arts': 'Studio Art, B.A.',
   'medicine': 'Community and Public Health, B.A.', 'education': 'Elementary Education, B.A.'}),
 'american-university': ('https://catalog.american.edu/content.php?catoid=23&navoid=4419',
   L('From “Major Program (UG)” in the American University Catalog 2026–2027.', 'Из раздела «Major Program (UG)» каталога American University на 2026–2027.'), None, {
   'business': 'Business Administration (BSBA)', 'economics': 'Economics (BA)', 'computer-science': 'Computer Science (BS)', 'psychology': 'Psychology (BA)',
   'biology': 'Biology (BS)', 'mathematics': 'Mathematics (BS)', 'social-sciences': 'Political Science (BA)', 'humanities': 'History (BA)',
   'arts': 'Studio Art (BA)', 'law': 'Legal Studies (BA)', 'medicine': 'Public Health (BS)', 'education': 'Elementary Education (BA)'}),
 'university-of-oregon': ('https://catalog.uoregon.edu/ug-programs/',
   L('From the list of undergraduate programmes in the university catalogue, which prints the degrees of each major.', 'Из списка программ бакалавриата в каталоге университета, где у каждой специальности напечатаны степени.'), None, {
   'business': 'Business Administration: BA, BS', 'economics': 'Economics: BA, BS', 'computer-science': 'Computer Science: BA, BS',
   'psychology': 'Psychology: BA, BS', 'biology': 'Biology: BA, BS', 'mathematics': 'Mathematics: BA, BS',
   'social-sciences': 'Political Science: BA, BS', 'humanities': 'History: BA, BS', 'arts': 'Music: BA, BS', 'education': 'Educational Foundations: BA, BS'}),
 'west-virginia-university': (WVU,
   L('From the college pages of the undergraduate catalogue (Morgantown campus).', 'Со страниц колледжей в каталоге бакалавриата (кампус в Моргантауне).'), None, {
   'business': ('Bachelor of Science in Business Administration', WVU + 'collegeofbusinessandeconomics/'),
   'economics': ('Bachelor of Arts — Economics', WVU + 'collegeofbusinessandeconomics/'),
   'computer-science': ('Bachelor of Science in Computer Science (B.S.C.S.)', WVU + 'collegeofengineeringandmineralresources/'),
   'engineering': ('Bachelor of Science in Aerospace Engineering (B.S.A.E.)', WVU + 'collegeofengineeringandmineralresources/'),
   'psychology': ('Psychology', WVU + 'eberlycollegeofartsandsciences/'), 'biology': ('Biology', WVU + 'eberlycollegeofartsandsciences/'),
   'mathematics': ('Mathematics', WVU + 'eberlycollegeofartsandsciences/'), 'social-sciences': ('Political Science', WVU + 'eberlycollegeofartsandsciences/'),
   'humanities': ('History', WVU + 'eberlycollegeofartsandsciences/'), 'arts': ('Music — Bachelor of Arts', WVU + 'collegeofcreativeartsandmedia/'),
   'medicine': ('Bachelor of Science in Nursing', WVU + 'schoolofnursing/'),
   'education': ('Bachelor of Arts — Elementary Education', WVU + 'collegeofappliedhumansciences/')}),
}
ORDER = ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'law', 'medicine', 'education']

head, recs = us3_edit.load()
D = us3_edit.by_id(recs)
assert len(P) == 17
for uid, (url, note, status, ev) in P.items():
    r = D[uid]
    tags = [t for t in ORDER if t in ev]
    assert len(tags) == len(ev), uid
    r['programs'] = tags
    r['englishTaughtPrograms'] = list(tags)      # the language of instruction of these institutions is English
    r['programsBasis'] = 'evidence'
    r['programNote'] = note
    if status: r['programsStatus'] = status
    else: r.pop('programsStatus', None)
    r['programEvidence'] = {}
    for t in tags:
        name, u = ev[t] if isinstance(ev[t], tuple) else (ev[t], url)
        r['programEvidence'][t] = {'program': name, 'level': 'bachelor', 'language': 'English', 'url': u, 'checked': V}
    r['links']['programs'] = url
    ver = r['verification']
    drop = ('list of majors', 'full list of majors')
    ver['unconfirmed'] = [x for x in ver['unconfirmed'] if x not in drop]
    if status == 'partial': ver['unconfirmed'].append(L('full list of majors', 'полный список специальностей'))
    elif 'list of majors' not in ver['checked']: ver['checked'].append(L('list of majors', 'список программ'))
    lab = L('%s — official list of undergraduate programmes' % r['shortName'], '%s — официальный список программ бакалавриата' % r['shortName'])
    if not any(s['url'] == url for s in r['sources']): r['sources'].append({'label': lab, 'url': url})
us3_edit.save(head, recs)
print('fields written for %d records; without tags now: %s' % (len(P), [r['id'] for r in recs if not r['programs']]))

for en, ru in [
 ('Each area below is backed by one named undergraduate programme read in the institution’s official list — see “Named programmes” under the areas. An area is a group of majors; a minor, a pre-professional track, an online-only programme and a dual-degree route with another institution are not counted. Admission rules of individual programmes were not checked.',
  'За каждой областью ниже стоит одна названная программа бакалавриата, прочитанная в официальном списке вуза, — смотрите «Названные программы» под областями. Область — это группа специальностей; дополнительная специальность, предпрофессиональный трек, программа только онлайн и двойной диплом с другим вузом не учитываются. Правила приёма на отдельные программы не проверялись.'),
 ('Named programmes behind these areas', 'Названные программы, стоящие за этими областями'),
 ('bachelor’s programme, taught in English', 'программа бакалавриата, обучение на английском'),
 ('Fields of study: only part of the list was read.', 'Направления: прочитана только часть списка.'),
 ('The areas shown are confirmed; an area that is missing here may still exist at this institution.', 'Показанные области подтверждены; области, которой здесь нет, в этом вузе всё же может быть.'),
 ('List only partly read', 'Список прочитан частично'),
]: L(en, ru)
flush()
