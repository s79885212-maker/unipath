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
  ok(fresh.map(function(u){return u.id;}).join('|')===targets.slice(0,fresh.length).map(function(t){return t.id;}).join('|'),
     'rebuilding an earlier batch cannot move it behind later approved batches');
  ok(fresh.every(function(u){return u.programsStatus==='partial'&&u.programsBasis==='evidence'&&
      (u.programs||[]).every(function(f){var e=u.programEvidence[f];return e&&e.level==='bachelor'&&e.url&&e.checked&&e.campus;});}),
     'new programme matches have named bachelor/campus evidence and do not claim complete coverage');
  var fields=new Set(DB.fields.map(function(f){return f.id;}));
  var wfu=U.uniById('wake-forest-university');
  ok(fresh.every(function(u){return ['ielts','toefl','duolingo'].every(function(k){
       var t=(u.english||{})[k]||{};
       return (!t.sections||typeof t.sections==='string')&&(t.profiles||[]).every(function(p){return !p.sections||typeof p.sections==='string';});
     });}), 'English section descriptions preserve the text schema used by both browser rendering and static export');
  ok(fresh.every(function(u){return u.programs.every(function(f){return fields.has(f);});}),
     'new degree evidence uses existing field categories, never untranslated chemistry/physics keys');
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
  ok(U.awardKind(wfu)==='full-ride'&&U.awardDates(wfu,U.fullRide(wfu)).length===1&&
     U.needBased(wfu).availableToInternational===false&&budget(wfu,0).status==='unknown'&&
     U.awardKind(uga)==='full-funding'&&U.awardDates(uga,U.fullRide(uga)).length===1&&
     /APPROXIMATES/.test(U.fullRide(uga).note)&&budget(uga,0).status==='unknown',
     'Stamps itemised coverage differs from approximate Foundation funding; annual award links neither confirm2027 nor cover an unknown budget');
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
  env.sandbox.location.search='?lang=ru';
  env.load('data/i18n/ru.js');env.load('assets/js/i18n.js');
  var tr=env.sandbox.I18N.lookup;
  ok(fresh.every(function(u){return !u.type||!!tr(u.type);})&&
     !!tr('Through Fall 2029')&&!!tr('Fall/Spring/Summer 2027'),
     'institution types and new SAT cohort labels have Russian display translations');
  ok(tr('Required documents — Early Action')==='Обязательные документы — Early Action (ранняя подача)'&&
     /ноября/.test(tr('1 November, 23:59 CT')||'')&&/тихоокеанскому/.test(tr('22 January, 23:59 Pacific Time')||''),
     'new composed document titles and dates with published US time zones translate in Russian');
  var bing=U.uniById('binghamton-university');
  ok(bing&&U.ieltsMin(bing)===null&&bing.english.ielts.recommended===null&&/Mid50%/.test(bing.english.note)&&
     /section range/.test(bing.english.note),
     'Binghamton Mid50 IELTS/TOEFL and SAT EBRW statistics are not minima, averages or SAT composite');
  var nc=U.uniById('north-carolina-state-university');
  ok(nc&&U.satPolicy(nc)==='conditional'&&/outside the US do not need/.test(nc.academics.sat.note)&&
     /US schools/.test(nc.academics.sat.note)&&nc.academics.gpa===null,
     'NC State preserves school-location SAT conditions without converting Uzbek marks into US weighted GPA');
  ok(nc.costs.academicYear==='2027–2028'&&U.budgetAmount(nc)===58423&&U.costArithmetic(nc).length===0&&
     budget(nc,null).status==='none'&&budget(nc,0).status==='over'&&budget(nc,58423).status==='fits'&&
     [null,0,58423].every(function(b){var t=budget(nc,b).text;return /2027–2028/.test(t)&&/Summer/.test(t)&&/financial-guarantee estimate/.test(t);}),
     'NC State published 2027–28 estimate keeps its financial/academic-year/summer scope for empty, zero and sufficient budgets');
  var ncRu=tr(budget(nc,58423).text)||'';
  ok(/финансового обеспечения/.test(ncRu)&&/Лето в США не включено/.test(ncRu)&&!ncRu.includes('Scope:'),
     'a plain annual-total scope note translates completely in Russian, not just calculated programme examples');
  var nw=U.uniById('rutgers-university-newark');
  ok(nw&&nw.city==='Newark'&&U.satPolicy(nw)==='conditional'&&/seven-year BA\/MD/.test(nw.academics.sat.note)&&
     nw.english.toefl.scales[1].min===4.0&&nw.programEvidence['computer-science'].program==='Computer Science, B.A.',
     'Rutgers Newark retains its BA/MD exception, TOEFL4.0 and BA degree distinct from New Brunswick');
  var mines=U.uniById('colorado-school-of-mines');
  ok(mines&&mines.academics.sat.policy===null&&mines.admissions.applicationFee.amount===null&&
     /403/.test(mines.academics.sat.note)&&mines.programs.join(',')==='mathematics',
     'blocked Mines admissions snippets never become a fee, optional policy, English minimum or unverified CS match');
  var rejected={id:'synthetic-rejected-ielts',english:{ielts:{accepted:false,min:1}},academics:{sat:{}},costs:{},scholarships:{}};
  var reject=M.evaluate(rejected,{ielts:9,sat:null,gpa:null,budget:null,currency:'USD'});
  ok(!reject.checks.some(function(c){return c.level==='ok'&&/IELTS/.test(c.text);})&&
     reject.checks.some(function(c){return /IELTS is not accepted/.test(c.text);}),
     'explicitly unaccepted IELTS cannot become a green match even if a stale numeric minimum exists');
  ok(U.satPolicy(U.uniById('university-of-texas-at-austin'))==='required-alternatives',
     'UT Austin required testing keeps the official CLT alternative rather than requiring SAT/ACT alone');
  var usf=U.uniById('university-of-south-florida'),fiu=U.uniById('florida-international-university');
  ok(usf&&U.testStatus(usf.english.ielts)==='not-accepted'&&U.ieltsLabel(usf)==='Not accepted'&&
     !M.evaluate(usf,{ielts:9,sat:null,gpa:null,budget:null,currency:'USD'}).checks.some(function(c){return c.level==='ok'&&/IELTS/.test(c.text);})&&
     !usf.academics.sat.min&&/490/.test(usf.academics.sat.note),
     'USF explicitly rejects IELTS as a substitute and never installs SAT section490 as composite minimum');
  ok(fiu&&U.testStatus(fiu.english.ielts)==='not-required'&&U.satPolicy(fiu)==='required-alternatives'&&
     /not an English waiver/.test(fiu.english.note),
     'FIU IELTS-not-required is distinct from USF-not-accepted and is not an English-readiness waiver');
  var uic=U.uniById('university-of-illinois-chicago'),njit=U.uniById('new-jersey-institute-of-technology');
  ok(uic&&uic.admissions.applicationFee.amount===170&&U.satPolicy(uic)==='optional'&&
     uic.admissions.deadlines[0].dateISO==='2026-11-02'&&uic.english.duolingo.min===120,
     'UIC keeps170USD total,2027 test-optional,November2 deadline and DET120 distinct from UIUC');
  ok(njit&&njit.academics.sat.policy===null&&/Fall 2026/.test(njit.academics.sat.note)&&/Fall 2027/.test(njit.academics.sat.note),
     'dated NJIT Fall2026 test policy is not silently extended to Fall2027');
  var cam=U.uniById('rutgers-university-camden');
  ok(cam&&U.ieltsMin(cam)===6.0&&/BS\/DO/.test(U.satLabel(cam))&&/BA\/MD/.test(U.satLabel(nw))&&
     /BA\/BS/.test(cam.programEvidence['computer-science'].program),
     'Rutgers three campuses keep distinct IELTS thresholds, programme-exception labels and degrees');
  var wab=U.uniById('wabash-college'),bay=U.uniById('baylor-university'),yu=U.uniById('yeshiva-university');
  ok(wab&&wab.institutionKind==='college'&&U.ieltsMin(wab)===null&&wab.english.ielts.recommended===6.5&&
     wab.english.toefl.min===null&&!DB.match.annualCost[wab.id]&&budget(wab,24990).status==='unknown'&&
     /college for men/.test(wab.admissions.notes.join(' ')),
     'Wabash keeps men-only scope, recommended English and financial declaration separate from admission minima and annual price');
  ok(bay&&bay.admissions.applicationFee.amount===0&&U.needBased(bay).availableToInternational===true&&
     /November 1 versus November 15/.test(bay.scholarships.fullRide.note)&&
     !bay.admissions.deadlines.some(function(d){return d.kind==='aid'&&d.status==='confirmed';}),
     'Baylor aid reaches the display/filter helper; verified free application differs from unknown fee; conflicting BIFAA priority does not become confirmed aid date');
  ok(yu&&/Honors/.test(U.satLabel(yu))&&/Yeshiva College for Men/.test(yu.programNote)&&
     /Stern College for Women/.test(yu.programNote)&&yu.english.toefl.scales.every(function(s){return s.period!=='post2026';})&&
     yu.admissions.deadlines[0].dateISO==='2027-02-01',
     'Yeshiva preserves college scope, Honors test condition, verified2027 deadline and unknown new TOEFL threshold');
  var utk=U.uniById('university-of-tennessee-knoxville'),stev=U.uniById('stevens-institute-of-technology');
  ok(utk&&/including CS/.test(U.satLabel(utk))&&utk.admissions.deadlines.filter(function(d){return d.kind==='documents';}).length===2&&
     stev&&/Pre-Law/.test(U.satLabel(stev))&&!stev.academics.sat.min&&stev.academics.sat.cycle==='Through Fall 2029',
     'Tennessee and Stevens retain named programme test exceptions without leaking special minima into general admission');
  var hill=U.uniById('hillsdale-college'),byu=U.uniById('brigham-young-university');
  ok(fresh.length===50&&DB.universities.length===420&&hill&&!hill.programs.includes('computer-science')&&
     hill.programs.includes('mathematics')&&/minor only/.test(hill.programNote),
     'all fifty approved institutions are present; Hillsdale CS minor never becomes a confirmed bachelor-major match');
  ok(byu&&byu.city==='Provo'&&byu.academics.sat.policy===null&&U.costStatus(byu)==='previous-cycle'&&
     !DB.match.annualCost[byu.id]&&/Religious membership is not citizenship/.test(byu.costs.note)&&
     /endorsement/.test(byu.admissions.notes.join(' ')),
     'BYU Provo keeps endorsement, religious tuition categories, semester/year and unresolved cohort testing explicit');
  var sf=U.uniById('university-of-san-francisco'),ucf=U.uniById('university-of-central-florida');
  ok(sf&&U.ieltsMin(sf)===6.0&&sf.english.ielts.recommended===6.5&&sf.english.toefl.scales[1].min===3.5&&
     sf.english.toefl.scales[1].recommended===4.5&&U.satPolicy(sf)==='optional'&&
     ucf&&U.satPolicy(ucf)==='required-alternatives'&&/institution outside the US/.test(ucf.admissions.deadlines[0].note),
     'San Francisco separates preferred/minimum English and differs from Florida; UCF abroad deadline follows prior institution');
  var alb=U.uniById('university-at-albany-suny'),pac=U.uniById('university-of-the-pacific'),day=U.uniById('university-of-dayton');
  ok(alb&&!DB.match.annualCost[alb.id]&&budget(alb,100000).status==='unknown'&&
     pac&&pac.city==='Stockton'&&pac.academics.sat.policy===null&&U.ieltsMin(pac)===null&&
     day&&day.admissions.deadlines[0].date==='1 May',
     'undated Albany cost, blocked Pacific current policy and Dayton international May1 are not filled from unrelated routes');
  var clem=U.uniById('clemson-university'),aub=U.uniById('auburn-university'),conn=U.uniById('university-of-connecticut');
  ok([clem,aub].every(function(u){return U.costStatus(u)==='conflict'&&[null,0,100000].every(function(b){return budget(u,b).status==='conflict';});})&&
     /42,852/.test(clem.costs.conflict.text)&&/43,852/.test(clem.costs.conflict.text)&&/transportation/.test(aub.costs.conflict.text)&&
     DB.match.annualCost[aub.id].basis==='tuition'&&DB.match.annualCost[aub.id].min===39658,
     'Clemson tuition discrepancy and Auburn transport-coverage contradiction remain conflicts at every budget, never programme price ranges');
  ok(conn.costs.academicYear==='2026–2027'&&U.costArithmetic(conn).length===0&&
     U.budgetAmount(conn)===70649&&!DB.match.annualCost[conn.id]&&budget(conn,100000).status==='unknown',
     'UConn correctly itemised2026–27 COA excludes BGS/exchange and never confirms a Fall2027 budget');
  var marq=U.uniById('marquette-university'),stevens=U.uniById('stevens-institute-of-technology');
  ok(U.costStatus(marq)==='not-published'&&marq.costs.academicYear==='2027–2028'&&
     !DB.match.annualCost[marq.id]&&budget(marq,100000).status==='unknown'&&
     marq.scholarships.needBased.availableToInternational===false&&/TBD/.test(marq.costs.note),
     'Marquette current-year TBD is not published, never zero; international merit leaves residual costs');
  ok(stevens.costs.status==='previous-cycle'&&U.costArithmetic(stevens).length===0&&
     !DB.match.annualCost[stevens.id]&&budget(stevens,100000).status==='unknown'&&/federal loans/.test(stevens.costs.note),
     'Stevens previous-year COA keeps the federal-loan-only fee conditional and cannot confirm a Fall2027 budget');
  var wabashAward=U.uniById('wabash-college').scholarships.merit[0];
  ok(wabashAward.id==='presidential-international'&&wabashAward.deadlineScope==='annual-rule'&&
     wabashAward.entryYear===null&&/48,000/.test(wabashAward.amount)&&/earned work/.test(wabashAward.note)&&
     budget(U.uniById('wabash-college'),100000).status==='unknown',
     'Wabash competitive maximum, earned employment and annual priority are never a guaranteed budget award or confirmed2027 date');
};
