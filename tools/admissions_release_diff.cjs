'use strict';
/* Compare effective layered data, including main-only release history. This is
   a release diff, not another inventory or proof of official source contents. */
const fs=require('fs'),vm=require('vm'),cp=require('child_process'),assert=require('assert/strict');
const git=(...args)=>cp.execFileSync('git',args,{encoding:'utf8',maxBuffer:32*1024*1024});
function db(ref){
 const read=p=>ref?git('show',ref+':'+p):fs.readFileSync(p,'utf8');
 const scripts=[...read('index.html').matchAll(/<script[^>]+src="([^"?]+)(?:\?[^"]*)?"/g)].map(m=>m[1]).filter(p=>p.startsWith('data/')&&!p.startsWith('data/i18n/'));
 const c={window:{}};vm.createContext(c);
 for(const p of scripts)vm.runInContext(read(p),c,{filename:p});
 c.window.UNIPATH.applyLayers();return JSON.parse(JSON.stringify(c.window.UNIPATH));
}
function fields(a,b,p='',out=[]){
 if(JSON.stringify(a)===JSON.stringify(b))return out;
 if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)!==Array.isArray(b)){out.push(p);return out;}
 for(const k of new Set([...Object.keys(a),...Object.keys(b)]))fields(a[k],b[k],p?p+'.'+k:k,out);
 return out;
}
const main=db('origin/main'),candidate=db(),before=Object.fromEntries(main.universities.map(u=>[u.id,u])),after=Object.fromEntries(candidate.universities.map(u=>[u.id,u]));
assert.deepEqual(Object.keys(before).sort(),Object.keys(after).sort(),'Release preserves exactly the existing catalogue IDs');
const counts={};for(const u of candidate.universities)counts[u.country]=(counts[u.country]||0)+1;
assert.equal(candidate.universities.length,540);assert.equal(new Set(candidate.universities.map(u=>u.id)).size,540);
assert(candidate.universities.every(u=>before[u.id].country===u.country),'Countries preserved');
const nameChanges=candidate.universities.filter(u=>before[u.id].name!==u.name).map(u=>({id:u.id,before:before[u.id].name,after:u.name,aliases:u.aliases}));
assert(nameChanges.every(u=>u.id==='berlin-international-university'&&u.after==='Whitecliffe University of Applied Sciences'&&u.aliases.includes(u.before)),'Only the documented Whitecliffe name shortening is permitted, with old name searchable');
const changed=candidate.universities.flatMap(u=>{const f=fields(before[u.id],u);return f.length?[{id:u.id,country:u.country,fields:f}]:[];});
const topFields={};for(const r of changed)for(const key of new Set(r.fields.map(f=>f.split('.')[0])))topFields[key]=(topFields[key]||0)+1;
const result={mainSHA:git('rev-parse','origin/main').trim(),baseDevSHA:git('rev-parse','origin/dev').trim(),sourceHeadBeforeFinalReport:git('rev-parse','HEAD').trim(),version: /\?v=(\d+)/.exec(fs.readFileSync('index.html','utf8'))[1],catalogue:540,counts,idsCountriesUnchanged:true,nameChanges,mainOnlyContentFiles:git('diff','--name-only',git('merge-base','origin/main','origin/dev').trim(),'origin/main').trim().split('\n').filter(Boolean),changedCards:changed.length,topFields,changed,accessMechanismChanged:!!git('diff','origin/main','--','assets/js/gate.js','.github/workflows').trim(),note:'Effective full main-to-candidate data diff. Field presence or a source URL is not a new content verification; official re-review is documented separately.'};
assert(!result.accessMechanismChanged,'No access/deployment setting change');
fs.writeFileSync('research/admissions-followup/release-diff.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({version:result.version,catalogue:540,counts,changedCards:changed.length,topFields,mainOnlyContentFiles:result.mainOnlyContentFiles,accessMechanismChanged:false}));
