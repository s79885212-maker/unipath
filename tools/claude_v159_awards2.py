# -*- coding: utf-8 -*-
"""International entrance awards, batch 2 (SFU, Laval, Saskatchewan, Manitoba, Guelph,
Carleton, York, Concordia, Memorial, UNB, Windsor), read on 27 October 2026.
Same rules as batch 1 (tools/claude_v159_awards1.py)."""
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


# SFU (USES conditions verified by the earlier pass are kept as they are) -------------
r = R('simon-fraser-university')
largest(r, 'Largest award open to international students: the Undergraduate Scholars Entrance Scholarship (USES), C$140,000 in eight C$17,500 payments for the selected international award, by separate application. It is not described as covering full tuition.',
        'Крупнейшая награда для иностранцев — Undergraduate Scholars Entrance Scholarship (USES), C$140,000 восемью выплатами по C$17,500 для выбранной международной награды, по отдельной заявке. Как полная оплата обучения она не описана.',
        award(r, 'Undergraduate Scholars Entrance Scholarship (USES)')['source'])

# Laval ------------------------------------------------------------------------------
r = R('universite-laval')
bccm = 'https://www.ulaval.ca/espace-etudiant/bourses-et-aide-financiere/bourses-detudes/bourses-citoyennes-et-citoyens-du-monde-volets-excellence-et-engagement'
news = 'https://nouvelles.ulaval.ca/2025/12/15/des-bourses-de-20-000dollar-et-30-000dollar-pour-attirer-des-talents-etudiants-a-luniversite-laval-4559df29-6be3-4588-b705-67db5fb40017'
award(r, 'Exemption from supplementary fees (Quebec government quotas)')['verified'] = D
m = r['scholarships']['merit']
if not any(x['name'].startswith('Bourses citoyennes et citoyens du monde') for x in m):
    m.append(G.plain({'name': 'Bourses citoyennes et citoyens du monde — volet excellence (baccalauréat)',
        'amount': L('C$20,000 in the 2026 admission round (previous cycle)', 'C$20,000 в наборе 2026 (предыдущий цикл)'),
        'eligibility': L('International applicants who submitted a new admission application; in the 2026 round bachelor’s programmes were included', 'Иностранцы, подавшие новую заявку на поступление; в наборе 2026 бакалавриат был включён'),
        'deadline': None, 'application': L('Separate application; the 2026 round closed on 15 January 2026. The 2027 competition opens in November 2026.', 'Отдельная заявка; конкурс 2026 закрылся 15 января 2026. Конкурс 2027 открывается в ноябре 2026.'),
        'renewable': None,
        'note': L('Previous cycle. The current official page describes the excellence strand for research master’s and doctoral programmes only, so a 2027 bachelor’s award is not confirmed.',
                  'Предыдущий цикл. Текущая официальная страница описывает направление excellence только для магистратуры с исследованием и докторантуры, поэтому награда для бакалавриата 2027 не подтверждена.'),
        'basis': 'merit', 'source': news, 'verified': D}))
    C.register(r['id'], 'award (previous cycle): BCCM excellence, bachelor', news, '20 000$ pour les programmes de baccalauréat et de maîtrise … Baccalauréat ou maîtrise professionnelle Date limite de soumission des candidatures: 15 janvier 2026', '2026 admission')
    C.register(r['id'], 'award scope 2027: BCCM excellence', bccm, 'Volet excellence (2e et 3e cycles avec recherche) … La sélection des candidatures pour les bourses d\'admission 2027 commencera dès le mois de novembre.', '2027 admission')
largest(r, 'No award at the level of full tuition is described for bachelor’s students. The supplementary-fee exemption depends on Quebec government quotas by country (or on French or Belgian francophone citizenship). The C$20,000 excellence award of the 2026 round is not confirmed for bachelor’s students in 2027.',
        'Награды уровня полной оплаты обучения для бакалавриата не описано. Освобождение от дополнительной платы зависит от квот правительства Квебека по странам (или от гражданства Франции либо франкоязычной Бельгии). Награда excellence на C$20,000 набора 2026 для бакалавриата в 2027 не подтверждена.', bccm)

# Saskatchewan -----------------------------------------------------------------------
r = R('university-of-saskatchewan')
src = 'https://admissions.usask.ca/money/scholarships.php'
for n in ('University of Saskatchewan International Excellence Award', 'International Baccalaureate Excellence Award', 'USask Entrance Scholarships'):
    award(r, n)['verified'] = D
C.register(r['id'], 'award: Best and Brightest eligibility', 'https://admissions.usask.ca/money/search-awards.php?award=300098ES02', 'Eligibility: Graduating from a Canadian high school Proceeding directly from high school to university')
largest(r, 'For applicants from schools outside Canada the largest awards on the pages read are the International Baccalaureate Excellence Award (C$20,000, one award, IB Diploma) and the International Excellence Award (C$10,000, one award), both automatic for admission applications by 15 February. The Best and Brightest scholarships (up to C$40,000) require graduating from a Canadian high school; four C$15,000 and several C$10,000 awards are for international students at schools in Saskatchewan, Manitoba, Alberta or British Columbia. No award at the level of full tuition is described.',
        'Для поступающих из школ за пределами Канады крупнейшие награды на прочитанных страницах — International Baccalaureate Excellence Award (C$20,000, одна награда, IB Diploma) и International Excellence Award (C$10,000, одна награда), обе автоматически при подаче на admission до 15 февраля. Стипендии Best and Brightest (до C$40,000) требуют окончания канадской школы; четыре награды по C$15,000 и несколько по C$10,000 — для иностранцев из школ Саскачевана, Манитобы, Альберты или Британской Колумбии. Награды уровня полной оплаты обучения не описано.', src)

# Manitoba ---------------------------------------------------------------------------
r = R('university-of-manitoba')
src = 'https://umanitoba.ca/financial-aid-and-awards/entrance-awards/international-excellence-entrance-scholarship'
portal = 'https://apply.umanitoba.ca/portal/program-info?cmd=program-details&progTerm=0a46dda2-76cd-46bc-b8d5-5ff06bfbdbde'
a = award(r, 'International Excellence Entrance Scholarship')
a.update(G.plain({'amount': L('One award of C$25,000 and two of C$10,000', 'Одна награда C$25,000 и две по C$10,000'),
    'eligibility': L('International students entering a direct-entry programme in September 2027, with leadership and community involvement; the C$25,000 award needs at least 90% across five listed senior courses',
                     'Иностранцы, поступающие на программу прямого зачисления в сентябре 2027, с лидерством и общественной активностью; для награды C$25,000 нужно не ниже 90% по пяти указанным старшим предметам'),
    'application': L('Scholarship application with one teacher or principal reference, and the admission application with fee, by 1 December 2026', 'Стипендиальная заявка с одной рекомендацией учителя или директора и заявка на admission с оплатой сбора — до 1 декабря 2026'),
    'note': L('The award pages do not state renewal. Decisions are released in mid-March 2027.', 'Страницы награды не говорят о продлении. Решения публикуются в середине марта 2027.'),
    'source': src, 'verified': D, 'id': 'international-excellence', 'category': 'merit', 'entryTerm': 'Autumn', 'entryYear': '2027'}))
d = C.event(r, 'International Excellence Entrance Scholarship deadline')
d.update({'awardId': 'international-excellence', 'awardCategory': 'merit'})
C.register(r['id'], 'award: International Excellence Entrance Scholarship', portal, 'a total of three scholarships will be awarded to direct entry students entering the University of Manitoba in September 2027 … Application Deadline December 1, 2026', 'Autumn 2027')
largest(r, 'Largest award open to international students on the pages read: one International Excellence Entrance Scholarship of C$25,000 (two more of C$10,000), for entry in September 2027, application by 1 December 2026. No award at the level of full tuition is described.',
        'Крупнейшая награда для иностранцев на прочитанных страницах — одна International Excellence Entrance Scholarship на C$25,000 (ещё две по C$10,000) для поступления в сентябре 2027, заявка до 1 декабря 2026. Награды уровня полной оплаты обучения не описано.', src)

# Guelph (amounts and dates from the earlier pass are kept) ---------------------------
r = R('university-of-guelph')
largest(r, 'Largest awards open to international students: the Dr. Franco J. Vaccarino President’s Scholarship (C$42,500, two awards, by application) and the President’s International Entrance Scholarship (up to C$42,500 over four years, automatic by admission average). No award at the level of full tuition is described.',
        'Крупнейшие награды для иностранцев — Dr. Franco J. Vaccarino President’s Scholarship (C$42,500, две награды, по заявке) и President’s International Entrance Scholarship (до C$42,500 за четыре года, автоматически по среднему баллу). Награды уровня полной оплаты обучения не описано.',
        award(r, 'President’s International Entrance Scholarship')['source'])

# Carleton ---------------------------------------------------------------------------
r = R('carleton-university')
src = 'https://admissions.carleton.ca/scholarships/usa-and-international-costs/'
for n in ('Carleton Entrance Scholarships', 'President’s Welcome Award for International Students', 'Prestige Scholarships'):
    award(r, n)['verified'] = D
C.register(r['id'], 'award: Prestige Scholarships', src, 'The values of the Prestige Scholarships range from $5,000 to $14,178 CAD per year, and they are renewable based on maintaining a minimum A- (10.0 GPA) in full-time studies. An application is required. Deadline: March 1.')
largest(r, 'Largest awards open to international students: Prestige Scholarships, C$5,000–C$14,178 a year, renewable, by application (admission average over 90%). No award at the level of full tuition is described.',
        'Крупнейшие награды для иностранцев — Prestige Scholarships, C$5,000–C$14,178 в год с продлением, по заявке (средний балл выше 90%). Награды уровня полной оплаты обучения не описано.', src)

# York (PISE terms from the earlier pass are kept) -----------------------------------
r = R('york-university')
src = 'https://futurestudents.yorku.ca/financing-your-degree/international-scholarships'
C.register(r['id'], 'award: PISE', src, 'International award valued at $180,000 ($45,000 x 4 years) … Student Application Deadline: January 27, 2027 Nominee’s Deadline: February 4, 2027')
largest(r, 'Largest award open to international students: the President’s International Scholarship of Excellence (PISE), C$180,000 (C$45,000 a year for four years), by application with school nomination (student form 27 January 2027). It is not described as covering full tuition, and residence and meals are paid separately.',
        'Крупнейшая награда для иностранцев — President’s International Scholarship of Excellence (PISE), C$180,000 (C$45,000 в год четыре года), по заявке с номинацией от школы (форма студента до 27 января 2027). Как полная оплата обучения она не описана; проживание и питание оплачиваются отдельно.', src)

# Concordia --------------------------------------------------------------------------
r = R('concordia-university')
src = 'https://www.concordia.ca/students/financial/scholarships-funding/scholarships.html'
exc = 'https://www.concordia.ca/students/financial/scholarships-funding/undergraduate-excellence-awards.html'
award(r, 'Concordia entrance scholarships')['verified'] = D
C.register(r['id'], 'award eligibility: Undergraduate Excellence Awards', exc, 'be a Canadian citizen or permanent resident', 'Fall 2027 or Winter 2028')
largest(r, 'The official pages read publish no amounts for the entrance scholarships open to international students, so the largest award cannot be named. The guaranteed C$4,000 Undergraduate Excellence Award is for Canadian citizens and permanent residents only; no Presidential Scholarship page was found on concordia.ca.',
        'Прочитанные официальные страницы не публикуют сумм вступительных стипендий, доступных иностранцам, поэтому назвать крупнейшую нельзя. Гарантированная Undergraduate Excellence Award на C$4,000 — только для граждан и постоянных жителей Канады; страницы Presidential Scholarship на concordia.ca не найдено.', src)

# Memorial ---------------------------------------------------------------------------
r = R('memorial-university-of-newfoundland')
src = 'https://www.mun.ca/scholarships/entrance-scholarships/other-entrance-scholarships/'
a = award(r, 'Memorial University of Newfoundland International Entrance Scholarship')
a.update(G.plain({'amount': L('Varies, not more than C$6,000 a year', 'Размер разный, не более C$6,000 в год'),
    'eligibility': L('Students paying the full international undergraduate fee, at least 9 credit hours in each of two semesters of the first year, normally fewer than 31 transfer credit hours, and scholarship standing', 'Студенты, платящие полную международную ставку, не менее 9 кредитных часов в каждом из двух семестров первого года, обычно менее 31 часа перезачёта, и стипендиальный уровень успеваемости'),
    'source': src, 'verified': D}))
C.register(r['id'], 'award: International Entrance Scholarship', src, 'The values will vary but will not exceed $6,000 each annually.')
largest(r, 'International entrance scholarships are for the first year only and not renewable; the International Entrance Scholarship is worth at most C$6,000. The amounts of the other named international entrance awards were not read, so the largest cannot be named. No award at the level of full tuition is described.',
        'Вступительные стипендии для иностранцев — только на первый год, без продления; International Entrance Scholarship — не более C$6,000. Суммы других именных наград для иностранцев не прочитаны, поэтому назвать крупнейшую нельзя. Награды уровня полной оплаты обучения не описано.', 'https://www.mun.ca/scholarships/entrance-scholarships/international-students/')

# UNB --------------------------------------------------------------------------------
r = R('university-of-new-brunswick')
src = 'https://www.unb.ca/moneymatters/scholarships/international.html'
award(r, 'Lady Vi Aitken Scholarship')['verified'] = D
C.register(r['id'], 'award: Lady Vi Aitken Scholarship', src, 'Lady Vi Aitken Scholarship valued at $40,000 over 4 years for a top international student. … Awards for international students range from $500 to $40,000')
largest(r, 'Largest award open to international students: the Lady Vi Aitken Scholarship, C$40,000 over four years, through the entrance scholarship application (1 March; no year on the page). Awards for international students range from C$500 to C$40,000. No award at the level of full tuition is described.',
        'Крупнейшая награда для иностранцев — Lady Vi Aitken Scholarship, C$40,000 за четыре года, через заявку на вступительные стипендии (1 марта; на странице без года). Награды для иностранцев — от C$500 до C$40,000. Награды уровня полной оплаты обучения не описано.', src)

# Windsor ----------------------------------------------------------------------------
r = R('university-of-windsor')
src = 'https://www.future.uwindsor.ca/global-lancer-scholarship/'
award(r, 'Global Lancer Scholarship')['verified'] = D
C.register(r['id'], 'award: Global Lancer Scholarship', src, 'It provides up to $24,000 over four years (equivalent to up to 20% of tuition savings) based on the student’s academic performance.')
largest(r, 'Largest award on the pages read: the Global Lancer Scholarship, up to C$24,000 over four years (the university calls it up to 20% of tuition), automatic. No award at the level of full tuition is described.',
        'Крупнейшая награда на прочитанных страницах — Global Lancer Scholarship, до C$24,000 за четыре года (университет называет это экономией до 20% платы за обучение), автоматически. Награды уровня полной оплаты обучения не описано.', src)

G.save(h, rs, t)
not_described(['simon-fraser-university', 'universite-laval', 'university-of-saskatchewan', 'university-of-manitoba', 'university-of-guelph',
               'carleton-university', 'york-university', 'concordia-university', 'memorial-university-of-newfoundland',
               'university-of-new-brunswick', 'university-of-windsor'])
C.flush_research()
