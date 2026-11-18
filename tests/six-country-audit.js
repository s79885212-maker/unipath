module.exports = function (env) {
  const {U,DB,M,ok}=env;
  const fs=require('fs'),path=require('path');
  const css=fs.readFileSync(path.join(__dirname,'../assets/css/styles.css'),'utf8').replace(/\/\*[\s\S]*?\*\//g,'');
  let coverHeight;
  for(const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)){
    if(!rule[1].split(',').some(selector=>selector.trim()==='.media img'))continue;
    const height=/(?:^|;)\s*height\s*:\s*([^;]+)/.exec(rule[2]);
    if(height)coverHeight=height[1].trim();
  }
  ok(coverHeight==='100%','A loaded card image fills its cover instead of exposing the fallback below a short thumbnail');
  const liverpool=U.uniById('university-of-liverpool');
  const economicsDate=U.roundsOf(liverpool).find(d=>d.id==='liverpool-economics-international-2027');
  const courseOnly={...liverpool,admissions:{deadlines:[economicsDate]}};
  ok(economicsDate.programmeId==='liverpool-bsc-economics' && U.nextDeadline(courseOnly,'fall-2027').state==='unknown',
     'A checked Economics deadline does not become Liverpool’s university-wide next application date');
  ok(['korea-university','sungkyunkwan-university'].every(id=>U.costStatus(U.uniById(id))==='previous-cycle'),
     'Admission-profile overlays retain the historical status of Korean 2026 fee tables');
  const keio=U.uniById('keio-university');
  ok(keio.academics.act.policy==='not-used' && /IB Diploma/.test(keio.academics.sat.note) &&
     U.roundsOf(keio).filter(d=>/PEARL 2027 application/.test(d.name)).every(d=>d.time==='15:00' && d.timezone==='JST' && U.roundStatus(d)==='confirmed'),
     'PEARL 2027 keeps IB/SAT alternatives, excludes ACT and preserves round closing times');
  const kaist=U.uniById('kaist');
  ok(/350,000/.test(kaist.scholarships.merit[0].amount) && U.roundsOf(kaist).some(d=>d.dateISO==='2027-01-14' && d.entryTerm==='Fall') &&
     U.roundsOf(kaist).some(d=>d.dateISO==='2027-01-21' && d.kind==='documents' && !U.isApplicationDeadline(d)),
     'KAIST Fall regular application and recommendations stay separate with updated KRW allowance');
  const gist=U.uniById('gist');
  ok(gist.english.ielts.min==null && M.evaluate(gist,{ielts:6.5,sat:null,gpa:null,budget:35000,currency:'USD',intake:'fall-2027'}).budget.status==='unknown',
     'Graduate GIST English and tuition figures cannot establish bachelor eligibility or affordability');
  const bath=U.uniById('university-of-bath');
  ok(U.awardDates(bath,bath.scholarships.merit.find(a=>a.id==='international-excellence-2027')).length===2 && !U.optionById('scholarship','full-ride').test(bath),
     'Bath 2027 competitive tuition discount has two linked rounds and stays outside Full ride');
  const original=U.uniById('university-of-evansville');
  const u={...original,id:'six-country-fixture',costs:{currency:'USD',academicYear:'2026–2027',status:'confirmed'}};
  const price={currency:'USD',basis:'total',period:'year',min:35000,max:35000,academicYear:'2026–2027'};
  DB.match.annualCost[u.id]=price;
  const input={budget:35000,currency:'USD',ielts:null,sat:null,gpa:null,intake:'fall-2027'};
  try {
    ok(M.evaluate(u,input).budget.status==='unknown','A cost from a different academic year cannot confirm a selected Fall 2027 budget');
    price.academicYear=u.costs.academicYear='2027–2028';
    ok(M.evaluate(u,input).budget.status==='fits','Same-year full cost matches exactly at the cap');
    ok(M.evaluate(u,input).budget.text.includes('Academic year: 2027–2028'),
       'A numeric cost keeps its academic year in the matching explanation without needing a scope note');
    price.min=price.max=35001;
    ok(M.evaluate(u,input).budget.status==='over','A same-year full cost above the cap is rejected');
    price.min=price.max=30000;price.basis='tuition';
    ok(M.evaluate(u,input).budget.status==='fits-tuition','A part of the same-year cost stays partial');
    price.min=price.max=35001;
    ok(M.evaluate(u,input).budget.status==='over','A known tuition component already above the budget is insufficient before aid');
    price.period='semester';
    ok(M.evaluate(u,input).budget.status==='unknown','A semester cannot be compared with an annual budget');
    price.period='year';price.academicYear=null;u.costs.academicYear=null;
    ok(M.evaluate(u,input).budget.status==='unknown','A cost with no published year cannot confirm an intake');
    price.academicYear=u.costs.academicYear='2027–2028';
    ok(M.evaluate(u,{...input,intake:'fall-2028'}).budget.status==='unknown'&&
       M.evaluate(u,{...input,intake:'fall-2027',currency:'NOT-A-CURRENCY'}).budget.status==='unknown',
       'Changing intake and unavailable currency cannot reuse an old cost match');

    const covers={tuition:true,housing:true,meals:true};
    u.scholarships={fullRide:{available:true,internationalEligible:false,covers},merit:[]};
    ok(!U.optionById('scholarship','full-ride').test(u)&&!U.optionById('scholarship','full-tuition').test(u),
       'An award unavailable to international applicants does not pass funding filters');
    u.scholarships.fullRide.internationalEligible=true;
    u.scholarships.fullRide.firstYearEligible=false;
    ok(!U.optionById('scholarship','full-ride').test(u),
       'A continuing-student award does not pass the international first-year full ride filter');
    u.scholarships.fullRide.firstYearEligible=true;
    u.scholarships.fullRide.covers={tuition:true};
    ok(!U.optionById('scholarship','full-ride').test(u)&&U.optionById('scholarship','full-tuition').test(u),
       'Tuition coverage stays separate from full ride');

    u.english={ielts:{varies:true,profiles:[{kind:'required',overall:6.5,sections:'6.0 in each section'}]}};
    const result=M.evaluate(u,{...input,ielts:7});
    ok(result.checks.some(c=>/section separately/.test(c.text))&&result.unchecked.includes('IELTS section scores'),
       'A programme IELTS profile with band minima keeps section checks explicitly incomplete');
  } finally {delete DB.match.annualCost[u.id];}
};

