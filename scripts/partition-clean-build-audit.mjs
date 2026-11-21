import {build} from 'vite';
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const root=process.cwd(), sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const pkg=JSON.parse(fs.readFileSync('package.json'));
const names=pkg.scripts.check.split(' && ').filter(s=>s.startsWith('npm run build:')).map(s=>s.slice(8));
const configs=Object.fromEntries(names.map(n=>[n,pkg.scripts[n].split('--config ')[1]||'vite.config.ts']));
const globals=['package.json','package-lock.json'];
const extra={'build:stories':['stories/catalog.json'],'build:experiments':['src/experiments/cube-book-data.ts']};
const fingerprint=paths=>sha(JSON.stringify(paths.sort().map(p=>[p,fs.existsSync(p)?sha(fs.readFileSync(p)):'MISSING'])));
let cache=new Map();
async function unit(name){let deps=new Set([...globals,configs[name],...(extra[name]||[])]);let outDir,empty;
 const result=await build({configFile:configs[name],logLevel:'error',build:{write:false},plugins:[{name:'audit-dependencies',configResolved(c){outDir=path.relative(root,c.build.outDir);empty=c.build.emptyOutDir;},generateBundle(){for(const p of this.getModuleIds()){const q=p.split('?')[0];if(path.isAbsolute(q)&&fs.existsSync(q)&&fs.statSync(q).isFile())deps.add(q);}for(const p of this.getWatchFiles())if(fs.existsSync(p)&&fs.statSync(p).isFile())deps.add(p);}}]});
 const outputs={};for(const r of Array.isArray(result)?result:[result])for(const o of r.output)outputs[path.posix.join(outDir,o.fileName)]=sha(o.type==='chunk'?o.code:o.source);
 const inputs=[...deps];return {inputs,key:fingerprint(inputs),outputs,outDir,empty};}
async function run(useCache){let outputs={},built=[],hits=[];for(const name of names){let c=cache.get(name);if(useCache&&c&&c.key===fingerprint(c.inputs)){hits.push(name);}else{c=await unit(name);cache.set(name,c);built.push(name);}Object.assign(outputs,c.outputs);}return{outputs,built,hits};}
function equal(a,b,label){if(JSON.stringify(Object.entries(a.outputs).sort())!==JSON.stringify(Object.entries(b.outputs).sort()))throw Error('MISMATCH '+label);console.log(JSON.stringify({test:label,pass:true,files:Object.keys(a.outputs).length,built:a.built,hits:a.hits}));}
const baseline=await run(false); console.log(JSON.stringify({baseline:true,units:names.length,files:Object.keys(baseline.outputs).length}));equal(await run(true),await run(false),'unchanged equals clean');
const p='vite.tides.config.mjs',original=fs.readFileSync(p,'utf8');fs.writeFileSync(p,original+'\n// offline cache mutation\n');equal(await run(true),await run(false),'single config equals clean');fs.writeFileSync(p,original);await run(false);
const lock=fs.readFileSync('package-lock.json','utf8');fs.writeFileSync('package-lock.json',lock+'\n');equal(await run(true),await run(false),'shared dependency equals clean');fs.writeFileSync('package-lock.json',lock);await run(false);
const source='src/tides/app.ts',body=fs.readFileSync(source);fs.renameSync(source,source+'.audit-save');let failed=false;try{await run(true);}catch(e){failed=true;console.log(JSON.stringify({test:'deleted required source rejects cached success',pass:true,message:e.message.slice(0,160)}));}finally{fs.renameSync(source+'.audit-save',source);}if(!failed)throw Error('Deletion incorrectly cached');
console.log(JSON.stringify({complete:true,productionTouched:false,limitations:['generated-output equivalence only, not full npm check or staged website','cache in memory; not CI-integrated','explicit plugin file inputs require maintenance','node version differs CI']}));
