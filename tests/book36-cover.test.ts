import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {transpileModule,ScriptTarget,ModuleKind} from 'typescript';
import {potionCoverMarkup} from '../src/story/interactive/magic-potion-cover';
import {potionBook,potionCover} from '../src/story/interactive/magic-potion';
const source=readFileSync('src/story/interactive/index.ts','utf8');
const body=source.slice(source.indexOf('function cover(){'),source.indexOf('function render(){'));
function runProductionCover(){
 const requests:string[]=[],assignments:string[]=[];
 class Node {
  children:Node[]=[];textContent='';classes=new Set<string>();
  classList={add:(name:string)=>this.classes.add(name)};
  style=new Proxy({} as Record<string,string>,{set:(obj,key:string,value:string)=>{obj[key]=value;if(key==='backgroundImage'){const url=value.match(/url\((.*?)\)/)?.[1];if(url)requests.push(url);}return true;}});
  set innerHTML(value:string){assignments.push(value);for(const m of value.matchAll(/<img[^>]+src=["']([^"']+)/g))requests.push(m[1]);}
  querySelector(_selector:string){return new Node();}
  append(...nodes:Node[]){this.children.push(...nodes);}
  replaceChildren(...nodes:Node[]){this.children=nodes;}
 }
 const flags=Object.fromEntries([...new Set(body.match(/\bis[A-Z]\w*/g))].map(n=>[n,false]));
 const env={...flags,isPotion:true,isLayered:true,illustrated:true,newBook:potionBook(),pages:potionBook().pages('B'),progress:{stars:[],words:[]},page:0,asset:potionBook().asset,potionCoverMarkup,potionCover,selectedBookCover:potionCover(),el:()=>new Node(),btn:()=>new Node(),app:new Node()};
 const js=transpileModule(body,{compilerOptions:{target:ScriptTarget.ES2022,module:ModuleKind.None}}).outputText;
 new Function(...Object.keys(env),js+';cover();')(...Object.values(env));
 return {requests,assignments};
}
describe('book36 production cover resource creation (mock DOM)',()=>{
 it('executes the full production cover with only its own cover resource',()=>{
  const result=runProductionCover();expect(result.assignments[0]).toBe(potionCoverMarkup());
  expect(result.requests).toEqual(['images/story/magic-potion-v1/cover.webp']);
  expect(result.requests.some(p=>p.includes('/scene/')||p.includes('shared-gail')||p.includes('standing.png'))).toBe(false);
 });
 it('keeps the new shell free of any img, old Gail, Scene or preload markup',()=>{
  expect(potionCoverMarkup()).not.toMatch(/<img|src=|shared-gail|scene\/|preload|prefetch/);
  expect(body).not.toMatch(/new Image\(|fetch\(/);
 });
 it('selects the shell before the preserved legacy template in the integrated reader',()=>{
  expect(body).toContain('isPotion?potionCoverMarkup():');
  for(const key of ['market','magic-ball','snow-before','lost-lighthouse','mixed-up-museum','bridge-construction','little-robot'])expect(source).toContain(key);
 });
});
