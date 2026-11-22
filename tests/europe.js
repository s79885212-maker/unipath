'use strict';
module.exports=function({U,DB,M,ok,manifest}){
 const ids=Object.values(manifest).flat(),codes=Object.keys(manifest);
 ok(ids.length===new Set(ids).size&&ids.every(id=>U.uniById(id)),'Europe has the exact reviewed unique IDs');
 ok(DB.countries.length===6+codes.length&&codes.every(c=>DB.countries.some(x=>x.code===c&&x.currency==='EUR')),'Europe adds only the declared EUR countries');
 ok(ids.every(id=>{const u=U.uniById(id);return manifest[u.country].includes(id)&&u.sources.length>=1&&new Set(u.sources.map(s=>s.url)).size===u.sources.length&&u.lastVerified==='2026-11-22'&&u.programsStatus==='partial';}),'Every European programme keeps official source scope and partial subject inventory');
 ok(ids.every(id=>!U.budgetText(U.uniById(id))&&!U.costAfterAid(U.uniById(id))),'Tuition, fixed components and unverified aid are never a full annual budget');
 const b=U.uniById('bocconi-university');
 ok(b.costs.breakdown.tuition===17700&&DB.match.annualCost[b.id].basis==='tuition'&&DB.match.annualCost[b.id].year==='2027–2028','Bocconi stores sourced 2027/28 tuition separately from the full budget');
 ok(U.deadlineEnd(b.admissions.deadlines[0]).at===Date.parse('2027-01-26T14:00:00Z'),'Bocconi 15:00 Italian time closes at 14:00 UTC in January');
 ok(U.uniById('university-of-bologna').costs.status==='previous-cycle'&&!DB.match.annualCost['university-of-bologna'],'Bologna fixed 2026/27 fee does not become a Fall2027 annual budget');
 if(manifest.fr){
 ok(U.uniById('epita').english.ielts.min===6&&U.uniById('epita').academics.sat.policy===null,'EPITA retains sourced English minimum and no invented SAT waiver');
 ok(U.uniById('essec-business-school').costs.breakdown.tuition===20900&&!U.costAfterAid(U.uniById('essec-business-school')),'ESSEC tuition and competitive aid are separate from a full budget');
 ok(!DB.match.annualCost['ecole-polytechnique']&&U.uniById('ecole-polytechnique').admissions.deadlines.length===0,'Undated Polytechnique fees and conflicting intake heading do not become confirmed2027 price/deadlines');
 }
};
