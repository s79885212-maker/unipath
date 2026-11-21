'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const {execFileSync}=require('child_process');
const root=path.resolve('.');
const base='09e0e3d2c5aa3b725202b2934816dfc9e6c64b9b';
const prefix=fs.readFileSync('tests/run.js','utf8').split('var failed = 0, passed = 0;')[0];
function catalogue(revision){
  const mod={exports:{}};
  const files=revision?Object.assign({},fs,{readFileSync(file,encoding){
    const relative=path.relative(root,file).replace(/\\/g,'/');
    if(!relative.startsWith('../'))return execFileSync('git',['show',revision+':'+relative],{encoding:'utf8',maxBuffer:32*1024*1024});
    return fs.readFileSync(file,encoding);
  }}):fs;
  const localRequire=name=>name==='fs'?files:require(name);
  vm.runInNewContext(prefix,{require:localRequire,__dirname:path.resolve('tests'),module:mod,console,process,setTimeout,clearTimeout});
  return mod.exports.DB.universities;
}
const before=new Map(catalogue(base).map(u=>[u.id,u]));
const after=catalogue();
const changes=[];
for(const u of after){
  const old=before.get(u.id),fields=[];
  if(!old)throw Error('Unexpected new university '+u.id);
  for(const field of Object.keys(u)){
    if(JSON.stringify(old[field])!==JSON.stringify(u[field]))fields.push({field,before:old[field]??null,after:u[field]});
  }
  if(fields.length)changes.push({id:u.id,country:u.country,fields});
}
if(before.size!==after.length)throw Error('Catalogue count changed');
fs.writeFileSync('research/six-country-audit/field-changes.json',JSON.stringify({base,generatedAt:new Date().toISOString(),changes},null,2)+'\n');
console.log('Changed runtime profiles',changes.length);
