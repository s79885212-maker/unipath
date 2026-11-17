"""Bounded external-link inventory. Resume from one JSON row per URL."""
import concurrent.futures as cf
import json,ssl,urllib.request,urllib.error,time,threading
from pathlib import Path
from collections import Counter
folder=Path('research/six-country-audit')
urls=json.loads((folder/'inventory.json').read_text(encoding='utf-8'))['externalLinks']
file=folder/'external-links.jsonl'
done={x['url'] for x in map(json.loads,file.read_text(encoding='utf-8').splitlines())} if file.exists() else set()
locks={}
for row in urls:
    host=urllib.parse.urlsplit(row['url']).netloc
    locks.setdefault(host,threading.BoundedSemaphore(2))
def check(row):
    url=row['url'];start=time.monotonic()
    result={'url':url,'checked':'2026-11-17','ids':row['ids']}
    with locks[urllib.parse.urlsplit(url).netloc]:
        for attempt in range(2):
            try:
                req=urllib.request.Request(url,method='HEAD',headers={'User-Agent':'UniPath link audit','Accept':'text/html,application/pdf,*/*'})
                try:
                    response=urllib.request.urlopen(req,timeout=7)
                except urllib.error.HTTPError as e:
                    if e.code not in (405,501):raise
                    response=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'UniPath link audit','Range':'bytes=0-1023'}),timeout=7)
                with response:
                    result.update(status=response.status,final=response.url,kind='redirect' if response.url!=url else 'working')
                break
            except urllib.error.HTTPError as e:
                result.update(status=e.code,final=e.url,kind='not-found' if e.code in (404,410) else 'blocked' if e.code in (401,403,429) else 'temporary' if e.code>=500 else 'http-error')
                break
            except Exception as e:
                result.update(kind='transport-error',error=type(e).__name__+': '+str(e)[:180])
                if attempt==0:time.sleep(.2)
    result['seconds']=round(time.monotonic()-start,2)
    return result
pending=[u for u in urls if u['url'] not in done]
print('URLS',len(urls),'PENDING',len(pending),flush=True)
with file.open('a',encoding='utf-8') as f, cf.ThreadPoolExecutor(max_workers=10) as pool:
    for i,r in enumerate(pool.map(check,pending),1):
        f.write(json.dumps(r,ensure_ascii=False)+'\n');f.flush()
        if i%100==0:print(i,'/',len(pending),flush=True)
rows=[json.loads(l) for l in file.read_text(encoding='utf-8').splitlines()]
summary={'total':len(urls),'checked':len(rows),'counts':dict(Counter(r['kind'] for r in rows))}
(folder/'external-links-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(summary,flush=True)

