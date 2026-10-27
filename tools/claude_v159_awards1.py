# -*- coding: utf-8 -*-
"""International entrance awards, batch 1 (McGill, Alberta, McMaster, Montréal, Waterloo,
Western, Ottawa, Calgary, Queen's, Dalhousie), read on 27 October 2026.

For each university the official list of international undergraduate entrance awards
was re-read. The largest award confirmed as open to international first-year students
is named in the largest-award note; where the pages read describe no award at the level
of full tuition, the record joins awardNotDescribed (data/award-details.js). Awards for a
narrow group (one school network, one country) are kept apart from the general answer.
"""
import claude_v159 as C
from claude_v159 import L, G
from us200_std import not_described

h, rs, t = G.load()
R = lambda uid: C.rec(rs, uid)
D = C.DAY


def award(r, name):
    hits = [a for a in r['scholarships']['merit'] if a['name'] == name]
    assert len(hits) == 1, (r['id'], name)
    return hits[0]


def largest(r, en, ru, src):
    fr = r['scholarships']['fullRide']
    fr['note'] = G.plain(L(en, ru))
    fr['source'] = src
    fr['verified'] = D
    G.checked(r, 'scholarships')


# McGill ---------------------------------------------------------------------------
r = R('mcgill-university')
src = 'https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships'
a = award(r, 'Major Entrance Scholarship')
a.update(G.plain({'verified': D,
    'note': L('The C$12,000 level is for Canadian citizens and permanent residents only. Renewable for up to 3 or 4 years if the renewal criteria are met. A student can hold only one centrally administered entrance scholarship; finalists may be interviewed. The 21 January date has no year on the page.',
              'Уровень C$12,000 — только для граждан и постоянных жителей Канады. Продлевается до 3 или 4 лет при выполнении условий продления. Студент может получить только одну центральную вступительную стипендию; финалистов могут пригласить на интервью. У даты 21 января на странице нет года.')}))
C.register(r['id'], 'award: Major Entrance Scholarship', src, 'Major entrance scholarships (value: $3,000, $5,000, $10,000 or $12,000 renewable) $12,000 scholarships are only available to Canadian citizens or legal permanent residents of Canada.')
award(r, 'One-year Entrance Scholarship')['verified'] = D
largest(r, 'Largest award open to international students on the pages read: the Major Entrance Scholarship, up to C$10,000 a year, renewable for up to 3 or 4 years, by separate application. No award at the level of full tuition is described.',
        'Крупнейшая награда для иностранцев на прочитанных страницах — Major Entrance Scholarship, до C$10,000 в год с продлением до 3 или 4 лет, по отдельной заявке. Награды уровня полной оплаты обучения не описано.', src)

# Alberta --------------------------------------------------------------------------
r = R('university-of-alberta')
src = 'https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html'
a = award(r, 'President’s International Distinction Scholarship')
a.update(G.plain({'amount': L('Up to C$120,000, payable over four years', 'До C$120,000 с выплатой в течение четырёх лет'),
                  'application': L('Single scholarship application after applying for admission; the scholarship page gives 10 January (no year) and the Fall 2027 dates page gives 10 January 2027',
                                   'Единая стипендиальная заявка после подачи на admission; страница стипендий указывает 10 января (без года), страница сроков Fall 2027 — 10 января 2027'),
                  'renewable': None, 'verified': D,
                  'note': L('25 awards a year; the page states the total over four years, not a yearly coverage of tuition. Renewal conditions are not given on the page read.',
                            '25 наград в год; страница называет сумму за четыре года, а не ежегодное покрытие обучения. Условия продления на прочитанной странице не приведены.')}))
C.register(r['id'], 'award: President’s International Distinction Scholarship', src, 'Each year 25 students with a superior admission average and demonstrated leadership qualities entering their first year of an undergraduate degree on a student visa permit receive up to CAN $120,000 (payable over 4 years).')
for n in ('International Admission Scholarship', 'International Leader Scholarship', 'Regional Excellence Scholarship'):
    award(r, n)['verified'] = D
m = r['scholarships']['merit']
if not any(x['name'] == 'Chan Pang Kuen Memorial International Distinction Scholarship' for x in m):
    m.insert(2, G.plain({'name': 'Chan Pang Kuen Memorial International Distinction Scholarship',
        'amount': L('Up to C$120,000, payable over four years', 'До C$120,000 с выплатой в течение четырёх лет'),
        'eligibility': L('First-year undergraduate students on a study permit with a superior admission average and leadership', 'Студенты первого курса бакалавриата с учебной визой, с очень высоким средним баллом и лидерскими качествами'),
        'deadline': None, 'application': L('Single scholarship application (same form as the other application-based awards)', 'Единая стипендиальная заявка (та же форма, что и для других наград по заявке)'),
        'renewable': None, 'note': L('The number of awards is not stated.', 'Число наград не указано.'), 'basis': 'merit', 'source': src, 'verified': D}))
if not any(x['name'].startswith('University of Alberta Global Citizen Scholarship') for x in m):
    m.append(G.plain({'name': 'University of Alberta Global Citizen Scholarship for IB Diploma International Students from the Aga Khan Academy',
        'amount': L('Total tuition and non-instructional fees for four years, plus up to C$28,000 a year for living expenses', 'Полная плата за обучение и non-instructional fees за четыре года плюс до C$28,000 в год на проживание'),
        'eligibility': L('Only students entering from an Aga Khan Academy (IB Diploma) with superior academics, financial need and leadership, studying on a study permit', 'Только выпускники Aga Khan Academy (IB Diploma) с очень высокими результатами, финансовой нуждаемостью и лидерскими качествами, обучающиеся по учебной визе'),
        'deadline': None, 'application': L('Contact welcome@ualberta.ca for details', 'Подробности — по адресу welcome@ualberta.ca'),
        'renewable': None, 'note': L('A partner award for one school network; it is not open to other international applicants.', 'Партнёрская награда для одной сети школ; другим иностранным поступающим она недоступна.'),
        'basis': 'partnership', 'source': src, 'verified': D}))
largest(r, 'For international applicants in general, the largest awards on the pages read are the President’s International Distinction and Chan Pang Kuen Memorial scholarships, up to C$120,000 payable over four years, by single scholarship application. An award covering full tuition and fees plus living costs exists only for graduates of Aga Khan Academies.',
        'Для иностранцев в целом крупнейшие награды на прочитанных страницах — President’s International Distinction и Chan Pang Kuen Memorial, до C$120,000 с выплатой за четыре года, по единой стипендиальной заявке. Награда с полной оплатой обучения, сборов и проживания есть только для выпускников Aga Khan Academies.', src)

# McMaster -------------------------------------------------------------------------
r = R('mcmaster-university')
src = 'https://registrar.mcmaster.ca/aid-awards-for-international-students/'
for n in ('McMaster University Entrance Award', 'Faculty-Specific Achievement Award'):
    award(r, n)['verified'] = D
C.register(r['id'], 'award range', src, 'With over $20 million in awards for international fee paying undergraduate students, ranging from $7,500-$210,000')
largest(r, 'The Registrar states awards for international fee-paying undergraduates “ranging from $7,500-$210,000” (one award by application, one automatic award and financial awards). The page does not name the C$210,000 award or its period and coverage, so the largest award cannot be described here.',
        'Registrar сообщает о наградах для иностранцев «от $7,500 до $210,000» (одна награда по заявке, одна автоматическая и финансовые). Страница не называет награду на C$210,000, её срок и покрытие, поэтому крупнейшую награду здесь описать нельзя.', src)
r['verification']['unconfirmed'].append('name and terms of the largest international award') if 'name and terms of the largest international award' not in r['verification']['unconfirmed'] else None

# Montréal -------------------------------------------------------------------------
r = R('universite-de-montreal')
src = 'https://registraire.umontreal.ca/droits-de-scolarite/bourse-exemption/'
a = award(r, 'Bourse d’exemption UdeM'); a['verified'] = D
C.register(r['id'], 'award: Bourse d’exemption UdeM', src, 'Tarification de l’année académique 2026-2027. … A 481,20$ 7 218,00 $ 14 436,00 $', '2026–2027')
largest(r, 'Largest award on the pages read: the Bourse d’exemption UdeM, level A C$14,436 a year (2026–27 rates), deducted from tuition and given automatically at admission; French and Belgian francophone students are excluded. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — Bourse d’exemption UdeM, уровень A C$14,436 в год (ставки 2026–27), вычитается из платы и назначается автоматически при поступлении; студенты из Франции и франкоязычной Бельгии исключены. Награды уровня полной оплаты обучения не описано.', src)

# Waterloo -------------------------------------------------------------------------
r = R('university-of-waterloo')
src = 'https://uwaterloo.ca/future-students/financing/international-scholarships'
a = award(r, 'Faculty of Science International Student Scholarships')
a.update(G.plain({'amount': L('C$25,000–C$80,000 (up to 15 awards)', 'C$25,000–C$80,000 (до 15 наград)'), 'verified': D,
                  'note': L('The page does not say over how many years the amount is paid.', 'Страница не уточняет, за сколько лет выплачивается сумма.')}))
for n in ('International Student Entrance Scholarship', 'Faculty of Mathematics Global Scholarships'):
    award(r, n)['verified'] = D
C.register(r['id'], 'award: Faculty of Science International Student Scholarships', src, 'Most programs in the Faculty of Science Up to 15 scholarships of $25,000 to $80,000 Yes')
largest(r, 'Largest award on the pages read: Faculty of Science International Student Scholarships, up to 15 awards of C$25,000–C$80,000, by application. Every eligible international first-year student also receives C$10,000 in the first year. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — Faculty of Science International Student Scholarships, до 15 наград по C$25,000–C$80,000, по заявке. Кроме того, каждый подходящий иностранный первокурсник получает C$10,000 за первый год. Награды уровня полной оплаты обучения не описано.', src)

# Western --------------------------------------------------------------------------
r = R('western-university')
src = 'https://registrar.uwo.ca/student_finances/scholarships_awards/admission/national_scholarship_program.html'
a = award(r, 'International President’s Entrance Scholarship')
a.update(G.plain({'name': 'International President’s Entrance Scholarships', 'amount': L('C$100,000 each (three awards)', 'По C$100,000 (три награды)'),
    'eligibility': L('International (visa) students with at least 90% on all Grade 12 U/M courses or equivalent, entering full-time at the main campus; a school nomination is required (a school may nominate one international student in addition to its four)',
                     'Иностранные студенты (по визе) со средним баллом не ниже 90% по всем курсам Grade 12 U/M или эквиваленту, очное обучение на главном кампусе; нужна номинация от школы (школа может номинировать одного иностранного студента сверх своих четырёх)'),
    'application': L('Online National Scholarship application for international (visa) students with essay, school transcript and reference; the 2027–28 application opens by mid-November 2026',
                     'Онлайн-заявка National Scholarship для иностранных (визовых) студентов с эссе, школьной выпиской и рекомендацией; заявка 2027–28 открывается к середине ноября 2026'),
    'note': L('The 2026–27 deadline (14 February 2026) has passed; Western’s dates page lists 14 February in February 2027 for the next cycle.',
              'Срок 2026–27 (14 февраля 2026) прошёл; страница сроков Western указывает 14 февраля в феврале 2027 для следующего цикла.'),
    'source': src, 'verified': D}))
C.register(r['id'], 'award: International President’s Entrance Scholarships', src, 'International President\'s Entrance Scholarships 3 at $100,000')
m = r['scholarships']['merit']
if not any(x['name'] == 'Neen Hodgins President’s International Entrance Scholarship' for x in m):
    m.insert(1, G.plain({'name': 'Neen Hodgins President’s International Entrance Scholarship',
        'amount': L('Up to C$100,000: C$25,000 a year for four years (one award)', 'До C$100,000: C$25,000 в год в течение четырёх лет (одна награда)'),
        'eligibility': a['eligibility'], 'deadline': None, 'application': a['application'], 'renewable': True,
        'note': L('Part of the National Scholarship Program; renewal conditions are not given on the page read.', 'Часть National Scholarship Program; условия продления на прочитанной странице не приведены.'),
        'basis': 'merit', 'source': src, 'verified': D}))
    C.register(r['id'], 'award: Neen Hodgins President’s International Entrance Scholarship', src, 'Neen Hodgins President\'s International Entrance Scholarship ONE at up to $100,000; payable $25,000 per academic year for a period of four years.')
largest(r, 'Largest awards open to international students: three International President’s Entrance Scholarships of C$100,000 and one Neen Hodgins President’s International Entrance Scholarship of up to C$100,000 (C$25,000 a year for four years). They need a school nomination and the National Scholarship application. No award at the level of full tuition is described.',
        'Крупнейшие награды для иностранцев: три International President’s Entrance Scholarships по C$100,000 и одна Neen Hodgins President’s International Entrance Scholarship до C$100,000 (C$25,000 в год четыре года). Нужны номинация от школы и заявка National Scholarship. Награды уровня полной оплаты обучения не описано.', src)

# Ottawa ---------------------------------------------------------------------------
r = R('university-of-ottawa')
src = 'https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview'
a = award(r, 'International Admission Entrance Scholarship')
a.update(G.plain({'name': 'International English Admission Scholarship',
    'amount': L('C$7,500 per term (C$60,000 over a four-year degree); renewable each term, up to 12 instalments', 'C$7,500 за семестр (C$60,000 за четырёхлетнюю программу); продлевается каждый семестр, до 12 выплат'),
    'eligibility': L('International students paying international fees, newly admitted in winter 2026 or later to an eligible undergraduate programme taught in English; no limit on the number of recipients',
                     'Иностранные студенты, платящие международную ставку, впервые зачисленные с зимы 2026 или позже на подходящую англоязычную программу бакалавриата; число получателей не ограничено'),
    'note': L('Awarded automatically on full-time enrolment; tuition is reduced by C$15,000 a year. Listed under scholarships for international students 2027–2028.',
              'Назначается автоматически при очном зачислении; плата снижается на C$15,000 в год. Указана в разделе стипендий для иностранцев 2027–2028.'),
    'verified': D}))
C.register(r['id'], 'award: International English Admission Scholarship', src, '$7,500 per term ($60,000 over the course of a four-year degree) Renewable each term (maximum of 12 instalments).', '2027–2028')
a = award(r, 'International English Academic Excellence Scholarship')
a.update(G.plain({'amount': L('C$10,000 (C$5,000 per term), 100 awards', 'C$10,000 (C$5,000 за семестр), 100 наград'), 'renewable': False,
    'note': L('Not renewable, but it can be combined with the International English Admission Scholarship.', 'Не продлевается, но совмещается с International English Admission Scholarship.'), 'basis': 'automatic', 'verified': D}))
for n in ('Differential Tuition Fee Exemption Scholarship', 'University of Ottawa Admission Scholarship'):
    award(r, n)['verified'] = D
largest(r, 'For programmes taught in English the largest award is the International English Admission Scholarship, C$7,500 per term (C$60,000 over four years), automatic; for programmes in French or French Immersion, the Differential Tuition Fee Exemption Scholarship, whose value varies by programme. Neither is described as covering full tuition.',
        'Для англоязычных программ крупнейшая награда — International English Admission Scholarship, C$7,500 за семестр (C$60,000 за четыре года), автоматически; для программ на французском или во French Immersion — Differential Tuition Fee Exemption Scholarship, размер которой зависит от программы. Ни одна не описана как полная оплата обучения.', src)

# Calgary --------------------------------------------------------------------------
r = R('university-of-calgary')
src = 'https://www.ucalgary.ca/registrar/awards/university-calgary-international-entrance-scholarship'
a = award(r, 'University of Calgary International Entrance Scholarship'); a['verified'] = D
a['application'] = G.plain(L('Application required: High School Prestige Awards application in the My UCalgary portal (1 December; no year on the dates page)', 'Нужна заявка: High School Prestige Awards в портале My UCalgary (1 декабря; на странице сроков без года)'))
C.register(r['id'], 'award: University of Calgary International Entrance Scholarship', src, 'Award value $20,000 (Renewable) Number of awards 2')
largest(r, 'Largest award open to international students on the pages read: the University of Calgary International Entrance Scholarship, C$20,000, renewable, two awards. No award at the level of full tuition is described.',
        'Крупнейшая награда для иностранцев на прочитанных страницах — University of Calgary International Entrance Scholarship, C$20,000, с продлением, две награды. Награды уровня полной оплаты обучения не описано.', src)

# Queen's --------------------------------------------------------------------------
r = R('queens-university')
src = 'https://www.queensu.ca/registrar/financial-aid/specific-students/international'
maa = 'https://www.queensu.ca/registrar/financial-aid/application-required/future-students/major-awards'
r['scholarships']['merit'] = [x for x in r['scholarships']['merit'] if x['name'] != 'Major Admission Awards']
r['admissions']['deadlines'] = [d for d in r['admissions']['deadlines'] if 'Major Admission Award' not in d['name']]
C.register(r['id'], 'removed: Major Admission Awards (domestic only)', maa, 'Available to a Canadian citizen, permanent resident of Canada, or Protected Person.')
award(r, 'Dean’s International Award (Arts and Science)')['verified'] = D
G.source(r, 'Queen’s — Major Admission Awards (Canadian citizens, permanent residents and Protected Persons only)', maa)
largest(r, 'Largest awards open to international students: the Dean’s International Awards, up to C$25,000 a year for four years in Arts and Science, Commerce and Engineering (up to C$15,000 in Health Sciences), automatic. The Major Admission Awards and the Chancellor’s Scholarship are only for Canadian citizens, permanent residents and Protected Persons. No award at the level of full tuition is described.',
        'Крупнейшие награды для иностранцев — Dean’s International Awards, до C$25,000 в год четыре года в Arts and Science, Commerce и Engineering (до C$15,000 в Health Sciences), автоматически. Major Admission Awards и Chancellor’s Scholarship — только для граждан Канады, постоянных жителей и Protected Persons. Награды уровня полной оплаты обучения не описано.', src)

# Dalhousie ------------------------------------------------------------------------
r = R('dalhousie-university')
src = 'https://www.dal.ca/admissions/scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html'
C.register(r['id'], 'award range', src, '$1K to $80K Awards may be one-time, or renewable for up to 4 years. All students—domestic and international—are eligible to apply.', '2027–2028')
largest(r, 'Dalhousie states entrance awards of C$1K to C$80K, one-time or renewable for up to four years, open to domestic and international students through the General Entrance Award application (15 February 2027). Larger listed awards are for defined groups (e.g. the Murray Family Jamaican Engineering Scholarship, C$88,000, for students from Jamaica). No award at the level of full tuition is described.',
        'Dalhousie указывает вступительные награды от C$1K до C$80K, разовые или с продлением до четырёх лет, для местных и иностранных студентов через General Entrance Award application (15 февраля 2027). Более крупные награды — для отдельных групп (например, Murray Family Jamaican Engineering Scholarship, C$88,000, для студентов из Ямайки). Награды уровня полной оплаты обучения не описано.', src)

G.save(h, rs, t)
not_described(['mcgill-university', 'universite-de-montreal', 'university-of-waterloo', 'western-university', 'university-of-ottawa',
               'university-of-calgary', 'queens-university', 'dalhousie-university'])
C.flush_research()
