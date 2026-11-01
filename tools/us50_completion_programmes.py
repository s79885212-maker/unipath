"""Apply reviewed USA50 majors and language policies using the existing public schema.
Run after older batch builders; no admission/cost/photo or baseline IDs are changed.
"""
import json,pathlib,re
from ca50_gaps import load,save
from us200_std import L,flush
ROOT=pathlib.Path(__file__).resolve().parent.parent
sources=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
allowed={x['id'] for x in json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
valid=set(re.findall(r"id:\s*'([^']+)'",(ROOT/'data/registry.js').read_text(encoding='utf-8')))
path=ROOT/'data/universities.us3.js';head,rows,tail=load(str(path));byid={x['id']:x for x in rows}
def partial_note(u):
 old=u.get('programNote')
 u['programNote']=L('The named bachelor majors below have official campus evidence; this is a partial list, not a full catalogue. A missing field is not proof that it is unavailable. School admission, pre-major progression and programme-specific conditions must be checked separately. Teaching language is confirmed only where explicitly shown below.',
   'Указанные ниже основные программы бакалавриата подтверждены официальными источниками этого кампуса; список частичный, не полный каталог. Отсутствие направления не доказывает отсутствие программы. Отдельно проверяйте приём в школу, переход из pre-major и условия конкретной программы. Язык обучения подтверждён только там, где это прямо указано ниже.')
 if old:u['verification']['unconfirmed']=[u['programNote'] if x==old else x for x in u['verification']['unconfirmed']]
def add_source(u,label,url):
 if not any(x['url']==url for x in u['sources']):u['sources'].append(dict(label=label,url=url))
updated=set()
for evidence in sources:
 if evidence['topic']!='undergraduate-major-coverage':continue
 assert evidence['access']=='html-read' and evidence['id'] in allowed
 u=byid[evidence['id']];facts=evidence['facts'];pr=u.setdefault('programEvidence',{})
 for field,name in facts['programs'].items():
  assert field in valid and isinstance(name,str) and name
  if facts.get('programmeNamesRu',{}).get(field):L(name,facts['programmeNamesRu'][field])
  pr[field]=dict(program=name,level='bachelor',language=None,campus=evidence['campus'],url=evidence['source'],checked=evidence['verified'])
 u['programs']=list(pr);u['programsStatus']='partial';u['programsBasis']='evidence';u['links']['programs']=facts.get('catalogueUrl') or evidence['source'];u['lastVerified']=max(u.get('lastVerified') or '',evidence['verified'])
 partial_note(u)
 add_source(u,L('Undergraduate majors — named campus programmes','Программы бакалавриата — подтверждённые программы кампуса'),evidence['source'])
 entry=facts.get('programmeEntryNote')
 if entry:
  text=L(entry['en'],entry['ru'])
  if text not in u['admissions']['notes']:u['admissions']['notes'].append(text)
 updated.add(u['id'])
languages=set()
for evidence in sources:
 if evidence['topic']!='instruction-language' or evidence['access']!='html-read':continue
 assert evidence['id'] in allowed
 facts=evidence['facts']
 if facts.get('scopeType')!='campus-instruction-policy':continue
 u=byid[evidence['id']];pr=u.get('programEvidence',{});matched=[]
 for f,name in facts.get('appliesToProgrammes',{}).items():
  if f in pr and f in facts.get('appliesToFields',[]) and pr[f]['program']==name:
   pr[f]['language']='English';matched.append(f)
 if not matched:continue
 u['englishTaughtPrograms']=[f for f,p in pr.items() if p.get('language')=='English'];u['englishTaught']=True
 u['languageOfInstruction']=L('English — verified campus instruction statement','Английский — подтверждённое указание языка обучения кампуса')
 u['lastVerified']=max(u.get('lastVerified') or '',evidence['verified']);partial_note(u)
 add_source(u,L('Teaching language — official campus statement','Язык обучения — официальное указание кампуса'),evidence['source'])
 languages.add(u['id'])
save(head,rows,tail,str(path));flush();print('Core majors:',len(updated),'approved profiles; scoped teaching language:',len(languages),'; admissions/costs/photos preserved')
