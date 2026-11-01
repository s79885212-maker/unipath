"""Apply manually reviewed USA50 programme evidence using the existing profile schema.
Run after an older batch builder: only approved new IDs and named bachelor fields change.
"""
import json,pathlib,re
from ca50_gaps import load,save
from us200_std import L,flush
ROOT=pathlib.Path(__file__).resolve().parent.parent
sources=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
allowed={x['id'] for x in json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
valid=set(re.findall(r"id:\s*'([^']+)'",(ROOT/'data/registry.js').read_text(encoding='utf-8')))
path=ROOT/'data/universities.us3.js';head,rows,tail=load(str(path));byid={x['id']:x for x in rows};updated=[]
for evidence in sources:
 if evidence['topic']!='undergraduate-major-coverage':continue
 assert evidence['access']=='html-read' and evidence['id'] in allowed
 u=byid[evidence['id']];facts=evidence['facts'];old_note=u.get('programNote');pr=u.setdefault('programEvidence',{})
 language=next((x for x in sources if x['id']==u['id'] and x['topic']=='instruction-language' and x['access']=='html-read'),None)
 for field,name in facts['programs'].items():
  assert field in valid and isinstance(name,str) and name
  pr[field]=dict(program=name,level='bachelor',language='English' if language and language['facts'].get('scopeType')=='campus-instruction-policy' and field in language['facts'].get('appliesToFields',[]) else None,campus=evidence['campus'],url=evidence['source'],checked=evidence['verified'])
 u['programs']=list(pr);u['programsStatus']='partial';u['programsBasis']='evidence';u['links']['programs']=facts.get('catalogueUrl') or evidence['source'];u['lastVerified']=max(u.get('lastVerified') or '',evidence['verified'])
 if language and language['facts'].get('scopeType')=='campus-instruction-policy':
  for f in language['facts'].get('appliesToFields',[]):
   if f in pr:pr[f]['language']='English'
  label=L('Teaching language — official campus statement','Язык обучения — официальное указание кампуса')
  if not any(x['url']==language['source'] for x in u['sources']):u['sources'].append(dict(label=label,url=language['source']))
 u['englishTaughtPrograms']=[f for f,p in pr.items() if p.get('language')=='English']
 u['englishTaught']=True if u['englishTaughtPrograms'] else None
 if u['englishTaughtPrograms']:u['languageOfInstruction']=L('English — verified campus instruction statement','Английский — подтверждённое указание языка обучения кампуса')
 u['programNote']=L('The named bachelor majors below have official campus evidence; this is a partial list, not a full catalogue. A missing field is not proof that it is unavailable. School admission, pre-major progression and programme-specific conditions must be checked separately. Teaching language is confirmed only where explicitly shown below.',
   'Указанные ниже основные программы бакалавриата подтверждены официальными источниками этого кампуса; список частичный, не полный каталог. Отсутствие направления не доказывает отсутствие программы. Отдельно проверяйте приём в школу, переход из pre-major и условия конкретной программы. Язык обучения подтверждён только там, где это прямо указано ниже.')
 if old_note:
  u['verification']['unconfirmed']=[u['programNote'] if x==old_note else x for x in u['verification']['unconfirmed']]
 label=L('Undergraduate majors — named campus programmes','Программы бакалавриата — подтверждённые программы кампуса')
 if not any(x['url']==evidence['source'] for x in u['sources']):u['sources'].append(dict(label=label,url=evidence['source']))
 entry=facts.get('programmeEntryNote')
 if entry:
  text=L(entry['en'],entry['ru'])
  if text not in u['admissions']['notes']:u['admissions']['notes'].append(text)
 updated.append(u['id'])
save(head,rows,tail,str(path));flush();print('Broader programme evidence applied to',len(set(updated)),'approved profiles; existing admissions/costs/photos preserved')
