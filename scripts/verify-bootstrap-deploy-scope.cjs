'use strict';
const {execFileSync}=require('node:child_process');
const base=process.argv[2];if(!/^[a-f0-9]{40}$/.test(base||''))throw Error('Base SHA required');
const git=(...args)=>execFileSync('git',args,{encoding:'utf8'});
const files=git('diff','--name-only',base,'HEAD').trim().split('\n').filter(Boolean);
const mode=process.env.BOOTSTRAP_ONLY==='true';
const source=git('show','HEAD:functions/index.js'), previous=git('show',base+':functions/index.js');
const marker='// Public bootstrap is retired.';
if(source.includes(marker)&&!previous.includes(marker)&&!mode)throw Error('Bootstrap retirement requires [bootstrap-security-only]');
if(mode){
 if(process.env.RULES_ONLY==='true'||process.env.RUNTIME_ONLY==='true')throw Error('Conflicting modes');
 const allowed=new Set(['functions/index.js','functions/test/runtime-compat.node.cjs','.github/workflows/firebase-backend-deploy.yml','.github/workflows/bootstrap-security-test.yml','scripts/verify-bootstrap-deploy-scope.cjs']);
 if(files.some(f=>!allowed.has(f))||!files.includes('functions/index.js'))throw Error('Unexpected bootstrap scope');
 const oldStart=previous.indexOf('// One-time initialization endpoint.'), newStart=source.indexOf(marker);
 if(oldStart<0||newStart<0||previous.slice(0,oldStart)!==source.slice(0,newStart))throw Error('Other callable implementation changed');
 if(!source.slice(newStart).includes("throw new HttpsError('failed-precondition'")||/admin\.|db\./.test(source.slice(newStart)))throw Error('Retired bootstrap must not access backend');
}
console.log('Bootstrap scope verified');
