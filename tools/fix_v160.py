# -*- coding: utf-8 -*-
"""UPEI: published Business annual core cost; Lesley current route."""
import json
from pathlib import Path
import ca50_gaps as G
from ca50_gaps import L
D='2026-10-26'
src='https://www.upei.ca/fees?field_fee_faculty_target_id=190&field_type_value=international&field_time_value=fulltime&field_level_value=undergraduate'
h,rs,t=G.load();r=next(x for x in rs if x['id']=='university-of-prince-edward-island')
note=L('Business only, international full-time undergraduates, 2026–27: C$17,848 per year is published for tuition plus the international fee. Other mandatory fees, the C$200 business service fee, insurance, co-op, housing and meals are extra. This is not a full budget or a price for other faculties or 2027–28 entry.', 'Только Business, иностранный full-time бакалавриат, 2026–27: опубликованы C$17,848 в год за tuition вместе с international fee. Другие обязательные сборы, business service fee C$200, страховка, co-op, жильё и питание — отдельно. Это не полный бюджет и не цена других факультетов или набора 2027–28.')
r['costs']['totalText']=G.plain(L('The calendar lists C$813 per three-credit course and C$9,718 international fee per year. The current Business selector separately publishes C$17,848 yearly tuition plus international fee; other fees and living expenses are additional.', 'Календарь указывает C$813 за курс из трёх кредитов и international fee C$9,718 в год. Текущий селектор Business отдельно публикует C$17,848 за год обучения вместе с international fee; остальные сборы и расходы на жизнь — дополнительно.'))
r['costs']['items'].append(G.plain({'label':L('Business: tuition and international fee per year, excluding other fees','Business: tuition и international fee за год, без остальных сборов'),'amount':17848,'source':src,'verified':D}))
r['costs']['note']=G.plain(note)
G.source(r,G.plain(L('UPEI — international full-time Business fees selector, 2026–27','UPEI — селектор сборов international full-time Business, 2026–27')),src);G.save(h,rs,t)
p=Path(G.ROOT)/'data/match.js';s=p.read_text(encoding='utf-8');assert "'university-of-prince-edward-island':" not in s
row={'currency':'CAD','basis':'tuition','period':'year','min':17848,'max':17848,'example':True,'scopeFields':['business'],'academicYear':'2026–2027','source':src,'verified':D,'note':str(note)}
s=s.replace('  annualCost: {',"  annualCost: {\n    'university-of-prince-edward-island': "+json.dumps(row,ensure_ascii=False)+',');p.write_text(s,encoding='utf-8')
new='https://lesley.edu/admissions/undergraduate-students/how-to-apply-undergraduate';path=str(Path(G.ROOT)/'data/universities.us3.js');h,rs,t=G.load(path);r=next(x for x in rs if x['id']=='lesley-university')
r['links']['admissions']=new
for d in r['admissions']['deadlines']:
 if d.get('status')=='previous-cycle':
  d.update(G.plain({'source':new,'verified':D,'note':L('The replacement undergraduate admissions page still explicitly labels preferred deadlines Fall 2026. Rolling admission does not establish a dated Fall 2027 deadline. The former /admissions-aid/ route returns 404.', 'Новая страница undergraduate admissions по-прежнему явно относит предпочтительные сроки к Fall 2026. Rolling admission не устанавливает датированный дедлайн Fall 2027. Прежний маршрут /admissions-aid/ возвращает 404.')}))
G.source(r,G.plain(L('Lesley — current undergraduate application instructions','Lesley — текущие инструкции подачи на бакалавриат')),new);G.save(h,rs,t,path)
L('The recorded yearly cost is for a different field of study. No comparable cost is confirmed for your selected field.','Записанная годовая стоимость относится к другому направлению. Для выбранного направления сопоставимая стоимость не подтверждена.')
G.flush()
