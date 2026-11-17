import data from '../../data/chinese-zhuyin-supplement.json';
import { annotatedHanzi, verticalZhuyin } from './primer-zhuyin';
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function rotateOptions(options:string[],offset:number){ const n=((offset%options.length)+options.length)%options.length;return [...options.slice(n),...options.slice(0,n)]; }
export function mountSupplement(root:HTMLElement){
 let group=-1,step=-1,selected:string|null=null,round=0;
 function render(){
 const g=data.groups[group];
 root.innerHTML=`<header><a href="chinese-practice.html">← 返回國語星球</a><h1>${data.title}</h1><p>${data.disclaimer}</p><p>看例字、合起來讀，再做兩題。不計時，不評口說，也不計入課本完成度。</p></header>`+(g?`<section aria-label="注音練習"><button data-action="home">← 回五組目錄</button><h2>${verticalZhuyin(g.final)}</h2>${step<0?`<div class="example">${annotatedHanzi(g.hanzi,g.reading)}</div><p>${g.context}，讀作 ${verticalZhuyin(g.reading)}（${g.tone}）。</p><p>${g.parts} 合起來讀成 ${verticalZhuyin(g.final)}。${g.tone==='一聲'?'一聲不標調號。':''}</p>${g.id==='iai'?'<p>「崖」比較難寫，先認注音，不必練寫這個字。</p>':''}<p>本頁不提供音檔，請老師或家長帶讀。</p><a href="${esc(g.source)}" target="_blank" rel="noopener noreferrer">教育部辭典：查例字讀音 ↗</a><p><button data-action="start">開始兩題練習 →</button></p>`:step<g.questions.length?question(g.questions[step]):`<h3>兩題練習結束</h3><p>剛剛看過 ${verticalZhuyin(g.final)} 的例字與合音。請再跟老師或家長讀一次。</p><button data-action="again">重新練習</button><button data-action="home">選另一組</button>`}</section>`:`<section aria-label="五組原創補充"><h2>選一組開始</h2><div class="groups">${data.groups.map((g,i)=>`<button data-group="${i}">${verticalZhuyin(g.final)}<span>${g.context}</span></button>`).join('')}</div><p>五組、共 10 題，練習看注音與合音；不是聽辨測驗。</p></section>`)+`<footer>例字注音核對：教育部辭典，${data.checkedAt}。題幹與解析為原創。離開頁面不保留作答。</footer>`;
 }
 function question(q:typeof data.groups[number]['questions'][number]){
 return `<p>第 ${step+1}／2 題</p><h3>${esc(q.prompt)}</h3><div class="choices">${rotateOptions(q.options,round+group+step).map((v,i)=>`<button data-answer="${i}" ${selected!==null?'disabled':''}>${v.includes('、')?esc(v):verticalZhuyin(v)}</button>`).join('')}</div>${selected!==null?`<div role="status"><h3>${selected===q.answer?'答對了！':'一起看解析'}</h3><p>${esc(q.explanation)}</p><button data-action="next">${step===0?'下一題 →':'看完成頁 →'}</button></div>`:''}<button data-action="study">返回例字教學</button>`;
 }
 const handler=(event:Event)=>{
 const button=(event.target as Element).closest('button');if(!button||!root.contains(button)||button.disabled)return;
 if(button.dataset.group!==undefined){group=Number(button.dataset.group);step=-1;selected=null;}
 else if(button.dataset.answer!==undefined&&step>=0&&selected===null){const q=data.groups[group]?.questions[step];if(q)selected=rotateOptions(q.options,round+group+step)[Number(button.dataset.answer)];}
 else {switch(button.dataset.action){case'home':group=-1;step=-1;selected=null;break;case'study':step=-1;selected=null;break;case'start':case'again':step=0;selected=null;round++;break;case'next':if(selected!==null){step++;selected=null;}break;}}
 render(); const focus=root.querySelector<HTMLElement>('[role="status"] h3')||root.querySelector<HTMLElement>('section h3')||root.querySelector<HTMLElement>('section h2');focus?.setAttribute('tabindex','-1');focus?.focus();
 };
 root.addEventListener('click',handler);render();return()=>root.removeEventListener('click',handler);
}
const root=document.getElementById('phonics-app');if(root)mountSupplement(root);
