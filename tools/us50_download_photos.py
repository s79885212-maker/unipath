"""Download only owner-approved Commons candidates to review files, never install automatically."""
import datetime,hashlib,json,pathlib,time,urllib.request,urllib.parse,urllib.error,sys
ROOT=pathlib.Path(__file__).resolve().parent.parent
DEST=ROOT/'build'/'us50-photo-review';DEST.mkdir(parents=True,exist_ok=True)
rows=json.loads((ROOT/'research/us-expansion-50-photo-manifest.json').read_text(encoding='utf-8'))
fiu_only='--fiu-only' in sys.argv
remaining='--remaining' in sys.argv or fiu_only
if remaining:
 DEST=DEST/'extra';DEST.mkdir(exist_ok=True)
 rows=[dict(id=uid,file=file,filePage='https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(file.replace(' ','_')),metadataOnly=metadata_only) for uid,file,metadata_only in [
  ('baylor-university','Baylor University June 2016 13 (Founders Mall and Pat Neff Hall).jpg',False),
  ('wabash-college','WabashMall.JPG',False),('wabash-college','ChapelSing.jpg',False),
  ('florida-international-university',"Eastward view of FIU's campus.jpg",True),
  ('university-of-california-santa-cruz','McHenry Library.jpg',True)]]
 if fiu_only:
  DEST=DEST/'fiu-final';DEST.mkdir(exist_ok=True)
  file='FIU MMC campus.jpg'
  rows=[dict(id='florida-international-university',file=file,filePage='https://commons.wikimedia.org/wiki/File:'+file.replace(' ','_'),metadataOnly=False)]
allowed={r['id'] for r in json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
UA='UniPathSourceReview/1.0 (https://github.com/s79885212-maker/unipath; owner-approved Commons campus photos)'
report=[]
def get(url,limit):
 parsed=urllib.parse.urlsplit(url)
 assert parsed.scheme=='https' and parsed.hostname in ('commons.wikimedia.org','upload.wikimedia.org','thumb.wikimedia.org'), 'Unexpected download host'
 with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':UA}),timeout=25) as response:
  content=response.read(limit+1);assert len(content)<=limit,'File exceeds review size limit'
  return content,response.headers.get('Content-Type','')
for i,r in enumerate(rows,1):
 assert r['id'] in allowed
 result={'id':r['id'],'file':r['file'],'filePage':r['filePage'],'date':datetime.datetime.now(datetime.timezone.utc).date().isoformat(),'installed':False}
 try:
  params=dict(action='query',titles='File:'+r['file'],prop='imageinfo',iiprop='url|extmetadata|size|sha1',iiurlwidth=1600,format='json',formatversion=2)
  if remaining:params.update(prop='imageinfo|revisions',rvprop='content',rvslots='main')
  query=urllib.parse.urlencode(params)
  data,_=get('https://commons.wikimedia.org/w/api.php?'+query,2000000)
  page=json.loads(data)['query']['pages'][0];info=page['imageinfo'][0];meta=info.get('extmetadata',{})
  result['imageinfo']=info
  if remaining:result['filePageWikitext']=(page.get('revisions') or [{}])[0].get('slots',{}).get('main',{}).get('content','')
  license=meta.get('LicenseShortName',{}).get('value','')
  assert any(x in license.lower() for x in ('cc by','cc0','public domain','pd-')),'Licence requires manual review; not downloaded'
  assert meta.get('Artist',{}).get('value'),'Artist not stated; manual review'
  if r.get('metadataOnly'):
   result.update(metadataOnly=True,downloaded=False,reviewStatus='file-page-metadata-for-review');print(f'[{i}/{len(rows)}] {r["id"]}: file-page metadata saved for review',flush=True)
  else:
   url=info.get('thumburl') or info['url'];content,mime=get(url,20000000)
   ext={'image/jpeg':'.jpg','image/png':'.png','image/webp':'.webp'}.get(mime.split(';')[0])
   assert ext,'Unsupported photo content type'
   file=DEST/(r['id']+('-'+str(i) if remaining else '')+ext)
   if file.exists():assert file.read_bytes()==content,'Existing review file differs; preserve it and investigate'
   else:file.write_bytes(content)
   result.update(downloaded=True,path=str(file.relative_to(ROOT)),url=url,bytes=len(content),sha256=hashlib.sha256(content).hexdigest(),reviewStatus='pending-visual-campus-author-licence-review')
   print(f'[{i}/{len(rows)}] {r["id"]}: {len(content)} bytes saved for review',flush=True)
 except Exception as e:
  result.update(downloaded=False,error=f'{type(e).__name__}: {e}')
  print(f'[{i}/{len(rows)}] {r["id"]}: {result["error"]}',flush=True)
  # Access-denied and bot responses are recorded, never bypassed.
 report.append(result);(DEST/'download-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 time.sleep(1)
print('Downloads finished. These files are not installed: campus, author, licence and crop must be visually reviewed.',flush=True)
if not any(x.get('downloaded') for x in report):sys.exit(1)
