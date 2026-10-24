# -*- coding: utf-8 -*-
"""Use Ontario Tech's actual Fall 2027 context, not weekday arithmetic."""
import io,json,os
import ca50_gaps as G
from ca50_gaps import L
D='2026-10-24';src='https://admissions.ontariotechu.ca/applicant-information/international-applicants.php'
h,records,t=G.load();r=next(x for x in records if x['id']=='ontario-tech-university')
for d in r['admissions']['deadlines']:
    assert d['source']==src
    d.update(G.plain({'verified':D,'cycleEvidence':{'basis':'page-context','entryTerm':'Autumn','entryYear':'2027','source':src,'verified':D,'quote':'Fall 2027'},
        'note':L('The admissions page explicitly identifies Fall 2027 before this timeline. The cycle is established by that page context, not by the weekday matching a guessed year. The offer letter sets the applicant’s actual reply deadline.', 'Перед календарём страница приёма явно указывает Fall 2027. Цикл установлен этим контекстом, а не совпадением дня недели с предполагаемым годом. Фактический срок ответа абитуриента указан в offer letter.')}))
    if d['kind']=='scholarship':d.update({'awardId':'global-leadership','awardCategory':'merit'});d.pop('binding',None)
a=next(a for a in r['scholarships']['merit'] if a['name']=='Global Leadership Award')
a.update(G.plain({'id':'global-leadership','category':'merit','entryTerm':'Autumn','entryYear':'2027','verified':D,
    'note':L('Competitive C$120,000 award over four years; no full-cost coverage is inferred from the amount. The admissions timeline establishes the 11 February deadline for Fall 2027. The award office’s separate page still labels the 2026–27 competition closed; this does not establish when the 2027 award application opens or confirm all 2027 terms.', 'Конкурсная стипендия C$120,000 за четыре года; сумма не считается доказательством покрытия всех расходов. Календарь приёма устанавливает 11 февраля для Fall 2027. Отдельная страница стипендиального офиса всё ещё отмечает закрытым конкурс 2026–27; это не устанавливает открытие заявок 2027 и не подтверждает все условия нового конкурса.')}))
G.source(r,G.plain(L('Ontario Tech — Fall 2027 international admissions timeline','Ontario Tech — календарь международного приёма Fall 2027')),src)
G.save(h,records,t)
p=os.path.join(G.ROOT,'data/photos.js');s=io.open(p,encoding='utf8').read()
for old,new in [
('Olin College Great Lawn',L('Olin College Great Lawn — historic photograph, 2002','Большая лужайка Olin College — исторический снимок, 2002')),
('Temple University Japan — Setagaya',L('Temple University Japan — Setagaya, 2019','Temple University Japan — Setagaya, 2019'))]:
    key=json.dumps(old,ensure_ascii=False);assert s.count(key)==1
    s=s.replace(key,json.dumps(str(new),ensure_ascii=False))
io.open(p,'w',encoding='utf8').write(s);G.flush()
