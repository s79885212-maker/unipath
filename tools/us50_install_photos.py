"""Install explicitly reviewed Commons downloads; preserve entire photos, no network."""
import hashlib,json,math,pathlib,re,sys
from ca50_gaps import load,save
from us200_std import L,flush
ROOT=pathlib.Path(__file__).resolve().parent.parent
version=int(re.search(r'\?v=(\d+)',(ROOT/'index.html').read_text(encoding='utf-8')).group(1))
reviews=json.loads((ROOT/'research/us50-photo-install-review.json').read_text(encoding='utf-8'))
allowed={x['id'] for x in json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
mp=ROOT/'research/us-expansion-50-photo-manifest.json';manifest=json.loads(mp.read_text(encoding='utf-8'));byphoto={x['id']:x for x in manifest}
path=ROOT/'data/universities.us3.js';head,rows,tail=load(str(path));byid={r['id']:r for r in rows}
installed=0
metadata_only='--metadata-only' in sys.argv
for r in reviews:
 uid=r['id'];assert uid in allowed
 m=byphoto[uid];m.update(downloaded=True,downloadStatus='downloaded-owner-powershell',downloadedSha256=r['downloadedSha256'],visualStatus='reviewed-approved' if r['decision']=='approved' else 'reviewed-held',reviewNote=r['reviewNote'])
 if r['decision']!='approved':continue
 assert r['filePage']==m['filePage'] and r['author'] and r['license'] and r['licenseUrl']
 dest=ROOT/'assets/img/universities'/uid;dest.mkdir(parents=True,exist_ok=True)
 main=dest/'1.jpg';thumb=dest/'thumb.jpg'
 if not metadata_only:
  from PIL import Image,ImageOps
  p=(ROOT/r['downloadedPath']).resolve();assert p.is_relative_to(ROOT/'build/us50-photo-review')
  assert hashlib.sha256(p.read_bytes()).hexdigest()==r['downloadedSha256'],'Downloaded image changed since review'
  im=ImageOps.exif_transpose(Image.open(p)).convert('RGB');im.load();originalSize=im.size
  # Fit inside the central16:9 area of a4:3 canvas. Extra margin avoids
  # fractional-pixel clipping in the existing hero/card/gallery frames.
  width=min(1200,int(math.ceil(max(im.width,im.height*16/9)/4))*4);height=width*3//4
  scale=min(1,width/im.width,(height*0.74)/im.height)
  photo=im.resize((max(1,int(im.width*scale)),max(1,int(im.height*scale))),Image.Resampling.LANCZOS)
  box=[(width-photo.width)//2,(height-photo.height)//2,photo.width,photo.height]
  canvas=Image.new('RGB',(width,height),(24,37,56));canvas.paste(photo,(box[0],box[1]));canvas.save(main,'JPEG',quality=84,optimize=True,progressive=True)
  small=ImageOps.contain(canvas,(560,420));small.save(thumb,'JPEG',quality=78,optimize=True,progressive=True)
 else:
  assert main.exists() and thumb.exists() and m['installed']
  assert hashlib.sha256(main.read_bytes()).hexdigest()==m['mainSha256']
  assert hashlib.sha256(thumb.read_bytes()).hexdigest()==m['thumbSha256']
  originalSize=m['originalSize'];width,height=m['outputSize'];box=m['contentBox']
 subject=m['subject']
 title=L(subject+' — resized with borders, no retouching',r['subjectRu']+' — уменьшено с полями, без ретуши')
 gallery=dict(src=main.relative_to(ROOT).as_posix(),title=title,artist=r['author'],license=r['license'],licenseUrl=r['licenseUrl'],page=r['filePage'])
 u=byid[uid];old_note=u['photos'].get('note');u['photos'].update(main=gallery['src'],thumb=thumb.relative_to(ROOT).as_posix(),gallery=[gallery])
 if old_note:u['verification']['unconfirmed']=[n for n in u['verification']['unconfirmed'] if n!=old_note]
 u['photos']['note']=L('Campus photograph, author and free licence reviewed against the Commons file page. Resized with borders; no retouching.','Фото кампуса, автор и свободная лицензия проверены по странице файла Commons. Уменьшено с полями; без ретуши.')
 u['lastVerified']=max(u.get('lastVerified') or '',r['reviewed'])
 # Only replace this file's not-installed candidate label; preserve all other sources.
 for s in u['sources']:
  if s['url']==r['filePage']:s['label']=L('Campus photo — Commons file and licence','Фото кампуса — файл Commons и лицензия')
 if not any(s['url']==r['filePage'] for s in u['sources']):u['sources'].append(dict(label=L('Campus photo — Commons file and licence','Фото кампуса — файл Commons и лицензия'),url=r['filePage']))
 m.update(installed=True,installedVersion=m.get('installedVersion',version),verified=r['reviewed'],author=r['author'],license=r['license'],licenseUrl=r['licenseUrl'],attribution=r['author']+', '+r['license']+', Wikimedia Commons',plannedChanges=r['changes'],installedMain=gallery['src'],installedThumb=u['photos']['thumb'],originalSize=list(originalSize),outputSize=[width,height],mainBytes=main.stat().st_size,thumbBytes=thumb.stat().st_size)
 m.update(contentBox=box,mainSha256=hashlib.sha256(main.read_bytes()).hexdigest(),thumbSha256=hashlib.sha256(thumb.read_bytes()).hexdigest())
 installed+=1
save(head,rows,tail,str(path));flush();mp.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(installed,'reviewed campus photos installed; held photos and all admissions/costs/programmes unchanged')
