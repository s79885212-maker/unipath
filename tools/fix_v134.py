# -*- coding: utf-8 -*-
"""v134 (read 21 October 2026): old issue 12.6.
Sarah Lawrence has published its cycle for autumn 2027 entry: the financial-aid deadlines page
asks for 2025 tax returns and lists four rounds (Early Action is new). Lesley still shows
"Fall 2026" only, so its dates stay marked as the previous cycle (re-checked).
Run once: python3 tools/fix_v134.py"""
import os
import ca50_gaps as G
from ca50_gaps import L

D = '2026-10-21'
PATH = os.path.join(G.ROOT, 'data/universities.us3.js')
head, recs, tail = G.load(PATH)
U = {r['id']: r for r in recs}

SLA = 'https://www.sarahlawrence.edu/financial-aid/undergraduate/deadlines.html'
SLF = 'https://www.sarahlawrence.edu/admission/apply/first-year.html'
NOTE = L('The pages print these dates without a year. Sarah Lawrence’s financial-aid deadlines page lists them with 2025 tax returns, which belong to the cycle for autumn 2027 entry (the older admission deadlines page still mentions 2024 returns). Read on 21 October 2026.',
         'Страницы указывают эти даты без года. На странице сроков финансовой помощи Sarah Lawrence они приведены вместе с налоговыми декларациями за 2025 год — это цикл поступления на осень 2027 (старая страница сроков поступления ещё упоминает декларации за 2024 год). Прочитано 21 октября 2026.')


def rnd(name, kind, iso, date, binding, cond):
    return {'name': name, 'kind': kind, 'entryTerm': 'Autumn', 'entryYear': '2027', 'dateISO': iso, 'date': date,
            'binding': binding, 'appliesTo': 'First-year applicants', 'conditions': cond, 'status': 'confirmed',
            'source': SLA, 'verified': D, 'note': NOTE}


sl = U['sarah-lawrence-college']
aid = [d for d in sl['admissions']['deadlines'] if d['kind'] == 'aid']
sl['admissions']['deadlines'] = G.plain([
    rnd('Early Action', 'EA', '2026-11-01', '1 November 2026', False,
        L('Not binding. Decision by late December; no deposit needed before 1 May.', 'Не обязывает. Решение — к концу декабря; депозит не нужен до 1 мая.')),
    rnd('Early Decision I', 'ED', '2026-11-01', '1 November 2026', True, 'Binding. Decision in late December.'),
    rnd('Early Decision II', 'ED2', '2027-01-15', '15 January 2027', True, 'Binding. Decision in early February.'),
    rnd('Regular Decision', 'RD', '2027-01-15', '15 January 2027', False, 'Decision from late March to early April; reply by 1 May.'),
]) + aid
G.source(sl, G.plain(L('Sarah Lawrence — financial aid requirements and deadlines', 'Sarah Lawrence — требования и сроки финансовой помощи')), SLA)
G.source(sl, G.plain(L('Sarah Lawrence — first-year applicants', 'Sarah Lawrence — поступающие на первый курс')), SLF)
G.checked(sl, 'application dates for autumn 2027 entry')

le = U['lesley-university']
for d in le['admissions']['deadlines']:
    d['verified'] = D
    d['note'] = G.plain(L('Re-checked on 21 October 2026: the page still shows the dates for fall 2026 only; the date for autumn 2027 entry is not published yet.',
                          'Перепроверено 21 октября 2026: страница всё ещё показывает только сроки на осень 2026; дата для поступления на осень 2027 пока не опубликована.'))

# ---- costs that named no academic year (Cincinnati, Arizona, Xavier); American University's
# pages answered with a bot check and stay unread.
def costs(uid, year, cat, src, items, headline, total_text, note, includes, tuition, tlabel):
    c = U[uid]['costs']
    billed = round(sum(a for _, g, a in items if g == 'billed'), 2)
    budget = round(sum(a for _, g, a in items), 2)
    c.update(G.plain({'academicYear': year, 'studentCategory': cat, 'source': src, 'verified': D,
                      'items': [{'label': l, 'group': g, 'amount': a} for l, g, a in items],
                      'headline': headline, 'totalText': total_text, 'note': note, 'billedSubtotal': billed,
                      'breakdown': {'includes': includes, 'tuition': tuition, 'tuitionLabel': tlabel, 'billed': billed, 'budget': budget}}))
    return budget

UCI = 'https://www.uc.edu/about/international/admissions/cost.html'
uc = costs('university-of-cincinnati', '2026–2027', 'International undergraduates on the Main Campus', UCI,
    [(L('Tuition and fees', 'Обучение и сборы'), 'billed', 31908), (L('Living expenses', 'Расходы на жизнь'), 'estimate', 18312), (L('Health insurance', 'Медицинская страховка'), 'billed', 2679)],
    L('$52,899 total cost of attendance', '$52,899 — полная стоимость обучения'),
    L('$52,899 a year on the Main Campus, of which $31,908 is tuition and fees', '$52,899 в год на основном кампусе, из них $31,908 — обучение и сборы'),
    L('The international page labels these figures “current academic year”; read on 21 October 2026, that is 2026–27. UC’s 2026–27 cost table gives $30,158 for a year of non-resident Uptown tuition (2026–27 cohort); the international figure also includes fees. Tuition for 2027–28 is set in June 2027.',
      'Страница для иностранцев называет эти цифры «текущий учебный год»; на дату чтения, 21 октября 2026, это 2026–27. Таблица UC на 2026–27 даёт $30,158 за год обучения для нерезидентов на кампусе Uptown (набор 2026–27); цифра для иностранцев включает ещё и сборы. Плата на 2027–28 утверждается в июне 2027.'),
    L('tuition and fees, health insurance, and the university’s estimate of living expenses', 'обучение и сборы, медицинская страховка и оценка вуза расходов на жизнь'), 31908, L('Tuition and fees', 'Обучение и сборы'))
G.source(U['university-of-cincinnati'], G.plain(L('UC — costs 2026–27', 'UC — стоимость 2026–27')), 'https://www.uc.edu/about/financial-aid/starting/costs/costs-2027.html')

AZF = 'https://financialaid.arizona.edu/cost/incoming'
az = costs('university-of-arizona', '2026–2027', 'Non-Arizona residents, incoming first-year students living on campus', AZF,
    [(L('Tuition and fees', 'Обучение и сборы'), 'billed', 44400), (L('Housing and food', 'Жильё и питание'), 'estimate', 17770), (L('Books, course materials, supplies and equipment', 'Книги, учебные материалы и оборудование'), 'estimate', 600),
     (L('Travel', 'Поездки'), 'estimate', 2450), (L('Miscellaneous', 'Прочее'), 'estimate', 2550)],
    L('$67,770 total cost of attendance', '$67,770 — полная стоимость обучения'),
    L('$67,770 estimated cost of attendance for 2026–27 for non-residents living on campus, of which $44,400 is tuition and fees', '$67,770 — оценка стоимости на 2026–27 для нерезидентов в общежитии, из них $44,400 — обучение и сборы'),
    L('From the Financial Aid office’s 2026–2027 cost of attendance (fall and spring semesters). Health insurance and college fees are not included. The admissions page adds that tuition and mandatory fees are frozen for 2027–28.',
      'По оценке стоимости 2026–2027 от офиса финансовой помощи (осенний и весенний семестры). Медицинская страховка и сборы колледжей не включены. На странице приёма добавлено, что плата и обязательные сборы заморожены на 2027–28.'),
    L('tuition and fees, housing and food, books and materials, travel and miscellaneous expenses', 'обучение и сборы, жильё и питание, книги и материалы, поездки и прочее'), 44400, L('Tuition and fees', 'Обучение и сборы'))
G.source(U['university-of-arizona'], G.plain(L('University of Arizona — cost for incoming first-year and transfer students', 'University of Arizona — стоимость для поступающих')), AZF)

XAF = 'https://www.xavier.edu/financial-aid/cost-of-attendance/index'
xa = costs('xavier-university', '2026–2027', 'First-year students living on campus', XAF,
    [(L('Tuition', 'Обучение'), 'billed', 54530), (L('Student activity fee', 'Студенческий сбор'), 'billed', 280), (L('Student ID fee', 'Сбор за студенческий билет'), 'billed', 30),
     (L('Orientation fee', 'Сбор за ориентацию'), 'billed', 305), (L('Housing and food', 'Жильё и питание'), 'billed', 14920), (L('Day One, books and supplies', 'Day One, книги и принадлежности'), 'estimate', 700),
     (L('Personal expenses', 'Личные расходы'), 'estimate', 2000), (L('Transportation', 'Транспорт'), 'estimate', 1700), (L('Average Direct Loan fee', 'Средний сбор по кредиту Direct Loan'), 'estimate', 58)],
    L('$74,523 total cost of attendance', '$74,523 — полная стоимость обучения'),
    L('$74,523 estimated cost of attendance for a first-year student on campus in 2026–27, of which $54,530 is tuition', '$74,523 — оценка стоимости на 2026–27 для первокурсника в общежитии, из них $54,530 — обучение'),
    L('Student Financial Services’ 2026–27 estimate for fall and spring. The Direct Loan fee applies only to US federal loans. The international admission page gives its own estimate without naming the year; health insurance for international students is not in this table.',
      'Оценка Student Financial Services на 2026–27 (осень и весна). Сбор Direct Loan относится только к федеральным кредитам США. На странице приёма иностранцев своя оценка без указания года; медицинской страховки для иностранцев в этой таблице нет.'),
    L('tuition, fees, on-campus housing and food, books, personal and travel expenses', 'обучение, сборы, жильё и питание в кампусе, книги, личные расходы и транспорт'), 54530, L('Tuition', 'Обучение'))
G.source(U['xavier-university'], G.plain(L('Xavier — cost of attendance', 'Xavier — стоимость обучения')), XAF)

ANNUAL = {'university-of-cincinnati': (uc, L('International undergraduates, Main Campus, 2026–27 (the page says current academic year)', 'Иностранцы в бакалавриате, основной кампус, 2026–27 (на странице — «текущий учебный год»)')),
          'university-of-arizona': (az, L('Non-resident on campus, 2026–27 cost of attendance', 'Нерезидент в общежитии, стоимость 2026–27')),
          'xavier-university': (xa, L('First-year on campus, 2026–27 cost of attendance', 'Первокурсник в общежитии, стоимость 2026–27'))}

G.save(head, recs, tail, PATH)

import io, re
mp = os.path.join(G.ROOT, 'data/match.js'); m = io.open(mp, encoding='utf-8').read()
for uid, (amt, note) in ANNUAL.items():
    pat = re.compile(r"('%s': \{ currency: 'USD', basis: 'total', min: )\d+(, max: )\d+(, note: )'[^']*'" % re.escape(uid))
    assert pat.search(m), uid
    m = pat.sub(lambda x: x.group(1) + str(int(amt)) + x.group(2) + str(int(amt)) + x.group(3) + repr(str(note)).replace('"', "'"), m)
io.open(mp, 'w', encoding='utf-8').write(m)
G.flush()
print('v134 written')
