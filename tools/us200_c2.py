# -*- coding: utf-8 -*-
"""United States expansion, batch C, part 2. Every fact below was read on the
official page named next to it on 12 October 2026."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
NY, MA, CA = 'New York', 'Massachusetts', 'California'
PA = L('Pennsylvania', 'Пенсильвания')
ACCEPTED = L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')
NOINTL = L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')
MAJORS = L('list of majors', 'список программ')
NOFIELDS = L('The list of majors could not be read on this check, so no fields are listed.', 'Список программ при этой проверке прочитать не удалось, поэтому направления не указаны.')
COMPLETE = L('A completion deadline: all required materials must be received by this date.', 'Срок завершения заявки: к этой дате должны быть получены все обязательные материалы.')

# ------------------------------------------------------ St. Lawrence University
S = 'https://www.stlawu.edu/applying-st-lawrence/international-students'
A = 'https://www.stlawu.edu/admissions/financial-aid-scholarships/financial-aid/financial-aid-international-students'
T = 'https://www.stlawu.edu/admissions/tuition-and-fees'
records.append(R(
    'st-lawrence-university', 'St. Lawrence University', 'St. Lawrence', L('Canton', 'Кантон'), NY, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts university in Canton, New York. It offers international students merit and need-based aid and calls both very competitive; its merit awards for them, the International Scholarships, range from $5,000 to full tuition. The CSS Profile and ISFAA are not required.',
      'Частный университет свободных искусств в Кантоне, штат Нью-Йорк. Иностранным студентам доступны стипендии за успехи и помощь по потребности — и то и другое, по словам университета, очень конкурсно; стипендии за успехи для них (International Scholarships) — от $5,000 до полной платы за обучение. CSS Profile и ISFAA не требуются.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.stlawu.edu/', 'admissions': S, 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A, 'programs': 'https://www.stlawu.edu/majors-and-minors', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('St. Lawrence')],
    rounds=[
        rd('ED1', '2026-11-02', S, V, note=NOYEAR, applies=INTL), rd('EA', '2026-12-01', S, V, note=NOYEAR, applies=INTL),
        rd('ED2', '2027-02-01', S, V, L('Also the deadline to be considered for the Kenya Scholarship.', 'Это также срок для рассмотрения на Kenya Scholarship.'), note=NOYEAR, applies=INTL),
        rd('RD', '2027-03-01', S, V, note=NOYEAR, applies=INTL),
    ],
    documents=docs(L('St. Lawrence Application or Common Application', 'Заявка St. Lawrence или Common Application'), L('Official copy of the high school transcript', 'Официальная копия школьной выписки'),
                   L('TOEFL or IELTS, if the native language is not English and the school is not English-speaking', 'TOEFL или IELTS — если английский не родной и школа не англоязычная'),
                   L('Counselor recommendation letter', 'Рекомендательное письмо школьного консультанта'), L('Certificate of Finance form, with the application if applying for aid', 'Форма Certificate of Finance — вместе с заявкой, если запрашиваете помощь')),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED),
             'waiver': L('TOEFL or IELTS scores are required as proof of English proficiency unless the applicant attends an English-speaking school.', 'Баллы TOEFL или IELTS обязательны как подтверждение английского, если абитуриент не учится в англоязычной школе.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 69460, B), (L('Room & board', 'Жильё и питание'), 18030, B), (L('Student activities fee', 'Сбор на студенческие мероприятия'), 465, B), (L('Class dues', 'Взнос класса'), 10, B)],
                h_billed(87965), L('$87,965 total for the 2026–27 academic year, as printed', '$87,965 — итог за 2026–27 учебный год, как напечатано'), INC_BILLED, tuition=69460, billed=87965),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit', 'covers': dict(TUITION_ONLY), 'renewable': None, 'name': 'International Scholarships',
              'competitiveness': L('St. Lawrence calls its merit and need-based aid for international students very competitive; awards range from $5,000 upwards and the page does not say how many reach full tuition.', 'St. Lawrence называет свои стипендии и помощь иностранным студентам очень конкурсными; награды начинаются от $5,000, и на странице не сказано, сколько из них достигают полной платы за обучение.'),
              'howToApply': L('Every application is reviewed for merit. To be considered for need-based aid, say so on the Common Application and submit the Certificate of Finance form at the same time.', 'Каждая заявка рассматривается на стипендию за успехи. Для помощи по потребности отметьте это в Common Application и одновременно подайте форму Certificate of Finance.'),
              'note': L('The top of the range is full tuition; room, board and fees ($18,505 in 2026–27) remain payable.', 'Верхняя граница — полная плата за обучение; жильё, питание и сборы ($18,505 в 2026–27) оплачиваются отдельно.'),
              'quote': 'The scholarships range from $5,000 to full tuition', 'quoteSource': A},
    merit=[award('Canadian Scholars Program', L('$25,000 to $50,000 a year', 'От $25,000 до $50,000 в год'), L('Incoming first-year Canadian students', 'Поступающие на первый курс граждане Канады'), L('Four-year totals of $100,000 to $200,000.', 'За четыре года — от $100,000 до $200,000.'))],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('Certificate of Finance form', 'Форма Certificate of Finance (подтверждение финансов)')],
          'deadlines': L('With the Common Application, at the same time.', 'Одновременно с Common Application.'),
          'note': L('St. Lawrence does not require the CSS Profile or the ISFAA.', 'CSS Profile и ISFAA St. Lawrence не требует.')},
    sources=src('St. Lawrence', ('intl', S), ('aidintl', A), ('cost 2026–27', T)),
    checked=chk('rounds', 'costs', 'aid', 'merit'),
    unconfirmed=chk('fee', 'tests', L('minimum English test scores', 'минимальные баллы тестов по английскому'), 'needmet', 'founded', 'stats'),
))
annual['st-lawrence-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 87965, 'max': 87965}

# ------------------------------------------------------- Stony Brook University
S = 'https://www.stonybrook.edu/undergraduate-admissions/first-year/international.html'
records.append(R(
    'stony-brook-university', 'Stony Brook University', 'Stony Brook', L('Stony Brook', 'Стони-Брук'), NY, 'public', 'Public research university',
    L('A public research university in Stony Brook, New York, part of the State University of New York. It is test-optional; international applicants still submit proof of English proficiency. The page for international first-year applicants gives deadlines and English minimums but no cost figures or aid terms.',
      'Государственный исследовательский университет в Стони-Бруке, штат Нью-Йорк; входит в State University of New York. Тесты SAT/ACT необязательны, но иностранные абитуриенты подтверждают владение английским. На странице для иностранных первокурсников есть сроки и минимумы по английскому, но нет ни стоимости, ни условий помощи.'),
    ['business', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'medicine'],
    {'website': 'https://www.stonybrook.edu/', 'admissions': S, 'international': S, 'aid': 'https://www.stonybrook.edu/undergraduate-admissions/cost-and-aid/', 'programs': 'https://www.stonybrook.edu/academics/majors-minors-and-programs/',
     'cost': 'https://www.stonybrook.edu/undergraduate-admissions/cost-and-aid/'},
    verified=V, aliases=['SUNY Stony Brook', 'SBU'],
    rounds=[rd('EA', '2026-11-01', S, V, COMPLETE, note=NOYEAR, applies=FYI), rd('RD', '2027-01-15', S, V, COMPLETE, note=NOYEAR, applies=FYI)],
    documents=docs('app', L('Official score report of an accepted English exam, unless exempt', 'Официальный отчёт о принимаемом экзамене по английскому — если нет освобождения')),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(80, 4, L('80 for internet-based exams taken before 21 January 2026; 4 for exams taken after it.', '80 для интернет-экзаменов, сданных до 21 января 2026; 4 — после.')),
             'duolingo': eng(105, None, atleast(105)),
             'waiver': L('Applicants from native English-speaking countries, and others who meet the listed criteria, do not need an exam.', 'Абитуриентам из англоязычных стран и тем, кто подходит под перечисленные условия, экзамен не нужен.'),
             'note': L('Also accepted: PTE Academic 53, ACT English 19, SAT Evidence-Based Reading and Writing 480, IB English HL 5, an AP English score of 3, A-level English C, or 125 out of 150 in GaoKao English.', 'Также принимаются: PTE Academic 53, ACT English 19, SAT Evidence-Based Reading and Writing 480, IB English HL 5, балл AP English 3, A-level English C или 125 из 150 по английскому в GaoKao.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Stony Brook is test-optional for applicants; international students are still expected to submit proof of English proficiency.', 'Stony Brook не требует тестов; от иностранных студентов по-прежнему ожидают подтверждения владения английским.'), source=S, verified=V),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('Stony Brook', (L('Stony Brook — international first-year applicants', 'Stony Brook — иностранным абитуриентам на первый курс'), S), ('programs', 'https://www.stonybrook.edu/academics/majors-minors-and-programs/')),
    checked=chk('rounds', 'english', 'tests'),
    unconfirmed=chk('fee', L('tuition and fees for international students', 'плата и сборы для иностранных студентов'), 'aid', 'merit', 'founded', 'stats'),
))
nodesc.append('stony-brook-university')

# ----------------------------------------------------------- Temple University
S = 'https://admissions.temple.edu/apply/international-students/first-year-international-students'
A = 'https://sfs.temple.edu/apply/international-students'
records.append(R(
    'temple-university', 'Temple University', 'Temple', L('Philadelphia', 'Филадельфия'), PA, 'public', 'Public research university',
    L('A public research university in Philadelphia, Pennsylvania — the home campus of Temple University, Japan Campus, which has its own record. Temple says scholarship funding for international undergraduates is very competitive and that they are expected to finance the entire cost of their education.',
      'Государственный исследовательский университет в Филадельфии, штат Пенсильвания, — головной кампус Temple University, Japan Campus, у которого своя запись. Temple сообщает, что стипендии для иностранных студентов бакалавриата очень конкурсны и что от них ожидают полной оплаты обучения.'),
    ['other'],
    {'website': 'https://www.temple.edu/', 'admissions': 'https://admissions.temple.edu/', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A, 'cost': 'https://admissions.temple.edu/costs-aid-scholarships'},
    verified=V, platforms=[COMMON],
    programNote=NOFIELDS,
    rounds=[
        rnd(L('Application opens', 'Открытие подачи'), 'opens', '2026-08-01', False, None, S, V, note=NOYEAR),
        rd('EA', '2026-11-01', S, V, dec_by('01-10'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-02-01', S, V, L('Enrolment deposit deadline for admitted students: 1 May.', 'Срок депозита для принятых — 1 мая.'), note=NOYEAR, applies=FYI),
    ],
    fee=fee(55, L('Submitted with the Common App unless the applicant qualifies for a waiver.', 'Оплачивается вместе с Common App, если у абитуриента нет права на освобождение.'), S, V, waiver=L('For applicants who qualify', 'Для тех, кто имеет право')),
    documents=docs(COMMON, 'transcript', 'english'),
    english={'ielts': eng(None, None, L('IELTS and IELTS Indicator are accepted; the page gives no minimum score.', 'Принимаются IELTS и IELTS Indicator; минимального балла на странице нет.')),
             'toefl': eng(None, None, L('TOEFL iBT and the Home Edition are accepted; the page gives no minimum score.', 'Принимаются TOEFL iBT и Home Edition; минимального балла на странице нет.')),
             'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('Not needed if English is the native language or after three or more years in a curriculum taught solely in English.', 'Не нужен, если английский — родной язык, или после трёх и более лет обучения по программе только на английском.'),
             'note': L('PTE Academic, iTEP Academic Plus, Cambridge C1 Advanced and C2 Proficiency, the Michigan English Test and SAT Evidence-Based Reading and Writing are also accepted.', 'Также принимаются PTE Academic, iTEP Academic Plus, Cambridge C1 Advanced и C2 Proficiency, Michigan English Test и SAT Evidence-Based Reading and Writing.'), 'detailsSource': S, 'detailsVerified': V},
    fullRide=no_full(L('Temple offers some international student academic scholarships that assist with the cost of tuition for applicants with outstanding records; the pages read give no amounts.', 'Temple даёт некоторым иностранным абитуриентам с выдающимися результатами академические стипендии в счёт платы за обучение; сумм на прочитанных страницах нет.')),
    merit=[award(L('Temple international student academic scholarships', 'Академические стипендии Temple для иностранных студентов'), None, L('Undergraduate applicants with outstanding academic records', 'Абитуриенты бакалавриата с выдающимися академическими результатами'),
                 J(NOAMT, L('Renewable for up to four years while the student keeps the required academic standing.', 'Продлеваются до четырёх лет при сохранении требуемой успеваемости.')), renewable=True)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('International students are not eligible for US federal or state aid and are expected to finance the entire cost of their education.', 'Иностранные студенты не имеют права на федеральную помощь США и помощь штата; от них ожидают полной оплаты обучения.')},
    sources=src('Temple', (L('Temple — first-year international students', 'Temple — иностранным абитуриентам на первый курс'), S), (L('Temple — financial services for international students', 'Temple — финансовые вопросы иностранных студентов'), A)),
    checked=chk('rounds', 'fee', 'aid'),
    unconfirmed=chk(L('minimum English test scores', 'минимальные баллы тестов по английскому'), 'tests', L('tuition and fees', 'плата и сборы'), 'awards', 'founded', 'stats', MAJORS),
))
nodesc.append('temple-university')

# -------------------------------------------------------- Texas A&M University
S = 'https://admissions.tamu.edu/apply/international/international-freshman.html'
D = 'https://admissions.tamu.edu/apply/freshman'
A = 'https://aggie.tamu.edu/paying-for-college/apply-for-financial-aid/international-student-financial-aid.html'
records.append(R(
    'texas-a-and-m-university', 'Texas A&M University', 'Texas A&M', L('College Station', 'Колледж-Стейшен'), L('Texas', 'Техас'), 'public', 'Public research university',
    L('A public research university in College Station, Texas. It is test-optional for first-year applicants. International students may be considered for need-based state or institutional aid by filing the Texas Application for State Financial Aid; Texas A&M says this funding is limited, not guaranteed and does not cover all costs.',
      'Государственный исследовательский университет в Колледж-Стейшене, штат Техас. Тесты SAT/ACT для поступающих на первый курс необязательны. Иностранные студенты могут претендовать на помощь штата или университета по потребности, подав Texas Application for State Financial Aid; по словам Texas A&M, эти средства ограничены, не гарантированы и не покрывают всех расходов.'),
    ['business', 'engineering', 'mathematics', 'humanities', 'law', 'education'],
    {'website': 'https://www.tamu.edu/', 'admissions': D, 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'programs': 'https://www.tamu.edu/academics/programs/index.html', 'cost': 'https://tuition.tamu.edu/undergraduate'},
    verified=V, platforms=[COMMON, 'ApplyTexas'], aliases=['TAMU', 'Texas A and M', 'Texas A&M'],
    programNote=L('Only the fields named on the programmes page read are listed.', 'Указаны только направления, названные на прочитанной странице программ.'),
    rounds=[
        rnd(L('Applications open', 'Открытие подачи'), 'opens', '2026-08-01', False, None, D, V, note=NOYEAR),
        rd('RD', '2026-12-01', D, V, L('The autumn application deadline for College Station; additional documents by 15 December. The timeline is the same for international and domestic first-year applicants.', 'Срок подачи на осень для кампуса College Station; дополнительные документы — до 15 декабря. Сроки одинаковы для иностранных и американских абитуриентов.'),
           name=L('Application deadline — College Station', 'Срок подачи — College Station'), note=NOYEAR),
    ],
    fee=fee(90, L('A non-refundable processing fee, paid through the Common App; ApplyTexas applicants pay it separately.', 'Невозвратный сбор за обработку; оплачивается через Common App, а подающие через ApplyTexas платят его отдельно.'), S, V),
    documents=docs(L('Common App or ApplyTexas application with essay', 'Заявка Common App или ApplyTexas с эссе'), 'transcript', 'english'),
    english={'ielts': eng(6.0, None, L('IELTS Academic, minimum overall band of 6.0; the General test is not accepted.', 'IELTS Academic, минимальный общий балл 6.0; General не принимается.')),
             'toefl': toefl(80, 4.5, L('Minimum overall score of 80 for tests before 21 January 2026, or 4.5 from that date, within two years; MyBest scores are not accepted.', 'Минимальный общий балл 80 для тестов до 21 января 2026 либо 4.5 с этой даты; срок давности — два года; результаты MyBest не принимаются.')),
             'waiver': L('Applicants from a published list of English-speaking countries are exempt.', 'Абитуриенты из опубликованного списка англоязычных стран освобождаются.'),
             'note': L('TOEFL Essentials is also accepted (8.5).', 'Также принимается TOEFL Essentials (8.5).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Texas A&M is test-optional and does not require ACT or SAT scores from first-year applicants; it encourages those who have scores to send them.', 'Texas A&M не требует баллов ACT или SAT от поступающих на первый курс и советует тем, у кого они есть, их прислать.'), source=S, verified=V),
    fullRide=no_full(L('Texas A&M says aid for international students is need-based, supplements the student’s own funds, does not cover all educational costs and is limited and not guaranteed.', 'Texas A&M сообщает, что помощь иностранным студентам назначается по потребности, дополняет собственные средства студента, не покрывает всех расходов на обучение, ограничена и не гарантирована.')),
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': None, 'forms': [L('Texas Application for State Financial Aid (TASFA)', 'Texas Application for State Financial Aid (TASFA)')],
          'note': L('From the 2026–2027 academic year the TASFA replaces the ISFAA for international students at Texas A&M; it is filed once for each academic year.', 'С 2026–2027 учебного года TASFA заменяет ISFAA для иностранных студентов Texas A&M; форма подаётся один раз на каждый учебный год.')},
    sources=src('Texas A&M', (L('Texas A&M — international freshman applicants', 'Texas A&M — иностранным абитуриентам на первый курс'), S), (L('Texas A&M — freshman dates and deadlines', 'Texas A&M — даты и сроки для первокурсников'), D), ('aidintl', A)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'aid'),
    unconfirmed=chk(L('tuition and fees — the tuition page did not load for reading', 'плата и сборы — страница платы не открылась для чтения'), 'merit', 'founded', 'stats', MAJORS),
))
nodesc.append('texas-a-and-m-university')

# ------------------------------------------------------- University of Arizona
S = 'https://www.arizona.edu/admissions/undergraduate/international'
D = 'https://www.arizona.edu/admissions/deadlines'
T = 'https://www.arizona.edu/admissions/undergraduate/tuition-aid'
A = 'https://admissions.arizona.edu/cost-aid/international'
records.append(R(
    'university-of-arizona', 'University of Arizona', 'Arizona', L('Tucson', 'Тусон'), L('Arizona', 'Аризона'), 'public', 'Public research university',
    L('A public research university in Tucson, Arizona. Applicants are considered for merit tuition scholarships with the application; Arizona says more than 82% of new international undergraduates in autumn 2024 received a Global Wildcat Scholarship. It has announced that tuition and fees stay flat for 2027–28.',
      'Государственный исследовательский университет в Тусоне, штат Аризона. Абитуриенты рассматриваются на стипендии за успехи в счёт платы за обучение по заявке; по данным университета, осенью 2024 года более 82% новых иностранных студентов бакалавриата получили Global Wildcat Scholarship. Объявлено, что плата и сборы на 2027–28 не повышаются.'),
    ['other'],
    {'website': 'https://www.arizona.edu/', 'admissions': D, 'international': S, 'aid': 'https://financialaid.arizona.edu/apply-for-aid/international', 'scholarships': A, 'cost': T},
    verified=V, aliases=['UA', 'UArizona', 'U of A'],
    programNote=NOFIELDS,
    rounds=[rd('EA', '2026-11-01', D, V, L('Priority consideration for admission, merit aid and the W.A. Franke Honors College.', 'Приоритетное рассмотрение на приём, стипендии за успехи и W.A. Franke Honors College.'), L('The commitment date is 1 May.', 'Срок подтверждения — 1 мая.'), note=NOYEAR)],
    documents=docs('app', 'english'),
    english={'ielts': eng(6.5, None, L('6.5; IELTS Indicator and One Skill Retake are accepted.', '6.5; принимаются IELTS Indicator и One Skill Retake.')),
             'toefl': toefl(79, 4, L('79 before January 2026 or 4 after it; the Paper Edition, Home Edition and MyBest scores are accepted.', '79 до января 2026 либо 4 после; принимаются Paper Edition, Home Edition и результаты MyBest.')),
             'duolingo': eng(110, None, atleast(110)),
             'waiver': None, 'note': L('Also accepted: PTE Academic 60, TOEFL Essentials 8.5, or an SAT Evidence-Based Reading and Writing score of 580.', 'Также принимаются PTE Academic 60, TOEFL Essentials 8.5 или SAT Evidence-Based Reading and Writing 580.'), 'detailsSource': S, 'detailsVerified': V},
    costs=costs(None, T, V, L('Non-Arizona residents', 'Студенты не из штата Аризона'),
                [(L('Estimated tuition and fees', 'Обучение и сборы (оценка)'), 44400, B), (HF, 17770, E), (L('Books and course materials', 'Книги и учебные материалы'), 600, E), (L('Travel and miscellaneous expenses', 'Дорога и прочие расходы'), 5000, E)],
                h_coa(67770), L('$67,770 estimated annual cost for non-Arizona residents, of which $44,400 is tuition and fees', '$67,770 — оценка годовых расходов для студентов не из Аризоны, из них $44,400 — обучение и сборы'),
                L('estimated tuition and fees, housing and food, books and course materials, and travel and miscellaneous expenses', 'оценку платы и сборов, жильё и питание, книги и учебные материалы, дорогу и прочие расходы'),
                tuition=44400, tuition_label='Tuition and fees', billed=44400, budget=67770,
                note=L('The page shows these estimates next to the announcement that tuition and mandatory fees are frozen for 2027–28; it does not label the estimates with a year. Health insurance is not listed.', 'Страница показывает эти оценки рядом с объявлением о заморозке платы и обязательных сборов на 2027–28; год у самих оценок не указан. Страховки в списке нет.')),
    fullRide=no_full(L('The pages read describe the Global Wildcat Scholarship for international students without amounts.', 'На прочитанных страницах Global Wildcat Scholarship для иностранных студентов описана без сумм.')),
    merit=[award('Global Wildcat Scholarship', None, L('New undergraduate international students', 'Новые иностранные студенты бакалавриата'), J(NOAMT, L('Arizona says more than 82% of new international undergraduates in autumn 2024 received it.', 'По данным Arizona, осенью 2024 года её получили более 82% новых иностранных студентов бакалавриата.')), application=AUTO)],
    need={'note': NOINTL},
    sources=src('Arizona', ('intl', S), ('dates', D), (L('Arizona — tuition and aid', 'Arizona — плата и помощь'), T), (L('Arizona — costs and aid for international students', 'Arizona — стоимость и помощь для иностранных студентов'), A)),
    checked=chk('english', L('Early Action date', 'срок Early Action'), L('cost estimate for non-residents', 'оценка расходов для студентов не из штата')),
    unconfirmed=chk('fee', 'tests', 'awards', L('final application deadline', 'окончательный срок подачи'), L('academic year of the cost estimate', 'учебный год, к которому относится оценка'), 'founded', 'stats', MAJORS),
))
nodesc.append('university-of-arizona')
annual['university-of-arizona'] = {'currency': 'USD', 'basis': 'total', 'min': 67770, 'max': 67770, 'note': L('Non-resident estimate; the page does not name the academic year', 'Оценка для студентов не из штата; учебный год на странице не назван')}

# ---------------------------------------------------------- University of Iowa
S = 'https://admissions.uiowa.edu/international-first-year-admission-requirements'
D = 'https://admissions.uiowa.edu/international-application-deadlines'
T = 'https://admissions.uiowa.edu/finances/estimated-costs-international-students'
SC = 'https://admissions.uiowa.edu/cost-aid/international-scholarships'
records.append(R(
    'university-of-iowa', 'University of Iowa', 'Iowa', L('Iowa City', 'Айова-Сити'), L('Iowa', 'Айова'), 'public', 'Public research university',
    L('A public research university in Iowa City, Iowa. SAT or ACT scores are not required of international applicants schooled outside the United States, but they are required to be considered for academic scholarships. First-year non-resident students who apply by 1 February are considered automatically for the National Scholars Award of $2,000 to $15,000 a year.',
      'Государственный исследовательский университет в Айова-Сити, штат Айова. Баллы SAT или ACT не требуются от иностранных абитуриентов, учившихся вне США, но нужны для рассмотрения на академические стипендии. Первокурсники не из штата, подавшие до 1 февраля, автоматически рассматриваются на National Scholars Award — от $2,000 до $15,000 в год.'),
    ['business', 'engineering', 'humanities', 'education', 'medicine'],
    {'website': 'https://uiowa.edu/', 'admissions': S, 'international': S, 'scholarships': SC, 'aid': 'https://admissions.uiowa.edu/finances', 'cost': T},
    verified=V,
    programNote=L('The fields listed are the colleges named on the deadlines and cost pages read: Liberal Arts & Sciences, Business, Engineering, Education and Nursing.', 'Указаны направления колледжей, названных на прочитанных страницах сроков и стоимости: Liberal Arts & Sciences, Business, Engineering, Education и Nursing.'),
    rounds=[
        rnd(L('National Scholars Award — apply for admission by', 'National Scholars Award — подать на поступление до'), 'scholarship', '2027-02-01', False, L('Non-resident first-year applicants who apply by this date are considered automatically.', 'Первокурсники не из штата, подавшие к этой дате, рассматриваются автоматически.'), SC, V),
        rd('FINAL', '2027-05-03', D, V, L('For the autumn semester or summer session, in the colleges of Liberal Arts & Sciences, Education and Engineering; check the deadline of other colleges on the same page.', 'Для осеннего семестра или летней сессии — в колледжах Liberal Arts & Sciences, Education и Engineering; сроки других колледжей — на той же странице.'),
           name=L('International application deadline', 'Срок подачи для иностранных абитуриентов'), note=NOYEAR, applies=INTL),
    ],
    documents=docs('app', L('Secondary school records', 'Документы о среднем образовании'), L('Proof of meeting the English proficiency requirements', 'Подтверждение выполнения требований по английскому')),
    english={'waiver': L('Applicants must meet the university’s English Proficiency Requirements, which are on a separate page that was not read on this check.', 'Абитуриенты должны выполнить требования университета по английскому; они на отдельной странице, которая при этой проверке не прочитана.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('SAT or ACT scores are not required of international applicants who completed secondary school outside the United States; they are required for academic scholarships, direct admission to the Tippie College of Business and the Honors Program.', 'Баллы SAT или ACT не требуются от иностранных абитуриентов, окончивших школу вне США; они нужны для академических стипендий, прямого приёма в Tippie College of Business и Honors Program.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('International students, College of Liberal Arts & Sciences', 'Иностранные студенты, College of Liberal Arts & Sciences'),
                [(L('Tuition & fees', 'Обучение и сборы'), 35442, B), (L('Living expenses', 'Расходы на жизнь'), 14022, E), (INS, 2628, B), (L('Books', 'Книги'), 950, E)],
                h_coa(53042), L('$53,042 estimated total for Liberal Arts & Sciences; $56,447 for Business, $54,630 for Engineering and $56,916 for Nursing', '$53,042 — оценка для Liberal Arts & Sciences; $56,447 для Business, $54,630 для Engineering и $56,916 для Nursing'),
                L('tuition and fees, health insurance, and the university’s estimates for living expenses and books', 'обучение и сборы, медицинскую страховку, а также оценки университета на расходы на жизнь и книги'),
                tuition=35442, tuition_label='Tuition and fees', billed=38070, budget=53042,
                note=L('Estimates for full-time enrolment in the autumn and spring semesters. The fees include a $250 international student fee.', 'Оценки для полной нагрузки в осеннем и весеннем семестрах. В сборы входит сбор для иностранных студентов $250.')),
    fullRide=no_full(L('The largest award described for first-year non-resident students is the National Scholars Award of $2,000 to $15,000 a year, against tuition and fees of $35,442.', 'Крупнейшая награда для первокурсников не из штата — National Scholars Award, от $2,000 до $15,000 в год, при плате и сборах $35,442.')),
    merit=[award('National Scholars Award', rng(2000, 15000), L('Incoming first-year non-resident students, on test scores and GPA', 'Поступающие первокурсники не из штата — по баллам тестов и GPA'),
                 L('For up to four years. Awarded automatically to eligible students who apply for admission by 1 February 2027; SAT or ACT scores are needed for scholarship consideration.', 'До четырёх лет. Назначается автоматически тем, кто подал на поступление до 1 февраля 2027; для рассмотрения нужны баллы SAT или ACT.'), application=AUTO, renewable=True, deadline=L('1 February 2027', '1 февраля 2027'))],
    need={'note': NOINTL},
    sources=src('Iowa', (L('Iowa — international first-year admission requirements', 'Iowa — требования к иностранным абитуриентам первого курса'), S), (L('Iowa — international application deadlines', 'Iowa — сроки подачи для иностранных абитуриентов'), D), (L('Iowa — estimated costs for international students 2026–27', 'Iowa — оценка расходов иностранных студентов 2026–27'), T), ('meritintl', SC)),
    checked=chk('rounds', 'tests', 'intlcost', 'merit'),
    unconfirmed=chk('fee', 'english', 'aid', 'founded', 'stats', MAJORS),
))
nodesc.append('university-of-iowa')
annual['university-of-iowa'] = {'currency': 'USD', 'basis': 'total', 'min': 53042, 'max': 53042, 'note': L('International students, Liberal Arts & Sciences; other colleges cost up to $56,916', 'Иностранные студенты, Liberal Arts & Sciences; в других колледжах — до $56,916')}

# --------------------------------- University of North Carolina at Chapel Hill
S = 'https://admissions.unc.edu/apply/types-of-applications/international-first-year-students/'
T = 'https://cashier.unc.edu/tuition-fees/undergraduate-programs/'
records.append(R(
    'unc-chapel-hill', 'University of North Carolina at Chapel Hill', 'UNC', L('Chapel Hill', 'Чапел-Хилл'), L('North Carolina', 'Северная Каролина'), 'public', 'Public research university',
    L('A public research university in Chapel Hill, North Carolina, chartered in 1789. UNC states that international students are not eligible for need-based financial aid and should be prepared to pay the full cost of attendance for non-resident students. SAT or ACT scores are optional with a weighted GPA of 2.8 or above.',
      'Государственный исследовательский университет в Чапел-Хилле, штат Северная Каролина; хартия 1789 года. UNC сообщает, что иностранные студенты не имеют права на помощь по потребности и должны быть готовы платить полную стоимость по ставке для приезжих из других штатов. Баллы SAT или ACT необязательны при взвешенном GPA 2.8 и выше.'),
    ['other'],
    {'website': 'https://www.unc.edu/', 'admissions': 'https://admissions.unc.edu/apply/international-students/', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': 'https://studentaid.unc.edu/', 'cost': T},
    verified=V, founded=1789, platforms=[COMMON], aliases=['UNC', 'UNC Chapel Hill', 'University of North Carolina', 'Carolina'],
    programNote=NOFIELDS,
    rounds=[
        rd('EA', '2026-10-15', S, V, L('For first-year admission in autumn 2027.', 'Для поступления на первый курс осенью 2027.'), L('Enrolment confirmation by 1 May.', 'Подтверждение зачисления до 1 мая.'), applies=FYI),
        rd('RD', '2027-01-15', S, V, dec_on('03-31'), L('Enrolment confirmation by 1 May.', 'Подтверждение зачисления до 1 мая.'), note=NOYEAR, applies=FYI),
    ],
    fee=fee(85, L('Non-refundable. Applicants who cannot pay are asked to talk with their school counselor about requesting a waiver.', 'Невозвратный. Тем, кто не может заплатить, предлагают попросить школьного консультанта запросить освобождение.'), S, V, waiver=L('Requested through the school counselor', 'Запрашивается через школьного консультанта')),
    documents=docs(COMMON, L('Letter of recommendation', 'Рекомендательное письмо'), L('Official transcript and school report', 'Официальная выписка и справка школы'), L('English proficiency exam scores', 'Баллы экзамена по английскому')),
    english={'ielts': eng(None, 7.5, L('Strong applicants typically score 7.5 or higher on IELTS Academic; UNC stresses that this is not a minimum.', 'Сильные абитуриенты обычно набирают 7.5 и выше по IELTS Academic; UNC подчёркивает, что это не минимум.')),
             'toefl': toefl(100, 5, L('Strong applicants typically score 100 or higher (5 or higher for exams from 21 January 2026); not a minimum. The Home Edition is accepted.', 'Сильные абитуриенты обычно набирают 100 и выше (5 и выше для экзаменов с 21 января 2026); это не минимум. Принимается Home Edition.'), kind='recommended'),
             'duolingo': eng(None, 130, L('Strong applicants typically score 130 or higher; not a minimum.', 'Сильные абитуриенты обычно набирают 130 и выше; это не минимум.')),
             'waiver': L('The requirement can be waived for applicants who have lived in an English-speaking country for a stated period.', 'От требования могут освободить тех, кто определённое время жил в англоязычной стране.'),
             'note': L('Cambridge C1 Advanced (185 or higher) and C2 Proficiency are also accepted.', 'Также принимаются Cambridge C1 Advanced (185 и выше) и C2 Proficiency.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('SAT or ACT scores are optional for applicants with a weighted GPA of 2.8 or above on a 4.0 scale.', 'Баллы SAT или ACT необязательны для абитуриентов со взвешенным GPA 2.8 и выше по шкале 4.0.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('Non-resident undergraduates, 12 or more credit hours', 'Студенты бакалавриата не из штата, 12 и более кредитов'),
                [(L('Non-resident tuition, two semesters at $23,736', 'Обучение для приезжих, два семестра по $23,736'), 47472, B), (L('Fees, two semesters at $1,060.50', 'Сборы, два семестра по $1,060.50'), 2121, B)],
                L('$49,593 in tuition and fees', '$49,593 — обучение и сборы'), L('$23,736 tuition and $1,060.50 fees per semester for 12 or more credit hours, as printed; $49,593 is two semesters added together', '$23,736 за обучение и $1,060.50 сборов за семестр при 12 и более кредитах, как напечатано; $49,593 — сумма за два семестра'),
                INC_TUITION, tuition=47472, billed=49593,
                note=L('Housing, food and health insurance are not on this page.', 'Жилья, питания и страховки на этой странице нет.')),
    fullRide={'available': False, 'internationalEligible': False, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': L('UNC states that international students are not eligible to receive need-based financial aid and should be prepared to pay the full cost of attendance for non-resident students. The pages read describe no merit award for them.', 'UNC сообщает, что иностранные студенты не имеют права на помощь по потребности и должны быть готовы платить полную стоимость по ставке для приезжих. Стипендий за успехи для них на прочитанных страницах не описано.'),
              'quote': 'International students aren’t eligible to receive need-based financial aid', 'quoteSource': S},
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('International students are not eligible for need-based financial aid.', 'Иностранные студенты не имеют права на помощь по потребности.')},
    sources=src('UNC', (L('UNC — applying as an international first-year student', 'UNC — подача иностранных абитуриентов на первый курс'), S), (L('UNC — undergraduate tuition and fees 2026–2027', 'UNC — плата и сборы бакалавриата 2026–2027'), T), ('home', 'https://www.unc.edu/')),
    checked=chk('rounds', 'fee', 'english', 'tests', 'aid', L('tuition and fees 2026–2027', 'плата и сборы 2026–2027'), 'founded'),
    unconfirmed=chk(L('housing, food and insurance costs', 'стоимость жилья, питания и страховки'), 'merit', 'stats', MAJORS),
))
annual['unc-chapel-hill'] = {'currency': 'USD', 'basis': 'tuition', 'min': 49593, 'max': 49593}

# -------------------------------------------------------- University of Denver
S = 'https://www.du.edu/admission-aid/undergraduate/international-applicants/first-year'
T = 'https://www.du.edu/admission-aid/undergraduate/international-applicants/tuition'
EN = 'https://www.du.edu/admission-aid/undergraduate/international-applicants/english-proficiency-requirements'
records.append(R(
    'university-of-denver', 'University of Denver', 'Denver', L('Denver', 'Денвер'), L('Colorado', 'Колорадо'), 'private', 'Private research university',
    L('A private research university in Denver, Colorado. It is test-optional. The University of Denver states that it offers no need-based aid to international students; they are considered automatically for merit scholarships of $15,000 to $40,000 a year, and the university says very few of these cover the full cost.',
      'Частный исследовательский университет в Денвере, штат Колорадо. Тесты SAT/ACT необязательны. University of Denver сообщает, что помощи по потребности иностранным студентам не даёт; их автоматически рассматривают на стипендии за успехи от $15,000 до $40,000 в год, и, по словам университета, очень немногие из них покрывают полную стоимость.'),
    ['other'],
    {'website': 'https://www.du.edu/', 'admissions': S, 'international': 'https://www.du.edu/admission-aid/undergraduate/international-applicants', 'portal': 'https://www.commonapp.org/', 'scholarships': T, 'aid': T, 'cost': T},
    verified=V, platforms=[COMMON], aliases=['DU'],
    programNote=NOFIELDS,
    rounds=[
        rnd(L('Early Decision I and Early Action', 'Early Decision I и Early Action'), 'EA', '2026-11-01', None, L('Early Decision is binding; Early Action is not.', 'Early Decision — обязывающий; Early Action — нет.'), S, V, note=NOYEAR, applies=FYI),
        rnd(L('Early Decision II and Regular Decision', 'Early Decision II и Regular Decision'), 'RD', '2027-01-15', None, L('Early Decision II is binding; Regular Decision is not.', 'Early Decision II — обязывающий; Regular Decision — нет.'), S, V, note=NOYEAR, applies=FYI),
    ],
    fee=fee(65, L('Non-refundable. A fee waiver can be requested with a form completed by a school official.', 'Невозвратный. Об освобождении можно попросить по форме, которую заполняет представитель школы.'), S, V, waiver=L('Fee waiver form completed with a school official', 'Форма освобождения, заполненная с представителем школы')),
    documents=docs(L('Common Application with essay', 'Common Application с эссе'), 'transcript', 'english'),
    english={'ielts': eng(6.5, None, L('6.5 or higher with no band score below 5.5.', '6.5 и выше при разделах не ниже 5.5.')),
             'toefl': toefl(80, 4, L('Minimum total of 80 with 18 in each section for exams before 21 January 2026, or a minimum total of 4 from that date.', 'Минимальный общий балл 80 при 18 в каждом разделе для экзаменов до 21 января 2026 либо минимальный общий балл 4 с этой даты.')),
             'duolingo': eng(115, None, L('115 or higher, with stated minimum subscores.', '115 и выше при указанных минимумах по разделам.')),
             'waiver': L('The page describes these as the scores needed to be competitive for admission and lists exemptions.', 'Страница называет эти баллы необходимыми для конкурентной заявки и перечисляет исключения.'),
             'note': L('Cambridge English exams are also accepted.', 'Также принимаются экзамены Cambridge English.'), 'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', L('The University of Denver is test-optional: submitting SAT or ACT scores is the applicant’s choice.', 'University of Denver не требует тестов: отправлять баллы SAT или ACT или нет, решает абитуриент.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('International undergraduates, three quarters', 'Иностранные студенты бакалавриата, три квартала'),
                [(L('Tuition (12–18 credit hours)', 'Обучение (12–18 кредитов)'), 63720, B), (L('Student fees', 'Студенческие сборы'), 1584, B), (HOUS, 11283, B), (L('Food and meals', 'Питание'), 7532, B),
                 (L('Health insurance (can be waived with comparable cover)', 'Медицинская страховка (можно отказаться при равноценном полисе)'), 3998, B),
                 (L('Books & supplies', 'Книги и материалы'), 1000, E), (PERS, 1782, E), (TRANS, 627, E)],
                h_coa(91526), tt_coa(91526, 88117), INC_COA_INS, tuition=63720, billed=88117, budget=91526,
                note=L('The page prints an indirect-cost subtotal of $3,408; its three lines add up to $3,409, which matches the printed total of $91,526.', 'На странице напечатан промежуточный итог косвенных расходов $3,408; три его строки дают $3,409, что согласуется с напечатанным общим итогом $91,526.')),
    fullRide=no_full(L('The University of Denver offers no need-based aid to international students. Merit scholarships range from $15,000 to $40,000 a year against tuition of $63,720, and the university says very few of them cover the full cost.', 'Помощи по потребности иностранным студентам University of Denver не даёт. Стипендии за успехи — от $15,000 до $40,000 в год при плате за обучение $63,720; по словам университета, очень немногие покрывают полную стоимость.')),
    merit=[award(L('University of Denver merit scholarships for international students', 'Стипендии University of Denver за успехи для иностранных студентов'), rng(15000, 40000), L('International applicants with strong academic profiles', 'Иностранные абитуриенты с сильными академическими результатами'),
                 L('Most of these scholarships are renewable.', 'Большинство этих стипендий продлеваются.'), application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The University of Denver states that it does not offer any need-based aid to international students.', 'University of Denver сообщает, что не даёт иностранным студентам никакой помощи по потребности.')},
    sources=src('Denver', (L('Denver — first-year international applicants', 'Denver — иностранным абитуриентам на первый курс'), S), (L('Denver — tuition and scholarships for international students 2026–2027', 'Denver — плата и стипендии для иностранных студентов 2026–2027'), T), ('english', EN)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'intlcost', 'aid', 'merit'),
    unconfirmed=chk('founded', 'stats', MAJORS),
))
nodesc.append('university-of-denver')
annual['university-of-denver'] = {'currency': 'USD', 'basis': 'total', 'min': 91526, 'max': 91526}

# ------------------------------------------ University of Maryland, College Park
S = 'https://admissions.umd.edu/apply/international-applicants'
D = 'https://admissions.umd.edu/apply/application-deadlines'
records.append(R(
    'university-of-maryland', 'University of Maryland, College Park', 'Maryland', L('College Park', 'Колледж-Парк'), L('Maryland', 'Мэриленд'), 'public', 'Public research university',
    L('A public research university in College Park, Maryland. It is test-optional through the spring and autumn 2027 application cycles. International applicants submit Duolingo, IELTS or TOEFL scores less than two years old; the pages read give no minimum scores, costs or aid terms for them.',
      'Государственный исследовательский университет в Колледж-Парке, штат Мэриленд. Тесты SAT/ACT необязательны в циклах подачи на весну и осень 2027. Иностранные абитуриенты присылают баллы Duolingo, IELTS или TOEFL не старше двух лет; минимальных баллов, стоимости и условий помощи для них на прочитанных страницах нет.'),
    ['other'],
    {'website': 'https://umd.edu/', 'admissions': 'https://admissions.umd.edu/apply/freshman-applicants', 'international': S, 'aid': 'https://admissions.umd.edu/tuition', 'scholarships': 'https://admissions.umd.edu/tuition/freshman-merit-scholarships', 'cost': 'https://admissions.umd.edu/tuition'},
    verified=V, aliases=['UMD', 'University of Maryland', 'Maryland'],
    programNote=NOFIELDS,
    rounds=[rd('EA', '2026-11-01', S, V, dec_by('02-01'), L('Applicants for the autumn are also considered automatically for the spring semester.', 'Подавших на осень автоматически рассматривают и на весенний семестр.'), note=NOYEAR)],
    fee=fee(80, L('Non-refundable, paid by credit card; a fee waiver must be submitted before the application.', 'Невозвратный, оплачивается картой; освобождение нужно оформить до подачи заявки.'), S, V, waiver=L('Fee waiver submitted before the application', 'Освобождение, оформленное до подачи заявки')),
    documents=docs('app', L('Non-US academic credential evaluation, as the university requires', 'Оценка иностранных документов об образовании — по требованию университета'), L('Duolingo, IELTS or TOEFL score sent by the testing agency', 'Балл Duolingo, IELTS или TOEFL — отправляет организатор теста')),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED), 'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('Scores must be less than two years old and sent directly by the testing agency; the application is not complete without them.', 'Баллы должны быть не старше двух лет и отправлены напрямую организатором теста; без них заявка не считается завершённой.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('UMD is test-optional through the spring and autumn 2027 application cycles.', 'UMD не требует тестов в циклах подачи на весну и осень 2027.'), cycle=L('Through the spring and autumn 2027 application cycles', 'В циклах подачи на весну и осень 2027'), source=S, verified=V),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('Maryland', ('intl', S), ('dates', D)),
    checked=chk('fee', 'tests', L('Early Action date', 'срок Early Action')),
    unconfirmed=chk(L('Regular Decision deadline', 'срок Regular Decision'), L('minimum English test scores', 'минимальные баллы тестов по английскому'), L('tuition and fees', 'плата и сборы'), 'aid', 'merit', 'founded', 'stats', MAJORS),
))
nodesc.append('university-of-maryland')

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
