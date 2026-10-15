import {afterEach,describe,expect,it,vi} from 'vitest';
import {createHash} from 'node:crypto';
import quiz from '../src/story/interactive/picky-bear-quiz.json';
import {pickyBook} from '../src/story/interactive/picky-bear';
import {freshQuiz,mountStoryQuiz} from '../src/story/interactive/story-quiz';

const digest=(value:unknown)=>createHash('sha256').update(JSON.stringify(value),'utf8').digest('hex');
afterEach(()=>vi.unstubAllGlobals());
describe('book39 A13 Scene14 targeted repair (mock DOM; no browser/audio QA)',()=>{
 it('freezes all47 independent PASS objects and all A13 fields except its two prompts',()=>{
  const passed=(['A','B','C'] as const).flatMap(level=>quiz[level]).filter(q=>q.id!=='book39-A13');
  expect(passed).toHaveLength(47);
  expect(digest(passed)).toBe('a4dafe60816d1f513cd6f8497e5e6715451da310985690918c06a6e51c0bbd1b');
  const question=quiz.A.find(q=>q.id==='book39-A13')!;
  const {prompt,chinesePrompt,...unchanged}=question;
  expect(prompt).toBe('In Scene 14, which food does Jack bite?');
  expect(chinesePrompt).toBe('第14幕，Jack 咬哪樣食物？');
  expect(digest(unchanged)).toBe('faddb620d898fa3eeb84e1ba54936070b62c2d5268b7cf27aff40ba7ee80b8e0');
 });
 it('shows and reads Scene14 before submission in the real shared Quiz, then accepts the preserved berry answer',()=>{
  class Node {
   children:Node[]=[];textContent='';className='';disabled=false;dataset:Record<string,string>={};attributes:Record<string,string>={};onclick?:()=>void;
   classList={add:()=>{},toggle:()=>{}};
   constructor(public tag:string){}
   append(...nodes:Node[]){this.children.push(...nodes);}
   replaceChildren(...nodes:Node[]){this.children=nodes;}
   setAttribute(key:string,value:string){this.attributes[key]=value;}
   find(match:(node:Node)=>boolean):Node[]{return [...(match(this)?[this]:[]),...this.children.flatMap(node=>node.find(match))];}
   get text():string{return [this.textContent,...this.children.map(node=>node.text)].join('\n');}
  }
  vi.stubGlobal('document',{createElement:(tag:string)=>new Node(tag)});
  const host=new Node('host'),questions=pickyBook().questions('A'),state={...freshQuiz(),index:12},say=vi.fn();
  mountStoryQuiz(host as unknown as HTMLElement,questions,state,{level:'A',say,back:vi.fn(),save:vi.fn()});
  const q=questions[12],button=(label:string)=>host.find(n=>n.tag==='button'&&n.textContent===label)[0];
  expect(q.id).toBe('book39-A13');
  expect(host.find(n=>n.tag==='h1').map(n=>n.textContent)).toEqual(['In Scene 14, which food does Jack bite?']);
  expect(host.text).not.toContain(q.explanation);
  expect(host.text).not.toContain('第14幕');
  expect(host.find(n=>n.tag==='img')).toHaveLength(0);
  button('♫').onclick?.();expect(say).toHaveBeenLastCalledWith('In Scene 14, which food does Jack bite?');
  expect(q.answer).toEqual([1]);expect(q.options[1].text).toBe('A berry');
  expect(pickyBook().pages('A')[13].lines.join(' ')).toContain('berry bite');
  button('A berry').onclick?.();button('提交答案').onclick?.();
  expect(state.attempted[12]).toBe(true);expect(state.answers[12]).toEqual([1]);
  expect(host.text).toContain('✓ Great!');expect(host.text).toContain(q.explanation);
 });
});
