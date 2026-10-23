# -*- coding: utf-8 -*-
"""Gaps, round 6 (read 23 October 2026, PDFs downloaded with the owner's permission):
UNB Fredericton 2026–2027 full-time undergraduate tuition and fees for international students,
from the per-programme fee tables (Arts, Computer Science, Engineering). The printed yearly
totals ("Student attending both terms") equal the sum of their lines.
Run once: python3 tools/ca50_gaps6.py"""
import io, os, re
import ca50_gaps as G
from ca50_gaps import L

D = '2026-10-23'
head, recs, tail = G.load()
U = {r['id']: r for r in recs}
FP = 'https://www.unb.ca/finance/financial-services/undergraduate/fredericton.html'
PDF = 'https://www.unb.ca/finance/_assets/documents/financial-services/fredericton-tuition/undergrad/fred_ug_%s_ft.pdf'

u = U['university-of-new-brunswick']
c = u['costs']
c.pop('status', None)
c.update(G.plain({
    'breakdown': {'includes': L('tuition, mandatory fees, Student Union health and dental plans, international bus pass and health insurance, for Fall and Winter', 'обучение, обязательные сборы, медицинский и стоматологический планы студенческого союза, проездной и страховка для иностранцев — за осень и зиму'),
                  'tuition': 20903},
    'academicYear': '2026–2027',
    'studentCategory': L('International undergraduates, full time, Fredericton campus, attending both terms', 'Иностранцы в бакалавриате, очно, кампус Фредериктон, оба семестра'),
    'source': FP, 'verified': D,
    'headline': L('C$22,754–C$27,722 tuition and fees for a year (2026–27)', 'C$22,754–C$27,722 — обучение и сборы за год (2026–27)'),
    'items': [
        {'label': L('Arts — total for international students (tuition C$20,903)', 'Arts — итог для иностранцев (обучение C$20,903)'), 'amount': 22754},
        {'label': L('Computer Science — total for international students (tuition C$22,514)', 'Computer Science — итог для иностранцев (обучение C$22,514)'), 'amount': 24365},
        {'label': L('Engineering, except Software or Geological — total for international students (tuition C$25,871)', 'Engineering, кроме Software и Geological — итог для иностранцев (обучение C$25,871)'), 'amount': 27722}],
    'billedSubtotal': None,
    'totalText': L('UNB’s 2026–2027 fee tables (effective 1 September 2026) give C$22,754 for Arts, C$24,365 for Computer Science and C$27,722 for Engineering for an international student attending both terms; housing and food are extra',
                   'Таблицы платы UNB на 2026–2027 (действуют с 1 сентября 2026) дают C$22,754 для Arts, C$24,365 для Computer Science и C$27,722 для Engineering для иностранца на оба семестра; жильё и питание — отдельно'),
    'note': L('Each total includes mandatory fees (C$831.50), Student Union health (C$235) and dental (C$140) plans, the international bus pass (C$180), UNB emergency health insurance (C$400) and travel health insurance (C$64.50). Online or web-based courses cost C$150 extra per course; first-year orientation C$80. Other programmes and the Saint John campus have their own tables.',
              'В каждый итог входят обязательные сборы (C$831.50), медицинский (C$235) и стоматологический (C$140) планы студенческого союза, проездной для иностранцев (C$180), экстренная медицинская страховка UNB (C$400) и страховка для поездок (C$64.50). Онлайн- и веб-курсы — ещё C$150 за курс; ориентация первокурсников — C$80. У других программ и кампуса Сент-Джон свои таблицы.')}))
for f, lab in (('arts', 'Arts'), ('compsci', 'Computer Science'), ('eng', 'Engineering')):
    G.source(u, G.plain(L('UNB Fredericton — 2026–2027 tuition and fees, %s (PDF)' % lab, 'UNB Фредериктон — плата 2026–2027, %s (PDF)' % lab)), PDF % f)
G.source(u, G.plain(L('UNB Fredericton — undergraduate tuition and fees', 'UNB Фредериктон — плата за бакалавриат')), FP)
G.checked(u, 'tuition')
G.save(head, recs, tail)

mp = os.path.join(G.ROOT, 'data/match.js'); m = io.open(mp, encoding='utf-8').read()
assert "'university-of-new-brunswick'" not in m
note = L('Tuition and fees 2026–27 for an international student attending both terms, Fredericton (Arts to Engineering); housing and food extra',
         'Обучение и сборы 2026–27 для иностранца на оба семестра, Фредериктон (от Arts до Engineering); жильё и питание — отдельно')
line = "    'university-of-new-brunswick': { currency: 'CAD', basis: 'billed', min: 22754, max: 27722, note: %s },\n" % repr(str(note))
anchor = re.search(r"\n    'university-of-windsor': \{[^\n]*\n", m)
m = m[:anchor.end()] + line + m[anchor.end():]
io.open(mp, 'w', encoding='utf-8').write(m)
G.flush()
print('round 6 written')
