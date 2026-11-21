'use strict';
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=process.argv[2],local=root.startsWith('http://127.'),report=process.argv[3];
const expected=/\?v=(\d+)/.exec(fs.readFileSync('index.html','utf8'))[1];
const out={root,local,scenarios:[],errors:[],limitations:['Chrome viewport emulation; no physical iPhone/Safari.']};
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.webp':'image/webp','.woff2':'font/woff2'};
async function context(browser,lang,width,dark=false,fault=null){
 const c=await browser.newContext({viewport:{width,height:865}});c.setDefaultTimeout(60000);
 await c.addInitScript(d=>localStorage.setItem('unipath.theme',d?'dark':'light'),dark);
 if(local)await c.route(root+'**/*',r=>{
  const rel=decodeURIComponent(new URL(r.request().url()).pathname.slice(new URL(root).pathname.length));
  if(fault===rel)return r.fulfill({status:404,body:'Synthetic missing dependency'});
  let f=path.resolve('dist',rel||'index.html');if(fs.statSync(f).isDirectory())f=path.join(f,'index.html');
  return r.fulfill({body:fs.readFileSync(f),contentType:mime[path.extname(f)]});
 });
 return c;
}
async function ready(p,lang){
 await p.locator('#m-ielts').waitFor();
 await p.waitForFunction(l=>document.documentElement.lang===l,lang);
 assert((await p.locator('script[src*="assets/js/app.js"]').getAttribute('src')).endsWith('?v='+expected));
 if(!local&&await p.locator('#human-gate').isVisible())throw Error('Access challenge; no access settings changed');
 await p.waitForFunction(()=>!document.querySelector('#boot-error'));
}
(async()=>{
 const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});out.browser='Chrome '+b.version();
 try{
  for(const [lang,width,dark] of [['ru',360,false],['en',1280,true],['ru',1280,true],['en',390,false]]){
   const c=await context(b,lang,width,dark),p=await c.newPage();p.on('pageerror',e=>out.errors.push(e.message));
   await p.goto(root+'?lang='+lang+'#/match',{waitUntil:'domcontentloaded'});await ready(p,lang);
   const options=await p.locator('#m-study-language option').evaluateAll(xs=>Object.fromEntries(xs.map(x=>[x.value,x.textContent])));
   assert.deepEqual([options.de,options.ja,options.ko],lang==='ru'?['Немецкий','Японский','Корейский']:['German','Japanese','Korean']);
   const search=await p.evaluate(()=>({en:UP.search('Frankfurt cognitive',540).map(u=>u.id),ru:UP.search('когнитивные',540).map(u=>u.id),revision:I18N.revision}));
   assert(search.en.includes('frankfurt-school'));if(lang==='ru')assert(search.ru.includes('frankfurt-school'));
   await p.goto(root+'?lang='+lang+'#/universities');await p.locator('#browse-q').waitFor();
   await p.locator('#browse-q').fill(lang==='ru'?'Frankfurt когнитивные':'Frankfurt cognitive');
   await p.locator('#results a[href*="frankfurt-school"]').first().waitFor();
   await p.goto(root+'university/frankfurt-school/?lang='+lang);await p.locator('.admission-routes').waitFor();
   const entry=await p.locator('#english').innerText();assert(entry.includes(lang==='ru'?'когнитивные':'cognitive'));
   assert(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1));
   out.scenarios.push({lang,width,dark,search,options,profile:'frankfurt-school',bootWarning:false,overflow:false});await c.close();
  }
  if(local)for(const fault of ['data/requirements.js','assets/js/requirements.js']){
   const c=await context(b,'ru',390,false,fault),p=await c.newPage();await p.goto(root+'?lang=ru',{waitUntil:'domcontentloaded'});
   await p.locator('#boot-error').waitFor();assert(await p.locator('#boot-error').isVisible());
   out.scenarios.push({fault,recoveryVisible:true});await c.close();
  }
 }catch(e){out.errors.push(e.stack);process.exitCode=1;}finally{await b.close();}
 fs.writeFileSync(report,JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({scenarios:out.scenarios.length,errors:out.errors,browser:out.browser}));
})().catch(e=>{console.error(e);process.exitCode=1});
