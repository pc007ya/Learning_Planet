import {test} from 'node:test';import assert from 'node:assert/strict';import {unitArtURL,createUnitArtRenderer} from '../../modules/nature-planet/unit-art.mjs';
test('only allowlisted IDs resolve',()=>{assert.ok(unitArtURL('s-kh-g1-t1-u01').endsWith('/s-kh-g1-t1-u01.webp'));assert.equal(unitArtURL('../../bad'),null);assert.equal(unitArtURL('not-a-unit'),null);});
test('fallback, stale loads, no same-unit reload, errors',()=>{const imgs=[];const c={innerHTML:'fallback',replaceChildren(i){this.child=i;}};const render=createUnitArtRenderer(c,{urlFor:id=>id==='missing'?null:id,imageFactory:()=>{let i={style:{}};imgs.push(i);return i;}});render({id:'a',title:'A'});render({id:'b',title:'B'});imgs[0].onload();assert.equal(c.child,undefined);imgs[1].onload();assert.equal(c.child.alt,'B');render({id:'b'});assert.equal(imgs.length,2);render({id:'missing'});assert.equal(c.innerHTML,'fallback');render({id:'c'});imgs[2].onerror();assert.equal(c.innerHTML,'fallback');});
import fs from 'node:fs/promises';
test('every available unit image exists and remains under 100 KB',async()=>{const {units}=JSON.parse(await fs.readFile(new URL('../../data/science-curriculum/catalog.json',import.meta.url)));let count=0;for(const unit of units){const url=unitArtURL(unit.id);if(!url)continue;const data=await fs.readFile(new URL(url));assert.ok(data.length<100000,unit.id);assert.equal(data.subarray(8,12).toString(),'WEBP');count++;}assert.equal(count,110);});

test('final two units resolve',()=>{assert.ok(unitArtURL('s-kh-g6-t1-u04'));assert.ok(unitArtURL('s-na-g6-t1-u04'));});

test('parsed DOM keeps original SVG on missing/error and ignores stale completion',async()=>{
 const {parseHTML}=await import('linkedom/worker');
 const {document}=parseHTML('<html><body><div id="cover"><svg aria-label="原創自然探索圖示"><path d="M0 0"/></svg></div></body></html>');
 const cover=document.getElementById('cover'),original=cover.innerHTML,images=[];
 const render=createUnitArtRenderer(cover,{imageFactory:()=>{const img=document.createElement('img');images.push(img);return img;}});
 render({id:'missing-unit-a',title:'電磁作用'});assert.equal(cover.innerHTML,original);assert.equal(images.length,0);
 render({id:'missing-unit-b',title:'奇妙的電磁世界'});assert.equal(cover.innerHTML,original);assert.equal(images.length,0);
 render({id:'s-kh-g1-t1-u01',title:'我上一年級'});images[0].onerror();assert.equal(cover.innerHTML,original);
 render({id:'s-kh-g1-t1-u02',title:'走，校園探索去'});render({id:'missing-unit-a',title:'電磁作用'});images[1].onload();assert.equal(cover.innerHTML,original);
 render({id:'s-kh-g1-t1-u01',title:'我上一年級'});images[2].onload();assert.equal(cover.querySelector('img').alt,'我上一年級');assert.equal(cover.querySelector('img').style.position,'absolute');assert.equal(cover.querySelector('img').style.inset,'0');assert.equal(cover.querySelector('img').style.height,'100%');assert.equal(cover.querySelector('img').style.objectFit,'contain');assert.equal(cover.querySelector('svg'),null);
 render({id:'missing-unit-b',title:'奇妙的電磁世界'});assert.equal(cover.innerHTML,original);
});

 test('production ESM chain versions the art revision end-to-end',async()=>{for(const [path,dependency] of [['../../index.html','inline-view.mjs'],['../../modules/nature-planet/inline-view.mjs','nature-entry.mjs'],['../../modules/science-curriculum/nature-entry.mjs','launch.mjs'],['../../modules/nature-planet/launch.mjs','unit-art.mjs']]){const source=await fs.readFile(new URL(path,import.meta.url),'utf8');assert.ok(source.includes(dependency+'?v='+(dependency==='unit-art.mjs'?'20261114-unit-art-v2':'20261115-tablet-v1')),path);}});
