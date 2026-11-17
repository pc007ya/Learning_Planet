import { describe,it,expect } from 'vitest';
import { parseHTML } from 'linkedom';
import { readFileSync } from 'node:fs';
import data from '../data/chinese-zhuyin-supplement.json';
const {document}=parseHTML('<html><body></body></html>');
Object.assign(globalThis,{document});
const {mountSupplement,rotateOptions}=await import('../src/chinese-practice/phonics-supplement');
function setup(){const root=document.createElement('main');document.body.append(root);mountSupplement(root as unknown as HTMLElement);return root;}
function click(root:ReturnType<typeof setup>,selector:string){const el=root.querySelector(selector);expect(el).not.toBeNull();(el as unknown as HTMLElement).click();}
describe('original phonics supplement',()=>{
 it('has five dictionary-verified readings and ten unique-answer original questions',()=>{
 expect(data.kind).toBe('original-supplement');expect(data.groups.map(g=>g.reading)).toEqual(['ㄧㄞˊ','ㄧㄣ','ㄨㄣ','ㄩㄝˋ','ㄩㄣˊ']);
 expect(data.groups.flatMap(g=>g.questions)).toHaveLength(10);
 for(const g of data.groups){expect(new URL(g.source).hostname).toMatch(/^dict\.(concised|revised)\.moe\.edu\.tw$/);expect(g.questions[0].prompt).toContain(g.context);for(const q of g.questions){expect(new Set(q.options).size).toBe(q.options.length);expect(q.options.filter(x=>x===q.answer)).toHaveLength(1);expect(q.explanation).toContain(q.answer);for(let n=0;n<9;n++)expect(rotateOptions(q.options,n).filter(x=>x===q.answer)).toHaveLength(1);}}
 });
 it('shows clear original boundary, no timer or unverified speech',()=>{const root=setup();expect(root.textContent).toContain('不是康軒第 9 課課文或原題');expect(root.querySelectorAll('[data-group]')).toHaveLength(5);expect(root.querySelector('audio')).toBeNull();const code=readFileSync('src/chinese-practice/phonics-supplement.ts','utf8');expect(code).not.toMatch(/setInterval|speechSynthesis|localStorage|new Audio/);});
 it('teaches first, gives feedback, completes only after two answers and resets navigation',()=>{
 const root=setup();click(root,'[data-group="0"]');expect(root.textContent).toContain('不必練寫');expect(root.querySelector('[data-answer]')).toBeNull();click(root,'[data-action="start"]');
 for(let step=0;step<2;step++){const q=data.groups[0].questions[step];const options=rotateOptions(q.options,1+step);click(root,`[data-answer="${options.indexOf(q.answer)}"]`);expect(root.textContent).toContain('答對了');expect(root.querySelectorAll('[data-answer]:disabled')).toHaveLength(3);click(root,'[data-action="next"]');}
 expect(root.textContent).toContain('兩題練習結束');click(root,'[data-action="again"]');expect(root.textContent).toContain('第 1／2 題');expect(root.querySelector('[role="status"]')).toBeNull();click(root,'[data-action="home"]');click(root,'[data-group="4"]');expect(root.querySelector('[data-answer]')).toBeNull();expect(root.textContent).toContain('白雲的雲');
 });
 it('every group completes correctly with rotated answers',()=>{for(let group=0;group<5;group++){const root=setup();click(root,`[data-group="${group}"]`);click(root,'[data-action="start"]');for(let step=0;step<2;step++){const q=data.groups[group].questions[step];const options=rotateOptions(q.options,1+group+step);click(root,`[data-answer="${options.indexOf(q.answer)}"]`);expect(root.textContent).toContain('答對了');click(root,'[data-action="next"]');}expect(root.textContent).toContain('兩題練習結束');}});
 it('wrong response explains without pretending pronunciation is assessed; back clears answer',()=>{const root=setup();click(root,'[data-group="1"]');click(root,'[data-action="start"]');const q=data.groups[1].questions[0];const options=rotateOptions(q.options,2);click(root,`[data-answer="${options.findIndex(x=>x!==q.answer)}"]`);expect(root.textContent).toContain('一起看解析');expect(root.textContent).toContain('一聲不標調號');click(root,'[data-action="study"]');click(root,'[data-action="start"]');expect(root.querySelector('[role="status"]')).toBeNull();});
 it('applies vertical zhuyin and side-tone styles on the actual standalone root',()=>{const css=readFileSync('styles/phonics-supplement.css','utf8');expect(css).toContain('#phonics-app .primer-phonetics{display:flex;flex-direction:column');expect(css).toContain('#phonics-app .primer-tone{position:absolute;right:0');const html=readFileSync('chinese-zhuyin-supplement.html','utf8');expect(html).toContain('id="phonics-app"');expect(html).toContain('styles/phonics-supplement.css');});
 it('preserves original 1–8 and links separately from textbook lessons',()=>{const app=readFileSync('src/chinese-practice/app.ts','utf8');expect(app).toContain('另外練：原創注音補充');expect(app).toContain('chinese-zhuyin-supplement.html');const primer=JSON.parse(readFileSync('src/chinese-practice/primer-learning.json','utf8'));expect(JSON.stringify(primer)).not.toContain('original-supplement');});
});
