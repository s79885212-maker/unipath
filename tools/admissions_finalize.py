from pathlib import Path
import json,collections
from admissions_records import L,flush_ru
root=Path('research/admissions-120')
replacements=[('us','dordt-university','university-of-dallas','The official applicant page requires a robot challenge; the official catalogue could not be read.'),('kr','inha-university','kaist','Official centre and admissions sources timed out; third-party copies were not treated as verified originals.'),('kr','konkuk-university','unist','Official Seoul admissions board returned a web firewall block; GLOCAL sources cannot substitute for Seoul.')]
p=root/'selection.json';sel=json.loads(p.read_text(encoding='utf8'))
for country,old,new,reason in replacements:
 if old in sel[country]:sel[country][sel[country].index(old)]=new
p.write_text(json.dumps(sel,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
(root/'blocked-queue.json').write_text(json.dumps([dict(country=c,id=o,reviewedInstead=n,reason=why,status='source-unavailable-not-content-reviewed') for c,o,n,why in replacements],ensure_ascii=False,indent=2)+'\n',encoding='utf8')
records=json.loads((root/'requirements.json').read_text(encoding='utf8'))
review=json.loads((root/'review.json').read_text(encoding='utf8'))
for c,old,new,why in replacements:
 for r in review:
  if r['id']==old:r.update(id=new,country=c,stage='requirements-checked',replacementFor=old)
for r in review:
 fact=records[r['id']]
 r.update(sources=list(dict.fromkeys(s['url'] for route in fact['routes'] for s in route['sources'])),unknown=fact['unknown'])
 r['stages']={'selected':True,'sourcesFound':True,'requirementsChecked':True,'cardUpdated':True,'browserChecked':False}
(root/'review.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
# A checked programme must not be assigned to a broad, unrelated field.
p=Path('tools/admissions_us_11.py');text=p.read_text(encoding='utf8');text=text.replace("programmeIds=['health','engineering'],",'');p.write_text(text,encoding='utf8')
p=Path('tools/prerender.py');text=p.read_text(encoding='utf8').replace('SAT/ACT accepted; obligation not established','Academic test acceptance is scoped; obligation not established');p.write_text(text,encoding='utf8')
L('An academic test score was entered. Its programme-specific minimum and subject requirements have not been verified.','Академический балл введён. Его минимум для программы и требования к отдельным предметам не проверены.')
L('Academic test minimum and subject requirements','Минимум академического теста и требования к предметам')
flush_ru()
p=Path('index.html');p.write_text(p.read_text(encoding='utf8').replace('?v=256','?v=257'),encoding='utf8')
print('Selection',dict(collections.Counter(r['country'] for r in records.values())))
