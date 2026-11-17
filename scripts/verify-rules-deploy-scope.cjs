'use strict';
const {execFileSync}=require('node:child_process');
const base=process.argv[2];
if(!/^[a-f0-9]{40}$/.test(base||''))throw Error('Valid base SHA required');
const files=execFileSync('git',['diff','--name-only',base,'HEAD'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
const rulesOnly=process.env.RULES_ONLY==='true';
if(rulesOnly && process.env.RUNTIME_ONLY==='true')throw Error('Conflicting deployment modes');
if(files.includes('firestore.rules') && !rulesOnly)throw Error('Rules changes require [firestore-rules-only]; no backend or reconciliation will run');
if(rulesOnly){
 const allowed=new Set(['firestore.rules','firebase.rules-test.json','tests/firestore-owner-boundaries.emulator.mjs','.github/workflows/firestore-rules-test.yml','.github/workflows/firebase-backend-deploy.yml','scripts/verify-rules-deploy-scope.cjs','tests/rules-deploy-scope.check.cjs']);
 if(!files.includes('firestore.rules') || files.some(f=>!allowed.has(f)))throw Error('Rules-only change contains unexpected files');
}
console.log('Validated deployment scope',rulesOnly?'rules only':'existing backend');
