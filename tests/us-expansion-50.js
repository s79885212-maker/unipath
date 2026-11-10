'use strict';
module.exports=function(env){
  var fs=require('fs'),path=require('path');
  var U=env.U,M=env.M,DB=env.DB,ok=env.ok;
  var root=path.resolve(__dirname,'..');
  var registry=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-registry.json'),'utf8'));
  var sources=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-sources.json'),'utf8'));
  var targets=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-targets.json'),'utf8'));
  var completion=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-completion-matrix.json'),'utf8'));
  var reviewStates=new Set(['verified','verified-partial','reviewed-not-found','source-unavailable','not-published-for-cycle','conflict','not-researched']);
  ok(completion.entries.length===50&&completion.status==='in-progress'&&completion.entries.every(function(row){
       var u=U.uniById(row.id),f=row.fields;
       return Object.keys(f).length===8&&Object.values(f).every(function(v){return v.review&&reviewStates.has(v.review.state)&&
         v.review.checked&&v.review.scope&&Array.isArray(v.review.remaining)&&Array.isArray(v.review.unfinishedResearch);})&&
         (f.admission.review.state==='source-unavailable')===!u.admissions.documents.length&&
         (f.cost.review.state==='conflict')===(u.costs.status==='conflict')&&
         (f.language.review.state==='verified-partial')===!!(u.englishTaughtPrograms||[]).length;
     })&&registry.entries.every(function(row){return row.sourceEntries===sources.filter(function(s){return s.id===row.id;}).length;}),
     'research inventory distinguishes scoped review, unavailable content and unfinished work; actual document/language/cost states and evidence counts remain consistent');
  var base=new Set(registry.baselineIds),allowed=new Set(targets.map(function(t){return t.id;}));
  var fresh=DB.universities.filter(function(u){return !base.has(u.id);});
  ok(base.size===370 && registry.baselineIds.every(function(id){return !!U.uniById(id);}),
     'USA +50 preserves every original institution, including all 370 baseline IDs');
  ok(targets.length===50 && allowed.size===50 && fresh.every(function(u){return u.country==='us'&&allowed.has(u.id);}) && DB.countries.length===6,
     'USA +50 adds only approved IDs and keeps six countries');
  var getterman=U.uniById('baylor-university'),ga=getterman.scholarships.fullRide;
  ok(ga.id==='baylor-getterman'&&ga.internationalEligible===true&&ga.renewable===true&&
     ga.covers.housing===true&&ga.covers.books===null&&ga.covers.insurance===null&&
     /3.5/.test(ga.renewalConditions)&&/take|Replaces/.test(ga.note)&&
     U.awardDates(getterman,ga).length===2&&U.awardDates(getterman,ga).some(function(d){return d.kind==='admission'&&d.dateISO==='2026-11-01';})&&
     U.awardDates(getterman,ga).some(function(d){return d.kind==='scholarship'&&d.dateISO==='2026-11-12';})&&
     budget(getterman,0).status==='unknown',
     'Baylor Getterman preserves explicit international eligibility, HRC and college-renewal scope, allowance/insurance uncertainty and separate admission/supplement deadlines, never guaranteed budget coverage');
  var firstMissing=targets.findIndex(function(t){return !U.uniById(t.id);});
  ok(U.uniById('marquette-university').admissions.applicationFee.amount===0&&
     /200 tuition/.test(U.uniById('marquette-university').admissions.applicationFee.note)&&
     U.uniById('george-mason-university').admissions.applicationFee.amount===75&&
     /80 graduate/.test(U.uniById('george-mason-university').admissions.applicationFee.note),
     'Marquette verified free undergraduate application excludes reservation deposits; Mason freshman fee is 75, not an old graduate fee');
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
  var uiuc=U.uniById('university-of-illinois-urbana-champaign'),uic=U.uniById('university-of-illinois-chicago');
  ok(U.englishPrograms(uiuc).indexOf('computer-science')>=0&&U.englishPrograms(uiuc).indexOf('engineering')>=0&&uiuc.programEvidence['computer-science'].language==='English'&&
     !U.fieldUnverified(uiuc,['computer-science'],true)&&U.fieldUnverified(uiuc,['medicine'],true)&&
     U.englishPrograms(uic).length===0&&
     sources.some(function(s){return s.id===uiuc.id&&s.topic==='instruction-language'&&s.access==='html-read'&&/registrar\.illinois\.edu/.test(s.source);}),
     'UIUC Registrar campus instruction evidence supports named bachelor majors, without promoting an unverified field or UIC');
  var irvine=U.uniById('university-of-california-irvine'),rutgers=U.uniById('rutgers-university-new-brunswick');
  ok(irvine.programEvidence.business.program==='Business Administration, B.A.'&&
     !rutgers.programEvidence.business&&U.fieldUnverified(rutgers,['business'],false)&&
     U.englishPrograms(rutgers).length===0,
     'catalogue majors broaden confirmed fields while Rutgers business minor and an English website cannot become confirmed degree/language matches');
  var noEnglish=U.optionById('language','english-no'),unknownEnglish=U.optionById('language','english-unknown');
  var boulder=U.uniById('university-of-colorado-boulder'),wake=U.uniById('wake-forest-university');
  ok(U.optionById('field','business').test(boulder,{language:['english-yes']})&&
     /generally/.test(boulder.languageOfInstruction)&&/foreign-language/.test(boulder.languageOfInstruction)&&
     sources.some(function(s){return s.id===boulder.id&&s.topic==='instruction-language'&&s.access==='pdf-read'&&s.facts.page===1;}),
     'Boulder named majors use the actual PDF campus instruction statement with its general-rule and foreign-language caveats');
  ok(U.optionById('field','engineering').test(U.uniById('university-of-tennessee-knoxville'),{language:['english-yes']})&&
     sources.some(function(s){return s.id==='university-of-tennessee-knoxville'&&s.topic==='instruction-language'&&s.access==='pdf-read'&&s.facts.page===3;})&&
     /official undergraduate exchange template/.test(U.uniById('university-of-tennessee-knoxville').languageOfInstruction),
     'Knoxville instruction evidence retains the official template source and page without importing exchange admission rules');
  ok(/internal admission/.test(wake.programEvidence.business.program)&&
     wake.admissions.notes.some(function(n){return /49 completed college credit hours/.test(n)&&/not Uzbek school grades/.test(n);})&&
     !U.uniById('wabash-college').programEvidence.business&&
     !/Business Administration/.test(U.uniById('baylor-university').programEvidence.business.program)&&
     !U.uniById('yeshiva-university').programEvidence.engineering,
     'Wake internal progression is not first-year eligibility; Wabash/Baylor minors and Yeshiva partner pre-engineering do not become ordinary bachelor routes');
  var usfMajors=U.uniById('university-of-south-florida'),fiuMajors=U.uniById('florida-international-university');
  ok(/Management/.test(usfMajors.programEvidence.business.program)&&
     !/Business Administration/.test(usfMajors.programEvidence.business.program)&&
     U.optionById('field','business').test(usfMajors,{})&&
     !U.optionById('field','business').test(usfMajors,{language:['english-yes']})&&
     !fiuMajors.programEvidence.business&&U.fieldUnverified(fiuMajors,['business'],false),
     'USF bachelor Management matches separately from graduate Business Administration and unverified language; FIU accounting without campus evidence stays unverified');
  ok(/Accounting/.test(uic.programEvidence.business.program)&&
     !/Completion/.test(uic.programEvidence.business.program)&&uic.programEvidence.business.campus==='Chicago'&&
     /Mathematical Sciences/.test(U.uniById('new-jersey-institute-of-technology').programEvidence.mathematics.program)&&
     !/Applied Mathematics/.test(U.uniById('university-of-missouri').programEvidence.mathematics.program),
     'UIC degree completion and Missouri Applied Mathematics master are not substituted for first-year bachelor majors');
  var newarkMajors=U.uniById('rutgers-university-newark'),minesMajors=U.uniById('colorado-school-of-mines'),conn=U.uniById('university-of-connecticut');
  ok(!newarkMajors.programEvidence.engineering&&/SAS-Newark/.test(newarkMajors.programEvidence.economics.program)&&
     !minesMajors.programEvidence.economics&&/Business Engineering/.test(minesMajors.programEvidence.business.program)&&
     /Biochemistry/.test(minesMajors.programEvidence.biology.program),
     'Rutgers pre-engineering transfer and Mines economics/biology minors cannot replace the named confirmed bachelor majors');
  ok(/will enter|begin in the BA/.test(conn.admissions.notes.join(' '))&&/Storrs/.test(conn.programEvidence.business.program)&&
     /Economics, B.A./.test(conn.programEvidence.economics.program)&&
     !/Business Administration/.test(conn.programEvidence.business.program),
     'UConn campus-specific Accounting major and initial Economics BA do not promise a Storrs-only Business Administration or direct BS route');
  var clemMajors=U.uniById('clemson-university'),riversideMajors=U.uniById('university-of-california-riverside');
  ok(clemMajors.admissions.notes.some(function(n){return /General Engineering/.test(n)&&/college GPA/.test(n);})&&
     (!clemMajors.academics.gpa||clemMajors.academics.gpa.min!==2.6)&&
     /upper-division/.test(riversideMajors.programEvidence.business.program)&&
     riversideMajors.admissions.notes.some(function(n){return /not direct first-year/.test(n);})&&
     !riversideMajors.programEvidence.medicine,
     'Clemson college progression and Riverside upper-division business remain scoped; medical-school pathways are not undergraduate medicine');
  ok(!noEnglish.test(rutgers)&&unknownEnglish.test(rutgers)&&
     noEnglish.test({englishTaught:false})&&!unknownEnglish.test({englishTaught:false})&&
     !unknownEnglish.test(uiuc)&&!noEnglish.test(uiuc)&&unknownEnglish.test({}),
     'language filters separate explicit non-English route from null/missing teaching-language evidence');
  var santaBarbara=U.uniById('university-of-california-santa-barbara');
  ok(U.englishPrograms(santaBarbara).indexOf('computer-science')>=0&&U.englishPrograms(santaBarbara).indexOf('business')>=0&&
     !U.optionById('field','economics').test(rutgers,{language:['english-yes']})&&
     U.optionById('field','business').test(santaBarbara,{language:['english-yes']}),
     'UCSB language evidence enables its named accounting major in the strict English filter while Rutgers teaching language remains unconfirmed');
  ok(fresh.every(function(u){return U.englishPrograms(u).every(function(f){return sources.some(function(s){
       return s.id===u.id&&s.topic==='instruction-language'&&(s.access==='html-read'||s.access==='pdf-read')&&s.facts.appliesToProgrammes&&
         s.facts.appliesToProgrammes[f]===u.programEvidence[f].program;
     });});}), 'confirmed teaching language is bound to the named programme, so a new foreign-language major cannot inherit a tag-level policy');
  var ucPolicy='https://reciprocity.uceap.universityofcalifornia.edu/plan-your-studies/examinations';
  ok(['university-of-california-davis','university-of-california-irvine','university-of-california-merced',
      'university-of-california-riverside','university-of-california-santa-cruz'].every(function(id){var u=U.uniById(id);
       return U.englishPrograms(u).length>0&&(u.english.ielts||{}).source!==ucPolicy&&(u.english.toefl||{}).source!==ucPolicy;
     }), 'UC-wide teaching-language statement applies to named majors without importing reciprocity English-test thresholds into first-year admission');
  var gaEntry=U.uniById('university-of-georgia'),sbEntry=U.uniById('university-of-california-santa-barbara');
  ok(/Mechanical Engineering/.test(gaEntry.programEvidence.engineering.program)&&
     gaEntry.admissions.notes.some(function(n){return /Intended Mechanical Engineering/.test(n)&&/university-course requirements/.test(n);})&&
     (!gaEntry.academics.gpa||gaEntry.academics.gpa.min!==2.75)&&
     /Economics and Accounting/.test(sbEntry.programEvidence.business.program)&&
     sbEntry.admissions.notes.some(function(n){return /pre-major/.test(n)&&/not a minimum Uzbek school GPA/.test(n);}),
     'UGA intended-engineering and UCSB accounting pre-major college thresholds remain scoped notes, never Uzbek school GPA minima');
  var bad=[];
  fresh.forEach(function(u){U.roundsOf(u).forEach(function(d){
    if(d.status==='annual-rule'&&(d.dateISO||d.entryYear||U.roundState(d)!=='unknown'))bad.push(u.id+':annual');
    if(d.status==='confirmed'&&(!d.cycleEvidence||!/2027/.test(d.cycleEvidence.quote||'')))bad.push(u.id+':cycle');
  });});
  ok(!bad.length,'new confirmed dates cite the intake year, annual rules remain undated',bad.join(';'));
  function budget(u,b){return M.evaluate(u,{ielts:null,sat:null,gpa:null,budget:b,currency:'USD'}).budget;}
  ok(U.costStatus(irvine)==='conflict'&&irvine.costs.academicYear==='2026–2027'&&
     irvine.costs.items.reduce(function(n,i){return n+Math.round(i.amount*100);},0)===5980205&&
     irvine.costs.billedSubtotal===null&&U.budgetAmount(irvine)===null&&
     /59,375.05/.test(irvine.costs.totalText)&&/244/.test(irvine.costs.conflict.text)&&
     /39,270/.test(irvine.costs.note)&&!DB.match.annualCost[irvine.id]&&
     [null,0,100000].every(function(b){return budget(irvine,b).status==='conflict';}),
     'Irvine retains every published annual component and unresolved total coverage, without asserting a reconciled subtotal or current budget');
  var nbMerit=U.meritList(rutgers).filter(function(a){return a.id==='rutgers-nb-international';})[0];
  ok(nbMerit&&/5,000–16,000/.test(nbMerit.amount)&&/Mason Gross/.test(nbMerit.eligibility)&&
     /3.25 college GPA/.test(nbMerit.renewable)&&/does not guarantee/.test(nbMerit.note)&&
     nbMerit.entryYear===null&&U.awardDates(rutgers,nbMerit).length===0&&budget(rutgers,100000).status==='unknown',
     'Rutgers international merit retains campus/visa/school, college renewal and unconfirmed award date; no guaranteed net price');
  var davis=U.uniById('university-of-california-davis'),davisMerit=U.meritList(davis).filter(function(a){return a.id==='davis-campus-scholarships';})[0];
  ok(U.budgetAmount(davis)===88279&&U.billedAmount(davis)===null&&davis.costs.billedSubtotal===null&&U.tuitionAmount(davis)===null&&
     davis.costs.status==='previous-cycle'&&U.costArithmetic(davis).length===0&&
     /UniPath calculates/.test(davis.costs.note)&&/39,270/.test(davis.costs.note)&&
     !DB.match.annualCost[davis.id]&&[null,0,100000].every(function(b){return budget(davis,b).status==='unknown';}),
     'Davis cohort COA retains its supplement and historical status; a UniPath-calculated subtotal is not assigned to a university-published billing field');
  ok(U.budgetAmount(conn)===70649&&U.tuitionAmount(conn)===39678&&conn.costs.billedSubtotal===null&&
     conn.costs.status==='previous-cycle'&&U.costArithmetic(conn).length===0&&
     /nine months/.test(conn.costs.studentCategory)&&/already include/.test(conn.costs.note)&&
     /separate BGS/.test(conn.costs.note)&&!DB.match.annualCost[conn.id]&&budget(conn,100000).status==='unknown',
     'UConn nine-month international funding estimate excludes BGS/exchange substitution and double-counted visa or insurance fees; it is not an exact current invoice');
  ok(davisMerit&&davisMerit.amount===null&&davisMerit.entryYear===null&&
     /each donor award/.test(davisMerit.eligibility)&&/continuing students/.test(davisMerit.note)&&
     U.awardDates(davis,davisMerit).length===0&&!U.awardKind(davis),
     'Davis general international scholarship scheme never promotes an unverified named award, continuing-student deadline or full coverage');
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
  ok(/years 8–11/.test(uw.academics.internationalQualifications)&&/years 9–12/.test(psu.academics.internationalQualifications)&&
     /11-year/.test(psu.academics.internationalQualifications)&&/academic lyceum/.test(uw.academics.internationalQualifications),
     'Uzbekistan country instructions keep Wisconsin/PennState school-year differences and unresolved lyceum equivalence');
  ok(king.id==='king-morgridge'&&/COUNTRY OF THE SECONDARY SCHOOL/.test(king.note)&&/Uzbekistan is not listed/.test(king.note)&&
     U.awardDates(uw,king).length===2&&U.awardDates(uw,{id:'other',category:'merit',entryTerm:'Autumn',entryYear:'2027'}).length===0,
     'King-Morgridge school-country restriction and exact two award-linked events remain explicit');
  var nb=U.uniById('rutgers-university-new-brunswick');
  ok(nb.city==='New Brunswick'&&U.satPolicy(nb)==='optional'&&nb.english.toefl.scales[1].min===4.5&&nb.costs.billedSubtotal===62782,
     'Rutgers New Brunswick keeps its campus-specific policy, English scale and billed reference');
  ok(fresh.every(function(u){return sources.some(function(s){return s.id===u.id&&s.access==='html-read'&&s.quote&&s.category&&s.verified;});}) &&
     sources.every(function(s){return allowed.has(s.id)&&/^https:\/\//.test(s.source)&&s.verified&&s.category&&(s.access==='html-read'?s.quote&&s.facts:
       s.access==='pdf-read'?s.quote&&s.facts&&Number.isInteger(s.facts.page)&&s.facts.page>0&&/\.pdf(?:$|\?)/i.test(s.source):
       s.access==='commons-file-page-and-image-reviewed'?s.topic==='photo-file-reviewed-installed'&&/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(s.source)&&s.quote&&s.facts&&s.facts.author&&s.facts.license&&s.facts.licenseUrl&&s.facts.downloadedSha256&&s.facts.visualReview:s.facts===null);}),
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
  ok(bing&&U.ieltsMin(bing)===null&&bing.english.ielts.recommended===null&&/Mid 50%/.test(bing.english.note)&&
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
  ok(mines&&U.satPolicy(mines)==='conditional'&&mines.admissions.applicationFee.amount===75&&
     /NCAA/.test(mines.academics.sat.note)&&U.ieltsMin(mines)===6.5&&U.englishPrograms(mines).length===0&&
     mines.programEvidence['computer-science'].url==='https://www.mines.edu/academics/program-finder/'&&
     sources.some(function(s){return s.id===mines.id&&s.topic==='undergraduate-major-coverage'&&s.access==='html-read'&&
       s.facts.programs['computer-science']===mines.programEvidence['computer-science'].program;}),
     'Mines now directly read admissions/fee pages establish75USD and NCAA testing exception, while named CS and English exams still do not establish teaching language');
  ok(U.testStatus(mines.english.toefl)==='conflict'&&U.toeflMin(mines)===null&&
     mines.english.toefl.scales[0].min===79&&mines.english.toefl.scales[1].min===null&&
     U.toeflLines(mines)[1].includes('Conflicting official requirements')&&/minimum4.5|minimum 4.5/.test(mines.english.toefl.note)&&/total4.0|total 4.0/.test(mines.english.toefl.note),
     'Mines new TOEFL scale retains both official conflicting totals, excludes a chosen minimum and preserves the independently confirmed older scale');
  var conflictingEnglish=JSON.parse(JSON.stringify(mines));
  conflictingEnglish.english.ielts={status:'conflict',min:4,recommended:5,varies:true,profiles:[{overall:6}]};
  ok(U.ieltsMin(conflictingEnglish)===null&&!U.ieltsPublished(conflictingEnglish)&&
     U.ieltsLabel(conflictingEnglish)==='Conflicting official requirements'&&
     M.evaluate(conflictingEnglish,{ielts:9,sat:null,gpa:null,budget:null,currency:'USD'}).checks.some(function(c){return c.level==='info'&&/requirements conflict/.test(c.text);})&&
     !M.evaluate(conflictingEnglish,{ielts:9,sat:null,gpa:null,budget:null,currency:'USD'}).checks.some(function(c){return (c.level==='ok'||c.level==='hard')&&/IELTS/.test(c.text);}),
     'An English-source conflict overrides stale numbers and programme profiles in labels, strict publication filtering and match evaluation');
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
  ok(njit&&U.satPolicy(njit)==='conditional'&&!U.satNotRequired(njit)&&/2027/.test(njit.academics.sat.cycle)&&
     /catalog.njit.edu/.test(njit.academics.sat.source)&&/Honors/.test(njit.academics.sat.note)&&
     sources.some(function(s){return s.id===njit.id&&s.access==='html-read'&&s.facts&&s.facts.publicTestingPolicy&&/Fall2027/.test(s.facts.publicTestingPolicy.cycle);}),
     'NJIT newly verified2027 catalogue policy keeps Honors/accelerated exceptions; an older2026 page alone still cannot establish the new cycle');
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
     /November 15/.test(bay.scholarships.needBased.note)&&/November 1 priority/.test(bay.scholarships.needBased.note)&&/conflict/.test(bay.scholarships.needBased.note)&&
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
  ok(byu.programEvidence.engineering.campus==='Provo'&&/professional-program acceptance required/.test(byu.programEvidence.engineering.program)&&
     byu.admissions.notes.some(function(n){return /prerequisite college-course GPA/.test(n)&&/not a minimum Uzbek school GPA/.test(n);})&&
     hill.programEvidence.business.program==='Financial Management (bachelor major)'&&!hill.programEvidence.engineering,
     'BYU professional progression remains separate from school admission; Hillsdale minor and pre-professional routes do not become bachelor majors');
  var pacificMajors=U.uniById('university-of-the-pacific'),daytonMajors=U.uniById('university-of-dayton'),sfMajors=U.uniById('university-of-san-francisco');
  ok(pacificMajors.programEvidence.engineering.campus==='Stockton'&&pacificMajors.programEvidence.business.program==='Accounting, BS'&&
     daytonMajors.programEvidence.engineering.program==='Mechanical Engineering, BME'&&sfMajors.programEvidence.business.program==='Finance, BSBA'&&
     /fully online route/.test(U.uniById('university-of-central-florida').programNote)&&
     !U.optionById('field','business').test(sfMajors,{language:['english-yes']}),
     'Pacific Stockton, Dayton degree title, USF San Francisco BSBA and UCF delivery limitations stay explicit without inventing teaching language');
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
     alb.costs.academicYear==='2026–2027'&&alb.costs.items[0].amount===35109.46&&
     pac&&pac.city==='Stockton'&&pac.academics.sat.policy===null&&U.ieltsMin(pac)===null&&
     day&&day.admissions.deadlines[0].date==='1 May',
     'newly dated Albany international table stays previous-cycle; blocked Pacific policy and Dayton international May1 are not filled from unrelated routes');
  var clem=U.uniById('clemson-university'),aub=U.uniById('auburn-university'),conn=U.uniById('university-of-connecticut');
  var riversideCost=U.uniById('university-of-california-riverside'),fiuCost=U.uniById('florida-international-university');
  ok(U.costStatus(riversideCost)==='conflict'&&riversideCost.costs.items.reduce(function(n,x){return n+x.amount;},0)===85284&&
     /85,809/.test(riversideCost.costs.totalText)&&/525/.test(riversideCost.costs.conflict.text)&&
     [null,0,100000].every(function(b){return budget(riversideCost,b).status==='conflict';})&&!DB.match.annualCost[riversideCost.id],
     'Riverside retains the printed international total and its conflicting rows at every budget, without substituting resident expense lines');
  ok(fiuCost.costs.breakdown.period==='semester'&&fiuCost.costs.items[0].amount===10926&&
     /45,488/.test(fiuCost.costs.totalText)&&!DB.match.annualCost[fiuCost.id]&&budget(fiuCost,100000).status==='unknown'&&
     U.costStatus(U.uniById('indiana-university-bloomington'))==='not-checked'&&U.costYear(U.uniById('indiana-university-bloomington'))===null,
     'FIU semester rows do not become annual tuition; IU undated cost table is not assigned a year from viewing or office holiday dates');
  ok(/INTERNATIONAL rates/.test(boulder.costs.note)&&/48,222/.test(boulder.costs.note)&&/52,324/.test(boulder.costs.note)&&
     U.budgetAmount(boulder)===null&&U.budgetAmount(U.uniById('university-of-illinois-chicago'))===null&&
     U.uniById('university-of-new-hampshire').costs.billedSubtotal===59452&&/1,504/.test(U.uniById('university-of-new-hampshire').costs.note),
     'Boulder international tiers differ from domestic nonresident pricing; UIC proof of funding and UNH programme additions stay scoped');
  var scCost=U.uniById('university-of-south-carolina');
  ok([scCost,day].every(function(u){return U.costStatus(u)==='conflict'&&[null,0,100000].every(function(b){return budget(u,b).status==='conflict';});})&&
     /38,098/.test(scCost.costs.conflict.text)&&/38,100/.test(scCost.costs.conflict.text)&&
     /10 months/.test(day.costs.conflict.text)&&/12 months/.test(day.costs.conflict.text),
     'Columbia annual versus semester tuition and Dayton miscellaneous-period conflicts remain visible for empty, zero and high budgets');
  ok(hill.costs.billedSubtotal===49840&&U.budgetAmount(hill)===null&&budget(hill,100000).status==='unknown'&&
     U.budgetAmount(wake)===null&&/excludes health insurance/.test(wake.costs.note)&&
     /insurance USD4,477|insurance USD 4,477/.test(sf.costs.totalText),
     'Hillsdale billed price and Wake/San Francisco insurance exclusions cannot confirm full international spending');
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
  ok(uiuc.admissions.applicationFee.amount===75&&uiuc.admissions.applicationFee.waiverAvailableToInternational===false&&
     U.uniById('university-of-wisconsin-madison').admissions.applicationFee.amount===80&&
     U.uniById('university-of-georgia').admissions.applicationFee.amount===85&&
     U.uniById('pennsylvania-state-university-university-park').admissions.applicationFee.amount===75,
     'Individually read current first-year fees preserve Illinois international waiver exclusion and differ from domestic/graduate amounts');
  ok(U.uniById('indiana-university-bloomington').admissions.applicationFee.amount===65&&
     U.uniById('university-at-albany-suny').admissions.applicationFee.amount===50&&
     /not a permanent zero fee/.test(U.uniById('university-at-albany-suny').admissions.applicationFee.note)&&
     uic.admissions.documents.some(function(d){return /Uzbekistan widget result was not available/.test(d);}),
     'IU graduate fee and Albany temporary promotion never replace ordinary undergraduate fees; UIC school records do not confirm unseen country qualifications');
  ok(U.uniById('clemson-university').admissions.documents.some(function(d){return /transfer section/.test(d)&&/not a general first-year requirement/.test(d);})&&
     U.uniById('auburn-university').admissions.documents.some(function(d){return /evaluation/.test(d)&&/freshmen as well as transfers/.test(d);})&&
     U.uniById('brigham-young-university').admissions.documents.some(function(d){return /paid foreign credential evaluation/.test(d);}),
     'Displayed first-year records preserve Clemson transfer-only evaluation versus Auburn/BYU applicable evaluation requirements');
  ok(U.uniById('virginia-tech').admissions.documents.some(function(d){return /11-year Uzbek record/.test(d)&&/unconfirmed/.test(d);})&&
     U.uniById('university-of-illinois-urbana-champaign').admissions.documents.some(function(d){return /only if enrolling/.test(d);})&&
     U.englishPrograms(U.uniById('george-mason-university')).includes('computer-science')&&
     /dated 2013/.test(U.uniById('george-mason-university').languageOfInstruction),
     'School-record reporting and unresolved Uzbek equivalence remain separate; Mason language retains the dated Registrar policy scope');
  var hillInternational=hill.scholarships.merit.find(function(a){return a.id==='hillsdale-international-tuition';});
  ok(hillInternational&&/Up to tuition/.test(hillInternational.amount)&&/not automatically the renewal threshold/.test(hillInternational.renewable)&&
     /off-campus/.test(hillInternational.note)&&hill.scholarships.fullRide.available===null&&
     sf.scholarships.needBased.availableToInternational===false&&sf.scholarships.merit[0].amount===null&&/explicit first-year payment period/.test(sf.scholarships.merit[0].note),
     'Hillsdale mixed-basis tuition maximum does not inherit merit-only renewal or become full ride; San Francisco does not borrow a transfer amount period');
  ok(fiuMajors.programEvidence.biology&&/Maidique and Biscayne Bay/.test(fiuMajors.programEvidence.biology.campus)&&
     /Biological Sciences, B.S./.test(fiuMajors.programEvidence.biology.program)&&!fiuMajors.programEvidence.business&&
     !U.optionById('field','biology').test(fiuMajors,{language:['english-yes']}),
     'FIU department explicitly supports its two-campus biology degree but not unrelated accounting campus or an inferred English match');
  var fiuAid=U.uniById('florida-international-university').scholarships.merit.find(function(a){return a.id==='fiu-gold-blue';});
  var ucscAid=U.uniById('university-of-california-santa-cruz').scholarships.merit.find(function(a){return a.id==='ucsc-undergraduate-dean';});
  ok(fiuAid&&/over four years/.test(fiuAid.amount)&&fiuAid.entryYear===null&&/cycle is inconsistent/.test(fiuAid.application)&&
     /30 FIU credits/.test(fiuAid.renewable)&&ucscAid&&/total split over four/.test(ucscAid.amount)&&/not USD100,000 each year|not USD 100,000 each year/.test(ucscAid.note),
     'FIU and Santa Cruz multi-year awards cannot become annual maxima; FIU mismatched entry-year text never confirms2027');
  var usfAid=U.uniById('university-of-south-florida').scholarships.merit.filter(function(a){return /^usf-green-gold-/.test(a.id);});
  ok(usfAid.length===3&&usfAid.every(function(a){return a.entryYear==='2027'&&a.renewable===null&&/Nonresident tuition reduction/.test(a.note)&&
     U.awardDates(U.uniById('university-of-south-florida'),a).some(function(d){return d.dateISO==='2027-01-15';});})&&
     /2026–27 only/.test(U.uniById('university-of-tennessee-knoxville').scholarships.merit[0].amount),
     'USF2027 tuition waivers keep a real dated prerequisite without inherited renewal terms; Knoxville historical award values stay historical');
  ok(bay.scholarships.needBased.forms.some(function(f){return /BIFAA/.test(f);})&&
     /not required for merit/.test(bay.scholarships.needBased.note)&&
     /CSS Profile is required/.test(stevens.scholarships.merit[0].application)&&
     boulder.scholarships.merit.filter(function(a){return /^cu-boulder-/.test(a.id);}).every(function(a){return /cannot combine/.test(a.note)&&/2.75/.test(a.renewable);}),
     'Baylor international BIFAA and Stevens CSS requirements remain distinct; Boulder named alternatives preserve no-stacking and college renewal');
  var connStamps=U.fullRide(conn),connDates=U.awardDates(conn,connStamps);
  ok(connStamps.id==='uconn-stamps'&&connStamps.internationalEligible===true&&connStamps.entryYear==='2027'&&
     connDates.length===2&&connDates.some(function(d){return d.kind==='admission'&&d.dateISO==='2026-11-01';})&&
     connDates.some(function(d){return d.kind==='scholarship'&&d.dateISO==='2026-11-08';})&&
     /off-campus/i.test(connStamps.note)&&/3.0/.test(connStamps.renewalConditions)&&budget(conn,100000).status==='unknown',
     'UConn Stamps keeps separately linked Fall2027 admission/supplement dates, residence/renewal limits and no automatic competitive-aid deduction');
  ok(conn.scholarships.merit.filter(function(a){return /^uconn-global-/.test(a.id);}).every(function(a){return a.amount===null&&a.entryYear===null&&a.deadlineScope==='annual-rule'&&/one merit-based/.test(a.note);})&&
     conn.scholarships.merit.filter(function(a){return /^uconn-global-/.test(a.id);}).length===3,
     'UConn Global awards have no invented amounts or2027 dates and cannot be stacked as three guaranteed admission awards');
  var mizzouAwards=U.uniById('university-of-missouri').scholarships.merit.filter(function(a){return /^mizzou-(honors|merit)$/.test(a.id);});
  ok(mizzouAwards.length===2&&mizzouAwards.every(function(a){return a.entryYear==='2027'&&a.deadlineScope==='confirmed'&&/Nonresident tuition portion only/.test(a.note)&&/first-year maximum duration remains unconfirmed/.test(a.renewable)&&
       U.awardDates(U.uniById('university-of-missouri'),a).some(function(d){return d.dateISO==='2026-12-01'&&d.kind==='admission';});}),
     'Mizzou2027 international awards keep tuition-only, stacking, test and residence scope without borrowing transfer duration');
  var camdenAward=U.uniById('rutgers-university-camden').scholarships.merit.find(function(a){return a.id==='camden-international-chancellor';});
  ok(camdenAward&&/17,000/.test(camdenAward.amount)&&/21,000/.test(camdenAward.amount)&&/conflict/i.test(camdenAward.name)&&
     /Uzbek school scale is not established/.test(camdenAward.eligibility)&&U.uniById('rutgers-university-camden').scholarships.fullRide.available===null,
     'Camden keeps conflicting official scholarship maxima and does not convert weighted admission GPA to an Uzbek school requirement');
  var buffaloAward=U.uniById('university-at-buffalo').scholarships.merit.find(function(a){return a.id==='buffalo-flagship';});
  ok(buffaloAward&&buffaloAward.amount===null&&/3.0/.test(buffaloAward.renewable)&&/recalculation/.test(buffaloAward.note)&&
     /US high school/.test(U.fullRide(U.uniById('north-carolina-state-university')).note)&&
     /eligibility remains unresolved/.test(U.fullRide(U.uniById('colorado-school-of-mines')).note),
     'Buffalo outside-support recalculation and NC State/Mines international eligibility restrictions are retained instead of universal full awards');
  var mercedAid=U.uniById('university-of-california-merced'),mercedAward=mercedAid.scholarships.merit.find(function(a){return a.id==='merced-global-access';});
  ok(mercedAward&&/25,000/.test(mercedAward.amount)&&mercedAward.deadlineScope==='no-separate-application'&&
     /nonresident fee waiver/.test(mercedAward.note)&&/3.0/.test(mercedAward.renewable)&&
     mercedAid.scholarships.fullRide.available===null&&budget(mercedAid,100000).status==='unknown',
     'Merced Global Access keeps the annual amount, college renewal and waiver exclusion without promising full tuition or deducting competitive aid');
  ok(uiuc.scholarships.needBased.availableToInternational===false&&uiuc.scholarships.fullRide.available===null&&
     /only for Illinois residents/.test(uiuc.scholarships.fullRide.note)&&
     /citizenship or permanent residency/.test(U.uniById('pennsylvania-state-university-university-park').scholarships.fullRide.note)&&!U.optionById('scholarship','full-ride-intl').test(uiuc),
     'Illinois Stamps residency and Penn State Provost citizenship restrictions do not become ordinary international full scholarships');
  var austinAid=U.uniById('university-of-texas-at-austin').scholarships.merit.find(function(a){return a.id==='ut-austin-iimura-peace';}),iuAid=U.uniById('indiana-university-bloomington').scholarships.merit[0];
  ok(austinAid&&/fall semester/.test(austinAid.amount)&&austinAid.deadlineScope==='annual-rule'&&austinAid.entryYear===null&&
     /new first-year applicant/.test(austinAid.eligibility)&&iuAid.deadlineScope==='annual-rule'&&iuAid.amount===null&&iuAid.entryYear===null,
     'Austin fall-only Iimura award and IU annual consideration preserve first-year/GPA uncertainty and unconfirmed cycle or amount');
  ok(wabashAward.id==='presidential-international'&&wabashAward.deadlineScope==='annual-rule'&&
     wabashAward.entryYear===null&&/48,000/.test(wabashAward.amount)&&/earned work/.test(wabashAward.note)&&
     budget(U.uniById('wabash-college'),100000).status==='unknown',
     'Wabash competitive maximum, earned employment and annual priority are never a guaranteed budget award or confirmed2027 date');
  ok(marq.scholarships.fullRide.available===true&&marq.scholarships.fullRide.status==='conflict'&&
     U.awardKind(marq)===null&&/conflict/.test(U.awardLabel(marq))&&
     !U.optionById('scholarship','full-ride').test(marq)&&!U.optionById('scholarship','full-ride-intl').test(marq)&&
     !U.optionById('scholarship','full-tuition').test(marq)&&
     marq.scholarships.fullRide.renewable===true&&
     /Replaces any other/.test(marq.scholarships.fullRide.renewalConditions)&&
     marq.admissions.deadlines.some(function(d){return d.awardId==='global-scholar'&&d.status==='annual-rule'&&d.entryYear===null;})&&
     budget(marq,100000).status==='unknown',
     'Marquette named Global Scholar coverage and no-stacking terms remain visible alongside the conflicting broad warning; March1 is annual, never a guaranteed budget award');
  var pmm=U.uniById('pennsylvania-state-university-university-park');
  ok(U.satPolicy(pmm)==='conditional'&&!U.has(pmm.academics.sat.min)&&
     pmm.admissions.deadlines.some(function(d){return d.dateISO==='2026-10-13'&&d.status==='confirmed'&&d.entryYear==='2027'&&/PMM/.test(d.appliesTo);}),
     'Penn State closed PMM Fall2027 exception has programme-only1470/32 testing; no university-wide minimum');
  ok(fresh.every(function(u){var r=u.scholarships.fullRide;return r.renewable===null||r.renewable===undefined||typeof r.renewable==='boolean';}),
     'Full-level award renewal uses the existing boolean contract with conditions in the field the profile displays');
  var merced=U.uniById('university-of-california-merced'),bing=U.uniById('binghamton-university');
  ok([merced,bing].every(function(u){return u.costs.status==='previous-cycle'&&U.costArithmetic(u).length===0&&
     !DB.match.annualCost[u.id]&&budget(u,100000).status==='unknown';})&&
     U.budgetAmount(merced)===87924&&U.budgetAmount(bing)===56504&&/SEVIS/.test(bing.costs.note)&&/at-home/.test(merced.costs.note),
     'Merced cohort/housing-specific and Binghamton international historical estimates preserve exclusions and never confirm Fall2027 budgets');
  var sb=U.uniById('university-of-california-santa-barbara'),uga=U.uniById('university-of-georgia'),wis=U.uniById('university-of-wisconsin-madison');
  ok([sb,uga,wis].every(function(u){return u.costs.status==='previous-cycle'&&U.costArithmetic(u).length===0&&
     !DB.match.annualCost[u.id]&&budget(u,100000).status==='unknown'&&u.costs.verified==='2026-11-01';})&&
     U.budgetAmount(sb)===90216&&U.budgetAmount(uga)===52156&&U.tuitionAmount(wis)===44232.12,
     'UCSB cohort budget, UGA Athens subtotal and Wisconsin base tuition retain historical year, scope, read date and no automatic award deduction');
  ok(DB.match.annualCost[pmm.id].basis==='tuition'&&DB.match.annualCost[pmm.id].min===46356&&
     pmm.costs.academicYear==='2027–2028'&&U.tuitionAmount(pmm)===46356&&U.budgetAmount(pmm)===null&&
     budget(pmm,0).status==='over'&&budget(pmm,46356).status==='fits-tuition'&&budget(pmm,100000).status==='fits-tuition'&&
     /12–19 credits/.test(DB.match.annualCost[pmm.id].note)&&/330 per semester/.test(DB.match.annualCost[pmm.id].note),
     'Penn State published2027–28 annual tuition uses University Park first-year load and never becomes full-budget coverage');
  ok(fresh.every(function(u){return (u.sources||[]).every(function(s){if(!/^https:\/\/commons\.wikimedia\.org\//.test(s.url))return true;
       var installed=(u.photos.gallery||[]).some(function(g){return g.page===s.url;});
       return installed?/Campus photo — Commons file and licence/.test(s.label):/photo candidate/.test(s.label);
     });}), 'Commons sources distinguish an installed credited photograph from a not-installed candidate and never claim to be admission evidence');
  var photoReview=JSON.parse(fs.readFileSync(path.join(root,'research/us50-photo-install-review.json'),'utf8'));
  var photoManifest=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-photo-manifest.json'),'utf8'));
  ok(photoReview.every(function(r){var u=U.uniById(r.id),g=(u.photos.gallery||[])[0],m=photoManifest.find(function(p){return p.id===r.id;});
       return r.decision==='hold'?!g&&m.visualStatus==='reviewed-held':g&&g.page===r.filePage&&g.artist===r.author&&
         g.license===r.license&&g.licenseUrl===r.licenseUrl&&/resized with borders/.test(g.title)&&
         m.installed===true&&m.downloadedSha256===r.downloadedSha256&&g.src.indexOf('/'+r.id+'/')>0&&
         !/not yet been verified|placeholder is shown/.test(u.photos.note||'')&&u.verification.unconfirmed.indexOf('Campus photograph and free licence have not yet been verified; a placeholder is shown.')<0;
     }), 'only individually approved campus/author/licence reviews install photographs; held candidates remain placeholders');
  var crypto=require('crypto');
  ok(photoManifest.filter(function(m){return m.installed;}).every(function(m){
       return [m.installedMain,m.installedThumb].every(function(file,i){return crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')===(i?m.thumbSha256:m.mainSha256);})&&
         m.outputSize[0]<=1200&&m.contentBox[0]>=0&&m.contentBox[1]>=0&&m.contentBox[2]<=m.outputSize[0]&&m.contentBox[3]<=m.outputSize[1];
     }), 'published photo bytes match reviewed encoded assets and recorded whole-image bounds; no review-original downloads are required in CI');
  var nw=U.uniById('rutgers-university-newark'),cam=U.uniById('rutgers-university-camden');
  ok(U.billedAmount(nw)===62049&&U.billedAmount(cam)===62603&&
     [nw,cam].every(function(u){return u.costs.status==='previous-cycle'&&U.costArithmetic(u).length===0&&
       !DB.match.annualCost[u.id]&&budget(u,100000).status==='unknown';})&&/School of Arts and Sciences/.test(nw.costs.studentCategory),
     'Rutgers Newark and Camden preserve separate historical billed estimates, campus/school scope and unknown full international budgets');
  ok(U.nextDeadline(pmm,'all').state==='unknown'&&U.roundsOf(pmm).some(function(d){return d.programmeId==='pmm-bsmd'&&d.status==='confirmed';}),
     'a closed PMM-only application remains in the profile but cannot mark Penn State general admission closed');
  var uncertainRounds=JSON.parse(JSON.stringify(pmm));
  uncertainRounds.admissions.deadlines.forEach(function(d){delete d.programmeId;});
  ok(U.nextDeadline(uncertainRounds,'all').state==='unknown',
     'one closed round alongside an unconfirmed general round cannot claim all admission is closed');
  var yu=U.uniById('yeshiva-university');
  ok(U.roundsOf(yu).some(function(d){return d.programmeId==='honors'&&d.dateISO==='2026-11-02';})&&
     U.nextDeadline(yu,'all').round.dateISO==='2027-02-01',
     'Yeshiva Honors application keeps its own scope and does not replace the general February deadline');
  var njit=U.uniById('new-jersey-institute-of-technology'),ub=U.uniById('university-at-buffalo'),mines=U.uniById('colorado-school-of-mines');
  ok(njit.costs.breakdown.period==='semester'&&U.tuitionAmount(njit)===19113&&/semester/.test(U.cardCost(njit).suffix)&&
     !DB.match.annualCost[njit.id]&&budget(njit,100000).status==='unknown'&&U.costArithmetic(njit).length===0,
     'NJIT historical semester tuition/fees is never displayed or compared as annual cost');
  ok(U.costStatus(ub)==='conflict'&&[null,0,100000].every(function(b){return budget(ub,b).status==='conflict';})&&
     !DB.match.annualCost[ub.id]&&/academic year is not established/.test(ub.costs.conflict.text),
     'Buffalo undated insurance/living coverage conflict is visible with empty, zero and high budgets');
  ok(U.budgetAmount(mines)===71470&&mines.costs.status==='previous-cycle'&&U.costArithmetic(mines).length===0&&
     /SHIP/.test(mines.costs.note)&&!DB.match.annualCost[mines.id]&&budget(mines,100000).status==='unknown',
     'Mines historical published COA keeps excluded SHIP and conditional federal-loan fee, not a confirmed2027 budget');
  var del=U.uniById('university-of-delaware'),dup=del.scholarships.fullRide;
  ok(U.awardKind(del)==='full-ride'&&dup.id==='eugene-du-pont'&&dup.internationalEligible===true&&dup.renewable===true&&
     dup.covers.books===null&&dup.covers.insurance===null&&U.awardDates(del,dup).every(function(d){return d.status==='annual-rule'&&d.entryYear===null&&d.kind==='admission';})&&
     del.scholarships.needBased.availableToInternational===false&&budget(del,100000).status==='unknown',
     'Delaware named premier award has Honors/international scope, allowance versus insurance distinctions and linked annual admission priority, never guaranteed net cost');
  ok(U.optionById('scholarship','merit').test(del),
     'verified international merit at the largest-award level is included in the merit filter');
  var riverside=U.uniById('university-of-california-riverside');
  var achievement=U.awardsAll(riverside).filter(function(a){return a.id==='achievement';})[0];
  ok(achievement.basis==='unknown'&&!U.meritList(riverside).some(function(a){return a.id==='achievement';})&&/Automatic consideration does not mean/.test(achievement.note),
     'Riverside automatic consideration is not relabelled as a guaranteed award to every eligible admitted student');
  var gw=U.uniById('george-washington-university'),welcome=gw.scholarships.fullRide;
  ok(U.awardKind(gw)==='full-tuition'&&welcome.id==='you-are-welcome-here'&&welcome.covers.housing===false&&
     /Only one GW/.test(welcome.note)&&/UWC/.test(welcome.note)&&welcome.renewable===true&&
     gw.scholarships.needBased.availableToInternational===null&&
     U.awardDates(gw,welcome).some(function(d){return d.kind==='scholarship'&&d.status==='annual-rule'&&d.entryYear===null&&d.binding===null;}),
     'GW two-place competitive tuition-only award retains school/CSS, non-stacking and annual scholarship scope; UWC exception is not general need eligibility');
  ok(U.budgetAmount(gw)===95155&&U.billedAmount(gw)===90930&&U.costArithmetic(gw).length===0&&
     gw.costs.status==='previous-cycle'&&!DB.match.annualCost[gw.id]&&budget(gw,100000).status==='unknown',
     'GW standard-school historical new-student budget is neither a current full budget nor reduced by its competitive tuition award');
};
