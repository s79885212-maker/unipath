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
  ok(!U.optionById('scholarship','tuition-stipend').test(U.uniById('kyushu-university')),
     'Government approval still pending does not become a confirmed MEXT funding match');
  ok(U.needFirstYearEligible(U.uniById('texas-a-and-m-university'))===null && !U.optionById('scholarship','need').test(U.uniById('texas-a-and-m-university')),
     'Texas A&M ITPEG exclusion of F-1 first-year students is respected by the need-based aid filter');
  ok(U.optionById('scholarship','full-tuition').test(U.uniById('unist')),
     'UNIST confirmed first-semester tuition waiver remains discoverable without claiming an annual full ride');
  ok(!U.optionById('scholarship','tuition-stipend').test(U.uniById('seoul-national-university')),
     'An SNU scholarship reference last updated in 2018 cannot confirm Fall 2027 funding');
  ok(/at least three years/.test(U.uniById('kwansei-gakuin-university').english.waiver) && /official transcripts or a letter/.test(U.uniById('kwansei-gakuin-university').english.waiver),
     'Kwansei English-medium waiver retains the three-year duration and official evidence');
  ok(['unist','postech'].every(id=>!DB.match.annualCost[id]&&!/^(fits|maybe)/.test(M.evaluate(U.uniById(id),{budget:0,currency:'KRW',intake:'all'}).budget.status)),
     'A first-semester waiver with conditional renewal cannot price an entire year at zero');
  ok(U.costStatus(U.uniById('postech'))==='conflict' && !U.cardCost(U.uniById('postech')).known && M.evaluate(U.uniById('postech'),{budget:35000,currency:'USD',intake:'fall-2027'}).budget.status==='conflict',
     'POSTECH 2026 table and footnote disagreement stays explicit and never becomes a zero annual price');
  const skku=U.uniById('sungkyunkwan-university');
  ok(!/full-cost award/.test(skku.description) && /Spring 2027/.test(skku.description) && /Fall 2027 terms require separate confirmation/.test(skku.description),
     'SKKU summary cannot contradict the conditional, cycle-specific scholarship coverage in its detail');
  ok(!M.evaluate(skku,{ielts:7,sat:null,gpa:null,budget:null,currency:'USD',intake:'fall-2027'}).checks.some(c=>c.basis==='minimum'&&c.level==='ok'),
     'SKKU later major-selection IELTS is not an admission minimum met');
  ok(/3,400,000/.test(skku.scholarships.merit[0].amount) && !/570,000/.test(JSON.stringify(skku.scholarships)),
     'Samsung Global support stays per semester and distinct from the removed monthly claim');
  const ue=U.uniById('university-of-europe-applied-sciences');
  ok(ue.photos.gallery.length===1 && !fs.existsSync(path.join(__dirname,'../assets/img/universities/university-of-europe-applied-sciences/2.jpg')),
     'UE keeps its verified main image and does not bundle the unverified second photograph');
  const windsor=U.uniById('university-of-windsor');
  ok(Object.values(windsor.programEvidence).every(p=>!p.url.includes('student-awards')),
     'Windsor programme evidence points to programmes instead of the awards page');
  const undated=DB.universities.filter(u=>DB.match.annualCost[u.id]&&!DB.match.annualCost[u.id].academicYear&&!U.costYear(u));
  ok(undated.every(u=>M.evaluate(u,{budget:200000,currency:'USD',intake:'all'}).budget.status==='unknown'),
     'Undated costs, including Northeastern and Syracuse totals, remain unknown even for Any intake');
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
    ok(M.evaluate(u,{...input,intake:'all'}).budget.status==='unknown',
       'Any intake cannot turn an undated cost into a confirmed budget match');
    ok(M.evaluate(u,{...input,intake:'all',budget:null}).budget.status==='none',
       'An empty budget still leaves an undated reference figure informational');
    price.academicYear=u.costs.academicYear='2027–2028';
    ok(M.evaluate(u,{...input,intake:'fall-2028'}).budget.status==='unknown'&&
       M.evaluate(u,{...input,intake:'fall-2027',currency:'NOT-A-CURRENCY'}).budget.status==='unknown',
       'Changing intake and unavailable currency cannot reuse an old cost match');

    u.scholarships={needBased:{availableToInternational:true,meetsFullNeed:true,firstYearEligible:false}};
    ok(!U.optionById('scholarship','need').test(u)&&!U.optionById('scholarship','meets-need').test(u),
       'Continuing-student need aid cannot pass first-year aid filters');
    u.scholarships.needBased.firstYearEligible=true;
    ok(U.optionById('scholarship','need').test(u)&&U.optionById('scholarship','meets-need').test(u),
       'Confirmed first-year need-based aid remains discoverable');
    u.scholarships.needBased.status='not-checked';
    ok(U.needFirstYearEligible(u)===null && !U.optionById('scholarship','need').test(u),
       'Unconfirmed need-based eligibility stays unknown for profile, comparison and filtering');
    const covers={tuition:true,housing:true,meals:true};
    u.scholarships={fullRide:{available:true,internationalEligible:false,covers},merit:[]};
    ok(!U.optionById('scholarship','full-ride').test(u)&&!U.optionById('scholarship','full-tuition').test(u),
       'An award unavailable to international applicants does not pass funding filters');
    u.scholarships.fullRide.internationalEligible=true;
    u.scholarships.fullRide.firstYearEligible=false;
    ok(!U.optionById('scholarship','full-ride').test(u),
       'A continuing-student award does not pass the international first-year full ride filter');
    u.scholarships.fullRide.firstYearEligible=true;
    for (const status of ['not-confirmed','not-published','previous-cycle','conflict']) {
      u.scholarships.fullRide.status=status;
      ok(!U.optionById('scholarship','full-ride').test(u) && !U.awardKind(u) && !!U.awardLabel(u),
         'Unconfirmed or historical coverage does not pass a funding filter or get a confirmed award badge: '+status);
    }
    u.scholarships.fullRide.status='confirmed';
    ok(U.optionById('scholarship','full-ride').test(u), 'Confirmed international first-year full coverage remains discoverable');

    u.scholarships.fullRide.covers={tuition:true};
    ok(!U.optionById('scholarship','full-ride').test(u)&&U.optionById('scholarship','full-tuition').test(u),
       'Tuition coverage stays separate from full ride');

    u.english={ielts:{varies:true,profiles:[{kind:'required',overall:6.5,sections:'6.0 in each section'}]}};
    const result=M.evaluate(u,{...input,ielts:7});
    ok(result.checks.some(c=>/section separately/.test(c.text))&&result.unchecked.includes('IELTS section scores'),
       'A programme IELTS profile with band minima keeps section checks explicitly incomplete');
  } finally {delete DB.match.annualCost[u.id];}
};

