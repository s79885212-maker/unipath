'use strict';
module.exports=function (env) {
  var U=env.U,M=env.M,ok=env.ok;
  var defaults={ielts:6.5,sat:null,act:null,gpa:null,budget:null,currency:'USD',intake:'fall-2027',field:'',ieltsSections:{}};
  function input(extra) {return Object.assign({},defaults,extra || {});}
  function testRoute(extra) {return Object.assign({id:'test',label:'Test route',kind:'direct',language:'en',programmeIds:[],applicability:{status:'confirmed',entryYears:[2027],label:'Fall 2027'},english:{ielts:{accepted:true,min:6.5,role:'admission',sections:{reading:6,writing:6,listening:6,speaking:6}}},academic:{satPolicy:'optional'},sources:[]},extra || {});}
  function evaluate(route,extra) {return U.requirements.evaluate({admissionRequirements:[route]},input(extra));}
  function level(r,l) {return r.checks.some(function (c) {return c.level === l;});}
  var r=evaluate(testRoute());
  ok(M.scopeInput({studyLanguage:'fr',englishOnly:true}).englishOnly===false && M.scopeInput({studyLanguage:'en',englishOnly:true}).englishOnly===true,'Local-language selection clears the mutually contradictory English-only state');
  ok(!level(r,'hard') && r.unchecked.indexOf('IELTS section scores')>=0,'Route: sufficient overall never confirms missing sections');
  r=evaluate(testRoute(),{ieltsSections:{reading:6,writing:5.5,listening:6,speaking:6}});
  ok(level(r,'hard'),'Route: one section below its actual minimum fails independently of overall');
  r=evaluate(testRoute(),{ieltsSections:{reading:6,writing:6,listening:6,speaking:6}});
  ok(!level(r,'hard') && r.unchecked.indexOf('IELTS section scores')<0,'Route: exact overall/section boundaries pass the entered exam checks');
  r=evaluate(testRoute(),{ielts:6});
  ok(level(r,'hard'),'Route: overall below minimum fails');
  r=evaluate(testRoute({academic:{satPolicy:'required'}}),{ielts:null});
  ok(level(r,'soft') && r.unchecked.indexOf('Required SAT or ACT score')>=0,'Route: required academic exam remains missing');
  r=evaluate(testRoute({academic:{satPolicy:'required'}}),{ielts:null,act:25});
  ok(!level(r,'soft'),'Route: ACT is an alternative to required SAT, not a missing SAT');
  ['optional','not-used'].forEach(function (p) {
    r=evaluate(testRoute({academic:{satPolicy:p}}),{ielts:null});
    ok(!level(r,'hard') && !level(r,'soft'),'Route: missing SAT is not a failure for '+p);
  });
  r=evaluate(testRoute({academic:{satPolicy:'required-alternatives'}}),{ielts:null});
  ok(r.unchecked.some(function (x) {return /alternatives/.test(x);}) && !level(r,'hard'),'Route: accepted alternative qualifications are not silently treated as missing SAT');
  r=evaluate(testRoute({academic:{satPolicy:'conflict'}}),{sat:1500,ielts:null});
  ok(!level(r,'ok') && r.unchecked.some(function (x) {return /unresolved/.test(x);}), 'Route: conflicting test policy never confirms academic eligibility');
  r=evaluate(testRoute({applicability:{status:'previous-cycle',entryYears:[2026],label:'Fall 2026'}}),{ielts:5.5});
  ok(!level(r,'hard') && !level(r,'ok'),'Route: previous-cycle score remains reference information');
  r=evaluate(testRoute(),{intake:'fall-2028',ielts:5.5});
  ok(!level(r,'hard') && !level(r,'ok'),'Route: changing intake invalidates earlier-cycle exam confirmation');
  r=evaluate(testRoute({applicability:{status:'confirmed',entryYears:[2027],intakes:['spring-2027'],label:'April 2027'}}),{intake:'fall-2027'});
  ok(!level(r,'ok') && !level(r,'hard'),'Route: April rules are not confirmed for October merely because the year agrees');
  r=evaluate(testRoute({language:'ja',localLanguage:[{name:'EJU',requirement:'Published Japanese route subjects'}]}));
  ok(r.unchecked.indexOf('Local-language examinations and route qualifications')>=0,'Route: local teaching language remains unchecked by IELTS');
  r=evaluate(testRoute({kind:'foundation'}),{admissionRoute:'direct'});
  ok(!r.route && !level(r,'ok'),'Route: foundation scores never satisfy a requested direct route');
  r=evaluate(testRoute({programmeIds:['business']}),{field:'data-science'});
  ok(!r.route && !level(r,'ok'),'Route: changing programme does not reuse another programme minimum');
  r=evaluate(testRoute({english:{ielts:{accepted:true,min:6.5,role:'esl-waiver'}}}),{ielts:5.5});
  ok(!level(r,'hard'),'Route: ESL waiver threshold is not an admission rejection threshold');
  r=U.requirements.evaluate(U.uniById('bentley-university'),input({ielts:6.5,ieltsSections:{reading:6.5,writing:6.5,listening:6.5,speaking:6.5}}));
  ok(!level(r,'hard') && r.checks.some(function (c) {return /recommended/.test(c.text);}), 'Bentley: preferred overall 7 is separate from mandatory section 6.5');
  r=U.requirements.evaluate(U.uniById('brigham-young-university'),input({ielts:6.5,ieltsSections:{reading:6,writing:5.5,listening:6,speaking:6}}));
  ok(level(r,'hard'),'BYU current 2027 route checks the actual section 6 boundary');
  ok(U.requirements.routes(U.uniById('stonehill-college'))[0].academic.applicability.entryYears[0]===2026,'Stonehill test-blind policy keeps the published 2026 year');
  var checked=env.DB.universities.filter(function (u) {return u.admissionRequirements;});
  ok(checked.every(function (u) {return u.admissionRequirements.every(function (r) {return r.sources.length && r.sources.every(function (s) {return /^https:\/\//.test(s.url) && /^20\d\d-\d\d-\d\d$/.test(s.verified);}) && r.applicability && r.programmeIds;});}), 'Reviewed routes keep sources, verification dates and explicit applicability');
};
