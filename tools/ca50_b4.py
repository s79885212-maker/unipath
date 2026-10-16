# -*- coding: utf-8 -*-
"""Canada, batch 4 of 5: Lakehead, UPEI, Acadia, St. Francis Xavier, Mount
Allison, Saint Mary's, Bishop's, Lethbridge, Winnipeg, Mount Saint Vincent.
Pages read on 16 and 17 October 2026.

StFX and Brock-style sites refuse the command-line fetch and The University
of Winnipeg answers it with a challenge page; their pages were read in the
browser, where they load normally. The University of Victoria still did not
answer on 16 October 2026 and stays for the last batch.

Same category and rules as the earlier batches."""
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
OUAC_SRC = 'https://www.ouac.on.ca/guide/undergrad-fees'
PARTIAL = L('Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.',
            'Направления — только те, программа которых названа на прочитанных страницах (таблицы сроков, сборов и платы); полный список специальностей не читался, поэтому отсутствующее здесь направление всё равно может быть.')
NOT_NEED = L('Need-based aid for international first-year students is not described on the pages read.', 'Помощь по нуждаемости для иностранных первокурсников на прочитанных страницах не описана.')
UZ = lambda txt_en, txt_ru: L('Uzbekistan: ' + txt_en, 'Узбекистан: ' + txt_ru)
NOSAT = test(None, L('Not checked on the pages read.', 'На прочитанных страницах не проверено.'))
PUBC = L('Public university', 'Государственный университет')
PUBL = L('Public liberal arts university', 'Государственный университет свободных искусств')
FOUND = L('founding year', 'год основания')
MAJORS = L('full list of majors', 'полный список специальностей')
UZU = L('requirements for Uzbekistan', 'требования для Узбекистана')
TESTS = L('test policy', 'политика тестов')
DL = L('deadlines', 'сроки')
FEE = L('application fee', 'сбор за заявку')
ENG = L('English requirements', 'требования к английскому')
TUI = L('tuition', 'плата за обучение')
SCH = L('scholarships', 'стипендии')
COSTS = L('costs', 'стоимость')
DOCS = lambda portal: [L('%s application' % portal, 'Заявка %s' % portal), L('Secondary school transcripts and certificate', 'Школьные табели и аттестат'),
                       L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')]
NOFEE = lambda src: fee(None, L('The amount was not found on the pages read.', 'Сумма на прочитанных страницах не найдена.'), src, V)

records, annual = [], {}

# --------------------------------------------------------------- Lakehead
LK = 'https://www.lakeheadu.ca/'
LKD = LK + 'studentcentral/applying/application-deadlines'
LKT = LK + 'students/finances/student-fees/fees/undergraduate-fees/2026-2027'
LKS = LK + 'international/future/scholarships-awards'
LKE = LK + 'studentcentral/applying/english-language-proficiency-requirements'
records.append(R('lakehead-university', 'Lakehead University', 'Lakehead', 'Thunder Bay', 'ON', PUBC,
    L('A university in Thunder Bay, northwestern Ontario, with a second campus in Orillia and a STEM hub in Barrie. Housing is guaranteed for students who apply by the deadline.',
      'Университет в Тандер-Бее на северо-западе Онтарио, со вторым кампусом в Орилье и STEM-центром в Барри. Жильё гарантировано тем, кто подаёт заявку вовремя.'),
    ['engineering', 'computer-science', 'medicine'],
    {'website': LK, 'admissions': LKD, 'international': LK + 'international/future/dates-and-fees', 'portal': 'https://www.ouac.on.ca/', 'scholarships': LKS, 'aid': LKS, 'programs': LKT, 'cost': LKT},
    verified=V, aliases=['Lakehead', 'LU', 'Lakehead Orillia'], campuses=['Thunder Bay', 'Orillia', L('STEM Hub (Barrie)', 'STEM Hub (Барри)')],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'engineering': 'Engineering', 'computer-science': 'Computer Science', 'medicine': ('Bachelor of Science in Nursing', LKD)}, LKT, V),
    platforms=[OUAC, L('Lakehead online undergraduate application', 'Онлайн-заявка Lakehead')],
    rounds=[
        D(L('Recommended application date for international applicants (fall 2027, most programmes)', 'Рекомендуемая дата подачи для иностранцев (осень 2027, большинство программ)'), 'priority', '2027-03-01', LKD,
          L('Most programmes still accept applications later, pending space. Nursing: 15 January 2027.', 'Большинство программ принимают заявки и позже, пока есть места. Nursing — 15 января 2027.')),
    ],
    fee=fee(159, L('Through OUAC: base fee C$159 for up to three choices plus a C$75 document-evaluation fee for Lakehead. The fee of Lakehead’s own online application was not confirmed on the pages read.', 'Через OUAC: базовый сбор C$159 за три выбора плюс C$75 за оценку документов для Lakehead. Сбор собственной онлайн-заявки Lakehead на прочитанных страницах не подтверждён.'), OUAC_SRC, V),
    documents=DOCS('OUAC or Lakehead'),
    english={'ielts': eng(6.5, note=L('Academic (Online accepted); no score below 6.0. Nursing, Education and the JD ask for more.', 'Academic (Online принимается); ни одной части ниже 6.0. Nursing, Education и JD требуют больше.')),
             'toefl': toefl(80, 4.5, L('Tests before January 2026: 80 with no component below 19. From January 2026 (1–6 scale): 4.5 with no section below 4.0.', 'Тесты до января 2026: 80, ни одной части ниже 19. С января 2026 (шкала 1–6): 4.5, ни одной секции ниже 4.0.')),
             'duolingo': eng(120, note=L('No sub-score below 115.', 'Ни одного подбалла ниже 115.')),
             'note': L('CAEL 60; Cambridge 176 (169 in each part); Michigan English Test 85. Conditional admission through the Academic English Program is possible.', 'CAEL 60; Cambridge 176 (169 в каждой части); Michigan English Test 85. Возможен условный приём через Academic English Program.')},
    sat=NOSAT,
    costs=costs('2026–2027', LKT, V, L('International students in year 1, programme tables read', 'Иностранцы на первом курсе, прочитанные таблицы программ'),
        [(L('Tuition, Computer Science (year 1)', 'Обучение, Computer Science (1 курс)'), 31750.00, B), (L('Ancillary fees, Computer Science', 'Сопутствующие сборы, Computer Science'), 1127.45, B),
         (L('Tuition, Engineering (year 1, Thunder Bay)', 'Обучение, Engineering (1 курс, Тандер-Бей)'), 42000.00, B), (L('Ancillary fees, Engineering (Thunder Bay)', 'Сопутствующие сборы, Engineering (Тандер-Бей)'), 1441.49, B),
         (L('University Health Insurance Plan (UHIP), 12 months', 'Страховка UHIP, 12 месяцев'), 948, B)],
        L('C$31,750–C$42,000 tuition in year 1 (2026–27)', 'C$31,750–C$42,000 — обучение на 1 курсе (2026–27)'),
        L('Year-1 tuition for 2026–27: C$31,750 in Computer Science and C$42,000 in Engineering, plus ancillary fees; the rate for general Arts or Science programmes was not shown on the page read', 'Плата за 1 курс 2026–27: C$31,750 на Computer Science и C$42,000 на инженерии плюс сопутствующие сборы; ставка общих программ Arts или Science на прочитанной странице не показана'),
        L('tuition in the main figure; ancillary fees and UHIP listed separately; housing and food extra', 'в основной сумме — обучение; сопутствующие сборы и UHIP указаны отдельно; жильё и питание — сверх этого'), tuition=31750,
        note=L('“Tuition fees change each spring.” Years 2–4 are shown at slightly different rates on the same page.', '«Плата меняется каждую весну». Для 2–4 курсов на той же странице указаны немного другие суммы.')),
    merit=[award('International Undergraduate Entrance Scholarships 2027-2028', L('C$6,000 (year 1 only) to C$40,000 over four years', 'От C$6,000 (только 1 курс) до C$40,000 за четыре года'), L('International students entering from high school, by Canadian-equivalent average (75% and above) or IB score', 'Иностранцы после школы, по среднему в канадском эквиваленте (от 75%) или баллу IB'),
                 application=AUTO, renewable=True, basis='automatic', source=LKS, verified=V,
                 note=L('90%+ (IB 35+): C$10,000 a year for four years; 80–89.9% (IB 30–34): C$7,500 a year; 75–79.9% (IB 28–29): C$6,000 in year 1 only. Unlimited number; renewal needs the same average at university.', '90%+ (IB 35+): C$10,000 в год на четыре года; 80–89,9% (IB 30–34): C$7,500 в год; 75–79,9% (IB 28–29): C$6,000 только на 1 курсе. Число не ограничено; для продления нужен такой же средний балл в университете.'))],
    need={'note': NOT_NEED},
    sources=[(L('Lakehead — application deadlines', 'Lakehead — сроки подачи'), LKD), (L('Lakehead — undergraduate fees 2026-2027', 'Lakehead — плата бакалавриата 2026–2027'), LKT),
             (L('Lakehead — international scholarships', 'Lakehead — стипендии для иностранцев'), LKS), (L('Lakehead — English proficiency', 'Lakehead — требования к английскому'), LKE), (L('OUAC — undergraduate fees', 'OUAC — сборы бакалавриата'), OUAC_SRC)],
    checked=[DL, ENG, TUI, SCH],
    unconfirmed=[L('tuition of general Arts and Science programmes', 'плата общих программ Arts и Science'), TESTS, UZU, MAJORS, FOUND]))
annual['lakehead-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 31750, 'max': 42000, 'note': 'Year-1 tuition 2026–27 for the programmes read (Computer Science, Engineering); fees, UHIP, housing and food extra'}

# --------------------------------------------------------------- UPEI
UP = 'https://www.upei.ca/'
UPA = UP + 'apply'
UPF = 'https://calendar.upei.ca/current/chapter/tuition-and-fees-2/'
UPE = UP + 'admission-requirements/english-language-proficiency-requirements/undergraduate-programs'
UPC = UP + 'admission-requirements/country-specific-requirements'
UPS = UP + 'scholarships-and-awards/international-student-scholarships'
records.append(R('university-of-prince-edward-island', 'University of Prince Edward Island', 'UPEI', 'Charlottetown', 'PE', PUBC,
    L('The only university on Prince Edward Island, in Charlottetown, home of the Atlantic Veterinary College and a School of Sustainable Design Engineering.',
      'Единственный университет острова Принца Эдуарда, в Шарлоттауне; здесь Atlantic Veterinary College и школа устойчивого инженерного проектирования.'),
    ['engineering', 'medicine', 'education'],
    {'website': UP, 'admissions': UPA, 'international': UP + 'international-students', 'portal': UPA, 'scholarships': UPS, 'aid': UPS, 'programs': UPF, 'cost': UPF},
    verified=V, aliases=['UPEI', 'U of PEI'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'engineering': 'Engineering (Professional Fee)', 'medicine': ('Nursing, Radiography, Doctor of Veterinary Medicine', UPE), 'education': ('Education', UPE)}, UPF, V),
    platforms=[L('UPEI online application', 'Онлайн-заявка UPEI')],
    rounds=[],
    fee=fee(100, L('International application fee for each application, non-refundable (2026/2027 schedule). A non-refundable C$3,000 deposit is charged to international students.', 'Сбор для иностранцев за каждую заявку, не возвращается (расписание 2026/2027). С иностранцев берут невозвратный депозит C$3,000.'), UPF, V),
    documents=DOCS('UPEI'),
    admNotes=[L('UPEI sets the deadlines of non-competitive programmes for international applicants each year and does not publish them; it asks applicants to email inte@upei.ca.', 'UPEI устанавливает сроки непрофильных программ для иностранцев каждый год и не публикует их; абитуриентов просят писать на inte@upei.ca.')],
    english={'ielts': eng(6.5, note=L('Academic; no band below 6. Nursing, Radiography, Veterinary Medicine and Education: 7 with 7 in writing and speaking.', 'Academic; ни одной секции ниже 6. Nursing, Radiography, ветеринария и Education: 7, по письму и говорению — 7.')),
             'toefl': toefl(None, 4.5, L('iBT: 4.5 with no band below 4 (1–6 scale).', 'iBT: 4.5, ни одной секции ниже 4 (шкала 1–6).')),
             'duolingo': eng(120, note=L('Subscores of at least 115 in Literacy, Comprehension, Conversation and Production.', 'Подбаллы не ниже 115 по Literacy, Comprehension, Conversation и Production.')),
             'note': L('CAEL 60 (70 for Nursing, Radiography, Veterinary Medicine and Education).', 'CAEL 60 (70 для Nursing, Radiography, ветеринарии и Education).')},
    sat=test('optional', L('For U.S. applicants: “SAT or ACT results are not required, but can be used for scholarship reference.”', 'Для американских абитуриентов: «результаты SAT или ACT не требуются, но могут учитываться при стипендиях».'), source=UPC, verified=V),
    intlQuals=UZ('not listed on UPEI’s country page. For Russia the page asks for the Attestat o srednem obrazovanii with a minimum average of 4/5.', 'нет в списке стран UPEI. Для России страница требует аттестат о среднем образовании со средним баллом не ниже 4/5.'),
    costs=costs('2026–2027', UPF, V, L('International undergraduates, full time', 'Иностранные студенты бакалавриата, очно'),
        [(L('Tuition per three-credit-hour course', 'Обучение за курс в три кредитных часа'), 813, B), (L('International student fee, per year (full time)', 'Сбор для иностранцев за год (очно)'), 9718, B),
         (L('Engineering professional fee', 'Профессиональный сбор Engineering'), 1250, B)],
        L('C$813 per course plus C$9,718 a year for international students (2026–27)', 'C$813 за курс плюс C$9,718 в год для иностранцев (2026–27)'),
        L('Tuition is C$813 per three-credit course; international students also pay a C$9,718 yearly fee. A full-year total is not printed on the page read', 'Обучение — C$813 за курс в три кредита; иностранцы платят ещё сбор C$9,718 в год. Итог за год на прочитанной странице не указан'),
        L('tuition rate and international fee; other mandatory fees, insurance, housing and food extra', 'ставка платы и сбор для иностранцев; прочие обязательные сборы, страховка, жильё и питание — сверх этого'),
        note=L('Approved by the Board of Governors for 2026/2027 and “subject to change without notice”.', 'Утверждено советом управляющих на 2026/2027 и «может меняться без уведомления».')),
    merit=[award('UPEI International Entrance Award', L('C$1,000–C$3,000', 'C$1,000–C$3,000'), L('International students with a valid study permit and converted averages of 90–100% and/or in the top 5–10% of their class', 'Иностранцы с разрешением на учёбу и средним 90–100% и/или в 5–10% лучших в классе'),
                 application=AUTO, basis='merit', source=UPS, verified=V,
                 note=L('A limited number; early applications are encouraged. The 2027 cycle dates were not published on the page read.', 'Число ограничено; советуют подавать заявку рано. Сроки цикла 2027 на прочитанной странице не опубликованы.'))],
    need={'note': NOT_NEED},
    sources=[(L('UPEI — how to apply', 'UPEI — как подать'), UPA), (L('UPEI — tuition and fees 2026/2027 (calendar)', 'UPEI — плата 2026/2027 (каталог)'), UPF),
             (L('UPEI — English requirements', 'UPEI — требования к английскому'), UPE), (L('UPEI — country requirements', 'UPEI — требования по странам'), UPC), (L('UPEI — international entrance awards', 'UPEI — стипендии для иностранцев'), UPS)],
    checked=[FEE, ENG, TESTS, TUI, SCH],
    unconfirmed=[L('application deadline for international applicants', 'срок подачи для иностранцев'), UZU, MAJORS, FOUND]))

# --------------------------------------------------------------- Acadia
AC = 'https://www2.acadiau.ca/'
ACA = AC + 'admissions/application-process/international-students.html'
ACF = AC + 'student-services/student-accounts/tuition-fees/full-time-student-fees.html'
ACS = AC + 'student-services/scholarships-financial-aid/international-students/entrance-scholarships.html'
records.append(R('acadia-university', 'Acadia University', 'Acadia', 'Wolfville', 'NS', PUBL,
    L('A small residential university in Wolfville, in Nova Scotia’s Annapolis Valley, focused on undergraduate teaching.',
      'Небольшой университет с кампусом-общежитием в Вулфвилле, в долине Аннаполис (Новая Шотландия), с упором на бакалавриат.'),
    ['biology', 'business'],
    {'website': 'https://www2.acadiau.ca/', 'admissions': ACA, 'international': ACA, 'portal': 'https://connect.acadiau.ca/portal/apply_ug', 'scholarships': ACS, 'aid': ACS, 'programs': ACA, 'cost': ACF},
    verified=V, aliases=['Acadia', 'AcadiaU'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'biology': 'Biology', 'business': 'Business Administration'}, ACA, V),
    platforms=[L('Acadia online application', 'Онлайн-заявка Acadia')],
    rounds=[
        D(L('Apply for admission and complete the scholarship forms to be considered for entrance scholarships', 'Подать заявку и заполнить формы стипендий для рассмотрения на вступительные стипендии'), 'scholarship', '2027-03-01', ACS,
          L('Applications are accepted any time after 21 September; scholarship offers come by mid-April.', 'Заявки принимают в любое время после 21 сентября; предложения стипендий — к середине апреля.'), note=NOYEAR),
    ],
    fee=fee(40, L('Application processing fee, paid online by credit card.', 'Сбор за обработку заявки, оплата картой онлайн.'), ACA, V),
    documents=DOCS('Acadia'),
    english={'ielts': eng(6.5, note=L('No subtest below 6.0.', 'Ни одной части ниже 6.0.')),
             'toefl': toefl(90, 4.5, L('Before 21 January 2026: 90 with no subtest below 20. From 21 January 2026: 4.5 overall (the band minimum is cut off on the page read).', 'До 21 января 2026: 90, ни одной части ниже 20. С 21 января 2026: 4.5 в сумме (минимум по секциям на прочитанной странице обрезан).')),
             'duolingo': eng(115, note=L('No sub-score below 90.', 'Ни одного подбалла ниже 90.')),
             'note': L('CAEL 70 (60 in each part); PTE Academic 61 (60); Cambridge C1 Advanced 180; LanguageCert Academic 70–74; Oxford Test of English Advanced 135.', 'CAEL 70 (60 в каждой части); PTE Academic 61 (60); Cambridge C1 Advanced 180; LanguageCert Academic 70–74; Oxford Test of English Advanced 135.')},
    sat=NOSAT,
    intlQuals=UZ('Attestat o Srednem Obrazovanii with 4/5.', 'Attestat o Srednem Obrazovanii со средним 4/5.'),
    costs=costs('2026–2027', ACF, V, L('International undergraduates, full course load (24–33 credit hours a year)', 'Иностранные студенты бакалавриата, полная нагрузка (24–33 кредитных часа в год)'),
        [(L('Tuition', 'Обучение'), 25172.62, B), (L('Technology fee', 'Технологический сбор'), 627.50, B), (L('Athletic and health fee', 'Спортивный и медицинский сбор'), 287.00, B),
         (L('Campus renewal fee', 'Сбор на обновление кампуса'), 250.00, B), (L('Students’ Union fees', 'Сборы студенческого союза'), 362.00, B), (L('Students’ Union health plan', 'Медицинский план студенческого союза'), 1592.74, B),
         (L('Students’ Union dental plan', 'Стоматологический план'), 165.00, B), (L('Access fee', 'Сбор Access'), 10.00, B),
         (L('Residence room (most rooms)', 'Комната в общежитии (большинство комнат)'), {'min': 7335, 'max': 8980}, E), (L('Meal plan (from)', 'План питания (от)'), 6338, E)],
        L('C$28,466.86 tuition and fees for a year (2026–27)', 'C$28,466.86 — обучение и сборы за год (2026–27)'),
        L('Acadia lists C$28,466.86 for a full year of tuition and fees for international undergraduates; residence (most rooms C$7,335–C$8,980) and meals (from C$6,338) are extra', 'Acadia указывает C$28,466.86 за год обучения и сборов для иностранцев; общежитие (большинство комнат C$7,335–C$8,980) и питание (от C$6,338) — сверх этого'),
        L('tuition and mandatory fees, including the health and dental plans', 'обучение и обязательные сборы, включая медицинский и стоматологический планы'), tuition=25172.62, billed=28466.86,
        note=L('In case of a discrepancy, the Academic Calendar for the year prevails.', 'При расхождении действует Academic Calendar текущего года.')),
    merit=[award('Acadia entrance scholarships', L('C$500–C$2,500 initial offers; other scholarships and scholar-bursaries up to C$80,000 over four years', 'Начальные предложения C$500–C$2,500; другие стипендии и scholar-bursaries — до C$80,000 за четыре года'), L('Canadian and international applicants with at least an 80% average in the courses required for admission', 'Канадские и иностранные абитуриенты со средним от 80% по предметам, нужным для поступления'),
                 application=L('Automatic initial offer; scholarship forms in the portal by 1 March', 'Начальное предложение — автоматически; формы стипендий в портале до 1 марта'), basis='merit', source=ACS, verified=V,
                 note=L('Some scholar-bursaries (e.g. Harrison McCain, Spicer-Hennessey) are only for students from Canadian or Nova Scotia schools.', 'Некоторые scholar-bursaries (например, Harrison McCain, Spicer-Hennessey) — только для выпускников канадских или новошотландских школ.'))],
    need={'note': NOT_NEED},
    sources=[(L('Acadia — admission for international students', 'Acadia — приём иностранцев'), ACA), (L('Acadia — fees for full course load 2026-2027', 'Acadia — плата за полную нагрузку 2026–2027'), ACF),
             (L('Acadia — international entrance scholarships', 'Acadia — вступительные стипендии для иностранцев'), ACS)],
    checked=[DL, FEE, ENG, UZU, COSTS, SCH],
    unconfirmed=[TESTS, MAJORS, FOUND]))
annual['acadia-university'] = {'currency': 'CAD', 'basis': 'billed', 'min': 28466.86, 'max': 28466.86, 'note': 'Tuition and mandatory fees 2026–27 for a full course load; housing and food extra'}

# --------------------------------------------------------------- StFX
SX = 'https://www.stfx.ca/'
SXD = SX + 'applications-admissions/admissions-information/key-dates-deadlines'
SXF = SX + 'student-accounts'
SXS = SX + 'applications-admissions/admissions-information/after-you-apply/scholarships'
SXM = SX + 'mckennascholars'
records.append(R('st-francis-xavier-university', 'St. Francis Xavier University', 'StFX', 'Antigonish', 'NS', PUBL,
    L('A residential undergraduate university in Antigonish, Nova Scotia, known for the X-Ring and the Gerald Schwartz School of Business.',
      'Университет с кампусом-общежитием в Антигонише (Новая Шотландия), известный кольцом X-Ring и Gerald Schwartz School of Business.'),
    ['business', 'medicine', 'education'],
    {'website': SX, 'admissions': SXD, 'international': SXD, 'portal': SX + 'applications-admissions', 'scholarships': SXS, 'aid': SXS, 'programs': SXF, 'cost': SXF},
    verified=V, aliases=['StFX', 'St. FX', 'St Francis Xavier', 'Saint Francis Xavier University'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': ('Gerald Schwartz School of Business', SXM), 'medicine': ('Bachelor of Science in Nursing', SXD), 'education': ('Bachelor of Education', SXD)}, SXF, V),
    platforms=[L('StFX online application', 'Онлайн-заявка StFX')],
    rounds=[
        D(L('Apply for admission, scholarship application and documents for Major Scholarship consideration', 'Заявка на поступление, заявка на стипендию и документы для рассмотрения на Major Scholarships'), 'scholarship', '2027-03-01', SXD,
          L('First-semester transcripts must reach the Admissions office by 12 noon.', 'Табели первого семестра должны поступить в приёмную комиссию до 12:00.')),
        D(L('Confirm acceptance; room guarantee; accept scholarships', 'Подтвердить зачисление; гарантия комнаты; принять стипендии'), 'reply', '2027-05-15', SXD),
        D(L('Deadline for international student applications', 'Срок подачи для иностранцев'), 'regular', '2027-05-30', SXD,
          L('Applications after 30 May 2027 are reviewed case by case according to visa processing times. Nursing: 3 March 2027.', 'Заявки после 30 мая 2027 рассматривают индивидуально, с учётом сроков виз. Nursing — 3 марта 2027.')),
    ],
    fee=NOFEE(SXD),
    documents=DOCS('StFX'),
    english={'note': L('Not confirmed: the official English-requirements page was not read (third-party summaries quote IELTS 6.5 and TOEFL 90, which are not used here). StFX may require proof of English from any applicant.', 'Не подтверждено: официальная страница требований к английскому не прочитана (сторонние обзоры называют IELTS 6.5 и TOEFL 90 — здесь не используются). StFX может потребовать подтверждение английского от любого абитуриента.')},
    sat=NOSAT,
    costs=costs('2026–2027', SXF, V, L('International undergraduates (not Nursing), full time: 24–30 credits from September to April', 'Иностранные студенты бакалавриата (не Nursing), очно: 24–30 кредитов с сентября по апрель'),
        [(L('Tuition', 'Обучение'), 10340.00, B), (L('International student fee', 'Сбор для иностранцев'), 11760.00, B), (L('Information and technology fee', 'Сбор за IT'), 494.00, B),
         (L('Facilities renewal, fitness, Students’ Union and other fees', 'Обновление зданий, спорт, студенческий союз и другие сборы'), 789.10, B),
         (L('International health plan (mandatory)', 'Медицинский план для иностранцев (обязательный)'), 1305.00, B), (L('International dental plan', 'Стоматологический план для иностранцев'), 270.00, B)],
        L('C$24,958.10 tuition and fees for a year (2026–27)', 'C$24,958.10 — обучение и сборы за год (2026–27)'),
        L('StFX lists C$24,958.10 for international undergraduates in 2026–27: tuition C$10,340, the international fee C$11,760 and general fees with the health and dental plans; housing and food are extra', 'StFX указывает C$24,958.10 для иностранцев в 2026–27: обучение C$10,340, сбор для иностранцев C$11,760 и общие сборы с медицинским и стоматологическим планами; жильё и питание — сверх этого'),
        L('tuition, international fee and mandatory fees', 'обучение, сбор для иностранцев и обязательные сборы'), tuition=10340.00, billed=24958.10,
        note=L('Nursing has a higher international fee (C$12,212). Fourth-year returning international students pay C$10,340 in international fees.', 'В Nursing сбор для иностранцев выше (C$12,212). На четвёртом курсе сбор для иностранцев — C$10,340.')),
    merit=[award('McKenna Scholars Program', L('C$20,000, C$40,000 or C$125,000 over four years', 'C$20,000, C$40,000 или C$125,000 за четыре года'), L('High-achieving entering students in any field, by achievement, leadership, character, service and community impact', 'Сильные первокурсники любых направлений — по достижениям, лидерству, характеру, служению и влиянию на сообщество'),
                 application=L('Applications open 1 December 2026', 'Приём заявок с 1 декабря 2026'), renewable=True, basis='merit', source=SXM, verified=V,
                 note=L('Each year 8 awards of C$125,000, 16 of C$40,000 and 36 of C$20,000. The pages read do not say whether international students are eligible. Competitive; never counted as received.', 'Каждый год 8 стипендий по C$125,000, 16 по C$40,000 и 36 по C$20,000. Могут ли участвовать иностранцы, на прочитанных страницах не сказано. Конкурсные; как полученные не учитываются.')),
           award('National Entrance Scholarships', L('At least C$5,000 over four years', 'Не меньше C$5,000 за четыре года'), L('Applicants with a minimum admission average of 85%', 'Абитуриенты со средним баллом от 85%'),
                 application=L('Apply for admission by 1 March 2027', 'Подать заявку на поступление до 1 марта 2027'), basis='merit', source=SXD, verified=V,
                 note=L('International eligibility is not stated on the page read.', 'Право иностранцев на эту стипендию на прочитанной странице не указано.'))],
    need={'note': NOT_NEED},
    sources=[(L('StFX — key dates and deadlines', 'StFX — ключевые даты и сроки'), SXD), (L('StFX — student accounts: tuition and fees 2026-27', 'StFX — плата и сборы 2026–27'), SXF),
             (L('StFX — scholarships', 'StFX — стипендии'), SXS), (L('StFX — McKenna Scholars Program', 'StFX — McKenna Scholars Program'), SXM)],
    checked=[DL, COSTS, SCH],
    unconfirmed=[ENG, FEE, TESTS, UZU, MAJORS, FOUND]))
annual['st-francis-xavier-university'] = {'currency': 'CAD', 'basis': 'billed', 'min': 24958.1, 'max': 24958.1, 'note': 'Tuition, international fee and mandatory fees 2026–27 (not Nursing); housing and food extra'}

# --------------------------------------------------------------- Mount Allison
MA = 'https://mta.ca/'
MAD = MA + 'admissions/important-admission-dates-and-deadlines'
MAC = MA + 'costs-financial-aid/tuition-and-costs-first-year-students'
MAS = MA + 'costs-financial-aid/scholarships-and-awards-first-year-students'
MAR = MA + 'admissions/admission-requirements'
records.append(R('mount-allison-university', 'Mount Allison University', 'Mount Allison', 'Sackville', 'NB', PUBL,
    L('A small residential liberal arts and sciences university in Sackville, New Brunswick, known for its Bell Scholarships.',
      'Небольшой университет свободных искусств и наук с кампусом-общежитием в Саквилле (Нью-Брансуик), известный стипендиями Bell.'),
    ['business', 'arts'],
    {'website': MA, 'admissions': MAD, 'international': MAR, 'portal': MA + 'admissions/how-apply', 'scholarships': MAS, 'aid': MAS, 'programs': MAR, 'cost': MAC},
    verified=V, aliases=['MtA', 'Mount A', 'Mount Allison'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Bachelor of Commerce', 'arts': ('Bachelor of Fine Arts; Bachelor of Music', MAD)}, MAR, V),
    platforms=[L('Mount Allison online application (admission and scholarships)', 'Онлайн-заявка Mount Allison (поступление и стипендии)')],
    rounds=[
        D(L('Music (BMus, BMusEd) application package', 'Пакет документов Music (BMus, BMusEd)'), 'portfolio', '2027-02-01', MAD, note=NOYEAR),
        D(L('Fine Arts application and portfolio', 'Заявка и портфолио Fine Arts'), 'portfolio', '2027-02-15', MAD, note=NOYEAR),
        D(L('Application for admission and scholarships, with all documents, to be considered for scholarships', 'Заявка на поступление и стипендии со всеми документами — для рассмотрения на стипендии'), 'scholarship', '2027-03-01', MAD,
          L('No general application deadline is printed; the page lists dates for the 2027–28 academic year.', 'Общего срока подачи нет; страница перечисляет даты на 2027–28 учебный год.'), note=NOYEAR),
        D(L('Accept the offer of admission and scholarships', 'Принять предложение о зачислении и стипендии'), 'reply', '2027-05-01', MAD,
          L('International students receive deposit instructions by email after an unconditional offer.', 'Иностранцы получают инструкции по депозиту по почте после безусловного предложения.'), note=NOYEAR),
    ],
    fee=NOFEE(MA + 'admissions/how-apply'),
    documents=DOCS('Mount Allison') + [L('Copy of passport or government-issued ID', 'Копия паспорта или удостоверения личности')],
    english={'ielts': eng(6.5, note=L('Academic; no band lower than 6.', 'Academic; ни одной секции ниже 6.')),
             'toefl': toefl(90, 4.5, L('Internet test: 90 with section minimums (Writing 20). Tests from 21 January 2026: 4.5 overall, 4.5 in Writing and 4.0 in the other sections.', 'Интернет-тест: 90 с минимумами по секциям (Writing 20). Тесты с 21 января 2026: 4.5 в сумме, Writing 4.5, остальные — 4.0.')),
             'duolingo': eng(110, note=L('Comprehension 125, Literacy 120, Conversation 110, Production 95.', 'Comprehension 125, Literacy 120, Conversation 110, Production 95.')),
             'note': L('PTE Academic 60 (no score below 51); CAEL 70 (60); Cambridge 176 (169).', 'PTE Academic 60 (ни одной части ниже 51); CAEL 70 (60); Cambridge 176 (169).')},
    sat=NOSAT,
    costs=costs('2026–2027', MAC, V, L('International undergraduate with a full course load, single room and unlimited meal plan; university estimate', 'Иностранный студент на полной нагрузке, одноместная комната и безлимитное питание; оценка университета'),
        [(L('Tuition', 'Обучение'), 22890, E), (L('Residence (single room) and unlimited meal plan', 'Общежитие (одноместная комната) и безлимитное питание'), 15965, E), (L('Student fees', 'Студенческие сборы'), 1930, E),
         (L('International student basic medical coverage', 'Базовая медицинская страховка для иностранцев'), 785, E), (L('Books and supplies', 'Книги и материалы'), 2500, E)],
        L('C$44,070 for one year (2026–27 estimate)', 'C$44,070 за год (оценка 2026–27)'),
        L('Mount Allison estimates C$44,070 for a year: tuition C$22,890, residence and meals C$15,965, fees C$1,930, medical coverage C$785 and books C$2,500', 'Mount Allison оценивает год в C$44,070: обучение C$22,890, общежитие и питание C$15,965, сборы C$1,930, страховка C$785 и книги C$2,500'),
        L('tuition, residence with meals, student fees, medical coverage and books', 'обучение, общежитие с питанием, студенческие сборы, страховка и книги'), tuition=22890, budget=44070,
        note=L('“These estimates are guides only.” Aviation students have extra costs.', '«Эти оценки — только ориентир». У студентов Aviation есть дополнительные расходы.')),
    merit=[award('Mount Allison entrance scholarships', L('C$4,000–C$20,000 over four years (C$1,000–C$5,000 a year)', 'C$4,000–C$20,000 за четыре года (C$1,000–C$5,000 в год)'), L('All entering students with a calculated admission average of 80% or more', 'Все поступающие со средним баллом от 80%'),
                 application=AUTO, renewable=True, basis='automatic', source=MAS, verified=V),
           award('Marjorie Young Bell Scholarship', L('C$70,000 (C$17,500 a year)', 'C$70,000 (C$17,500 в год)'), L('Eight outstanding high school graduates with academic ability, leadership and service', 'Восемь выдающихся выпускников школ с академическими способностями, лидерством и общественной работой'),
                 application=L('Application and documents by 1 March', 'Заявка и документы до 1 марта'), renewable=True, basis='merit', source=MAS, verified=V,
                 note=L('Finalists not selected are offered the C$20,000 President’s Scholarship. Competitive; never counted as received.', 'Финалистам, которые не прошли, предлагают President’s Scholarship на C$20,000. Конкурсная; как полученная не учитывается.')),
           award('International Award', money(5000), L('Five incoming international students with exceptional achievement, community involvement and/or financial need', 'Пять иностранных первокурсников с выдающимися достижениями, общественной активностью и/или нуждаемостью'),
                 renewable=False, basis='need-merit', source=MAS, verified=V, note=L('Can be combined with all other Mount Allison scholarships and bursaries.', 'Совмещается со всеми другими стипендиями и грантами Mount Allison.'))],
    need={'availableToInternational': True, 'note': L('The International Award can weigh financial need; a bursary application is due 1 March.', 'International Award может учитывать нуждаемость; заявка на гранты — до 1 марта.'), 'source': MAS, 'verified': V},
    sources=[(L('Mount Allison — admission dates and deadlines', 'Mount Allison — даты и сроки'), MAD), (L('Mount Allison — tuition and costs 2026-27', 'Mount Allison — плата и стоимость 2026–27'), MAC),
             (L('Mount Allison — scholarships and awards', 'Mount Allison — стипендии'), MAS), (L('Mount Allison — admission requirements', 'Mount Allison — требования'), MAR)],
    checked=[DL, ENG, COSTS, SCH],
    unconfirmed=[FEE, TESTS, UZU, MAJORS, FOUND]))
annual['mount-allison-university'] = {'currency': 'CAD', 'basis': 'total', 'min': 44070, 'max': 44070, 'note': 'University estimate 2026–27: tuition, residence and meals, fees, medical coverage and books'}

# --------------------------------------------------------------- Saint Mary's
SM = 'https://www.smu.ca/future-students/'
SMD = SM + 'admissions/importantdates/'
SMT = SM + 'moneymatters/tuitionandfees/'
SMS = SM + 'moneymatters/scholarshipsawards/'
SME = SM + 'admissions/is-language-requirements.html'
SMI = SM + 'admissions/internationaladmissions/'
records.append(R('saint-marys-university', 'Saint Mary’s University', 'SMU', 'Halifax', 'NS', PUBC,
    L('A university in Halifax, Nova Scotia, home of the Sobey School of Business, with a large share of international students.',
      'Университет в Галифаксе (Новая Шотландия) с Sobey School of Business и большой долей иностранных студентов.'),
    ['humanities', 'business', 'engineering'],
    {'website': 'https://www.smu.ca/', 'admissions': SMD, 'international': SMI, 'portal': SM + 'admissions/cs-apply-online.html', 'scholarships': SMS, 'aid': SMS, 'programs': SMT, 'cost': SMT},
    verified=V, aliases=['SMU', 'Saint Marys', 'St. Mary’s University Halifax', 'Sobey School of Business'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Arts', 'business': 'Commerce (Sobey School of Business)', 'engineering': 'Science & Engineering'}, SMT, V),
    platforms=[L('Saint Mary’s online application', 'Онлайн-заявка Saint Mary’s')],
    rounds=[
        D(L('Apply for admission (for Admissions Scholarships) and submit the Entrance Awards application', 'Подать заявку на поступление (для Admissions Scholarships) и заявку на Entrance Awards'), 'scholarship', '2027-02-15', SMD,
          L('Applications for 2027–28 opened on 1 October 2026; the Entrance Awards application opened on 15 October 2026.', 'Приём на 2027–28 открылся 1 октября 2026; заявка на Entrance Awards — 15 октября 2026.')),
    ],
    fee=NOFEE(SM + 'admissions/cs-apply-online.html'),
    documents=DOCS('Saint Mary’s') + [L('Test of English (required for most national systems)', 'Тест по английскому (нужен для большинства национальных систем)')],
    admNotes=[L('The dates page covers the 2026–2027 year and does not yet give the international application deadline for September 2027.', 'Страница дат охватывает 2026–2027 год и ещё не называет срок подачи для иностранцев на сентябрь 2027.')],
    english={'ielts': eng(6.5, note=L('Academic or IELTS Online Indicator; no individual score below 6.0.', 'Academic или IELTS Online Indicator; ни одной части ниже 6.0.')),
             'toefl': toefl(83, 4.5, L('January 2026 or earlier: iBT 83 with no band below 20. After January 2026: 4.5 in Listening and no other band below 4.0.', 'Январь 2026 и раньше: iBT 83, ни одной секции ниже 20. После января 2026: Listening 4.5, остальные — не ниже 4.0.')),
             'duolingo': eng(115, note=L('No sub-score below 95.', 'Ни одного подбалла ниже 95.')),
             'note': L('Cambridge 176 (169); CAEL 60 (50); PTE 58.', 'Cambridge 176 (169); CAEL 60 (50); PTE 58.')},
    sat=NOSAT,
    intlQuals=UZ('Akademik Litsey Diplomi (Diploma of Academic Lyceum, State Attestation Committee) or Umumiy O‘rta Ta’lim To‘g‘risida Shahodatnoma (Certificate of Full Secondary Education, Ministry of Education).', 'Akademik Litsey Diplomi (диплом академического лицея, Государственная аттестационная комиссия) или Umumiy O‘rta Ta’lim To‘g‘risida Shahodatnoma (аттестат о полном среднем образовании, Министерство образования).'),
    costs=costs('2026–2027', SMT, V, L('New international students from 2026–27, tuition per course (3 credit hours)', 'Новые иностранные студенты с 2026–27, плата за курс (3 кредитных часа)'),
        [(L('Arts, per course', 'Arts, за курс'), 3301.00, B), (L('Commerce, per course', 'Commerce, за курс'), 3301.00, B), (L('Science & Engineering, per course', 'Science & Engineering, за курс'), 3334.00, B)],
        L('C$3,301–C$3,334 per course (2026–27)', 'C$3,301–C$3,334 за курс (2026–27)'),
        L('Tuition for new international students is C$3,301 per course in Arts and Commerce and C$3,334 in Science and Engineering, including per-course mandatory fees; no yearly total is printed', 'Плата для новых иностранцев — C$3,301 за курс на Arts и Commerce и C$3,334 на Science и Engineering, включая обязательные сборы за курс; годовой итог не указан'),
        L('tuition per course only; other fees, housing and food extra', 'только плата за курс; прочие сборы, жильё и питание — сверх этого'),
        note=L('Graduates of some partner programmes (NBISP, NISEP, PEI-ISP, CAIS, UWC, CIS, IB) get C$1,000 off per course; this does not apply to applicants from Uzbekistan’s national schools.', 'Выпускники некоторых программ-партнёров (NBISP, NISEP, PEI-ISP, CAIS, UWC, CIS, IB) получают скидку C$1,000 за курс; к выпускникам национальных школ Узбекистана это не относится.')),
    merit=[award('Saint Mary’s Admissions Scholarships', None, L('Applicants for September who apply by 15 February, assessed within the applicant pool', 'Поступающие на сентябрь, подавшие заявку до 15 февраля, — в общем конкурсе'),
                 application=AUTO, basis='merit', source=SMS, verified=V, note=L('Competitive and merit-based; amounts are not given. Applicants through a tuition-reduction programme are excluded.', 'Конкурсные, за успехи; суммы не указаны. Поступающие по программам скидок исключены.'))],
    need={'note': L('The Major Renewable Scholarships (C$50,000) and several entrance awards are for Canadian citizens or permanent residents. Need-based aid for international first-year students is not described.', 'Major Renewable Scholarships (C$50,000) и ряд вступительных стипендий — для граждан или постоянных жителей Канады. Помощь по нуждаемости для иностранных первокурсников не описана.'), 'source': SMS, 'verified': V},
    sources=[(L('Saint Mary’s — important dates', 'Saint Mary’s — важные даты'), SMD), (L('Saint Mary’s — tuition and fees', 'Saint Mary’s — плата'), SMT), (L('Saint Mary’s — scholarships and awards', 'Saint Mary’s — стипендии'), SMS),
             (L('Saint Mary’s — language requirements', 'Saint Mary’s — языковые требования'), SME), (L('Saint Mary’s — international admission requirements', 'Saint Mary’s — требования для иностранцев'), SMI)],
    checked=[ENG, UZU, TUI, SCH],
    unconfirmed=[L('application deadline for September 2027', 'срок подачи на сентябрь 2027'), FEE, TESTS, MAJORS, FOUND]))

# --------------------------------------------------------------- Bishop's
BI = 'https://www.ubishops.ca/admissions/'
BIA = BI + 'bishops-university-online-application/'
BIT = BI + 'tuition-and-fees/'
BIS = BI + 'scholarships-awards-bursaries/'
BIE = BI + 'providing-proof-of-english-language-proficiency/'
BIR = BI + 'admission-requirements/international-high-school-students/'
records.append(R('bishops-university', 'Bishop’s University', 'Bishop’s', 'Sherbrooke', 'QC', PUBL,
    L('A small English-language liberal arts university in Lennoxville (Sherbrooke), Quebec. International students in Quebec also need a Quebec Acceptance Certificate (CAQ).',
      'Небольшой англоязычный университет свободных искусств в Леннокс­вилле (Шербрук, Квебек). Иностранцам в Квебеке нужен также сертификат CAQ.'),
    ['business', 'humanities', 'social-sciences', 'education', 'arts'],
    {'website': 'https://www.ubishops.ca/', 'admissions': BIA, 'international': BIR, 'portal': BIA, 'scholarships': BIS, 'aid': BIS, 'programs': BIR, 'cost': BIT},
    verified=V, aliases=['Bishops', 'Bishop’s', 'Bishops University', 'UBishops'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Williams School of Business', 'humanities': 'Humanities', 'social-sciences': 'Social Sciences', 'education': 'School of Education', 'arts': 'Music (BA majors)'}, BIR, V),
    platforms=[L('Bishop’s online application', 'Онлайн-заявка Bishop’s')],
    rounds=[
        D(L('Application deadline for international students (fall 2027); also for Competitive Entrance Scholarships and the Entrance Awards and Bursaries application', 'Срок подачи для иностранцев (осень 2027); также для Competitive Entrance Scholarships и заявки на Entrance Awards and Bursaries'), 'regular', '2027-03-31', BIA),
        D(L('Supporting documents for international applicants', 'Документы для иностранцев'), 'documents', '2027-04-15', BIA),
    ],
    fee=NOFEE(BIA),
    documents=[L('Bishop’s online application', 'Онлайн-заявка Bishop’s'), L('High school transcript with mid-term grades', 'Школьный табель с промежуточными оценками'), L('Proof of English proficiency', 'Подтверждение английского'), L('Copy of identification documents', 'Копия документов, удостоверяющих личность')],
    english={'ielts': eng(6.5, note=L('Academic; no component below 6.0.', 'Academic; ни одной части ниже 6.0.')),
             'toefl': toefl(90, 4.5, L('Before 21 January 2026: 90 (internet-based) with no component below 20. From 21 January 2026: 4.5 with no score below 4.0.', 'До 21 января 2026: 90 (интернет-тест), ни одной части ниже 20. С 21 января 2026: 4.5, ни одной части ниже 4.0.')),
             'duolingo': eng(115, note=L('No sub-score under 90.', 'Ни одного подбалла ниже 90.')),
             'note': L('Cambridge B2/C1/C2 176; PTE Academic 65 (60); LanguageCert accepted.', 'Cambridge B2/C1/C2 176; PTE Academic 65 (60); LanguageCert принимается.')},
    sat=test('optional', L('For U.S. applicants, SAT/ACT is not required but helps the review.', 'Для американских абитуриентов SAT/ACT не обязательны, но помогают при рассмотрении.'), source=BI + 'admission-requirements/usa-high-school-students/', verified=V),
    intlQuals=UZ('not named. Bishop’s normally expects 12 years of schooling; applicants from systems that end after 11 years are evaluated individually.', 'не назван отдельно. Bishop’s обычно ожидает 12 лет обучения; выпускников систем с 11 годами оценивают индивидуально.'),
    costs=costs('2026–2027', BIT, V, L('International undergraduates starting in 2026 (cohort 2026), 30 credits', 'Иностранные студенты бакалавриата, начавшие в 2026 (поток 2026), 30 кредитов'),
        [(L('Tuition, 30 credits (C$983.68 a credit)', 'Обучение, 30 кредитов (C$983.68 за кредит)'), 29510.43, B), (L('Compulsory fees', 'Обязательные сборы'), 1913.85, B)],
        L('C$29,510.43 tuition for 30 credits (2026–27)', 'C$29,510.43 — обучение за 30 кредитов (2026–27)'),
        L('Tuition C$29,510.43 for 30 credits plus compulsory fees C$1,913.85 for the 2026 cohort. The page prints a total of C$32,221.28, which is not the sum of these two lines (C$31,424.28); the difference is not explained', 'Обучение C$29,510.43 за 30 кредитов плюс обязательные сборы C$1,913.85 для потока 2026. Страница печатает итог C$32,221.28, который не равен сумме этих двух строк (C$31,424.28); разница не объяснена'),
        L('tuition and compulsory fees; insurance, housing and food extra', 'обучение и обязательные сборы; страховка, жильё и питание — сверх этого'), tuition=29510.43,
        note=L('International tuition is cohort-based: increases are limited each year while a student stays enrolled. The rate for the 2027 cohort is not yet published. Health insurance is billed per term (C$443 in the fall).', 'Плата для иностранцев зависит от года поступления: рост ограничен каждый год, пока студент учится. Ставка потока 2027 ещё не опубликована. Страховка выставляется за семестр (осенью C$443).')),
    merit=[award('Competitive Admission Scholarships', L('C$1,000–C$4,000 a year', 'C$1,000–C$4,000 в год'), L('Entering students; considered when the admission application is complete', 'Первокурсники; рассматриваются по полной заявке на поступление'),
                 application=L('Apply for admission by 31 March, documents by 15 April', 'Заявка на поступление до 31 марта, документы до 15 апреля'), basis='merit', source=BIS, verified=V),
           award('Michael Goldbloom Excellence Scholarships', L('C$10,000 a year, renewable', 'C$10,000 в год, с продлением'), L('Students with outstanding academic records who reflect Bishop’s values', 'Студенты с выдающимися академическими результатами, разделяющие ценности Bishop’s'),
                 application=L('Separate application', 'Отдельная заявка'), renewable=True, basis='merit', source=BIS, verified=V, note=L('Competitive; never counted as received.', 'Конкурсная; как полученная не учитывается.'))],
    need={'note': L('Entrance awards and bursaries (C$500–C$12,000) can weigh leadership and need; online application by 31 March.', 'Вступительные награды и гранты (C$500–C$12,000) могут учитывать лидерство и нуждаемость; онлайн-заявка до 31 марта.'), 'source': BIS, 'verified': V},
    sources=[(L('Bishop’s — online application and dates', 'Bishop’s — заявка и даты'), BIA), (L('Bishop’s — tuition and fees 2026-2027', 'Bishop’s — плата 2026–2027'), BIT),
             (L('Bishop’s — scholarships, awards, bursaries', 'Bishop’s — стипендии и гранты'), BIS), (L('Bishop’s — proof of English', 'Bishop’s — подтверждение английского'), BIE), (L('Bishop’s — international high school students', 'Bishop’s — иностранные выпускники школ'), BIR)],
    checked=[DL, ENG, TESTS, TUI, SCH],
    unconfirmed=[FEE, UZU, MAJORS, FOUND]))
annual['bishops-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 29510.43, 'max': 29510.43, 'note': 'Tuition for 30 credits, 2026 cohort; compulsory fees, insurance, housing and food extra'}

# --------------------------------------------------------------- Lethbridge
LE = 'https://www.ulethbridge.ca/future-student/'
LED = LE + 'important-dates'
LEF = LE + 'undergraduate-tuition-fees'
LEA = LE + 'application'
LEE = LE + 'international-elp'
records.append(R('university-of-lethbridge', 'University of Lethbridge', 'ULethbridge', 'Lethbridge', 'AB', PUBC,
    L('A university in Lethbridge, southern Alberta, with a campus in Calgary, applied to through ApplyAlberta.', 'Университет в Летбридже на юге Альберты, с кампусом в Калгари; подача через ApplyAlberta.'),
    ['business', 'medicine', 'arts', 'education'],
    {'website': 'https://www.ulethbridge.ca/', 'admissions': LED, 'international': LEE, 'portal': 'https://www.applyalberta.ca/', 'scholarships': LE + 'awards-and-scholarships', 'aid': LE + 'awards-and-scholarships', 'programs': LED, 'cost': LEF},
    verified=V, aliases=['ULethbridge', 'U of L', 'uLeth', 'Lethbridge'], campuses=['Lethbridge', 'Calgary'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': ('Dhillon School of Business', LEE), 'medicine': 'Bachelor of Nursing', 'arts': 'Bachelor of Music', 'education': 'Bachelor of Education'}, LED, V),
    platforms=['ApplyAlberta'],
    rounds=[
        D(L('Early admission and Board of Governors’ Admission Scholarship (up to C$1,000)', 'Раннее поступление и Board of Governors’ Admission Scholarship (до C$1,000)'), 'priority', '2026-12-15', LED, note=NOYEAR),
        D(L('High school awards application', 'Заявка на стипендии для выпускников школ'), 'scholarship', '2027-03-15', LED, note=NOYEAR),
        D(L('Application deadline for international students', 'Срок подачи для иностранцев'), 'regular', '2027-06-15', LED,
          L('Nursing closes on 1 March; Music on 15 June.', 'Nursing закрывается 1 марта; Music — 15 июня.'), note=NOYEAR),
    ],
    fee=fee(140, L('Application fee through ApplyAlberta.', 'Сбор за заявку через ApplyAlberta.'), LEA, V),
    documents=DOCS('ApplyAlberta'),
    english={'note': L('Accepted tests: TOEFL, IELTS, PTE, CAEL, Cambridge CAE/CPE, MELAB or the university’s EAP programme. The minimum scores are not given on the page read.', 'Принимаются TOEFL, IELTS, PTE, CAEL, Cambridge CAE/CPE, MELAB или программа EAP университета. Минимальные баллы на прочитанной странице не указаны.')},
    sat=NOSAT,
    costs=costs('2026–2027', LEF, V, L('International undergraduates, full year', 'Иностранные студенты бакалавриата, полный год'),
        [(L('Tuition', 'Обучение'), 24662.20, B), (L('Student administrative fees', 'Административные сборы'), 629.10, B), (L('Fine Arts access fee', 'Сбор Fine Arts'), 29.00, B),
         (L('Sport and recreation fee', 'Спортивный сбор'), 235.94, B), (L('Students’ Union fees (health and dental insurance, UPass)', 'Сборы студенческого союза (страховка, UPass)'), 824.74, B), (L('Student magazine', 'Студенческий журнал'), 10.00, B)],
        L('C$26,390.98 tuition and fees for a year (2026–27)', 'C$26,390.98 — обучение и сборы за год (2026–27)'),
        L('ULethbridge lists C$26,390.98 a year for international students in 2026/2027: tuition C$24,662.20 plus fees including health insurance and transit; books about C$1,500 and off-campus living about C$1,450 a month are extra', 'ULethbridge указывает C$26,390.98 в год для иностранцев в 2026/2027: обучение C$24,662.20 плюс сборы, включая страховку и проездной; книги около C$1,500 и жильё вне кампуса около C$1,450 в месяц — сверх этого'),
        L('tuition and mandatory fees, including health and dental insurance and UPass', 'обучение и обязательные сборы, включая страховку и UPass'), tuition=24662.20, billed=26390.98,
        note=L('“Costs are subject to change.”', '«Суммы могут измениться».')),
    merit=[award('Board of Governors’ Admission Scholarship', L('Up to C$1,000', 'До C$1,000'), L('Completed applications submitted before 15 December', 'Полные заявки, поданные до 15 декабря'),
                 application=AUTO, basis='merit', source=LEA, verified=V, note=L('Eligibility of international students is not restricted in the text read.', 'В прочитанном тексте нет ограничения для иностранцев.'))],
    need={'note': NOT_NEED},
    sources=[(L('ULethbridge — important dates', 'ULethbridge — важные даты'), LED), (L('ULethbridge — tuition and fees 2026/2027', 'ULethbridge — плата 2026/2027'), LEF),
             (L('ULethbridge — application and fee', 'ULethbridge — заявка и сбор'), LEA), (L('ULethbridge — international / English', 'ULethbridge — иностранцы и английский'), LEE)],
    checked=[DL, FEE, COSTS],
    unconfirmed=[L('English test minimums', 'минимальные баллы по английскому'), L('international entrance scholarships', 'вступительные стипендии для иностранцев'), TESTS, UZU, MAJORS, FOUND]))
annual['university-of-lethbridge'] = {'currency': 'CAD', 'basis': 'billed', 'min': 26390.98, 'max': 26390.98, 'note': 'Tuition and mandatory fees 2026/2027 incl. health insurance and UPass; books, housing and food extra'}

# --------------------------------------------------------------- Winnipeg
UW = 'https://www.uwinnipeg.ca/'
UWA = UW + 'future-student/international/how-to-apply.html'
UWT = UW + 'fees/tuition.html'
UWE = UW + 'future-student/international/lang-req.html'
UWS = UW + 'awards/awards-bursaries-and-scholarships/international-students.html'
records.append(R('university-of-winnipeg', 'The University of Winnipeg', 'UWinnipeg', 'Winnipeg', 'MB', PUBC,
    L('A downtown university in Winnipeg, Manitoba, with about 1,000 international students from more than 75 countries.', 'Университет в центре Виннипега (Манитоба), где учатся около 1000 иностранцев из более чем 75 стран.'),
    ['humanities', 'business', 'education', 'biology'],
    {'website': UW, 'admissions': UWA, 'international': UW + 'international/', 'portal': UW + 'future-student/apply/ready-to-apply.html', 'scholarships': UWS, 'aid': UWS, 'programs': UWT, 'cost': UWT},
    verified=V, aliases=['UWinnipeg', 'University of Winnipeg', 'Winnipeg University'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Faculty of Arts', 'business': 'Faculty of Business and Economics', 'education': 'Faculty of Education', 'biology': 'Faculty of Science'}, UWT, V),
    platforms=[L('UWinnipeg application portal', 'Портал заявок UWinnipeg')],
    rounds=[
        D(L('Application deadline, fall (September) intake', 'Срок подачи, осенний (сентябрьский) набор'), 'regular', '2027-06-15', UWA,
          L('Late applications may be accepted without a guarantee of processing in time. Offers are issued for two start terms.', 'Поздние заявки могут принять, но без гарантии, что их успеют рассмотреть. Предложения выдаются на два срока начала.'),
          status='not-confirmed', note=L('The page shows “June 15 (extended)” without a year, which looks like the current cycle’s extended date; the fall 2027 date is not confirmed.', 'Страница пишет «June 15 (extended)» без года — похоже на продлённую дату текущего цикла; дата на осень 2027 не подтверждена.')),
    ],
    fee=fee(120, L('International application fee, non-refundable, paid in the application portal.', 'Сбор для иностранцев, не возвращается, оплата в портале заявок.'), UWA, V),
    documents=DOCS('UWinnipeg'),
    english={'ielts': eng(6.5, note=L('Academic, Online or UKVI.', 'Academic, Online или UKVI.')),
             'toefl': toefl(86, 4.5, L('Before 21 January 2026: 86 with 20 in each component (MyBest may be considered). Newer tests (1–6 scale): 4.5 with 4.0 in each component.', 'До 21 января 2026: 86, не ниже 20 в каждой части (MyBest может учитываться). Новые тесты (шкала 1–6): 4.5, не ниже 4.0 в каждой части.')),
             'duolingo': eng(120), 'note': L('CAEL 60 (CAEL online 70); PTE 58; LanguageCert accepted. Results older than two years are not considered.', 'CAEL 60 (CAEL online 70); PTE 58; LanguageCert принимается. Результаты старше двух лет не учитываются.')},
    sat=NOSAT,
    costs=costs('2026–2027', UWT, V, L('International undergraduates, tuition per 3-credit course', 'Иностранные студенты бакалавриата, плата за курс в 3 кредита'),
        [(L('Arts or Science, per 3 credits (low–high)', 'Arts или Science, за 3 кредита (мин.–макс.)'), {'min': 2029.95, 'max': 2288.25}, B), (L('Business, per 3 credits', 'Business, за 3 кредита'), 2412.00, B),
         (L('Education, per 3 credits', 'Education, за 3 кредита'), 1940.85, B), (L('Kinesiology, per 3 credits', 'Kinesiology, за 3 кредита'), 2008.50, B)],
        L('C$1,941–C$2,412 per 3-credit course (2026–27)', 'C$1,941–C$2,412 за курс в 3 кредита (2026–27)'),
        L('International tuition is charged per course: C$1,940.85 (Education) to C$2,412 (Business) per 3 credits, plus annual, term and course fees; no yearly total is printed', 'Плата для иностранцев — за курс: от C$1,940.85 (Education) до C$2,412 (Business) за 3 кредита плюс годовые, семестровые и курсовые сборы; годовой итог не указан'),
        L('tuition rates only; fees, health plan, housing and food extra', 'только ставки платы; сборы, медицинский план, жильё и питание — сверх этого'),
        note=L('A non-refundable C$1,000 tuition deposit is required to accept an offer (refundable only after a visa refusal).', 'Для принятия предложения нужен невозвратный депозит C$1,000 (возвращается только при отказе в визе).')),
    merit=[award('International Special Entrance Scholarship', None, L('New international students starting the year after graduating from a high school outside Canada', 'Новые иностранцы, начинающие учёбу через год после окончания школы за пределами Канады'),
                 application=AUTO, basis='automatic', source=UWS, verified=V, note=L('The value is not given on the page read.', 'Сумма на прочитанной странице не указана.')),
           award('President’s Scholarship for World Leaders', None, L('International students entering their first UWinnipeg programme with an 80% average and exceptional leadership', 'Иностранцы, поступающие на первую программу UWinnipeg, со средним 80% и выдающимся лидерством'),
                 application=L('Separate application with a personal statement, CV and two references', 'Отдельная заявка с эссе, резюме и двумя рекомендациями'), basis='merit', source=UWS, verified=V,
                 note=L('The page shows the 2026–27 values and deadlines; those for 2027–28 are due in December 2026.', 'На странице — суммы и сроки 2026–27; для 2027–28 их опубликуют в декабре 2026.'))],
    need={'note': NOT_NEED},
    sources=[(L('UWinnipeg — how international undergraduates apply', 'UWinnipeg — как подают иностранцы'), UWA), (L('UWinnipeg — 2026/27 tuition', 'UWinnipeg — плата 2026/27'), UWT),
             (L('UWinnipeg — English requirements', 'UWinnipeg — требования к английскому'), UWE), (L('UWinnipeg — awards for international students', 'UWinnipeg — стипендии для иностранцев'), UWS)],
    checked=[FEE, ENG, TUI, SCH],
    unconfirmed=[L('fall 2027 application deadline', 'срок подачи на осень 2027'), TESTS, UZU, MAJORS, FOUND]))

# --------------------------------------------------------------- Mount Saint Vincent
MS = 'https://www.msvu.ca/future-students/'
MSD = MS + 'admission-requirements/application-deadlines/'
MST = MS + 'money-matters/tuition-fees/'
MSE = MS + 'admission-requirements/international-students/english-test-score-requirements/'
MSS = MS + 'money-matters/scholarships-awards/undergraduate-scholarships/'
records.append(R('mount-saint-vincent-university', 'Mount Saint Vincent University', 'MSVU', 'Halifax', 'NS', PUBC,
    L('A university in Halifax, Nova Scotia, founded by the Sisters of Charity, known for Education, Applied Human Nutrition and Public Relations.',
      'Университет в Галифаксе (Новая Шотландия), основанный Сёстрами милосердия; известен образованием, прикладной нутрициологией и PR.'),
    ['education'],
    {'website': 'https://www.msvu.ca/', 'admissions': MSD, 'international': MS + 'admission-requirements/international-students/', 'portal': MS + 'apply-now/undergraduate-application/', 'scholarships': MSS, 'aid': MSS, 'programs': MSD, 'cost': MST},
    verified=V, aliases=['MSVU', 'Mount Saint Vincent', 'The Mount'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'education': 'Bachelor of Education'}, MSD, V),
    platforms=[L('MSVU online application centre', 'Онлайн-центр заявок MSVU')],
    rounds=[
        D(L('Entrance scholarship candidates', 'Кандидаты на вступительные стипендии'), 'scholarship', '2027-03-01', MSD),
        D(L('Application deadline for international undergraduate applicants (September 2027)', 'Срок подачи для иностранцев на бакалавриат (сентябрь 2027)'), 'regular', '2027-05-03', MSD,
          L('The dossier (transcripts, documents and fee) must be complete by the deadline.', 'Пакет документов (табели, документы и сбор) должен быть полным к сроку.')),
    ],
    fee=NOFEE(MS + 'apply-now/undergraduate-application/'),
    documents=DOCS('MSVU'),
    english={'ielts': eng(6.5, note=L('No individual band below 6.0.', 'Ни одной секции ниже 6.0.')),
             'toefl': toefl(86, None, L('iBT or Home Edition: 86–92 with no individual score below 21. The page gives no 1–6 scale figure.', 'iBT или Home Edition: 86–92, ни одной части ниже 21. Значения по шкале 1–6 на странице нет.')),
             'duolingo': eng(115, note=L('No sub-score below 95.', 'Ни одного подбалла ниже 95.')),
             'note': L('PTE 59 (no band below 54); MELAB 80–84; CAEL accepted.', 'PTE 59 (ни одной части ниже 54); MELAB 80–84; CAEL принимается.')},
    sat=NOSAT,
    costs=costs('2026–2027', MST, V, L('New international undergraduates, 10 courses', 'Новые иностранные студенты бакалавриата, 10 курсов'),
        [(L('International undergraduate tuition and fees, 10 courses (as printed)', 'Обучение и сборы для иностранцев, 10 курсов (как напечатано)'), {'min': 23215, 'max': 23667}, E), (L('Room and board', 'Проживание и питание'), 12575, E)],
        L('Conflicting figures on the official page', 'Противоречивые цифры на официальной странице'),
        L('The page gives C$23,215–C$23,667 for international tuition and fees, but exactly the same range is the total for a Nova Scotia student living in residence, so the international figure cannot be confirmed', 'Страница даёт C$23,215–C$23,667 за обучение и сборы иностранца, но ровно такой же диапазон указан как итог для студента из Новой Шотландии в общежитии, поэтому сумму для иностранцев подтвердить нельзя'),
        L('not confirmed', 'не подтверждено'), status='conflict',
        note=L('Not used in the budget comparison until the university clarifies.', 'В сравнении с бюджетом не используется, пока университет не уточнит.')),
    merit=[award('MSVU entrance scholarships', None, L('High school students with an average of 80% or more, international students included', 'Выпускники школ со средним от 80%, включая иностранцев'),
                 application=L('Apply before 1 March; automatic consideration for qualified applicants', 'Подать заявку до 1 марта; автоматическое рассмотрение для подходящих'), basis='merit', source=MSS, verified=V,
                 note=L('Amounts are not given on the page read.', 'Суммы на прочитанной странице не указаны.'))],
    need={'note': NOT_NEED},
    sources=[(L('MSVU — application deadlines', 'MSVU — сроки подачи'), MSD), (L('MSVU — tuition and fees 2026-2027', 'MSVU — плата 2026–2027'), MST),
             (L('MSVU — English test score requirements', 'MSVU — требования к английскому'), MSE), (L('MSVU — undergraduate scholarships', 'MSVU — стипендии бакалавриата'), MSS)],
    checked=[DL, ENG, SCH],
    unconfirmed=[L('international tuition (conflicting figures)', 'плата для иностранцев (противоречивые цифры)'), FEE, TESTS, UZU, MAJORS, FOUND]))

assert len(records) == 10
for r in records:
    if r['id'] == 'mount-saint-vincent-university':
        r['costs']['conflict'] = {'text': L('The international tuition-and-fees range (C$23,215–C$23,667) is identical to the total printed for a Nova Scotia student in residence on the same page.', 'Диапазон обучения и сборов для иностранцев (C$23,215–C$23,667) совпадает с итогом, указанным на той же странице для студента из Новой Шотландии в общежитии.'),
                                  'sources': [{'label': L('MSVU — tuition and fees 2026-2027', 'MSVU — плата 2026–2027'), 'url': MST}]}
    for it in r['costs'].get('items', []): it.pop('group', None)
ca50.write(records, annual)
flush()
