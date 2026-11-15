import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs/promises';import {gunzipSync} from 'node:zlib';import {assetPacks} from '../../modules/nature-planet/runtime/asset-packs.mjs';import {createNatureAssetFetch} from '../../modules/nature-planet/runtime/asset-fetch.mjs';
const base=new URL('../../',import.meta.url);
test('all transport packs restore exact original bytes and reduce per-grade geometry transfer',async()=>{
 for(const [path,p] of Object.entries(assetPacks)){const original=await fs.readFile(new URL(path,base)),packed=await fs.readFile(new URL(path+'.gzip.bin',base));assert.equal(original.length,p.bytes);assert.equal(packed.length,p.packedBytes);assert.deepEqual(gunzipSync(packed),original);assert.ok(packed.length<original.length);}
});
test('only requested pack downloads; unsupported decompression uses original and abort remains abort',async()=>{
 const path='modules/nature-planet/assets/grade1-terrain.glb',calls=[];
 const fetcher=async (url)=>{calls.push(String(url));return new Response(await fs.readFile(url));};
 const loader=createNatureAssetFetch(fetcher,{base});const result=await loader(new URL(path,base));assert.deepEqual(Buffer.from(await result.arrayBuffer()),await fs.readFile(new URL(path,base)));assert.equal(calls.length,1);assert.ok(calls[0].endsWith('grade1-terrain.glb.gzip.bin'));
 calls.length=0;await createNatureAssetFetch(fetcher,{base,decompress:null})(new URL(path,base));assert.ok(calls[0].endsWith('grade1-terrain.glb'));const controller=new AbortController();controller.abort();await assert.rejects(loader(new URL(path,base),{signal:controller.signal}),{name:'AbortError'});
});
