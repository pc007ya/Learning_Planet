import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {mathBankRuntime, questionKey} from './helpers/math-bank-runtime.mjs';

for (const unit of ['u102','u105','u4']) {
 test(`${unit} provides 50 distinct rendered questions at every difficulty`,()=>{
  for(const seed of [1,17,47,97,231])for(const round of [0,1,2]){
   const qs=mathBankRuntime(seed).app.buildMath(unit,round);
   assert.equal(qs.length,50);
   assert.equal(new Set(qs.map(questionKey)).size,50,`${unit}/${seed}/${round}`);
   for(const q of qs){assert.equal(q.opts.length,4);assert.equal(new Set(q.opts).size,4);assert.equal(q.opts.filter(v=>v===q.ans).length,1);}
  }
 });
}
test('comparison answers follow visible sizes, including equality and reverse comparisons',()=>{
 const seen=new Set();
 for(let seed=1;seed<=12;seed++) for(const q of mathBankRuntime(seed).app.buildMath('u102',0)){
  const d=q.figData; seen.add(d.mode);
  if(d.mode==='curve'){assert.equal(q.ans,q.stem.includes('曲線')?'紫色線':'藍色線');continue;}
  assert.ok(d.blueSize>=2&&d.blueSize<=9&&d.yellowSize>=2&&d.yellowSize<=9);
  const noun=d.mode==='length'?'鉛筆':d.mode==='height'?'柱子':'書';
  const expected=d.blueSize===d.yellowSize?'一樣':((d.blueSize>d.yellowSize)===d.askLarger?'藍色':'黃色')+noun;
  assert.equal(q.ans,expected);seen.add(d.blueSize===d.yellowSize?'equal':String(d.askLarger));
 }
 for(const mode of ['curve','length','height','thickness','equal','true','false'])assert.ok(seen.has(mode),mode);
});
test('shape and solid classification counts match visible objects and source files exist',()=>{
 for(let seed=1;seed<=8;seed++) for(const unit of ['u4','u105']) for(const q of mathBankRuntime(seed).app.buildMath(unit,0)){
  if(q.fig==='shapeGrid'){
   assert.equal(q.figData.items.filter(x=>x===q.figData.target).length,q.ans);
   assert.ok(q.figData.items.length<=10);
   assert.equal(new Set(q.figData.items).size,2);
  }
  if(q.figData.images){
   assert.equal(q.figData.images.length<=10,true);
   const target=q.figData.target;
   const images=q.figData.images;
   const paths={方盒:'solid-cube.png',長方盒:'solid-cuboid.png',圓罐:'solid-cylinder.png',球:'soccer-ball-v1.png'};
   assert.equal(images.filter(x=>x.image.endsWith(paths[target])).length,q.ans);
   for(const img of images)assert.ok(fs.existsSync(img.image),img.image);
  }
 }
});
test('renderers consume the generated dimensions and mixed solid images',()=>{
 const source=fs.readFileSync('index.html','utf8');
 assert.match(source,/const sizes = \[q\.figData\.blueSize, q\.figData\.yellowSize\]/);
 assert.match(source,/q\.figData\.images\.map/);
 assert.match(source,/viewBox: "0 0 460 240"/);
});
