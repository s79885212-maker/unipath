"""Fetch complete official documents for human field-level review, not auto-confirmation."""
from pathlib import Path
from html.parser import HTMLParser
import json,urllib.request,urllib.error,urllib.parse,concurrent.futures as cf,hashlib,re,gzip,io,sys
ROOT=Path('research/admissions-120');CACHE=Path('../admissions-source-cache');CACHE.mkdir(exist_ok=True)
rows=json.loads((ROOT/'inventory-before.json').read_text(encoding='utf-8'))['rows'];sel=json.loads((ROOT/'selection.json').read_text(encoding='utf-8'));chosen={id for ids in sel.values() for id in ids}
class Text(HTMLParser):
 def __init__(self):super().__init__();self.depth=0;self.parts=[];self.links=[];self.href=None;self.label=[]
 def handle_starttag(self,t,a):
  if t in ('script','style','noscript','svg'):self.depth+=1
  if not self.depth and t in ('p','li','br','h1','h2','h3','h4','tr','div','section'):self.parts.append('\n')
  if t=='a':self.href=dict(a).get('href');self.label=[]
 def handle_endtag(self,t):
  if t in ('script','style','noscript','svg') and self.depth:self.depth-=1
  if not self.depth and t in ('p','li','h1','h2','h3','h4','tr','div','section'):self.parts.append('\n')
  if t=='a' and self.href:self.links.append({'href':self.href,'label':' '.join(self.label).strip()});self.href=None
 def handle_data(self,s):
  if not self.depth:self.parts.append(s+' ')
  if self.href:self.label.append(s)
targets={}
def add(url,id):
 if url and url.startswith('https://') and not any(h in url for h in ['commonapp.org','ouac.on.ca/guide/undergrad-fees']):targets.setdefault(url,set()).add(id)
for r in rows:
 if r['id'] not in chosen:continue
 id=r['id'];add(r['languageSource'],id);add(r['sat'].get('source'),id)
 candidates=[s for s in r['sources'] if re.search('English|language|testing|SAT|international.*admission|first.year|undergraduate.*guide',s.get('label',''),re.I) and not re.search('cost|tuition|scholarship|aid|fee|Common Data Set|CDS',s.get('label',''),re.I)]
 for s in candidates[:3]:add(s['url'],id)
 add(r['links'].get('internationalAdmissions') or r['links'].get('admissions'),id)
extra=Path('../admissions-extra-targets.json')
if extra.exists():
 for x in json.loads(extra.read_text(encoding='utf-8')):
  for id in x['ids']:add(x['url'],id)
def read(item):
 url,ids=item;key=hashlib.sha256(url.encode()).hexdigest()[:20];fp=CACHE/(key+'.json')
 if fp.exists():
  out=json.loads(fp.read_text(encoding='utf-8'));out['ids']=sorted(set(out.get('ids',[]))|ids)
  if not ('--retry-dns' in sys.argv and 'getaddrinfo failed' in out.get('error','')):return out
 out={'url':url,'ids':sorted(ids),'checked':'2026-11-18'}
 try:
  with urllib.request.urlopen(url,timeout=18) as f:
   raw=f.read(20000001);assert len(raw)<=20000000,'Document exceeds bounded reader'
   if raw.startswith(b'\x1f\x8b'):raw=gzip.decompress(raw)
   out.update(status=f.status,final=f.url,sha256=hashlib.sha256(raw).hexdigest())
   if raw.startswith(b'%PDF'):
    from pypdf import PdfReader
    book=PdfReader(io.BytesIO(raw));pages=[p.extract_text() or '' for p in book.pages];out['pages']=pages;out['text']='\n'.join('[page '+str(i+1)+']\n'+s for i,s in enumerate(pages));out['access']='pdf-read'
    (CACHE/(key+'.pdf')).write_bytes(raw)
   else:
    parser=Text();parser.feed(raw.decode('utf-8',errors='replace'));text='\n'.join(re.sub(r'\s+',' ',s).strip() for s in ''.join(parser.parts).split('\n') if s.strip())
    if re.search(r'<title[^>]*>\s*(Just a moment|Access Denied|Security verification)',raw.decode('utf-8',errors='replace'),re.I):out.update(access='blocked',text='')
    else:out.update(access='html-read',text=text,links=[{**l,'href':urllib.parse.urljoin(f.url,l['href'])} for l in parser.links])
 except Exception as e:out.update(access='unavailable',error=type(e).__name__+': '+str(e)[:180])
 fp.write_text(json.dumps(out,ensure_ascii=False),encoding='utf-8');return out
print('Queued official documents',len(targets),flush=True)
results=[]
with cf.ThreadPoolExecutor(max_workers=5) as pool:
 for i,out in enumerate(pool.map(read,targets.items()),1):
  results.append(out)
  if i%25==0:print('Retrieved',i,flush=True)
Path('../admissions-source-index.json').write_text(json.dumps([{k:v for k,v in r.items() if k not in ['text','pages','links']} for r in results],ensure_ascii=False,indent=2),encoding='utf-8')
for c,ids in sel.items():
 text=[]
 for id in ids:
  text+=['# '+id]
  for r in results:
   if id in r['ids']:text+=['## '+r['url']+' '+r['access'],r.get('text',r.get('error',''))]
 Path('../admissions-reading-'+c+'.txt').write_text('\n\n'.join(text),encoding='utf-8')
print('Retrieved',len(results),'readable',sum(bool(r.get('text')) for r in results),flush=True)
