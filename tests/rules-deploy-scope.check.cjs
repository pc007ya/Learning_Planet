'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),{mkdtempSync,writeFileSync,mkdirSync,rmSync}=require('node:fs'),{tmpdir}=require('node:os'),{join,dirname,resolve}=require('node:path'),{execFileSync,spawnSync}=require('node:child_process');
const script=resolve('scripts/verify-rules-deploy-scope.cjs');
for(const c of [
 ['rules approved',['firestore.rules'],true,false,true],
 ['rules missing marker',['firestore.rules'],false,false,false],
 ['unexpected function file',['firestore.rules','functions/index.js'],true,false,false],
 ['conflicting modes',['firestore.rules'],true,true,false],
 ['normal backend',['functions/index.js'],false,false,true],
 ['fake rules marker',['README.md'],true,false,false]
])test(c[0],()=>{const dir=mkdtempSync(join(tmpdir(),'rules-scope-'));try{
 const git=(...args)=>execFileSync('git',args,{cwd:dir,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 git('init');git('config','user.email','synthetic@example.invalid');git('config','user.name','Synthetic');
 writeFileSync(join(dir,'seed'),'test');git('add','.');git('commit','-m','base');const base=git('rev-parse','HEAD');
 for(const f of c[1]){mkdirSync(dirname(join(dir,f)),{recursive:true});writeFileSync(join(dir,f),'synthetic');}
 git('add','.');git('commit','-m','change');
 const r=spawnSync(process.execPath,[script,base],{cwd:dir,env:{...process.env,RULES_ONLY:String(c[2]),RUNTIME_ONLY:String(c[3])},encoding:'utf8'});
 assert.equal(r.status===0,c[4],r.stdout+r.stderr);
 }finally{rmSync(dir,{recursive:true,force:true});}});
