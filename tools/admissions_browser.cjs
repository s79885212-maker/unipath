'use strict';
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=process.argv[2] || 'http://127.0.0.1:8765/unipath/';
const local=root.startsWith('http://127.'),disk=path.resolve('dist');
const records=JSON.parse(fs.readFileSync('research/admissions-120/requirements.json','utf8'));
const ids=process.argv.includes('--one')?['brigham-young-university']:Object.keys(records),out={root,local,profiles:[],flows:[],errors:[],limitations:[]};
const report=process.env.UNIPATH_BROWSER_REPORT || 'research/admissions-120/browser-checkpoint.json';
const mime={'.js':'application/javascript','.html':'text/html; charset=utf-8','.css':'text/css','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2'};
async function context(browser,lang,width,dark=false) {
 const c=await browser.newContext({viewport:{width,height:865}});
 await c.addInitScript(dark=>localStorage.setItem('unipath.theme',dark?'dark':'light'),dark);
 if(local)await c.route(root+'**/*',r=>{
  let file=path.resolve(disk,decodeURIComponent(new URL(r.request().url()).pathname.slice(new URL(root).pathname.length)) || 'index.html');
  if(!file.startsWith(disk+path.sep))return r.fulfill({status:404});
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  return fs.existsSync(file)?r.fulfill({status:200,contentType:mime[path.extname(file)] || 'application/octet-stream',body:fs.readFileSync(file)}):r.fulfill({status:404});
 });
 return c;
}
async function loaded(p,lang){
 await p.waitForFunction(l=>window.UP?.requirements&&window.UPPages&&window.UPMatch&&document.documentElement.lang===l,lang,{timeout:45000});
 if(!local && await p.locator('#human-gate').isVisible())throw Error('Turnstile blocks this live visitor session; no access settings were changed');
 out.version=await p.locator('script[src*="assets/js/app.js"]').getAttribute('src');
}
async function profiles(browser,lang,width,dark){
 const c=await context(browser,lang,width,dark),p=await c.newPage();
 p.on('pageerror',e=>out.errors.push(e.message));
 p.on('response',r=>{if(r.url().startsWith(root)&&r.status()>=400)out.errors.push(r.status()+' '+r.url());});
 try{for(const id of ids){
  const res=await p.goto(root+'university/'+id+'/?lang='+lang+'&i18n=collect',{waitUntil:'domcontentloaded'});
  assert.equal(res.status(),200,id);await loaded(p,lang);
  await p.locator('.admission-routes').waitFor();
  await p.locator('#english').scrollIntoViewIfNeeded();
  const content=await p.locator('#english').innerText();
  assert(content.length>150,id+' requirements contain explanatory content');
  if(lang==='ru')assert.match(content,/Требования поступления по маршрутам/);
  const state=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,
   routes:document.querySelectorAll('.admission-route').length,
   missing:[...(window.I18N?.missing||[])],sourceLinks:[...document.querySelectorAll('.requirements-sources a')].map(a=>a.href)}));
  assert(!state.overflow,id+' horizontal overflow');
  assert.equal(state.routes,records[id].routes.length,id+' route count');
  assert(state.sourceLinks.every(s=>s.startsWith('https://')),id+' source links');
  for(const route of records[id].routes) {
   const entry=(route.academic || {}).entryRequirements;
   if(!entry)continue;
   const translated=lang==='ru'?await p.evaluate(s=>I18N.t(s),entry):entry;
   assert(content.includes(translated),id+' academic qualification is displayed in '+lang);
   if(lang==='ru')assert.notEqual(translated,entry,id+' academic qualification has a Russian translation');
   assert.equal(await p.locator('#academics').getByText(lang==='ru'?'Международные квалификации':'International qualifications',{exact:true}).count(),0,id+' superseded legacy qualification row is absent');
  }
  if(lang==='ru') {
   for(const heading of await p.locator('.requirement-variant,.requirement-section-label').all()) {
    assert.doesNotMatch(await heading.innerText(),/accepted|not named|not specified|requires confirmation|in person|in-centre|Reading section|Writing section|Listening section|Speaking section/);
   }
   for(const source of records[id].routes.flatMap(r=>r.sources)) {
    const translated=await p.evaluate(label=>I18N.t(label),source.label);
    const link=p.locator('.requirements-sources a').filter({hasText:translated}).first();
    assert(await link.count(),id+' translated source label: '+translated);
   }
   if(id==='brigham-young-university') {
    assert.match(content,/Начиная с Winter 2027/);
    assert.doesNotMatch(content,/Starting Winter 2027/);
   }
  }
  for(const image of await p.locator('main img').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(i=>i.decode());}
  out.profiles.push({id,lang,width,dark,requirementsText:content,...state});
 }
 console.log('Reviewed profiles:',lang,width,dark,ids.length);
 }finally{await c.close();}
}
async function flow(browser,lang,width){
 const c=await context(browser,lang,width),p=await c.newPage();
 try{
  await p.goto(root+'?lang='+lang+'#/match',{waitUntil:'domcontentloaded'});await loaded(p,lang);
  await p.locator('#m-intake').selectOption('fall-2027');
  await p.locator('#m-ielts').fill('6.5');
  await p.locator('#m-act').fill('25');
  await p.locator('#m-route').selectOption('direct');
  await p.locator('#m-study-language').selectOption('en');
  await p.locator('.match-sections summary').click();
  await p.locator('#m-ielts-writing').fill('5.5');
  let result=await p.evaluate(()=>UPMatch.evaluate(UP.uniById('brigham-young-university'),{ielts:6.5,sat:null,act:25,gpa:null,budget:null,intake:'fall-2027',admissionRoute:'direct',studyLanguage:'en',ieltsSections:{writing:5.5}}));
  assert(result.checks.some(x=>x.level==='hard'),'BYU below section');
  await p.reload();await loaded(p,lang);
  assert.equal(await p.locator('#m-act').inputValue(),'25');
  assert.equal(await p.locator('#m-study-language').inputValue(),'en');
  assert.equal(await p.locator('#m-ielts-writing').inputValue(),'5.5');
  const checks=await p.evaluate(()=>{
   const source=UP.requirements.routes(UP.uniById('brigham-young-university'))[0];
   const input={ielts:6.5,sat:null,act:null,intake:'fall-2027',admissionRoute:'direct',studyLanguage:'en'};
   const make=(policy,overrides={})=>({admissionRequirements:[{...source,english:{ielts:{accepted:true,min:6.5,sections:{writing:6},role:'admission'}},academic:{satPolicy:policy,applicability:{status:'confirmed',entryYears:[2027]}},...overrides}]});
   const run=(policy,change={},route={})=>UP.requirements.evaluate(make(policy,route),{...input,...change});
   return {missingSections:run('optional'),belowSection:run('optional',{ieltsSections:{writing:5.5}}),required:run('required'),optional:run('optional'),notConsidered:run('not-used'),alternatives:run('required-alternatives'),otherLanguage:run('optional',{}, {language:'ja'}),otherIntake:run('optional',{intake:'fall-2028'}),otherProgramme:run('optional',{field:'data-science'},{programmeIds:['business']})};
  });
  assert(checks.missingSections.unchecked.includes('IELTS section scores'));
  assert(checks.belowSection.checks.some(c=>c.level==='hard'));
  assert(checks.required.unchecked.includes('Required SAT or ACT score'));
  for(const k of ['optional','notConsidered'])assert(!checks[k].checks.some(c=>c.level==='soft'||c.level==='hard'));
  assert(checks.alternatives.unchecked.some(s=>/alternatives/.test(s)));
  for(const k of ['otherLanguage','otherIntake','otherProgramme'])assert(!checks[k].checks.some(c=>c.level==='ok'));
  await p.locator('#m-field').selectOption('data-science');
  await p.locator('#m-intake').selectOption('fall-2026');
  await p.reload();await loaded(p,lang);
  assert.equal(await p.locator('#m-field').inputValue(),'data-science');
  assert.equal(await p.locator('#m-intake').inputValue(),'fall-2026');
  out.flows.push({lang,width,checks:'overall/sections, SAT required/optional/not considered/alternatives, programme/language/intake isolation',detail:checks});
  await p.locator('#m-study-language').selectOption('fr');
  assert.equal(await p.locator('#m-english').isChecked(),false,'Local-language choice disables the contradictory English-only filter');
  out.flows.push({lang,width,passed:'route/language/ACT/sections state, reload, local-language filtering'});
 }finally{await c.close();}
}
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 out.browser='Chrome '+browser.version();out.webkitInstalled=fs.existsSync(webkit.executablePath());
 try{await Promise.all([profiles(browser,'ru',360,false),profiles(browser,'en',1280,true)]);await flow(browser,'ru',390);await flow(browser,'en',1280);}
 catch(e){out.errors.push(e.stack);process.exitCode=1;}
 finally{await browser.close();}
 out.limitations.push('Mobile viewport emulation; no physical phone or Safari tested. Requirements evidence and browser route coverage are separate.');
 fs.writeFileSync(report,JSON.stringify(out,null,2));
 console.log(JSON.stringify({profiles:out.profiles.length,flows:out.flows.length,errors:out.errors,webkit:out.webkitInstalled}));
})().catch(e=>{console.error(e);process.exitCode=1;});
