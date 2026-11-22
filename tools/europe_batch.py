# -*- coding: utf-8 -*-
"""Rebuild reviewed Europe records from bilingual authoring JSON; never fetches sources."""
import json,re
from pathlib import Path
from us200 import R
from us200_std import L,flush
ROOT=Path(__file__).resolve().parents[1]
def text(v):
 if isinstance(v,dict) and set(v)=={'en','ru'}:return L(v['en'],v['ru'])
 if isinstance(v,dict):return {k:text(x) for k,x in v.items()}
 if isinstance(v,list):return [text(x) for x in v]
 return v
manifest={}
annual={}
for path in sorted((ROOT/'research/europe').glob('country-*.json')):
 cfg=text(json.loads(path.read_text(encoding='utf8')));country=cfg['country'];code=country['code'];records=[]
 for x in cfg['universities']:
  r=R(x['id'],x['name'],x.get('shortName',x['name']),x['city'],x.get('region'),x.get('institutionKind','public'),x['type'],x['description'],x['fields'],x['links'],verified='2026-11-22')
  r['programsStatus']='partial';r['country']=code;r['programNote']=x['programme'];r['programsBasis']={'status':'partial','note':L('Only the named bachelor programme was reviewed; other subject areas are not ruled out.','Проверена только указанная программа бакалавриата; отсутствие других направлений не установлено.')}
  r['languageOfInstruction']=x.get('languageOfInstruction','English');r['admissions']['documents']=x['documents'];r['admissions']['notes']=x.get('notes',[]);r['admissions']['platforms']=x.get('platforms',[]);r['admissions']['deadlines']=x.get('deadlines',[])
  r['admissions']['applicationFee']['currency']='EUR'
  if x.get('fee') is not None:r['admissions']['applicationFee'].update(x['fee'])
  r['english'].update(x['english']);r['academics'].update(x['academic']);r['costs']=x['costs'];r['scholarships']['needBased']['note']=x.get('fundingNote')
  r['sources']=[{'label':v['label'],'url':v['url'],'verified':'2026-11-22'} for v in x['sources']]
  r['verification']['checked']=[L('Named programme, campus, teaching language and international entry route.','Указанная программа, кампус, язык обучения и маршрут иностранного абитуриента.')];r['verification']['unconfirmed']=x['gaps']
  route=x.get('route')
  if route:r['admissionRequirements']=[route]
  if r['costs'].get('status')=='confirmed' and r['costs'].get('breakdown',{}).get('tuition') is not None:
   n=r['costs']['breakdown']['tuition'];annual[r['id']]={'min':n,'max':n,'currency':'EUR','basis':'tuition','year':r['costs']['academicYear'],'source':r['costs']['source'],'verified':'2026-11-22'}
  records.append(r)
 (ROOT/('data/universities.'+code+'.js')).write_text('/* Reviewed Europe starter batch. Sources and scope: research/europe/country-'+code+'.json. */\nwindow.UNIPATH.universities.push(\n'+',\n'.join(json.dumps(r,ensure_ascii=False,indent=2) for r in records)+'\n);\n',encoding='utf8')
 (ROOT/('data/country.'+code+'.js')).write_text('/* Europe country metadata. */\nwindow.UNIPATH.countries.push('+json.dumps(country,ensure_ascii=False,indent=2)+');\n',encoding='utf8')
 manifest[code]=[r['id'] for r in records]
 for file in ['index.html','build-artifact.py','tools/prerender.py']:
  p=ROOT/file;s=p.read_text(encoding='utf8')
  for added in ['country.'+code+'.js','universities.'+code+'.js']:
   name='data/'+added
   if name not in s:
    if file=='index.html':
     marker=re.search(r'    <script src="data/universities.ca.js\?v=\d+"></script>',s).group(0)
     version=re.search(r'\?v=(\d+)',s).group(1);s=s.replace(marker,marker+'\n    <script src="'+name+'?v='+version+'"></script>')
    else:s=s.replace('    "data/universities.ca.js",','    "data/universities.ca.js",\n    "'+name+'",')
  p.write_text(s,encoding='utf8')
(ROOT/'research/europe/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
p=ROOT/'data/match.js'
s=p.read_text(encoding='utf8').split('\n/* EUROPE STARTER COSTS */')[0]
s+='\n/* EUROPE STARTER COSTS */\nObject.assign(window.UNIPATH.match.annualCost, '+json.dumps(annual,ensure_ascii=False,indent=2)+');\n'
p.write_text(s,encoding='utf8')
flush()
print({k:len(v) for k,v in manifest.items()})
