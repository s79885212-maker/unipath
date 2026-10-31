# -*- coding: utf-8 -*-
"""International entrance awards, batch 4 (Saint Mary's, Bishop's, Lethbridge, Winnipeg, MSVU,
Mount Royal, TRU, UNBC, VIU, UFV), read on 27 October 2026 (Winnipeg and Lethbridge in a
browser). Rules as in batch 1. Two awards recorded as open to international students are
for Canadian citizens and permanent residents only and are removed from the international
answer: Bishop's Michael Goldbloom Excellence Scholarships."""
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
    fr['note'] = G.plain(L(en, ru)); fr['source'] = src; fr['verified'] = D
    G.checked(r, 'scholarships')


# Saint Mary's -----------------------------------------------------------------------
r = R('saint-marys-university'); src = 'https://www.smu.ca/future-students/moneymatters/scholarshipsawards/'
award(r, 'Saint Mary’s Admissions Scholarships')['verified'] = D
C.register(r['id'], 'award eligibility: Major Renewable Scholarships', src, 'Valued at $50,000 over four years … Eligibility Requirements Must be either a Canadian Citizen or Permanent Resident of Canada')
largest(r, 'The C$50,000 Major Renewable Scholarships (Sobey National Innovator and Presidential) are for Canadian citizens and permanent residents only. For applicants from schools abroad the pages read give no amounts for the competitive Admissions Scholarships (application by 15 February) or the Entrance Awards, so the largest award cannot be named; tuition reductions of about C$40,000–C$50,000 over a degree are for graduates of named Canadian provincial programmes, CAIS schools and United World Colleges. No award at the level of full tuition is described.',
        'Major Renewable Scholarships на C$50,000 (Sobey National Innovator и Presidential) — только для граждан и постоянных жителей Канады. Для поступающих из школ за рубежом прочитанные страницы не дают сумм конкурсных Admissions Scholarships (подача до 15 февраля) и Entrance Awards, поэтому назвать крупнейшую нельзя; скидки на обучение около C$40,000–C$50,000 за программу — для выпускников названных канадских провинциальных программ, школ CAIS и United World Colleges. Награды уровня полной оплаты обучения не описано.', src)

# Bishop's ---------------------------------------------------------------------------
r = R('bishops-university'); src = 'https://www.ubishops.ca/admissions/scholarships-awards-bursaries/'
gb = 'https://www.ubishops.ca/admissions/scholarships-awards-bursaries/michael-goldbloom-excellence-scholarships/'
r['scholarships']['merit'] = [x for x in r['scholarships']['merit'] if x['name'] != 'Michael Goldbloom Excellence Scholarships']
C.register(r['id'], 'removed: Michael Goldbloom Excellence Scholarships (citizens and permanent residents only)', gb, 'be citizens or permanent residents of Canada (applicants may be residing elsewhere for their studies at the time of application)')
G.source(r, 'Bishop’s — Michael Goldbloom Excellence Scholarships (Canadian citizens and permanent residents only)', gb)
award(r, 'Competitive Admission Scholarships')['verified'] = D
largest(r, 'For international students the pages read list Competitive Admission Scholarships of C$1,000–C$4,000 a year and entrance awards and bursaries of C$500–C$12,000 a year, mostly one-time. The C$10,000-a-year Michael Goldbloom Excellence Scholarships are for Canadian citizens and permanent residents only. No award at the level of full tuition is described.',
        'Для иностранцев прочитанные страницы называют Competitive Admission Scholarships по C$1,000–C$4,000 в год и вступительные награды и bursaries по C$500–C$12,000 в год, в основном разовые. Michael Goldbloom Excellence Scholarships на C$10,000 в год — только для граждан и постоянных жителей Канады. Награды уровня полной оплаты обучения не описано.', src)

# Lethbridge -------------------------------------------------------------------------
r = R('university-of-lethbridge')
award(r, 'Board of Governors’ Admission Scholarship')['verified'] = D
largest(r, 'The official awards page shows only a summary (C$8.4 million in scholarships and awards); amounts of international entrance awards were not found on the pages read, so the largest award cannot be named.',
        'Официальная страница наград показывает только сводку (C$8.4 млн стипендий и наград); суммы вступительных наград для иностранцев на прочитанных страницах не найдены, поэтому назвать крупнейшую нельзя.', 'https://www.ulethbridge.ca/future-student/awards-and-scholarships')

# Winnipeg ---------------------------------------------------------------------------
r = R('university-of-winnipeg'); src = 'https://www.uwinnipeg.ca/awards/awards-bursaries-and-scholarships/international-students.html'
a = award(r, 'President’s Scholarship for World Leaders')
a.update(G.plain({'amount': L('C$5,000 for undergraduates (6 awards) in the 2026–27 table', 'C$5,000 для бакалавриата (6 наград) в таблице 2026–27'),
    'application': L('Admission application by the scholarship deadline of the chosen term; 2027–28 values and deadlines will be published in December 2026', 'Заявка на admission до срока стипендии выбранного семестра; суммы и сроки 2027–28 опубликуют в декабре 2026'),
    'note': L('Previous cycle: the table shows 2026–27 values and closed deadlines. It cannot be held together with the International Special Entrance Scholarship.', 'Предыдущий цикл: таблица показывает суммы 2026–27 и закрытые сроки. Не совмещается с International Special Entrance Scholarship.'),
    'verified': D}))
award(r, 'International Special Entrance Scholarship')['verified'] = D
m = r['scholarships']['merit']
if not any(x['name'] == 'Wu Chung Scholarship' for x in m):
    m.append(G.plain({'name': 'Wu Chung Scholarship',
        'amount': L('Full support: undergraduate tuition and fees for up to four years, textbooks and study costs, UW housing with a meal plan, and up to C$2,500 for the flight', 'Полная поддержка: обучение и сборы бакалавриата до четырёх лет, учебники и расходы на учёбу, жильё UW с питанием и до C$2,500 на перелёт'),
        'eligibility': L('Only residents of Huadu (Guangzhou) or Hong Kong, China', 'Только жители Хуаду (Гуанчжоу) или Гонконга, Китай'),
        'deadline': None, 'application': None, 'renewable': None,
        'note': L('An award for a defined region; it is not open to other international applicants.', 'Награда для определённого региона; другим иностранным поступающим она недоступна.'),
        'basis': 'partnership', 'source': src, 'verified': D}))
C.register(r['id'], 'award (2026–27): President’s Scholarship for World Leaders', src, 'Values and Deadlines for 2026-27 (2027-28 will be available in December 2026): … Undergraduate $5,000 6', '2026–2027 (previous cycle)')
largest(r, 'For international applicants in general, the largest award with a published amount is the President’s Scholarship for World Leaders, C$5,000 for undergraduates in the 2026–27 table (2027–28 values due in December 2026); amounts of the automatic International Special Entrance Scholarships were not read. Full support (tuition, housing, meals, books, travel) exists only in the Wu Chung Scholarship for residents of Huadu or Hong Kong.',
        'Для иностранцев в целом крупнейшая награда с опубликованной суммой — President’s Scholarship for World Leaders, C$5,000 для бакалавриата в таблице 2026–27 (суммы 2027–28 — в декабре 2026); суммы автоматических International Special Entrance Scholarships не прочитаны. Полная поддержка (обучение, жильё, питание, книги, перелёт) есть только в Wu Chung Scholarship для жителей Хуаду или Гонконга.', src)

# MSVU -------------------------------------------------------------------------------
r = R('mount-saint-vincent-university'); src = 'https://www.msvu.ca/future-students/money-matters/scholarships-awards/undergraduate-scholarships/entrance-scholarships/'
award(r, 'MSVU entrance scholarships')['verified'] = D
largest(r, 'The entrance scholarship page lists named awards with automatic consideration (complete admission application by 1 March) but gives no amounts for them, so the largest award open to international students cannot be named. The C$16,000 Harrison McCain award is for students graduating from a high school in Canada. No award at the level of full tuition is described.',
        'Страница вступительных стипендий перечисляет именные награды с автоматическим рассмотрением (полная заявка на admission до 1 марта), но без сумм, поэтому назвать крупнейшую награду для иностранцев нельзя. Награда Harrison McCain на C$16,000 — для выпускников канадских школ. Награды уровня полной оплаты обучения не описано.', src)

# Mount Royal ------------------------------------------------------------------------
r = R('mount-royal-university'); src = 'https://www.mtroyal.ca/Admission/FinancingYourEducation/ScholarshipsBursaries/awardinfo.htm'
award(r, 'Mount Royal entrance scholarships')['verified'] = D
C.register(r['id'], 'award eligibility', src, 'International students are eligible for entrance and in-course scholarships, nominated awards and emergency bursaries that do not have a residency requirement')
largest(r, 'International students may hold entrance scholarships that have no residency requirement (applications 1 November–1 March each year), but the page read gives no amounts, so the largest award cannot be named. No award at the level of full tuition is described.',
        'Иностранцы могут получать вступительные стипендии без требования резидентства (заявки ежегодно с 1 ноября по 1 марта), но прочитанная страница не даёт сумм, поэтому назвать крупнейшую нельзя. Награды уровня полной оплаты обучения не описано.', src)

# TRU --------------------------------------------------------------------------------
r = R('thompson-rivers-university'); src = 'https://www.tru.ca/truworld/future-students/scholarships.html'
for n in ('Exceptional Student Award', 'Academic Excellence Award', 'Diversity Scholarships'):
    award(r, n)['verified'] = D
largest(r, 'Largest award with a published amount on the page read: the Exceptional Student Award, up to C$4,000 (C$1,000 a semester with a 3.33 GPA), for candidates identified by the international marketing team. Country-specific awards (e.g. for Mexico or the Caribbean) are for those countries only. No award at the level of full tuition is described.',
        'Крупнейшая награда с опубликованной суммой на прочитанной странице — Exceptional Student Award, до C$4,000 (C$1,000 за семестр при GPA 3.33), для кандидатов, отобранных международным отделом. Награды для отдельных стран (например, Мексики или Карибов) — только для этих стран. Награды уровня полной оплаты обучения не описано.', src)

# UNBC -------------------------------------------------------------------------------
r = R('university-of-northern-british-columbia')
largest(r, 'No official UNBC page listing international undergraduate entrance awards and their amounts was found in this check; aggregator listings were not used. The largest award cannot be named.',
        'В этой проверке не найдено официальной страницы UNBC со списком вступительных наград для иностранцев и их суммами; агрегаторы не использовались. Назвать крупнейшую награду нельзя.', 'https://www.unbc.ca/international/frequent-asked-questions-faq')

# VIU --------------------------------------------------------------------------------
r = R('vancouver-island-university'); src = 'https://services.viu.ca/financial-aid-awards/viu-entrance-awards'
m = r['scholarships']['merit']
if not any(x['name'] == 'International Student Entrance Scholarship' for x in m):
    m.append(G.plain({'name': 'International Student Entrance Scholarship', 'amount': L('C$5,000 each (20 awards)', 'По C$5,000 (20 наград)'),
        'eligibility': L('First-year students in any undergraduate programme; selection by academic excellence', 'Первокурсники любой программы бакалавриата; отбор по академическим успехам'),
        'deadline': None, 'application': L('Single VIU entrance award application (not automatic); Fall 2027 application open 15 October 2026 to 28 February 2027, 11:59 pm', 'Единая заявка на вступительные награды VIU (не автоматически); для Fall 2027 — с 15 октября 2026 по 28 февраля 2027, 23:59'),
        'renewable': None, 'note': L('Applied as a tuition credit in the fall semester after full-time enrolment is confirmed. The page does not name the time zone.', 'Засчитывается в оплату обучения в осеннем семестре после подтверждения очного зачисления. Часовой пояс на странице не указан.'),
        'basis': 'merit', 'source': src, 'verified': D, 'id': 'international-entrance', 'category': 'merit', 'entryTerm': 'Autumn', 'entryYear': '2027'}))
q = 'Fall 2027 application open October 15, 2026 The entrance award application is now open. Entrance award applications will be open until 11:59 pm on February 28, 2027.'
if not any(d.get('awardId') == 'international-entrance' for d in r['admissions']['deadlines']):
    r['admissions']['deadlines'].append(G.plain({'name': L('VIU entrance award application (includes the International Student Entrance Scholarship)', 'Заявка на вступительные награды VIU (включая International Student Entrance Scholarship)'),
        'kind': 'scholarship', 'entryTerm': 'Autumn', 'entryYear': '2027', 'dateISO': '2027-02-28', 'date': '28 February 2027', 'time': '23:59',
        'appliesTo': L('First-year applicants', 'Поступающие на первый курс'), 'conditions': None, 'status': 'confirmed', 'source': src, 'verified': D,
        'note': L('The page gives 11:59 pm without a time zone, so the end of the day is not converted to a zone.', 'Страница указывает 23:59 без часового пояса, поэтому конец дня не переводится в пояс.'),
        'cycleEvidence': {'basis': 'explicit-date', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': D, 'quote': q},
        'awardId': 'international-entrance', 'awardCategory': 'merit'}))
C.register(r['id'], 'award + deadline: International Student Entrance Scholarship', src, 'International Student Entrance Scholarship $5,000 each | 20 available … ' + q, 'Fall 2027')
largest(r, 'Largest award open to international students on the pages read: the International Student Entrance Scholarship, C$5,000 each for 20 students, by the single entrance award application (Fall 2027: until 28 February 2027). No award at the level of full tuition is described.',
        'Крупнейшая награда для иностранцев на прочитанных страницах — International Student Entrance Scholarship, по C$5,000 для 20 студентов, через единую заявку на вступительные награды (Fall 2027: до 28 февраля 2027). Награды уровня полной оплаты обучения не описано.', src)
G.checked(r, 'entrance scholarships for international students')

# UFV --------------------------------------------------------------------------------
r = R('university-of-the-fraser-valley'); src = 'https://international.ufv.ca/future-students/tuition-scholarships-jobs/scholarships/international-excellence-scholarship/'
a = award(r, 'International Excellence Entrance Scholarship')
a.update(G.plain({'verified': D, 'note': L('Ten a year, automatic, first come first served; needs a CGPA of 3.75 on approved Grade 12 courses and a degree programme; kept with a CGPA of 3.0 each year. Paid as a tuition credit each year.',
                                           'Десять в год, автоматически, в порядке подачи заявок; нужен CGPA 3.75 по зачтённым курсам Grade 12 и программа со степенью; сохраняется при CGPA 3.0 каждый год. Выплачивается как зачёт в оплату обучения каждый год.')}))
largest(r, 'Largest award on the pages read: the International Excellence Entrance Scholarship, C$20,000 (C$5,000 a year for four years), ten a year, automatic in order of application. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — International Excellence Entrance Scholarship, C$20,000 (C$5,000 в год четыре года), десять в год, автоматически в порядке подачи. Награды уровня полной оплаты обучения не описано.', src)

G.save(h, rs, t)
not_described(['saint-marys-university', 'bishops-university', 'mount-saint-vincent-university', 'mount-royal-university',
               'thompson-rivers-university', 'vancouver-island-university', 'university-of-the-fraser-valley'])
C.flush_research()
