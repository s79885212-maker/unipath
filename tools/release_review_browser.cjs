'use strict';
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=process.argv[2]||'http://127.0.0.1:8765/unipath/';
const live=!root.startsWith('http://127.');
const disk=path.resolve('dist');
const selected=JSON.parse(fs.readFileSync('research/release-review-v250/selection.json','utf8'));
const ids=process.argv.includes('--sample')?Object.values(selected).map(s=>s.split(' ')[0]):Object.values(selected).join(' ').split(' ');
const result={root,live,profiles:[],scenarios:[],errors:[],limitations:[]};
const reportDir=process.env.UNIPATH_REPORT_DIR || 'research/release-review-v250';
fs.mkdirSync(reportDir,{recursive:true});
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'};
async function context(browser,lang,width){
  const ctx=await browser.newContext({viewport:{width,height:865}});
  if(process.argv.includes('--dark'))await ctx.addInitScript(()=>localStorage.setItem('unipath.theme','dark'));
  if(!live)await ctx.route(root+'**/*',r=>{
    const rel=decodeURIComponent(new URL(r.request().url()).pathname.slice(new URL(root).pathname.length));
    let file=path.resolve(disk,rel||'index.html');
    if(!file.startsWith(disk+path.sep)||!fs.existsSync(file))return r.fulfill({status:404});
    if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');
    return fs.existsSync(file)?r.fulfill({status:200,contentType:mime[path.extname(file)],body:fs.readFileSync(file)}):r.fulfill({status:404});
  });
  return ctx;
}
async function loaded(page,lang){
  await page.waitForFunction(l=>window.UP&&window.UPPages&&window.UPMatch&&document.documentElement.lang===l,lang,{timeout:25000});
  result.version=await page.locator('script[src*="assets/js/app.js"]').getAttribute('src');
  const stagingExemption=await page.evaluate(()=>/\/staging\//.test(location.pathname)||!!document.querySelector('meta[name="robots"][content*="noindex"]'));
  if(live&&stagingExemption)result.turnstile='The pre-existing staging exemption is active; gate.js was not changed by this task.';
  if(live&&!stagingExemption){
    try{await page.waitForFunction(()=>Number(localStorage.getItem('unipath.human.v1'))>Date.now()-24*3600000||document.querySelector('#gate-retry:not([hidden])'),null,{timeout:25000});}catch(e){}
    const passed=await page.evaluate(()=>Number(localStorage.getItem('unipath.human.v1'))>Date.now()-24*3600000);
    if(!passed)throw Error('Turnstile verification did not complete. '+await page.locator('#human-gate').innerText().catch(()=>''));
  }
  const gate=page.locator('#human-gate');
  if(live&&await gate.count()&&await gate.isVisible())throw Error('Turnstile challenge blocks visitor session');
}
async function profiles(browser,lang,width){
  const ctx=await context(browser,lang,width),page=await ctx.newPage();
  page.on('pageerror',e=>result.errors.push(e.message));
  page.on('response',r=>{if(r.url().startsWith(root)&&r.status()>=400)result.errors.push(r.status()+' '+r.url());});
  page.on('requestfailed',r=>{if(r.url().startsWith(root))result.errors.push('failed '+r.url());});
  try{
    for(const id of ids){
      const response=await page.goto(root+'university/'+id+'/?lang='+lang,{waitUntil:'domcontentloaded'});
      assert.equal(response.status(),200,id);
      await loaded(page,lang);
      await page.locator('main #costs').waitFor();
      const heading=await page.locator('h1').innerText();
      assert(heading.length>2,id);
      await page.locator('#photos').scrollIntoViewIfNeeded();
      for(const image of await page.locator('main img').all()){
        await image.scrollIntoViewIfNeeded();
        try{await image.evaluate(i=>i.decode());}catch(e){result.errors.push(id+' image decode failed '+await image.getAttribute('src'));}
      }
      const detail=await page.evaluate(()=>({
        overflow:document.documentElement.scrollWidth>innerWidth+1,
        images:[...document.querySelectorAll('main img')].map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0,width:i.naturalWidth,lazy:i.loading})),
        photoText:document.querySelector('#photos')?.innerText,
        costText:document.querySelector('#costs')?.innerText,
        awardText:document.querySelector('#scholarships')?.innerText,
        untranslated:window.I18N?.missing?[...window.I18N.missing]:[]
      }));
      if(id==='sungkyunkwan-university') {
        const summary=await page.locator('main').innerText();
        assert.doesNotMatch(summary,/genuine four-year full-cost award|настоящая четырёхлетняя стипендия на все расходы/);
        assert.match(summary,lang==='ru'?/Кампусы SKKU находятся в Сеуле и Сувоне/:/SKKU has campuses in Seoul and Suwon/);
        assert.match(detail.awardText||'',/3[ ,\u202f]?400[ ,\u202f]?000/);
        assert.doesNotMatch(detail.awardText||'',/570[ ,]?000/);
        if(lang==='ru')assert.match(detail.awardText||'',/семестр/);
      }
      if(id==='seoul-national-university')assert.match(detail.awardText||'',/2018/);
      if(id==='university-of-portsmouth')assert.match(detail.costText||'',/20[ ,\u202f]?950/);
      const expectedImages=await page.evaluate(id=>{const p=UP.uniById(id).photos||{};const n=(p.gallery||[]).length;return n+(p.main&&n?1:0);},id);
      assert.equal(detail.images.length,expectedImages,id+' keeps all expected loaded photos');
      for(const image of detail.images)if(!image.loaded)result.errors.push(id+' unloaded '+image.src);
      if(detail.overflow)result.errors.push(id+' horizontal overflow '+lang+' '+width);
      result.profiles.push({id,lang,width,heading,...detail});
    }
    console.log('profiles',lang,width,ids.length);
  }finally{await ctx.close();}
}
async function scenarios(browser,lang,width){
  const ctx=await context(browser,lang,width),p=await ctx.newPage();
  p.setDefaultTimeout(60000);
  p.on('pageerror',e=>result.errors.push(e.message));
  try{
    await p.goto(root+'?lang='+lang,{waitUntil:'domcontentloaded'});await loaded(p,lang);
    await p.locator('[data-searchbox] input').fill('KAIST');
    await p.locator('[data-search-go]').click();
    await p.locator('#results h3 a').first().waitFor();
    await p.locator('#results h3 a').first().click();
    await p.locator('main #admissions').waitFor();
    await p.goto(root+'?lang='+lang+'#/match',{waitUntil:'domcontentloaded'});await loaded(p,lang);
    await p.locator('#m-intake').selectOption('fall-2027');
    await p.locator('#m-budget').fill('0');
    await p.reload();await loaded(p,lang);
    assert.equal(await p.locator('#m-budget').inputValue(),'0');
    await p.locator('#m-budget').fill('');
    assert.equal(await p.locator('#m-budget').inputValue(),'');
    await p.locator('#m-budget').fill('35000');
    const evaluate=async id=>p.evaluate(id=>UPMatch.evaluate(UP.uniById(id),{budget:35000,currency:'USD',ielts:null,sat:null,gpa:null,intake:UP.intakeGet()}).budget.status,id);
    for(const id of ['knox-college','university-of-regina','gist'])assert.equal(await evaluate(id),'unknown',id);
    assert.equal(await evaluate('drake-university'),'over');
    assert.equal(await evaluate('west-virginia-university'),'fits-tuition');
    assert.equal(await evaluate('florida-state-university'),'unknown');
    await p.locator('#m-budget').fill('70904');
    let card=p.locator('.match-item').filter({has:p.locator('h3 a[href*="/university/university-of-evansville"]')});
    await card.locator('.badge-ok').waitFor();
    if(lang==='ru')assert.match(await card.innerText(),/Учебный год/);
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await p.screenshot({path:path.resolve('../six-country-match-'+(live?'live':'local')+'-'+lang+'-'+width+'.png'),fullPage:false});
    await p.locator('#m-intake').selectOption('fall-2026');
    assert.equal(await card.locator('.badge-ok').count(),0,'Intake change recalculates matching');
    await p.locator('#m-intake').selectOption('fall-2027');
    await p.locator('#m-ielts').fill('7');
    card=p.locator('.match-item').filter({has:p.locator('h3 a[href*="/university/university-of-bath"]')});
    await card.getByText(lang==='ru'?'Сверьте минимум по каждой секции IELTS отдельно. Подбор проверяет только общий балл.':'Check the minimum for each IELTS section separately. The matcher checks only the overall score.',{exact:false}).first().waitFor();
    await p.reload();await loaded(p,lang);
    assert.equal(await p.locator('#m-budget').inputValue(),'70904');
    assert.equal(await p.locator('#m-intake').inputValue(),'fall-2027');
    result.scenarios.push({lang,width,matcher:'intake, historical, lower bound, exact budget, section warning, reload passed'});
    const funding=await p.evaluate(()=>({
      firstSemesterAnnualBudget:UPMatch.evaluate(UP.uniById('unist'),{budget:0,currency:'KRW',intake:'all'}).budget.status,
      tamuFirstYear:UP.needFirstYearEligible(UP.uniById('texas-a-and-m-university')),
      snuFunding:UP.optionById('scholarship','tuition-stipend').test(UP.uniById('seoul-national-university')),
      undatedCost:UPMatch.evaluate(UP.uniById('northeastern-university'),{budget:200000,currency:'USD',intake:'all'}).budget.status,
      tamuNeed:UP.optionById('scholarship','need').test(UP.uniById('texas-a-and-m-university')),
      skkuFunding:UP.optionById('scholarship','tuition-stipend').test(UP.uniById('sungkyunkwan-university')),
      kyushuFunding:UP.optionById('scholarship','tuition-stipend').test(UP.uniById('kyushu-university')),
      unistTuition:UP.optionById('scholarship','full-tuition').test(UP.uniById('unist')),
      skkuMinimumMet:UPMatch.evaluate(UP.uniById('sungkyunkwan-university'),{ielts:7,sat:null,gpa:null,budget:null,currency:'USD',intake:'fall-2027'}).checks.some(c=>c.level==='ok'&&c.basis==='minimum'),
      evansvilleLow:UPMatch.evaluate(UP.uniById('university-of-evansville'),{budget:70894,currency:'USD',intake:'fall-2027'}).budget.status,
      evansvilleExact:UPMatch.evaluate(UP.uniById('university-of-evansville'),{budget:70904,currency:'USD',intake:'fall-2027'}).budget.status,
      portsmouth:UPMatch.evaluate(UP.uniById('university-of-portsmouth'),{budget:20000,currency:'GBP',field:'data-science',intake:'fall-2027'}).budget.status
    }));
    assert.deepEqual(funding,{firstSemesterAnnualBudget:'unknown',tamuFirstYear:null,snuFunding:false,undatedCost:'unknown',tamuNeed:false,skkuFunding:false,kyushuFunding:false,unistTuition:true,skkuMinimumMet:false,evansvilleLow:'over',evansvilleExact:'fits',portsmouth:'unknown'});
    result.scenarios.push({lang,width,funding});

    const representatives=Object.values(selected).map(v=>v.split(' ')[0]);
    for(const id of representatives){
      await p.goto(root+'university/'+id+'/?lang='+lang);await loaded(p,lang);
      await p.locator('[data-save="'+id+'"]').first().click();
      assert.equal(await p.locator('[data-save="'+id+'"]').first().getAttribute('aria-pressed'),'true');
    }
    for(const id of representatives.slice(0,3)){
      await p.goto(root+'university/'+id+'/?lang='+lang);await loaded(p,lang);
      await p.locator('[data-compare="'+id+'"]').first().click();
    }
    await p.goto(root+'?lang='+lang+'#/compare');await loaded(p,lang);
    await p.locator('.compare-table').waitFor();
    assert.equal(await p.locator('.compare-table thead th').count(),4);
    await p.goto(root+'?lang='+lang+'#/saved');await loaded(p,lang);
    assert.equal(await p.evaluate(()=>UP.savedGet().length),6);
    await p.reload();await loaded(p,lang);
    assert.equal(await p.evaluate(()=>UP.savedGet().length),6);
    // Saved calendar contains only confirmed application events, never decisions.
    const calendar=await p.evaluate(()=>{
      const expected=UP.savedGet().flatMap(id=>{const u=UP.uniById(id);return UP.roundsOf(u).filter(d=>UP.isApplicationDeadline(d)&&UP.roundStatus(d)==='confirmed'&&UP.roundInIntake(d,u,UP.intakeGet())&&d.dateISO).map(d=>({id,date:d.dateISO}));});
      return {expected,rows:document.querySelectorAll('.saved-table tbody tr').length};
    });
    assert.equal(calendar.rows,calendar.expected.length);
    const id=representatives[0];await p.locator('[data-save="'+id+'"]').first().click();
    await p.reload();await loaded(p,lang);assert.equal(await p.evaluate(()=>UP.savedGet().length),5);
    await p.goto(root+'?lang='+lang+'#/universities');await loaded(p,lang);
    await p.locator('#browse-q').fill('KAIST');
    await p.locator('#results h3 a').first().waitFor();
    assert.equal(await p.locator('#results h3 a').count(),1);
    await p.locator('#browse-q').fill('');
    if(width<600)await p.locator('details.filters-box > summary').click();
    await p.locator('[data-g="country"][data-o="ca"]').check();
    await p.locator('[data-g="language"][data-o="english-yes"]').check();
    await p.locator('[data-g="field"][data-o="business"]').check();
    await p.reload();await loaded(p,lang);
    assert(await p.locator('[data-g="country"][data-o="ca"]').isChecked());
    assert(await p.locator('[data-g="field"][data-o="business"]').isChecked());
    if(width<600&&!await p.locator('details.filters-box').evaluate(d=>d.open))await p.locator('details.filters-box > summary').click();
    await p.locator('[data-clear-filters]').click();
    assert.equal(await p.locator('input[data-g]:checked').count(),0);
    await p.locator('#browse-q').fill('Bath');
    await p.locator('[data-g="scholarship"][data-o="full-ride"]').check();
    assert.equal(await p.locator('#results h3 a').count(),0,'Partial Bath award cannot pass Full ride');
    await p.locator('[data-clear-filters]').click();
    await p.locator('#results h3 a').first().waitFor();
    const media=p.locator('.uni-card .media').first();
    await media.scrollIntoViewIfNeeded();await media.locator('img').evaluate(i=>i.decode());
    const geometry=await media.evaluate(e=>({coverHeight:e.getBoundingClientRect().height,imageHeight:e.querySelector('img').getBoundingClientRect().height}));
    assert(Math.abs(geometry.coverHeight-geometry.imageHeight)<=1,'Loaded photo must cover the fallback');
    const controls=await p.locator('main input').evaluateAll(nodes=>nodes.map(n=>({id:n.id,type:n.type,placeholder:n.placeholder})));
    result.scenarios.push({lang,width,savedCompareCalendar:'six countries saved, three compared, reload and removal passed',calendar,controls,mediaGeometry:geometry});
    if(width<600){await p.locator('[data-nav-toggle]').click();assert.equal(await p.locator('[data-nav-toggle]').getAttribute('aria-expanded'),'true');await p.keyboard.press('Escape');assert.equal(await p.locator('[data-nav-toggle]').getAttribute('aria-expanded'),'false');}
    await p.locator('[data-theme-toggle]').click();
    await p.waitForFunction(()=>!document.documentElement.classList.contains('theme-reveal'));
    result.scenarios.push({lang,width,theme:await p.locator('html').getAttribute('data-theme')});
    await p.screenshot({path:path.resolve('../six-country-'+(live?'live':'local')+'-'+lang+'-'+width+'.png'),fullPage:false});
    await p.keyboard.press('Tab');
    assert(await p.evaluate(()=>document.activeElement!==document.body));
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await p.locator('[data-lang-toggle]').click();
    await p.waitForFunction(l=>document.documentElement.lang===l,lang==='ru'?'en':'ru');
    result.scenarios.push({lang,width,catalogue:'search, combined filters, reset, reload, Full ride exclusion, locale switch, menu Escape and focus passed'});
    if(!live){
      const image=p.locator('.uni-card .media img').first();await image.waitFor();
      await image.evaluate(i=>i.dispatchEvent(new Event('error')));
      await p.locator('.uni-card .media .media-mono').first().waitFor({state:'visible'});
      assert.equal(await p.locator('.uni-card .media img').count(),0);
      result.scenarios.push({lang,width,imageFailure:'An isolated synthetic error removes the image and reveals the stock fallback'});
    }
    await p.goto(root+'?lang='+lang+'#/scholarships',{waitUntil:'domcontentloaded'});await loaded(p,lang);
    const historical=p.locator('article').filter({has:p.locator('h3 a[href*="seoul-national-university"]')}).first();
    await historical.waitFor();
    assert.equal(await historical.locator('.cover-yes').count(),0,'Historical coverage is not confirmed in the scholarship overview');
    assert(await historical.locator('.cover-unk').count()>0);
    result.scenarios.push({lang,width,historicalCoverage:'SNU overview uses unknown coverage marks; no confirmed checks'});
  }finally{await ctx.close();}
}
(async()=>{
  const browser=await chromium.launch({executablePath:process.env.CHROME_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  result.browser='Chrome '+browser.version();
  try{
    if(process.argv.includes('--flows'))await Promise.all(process.argv.includes('--swap') ? [scenarios(browser,'ru',1280),scenarios(browser,'en',390)] : [scenarios(browser,'ru',360),scenarios(browser,'en',1280)]);
    else await Promise.all([profiles(browser,'ru',process.argv.includes('--sample')?1280:360),profiles(browser,'en',process.argv.includes('--sample')?390:1280)]);
  }catch(e){result.errors.push(e.stack);process.exitCode=1;}
  finally{await browser.close();}
  result.webkitInstalled=fs.existsSync(webkit.executablePath());
  result.limitations.push('No real Safari or iPhone tested. Saved list has an application-date table; no standalone calendar or export exists.');
  fs.writeFileSync(reportDir+'/'+(live?'live':'local')+(process.argv.includes('--sample')?'-sample':'')+(process.argv.includes('--flows')?'-flows':'-profiles')+(process.argv.includes('--dark')?'-dark':'')+'.json',JSON.stringify(result,null,2));
  console.log(JSON.stringify({browser:result.browser,profiles:result.profiles.length,scenarios:result.scenarios.length,errors:result.errors,webkit:result.webkitInstalled}));
})().catch(e=>{console.error(e);process.exitCode=1;});
