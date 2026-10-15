import {describe,it,expect,vi} from 'vitest';
import {drawCover,drawSpine} from '../src/story/jacket';
const context=()=>({canvas:{width:816,height:972},drawImage:vi.fn(),fillRect:vi.fn(),fillText:vi.fn(),save:vi.fn(),restore:vi.fn(),translate:vi.fn(),rotate:vi.fn(),beginPath:vi.fn(),arc:vi.fn(),stroke:vi.fn(),createLinearGradient:vi.fn(()=>({addColorStop:vi.fn()}))});
describe('new38/39 shelf jackets',()=>{
 it.each([["Gail and Mira's Science Homework","Gail and Mira's",'Science Homework'],['Gail and the Picky Bear','Gail and the','Picky Bear']])('fits the whole portrait and prints the actual title: %s',(title,first,last)=>{
  const ctx=context(),image={naturalWidth:800,naturalHeight:1200};drawCover(ctx as unknown as CanvasRenderingContext2D,image as HTMLImageElement,title,true);
  expect(ctx.drawImage).toHaveBeenCalledTimes(1);const call=ctx.drawImage.mock.calls[0];expect(call[0]).toBe(image);[84,0,648,972].forEach((v,i)=>expect(call[i+1]).toBeCloseTo(v,8));
  expect(ctx.fillText).toHaveBeenCalledWith(first,408,74,752);expect(ctx.fillText).toHaveBeenCalledWith(last,408,124,752);
  expect(ctx.fillText.mock.calls.flat()).not.toContain('Weekend Break');
 });
 it('prints Picky Bear on its spine instead of the other bear story subtitle',()=>{
  const ctx=context();drawSpine(ctx as unknown as CanvasRenderingContext2D,'Gail and the Picky Bear',true,36);
  expect(ctx.fillText).toHaveBeenCalledWith('Gail and the Picky Bear',0,16,433);expect(ctx.fillText.mock.calls.flat()).not.toContain('An Honest Beginning');
 });
});
