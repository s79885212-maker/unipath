# -*- coding: utf-8 -*-
"""United States expansion, batch C, part 3. Every fact below was read on the
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
MINENG = L('minimum English test scores', 'минимальные баллы тестов по английскому')

# ----------------------------------------------------- University of San Diego
D = 'https://www.sandiego.edu/admission-and-aid/undergraduate/apply/'
T = 'https://www.sandiego.edu/torero-hub/tuition-and-fees/undergraduate.php'
P = 'https://www.sandiego.edu/admission-and-aid/undergraduate/apply/test-free.php'
records.append(R(
    'university-of-san-diego', 'University of San Diego', 'USD', L('San Diego', 'Сан-Диего'), CA, 'private', 'Private university',
    L('A private Catholic university in San Diego, California — not the public University of California, San Diego. It is test-free through Fall 2027: standardized tests are not viewed in admission. The pages read give exact dates for Fall 2027 and the 2026–27 charges, but no English minimums or aid terms for international students.',
      'Частный католический университет в Сан-Диего, штат Калифорния, — не государственный University of California, San Diego. До осени 2027 включительно тесты не рассматриваются при приёме вовсе. На прочитанных страницах есть точные даты на осень 2027 и платежи на 2026–27, но нет минимумов по английскому и условий помощи иностранным студентам.'),
    ['other'],
    {'website': 'https://www.sandiego.edu/', 'admissions': D, 'portal': 'https://www.commonapp.org/', 'aid': 'https://www.sandiego.edu/admission-and-aid/undergraduate/tuition-and-financial-aid/', 'cost': T},
    verified=V, aliases=['USD', 'San Diego'],
    programNote=NOFIELDS,
    rounds=[
        rnd(L('Early Action and Early Decision I', 'Early Action и Early Decision I'), 'EA', '2026-11-01', None, L('Early Action is not binding and leaves the decision until 1 May; Early Decision I is binding.', 'Early Action не обязывает, решение можно принять до 1 мая; Early Decision I — обязывающий.'), D, V),
        rd('ED2', '2027-01-05', D, V),
        rd('RD', '2027-01-15', D, V),
    ],
    sat=test('not-used', L('USD is a test-free campus: it pledges not to view an applicant’s standardized tests during admission, and has extended the policy through Fall 2027.', 'USD не рассматривает тесты: университет обязуется не смотреть стандартизированные тесты абитуриента при приёме; политика продлена до осени 2027.'),
             cycle=L('Through Fall 2027', 'До осени 2027 включительно'), source=P, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates living on campus with a meal plan', 'Студенты бакалавриата, живущие в кампусе, с планом питания'),
                [(TUIT, 64100, B), (FEES, 1099, B), (INS, 4158, B), (HOUS, 13450, B), (L('Meal plan', 'План питания'), 5750, B)],
                L('$88,557 in tuition, fees, health insurance, housing and the meal plan', '$88,557 — обучение, сборы, страховка, жильё и план питания'),
                L('The five listed lines add up to $88,557 a year; the page prints a total of $88,397', 'Пять перечисленных строк дают $88,557 в год; на странице напечатан итог $88,397'),
                L('tuition, fees, health insurance, housing and the meal plan. Books, travel and personal costs are extra', 'обучение, сборы, медицинскую страховку, жильё и план питания. Книги, дорога и личные расходы — сверх этого'),
                tuition=64100, billed=88557,
                note=L('The printed total is $160 lower than the sum of the lines above it; the page says the information is accurate as of July 2026 and that all fees are subject to change.', 'Напечатанный итог на $160 меньше суммы строк над ним; на странице сказано, что сведения точны на июль 2026 и что все сборы могут измениться.')),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('USD', (L('USD — undergraduate application dates', 'USD — даты подачи в бакалавриат'), D), ('cost 2026–27', T), (L('USD — test-free policy', 'USD — политика без тестов'), P)),
    checked=chk('rounds', 'tests', 'costs'),
    unconfirmed=chk('fee', 'english', 'aid', 'merit', 'founded', 'stats', MAJORS),
))
nodesc.append('university-of-san-diego')
annual['university-of-san-diego'] = {'currency': 'USD', 'basis': 'billed', 'min': 88557, 'max': 88557}

# ---------------------------------------------------- University of Washington
D = 'https://admit.washington.edu/apply/first-year/'
T = 'https://admit.washington.edu/costs/coa/'
A = 'https://admit.washington.edu/costs/scholarships/'
records.append(R(
    'university-of-washington', 'University of Washington', 'UW', L('Seattle', 'Сиэтл'), L('Washington', 'Вашингтон'), 'public', 'Public research university',
    L('A public research university in Seattle, Washington, founded in 1861. The UW states that it does not provide financial aid or scholarships to undergraduate international students. The first-year application for the autumn quarter is due on 15 November, with notification in the first half of March.',
      'Государственный исследовательский университет в Сиэтле, штат Вашингтон, основан в 1861 году. UW сообщает, что не даёт иностранным студентам бакалавриата ни финансовой помощи, ни стипендий. Заявка на первый курс на осенний квартал подаётся до 15 ноября, решения — в первой половине марта.'),
    ['business', 'computer-science', 'engineering', 'arts', 'law', 'medicine', 'education'],
    {'website': 'https://www.washington.edu/', 'admissions': D, 'aid': A, 'scholarships': A, 'programs': 'https://www.washington.edu/about/academics/', 'cost': T},
    verified=V, founded=1861, aliases=['UW', 'UDub', 'University of Washington Seattle'],
    programNote=L('Only the fields named on the academics page read are listed.', 'Указаны только направления, названные на прочитанной странице об учёбе.'),
    rounds=[rd('RD', '2026-11-15', D, V, L('For the autumn quarter, which begins in late September; notification between 1 and 15 March.', 'На осенний квартал, который начинается в конце сентября; решения — с 1 по 15 марта.'),
               name=L('First-year application deadline — autumn quarter', 'Срок подачи на первый курс — осенний квартал'), note=NOYEAR)],
    costs=costs(None, T, V, L('Non-resident undergraduates living on or off campus', 'Студенты бакалавриата не из штата, живущие в кампусе или вне его'),
                [(L('Non-resident tuition', 'Обучение для приезжих'), 44460, B), (L('Housing & food', 'Жильё и питание'), 18858, E), (L('Books & course supplies', 'Книги и учебные материалы'), 900, E),
                 (L('Personal and miscellaneous', 'Личные и прочие расходы'), 2508, E), (TRANS, 1074, E)],
                h_coa(67800), L('$67,800 non-resident total costs, of which $44,460 is tuition', '$67,800 — итог для приезжих, из них $44,460 — обучение'),
                L('non-resident tuition, plus the university’s estimates for housing and food, books, personal expenses and transportation', 'обучение по ставке для приезжих, а также оценки университета на жильё и питание, книги, личные расходы и транспорт'),
                tuition=44460, billed=44460, budget=67800,
                note=L('The academic year of the table was not read on the page. Health insurance is not listed.', 'Учебный год этой таблицы на странице не прочитан. Страховки в списке нет.')),
    fullRide={'available': False, 'internationalEligible': False, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': L('The UW states that it does not provide financial aid or scholarships to undergraduate international students.', 'UW сообщает, что не даёт иностранным студентам бакалавриата ни финансовой помощи, ни стипендий.'),
              'quote': 'The UW does not provide financial aid or scholarships to undergraduate international students', 'quoteSource': A},
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('No financial aid or scholarships for undergraduate international students.', 'Финансовой помощи и стипендий для иностранных студентов бакалавриата нет.')},
    sources=src('UW', (L('UW — first-year application', 'UW — подача на первый курс'), D), ('coa', T), ('merit', A), ('home', 'https://www.washington.edu/')),
    checked=chk('aid', L('autumn application deadline', 'срок подачи на осень'), L('non-resident cost estimate', 'оценка расходов для приезжих'), 'founded'),
    unconfirmed=chk('fee', 'english', 'tests', L('academic year of the cost figures', 'учебный год, к которому относятся суммы'), 'stats', MAJORS),
))
annual['university-of-washington'] = {'currency': 'USD', 'basis': 'total', 'min': 67800, 'max': 67800, 'note': L('Non-resident estimate; the page does not name the academic year', 'Оценка для студентов не из штата; учебный год на странице не назван')}

# ------------------------------------------------------------- Ursinus College
S = 'https://www.ursinus.edu/admission/applying/international-applicants/'
A = 'https://www.ursinus.edu/admission/applying/international-applicants/costs-and-scholarships/'
T = 'https://www.ursinus.edu/offices/student-accounts/tuition-and-cost/'
SA = 'https://www.ursinus.edu/admission/scholarships-aid/'
records.append(R(
    'ursinus-college', 'Ursinus College', 'Ursinus', L('Collegeville', 'Колледжвилл'), PA, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Collegeville, Pennsylvania, 25 miles from Philadelphia. All qualified admitted international students are eligible for merit awards, and those who want need-based aid complete the college’s International Student Financial Statement. Ursinus says admitted first-year students receive at least $35,000 a year in merit awards.',
      'Частный колледж свободных искусств в Колледжвилле, штат Пенсильвания, в 25 милях от Филадельфии. Все подходящие принятые иностранные студенты могут получить стипендии за успехи, а для помощи по потребности заполняют International Student Financial Statement колледжа. По словам Ursinus, принятые первокурсники получают не менее $35,000 в год стипендий за успехи.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.ursinus.edu/', 'admissions': S, 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': SA, 'programs': 'https://www.ursinus.edu/academics/majors-and-minors/', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('Ursinus')],
    documents=docs(L('Common Application or Ursinus Application', 'Common Application или заявка Ursinus'), 'transcript', L('Official English test score, if the native language or language of instruction is not English', 'Официальный балл теста по английскому — если родной язык или язык обучения не английский'),
                   L('Ursinus College International Student Financial Statement', 'Ursinus College International Student Financial Statement (финансовая справка)')),
    english={'ielts': eng(6.5, None, atleast(6.5)), 'toefl': toefl(80, None, J(atleast(80), OLDSCALE)), 'duolingo': eng(105, None, atleast(105)),
             'waiver': L('Required if the native language or the language of instruction is not English; score reports must be official.', 'Требуется, если родной язык или язык обучения не английский; отчёты о баллах должны быть официальными.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Full-time residential students', 'Студенты на полной нагрузке, живущие в кампусе'),
                [(TUIT, 61500, B), (L('Comprehensive fee', 'Общий сбор'), 750, B), (HOUS, 10404, B), (FOOD, 7524, B)],
                h_billed(80178), L('$80,178 total direct costs for 2026–2027, as printed', '$80,178 — прямые расходы на 2026–2027, как напечатано'), INC_BILLED, tuition=61500, billed=80178,
                note=L('The page for international applicants still gives the 2025–2026 figure of $79,562.', 'На странице для иностранных абитуриентов всё ещё указана сумма 2025–2026 — $79,562.')),
    fullRide=no_full(L('Ursinus says admitted first-year students receive at least $35,000 a year in merit awards, with top scholarships covering full tuition, and that qualified international students are eligible for merit awards and most specialty scholarships. It does not say that the full-tuition scholarships are among those open to international students.',
                       'Ursinus сообщает, что принятые первокурсники получают не менее $35,000 в год, а высшие стипендии покрывают полную плату за обучение, и что иностранные студенты могут претендовать на стипендии за успехи и большинство специальных стипендий. Входят ли стипендии на полную плату в число доступных иностранным студентам, не сказано.')),
    merit=[award(L('Ursinus merit awards', 'Стипендии Ursinus за успехи'), L('At least $35,000 a year for admitted first-year students, as the scholarships page states', 'Не менее $35,000 в год для принятых первокурсников — по странице стипендий'), L('All qualified, admitted international students', 'Все подходящие принятые иностранные студенты'),
                 L('Eligibility for each specialty scholarship is set separately.', 'Право на каждую специальную стипендию определяется отдельно.'), application=AUTO)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('Ursinus College International Student Financial Statement', 'Ursinus College International Student Financial Statement (финансовая справка)')],
          'note': L('Needed to be considered for institutional need-based aid; supporting financial documents are required for the Form I-20.', 'Нужна для рассмотрения на помощь колледжа по потребности; подтверждающие финансовые документы требуются для формы I-20.')},
    sources=src('Ursinus', ('intl', S), (L('Ursinus — costs and financial aid for international applicants', 'Ursinus — стоимость и помощь для иностранных абитуриентов'), A), ('cost 2026–2027', T), ('merit', SA)),
    checked=chk('english', 'costs', 'aid', 'merit'),
    unconfirmed=chk('rounds', 'fee', 'tests', L('eligibility of international students for the full-tuition scholarships', 'право иностранных студентов на стипендии на полную плату за обучение'), 'founded', 'stats'),
))
nodesc.append('ursinus-college')
annual['ursinus-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 80178, 'max': 80178}

# ------------------------------------------------------- Willamette University
S = 'https://www.willamette.edu/admissions/international/college.html'
A = 'https://www.willamette.edu/cost-aid/financial-aid/undergrad/international-scholarships.html'
T = 'https://www.willamette.edu/cost-aid/tuition.html'
H = 'https://www.willamette.edu/admissions/apply/undergrad/index.html'
records.append(R(
    'willamette-university', 'Willamette University', 'Willamette', L('Salem', 'Сейлем'), L('Oregon', 'Орегон'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts university in Salem, Oregon. There is no application fee and tests are optional. Every degree-seeking international student who applies is considered automatically for the International Student Grant of $52,000 a year, renewed at the same amount for four years; Willamette caps its own grants and scholarships at $52,000 a year.',
      'Частный университет свободных искусств в Сейлеме, штат Орегон. Сбора за заявку нет, тесты необязательны. Каждый иностранный студент, поступающий на степень, автоматически рассматривается на International Student Grant — $52,000 в год с продлением в той же сумме на четыре года; собственные гранты и стипендии Willamette ограничены $52,000 в год.'),
    ['business', 'computer-science', 'arts', 'law'],
    {'website': 'https://www.willamette.edu/', 'admissions': H, 'international': S, 'portal': H, 'aid': A, 'scholarships': A, 'programs': 'https://www.willamette.edu/academics/all-programs.html', 'cost': T},
    verified=V,
    programNote=L('Only the fields named on the programmes page read are listed. The record covers the College of Arts & Sciences in Salem, not the Pacific Northwest College of Art in Portland.', 'Указаны только направления, названные на прочитанной странице программ. Запись относится к College of Arts & Sciences в Сейлеме, а не к Pacific Northwest College of Art в Портленде.'),
    rounds=[
        rd('RD', '2027-03-01', S, V, L('Application and all supporting materials for an autumn start; decision by 1 April; enrolment deposit and Financial Guarantee Statement by 1 May.', 'Заявка и все сопроводительные материалы для начала учёбы осенью; решение до 1 апреля; депозит и Financial Guarantee Statement — до 1 мая.'),
           name=L('International application deadline — autumn semester', 'Срок подачи для иностранных абитуриентов — осенний семестр'), applies=INTL,
           note=L('The page prints this date without a year. Willamette’s overview page for international admission gives 1 February and a decision by 1 March for the same intake.', 'На странице дата напечатана без года. На обзорной странице Willamette о приёме иностранных студентов для того же набора указаны 1 февраля и решение до 1 марта.')),
    ],
    fee=fee(0, L('There is no application fee.', 'Сбора за заявку нет.'), H, V),
    documents=docs('app', 'transcript', 'english', L('Copy of the passport photo page', 'Копия страницы паспорта с фотографией'), L('Financial Guarantee Statement, after admission', 'Financial Guarantee Statement — после зачисления')),
    english={'ielts': eng(6.5, None, atleast(6.5)), 'toefl': toefl(83, None, J(L('At least 83 on the internet-based test.', 'Не ниже 83 по интернет-версии.'), OLDSCALE)), 'duolingo': eng(105, None, atleast(105)),
             'waiver': None, 'note': L('PTE is also accepted (60), as is completion of Level 5 at the Pacific International Academy.', 'Также принимаются PTE (60) и окончание Level 5 в Pacific International Academy.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Willamette says standardized test scores are optional.', 'Willamette сообщает, что стандартизированные тесты необязательны.'), source=H, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates living on campus (standard double room, 14-meal plan)', 'Студенты бакалавриата, живущие в кампусе (стандартная двухместная комната, план на 14 приёмов пищи)'),
                [(L('Tuition, two semesters at $28,320', 'Обучение, два семестра по $28,320'), 56640, B), (L('Meals (14-meal plan)', 'Питание (план на 14 приёмов пищи)'), 8540, B), (L('Housing (standard double room)', 'Жильё (стандартная двухместная комната)'), 9190, B),
                 (L('Residence hall fee', 'Сбор общежития'), 150, B), (L('Student activity fee — the remainder of the printed total', 'Сбор на студенческие мероприятия — остаток напечатанного итога'), 292, B),
                 (INS, 4818, E), (BOOKS, 644, E)],
                h_billed(74812), L('$74,812 annual cost for two semesters, as printed; health insurance ($4,818) and books ($644) are listed as indirect costs', '$74,812 — годовая стоимость за два семестра, как напечатано; страховка ($4,818) и книги ($644) указаны как косвенные расходы'),
                INC_BILLED, tuition=56640, billed=74812,
                note=L('With the $52,000 International Student Grant the billed amount left to pay is $22,812 a year (calculated by UniPath); the grant does not rise when tuition, fees, room or board rise.', 'С учётом International Student Grant $52,000 к оплате по счёту остаётся $22,812 в год (рассчитано UniPath); грант не растёт при повышении платы, сборов, жилья или питания.')),
    fullRide=no_full(L('The International Student Grant is $52,000 a year against tuition of $56,640, and international students can receive no more than $52,000 a year in Willamette grants, scholarships and awards.', 'International Student Grant — $52,000 в год при плате за обучение $56,640; больше $52,000 в год грантов, стипендий и наград Willamette иностранный студент получить не может.')),
    merit=[award('International Student Grant', L('$52,000 a year', '$52,000 в год'), L('Degree-seeking international students, on the quality of the admission application', 'Иностранные студенты, поступающие на степень, — по качеству заявки'),
                 L('Awarded at admission and renewed automatically for four years (eight semesters) at the same amount, with a cumulative GPA of at least 2.0 and full-time enrolment.', 'Назначается при приёме и автоматически продлевается на четыре года (восемь семестров) в той же сумме — при общем GPA не ниже 2.0 и полной нагрузке.'), application=AUTO, renewable=True)],
    need={'availableToInternational': None, 'meetsFullNeed': False, 'needBlindInternational': None, 'forms': [],
          'note': L('Willamette’s own funding for an international student is capped at $52,000 a year.', 'Собственное финансирование Willamette для иностранного студента ограничено $52,000 в год.')},
    sources=src('Willamette', (L('Willamette — international admission, College of Arts & Sciences', 'Willamette — приём иностранных студентов, College of Arts & Sciences'), S), ('meritintl', A), ('cost 2026–27', T), ('apply', H)),
    checked=chk('fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk(L('which of the two printed autumn deadlines applies (1 February or 1 March)', 'какой из двух напечатанных осенних сроков действует (1 февраля или 1 марта)'), 'insurance', 'founded', 'stats', MAJORS),
))
nodesc.append('willamette-university')
annual['willamette-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 74812, 'max': 74812}

# ------------------------------------------------------------- Wofford College
S = 'https://www.wofford.edu/admission/apply/international-applicants'
T = 'https://www.wofford.edu/administration/business-office/billing-tuition-and-fees'
records.append(R(
    'wofford-college', 'Wofford College', 'Wofford', L('Spartanburg', 'Спартанберг'), L('South Carolina', 'Южная Каролина'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Spartanburg, South Carolina. The application fee is waived automatically for international applicants, and all applicants are considered for merit scholarships of $15,000 to $30,000 through the Common Application.',
      'Частный колледж свободных искусств в Спартанберге, штат Южная Каролина. Иностранным абитуриентам сбор за заявку автоматически не начисляется; все абитуриенты рассматриваются на стипендии за успехи от $15,000 до $30,000 через Common Application.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.wofford.edu/', 'admissions': S, 'international': S, 'portal': 'https://www.commonapp.org/', 'scholarships': 'https://www.wofford.edu/admission/scholarships', 'aid': 'https://www.wofford.edu/admission/financial-aid',
     'programs': 'https://www.wofford.edu/academics/majors-and-programs', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('ED', '2026-11-01', S, V, L('Admission and merit scholarship notification on 1 December.', 'Решение о приёме и стипендии за успехи — 1 декабря.'), note=NOYEAR, applies=INTL),
        rd('EA', '2026-11-15', S, V, L('Admission and merit scholarship notification on 1 February; financial aid package on 15 February.', 'Решение о приёме и стипендии за успехи — 1 февраля; пакет помощи — 15 февраля.'), note=NOYEAR, applies=INTL),
        rd('RD', '2027-01-15', S, V, L('Admission and merit scholarship notification on 1 March. Scholarship submissions are not taken after the deadlines.', 'Решение о приёме и стипендии за успехи — 1 марта. После сроков заявки на стипендии не принимаются.'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(0, L('The application fee for international applicants is waived automatically; Wofford says its application is always free.', 'Сбор за заявку с иностранных абитуриентов автоматически не берётся; Wofford сообщает, что подача всегда бесплатна.'), S, V, waiver_intl=True),
    documents=docs(L('Common Application with the Wofford member page', 'Common Application со страницей Wofford'), L('School Report form', 'Форма School Report'), L('Official test scores: SAT or ACT for applicants from English-speaking countries, an English test for others', 'Официальные баллы: SAT или ACT — для абитуриентов из англоязычных стран, тест по английскому — для остальных')),
    interview=L('If the minimum English score is not met, a recorded or scored interview may be taken into consideration.', 'Если минимальный балл по английскому не набран, могут учесть записанное или оценённое собеседование.'),
    english={'ielts': eng(7, None, atleast(7)), 'toefl': toefl(90, None, J(atleast(90), OLDSCALE)), 'duolingo': eng(115, None, atleast(115)),
             'waiver': L('Required of all applicants whose native language is not English.', 'Требуется от всех абитуриентов, для которых английский не родной.'), 'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('required-alternatives', L('Applicants from English-speaking countries are required to submit SAT or ACT scores; applicants from non-English-speaking countries submit the TOEFL, IELTS or Duolingo English Test instead.', 'Абитуриенты из англоязычных стран обязаны прислать баллы SAT или ACT; абитуриенты из неанглоязычных стран вместо этого присылают TOEFL, IELTS или Duolingo English Test.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('Students living on campus', 'Студенты, живущие в кампусе'),
                [(L('Tuition and fees, two semesters at $30,290', 'Обучение и сборы, два семестра по $30,290'), 60580, B), (L('Meals and housing, two semesters at $8,772.50', 'Питание и жильё, два семестра по $8,772.50'), 17545, B)],
                h_billed(78125), L('$78,125 for the academic year 2026–2027 for students living on campus, as printed', '$78,125 за 2026–2027 учебный год для живущих в кампусе, как напечатано'), INC_BILLED, tuition=60580, tuition_label='Tuition and fees', billed=78125),
    fullRide=no_full(L('Wofford’s merit-based scholarships for international applicants range from $15,000 to $30,000, against tuition and fees of $60,580.', 'Стипендии Wofford за успехи для иностранных абитуриентов — от $15,000 до $30,000 при плате и сборах $60,580.')),
    merit=[award(L('Wofford merit-based scholarships', 'Стипендии Wofford за успехи'), rng(15000, 30000), L('All applicants who apply through the Common Application', 'Все абитуриенты, подавшие через Common Application'), None, application=AUTO)],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The page for international applicants gives dates when a financial aid package is available but does not describe need-based aid for them.', 'На странице для иностранных абитуриентов указаны даты готовности пакета помощи, но помощь по потребности для них не описана.')},
    sources=src('Wofford', ('intl', S), (L('Wofford — billing, tuition and fees 2026–2027', 'Wofford — счета, плата и сборы 2026–2027'), T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk('aid', 'insurance', 'founded', 'stats'),
))
nodesc.append('wofford-college')
annual['wofford-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 78125, 'max': 78125}

# ----------------------------------------------------------- Xavier University
T = 'https://www.xavier.edu/international-admission/tuition'
A = 'https://www.xavier.edu/international-admission/scholarships/index'
records.append(R(
    'xavier-university', 'Xavier University', 'Xavier', L('Cincinnati', 'Цинциннати'), L('Ohio', 'Огайо'), 'private', 'Private university',
    L('A private Jesuit university in Cincinnati, Ohio — a different institution from Xavier University of Louisiana. Each admitted international student is considered for a merit-based scholarship of $23,000 to $30,000 a year, renewable for four years; the estimated cost for one academic year is $74,530.',
      'Частный иезуитский университет в Цинциннати, штат Огайо, — не Xavier University of Louisiana. Каждый принятый иностранный студент рассматривается на стипендию за успехи от $23,000 до $30,000 в год с продлением на четыре года; оценка расходов за учебный год — $74,530.'),
    ['business', 'economics', 'computer-science', 'mathematics', 'social-sciences', 'humanities'],
    {'website': 'https://www.xavier.edu/', 'admissions': 'https://www.xavier.edu/international-admission/applications-and-requirements/index', 'international': 'https://www.xavier.edu/international-admission/index', 'scholarships': A, 'aid': A, 'cost': T},
    verified=V, aliases=['Xavier University Cincinnati', 'Xavier Ohio'],
    programNote=L('Only the fields named on the pages read are listed; Xavier’s full list of majors was not read.', 'Указаны только направления, названные на прочитанных страницах; полный список программ Xavier не прочитан.'),
    costs=costs(None, T, V, L('International undergraduates, one academic year', 'Иностранные студенты бакалавриата, один учебный год'),
                [(TUIT, 54530, B), (L('Accommodations', 'Проживание'), 15000, E), (L('Health insurance and other expenses', 'Медицинская страховка и прочие расходы'), 5000, E)],
                h_coa(74530), L('$74,530 total estimated cost of attendance for one academic year, of which $54,530 is the first line of the estimate', '$74,530 — оценка полной стоимости за учебный год, из них $54,530 — первая строка оценки'),
                L('tuition, accommodation, health insurance and other expenses, as estimated for international students', 'обучение, проживание, медицинскую страховку и прочие расходы — по оценке для иностранных студентов'),
                tuition=54530, billed=54530, budget=74530,
                note=L('The page calls this an estimate and does not name the academic year; the label of the first line was not fully read and is taken to be tuition.', 'Страница называет это оценкой и не указывает учебный год; подпись первой строки прочитана не полностью и принята за плату за обучение.')),
    fullRide=no_full(L('Xavier’s merit-based scholarship for admitted international students ranges from $23,000 to $30,000 a year, against an estimated $74,530 for the year.', 'Стипендия Xavier за успехи для принятых иностранных студентов — от $23,000 до $30,000 в год при оценке расходов $74,530 за год.')),
    merit=[award(L('Xavier merit-based scholarship', 'Стипендия Xavier за успехи'), rng(23000, 30000), L('Each admitted international student', 'Каждый принятый иностранный студент'),
                 L('Renewable for all four years of undergraduate study; based on academic performance and a holistic review.', 'Продлевается на все четыре года бакалавриата; зависит от успеваемости и комплексной оценки заявки.'), application=AUTO, renewable=True)],
    need={'note': NOINTL},
    sources=src('Xavier', (L('Xavier — tuition for international students', 'Xavier — плата для иностранных студентов'), T), ('meritintl', A)),
    checked=chk('merit', L('estimated cost for international students', 'оценка расходов для иностранных студентов')),
    unconfirmed=chk('rounds', 'fee', 'english', 'tests', L('academic year of the cost estimate', 'учебный год, к которому относится оценка'), 'founded', 'stats', MAJORS),
))
nodesc.append('xavier-university')
annual['xavier-university'] = {'currency': 'USD', 'basis': 'total', 'min': 74530, 'max': 74530, 'note': L('The page does not name the academic year', 'Учебный год на странице не назван')}

# ---------------------------------------------- Xavier University of Louisiana
S = 'https://www.xula.edu/international-ed/applying-undergrad-students.html'
F = 'https://www.xula.edu/admissions/undergraduate-admission/firsttimefreshmen/index.html'
records.append(R(
    'xavier-university-of-louisiana', 'Xavier University of Louisiana', 'XULA', L('New Orleans', 'Новый Орлеан'), L('Louisiana', 'Луизиана'), 'private', L('Private historically Black Catholic university', 'Частный исторически афроамериканский католический университет'),
    L('A private historically Black Catholic university in New Orleans, Louisiana — a different institution from Xavier University in Ohio. Applying is free. Applicants are encouraged to apply by 1 December, the preferred scholarship deadline, and are reviewed automatically for institutional merit awards.',
      'Частный исторически афроамериканский католический университет в Новом Орлеане, штат Луизиана, — не Xavier University в Огайо. Подача бесплатна. Абитуриентам советуют подать до 1 декабря — предпочтительного срока для стипендий; на стипендии университета за успехи заявки рассматриваются автоматически.'),
    ['business', 'biology', 'medicine', 'education'],
    {'website': 'https://www.xula.edu/', 'admissions': F, 'international': S, 'portal': 'https://www.xula.edu/apply/index.html', 'scholarships': 'https://www.xula.edu/financialaid/scholarships/index.html',
     'aid': 'https://www.xula.edu/international-ed/scholarship-and-funding-options.html', 'programs': 'https://www.xula.edu/academics/collegeprogram.html'},
    verified=V, aliases=['XULA', 'Xavier Louisiana'],
    programNote=L('Only the fields named on the programmes page read are listed.', 'Указаны только направления, названные на прочитанной странице программ.'),
    rounds=[
        rnd(L('Preferred scholarship deadline', 'Предпочтительный срок для стипендий'), 'scholarship', '2026-12-01', False, L('Applicants are reviewed automatically for institutional merit-based awards.', 'Заявки автоматически рассматриваются на стипендии университета за успехи.'), S, V, note=NOYEAR),
        rd('PRI', '2027-03-01', S, V, L('The preferred application deadline for autumn enrolment.', 'Предпочтительный срок подачи для осеннего набора.'), name=L('Preferred application deadline', 'Предпочтительный срок подачи'), note=NOYEAR),
    ],
    fee=fee(0, L('Applying is free, so no fee waiver is needed.', 'Подача бесплатна, поэтому освобождение не требуется.'), S, V),
    documents=docs('app', L('Transcripts, with a credential evaluation where required', 'Выписки — при необходимости с оценкой документов об образовании'), L('Letters of recommendation', 'Рекомендательные письма'), 'english', L('Financial documentation, such as bank statements or sponsorship letters', 'Финансовые документы — банковские выписки или письма спонсора')),
    english={'ielts': eng(7.0, None, L('Overall band score of 7.0.', 'Общий балл 7.0.')), 'toefl': toefl(80, None, J(L('80 on the internet-based test, or 550 on the paper-based test.', '80 по интернет-версии либо 550 по бумажной.'), OLDSCALE)),
             'duolingo': eng(105, None, L('The page gives a score “ranging from 105 to 115”.', 'На странице указан балл «от 105 до 115».')),
             'waiver': None, 'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('unknown', L('The page for international applicants says the SAT or ACT “may be required for domestic applicants” and does not finish the statement for international applicants in the passage read.', 'На странице для иностранных абитуриентов сказано, что SAT или ACT «могут требоваться от американских абитуриентов»; для иностранных абитуриентов формулировка в прочитанном фрагменте не закончена.'), source=S, verified=V),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students; the funding page for them describes study-abroad scholarships.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам; на странице финансирования для них описаны стипендии на учёбу за рубежом.')),
    need={'note': NOINTL},
    sources=src('XULA', (L('XULA — applying, international undergraduate students', 'XULA — подача иностранных студентов в бакалавриат'), S), (L('XULA — first-time freshmen', 'XULA — поступающим впервые'), F)),
    checked=chk('fee', 'english', L('preferred deadlines', 'предпочтительные сроки')),
    unconfirmed=chk('tests', L('tuition and fees — the costs page did not load for reading', 'плата и сборы — страница стоимости не открылась для чтения'), 'aid', 'awards', 'founded', 'stats', MAJORS),
))
nodesc.append('xavier-university-of-louisiana')

# ---------------------------------------------------------- Hofstra University
S = 'https://www.hofstra.edu/admission/international-faq.html'
D = 'https://www.hofstra.edu/admission/undergraduate-admission/'
T = 'https://www.hofstra.edu/admission/cost-attendance.html'
A = 'https://www.hofstra.edu/admission/scholarship-opportunities.html'
records.append(R(
    'hofstra-university', 'Hofstra University', 'Hofstra', L('Hempstead', 'Хемпстед'), NY, 'private', 'Private university',
    L('A private university in Hempstead, New York. SAT and ACT scores are not required. International students are considered automatically for academic merit scholarships only: Hofstra states that it offers neither full-ride scholarships nor need-based financial aid to international students.',
      'Частный университет в Хемпстеде, штат Нью-Йорк. Баллы SAT и ACT не требуются. Иностранные студенты автоматически рассматриваются только на академические стипендии за успехи: Hofstra прямо сообщает, что не даёт иностранным студентам ни стипендий на полную стоимость, ни помощи по потребности.'),
    ['other'],
    {'website': 'https://www.hofstra.edu/', 'admissions': D, 'international': 'https://www.hofstra.edu/admission/international.html', 'portal': 'https://www.commonapp.org/', 'scholarships': A, 'aid': A, 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=NOFIELDS,
    rounds=[
        rd('EA1', '2026-11-15', D, V, L('Decision by 15 December.', 'Решение до 15 декабря.'), note=NOYEAR),
        rd('EA2', '2026-12-15', D, V, L('Decision by 15 January.', 'Решение до 15 января.'), note=NOYEAR),
        rd('ROLL', None, D, V, L('Applications are accepted at any time after the early rounds.', 'После ранних раундов заявки принимаются в любое время.'), date=L('Any time', 'В любое время')),
    ],
    fee=fee(None, L('The amount was not read. Hofstra waives undergraduate application fees for applications submitted from 1 to 31 October 2026.', 'Сумма не прочитана. Hofstra не берёт сбор с заявок в бакалавриат, поданных с 1 по 31 октября 2026.'), D, V, waiver=L('Waived for applications submitted 1–31 October 2026', 'Не берётся с заявок, поданных 1–31 октября 2026')),
    documents=docs(COMMON, 'transcript', L('TOEFL or IELTS score', 'Балл TOEFL или IELTS'), L('Bank letter and other documents for the I-20', 'Письмо банка и другие документы для I-20')),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED), 'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Hofstra is test-optional: SAT and ACT scores are not required. Its FAQ for international students says merit scholarships are based primarily on the school record and SAT or ACT score.', 'Hofstra не требует тестов: баллы SAT и ACT необязательны. В разделе вопросов для иностранных студентов сказано, что стипендии за успехи зависят в основном от школьных результатов и балла SAT или ACT.'), source=D, verified=V),
    costs=costs('2025–2026', T, V, L('First-year students in suite-style housing', 'Первокурсники в общежитии блочного типа'),
                [(L('Estimated tuition & fees', 'Обучение и сборы (оценка)'), 59960, B), (L('Estimated room & board (suite-style housing)', 'Жильё и питание (блочное общежитие, оценка)'), 21048, B)],
                h_billed(81008), L('$81,008 estimated total costs, an example based on 2025–2026 rates', '$81,008 — оценка общей стоимости, пример по ставкам 2025–2026'), INC_BILLED, tuition=59960, tuition_label='Tuition and fees', billed=81008, status='previous-cycle',
                note=L('Hofstra presents this as an example based on 2025–2026 rates; no figures for 2026–27 or 2027–28 were read.', 'Hofstra приводит это как пример по ставкам 2025–2026; цифр на 2026–27 или 2027–28 не прочитано.')),
    fullRide={'available': False, 'internationalEligible': False, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': L('Hofstra states that it does not offer full-ride scholarship opportunities or need-based financial aid to international students; they are considered for academic merit scholarships, whose amounts differ from domestic awards and were not read.', 'Hofstra сообщает, что не даёт иностранным студентам ни стипендий на полную стоимость, ни помощи по потребности; их рассматривают на академические стипендии за успехи — их размеры отличаются от стипендий для американских студентов и не прочитаны.'),
              'quote': 'Hofstra does not offer full ride scholarship opportunities nor need-based financial aid to international students', 'quoteSource': A},
    merit=[award(L('Hofstra academic merit scholarships for international students', 'Академические стипендии Hofstra для иностранных студентов'), None, L('International undergraduate applicants, on an overall assessment of the application', 'Иностранные абитуриенты бакалавриата — по общей оценке заявки'), NOAMT, application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Hofstra does not offer need-based financial aid to international students.', 'Помощи по потребности иностранным студентам Hofstra не даёт.')},
    sources=src('Hofstra', (L('Hofstra — FAQ for international students', 'Hofstra — вопросы иностранных студентов'), S), (L('Hofstra — undergraduate admission', 'Hofstra — приём в бакалавриат'), D), (L('Hofstra — cost of attendance', 'Hofstra — стоимость обучения'), T), ('merit', A)),
    checked=chk('rounds', 'tests', 'aid'),
    unconfirmed=chk('fee', MINENG, 'awards', L('costs for 2026–27', 'стоимость на 2026–27'), 'founded', 'stats', MAJORS),
))
annual['hofstra-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 81008, 'max': 81008, 'note': L('Example based on 2025–26 rates', 'Пример по ставкам 2025–26')}

# -------------------------------------------- Rochester Institute of Technology
S = 'https://www.rit.edu/admissions/international'
D = 'https://www.rit.edu/admissions/first-year-application'
T = 'https://www.rit.edu/admissions/tuition-and-fees'
SC = 'https://www.rit.edu/admissions/aid/merit-based-scholarships'
records.append(R(
    'rochester-institute-of-technology', 'Rochester Institute of Technology', 'RIT', L('Rochester', 'Рочестер'), NY, 'private', 'Private research university',
    L('A private technological university in Rochester, New York. International applicants are considered for merit scholarships just by applying; first-year merit scholarships range from $14,000 to $30,000 a year. RIT says it does not typically offer full-cost or full-tuition scholarships to undergraduates.',
      'Частный технологический университет в Рочестере, штат Нью-Йорк. Иностранные абитуриенты рассматриваются на стипендии за успехи уже по факту подачи; стипендии для первокурсников — от $14,000 до $30,000 в год. RIT сообщает, что стипендий на полную стоимость или полную плату за обучение бакалаврам обычно не даёт.'),
    ['other'],
    {'website': 'https://www.rit.edu/', 'admissions': D, 'international': S, 'portal': 'https://www.commonapp.org/', 'scholarships': SC, 'aid': 'https://www.rit.edu/admissions/financial-aid/international-students', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('RIT')], aliases=['RIT'],
    programNote=NOFIELDS,
    rounds=[
        rd('ED1', '2026-11-01', D, V, L('Decisions in mid-December; $500 deposit by 15 January.', 'Решения в середине декабря; депозит $500 до 15 января.'), note=NOYEAR),
        rd('EA', '2026-11-01', D, V, L('Decisions in late January; $500 deposit by 1 May.', 'Решения в конце января; депозит $500 до 1 мая.'), note=NOYEAR),
        rd('ED2', '2027-01-01', D, V, L('Decisions in mid-January; $500 deposit by 15 February.', 'Решения в середине января; депозит $500 до 15 февраля.'), note=NOYEAR),
        rd('RD', '2027-01-15', D, V, L('Decisions in mid-March; $500 deposit by 1 May. Later applications are reviewed if space is available.', 'Решения в середине марта; депозит $500 до 1 мая. Более поздние заявки рассматриваются при наличии мест.'), note=NOYEAR),
    ],
    fee=fee(65, L('Listed in the first-year application checklist.', 'Указан в списке документов для подачи на первый курс.'), D, V),
    documents=docs(L('Common Application or RIT Application', 'Common Application или заявка RIT'), L('Official high school transcript', 'Официальная школьная выписка'), 'english'),
    english={'ielts': eng(6.5, None, L('6.5 for full admission; 6.0 or lower is considered for conditional admission.', '6.5 — для полного зачисления; 6.0 и ниже рассматривается на условное.')),
             'toefl': toefl(79, 4.5, L('79 on the old scale or 4.5 on the new one for full admission; lower scores are considered for conditional admission.', '79 по старой шкале либо 4.5 по новой — для полного зачисления; более низкие баллы рассматриваются на условное.')),
             'duolingo': eng(120, None, L('120 for full admission; 119 or lower is considered for conditional admission.', '120 — для полного зачисления; 119 и ниже рассматривается на условное.')),
             'waiver': None, 'note': L('Also accepted for full admission: LanguageCert Academic 70, PTE Academic 58, Michigan English Test 58.', 'Для полного зачисления также принимаются LanguageCert Academic 70, PTE Academic 58, Michigan English Test 58.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('First-year international applicants are encouraged, not required, to submit SAT or ACT results for scholarship review.', 'Иностранным абитуриентам первого курса рекомендуют, но не обязывают прислать результаты SAT или ACT для рассмотрения на стипендии.'), source='https://www.rit.edu/admissions/international/undergraduate-faqs', verified=V),
    costs=costs('2026–2027', T, V, L('New undergraduate students, domestic and international, in a double room', 'Новые студенты бакалавриата, американские и иностранные, в двухместной комнате'),
                [(L('Tuition (12–18 credit hours)', 'Обучение (12–18 кредитов)'), 63508, B), (L('Student activities fee', 'Сбор на студенческие мероприятия'), 470, B), (L('Student health services fee', 'Сбор за студенческие медицинские услуги'), 630, B),
                 (L('Housing (double room)', 'Жильё (двухместная комната)'), 10090, B), (L('Food (standard meal plan)', 'Питание (стандартный план)'), 7280, B),
                 (L('Books, personal expenses, transportation and loan origination', 'Книги, личные расходы, транспорт и комиссия по кредиту'), 2890, E), (L('Orientation fee (first-year students)', 'Сбор за ориентацию (первокурсники)'), 430, X)],
                h_coa(84868), tt_coa(84868, 81978), INC_COA, tuition=63508, billed=81978, budget=84868,
                note=L('First-year students add a $430 orientation fee. Health insurance is not in the table.', 'Первокурсники дополнительно платят сбор за ориентацию $430. Страховки в таблице нет.')),
    fullRide=no_full(L('RIT says it does not typically offer full-cost or full-tuition scholarships except to doctoral students; first-year merit scholarships range from $14,000 to $30,000 a year.', 'RIT сообщает, что стипендий на полную стоимость или полную плату за обучение обычно не даёт никому, кроме докторантов; стипендии за успехи для первокурсников — от $14,000 до $30,000 в год.')),
    merit=[award(L('RIT merit-based scholarships', 'Стипендии RIT за успехи'), rng(14000, 30000), L('First-year applicants, international students included', 'Поступающие на первый курс, включая иностранных студентов'),
                 L('$56,000 to $120,000 over the length of the degree; applicants are reviewed automatically.', 'От $56,000 до $120,000 за всё время обучения; заявки рассматриваются автоматически.'), application=AUTO, renewable=True)],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The page for international applicants describes scholarship funding based on academic merit.', 'На странице для иностранных абитуриентов описано стипендиальное финансирование за академические успехи.')},
    sources=src('RIT', ('intl', S), (L('RIT — first-year application', 'RIT — подача на первый курс'), D), ('coa 2026–2027', T), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'costs', 'merit'),
    unconfirmed=chk('insurance', 'founded', 'stats', MAJORS),
))
nodesc.append('rochester-institute-of-technology')
annual['rochester-institute-of-technology'] = {'currency': 'USD', 'basis': 'total', 'min': 84868, 'max': 84868}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
