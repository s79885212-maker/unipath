'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const sandbox={window:{},document:{querySelector(){return null;}}};vm.createContext(sandbox);
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^"?]+)\?v=/g)){
 if(m[1].includes('/i18n/'))continue;
 vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),sandbox,{filename:m[1]});
}
const DB=sandbox.window.UNIPATH;DB.applyLayers();
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const targets=JSON.parse(fs.readFileSync(path.join(root,'research/us-expansion-50-targets.json'),'utf8'));
const entries=targets.map((t,i)=>{
 const names=new Set([t.id,t.name,...t.aliases].map(norm));
 const matches=DB.universities.filter(u=>[u.id,u.name,u.shortName,...(u.aliases||[])].some(s=>names.has(norm(s))));
 return {number:i+1,batch:Math.floor(i/10)+1,name:t.name,proposedId:t.id,campusHint:t.campus,aliases:t.aliases,existingMatches:matches.map(u=>({id:u.id,name:u.name,city:u.city,campuses:u.campuses||null})),id:matches.length===1?matches[0].id:t.id,researchStatus:'pending',implementationStatus:matches.length?'existing-record-needs-campus-review':'not-added',topics:{identity:'pending',admission:'pending',uzbekistan:'pending',tests:'pending',english:'pending',programs:'pending',cost:'pending',aid:'pending',photo:'pending'},unresolved:[]};
});
const registry={task:'Owner-approved USA +50 list, PDF 2026-10-31; campus hints are instructions, not verified university facts',baselineCommit:'0c51869e31b1884212a5fe13ffec937aadf6e164',mainBaseline:'afa5a19abf3f0d06d273046750e09b5cfac41758',branch:'codex/us-expansion-50',baselineCounts:Object.fromEntries(DB.countries.map(c=>[c.code,DB.universities.filter(u=>u.country===c.code).length])),baselineIds:DB.universities.map(u=>u.id),entries};
const dest=path.join(root,'research/us-expansion-50-registry.json');
if(fs.existsSync(dest))throw Error('Registry already exists; refusing to overwrite research progress');
fs.writeFileSync(dest,JSON.stringify(registry,null,2)+'\n');
console.log(JSON.stringify({counts:registry.baselineCounts,targets:entries.length,existing:entries.filter(e=>e.existingMatches.length),unmatched:entries.filter(e=>!e.existingMatches.length).length},null,2));
