/** Experimental offline Vite unit cache. Never publishes or modifies source files.
 * Caller must assemble results onto a FRESH complete checkout snapshot, not an old deploy directory.
 * Only current package.json check build units supported; tests/prebuild/staging still run separately.
 */
import {build} from 'vite';
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const inventory=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='node_modules'?[]:e.isDirectory()?inventory(path.join(dir,e.name)):[path.join(dir,e.name)]).sort();
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
export class PartitionCache {
 constructor(root,cacheDir){this.root=path.resolve(root);this.cacheDir=path.resolve(cacheDir);if(this.cacheDir.startsWith(this.root+path.sep))throw Error('Cache must be outside source/site');this.pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json')));this.names=this.pkg.scripts.check.split(' && ').filter(s=>s.startsWith('npm run build:')).map(s=>s.slice(8));}
 fingerprint(inputs){return sha(JSON.stringify([process.version,inventory(path.join(this.root,'src')),...[...inputs].sort().map(p=>[p,fs.existsSync(p)?sha(fs.readFileSync(p)):'MISSING'])]));}
 async run(force=false){if(process.cwd()!==this.root)throw Error('Run from source root');fs.mkdirSync(this.cacheDir,{recursive:true});const bundles=[],built=[],hits=[];
 for(const name of this.names){const file=path.join(this.cacheDir,name.replace(':','-')+'.json');let c;try{c=JSON.parse(fs.readFileSync(file));if(c.schema!==1||c.name!==name||!c.outDir||path.isAbsolute(c.outDir)||c.outDir.split('/').includes('..')||c.outputs.some(o=>!o.path.startsWith(c.outDir+'/')||o.path.split('/').includes('..'))||c.key!==this.fingerprint(c.inputs)||!c.outputs.every(o=>sha(Buffer.from(o.base64,'base64'))===o.sha256))c=null;}catch{c=null;}
 if(force||!c){c=await this.build(name);const tmp=file+'.tmp';fs.writeFileSync(tmp,JSON.stringify(c));fs.renameSync(tmp,file);built.push(name);}else hits.push(name);bundles.push(c);}
 return{bundles,built,hits};}
 async build(name){const config=this.pkg.scripts[name].split('--config ')[1]||'vite.config.ts';const deps=new Set(['package.json','package-lock.json',config].map(p=>path.join(this.root,p)));for(const p of ({'build:stories':['stories/catalog.json'],'build:experiments':['src/experiments/cube-book-data.ts']}[name]||[]))deps.add(path.join(this.root,p));let outDir,empty;
 const result=await build({configFile:config,logLevel:'error',build:{write:false},plugins:[{name:'partition-cache-inputs',configResolved(c){outDir=c.build.outDir;empty=c.build.emptyOutDir;},generateBundle(){for(const p of [...this.getModuleIds(),...this.getWatchFiles()]){const q=p.split('?')[0];if(path.isAbsolute(q)&&fs.existsSync(q)&&fs.statSync(q).isFile())deps.add(q);}}}]});
 outDir=path.relative(this.root,path.resolve(this.root,outDir));if(!outDir||outDir.startsWith('..')||path.isAbsolute(outDir))throw Error('Unsafe output directory');const outputs=[];for(const r of Array.isArray(result)?result:[result])for(const o of r.output){if(o.fileName.split('/').some(x=>x==='..')||path.isAbsolute(o.fileName))throw Error('Unsafe output path');const bytes=Buffer.from(o.type==='chunk'?o.code:o.source);outputs.push({path:path.posix.join(outDir,o.fileName),sha256:sha(bytes),base64:bytes.toString('base64')});}
 const inputs=[...deps];return{schema:1,name,inputs,key:this.fingerprint(inputs),outDir,empty,outputs};}
}
/** Rebuild output manifest from fresh source snapshot, not previous output. */
export function assembleManifest(baseline,bundles){const out={...baseline};for(const b of bundles){if(b.empty)for(const p of Object.keys(out))if(p===b.outDir||p.startsWith(b.outDir+'/'))delete out[p];for(const o of b.outputs){if(sha(Buffer.from(o.base64,'base64'))!==o.sha256)throw Error('Corrupt cached output');out[o.path]=o.sha256;}}return out;}
