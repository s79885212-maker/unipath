# -*- coding: utf-8 -*-
"""v115 — costs of Marist University and Xavier University of Louisiana.

Marist: the figures are on a web page reached from a button on the tuition page
(not a document, as first thought). Xavier of Louisiana: the 2026–2027 figures
exist only as PDF schedules; the two schedules for undergraduates were
downloaded with the owner's permission on 13 October 2026 and read as text.
Per-semester charges stay per semester; the two-semester sum used by the match
page is marked as calculated."""
import io, os, re
import us3_edit
from us200_std import *

V = '2026-10-13'
head, recs = us3_edit.load()
D = us3_edit.by_id(recs)
SEM = lambda en, ru: L('%s, per semester' % en, '%s, за семестр' % ru)

def put(uid, c, srcs):
    r = D[uid]; r['costs'] = c; r['links']['cost'] = c['source']
    v = r['verification']
    v['unconfirmed'] = [x for x in v['unconfirmed'] if x not in ('published costs', 'tuition and fees', 'costs for 2026–27')]
    if CHK['costs'] not in v['checked']: v['checked'].append(CHK['costs'])
    for lab, url in srcs:
        if not any(s['url'] == url for s in r['sources']): r['sources'].append({'label': lab, 'url': url})

# ---------------------------------------------------------------- Marist
S = 'https://www.marist.edu/financial-aid/freshman/tuition-and-fees/expenses-cost-of-attendance'
put('marist-university', costs('2026–2027', S, V, L('First-year resident students', 'Первокурсники, живущие в кампусе'),
    [(L('Tuition (12–16 credits a semester)', 'Обучение (12–16 кредитов в семестр)'), 50760, B), (L('Activity fee', 'Сбор на мероприятия'), 420, B),
     (L('Health services fee', 'Сбор за медицинское обслуживание'), 520, B), (L('Orientation fee, first semester only', 'Сбор за ориентацию — только в первом семестре'), 210, B),
     (L('Housing: first-year residence halls', 'Жильё: общежития для первокурсников'), 12430, B), (FOOD, 7700, B),
     (BOOKS, 2425, E), (TRANS, 1120, E), (L('Miscellaneous and personal', 'Прочие и личные расходы'), 1200, E), (L('Federal loan fees', 'Комиссия по федеральным кредитам'), 90, E)],
    h_coa(76875), tt_coa(76875, 72040),
    L('tuition, three fees, housing and food (billable), plus Marist’s estimates for books, transportation, personal expenses and loan fees', 'обучение, три сбора, жильё и питание (по счёту), а также оценки Marist на книги, транспорт, личные расходы и комиссию по кредиту'),
    tuition=50760, billed=72040, budget=76875,
    note=L('Marist says the cost of attendance may vary from student to student. Not in the total: an estimated $3,200 a year for students who need Marist’s comprehensive health insurance plan, and fees of particular courses. Credits above 16 a semester are billed at $940 each.', 'Marist сообщает, что стоимость может различаться у разных студентов. В итог не входят: оценочно $3,200 в год для тех, кому нужен полный медицинский полис Marist, и сборы отдельных курсов. Кредиты сверх 16 в семестр оплачиваются по $940.')),
    [(L('Marist — estimated cost of attendance 2026–27, first-year students', 'Marist — оценка стоимости обучения 2026–27, первокурсники'), S)])

# ---------------------------------------------------------------- Xavier University of Louisiana
P = 'https://www.xula.edu/fiscal-services/office-of-student-accounts/office-of-student-accounts-tuition-fees-residential-housing-and-other-costs.html'
T = 'https://www.xula.edu/fiscal-services/office-of-student-accounts/oofsa-assets/forms-2026-2027/cas_pre-pharm-2026-2027.pdf'
RB = 'https://www.xula.edu/fiscal-services/office-of-student-accounts/oofsa-assets/forms-2026-2027/room-and-board-costs-2026-2027.pdf'
c = costs('2026–2027', P, V, L('Full-time students (12–18 hours) of the College of Arts and Sciences and Pre-Pharmacy living on campus', 'Студенты с полной нагрузкой (12–18 часов) College of Arts and Sciences и Pre-Pharmacy, живущие в кампусе'),
    [(SEM('Tuition, full time (12–18 hours)', 'Обучение, полная нагрузка (12–18 часов)'), 13835, B),
     (SEM('Information technology fee', 'Сбор за информационные технологии'), 462, B),
     (SEM('XU Gold Book Bundle', 'XU Gold Book Bundle (комплект учебников)'), 350, B),
     (SEM('Health and wellness fee', 'Сбор на здоровье и благополучие'), 214, B),
     (SEM('Student activity fee', 'Сбор на студенческие мероприятия'), 144, B),
     (SEM('ID system maintenance fee', 'Сбор за обслуживание системы пропусков'), 11, B),
     (SEM('Room and board: a room for two students, by residence hall', 'Жильё и питание: комната на двоих, в зависимости от общежития'), {'min': 5564.5, 'max': 6597, 'text': '$5,564.50–$6,597'}, B),
     (SEM('Housing fee', 'Жилищный сбор'), 88, B), (SEM('Laundry', 'Прачечная'), 45, B)],
    L('$13,835 tuition per semester for full-time students', '$13,835 — обучение за семестр при полной нагрузке'),
    L('Published per semester for autumn 2026 and spring 2027: tuition $13,835 and five standing fees ($1,181 together), a room for two with board $5,564.50 to $6,597, housing fee and laundry $133. Two semesters come to $41,427–$43,492 — calculated by UniPath; the schedules print no yearly total', 'Опубликовано за семестр на осень 2026 и весну 2027: обучение $13,835 и пять постоянных сборов (вместе $1,181), комната на двоих с питанием от $5,564.50 до $6,597, жилищный сбор и прачечная $133. Два семестра — $41,427–$43,492; рассчитано UniPath, годового итога в расписаниях нет'),
    L('the charges of one semester. The annual student health insurance ($2,327), the orientation fee of the first semester ($173), the yearbook ($29), course-specific fees and personal expenses are extra', 'сборы одного семестра. Годовая студенческая медицинская страховка ($2,327), сбор за ориентацию в первом семестре ($173), ежегодник ($29), сборы отдельных курсов и личные расходы — сверх этого'),
    tuition=13835,
    note=L('Read from the two PDF schedules for 2026–2027 linked from this page: “College of Arts and Science & Pre-Pharmacy Tuition and Fees” and “Room and Board Cost & Fees”. A room reservation deposit of $300 ($100 of it a non-refundable application fee) is paid once. The schedules do not say whether the health insurance is compulsory for international students.', 'Прочитано в двух PDF-расписаниях на 2026–2027, на которые ссылается эта страница: «College of Arts and Science & Pre-Pharmacy Tuition and Fees» и «Room and Board Cost & Fees». Депозит за бронирование комнаты $300 (из них $100 — невозвратный сбор за заявку) вносится один раз. Обязательна ли медицинская страховка для иностранных студентов, в расписаниях не сказано.'))
c['breakdown']['tuitionText'] = L('$13,835 per semester', '$13,835 за семестр'); c['breakdown']['period'] = 'semester'
put('xavier-university-of-louisiana', c,
    [(L('XULA — tuition and fees schedule 2026–2027, Arts and Sciences (PDF)', 'XULA — расписание платы и сборов 2026–2027, Arts and Sciences (PDF)'), T),
     (L('XULA — room and board schedule 2026–2027 (PDF)', 'XULA — расписание жилья и питания 2026–2027 (PDF)'), RB),
     (L('XULA — tuition, fees, housing and other costs', 'XULA — плата, сборы, жильё и прочие расходы'), P)])

us3_edit.save(head, recs)

p = os.path.join(us3_edit.ROOT, 'data/match.js')
s = io.open(p, encoding='utf-8').read()
m = re.search(r'\n  annualCost: \{\n', s)
add = ("    'marist-university': { currency: 'USD', basis: 'total', min: 76875, max: 76875 },\n"
       "    'xavier-university-of-louisiana': { currency: 'USD', calc: 'two-semesters', basis: 'billed', min: 41427, max: 43492 },\n")
assert "'marist-university'" not in s and "'xavier-university-of-louisiana'" not in s
io.open(p, 'w', encoding='utf-8').write(s[:m.end()] + add + s[m.end():])
L('Billed by the university a year: {0} — books, travel, personal costs and insurance extra. Two semesters at the published per-semester rates — calculated by UniPath, not a figure the university prints',
  'Университет выставляет за год: {0} — книги, дорога, личные расходы и страховка сверх этого. Два семестра по опубликованным ставкам за семестр — рассчитано UniPath, университет такой суммы не печатает')
print('Marist and XULA costs written')
flush()
