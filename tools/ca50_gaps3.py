# -*- coding: utf-8 -*-
"""Gaps, round 3 (read 20 October 2026): what 11 Canadian universities ask of applicants from
Uzbekistan, from their country pages. Where two official pages differ (Laval in French and
in English), both are shown. Run once: python3 tools/ca50_gaps3.py"""
import ca50_gaps as G
from ca50_gaps import L

head, recs, tail = G.load()
U = {r['id']: r for r in recs}
UZ = 'requirements for Uzbekistan'


def uz(uid, text, label, url, extra=None):
    r = U[uid]
    r['academics']['internationalQualifications'] = G.plain(text)
    G.source(r, *G.plain((label, url)))
    if extra: G.source(r, *G.plain(extra))
    G.checked(r, UZ)


UDM = 'https://admission.umontreal.ca/admission/preparation-de-la-demande/verifier-les-conditions-dadmissibilite/par-pays-ou-diplome/equivalence-pays.html?tx_lboudemprogrammes_equivalencespays%5Baction%5D=show&tx_lboudemprogrammes_equivalencespays%5Bcontroller%5D=PaysEquivalence&tx_lboudemprogrammes_equivalencespays%5Bpays%5D=146&cHash=6a3234dd0be589374a08aa4d7413d72c'
uz('universite-de-montreal',
   L('Uzbekistan: O‘rta Ma’lumot To‘g‘risida Shahodatnoma (pre-university certificate) and one successful year of university study — or UdeM’s preparatory year, the first year of a four-year bachelor’s or ACCÈS-FAC (some programmes). Proof of French is also required.',
     'Узбекистан: O‘rta Ma’lumot To‘g‘risida Shahodatnoma (доуниверситетский аттестат) и один успешно пройденный год в университете — или подготовительный год UdeM, первый год четырёхлетнего бакалавриата либо ACCÈS-FAC (для некоторых программ). Также нужно подтвердить французский.'),
   L('UdeM — general admission conditions for Uzbekistan', 'UdeM — общие условия поступления для Узбекистана'), UDM)
uz('university-of-waterloo',
   L('Uzbekistan: Certificate of Complete Secondary Education with competitive senior-level grades (for required courses, email myapplication@uwaterloo.ca). An English test is needed unless the last four years of full-time study were in English.',
     'Узбекистан: аттестат о полном среднем образовании с конкурсными оценками выпускных классов (об обязательных предметах — писать на myapplication@uwaterloo.ca). Тест по английскому нужен, если последние четыре года очного обучения шли не на английском.'),
   L('Waterloo — Computer Science requirements for high school students from Uzbekistan', 'Waterloo — требования Computer Science для выпускников школ Узбекистана'),
   'https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/international/uzbekistan')
uz('university-of-calgary',
   L('Uzbekistan: Attestat o Srednem (Polnom) Obshchem Obrazovanii; applicants with less than 12 units of post-secondary study are high school applicants, and the average is competitive. Fall 2027 applications: 15 August 2026 to 1 April 2027.',
     'Узбекистан: аттестат о среднем (полном) общем образовании; абитуриенты, у которых меньше 12 единиц вузовских курсов, считаются выпускниками школ, средний балл конкурсный. Заявки на осень 2027 — с 15 августа 2026 по 1 апреля 2027.'),
   L('UCalgary — admission requirements (Uzbekistan, Computer Science)', 'UCalgary — требования к поступлению (Узбекистан, Computer Science)'),
   'https://www.ucalgary.ca/future-students/undergraduate/admissions/requirements?field_ugrad_student_types=1335&field_ugrad_education_systems=1836&field_ugrad_reqs_programs=1902')
LVF = 'https://www.ulaval.ca/experience-ulaval/candidats-de-linternational/equivalence-des-diplomes'
LVE = 'https://www.ulaval.ca/en/ulaval-experience/international-applicants/academic-equivalence'
uz('universite-laval',
   L('Uzbekistan: O‘rta Ma’lumot To‘g‘risida Shahodatnoma (11 years of schooling) plus post-secondary study — the official pages differ: the French page asks for 1 successful year of higher education, the English page for 2 years (with 1 year, a 30-credit preparatory year is possible for programmes without limited enrolment). Confirm with the Registrar.',
     'Узбекистан: O‘rta Ma’lumot To‘g‘risida Shahodatnoma (11 лет обучения) и учёба после школы — официальные страницы расходятся: на французской нужен 1 успешный год высшего образования, на английской — 2 года (при одном годе возможен подготовительный год на 30 кредитов для программ без ограничения набора). Уточните в Bureau du registraire.'),
   L('ULaval — équivalence des diplômes par pays (French)', 'ULaval — эквивалентность дипломов по странам (на французском)'), LVF,
   (L('ULaval — academic equivalence (English)', 'ULaval — эквивалентность дипломов (на английском)'), LVE))
uz('trent-university',
   L('Uzbekistan: high school transcript for grades 10, 11 and 12 with a minimum of 4/5.', 'Узбекистан: школьный табель за 10, 11 и 12 классы, минимум 4/5.'),
   L('Trent — admission requirements by country', 'Trent — требования к поступлению по странам'), 'https://www.trentu.ca/futurestudents/admissions/admissions-requirements-country')
uz('lakehead-university',
   L('Uzbekistan: Shahodatnoma (Certificate of General Secondary Education); the general international minimum is the equivalent of a 70% average plus programme prerequisites.', 'Узбекистан: Shahodatnoma (аттестат об общем среднем образовании); общий минимум для иностранцев — эквивалент среднего балла 70% и предметы для программы.'),
   L('Lakehead — admission requirements by country', 'Lakehead — требования к поступлению по странам'), 'https://www.lakeheadu.ca/studentcentral/applying/general-admission-requirements/international-student/admission-requirements-by-country')
uz('ontario-tech-university',
   L('Uzbekistan: Akademik Litsey Sertificati/diplomi (Diploma of Academic Lyceum), with notarized English translations of documents in other languages.', 'Узбекистан: Akademik Litsey Sertificati/diplomi (диплом академического лицея); документы на других языках — с нотариально заверенным переводом на английский.'),
   L('Ontario Tech — international admission requirements', 'Ontario Tech — требования к поступлению для иностранцев'), 'https://admissions.ontariotechu.ca/applicant-information/international-admission-requirements.php')
uz('university-of-victoria',
   L('Uzbekistan: Attestat o srednem obrazovanii (at Grade 11).', 'Узбекистан: аттестат о среднем образовании (после 11 класса).'),
   L('UVic — minimum admission requirements for international students', 'UVic — минимальные требования к поступлению для иностранцев'), 'https://www.uvic.ca/undergraduate/admissions/how-to-apply/minimum-admission-requirements-for-international-students/index.php')
uz('laurentian-university',
   L('Uzbekistan: Certificate of Completed Secondary Education with a grade of 4/5.', 'Узбекистан: аттестат о полном среднем образовании с оценкой 4/5.'),
   L('Laurentian — international undergraduate admissions by country', 'Laurentian — поступление иностранцев в бакалавриат по странам'), 'https://laurentian.ca/academics/admissions/international/undergraduate-admissions')
uz('mount-royal-university',
   L('Uzbekistan: Certificate of Completed Upper Secondary Education showing all exams taken and grades obtained.', 'Узбекистан: аттестат о полном среднем образовании со всеми сданными экзаменами и оценками.'),
   L('Mount Royal — international credentials', 'Mount Royal — иностранные документы об образовании'), 'https://www.mtroyal.ca/Admission/InternationalCredentials/')
uz('university-of-winnipeg',
   L('Uzbekistan: Certificate of Secondary Education (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) with a secondary school grade of 4; for transfer grades contact intladmissions@uwinnipeg.ca.', 'Узбекистан: аттестат о среднем образовании (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) с оценкой 4; о переводе из вуза — писать на intladmissions@uwinnipeg.ca.'),
   L('UWinnipeg — admission requirements by country (U)', 'UWinnipeg — требования к поступлению по странам (U)'), 'https://www.uwinnipeg.ca/future-student/international/countries-a-to-z/-u-.html')

G.save(head, recs, tail)
G.flush()
print('round 3 written')
