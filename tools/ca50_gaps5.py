# -*- coding: utf-8 -*-
"""Gaps, round 5 (read 21 October 2026): Windsor's 2026–2027 fees from the university's
Tuition Fee Estimator (international, full time, undergraduate; Fall and Winter give the
same per-term figures). The estimator's "Estimated Total" adds every listed fee, including
co-op "if applicable", fees of other faculties' societies and fees charged once a year, so
the record keeps the per-term tuition and lists the main fees as printed; the yearly figure
in the match table is two terms of tuition, marked as calculated by UniPath.
Run once: python3 tools/ca50_gaps5.py"""
import io, os, re
import ca50_gaps as G
from ca50_gaps import L

D = '2026-10-21'
head, recs, tail = G.load()
U = {r['id']: r for r in recs}
WF = 'https://www.uwindsor.ca/finance/fee-estimator'

w = U['university-of-windsor']
w['costs'] = G.plain({
    'breakdown': {'includes': L('base tuition for one term; fees listed separately as printed', 'базовая плата за один семестр; сборы перечислены отдельно, как напечатаны'),
                  'tuition': 16500, 'period': 'semester'},
    'academicYear': '2026–2027', 'currency': 'CAD',
    'studentCategory': L('International undergraduates, full time, one term (Fall or Winter)', 'Иностранцы в бакалавриате, очно, один семестр (осень или зима)'),
    'source': WF, 'verified': D,
    'headline': L('C$16,500–C$18,750 tuition a term (2026–27)', 'C$16,500–C$18,750 — обучение за семестр (2026–27)'),
    'items': [
        {'label': L('Base tuition — Arts, Humanities, Social Science (each term)', 'Базовая плата — Arts, Humanities, Social Science (каждый семестр)'), 'amount': 16500},
        {'label': L('Base tuition — Computer Science (each term)', 'Базовая плата — Computer Science (каждый семестр)'), 'amount': 18750},
        {'label': L('International health insurance (once per academic year)', 'Медицинская страховка для иностранцев (раз в учебный год)'), 'amount': 985.09},
        {'label': L('UWSA bus pass (once per academic year)', 'Проездной UWSA (раз в учебный год)'), 'amount': 316.48},
        {'label': L('UWSA drug plan (once per academic year)', 'Лекарственный план UWSA (раз в учебный год)'), 'amount': 251},
        {'label': L('UWSA dental plan (once per academic year)', 'Стоматологический план UWSA (раз в учебный год)'), 'amount': 174},
        {'label': L('Co-op fee for international students (if applicable, each term)', 'Сбор co-op для иностранцев (если применимо, каждый семестр)'), 'amount': 601}],
    'billedSubtotal': None,
    'totalText': L('Approved 2026–27 fees: base tuition is C$16,500 a term in Arts, Humanities and Social Science and C$18,750 in Computer Science. The estimator’s per-term “Estimated Total” (C$19,336.42 and C$21,593.92) adds every listed fee, including co-op and fees charged once a year or only in some faculties, so it is not used as a total here.',
                   'Утверждённая плата 2026–27: базовая плата — C$16,500 за семестр в Arts, Humanities и Social Science и C$18,750 в Computer Science. «Estimated Total» калькулятора за семестр (C$19,336.42 и C$21,593.92) складывает все перечисленные сборы, включая co-op и сборы раз в год или только для некоторых факультетов, поэтому здесь как итог не используется.'),
    'note': L('Smaller per-term fees (recreation, wellness, UWinCard, student societies) come to a few hundred dollars. Base tuition stays stable for the programme’s duration for international students (except the US Neighbour rate). Housing and food are extra.',
              'Мелкие сборы за семестр (спорт, здоровье, UWinCard, студенческие общества) — несколько сотен долларов. Базовая плата для иностранцев не меняется весь срок программы (кроме ставки US Neighbour). Жильё и питание — отдельно.')})
G.checked(w, 'tuition')
G.save(head, recs, tail)

mp = os.path.join(G.ROOT, 'data/match.js'); m = io.open(mp, encoding='utf-8').read()
assert "'university-of-windsor'" not in m
note = L('Base tuition for two terms (Fall and Winter) at the 2026–27 rates for Arts and Computer Science — calculated by UniPath, not printed by the university; fees, health insurance, housing and food extra',
         'Базовая плата за два семестра (осень и зима) по ставкам 2026–27 для Arts и Computer Science — расчёт UniPath, вуз эту сумму не печатает; сборы, страховка, жильё и питание — отдельно')
line = "    'university-of-windsor': { currency: 'CAD', calc: 'two-semesters', basis: 'tuition', min: 33000, max: 37500, note: %s },\n" % repr(str(note))
anchor = re.search(r"\n    'universite-de-sherbrooke': \{[^\n]*\n", m)
m = m[:anchor.end()] + line + m[anchor.end():]
io.open(mp, 'w', encoding='utf-8').write(m)
G.flush()
print('round 5 written')
