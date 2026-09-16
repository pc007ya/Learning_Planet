import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
it('replaces failed counting images without losing object identity',()=>{
  let handler:any;
  class Img {src='missing.png';alt='兔子';classList={contains:(s:string)=>s==='math-object-image'};}
  const code=readFileSync('modules/math-image-guard.mjs','utf8').replace('export function','function');
  vm.runInNewContext(code,{document:{addEventListener:(_type:string,fn:any)=>handler=fn},HTMLImageElement:Img});
  const img=new Img();handler({target:img});expect(decodeURIComponent(img.src)).toContain('🐰');
  const first=img.src;handler({target:img});expect(img.src).toBe(first);
});
it('forces both countdown number and seconds label to dark text',()=>{
  expect(readFileSync('index.html','utf8')).toContain('.quiz-timer-circle *{color:#111!important;text-shadow:none!important}');
});
