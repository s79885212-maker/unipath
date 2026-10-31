'use strict';
module.exports=function(env){
  var fs=require('fs'),path=require('path');
  var U=env.U,M=env.M,DB=env.DB,ok=env.ok;
  var root=path.resolve(__dirname,'..');
  var registry=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-registry.json'),'utf8'));
  var sources=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-sources.json'),'utf8'));
  var targets=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-targets.json'),'utf8'));
  var base=new Set(registry.baselineIds),allowed=new Set(targets.map(function(t){return t.id;}));
  var fresh=DB.universities.filter(function(u){return !base.has(u.id);});
  ok(base.size===370 && registry.baselineIds.every(function(id){return !!U.uniById(id);}),
     'USA +50 preserves every original institution, including all 370 baseline IDs');
  ok(targets.length===50 && allowed.size===50 && fresh.every(function(u){return u.country==='us'&&allowed.has(u.id);}) && DB.countries.length===6,
     'USA +50 adds only approved IDs and keeps six countries');
  var firstMissing=targets.findIndex(function(t){return !U.uniById(t.id);});
  ok(firstMissing===-1 || (firstMissing%10===0 && targets.slice(firstMissing).every(function(t){return !U.uniById(t.id);})),
     'approved expansion is an ordered prefix of complete ten-institution batches');
  ok(fresh.every(function(u){return u.programsStatus==='partial'&&u.programsBasis==='evidence'&&
      (u.programs||[]).every(function(f){var e=u.programEvidence[f];return e&&e.level==='bachelor'&&e.url&&e.checked&&e.campus;});}),
     'new programme matches have named bachelor/campus evidence and do not claim complete coverage');
  ok(fresh.every(function(u){return u.englishTaught!==true || (u.englishTaughtPrograms||[]).length>0;}) &&
     fresh.every(function(u){return (u.englishTaughtPrograms||[]).every(function(f){return /English/.test(u.programEvidence[f].language||'');});}),
     'an English website alone never makes new majors English-taught');
  var bad=[];
  fresh.forEach(function(u){U.roundsOf(u).forEach(function(d){
    if(d.status==='annual-rule'&&(d.dateISO||d.entryYear||U.roundState(d)!=='unknown'))bad.push(u.id+':annual');
    if(d.status==='confirmed'&&(!d.cycleEvidence||!/2027/.test(d.cycleEvidence.quote||'')))bad.push(u.id+':cycle');
  });});
  ok(!bad.length,'new confirmed dates cite the intake year, annual rules remain undated',bad.join(';'));
  function budget(u,b){return M.evaluate(u,{ielts:null,sat:null,gpa:null,budget:b,currency:'USD'}).budget;}
  ok(fresh.every(function(u){return U.costStatus(u)!=='previous-cycle'||
     (!DB.match.annualCost[u.id]&&[null,0,999999].every(function(b){return budget(u,b).status==='unknown';}));}),
     'new previous-cycle references never confirm budget coverage with empty, zero or large budgets');
  var uiuc=U.uniById('university-of-illinois-urbana-champaign'),uga=U.uniById('university-of-georgia');
  ok(uiuc&&U.ieltsMin(uiuc)===null&&/TRANSFER/.test(uiuc.english.note),
     'UIUC transfer IELTS7.5 is not installed as a first-year minimum');
  ok(uga&&U.ieltsMin(uga)===null&&uga.english.ielts.recommended===null&&/2019–2023/.test(uga.english.note),
     'UGA admitted-student IELTS7.5 average is neither first-year minimum nor recommendation');
  var uw=U.uniById('university-of-wisconsin-madison'),king=U.fullRide(uw);
  var psu=U.uniById('pennsylvania-state-university-university-park');
  ok(/years8–11/.test(uw.academics.internationalQualifications)&&/years9–12/.test(psu.academics.internationalQualifications)&&
     /11-year/.test(psu.academics.internationalQualifications)&&/academic lyceum/.test(uw.academics.internationalQualifications),
     'Uzbekistan country instructions keep Wisconsin/PennState school-year differences and unresolved lyceum equivalence');
  ok(king.id==='king-morgridge'&&/COUNTRY OF THE SECONDARY SCHOOL/.test(king.note)&&/Uzbekistan is not listed/.test(king.note)&&
     U.awardDates(uw,king).length===2&&U.awardDates(uw,{id:'other',category:'merit',entryTerm:'Autumn',entryYear:'2027'}).length===0,
     'King-Morgridge school-country restriction and exact two award-linked events remain explicit');
  var nb=U.uniById('rutgers-university-new-brunswick');
  ok(nb.city==='New Brunswick'&&U.satPolicy(nb)==='optional'&&nb.english.toefl.scales[1].min===4.5&&nb.costs.billedSubtotal===62782,
     'Rutgers New Brunswick keeps its campus-specific policy, English scale and billed reference');
  ok(fresh.every(function(u){return sources.some(function(s){return s.id===u.id&&s.access==='html-read'&&s.quote&&s.category&&s.verified;});}) &&
     sources.every(function(s){return allowed.has(s.id)&&/^https:\/\//.test(s.source)&&s.verified&&s.category&&(s.access==='html-read'?s.quote&&s.facts:s.facts===null);}),
     'new research distinguishes read primary evidence from blocked/unavailable facts');
};
