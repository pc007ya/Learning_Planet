import {describe,it,expect} from 'vitest';
import {drawCover} from '../src/story/jacket';
function printed(title:string){const text:string[]=[];const ctx={drawImage(){},fillRect(){},fillText(value:string){text.push(value);}} as unknown as CanvasRenderingContext2D;drawCover(ctx,{width:768,height:1024} as HTMLImageElement,title);return text.join(' ');}
describe('shelf cover titles',()=>{
 for(const title of ['Gail and the Little Witch Who Said “I Can’t”','Gail and the Magic Mirror That Loved to Compare','Gail and the Library of Stars','Gail and a Brand New Adventure'])it(title,()=>{const result=printed(title);expect(result).toContain(title);expect(result).not.toContain('Where Is My Star?');});
 it('keeps the original star title on its own cover',()=>expect(printed('Where Is My Star?')).toContain('Where Is My Star?'));
});
