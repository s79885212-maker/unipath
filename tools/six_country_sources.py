"""Read official pages in the selected profiles. Store text for field-level review."""
from pathlib import Path
from html.parser import HTMLParser
import json,urllib.request,urllib.error,concurrent.futures as cf,hashlib,re,time,gzip,subprocess
ROOT=Path('research/six-country-audit')
selected=set(' '.join(json.loads((ROOT/'selection.json').read_text(encoding='utf-8')).values()).split())
loader="""const fs=require('fs'),vm=require('vm'),path=require('path');const mod={exports:{}};const pre=fs.readFileSync('tests/run.js','utf8').split('var failed = 0, passed = 0;')[0];vm.runInNewContext(pre,{require,__dirname:path.resolve('tests'),module:mod,console,process,setTimeout,clearTimeout});process.stdout.write(JSON.stringify(mod.exports.DB.universities));"""
rows=[u for u in json.loads(subprocess.check_output(['node','-e',loader],text=True,encoding='utf-8')) if u['id'] in selected]
class Text(HTMLParser):
    def __init__(self):super().__init__();self.depth=0;self.parts=[]
    def handle_starttag(self,t,a):
        if t in ('script','style','noscript','svg'):self.depth+=1
        if not self.depth and t in ('p','li','br','h1','h2','h3','h4','tr','div'):self.parts.append('\n')
    def handle_endtag(self,t):
        if t in ('script','style','noscript','svg') and self.depth:self.depth-=1
        if not self.depth and t in ('p','li','h1','h2','h3','h4','tr','div'):self.parts.append('\n')
    def handle_data(self,d):
        if not self.depth:self.parts.append(d.strip()+' ')
def urls(u):
    out=[]
    def add(x):
        if isinstance(x,str) and x.startswith('http') and x not in out:out.append(x)
    links=u.get('links',{})
    for k in ('internationalAdmissions','admissions','cost','scholarships','programs'):add(links.get(k))
    add(u.get('costs',{}).get('source'))
    add(u.get('english',{}).get('detailsSource'))
    for k in ('ielts','toefl'):
        add((u.get('english',{}).get(k) or {}).get('source'))
    for s in u.get('sources',[]):
        if re.search(r'English|language|international|2027|IELTS|cost|tuition',s.get('label',''),re.I):add(s['url'])
    return out[:9]
targets={}
for u in rows:
    for url in urls(u):targets.setdefault(url,[]).append(u['id'])
cache=Path('../six-country-source-cache');cache.mkdir(exist_ok=True)
def read(url):
    key=hashlib.sha256(url.encode()).hexdigest()[:18]
    fp=cache/(key+'.json')
    if fp.exists():return json.loads(fp.read_text(encoding='utf-8'))
    out={'url':url,'ids':targets[url],'checked':'2026-11-17'}
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'UniPath official-source audit'})
        with urllib.request.urlopen(req,timeout=14) as f:
            content=f.read(16000000);out.update(status=f.status,final=f.url)
            if content.startswith(b'\x1f\x8b'):content=gzip.decompress(content)
            pdf=content.startswith(b'%PDF')
            if pdf:
                import io
                from pypdf import PdfReader
                book=PdfReader(io.BytesIO(content))
                text='\n'.join('[page '+str(i+1)+']\n'+(p.extract_text() or '') for i,p in enumerate(book.pages))
                out['access']='pdf-read'
            else:
                text=content.decode('utf-8',errors='replace')
                parser=Text();parser.feed(text)
                text='\n'.join(re.sub(r'\s+',' ',l).strip() for l in ''.join(parser.parts).split('\n') if l.strip())
                out['access']='html-read'
            out['text']=text
    except Exception as e:out.update(access='unavailable',error=type(e).__name__+': '+str(e)[:180])
    fp.write_text(json.dumps(out,ensure_ascii=False),encoding='utf-8')
    return out
print('source pages',len(targets),flush=True)
results=[]
with cf.ThreadPoolExecutor(max_workers=7) as pool:
    for i,row in enumerate(pool.map(read,targets),1):
        results.append(row)
        if i%40==0: print('read',i,flush=True)
Path('../six-country-sources.json').write_text(json.dumps(results,ensure_ascii=False),encoding='utf-8')
for country in ('us','ca','uk','de','jp','kr'):
    out=[]
    for u in rows:
        if u['country']!=country:continue
        out+=['# '+u['id']]
        for src in results:
            if u['id'] not in src['ids']:continue
            out+=['## '+src['url']+' '+src['access']]
            lines=src.get('text','').split('\n')
            indices=set()
            for i,line in enumerate(lines):
                if re.search(r'\d[,.\d]*\s*(?:USD|EUR|CAD|GBP|JPY|KRW)|[$£€¥₩]|IELTS|TOEFL|SAT |ACT |2027|2026|scholarship|international student|non.EU|English.taught|English language',line,re.I):
                    for j in range(max(0,i-1),min(len(lines),i+2)):indices.add(j)
            excerpt='\n'.join(lines[i] for i in sorted(indices))
            out+=[excerpt[:21000] if excerpt else src.get('text',src.get('error',''))[:5000]]
    Path('../six-country-'+country+'-reading.txt').write_text('\n\n'.join(out),encoding='utf-8')
print('finished',len(results),'readable',sum('text' in s for s in results),flush=True)


