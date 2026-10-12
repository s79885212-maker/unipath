# -*- coding: utf-8 -*-
"""United States expansion, batch B, part 4. Every fact below was read on the
official page named next to it on 12 October 2026."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
NY, MA, CA = 'New York', 'Massachusetts', 'California'
ACCEPTED = L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')
NOINTL = L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')

# ---------------------------------------------------------- Providence College
S = 'https://admission.providence.edu/international-applicants-2/app-requirements/'
A = 'https://admission.providence.edu/international-applicants-2/cost-financial-aid/'
T = 'https://bursar.providence.edu/undergraduate-students/tuition/'
TA = 'https://admission.providence.edu/tuition-aid/'
P = 'https://admission.providence.edu/apply/standardized-testing/'
records.append(R(
    'providence-college', 'Providence College', 'Providence', L('Providence', 'Провиденс'), L('Rhode Island', 'Род-Айленд'), 'private', L('Private Catholic college', 'Частный католический колледж'),
    L('A private Catholic college in Providence, Rhode Island. SAT and ACT scores are not required. Admission of international students is need-aware, and the college states that its financial support for them is capped at the cost of tuition: applicants must show they can cover at least housing and food.',
      'Частный католический колледж в Провиденсе, штат Род-Айленд. Баллы SAT и ACT не требуются. При приёме иностранных студентов учитывается потребность в помощи, а поддержка колледжа, по его словам, ограничена платой за обучение: абитуриент должен показать, что может оплатить как минимум жильё и питание.'),
    ['business', 'economics', 'computer-science', 'biology', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.providence.edu/', 'admissions': 'https://admission.providence.edu/', 'international': 'https://admission.providence.edu/international-applicants/', 'portal': 'https://www.commonapp.org/',
     'aid': A, 'scholarships': A, 'programs': 'https://academics.providence.edu/majors-and-minors/', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('EA', '2026-11-01', 'https://admission.providence.edu/deadlines/early-action/', V, L('Notification in late December; preliminary need-based awards follow in mid-January.', 'Решение в конце декабря; предварительные решения о помощи по потребности — в середине января.'), REPLY_MAY1, note=NOYEAR),
        rd('ED1', '2026-11-01', 'https://admission.providence.edu/deadlines/early-decision/', V, dec_by('12-15'), note=NOYEAR),
        rd('ED2', '2027-01-15', 'https://admission.providence.edu/deadlines/early-decision/', V, L('Notification in late February.', 'Решение в конце февраля.'), note=NOYEAR),
        rd('RD', '2027-01-15', 'https://admission.providence.edu/deadlines/regular-decision/', V, dec_by('04-01'), REPLY_MAY1, note=NOYEAR),
    ],
    documents=docs(COMMON, L('School Report with transcripts, leaving certificates or predicted scores', 'School Report с выписками, аттестатами или прогнозными оценками'), L('Application essay', 'Эссе'), 'english',
                   L('International Student Certification of Finances', 'International Student Certification of Finances (подтверждение финансов)'), L('CSS Profile, only if applying for need-based aid', 'CSS Profile — только если запрашиваете помощь по потребности')),
    english={'ielts': eng(7.0, None, L('7.0 on the Academic test.', '7.0 по IELTS Academic.')),
             'toefl': toefl(90, 5, L('90 for exams taken before 21 January 2026, or 5 for exams taken on or after that date. TOEFL Essentials and ITP are not accepted.', '90 для экзаменов, сданных до 21 января 2026, либо 5 — начиная с этой даты. TOEFL Essentials и ITP не принимаются.')),
             'duolingo': eng(120, None, atleast(120)),
             'waiver': L('These are minimum scores for consideration and do not guarantee admission. Students who studied entirely in English throughout secondary school are treated differently.', 'Это минимальные баллы для рассмотрения; приём они не гарантируют. К тем, кто всю среднюю школу учился на английском, подход иной.'),
             'note': L('Scores from Pearson PTE Academic and the Cambridge English Qualifications may be considered.', 'Могут рассматриваться баллы Pearson PTE Academic и Cambridge English Qualifications.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Providence College does not require undergraduate applicants to submit SAT or ACT scores.', 'Providence College не требует от поступающих в бакалавриат баллы SAT или ACT.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 67470, B), (L('General tech fee', 'Технологический сбор'), 500, B), (L('Activity fee', 'Сбор на мероприятия'), 510, B), (HF, 19690, B)],
                L('$88,170 in tuition, required fees, housing and food', '$88,170 — обучение, обязательные сборы, жильё и питание'),
                L('$68,480 tuition and required fees on the Bursar’s page plus $19,690 housing and food on the admission page; the admission page prints a total of $87,160', '$68,480 — обучение и обязательные сборы по странице казначейства, плюс $19,690 — жильё и питание по странице приёма; страница приёма печатает итог $87,160'),
                INC_BILLED, tuition=67470, billed=88170,
                note=L('The two official pages differ: the Bursar lists tuition of $67,470 plus $1,010 in required fees, while the admission page calls $67,470 “tuition and fees” and gives a total of $87,160.', 'Две официальные страницы расходятся: казначейство указывает плату за обучение $67,470 и $1,010 обязательных сборов, а страница приёма называет $67,470 «платой и сборами» и даёт итог $87,160.')),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based', 'covers': dict(TUITION_ONLY), 'renewable': None,
              'name': L('Financial assistance for international students', 'Финансовая помощь иностранным студентам'),
              'competitiveness': L('Admission is need-aware. Providence says the most competitive candidates show they can cover about half of the total cost of attendance, approximately $35,000.', 'Потребность в помощи учитывается при приёме. Providence сообщает, что самые конкурентные кандидаты показывают способность оплатить около половины полной стоимости — примерно $35,000.'),
              'howToApply': L('Submit the CSS Profile and the International Student Certification of Finances with the application for admission.', 'Подайте CSS Profile и International Student Certification of Finances вместе с заявкой на поступление.'),
              'note': L('Support for international students is capped at the cost of tuition. To be admissible, students must show they can cover at least housing and food, approximately $22,000 a year.', 'Поддержка иностранных студентов ограничена платой за обучение. Чтобы заявку могли принять, нужно показать способность оплатить как минимум жильё и питание — примерно $22,000 в год.'),
              'quote': 'that support is capped at the cost of tuition', 'quoteSource': A},
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': False, 'forms': ['CSS Profile', L('International Student Certification of Finances', 'International Student Certification of Finances (подтверждение финансов)')],
          'deadlines': L('At the time of applying for admission.', 'Одновременно с заявкой на поступление.'),
          'note': L('Providence College does not accept the International Student Financial Aid Application (ISFAA).', 'Форму International Student Financial Aid Application (ISFAA) Providence College не принимает.')},
    sources=src('Providence', (L('Providence — application requirements for international students', 'Providence — требования к заявке иностранных студентов'), S), (L('Providence — costs and financial aid for international students', 'Providence — стоимость и помощь для иностранных студентов'), A),
                (L('Providence — Bursar, tuition and fees 2026–2027', 'Providence — казначейство, плата и сборы 2026–2027'), T), (L('Providence — tuition and aid', 'Providence — плата и помощь'), TA), ('tests', P)),
    checked=chk('rounds', 'english', 'tests', 'costs', 'aid'),
    unconfirmed=chk('fee', 'merit', 'insurance', 'founded', 'stats'),
))
annual['providence-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 88170, 'max': 88170}

# --------------------------------------------- Rensselaer Polytechnic Institute
S = 'https://undergrad.admissions.rpi.edu/apply/international-applicants'
T = 'https://financialaid.rpi.edu/cost-attendance'
records.append(R(
    'rensselaer-polytechnic-institute', 'Rensselaer Polytechnic Institute', 'RPI', L('Troy', 'Трой'), NY, 'private', 'Private research university',
    L('A private technological research university in Troy, New York. Rensselaer offers undergraduate international students limited merit scholarships of up to $20,000 a year and says all non-US citizens must be prepared to assume the full cost of attendance.',
      'Частный технологический исследовательский университет в Трое, штат Нью-Йорк. Иностранным студентам бакалавриата доступны ограниченные стипендии за успехи — до $20,000 в год; университет сообщает, что все, кто не является гражданином США, должны быть готовы оплачивать полную стоимость.'),
    ['engineering', 'computer-science', 'business', 'biology', 'mathematics', 'arts'],
    {'website': 'https://www.rpi.edu/', 'admissions': 'https://admissions.rpi.edu/', 'international': S, 'portal': 'https://apply-undergrad.rpi.edu/apply', 'aid': 'https://financialaid.rpi.edu/how-apply-aid',
     'scholarships': 'https://financialaid.rpi.edu/types-aid/scholarships', 'programs': 'https://www.rpi.edu/academics', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('Rensselaer')], aliases=['RPI', 'Rensselaer'],
    rounds=[
        rd('ED1', '2026-11-01', S, V, dec_on('12-12'), note=NOYEAR),
        rd('EA', '2026-12-01', S, V, dec_on('01-30'), note=NOYEAR),
        rd('ED2', '2027-01-06', S, V, dec_on('01-16'), note=NOYEAR),
        rd('RD', '2027-01-15', S, V, dec_on('03-06'), note=NOYEAR),
    ],
    documents=docs(L('Common Application or the Rensselaer application', 'Common Application или заявка Rensselaer'), 'transcript', 'english', L('Proof of funding for tuition and living expenses, for an F-1 or J-1 visa', 'Подтверждение средств на обучение и проживание — для визы F-1 или J-1')),
    english={'ielts': eng(6.5, None, L('An overall band score of at least 6.5 is expected.', 'Ожидается общий балл не ниже 6.5.')),
             'toefl': toefl(88, 4.5, L('A minimum of 88 on the internet-based test, or 4.5 on the new scale, is expected; the Home Edition is accepted.', 'Ожидается не менее 88 по интернет-версии либо 4.5 по новой шкале; принимается Home Edition.')),
             'duolingo': eng(115, None, atleast(115)),
             'waiver': L('The requirement is met without a test by, for example, an SAT Evidence-Based Reading and Writing score of 640, an ACT English score of 22 or IB English A Higher Level 6.', 'Требование выполняется без теста, например, при SAT Evidence-Based Reading and Writing 640, ACT English 22 или IB English A Higher Level 6.'),
             'note': L('PTE is also accepted (at least 59). RPI asks applicants to take the exam no later than December of the final school year.', 'Также принимается PTE (не ниже 59). RPI просит сдать экзамен не позже декабря выпускного класса.'), 'detailsSource': S, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Undergraduates', 'Студенты бакалавриата'),
                [(TUIT, 66300, B), (FEES, 1676, B), (L('Food and housing', 'Питание и жильё'), 18870, B), (BOOKS, 1410, E), (PERS, 1280, E), (TRANS, 540, E)],
                h_coa(90076), tt_coa(90076, 86846), INC_COA, tuition=66300, billed=86846, budget=90076,
                extras=[{'label': L('Laptop (required for course work)', 'Ноутбук (обязателен для учёбы)'), 'amount': 2000, 'required': True,
                         'condition': L('All students must have a laptop; one can be bought from Rensselaer at an approximate cost of $2,000.', 'У каждого студента должен быть ноутбук; его можно купить у Rensselaer примерно за $2,000.'), 'year': '2026–2027'}],
                note=L('Health insurance is not in the table.', 'Медицинской страховки в таблице нет.')),
    fullRide=no_full(L('Rensselaer describes limited merit scholarships of up to $20,000 a year for undergraduate international students, against tuition of $66,300.', 'Rensselaer описывает ограниченные стипендии за успехи до $20,000 в год для иностранных студентов бакалавриата — при плате за обучение $66,300.')),
    merit=[award(L('Rensselaer merit scholarships for international students', 'Стипендии Rensselaer за успехи для иностранных студентов'), upto(20000), L('Undergraduate international students; opportunities are limited', 'Иностранные студенты бакалавриата; возможностей немного'), None)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Rensselaer states that all non-US citizens and non-permanent residents must be prepared to assume the full cost of attendance for the duration of their studies.', 'Rensselaer сообщает, что все, кто не является гражданином или постоянным жителем США, должны быть готовы оплачивать полную стоимость весь срок обучения.')},
    sources=src('RPI', ('intl', S), ('coa 2026–2027', T), ('programs', 'https://www.rpi.edu/academics')),
    checked=chk('rounds', 'english', 'costs', 'aid', 'merit'),
    unconfirmed=chk('fee', 'tests', 'insurance', 'founded', 'stats'),
))
nodesc.append('rensselaer-polytechnic-institute')
annual['rensselaer-polytechnic-institute'] = {'currency': 'USD', 'basis': 'total', 'min': 90076, 'max': 90076}

# ------------------------------------------------------------- Scripps College
S = 'https://www.scrippscollege.edu/admission/apply/international-applicants'
D = 'https://www.scrippscollege.edu/admission/apply/admission-deadlines'
F = 'https://www.scrippscollege.edu/admission/apply/first-year-applicants'
A = 'https://www.scrippscollege.edu/financialaid/information-for-international-students'
T = 'https://www.scrippscollege.edu/financialaid/cost-of-attendance'
records.append(R(
    'scripps-college', 'Scripps College', 'Scripps', 'Claremont', CA, 'liberal-arts', L('Private liberal arts college for women', 'Частный женский колледж свободных искусств'),
    L('A private liberal arts college for women in Claremont, California, one of the Claremont Colleges. Scripps is test-optional. All international first-year applicants are considered automatically for merit scholarships of $15,000 to $30,000 a year; financial assistance for international applicants is limited and awarded only at admission.',
      'Частный женский колледж свободных искусств в Клермонте, штат Калифорния; входит в Claremont Colleges. Тесты SAT/ACT необязательны. Все иностранные абитуриенты первого курса автоматически рассматриваются на стипендии за успехи от $15,000 до $30,000 в год; финансовая помощь иностранным абитуриентам ограничена и назначается только при приёме.'),
    ['economics', 'computer-science', 'psychology', 'biology', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.scrippscollege.edu/', 'admissions': F, 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': S,
     'programs': 'https://www.scrippscollege.edu/departments/', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('ED1', '2026-11-15', D, V, L('Decisions in mid-December.', 'Решения в середине декабря.'), note=NOYEAR),
        rd('ED2', '2027-01-08', D, V, L('Decisions in mid-February.', 'Решения в середине февраля.'), note=NOYEAR),
        rd('RD', '2027-01-08', D, V, dec_by('04-01'), note=NOYEAR),
        rnd(L('Financial aid documents — Early Decision I', 'Документы на финансовую помощь — Early Decision I'), 'aid', '2026-11-15', False, L('All applications and supporting documents must be submitted to IDOC.', 'Все заявки и подтверждающие документы подаются через IDOC.'), A, V, applies=AIDAPP),
        rnd(L('Financial aid documents — Early Decision II and Regular Decision', 'Документы на финансовую помощь — Early Decision II и Regular Decision'), 'aid', '2027-01-31', False, L('All applications and supporting documents must be submitted to IDOC.', 'Все заявки и подтверждающие документы подаются через IDOC.'), A, V, applies=AIDAPP),
    ],
    fee=fee(60, L('A fee waiver can be requested where the fee is a financial burden.', 'Если сбор обременителен, можно попросить об освобождении.'), F, V, waiver=L('On request, where the fee is a financial burden', 'По запросу — если сбор обременителен')),
    documents=docs(COMMON, 'school', L('Two academic teacher recommendations, preferably from the last two years of school', 'Две рекомендации учителей по академическим предметам — желательно за последние два года школы'), 'transcript',
                   L('Official TOEFL, IELTS or Duolingo English Test results', 'Официальные результаты TOEFL, IELTS или Duolingo English Test'), L('Scripps College International Student Financial Form', 'Scripps College International Student Financial Form (финансовая форма)'),
                   L('Certified English translations of all documents', 'Заверенные переводы всех документов на английский')),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED), 'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('The page for international applicants says Scripps strongly recommends an English proficiency score from non-native speakers, while the first-year page says international students whose first language is not English must submit one.', 'На странице для иностранных абитуриентов сказано, что Scripps настоятельно рекомендует тем, для кого английский не родной, прислать балл теста, а на странице для первокурсников — что иностранные студенты, для которых английский не первый язык, обязаны его прислать.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Scripps is test-optional: students are not required to submit the SAT or ACT. The decision can be changed until 4 December (Early Decision I) or 18 January (Early Decision II and Regular Decision).', 'Scripps не требует тестов: SAT и ACT отправлять необязательно. Решение можно изменить до 4 декабря (Early Decision I) или 18 января (Early Decision II и Regular Decision).'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time students in Scripps housing', 'Студентки на полной нагрузке в жилье Scripps'),
                [(TF, 70926, B), (HF, 23848, B), (BOOKS, 800, E), (PERS, 1500, E), (TRANS, {'min': 500, 'max': 1500, 'text': '$500–$1,500'}, E)],
                h_coa(97574, 98574), tt_coa(97574, 94774, 98574), INC_COA, tuition=70926, tuition_label='Tuition and fees', billed=94774, budget=97574, budget_max=98574, budget_text='$97,574–$98,574',
                extras=[{'label': L('Student Health Insurance Plan (SHIP)', 'Студенческая медицинская страховка (SHIP)'), 'amount': 3312, 'required': None,
                         'condition': L('Added to the cost of attendance on request; the 2026–2027 premium was $3,312. The page does not say whether international students must take the plan.', 'Добавляется к стоимости по запросу; взнос за 2026–2027 — $3,312. На странице не сказано, обязаны ли иностранные студентки брать этот план.'), 'year': '2026–2027'}]),
    fullRide=no_full(L('Merit scholarships for international first-year applicants range from $15,000 to $30,000 a year, against tuition and fees of $70,926. Scripps says financial assistance for international applicants is limited.', 'Стипендии за успехи для иностранных абитуриентов первого курса — от $15,000 до $30,000 в год при плате и сборах $70,926. Scripps сообщает, что финансовая помощь иностранным абитуриентам ограничена.')),
    merit=[award(L('Scripps merit scholarships', 'Стипендии Scripps за успехи'), rng(15000, 30000), L('All international first-year applicants, in any application round', 'Все иностранные абитуриенты первого курса — в любом раунде'),
                 L('Renewable for four years; applicants are told at admission. Merit scholarships are for first-year applicants only.', 'Продлеваются на четыре года; о стипендии сообщают при приёме. Стипендии за успехи — только для поступающих на первый курс.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('Scripps College International Student Financial Form', 'Scripps College International Student Financial Form (финансовая форма)'), L('Supporting documents through IDOC', 'Подтверждающие документы через IDOC')],
          'deadlines': L('15 November 2026 for Early Decision I; 31 January 2027 for Early Decision II and Regular Decision.', '15 ноября 2026 для Early Decision I; 31 января 2027 для Early Decision II и Regular Decision.'),
          'note': L('Financial assistance for international applicants is limited and is awarded only at the time of admission.', 'Финансовая помощь иностранным абитуриентам ограничена и назначается только при приёме.')},
    sources=src('Scripps', ('intl', S), ('dates', D), ('fy', F), ('aidintl', A), ('coa 2026–2027', T)),
    checked=chk('rounds', 'fee', 'tests', 'costs', 'aid', 'merit'),
    unconfirmed=chk(L('minimum English test scores', 'минимальные баллы тестов по английскому'), 'needmet', 'insurance', 'founded', 'stats'),
))
nodesc.append('scripps-college')
annual['scripps-college'] = {'currency': 'USD', 'basis': 'total', 'min': 97574, 'max': 98574}

# ---------------------------------------------------------- St. John's College
S = 'https://www.sjc.edu/admissions-and-aid/undergraduate/apply/international-students'
D = 'https://www.sjc.edu/admissions-and-aid/undergraduate/apply'
T = 'https://www.sjc.edu/admissions-and-aid/financial-aid/tuition-costs'
A = 'https://www.sjc.edu/admissions-and-aid/financial-aid/applying-aid/international-students/'
records.append(R(
    'st-johns-college', 'St. John’s College', 'St. John’s College', L('Annapolis', 'Аннаполис'), L('Maryland', 'Мэриленд'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college with two campuses — Annapolis, Maryland, and Santa Fe, New Mexico — where all students follow one Great Books programme. It is a different institution from St. John’s University in New York. There is no application fee, tests are optional, and international applicants are eligible for both need-based aid and merit scholarships.',
      'Частный колледж свободных искусств с двумя кампусами — в Аннаполисе (Мэриленд) и Санта-Фе (Нью-Мексико); все студенты учатся по единой программе Great Books. Это не St. John’s University в Нью-Йорке. Сбора за заявку нет, тесты необязательны; иностранные абитуриенты могут получить и помощь по потребности, и стипендии за успехи.'),
    ['humanities', 'mathematics'],
    {'website': 'https://www.sjc.edu/', 'admissions': D, 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A, 'programs': 'https://www.sjc.edu/academic-programs', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('St. John’s'), COALITION, L('Discussion-Based Application', 'Discussion-Based Application (заявка через обсуждение)')],
    aliases=['St. John\'s College', 'St Johns College', 'St. John’s College Annapolis', 'St. John’s College Santa Fe', 'SJC'],
    programNote=L('St. John’s has no majors: every student follows the same Great Books programme. Applicants choose one campus, Annapolis or Santa Fe, and may change before enrolling if space allows.', 'В St. John’s нет отдельных специальностей: все студенты учатся по единой программе Great Books. Абитуриент выбирает один кампус — Аннаполис или Санта-Фе — и может сменить его до зачисления при наличии мест.'),
    rounds=[
        rd('ED1', '2026-11-01', D, V, L('Decision returned on the first Friday in December.', 'Решение — в первую пятницу декабря.'), note=NOYEAR),
        rd('EA', '2026-11-15', D, V, L('Decision returned on the third Friday in December.', 'Решение — в третью пятницу декабря.'), note=NOYEAR),
        rd('ED2', '2027-01-15', D, V, L('Decision returned on the first Friday in February.', 'Решение — в первую пятницу февраля.'), note=NOYEAR),
        rd('RD', '2027-01-15', D, V, L('Decision returned on the third Friday in February.', 'Решение — в третью пятницу февраля.'), note=NOYEAR),
        rd('ROLL', None, D, V, L('For autumn entry after 15 February; decisions within one month.', 'Для осеннего набора после 15 февраля; решение в течение месяца.'), date=L('After 15 February', 'После 15 февраля')),
    ],
    fee=fee(0, L('St. John’s has no application fee.', 'В St. John’s нет сбора за заявку.'), S, V),
    documents=docs('app', L('Writing supplement and essays', 'Письменное дополнение и эссе'), L('Secondary School Report', 'Secondary School Report (справка школы)'),
                   L('High school transcripts with an explanation of the grading system', 'Школьные выписки с пояснением системы оценок'), L('English test, for students who did not attend an English-speaking high school', 'Тест по английскому — для тех, кто не учился в англоязычной школе')),
    interview=L('Applicants may be invited to an interview as one of the final parts of the application.', 'Абитуриента могут пригласить на собеседование на одном из последних этапов.'),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED), 'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('Students who were not educated in English must submit English proficiency scores.', 'Те, кто учился не на английском, обязаны прислать баллы теста по английскому.'),
             'note': L('PTE is also accepted.', 'Также принимается PTE.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Optional. St. John’s describes a “no harm” policy: scores are used only to support an application and never count against it.', 'По желанию. St. John’s описывает политику «без вреда»: баллы используются только в пользу абитуриента и не могут снизить его шансы.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates on the Annapolis campus', 'Студенты бакалавриата в кампусе Аннаполиса'),
                [(TUIT, 43392, B), (HF, 17164, B), (L('Activity fee', 'Сбор на мероприятия'), 640, B), (L('Other fees (health centre and manuals)', 'Прочие сборы (медпункт и учебные пособия)'), 826, B)],
                L('$62,022 a year in Annapolis; $62,582 in Santa Fe', '$62,022 в год в Аннаполисе; $62,582 в Санта-Фе'),
                L('$62,022 total per year for the Annapolis programme and $62,582 for the Santa Fe programme, as printed', '$62,022 — итог за год для программы в Аннаполисе и $62,582 — для программы в Санта-Фе, как напечатано'),
                L('tuition, food and housing, the activity fee and other fees. Travel and personal costs are extra', 'обучение, питание и жильё, сбор на мероприятия и прочие сборы. Дорога и личные расходы — сверх этого'),
                tuition=43392, billed=62022,
                extras=[{'label': L('Student health insurance (annual premium)', 'Студенческая медицинская страховка (годовой взнос)'), 'amount': 2950, 'required': None,
                         'condition': L('The premium for 2026–27 is $2,950; the page does not say on what terms it is required.', 'Взнос за 2026–27 — $2,950; на странице не сказано, на каких условиях страховка обязательна.'), 'year': '2026–2027'}],
                note=L('Food and housing vary with the room type and food plan. In Santa Fe food and housing are $17,452 and other fees $1,098.', 'Питание и жильё зависят от типа комнаты и плана питания. В Санта-Фе питание и жильё — $17,452, прочие сборы — $1,098.')),
    fullRide=no_full(L('St. John’s offers international students both financial aid and merit scholarships; the pages read give no amounts. The Ahmet Ertegun scholarship, which can reach full tuition depending on need, is for students from Turkey.', 'St. John’s предлагает иностранным студентам и финансовую помощь, и стипендии за успехи; сумм на прочитанных страницах нет. Стипендия Ahmet Ertegun, которая в зависимости от потребности может достигать полной платы за обучение, предназначена студентам из Турции.')),
    merit=[award(L('St. John’s merit scholarships', 'Стипендии St. John’s за успехи'), None, L('All applicants, international students included', 'Все абитуриенты, включая иностранных студентов'), NOAMT, application=AUTO),
           award('Ahmet Ertegun Turkish Scholarship', L('Up to the cost of full tuition, depending on financial need', 'До полной платы за обучение — в зависимости от финансовой потребности'), L('Students from Turkey', 'Студенты из Турции'), None)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': ['CSS Profile'],
          'note': L('Aid packages for international students may include scholarships, grants, loans and campus employment; St. John’s urges applying early.', 'Пакет помощи иностранному студенту может включать стипендии, гранты, кредиты и работу в кампусе; St. John’s советует подавать заранее.')},
    sources=src('St. John’s College', ('intl', S), (L('St. John’s College — undergraduate application and deadlines', 'St. John’s College — подача в бакалавриат и сроки'), D), ('cost 2026–27', T), ('aidintl', A)),
    checked=chk('rounds', 'fee', 'tests', 'costs', 'aid'),
    unconfirmed=chk(L('minimum English test scores', 'минимальные баллы тестов по английскому'), 'awards', 'needmet', 'founded', 'stats'),
))
nodesc.append('st-johns-college')
annual['st-johns-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 62022, 'max': 62582, 'note': L('Annapolis $62,022, Santa Fe $62,582', 'Аннаполис — $62,022, Санта-Фе — $62,582')}

# --------------------------------------------------------- Sweet Briar College
S = 'https://sbc.edu/admissions/apply/international/'
F = 'https://sbc.edu/admissions/apply/first-year/'
T = 'https://sbc.edu/admissions/tuition-scholarship-aid/'
A = 'https://sbc.edu/financial-aid/international-students/'
records.append(R(
    'sweet-briar-college', 'Sweet Briar College', 'Sweet Briar', L('Sweet Briar', 'Суит-Брайар'), L('Virginia', 'Вирджиния'), 'liberal-arts', L('Private liberal arts college for women', 'Частный женский колледж свободных искусств'),
    L('A private liberal arts college for women in Sweet Briar, Virginia. There is no application fee and admission is rolling; the college encourages international applicants to apply by 1 June. International applicants are offered merit scholarships based on their grade point average, and the published cost for 2027–28 is $48,300.',
      'Частный женский колледж свободных искусств в Суит-Брайаре, штат Вирджиния. Сбора за заявку нет, приём идёт без фиксированного дедлайна; иностранным абитуриентам колледж советует подать до 1 июня. Им назначают стипендии за успехи по среднему баллу, опубликованная стоимость на 2027–28 — $48,300.'),
    ['business', 'economics', 'engineering', 'psychology', 'biology', 'mathematics', 'humanities', 'arts', 'education'],
    {'website': 'https://sbc.edu/', 'admissions': F, 'international': S, 'portal': F, 'aid': A, 'scholarships': T, 'programs': 'https://www.sbc.edu/academics/majors-minors/', 'cost': T},
    verified=V, platforms=[OWNAPP('Sweet Briar')],
    rounds=[rd('ROLL', '2027-06-01', S, V, L('Sweet Briar has rolling admission and decides once an application is complete; it encourages international applicants to apply by 1 June, to leave time for the financial and immigration steps.', 'Приём в Sweet Briar идёт непрерывно, решение принимают, когда заявка готова; иностранным абитуриентам советуют подать до 1 июня, чтобы хватило времени на финансовые и иммиграционные шаги.'),
                name=L('Recommended date for international applicants', 'Рекомендуемый срок для иностранных абитуриентов'), note=NOYEAR, applies=INTL)],
    fee=fee(0, L('There is no application fee.', 'Сбора за заявку нет.'), F, V),
    documents=docs(OWNAPP('Sweet Briar'), L('Transcripts of academic work completed to date', 'Выписки об уже пройденном обучении'), 'english',
                   L('College Board International Student Certification of Finances, after admission', 'College Board International Student Certification of Finances — после зачисления')),
    recommendations=L('A recommendation from a counselor, teacher or Sweet Briar alumna is encouraged.', 'Рекомендация консультанта, учителя или выпускницы Sweet Briar желательна.'),
    english={'ielts': eng(6.0, None, atleast('6.0')), 'toefl': toefl(65, None, J(atleast(65), OLDSCALE)), 'duolingo': eng(90, None, atleast(90)),
             'waiver': L('Not needed if English is the first language or after at least four years at an exclusively English-language school.', 'Не нужен, если английский — первый язык, или после не менее четырёх лет в школе с обучением только на английском.'),
             'note': L('Official scores must be sent directly to the college.', 'Официальные баллы нужно направить прямо в колледж.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Students with a high school GPA of 3.0 or higher may apply test-optional.', 'Абитуриенты со школьным GPA 3.0 и выше могут подавать без тестов.'), source=F, verified=V),
    costs=costs('2027–2028', T, V, ONCAMPUS,
                [(TUIT, 29740, B), (HF, 16960, B), (L('Student life fee', 'Сбор на студенческую жизнь'), 680, B), (L('Technology fee', 'Технологический сбор'), 450, B), (L('Health center fee', 'Сбор медицинского центра'), 470, B)],
                h_billed(48300), L('$48,300 total published tuition, housing, food and required fees for 2027–28', '$48,300 — опубликованный итог за обучение, жильё, питание и обязательные сборы на 2027–28'),
                INC_BILLED, tuition=29740, billed=48300),
    fullRide=no_full(L('Sweet Briar offers international applicants merit scholarships based on grade point average; the pages read give no amounts.', 'Sweet Briar назначает иностранным абитуриентам стипендии за успехи по среднему баллу; сумм на прочитанных страницах нет.')),
    merit=[award(L('Sweet Briar merit scholarships', 'Стипендии Sweet Briar за успехи'), None, L('International applicants, on academic performance', 'Иностранные абитуриенты — по успеваемости'), NOAMT, application=AUTO)],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The pages for international students describe merit scholarships only.', 'На страницах для иностранных студентов описаны только стипендии за успехи.')},
    sources=src('Sweet Briar', ('intl', S), ('fy', F), (L('Sweet Briar — tuition, scholarships and aid 2027–28', 'Sweet Briar — плата, стипендии и помощь 2027–28'), T), ('aidintl', A)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs'),
    unconfirmed=chk('awards', 'insurance', 'founded', 'stats'),
))
nodesc.append('sweet-briar-college')
annual['sweet-briar-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 48300, 'max': 48300}

# ---------------------------------------------------- University of Cincinnati
S = 'https://www.admissions.uc.edu/information/international/requirements/freshman.html'
D = 'https://www.admissions.uc.edu/apply/deadlines.html'
T = 'https://www.uc.edu/about/international/admissions/cost.html'
A = 'https://www.admissions.uc.edu/information/international/finance/scholarship.html'
records.append(R(
    'university-of-cincinnati', 'University of Cincinnati', 'Cincinnati', L('Cincinnati', 'Цинциннати'), L('Ohio', 'Огайо'), 'public', 'Public research university',
    L('A public research university in Cincinnati, Ohio, known for co-operative education. SAT and ACT scores are optional. Cincinnati states that it does not offer full-tuition or need-based scholarships to undergraduate international students; its main award for them is $5,000 to $15,000 a year.',
      'Государственный исследовательский университет в Цинциннати, штат Огайо, известный программами co-op. Баллы SAT и ACT необязательны. Университет прямо сообщает, что не даёт иностранным студентам бакалавриата ни стипендий на полную плату за обучение, ни помощи по потребности; основная награда для них — от $5,000 до $15,000 в год.'),
    ['other'],
    {'website': 'https://www.uc.edu/', 'admissions': 'https://www.admissions.uc.edu/', 'international': 'https://www.admissions.uc.edu/information/international.html', 'portal': 'https://www.commonapp.org/',
     'scholarships': A, 'aid': A, 'programs': 'https://www.uc.edu/majors-programs.html', 'cost': T},
    verified=V, aliases=['UC', 'Cincinnati'],
    programNote=L('The list of majors could not be read on this check, so no fields are listed. English minimums differ by college.', 'Список программ при этой проверке прочитать не удалось, поэтому направления не указаны. Минимумы по английскому зависят от колледжа.'),
    rounds=[
        rd('EA', '2026-11-01', D, V, L('Decisions are released on the second Wednesday in December. Early applicants are considered for scholarships, competitive programmes and honors.', 'Решения публикуются во вторую среду декабря. Подавших рано рассматривают на стипендии, конкурсные программы и honors.'), note=NOYEAR),
        rd('ROLL', '2027-03-01', D, V, L('Rolling admission after 1 November; 1 March is the final deadline. Confirmation by 1 May.', 'Приём по мере поступления заявок после 1 ноября; 1 марта — последний срок. Подтверждение до 1 мая.'), note=NOYEAR),
    ],
    documents=docs('app', L('Official school transcripts', 'Официальные школьные выписки'), L('Official English test scores, unless one of the four exemptions applies', 'Официальные баллы теста по английскому — если не действует одно из четырёх исключений')),
    recommendations=L('Optional.', 'По желанию.'),
    english={'ielts': eng(6.5, None, L('College of Arts & Sciences: 6.5 overall, 6.0 in writing and speaking, 5.5 in the other sections. Minimums differ by college.', 'College of Arts & Sciences: общий балл 6.5, письмо и говорение — 6.0, остальные разделы — 5.5. В других колледжах минимумы свои.')),
             'toefl': toefl(79, 4.0, L('College of Arts & Sciences: 79 overall for tests before January 2026 (20 in writing and speaking), or 4.0 overall after it. Minimums differ by college.', 'College of Arts & Sciences: общий балл 79 для тестов до января 2026 (письмо и говорение — 20) либо 4.0 после. В других колледжах минимумы свои.')),
             'duolingo': eng(100, None, L('College of Arts & Sciences: 100 overall, 100 in production and conversation.', 'College of Arts & Sciences: общий балл 100, а также 100 за production и conversation.')),
             'waiver': L('English proficiency is shown with a test score or by meeting one of four exemptions. Scores are valid for up to two years before the start of the term.', 'Владение английским подтверждается баллом теста либо одним из четырёх исключений. Баллы действительны не более двух лет до начала семестра.'),
             'note': L('Cambridge (176), PTE (53), an SAT Evidence-Based Reading and Writing score of 480 or an ACT English score of 19 are also listed for Arts & Sciences.', 'Для Arts & Sciences также указаны Cambridge (176), PTE (53), SAT Evidence-Based Reading and Writing 480 и ACT English 19.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('The requirements for international first-year applicants say the SAT or ACT is optional.', 'В требованиях к иностранным абитуриентам первого курса сказано, что SAT или ACT необязательны.'), source=S, verified=V),
    costs=costs(None, T, V, L('International undergraduates on the Main Campus', 'Иностранные студенты бакалавриата в главном кампусе'),
                [(TF, 30310, B), (L('Living expenses', 'Расходы на жизнь'), 17999, E), (INS, 2521, B)],
                h_coa(50830), L('$50,830 a year on the Main Campus, of which $30,310 is tuition and fees', '$50,830 в год в главном кампусе, из них $30,310 — обучение и сборы'),
                L('tuition and fees, health insurance, and the university’s estimate of living expenses', 'обучение и сборы, медицинскую страховку и оценку университета на расходы на жизнь'),
                tuition=30310, tuition_label='Tuition and fees', billed=32831, budget=50830,
                note=L('The page labels these figures “current academic year” without naming it. Another Cincinnati page still shows 2022–2023 figures ($50,458).', 'Страница называет эти суммы «текущий учебный год», не указывая, какой именно. На другой странице университета всё ещё показаны цифры 2022–2023 ($50,458).')),
    fullRide={'available': False, 'internationalEligible': False, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': L('Cincinnati states that it does not offer full-tuition (“full ride”) or need-based scholarships to undergraduate international students.', 'Cincinnati сообщает, что не даёт иностранным студентам бакалавриата стипендий на полную плату за обучение («full ride») и помощи по потребности.'),
              'quote': 'we do not offer full-tuition ("full ride") or need-based scholarships to undergraduate international students', 'quoteSource': A},
    merit=[award('International Outreach Award', rng(5000, 15000), L('International students on the Uptown (Main) Campus', 'Иностранные студенты главного кампуса (Uptown)'),
                 L('The primary scholarship for international students; the amount depends on several factors and is applied to the out-of-state surcharge.', 'Основная стипендия для иностранных студентов; сумма зависит от ряда условий и идёт в счёт надбавки для приезжих из других штатов.'))],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Cincinnati does not offer need-based scholarships to undergraduate international students.', 'Помощи по потребности иностранным студентам бакалавриата Cincinnati не даёт.')},
    sources=src('Cincinnati', (L('Cincinnati — requirements for international first-year applicants', 'Cincinnati — требования к иностранным абитуриентам первого курса'), S), ('dates', D), (L('Cincinnati — costs for international students', 'Cincinnati — расходы иностранных студентов'), T), ('meritintl', A)),
    checked=chk('rounds', 'english', 'tests', 'aid', 'merit'),
    unconfirmed=chk('fee', L('academic year of the cost figures', 'учебный год, к которому относятся суммы'), 'founded', 'stats', L('list of majors', 'список программ')),
))
annual['university-of-cincinnati'] = {'currency': 'USD', 'basis': 'total', 'min': 50830, 'max': 50830, 'note': L('The page does not name the academic year', 'Учебный год на странице не назван')}

# -------------------------------------------------------- Villanova University
D = 'https://www1.villanova.edu/university/undergraduate-admission/applying-to-villanova/dates-and-deadlines.html'
S = 'https://www1.villanova.edu/university/undergraduate-admission/international-prospective-students.html'
A = 'https://www1.villanova.edu/university/office-of-financial-assistance/financial-aid-process/international-students.html'
T = 'https://www1.villanova.edu/university/office-of-financial-assistance/financial-aid-process/cost-of-attendance.html'
records.append(R(
    'villanova-university', 'Villanova University', 'Villanova', L('Villanova', 'Вилланова'), L('Pennsylvania', 'Пенсильвания'), 'private', 'Private research university',
    L('A private Augustinian Catholic university in Villanova, Pennsylvania. Admission of first-year international students is need-aware. They may apply for merit scholarships and for limited need-based aid; Villanova says not every admissible applicant who asks for aid receives it, and all recipients are expected to contribute.',
      'Частный католический университет августинцев в Вилланове, штат Пенсильвания. При приёме иностранных первокурсников учитывается потребность в помощи. Им доступны стипендии за успехи и ограниченная помощь по потребности; Villanova сообщает, что помощь получают не все, кого можно принять, и что каждый получатель должен вносить собственный вклад.'),
    ['business', 'engineering', 'medicine', 'humanities'],
    {'website': 'https://www1.villanova.edu/', 'admissions': 'https://www1.villanova.edu/university/undergraduate-admission.html', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A,
     'scholarships': 'https://www1.villanova.edu/university/undergraduate-admission/Financial-Assistance-and-scholarship/merit-based-scholarships.html', 'cost': T},
    verified=V,
    programNote=L('The fields listed are the undergraduate colleges named on the Bursar’s page: Arts & Sciences, Engineering, Nursing and the School of Business.', 'Указаны направления колледжей бакалавриата, названных на странице казначейства: Arts & Sciences, Engineering, Nursing и School of Business.'),
    rounds=[
        rd('EA', '2026-11-01', D, V, dec_by('01-20'), REPLY_MAY1, L('Priority filing date for financial assistance: 1 November.', 'Приоритетный срок подачи на финансовую помощь — 1 ноября.'), note=NOYEAR),
        rd('ED1', '2026-11-01', D, V, dec_by('12-01'), L('Deposit within two weeks of admission. Financial assistance deadline: 1 November.', 'Депозит — в течение двух недель после зачисления. Срок подачи на финансовую помощь — 1 ноября.'), note=NOYEAR),
        rd('ED2', '2027-01-15', D, V, dec_by('02-15'), L('Deposit within two weeks of admission. Financial assistance deadline: 15 January.', 'Депозит — в течение двух недель после зачисления. Срок подачи на финансовую помощь — 15 января.'), note=NOYEAR),
        rd('RD', '2027-01-15', D, V, dec_by('04-01'), REPLY_MAY1, L('Priority filing date for financial assistance: 15 January.', 'Приоритетный срок подачи на финансовую помощь — 15 января.'), note=NOYEAR),
    ],
    costs=costs('2026–2027', T, V, L('Full-time undergraduates, traditional day programme', 'Студенты бакалавриата на полной нагрузке, дневная программа'),
                [(TUIT, 72990, B), (L('Student services fee', 'Сбор за студенческие услуги'), 1024, B), (L('Housing (estimate)', 'Жильё (оценка)'), 10314, B), (L('Food and meals (estimate)', 'Питание (оценка)'), 9040, B),
                 (L('Books', 'Книги'), 600, E), (L('Supplies', 'Учебные материалы'), 560, E), (L('Personal', 'Личные расходы'), 1450, E), (TRANS, 850, E), (L('Loan fees', 'Комиссия по кредиту'), 58, E)],
                h_coa(96886), tt_coa(96886, 93368), INC_COA, tuition=72990, billed=93368, budget=96886,
                note=L('Housing and food are estimates; actual charges depend on the room and meal plan. Health insurance is not in the table.', 'Жильё и питание — оценки; фактические суммы зависят от комнаты и плана питания. Страховки в таблице нет.')),
    fullRide=no_full(L('Villanova says many kinds of assistance exist for international students — merit scholarships, need-based grants and private loans — but that funding is limited; the pages read give no amounts.', 'Villanova сообщает, что иностранным студентам доступны разные виды помощи — стипендии за успехи, гранты по потребности и частные кредиты, — но средства ограничены; сумм на прочитанных страницах нет.')),
    merit=[award(L('Villanova merit-based scholarships', 'Стипендии Villanova за успехи'), None, L('First-year international students', 'Иностранные первокурсники'), J(NOAMT, L('Awarded by the Office of Undergraduate Admission. Villanova offers no merit or need-based assistance to international transfer students.', 'Назначаются приёмной комиссией бакалавриата. Переводящимся иностранным студентам Villanova не даёт ни стипендий, ни помощи по потребности.')))],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'deadlines': L('1 November for Early Decision I and Early Action; 15 January for Early Decision II and Regular Decision.', '1 ноября для Early Decision I и Early Action; 15 января для Early Decision II и Regular Decision.'),
          'note': L('Not all academically admissible applicants who apply for aid are awarded it, and every student who receives funds is expected to contribute personally.', 'Помощь получают не все, кого можно принять по академическим показателям, и каждый получатель должен вносить собственный вклад.')},
    sources=src('Villanova', ('dates', D), ('intl', S), ('aidintl', A), ('coa 2026–2027', T), (L('Villanova — Bursar, tuition and fees 2026–2027', 'Villanova — казначейство, плата и сборы 2026–2027'), 'https://www1.villanova.edu/university/financial-affairs/bursar/tuition-and-fees.html')),
    checked=chk('rounds', 'costs', 'aid'),
    unconfirmed=chk('fee', 'english', 'tests', 'awards', 'insurance', 'founded', 'stats', L('list of majors', 'список программ')),
))
nodesc.append('villanova-university')
annual['villanova-university'] = {'currency': 'USD', 'basis': 'total', 'min': 96886, 'max': 96886}

# ---------------------------------------------- Washington & Jefferson College
Q = 'https://www.washjeff.edu/future-students/international-admission/international-student-faq/'
D = 'https://www.washjeff.edu/future-students/apply/admission-deadlines/'
T = 'https://www.washjeff.edu/future-students/tuition-fees/cost-of-attendance/'
SC = 'https://www.washjeff.edu/future-students/scholarships/'
records.append(R(
    'washington-and-jefferson-college', 'Washington & Jefferson College', 'W&J', L('Washington', 'Вашингтон'), L('Pennsylvania', 'Пенсильвания'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Washington, Pennsylvania. International students are not eligible for its merit scholarships; instead every admitted international student receives an international grant — $20,000 on the scholarships page, $17,000 in the FAQ. The college offers no need-based aid to non-US citizens.',
      'Частный колледж свободных искусств в городе Вашингтон, штат Пенсильвания. На стипендии за успехи иностранные студенты претендовать не могут; вместо этого каждый принятый иностранный студент получает международный грант — $20,000 по странице стипендий и $17,000 по разделу вопросов. Помощи по потребности негражданам США колледж не даёт.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.washjeff.edu/', 'admissions': 'https://www.washjeff.edu/future-students/apply/admission-deadlines/', 'international': 'https://www.washjeff.edu/future-students/international-admission/',
     'portal': 'https://www.commonapp.org/', 'scholarships': SC, 'aid': SC, 'programs': 'https://www.washjeff.edu/academics/majors-and-minors/', 'cost': T},
    verified=V, platforms=[OWNAPP('W&J'), COMMON], aliases=['W&J', 'Washington and Jefferson College', 'Wash Jeff'],
    rounds=[
        rd('ED', '2026-12-15', D, V, dec_on('12-21'), note=NOYEAR),
        rd('RD', '2027-04-01', D, V, L('A priority application date; National College Decision Day is 1 May.', 'Приоритетный срок подачи; общий день ответа — 1 мая.'), note=NOYEAR),
    ],
    documents=docs(L('W&J Application or Common App', 'Заявка W&J или Common App'), L('Official documents and credentials, translated', 'Официальные документы об образовании с переводом'), 'english'),
    english={'ielts': eng(None, 6.5, L('No minimum; W&J generally looks for 6.5 or higher.', 'Минимума нет; W&J обычно ожидает 6.5 и выше.')),
             'toefl': toefl(85, None, J(L('No minimum; W&J typically looks for 85 on the internet-based test.', 'Минимума нет; W&J обычно ожидает 85 по интернет-версии.'), OLDSCALE), kind='recommended'),
             'waiver': L('The English test may be waived with an SAT critical reading score above 600.', 'От теста по английскому могут освободить при балле SAT critical reading выше 600.'),
             'note': None, 'detailsSource': Q, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Undergraduates in a standard double room with the 19-meal plan', 'Студенты бакалавриата в стандартной двухместной комнате с планом на 19 приёмов пищи'),
                [(TUIT, 30314, B), (FEES, 1118, B), (HOUS, 9090, B), (FOOD, 6516, B)],
                h_billed(47038), L('$47,038 in direct costs that appear on the bill; indirect costs were not read on this check', '$47,038 — прямые расходы, которые попадают в счёт; косвенные расходы при этой проверке не прочитаны'),
                INC_BILLED, tuition=30314, billed=47038,
                note=L('With the international grant ($17,000 or $20,000, depending on the page) the billed amount left to pay is $27,038 to $30,038 a year (calculated by UniPath).', 'С учётом международного гранта ($17,000 или $20,000 — в зависимости от страницы) к оплате по счёту остаётся от $27,038 до $30,038 в год (рассчитано UniPath).')),
    fullRide=no_full(L('W&J says international students are not eligible for merit scholarships and that it offers no need-based aid to non-US citizens. Its full-tuition endowed awards are listed for incoming students without a statement that international students qualify.', 'W&J сообщает, что иностранные студенты не могут получить стипендии за успехи и что помощи по потребности негражданам США колледж не даёт. Именные награды на полную плату за обучение перечислены для поступающих без указания, что на них могут претендовать иностранные студенты.')),
    merit=[award(L('W&J international grant', 'Международный грант W&J'), L('$20,000 a year on the scholarships page; $17,000 in the international FAQ', '$20,000 в год по странице стипендий; $17,000 по разделу вопросов для иностранных студентов'), L('All admitted international students', 'Все принятые иностранные студенты'),
                 L('The two W&J pages give different amounts; the scholarships page shows 2027–28 figures.', 'Две страницы W&J дают разные суммы; на странице стипендий показаны цифры на 2027–28.'), application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('W&J states that it does not offer need-based aid to non-US citizens or permanent residents.', 'W&J сообщает, что не даёт помощь по потребности негражданам и непостоянным жителям США.')},
    sources=src('W&J', (L('W&J — international student FAQ', 'W&J — вопросы иностранных студентов'), Q), ('dates', D), ('coa 2026–2027', T), ('merit', SC)),
    checked=chk('rounds', 'costs', 'aid', L('typical English test scores', 'типичные баллы тестов по английскому')),
    unconfirmed=chk('fee', 'tests', L('amount of the international grant ($17,000 or $20,000)', 'размер международного гранта ($17,000 или $20,000)'), 'insurance', 'founded', 'stats'),
))
nodesc.append('washington-and-jefferson-college')
annual['washington-and-jefferson-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 47038, 'max': 47038}

# ------------------------------------------ Westminster College (Pennsylvania)
S = 'https://www.westminster.edu/admissions/international.cfm'
H = 'https://www.westminster.edu/apply'
T = 'https://www.westminster.edu/admissions/financial-aid/cost.cfm'
SC = 'https://www.westminster.edu/admissions/financial-aid/scholarships.cfm'
AF = 'https://www.westminster.edu/admissions/affordability.cfm'
records.append(R(
    'westminster-college-pennsylvania', 'Westminster College (Pennsylvania)', 'Westminster (PA)', L('New Wilmington', 'Нью-Уилмингтон'), L('Pennsylvania', 'Пенсильвания'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in New Wilmington, Pennsylvania — not the Westminster colleges in Missouri or Utah. International applicants are evaluated for merit scholarships at admission. The college lists two competitive full-tuition scholarships; its pages do not say whether international students can receive them.',
      'Частный колледж свободных искусств в Нью-Уилмингтоне, штат Пенсильвания, — не Westminster в Миссури или Юте. Иностранных абитуриентов рассматривают на стипендии за успехи при приёме. Колледж называет две конкурсные стипендии на полную плату за обучение; могут ли их получить иностранные студенты, на его страницах не сказано.'),
    ['business', 'computer-science', 'engineering', 'psychology', 'biology', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.westminster.edu/', 'admissions': H, 'international': S, 'portal': 'https://admissions.westminster.edu/apply/', 'scholarships': SC, 'aid': 'https://www.westminster.edu/admissions/financial-aid/',
     'programs': 'https://www.westminster.edu/academics', 'cost': T},
    verified=V, aliases=['Westminster College', 'Westminster College PA', 'Westminster College New Wilmington'],
    rounds=[
        rd('ED', '2026-11-01', H, V, L('Eligible for the $2,000 Early Application Grant; $200 enrolment deposit due by 15 January.', 'Даёт право на Early Application Grant $2,000; депозит $200 — до 15 января.'), note=NOYEAR),
        rd('EA', '2026-12-15', H, V, L('Eligible for the $2,000 Early Application Grant; $200 enrolment deposit due by 1 May.', 'Даёт право на Early Application Grant $2,000; депозит $200 — до 1 мая.'), note=NOYEAR),
        rd('FINAL', '2027-06-01', S, V, L('International applicants for the autumn semester; supporting materials by 1 July.', 'Иностранные абитуриенты на осенний семестр; сопроводительные материалы — до 1 июля.'), name=L('International application deadline — autumn semester', 'Срок подачи для иностранных абитуриентов — осенний семестр'), note=NOYEAR, applies=INTL),
    ],
    documents=docs('app', L('Transcripts in English', 'Выписки на английском'), L('Proof of English language proficiency (TOEFL, IELTS or Duolingo)', 'Подтверждение владения английским (TOEFL, IELTS или Duolingo)'), 'passport',
                   L('Two letters of recommendation', 'Два рекомендательных письма'), L('Financial Declaration Form with certified bank statements', 'Financial Declaration Form с заверенными банковскими выписками')),
    english={'ielts': eng(6, None, atleast(6)), 'toefl': toefl(80, None, J(L('80 on the internet-based test.', '80 по интернет-версии.'), OLDSCALE)),
             'duolingo': eng(95, None, L('The page gives “95–100 or higher”.', 'На странице указано «95–100 и выше».')),
             'waiver': None, 'note': None, 'detailsSource': S, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Undergraduates in double occupancy with the resident dining plan', 'Студенты бакалавриата в двухместной комнате с планом питания для проживающих'),
                [(TUIT, 41340, B), (L('Activity fee', 'Сбор на мероприятия'), 800, B), (L('Food and housing (double occupancy, resident dine plan)', 'Питание и жильё (двухместная комната, план для проживающих)'), 14070, B),
                 (L('New student orientation (one-time fee)', 'Ориентация новых студентов (разовый сбор)'), 340, X)],
                h_billed(56210), L('$56,210 total standard charges; $56,550 for new students with the one-time orientation fee', '$56,210 — стандартные платежи; $56,550 для новых студентов с разовым сбором за ориентацию'),
                INC_BILLED, tuition=41340, billed=56210,
                extras=[{'label': L('Medical insurance for international students', 'Медицинская страховка для иностранных студентов'), 'amount': None, 'required': True,
                         'condition': L('All full-time international students must have an approved medical insurance plan; the price depends on visa type, home country and athlete status.', 'У всех иностранных студентов на полной нагрузке должен быть одобренный медицинский полис; цена зависит от типа визы, страны и статуса спортсмена.'), 'year': None}]),
    fullRide=no_full(L('Westminster lists the competitive Lemmon and Presidential full-tuition scholarships and says every accepted student receives at least $22,000 in merit scholarships. Its pages do not state that international students are eligible for the full-tuition awards; they say international applicants are evaluated for merit scholarships at admission.',
                       'Westminster называет конкурсные стипендии Lemmon и Presidential на полную плату за обучение и сообщает, что каждый принятый студент получает не менее $22,000 стипендий за успехи. О том, что иностранные студенты могут получить награды на полную плату, на страницах не сказано; сказано лишь, что их рассматривают на стипендии за успехи при приёме.')),
    merit=[award(L('Westminster merit scholarships', 'Стипендии Westminster за успехи'), L('At least $22,000 a year for every accepted student, as the affordability page states', 'Не менее $22,000 в год каждому принятому студенту — по странице о доступности'), L('International applicants are evaluated at the time of admission', 'Иностранных абитуриентов рассматривают при приёме'), None, application=AUTO),
           award(L('Lemmon Scholarship and Presidential Scholarship', 'Lemmon Scholarship и Presidential Scholarship'), FULLT, L('Competitive; eligibility of international students is not stated', 'Конкурсные; право иностранных студентов не указано'), L('Renewable for four years.', 'Продлеваются на четыре года.'))],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('Financial Declaration Form', 'Financial Declaration Form (финансовая декларация)')],
          'note': L('International applicants must demonstrate the resources to meet their expenses while attending Westminster.', 'Иностранные абитуриенты должны подтвердить наличие средств на расходы во время учёбы в Westminster.')},
    sources=src('Westminster', ('intl', S), ('apply', H), ('cost 2026–2027', T), ('merit', SC), (L('Westminster — affordability', 'Westminster — доступность обучения'), AF)),
    checked=chk('rounds', 'english', 'costs', 'merit'),
    unconfirmed=chk('fee', 'tests', L('eligibility of international students for the full-tuition scholarships', 'право иностранных студентов на стипендии на полную плату за обучение'), L('cost of medical insurance', 'стоимость медицинской страховки'), 'founded', 'stats'),
))
nodesc.append('westminster-college-pennsylvania')
annual['westminster-college-pennsylvania'] = {'currency': 'USD', 'basis': 'billed', 'min': 56210, 'max': 56210}

# --------------------------------------------- Worcester Polytechnic Institute
S = 'https://www.wpi.edu/admissions/undergraduate/apply/international-students'
H = 'https://www.wpi.edu/admissions/undergraduate/apply/how-to'
A = 'https://www.wpi.edu/admissions/tuition-aid/applying-for-aid/international-students'
records.append(R(
    'worcester-polytechnic-institute', 'Worcester Polytechnic Institute', 'WPI', L('Worcester', 'Вустер'), MA, 'private', 'Private research university',
    L('A private technological university in Worcester, Massachusetts. WPI is test-optional and need-aware for international applicants; it says competitive applicants can typically contribute at least $25,000 a year. Up to two WPI International Leadership Awards a year can bring a student’s aid to full tuition and fees.',
      'Частный технологический университет в Вустере, штат Массачусетс. Тесты SAT/ACT необязательны; для иностранных абитуриентов потребность в помощи учитывается при приёме, и WPI сообщает, что конкурентные абитуриенты обычно могут вносить не менее $25,000 в год. До двух наград WPI International Leadership Award в год могут довести помощь до полной платы за обучение и сборов.'),
    ['engineering', 'computer-science', 'business', 'biology', 'mathematics', 'humanities', 'arts'],
    {'website': 'https://www.wpi.edu/', 'admissions': 'https://www.wpi.edu/admissions/undergraduate/apply', 'international': S, 'portal': 'https://www.wpi.edu/apply', 'aid': A,
     'scholarships': 'https://www.wpi.edu/admissions/tuition-aid/types-of-aid/scholarships-grants/wpi-merit', 'programs': 'https://www.wpi.edu/academics/study', 'cost': 'https://www.wpi.edu/admissions/tuition-aid/undergraduate-students-new-to-wpi'},
    verified=V, aliases=['WPI'],
    fee=fee(70, L('Listed in the application checklist.', 'Указан в списке документов для подачи.'), H, V),
    documents=docs('app', L('Official transcripts from high school', 'Официальные школьные выписки'), L('Letter of recommendation from the school counselor', 'Рекомендательное письмо школьного консультанта'), L('Letter of recommendation from a teacher', 'Рекомендательное письмо учителя'), 'english',
                   L('CSS Profile with the application, if applying for aid; otherwise WPI’s Certification of Finances after admission', 'CSS Profile вместе с заявкой — если запрашиваете помощь; иначе Certification of Finances после зачисления')),
    interview=L('InitialView or Vericant interviews are considered as a supplement; they do not replace an English test.', 'Собеседования InitialView и Vericant учитываются как дополнение; тест по английскому они не заменяют.'),
    english={'ielts': eng(None, 7.0, L('Recommended score of 7.0 with no band below 6.5.', 'Рекомендуемый балл 7.0 при разделах не ниже 6.5.')),
             'toefl': toefl(90, 4.5, L('Recommended score of 90 with no sub-score below 20 for tests before 21 January 2026, or 4.5 after it.', 'Рекомендуемый балл 90 при разделах не ниже 20 для тестов до 21 января 2026 либо 4.5 после.'), kind='recommended'),
             'duolingo': eng(None, 125, L('Recommended score of 125.', 'Рекомендуемый балл 125.')),
             'waiver': L('International applicants must submit proof of English proficiency; citizens of an English-speaking country who attended an English-speaking high school for four years may be exempt.', 'Иностранные абитуриенты обязаны подтвердить владение английским; граждане англоязычной страны, четыре года учившиеся в англоязычной школе, могут быть освобождены.'),
             'note': L('PTE is also accepted (recommended 61).', 'Также принимается PTE (рекомендуется 61).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('WPI is a test-optional institution: it is up to the applicant whether to submit test scores.', 'WPI не требует тестов: отправлять баллы или нет, решает абитуриент.'), source=H, verified=V),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit', 'covers': dict(TUITION_ONLY), 'renewable': None, 'name': 'WPI International Leadership Award',
              'competitiveness': L('Up to two awards a year for incoming first-year international students. WPI is need-aware and says competitive applicants can typically contribute at least $25,000 a year.', 'До двух наград в год для поступающих иностранных первокурсников. Потребность в помощи учитывается при приёме; по словам WPI, конкурентные абитуриенты обычно могут вносить не менее $25,000 в год.'),
              'howToApply': L('There is no separate application; applicants who start in January are not eligible.', 'Отдельной заявки нет; поступающие с январского набора претендовать не могут.'),
              'note': L('A secondary scholarship combined with the student’s other merit and need-based awards to cover calculated need, up to a maximum of full tuition and fees. Housing, food and other costs remain payable.', 'Дополнительная стипендия: вместе с другими наградами студента за успехи и по потребности покрывает рассчитанную потребность — не более полной платы за обучение и сборов. Жильё, питание и прочие расходы оплачиваются отдельно.'),
              'quote': 'to cover a student’s calculated need up to a maximum award of full tuition and fees', 'quoteSource': S},
    merit=[award(L('WPI academic merit scholarships', 'Стипендии WPI за академические успехи'), None, L('First-year and transfer applicants, international students included', 'Поступающие на первый курс и переводящиеся, включая иностранных студентов'), NOAMT, application=AUTO)],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'deadlines': L('By the admission deadline, with the application.', 'К сроку подачи заявки — вместе с ней.'),
          'note': L('WPI says its aid should be considered secondary to family, government and other sponsor support.', 'WPI сообщает, что его помощь следует считать дополнением к средствам семьи, государства и других спонсоров.')},
    sources=src('WPI', ('intl', S), ('apply', H), ('aidintl', A), ('programs', 'https://www.wpi.edu/academics/study')),
    checked=chk('fee', 'english', 'tests', 'aid'),
    unconfirmed=chk('rounds', L('tuition and fees', 'плата и сборы'), 'awards', 'insurance', 'founded', 'stats'),
))

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
