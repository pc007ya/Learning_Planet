import {afterEach,expect,it,vi} from 'vitest';
import {mountStoryQuiz,freshQuiz} from '../src/story/interactive/story-quiz';
import type {StoryQuestion} from '../src/story/interactive/dragon-quiz';
class Node{
 children:Node[]=[];textContent='';className='';style:Record<string,string>={};dataset:Record<string,string>={};attributes:Record<string,string>={};disabled=false;
 onclick:(()=>void)|null=null;
 classList={add:(_name:string)=>{},toggle:(_name:string,_on?:boolean)=>{}};
 setAttribute(name:string,value:string){this.attributes[name]=value;}
 append(...nodes:Node[]){this.children.push(...nodes);}
 prepend(node:Node){this.children.unshift(node);}
 replaceChildren(){this.children=[];}
}
function find(root:Node,label:string):Node{
 for(const node of root.children){if(node.attributes['aria-label']===label)return node;try{return find(node,label);}catch{}}
 throw new Error('No accessible button '+label);
}
afterEach(()=>vi.unstubAllGlobals());
it('cancels the current explanation before the next question, completion and retry',()=>{
 vi.stubGlobal('document',{createElement:()=>new Node()});
 const host=new Node();const state=freshQuiz();let currentSpeech:string|null=null;
 const say=vi.fn((text:string)=>{currentSpeech=text;});const stop=vi.fn(()=>{currentSpeech=null;});const save=vi.fn();
 const questions:StoryQuestion[]=[
  {id:'first',kind:'choice',prompt:'First question',options:[{text:'One'},{text:'Two'}],answer:[0],explanation:'A long first explanation.'},
  {id:'second',kind:'choice',prompt:'Second question',options:[{text:'Three'},{text:'Four'}],answer:[1],explanation:'A long second explanation.'}
 ];
 mountStoryQuiz(host as unknown as HTMLElement,questions,state,{level:'A',say,stop,save,back:vi.fn(),ending:{title:'Done',line:'Finished',image:'cover.webp'}});
 find(host,'One').onclick!();find(host,'提交答案').onclick!();expect(currentSpeech).toContain('first explanation');
 const beforeNext=stop.mock.calls.length;find(host,'下一題').onclick!();expect(stop).toHaveBeenCalledTimes(beforeNext+1);expect(currentSpeech).toBeNull();expect(state.index).toBe(1);
 find(host,'Three').onclick!();find(host,'提交答案').onclick!();expect(currentSpeech).toContain('second explanation');
 find(host,'下一題').onclick!();expect(currentSpeech).toBeNull();expect(state.complete).toBe(true);expect(save).toHaveBeenCalledWith(1);
 currentSpeech='An old pending explanation';find(host,'重新測驗').onclick!();expect(currentSpeech).toBeNull();expect(state.complete).toBe(false);expect(state.index).toBe(0);
});
