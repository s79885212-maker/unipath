"""Bounded reader of official documents, preserving full text outside Git."""
import ast,json,sys,hashlib,urllib.request,urllib.parse,concurrent.futures,io,re,gzip
from pathlib import Path
from html.parser import HTMLParser
tree=ast.parse(Path('tools/admissions_sources.py').read_text(encoding='utf8'))
exec(compile(ast.Module(body=[n for n in tree.body if isinstance(n,ast.ClassDef) and n.name=='Text'],type_ignores=[]),'<Text reader>','exec'))
CACHE=Path('../admissions-followup-cache');CACHE.mkdir(exist_ok=True)
def read(url):
 fp=CACHE/(hashlib.sha256(url.encode()).hexdigest()[:20]+'.json')
 if fp.exists():return json.loads(fp.read_text(encoding='utf8'))
 out={'url':url,'checked':'2026-11-19'}
 try:
  with urllib.request.urlopen(url,timeout=22) as f:
   raw=f.read(20000001);assert len(raw)<=20000000
   if raw.startswith(b'\x1f\x8b'):raw=gzip.decompress(raw)
   out.update(status=f.status,final=f.url)
   if raw.startswith(b'%PDF'):
    from pypdf import PdfReader
    out['pages']=[p.extract_text() or '' for p in PdfReader(io.BytesIO(raw)).pages]
    out['text']='\n'.join('[page '+str(i+1)+']\n'+s for i,s in enumerate(out['pages']));out['access']='pdf-read'
   else:
    txt=raw.decode('utf8',errors='replace');p=Text();p.feed(txt)
    out['text']='\n'.join(re.sub(r'\s+',' ',s).strip() for s in ''.join(p.parts).split('\n') if s.strip())
    out['links']=[{**l,'href':urllib.parse.urljoin(f.url,l['href'])} for l in p.links]
    out['access']='blocked' if re.search(r"verify that you.re not a robot|web firewall|웹 방화벽|Just a moment|Access Denied",out['text'],re.I) else 'html-read'
 except Exception as e:out.update(access='unavailable',error=str(e)[:160])
 fp.write_text(json.dumps(out,ensure_ascii=False),encoding='utf8');return out
if __name__=='__main__':
 urls=[x for x in sys.argv[1:] if x.startswith('https://')]
 with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(read,urls))
 for out in results:
  print('\n##',out['url'],out['access'],out.get('error',''))
  text=out.get('text','');lines=text.splitlines()
  # Relevant complete paragraphs plus neighbouring context; no automated facts.
  pat=r'IELTS|TOEFL|\bSAT\b|\bACT\b|qualif|admission requirement|entry requirement|secondary|high school|school.leav|baccalaur|A.level|TOPIK|EJU|TestAS|Studienkolleg|HZB|Documents|English.proficiency|first.year|undergraduate admission|waiv|exempt'
  take=set()
  for i,line in enumerate(lines):
   if re.search(pat,line,re.I):take.update(range(max(0,i-2),min(len(lines),i+5)))
  print('\n'.join(str(i+1)+': '+lines[i] for i in sorted(take)) if take else text[:20000])
  print('LINKS',json.dumps([l for l in out.get('links',[]) if re.search(r'English|language|admission|requirement|qualif|2027|guide|\.pdf',l['label']+' '+l['href'],re.I)][:55],ensure_ascii=False))
