# -*- coding: utf-8 -*-
"""United States expansion, batch B, part 2. Every fact below was read on the
official page named next to it on 12 October 2026.

Hampshire College is not in this file: its closure page states that the Board
of Trustees voted to close the college permanently after the autumn 2026
semester. Adelphi University, the first candidate of the reserve list, takes
its place."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
MA, CA, NY = 'Massachusetts', 'California', 'New York'
LOCAL = L('Due by 11:59 p.m. in the applicant’s time zone.', 'Срок — 23:59 по времени абитуриента.')
ACCEPTED = L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')

# -------------------------------------------------------- Fairfield University
F = 'https://www.fairfield.edu/admission-and-aid/apply/first-year-applicants/index.html'
S = 'https://www.fairfield.edu/admission-and-aid/apply/international-students/application-requirements/index.html'
T = 'https://www.fairfield.edu/admission-and-aid/tuition-and-costs/undergraduate/index.html'
records.append(R(
    'fairfield-university', 'Fairfield University', 'Fairfield', L('Fairfield', 'Фэрфилд'), L('Connecticut', 'Коннектикут'), 'private', 'Private university',
    L('A private Jesuit university in Fairfield, Connecticut. Submitting SAT or ACT results is optional. The pages read state the rounds, the English test minimums and the 2026–27 charges; they say nothing about scholarships or aid for international first-year students.',
      'Частный иезуитский университет в Фэрфилде, штат Коннектикут. Результаты SAT или ACT отправлять необязательно. На прочитанных страницах указаны раунды, минимумы тестов по английскому и платежи на 2026–27; о стипендиях и помощи иностранным первокурсникам там ничего нет.'),
    ['business', 'engineering', 'education', 'medicine', 'humanities'],
    {'website': 'https://www.fairfield.edu/', 'admissions': F, 'international': 'https://www.fairfield.edu/admission-and-aid/apply/international-students/index.html',
     'portal': 'https://www.commonapp.org/', 'aid': 'https://www.fairfield.edu/admission-and-aid/scholarships-and-grants/index.html', 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=L('The fields listed are the schools named on the tuition page: Arts and Sciences, Business, Education, Engineering and Nursing.', 'Указаны направления школ, названных на странице платы: Arts and Sciences, Business, Education, Engineering и Nursing.'),
    rounds=[
        rd('EA', '2026-11-01', F, V, L('Decisions between 20 December and 15 January.', 'Решения с 20 декабря по 15 января.'), note=NOYEAR),
        rd('ED1', '2026-11-15', F, V, dec_on('12-15'), note=NOYEAR),
        rd('ED2', '2027-01-15', F, V, dec_on('02-15'), note=NOYEAR),
        rd('RD', '2027-01-15', F, V, dec_on('04-01'), note=NOYEAR),
        rnd(L('FAFSA and CSS Profile — Early Action and Early Decision I', 'FAFSA и CSS Profile — Early Action и Early Decision I'), 'aid', '2026-12-01', False,
            L('The page does not say which of the two forms international applicants file.', 'На странице не сказано, какую из двух форм подают иностранные абитуриенты.'), F, V, note=NOYEAR, applies=L('Applicants asking for aid', 'Абитуриенты, запрашивающие помощь')),
        rnd(L('FAFSA and CSS Profile — Early Decision II and Regular Decision', 'FAFSA и CSS Profile — Early Decision II и Regular Decision'), 'aid', '2027-01-15', False,
            L('The page does not say which of the two forms international applicants file.', 'На странице не сказано, какую из двух форм подают иностранные абитуриенты.'), F, V, note=NOYEAR, applies=L('Applicants asking for aid', 'Абитуриенты, запрашивающие помощь')),
    ],
    fee=fee(65, L('Or an official fee waiver.', 'Либо официальное освобождение от сбора.'), F, V, waiver=L('Official fee waiver accepted', 'Принимается официальное освобождение от сбора')),
    documents=docs(COMMON, L('Personal statement (Common Application essay)', 'Мотивационное письмо (эссе Common Application)'),
                   L('Official secondary school transcript, school report and counselor recommendation, sent by the school', 'Официальная школьная выписка, справка школы и рекомендация консультанта — отправляет школа'),
                   L('Evaluation of international academic records by an approved evaluator (WES or ECE preferred)', 'Оценка иностранных документов об образовании одобренной организацией (предпочтительно WES или ECE)'), 'english', L('Certificate of Finances', 'Certificate of Finances (подтверждение финансов)')),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(80, 4.5, L('At least 80 for tests taken before 21 January 2026, or 4.5 for tests taken on or after that date.', 'Не ниже 80 для тестов, сданных до 21 января 2026, либо 4.5 — начиная с этой даты.')),
             'duolingo': eng(115, None, L('The page gives two figures: a minimum of 115 in the list of requirements and 105 further down.', 'На странице два значения: минимум 115 в списке требований и 105 ниже по тексту.')),
             'waiver': L('Required from all students whose native language is not English; official score reports only.', 'Требуется от всех, для кого английский не родной язык; принимаются только официальные отчёты о баллах.'),
             'note': L('The School of Education and Human Development asks for more: TOEFL 84 with 21 in reading and 23 in writing, or IELTS 7.5.', 'School of Education and Human Development требует больше: TOEFL 84 при 21 за чтение и 23 за письмо либо IELTS 7.5.'),
             'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Fairfield states that submitting SAT or ACT results is optional.', 'Fairfield сообщает, что отправлять результаты SAT или ACT необязательно.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time undergraduates in a double room with the unlimited meal plan', 'Студенты бакалавриата на полной нагрузке в двухместной комнате с безлимитным питанием'),
                [(TUIT, 61390, B), (L('Room — double, suite or quad', 'Комната — двухместная, блок или четырёхместная'), 12100, B), (L('Board — unlimited', 'Питание — безлимитный план'), 8430, B),
                 (L('Undergraduate student activity fee', 'Сбор на студенческие мероприятия'), 1025, B), (L('Orientation fee (first-year students, one-time)', 'Сбор за ориентацию (первокурсники, разово)'), 425, X)],
                L('$82,945 in tuition, room, board and the activity fee', '$82,945 — обучение, комната, питание и сбор на мероприятия'),
                L('Fairfield lists the charges without a total; $82,945 is the four yearly charges added together', 'Fairfield перечисляет платежи без итога; $82,945 — сумма четырёх годовых платежей'),
                INC_BILLED, tuition=61390, billed=82945,
                note=L('Laboratory and course fees depend on the programme. Health insurance, books and personal costs are not on the page.', 'Лабораторные и курсовые сборы зависят от программы. Страховки, книг и личных расходов на странице нет.')),
    fullRide=no_full(L('The pages read say nothing about scholarships or financial aid for international first-year students.', 'На прочитанных страницах о стипендиях и финансовой помощи иностранным первокурсникам ничего не сказано.')),
    need={'note': L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')},
    sources=src('Fairfield', ('fy', F), (L('Fairfield — international student applicants', 'Fairfield — иностранным абитуриентам'), S), ('cost 2026–27', T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs'),
    unconfirmed=chk('aid', 'merit', L('Duolingo minimum (115 or 105)', 'минимум Duolingo (115 или 105)'), 'insurance', 'founded', 'stats'),
))
nodesc.append('fairfield-university')
annual['fairfield-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 82945, 'max': 82945}

# ------------------------------------------------- Olin College of Engineering
H = 'https://www.olin.edu/admission/apply/admission-process'
T = 'https://www.olin.edu/admission-financial-aid-afford/cost-attendance'
A = 'https://www.olin.edu/admission-financial-aid-afford/applying-aid'
SC = 'https://www.olin.edu/admission-financial-aid-afford/aid-scholarships'
records.append(R(
    'olin-college-of-engineering', 'Franklin W. Olin College of Engineering', 'Olin', L('Needham', 'Нидем'), MA, 'private', L('Private engineering college', 'Частный инженерный колледж'),
    L('A small private engineering college in Needham, Massachusetts. Every admitted student receives the merit-based Olin Tuition Scholarship of $10,000 a year for eight semesters. Olin says its need-based aid is offered to US citizens and eligible non-citizens.',
      'Небольшой частный инженерный колледж в Нидеме, штат Массачусетс. Каждый принятый студент получает стипендию за успехи Olin Tuition Scholarship — $10,000 в год на восемь семестров. Помощь по потребности, по словам Olin, даётся гражданам США и приравненным к ним лицам.'),
    ['engineering', 'computer-science'],
    {'website': 'https://www.olin.edu/', 'admissions': 'https://www.olin.edu/admission', 'international': H, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': SC,
     'programs': 'https://www.olin.edu/academics/majors-concentrations', 'cost': T},
    verified=V, platforms=[COMMON], aliases=['Olin College', 'Olin College of Engineering'],
    rounds=[
        rnd(L('Application deadline', 'Срок подачи заявки'), 'RD', '2026-12-15', False, J(L('The only application round; applications are reviewed in January.', 'Единственный раунд; заявки рассматривают в январе.'), LOCAL), H, V),
        rnd(L('Applicants told whether they are candidates', 'Абитуриентам сообщают, стали ли они кандидатами'), 'decision', None, False, None, H, V, date=L('Late January 2027', 'Конец января 2027')),
        rnd(L('Candidates’ Weekends', 'Candidates’ Weekends (выходные для кандидатов)'), 'interview', '2027-02-19', False,
            L('19–20 February, 26–27 February and 5–6 March 2027. Candidates living outside the contiguous United States have a virtual interview instead.', '19–20 февраля, 26–27 февраля и 5–6 марта 2027. Кандидаты, живущие за пределами континентальной части США, проходят собеседование онлайн.'), H, V),
        rnd(L('Admission and financial aid decisions', 'Решения о приёме и финансовой помощи'), 'decision', None, False, None, H, V, date=L('Late March 2027', 'Конец марта 2027')),
    ],
    fee=fee(85, L('A fee waiver request can be submitted through the Common Application.', 'Запрос об освобождении от сбора можно подать через Common Application.'), H, V, waiver=L('Through the Common Application', 'Через Common Application')),
    documents=docs(L('Common Application with Olin-specific questions', 'Common Application с вопросами Olin'), L('High school transcript and School Report, sent by the school and translated into English', 'Школьная выписка и School Report — отправляет школа, с переводом на английский'), 'english'),
    interview=L('Candidates’ Weekend includes an individual interview; candidates outside the contiguous United States are interviewed online.', 'В программу Candidates’ Weekend входит индивидуальное собеседование; кандидаты за пределами континентальной части США проходят его онлайн.'),
    english={'ielts': eng(None, 7, L('Recommended minimum: 7 or higher.', 'Рекомендуемый минимум: 7 и выше.')),
             'toefl': toefl(100, None, J(L('Recommended minimum: 100 or higher on the internet-based test.', 'Рекомендуемый минимум: 100 и выше по интернет-версии.'), OLDSCALE), kind='recommended'),
             'duolingo': eng(None, 120, L('Recommended minimum: 120 or higher.', 'Рекомендуемый минимум: 120 и выше.')),
             'waiver': L('Highly recommended for applicants whose primary language is not English, unless they have been enrolled in an English-instruction school for at least four years.', 'Настоятельно рекомендуется абитуриентам, для которых английский не основной язык, — кроме тех, кто не менее четырёх лет учился в школе с обучением на английском.'),
             'note': L('PTE is also accepted (65 or higher recommended). Scores may be self-reported and are verified on enrolment.', 'Также принимается PTE (рекомендуется 65 и выше). Баллы можно указать самостоятельно; их проверяют при зачислении.'),
             'detailsSource': H, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('First-year students living on campus', 'Первокурсники, живущие в кампусе'),
                [(TUIT, 67004, B), (HOUS, 13456, B), (FOOD, 9266, B), (L('Student activity fee', 'Сбор на студенческие мероприятия'), 370, B), (L('General fee', 'Общий сбор'), 1900, B),
                 (L('Laptop fee (first year only)', 'Сбор за ноутбук (только первый год)'), 2656, B), (L('Loan fee', 'Комиссия по кредиту'), 80, E),
                 (L('Books + supplies', 'Книги и материалы'), 240, E), (L('Travel', 'Дорога'), 1666, E), (L('Personal', 'Личные расходы'), 450, E)],
                h_coa(97088), tt_coa(97088, 94652), INC_COA, tuition=67004, billed=94652, budget=97088,
                note=L('The figure is before financial aid: every admitted student receives the $10,000 Olin Tuition Scholarship. Health insurance is required of all enrolled students and is not in the table.',
                       'Сумма указана до финансовой помощи: каждый принятый получает Olin Tuition Scholarship — $10,000. Медицинская страховка обязательна для всех студентов и в таблицу не входит.')),
    fullRide=no_full(L('Olin’s Tuition Scholarship is $10,000 a year against tuition of $67,004. Its commitment to meet full demonstrated need is stated for eligible students, and the aid application page says need-based aid is offered to US citizens and eligible non-citizens.',
                       'Olin Tuition Scholarship — $10,000 в год при плате за обучение $67,004. Обязательство покрывать всю подтверждённую потребность относится к студентам, имеющим на неё право, а на странице подачи на помощь сказано, что помощь по потребности даётся гражданам США и приравненным к ним лицам.')),
    merit=[award('Olin Tuition Scholarship', L('$10,000 a year', '$10,000 в год'), L('All admitted students', 'Все принятые студенты'),
                 L('For a maximum of eight semesters of required full-time study.', 'Не более чем на восемь семестров обязательного обучения на полной нагрузке.'), application=AUTO, renewable=True)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The page on applying for aid states that need-based aid is offered to US citizens and eligible non-citizens; the form is the FAFSA and the CSS Profile is not required.', 'На странице подачи на помощь сказано, что помощь по потребности даётся гражданам США и приравненным к ним лицам; форма — FAFSA, CSS Profile не требуется.')},
    sources=src('Olin', (L('Olin — admission process', 'Olin — порядок приёма'), H), ('coa 2026–27', T), (L('Olin — applying for aid', 'Olin — подача на помощь'), A), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'costs', 'aid', 'merit'),
    unconfirmed=chk('tests', 'insurance', 'founded', 'stats'),
))
nodesc.append('olin-college-of-engineering')
annual['olin-college-of-engineering'] = {'currency': 'USD', 'basis': 'total', 'min': 97088, 'max': 97088, 'note': L('Before the $10,000 Olin Tuition Scholarship every admitted student receives', 'До вычета Olin Tuition Scholarship ($10,000), которую получает каждый принятый студент')}

# --------------------------------------------- Georgia Institute of Technology
S = 'https://admission.gatech.edu/international/first-year'
D = 'https://admission.gatech.edu/first-year/deadlines'
FE = 'https://admission.gatech.edu/first-year/application-fees'
P = 'https://admission.gatech.edu/first-year/standardized-tests'
T = 'https://finaid.gatech.edu/costs/undergraduate-costs'
A = 'https://finaid.gatech.edu/apply/international'
records.append(R(
    'georgia-institute-of-technology', 'Georgia Institute of Technology', 'Georgia Tech', L('Atlanta', 'Атланта'), L('Georgia', 'Джорджия'), 'public', 'Public research university',
    L('A public research university in Atlanta, Georgia. Every first-year applicant must submit an SAT or ACT score. Georgia Tech says it typically has no scholarships or financial aid for international students, who pay the out-of-country rate.',
      'Государственный исследовательский университет в Атланте, штат Джорджия. Каждый поступающий на первый курс обязан отправить балл SAT или ACT. Georgia Tech сообщает, что стипендий и финансовой помощи для иностранных студентов у него, как правило, нет; они платят по ставке для приехавших из-за рубежа.'),
    ['engineering', 'computer-science', 'business', 'economics', 'mathematics', 'biology', 'psychology', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.gatech.edu/', 'programs': 'https://www.gatech.edu/academics/all-degree-programs', 'admissions': 'https://admission.gatech.edu/first-year/', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'cost': T},
    verified=V, platforms=[COMMON], aliases=['Georgia Tech', 'GT'],
    rounds=[
        rd('EA1', '2026-10-15', D, V, L('Documents due 30 October; decisions in early December.', 'Документы до 30 октября; решения в начале декабря.'), LOCAL,
           note=L('The page read does not say which applicants may use Early Action 1; check the plan descriptions before applying.', 'На прочитанной странице не сказано, кто может подавать в Early Action 1; перед подачей проверьте описание планов.')),
        rd('EA2', '2026-11-02', D, V, L('Documents due 16 November; decisions in late January.', 'Документы до 16 ноября; решения в конце января.'), LOCAL),
        rd('RD', '2027-01-06', D, V, L('Documents due 22 January; decisions in mid-March.', 'Документы до 22 января; решения в середине марта.'), REPLY_MAY1, LOCAL),
    ],
    fee=fee(85, L('The fee for international applicants; $75 for others. Fee waivers are available where financial circumstances make the fee difficult to pay.', 'Сбор для иностранных абитуриентов; для остальных — $75. Освобождение возможно, если финансовое положение не позволяет оплатить сбор.'), FE, V,
            waiver=L('Available on financial grounds', 'Возможно по финансовым причинам')),
    documents=docs(COMMON, L('School transcripts; requirements vary by education system', 'Школьные выписки; требования зависят от системы образования'), L('SAT or ACT score', 'Балл SAT или ACT'),
                   L('Proof of English proficiency by one of the methods approved by the University System of Georgia', 'Подтверждение английского одним из способов, одобренных University System of Georgia')),
    interview=L('Georgia Tech encourages an unscripted interview through InitialView or Vericant; it does not replace the English proficiency requirement.', 'Georgia Tech советует пройти свободное собеседование через InitialView или Vericant; оно не заменяет требование по английскому.'),
    english={'duolingo': eng(None, None, L('Welcomed as a supplementary material; it does not satisfy the University System of Georgia requirement.', 'Принимается как дополнительный материал; требование University System of Georgia он не выполняет.')),
             'waiver': L('All international applicants must demonstrate English proficiency by one of the methods approved by the University System of Georgia.', 'Все иностранные абитуриенты обязаны подтвердить английский одним из способов, одобренных University System of Georgia.'),
             'note': L('The list of approved methods and scores was not read on this check.', 'Список одобренных способов и баллов при этой проверке не прочитан.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('required', L('All first-year applicants must submit results from at least one SAT or ACT to be considered; scores may be self-reported.', 'Все поступающие на первый курс обязаны отправить результат хотя бы одного SAT или ACT; баллы можно указать самостоятельно.'), source=P, verified=V),
    costs=costs('2027–2028', T, V, L('First-year out-of-country students living on campus', 'Первокурсники из-за рубежа, живущие в кампусе'),
                [(TUIT, 34572, B), (L('Mandatory student fees', 'Обязательные студенческие сборы'), 1696, B), (L('Books, course materials, supplies and equipment', 'Книги, учебные материалы и оборудование'), 800, E),
                 (L('Housing allowance', 'Жильё (оценка)'), 8718, E), (L('Standard food service plan', 'Стандартный план питания'), 6610, E),
                 (L('Personal and other miscellaneous expenses', 'Личные и прочие расходы'), 2800, E), (L('Transportation allowance', 'Транспорт (оценка)'), 998, E)],
                h_coa(56194), L('$56,194 estimated cost of attendance for 2027–2028, of which $36,268 is tuition and mandatory fees', '$56,194 — оценка стоимости обучения на 2027–2028, из них $36,268 — обучение и обязательные сборы'),
                L('tuition and mandatory fees, plus the university’s allowances for housing, food, books, personal expenses and transportation', 'обучение и обязательные сборы, а также оценки университета на жильё, питание, книги, личные расходы и транспорт'),
                tuition=34572, billed=36268, budget=56194,
                note=L('Georgia Tech labels this an estimated cost of attendance. Health insurance is not in the table.', 'Georgia Tech называет эти суммы оценкой стоимости обучения. Страховки в таблице нет.')),
    fullRide={'available': False, 'internationalEligible': False, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': L('Georgia Tech states that it typically does not have scholarships or financial aid available for international students, and that institutional scholarships are often not awarded to them.', 'Georgia Tech сообщает, что стипендий и финансовой помощи для иностранных студентов у него, как правило, нет и что стипендии института им часто не назначаются.'),
              'quote': 'typically does not have scholarships or financial aid available for international students', 'quoteSource': 'https://admission.gatech.edu/international/visa-process'},
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('International students are not eligible for federal or state aid. Georgia Tech points them to private loans, which usually need a US co-signer, and to paid internships, co-ops and campus jobs.', 'Иностранные студенты не имеют права на федеральную помощь и помощь штата. Georgia Tech указывает на частные кредиты (обычно нужен поручитель из США), оплачиваемые стажировки, программы co-op и работу в кампусе.')},
    sources=src('Georgia Tech', ('intl', S), ('dates', D), (L('Georgia Tech — application fees', 'Georgia Tech — сборы за заявку'), FE), ('tests', P), ('coa 2027–2028', T), ('aidintl', A)),
    checked=chk('rounds', 'fee', 'tests', 'costs', 'aid'),
    unconfirmed=chk(L('English test scores accepted by the University System of Georgia', 'баллы тестов по английскому, принимаемые University System of Georgia'), L('who may apply in Early Action 1', 'кто может подавать в Early Action 1'), 'insurance', 'founded', 'stats'),
))
annual['georgia-institute-of-technology'] = {'currency': 'USD', 'basis': 'total', 'min': 56194, 'max': 56194, 'note': L('Estimate for 2027–2028, out-of-country rate', 'Оценка на 2027–2028, ставка для приехавших из-за рубежа')}

# ---------------------------------------------------------- Adelphi University
F = 'https://www.adelphi.edu/admissions/first-year/apply/'
S = 'https://www.adelphi.edu/admissions/international/apply/'
A = 'https://www.adelphi.edu/aid/apply/international-students/'
T = 'https://www.adelphi.edu/aid/tuition-costs/undergraduate/'
records.append(R(
    'adelphi-university', 'Adelphi University', 'Adelphi', L('Garden City', 'Гарден-Сити'), NY, 'private', 'Private university',
    L('A private university in Garden City, New York. Adelphi is test-optional. International undergraduates are eligible for merit, talent and athletic scholarships, reviewed automatically, but Adelphi says they should not plan on scholarships covering the full cost of attendance.',
      'Частный университет в Гарден-Сити, штат Нью-Йорк. Тесты SAT/ACT необязательны. Иностранные студенты бакалавриата могут получить стипендии за успехи, талант и спорт — заявки рассматриваются автоматически, — но Adelphi предупреждает: рассчитывать, что стипендии покроют всю стоимость, не стоит.'),
    ['business', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education', 'medicine'],
    {'website': 'https://www.adelphi.edu/', 'admissions': 'https://www.adelphi.edu/admissions/first-year/', 'international': 'https://www.adelphi.edu/admissions/international/',
     'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A, 'programs': 'https://www.adelphi.edu/programs/', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('EA', '2026-11-01', F, V, L('Decision notification begins on 15 November; applicants whose materials are complete by 1 November are told by 31 December.', 'Решения начинают рассылать 15 ноября; тем, чьи документы готовы к 1 ноября, сообщают до 31 декабря.'), note=NOYEAR),
        rd('ROLL', '2027-03-01', F, V, L('1 March is a priority date; later applications are considered if space remains. Decisions follow within two to four weeks of a completed application.', '1 марта — приоритетный срок; более поздние заявки рассматриваются при наличии мест. Решения — в течение двух–четырёх недель после завершения заявки.'), note=NOYEAR),
    ],
    fee=fee(50, L('Non-refundable. Applicants whose financial circumstances qualify them for a waiver are asked to contact University Admissions.', 'Невозвратный. Тем, чьё финансовое положение даёт право на освобождение, предлагают обратиться в приёмную комиссию.'), F, V, waiver=L('On request to University Admissions', 'По запросу в приёмную комиссию')),
    documents=docs(COMMON, L('Personal statement or essay of up to 500 words (encouraged)', 'Мотивационное письмо или эссе до 500 слов (желательно)'), 'transcript', 'english',
                   L('Course-by-course credential evaluation, where the university asks for one', 'Оценка документов об образовании с перечнем предметов — если её запрашивает университет')),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED), 'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('Required unless the applicant meets one of Adelphi’s exemption criteria, which depend on educational background.', 'Требуется, если абитуриент не подпадает под одно из исключений Adelphi; они зависят от прежнего образования.'),
             'note': L('The Michigan English Test and LanguageCert are also accepted.', 'Также принимаются Michigan English Test и LanguageCert.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Adelphi has adopted a test-optional policy and says applicants are considered for merit scholarships whether or not they send scores. Some joint-degree programmes set their own SAT or ACT requirements.', 'Adelphi не требует тестов и сообщает, что на стипендии за успехи рассматривают независимо от наличия баллов. У некоторых совместных программ свои требования к SAT или ACT.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time undergraduates, 12–17 credits (AA, BA, BBA, BS and BSW programmes)', 'Студенты бакалавриата на полной нагрузке, 12–17 кредитов (программы AA, BA, BBA, BS и BSW)'),
                [(L('Tuition, two semesters at $26,055', 'Обучение, два семестра по $26,055'), 52110, B)],
                h_tuition(52110, 'tuition'), L('$52,110 in tuition for the year; fees, housing and meal plans are listed on separate pages', '$52,110 за обучение в год; сборы, жильё и питание указаны на отдельных страницах'),
                L('tuition only. University fees, housing, food, books and health insurance are extra and were not read on this check', 'только обучение. Сборы университета, жильё, питание, книги и страховка — сверх этого; при этой проверке не прочитаны'),
                tuition=52110),
    fullRide=no_full(L('Adelphi says international undergraduates may be considered for merit-based scholarships but should not plan on institutional scholarships covering the full cost of attendance. The pages read give no amounts.', 'Adelphi сообщает, что иностранные студенты бакалавриата могут рассматриваться на стипендии за успехи, но не должны рассчитывать, что стипендии университета покроют всю стоимость. Сумм на прочитанных страницах нет.')),
    merit=[award(L('Adelphi merit, talent and athletic scholarships', 'Стипендии Adelphi за успехи, талант и спорт'), None, L('International undergraduate applicants', 'Иностранные абитуриенты бакалавриата'), NOAMT, application=AUTO)],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('International students are not eligible for federal or state aid; the page for them describes scholarships and private loans with a US co-signer, not need-based grants.', 'Иностранные студенты не имеют права на федеральную помощь и помощь штата; на странице для них описаны стипендии и частные кредиты с поручителем из США, а не гранты по потребности.')},
    sources=src('Adelphi', (L('Adelphi — first-year application guide', 'Adelphi — руководство по подаче на первый курс'), F), (L('Adelphi — international applicants: how to apply', 'Adelphi — иностранным абитуриентам: как подать'), S),
                (L('Adelphi — scholarships and loans for international students', 'Adelphi — стипендии и кредиты для иностранных студентов'), A), ('cost 2026–2027', T)),
    checked=chk('rounds', 'fee', 'tests', L('tuition 2026–2027', 'плата за обучение 2026–2027'), 'merit'),
    unconfirmed=chk(L('minimum English test scores', 'минимальные баллы тестов по английскому'), 'awards', L('fees, housing and food', 'сборы, жильё и питание'), 'insurance', 'founded', 'stats'),
))
nodesc.append('adelphi-university')
annual['adelphi-university'] = {'currency': 'USD', 'basis': 'tuition', 'min': 52110, 'max': 52110}

# --------------------------------------------------------- Harvey Mudd College
S = 'https://www.hmc.edu/admission/apply/international-applicants/'
F = 'https://www.hmc.edu/admission/apply/first-year-students/'
A = 'https://www.hmc.edu/admission/afford/international-student-financial-aid/'
SO = 'https://www.hmc.edu/admission/afford/international-student-financial-aid/so-scholarship/'
T = 'https://www.hmc.edu/admission/afford/cost-of-attendance/'
E1 = 'https://www.hmc.edu/admission/afford/international-student-financial-aid/international-deadlines/early-decision-1-international-applicant'
records.append(R(
    'harvey-mudd-college', 'Harvey Mudd College', 'Harvey Mudd', 'Claremont', CA, 'liberal-arts', 'Private liberal arts college',
    L('A private college of science, engineering and mathematics in Claremont, California, one of the Claremont Colleges. Harvey Mudd offers need-based aid to a small number of admitted international applicants and says it can meet full demonstrated need for only a handful of them; asking for aid may affect the admission decision.',
      'Частный колледж естественных наук, инженерии и математики в Клермонте, штат Калифорния; входит в Claremont Colleges. Помощь по потребности получают немногие принятые иностранные абитуриенты, а полностью подтверждённую потребность колледж, по его словам, может покрыть лишь у единиц; запрос помощи может повлиять на решение о приёме.'),
    ['engineering', 'computer-science', 'mathematics', 'biology'],
    {'website': 'https://www.hmc.edu/', 'admissions': 'https://www.hmc.edu/admission/', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': SO,
     'programs': 'https://www.hmc.edu/academics/majors/', 'cost': T},
    verified=V, platforms=[COMMON], aliases=['HMC'],
    rounds=[
        rd('ED1', '2026-11-15', F, V, note=NOYEAR),
        rd('ED2', '2027-01-05', F, V, note=NOYEAR),
        rnd(L('Financial aid documents — Early Decision I', 'Документы на финансовую помощь — Early Decision I'), 'aid', '2026-11-15', False,
            L('Documents sent to the Office of Financial Aid are due 15 November 2026; the 2027–2028 CSS Profile is due 1 December 2026.', 'Документы в отдел финансовой помощи — до 15 ноября 2026; CSS Profile на 2027–2028 — до 1 декабря 2026.'), E1, V, applies=AIDAPP),
    ],
    fee=fee(70, L('Fee waivers are available to those who demonstrate financial need, through the Common Application; waivers from the ACT, College Board and NACAC are also honoured.', 'Освобождение доступно тем, кто подтвердил финансовую потребность, — через Common Application; принимаются также освобождения ACT, College Board и NACAC.'), F, V,
            waiver=L('Through the Common Application, or an ACT, College Board or NACAC waiver', 'Через Common Application либо по освобождению ACT, College Board или NACAC')),
    documents=docs(COMMON, L('Personal essay, an additional essay and a short answer', 'Личное эссе, дополнительное эссе и короткий ответ'), 'transcript', 'english', L('CSS Profile, if applying for aid', 'CSS Profile — если запрашиваете помощь')),
    english={'ielts': eng(7.5, None, L('IELTS Academic, minimum 7.5.', 'IELTS Academic, минимум 7.5.')),
             'toefl': toefl(100, None, J(L('Minimum 100; the iBT Home Edition and Paper Edition are accepted.', 'Минимум 100; принимаются iBT Home Edition и Paper Edition.'), OLDSCALE)),
             'duolingo': eng(130, None, L('Minimum 130, on the 160-point version only.', 'Минимум 130 — только по версии со шкалой до 160.')),
             'waiver': L('Applicants must demonstrate proficiency in English by one of the listed tests.', 'Абитуриенты обязаны подтвердить английский одним из перечисленных тестов.'),
             'note': L('Cambridge C1 Advanced (190) and C2 Proficiency (200) are also accepted.', 'Также принимаются Cambridge C1 Advanced (190) и C2 Proficiency (200).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('unknown', L('The first-year page says the test-optional pilot was extended through 2026 and applies to students applying for Fall 2026; it does not state the policy for Fall 2027.', 'На странице для первокурсников сказано, что пилотная программа необязательных тестов продлена до 2026 года и относится к поступающим на осень 2026; политика на осень 2027 там не указана.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 76879, B), (L('Student body fee', 'Сбор студенческого самоуправления'), 401, B), (HOUS, 13293, B), (L('Food (19-meal plan)', 'Питание (план на 19 приёмов пищи)'), 11489, B),
                 (L('New student orientation fee (autumn only)', 'Сбор за ориентацию новых студентов (только осенью)'), 250, B), (PERS, 1400, E), (BOOKS, 800, E)],
                h_coa(104512), tt_coa(104512, 102312), L('tuition, the student body fee, housing, food and the orientation fee, plus estimates for personal expenses and books. Transportation varies with distance and is not in the total', 'обучение, сбор студенческого самоуправления, жильё, питание и сбор за ориентацию, а также оценки личных расходов и книг. Дорога зависит от расстояния и в итог не входит'),
                tuition=76879, billed=102312, budget=104512,
                extras=[{'label': L('Claremont Colleges Student Health Insurance Plan', 'Студенческая медицинская страховка Claremont Colleges'), 'amount': None, 'required': True,
                         'condition': L('International students are required to take part in the plan; its cost was not read on this check.', 'Иностранные студенты обязаны участвовать в этом плане; его стоимость при этой проверке не прочитана.'), 'year': None}]),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based', 'covers': dict(NOCOVER), 'renewable': None,
              'name': 'International Student Scholarship',
              'competitiveness': L('Harvey Mudd says competition for funding is high and that it can meet 100% of demonstrated need for only a handful of international students; the level of need may affect the chance of admission.', 'Harvey Mudd сообщает, что конкуренция за средства высока и что покрыть 100% подтверждённой потребности он может лишь у единиц иностранных студентов; размер потребности может повлиять на шансы на приём.'),
              'howToApply': L('Apply for need-based aid as an international student with the CSS Profile, by the deadline of the admission round.', 'Подайте на помощь по потребности как иностранный студент — через CSS Profile, к сроку своего раунда.'),
              'note': L('An international student who enters without financial aid cannot apply for it in later years.', 'Иностранный студент, поступивший без финансовой помощи, не сможет подать на неё в последующие годы.'),
              'quote': 'able to meet 100% of a family’s demonstrated need for only a handful of international students', 'quoteSource': S},
    merit=[award('Yuen Sang and Yu Yuen Kit So International Scholarship', None, L('All international students are considered; one recipient in each entering class', 'Рассматриваются все иностранные студенты; один получатель в каждом наборе'),
                 L('Awarded for superior academic performance regardless of financial need; renewed automatically for the second year, then with a cumulative GPA of at least 2.75. The page read gives no amount.', 'Назначается за выдающуюся успеваемость независимо от финансовой потребности; на второй год продлевается автоматически, далее — при общем GPA не ниже 2.75. Суммы на прочитанной странице нет.'), application=AUTO)],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'deadlines': L('With the admission round: for Early Decision I, documents by 15 November and the CSS Profile by 1 December 2026.', 'Вместе со своим раундом: для Early Decision I — документы до 15 ноября, CSS Profile до 1 декабря 2026.'),
          'note': L('Aid is offered to a small number of admitted international applicants.', 'Помощь получает небольшое число принятых иностранных абитуриентов.')},
    sources=src('Harvey Mudd', ('intl', S), ('fy', F), ('aidintl', A), (L('Harvey Mudd — international scholarships', 'Harvey Mudd — стипендии для иностранных студентов'), SO), ('coa 2026–2027', T),
                (L('Harvey Mudd — aid deadlines, Early Decision I international applicants', 'Harvey Mudd — сроки подачи на помощь, иностранные абитуриенты Early Decision I'), E1)),
    checked=chk('fee', 'english', 'costs', 'aid', L('Early Decision deadlines', 'сроки Early Decision')),
    unconfirmed=chk(L('Regular Decision deadline', 'срок Regular Decision'), L('test policy for Fall 2027', 'политика тестов на осень 2027'), L('cost of the health insurance plan', 'стоимость медицинской страховки'), 'founded', 'stats'),
))
annual['harvey-mudd-college'] = {'currency': 'USD', 'basis': 'total', 'min': 104512, 'max': 104512, 'note': L('Transportation and the required health insurance plan are not in this total', 'Дорога и обязательная медицинская страховка в этот итог не входят')}

# ------------------------------------------------------------- Hendrix College
S = 'https://via.hendrix.edu/admission-aid/international-applicants'
G = 'https://www.hendrix.edu/admission-aid/'
T = 'https://www.hendrix.edu/financialaid/default.aspx?id=236'
records.append(R(
    'hendrix-college', 'Hendrix College', 'Hendrix', L('Conway', 'Конуэй'), L('Arkansas', 'Арканзас'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Conway, Arkansas, founded in 1876. International applicants submit a CSS Profile and are considered for international student scholarships; the pages read give no scholarship amounts.',
      'Частный колледж свободных искусств в Конуэе, штат Арканзас, основан в 1876 году. Иностранные абитуриенты подают CSS Profile и рассматриваются на стипендии для иностранных студентов; размеров стипендий на прочитанных страницах нет.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.hendrix.edu/', 'programs': 'https://via.hendrix.edu/academics/departments-and-majors/', 'admissions': G, 'international': S, 'portal': 'http://apply.hendrix.edu/apply', 'aid': 'https://www.hendrix.edu/admission-aid/financial-aid',
     'scholarships': 'https://www.hendrix.edu/financialaid/scholarships/', 'cost': T},
    verified=V, founded=1876,
    rounds=[
        rd('EA', '2026-11-15', G, V, L('Decision notification begins on 15 December.', 'Решения начинают рассылать 15 декабря.'), REPLY_MAY1, note=NOYEAR),
        rd('RD', '2027-02-01', G, V, L('Decision notification begins on 1 March.', 'Решения начинают рассылать 1 марта.'), REPLY_MAY1, note=NOYEAR),
        rnd(L('International applicants — final date for autumn enrolment', 'Иностранные абитуриенты — последний срок для осеннего набора'), 'RD', '2027-05-12', False,
            L('Application and all supplemental materials. The enrolment fee is due 21 May; documents for the I-20 by 31 May (priority).', 'Заявка и все дополнительные материалы. Взнос за зачисление — до 21 мая; документы для I-20 — до 31 мая (приоритетный срок).'), S, V, note=NOYEAR, applies=INTL),
    ],
    documents=docs('app', L('Official score report of an English test, for non-native speakers', 'Официальный отчёт о тесте по английскому — для тех, для кого английский не родной'),
                   L('CSS Profile, or the International Student Application on request', 'CSS Profile либо International Student Application по запросу')),
    english={'ielts': eng(7.0, None, atleast('7.0')), 'toefl': toefl(94, None, J(atleast(94), OLDSCALE)), 'duolingo': eng(115, None, atleast(115)),
             'waiver': L('Non-native English speakers must submit an official score report for one of the listed tests.', 'Те, для кого английский не родной, обязаны прислать официальный отчёт об одном из перечисленных тестов.'),
             'note': L('An SAT Evidence-Based Reading and Writing score of 730 or an ACT English score of 32 is also accepted.', 'Также принимаются SAT Evidence-Based Reading and Writing 730 или ACT English 32.'), 'detailsSource': S, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Students living on campus for nine months', 'Студенты, живущие в кампусе девять месяцев'),
                [(TUIT, 40572, B), (FEES, 550, B), (L('Housing — double occupancy', 'Жильё — двухместная комната'), 7678, B), (L('Food plan — unlimited', 'Питание — безлимитный план'), 7600, B),
                 (L('Loan fees', 'Комиссия по кредиту'), 60, E), (L('Books', 'Книги'), 900, E), (TRANS, 1520, E), (L('Personal', 'Личные расходы'), 3000, E)],
                h_coa(61880), tt_coa(61880, 56400), INC_COA, tuition=40572, billed=56400, budget=61880,
                note=L('Hendrix marks its 2026–27 tuition and fees as pending Board approval and subject to change. Health insurance is not in the table.', 'Hendrix помечает плату и сборы на 2026–27 как ожидающие утверждения советом и подлежащие изменению. Страховки в таблице нет.')),
    fullRide=no_full(L('The pages read describe no award at the level of full tuition that is open to international students; the full-cost Murphy Foundation Scholarship is for graduates of El Dorado High School.', 'На прочитанных страницах нет награды уровня полной платы за обучение, открытой иностранным студентам; Murphy Foundation Scholarship на полную стоимость предназначена выпускникам El Dorado High School.')),
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': ['CSS Profile'],
          'note': L('International applicants are asked for a CSS Profile; those who cannot complete it may request Hendrix’s International Student Application.', 'У иностранных абитуриентов просят CSS Profile; те, кто не может его заполнить, могут запросить International Student Application колледжа.')},
    sources=src('Hendrix', ('intl', S), (L('Hendrix — admission and aid', 'Hendrix — приём и помощь'), G), ('coa 2026–27', T), ('merit', 'https://www.hendrix.edu/financialaid/scholarships/')),
    checked=chk('rounds', 'english', 'costs', 'founded'),
    unconfirmed=chk('fee', 'tests', 'awards', 'aid', 'insurance', 'stats'),
))
nodesc.append('hendrix-college')
annual['hendrix-college'] = {'currency': 'USD', 'basis': 'total', 'min': 61880, 'max': 61880}

# ------------------------------------------- Hobart and William Smith Colleges
S = 'https://www.hws.edu/admissions/apply/international-students.aspx'
A = 'https://www.hws.edu/admissions/tuition-scholarships-and-aid/international-student-financial-aid.aspx'
T = 'https://www.hws.edu/admissions/tuition-scholarships-and-aid/'
records.append(R(
    'hobart-and-william-smith-colleges', 'Hobart and William Smith Colleges', 'HWS', L('Geneva', 'Дженива'), NY, 'liberal-arts', 'Private liberal arts college',
    L('Private liberal arts colleges in Geneva, New York, on Seneca Lake. There is no fee to apply and SAT or ACT scores are optional. International students are considered for merit scholarships of as much as $40,000 a year and may apply for need-based grants; HWS is need-aware.',
      'Частные колледжи свободных искусств в Джениве, штат Нью-Йорк, на озере Сенека. Сбора за заявку нет, баллы SAT или ACT необязательны. Иностранные студенты рассматриваются на стипендии за успехи до $40,000 в год и могут подать на гранты по потребности; потребность учитывается при приёме.'),
    ['business', 'economics', 'computer-science', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education', 'medicine'],
    {'website': 'https://www.hws.edu/', 'programs': 'https://www.hws.edu/academics/academic-programs.aspx', 'admissions': 'https://www.hws.edu/admissions/apply/first-year-applicants.aspx', 'international': S, 'portal': 'https://www.commonapp.org/',
     'aid': A, 'scholarships': A, 'cost': T},
    verified=V, platforms=[COMMON, COALITION], aliases=['HWS', 'Hobart College', 'William Smith College'],
    rounds=[
        rd('ED1', '2026-11-15', S, V, dec_in('mid-12'), L('Enrollment deposit by 15 January 2027.', 'Депозит до 15 января 2027.')),
        rd('EA', '2026-11-15', S, V, L('Decisions in mid-January.', 'Решения в середине января.'), L('Enrollment deposit by 1 May 2027.', 'Депозит до 1 мая 2027.')),
        rd('ED2', '2027-01-15', S, V, L('Decisions in mid-February.', 'Решения в середине февраля.'), L('Enrollment deposit by 1 March 2027.', 'Депозит до 1 марта 2027.')),
        rd('RD', '2027-02-01', S, V, L('Decisions in mid to late March.', 'Решения в середине — конце марта.'), L('Enrollment deposit by 1 May 2027.', 'Депозит до 1 мая 2027.')),
        rnd(L('CSS Profile — same day as each admission round', 'CSS Profile — в тот же день, что и заявка каждого раунда'), 'aid', None, False,
            L('15 November for Early Decision I and Early Action, 15 January for Early Decision II, 1 February for all other applicants. HWS does not provide CSS Profile fee waivers.', '15 ноября для Early Decision I и Early Action, 15 января для Early Decision II, 1 февраля для остальных. Освобождений от платы за CSS Profile HWS не даёт.'), A, V,
            date=L('With the admission application', 'Вместе с заявкой на поступление'), applies=AIDAPP),
    ],
    fee=fee(0, L('There is no fee to apply.', 'Сбора за заявку нет.'), S, V),
    documents=docs(L('Common Application or Coalition Application', 'Common Application или Coalition Application'), 'essay', 'transcript', L('One teacher or counselor recommendation', 'Одна рекомендация учителя или консультанта'), 'english'),
    admNotes=[L('HWS does not require a WES or other third-party credential evaluation for admission.', 'Для поступления HWS не требует оценки документов WES или другой сторонней организации.')],
    english={'ielts': eng(None, 6.5, L('The most competitive applicants generally score at or above 6.5.', 'Самые конкурентные абитуриенты обычно набирают 6.5 и выше.')),
             'toefl': toefl(80, None, J(L('The most competitive applicants generally score at or above 80.', 'Самые конкурентные абитуриенты обычно набирают 80 и выше.'), OLDSCALE), kind='recommended'),
             'duolingo': eng(None, 120, L('The most competitive applicants generally score at or above 120.', 'Самые конкурентные абитуриенты обычно набирают 120 и выше.')),
             'waiver': L('Required if English is not the first language. A waiver can be requested in writing by a school counselor or official confirming the language of instruction.', 'Требуется, если английский не первый язык. Об освобождении может письменно попросить школьный консультант, подтвердив язык обучения.'),
             'note': L('An SAT Reading and Writing score of 600 is listed alongside the English tests.', 'Рядом с тестами по английскому указан балл SAT Reading and Writing 600.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('SAT and ACT scores are listed among the optional materials, and HWS says test scores are not required for any scholarship.', 'Баллы SAT и ACT указаны среди необязательных материалов, и HWS сообщает, что ни для одной стипендии тесты не нужны.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TF, 68414, B), (HF, 18668, B), (L('Miscellaneous', 'Прочие расходы'), 1350, E), (TRANS, 1800, E), (L('Federal loan fees', 'Комиссия по федеральному кредиту'), 70, E)],
                L('$87,082 in tuition, fees, housing and food', '$87,082 — обучение, сборы, жильё и питание'),
                L('HWS lists the parts of its cost of attendance without a total; together they come to $90,302', 'HWS перечисляет части стоимости обучения без итога; вместе они составляют $90,302'),
                INC_BILLED, tuition=68414, tuition_label='Tuition and fees', billed=87082,
                note=L('Books and health insurance are not among the listed parts.', 'Книг и медицинской страховки среди перечисленных частей нет.')),
    fullRide=no_full(L('Merit scholarships can be as much as $40,000 a year, below tuition and fees of $68,414; HWS expects students and families to contribute to the cost each year and does not state that it meets full need.', 'Стипендии за успехи достигают $40,000 в год — меньше платы и сборов $68,414; HWS ожидает ежегодного вклада студентов и семей и не заявляет, что покрывает всю потребность.')),
    merit=[award(L('HWS merit scholarships', 'Стипендии HWS за успехи'), upto(40000), L('International applicants, through the holistic admission review', 'Иностранные абитуриенты — по итогам комплексного рассмотрения заявки'),
                 L('Good for four years with satisfactory academic progress and a cumulative GPA of at least 2.0. Test scores are not required.', 'Действуют четыре года при удовлетворительной успеваемости и общем GPA не ниже 2.0. Тесты не требуются.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'deadlines': L('The same day as the admission application of each round.', 'В тот же день, что и заявка на поступление каждого раунда.'),
          'note': L('HWS describes itself as need-aware and expects students and their families to contribute each year. Aid is available for at most eight semesters.', 'HWS называет себя вузом, учитывающим потребность при приёме, и ожидает ежегодного вклада студентов и семей. Помощь даётся не более чем на восемь семестров.')},
    sources=src('HWS', ('intl', S), ('aidintl', A), (L('HWS — tuition, scholarships and aid', 'HWS — плата, стипендии и помощь'), T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid', 'merit'),
    unconfirmed=chk('needmet', 'insurance', 'founded', 'stats'),
))
nodesc.append('hobart-and-william-smith-colleges')
annual['hobart-and-william-smith-colleges'] = {'currency': 'USD', 'basis': 'billed', 'min': 87082, 'max': 87082}

# ----------------------------------------------------------- Howard University
S = 'https://admission.howard.edu/undergraduate/intl-first-year'
A = 'https://financialservices.howard.edu/financial-aid/international-student-aid'
T = 'https://financialservices.howard.edu/2026-2027-estimated-cost-attendance'
records.append(R(
    'howard-university', 'Howard University', 'Howard', 'Washington', L('District of Columbia', 'Округ Колумбия'), 'private', L('Private historically Black research university', 'Частный исторически афроамериканский исследовательский университет'),
    L('A private historically Black research university in Washington, D.C. SAT and ACT scores are not required in the 2026–27 admission cycle. Howard states that first-time international students may only be considered for its merit-based Freshman Scholarships.',
      'Частный исторически афроамериканский исследовательский университет в Вашингтоне, округ Колумбия. В цикле приёма 2026–27 баллы SAT и ACT не требуются. Howard сообщает, что иностранные студенты, впервые поступающие в вуз, могут рассматриваться только на стипендии за успехи Howard University Freshman Scholarships.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'medicine', 'education'],
    {'website': 'https://howard.edu/', 'admissions': 'https://admission.howard.edu/', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A,
     'programs': 'https://howard.edu/fields-of-study', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('EA', '2026-11-01', S, V, L('Decisions by email in late December; scholarships are awarded at the same time to admitted early applicants who meet the requirements.', 'Решения по электронной почте в конце декабря; тогда же назначаются стипендии принятым в ранних раундах, если они соответствуют требованиям.'), REPLY_MAY1, note=NOYEAR, applies=FYI),
        rd('ED', '2026-11-01', S, V, L('Decisions in late December.', 'Решения в конце декабря.'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-02-01', S, V, L('Decisions in early April.', 'Решения в начале апреля.'), REPLY_MAY1, note=NOYEAR, applies=FYI),
    ],
    admNotes=[L('Howard no longer offers spring entry for international first-year applicants. Early applications still incomplete after 1 November are moved to Regular Decision.', 'Howard больше не принимает иностранных абитуриентов на первый курс весной. Ранние заявки, не завершённые после 1 ноября, переносятся в Regular Decision.')],
    fee=fee(45, L('Non-refundable, paid through the Common Application. Howard’s Office of Admission does not issue fee waivers, but accepts the Common App fee waiver where the fee would cause unusual financial hardship.', 'Невозвратный, оплачивается через Common Application. Приёмная комиссия Howard сама освобождений не выдаёт, но принимает освобождение Common App, если сбор создаёт серьёзные финансовые трудности.'), S, V,
            waiver=L('Common App fee waiver with the counselor’s affirmation', 'Освобождение Common App с подтверждением консультанта'), waiver_intl=True),
    documents=docs(COMMON, L('School Report through the Common App', 'School Report через Common App'), 'transcript', L('TOEFL or IELTS score, unless waived', 'Балл TOEFL или IELTS, если нет освобождения')),
    english={'ielts': eng(6.5, None, L('An overall score of 6.5, in place of the TOEFL.', 'Общий балл 6.5 — вместо TOEFL.')),
             'toefl': toefl(90, None, J(L('A score of 90 on the internet-based test; only official reports from ETS.', 'Балл 90 по интернет-версии; только официальные отчёты ETS.'), OLDSCALE)),
             'waiver': L('Required when the native language is not English. Waived automatically for students from a nation where English is an official language or who have studied in the United States for at least four years.', 'Требуется, если английский не родной язык. Автоматически отменяется для студентов из стран, где английский — официальный язык, и для тех, кто учился в США не менее четырёх лет.'),
             'note': L('Only the TOEFL and IELTS are accepted at this time.', 'Сейчас принимаются только TOEFL и IELTS.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('For the 2026–27 admission cycle SAT and ACT scores are not required, and Howard says applicants without scores are not at a disadvantage. The policy does not extend to joint-degree programmes such as BS/MD, BS/DDS and BA/JD.', 'В цикле приёма 2026–27 баллы SAT и ACT не требуются, и Howard сообщает, что отсутствие баллов не ставит абитуриента в невыгодное положение. Это не относится к совместным программам, таким как BS/MD, BS/DDS и BA/JD.'),
             cycle=L('2026–27 admission cycle', 'Цикл приёма 2026–27'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates living on campus', 'Студенты бакалавриата, живущие в кампусе'),
                [(TUIT, 37996, B), (L('Mandatory fees', 'Обязательные сборы'), 1040, B), (HOUS, 13618, B), (FOOD, 7430, B), (BOOKS, 1220, E), (TRANS, 1154, E),
                 (L('Personal and miscellaneous expenses', 'Личные и прочие расходы'), 2468, E), (L('Federal Direct Loan fees (estimate)', 'Комиссия по федеральному кредиту (оценка)'), 76, E), (L('Direct Parent PLUS loan fees (estimate)', 'Комиссия по кредиту Parent PLUS (оценка)'), 1180, E)],
                h_coa(66182), tt_coa(66182, 60084), INC_COA, tuition=37996, billed=60084, budget=66182,
                note=L('Howard calls this an estimated cost of attendance; it counts loan fees of $1,256 that apply only to families who borrow through federal programmes. Health insurance is not a standard part of the figure.', 'Howard называет это оценкой стоимости обучения; в неё входят комиссии по кредитам $1,256, которые касаются только семей, берущих федеральные кредиты. Медицинская страховка в стандартный расчёт не входит.')),
    fullRide=no_full(L('Howard states that first-time international students may only be considered for merit-based Howard University Freshman Scholarships; the pages read give no amounts for them.', 'Howard сообщает, что иностранные студенты, впервые поступающие в вуз, могут рассматриваться только на стипендии за успехи Howard University Freshman Scholarships; их размеров на прочитанных страницах нет.')),
    merit=[award('Howard University Freshman Scholarships (HUFS)', None, L('First-time international students, where they meet the requirements', 'Иностранные студенты, впервые поступающие в вуз, — если соответствуют требованиям'), J(NOAMT, L('Awarding is subject to the availability of funds.', 'Назначение зависит от наличия средств.')), application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Since the 2023–24 year first-time international students are considered only for merit-based awards. The ISFAA on the same page is for students who already receive a need-based institutional award.', 'С 2023–24 года иностранные студенты, впервые поступающие в вуз, рассматриваются только на стипендии за успехи. Форма ISFAA на той же странице предназначена тем, кто уже получает помощь университета по потребности.')},
    sources=src('Howard', (L('Howard — international first-year applicants', 'Howard — иностранным абитуриентам на первый курс'), S), ('aidintl', A), ('coa 2026–2027', T), ('programs', 'https://howard.edu/fields-of-study')),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid'),
    unconfirmed=chk('awards', 'insurance', 'founded', 'stats', 'toeflnew'),
))
nodesc.append('howard-university')
annual['howard-university'] = {'currency': 'USD', 'basis': 'total', 'min': 66182, 'max': 66182}

# -------------------------------------------- Illinois Institute of Technology
D = 'https://www.iit.edu/admissions-aid/undergraduate-admission/application-dates-and-deadlines'
E = 'https://www.iit.edu/admissions-aid/undergraduate-admission/international-undergraduate-students/english-language-proficiency-requirements'
F = 'https://www.iit.edu/admissions-aid/undergraduate-admission/first-year-students'
T = 'https://www.iit.edu/admissions-aid/tuition-and-aid/undergraduate-costs-and-aid'
A = 'https://www.iit.edu/admissions-aid/tuition-and-aid/scholarships/international-undergraduate-student-scholarships'
records.append(R(
    'illinois-institute-of-technology', 'Illinois Institute of Technology', 'Illinois Tech', 'Chicago', L('Illinois', 'Иллинойс'), 'private', 'Private research university',
    L('A private technological university in Chicago, Illinois. Illinois Tech charges no application fee. International students are reviewed automatically for institutional scholarships of $40,000 to $100,000 over four years of study.',
      'Частный технологический университет в Чикаго, штат Иллинойс. Сбора за заявку нет. Иностранные студенты автоматически рассматриваются на стипендии университета от $40,000 до $100,000 за четыре года обучения.'),
    ['engineering', 'computer-science', 'business', 'economics', 'psychology', 'biology', 'mathematics', 'arts', 'law'],
    {'website': 'https://www.iit.edu/', 'admissions': F, 'international': 'https://www.iit.edu/admissions-aid/undergraduate-admission/international-undergraduate-students', 'portal': 'https://www.commonapp.org/',
     'scholarships': A, 'aid': T, 'programs': 'https://www.iit.edu/academics/programs', 'cost': T},
    verified=V, platforms=[COMMON], aliases=['Illinois Tech', 'IIT'],
    rounds=[
        rd('ED', '2026-11-01', D, V, L('Decisions in December; deposit due 15 March; I-20 request by 15 June.', 'Решения в декабре; депозит до 15 марта; запрос I-20 до 15 июня.'), note=NOYEAR, applies=L('US and international applicants', 'Американские и иностранные абитуриенты')),
        rd('EA', '2026-11-15', D, V, L('Decisions in January; deposit due 1 May; I-20 request by 15 June.', 'Решения в январе; депозит до 1 мая; запрос I-20 до 15 июня.'), note=NOYEAR, applies=L('US and international applicants', 'Американские и иностранные абитуриенты')),
        rd('RD', '2027-02-01', D, V, L('Decisions by 15 March; deposit due 1 May. For international students already living in the United States the deadline is 1 June.', 'Решения до 15 марта; депозит до 1 мая. Для иностранных студентов, уже живущих в США, срок — 1 июня.'), note=NOYEAR, applies=L('US and international applicants', 'Американские и иностранные абитуриенты')),
        rnd(L('M. A. and Lila Self Leadership Academy Scholars — application', 'M. A. and Lila Self Leadership Academy Scholars — заявка'), 'scholarship', '2026-11-15', False,
            L('Only for those who apply under Early Decision or Early Action; the link to the scholarship application is sent in early November.', 'Только для подавших в Early Decision или Early Action; ссылку на заявку рассылают в начале ноября.'), A, V, note=NOYEAR),
    ],
    fee=fee(0, L('Illinois Tech does not charge an application fee for undergraduate admission.', 'Illinois Tech не берёт сбор за заявку на бакалавриат.'), F, V),
    documents=docs(COMMON, L('Official high school or secondary school transcript, sent by the school', 'Официальная школьная выписка — отправляет школа'), 'english', L('Financial Affidavit of Support', 'Financial Affidavit of Support (финансовое поручительство)')),
    english={'ielts': eng(6.5, None, L('6.5 or above.', '6.5 и выше.')),
             'toefl': toefl(80, None, J(L('80 or above; the Home Edition is accepted.', '80 и выше; принимается Home Edition.'), OLDSCALE)),
             'duolingo': eng(115, None, L('115 or above.', '115 и выше.')),
             'waiver': L('Applicants who meet the academic and financial requirements but not the English minimum may be offered conditional admission.', 'Тем, кто соответствует академическим и финансовым требованиям, но не набирает минимум по английскому, могут предложить условное зачисление.'),
             'note': None, 'detailsSource': E, 'detailsVerified': V},
    sat=test('optional', L('Test scores are for students who want to submit them; Illinois Tech explains how it decides without a score and superscores any scores sent.', 'Баллы отправляют те, кто этого хочет; Illinois Tech объясняет, как принимает решение без балла, и учитывает лучшие результаты по разделам.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('New undergraduate students', 'Новые студенты бакалавриата'),
                [(TUIT, 53198, B), (FEES, 1850, B), (HF, 18548, B)],
                h_billed(73596), L('$53,198 tuition, $1,850 fees and $18,548 housing and food, as printed; $73,596 is the three added together', '$53,198 — обучение, $1,850 — сборы и $18,548 — жильё и питание, как напечатано; $73,596 — их сумма'),
                INC_BILLED, tuition=53198, billed=73596,
                note=L('The page prints the three figures without a total and refers to the financial aid site for a detailed estimate of the cost of attendance.', 'Страница приводит три суммы без итога и отсылает к сайту финансовой помощи за подробной оценкой стоимости обучения.')),
    fullRide=no_full(L('The page for international students gives institutional scholarships of $40,000 to $100,000 over four years — up to $25,000 a year against tuition of $53,198. Illinois Tech’s general costs page mentions awards up to full tuition without saying that they are open to international students.',
                       'На странице для иностранных студентов указаны стипендии университета от $40,000 до $100,000 за четыре года — до $25,000 в год при плате за обучение $53,198. На общей странице стоимости упоминаются награды вплоть до полной платы за обучение, но не сказано, что они открыты иностранным студентам.')),
    merit=[award(L('Illinois Tech institutional scholarships for international students', 'Стипендии Illinois Tech для иностранных студентов'), L('$40,000 to $100,000 over four years', 'От $40,000 до $100,000 за четыре года'), L('International first-year and transfer students', 'Иностранные первокурсники и переводящиеся студенты'),
                 L('Every application is reviewed automatically on academic success, community involvement and other achievements.', 'Каждая заявка рассматривается автоматически — по успеваемости, общественной работе и другим достижениям.'), application=AUTO),
           award('World Robot Olympiad Scholarship', L('$25,000 a year', '$25,000 в год'), L('World Robot Olympiad scholars', 'Участники World Robot Olympiad'), L('For up to four years of undergraduate study (five for architecture).', 'До четырёх лет бакалавриата (пять — для архитектуры).'))],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Illinois Tech says international students are expected to finance their education for the whole period of study and must submit a Financial Affidavit of Support.', 'Illinois Tech сообщает, что иностранные студенты должны сами финансировать весь срок обучения и подать Financial Affidavit of Support.')},
    sources=src('Illinois Tech', ('dates', D), ('english', E), ('fy', F), (L('Illinois Tech — undergraduate costs and aid 2026–2027', 'Illinois Tech — стоимость и помощь в бакалавриате 2026–2027'), T), ('meritintl', A)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk('insurance', 'founded', 'stats', 'toeflnew', L('books, travel and personal costs', 'книги, дорога и личные расходы')),
))
nodesc.append('illinois-institute-of-technology')
annual['illinois-institute-of-technology'] = {'currency': 'USD', 'basis': 'billed', 'min': 73596, 'max': 73596}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
