# -*- coding: utf-8 -*-
"""Canada, batch 5 of 5: Mount Royal, Thompson Rivers, UNBC, Vancouver Island,
Fraser Valley, Capilano, Laurentian, UQAM, Sherbrooke, Moncton.
Pages read on 17 October 2026.

The University of Victoria (list item 14) still did not answer from this
network on 17 October 2026 (timeouts in the command line and the browser),
so it is the one record of the fifty still missing.

UQAM, Sherbrooke and Moncton teach in French: they carry a French
requirement and no invented English minimum. Laurentian is bilingual."""
import ca50
from ca50 import R, rnd, test, eng, toefl, fee, costs, ev, money, L
from us200_std import J, award, flush, AUTO

V = '2026-10-17'
E, B = 'estimate', 'billed'
P = 'partial'

def D(name, kind, iso, src, cond=None, note=None, status='confirmed', **k):
    return rnd(name, kind, iso, k.pop('binding', False), cond, src, V, status=status, note=note, **k)

NOYEAR = L('The page prints this date without a year; it was read in October 2026, during the cycle for autumn 2027 entry.',
           'Страница указывает эту дату без года; она прочитана в октябре 2026, в цикле поступления на осень 2027.')
OUAC = 'OUAC (Ontario Universities’ Application Centre)'
PARTIAL = L('Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.',
            'Направления — только те, программа которых названа на прочитанных страницах (таблицы сроков, сборов и платы); полный список специальностей не читался, поэтому отсутствующее здесь направление всё равно может быть.')
NOT_NEED = L('Need-based aid for international first-year students is not described on the pages read.', 'Помощь по нуждаемости для иностранных первокурсников на прочитанных страницах не описана.')
UZ = lambda txt_en, txt_ru: L('Uzbekistan: ' + txt_en, 'Узбекистан: ' + txt_ru)
NOSAT = test(None, L('Not checked on the pages read.', 'На прочитанных страницах не проверено.'))
FRSAT = test('not-applicable', L('SAT and ACT are not part of the admission route; candidates are assessed on their school record and French.', 'SAT и ACT не входят в порядок поступления; оценивают школьные результаты и французский.'))
PUBC = L('Public university', 'Государственный университет')
PUBF = L('Public university (French-language)', 'Государственный университет (франкоязычный)')
FR = L('French', 'Французский')
FOUND = L('founding year', 'год основания')
MAJORS = L('full list of majors', 'полный список специальностей')
UZU = L('requirements for Uzbekistan', 'требования для Узбекистана')
TESTS = L('test policy', 'политика тестов')
DL = L('deadlines', 'сроки')
FEE = L('application fee', 'сбор за заявку')
ENG = L('English requirements', 'требования к английскому')
FRQ = L('French requirement', 'требование к французскому')
TUI = L('tuition', 'плата за обучение')
SCH = L('scholarships', 'стипендии')
COSTS = L('costs', 'стоимость')
DOCS = lambda portal: [L('%s application' % portal, 'Заявка %s' % portal), L('Secondary school transcripts and certificate', 'Школьные табели и аттестат'),
                       L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')]
DOCSFR = lambda portal: [L('%s application' % portal, 'Заявка %s' % portal), L('Secondary school transcripts and certificate', 'Школьные табели и аттестат'),
                         L('Proof of French where required', 'Подтверждение французского, если требуется')]
NOFEE = lambda src: fee(None, L('The amount was not found on the pages read.', 'Сумма на прочитанных страницах не найдена.'), src, V)
FREV = lambda pairs, url: {t: {'program': n, 'level': 'bachelor', 'language': 'French', 'url': url, 'checked': V} for t, n in pairs.items()}
NOENG = {'ielts': None, 'toefl': None, 'duolingo': None, 'waiver': None}

records, annual = [], {}

# --------------------------------------------------------------- Mount Royal
MR = 'https://www.mtroyal.ca/'
MRD = MR + 'Admission/DatesDeadlines/index.htm'
MRA = MR + 'InternationalStudents/Howtoapply/'
MRT = MR + 'academics/fees/pages/2026-27/international-student-tuition-max.php'
MRE = MR + 'Admission/AdmissionRequirements/english-language-proficiency-requirement-institutional.htm'
MRS = MR + 'Admission/FinancingYourEducation/ScholarshipsBursaries/awardinfo.htm'
records.append(R('mount-royal-university', 'Mount Royal University', 'MRU', 'Calgary', 'AB', PUBC,
    L('An undergraduate-focused university in Calgary, Alberta. In admission letters it must state each programme’s yearly maximum international tuition.',
      'Университет в Калгари (Альберта) с упором на бакалавриат. В письмах о зачислении он обязан указывать годовой максимум платы для иностранцев по каждой программе.'),
    ['humanities', 'business', 'computer-science', 'medicine', 'education', 'arts'],
    {'website': MR, 'admissions': MRD, 'international': MR + 'InternationalStudents/Admissionrequirements/index.htm', 'portal': MR + 'Admission/Apply/index.htm', 'scholarships': MRS, 'aid': MRS, 'programs': MRT, 'cost': MRT},
    verified=V, aliases=['MRU', 'Mount Royal'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Bachelor of Arts (English, History, Psychology and others)', 'business': 'Bachelor of Business Administration', 'computer-science': 'Bachelor of Science — Computer Science',
                        'medicine': 'Bachelor of Nursing', 'education': 'Bachelor of Education — Elementary', 'arts': 'Bachelor of Interior Design'}, MRT, V),
    platforms=[L('Mount Royal online application', 'Онлайн-заявка Mount Royal')],
    rounds=[
        D(L('Early Admission application period ends', 'Окончание периода раннего приёма'), 'priority', '2027-02-01', MRD, L('Application and supporting documents are needed for early admission; some programmes close on this date.', 'Для раннего приёма нужны заявка и документы; некоторые программы закрываются в этот день.')),
        D(L('Scholarships and bursaries application', 'Заявка на стипендии и гранты'), 'scholarship', '2027-03-01', MRD, L('Applications open 1 November 2026.', 'Приём заявок с 1 ноября 2026.')),
        D(L('Application deadline for international students', 'Срок подачи для иностранцев'), 'regular', '2027-05-01', MRD,
          L('Applicants eligible for a study permit under IRPR 214 may still apply later. Documents are due 15 May 2027.', 'Абитуриенты, имеющие право на разрешение по IRPR 214, могут подать позже. Документы — до 15 мая 2027.')),
    ],
    fee=NOFEE(MR + 'Admission/Apply/index.htm'),
    documents=DOCS('Mount Royal'),
    english={'ielts': eng(6.5, note=L('Academic (including Online); at least 5.5 in each band.', 'Academic (включая Online); не ниже 5.5 в каждой секции.')),
             'toefl': toefl(86, 4.5, L('Before 21 January 2026: 86 with at least 20 in each section. After: 4.5 with at least 4.0 in each band.', 'До 21 января 2026: 86, не ниже 20 в каждой секции. После: 4.5, не ниже 4.0 в каждой секции.')),
             'duolingo': eng(120), 'note': L('PTE Academic 58 (55 in each area); CAEL 70 (60); Cambridge 176; MELAB 62; LanguageCert 70.', 'PTE Academic 58 (55 в каждой части); CAEL 70 (60); Cambridge 176; MELAB 62; LanguageCert 70.')},
    sat=NOSAT,
    costs=costs('2026–2027', MRT, V, L('International students in year 1 of a degree, standard course load (maximum stated in the offer letter)', 'Иностранцы на 1 курсе, стандартная нагрузка (максимум, указываемый в письме о зачислении)'),
        [(L('International tuition, year 1 (all degrees listed)', 'Плата для иностранцев, 1 курс (все перечисленные программы)'), 24277, B), (L('International mandatory fees, year 1', 'Обязательные сборы для иностранцев, 1 курс'), 2432.68, B)],
        L('Up to C$26,710 in year 1 (2026–27)', 'До C$26,710 на 1 курсе (2026–27)'),
        L('Year-1 maximum for every degree listed: tuition C$24,277 plus mandatory fees C$2,432.68, printed as C$26,710; later years are capped at C$24,760 (2027–28), C$25,250 and C$25,760 for tuition', 'Максимум 1 курса для всех перечисленных программ: обучение C$24,277 плюс обязательные сборы C$2,432.68, напечатано как C$26,710; в следующие годы потолок платы — C$24,760 (2027–28), C$25,250 и C$25,760'),
        L('tuition and mandatory fees; housing and food extra', 'обучение и обязательные сборы; жильё и питание — сверх этого'), tuition=24277,
        note=L('These are the legal yearly maximums for an eight-month academic year; later-year figures are “subject to change”.', 'Это установленные годовые максимумы за восьмимесячный учебный год; суммы следующих лет «могут измениться».')),
    merit=[award('Mount Royal entrance scholarships', None, L('International students are eligible for entrance and in-course scholarships without a residency requirement; a GPA of 3.2 or an 80% high school average is required unless stated otherwise', 'Иностранцы могут получать вступительные и текущие стипендии без требования о резидентстве; нужен GPA 3.2 или школьный средний 80%, если не указано иное'),
                 application=L('Online award application, 1 November – 1 March', 'Онлайн-заявка с 1 ноября по 1 марта'), basis='merit', source=MRS, verified=V,
                 note=L('Amounts are not given on the page read; many awards are for Canadian citizens and permanent residents only.', 'Суммы на прочитанной странице не указаны; многие стипендии — только для граждан и постоянных жителей Канады.'))],
    need={'note': NOT_NEED},
    sources=[(L('MRU — dates and deadlines for fall 2027', 'MRU — сроки на осень 2027'), MRD), (L('MRU — how international students apply', 'MRU — как подают иностранцы'), MRA),
             (L('MRU — 2026-27 international tuition maximum', 'MRU — максимум платы для иностранцев 2026–27'), MRT), (L('MRU — English language proficiency', 'MRU — требования к английскому'), MRE), (L('MRU — award policies', 'MRU — правила стипендий'), MRS)],
    checked=[DL, ENG, TUI, SCH],
    unconfirmed=[FEE, TESTS, UZU, MAJORS, FOUND]))
annual['mount-royal-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 24277, 'max': 24277, 'note': 'Year-1 maximum international tuition 2026–27 (all degrees listed); mandatory fees C$2,432.68, housing and food extra'}

# --------------------------------------------------------------- Thompson Rivers
TR = 'https://www.tru.ca/'
TRD = TR + 'future/admissions/international/application-deadlines.html'
TRF = TR + 'truworld/future-students/fees.html'
TRS = TR + 'truworld/future-students/scholarships.html'
records.append(R('thompson-rivers-university', 'Thompson Rivers University', 'TRU', 'Kamloops', 'BC', PUBC,
    L('A university in Kamloops, British Columbia, with a large international enrolment and a guaranteed-tuition model: international students know the full programme cost before they start.',
      'Университет в Камлупсе (Британская Колумбия) с большой долей иностранцев и моделью гарантированной платы: иностранцы знают полную стоимость программы до начала учёбы.'),
    ['engineering'],
    {'website': TR, 'admissions': TRD, 'international': TR + 'future/admissions/international.html', 'portal': TR + 'future/admissions/international.html', 'scholarships': TRS, 'aid': TRS, 'programs': TRF, 'cost': TRF},
    verified=V, aliases=['TRU', 'Thompson Rivers'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'engineering': 'Engineering Transfer; Software Engineering'}, TRF, V),
    platforms=[L('TRU online international application', 'Онлайн-заявка TRU для иностранцев')],
    rounds=[
        D(L('Application deadline, September intake', 'Срок подачи, сентябрьский набор'), 'regular', '2027-05-01', TRD, L('Late applications are considered if space is available; some programmes close earlier.', 'Поздние заявки рассматривают, если есть места; некоторые программы закрываются раньше.'), note=NOYEAR),
    ],
    fee=fee(100, L('One-time, non-refundable. A limited number of fee waivers can be requested.', 'Разовый, не возвращается. Можно запросить освобождение (число ограничено).'), TRF, V),
    documents=DOCS('TRU'),
    english={'note': L('Not confirmed: TRU’s international English page showed no figures when read. Other TRU pages and third-party summaries quote IELTS 6.5 and TOEFL 88, which are not used here.', 'Не подтверждено: страница TRU о требованиях к английскому для иностранцев при чтении не показала цифр. Другие страницы TRU и сторонние обзоры называют IELTS 6.5 и TOEFL 88 — здесь не используются.')},
    sat=NOSAT,
    costs=costs('2026–2027', TRF, V, L('International undergraduates in intakes from Fall 2026 to Summer 2027 (guaranteed tuition)', 'Иностранцы, начавшие с осени 2026 по лето 2027 (гарантированная плата)'),
        [(L('Tuition per credit', 'Обучение за кредит'), 875, B), (L('Tuition per 3-credit course', 'Обучение за курс в 3 кредита'), 2623, B),
         (L('Bachelor’s degree, 40 courses (120 credits), total tuition', 'Бакалавриат, 40 курсов (120 кредитов), вся плата'), 104952, B), (L('General fees per semester (12 credits)', 'Общие сборы за семестр (12 кредитов)'), 612, B)],
        L('C$875 per credit; C$104,952 for a full bachelor’s degree (2026–27 intakes)', 'C$875 за кредит; C$104,952 за весь бакалавриат (наборы 2026–27)'),
        L('The rate published for intakes from Fall 2026 to Summer 2027 is C$875 per credit, or C$104,952 for a 120-credit bachelor’s degree; the rate for the Fall 2027 intake is not yet published', 'Ставка для наборов с осени 2026 по лето 2027 — C$875 за кредит, или C$104,952 за бакалавриат в 120 кредитов; ставка для набора осени 2027 ещё не опубликована'),
        L('tuition rate; general fees, health fees, housing and food extra', 'ставка платы; общие и медицинские сборы, жильё и питание — сверх этого'), status='previous-cycle',
        note=L('“Tuition rates published below apply for Fall (September) 2026, Winter (January) 2027 and Summer (May) 2027 intakes.” Some programmes (e.g. Engineering Transfer, Software Engineering) differ.', '«Ставки ниже действуют для наборов осени 2026, зимы 2027 и лета 2027». У некоторых программ (например, Engineering Transfer, Software Engineering) — иначе.')),
    merit=[award('Exceptional Student Award', L('Up to C$4,000 (C$1,000 a semester)', 'До C$4,000 (C$1,000 за семестр)'), L('New international students with at least 80% in their final year and direct entry (IELTS 6.5+)', 'Новые иностранцы с не менее 80% в последнем году и прямым зачислением (IELTS 6.5+)'),
                 application=L('Candidates are identified from the application and contacted', 'Кандидатов выбирают по заявке и связываются с ними'), renewable=True, basis='merit', source=TRS, verified=V,
                 note=L('Continued with a 3.33 GPA each semester.', 'Продлевается при GPA 3.33 каждый семестр.')),
           award('Academic Excellence Award', L('Up to C$2,000', 'До C$2,000'), L('New international students with at least 86% in their final year', 'Новые иностранцы с не менее 86% в последнем году'),
                 application=L('Candidates are identified from the application', 'Кандидатов выбирают по заявке'), basis='merit', source=TRS, verified=V),
           award('Diversity Scholarships', None, L('New international students from countries with five or fewer students on campus, with a 3.0 GPA or IELTS 6.5 or TOEFL 88', 'Новые иностранцы из стран, откуда на кампусе не больше пяти студентов, с GPA 3.0 или IELTS 6.5 или TOEFL 88'),
                 application=AUTO, basis='automatic', source=TRS, verified=V, note=L('The value is not given on the page read.', 'Сумма на прочитанной странице не указана.'))],
    need={'note': NOT_NEED},
    sources=[(L('TRU — international application deadlines', 'TRU — сроки для иностранцев'), TRD), (L('TRU — international tuition fees', 'TRU — плата для иностранцев'), TRF), (L('TRU — scholarships for international students', 'TRU — стипендии для иностранцев'), TRS)],
    checked=[DL, FEE, SCH],
    unconfirmed=[L('tuition for the Fall 2027 intake', 'плата для набора осени 2027'), ENG, TESTS, UZU, MAJORS, FOUND]))

# --------------------------------------------------------------- UNBC
UN = 'https://www.unbc.ca/'
UND = UN + 'programs-and-admissions/undergraduate/undergraduate-application-deadlines'
UNF = UN + 'calendar/undergraduate/fees'
UNE = UN + 'calendar/undergraduate/international-admissions'
UNT = UN + 'international/tuition-and-fees'
records.append(R('university-of-northern-british-columbia', 'University of Northern British Columbia', 'UNBC', 'Prince George', 'BC', PUBC,
    L('A research university in Prince George, northern British Columbia, with regional campuses; small classes and an environmental and health focus.',
      'Исследовательский университет в Принс-Джордже на севере Британской Колумбии, с региональными кампусами; небольшие группы, упор на экологию и здоровье.'),
    ['engineering', 'medicine', 'social-sciences'],
    {'website': UN, 'admissions': UND, 'international': UNE, 'portal': UN + 'programs-and-admissions/undergraduate', 'scholarships': UN + 'international/frequent-asked-questions-faq', 'aid': UN + 'international/frequent-asked-questions-faq', 'programs': UND, 'cost': UNF},
    verified=V, aliases=['UNBC', 'Northern British Columbia'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'engineering': 'Bachelor of Applied Science (Engineering)', 'medicine': 'Bachelor of Health Sciences', 'social-sciences': 'Bachelor of Social Work'}, UND, V),
    platforms=[L('UNBC online application', 'Онлайн-заявка UNBC')],
    rounds=[
        D(L('Engineering (BASc) application deadline', 'Срок подачи на инженерию (BASc)'), 'regular', '2027-03-01', UND),
        D(L('Health Sciences (BHSc) application deadline', 'Срок подачи на Health Sciences (BHSc)'), 'regular', '2027-05-15', UND),
        D(L('General-entry programmes (BA, BSc and others): international deadline', 'Программы общего приёма (BA, BSc и др.): срок для иностранцев'), 'regular', '2027-07-11', UND, status='not-confirmed',
          note=L('The page prints “July 11” without a year next to the note that applications for 2027–2028 open in early October, so it may still be the current cycle’s date.', 'Страница пишет «July 11» без года рядом с пометкой, что заявки на 2027–2028 откроются в начале октября, поэтому это может быть ещё дата текущего цикла.')),
    ],
    fee=fee(125, L('International application fee, non-refundable, with each application.', 'Сбор для иностранцев, не возвращается, с каждой заявкой.'), UNF, V),
    documents=DOCS('UNBC'),
    english={'ielts': eng(6.5, note=L('Academic; not less than 6.0 in any module.', 'Academic; не ниже 6.0 в каждой части.')),
             'toefl': toefl(90, None, L('iBT 90 with at least 20 in each component. The page gives no 1–6 scale figure.', 'iBT 90, не ниже 20 в каждой части. Значения по шкале 1–6 на странице нет.')),
             'duolingo': eng(125, note=L('Not less than 115 in each component.', 'Не ниже 115 в каждой части.')),
             'note': L('CAEL 70 (no subtest below 60); Cambridge C1 Advanced grade B. Requirements updated 23 October 2025.', 'CAEL 70 (ни одной части ниже 60); Cambridge C1 Advanced — оценка B. Требования обновлены 23 октября 2025.')},
    sat=NOSAT,
    costs=costs('2026–2027', UNF, V, L('International undergraduates, tuition per credit hour', 'Иностранные студенты бакалавриата, плата за кредитный час'),
        [(L('Tuition per credit hour', 'Обучение за кредитный час'), 1040.15, B), (L('International student fee, per semester', 'Сбор для иностранцев, за семестр'), 125, B),
         (L('Medical insurance fee, per semester', 'Медицинская страховка, за семестр'), 190, B)],
        L('C$1,040.15 per credit hour', 'C$1,040.15 за кредитный час'),
        L('International tuition is C$1,040.15 per credit hour, with per-semester international and medical insurance fees; a C$9,000 deposit is paid after admission', 'Плата для иностранцев — C$1,040.15 за кредитный час плюс посеместровые сборы для иностранцев и страховка; после зачисления вносится депозит C$9,000'),
        L('tuition rate and international fees; other fees, housing and food extra', 'ставка платы и сборы для иностранцев; прочие сборы, жильё и питание — сверх этого'),
        note=L('The fee page does not print the academic year; the finance office lists Fall 2026 and Winter 2027 charts. BC requires international students to pay C$75 a month for MSP after a three-month wait.', 'На странице сборов учебный год не указан; финансовый отдел приводит таблицы на осень 2026 и зиму 2027. Британская Колумбия требует от иностранцев C$75 в месяц за MSP после трёхмесячного ожидания.')),
    merit=[],
    need={'note': L('UNBC says it cannot offer fully funded scholarships or living expenses; awards are applied for after admission.', 'UNBC указывает, что не может давать полностью покрывающих стипендий и расходов на жизнь; на стипендии подают после зачисления.'), 'source': UN + 'international/frequent-asked-questions-faq', 'verified': V},
    sources=[(L('UNBC — undergraduate application deadlines', 'UNBC — сроки подачи'), UND), (L('UNBC — undergraduate fees (calendar)', 'UNBC — сборы бакалавриата (каталог)'), UNF),
             (L('UNBC — international admissions (calendar)', 'UNBC — приём иностранцев (каталог)'), UNE), (L('UNBC — international tuition and deposit', 'UNBC — плата и депозит для иностранцев'), UNT)],
    checked=[DL, FEE, ENG, TUI],
    unconfirmed=[L('entrance scholarships for international students', 'вступительные стипендии для иностранцев'), TESTS, UZU, MAJORS, FOUND]))

# --------------------------------------------------------------- Vancouver Island
VI = 'https://international.viu.ca/admissions'
VIT = 'https://www.viu.ca/admissions/tuition-fee-schedule'
records.append(R('vancouver-island-university', 'Vancouver Island University', 'VIU', 'Nanaimo', 'BC', PUBC,
    L('A teaching-focused university in Nanaimo on Vancouver Island, with campuses in Cowichan and Powell River.',
      'Университет в Нанаймо на острове Ванкувер с упором на преподавание, с кампусами в Ковичане и Пауэлл-Ривере.'),
    ['medicine', 'arts', 'social-sciences'],
    {'website': 'https://www.viu.ca/', 'admissions': VI, 'international': 'https://international.viu.ca/', 'portal': 'https://www.viu.ca/apply', 'scholarships': 'https://services.viu.ca/financial-aid-awards/viu-scholarships-awards-and-bursaries', 'aid': 'https://services.viu.ca/financial-aid-awards/viu-scholarships-awards-and-bursaries', 'programs': VIT, 'cost': VIT},
    verified=V, aliases=['VIU', 'Vancouver Island'], campuses=['Nanaimo', 'Cowichan', 'Powell River'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'medicine': 'Bachelor of Science in Nursing', 'arts': 'Bachelor of Interior Design', 'social-sciences': 'Bachelor of Social Work'}, VIT, V),
    platforms=[L('VIU online application', 'Онлайн-заявка VIU')],
    rounds=[],
    admNotes=[L('No application deadline for September was found on the pages read; the offer letter sets the deposit deadline.', 'Срок подачи на сентябрь на прочитанных страницах не найден; срок депозита указывается в письме о зачислении.')],
    fee=fee(153, L('Application fee, credit card only.', 'Сбор за заявку, только кредитной картой.'), VI, V),
    documents=DOCS('VIU') + [L('Official documents or certified translations by post', 'Официальные документы или заверенные переводы по почте')],
    english={'ielts': eng(6.5, note=L('Academic; no band below 6.0.', 'Academic; ни одной секции ниже 6.0.')),
             'toefl': toefl(88, 4.5, L('Before 21 January 2026: 88 with no section below 20. After: 4.5 with no section below 4.0.', 'До 21 января 2026: 88, ни одной секции ниже 20. После: 4.5, ни одной секции ниже 4.0.')),
             'duolingo': eng(115, note=L('No band below 105.', 'Ни одной секции ниже 105.')),
             'note': L('CAEL 60; PTE Academic 60 (60 in each section); Cambridge C1/C2 176. Results must be no older than two years.', 'CAEL 60; PTE Academic 60 (60 в каждой части); Cambridge C1/C2 176. Результаты — не старше двух лет.')},
    sat=NOSAT,
    intlQuals=UZ('Akademik Litsey Diplomi (Diploma of Academic Lyceum).', 'Akademik Litsey Diplomi (диплом академического лицея).'),
    costs=costs('2026–2027', VIT, V, L('International undergraduate degree, diploma and certificate programmes', 'Иностранцы на программах бакалавриата, дипломах и сертификатах'),
        [(L('Tuition per credit', 'Обучение за кредит'), 832.09, B), (L('Co-op education, per semester', 'Co-op, за семестр'), 2496.25, B)],
        L('C$832.09 per credit', 'C$832.09 за кредит'),
        L('International undergraduate tuition is C$832.09 per credit; no yearly total is printed', 'Плата для иностранцев на бакалавриате — C$832.09 за кредит; годовой итог не указан'),
        L('tuition rate only; fees, housing and food extra', 'только ставка платы; сборы, жильё и питание — сверх этого'),
        note=L('“Fees are effective April 1” (students’ union fees shown as of 1 April 2026); VIU may amend the schedule without notice.', '«Сборы действуют с 1 апреля» (взносы студенческого союза — на 1 апреля 2026); VIU может менять расписание без уведомления.')),
    merit=[],
    need={'note': NOT_NEED},
    sources=[(L('VIU — international application information', 'VIU — заявка для иностранцев'), VI), (L('VIU — tuition fee schedule', 'VIU — расписание платы'), VIT),
             (L('VIU International — home for international students', 'VIU International — страница для иностранцев'), 'https://international.viu.ca/')],
    checked=[FEE, ENG, UZU, TUI],
    unconfirmed=[L('application deadline', 'срок подачи'), L('entrance scholarships for international students', 'вступительные стипендии для иностранцев'), TESTS, MAJORS, FOUND]))

# --------------------------------------------------------------- Fraser Valley
FV = 'https://international.ufv.ca/future-students/'
FVD = FV + 'apply-to-ufv/application-deadlines/'
FVA = FV + 'apply-to-ufv/'
FVT = FV + 'tuition-scholarships-jobs/tuition-fees-future-students/'
FVE = FV + 'apply-to-ufv/english-language-requirements/'
FVS = FV + 'tuition-scholarships-jobs/scholarships/international-excellence-scholarship/'
records.append(R('university-of-the-fraser-valley', 'University of the Fraser Valley', 'UFV', 'Abbotsford', 'BC', PUBC,
    L('A university in Abbotsford, British Columbia, with campuses in Chilliwack and Mission, east of Vancouver.', 'Университет в Абботсфорде (Британская Колумбия), с кампусами в Чилливаке и Мишене, к востоку от Ванкувера.'),
    [],
    {'website': 'https://www.ufv.ca/', 'admissions': FVD, 'international': 'https://international.ufv.ca/', 'portal': FVA, 'scholarships': FVS, 'aid': FVS, 'programs': FVT, 'cost': FVT},
    verified=V, aliases=['UFV', 'Fraser Valley'], campuses=['Abbotsford', 'Chilliwack', 'Mission'],
    programsStatus='not-checked',
    programNote=L('The pages read name no specific bachelor’s programmes, so no field of study is confirmed.', 'На прочитанных страницах не названы конкретные программы бакалавриата, поэтому ни одно направление не подтверждено.'),
    platforms=[L('UFV online application', 'Онлайн-заявка UFV')],
    rounds=[
        D(L('Application window for the fall semester closes', 'Окончание приёма заявок на осенний семестр'), 'regular', '2027-06-01', FVD, L('The window opens on 1 October. Some programmes may close early due to high demand.', 'Приём открывается 1 октября. Некоторые программы могут закрыться раньше из-за спроса.'), note=NOYEAR),
        D(L('Full payment to confirm acceptance (fall)', 'Полная оплата для подтверждения (осень)'), 'reply', '2027-06-15', FVD, L('Without payment by this date you must re-apply for a later semester.', 'Без оплаты к этой дате придётся подавать заявку заново на другой семестр.'), note=NOYEAR),
    ],
    fee=fee(150, L('For all undergraduate and post-baccalaureate programmes, by credit card.', 'Для всех программ бакалавриата и post-baccalaureate, оплата картой.'), FVA, V),
    documents=DOCS('UFV'),
    english={'ielts': eng(6.5, note=L('Academic; minimum band 6.0. IELTS Indicator is not accepted.', 'Academic; минимум 6.0 в каждой секции. IELTS Indicator не принимается.')),
             'toefl': toefl(88, None, L('iBT (including Home Edition) 88 with no section below 20. The page gives no 1–6 scale figure.', 'iBT (включая Home Edition) 88, ни одной секции ниже 20. Значения по шкале 1–6 на странице нет.')),
             'duolingo': eng(110, note=L('Accepted “until further notice”.', 'Принимается «до дальнейшего уведомления».')),
             'note': L('PTE 61 with 60 in writing; ILAC 3.3. Lower scores can lead to Qualifying Studies.', 'PTE 61, письмо — 60; ILAC 3.3. При более низких баллах — Qualifying Studies.')},
    sat=NOSAT,
    costs=costs('2026–2027', FVT, V, L('International students beginning studies in September 2026 or later, per semester (9 credits)', 'Иностранцы, начавшие учёбу с сентября 2026, за семестр (9 кредитов)'),
        [(L('Tuition, 9 credits (C$797 a credit)', 'Обучение, 9 кредитов (C$797 за кредит)'), 7173, B), (L('Ancillary and student fees', 'Сопутствующие и студенческие сборы'), 485, B)],
        L('C$7,658 a semester for 9 credits (2026–27)', 'C$7,658 за семестр из 9 кредитов (2026–27)'),
        L('Tuition and fees are C$7,658 a semester for 9 credits for students starting from September 2026; the first semester adds a C$1,450 administration fee. UFV estimates about C$30,000 for a first year with living costs', 'Обучение и сборы — C$7,658 за семестр из 9 кредитов для начинающих с сентября 2026; в первом семестре добавляется административный сбор C$1,450. UFV оценивает первый год с расходами на жизнь примерно в C$30,000'),
        L('tuition and ancillary fees for one semester; health plan, housing and food extra', 'обучение и сопутствующие сборы за один семестр; страховка, жильё и питание — сверх этого'), tuition=7173, billed=7658,
        note=L('Nine credits is the minimum full-time load; a typical load is about 15 credits, which costs more.', 'Девять кредитов — минимальная очная нагрузка; типичная нагрузка — около 15 кредитов, это дороже.')),
    merit=[award('International Excellence Entrance Scholarship', L('C$20,000 (C$5,000 a year for four years)', 'C$20,000 (C$5,000 в год на четыре года)'), L('Ten international students a year in their graduating year or recently graduated, with a CGPA of 3.75 on approved grade 12 courses, applying to a degree', 'Десять иностранцев в год, заканчивающих или недавно окончивших школу, с CGPA 3.75 по одобренным предметам 12 класса, поступающих на бакалавриат'),
                 application=AUTO, renewable=True, basis='merit', source=FVS, verified=V, note=L('Renewed with a CGPA of 3.0; awarded first come, first served.', 'Продлевается при CGPA 3.0; распределяется в порядке очереди.'))],
    need={'note': NOT_NEED},
    sources=[(L('UFV — international application deadlines', 'UFV — сроки для иностранцев'), FVD), (L('UFV — how international students apply', 'UFV — как подают иностранцы'), FVA),
             (L('UFV — international tuition and fees', 'UFV — плата для иностранцев'), FVT), (L('UFV — English requirements', 'UFV — требования к английскому'), FVE), (L('UFV — International Excellence Entrance Scholarship', 'UFV — International Excellence Entrance Scholarship'), FVS)],
    checked=[DL, FEE, ENG, TUI, SCH],
    unconfirmed=[TESTS, UZU, MAJORS, FOUND]))
annual['university-of-the-fraser-valley'] = {'currency': 'CAD', 'calc': 'two-semesters', 'basis': 'tuition', 'min': 14346, 'max': 14346, 'note': 'Tuition for two semesters of 9 credits at the 2026–27 rate — calculated by UniPath, not printed by the university; fees, first-semester administration fee, housing and food extra'}

# --------------------------------------------------------------- Capilano
CP = 'https://www.capilanou.ca/admissions/'
CPA = CP + 'apply-to-capu/how-to-apply/apply-as-an-international-student/'
CPT = CP + 'fees--finances/tuition--fees/tuition--other-fees/'
CPE = CP + 'apply-to-capu/admission-requirements/english-language-requirements/'
CPS = CP + 'fees--finances/financial-aid--awards/funding-for-international-students/'
records.append(R('capilano-university', 'Capilano University', 'CapU', 'North Vancouver', 'BC', PUBC,
    L('A teaching university in North Vancouver, British Columbia, known for its arts, business, tourism and education programmes.', 'Университет в Северном Ванкувере (Британская Колумбия), известный программами искусства, бизнеса, туризма и образования.'),
    ['education'],
    {'website': 'https://www.capilanou.ca/', 'admissions': CPA, 'international': CP + 'apply-to-capu/admission-requirements/international-students/', 'portal': CP + 'apply-to-capu/apply-now/', 'scholarships': CPS, 'aid': CPS, 'programs': CPT, 'cost': CPT},
    verified=V, aliases=['CapU', 'Capilano'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'education': 'Early Childhood Care and Education'}, CPT, V),
    platforms=[L('CapU online application (two programmes per application)', 'Онлайн-заявка CapU (две программы на заявку)')],
    rounds=[
        D(L('International Entrance & Performance Award, Fall 2027: complete application', 'International Entrance & Performance Award, осень 2027: полная заявка'), 'scholarship', '2026-11-30', CPS,
          L('Then pay the tuition deposit by 4 December 2026 and submit the study permit application to IRCC by 31 December 2026. The award may close earlier if funds run out.', 'Затем внести депозит до 4 декабря 2026 и подать заявление на разрешение в IRCC до 31 декабря 2026. Стипендия может закрыться раньше, если закончатся средства.')),
    ],
    admNotes=[L('Programme application deadlines are given on each programme’s page; the general fall 2027 date was not read.', 'Сроки подачи указаны на странице каждой программы; общий срок на осень 2027 не прочитан.')],
    fee=fee(135, L('Non-refundable; covers up to two programmes.', 'Не возвращается; покрывает до двух программ.'), CPA, V),
    documents=DOCS('CapU'),
    english={'ielts': eng(6.5, note=L('Academic; no single score below 6 (effective Fall 2027).', 'Academic; ни одной части ниже 6 (с осени 2027).')),
             'toefl': toefl(83, 4.5, L('Tests before 21 January 2026: 83 (within two years). After: 4.5 with no section below 4.0.', 'Тесты до 21 января 2026: 83 (в пределах двух лет). После: 4.5, ни одной секции ниже 4.0.')),
             'duolingo': eng(120, note=L('No sub-score below 110 (from Fall 2027).', 'Ни одного подбалла ниже 110 (с осени 2027).')),
             'note': L('CAEL 70; PTE Academic 61 (from Fall 2027; 56 before).', 'CAEL 70; PTE Academic 61 (с осени 2027; до этого 56).')},
    sat=NOSAT,
    costs=costs('2026–2027', CPT, V, L('International students, standard tuition per credit', 'Иностранцы, стандартная плата за кредит'),
        [(L('Standard tuition per credit', 'Стандартная плата за кредит'), 724.24, B)],
        L('C$724.24 per credit (2026–27)', 'C$724.24 за кредит (2026–27)'),
        L('The standard international rate is C$724.24 per credit; some programmes add surcharges and other fees; no yearly total is printed', 'Стандартная ставка для иностранцев — C$724.24 за кредит; некоторые программы добавляют надбавки и сборы; годовой итог не указан'),
        L('tuition rate only; surcharges, fees, housing and food extra', 'только ставка платы; надбавки, сборы, жильё и питание — сверх этого')),
    merit=[award('International Entrance & Performance Award (IEPA)', L('C$1,800 a semester for 12 credits; up to C$18,000 for a four-year degree', 'C$1,800 за семестр при 12 кредитах; до C$18,000 за четырёхлетнюю программу'), L('New international students admitted for Spring, Summer or Fall 2027 with an admission GPA of 2.50 or higher', 'Новые иностранцы, принятые на весну, лето или осень 2027, с GPA при поступлении от 2.50'),
                 application=L('Meet the qualifying dates: application by 30 November 2026, deposit by 4 December 2026, study permit filed by 31 December 2026', 'Уложиться в даты: заявка до 30 ноября 2026, депозит до 4 декабря 2026, заявление на разрешение до 31 декабря 2026'),
                 renewable=True, basis='automatic', source=CPS, verified=V, note=L('A tuition reduction; kept with a 3.50 term GPA and 12 credits a term. Subject to availability.', 'Скидка с платы; сохраняется при GPA 3.50 за семестр и 12 кредитах. Пока есть средства.'))],
    need={'note': NOT_NEED},
    sources=[(L('CapU — apply as an international student', 'CapU — подача для иностранцев'), CPA), (L('CapU — tuition and other fees 2026/27', 'CapU — плата и сборы 2026/27'), CPT),
             (L('CapU — English language requirements', 'CapU — требования к английскому'), CPE), (L('CapU — funding for international students', 'CapU — финансирование для иностранцев'), CPS)],
    checked=[FEE, ENG, TUI, SCH],
    unconfirmed=[L('general fall 2027 application deadline', 'общий срок подачи на осень 2027'), TESTS, UZU, MAJORS, FOUND]))

# --------------------------------------------------------------- Laurentian
LU = 'https://laurentian.ca/'
LUA = LU + 'apply/international-undergraduate-applicants'
LUF = LU + 'academics/fees-financing/international'
LUS = LU + 'academics/international/scholarships'
LUL = LU + 'academics/admissions/language-requirements'
records.append(R('laurentian-university', 'Laurentian University', 'Laurentian', 'Sudbury', 'ON', PUBC,
    L('A bilingual university in Sudbury, northern Ontario, offering programmes in English and in French.', 'Двуязычный университет в Садбери на севере Онтарио: программы на английском и на французском.'),
    ['business', 'engineering', 'computer-science', 'medicine'],
    {'website': LU, 'admissions': LUA, 'international': LUA, 'portal': LUA, 'scholarships': LUS, 'aid': LUS, 'programs': LUF, 'cost': LUF},
    verified=V, language=L('English and French', 'Английский и французский'), aliases=['Laurentian', 'Université Laurentienne', 'Universite Laurentienne', 'LU Sudbury'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Business Administration', 'engineering': 'Engineering', 'computer-science': 'Computer Science', 'medicine': ('Bachelor of Science in Nursing', LUA)}, LUF, V),
    platforms=[L('Laurentian International Application form', 'Форма International Application Laurentian'), OUAC],
    rounds=[
        D(L('Nursing (BScN) application deadline', 'Срок подачи на Nursing (BScN)'), 'regular', '2027-02-01', LUA, note=NOYEAR),
        D(L('Application deadline, September start (most programmes)', 'Срок подачи, начало в сентябре (большинство программ)'), 'regular', '2027-06-15', LUA, L('Documents by 20 June. Architectural Studies closes 14 February.', 'Документы — до 20 июня. Architectural Studies закрывается 14 февраля.'), note=NOYEAR),
    ],
    fee=fee(None, L('International applicants use Laurentian’s own form; the fee amount was not shown on the page read. Ontario high school students apply through OUAC.', 'Иностранцы подают через собственную форму Laurentian; сумма сбора на прочитанной странице не указана. Ученики школ Онтарио подают через OUAC.'), LUA, V),
    documents=DOCS('Laurentian') + [L('For French-language programmes: proof of French (three years of study in French or TCF/TEF/DALF B2)', 'Для франкоязычных программ: подтверждение французского (три года учёбы на французском или TCF/TEF/DALF B2)')],
    english={'ielts': eng(6.5, note=L('Academic (and One Skill Retake); no band lower than 6.0.', 'Academic (и One Skill Retake); ни одной секции ниже 6.0.')),
             'toefl': toefl(88, 4.5, L('Before 1 January 2026: 88. From 1 January 2026: 4.5 with at least 5.0 in Writing and Speaking.', 'До 1 января 2026: 88. С 1 января 2026: 4.5, не ниже 5.0 по письму и говорению.')),
             'duolingo': eng(120, note=L('No subscore lower than 110.', 'Ни одного подбалла ниже 110.')),
             'note': L('PTE Academic 60; Cambridge C1/C2; Oxford ELLT 7 (no band below 6). French-language programmes need French instead.', 'PTE Academic 60; Cambridge C1/C2; Oxford ELLT 7 (ни одной части ниже 6). Для франкоязычных программ нужен французский.')},
    frenchRequirement={'level': 'B2', 'note': L('For programmes taught in French or bilingual: three years of study in French, or TCF B2 (version for prospective students), TEF B2 in the written part, or DALF B2.', 'Для программ на французском или двуязычных: три года учёбы на французском или TCF B2 (версия для абитуриентов), TEF B2 по письменной части или DALF B2.'), 'source': LUL, 'verified': V},
    sat=NOSAT,
    costs=costs('2026–2027', LUF, V, L('International undergraduates, full year', 'Иностранные студенты бакалавриата, полный год'),
        [(L('Tuition, most programmes (30 credits)', 'Обучение, большинство программ (30 кредитов)'), 30363.92, B), (L('Tuition, Computer Science (30 credits)', 'Обучение, Computer Science (30 кредитов)'), 30052.00, B),
         (L('Tuition, Business or Sports Administration (30 credits)', 'Обучение, Business или Sports Administration (30 кредитов)'), 31614.00, B), (L('Tuition, Architecture (30 credits)', 'Обучение, Architecture (30 кредитов)'), 38844.56, B),
         (L('Tuition, Engineering (36 credits)', 'Обучение, Engineering (36 кредитов)'), 41041.60, B), (L('Incidental and association fees per year', 'Сопутствующие сборы и взносы за год'), 1255.45, B),
         (L('UHIP, 12 months from September 2026', 'UHIP, 12 месяцев с сентября 2026'), 948, B)],
        L('C$30,052–C$41,041.60 tuition a year (2026–27)', 'C$30,052–C$41,041.60 — обучение за год (2026–27)'),
        L('Tuition for 2026–27 from C$30,052 (Computer Science) to C$41,041.60 (Engineering, 36 credits); incidental fees and UHIP are extra', 'Плата 2026–27: от C$30,052 (Computer Science) до C$41,041.60 (инженерия, 36 кредитов); сопутствующие сборы и UHIP — сверх этого'),
        L('tuition in the main figure; incidental fees and UHIP listed separately; housing and food extra', 'в основной сумме — обучение; сопутствующие сборы и UHIP указаны отдельно; жильё и питание — сверх этого'), tuition=30363.92,
        note=L('“All fees are subject to change.”', '«Все суммы могут измениться».')),
    merit=[award('Laurentian International Academic Excellence Scholarships', L('Up to C$40,000 (80–89.9%) or C$60,000 (90–100%) over the degree', 'До C$40,000 (80–89,9%) или C$60,000 (90–100%) за программу'), L('International undergraduate students by admission average; no prior degree', 'Иностранцы на бакалавриате, по среднему баллу при поступлении; без предыдущего диплома'),
                 application=AUTO, renewable=True, basis='automatic', source=LUS, verified=V,
                 note=L('C$10,000 or C$15,000 in year 1, renewed while the average stays above 80% (GPA 7.5) or 90% (GPA 9.5).', 'C$10,000 или C$15,000 на 1 курсе, продлевается, пока средний выше 80% (GPA 7.5) или 90% (GPA 9.5).'))],
    need={'note': NOT_NEED},
    sources=[(L('Laurentian — how international undergraduates apply', 'Laurentian — как подают иностранцы'), LUA), (L('Laurentian — international fees 2026-2027', 'Laurentian — плата для иностранцев 2026–2027'), LUF),
             (L('Laurentian — international scholarships', 'Laurentian — стипендии для иностранцев'), LUS), (L('Laurentian — language requirements', 'Laurentian — языковые требования'), LUL)],
    checked=[DL, ENG, FRQ, TUI, SCH],
    unconfirmed=[FEE, TESTS, UZU, MAJORS, FOUND]))
annual['laurentian-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 30052, 'max': 41041.6, 'note': 'Tuition 2026–27 by programme (Computer Science to Engineering); incidental fees, UHIP, housing and food extra'}

# --------------------------------------------------------------- UQAM
QA = 'https://etudier.uqam.ca/'
QAD = 'https://www.apps.uqam.ca/Application/AdmissionEnLigne/Traitements/DatesLimites/AfficherDatesLimites.aspx?adm_web_cycle=1'
QAF = QA + 'frais-admission'
QAC = QA + 'cout-bourses'
QAT = QA + 'tests-francais-reconnus'
QAS = QA + 'etudiants-internationaux/bourses'
records.append(R('universite-du-quebec-a-montreal', 'Université du Québec à Montréal', 'UQAM', 'Montreal', 'QC', PUBF,
    L('A French-language public university in downtown Montreal and the largest member of the Université du Québec network (listed here on its own). International students must study full time and need a Quebec Acceptance Certificate (CAQ).',
      'Франкоязычный государственный университет в центре Монреаля, крупнейший в сети Université du Québec (здесь — отдельная запись). Иностранцы учатся только очно и нуждаются в сертификате CAQ.'),
    ['business', 'mathematics', 'arts'],
    {'website': 'https://uqam.ca/', 'admissions': QAD, 'international': QA + 'etudiants-internationaux', 'portal': QA + 'admission', 'scholarships': QAS, 'aid': QAS, 'programs': QAD, 'cost': QAC},
    verified=V, language=FR, englishTaught=False, englishTaughtPrograms=[],
    aliases=['UQAM', 'Universite du Quebec a Montreal', 'Université du Québec à Montreal', 'UQ Montreal'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=FREV({'business': 'Baccalauréat en administration', 'mathematics': 'Baccalauréat en actuariat', 'arts': 'Baccalauréat en art dramatique — études théâtrales'}, QAD),
    platforms=[L('UQAM online admission (Admission en ligne)', 'Онлайн-приём UQAM (Admission en ligne)')],
    rounds=[
        D(L('Application deadline for international candidates, autumn 2027 (bachelor’s programmes)', 'Срок подачи для иностранцев, осень 2027 (бакалавриат)'), 'regular', '2027-03-01', QAD,
          L('Some programmes close earlier. Immigration steps take three to six months or more.', 'Некоторые программы закрываются раньше. Иммиграционные шаги занимают от трёх до шести месяцев и больше.')),
    ],
    fee=fee(155, L('Admission fee for international candidates for 2026 (C$117 for Canadians); the amount changes each 1 January.', 'Сбор за заявку для иностранцев на 2026 год (для канадцев C$117); сумма меняется каждое 1 января.'), QAF, V),
    documents=DOCSFR('UQAM'),
    english=dict(NOENG, note=L('Teaching is in French; English is not an admission requirement. French: a recognised test (TEF, TCF, DELF or DALF) for many programmes, or UQAM’s own eliminatory French test for some; results can lead to direct admission or admission with required French training.',
                               'Обучение на французском; английский для поступления не нужен. Французский: для многих программ — признанный тест (TEF, TCF, DELF или DALF), для некоторых — собственный отборочный тест UQAM; по результатам принимают сразу или с обязательными курсами французского.')),
    frenchRequirement={'level': None, 'note': L('Recognised tests: TEF, TCF, DELF, DALF (TFI results remain valid about two years). The level depends on the programme.', 'Признанные тесты: TEF, TCF, DELF, DALF (результаты TFI действительны около двух лет). Уровень зависит от программы.'), 'source': QAT, 'verified': V},
    sat=FRSAT,
    costs=costs('2026–2027', QAC, V, L('International students, full time, certificate or bachelor’s (not French or francophone Belgian passports)', 'Иностранцы очно, сертификат или бакалавриат (без паспортов Франции и франкоязычной Бельгии)'),
        [(L('Estimated yearly tuition and fees, certificate and bachelor’s', 'Оценка годовой платы и сборов, сертификат и бакалавриат'), 29415, E)],
        L('About C$29,415 a year (2026–27 estimate)', 'Около C$29,415 в год (оценка 2026–27)'),
        L('UQAM estimates C$29,415 a year for a full-time international bachelor’s student in 2026–27 (C$10,541 for French and francophone Belgian passports)', 'UQAM оценивает год очного бакалавриата для иностранца в 2026–27 в C$29,415 (C$10,541 для паспортов Франции и франкоязычной Бельгии)'),
        L('tuition and fees, approximate; insurance, housing and food extra', 'обучение и сборы, примерно; страховка, жильё и питание — сверх этого'), tuition=29415,
        note=L('“Amounts in force in June 2026 … approximate and subject to increase without notice.”', '«Суммы на июнь 2026 … приблизительные и могут вырасти без уведомления».')),
    merit=[award('Partial exemption of the increased tuition (international agreements)', L('Reduces the international supplement', 'Уменьшает доплату для иностранцев'), L('Nationals of countries with an agreement with Quebec', 'Граждане стран, у которых есть соглашение с Квебеком'),
                 basis='partnership', source=QAS, verified=V, note=L('Uzbekistan’s place on the list was not checked. Most UQAM scholarships listed are for graduate students.', 'Есть ли в списке Узбекистан, не проверялось. Большинство перечисленных стипендий UQAM — для магистратуры и докторантуры.'))],
    need={'note': NOT_NEED},
    sources=[(L('UQAM — admission deadlines, undergraduate', 'UQAM — сроки подачи, бакалавриат'), QAD), (L('UQAM — admission fees', 'UQAM — сборы за заявку'), QAF), (L('UQAM — cost of studies 2026-2027', 'UQAM — стоимость обучения 2026–2027'), QAC),
             (L('UQAM — recognised French tests', 'UQAM — признанные тесты по французскому'), QAT), (L('UQAM — funding for international students', 'UQAM — финансирование для иностранцев'), QAS)],
    checked=[DL, FEE, FRQ, COSTS],
    unconfirmed=[L('French level by programme', 'уровень французского по программам'), UZU, L('undergraduate entrance scholarships for international students', 'вступительные стипендии бакалавриата для иностранцев'), MAJORS, FOUND]))
annual['universite-du-quebec-a-montreal'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 29415, 'max': 29415, 'note': 'University estimate of yearly tuition and fees 2026–27 for an international bachelor’s student (approximate); insurance, housing and food extra'}

# --------------------------------------------------------------- Sherbrooke
SB = 'https://www.usherbrooke.ca/admission/'
SBD = SB + 'da/planifier-demande/dates-limites/1er-cycle'
SBF = SB + 'da/planifier-demande/frais'
SBT = SB + 'couts-et-aide-financiere/frais-scolarite/personnes-etudiantes-internationales'
SBL = SB + 'da/exigences-linguistiques/exigences-relatives-a-la-langue-francaise-pour-admission'
SBS = SB + 'couts-et-aide-financiere/bourses-et-aide-financiere/etudiants-internationaux'
records.append(R('universite-de-sherbrooke', 'Université de Sherbrooke', 'UdeS', 'Sherbrooke', 'QC', PUBF,
    L('A French-language research university in Sherbrooke, Quebec, with a campus in Longueuil, known for its co-op (paid internship) programmes. International students need a Quebec Acceptance Certificate (CAQ).',
      'Франкоязычный исследовательский университет в Шербруке (Квебек), с кампусом в Лонгёе, известный программами co-op (оплачиваемые стажировки). Иностранцам нужен сертификат CAQ.'),
    ['law', 'business', 'engineering', 'computer-science', 'medicine', 'humanities', 'education'],
    {'website': 'https://www.usherbrooke.ca/', 'admissions': SBD, 'international': SB + 'da/candidats-internationaux', 'portal': SB, 'scholarships': SBS, 'aid': SBS, 'programs': SBT, 'cost': SBT},
    verified=V, language=FR, englishTaught=False, englishTaughtPrograms=[],
    aliases=['UdeS', 'USherbrooke', 'Universite de Sherbrooke', 'Sherbrooke University'], campuses=['Sherbrooke', 'Longueuil'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=FREV({'law': 'Droit', 'business': 'Gestion (Baccalauréat en administration des affaires)', 'engineering': 'Génie', 'computer-science': 'Informatique',
                          'medicine': 'Sciences de la santé', 'humanities': 'Lettres et sciences humaines', 'education': 'Sciences de l’éducation'}, SBT),
    platforms=[L('Université de Sherbrooke online application', 'Онлайн-заявка Université de Sherbrooke')],
    rounds=[
        D(L('Application deadline for international candidates, autumn term (bachelor’s, certificates)', 'Срок подачи для иностранцев, осенний семестр (бакалавриат, сертификаты)'), 'regular', '2027-01-15', SBD,
          L('Some programmes set other dates. Allow three to six months for permits after admission.', 'У некоторых программ свои сроки. На разрешения после зачисления закладывайте три–шесть месяцев.'), note=NOYEAR),
    ],
    fee=fee(106, L('Non-refundable fee for opening and processing the admission file, the same at every level.', 'Невозвратный сбор за открытие и рассмотрение досье, одинаковый на всех уровнях.'), SBF, V),
    documents=DOCSFR('Université de Sherbrooke'),
    english=dict(NOENG, note=L('Teaching is in French; English is not an admission requirement. Each programme sets a minimum French level in the four skills; accepted proof includes DALF (C1, C2), DELF (B1, B2), TCF (TP with the two extra tests, Canada or Québec), TEF (Canada, TEFAQ) and Bright with the Five Star module. TFI is not accepted.',
                               'Обучение на французском; английский для поступления не нужен. Каждая программа задаёт минимальный уровень французского по четырём навыкам; принимаются DALF (C1, C2), DELF (B1, B2), TCF (TP с двумя доп. частями, Canada или Québec), TEF (Canada, TEFAQ) и Bright с модулем Five Star. TFI не принимается.')),
    frenchRequirement={'level': None, 'note': L('The minimum level is set per bachelor’s programme in a table on the university’s page (not read programme by programme).', 'Минимальный уровень задаётся для каждой программы бакалавриата в таблице на странице университета (по программам не прочитан).'), 'source': SBL, 'verified': V},
    sat=FRSAT,
    costs=costs('2026–2027', SBT, V, L('International students (not France or francophone Belgium), one term of 15 credits, autumn 2026', 'Иностранцы (без Франции и франкоязычной Бельгии), один семестр из 15 кредитов, осень 2026'),
        [(L('Arts, letters, humanities, education — term without internship (tuition C$11,505 + fees C$470)', 'Arts, lettres, sciences humaines, éducation — семестр без стажировки (обучение C$11,505 + сборы C$470)'), 11975, B),
         (L('Law, management, engineering, computer science, pure sciences, health — term without internship (tuition C$14,610 + fees C$470)', 'Droit, gestion, génie, informatique, sciences pures, santé — семестр без стажировки (обучение C$14,610 + сборы C$470)'), 15080, B),
         (L('Same group in a programme with internships (tuition C$15,600 + fees C$470)', 'Та же группа в программе со стажировками (обучение C$15,600 + сборы C$470)'), 16070, B)],
        L('C$11,975–C$16,070 a term (autumn 2026)', 'C$11,975–C$16,070 за семестр (осень 2026)'),
        L('A 15-credit term costs C$11,975 to C$16,070 in tuition and related fees depending on the faculty group; an internship term costs C$550', 'Семестр из 15 кредитов стоит C$11,975–C$16,070 (обучение и сопутствующие сборы) в зависимости от группы факультетов; семестр стажировки — C$550'),
        L('tuition and related fees for one term; insurance, housing and food extra', 'обучение и сопутствующие сборы за один семестр; страховка, жильё и питание — сверх этого'), tuition=11505,
        note=L('Tables are updated every term. Paid co-op internships average C$9,000 per 15-week placement.', 'Таблицы обновляются каждый семестр. Оплачиваемые стажировки co-op приносят в среднем C$9,000 за 15 недель.')),
    merit=[award('Exemption from supplementary tuition (Quebec agreements)', L('Removes most of the international supplement', 'Снимает большую часть доплаты для иностранцев'), L('A limited number of nationals of countries with a tuition agreement with Quebec', 'Ограниченное число граждан стран, у которых есть соглашение с Квебеком'),
                 basis='partnership', source=SBS, verified=V, note=L('Uzbekistan’s place on the list was not checked.', 'Есть ли в списке Узбекистан, не проверялось.'))],
    need={'note': NOT_NEED},
    sources=[(L('UdeS — undergraduate admission deadlines', 'UdeS — сроки подачи бакалавриат'), SBD), (L('UdeS — admission file fee', 'UdeS — сбор за досье'), SBF), (L('UdeS — tuition for international students', 'UdeS — плата для иностранцев'), SBT),
             (L('UdeS — French language requirements', 'UdeS — требования к французскому'), SBL), (L('UdeS — funding for international students', 'UdeS — финансирование для иностранцев'), SBS)],
    checked=[DL, FEE, FRQ, TUI],
    unconfirmed=[L('French level by programme', 'уровень французского по программам'), L('entrance scholarships', 'вступительные стипендии'), UZU, MAJORS, FOUND]))
annual['universite-de-sherbrooke'] = {'currency': 'CAD', 'calc': 'two-semesters', 'basis': 'billed', 'min': 23950, 'max': 32140, 'note': 'Two 15-credit terms at the autumn 2026 per-term totals — calculated by UniPath, not printed by the university; insurance, housing and food extra'}

# --------------------------------------------------------------- Moncton
MO = 'https://www.umoncton.ca/'
MOD = MO + 'admission/dates-importantes'
MOA = MO + 'processus-d%E2%80%99admission-pour-%C3%A9tudiants-internationaux'
MOF = MO + 'international/frais'
MOS = MO + 'bourses'
records.append(R('universite-de-moncton', 'Université de Moncton', 'U de M', 'Moncton', 'NB', PUBF,
    L('The largest French-language university in Canada outside Quebec, with campuses in Moncton, Edmundston and Shippagan, New Brunswick. A francophone-minority study permit pathway (PPECFSM) can lead to permanent residence.',
      'Крупнейший франкоязычный университет Канады за пределами Квебека, с кампусами в Монктоне, Эдмундстоне и Шиппагане (Нью-Брансуик). Путь для франкофонных меньшинств (PPECFSM) может вести к постоянному резидентству.'),
    ['engineering', 'medicine', 'law', 'education'],
    {'website': MO, 'admissions': MOD, 'international': MO + 'international', 'portal': MO + 'demande-admission', 'scholarships': MOS, 'aid': MOS, 'programs': MOF, 'cost': MOF},
    verified=V, language=FR, englishTaught=False, englishTaughtPrograms=[],
    aliases=['UMoncton', 'Université de Moncton', 'Universite de Moncton', 'University of Moncton'], campuses=['Moncton', 'Edmundston', 'Shippagan'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=FREV({'engineering': 'Programmes d’ingénierie', 'medicine': 'Baccalauréat en science infirmière', 'law': 'Baccalauréat en Juris Doctor', 'education': 'Baccalauréat en éducation'}, MOF),
    platforms=[L('Université de Moncton online application', 'Онлайн-заявка Université de Moncton')],
    rounds=[
        D(L('Application deadline for international students, autumn session', 'Срок подачи для иностранцев, осенняя сессия'), 'regular', '2027-05-31', MOD,
          L('The page says “before 31 May”; the university may close applications earlier depending on demand.', 'Страница пишет «до 31 мая»; университет может закрыть приём раньше в зависимости от числа заявок.'), note=NOYEAR),
    ],
    fee=fee(300, L('Non-refundable file review fee; C$230 of it is credited against university fees at the start of the first session.', 'Невозвратный сбор за рассмотрение досье; C$230 из него засчитываются в плату в начале первой сессии.'), MOA, V),
    documents=DOCSFR('Université de Moncton'),
    english=dict(NOENG, note=L('Teaching is in French; English is not an admission requirement. The French-language requirement for international applicants was not read.', 'Обучение на французском; английский для поступления не нужен. Требование к французскому для иностранцев не прочитано.')),
    frenchRequirement={'level': None, 'note': L('Not read on the pages checked.', 'На проверенных страницах не прочитано.'), 'source': MOA, 'verified': V},
    sat=FRSAT,
    costs=costs('2026–2027', MOF, V, L('International undergraduates, Moncton campus, one academic year (8 months)', 'Иностранцы на бакалавриате, кампус Монктон, один учебный год (8 месяцев)'),
        [(L('Tuition', 'Обучение'), 15761, B), (L('Related fees (Moncton campus)', 'Сопутствующие сборы (кампус Монктон)'), 726, B), (L('Health plan', 'Медицинский план'), 1296, B), (L('Dental plan', 'Стоматологический план'), 56, B),
         (L('Housing (8 months, estimate)', 'Жильё (8 месяцев, оценка)'), 5720, E)],
        L('C$17,839 tuition and fees for a year (2026–27, indicative)', 'C$17,839 — обучение и сборы за год (2026–27, ориентировочно)'),
        L('Tuition C$15,761 plus related fees, health and dental plans: C$17,839 for 2026–27 (engineering C$18,147, nursing C$18,689); housing and other living costs are extra', 'Обучение C$15,761 плюс сопутствующие сборы, медицинский и стоматологический планы: C$17,839 на 2026–27 (инженерия C$18,147, Nursing C$18,689); жильё и прочие расходы — сверх этого'),
        L('tuition, related fees, health and dental plans', 'обучение, сопутствующие сборы, медицинский и стоматологический планы'), tuition=15761, billed=17839,
        note=L('“For information only; the rates for 2027-2028 have not yet been set.” Currency conversions on the page are dated 18 June 2026.', '«Только для информации; ставки на 2027-2028 ещё не установлены». Пересчёт валют на странице — на 18 июня 2026.')),
    merit=[award('Bourse de mérite scolaire (Université de Moncton)', L('C$4,000–C$5,000 over the degree (C$1,000 a year); up to C$12,000 or C$15,000 with a higher average', 'C$4,000–C$5,000 за программу (C$1,000 в год); до C$12,000 или C$15,000 при более высоком среднем'), L('Students entering a first-cycle programme with an 80% average', 'Поступающие на программу первого цикла со средним 80%'),
                 application=AUTO, renewable=True, basis='automatic', source=MOS, verified=V,
                 note=L('Whether international students are included is not stated on the page read. Many programmes add an automatic admission award of C$1,000–C$2,000.', 'Входят ли иностранцы, на прочитанной странице не указано. Многие программы добавляют автоматическую стипендию при поступлении C$1,000–C$2,000.'))],
    need={'note': NOT_NEED},
    sources=[(L('U de Moncton — important dates', 'U de Moncton — важные даты'), MOD), (L('U de Moncton — admission process for international students', 'U de Moncton — порядок поступления для иностранцев'), MOA),
             (L('U de Moncton — school and living costs 2026-2027', 'U de Moncton — плата и расходы 2026–2027'), MOF), (L('U de Moncton — scholarships', 'U de Moncton — стипендии'), MOS)],
    checked=[DL, FEE, COSTS, SCH],
    unconfirmed=[FRQ, UZU, MAJORS, FOUND]))
annual['universite-de-moncton'] = {'currency': 'CAD', 'basis': 'billed', 'min': 17839, 'max': 17839, 'note': 'Tuition, related fees and health and dental plans 2026–27 (indicative), Moncton campus; housing and food extra'}

assert len(records) == 10
for r in records:
    if r['id'] in ('universite-de-sherbrooke', 'university-of-the-fraser-valley'): r['costs']['breakdown']['period'] = 'semester'
    for it in r['costs'].get('items', []): it.pop('group', None)
ca50.write(records, annual)
flush()
