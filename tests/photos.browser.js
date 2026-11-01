const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),manifest=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-photo-manifest.json'),'utf8')).filter(r=>r.installed);

// Optional browser regression. Run after a staging build; requires Playwright.
// Uses the real built files on disk. This does not verify live Pages or solve a bot challenge.
async function localArtifact(context){
 const dist=path.join(root,'dist'),types={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.webp':'image/webp'};
 await context.route('http://127.0.0.1:8778/**',async route=>{
  const url=new URL(route.request().url());if(!url.pathname.startsWith('/unipath/staging/'))return route.fulfill({status:404,body:'Outside staging'});
  let file=path.resolve(dist,'.'+decodeURIComponent(url.pathname.slice('/unipath/staging'.length)));
  if(file!==dist&&!file.startsWith(dist+path.sep))return route.fulfill({status:403,body:'Outside artifact'});
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file))return route.fulfill({status:404,body:'Missing artifact file'});
  await route.fulfill({status:200,contentType:types[path.extname(file)]||'application/octet-stream',body:fs.readFileSync(file)});
 });
}

(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || undefined});const results=[],errors=[],failed=[];try{
 const c=await b.newContext({viewport:{width:390,height:850},reducedMotion:'reduce'});await localArtifact(c);const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>failed.push({url:r.url(),reason:r.failure()?.errorText}));
 async function navigate(url){
  await p.goto(url,{waitUntil:'domcontentloaded'});
  const id=new URL(url).hash.match(/^#\/university\/([^/?]+)/);
  if(id)await p.waitForSelector('.uni-hero [data-save="'+id[1]+'"]');
  else await p.waitForSelector('main h1');
 }
 async function loaded(selector){await p.waitForFunction(s=>{const i=document.querySelector(s);return i&&i.complete&&i.naturalWidth>0;},selector);}
 async function crop(selector,box){return p.locator(selector).evaluate((im,box)=>{const r=im.getBoundingClientRect(),s=getComputedStyle(im),nw=im.naturalWidth,nh=im.naturalHeight,scale=Math.max(r.width/nw,r.height/nh),x=(nw-r.width/scale)/2,y=(nh-r.height/scale)/2;return {naturalWidth:nw,naturalHeight:nh,objectFit:s.objectFit,aspectRatio:s.aspectRatio,wholeImageVisible:s.objectFit==='contain'||(box[0]+1>=x&&box[1]+1>=y&&box[0]+box[2]-1<=nw-x&&box[1]+box[3]-1<=nh-y)};},box);}
 for(const m of manifest){
  await navigate('http://127.0.0.1:8778/unipath/staging/?lang=ru#/university/'+m.id);await loaded('.hero-photo img');
  await p.waitForFunction(()=>document.querySelector('.hero-photo figcaption').innerText.includes('уменьшено с полями'));
  const translatedCaption=!await p.locator('.hero-photo figcaption').innerText().then(t=>t.includes('resized with borders'));
  const hero=await crop('.hero-photo img',m.contentBox);
  await p.locator('#photos').scrollIntoViewIfNeeded();await loaded('#photos .photo img');const gallery=await crop('#photos .photo img',m.contentBox);
  const credit=await p.locator('#photos .credit').innerText();const creditLinks=await p.locator('#photos .credit a').evaluateAll(a=>a.map(x=>x.href));
  const mainBase=await p.locator('#photos .photo img').evaluate(i=>new URL(i.currentSrc).pathname.startsWith('/unipath/staging/'));
  const goodCredit=credit.includes(m.author)&&credit.includes(m.license)&&creditLinks.includes(new URL(m.filePage).href)&&creditLinks.includes(new URL(m.licenseUrl).href);
  await navigate('http://127.0.0.1:8778/unipath/staging/?lang=ru#/universities?q='+encodeURIComponent(m.id.replaceAll('-',' ')));
  // Use the public name as the catalogue query; programme/source metadata is not injected.
  const name=await p.evaluate(id=>UP.uniById(id).name,m.id);
  await navigate('http://127.0.0.1:8778/unipath/staging/?lang=ru#/universities?q='+encodeURIComponent(name));
  const selector='.uni-card img[src*="/'+m.id+'/thumb.jpg"]';await p.locator(selector).scrollIntoViewIfNeeded();await loaded(selector);
  const thumb=await p.locator(selector).evaluate(i=>({w:i.naturalWidth,h:i.naturalHeight,lazy:i.loading,base:new URL(i.currentSrc).pathname.startsWith('/unipath/staging/')}));
  results.push({id:m.id,pass:hero.wholeImageVisible&&gallery.wholeImageVisible&&goodCredit&&mainBase&&thumb.lazy==='lazy'&&thumb.base&&translatedCaption,hero,gallery,goodCredit,thumb,translatedCaption});
 }
 // Portrait and panoramic new assets, plus the two protected existing photos.
 const controls=['university-of-pittsburgh','university-of-california-merced','olin-college-of-engineering','temple-university-japan','baylor-university','wabash-college','florida-international-university'];
 for(const id of controls)for(const lang of ['ru','en'])for(const theme of ['light','dark'])for(const width of [360,390,768,1280]){
  await p.setViewportSize({width,height:850});await navigate('http://127.0.0.1:8778/unipath/staging/?lang='+lang+'#/university/'+id);await loaded('.hero-photo img');
  if(await p.getAttribute('html','data-theme')!==theme)await p.locator('[data-theme-toggle]').click();
  await p.waitForFunction(()=>!document.documentElement.classList.contains('theme-switching')&&!document.documentElement.classList.contains('theme-reveal'));
  const heroRatio=await p.locator('.hero-photo img').evaluate(i=>i.clientWidth/i.clientHeight);
  await p.locator('#photos').scrollIntoViewIfNeeded();await loaded('#photos .photo img');const galleryRatio=await p.locator('#photos .photo img').evaluate(i=>i.clientWidth/i.clientHeight);
  const m=manifest.find(m=>m.id===id),hero=m?await crop('.hero-photo img',m.contentBox):null,gallery=m?await crop('#photos .photo img',m.contentBox):null;
  const pass=Math.abs(heroRatio-16/9)<0.02&&Math.abs(galleryRatio-4/3)<0.02&&(!m||(hero.wholeImageVisible&&gallery.wholeImageVisible));
  results.push({id,lang,theme,width,kind:'responsive-frame-control',pass,heroRatio,galleryRatio,hero,gallery});
 }
 const base='http://127.0.0.1:8778/unipath/staging/';await c.route('**/university-of-california-davis/1.jpg',r=>r.abort());await c.route('**/university-of-california-davis/thumb.jpg',r=>r.abort());
 await navigate(base+'?lang=en#/universities?q='+encodeURIComponent('University of California, Davis'));await p.waitForSelector('.uni-card .media-note');await p.waitForFunction(()=>!document.querySelector('.uni-card img[src*="/university-of-california-davis/thumb.jpg"]'));
 const cardFallback=await p.locator('.uni-card .media-note').first().isVisible();
 await navigate(base+'?lang=en#/university/university-of-california-davis');await p.waitForSelector('main h1');await p.waitForFunction(()=>!document.querySelector('.hero-photo'));
 const errorFallback={cardFallback,heroRemoved:await p.locator('.hero-photo').count()===0};
 const out={artifactVersion:+/\?v=(\d+)/.exec(fs.readFileSync(path.join(root,'index.html'),'utf8'))[1],mode:'Local staging artifact via disk fulfillment; not live Pages',browser:b.version(),photos:manifest.length,checks:results.length,issues:results.filter(r=>!r.pass),errors,failed,errorFallback,results};fs.writeFileSync(path.resolve(process.env.PHOTO_QA_OUTPUT || path.join(root,'build/photos.browser.json')),JSON.stringify(out,null,2));console.log(JSON.stringify({...out,results:undefined},null,2));if(out.issues.length||errors.length||!cardFallback||!errorFallback.heroRemoved)process.exitCode=1;
}catch(e){fs.writeFileSync(path.resolve(process.env.PHOTO_QA_OUTPUT || path.join(root,'build/photos.browser.json')),JSON.stringify({status:'failed',checks:results.length,errors,failed,results,error:e.message},null,2));throw e;}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1});
