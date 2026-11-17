'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const prefix=fs.readFileSync('tests/run.js','utf8').split('var failed = 0, passed = 0;')[0], mod={exports:{}};
vm.runInNewContext(prefix,{require,__dirname:path.resolve('tests'),module:mod,console,process,setTimeout,clearTimeout});
const {U,DB,M}=mod.exports, schools=DB.universities;
const out={date:'2026-11-17',total:schools.length,countries:{},coverage:{},duplicates:{ids:[],routes:[],names:[],domains:[]},issues:[],externalLinks:[]};
const locale={window:{}};
vm.runInNewContext(fs.readFileSync('data/i18n/ru.js','utf8'),locale);
const ru=locale.window.UNIPATH_I18N.ru;
function numbers(text){
 return (text.match(/\d+(?:[ ,.\u00a0\u202f]\d+)*/g)||[]).map(n=>{
   n=n.replace(/[ \u00a0\u202f]/g,'');
   return Number(/^\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(n)?n.replace(/,/g,''):n.replace(',','.'));
 }).sort((a,b)=>a-b).join('|');
}
const urls=new Map(), ids=new Map(), names=new Map(), domains=new Map();
function issue(u,kind,detail){out.issues.push({id:u.id,country:u.country,kind,detail});}
function scan(value,u,key){
 if(typeof value==='string' && ru[value] && !/^https?:/.test(value) && numbers(value)!==numbers(ru[value]))
   issue(u,'locale-numeric-suspect',{key,en:value,ru:ru[value]});
 if(typeof value==='string' && /^https?:\/\//.test(value)){
  try{
   const url=new URL(value);url.hash='';
   if(!urls.has(url.href))urls.set(url.href,{url:url.href,ids:new Set(),fields:new Set()});
   urls.get(url.href).ids.add(u.id);urls.get(url.href).fields.add(key);
  }catch(e){issue(u,'invalid-url',{key,value});}
 }
 if(Array.isArray(value))value.forEach((v,i)=>scan(v,u,key+'['+i+']'));
 else if(value && typeof value==='object')Object.entries(value).forEach(([k,v])=>scan(v,u,key+'.'+k));
}
for(const u of schools){
 out.countries[u.country]=(out.countries[u.country]||0)+1;
 if(ids.has(u.id))out.duplicates.ids.push(u.id);ids.set(u.id,true);
 const name=u.name.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
 if(names.has(name))out.duplicates.names.push([names.get(name),u.id]);names.set(name,u.id);
 try{const host=new URL(u.links.website).hostname.replace(/^www\./,'');const peers=domains.get(host)||[];peers.push(u.id);domains.set(host,peers);}catch(e){issue(u,'website-url',u.links?.website);}
 if(!DB.countries.some(c=>c.code===u.country))issue(u,'invalid-country',u.country);
 for(const field of ['id','name','country','city','links','admissions','english','costs','scholarships'])if(u[field]==null)issue(u,'missing-required',field);
 const c=u.costs||{}, a=DB.match.annualCost[u.id];
 const coverage=out.coverage[u.country]||(out.coverage[u.country]={noFullCost:0,tuitionOnly:0,noIeltsMinimum:0,noPhoto:0});
 if(!a||a.basis!=='total')coverage.noFullCost++;
 if(a?.basis==='tuition')coverage.tuitionOnly++;
 if(!U.ieltsMin(u))coverage.noIeltsMinimum++;
 if(!u.photos?.gallery?.length)coverage.noPhoto++;
 if(c.currency&&!['USD','CAD','GBP','EUR','JPY','KRW'].includes(c.currency))issue(u,'invalid-currency',c.currency);
 if(U.costArithmetic(u).length)issue(u,'cost-arithmetic',U.costArithmetic(u));
 if(a){
  if(!a.period)issue(u,'annual-period-implicit',{basis:a.basis,min:a.min,max:a.max});
  if(!a.academicYear&&!U.costYear(u))issue(u,'cost-year-missing',{basis:a.basis,min:a.min});
  const year=(a.academicYear||U.costYear(u)||'').match(/20\d{2}/)?.[0];
  if(year&&+year<2027&&U.costStatus(u)!=='previous-cycle')issue(u,'historical-cost-matching',{year,amount:a.max,basis:a.basis,status:M.evaluate(u,{budget:1000000,currency:'USD'}).budget.status});
  if(year&&+year<2027&&/^(fits|maybe)/.test(M.evaluate(u,{budget:1000000,currency:'USD',ielts:null,sat:null,gpa:null,intake:'fall-2027'}).budget.status))
    issue(u,'historical-positive-fall-2027',{year,amount:a.max});
  if(a.academicYear&&U.costYear(u)&&a.academicYear!==U.costYear(u))issue(u,'cost-years-differ',{match:a.academicYear,profile:U.costYear(u)});
  if(a.basis==='total'&&typeof c.breakdown?.billed==='number'&&c.breakdown.billed===a.max&&!c.breakdown.budget)issue(u,'billed-as-total-suspect',{value:a.max});
 }
 for(const d of U.roundsOf(u)){
  if(!d.kind)issue(u,'event-kind-missing',d);
  if(U.roundStatus(d)==='confirmed'&&(!d.dateISO||!d.cycleEvidence))issue(u,'confirmed-date-evidence-missing',d);
  if(d.time&&!d.timezone)issue(u,'deadline-timezone-missing',{id:d.id,date:d.date,time:d.time});
  if(U.roundStatus(d)==='annual-rule')issue(u,'annual-rule-cycle-unconfirmed',{id:d.id,date:d.date});
  if(d.dateISO&&+d.dateISO.slice(0,4)<2026&&U.roundStatus(d)==='confirmed')issue(u,'old-deadline-confirmed',{id:d.id,date:d.dateISO});
 }
 if(u.scholarships?.fullRide?.guaranteed)issue(u,'guarantee-review',{kind:U.awardKind(u),award:u.scholarships.fullRide});
 scan(u,u,'profile');
}
out.duplicates.domains=[...domains].filter(([k,v])=>v.length>1).map(([domain,ids])=>({domain,ids}));
out.externalLinks=[...urls.values()].map(x=>({...x,ids:[...x.ids],fields:[...x.fields]}));
fs.mkdirSync('research/six-country-audit',{recursive:true});
fs.writeFileSync(process.argv[2]||'research/six-country-audit/inventory.json',JSON.stringify(out,null,2)+'\n');
const kinds={};for(const i of out.issues)kinds[i.kind]=(kinds[i.kind]||0)+1;
console.log(JSON.stringify({total:out.total,countries:out.countries,duplicates:out.duplicates.ids,issues:kinds,urls:out.externalLinks.length},null,2));

