# -*- coding: utf-8 -*-
"""Guelph: replace prior-cycle estimates with Cohort 2026 semester tariffs."""
import json
from pathlib import Path
import ca50_gaps as G
from ca50_gaps import L

D='2026-10-24';src='https://www.uoguelph.ca/registrar/finances-fees/tuition-fees/guelph-undergrad'
h,records,t=G.load();r=next(x for x in records if x['id']=='university-of-guelph')
r['costs']=G.plain({
    'status':'confirmed','academicYear':'2026–2027','currency':'CAD','source':src,'verified':D,
    'studentCategory':L('International Cohort 2026; standard bachelor’s programmes, at least 2.00 credits per semester', 'Иностранные студенты Cohort 2026; стандартные бакалаврские программы, от 2.00 кредитов за семестр'),
    'headline':L('C$22,276.10–C$31,475.49 tuition per semester, Cohort 2026', 'C$22,276.10–C$31,475.49 за обучение в семестр, Cohort 2026'),
    'breakdown':{'period':'semester','tuition':22276.10,
        'tuitionText':L('C$22,276.10–C$31,475.49 per semester (Arts & Science through Engineering)', 'C$22,276.10–C$31,475.49 за семестр (Arts & Science — Engineering)'),
        'includes':L('Tuition only; compulsory fees, UHIP and living expenses are additional', 'Только обучение; обязательные сборы, UHIP и расходы на жизнь — отдельно')},
    'items':[
        {'label':L('Arts & Science tuition, one semester', 'Arts & Science: tuition за семестр'),'amount':22276.10},
        {'label':L('Commerce tuition, one semester', 'Commerce: tuition за семестр'),'amount':27196.31},
        {'label':L('Computing tuition, one semester', 'Computing: tuition за семестр'),'amount':28003.39},
        {'label':L('Engineering tuition, one semester', 'Engineering: tuition за семестр'),'amount':31475.49},
        {'label':L('Landscape Architecture tuition, one semester', 'Landscape Architecture: tuition за семестр'),'amount':27201.70},
        {'label':L('Compulsory fees, Fall 2026', 'Обязательные сборы, Fall 2026'),'amount':969.82},
        {'label':L('Compulsory fees, Winter 2027', 'Обязательные сборы, Winter 2027'),'amount':673.71}],
    'billedSubtotal':None,
    'totalText':L('Published tuition rates are for one semester, Cohort 2026; no full-year cost-of-attendance total is selected.', 'Опубликованные тарифы — за один семестр для Cohort 2026; годовой total cost of attendance не выбран.'),
    'note':L('Two fully enrolled Fall/Winter semesters give C$44,552.20–C$62,950.98 tuition — calculated by UniPath. Fees, health insurance, housing, meals, books and personal expenses are extra. DVM, diploma, part-time study and other entry cohorts are outside this comparison. The former conflicting 2025–26 overall estimates are not used as a current budget.', 'Два семестра Fall/Winter с полной нагрузкой дают C$44,552.20–C$62,950.98 tuition — расчёт UniPath. Сборы, медицинская страховка, жильё, питание, книги и личные расходы — отдельно. DVM, дипломные программы, part-time и другие когорты не входят в это сравнение. Прежние противоречивые общие сметы 2025–26 не используются как текущий бюджет.')})
G.source(r,G.plain(L('Guelph Registrar — 2026–27 tariffs by cohort and semester', 'Guelph Registrar — тарифы 2026–27 по когорте и семестру')),src)
G.save(h,records,t)
p=Path(G.ROOT)/'data/match.js';s=p.read_text(encoding='utf8');assert "'university-of-guelph':" not in s
row={'currency':'CAD','basis':'tuition','calc':'two-semesters','period':'year','min':44552.20,'max':62950.98,'academicYear':'2026–2027','source':src,'verified':D,
    'note':str(L('Cohort 2026, two full Fall/Winter semesters in standard bachelor’s programmes; calculated by UniPath. DVM, diplomas, other cohorts and all fees/living expenses excluded.', 'Cohort 2026, два полных семестра Fall/Winter стандартных бакалаврских программ; расчёт UniPath. DVM, дипломные программы, другие когорты и все сборы/расходы на жизнь исключены.'))}
s=s.replace('  annualCost: {',"  annualCost: {\n    'university-of-guelph': "+json.dumps(row,ensure_ascii=False)+',');p.write_text(s,encoding='utf8')
L('{0}. Scope: {1}', '{0}. Область сравнения: {1}')
G.flush()
