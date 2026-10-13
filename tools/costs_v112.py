# -*- coding: utf-8 -*-
"""v112 — published costs of records that had none.

Every figure was read on 13 October 2026 on the official page named with it,
with its academic year, the group of students it is for and the period the
page gives it for (a year or a semester). Nothing is estimated:
  * a charge published per semester stays per semester; where a flat full-time
    rate is charged in each of the two semesters, the two-semester sum used by
    the match page is marked as calculated by UniPath;
  * a sum of lines is never called the university's total — where a page prints
    no total, the text says the figure is the sum of the lines shown;
  * a figure for an earlier year is kept as "previous cycle" and is not used by
    the match page;
  * where the page read prints no figures (a linked document, a calculator),
    the record says so and stays "not checked"."""
import us3_edit
from us200_std import *

V = '2026-10-13'
head, recs = us3_edit.load()
D = us3_edit.by_id(recs)
annual = {}
SEM = lambda what: L('%s, per semester' % what[0], '%s, за семестр' % what[1])
CALC2 = L('Two semesters at the published full-time rates — calculated by UniPath, not printed by the university', 'Два семестра по опубликованным ставкам полной нагрузки — рассчитано UniPath, университетом не напечатано')
BOOKS1, PERS1 = L('Books', 'Книги'), L('Personal', 'Личные расходы')

def put(uid, c, a=None, checked=True):
    r = D[uid]; r['costs'] = c
    v = r['verification']
    v['unconfirmed'] = [x for x in v['unconfirmed'] if x != 'published costs']
    if checked and 'published costs' not in v['checked']: v['checked'].append(CHK['costs'])
    if not checked and 'published costs' not in v['unconfirmed']: v['unconfirmed'].append(CHK['costs'])
    r['links']['cost'] = c['source']
    lab = L('%s — costs read on 13 October 2026' % r['shortName'], '%s — стоимость, прочитано 13 октября 2026' % r['shortName'])
    if not any(s['url'] == c['source'] for s in r['sources']): r['sources'].append({'label': lab, 'url': c['source']})
    if a: annual[uid] = a

def semester(c, text):
    c['breakdown']['tuitionText'] = text; c['breakdown']['period'] = 'semester'; return c

def unread(uid, url, note):
    r = D[uid]
    r['costs'] = {'breakdown': None, 'academicYear': None, 'currency': 'USD', 'headline': None, 'items': [], 'billedSubtotal': None, 'totalText': None,
                  'note': note, 'source': url, 'verified': V}
    r['links']['cost'] = url

# ---------------------------------------------------------------- Drew
S = 'https://drew.edu/admissions-and-aid/student-financial-services/student-accounts/tuition-and-fees-schedules/'
put('drew-university', costs('2026–2027', S, V, L('Undergraduates of the College of Liberal Arts', 'Студенты бакалавриата College of Liberal Arts'),
    [(L('Tuition (12–21 credits)', 'Обучение (12–21 кредит)'), 49550, B), (L('General fee', 'Общий сбор'), 800, B), (L('Technology fee', 'Технологический сбор'), 350, B),
     (L('Housing: traditional double room', 'Жильё: обычная двухместная комната'), 11480, B),
     (L('Meal plan (Bronze to Platinum All Access)', 'План питания (от Bronze до Platinum All Access)'), {'min': 7608, 'max': 8160, 'text': '$7,608–$8,160'}, B)],
    h_tuition(49550, 'tuition'),
    L('The 2026–2027 schedule prints each charge per semester and as a yearly total — tuition $49,550, fees $1,150, a traditional double room $11,480, a meal plan $7,608 to $8,160 — but no overall total', 'В расписании на 2026–2027 каждый сбор напечатан за семестр и за год — обучение $49,550, сборы $1,150, обычная двухместная комната $11,480, план питания от $7,608 до $8,160, — но общего итога нет'),
    L('tuition only. Fees, housing, food, books and personal expenses are extra', 'только обучение. Сборы, жильё, питание, книги и личные расходы — сверх этого'),
    tuition=49550,
    note=L('Drew’s financial aid page still shows a cost of attendance for 2024–2025 ($69,140 on campus); it is not used here. Graduate students pay an international student administrative fee of $75 a term; the undergraduate schedule lists none.', 'На странице финансовой помощи Drew всё ещё показана стоимость обучения за 2024–2025 ($69,140 в кампусе); здесь она не используется. Магистранты платят административный сбор для иностранных студентов $75 за семестр; в расписании бакалавриата такого сбора нет.')),
    {'currency': 'USD', 'basis': 'tuition', 'min': 49550, 'max': 49550})

# ---------------------------------------------------------------- Goucher
S = 'https://www.goucher.edu/billing/tuition-and-fees'
put('goucher-college', semester(costs('2026–2027', S, V, L('Full-time undergraduates (12 or more credits a semester)', 'Студенты бакалавриата с полной нагрузкой (от 12 кредитов в семестр)'),
    [(SEM(('Tuition (12–18 credits)', 'Обучение (12–18 кредитов)')), 28750, B), (SEM(('Student activity fee', 'Сбор на студенческие мероприятия')), 150, B),
     (SEM(('Housing: double room', 'Жильё: двухместная комната')), 4740, B),
     (SEM(('Meal plan: 19 meals a week, the minimum for first-year students', 'План питания: 19 приёмов пищи в неделю — минимум для первокурсников')), 4190, B)],
    L('$28,750 tuition per semester for full-time undergraduates', '$28,750 — обучение за семестр для студентов с полной нагрузкой'),
    L('Published per semester for 2026–2027: tuition $28,750, student activity fee $150, a double room $4,740, the first-year meal plan $4,190. Two semesters of these four charges come to $75,660 — calculated by UniPath; the page prints no yearly total', 'Опубликовано за семестр на 2026–2027: обучение $28,750, сбор на мероприятия $150, двухместная комната $4,740, план питания первокурсника $4,190. Два семестра этих четырёх сборов — $75,660; рассчитано UniPath, годового итога на странице нет'),
    L('the charges of one semester. Health insurance (the page prints “$TBD”), books, travel and personal expenses are extra', 'сборы одного семестра. Медицинская страховка (на странице — «$TBD»), книги, дорога и личные расходы — сверх этого'),
    tuition=28750), '$28,750 per semester'),
    {'currency': 'USD', 'basis': 'billed', 'min': 75660, 'max': 75660, 'note': CALC2})

# ---------------------------------------------------------------- Lesley
S = 'https://lesley.edu/costs-financial-aid/understand-the-cost-of-attending-lesley'
put('lesley-university', semester(costs('2026–2027', S, V, L('Full-time on-campus undergraduates (12–16 credits a semester)', 'Очные студенты бакалавриата с полной нагрузкой (12–16 кредитов в семестр)'),
    [(SEM(('Tuition (12–16 credits)', 'Обучение (12–16 кредитов)')), 18200, B), (SEM(('Undergraduate comprehensive fee', 'Единый сбор бакалавриата')), 525, B),
     (SEM(('Room: double, triple or quad', 'Комната: двух-, трёх- или четырёхместная')), 6520, B), (SEM(('Campus meal plan', 'План питания в кампусе')), 4140, B),
     (SEM(('Health services fee (residents only)', 'Сбор за медицинское обслуживание (только живущие в кампусе)')), 525, B)],
    L('$18,200 tuition per semester for full-time on-campus undergraduates', '$18,200 — обучение за семестр для очных студентов с полной нагрузкой'),
    L('Published per semester for 2026–27: tuition $18,200, comprehensive fee $525, a shared room $6,520, the meal plan $4,140, health services fee $525. Two semesters of these five charges come to $59,820 — calculated by UniPath; the page prints no yearly total', 'Опубликовано за семестр на 2026–27: обучение $18,200, единый сбор $525, комната на несколько человек $6,520, план питания $4,140, сбор за медицинское обслуживание $525. Два семестра этих пяти сборов — $59,820; рассчитано UniPath, годового итога на странице нет'),
    L('the charges of one semester. The annual student health insurance premium ($4,173), a $150 orientation fee in the first semester, books and personal expenses are extra', 'сборы одного семестра. Годовая студенческая медицинская страховка ($4,173), сбор за ориентацию $150 в первом семестре, книги и личные расходы — сверх этого'),
    tuition=18200,
    note=L('The page says tuition and fees for 2026–27 “are subject to change June 1”. It lists the student health insurance premium without saying on that page who must buy it.', 'На странице сказано, что плата и сборы на 2026–27 «могут измениться 1 июня». Студенческая медицинская страховка указана без пояснения на этой странице, кто обязан её оформить.')), '$18,200 per semester'),
    {'currency': 'USD', 'basis': 'billed', 'min': 59820, 'max': 59820, 'note': CALC2})

# ---------------------------------------------------------------- McDaniel
S = 'https://www.mcdaniel.edu/admissions-cost/cost-financial-aid/undergraduate-tuition-fees'
put('mcdaniel-college', costs('2027–2028', S, V, L('First-year students living on campus', 'Первокурсники, живущие в кампусе'),
    [(L('Tuition (up to 20 credits)', 'Обучение (до 20 кредитов)'), 56500, B), (L('Housing: standard double room', 'Жильё: стандартная двухместная комната'), 7600, B), (L('Food: Gold meal plan', 'Питание: план Gold'), 7500, B),
     (L('New Student Comprehensive Fee, charged once in the first semester', 'New Student Comprehensive Fee — взимается один раз в первом семестре'), 975, B),
     (BOOKS, 1664, E), (TRANS, 1618, E), (L('Loan origination fees', 'Комиссия за выдачу кредита'), 70, E), (L('Personal expenses and miscellaneous fees', 'Личные расходы и прочие сборы'), 1152, E)],
    L('$72,575 in the four direct charges of a first-year student on campus', '$72,575 — четыре прямых сбора для первокурсника в кампусе'),
    L('For 2027–2028 the page lists tuition $56,500, room $7,600, meal plan $7,500 and a one-time $975 fee as direct costs, and books, transportation, loan fees and personal expenses as planning estimates. It prints no totals: $72,575 and $77,079 are the sums of those lines', 'На 2027–2028 страница называет прямыми расходами обучение $56,500, комнату $7,600, план питания $7,500 и разовый сбор $975, а книги, транспорт, комиссию по кредиту и личные расходы — оценками для планирования. Итогов на странице нет: $72,575 и $77,079 — суммы этих строк'),
    L('tuition, room, meal plan and the first-year fee (direct), plus the college’s planning estimates for books, transportation, loan fees and personal expenses', 'обучение, комната, план питания и сбор первого года (прямые расходы), а также оценки колледжа на книги, транспорт, комиссию по кредиту и личные расходы'),
    tuition=56500, billed=72575, budget=77079, budget_text='$77,079 — the sum of the lines; the page prints no total'),
    {'currency': 'USD', 'basis': 'total', 'min': 77079, 'max': 77079, 'note': L('The sum of the lines of the first-year on-campus column; the page prints no total', 'Сумма строк столбца «первокурсник в кампусе»; итога на странице нет')})
L('$77,079 — the sum of the lines; the page prints no total', '$77,079 — сумма строк; итога на странице нет')
m = D['mcdaniel-college']['scholarships']['merit'][0]
m['note'] = L('The award letter comes with the admission decision. The page of 2027–2028 costs says merit scholarships range from $18,000 to $33,000 a year; another McDaniel page gave $7,500 to $33,000. Neither says which amounts international students receive.',
              'Письмо о стипендии приходит вместе с решением о приёме. На странице стоимости 2027–2028 сказано, что стипендии за успехи — от $18,000 до $33,000 в год; на другой странице McDaniel было от $7,500 до $33,000. Какие суммы получают иностранные студенты, не сказано ни там, ни там.')

# ---------------------------------------------------------------- Morehouse
S = 'https://morehouse.edu/aid/student-accounts/cost-of-attendance'
put('morehouse-college', costs('2026–2027', S, V, L('Residential students on campus, enrolled in 6–12 or more credit hours', 'Студенты, живущие в кампусе, с нагрузкой от 6–12 кредитных часов'),
    [(TUIT, 31026, B), (L('Student fees', 'Студенческие сборы'), 4258, B), (FOOD, 4092, B), (HOUS, 11290, B),
     (BOOKS, 2000, E), (TRANS, 2880, E), (LOANFEE, 200, E), (L('Personal and miscellaneous fees', 'Личные и прочие расходы'), 3684, E)],
    h_coa(59430), L('$59,430 total estimated cost for 2026–2027, as printed', '$59,430 — общая оценка стоимости на 2026–2027, как напечатано'),
    L('tuition, student fees, food and housing, plus the college’s estimates for books, transportation, loan fees and personal expenses', 'обучение, студенческие сборы, питание и жильё, а также оценки колледжа на книги, транспорт, комиссию по кредиту и личные расходы'),
    tuition=31026, budget=59430),
    {'currency': 'USD', 'basis': 'total', 'min': 59430, 'max': 59430})

# ---------------------------------------------------------------- WPI
S = 'https://www.wpi.edu/admissions/tuition-aid/cost-attendance'
put('worcester-polytechnic-institute', costs('2026–2027', S, V, ONCAMPUS,
    [(TUIT, 63936, B), (L('Undergraduate student life fee', 'Сбор на студенческую жизнь'), 492, B), (L('Health and wellness fee', 'Сбор на здоровье и благополучие'), 810, B),
     (L('New student orientation fee', 'Сбор за ориентацию новых студентов'), 200, B), (HOUS, 10660, B), (FOOD, 9072, B),
     (L('Books, course materials, supplies and equipment', 'Книги, учебные материалы и оборудование'), 1200, E), (PERS, 1200, E)],
    h_coa(87570), L('$87,570 total budgeted costs for 2026–2027, of which $65,438 is tuition and fees, as printed', '$87,570 — общий бюджет на 2026–2027, из них $65,438 — обучение и сборы, как напечатано'),
    L('tuition, three fees, housing and food, plus WPI’s estimates for books and personal expenses', 'обучение, три сбора, жильё и питание, а также оценки WPI на книги и личные расходы'),
    tuition=65438, tuition_label='Tuition and fees', budget=87570,
    note=L('WPI calls the budget items estimates that may change without notice. Federal loan fees and course-specific fees are not in the total.', 'WPI называет статьи бюджета оценками, которые могут измениться без уведомления. Комиссия по федеральным кредитам и сборы отдельных курсов в итог не входят.')),
    {'currency': 'USD', 'basis': 'total', 'min': 87570, 'max': 87570})

# ---------------------------------------------------------------- Santa Clara
S = 'https://www.scu.edu/financialaid/cost-of-attendance/'
put('santa-clara-university', costs('2026–2027', S, V, ONCAMPUS,
    [(TUIT, 64956, B), (L('Student Engagement & Well-Being Fee', 'Student Engagement & Well-Being Fee (студенческий сбор)'), 780, B), (HF, 20094, B),
     (BOOKS, 1305, E), (TRANS, 1386, E), (L('Personal and miscellaneous expenses', 'Личные и прочие расходы'), 3969, E), (LOANFEE, 66, E)],
    h_coa(92556), tt_coa(92556, 85830), INC_COA, tuition=64956, billed=85830, budget=92556),
    {'currency': 'USD', 'basis': 'total', 'min': 92556, 'max': 92556})

# ---------------------------------------------------------------- SMU
S = 'https://www.smu.edu/enrollment-services/student-financial-services/cost-and-payment/cost-of-attendance'
put('southern-methodist-university', costs('2026–2027', S, V, L('Full-time undergraduates (12–18 credit hours a term) living on campus', 'Студенты бакалавриата с полной нагрузкой (12–18 кредитных часов в семестр), живущие в кампусе'),
    [(L('Estimated tuition', 'Обучение (оценка)'), 63736, B), (L('Estimated general student fees', 'Общие студенческие сборы (оценка)'), 8080, B), (HF, 20950, B),
     (L('Books, supplies and loan fees', 'Книги, материалы и комиссия по кредиту'), 888, E), (TRANS, 1134, E), (L('Personal and miscellaneous expenses', 'Личные и прочие расходы'), 1600, E)],
    h_coa(96388), tt_coa(96388, 92766), INC_COA, tuition=63736, billed=92766, budget=96388,
    note=L('For the autumn 2026 and spring 2027 terms; summer and intersession are not included.', 'За осенний семестр 2026 и весенний 2027; лето и межсеместровые курсы не включены.')),
    {'currency': 'USD', 'basis': 'total', 'min': 96388, 'max': 96388})

# ---------------------------------------------------------------- Stony Brook
S = 'https://www.stonybrook.edu/undergraduate-admissions/cost-and-aid/tuition-and-costs.html'
put('stony-brook-university', costs('2026–2027', S, V, L('Full-time out-of-state undergraduates living on campus', 'Студенты бакалавриата не из штата с полной нагрузкой, живущие в кампусе'),
    [(TUIT, 31050, B), (FEES, 3860, B), (HOUS, 12291, B), (L('Meal plan', 'План питания'), 7450, B), (BOOKS1, 900, E), (TRANS, 840, E), (PERS, 2408, E)],
    h_coa(58799), tt_coa(58799, 54651), INC_COA, tuition=31050, billed=54651, budget=58799,
    extras=[{'label': L('Health insurance billed through the university', 'Медицинская страховка, выставляемая университетом'), 'amount': None, 'required': True,
             'condition': L('Full-time students are billed for it unless they show proof of their own coverage; the page gives no amount.', 'Выставляется студентам с полной нагрузкой, если они не подтвердили собственный полис; суммы на странице нет.'), 'year': None}],
    note=L('The university marks these as estimates as of 20 February 2026, subject to approval by the State of New York and SUNY; tuition and fees may vary by programme. The page does not say whether international students are charged more than other out-of-state students.', 'Университет помечает эти суммы как оценки на 20 февраля 2026, подлежащие утверждению штатом Нью-Йорк и SUNY; плата и сборы могут зависеть от программы. Платят ли иностранные студенты больше остальных студентов не из штата, на странице не сказано.')),
    {'currency': 'USD', 'basis': 'total', 'min': 58799, 'max': 58799})

# ---------------------------------------------------------------- Temple
S = 'https://sfs.temple.edu/eligibility/your-financial-aid-offer/cost-attendance'
put('temple-university', costs('2026–2027', S, V, L('Undergraduates who are not Pennsylvania residents', 'Студенты бакалавриата — не жители Пенсильвании'),
    [(L('Tuition and fees: College of Liberal Arts to Fox School of Business', 'Обучение и сборы: от College of Liberal Arts до Fox School of Business'), {'min': 37698, 'max': 46866, 'text': '$37,698–$46,866'}, B),
     (HOUS, 14084, E), (FOOD, 5552, E), (BOOKS1, 1330, E), (TRANS, 2296, E), (L('Other: personal and miscellaneous', 'Прочее: личные расходы'), 3424, E)],
    h_coa(64384, 73552), L('$64,384 (College of Liberal Arts) to $73,552 (Fox School of Business): the anticipated cost of attendance of non-Pennsylvania residents for autumn 2026 and spring 2027, as printed for these two colleges', 'От $64,384 (College of Liberal Arts) до $73,552 (Fox School of Business): ожидаемая стоимость обучения для не жителей Пенсильвании за осень 2026 и весну 2027 — как напечатано для этих двух колледжей'),
    L('tuition and fees, plus the university’s budgets for housing, food, books, transportation and personal expenses', 'обучение и сборы, а также бюджеты университета на жильё, питание, книги, транспорт и личные расходы'),
    tuition=37698, tuition_label='Tuition and fees', budget=64384, budget_max=73552, budget_text='$64,384–$73,552',
    note=L('The page prints two colleges as examples and says tuition is set in July each year; other colleges have their own rates. The housing and food budgets are the same for students on and off campus. Temple adds that it does not have sufficient funding to meet a student’s full demonstrated need.', 'На странице два колледжа приведены как примеры и сказано, что плата устанавливается в июле каждого года; у других колледжей свои ставки. Бюджеты на жильё и питание одинаковы для живущих в кампусе и вне его. Temple добавляет, что у него недостаточно средств, чтобы покрыть всю подтверждённую потребность студента.')),
    {'currency': 'USD', 'basis': 'total', 'min': 64384, 'max': 73552, 'note': L('Two colleges printed as examples; other colleges have their own rates', 'Два колледжа приведены как примеры; у других колледжей свои ставки')})

# ---------------------------------------------------------------- Maryland (previous cycle)
S = 'https://admissions.umd.edu/tuition/cost-of-attendance'
put('university-of-maryland', costs('2025–2026', S, V, L('Non-resident (out-of-state) undergraduates living on campus', 'Студенты бакалавриата не из штата, живущие в кампусе'),
    [(TF, 41974, B), (L('On-campus housing and food', 'Жильё и питание в кампусе'), 16436, B), (BOOKS, 1250, E), (TRANS, 1514, E), (L('Miscellaneous personal expenses', 'Прочие личные расходы'), 1200, E)],
    h_coa(62374), L('$62,374 total estimated cost of attendance for 2025–2026 — the previous year; the page read on 13 October 2026 shows no later figures', '$62,374 — оценка полной стоимости на 2025–2026, то есть за прошлый год; на странице, прочитанной 13 октября 2026, более поздних сумм нет'),
    INC_COA, tuition=41974, tuition_label='Tuition and fees', billed=58410, budget=62374, status='previous-cycle',
    extras=[{'label': L('Fee for students who need an I-20 or DS-2019 issued by the university', 'Сбор со студентов, которым университет оформляет I-20 или DS-2019'), 'amount': 250, 'required': True,
             'condition': L('$125 each semester; not included in the table above.', '$125 за каждый семестр; в таблицу выше не входит.'), 'year': '2025–2026'}],
    note=L('Students majoring in business, engineering and computer science are charged additional tuition. The page adds that international students may have higher living expenses.', 'Студентам направлений бизнеса, инженерии и информатики начисляется дополнительная плата. На странице добавлено, что у иностранных студентов расходы на жизнь могут быть выше.')))

# ---------------------------------------------------------------- The New School
S = 'https://www.newschool.edu/tuition-fees-billing/new-students-tuition/'
put('the-new-school', semester(costs('2026–2027', S, V, L('New full-time undergraduates of Parsons, Eugene Lang College and the College of Performing Arts', 'Новые студенты бакалавриата с полной нагрузкой в Parsons, Eugene Lang College и College of Performing Arts'),
    [(SEM(('Tuition (12–18 credits)', 'Обучение (12–18 кредитов)')), 31174, B), (SEM(('University Services fee', 'Сбор University Services')), 720, B), (SEM(('Student Senate fee', 'Сбор Student Senate')), 9, B)],
    L('$31,174 tuition per semester for full-time undergraduates', '$31,174 — обучение за семестр для студентов с полной нагрузкой'),
    L('Published per semester for students entering in 2026–2027: tuition $31,174, University Services fee $720, Student Senate fee $9. Two semesters come to $63,806 — calculated by UniPath; the page prints no yearly total', 'Опубликовано за семестр для поступающих в 2026–2027: обучение $31,174, сбор University Services $720, сбор Student Senate $9. Два семестра — $63,806; рассчитано UniPath, годового итога на странице нет'),
    L('tuition and two fees of one semester. Housing, food, health insurance, books and personal expenses are extra', 'обучение и два сбора одного семестра. Жильё, питание, медицинская страховка, книги и личные расходы — сверх этого'),
    tuition=31174,
    extras=[{'label': L('Student Health Insurance Plan', 'Студенческая медицинская страховка'), 'amount': 4859, 'required': True,
             'condition': L('$1,970 for the autumn and $2,889 for the spring, charged automatically unless a waiver for comparable coverage is filed; the amounts await final approval.', '$1,970 за осень и $2,889 за весну; начисляется автоматически, если не подан отказ при сопоставимом полисе; суммы ждут окончательного утверждения.'), 'year': '2026–2027'}],
    note=L('University housing is listed at $20,985 for a double room and $18,018 for a triple; the row does not say for what period. Parsons Paris has its own rates.', 'Жильё университета указано: $20,985 за двухместную комнату и $18,018 за трёхместную; за какой период — в строке не сказано. У Parsons Paris свои ставки.')), '$31,174 per semester'),
    {'currency': 'USD', 'basis': 'tuition', 'min': 63806, 'max': 63806, 'note': CALC2})

# ---------------------------------------------------------------- pages that print no figures
unread('marist-university', 'https://www.marist.edu/financial-aid/freshman/tuition-and-fees',
       L('The tuition page prints no figures: it links to a separate “First-Year Expenses & Cost of Attendance” document, which was not opened on this check.', 'На странице платы нет сумм: она ссылается на отдельный документ «First-Year Expenses & Cost of Attendance», который при этой проверке не открывался.'))
unread('xavier-university-of-louisiana', 'https://www.xula.edu/fiscal-services/office-of-student-accounts/office-of-student-accounts-tuition-fees-residential-housing-and-other-costs.html',
       L('The 2026–2027 tuition and fees of the College of Arts and Sciences are published only as a PDF schedule linked from this page; the file was not downloaded on this check, so no figures are recorded.', 'Плата и сборы College of Arts and Sciences на 2026–2027 опубликованы только в виде PDF-расписания по ссылке с этой страницы; файл при этой проверке не скачивался, поэтому сумм нет.'))
unread('texas-a-and-m-university', 'https://tuition.tamu.edu/undergraduate',
       L('Texas A&M publishes undergraduate costs only through a calculator that asks for the semester, residency (it has an “International” option), housing, rate plan and major. No single yearly table was found, so no figure is recorded.', 'Texas A&M публикует стоимость бакалавриата только через калькулятор, который спрашивает семестр, статус (есть вариант «International»), жильё, тарифный план и специальность. Единой годовой таблицы не найдено, поэтому сумм нет.'))
c = D['dillard-university']['costs']
c['note'] = L('The cost of attendance page, read again on 13 October 2026, still shows 2024–25, so the figures stay marked as a previous cycle and are not used by the match page. Another Dillard page gives 2025–26 tuition of $10,059 and a mandatory fee of $1,900 per semester; no figures for 2026–27 or 2027–28 were found.',
              'Страница стоимости, перечитанная 13 октября 2026, по-прежнему показывает 2024–25, поэтому суммы остаются с пометкой «прошлый цикл» и в подборе не используются. На другой странице Dillard указаны плата 2025–26 — $10,059 и обязательный сбор $1,900 за семестр; сумм на 2026–27 или 2027–28 не найдено.')
c['verified'] = V

us3_edit.save(head, recs)

# yearly figures for the match page
import io, os, re
p = os.path.join(us3_edit.ROOT, 'data/match.js')
s = io.open(p, encoding='utf-8').read()
m = re.search(r'\n  annualCost: \{\n', s)
lines = ''
for uid, a in annual.items():
    assert ("'%s'" % uid) not in s, uid
    note = ", note: %s" % repr(str(a['note'])).replace('\\u2014', '—') if a.get('note') else ''
    lines += "    '%s': { currency: 'USD', basis: '%s', min: %d, max: %d%s },\n" % (uid, a['basis'], a['min'], a['max'], note)
s = s[:m.end()] + lines + s[m.end():]
io.open(p, 'w', encoding='utf-8').write(s)
print('costs written: %d with figures, 3 without, Dillard re-read; match.js +%d' % (12, len(annual)))
flush()
