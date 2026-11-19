"""Author verified route facts explicitly; never derive policies from keyword absence."""
from pathlib import Path
import json,re
from us200_std import L,TR,flush as flush_ru
ROOT=Path('research/admissions-120');DATA=ROOT/'requirements.json'
CHECKED='2026-11-19'
records=json.loads(DATA.read_text(encoding='utf-8')) if DATA.exists() else {}
baseline={r['id']:r for r in json.loads((ROOT/'inventory-before.json').read_text(encoding='utf-8'))['rows']}
def S(url,label,pages=None,access='html-read',quote=None):
 out={'url':url,'label':label,'verified':CHECKED,'access':access}
 if pages:out['pages']=pages
 if quote:out['quote']=quote
 return out
def cycle(label=None,years=None):
 return {'label':label or L('Published policy; intake year not stated','Опубликованные правила; год набора не указан'),'entryYears':years or [],'status':'confirmed' if years else 'year-not-stated'}
def route(label=None,language='en',kind='direct',id='international-first-year',programmeIds=None,english=None,academic=None,documents=None,sources=None,note=None,applicability=None,localLanguage=None):
 return {'id':id,'label':label or L('International first-year undergraduate admission','Поступление иностранных первокурсников на бакалавриат'),'language':language,'kind':kind,'level':'bachelor','applicant':'international-first-year','programmeIds':programmeIds or [],'applicability':applicability or cycle(),'english':english or {},'academic':academic or {},'localLanguage':localLanguage or [],'documents':documents or [],'sources':sources or [],'note':note}
def record(id,routes,change,unknown=None):
 assert id in baseline,id
 assert routes and all(r['sources'] for r in routes),id
 records[id]={'id':id,'country':baseline[id]['country'],'stage':'requirements-checked','verified':CHECKED,'routes':routes,'change':change,'unknown':unknown or [],'before':{'ielts':baseline[id]['ielts'],'toefl':baseline[id]['toefl'],'satPolicy':baseline[id]['satPolicy'],'waiver':baseline[id]['waiver']}}
def finish():
 DATA.write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 Path('data/requirements.js').write_text('/* Verified admission routes. Authoring facts and scope: research/admissions-120/requirements.json. Optional, backward-compatible layer. */\nwindow.UNIPATH.admissionRequirements = '+json.dumps({k:v['routes'] for k,v in records.items()},ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
 progress=json.loads((ROOT/'review.json').read_text(encoding='utf-8'))
 for p in progress:
  if p['id'] in records:
   r=records[p['id']];p.update(stage=r['stage'],sources=list(dict.fromkeys(s['url'] for route in r['routes'] for s in route['sources'])),unknown=r['unknown'])
 (ROOT/'review.json').write_text(json.dumps(progress,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 flush_ru()
 print('Content-reviewed records:',len(records))
