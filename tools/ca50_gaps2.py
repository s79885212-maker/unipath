# -*- coding: utf-8 -*-
"""Gaps, round 2 (read 20 October 2026): SAT/ACT policy of 19 Canadian universities from their
pages for US-curriculum applicants. Where a page says only that the tests are not required,
the record says exactly that (label), not "test-optional". Run once: python3 tools/ca50_gaps2.py"""
import ca50_gaps as G
from ca50_gaps import L

D = '2026-10-20'
head, recs, tail = G.load()
U = {r['id']: r for r in recs}
NOTREQ = L('SAT/ACT not required', 'SAT/ACT не требуются')


def sat(uid, policy, note, url, label=None, extra=None):
    r = U[uid]
    s = {'policy': policy, 'note': note, 'source': url, 'verified': D}
    if label: s['label'] = label
    r['academics']['sat'] = G.plain(s)
    G.source(r, G.plain(L('%s — admission requirements for US-curriculum applicants' % r['shortName'], '%s — требования к поступлению для американской школьной программы' % r['shortName'])), url)
    if extra: G.source(r, *G.plain(extra))
    G.checked(r, 'test policy')


UBCV = 'https://vancouver.calendar.ubc.ca/admissions/applicants-following-american-secondary-school-curriculum'
UBCO = 'https://okanagan.calendar.ubc.ca/admissions/applicants-following-american-secondary-school-curriculum'
sat('university-of-british-columbia', 'conditional',
    L('Vancouver campus: submitting SAT or ACT scores is optional, and applicants are not at a disadvantage without them. Okanagan campus: applicants on a US curriculum present the SAT or the ACT with Writing (exemptions where the tests are unavailable).',
      'Кампус Ванкувер: SAT или ACT присылать по желанию, без них абитуриент не в худшем положении. Кампус Оканаган: абитуриенты с американской школьной программой предъявляют SAT или ACT с Writing (исключения — где тесты недоступны).'),
    UBCV, L('SAT/ACT optional at UBC Vancouver; required at UBC Okanagan for a US curriculum', 'SAT/ACT: в Ванкувере по желанию; в Оканагане — обязательно для американской программы'),
    (L('UBC Okanagan calendar — applicants following the American curriculum', 'Календарь UBC Okanagan — абитуриенты с американской программой'), UBCO))
sat('university-of-waterloo', 'optional',
    L('The programme pages for American-system applicants read (Computer Science, Mechanical Engineering, Mathematics) say SAT and ACT scores are not required. AP scores are encouraged; Computer Science needs AP Calculus results from College Board.',
      'На прочитанных страницах программ для американской системы (Computer Science, Mechanical Engineering, Mathematics) сказано, что SAT и ACT не требуются. Результаты AP приветствуются; для Computer Science нужны результаты AP Calculus от College Board.'),
    'https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/international-system/american-system', NOTREQ)
sat('university-of-calgary', 'optional',
    L('Applicants from an accredited American-based curriculum are considered on the faculty’s course requirements and proof of graduation. AP exams or SAT Subject Tests already taken can stand in for missing required courses.',
      'Абитуриентов с аккредитованной американской программой рассматривают по требованиям факультета к предметам и по документу об окончании школы. Сданные AP или SAT Subject Tests могут заменить недостающие обязательные предметы.'),
    'https://calendar.ucalgary.ca/pages/b7751b7b2ff94754a035c2292ae59d4f', NOTREQ)
sat('queens-university', 'optional',
    L('Queen’s is test-optional: SAT/ACT results may be submitted but are not required (College Board code 0949, ACT 5236).', 'Queen’s — test-optional: результаты SAT/ACT можно прислать, но они не обязательны (код College Board 0949, ACT 5236).'),
    'https://www.queensu.ca/admission/applying/admission-requirements/united-states')
sat('dalhousie-university', 'optional',
    L('Dalhousie is test-optional; without SAT or ACT results applicants are assessed on course grades. Home-schooled applicants must submit them. Submitted scores: SAT at least 1100 or ACT 23 with no part below 20.', 'Dalhousie — test-optional; без SAT или ACT абитуриента оценивают по оценкам. Обучавшиеся дома обязаны их прислать. Если результаты присланы: SAT не ниже 1100 или ACT 23, ни одной части ниже 20.'),
    'https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/international-applicants/us-applicants.html')
sat('university-of-manitoba', 'not-used',
    L('“There are no SAT or ACT requirements for admission to UM”; admission puts the emphasis on senior-year grades.', '«Для поступления в UM нет требований SAT или ACT»; основное внимание — оценкам выпускного года.'),
    'https://umanitoba.ca/explore/student-experience/applying-united-states')
sat('carleton-university', 'optional',
    L('US high school applicants are encouraged to submit SAT or ACT scores, grading information and class rank to support the application; the minimum is a B- average.', 'Выпускникам американских школ рекомендуют прислать SAT или ACT, шкалу оценок и место в рейтинге класса; минимум — средний балл B-.'),
    'https://admissions.carleton.ca/applicant-type/united-states-high-school-students/')
sat('university-of-windsor', 'optional',
    L('Graduates of accredited high schools normally qualify with a cumulative GPA of 3.0; applicants are encouraged to submit SAT or ACT scores (SAT code 0904, ACT 7053).', 'Выпускники аккредитованных школ обычно проходят при среднем балле 3.0; SAT или ACT рекомендуется прислать (код SAT 0904, ACT 7053).'),
    'https://www.uwindsor.ca/studentrecruitment/415/admissions-information-us-students')
sat('ontario-tech-university', 'optional',
    L('Grades are the primary basis of admission. Applicants from US schools present SAT or ACT scores if written (not more than five years old); scores do not disadvantage an applicant.', 'Главное основание для поступления — оценки. Абитуриенты из американских школ присылают SAT или ACT, если сдавали (не старше пяти лет); результаты не ухудшают шансы.'),
    'https://ontariotechu.ca/policy/policy-library/policies/academic/undergraduate-and-professional-admissions-procedures.php',
    L('SAT/ACT not required; send scores if written', 'SAT/ACT не требуются; если сдавали — прислать'))
sat('trent-university', 'accepted',
    L('Minimum B average (GPA 3.0), 70% in Grade 12 English and four other senior subjects; “SAT or ACT recommended. Tests are not mandatory for students following US curriculum outside of the USA.”', 'Минимум средний балл B (GPA 3.0), 70% по английскому 12 класса и ещё четыре предмета выпускного уровня; «SAT или ACT рекомендуются. Для изучающих американскую программу за пределами США тесты не обязательны».'),
    'https://www.trentu.ca/futurestudents/admissions/admission-requirements/united-states-secondary-school',
    L('SAT/ACT recommended; not mandatory outside the USA', 'SAT/ACT рекомендуются; вне США не обязательны'))
sat('lakehead-university', 'optional',
    L('US applicants need a 70% admission average over four senior academic courses and the programme prerequisites; “Applicants are not required to complete an ACT or SAT.”', 'Абитуриентам из США нужен средний балл 70% по четырём академическим предметам выпускного уровня и предметы для программы; «сдавать ACT или SAT не требуется».'),
    'https://www.lakeheadu.ca/studentcentral/applying/general-admission-requirements/international-student/admission-requirements-by-country', NOTREQ)
sat('st-francis-xavier-university', 'optional',
    L('For the United States: “SAT and ACT scores are NOT required for admission” to any of the programmes listed.', 'Для США: «SAT и ACT НЕ требуются для поступления» ни на одну из перечисленных программ.'),
    'https://www.stfx.ca/applications-admissions/admissions-information/admission-requirements/high-school', NOTREQ)
sat('mount-allison-university', 'optional',
    L('Students on an American curriculum are considered on university-preparatory courses and graduation; SAT results are not required, but students are encouraged to submit them.', 'Учеников с американской программой рассматривают по подготовительным к университету предметам и окончанию школы; SAT не требуется, но его рекомендуют прислать.'),
    'https://mta.ca/academic_calendar/_3.html')
sat('university-of-lethbridge', 'optional',
    L('US applicants are admitted on a high school diploma with a converted average of 65% over all Grade 12 courses. Acceptable ACT or SAT scores are a separate route to general admission (programme requirements still apply).', 'Абитуриентов из США принимают по аттестату со средним баллом 65% по всем предметам 12 класса. Достаточные ACT или SAT — отдельный путь к общему поступлению (требования программы всё равно действуют).'),
    'https://www.ulethbridge.ca/ross/admissions/undergrad/international/intreq_table',
    L('SAT/ACT not required; scores are an alternative route', 'SAT/ACT не требуются; результаты — альтернативный путь'),
    (L('ULethbridge — standardized test admission', 'ULethbridge — поступление по стандартизированным тестам'), 'https://www.ulethbridge.ca/ross/admissions/undergrad/standardized-test'))
sat('university-of-winnipeg', 'optional',
    L('Grade 12 with an average of C+ or better in at least five academic subjects. “SAT/ACT scores are not required for current high school students; however, homeschooled students will need to provide SAT/ACT scores.”', '12 класс со средним баллом не ниже C+ минимум по пяти академическим предметам. «SAT/ACT не требуются от нынешних школьников; обучавшиеся дома должны предоставить SAT/ACT».'),
    'https://www.uwinnipeg.ca/future-student/minnesota.html',
    L('SAT/ACT not required (home-schooled applicants: required)', 'SAT/ACT не требуются (для обучавшихся дома — обязательны)'))
sat('mount-saint-vincent-university', 'optional',
    L('US graduates: Grade 12 English (College Prep) and four other Grade 12 academic courses with a 70% average; SAT scores are not required but may be submitted as additional evidence (ETS code 0865).', 'Выпускники из США: английский 12 класса (College Prep) и ещё четыре академических предмета 12 класса со средним 70%; SAT не требуется, но его можно прислать как дополнительное подтверждение (код ETS 0865).'),
    'https://www.msvu.ca/future-students/admission-requirements/international-students/')
sat('thompson-rivers-university', 'optional',
    L('TRU’s page for American students: “No SAT or ACT scores required”; admission is based on high school prerequisite courses in most programmes.', 'Страница TRU для американских студентов: «SAT или ACT не требуются»; в большинстве программ поступление — по школьным предметам.'),
    'https://www.tru.ca/truworld/future-students/usa.html', NOTREQ)
sat('capilano-university', 'optional',
    L('“Standardized tests like SAT or ACT are not required for admission.” Home-schooled applicants who cannot meet the requirements may be asked for SAT scores.', '«Стандартизированные тесты вроде SAT или ACT для поступления не требуются». Обучавшихся дома, не выполняющих требования, могут попросить прислать SAT.'),
    'https://www.capilanou.ca/programs--courses/get-started/parents-families--supporters/faqs/', NOTREQ)
sat('university-of-victoria', 'optional',
    L('Standardized tests (SAT, ACT) are not required but will be considered if submitted. Some programme pages give guideline scores.', 'Стандартизированные тесты (SAT, ACT) не требуются, но учитываются, если присланы. На страницах некоторых программ указаны ориентировочные баллы.'),
    'https://www.uvic.ca/undergraduate/info-for/us-students/index.php')

G.save(head, recs, tail)
G.flush()
print('round 2 written')
