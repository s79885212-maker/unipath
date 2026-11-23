import json,concurrent.futures,urllib.request,urllib.error,time,re
from pathlib import Path
root=Path(__file__).resolve().parents[1]
urls=set()
for p in (root/'research/europe').glob('country-*.json'):
 d=json.loads(p.read_text(encoding='utf8'))
 for u in d['universities']:
  urls.update(s['url'] for s in u['sources'])
  urls.update(v for v in u['links'].values() if v)
def check(url):
 t=time.monotonic()
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'UniAtlas source-link verification; standard HTTP client'})
  with urllib.request.urlopen(req,timeout=18) as r:
   content=r.read(262144);title=re.search(rb'<title[^>]*>(.*?)</title>',content,re.I|re.S)
   return {'url':url,'status':r.status,'finalURL':r.url,'redirect':r.url!=url,'type':r.headers.get('Content-Type'),'title':title.group(1).decode('utf8','replace').strip() if title else None,'seconds':round(time.monotonic()-t,2)}
 except urllib.error.HTTPError as e:return {'url':url,'status':e.code,'category':'blocked' if e.code in (403,429) else 'http-error','finalURL':e.url}
 except Exception as e:return {'url':url,'status':None,'category':'network-error','error':str(e)[:220]}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:rows=list(pool.map(check,sorted(urls)))
out={'verified':'2026-11-22','scope':'Only new Europe programme/source/navigation URLs; HTTP availability is separate from content verification','rows':rows,'counts':{'total':len(rows),'working':sum(x.get('status',0)==200 for x in rows),'redirects':sum(bool(x.get('redirect')) for x in rows),'blocked':sum(x.get('category')=='blocked' for x in rows),'notFound':sum(x.get('status') in (404,410) for x in rows),'other':sum(x.get('status')!=200 and x.get('category')!='blocked' and x.get('status') not in (404,410) for x in rows)}}
(root/'research/europe/external-links.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps(out['counts']))
