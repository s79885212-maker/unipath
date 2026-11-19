from pathlib import Path
import json,sys,re
policy='--policy' in sys.argv;ids=set(a for a in sys.argv[1:] if not a.startswith('--'));urls={a[6:] for a in sys.argv if a.startswith('--url=')};cache=Path('../admissions-source-cache')
for p in cache.glob('*.json'):
 r=json.loads(p.read_text(encoding='utf-8'))
 if not ids.intersection(r.get('ids',[])) and r['url'] not in urls:continue
 print('\n#',','.join(ids.intersection(r['ids'])),r['url'],r['access'])
 text=r.get('text',r.get('error',''))
 if policy and r.get('access')=='pdf-read':
  text='\n'.join('[page '+str(i+1)+']\n'+p for i,p in enumerate(r['pages']) if re.search(r'IELTS|TOEFL|\bSAT\b|\bACT\b|language|TestDaF|DSH|TOPIK|EJU|JLPT',p,re.I))
 elif policy and r.get('text'):
  lines=text.split('\n');take=set()
  for i,l in enumerate(lines):
   if re.search(r'IELTS|TOEFL|Duolingo|\bSAT\b|\bACT\b|language.requirement|language.proficiency|language.of.instruction|test.optional|waiver|exempt|English.proficiency|academic.requirements|application.requirements|admission.requirements|documents.required|TestDaF|DSH|TOPIK|EJU|JLPT',l,re.I):take.update(range(max(0,i-3),min(len(lines),i+6)))
  text='\n'.join(lines[i] for i in sorted(take)) if take else text
 print(text)
 links=[l for l in r.get('links',[]) if re.search(r'English|language|\bSAT\b|\bACT\b|test.optional|testing|entry requirements|2027|guide|PDF',l['label'],re.I)]
 links=list({l['href']:l for l in links}.values())
 print('LINKS',json.dumps(links,ensure_ascii=False))
