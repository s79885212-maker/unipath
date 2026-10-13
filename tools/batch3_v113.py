# -*- coding: utf-8 -*-
"""v113 — application dates of four records and the SAT/ACT policy of 26.

Read on 13 October 2026 on the official pages named with each fact.
  * A date is recorded only where the page prints it; none was made by changing
    the year of an older table. Where a page prints no year, the note says so.
  * A test policy is recorded only where a page states it. "Test-optional for
    admission" is kept apart from what a scholarship or a special programme
    asks for. Where the pages disagree, both statements are kept and the policy
    stays unknown; where no page states it, the record stays "not checked" and
    says why."""
import copy
import us3_edit
from us200_std import *

V = '2026-10-13'
NY13 = L('The page prints this date without a year; it was read on 13 October 2026, during the cycle for autumn 2027 entry.',
         'На странице дата напечатана без года; страница прочитана 13 октября 2026, во время цикла подачи на осень 2027.')
head, recs = us3_edit.load()
D = us3_edit.by_id(recs)

def rounds(uid, rs, also_checked=()):
    r = D[uid]; r['admissions']['deadlines'] = rs
    v = r['verification']
    v['unconfirmed'] = [x for x in v['unconfirmed'] if x != 'application rounds']
    for k in ('rounds',) + tuple(also_checked):
        if CHK[k] not in v['checked']: v['checked'].append(CHK[k])

def policy(uid, pol, note, url, cycle=None, checked=True):
    r = D[uid]
    t = test(pol, note, cycle=cycle, source=url, verified=V)
    r['academics']['sat'] = t; r['academics']['act'] = dict(t)
    v = r['verification']
    v['unconfirmed'] = [x for x in v['unconfirmed'] if x != 'test policy']
    target = v['checked'] if checked else v['unconfirmed']
    if CHK['tests'] not in target: target.append(CHK['tests'])
    lab = L('%s — SAT/ACT policy, read on 13 October 2026' % r['shortName'], '%s — политика SAT/ACT, прочитано 13 октября 2026' % r['shortName'])
    if url and not any(s['url'] == url for s in r['sources']): r['sources'].append({'label': lab, 'url': url})

def unchecked(uid, why, url):
    r = D[uid]
    t = {'policy': None, 'note': why, 'source': url, 'verified': V}
    r['academics']['sat'] = t; r['academics']['act'] = dict(t)
    v = r['verification']
    if CHK['tests'] not in v['unconfirmed']: v['unconfirmed'].append(CHK['tests'])

# =================================================================== dates
# ---- WPI
S = 'https://www.wpi.edu/admissions/undergraduate/apply'
rounds('worcester-polytechnic-institute', [
    rd('ED1', '2026-11-01', S, V, L('Decisions in early December; enrol by 15 January.', 'Решения в начале декабря; подтверждение зачисления до 15 января.'), note=NY13),
    rd('EA1', '2026-11-01', S, V, L('Decisions in mid-December; enrol by 1 May.', 'Решения в середине декабря; подтверждение зачисления до 1 мая.'), note=NY13),
    rd('ED2', '2027-01-05', S, V, L('Decisions in mid-February; enrol by 15 March.', 'Решения в середине февраля; подтверждение зачисления до 15 марта.'), note=NY13),
    rd('EA2', '2027-01-05', S, V, L('Decisions in mid-February; enrol by 1 May.', 'Решения в середине февраля; подтверждение зачисления до 1 мая.'), note=NY13),
    rd('RD', '2027-02-01', S, V, L('Decisions in mid-March; enrol by 1 May.', 'Решения в середине марта; подтверждение зачисления до 1 мая.'), note=NY13),
])
w = D['worcester-polytechnic-institute']
w['admissions']['platforms'] = [COMMON]
w['admissions']['notes'] = [L('WPI says students who apply Early Decision receive a scholarship of at least $25,000 a year when admitted; the page does not say separately whether this covers international students. Applicants must be at least 16 by the start of orientation.',
                              'WPI сообщает, что подавшие на Early Decision при зачислении получают стипендию не менее $25,000 в год; распространяется ли это на иностранных студентов, отдельно не сказано. К началу ориентации абитуриенту должно быть не менее 16 лет.')]
w['sources'].append({'label': L('WPI — application deadlines and decision dates', 'WPI — сроки подачи и даты решений'), 'url': S})

# ---- Xavier University (Ohio)
S = 'https://www.xavier.edu/international-admission/applications-and-requirements/freshman'
rounds('xavier-university', [
    rd('EA', '2026-11-01', S, V, L('Admission and merit scholarship decisions by mid-December. For an autumn (August) start.', 'Решения о приёме и стипендии за успехи — к середине декабря. Для начала учёбы осенью (в августе).'), note=NY13, applies=INTL),
    rd('ROLL', None, S, V, L('Applications after 1 November are decided on a rolling basis from January. Xavier encourages students who need an I-20 to apply as early as possible.', 'Заявки после 1 ноября рассматриваются по мере поступления, решения — с января. Тем, кому нужна форма I-20, Xavier советует подавать как можно раньше.'),
       date=L('After 1 November', 'После 1 ноября'), applies=INTL),
], also_checked=('fee', 'english', 'tests'))
x = D['xavier-university']
x['admissions']['platforms'] = [OWNAPP('Xavier'), COMMON]
x['admissions']['applicationFee'] = fee(0, L('The international first-year page says: “Submitting an application to Xavier is free.”', 'На странице для иностранных первокурсников сказано: «Подача заявки в Xavier бесплатна».'), S, V)
x['admissions']['essay'] = L('An essay is required of all students; it is submitted with the application.', 'Эссе обязательно для всех; оно подаётся вместе с заявкой.')
x['english'] = {
    'ielts': eng(6.5, None, L('6.5 for full admission consideration; 6.0 with two additional academic English courses; 5.5 with those courses, twice-weekly advisor meetings and tutoring.', '6.5 — для полного рассмотрения; 6.0 — с двумя дополнительными курсами академического английского; 5.5 — с этими курсами, встречами с куратором дважды в неделю и занятиями с тьютором.')),
    'toefl': toefl(79, 4.5, L('For full admission consideration: 79, or 4.5 on tests after 21 January 2026. With additional English courses: 70, or 4; with further support: 3.5.', 'Для полного рассмотрения: 79 или 4.5 для тестов после 21 января 2026. С дополнительными курсами английского: 70 или 4; с дополнительной поддержкой: 3.5.')),
    'duolingo': eng(110, None, L('110 for full admission consideration; 100 with additional English courses; 90 with further support.', '110 — для полного рассмотрения; 100 — с дополнительными курсами английского; 90 — с дополнительной поддержкой.')),
    'waiver': None,
    'note': L('Also accepted for full consideration: Cambridge 176 (C1 exam recommended), PTE 55, MET 58. Students admitted at the lower levels take two academic English courses of three credit hours each.', 'Для полного рассмотрения также принимаются Cambridge 176 (рекомендуется экзамен C1), PTE 55, MET 58. Принятые с более низкими баллами проходят два курса академического английского по три кредитных часа.'),
    'detailsSource': S, 'detailsVerified': V}
v = x['verification']; v['unconfirmed'] = [u for u in v['unconfirmed'] if u not in ('application fee', 'English proficiency')]
x['sources'].append({'label': L('Xavier — admission process for international first-year students', 'Xavier — порядок приёма иностранных первокурсников'), 'url': S})

# ---- Ursinus
S = 'https://www.ursinus.edu/admission/applying/'
UNOTE = L('The page prints the dates without a year; the weekdays it names (Friday 20 November, Friday 22 January) match the 2026–27 cycle, and one sentence on it still speaks of fall 2026. It adds that international applicants have separate application procedures; their own page lists no dates. Read on 13 October 2026.',
          'Даты на странице напечатаны без года; названные там дни недели (пятница 20 ноября, пятница 22 января) соответствуют циклу 2026–27, а одно предложение ещё говорит об осени 2026. Там же сказано, что у иностранных абитуриентов отдельный порядок подачи; на их собственной странице дат нет. Прочитано 13 октября 2026.')
rounds('ursinus-college', [
    rd('EA', '2026-11-01', S, V, L('Decisions in mid-December; no need to enrol before 1 May. Considered for all available scholarships.', 'Решения в середине декабря; подтверждать зачисление не нужно до 1 мая. Рассматриваются на все доступные стипендии.'), note=UNOTE),
    rd('ED1', '2026-12-01', S, V, L('Decisions on a rolling basis. A financial aid application is due within two weeks of applying; a merit pre-read can be requested by 20 November.', 'Решения по мере рассмотрения. Заявку на финансовую помощь нужно подать в течение двух недель после подачи; предварительную оценку стипендии можно запросить до 20 ноября.'), name='Early Decision 1', note=UNOTE),
    rd('ED2', '2027-02-01', S, V, L('Decisions on a rolling basis. A merit pre-read can be requested by 22 January.', 'Решения по мере рассмотрения. Предварительную оценку стипендии можно запросить до 22 января.'), name='Early Decision 2', note=UNOTE),
    rd('RD', '2027-02-01', S, V, L('The heading gives 1 February, while the text under it says applicants who apply “by the February 15 deadline” hear by mid-March. Applications may be accepted later as space allows.', 'В заголовке указано 1 февраля, а в тексте под ним сказано, что подавшие «к сроку 15 февраля» получат ответ к середине марта. Позже заявки могут принимать при наличии мест.'), note=UNOTE),
], also_checked=('fee',))
u = D['ursinus-college']
u['admissions']['applicationFee'] = fee(0, L('The applying page says: “Apply online—it’s free!”', 'На странице подачи сказано: «Подавайте онлайн — это бесплатно!»'), S, V)
u['verification']['unconfirmed'] = [k for k in u['verification']['unconfirmed'] if k != 'application fee']
u['sources'].append({'label': L('Ursinus — applying: plans and deadlines', 'Ursinus — подача: планы и сроки'), 'url': S})

# ---- Dillard
S = 'https://www.dillard.edu/admissions-aid/admission-requirements/international-students/'
rounds('dillard-university', [
    rd('ROLL', None, S, V, L('Dillard has rolling admissions and strongly encourages applicants to finish the application by the priority deadline. The NACES evaluation of foreign records must arrive by the admission deadline.', 'Приём в Dillard идёт по мере поступления заявок; университет настоятельно советует завершить подачу к приоритетному сроку. Оценка иностранных документов NACES должна поступить к сроку подачи.'), applies=INTL),
    rd('PRI', '2027-06-01', S, V, L('Priority deadline for autumn applicants. For spring applicants it is 1 December.', 'Приоритетный срок для поступающих на осень. Для поступающих на весну — 1 декабря.'), note=NY13, applies=INTL),
])

# =================================================================== SAT / ACT
OPT = 'optional'
policy('deep-springs-college', OPT, L('Deep Springs writes: “Test scores are not required, but applicants may still submit them.”', 'Deep Springs пишет: «Результаты тестов не требуются, но абитуриенты могут их прислать».'), 'https://www.deepsprings.edu/admissions/')
policy('olin-college-of-engineering', OPT, L('Olin has extended the temporary suspension of its test requirement through the 2026–27 application cycle: SAT or ACT scores are an optional part of the application, and students who do not submit them are not at a disadvantage.', 'Olin продлил временную отмену требования о тестах на цикл подачи 2026–27: баллы SAT или ACT — необязательная часть заявки, и те, кто их не прислал, не оказываются в худшем положении.'),
       'https://www.olin.edu/admission/apply/admission-process', cycle='2026–27')
policy('harvey-mudd-college', OPT, L('Harvey Mudd has extended its ACT/SAT-optional pilot through 2027. Students who do not submit scores are not at a disadvantage, and the college does not use standardized testing when it considers merit scholarships.', 'Harvey Mudd продлил пилотную программу без обязательных ACT/SAT до 2027 года. Не приславшие баллы не оказываются в худшем положении, а при назначении стипендий за успехи тесты не используются.'),
       'https://www.hmc.edu/admission/apply/', cycle='through 2027')
policy('hendrix-college', OPT, L('Hendrix lists official SAT or ACT scores among the optional items of an application. For international applicants an SAT or ACT score is one of the ways to show English proficiency.', 'Hendrix относит официальные баллы SAT или ACT к необязательным частям заявки. Для иностранных абитуриентов балл SAT или ACT — один из способов подтвердить английский.'), 'https://www.hendrix.edu/admission-aid/')
policy('indiana-university-indianapolis', OPT, L('IU Indianapolis is test-optional for admission and for scholarships: applicants are fully considered for both with or without scores.', 'IU Indianapolis не требует тестов ни для приёма, ни для стипендий: абитуриентов полностью рассматривают и с баллами, и без них.'), 'https://indianapolis.iu.edu/admissions/apply/test-scores.html')
policy('lesley-university', 'not-used', L('Lesley says the SAT and ACT “are not required and will not impact your application”. Scores can be sent only to try to waive the placement test taken by new students.', 'Lesley пишет, что SAT и ACT «не требуются и не повлияют на вашу заявку». Баллы можно прислать только чтобы попытаться освободиться от теста на определение уровня для новых студентов.'), 'https://lesley.edu/admissions/undergraduate-students/how-to-apply-undergraduate')
policy('rensselaer-polytechnic-institute', OPT, L('Test-optional for autumn 2027 applicants: each student chooses whether to submit SAT or ACT scores. Applicants to the Physician-Scientist (B.S./M.D.) programme must submit official scores.', 'Тесты необязательны для подающих на осень 2027: каждый сам решает, присылать ли баллы SAT или ACT. Подающие на программу Physician-Scientist (B.S./M.D.) обязаны прислать официальные баллы.'),
       'https://undergrad.admissions.rpi.edu/apply', cycle='autumn 2027')
policy('villanova-university', OPT, L('Villanova “will remain test-optional through the 2026-27 admission campaign (Class of 2031)”; applicants who do not submit scores are not at a disadvantage.', 'Villanova «останется test-optional на приёмную кампанию 2026–27 (набор 2031 года)»; не приславшие баллы не оказываются в худшем положении.'),
       'https://www1.villanova.edu/university/undergraduate-admission/faqs.html', cycle='2026–27')
policy('washington-and-jefferson-college', OPT, L('W&J no longer requires SAT or ACT scores; score-optional applicants are considered with no disadvantage. For merit awards, test scores are considered unless the student chooses the score-optional policy.', 'W&J больше не требует баллы SAT или ACT; подающих без баллов рассматривают без ущерба для них. При назначении стипендий за успехи баллы учитываются, если студент не выбрал подачу без тестов.'), 'https://www.washjeff.edu/future-students/international-admission/international-student-faq/')
policy('westminster-college-pennsylvania', OPT, L('Westminster is test-optional and does not require SAT or ACT scores for admission. Applicants to its combined programmes with partner institutions (for example the dental programmes) must submit scores.', 'Westminster не требует баллы SAT или ACT для приёма. Подающие на совместные программы с партнёрскими вузами (например, стоматологические) обязаны прислать баллы.'), 'https://www.westminster.edu/admissions/international.cfm')
policy('allegheny-college', OPT, L('International students do not need to submit SAT or ACT scores; Allegheny says they receive the same consideration for merit scholarships without them.', 'Иностранным студентам не нужно присылать баллы SAT или ACT; Allegheny сообщает, что на стипендии за успехи их рассматривают так же и без баллов.'), 'https://allegheny.edu/apply/international-students/')
policy('illinois-wesleyan-university', OPT, L('The international admission FAQ says an SAT or ACT score is not needed to apply: “IWU is now test optional.” SAT and ACT results do not count as proof of English.', 'В разделе вопросов для иностранных абитуриентов сказано, что балл SAT или ACT для подачи не нужен: «IWU теперь test optional». Результаты SAT и ACT не засчитываются как подтверждение английского.'), 'https://www.iwu.edu/international/admission-faq.html')
policy('st-lawrence-university', OPT, L('St. Lawrence is “SAT/ACT-optional for all applicants”.', 'St. Lawrence — «SAT/ACT-optional для всех абитуриентов».'), 'https://www.stlawu.edu/applying-st-lawrence/international-students')
policy('temple-university', OPT, L('International first-year applicants may apply without standardized testing and are equally eligible for merit scholarships. Temple’s financial services page says academic scholarships go to international students with strong records “and standardized test scores”.', 'Иностранные первокурсники могут подавать без стандартизированных тестов и в равной мере претендуют на стипендии за успехи. На странице финансовой службы Temple сказано, что академические стипендии получают иностранные студенты с сильной успеваемостью «и баллами стандартизированных тестов».'), 'https://admissions.temple.edu/apply/international-students/first-year-international-students')
policy('university-of-arizona', OPT, L('SAT and ACT scores are not required for general admission; submitted scores may be used for class placement or to meet core competency requirements. The statement is on the general first-year page; nothing separate is said about international applicants.', 'Баллы SAT и ACT не требуются для общего приёма; присланные баллы могут использоваться для распределения по курсам или для выполнения базовых требований. Это сказано на общей странице для первокурсников; отдельно об иностранных абитуриентах ничего нет.'), 'https://www.arizona.edu/admissions/undergraduate/first-year')
policy('university-of-washington', OPT, L('The UW no longer requires SAT or ACT scores for most applicants. Home-schooled applicants and those from schools without letter or numeric grades must still submit them.', 'UW больше не требует баллы SAT или ACT от большинства абитуриентов. Обучавшиеся на дому и выпускники школ без буквенных или числовых оценок по-прежнему обязаны их прислать.'), 'https://admit.washington.edu/apply/first-year/how-to-apply/')
policy('xavier-university', OPT, L('Xavier offers test-optional admission: it is the applicant’s choice whether to include ACT or SAT scores.', 'Xavier принимает без тестов: абитуриент сам решает, включать ли баллы ACT или SAT.'), 'https://www.xavier.edu/international-admission/applications-and-requirements/freshman')
policy('west-virginia-university', OPT, L('Test-optional admission: WVU says scores are used only to the applicant’s advantage — for admission, the Honors College and automatically awarded merit scholarships. Some majors ask test-optional applicants for a higher grade average (engineering 3.00, forensic majors 3.75). The statement is on the general first-time freshman page.', 'Приём без тестов: WVU сообщает, что баллы используются только в пользу абитуриента — для приёма, Honors College и автоматически назначаемых стипендий за успехи. На некоторых направлениях от подающих без тестов требуется более высокий средний балл (инженерия — 3.00, криминалистика — 3.75). Это сказано на общей странице для первокурсников.'), 'https://www.wvu.edu/admissions/undergraduate/how-to-apply/first-time-freshmen/admission-requirements/')
policy('dillard-university', 'unknown', L('Dillard’s pages disagree. The requirements for international students have a section of grade average and standardized test score requirements with ACT and SAT minimums, while the university also lists a “Test Optional” route among its admission requirements. Ask Dillard which applies to international applicants.', 'Страницы Dillard расходятся. В требованиях к иностранным студентам есть раздел о среднем балле и результатах стандартизированных тестов с минимумами ACT и SAT, и при этом среди требований к поступающим университет указывает путь «Test Optional». Уточните в Dillard, что действует для иностранных абитуриентов.'), 'https://www.dillard.edu/admissions-aid/admission-requirements/international-students/', checked=False)
policy('xavier-university-of-louisiana', 'unknown', L('The pages do not settle it for international applicants. The first-time freshman page says “Test scores are not required for admission”, while the page for international students says they “may have alternative requirements or options” and that some “may need to take standardized tests such as the SAT or ACT”.', 'Для иностранных абитуриентов страницы не дают однозначного ответа. На странице для первокурсников сказано: «Результаты тестов для приёма не требуются», а на странице для иностранных студентов — что у них «могут быть альтернативные требования или варианты» и что некоторым «может потребоваться сдать стандартизированные тесты, такие как SAT или ACT».'), 'https://www.xula.edu/international-ed/applying-undergrad-students.html', checked=False)

unchecked('ursinus-college', L('Not checked: the applying page read on 13 October 2026 does not mention the SAT or ACT, and the page for international applicants lists no test policy.', 'Не проверено: на странице подачи, прочитанной 13 октября 2026, SAT и ACT не упоминаются, а на странице для иностранных абитуриентов политика тестов не указана.'), 'https://www.ursinus.edu/admission/applying/')
unchecked('anderson-university-indiana', L('Not checked: the pages read state no SAT or ACT policy. The international application process only lists standardized test scores among documents that may be asked for at the visa stage.', 'Не проверено: на прочитанных страницах политика SAT и ACT не указана. В порядке подачи для иностранных студентов баллы стандартизированных тестов названы лишь среди документов, которые могут запросить на визовом этапе.'), 'https://anderson.edu/start-your-story/international-undergraduate-application-process/')
unchecked('cornell-college', L('Not checked: the admission pages of the college returned empty pages on 13 October 2026, so the policy could not be read. Only the catalogue site opened.', 'Не проверено: страницы приёмной комиссии колледжа 13 октября 2026 открывались пустыми, поэтому политику прочитать не удалось. Открылся только сайт каталога.'), 'https://www.cornellcollege.edu/admissions/index.shtml')
unchecked('the-new-school', L('Not checked: the “How to Apply” page keeps its requirements inside sections that did not open on 13 October 2026, and the text that could be read states no SAT or ACT policy.', 'Не проверено: на странице «How to Apply» требования находятся в разделах, которые 13 октября 2026 не раскрылись, а в прочитанном тексте политика SAT и ACT не указана.'), 'https://www.newschool.edu/admission/prospective-undergraduate-students/apply-undergraduate')
unchecked('savannah-college-of-art-and-design', L('Not checked: the application page read on 13 October 2026 states no SAT or ACT policy.', 'Не проверено: на странице подачи, прочитанной 13 октября 2026, политика SAT и ACT не указана.'), 'https://www.scad.edu/admission/apply')
unchecked('american-university', L('Not checked: on 13 October 2026 the university’s main site showed an automated browser check, which was not bypassed, so its testing policy page could not be read.', 'Не проверено: 13 октября 2026 основной сайт университета показывал автоматическую проверку браузера; она не обходилась, поэтому страницу о политике тестов прочитать не удалось.'), 'https://www.american.edu/admissions/first-year/index.cfm')

us3_edit.save(head, recs)
done = [r['id'] for r in recs if r['academics']['sat'].get('policy') in ('optional', 'not-used', 'required', 'required-alternatives')]
print('rounds written for 4; test policy stated for %d of 90, unknown %d, not checked %d' % (
    len(done), len([r for r in recs if r['academics']['sat'].get('policy') == 'unknown']), len([r for r in recs if not r['academics']['sat'].get('policy')])))
print('no rounds:', [r['id'] for r in recs if not r['admissions']['deadlines']])
flush()
