# -*- coding: utf-8 -*-
"""United States expansion, batch B, part 1. Every fact below was read on the
official page named next to it on 12 October 2026."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
MA, CA, VA, IL, IN = 'Massachusetts', 'California', L('Virginia', 'Вирджиния'), L('Illinois', 'Иллинойс'), L('Indiana', 'Индиана')

# -------------------------------------------------------------- Babson College
H = 'https://www.babson.edu/undergraduate/how-to-apply/'
A = 'https://www.babson.edu/undergraduate/tuition-and-financial-aid/international-students/'
T = 'https://www.babson.edu/undergraduate/tuition-and-financial-aid/tuition-and-expenses/'
P = 'https://www.babson.edu/undergraduate/how-to-apply/standardized-testing/'
records.append(R(
    'babson-college', 'Babson College', 'Babson', L('Babson Park', 'Бабсон-Парк'), MA, 'private', L('Private business college', 'Частный колледж бизнеса'),
    L('A private business college in Babson Park (Wellesley), Massachusetts, known for entrepreneurship. Babson is test-optional. International students are considered for merit scholarships with the application; its need-based Global Scholars programme gives four-year full-tuition scholarships, and admission for aid applicants is need-aware.',
      'Частный колледж бизнеса в Бабсон-Парке (Уэллсли), штат Массачусетс, известный программами по предпринимательству. Тесты SAT/ACT необязательны. Иностранные студенты рассматриваются на стипендии за успехи по заявке; программа Global Scholars (по потребности) даёт полную плату за обучение на четыре года, при этом потребность в помощи учитывается при приёме.'),
    ['business', 'economics'],
    {'website': 'https://www.babson.edu/', 'admissions': 'https://www.babson.edu/undergraduate/admission/', 'international': 'https://www.babson.edu/undergraduate/how-to-apply/international-applicants/',
     'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A, 'programs': 'https://www.babson.edu/undergraduate/academics/', 'cost': T},
    verified=V, founded=1919, platforms=[COMMON],
    programNote=L('Babson awards one undergraduate degree, the Bachelor of Science in Business Administration.', 'Babson присуждает одну степень бакалавра — Bachelor of Science in Business Administration.'),
    rounds=[
        rd('ED1', '2026-11-01', H, V, dec_in('mid-12'), L('Deposit due 15 January.', 'Депозит до 15 января.'), note=NOYEAR),
        rd('EA', '2026-11-01', H, V, L('Decisions by mid-January.', 'Решения до середины января.'), REPLY_MAY1, note=NOYEAR),
        rd('ED2', '2027-01-04', H, V, L('Decisions by mid-February; deposit due 1 March.', 'Решения до середины февраля; депозит до 1 марта.'), note=NOYEAR),
        rd('RD', '2027-01-04', H, V, L('Decisions by mid-March.', 'Решения до середины марта.'), REPLY_MAY1, note=NOYEAR),
        rnd(L('CSS Profile for the Global Scholars programme — Early Decision', 'CSS Profile для программы Global Scholars — Early Decision'), 'aid', '2026-11-15', False,
            L('Needed to be considered for the need-based Global Scholars programme.', 'Нужен для рассмотрения на программу Global Scholars (помощь по потребности).'), A, V, note=NOYEAR, applies=AIDAPP),
        rnd(L('CSS Profile for the Global Scholars programme — Regular Decision', 'CSS Profile для программы Global Scholars — Regular Decision'), 'aid', '2027-02-01', False,
            L('Needed to be considered for the need-based Global Scholars programme.', 'Нужен для рассмотрения на программу Global Scholars (помощь по потребности).'), A, V, note=NOYEAR, applies=AIDAPP),
    ],
    fee=fee(75, L('Paid with the Common Application. A fee waiver can be requested from the Office of Undergraduate Admission.', 'Оплачивается вместе с Common Application. Об освобождении от сбора можно попросить приёмную комиссию бакалавриата.'), H, V,
            waiver=L('On request to the Office of Undergraduate Admission', 'По запросу в приёмную комиссию бакалавриата')),
    documents=docs(COMMON, 'transcript', 'school', 'teacher1', L('Common Application personal statement and two Babson supplemental essays', 'Эссе Common Application и два дополнительных эссе Babson'), 'english'),
    english={'ielts': eng(None, None, L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')),
             'toefl': eng(None, None, L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')),
             'duolingo': eng(None, None, L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')),
             'waiver': L('Required from applicants whose native language is not English. Babson offers waivers to students who have shown high proficiency in English.',
                         'Требуется от абитуриентов, для которых английский не родной. Babson освобождает от теста тех, кто показал высокий уровень английского.'),
             'note': L('Cambridge C1 Advanced, C2 Proficiency and C1 Business Higher are also accepted.', 'Также принимаются Cambridge C1 Advanced, C2 Proficiency и C1 Business Higher.'),
             'detailsSource': P, 'detailsVerified': V},
    sat=test('optional', L('Babson has adopted a test-optional policy and says students who send no scores are not penalised; all first-year applicants are reviewed for merit scholarships either way.',
                           'Babson не требует тестов и сообщает, что отсутствие баллов не снижает шансы; на стипендии за успехи рассматриваются все поступающие на первый курс.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(L('Tuition (includes the use of a Babson-issued laptop)', 'Обучение (включая пользование ноутбуком Babson)'), 60288, B),
                 (L('Housing (median)', 'Жильё (медиана)'), 14984, B), (L('Food and meal plan (average)', 'Питание (в среднем)'), 8244, B),
                 (L('Books and supplies (average)', 'Книги и материалы (в среднем)'), 1300, E), (L('Personal (average)', 'Личные расходы (в среднем)'), 2100, E),
                 (L('Federal Direct Loan fees (average)', 'Комиссия по федеральному кредиту (в среднем)'), 50, E)],
                h_coa(86966), tt_coa(86966, 83516), INC_COA, tuition=60288, billed=83516, budget=86966,
                note=L('Health insurance and travel are not in Babson’s table.', 'Медицинской страховки и дороги в таблице Babson нет.')),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based', 'covers': dict(TUITION_ONLY), 'renewable': True,
              'name': 'Global Scholars Program',
              'competitiveness': L('Admission for international applicants who ask for aid is need-aware; Babson says the most highly qualified candidates from different regions are offered admission and the scholarship.',
                                   'Для иностранных абитуриентов, запрашивающих помощь, потребность учитывается при приёме; Babson сообщает, что приём и стипендию получают самые сильные кандидаты из разных регионов.'),
              'howToApply': L('Apply through Early Decision or Regular Decision and submit the CSS Profile by 15 November (Early Decision) or 1 February (Regular Decision).',
                              'Подайте заявку в раунде Early Decision или Regular Decision и отправьте CSS Profile до 15 ноября (Early Decision) или до 1 февраля (Regular Decision).'),
              'note': L('Global Scholars receive four-year, full-tuition scholarships. Those with greater need are also awarded grants, in amounts that vary with need, towards room and board, books, health insurance and travel — these are not guaranteed to every scholar. Canadian applicants are considered for a separate Canadian Scholarship.',
                        'Участники Global Scholars получают полную плату за обучение на четыре года. Тем, у кого потребность выше, дополнительно дают гранты на жильё и питание, книги, страховку и дорогу — их размер зависит от потребности, и получают их не все. Граждане Канады рассматриваются на отдельную Canadian Scholarship.'),
              'quote': 'will receive four-year, full-tuition scholarships', 'quoteSource': A},
    merit=[award('Weissman Scholarship', L('Full tuition plus financial support for scholars', 'Полная плата за обучение и финансовая поддержка'), ALLFY,
                 L('Four years. It has a separate application.', 'Четыре года. Нужна отдельная заявка.'), application=L('Separate application', 'Отдельная заявка')),
           award('Presidential Scholarship', L('Half tuition', 'Половина платы за обучение'), ALLFY,
                 L('Four years, renewable each year with a cumulative GPA of at least 3.0.', 'Четыре года; продлевается ежегодно при общем GPA не ниже 3.0.'), application=AUTO),
           award('Women’s Leadership Scholarship', L('Quarter tuition', 'Четверть платы за обучение'), ALLFY,
                 L('Four years; finalists are invited to campus for an interview.', 'Четыре года; финалистов приглашают на собеседование в кампус.'), application=AUTO)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'deadlines': L('15 November for Early Decision, 1 February for Regular Decision.', '15 ноября для Early Decision, 1 февраля для Regular Decision.'),
          'note': L('Need-based aid for international students is given through the Global Scholars programme and, for Canadians, the Canadian Scholarship. International students do not file the FAFSA and are not eligible for Federal Work-Study.',
                    'Помощь по потребности иностранным студентам даётся через программу Global Scholars, а гражданам Канады — через Canadian Scholarship. Иностранные студенты не подают FAFSA и не участвуют в Federal Work-Study.')},
    sources=src('Babson', ('apply', H), ('aidintl', A), ('cost 2026–2027', T), ('tests', P), ('about', 'https://www.babson.edu/about/babson-at-a-glance/')),
    checked=chk('rounds', 'fee', 'tests', 'costs', 'aid', 'merit', 'founded'),
    unconfirmed=chk(L('minimum English test scores', 'минимальные баллы тестов по английскому'), 'insurance', 'stats'),
))
annual['babson-college'] = {'currency': 'USD', 'basis': 'total', 'min': 86966, 'max': 86966}

# ---------------------------------------------------- Berklee College of Music
S = 'https://college.berklee.edu/admissions/undergraduate/international'
D = 'https://college.berklee.edu/admissions/undergraduate/deadlines'
H = 'https://college.berklee.edu/admissions/undergraduate/how-to-apply'
T = 'https://www.berklee.edu/financial-aid/cost-attendance'
A = 'https://www.berklee.edu/financial-aid-international-student-financial-assistance'
SC = 'https://www.berklee.edu/scholarships'
records.append(R(
    'berklee-college-of-music', 'Berklee College of Music', 'Berklee', 'Boston', MA, 'private', L('Private college of music', 'Частный музыкальный колледж'),
    L('A private college of contemporary music in Boston, Massachusetts. Admission rests on an audition and interview; Berklee is test-blind and asks for no essays. International students are considered for merit scholarships through the audition, but entering international students are not considered for need-based institutional aid.',
      'Частный колледж современной музыки в Бостоне, штат Массачусетс. Приём строится на прослушивании и собеседовании; SAT/ACT не рассматриваются, эссе не требуются. Иностранные студенты рассматриваются на стипендии за успехи по итогам прослушивания, но помощь колледжа по потребности поступающим иностранным студентам не даётся.'),
    ['arts'],
    {'website': 'https://www.berklee.edu/', 'admissions': 'https://college.berklee.edu/admissions/undergraduate', 'international': S,
     'portal': H, 'aid': A, 'scholarships': SC, 'programs': 'https://college.berklee.edu/majors', 'cost': T},
    verified=V, founded=1945, platforms=[OWNAPP('Berklee')],
    rounds=[
        rd('EA', '2026-11-01', D, V, L('Audition and interview from August to January.', 'Прослушивание и собеседование — с августа по январь.'), dec_by('01-31'),
           L('Deposit due 1 May. Applying by 1 November halves the application fee.', 'Депозит до 1 мая. При подаче до 1 ноября сбор за заявку вдвое меньше.'), note=NOYEAR),
        rd('RD', '2027-01-15', D, V, L('Audition and interview from August to March.', 'Прослушивание и собеседование — с августа по март.'), dec_by('03-31'),
           L('Deposit due 1 May.', 'Депозит до 1 мая.'), name=L('Regular Action', 'Regular Action (основная подача)'), note=NOYEAR),
    ],
    fee=fee(150, L('Half price for summer or autumn applications submitted by 1 November.', 'Вдвое меньше для заявок на лето или осень, поданных до 1 ноября.'), H, V),
    documents=docs(OWNAPP('Berklee'), L('Audition and interview', 'Прослушивание и собеседование'), 'transcript',
                   L('Course-by-course credential evaluation, for applicants schooled outside the US and Canada (not needed with an IB diploma)', 'Оценка документов об образовании с перечнем предметов — для учившихся вне США и Канады (не нужна при дипломе IB)'), 'english'),
    essay=L('Berklee does not require essays or personal statements.', 'Berklee не требует эссе и мотивационных писем.'),
    interview=L('An audition and interview are part of every undergraduate application.', 'Прослушивание и собеседование входят в каждую заявку на бакалавриат.'),
    english={'ielts': eng(None, 6.0, L('Recommended minimum for the Bachelor of Music; 7.0 for the BA in Music Industry Leadership and Innovation. IELTS Indicator is not accepted.',
                                       'Рекомендуемый минимум для Bachelor of Music; 7.0 — для BA in Music Industry Leadership and Innovation. IELTS Indicator не принимается.')),
             'toefl': toefl(72, 4, L('Recommended minimum for the Bachelor of Music: 72 before 21 January 2026, 4 after it; 100 and 5 for the BA in Music Industry Leadership and Innovation. TOEFL Essentials, Home Edition and ITP are not accepted.',
                                     'Рекомендуемый минимум для Bachelor of Music: 72 до 21 января 2026 и 4 после; 100 и 5 — для BA in Music Industry Leadership and Innovation. TOEFL Essentials, Home Edition и ITP не принимаются.'), kind='recommended'),
             'duolingo': eng(None, 110, L('Recommended minimum for the Bachelor of Music; 120 for the BA in Music Industry Leadership and Innovation.', 'Рекомендуемый минимум для Bachelor of Music; 120 — для BA in Music Industry Leadership and Innovation.')),
             'waiver': L('Required when the first language is not English. Waived with an IB Diploma (not the Bilingual Diploma) or after two years of high school or two semesters of college taught entirely in English.',
                         'Требуется, если английский не первый язык. Не нужен при дипломе IB (кроме Bilingual Diploma) или после двух лет школы либо двух семестров колледжа с обучением полностью на английском.'),
             'note': L('PTE Academic is also accepted (48 for the Bachelor of Music, 60 for the BA).', 'Также принимается PTE Academic (48 для Bachelor of Music, 60 для BA).'),
             'detailsSource': S, 'detailsVerified': V},
    sat=test('not-used', L('Berklee says it is test-blind and does not require the SAT or ACT for admission.', 'Berklee сообщает, что не рассматривает тесты и не требует SAT или ACT.'), source=H, verified=V),
    costs=costs('2026–2027', T, V, L('Degree students living on campus', 'Студенты программ бакалавриата, живущие в кампусе'),
                [(TUIT, 54020, B), (FEES, 1600, B), (L('On-campus room and board', 'Жильё и питание в кампусе'), 21300, B),
                 (L('Berklee Student Health Insurance Plan (estimate)', 'Студенческая страховка Berklee (оценка)'), 2577, E), (L('Laptop', 'Ноутбук'), 2350, E),
                 (L('Living expenses', 'Расходы на жизнь'), 1460, E), (TRANS, 1180, E), (BOOKS, 1260, E), (L('Federal Direct Loan fees', 'Комиссия по федеральному кредиту'), 70, E)],
                h_coa(85817), tt_coa(85817, 76920), INC_COA_INS, tuition=54020, billed=76920, budget=85817,
                note=L('Tuition and fees are mandatory charges; Berklee lists on-campus room and board and the insurance plan as optional billed charges. The insurance figure is an estimate based on the prior year and can be waived with comparable cover.',
                       'Обучение и сборы — обязательные платежи; жильё с питанием в кампусе и страховку Berklee называет необязательными платежами по счёту. Сумма страховки — оценка по прошлому году; от неё можно отказаться при равноценном полисе.')),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit', 'covers': dict(TUITION_ONLY), 'renewable': True,
              'name': L('Full-tuition scholarships', 'Стипендии на полную плату за обучение'),
              'competitiveness': L('Berklee says the vast majority of its scholarships are partial-tuition and that a limited number of full-tuition awards go to exceptionally qualified applicants.',
                                   'Berklee сообщает, что подавляющее большинство стипендий покрывает часть платы за обучение, а полную плату получает ограниченное число исключительно сильных абитуриентов.'),
              'howToApply': L('No separate application: awards follow from the audition and interview.', 'Отдельной заявки нет: стипендии назначаются по итогам прослушивания и собеседования.'),
              'note': L('Awarded on the strength of the audition and interview and renewed each year for a total of eight semesters. International students are eligible for merit-based scholarships through the admissions and audition process. Housing, food and other costs remain payable.',
                        'Назначаются по итогам прослушивания и собеседования и продлеваются ежегодно, всего на восемь семестров. Иностранные студенты могут получить стипендии за успехи через приём и прослушивание. Жильё, питание и прочие расходы оплачиваются отдельно.'),
              'quote': 'a limited number of full-tuition awards are available to exceptionally qualified applicants', 'quoteSource': SC},
    merit=[award('Presidential Scholarship', L('Tuition, on-campus housing, the meal plan, laptop, software and the comprehensive fee', 'Обучение, жильё в кампусе, питание, ноутбук, программы и общий сбор'),
                 L('A very limited number of the top entering musicians, chosen on the audition and financial need', 'Очень небольшое число лучших поступающих музыкантов — по прослушиванию и финансовой потребности'),
                 L('Eight semesters. Health insurance, travel and books are not included. A FAFSA or CSS Profile must be on file; the page does not say whether international students are considered, and entering international students are not considered for need-based institutional aid.',
                   'Восемь семестров. Страховка, дорога и книги не входят. Нужен поданный FAFSA или CSS Profile; на странице не сказано, рассматриваются ли иностранные студенты, а помощь по потребности поступающим иностранным студентам колледж не даёт.'),
                 application=L('Automatic nomination; no application', 'Автоматическое выдвижение; заявки нет'))],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Entering international students are not considered for need-based institutional aid. After their second semester they can be considered for the Thrive Scholarship, for which Berklee encourages a CSS Profile.',
                    'Поступающие иностранные студенты не рассматриваются на помощь колледжа по потребности. После второго семестра они могут претендовать на Thrive Scholarship — для неё Berklee советует подать CSS Profile.')},
    sources=src('Berklee', ('intl', S), ('dates', D), ('apply', H), ('coa 2026–2027', T), ('aidintl', A), ('merit', SC), ('about', 'https://www.berklee.edu/about')),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid', 'merit', 'founded'),
    unconfirmed=chk('waiver', 'stats', L('eligibility of international students for the Presidential Scholarship', 'право иностранных студентов на Presidential Scholarship')),
))
annual['berklee-college-of-music'] = {'currency': 'USD', 'basis': 'total', 'min': 85817, 'max': 85817}

# ---------------------------------------------------------- Chapman University
F = 'https://www.chapman.edu/admission/undergraduate/how-to-apply/first-year/index.aspx'
Q = 'https://www.chapman.edu/admission/undergraduate/how-to-apply/international-students/faqs.aspx'
IC = 'https://www.chapman.edu/admission/undergraduate/how-to-apply/international-students/tuition-and-costs.aspx'
T = 'https://www.chapman.edu/students/tuition-and-aid/financial-aid/undergraduate/cost-of-attendance.aspx'
P = 'https://www.chapman.edu/admission/undergraduate/how-to-apply/test-optional.aspx'
records.append(R(
    'chapman-university', 'Chapman University', 'Chapman', L('Orange', 'Ориндж'), CA, 'private', 'Private university',
    L('A private university in Orange, California, founded in 1861. Chapman is test-optional and need-aware. International first-year applicants are considered automatically for merit scholarships of up to $42,000 a year, and limited need-based aid of up to $15,000 a year is offered to international applicants.',
      'Частный университет в городе Ориндж, штат Калифорния, основан в 1861 году. Тесты SAT/ACT необязательны; потребность в помощи учитывается при приёме. Иностранные абитуриенты первого курса автоматически рассматриваются на стипендии за успехи до $42,000 в год; помощь по потребности ограничена — до $15,000 в год.'),
    ['business', 'economics', 'arts'],
    {'website': 'https://www.chapman.edu/', 'admissions': 'https://www.chapman.edu/admission/undergraduate/index.aspx',
     'international': 'https://www.chapman.edu/admission/undergraduate/how-to-apply/international-students/index.aspx',
     'portal': 'https://www.commonapp.org/', 'aid': IC, 'scholarships': IC, 'programs': 'https://www.chapman.edu/academics/degrees-and-programs.aspx', 'cost': T},
    verified=V, founded=1861, platforms=[COMMON],
    programNote=L('Only the fields named on the pages read are listed here; Chapman’s full list of majors could not be read.', 'Здесь указаны только направления, названные на прочитанных страницах; полный список направлений Chapman прочитать не удалось.'),
    rounds=[
        rd('EA', '2026-11-01', F, V, L('Decisions are sent from late December for most programmes, then on a rolling basis to the beginning of February.', 'Решения рассылаются с конца декабря для большинства программ, затем по мере готовности до начала февраля.')),
        rd('ED1', '2026-11-01', F, V, dec_in('mid-12')),
        rd('ED2', '2027-01-15', F, V),
        rd('RD', '2027-01-15', F, V, L('The deadline for all programmes.', 'Срок для всех программ.')),
    ],
    fee=fee(70, L('Non-refundable, paid through the Common Application. International students are eligible for a fee waiver if they meet the Common App fee waiver guidelines.',
                  'Невозвратный, оплачивается через Common Application. Иностранные студенты могут получить освобождение, если подходят под правила Common App.'), F, V,
            waiver=L('Common App fee waiver, for those who meet its guidelines', 'Освобождение Common App — для тех, кто подходит под его правила'), waiver_intl=True),
    documents=docs(COMMON, 'transcript', L('Common App School Report', 'Школьная справка Common App'), 'english', L('Creative Supplement, for creative talent majors', 'Creative Supplement — для творческих направлений')),
    english={'ielts': eng(6.5, None, L('With balanced sub-scores.', 'При ровных баллах по разделам.')),
             'toefl': toefl(80, 4.5, L('80 with balanced sub-scores for tests taken on or before 20 January 2026; 4.5 for tests taken after 21 January 2026.', '80 при ровных баллах по разделам — для тестов, сданных до 20 января 2026 включительно; 4.5 — для сданных после 21 января 2026.')),
             'duolingo': eng(120, None, atleast(120)),
             'waiver': L('Applicants in the Cambridge, IB or American-patterned curricula are eligible for a waiver.', 'Абитуриенты, учившиеся по программам Cambridge, IB или по американской системе, могут получить освобождение.'),
             'note': L('SAT English 600 or ACT English 24 also meet the requirement. Chapman does not offer conditional admission for English.', 'Требование также выполняют SAT English 600 или ACT English 24. Условного зачисления по английскому Chapman не предлагает.'),
             'detailsSource': Q, 'detailsVerified': V},
    sat=test('optional', L('Chapman’s undergraduate programmes are test-optional: first-year applicants choose whether their SAT or ACT scores are reviewed.', 'Программы бакалавриата Chapman не требуют тестов: поступающие на первый курс сами решают, рассматривать ли их баллы SAT или ACT.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, L('First-time first-year students living on campus', 'Первокурсники, впервые поступившие и живущие в кампусе'),
                [(TUIT, 69990, B), (FEES, 404, B), (HOUS, 12818, B), (FOOD, 6082, B), (BOOKS, 1600, E), (L('Personal', 'Личные расходы'), 2100, E), (TRANS, 1300, E),
                 (L('Estimated loan fees', 'Комиссия по кредиту (оценка)'), 82, E)],
                h_coa(94376), tt_coa(94376, 89294), INC_COA, tuition=69990, billed=89294, budget=94376,
                extras=[{'label': L('Health insurance (mandatory for international students)', 'Медицинская страховка (обязательна для иностранных студентов)'), 'amount': 2321, 'required': True,
                         'condition': L('Chapman’s cost of attendance does not include health insurance. The page for international students lists it as mandatory at $2,321; the other figures on that page are from an earlier year.',
                                        'В стоимость обучения Chapman страховка не входит. На странице для иностранных студентов она названа обязательной — $2,321; остальные цифры на той странице относятся к более раннему году.'), 'year': None}],
                note=L('Chapman says the cost of attendance is used to work out aid eligibility and may not match the bill exactly.', 'Chapman сообщает, что стоимость обучения используется для расчёта помощи и может не совпадать со счётом.')),
    fullRide=no_full(L('The pages read describe merit scholarships of up to $42,000 a year for international first-year students and need-based aid of up to $15,000 a year; neither reaches full tuition ($69,990 in 2026–27).',
                       'На прочитанных страницах описаны стипендии за успехи до $42,000 в год для иностранных первокурсников и помощь по потребности до $15,000 в год; ни то, ни другое не достигает полной платы за обучение ($69,990 в 2026–27).')),
    merit=[award(L('Chapman merit scholarships', 'Стипендии Chapman за успехи'), upto(42000), INTLFY,
                 L('All admitted students are reviewed automatically. The FAQ for international students gives up to $42,000 a year; the costs page for international students says up to $40,000.',
                   'Все принятые рассматриваются автоматически. В разделе вопросов для иностранных студентов указано до $42,000 в год; на странице стоимости для иностранных студентов — до $40,000.'), application=AUTO)],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'note': L('Chapman offers limited need-based aid of up to $15,000 a year to international applicants and describes itself as a need-aware institution.',
                    'Chapman предлагает иностранным абитуриентам ограниченную помощь по потребности — до $15,000 в год — и называет себя вузом, учитывающим потребность при приёме.')},
    sources=src('Chapman', ('fy', F), (L('Chapman — FAQ for international students', 'Chapman — вопросы иностранных студентов'), Q), (L('Chapman — costs and aid for international students', 'Chapman — стоимость и помощь для иностранных студентов'), IC),
                ('coa 2026–2027', T), ('tests', P), ('about', 'https://www.chapman.edu/about/index.aspx')),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid', 'merit', 'founded'),
    unconfirmed=chk('aiddeadline', 'stats', L('year of the health insurance figure', 'год, к которому относится сумма страховки'), L('full list of majors — the majors page could not be read', 'полный список направлений — страницу направлений прочитать не удалось')),
))
nodesc.append('chapman-university')
annual['chapman-university'] = {'currency': 'USD', 'basis': 'total', 'min': 94376, 'max': 94376}

# -------------------------------------------------------------- William & Mary
D = 'https://www.wm.edu/admission/undergraduateadmission/how-to-apply/datesdeadlines/index.php'
I = 'https://www.wm.edu/admission/undergraduateadmission/how-to-apply/international-applicants/applicationprocess/index.php'
A = 'https://www.wm.edu/admission/undergraduateadmission/how-to-apply/international-applicants/expensesaid/index.php'
P = 'https://www.wm.edu/admission/undergraduateadmission/how-to-apply/international-applicants/standardized-testing/index.php'
T = 'https://www.wm.edu/admission/tuition/index.php'
records.append(R(
    'william-and-mary', 'William & Mary', 'W&M', L('Williamsburg', 'Уильямсберг'), VA, 'public', 'Public research university',
    L('A public research university in Williamsburg, Virginia, chartered in 1693. The SAT and ACT are optional. William & Mary states that it generally has no scholarships or loan funds for undergraduate international students, who must be prepared to finance their education in full.',
      'Государственный исследовательский университет в Уильямсберге, штат Вирджиния; королевская хартия 1693 года. SAT и ACT необязательны. Университет сообщает, что, как правило, не располагает стипендиями и кредитами для иностранных студентов бакалавриата: им нужно быть готовыми полностью оплачивать учёбу.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.wm.edu/', 'admissions': 'https://www.wm.edu/admission/undergraduateadmission/index.php',
     'international': 'https://www.wm.edu/admission/undergraduateadmission/how-to-apply/international-applicants/index.php',
     'portal': 'https://www.commonapp.org/', 'aid': A, 'programs': 'https://www.wm.edu/academics/programs/index.php', 'cost': T},
    verified=V, founded=1693, platforms=[COMMON], aliases=['College of William and Mary', 'College of William & Mary', 'William and Mary'],
    rounds=[
        rd('ED1', '2026-11-01', D, V, L('Decisions in early December.', 'Решения в начале декабря.'), L('Due by 11:59 p.m. in the applicant’s time zone.', 'Срок — 23:59 по времени абитуриента.'), note=NOYEAR),
        rd('ED2', '2027-01-05', D, V, L('Decisions in early February.', 'Решения в начале февраля.'), L('Due by 11:59 p.m. in the applicant’s time zone.', 'Срок — 23:59 по времени абитуриента.'), note=NOYEAR),
        rd('RD', '2027-01-05', D, V, dec_by('04-01'), L('Enrollment deposit by 1 May.', 'Депозит до 1 мая.'), L('Due by 11:59 p.m. in the applicant’s time zone.', 'Срок — 23:59 по времени абитуриента.'), note=NOYEAR),
    ],
    documents=docs(COMMON, L('Secondary School Report with official records from the ninth grade onwards, sent by the school', 'Secondary School Report с официальными оценками начиная с девятого класса — отправляет школа'),
                   L('Official translations of records that are not in English', 'Официальные переводы документов не на английском')),
    recommendations=L('Optional: one letter of recommendation may be submitted, and no more than two.', 'По желанию: можно отправить одно рекомендательное письмо, но не больше двух.'),
    admNotes=[L('International first-year students are accepted for the autumn semester only.', 'Иностранных студентов на первый курс принимают только на осенний семестр.')],
    english={'ielts': eng(None, 7, L('William & Mary says it looks for an overall band of 7 or above on IELTS Academic; no score guarantees admission.', 'William & Mary сообщает, что ожидает общий балл IELTS Academic 7 и выше; никакой балл не гарантирует приёма.')),
             'toefl': toefl(100, 5, L('Generally a minimum of 100 for tests taken on or before 20 January 2026, or 5 for tests taken from 21 January 2026; My Best scores are accepted.', 'Как правило, не ниже 100 для тестов, сданных до 20 января 2026 включительно, или 5 — с 21 января 2026; принимаются результаты My Best.'), kind='recommended'),
             'duolingo': eng(None, None, L('Accepted; the page gives no score.', 'Принимается; балл на странице не указан.')),
             'waiver': L('TOEFL, IELTS or Duolingo scores are strongly recommended, not required, for international applicants and non-native speakers of English.', 'Баллы TOEFL, IELTS или Duolingo настоятельно рекомендуются, но не обязательны для иностранных абитуриентов и тех, для кого английский не родной.'),
             'note': None, 'detailsSource': P, 'detailsVerified': V},
    sat=test('optional', L('William & Mary calls the SAT and ACT a completely optional part of the application; 40% of the Class of 2029 applied without scores.', 'William & Mary называет SAT и ACT полностью необязательной частью заявки; 40% набора 2029 года подали заявки без баллов.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, L('Out-of-state undergraduates living on campus', 'Студенты бакалавриата не из штата, живущие в кампусе'),
                [(TUIT, 46177, B), (FEES, 8072, B), (HOUS, 10512, B), (FOOD, 7134, B), (L('Books & supplies', 'Книги и материалы'), 900, E),
                 (L('Transportation ($1,035 for off-campus students)', 'Транспорт ($1,035 для живущих вне кампуса)'), 785, E), (PERS, 2000, E), (L('Loan fees, if applicable', 'Комиссия по кредиту, если применимо'), 72, E)],
                h_coa(75652), tt_coa(75652, 71895), INC_COA, tuition=46177, billed=71895, budget=75652,
                note=L('William & Mary calls these estimated annual costs for 2026–2027. International students pay the out-of-state rate; health insurance is not in the table.',
                       'William & Mary называет эти суммы оценкой годовых расходов на 2026–2027. Иностранные студенты платят по ставке для жителей других штатов; страховки в таблице нет.')),
    fullRide={'available': False, 'internationalEligible': False, 'basis': None, 'covers': dict(NOCOVER), 'renewable': None, 'competitiveness': None, 'howToApply': None,
              'note': L('William & Mary states that, generally speaking, it does not have scholarships or loan funds available to aid undergraduate international students who are citizens of other countries.',
                        'William & Mary сообщает, что, как правило, не располагает стипендиями и кредитами для иностранных студентов бакалавриата — граждан других стран.'),
              'quote': 'you must be prepared to fully finance your education', 'quoteSource': A},
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The page for international applicants says they must be prepared to finance their education in full. The dates on the deadlines page for the FAFSA and CSS Profile concern applicants who are eligible for aid.',
                    'На странице для иностранных абитуриентов сказано, что они должны быть готовы полностью оплачивать учёбу. Сроки FAFSA и CSS Profile на странице дедлайнов касаются тех, кто имеет право на помощь.')},
    sources=src('William & Mary', ('dates', D), (L('William & Mary — application checklist for international applicants', 'William & Mary — список документов для иностранных абитуриентов'), I), ('aidintl', A), ('tests', P), ('cost 2026–2027', T),
                ('history', 'https://www.wm.edu/about/history/index.php')),
    checked=chk('rounds', 'english', 'tests', 'costs', 'aid', 'founded', 'docs'),
    unconfirmed=chk('fee', 'insurance', 'stats'),
))
annual['william-and-mary'] = {'currency': 'USD', 'basis': 'total', 'min': 75652, 'max': 75652, 'note': L('Out-of-state rate', 'Ставка для жителей других штатов')}

# ----------------------------------------------------------- DePaul University
S = 'https://www.depaul.edu/admission/international-admission/freshman'
D = 'https://www.depaul.edu/admission/undergraduate-admission/deadlines'
T = 'https://www.depaul.edu/tuition-and-aid/undergraduate-tuition-and-fees'
P = 'https://www.depaul.edu/admission/undergraduate-admission/test-optional-faqs'
SC = 'https://www.depaul.edu/tuition-and-aid/scholarships'
records.append(R(
    'depaul-university', 'DePaul University', 'DePaul', 'Chicago', IL, 'private', 'Private university',
    L('A private Catholic university in Chicago, Illinois. DePaul is test-optional for first-year admission. Every international applicant is considered automatically for the merit-based Global DePaul Scholarship of $12,000 to $32,000; the pages read describe no need-based aid for international students.',
      'Частный католический университет в Чикаго, штат Иллинойс. Тесты SAT/ACT для поступления на первый курс необязательны. Каждый иностранный абитуриент автоматически рассматривается на стипендию за успехи Global DePaul Scholarship — от $12,000 до $32,000; помощи по потребности для иностранных студентов на прочитанных страницах нет.'),
    ['business', 'computer-science', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.depaul.edu/', 'admissions': 'https://www.depaul.edu/admission/undergraduate-admission', 'international': S,
     'portal': 'https://www.commonapp.org/', 'scholarships': SC, 'aid': 'https://www.depaul.edu/tuition-and-aid', 'programs': 'https://www.depaul.edu/academics/programs', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('EA', '2026-11-15', S, V, dec_by('12-15'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-02-01', S, V, dec_by('03-15'), L('After 1 February applications are considered if space remains.', 'После 1 февраля заявки рассматриваются при наличии мест.'),
           name=L('Regular Notification', 'Regular Notification (основная подача)'), note=NOYEAR, applies=FYI),
    ],
    admNotes=[L('The School of Music (1 December) and The Theatre School have their own deadlines; the two DePaul pages read give different dates for The Theatre School (15 January and 1 February).',
                'У School of Music (1 декабря) и The Theatre School свои сроки; на двух прочитанных страницах DePaul для The Theatre School указаны разные даты (15 января и 1 февраля).')],
    documents=docs(COMMON, L('Secondary school transcripts and examination results, with English translations', 'Школьные выписки и результаты экзаменов с переводом на английский'), 'english'),
    english={'ielts': eng(6.5, None, L('6.5 on IELTS Academic.', '6.5 по IELTS Academic.')),
             'toefl': toefl(80, 4, L('80 with no subsection below 17, or 4 with no subsection below 3.5 on the scale used from 21 January 2026.', '80 при баллах по разделам не ниже 17 либо 4 при разделах не ниже 3.5 по шкале, действующей с 21 января 2026.')),
             'duolingo': eng(115, None, atleast(115)),
             'waiver': L('Applicants below the minimum may be considered for Conditional Admission.', 'Абитуриентов с баллом ниже минимума могут рассмотреть на условное зачисление.'),
             'note': L('An SAT Evidence-Based Reading and Writing score of at least 540 is also accepted as proof.', 'Подтверждением также считается балл SAT Evidence-Based Reading and Writing не ниже 540.'),
             'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('DePaul lets applicants for first-year admission choose whether to submit ACT or SAT scores.', 'DePaul позволяет поступающим на первый курс самим решать, отправлять ли баллы ACT или SAT.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates admitted in 2026, 12–18 credit hours a term (most colleges)', 'Студенты бакалавриата набора 2026 года, 12–18 кредитов за триместр (большинство колледжей)'),
                [(L('Tuition, three terms at $16,060', 'Обучение, три триместра по $16,060'), 48180, B)],
                h_tuition(48180, 'tuition'), L('$48,180 in tuition for the year; $50,403 for undergraduate Music and Theatre', '$48,180 за обучение в год; $50,403 — для бакалавриата Music и Theatre'),
                L('tuition only. Fees, housing, food, books and health insurance are extra and were not read on this check', 'только обучение. Сборы, жильё, питание, книги и страховка — сверх этого; при этой проверке не прочитаны'),
                tuition=48180,
                note=L('The rate shown is for students admitted in 2026; the rate for the 2027 intake is not published yet.', 'Показана ставка для набора 2026 года; ставка для набора 2027 года ещё не опубликована.')),
    fullRide=no_full(L('The largest award the pages describe for international first-year students is the Global DePaul Scholarship of $12,000 to $32,000, below the yearly tuition of $48,180.',
                       'Крупнейшая награда для иностранных первокурсников на прочитанных страницах — Global DePaul Scholarship, от $12,000 до $32,000, что меньше годовой платы за обучение $48,180.')),
    merit=[award('Global DePaul Scholarship', rng(12000, 32000), L('All international first-year applicants', 'Все иностранные абитуриенты первого курса'),
                 L('Awarded with the admission decision and based on the high school GPA.', 'Назначается вместе с решением о приёме и зависит от школьного GPA.'), application=AUTO)],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The pages read describe only merit scholarships for international first-year students.', 'На прочитанных страницах для иностранных первокурсников описаны только стипендии за успехи.')},
    sources=src('DePaul', (L('DePaul — international freshman admission', 'DePaul — приём иностранных первокурсников'), S), ('dates', D), ('cost 2026–27', T), ('tests', P), ('merit', SC)),
    checked=chk('rounds', 'english', 'tests', L('tuition rate for the 2026 intake', 'ставка платы за обучение для набора 2026 года'), 'merit'),
    unconfirmed=chk('fee', L('fees, housing and food', 'сборы, жильё и питание'), 'insurance', 'founded', 'stats', L('need-based aid for international students', 'помощь по потребности иностранным студентам')),
))
nodesc.append('depaul-university')
annual['depaul-university'] = {'currency': 'USD', 'basis': 'tuition', 'min': 48180, 'max': 48180}

# ----------------------------------------------------------- DePauw University
S = 'https://www.depauw.edu/admission-aid/apply/international-applicants/application-checklist/'
T = 'https://www.depauw.edu/admission-aid/scholarships-aid/tuition-and-fees/'
A = 'https://www.depauw.edu/admission-aid/apply/international-applicants/international-students/scholarships-and-financial-aid-for-international-students/'
SA = 'https://www.depauw.edu/admission-aid/scholarships-aid/'
records.append(R(
    'depauw-university', 'DePauw University', 'DePauw', L('Greencastle', 'Гринкасл'), IN, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts university in Greencastle, Indiana. DePauw charges no application fee and is test-optional. International students are considered automatically for merit scholarships from $20,000 to full tuition, including the full-tuition Rector Scholarship.',
      'Частный университет свободных искусств в Гринкасле, штат Индиана. Сбора за заявку нет, тесты SAT/ACT необязательны. Иностранные студенты автоматически рассматриваются на стипендии за успехи от $20,000 до полной платы за обучение, включая Rector Scholarship на полную плату.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.depauw.edu/', 'admissions': 'https://www.depauw.edu/admission-aid/', 'international': 'https://www.depauw.edu/admission-aid/apply/international-applicants/',
     'portal': 'https://www.commonapp.org/', 'scholarships': A, 'aid': SA, 'programs': 'https://www.depauw.edu/academics/majors-and-minors/', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('DePauw'), COALITION],
    rounds=[
        rd('ED1', '2026-11-01', S, V, L('Materials due 8 November; notified by 15 December; deposit due 15 January.', 'Документы до 8 ноября; решение до 15 декабря; депозит до 15 января.'), note=NOYEAR, applies=INTL),
        rd('EA1', '2026-11-01', S, V, L('Materials due 8 November; notified by 15 December; deposit due 1 May.', 'Документы до 8 ноября; решение до 15 декабря; депозит до 1 мая.'), note=NOYEAR, applies=INTL),
        rd('ED2', '2026-12-15', S, V, L('Materials due 22 December; notified by 15 January; deposit due 15 February.', 'Документы до 22 декабря; решение до 15 января; депозит до 15 февраля.'), note=NOYEAR, applies=INTL),
        rd('EA2', '2026-12-15', S, V, L('Materials due 22 December; notified by 15 January; deposit due 1 May.', 'Документы до 22 декабря; решение до 15 января; депозит до 1 мая.'), note=NOYEAR, applies=INTL),
        rd('RD', '2027-02-01', S, V, L('Materials due 8 February; notified by 1 March; deposit due 1 May.', 'Документы до 8 февраля; решение до 1 марта; депозит до 1 мая.'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(0, L('DePauw does not charge an application fee.', 'DePauw не берёт сбор за заявку.'), S, V),
    documents=docs(L('Common Application, DePauw Application or Coalition Application', 'Common Application, заявка DePauw или Coalition Application'), L('School transcript, sent directly by the school', 'Школьная выписка — отправляет школа'), 'english',
                   L('DePauw University Student Certification of Finances with supporting financial documents (all international applicants)', 'DePauw University Student Certification of Finances с подтверждающими финансовыми документами (все иностранные абитуриенты)')),
    interview=L('Optional. DePauw accepts Vericant and InitialView interviews.', 'По желанию. DePauw принимает собеседования Vericant и InitialView.'),
    english={'ielts': eng(6.5, None, L('IELTS Indicator is also accepted.', 'IELTS Indicator тоже принимается.')),
             'toefl': toefl(85, None, J(L('At least 85 on the internet-based test, with 20 in each section; TOEFL Home Edition and MyBest scores are accepted.', 'Не ниже 85 по интернет-версии и по 20 в каждом разделе; принимаются TOEFL Home Edition и результаты MyBest.'), OLDSCALE)),
             'duolingo': eng(110, None, atleast(110)),
             'waiver': L('Required when English is not the first language; applicants from a published list of countries and regions receive an automatic waiver.', 'Требуется, если английский не первый язык; абитуриенты из опубликованного списка стран и регионов освобождаются автоматически.'),
             'note': L('PTE is also accepted (minimum 57).', 'Также принимается PTE (минимум 57).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('DePauw states that it is test-optional.', 'DePauw сообщает, что тесты необязательны.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 62710, B), (L('Housing and meals', 'Жильё и питание'), 16240, B), (L('Mandatory fees', 'Обязательные сборы'), 1170, B),
                 (L('Books, course materials, supplies and equipment', 'Книги, учебные материалы и оборудование'), 800, E), (TRANS, 1000, E), (PERS, 1700, E), (L('Average loan fees', 'Комиссия по кредиту (в среднем)'), 70, E)],
                L('$80,120 in tuition, housing, meals and fees', '$80,120 — обучение, жильё, питание и сборы'),
                L('$80,120 in total direct expenses; the indirect costs are listed without a combined total', '$80,120 — прямые расходы; косвенные расходы перечислены без общего итога'),
                INC_BILLED, tuition=62710, billed=80120,
                note=L('The introduction of the page calls $80,120 the estimated total cost of attendance, including indirect costs, while its table shows $80,120 as direct costs alone and lists $3,570 of indirect costs separately.',
                       'Во вступлении страницы $80,120 названы полной стоимостью обучения, включая косвенные расходы, а в таблице $80,120 — только прямые расходы, и $3,570 косвенных расходов перечислены отдельно.')),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit', 'covers': dict(TUITION_ONLY), 'renewable': True, 'name': 'Rector Scholarship',
              'competitiveness': L('Awarded only to the most highly qualified students in the applicant pool, typically the top five percent.', 'Назначается только самым сильным абитуриентам — обычно это лучшие пять процентов.'),
              'howToApply': L('No application beyond the application for admission.', 'Кроме заявки на поступление, ничего подавать не нужно.'),
              'note': L('The Rector Scholarship provides a full-tuition scholarship and appears in DePauw’s list of awards available to international students. Merit scholarships are renewable for each year the student is in good standing. Housing, meals and fees ($17,410 in 2026–27) remain payable.',
                        'Rector Scholarship покрывает полную плату за обучение и входит в список наград DePauw, доступных иностранным студентам. Стипендии за успехи продлеваются на каждый год при хорошей успеваемости. Жильё, питание и сборы ($17,410 в 2026–27) оплачиваются отдельно.'),
              'quote': 'the Rector scholarship provides full tuition scholarship', 'quoteSource': A},
    merit=[award(L('DePauw merit scholarships', 'Стипендии DePauw за успехи'), L('$20,000 a year to full tuition', 'От $20,000 в год до полной платы за обучение'), L('All applicants, international students included', 'Все абитуриенты, включая иностранных студентов'),
                 L('Renewable annually while the student is in good standing.', 'Продлеваются ежегодно при хорошей успеваемости.'), application=AUTO),
           award('Bonner Scholarship', L('A need-based award, with limited loans, that meets demonstrated need', 'Помощь по потребности с ограниченной долей кредитов, покрывающая подтверждённую потребность'),
                 L('Twenty scholars a year with high financial need and a record of service; international students show need through the Certification of Finances', 'Двадцать студентов в год с высокой финансовой потребностью и опытом служения обществу; иностранные студенты подтверждают потребность через Certification of Finances'),
                 L('A four-year service programme.', 'Четырёхлетняя программа служения обществу.'))],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None,
          'forms': [L('DePauw University Student Certification of Finances', 'DePauw University Student Certification of Finances')],
          'note': L('DePauw’s pages disagree on the form: the checklist for international applicants says no other form, such as the ISFAA or CSS Profile, is accepted, while the scholarships page says international students seeking need-based aid must complete the CSS Profile. DePauw’s promise to meet full calculated need is stated for the incoming class in general; the pages read do not say that it covers international students.',
                    'Страницы DePauw расходятся в форме: в списке документов для иностранных абитуриентов сказано, что другие формы, такие как ISFAA или CSS Profile, не принимаются, а на странице стипендий — что иностранные студенты, запрашивающие помощь по потребности, должны заполнить CSS Profile. Обещание покрыть всю рассчитанную потребность дано для набора в целом; о том, что оно распространяется на иностранных студентов, на прочитанных страницах не сказано.')},
    sources=src('DePauw', (L('DePauw — application checklist for international applicants', 'DePauw — список документов для иностранных абитуриентов'), S), ('cost 2026–27', T), ('meritintl', A), ('aid', SA)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk(L('which financial aid form international students file', 'какую форму на финансовую помощь подают иностранные студенты'), 'needmet', 'founded', 'insurance', 'stats'),
))
annual['depauw-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 80120, 'max': 80120}

# ---------------------------------------------------------- Dillard University
S = 'https://www.dillard.edu/admissions-aid/admission-requirements/international-students/'
P = 'https://www.dillard.edu/admissions-aid/admission-requirements/test-optional/'
T = 'https://www.dillard.edu/admissions-aid/tuition-costs/'
records.append(R(
    'dillard-university', 'Dillard University', 'Dillard', L('New Orleans', 'Новый Орлеан'), L('Louisiana', 'Луизиана'), 'private', L('Private historically Black university', 'Частный исторически афроамериканский университет'),
    L('A private historically Black university in New Orleans, Louisiana. The pages read state the application fee, the TOEFL minimum and a cost of attendance for 2024–25; they give no application deadlines and say nothing about financial aid for international students.',
      'Частный исторически афроамериканский университет в Новом Орлеане, штат Луизиана. На прочитанных страницах указаны сбор за заявку, минимум TOEFL и стоимость обучения за 2024–25; сроков подачи там нет, о финансовой помощи иностранным студентам ничего не сказано.'),
    ['business', 'computer-science', 'psychology', 'biology', 'social-sciences', 'humanities', 'arts', 'medicine'],
    {'website': 'https://www.dillard.edu/', 'admissions': 'https://www.dillard.edu/admissions-aid/admission-requirements/', 'international': S,
     'portal': 'https://www.dillard.edu/admissions-aid/apply-now/', 'aid': 'https://www.dillard.edu/financial-aid/apply-for-financial-aid/', 'programs': 'https://www.dillard.edu/academic-programs/', 'cost': T},
    verified=V, platforms=[COMMON, 'Common Black College Application', L('Dillard online application', 'Онлайн-заявка Dillard')],
    fee=fee(60, L('Paid by check or money order. Fee waivers are accepted from NACAC and the College Board, or with a financial hardship letter.', 'Оплачивается чеком или денежным переводом. Принимаются освобождения NACAC и College Board, а также письмо о тяжёлом финансовом положении.'), S, V,
            waiver=L('NACAC or College Board waiver, or a financial hardship letter', 'Освобождение NACAC или College Board либо письмо о тяжёлом финансовом положении')),
    documents=docs('app', L('Course-by-course evaluation of academic credentials earned outside the United States', 'Оценка документов об образовании, полученных вне США, с перечнем предметов'), L('TOEFL score, where English is not the native language', 'Балл TOEFL — если английский не родной язык')),
    english={'toefl': toefl(79, None, J(L('At least 79 on the internet-based test or 550 on the paper-based test, for applicants from countries where English is not the native language.', 'Не ниже 79 по интернет-версии или 550 по бумажной — для абитуриентов из стран, где английский не родной язык.'), OLDSCALE)),
             'note': L('The page names only the TOEFL.', 'На странице назван только TOEFL.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('unknown', L('Dillard’s pages disagree: the requirements for international students ask for ACT or SAT results, while the test-optional page says all first-year applicants may decide whether to submit scores.',
                          'Страницы Dillard расходятся: в требованиях к иностранным студентам указаны результаты ACT или SAT, а на странице о необязательных тестах сказано, что все поступающие на первый курс сами решают, отправлять ли баллы.'), source=S, verified=V),
    costs=costs('2024–2025', T, V, ONCAMPUS,
                [(TUIT, 20118, B), (L('Room & board', 'Жильё и питание'), 13192, B), (L('Mandatory fees', 'Обязательные сборы'), 3800, B),
                 (L('Books and supplies', 'Книги и материалы'), 1386, E), (TRANS, 3424, E), (L('Personal and miscellaneous', 'Личные и прочие расходы'), 2500, E)],
                h_coa(44420), tt_coa(44420, 37110), INC_COA, tuition=20118, billed=37110, budget=44420, status='previous-cycle',
                note=L('The cost of attendance page still shows 2024–25. Another Dillard page gives 2025–26 tuition of $10,059 and a mandatory fee of $1,900 per semester; no figures for 2026–27 or 2027–28 were found.',
                       'На странице стоимости всё ещё показан 2024–25. На другой странице Dillard указаны плата за обучение $10,059 и обязательный сбор $1,900 за семестр на 2025–26; цифр на 2026–27 или 2027–28 не найдено.')),
    fullRide=no_full(L('The pages read say nothing about scholarships or financial aid for international students.', 'На прочитанных страницах о стипендиях и финансовой помощи иностранным студентам ничего не сказано.')),
    need={'note': L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')},
    sources=src('Dillard', (L('Dillard — requirements for international students', 'Dillard — требования к иностранным студентам'), S), ('tests', P), ('coa 2024–25', T)),
    checked=chk('fee', L('TOEFL minimum', 'минимум TOEFL'), L('cost of attendance 2024–25', 'стоимость обучения 2024–25')),
    unconfirmed=chk('rounds', 'tests', 'aid', L('costs for 2026–27', 'стоимость на 2026–27'), 'founded', 'stats'),
))
nodesc.append('dillard-university')

# ------------------------------------------------------------- Drew University
S = 'https://drew.edu/admissions-and-aid/undergraduate-admissions/international-admissions/'
P = 'https://drew.edu/admissions-and-aid/undergraduate-admissions/test-optional-policy/'
IB = 'https://drew.edu/admissions-and-aid/undergraduate-admissions/international-baccalaureate-students/'
records.append(R(
    'drew-university', 'Drew University', 'Drew', L('Madison', 'Мэдисон'), L('New Jersey', 'Нью-Джерси'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts university in Madison, New Jersey, established in 1867. Drew is test-optional. International students are considered automatically for merit scholarships of $10,000 to $25,000 a year, and limited need-based funds are available to those who submit the International Student Financial Aid Application.',
      'Частный университет свободных искусств в Мэдисоне, штат Нью-Джерси, основан в 1867 году. Тесты SAT/ACT необязательны. Иностранные студенты автоматически рассматриваются на стипендии за успехи от $10,000 до $25,000 в год; ограниченная помощь по потребности доступна тем, кто подал International Student Financial Aid Application.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://drew.edu/', 'admissions': 'https://drew.edu/admissions-and-aid/undergraduate-admissions/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'aid': S, 'scholarships': S, 'programs': 'https://drew.edu/programs-of-study/', 'cost': 'https://drew.edu/admissions-and-aid/undergraduate-admissions/tuition-fees/'},
    verified=V, founded=1867, platforms=[COMMON],
    rounds=[
        rd('ED', '2026-11-01', S, V, note=NOYEAR),
        rd('EA', '2026-12-01', S, V, note=NOYEAR),
        rd('ED2', '2027-01-15', S, V, note=NOYEAR),
        rd('RD', '2027-02-01', S, V, L('After 1 February applications are accepted while space is available.', 'После 1 февраля заявки принимаются при наличии мест.'), note=NOYEAR),
    ],
    documents=docs(COMMON, L('Non-refundable application fee', 'Невозвратный сбор за заявку'), L('Letter of recommendation', 'Рекомендательное письмо'), L('Secondary school transcript', 'Школьная выписка'),
                   L('English proficiency exam results (TOEFL, IELTS or Duolingo)', 'Результаты теста по английскому (TOEFL, IELTS или Duolingo)'), L('Certification of Finances', 'Certification of Finances (подтверждение финансов)')),
    english={'ielts': eng(None, None, L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')),
             'toefl': eng(None, None, L('TOEFL iBT or Essentials accepted; the page gives no minimum score.', 'Принимаются TOEFL iBT и Essentials; минимального балла на странице нет.')),
             'duolingo': eng(None, None, L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')),
             'waiver': L('Expected from applicants whose first language is not English. It may be waived case by case on SAT or ACT scores or previous study in an English-speaking country.',
                         'Ожидается от абитуриентов, для которых английский не первый язык. Может быть отменён индивидуально — по баллам SAT или ACT либо после учёбы в англоязычной стране.'),
             'note': L('PTE Academic and the English GaoKao are also accepted. Applicants who need more English preparation are pointed to the Tilghman International Center at Drew.', 'Также принимаются PTE Academic и английский язык GaoKao. Тем, кому нужна дополнительная подготовка по английскому, предлагают Tilghman International Center при Drew.'),
             'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', OPTIONAL('Drew'), source=P, verified=V),
    fullRide=no_full(L('The largest awards the pages describe for international students are merit scholarships of $10,000 to $25,000 a year and limited need-based funds.', 'Крупнейшие награды для иностранных студентов на прочитанных страницах — стипендии за успехи от $10,000 до $25,000 в год и ограниченная помощь по потребности.')),
    merit=[award(L('Drew merit scholarships', 'Стипендии Drew за успехи'), rng(10000, 25000), L('Domestic and international students, on previous academic achievement', 'Американские и иностранные студенты — по прежним академическим достижениям'), None, application=AUTO),
           award('Drew Action Scholars', L('$2,500 a year', '$2,500 в год'), L('First-year students committed to community, innovation and global impact', 'Первокурсники, вовлечённые в общественную работу, инновации и глобальные проекты'), None, application=L('Separate application', 'Отдельная заявка'))],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': None, 'forms': ['International Student Financial Aid Application'],
          'note': L('Drew says limited need-based funds are available to international students and encourages applying early, while the most funds are available.', 'Drew сообщает, что иностранным студентам доступна ограниченная помощь по потребности, и советует подавать раньше, пока средств больше.')},
    sources=src('Drew', (L('Drew — international admissions', 'Drew — приём иностранных студентов'), S), ('tests', P), (L('Drew — International Baccalaureate students', 'Drew — студенты International Baccalaureate'), IB), ('about', 'https://drew.edu/about/')),
    checked=chk('rounds', 'tests', 'merit', 'aid', 'founded'),
    unconfirmed=chk('fee', L('minimum English test scores', 'минимальные баллы тестов по английскому'), L('tuition and fees — the page read still shows 2024–25 and gives no amounts', 'плата и сборы — на прочитанной странице всё ещё 2024–25 и сумм нет'), 'stats'),
))
nodesc.append('drew-university')

# -------------------------------------------------------------- Eckerd College
S = 'https://www.eckerd.edu/admissions/international/'
F = 'https://www.eckerd.edu/admissions/first-year/'
T = 'https://www.eckerd.edu/bursar/tuition/'
A = 'https://www.eckerd.edu/admission/financial-aid/types/'
records.append(R(
    'eckerd-college', 'Eckerd College', 'Eckerd', L('St. Petersburg', 'Сент-Питерсберг'), L('Florida', 'Флорида'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in St. Petersburg, Florida. SAT and ACT scores are optional. International first-year applicants are considered automatically for an International Student Grant of up to $27,000 a year; Eckerd states that it offers no need-based aid to international students.',
      'Частный колледж свободных искусств в Сент-Питерсберге, штат Флорида. Баллы SAT и ACT необязательны. Иностранные абитуриенты первого курса автоматически рассматриваются на International Student Grant до $27,000 в год; помощи по потребности иностранным студентам Eckerd, по его словам, не даёт.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.eckerd.edu/', 'admissions': 'https://www.eckerd.edu/admissions/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'scholarships': A, 'aid': 'https://www.eckerd.edu/admissions/financial-aid/', 'programs': 'https://www.eckerd.edu/academics/majors/', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('Eckerd College')],
    rounds=[
        rd('EA', '2026-11-15', S, V, dec_by('12-15'), L('No enrollment deposit is needed until 1 May.', 'Депозит не требуется до 1 мая.'), note=NOYEAR),
        rd('ROLL', None, S, V, L('For applications completed after 15 November; decisions are sent within four weeks of all materials arriving.', 'Для заявок, завершённых после 15 ноября; решения отправляются в течение четырёх недель после получения всех документов.'), date=L('After 15 November', 'После 15 ноября')),
    ],
    fee=fee(50, L('The first-year page says the fee is waived for applications submitted before 1 December.', 'На странице для первокурсников сказано, что сбор не берётся с заявок, поданных до 1 декабря.'), F, V,
            waiver=L('Waived for applications submitted before 1 December', 'Не берётся с заявок, поданных до 1 декабря')),
    documents=docs(L('Common Application or Eckerd College application', 'Common Application или заявка Eckerd College'), L('Personal statement or essay', 'Мотивационное письмо или эссе'),
                   L('Certified copies of secondary school records and national examination certificates, with translations', 'Заверенные копии школьных документов и сертификатов государственных экзаменов с переводом'), 'english'),
    english={'ielts': eng(6.5, None, L('Overall band of 6.5 or higher.', 'Общий балл 6.5 и выше.')),
             'toefl': toefl(79, 4.0, L('At least 79 out of 120, or 4.0 out of 6.0.', 'Не ниже 79 из 120 либо 4.0 из 6.0.')),
             'duolingo': eng(110, None, atleast(110)),
             'waiver': L('Needed when the native language is not English. Also met by an SAT Evidence-Based Reading and Writing score of 550, an ACT combined English and Reading score of 43, or ELS level 112; waived after two semesters of university coursework in English.',
                         'Нужен, если английский не родной язык. Требование также выполняют SAT Evidence-Based Reading and Writing 550, сумма ACT English и Reading 43 или уровень ELS 112; не нужен после двух семестров университетских курсов на английском.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('The first-year checklist lists official ACT or SAT scores as optional.', 'В списке документов для первокурсников официальные баллы ACT или SAT названы необязательными.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates in a traditional double room with the Tier A meal plan', 'Студенты бакалавриата в обычной двухместной комнате с планом питания Tier A'),
                [(L('Full-time tuition', 'Обучение (полная нагрузка)'), 54270, B), (L('Traditional double room', 'Обычная двухместная комната'), 8194, B), (L('Meal plan Tier A-250 (Anytime Plan)', 'План питания Tier A-250 (Anytime Plan)'), 7438, B),
                 (L('Student activity fee', 'Сбор на студенческие мероприятия'), 436, B), (L('Technology fee', 'Технологический сбор'), 330, B)],
                h_billed(70668), tt_billed(70668), INC_BILLED, tuition=54270, billed=70668,
                note=L('The page for international students still shows 2025–26 and estimates other expenses, including $1,567 for health insurance, on top of the charges.', 'На странице для иностранных студентов всё ещё показан 2025–26 и приведена оценка прочих расходов сверх счёта, включая $1,567 на медицинскую страховку.')),
    fullRide=no_full(L('The largest award described for international first-year students is the International Student Grant of up to $27,000 a year, below the yearly tuition of $54,270. Eckerd says it does not offer need-based aid to international students.',
                       'Крупнейшая награда для иностранных первокурсников — International Student Grant до $27,000 в год, что меньше годовой платы за обучение $54,270. Помощи по потребности иностранным студентам Eckerd, по его словам, не даёт.')),
    merit=[award('International Student Grant', upto(27000), L('International first-year applicants who need a visa and have no college coursework', 'Иностранные абитуриенты первого курса, которым нужна виза и у которых нет курсов колледжа'), None, application=AUTO),
           award('Artistic Achievement Award', L('$1,000 a year', '$1,000 в год'), L('Students with talent in creative writing, music, theatre, film or visual arts', 'Студенты с талантом в литературном творчестве, музыке, театре, кино или изобразительном искусстве'),
                 L('Awarded annually for four years; renewal criteria are set by the faculty of the discipline.', 'Назначается ежегодно на четыре года; условия продления определяют преподаватели направления.'), application=L('Separate application', 'Отдельная заявка'))],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Eckerd states that international students are not eligible for need-based aid; they may apply for talent-based scholarships.', 'Eckerd сообщает, что иностранные студенты не могут получить помощь по потребности; они могут подавать на стипендии за талант.')},
    sources=src('Eckerd', ('intl', S), ('fy', F), ('cost 2026–27', T), (L('Eckerd — types of aid', 'Eckerd — виды помощи'), A)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid', 'merit'),
    unconfirmed=chk('insurance', 'founded', 'stats', L('books, travel and personal costs for 2026–27', 'книги, дорога и личные расходы на 2026–27')),
))
nodesc.append('eckerd-college')
annual['eckerd-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 70668, 'max': 70668}

# -------------------------------------------------------------- Elmira College
S = 'https://www.elmira.edu/admissions/undergraduate-admissions/overview'
T = 'https://www.elmira.edu/affordability/undergraduate-tuition-aid/undergraduate-tuition-and-costs'
records.append(R(
    'elmira-college', 'Elmira College', 'Elmira', L('Elmira', 'Элмайра'), 'New York', 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Elmira, in the Finger Lakes region of New York State. Admission is rolling and test-optional. The college’s page for international applicants states no English test scores, deadlines or aid terms, so those fields are marked as not confirmed.',
      'Частный колледж свободных искусств в Элмайре, в районе озёр Фингер штата Нью-Йорк. Приём идёт без фиксированного дедлайна, тесты SAT/ACT необязательны. На странице колледжа для иностранных абитуриентов нет баллов тестов по английскому, сроков и условий помощи — эти поля отмечены как неподтверждённые.'),
    ['business', 'psychology', 'biology', 'social-sciences', 'humanities', 'arts', 'education', 'medicine'],
    {'website': 'https://www.elmira.edu/', 'admissions': S, 'international': 'https://www.elmira.edu/admissions/undergraduate-admissions/international-admissions/overview',
     'programs': 'https://www.elmira.edu/academics/programs',
     'aid': 'https://www.elmira.edu/affordability/undergraduate-tuition-aid/undergraduate-tuition-and-costs', 'cost': T},
    verified=V,
    rounds=[rd('ROLL', None, S, V, L('Elmira describes its decisions as rolling; the page gives no closing date.', 'Elmira называет приём непрерывным; даты окончания на странице нет.'), date=L('No fixed deadline', 'Без фиксированного срока'))],
    documents=docs('app', L('One academic letter of recommendation from a teacher or school counselor', 'Одна академическая рекомендация учителя или школьного консультанта'), 'transcript'),
    sat=test('optional', L('Elmira says that, as a test-optional institution, it does not require the SAT or ACT for admission.', 'Elmira сообщает, что не требует SAT или ACT для поступления.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time undergraduates living on campus (base room rate)', 'Студенты бакалавриата на полной нагрузке, живущие в кампусе (базовая ставка комнаты)'),
                [(TUIT, 38560, B), (L('Comprehensive fee', 'Общий сбор'), 2000, B), (L('Board', 'Питание'), 7030, B), (L('Room (base rate)', 'Комната (базовая ставка)'), 7940, B)],
                h_billed(55530), L('$40,560 in tuition and fee plus $14,970 for room and board, as printed; $55,530 is the two added together', '$40,560 — обучение и сбор, плюс $14,970 — жильё и питание, как напечатано; $55,530 — их сумма'),
                INC_BILLED, tuition=38560, billed=55530,
                note=L('Elmira prints the tuition-and-fee total and the room-and-board total separately. Books, travel, personal costs and health insurance are not listed.', 'Elmira печатает итог по обучению и сбору и итог по жилью и питанию отдельно. Книги, дорога, личные расходы и страховка не указаны.')),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')},
    sources=src('Elmira', (L('Elmira — undergraduate admissions', 'Elmira — приём в бакалавриат'), S), ('cost 2026–2027', T), (L('Elmira — international admissions', 'Elmira — приём иностранных студентов'), 'https://www.elmira.edu/admissions/undergraduate-admissions/international-admissions/overview')),
    checked=chk('tests', 'costs'),
    unconfirmed=chk('fee', 'english', 'aid', 'merit', 'founded', 'stats'),
))
nodesc.append('elmira-college')
annual['elmira-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 55530, 'max': 55530}

# ------------------------------------------------------------ Endicott College
S = 'https://www.endicott.edu/admission/undergraduate-admission/how-to-apply/international-student-admission'
H = 'https://www.endicott.edu/admission/undergraduate-admission/how-to-apply'
T = 'https://www.endicott.edu/admission/undergraduate-admission/tuition-financial-aid'
records.append(R(
    'endicott-college', 'Endicott College', 'Endicott', L('Beverly', 'Беверли'), MA, 'private', L('Private college', 'Частный колледж'),
    L('A private college in Beverly, Massachusetts, with its own online application (it does not take part in the Common Application). SAT and ACT scores are optional for all programmes. The pages read state no scholarship amounts or aid terms for international students.',
      'Частный колледж в Беверли, штат Массачусетс, с собственной онлайн-заявкой (в Common Application не участвует). Баллы SAT и ACT необязательны для всех программ. Размеров стипендий и условий помощи иностранным студентам на прочитанных страницах нет.'),
    ['business', 'computer-science', 'psychology', 'arts', 'education', 'medicine'],
    {'website': 'https://www.endicott.edu/', 'programs': 'https://www.endicott.edu/academics/programs-of-study', 'admissions': 'https://www.endicott.edu/admission/undergraduate-admission', 'international': S, 'portal': 'https://apply.endicott.edu/apply/',
     'aid': T, 'scholarships': 'https://www.endicott.edu/admission/undergraduate-admission/tuition-financial-aid/endicott-grants-scholarships', 'cost': T},
    verified=V, platforms=[OWNAPP('Endicott')],
    rounds=[
        rd('ED', '2026-11-01', H, V, L('Documents due 15 November.', 'Документы до 15 ноября.'), dec_on('12-15'), note=NOYEAR),
        rd('EA', '2026-11-01', H, V, L('Documents due 15 November.', 'Документы до 15 ноября.'), dec_on('12-23'), REPLY_MAY1, note=NOYEAR),
        rd('ED2', '2027-01-15', H, V, L('Documents due 1 February.', 'Документы до 1 февраля.'), dec_on('02-15'), note=NOYEAR),
        rd('RD', '2027-02-01', S, V, L('Documents due 15 February; decisions no later than 15 March.', 'Документы до 15 февраля; решения не позже 15 марта.'), REPLY_MAY1,
           name=L('International student admission — deadline', 'Приём иностранных студентов — срок подачи'), note=NOYEAR, applies=INTL),
        rnd(L('Financial aid priority deadline', 'Приоритетный срок подачи на финансовую помощь'), 'aid', '2027-03-15', False, None, S, V, note=NOYEAR, applies=INTL),
    ],
    fee=fee(50, L('Students in significant financial hardship may ask for a waiver; the request must be emailed by a counselor or adviser at their school. The fee is also waived for applicants who visit campus and meet the admission team.',
                  'Абитуриенты в тяжёлом финансовом положении могут попросить об освобождении; запрос отправляет по электронной почте консультант их школы. Сбор также не берётся с тех, кто посетил кампус и встретился с приёмной комиссией.'), S, V,
            waiver=L('On request from a school counselor, in cases of significant financial hardship', 'По запросу школьного консультанта — при тяжёлом финансовом положении'), waiver_intl=True),
    documents=docs(OWNAPP('Endicott'), L('Financial Declaration for International Students', 'Financial Declaration for International Students (финансовая декларация)'), 'essay',
                   L('Official secondary school transcript, with an English translation where needed', 'Официальная школьная выписка, при необходимости с переводом на английский'), L('Letter of recommendation from a teacher, counselor or adviser', 'Рекомендательное письмо учителя или консультанта'), 'english'),
    interview=L('A virtual interview is optional.', 'Онлайн-собеседование — по желанию.'),
    english={'ielts': eng(6.0, None, atleast('6.0')),
             'toefl': toefl(79, None, J(atleast(79), OLDSCALE)),
             'duolingo': eng(105, None, atleast(105)),
             'waiver': L('English test scores can be waived in some cases, on request to the admission office.', 'В некоторых случаях от теста по английскому освобождают — по запросу в приёмную комиссию.'),
             'note': L('Pearson PTE is also accepted (minimum 53).', 'Также принимается Pearson PTE (минимум 53).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Endicott lists SAT and ACT scores as optional for all programmes.', 'Endicott называет баллы SAT и ACT необязательными для всех программ.'), source=H, verified=V),
    costs=costs('2026–2027', T, V, L('Undergraduates living on campus (traditional housing, maximum meal plan)', 'Студенты бакалавриата, живущие в кампусе (обычное общежитие, максимальный план питания)'),
                [(TUIT, 43264, B), (FEES, 1200, B), (HOUS, 12896, B), (FOOD, 5814, B), (L('Books', 'Книги'), 1364, E), (L('Estimated loan fees', 'Комиссия по кредиту (оценка)'), 44, E), (TRANS, 1000, E), (L('Miscellaneous', 'Прочие расходы'), 1000, E)],
                h_coa(66582), tt_coa(66582, 63174), INC_COA, tuition=43264, billed=63174, budget=66582,
                note=L('Health insurance is not in the table.', 'Медицинской страховки в таблице нет.')),
    fullRide=no_full(L('The grants and scholarships page read gives no amounts and does not mention international students.', 'На прочитанной странице грантов и стипендий нет сумм и не упоминаются иностранные студенты.')),
    need={'note': L('The page for international applicants gives a financial aid priority deadline of 15 March but does not say what aid they can receive.', 'На странице для иностранных абитуриентов указан приоритетный срок подачи на помощь — 15 марта, но не сказано, какую помощь они могут получить.')},
    sources=src('Endicott', ('intl', S), ('apply', H), ('cost 2026–27', T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs'),
    unconfirmed=chk('aid', 'merit', 'insurance', 'founded', 'stats'),
))
nodesc.append('endicott-college')
annual['endicott-college'] = {'currency': 'USD', 'basis': 'total', 'min': 66582, 'max': 66582}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
