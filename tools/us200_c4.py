# -*- coding: utf-8 -*-
"""United States expansion — institutions whose sites refuse automated reading.
Their pages were opened in an ordinary browser window on 12 October 2026 and
read there; no anti-bot check was passed or bypassed. A site that showed such a
check (Wheaton College, Massachusetts) was left unread and has no record."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
NY, MA, CA = 'New York', 'Massachusetts', 'California'
ACCEPTED = L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')
NOINTL = L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')
MAJORS = L('list of majors', 'список программ')
NOFIELDS = L('The list of majors could not be read on this check, so no fields are listed.', 'Список программ при этой проверке прочитать не удалось, поэтому направления не указаны.')
MINENG = L('minimum English test scores', 'минимальные баллы тестов по английскому')

# ---------------------------------------------------------- Gonzaga University
S = 'https://www.gonzaga.edu/admission/international-admission/international-student-applications/international-first-year-application-checklist'
D = 'https://www.gonzaga.edu/undergraduate-admission/apply/dates-deadlines'
T = 'https://www.gonzaga.edu/admission/tuition-scholarships-aid/financial-aid/cost-of-attendance'
SC = 'https://www.gonzaga.edu/undergraduate-admission/tuition-aid/scholarship-opportunities'
records.append(R(
    'gonzaga-university', 'Gonzaga University', 'Gonzaga', L('Spokane', 'Спокан'), L('Washington', 'Вашингтон'), 'private', 'Private university',
    L('A private Jesuit university in Spokane, Washington. The application fee is waived for all international applicants and SAT or ACT scores are not required. Every applicant is considered automatically for first-year merit scholarships of $23,500 to $32,000 a year, guaranteed for four years.',
      'Частный иезуитский университет в Спокане, штат Вашингтон. Иностранным абитуриентам сбор за заявку не начисляется, баллы SAT или ACT не требуются. Каждый абитуриент автоматически рассматривается на стипендии за успехи для первокурсников — от $23,500 до $32,000 в год с гарантией на четыре года.'),
    ['other'],
    {'website': 'https://www.gonzaga.edu/', 'admissions': 'https://www.gonzaga.edu/undergraduate-admission', 'international': S, 'portal': 'https://www.commonapp.org/', 'scholarships': SC,
     'aid': 'https://www.gonzaga.edu/admission/tuition-scholarships-aid/financial-aid', 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=NOFIELDS,
    rounds=[
        rd('EA', '2026-11-15', D, V, L('Decisions in late December. Nursing applicants must apply in this round.', 'Решения в конце декабря. На направление Nursing можно подать только в этом раунде.'), L('Confirmation by 1 May.', 'Подтверждение до 1 мая.'), note=NOYEAR),
        rd('RD', '2027-02-01', D, V, L('Decisions in early March.', 'Решения в начале марта.'), L('Confirmation by 1 May.', 'Подтверждение до 1 мая.'), note=NOYEAR),
    ],
    fee=fee(0, L('All international applicants are eligible to have the application fee waived: select the International Student Fee Waiver in the Common Application.', 'Всем иностранным абитуриентам сбор за заявку может быть отменён: выберите International Student Fee Waiver в Common Application.'), S, V,
            waiver=L('International Student Fee Waiver in the Common Application', 'International Student Fee Waiver в Common Application'), waiver_intl=True),
    documents=docs(COMMON, 'transcript', L('English proficiency score dated within two years', 'Балл теста по английскому не старше двух лет')),
    english={'ielts': eng(6.5, None, L('IELTS Academic, 6.5 or higher.', 'IELTS Academic, 6.5 и выше.')),
             'toefl': toefl(80, 4, L('80 or higher for tests before 21 January 2026; 4 (B2) for tests after it. The page adds that requirements for the new scale “will be published soon”.', '80 и выше для тестов до 21 января 2026; 4 (B2) — после. На странице добавлено, что требования по новой шкале «скоро будут опубликованы».')),
             'duolingo': eng(120, None, L('120 or higher.', '120 и выше.')),
             'waiver': L('Scores must be dated within two years of the application; some applicants are not required to submit them.', 'Баллы должны быть не старше двух лет на момент подачи; часть абитуриентов от них освобождается.'),
             'note': L('Also accepted: PTE 56, iTEP Academic Plus 4.5, an ACT English and Reading score of 23, or SAT Evidence-Based Reading and Writing 550.', 'Также принимаются PTE 56, iTEP Academic Plus 4.5, ACT English and Reading 23 или SAT Evidence-Based Reading and Writing 550.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Gonzaga does not require an SAT or ACT score and says a score is not needed to be considered for merit scholarships.', 'Gonzaga не требует балл SAT или ACT и сообщает, что для стипендий за успехи он тоже не нужен.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 58390, B), (REQFEES, 1120, B), (HOUS, 8940, B), (FOOD, 8220, B)],
                h_billed(76670), L('$76,670 total direct costs for 2026–2027, as printed; the indirect costs were not read', '$76,670 — прямые расходы на 2026–2027, как напечатано; косвенные расходы не прочитаны'), INC_BILLED, tuition=58390, billed=76670),
    fullRide=no_full(L('First-year merit scholarships range from $23,500 to $32,000 a year, against tuition of $58,390. The pages read say nothing about need-based aid for international students.', 'Стипендии за успехи для первокурсников — от $23,500 до $32,000 в год при плате за обучение $58,390. О помощи по потребности иностранным студентам на прочитанных страницах ничего нет.')),
    merit=[award(L('Gonzaga first-year merit scholarships', 'Стипендии Gonzaga за успехи для первокурсников'), rng(23500, 32000), L('All students who complete the application for admission', 'Все, кто подал заявку на поступление'),
                 L('Guaranteed for four years while the student is enrolled full-time in good academic standing.', 'Гарантируются на четыре года при полной нагрузке и хорошей успеваемости.'), application=AUTO, renewable=True)],
    need={'note': NOINTL},
    sources=src('Gonzaga', (L('Gonzaga — international first-year application checklist', 'Gonzaga — список документов для иностранных абитуриентов первого курса'), S), ('dates', D), ('coa 2026–2027', T), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk('aid', L('books, travel and personal costs', 'книги, дорога и личные расходы'), 'founded', 'stats', MAJORS),
))
nodesc.append('gonzaga-university')
annual['gonzaga-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 76670, 'max': 76670}

# ------------------------------------------------------------- Cornell College
S = 'https://www.cornellcollege.edu/admissions/international-students/index.shtml'
T = 'https://www.cornellcollege.edu/financial-assistance/cost-of-attendance.shtml'
records.append(R(
    'cornell-college', 'Cornell College', 'Cornell College', L('Mount Vernon', 'Маунт-Вернон'), L('Iowa', 'Айова'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Mount Vernon, Iowa, where students take One Course At A Time in blocks of three and a half weeks. It is a different institution from Cornell University. International students automatically qualify for academic merit scholarships and must show financial ability for the rest of their costs.',
      'Частный колледж свободных искусств в Маунт-Верноне, штат Айова, где учатся по системе One Course At A Time — один курс за блок в три с половиной недели. Это не Cornell University. Иностранные студенты автоматически получают право на академические стипендии за успехи и должны подтвердить средства на остальные расходы.'),
    ['other'],
    {'website': 'https://www.cornellcollege.edu/', 'admissions': 'https://www.cornellcollege.edu/admissions/index.shtml', 'international': S, 'aid': 'https://www.cornellcollege.edu/financial-assistance/index.shtml',
     'scholarships': 'https://www.cornellcollege.edu/financial-assistance/scholarships-awards/index.shtml', 'cost': T},
    verified=V, aliases=['Cornell College Iowa'],
    programNote=NOFIELDS,
    rounds=[
        rnd(L('Applications open', 'Открытие подачи'), 'opens', '2026-08-01', False, L('The first day to apply for the following autumn term.', 'Первый день подачи на следующий осенний семестр.'), S, V, note=NOYEAR, applies=INTL),
        rd('PRI', '2026-12-01', S, V, L('College decision day, with the deposit, is 1 May; financial documentation must be complete by 1 July to secure a visa.', 'Срок ответа с депозитом — 1 мая; финансовые документы должны быть готовы к 1 июля, чтобы успеть получить визу.'), note=NOYEAR, applies=INTL),
    ],
    documents=docs('app', L('Secondary school transcript translated into English', 'Школьная выписка с переводом на английский'), L('Proof of English proficiency: test results, a statement from the school, or an interview with the admission counselor', 'Подтверждение владения английским: результаты теста, справка школы или собеседование с консультантом'), L('Proof of financial ability', 'Подтверждение финансовых возможностей')),
    interview=L('A digital or phone interview with the admission counselor is one of the ways to show English proficiency.', 'Онлайн- или телефонное собеседование с консультантом — один из способов подтвердить английский.'),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED), 'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('A formal English proficiency test is not required, but proof of proficiency is needed before admission: test results, documentation from the current school, or an interview.', 'Формальный тест по английскому не обязателен, но до зачисления нужно подтвердить владение языком: результатами теста, справкой нынешней школы или собеседованием.'),
             'note': L('Accepted test results: ACT, SAT, Duolingo, IELTS, TOEFL, EIKEN or iTEP.', 'Принимаемые тесты: ACT, SAT, Duolingo, IELTS, TOEFL, EIKEN или iTEP.'), 'detailsSource': S, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Students in a standard double room', 'Студенты в стандартной двухместной комнате'),
                [(TUIT, 55950, B), (L('Housing (standard double room)', 'Жильё (стандартная двухместная комната)'), 5724, B), (FOOD, 6762, B), (L('Student activity and general fees', 'Сборы на мероприятия и общие сборы'), 784, B),
                 (L('Books', 'Книги'), 720, E), (L('Personal', 'Личные расходы'), 2000, E), (L('Transportation ($1,200 in-state, an estimated $2,400 out of state)', 'Транспорт ($1,200 в пределах штата, оценка $2,400 из-за его пределов)'), {'min': 1200, 'max': 2400, 'text': '$1,200–$2,400'}, E),
                 (L('Additional food costs', 'Дополнительные расходы на питание'), 368, E), (L('Estimated loan origination fees', 'Комиссия по кредиту (оценка)'), 70, E)],
                h_coa(73578, 74778), tt_coa(73578, 69220, 74778), INC_COA, tuition=55950, billed=69220, budget=73578, budget_max=74778, budget_text='$73,578–$74,778',
                extras=[{'label': L('Health insurance policy provided by Cornell College', 'Медицинский полис, оформляемый Cornell College'), 'amount': None, 'required': True,
                         'condition': L('Required of all international students; the international page says it is included in their cost of attendance, and the cost table read does not list it.', 'Обязателен для всех иностранных студентов; на странице для них сказано, что он входит в стоимость обучения, но в прочитанной таблице стоимости его нет.'), 'year': None}]),
    fullRide=no_full(L('International students automatically qualify for academic merit scholarships, shared on admission; the pages read give no amounts.', 'Иностранные студенты автоматически получают право на академические стипендии за успехи — о них сообщают при зачислении; сумм на прочитанных страницах нет.')),
    merit=[award(L('Cornell College academic merit scholarships', 'Академические стипендии Cornell College'), None, L('International students, automatically', 'Иностранные студенты — автоматически'), NOAMT, application=AUTO)],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('For the remainder of tuition and attendance costs beyond the merit scholarship, the college requires proof of financial ability.', 'На остаток платы и расходов сверх стипендии за успехи колледж требует подтвердить финансовые возможности.')},
    sources=src('Cornell College', ('intl', S), ('coa 2026–2027', T)),
    checked=chk('rounds', 'costs', L('ways of showing English proficiency', 'способы подтверждения английского')),
    unconfirmed=chk('fee', 'tests', 'awards', L('cost of the required health insurance', 'стоимость обязательной медицинской страховки'), 'founded', 'stats', MAJORS),
))
nodesc.append('cornell-college')
annual['cornell-college'] = {'currency': 'USD', 'basis': 'total', 'min': 73578, 'max': 74778}

# -------------------------------------------------------------- The New School
I = 'https://www.newschool.edu/admission/prospective-undergraduate-students/international-students'
D = 'https://www.newschool.edu/admission/prospective-undergraduate-students/dates-deadlines'
EA = 'https://www.newschool.edu/admission/prospective-undergraduate-students/early-application-options'
H = 'https://www.newschool.edu/admission/prospective-undergraduate-students/apply-undergraduate'
records.append(R(
    'the-new-school', 'The New School', 'The New School', 'New York', NY, 'private', 'Private university',
    L('A private university in New York City that includes Parsons School of Design, Eugene Lang College of Liberal Arts, Mannes School of Music and the School of Drama — one record covers them all. Scholarships open to international students are merit-based; The New School says most international students are not eligible for need-based aid.',
      'Частный университет в Нью-Йорке, в который входят Parsons School of Design, Eugene Lang College of Liberal Arts, Mannes School of Music и School of Drama, — одна запись охватывает их все. Стипендии, доступные иностранным студентам, назначаются за успехи; по словам The New School, большинство иностранных студентов не имеют права на помощь по потребности.'),
    ['arts', 'humanities', 'social-sciences'],
    {'website': 'https://www.newschool.edu/', 'admissions': 'https://www.newschool.edu/admission/prospective-undergraduate-students', 'international': I, 'portal': 'https://www.commonapp.org/', 'aid': 'https://www.newschool.edu/financial-aid'},
    verified=V, aliases=['Eugene Lang College of Liberal Arts', 'Eugene Lang College', 'Eugene Lang', 'Parsons School of Design', 'Parsons', 'Mannes School of Music', 'New School'],
    programNote=L('The fields listed follow the schools named on the deadlines page: design and the arts (Parsons, Mannes, the School of Drama) and the liberal arts (Eugene Lang College).', 'Направления указаны по школам, названным на странице сроков: дизайн и искусства (Parsons, Mannes, School of Drama) и свободные искусства (Eugene Lang College).'),
    rounds=[
        rnd(L('Early Action or Early Decision — Parsons and Eugene Lang College', 'Early Action или Early Decision — Parsons и Eugene Lang College'), 'EA', '2026-11-01', None, L('Early Decision is binding, with confirmation by 15 January; Early Action is not binding.', 'Early Decision — обязывающий, подтверждение до 15 января; Early Action не обязывает.'), D, V, note=NOYEAR),
        rd('RD', '2027-01-15', D, V, L('Parsons School of Design and Eugene Lang College of Liberal Arts. Mannes School of Music has its own autumn deadline, 1 December.', 'Parsons School of Design и Eugene Lang College of Liberal Arts. У Mannes School of Music свой осенний срок — 1 декабря.'), note=NOYEAR),
    ],
    fee=fee(None, L('The amount was not read. The fee is waived for applicants who meet a Common Application eligibility requirement and can be waived on request for economic hardship.', 'Сумма не прочитана. Сбор не берётся с тех, кто подходит под условия Common Application, и может быть отменён по запросу при тяжёлом финансовом положении.'), H, V,
            waiver=L('Common Application eligibility, or on request for economic hardship', 'По условиям Common Application либо по запросу при тяжёлом финансовом положении')),
    documents=docs('app', 'transcript', L('Proof of English proficiency, if the native language is not English or the transcripts are not in English', 'Подтверждение английского — если английский не родной или выписки не на английском'), 'portfolio'),
    english={'waiver': L('Required of applicants whose native language is not English or whose transcripts are not in English; the scores are on the How to Apply page, which was not read.', 'Требуется от тех, для кого английский не родной или чьи выписки не на английском; баллы указаны на странице How to Apply, она не прочитана.'),
             'note': L('New students whose native language is not English also take an English placement test before registering for classes.', 'Новые студенты, для которых английский не родной, перед записью на курсы дополнительно проходят тест распределения по английскому.'), 'detailsSource': I, 'detailsVerified': V},
    fullRide=no_full(L('The New School says the scholarships open to international students are merit-based and that most international students are not eligible for need-based financial aid; the pages read give no amounts.', 'The New School сообщает, что стипендии, доступные иностранным студентам, назначаются за успехи и что большинство иностранных студентов не имеют права на помощь по потребности; сумм на прочитанных страницах нет.')),
    merit=[award(L('The New School merit scholarships', 'Стипендии The New School за успехи'), None, L('International applicants; financial need is not taken into consideration', 'Иностранные абитуриенты; финансовая потребность не учитывается'), NOAMT)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Need-based financial aid is offered to US citizens and eligible non-citizens; most international students are not eligible for it.', 'Помощь по потребности даётся гражданам США и приравненным к ним лицам; большинство иностранных студентов права на неё не имеют.')},
    sources=src('The New School', ('intl', I), ('dates', D), (L('The New School — early application options', 'The New School — варианты ранней подачи'), EA), ('apply', H)),
    checked=chk('rounds', 'aid'),
    unconfirmed=chk('fee', MINENG, 'tests', L('tuition and fees', 'плата и сборы'), 'awards', 'founded', 'stats'),
))
nodesc.append('the-new-school')

# ---------------------------------------- Savannah College of Art and Design
H = 'https://www.scad.edu/admission/apply'
T = 'https://www.scad.edu/admission/financial-aid-and-scholarships/financial-aid/cost-attendance'
records.append(R(
    'savannah-college-of-art-and-design', 'Savannah College of Art and Design', 'SCAD', L('Savannah', 'Саванна'), L('Georgia', 'Джорджия'), 'private', L('Private art and design university', 'Частный университет искусства и дизайна'),
    L('A private art and design university based in Savannah, Georgia, with a second location in Atlanta — one record covers both. Applications are accepted at any time of year, with a decision in two to four weeks. The pages read give no scholarship terms for international students.',
      'Частный университет искусства и дизайна в Саванне, штат Джорджия, со вторым кампусом в Атланте — одна запись на оба. Заявки принимаются круглый год, решение — через две–четыре недели. Условий стипендий для иностранных студентов на прочитанных страницах нет.'),
    ['arts'],
    {'website': 'https://www.scad.edu/', 'admissions': H, 'portal': H, 'aid': 'https://www.scad.edu/admission/financial-aid-and-scholarships', 'scholarships': 'https://www.scad.edu/admission/financial-aid-and-scholarships/scholarships', 'cost': T},
    verified=V, platforms=[OWNAPP('SCAD')], aliases=['SCAD', 'SCAD Savannah', 'SCAD Atlanta'],
    rounds=[rd('ROLL', None, H, V, L('There are no deadlines to apply. SCAD encourages applying at least six months in advance and no later than 30 days before the start of the first quarter; results normally take two to four weeks.', 'Сроков подачи нет. SCAD советует подавать не менее чем за шесть месяцев и не позже чем за 30 дней до начала первого квартала; решение обычно готово через две–четыре недели.'),
               date=L('Any time of year', 'В любое время года'))],
    fee=fee(100, L('Non-refundable.', 'Невозвратный.'), H, V),
    documents=docs(OWNAPP('SCAD'), 'transcript'),
    costs=costs('2026–2027', T, V, L('Undergraduates in SCAD housing, three quarters (45 credit hours)', 'Студенты бакалавриата в жилье SCAD, три квартала (45 кредитов)'),
                [(TUIT, 42975, B), (L('Food and housing (estimate)', 'Питание и жильё (оценка)'), 19407, B), (TRANS, 1614, E), (L('Books, course materials, equipment and supplies', 'Книги, учебные материалы, оборудование'), 2034, E),
                 (L('Miscellaneous personal expenses', 'Прочие личные расходы'), 2595, E), (L('Federal loan fees', 'Комиссия по федеральному кредиту'), 66, E)],
                h_coa(68691), tt_coa(68691, 62382), INC_COA, tuition=42975, billed=62382, budget=68691,
                note=L('Use of SCAD buses is included in tuition. The food and housing figure is an estimate for SCAD housing and a meal plan.', 'Пользование автобусами SCAD входит в плату за обучение. Питание и жильё — оценка для жилья SCAD и плана питания.')),
    fullRide=no_full(L('The pages read describe scholarships and grants in general terms and say nothing about amounts or eligibility for international students.', 'На прочитанных страницах стипендии и гранты описаны в общих чертах; о суммах и праве иностранных студентов ничего нет.')),
    need={'note': NOINTL},
    sources=src('SCAD', ('apply', H), ('coa 2026–27', T)),
    checked=chk('rounds', 'fee', 'costs'),
    unconfirmed=chk('english', 'tests', 'aid', 'merit', 'founded', 'stats'),
))
nodesc.append('savannah-college-of-art-and-design')
annual['savannah-college-of-art-and-design'] = {'currency': 'USD', 'basis': 'total', 'min': 68691, 'max': 68691}

# --------------------------------------------------------- American University
S = 'https://www.american.edu/admissions/international/instructions.cfm'
D = 'https://www.american.edu/admissions/first-year/decision-plans-and-deadlines.cfm'
I = 'https://www.american.edu/admissions/international/'
A = 'https://www.american.edu/financialaid/prospective-international.cfm'
records.append(R(
    'american-university', 'American University', 'American', 'Washington', L('District of Columbia', 'Округ Колумбия'), 'private', 'Private research university',
    L('A private research university in Washington, D.C. Every international applicant must declare funds of at least $87,374, even when hoping for a partial merit scholarship. American University says its merit scholarships for international students are partial, not full, and highly competitive; its aid page also mentions need-based aid for international students.',
      'Частный исследовательский университет в Вашингтоне, округ Колумбия. Каждый иностранный абитуриент обязан подтвердить средства не менее $87,374, даже если рассчитывает на частичную стипендию за успехи. American University сообщает, что стипендии за успехи для иностранных студентов — частичные, не полные, и очень конкурсные; на странице помощи упомянута и помощь по потребности.'),
    ['other'],
    {'website': 'https://www.american.edu/', 'admissions': 'https://www.american.edu/admissions/first-year/index.cfm', 'international': I, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A,
     'cost': 'https://www.american.edu/finance/studentaccounts/Tuition-and-Fees-Information.cfm'},
    verified=V, platforms=[COMMON], aliases=['AU', 'American University Washington'],
    programNote=NOFIELDS,
    rounds=[rd('EA', '2026-11-01', D, V, L('Notification in mid-January; deposit by 1 May.', 'Решение в середине января; депозит до 1 мая.'), note=NOYEAR)],
    admNotes=[L('Early Decision I, Early Decision II and Regular Decision are listed on the same page; their dates were not read on this check.', 'Early Decision I, Early Decision II и Regular Decision перечислены на той же странице; их даты при этой проверке не прочитаны.')],
    fee=fee(75, L('A waiver is considered case by case; all other applicants pay the fee.', 'Освобождение рассматривается индивидуально; остальные абитуриенты платят сбор.'), S, V, waiver=L('Case by case', 'Индивидуально')),
    documents=docs(COMMON, L('Secondary school records sent by the school', 'Школьные документы — отправляет школа'), L('Official English proficiency scores, unless exempt', 'Официальные баллы теста по английскому — если нет освобождения'),
                   L('AU Declaration of Finances Form confirming at least $87,374, signed within the past three months', 'AU Declaration of Finances Form с подтверждением не менее $87,374, подписанная не ранее трёх месяцев назад')),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(85, 4.5, L('85 on the earlier scale or 4.5 on the new one.', '85 по прежней шкале либо 4.5 по новой.')),
             'duolingo': eng(120, None, atleast(120)),
             'waiver': L('Applicants from a listed group of English-speaking countries are exempt. Only official scores are accepted, and meeting the minimum does not guarantee admission.', 'Абитуриенты из перечисленных англоязычных стран освобождаются. Принимаются только официальные баллы; минимальный балл не гарантирует приёма.'),
             'note': L('Also accepted: Cambridge English 176, PTE 60, LanguageCERT Academic 70, or SAT Evidence-Based Reading and Writing 610.', 'Также принимаются Cambridge English 176, PTE 60, LanguageCERT Academic 70 или SAT Evidence-Based Reading and Writing 610.'), 'detailsSource': S, 'detailsVerified': V},
    costs=costs(None, S, V, L('International first-year applicants — the amount to be declared', 'Иностранные абитуриенты первого курса — сумма для подтверждения'),
                [(L('Minimum funds to confirm on the AU Declaration of Finances Form', 'Минимум средств для подтверждения в AU Declaration of Finances Form'), 87374, E)],
                L('$87,374 minimum to be declared', '$87,374 — минимум для подтверждения'),
                L('$87,374 is the minimum a first-year international applicant must confirm; the tuition and fee table itself was not read', '$87,374 — минимум, который обязан подтвердить иностранный абитуриент первого курса; сама таблица платы и сборов не прочитана'),
                L('the full amount the university asks international applicants to show; its breakdown was not read', 'всю сумму, которую университет просит подтвердить иностранных абитуриентов; её состав не прочитан'),
                budget=87374,
                note=L('The page does not say which academic year the figure refers to.', 'На странице не сказано, к какому учебному году относится сумма.')),
    fullRide=no_full(L('American University states that merit scholarships for international students are partial, not full, awards that are highly competitive. Its Emerging Global Leader Scholarship is mentioned on the instructions page; its terms were not read.', 'American University сообщает, что стипендии за успехи для иностранных студентов — частичные, не полные, и очень конкурсные. На странице инструкций упомянута AU Emerging Global Leader Scholarship; её условия не прочитаны.')),
    merit=[award(L('American University merit scholarships for international students', 'Стипендии American University за успехи для иностранных студентов'), L('Partial awards; the pages read give no amounts', 'Частичные награды; сумм на прочитанных страницах нет'), L('International applicants; highly competitive', 'Иностранные абитуриенты; очень конкурсно'), None)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('AU Declaration of Finances Form', 'AU Declaration of Finances Form (финансовая декларация)')],
          'note': L('The financial aid page says the university provides need-based aid, need-based grants and merit scholarships to international students, with notification at admission. The instructions page says AU does not accept the CSS Profile, FAFSA or ISFAA from international students and asks every applicant to declare at least $87,374.',
                    'На странице финансовой помощи сказано, что университет даёт иностранным студентам помощь и гранты по потребности и стипендии за успехи, сообщая о них при приёме. На странице инструкций — что CSS Profile, FAFSA и ISFAA от иностранных студентов не принимаются и что каждый абитуриент обязан подтвердить не менее $87,374.')},
    sources=src('American', (L('American — instructions for first-year international applicants', 'American — инструкции для иностранных абитуриентов первого курса'), S), ('dates', D), ('intl', I), ('aidintl', A)),
    checked=chk('fee', 'english', L('Early Action date', 'срок Early Action'), L('amount to be declared', 'сумма для подтверждения'), 'aid'),
    unconfirmed=chk(L('Early Decision and Regular Decision dates', 'сроки Early Decision и Regular Decision'), 'tests', L('tuition and fees', 'плата и сборы'), 'awards', 'needmet', 'founded', 'stats', MAJORS),
))
nodesc.append('american-university')
annual['american-university'] = {'currency': 'USD', 'basis': 'total', 'min': 87374, 'max': 87374, 'note': L('The minimum an international applicant must declare; the page does not name the academic year', 'Минимум, который обязан подтвердить иностранный абитуриент; учебный год на странице не назван')}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
