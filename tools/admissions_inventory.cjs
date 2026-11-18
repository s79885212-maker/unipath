'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path');
const mod={exports:{}};
vm.runInNewContext(fs.readFileSync('tests/run.js','utf8').split('var failed = 0, passed = 0;')[0],{require,__dirname:path.resolve('tests'),module:mod,console,process,setTimeout,clearTimeout});
const {DB,U}=mod.exports,root='research/admissions-120';fs.mkdirSync(root,{recursive:true});
const rows=DB.universities.map(u=>{
 const e=u.english||{},a=u.academics||{},i=e.ielts||{},t=e.toefl||{},sat=a.sat||{};
 const flags=[];
 if(U.testStatus(i)==='not-confirmed')flags.push('ielts-unknown');
 if(!i.min&&!i.recommended&&!(i.profiles||[]).length)flags.push('no-numeric-ielts');
 if(!e.detailsSource)flags.push('no-language-detail-source');
 if(!e.waiver)flags.push('waiver-unknown');
 if(!i.sections)flags.push('section-minima-unrecorded');
 if(U.satPolicy(u)==='unknown'||U.satPolicy(u)==='accepted')flags.push('sat-policy-unknown');
 if(!sat.cycle)flags.push('sat-cycle-unrecorded');
 if(!(u.admissionRequirements||[]).length)flags.push('no-structured-route-requirements');
 return {id:u.id,name:u.name,country:u.country,flags,ieltsStatus:U.testStatus(i),ielts:i,toefl:t,waiver:e.waiver||null,languageSource:e.detailsSource||null,languageVerified:e.detailsVerified||null,satPolicy:U.satPolicy(u),sat,englishTaught:u.englishTaught,programmes:u.programs,routes:u.routes||null,admissionRequirements:u.admissionRequirements||[],links:u.links,sources:u.sources,academics:a,english:e};
});
const summary={total:rows.length,countries:{},note:'Inventory of recorded fields only; a link or timestamp is not proof of content review.'};
for(const r of rows){const c=summary.countries[r.country]||(summary.countries[r.country]={total:0,clearLanguage:0,numericIelts:0,sectionsRecorded:0,waiverRecorded:0,knownSatPolicy:0,satCycleRecorded:0,routeRequirements:0});c.total++;c.clearLanguage+=!['not-confirmed','conflict',null].includes(r.ieltsStatus)?1:0;c.numericIelts+=typeof r.ielts.min==='number'?1:0;c.sectionsRecorded+=r.ielts.sections?1:0;c.waiverRecorded+=r.waiver?1:0;c.knownSatPolicy+=!['unknown','accepted'].includes(r.satPolicy)?1:0;c.satCycleRecorded+=r.sat.cycle?1:0;c.routeRequirements+=r.admissionRequirements.length?1:0;}
const suffix=process.argv[2]||'before';
fs.writeFileSync(root+'/inventory-'+suffix+'.json',JSON.stringify({summary,rows},null,2)+'\n');
fs.writeFileSync('../admissions-catalog.json',JSON.stringify(DB.universities,null,2)+'\n');
console.log(JSON.stringify(summary,null,2));
for(const c of ['us','ca','uk','de','jp','kr'])console.log(c,rows.filter(r=>r.country===c).sort((a,b)=>b.flags.length-a.flags.length).slice(0,c==='us'?80:25).map(r=>r.id+'('+r.flags.length+')').join(' '));
