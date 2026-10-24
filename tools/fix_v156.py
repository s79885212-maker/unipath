# -*- coding: utf-8 -*-
"""UNBC: annualise only the explicitly stated 30-credit planning workload."""
import json
from pathlib import Path
import ca50_gaps as G
from ca50_gaps import L

D='2026-10-24'
rate='https://www.unbc.ca/finance/accounts-receivable/tuition-and-fees'
load='https://www.unbc.ca/programs-and-admissions/undergraduate/tuition-and-fees'
h,records,t=G.load();r=next(x for x in records if x['id']=='university-of-northern-british-columbia');c=r['costs']
oldsrc=c['source'];oldverified=c['verified']
for item in c['items']:
    item.update({'source':oldsrc if item['amount']==125 else rate,'verified':oldverified if item['amount']==125 else D})
c.update(G.plain({'source':rate,'verified':D,
    'note':L('The finance page explicitly gives the 2026–27 international rate of C$1,040.15 per credit. For the university’s first-year planning example of 30 credits per academic year, tuition is C$31,204.50 — calculated by UniPath, not a published annual total. Mandatory fees, insurance, housing and food are additional. The C$125 semester fee above retains its earlier calendar source and review date; it is not included in this tuition-only comparison. The admissions-page overall estimate mixes housing-year information and is not used as a current total.', 'Финансовая страница явно указывает международную ставку 2026–27 C$1,040.15 за кредит. При опубликованном вузом примере первокурсника 30 кредитов за учебный год tuition составляет C$31,204.50 — расчёт UniPath, не опубликованный годовой total. Обязательные сборы, страховка, жильё и питание — отдельно. Сбор C$125 за семестр выше сохраняет прежний источник календаря и дату проверки; он не включён в сравнение tuition. Общая смета страницы приёма смешивает годы жилья и не используется как текущий total.')}))
G.source(r,G.plain(L('UNBC — explicit 2026–27 international per-credit rate','UNBC — явная международная ставка за кредит 2026–27')),rate)
G.source(r,G.plain(L('UNBC — first-year annual planning workload: 30 credits','UNBC — плановая годовая нагрузка первокурсника: 30 кредитов')),load)
G.save(h,records,t)
p=Path(G.ROOT)/'data/match.js';s=p.read_text(encoding='utf8')
assert "'university-of-northern-british-columbia':" not in s
note=L('2026–27 tuition-only scenario for the official 30-credit annual workload; calculated by UniPath. Mandatory fees and living costs are additional.', 'Сценарий tuition 2026–27 при официальном примере нагрузки 30 кредитов за год; расчёт UniPath. Обязательные сборы и расходы на жизнь — отдельно.')
row={'currency':'CAD','basis':'tuition','calc':'credit-load','period':'year','min':31204.5,'max':31204.5,'perCredit':1040.15,'creditsPerYear':30,'academicYear':'2026–2027','source':rate,'verified':D,'workloadSource':load,'workloadVerified':D,'note':str(note)}
needle='  annualCost: {';assert s.count(needle)==1
s=s.replace(needle,needle+"\n    'university-of-northern-british-columbia': "+json.dumps(row,ensure_ascii=False)+',')
p.write_text(s,encoding='utf8')
L('Tuition a year: {0} — living costs extra. {#1} credits per academic year at the published per-credit rate — calculated by UniPath; mandatory fees, insurance, housing and food are extra','Обучение в год: {0} — жизнь оплачивается отдельно. {1} кредитов за учебный год по опубликованной ставке за кредит — расчёт UniPath; обязательные сборы, страховка, жильё и питание — отдельно')
G.flush()
