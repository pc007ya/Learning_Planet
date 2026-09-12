import {correctOrder,type StoryQuestion,type QuizArt} from './dragon-quiz';
export type QuizState={index:number;answers:number[][];attempted:boolean[];complete:boolean};
export function freshQuiz():QuizState{return {index:0,answers:[],attempted:[],complete:false};}
export function quizScore(state:QuizState,questions:StoryQuestion[]){return questions.filter((q,i)=>state.attempted[i]&&correctOrder(state.answers[i]||[],q.answer)).length;}
const artNames:Record<QuizArt,string>={pip:'小龍',bird:'小鳥',wing:'翅膀',gail:'Gail',cave:'洞穴',sky:'天空',rock:'石頭',nest:'鳥巢',jump:'小龍練習跳躍',moth:'發光小飛蛾',garden:'月光花園',flower:'月光花',frog:'小青蛙',mushroom:'蘑菇森林',firefly:'螢火蟲',bell:'銀鈴',tree:'月亮樹',path:'發光小路'};
export function quizArt(id:QuizArt){const frame=document.createElement('span');frame.className='quiz-art art-'+id;frame.setAttribute('role','img');frame.setAttribute('aria-label',artNames[id]);
 const inner=document.createElement('span');inner.className='quiz-art-image';frame.append(inner);
 const moonlight:Partial<Record<QuizArt,[string,number]>>={moth:['scenes-01-04.webp',1],garden:['scenes-01-04.webp',3],flower:['scenes-17-20.webp',2],frog:['scenes-09-12.webp',0],mushroom:['scenes-09-12.webp',2],firefly:['scenes-13-16.webp',0],bell:['scenes-13-16.webp',2],tree:['scenes-13-16.webp',2],path:['scenes-05-08.webp',2]};
 if(moonlight[id]){const [file,cell]=moonlight[id]!;inner.style.backgroundImage=`url('images/story/moonlight-garden-v1/${file}')`;inner.style.backgroundSize='200% 200%';inner.style.backgroundPosition=`${cell%2*100}% ${Math.floor(cell/2)*100}%`;return frame;}
 const sprite={pip:0,wing:1,jump:1,bird:3}[id as 'pip'|'wing'|'jump'|'bird'];
 if(sprite!==undefined){inner.style.backgroundImage="url('images/story/dragon-v1/cast.png')";inner.style.backgroundSize='200% 200%';inner.style.backgroundPosition=`${sprite%2*100}% ${Math.floor(sprite/2)*100}%`;}
 else if(id==='gail'){const img=document.createElement('img');img.src='images/story/little-star-v1/gail-paper.png';img.className='paper-girl';img.alt='';inner.append(img);}
 else{inner.style.backgroundImage="url('images/story/dragon-v1/scenes.png')";inner.style.backgroundSize=id==='nest'?'500% 500%':'200% 200%';inner.style.backgroundPosition=id==='cave'?'100% 0':id==='nest'?'94% 66%':id==='sky'?'0 100%':'0 100%';}
 return frame;}
export function mountStoryQuiz(host:HTMLElement,questions:StoryQuestion[],state:QuizState,options:{level:string;say:(text:string)=>void;back:()=>void;save:(score:number)=>void;ending?:{title:string;line:string;image:string}}){
 const element=(tag:string,cls='',text='')=>{const n=document.createElement(tag);n.className=cls;n.textContent=text;return n;};
 const button=(text:string,label:string,fn:()=>void)=>{const b=document.createElement('button');b.className='wood-button';b.textContent=text;b.setAttribute('aria-label',label);b.onclick=fn;return b;};
 const card=element('section','story-quiz');card.setAttribute('aria-label','書末小測驗');host.append(card);
 function draw(){card.replaceChildren();card.append(element('span','eyebrow',`STORY CHALLENGE · LEVEL ${options.level}`));
 if(state.complete){const score=quizScore(state,questions);if(options.ending){const img=document.createElement('img');img.className='quiz-ending-image';img.src=options.ending.image;img.alt='Gail 與 Ella 分享風車';card.append(img);}else card.append(quizArt('wing'));card.append(element('h1','',options.ending?.title||'Brave Little Dragon'),element('p','',`完成了！答對 ${score} / ${questions.length} 題`),element('p','',options.ending?.line||'Try once. Try twice. Spread your wings—and touch the sky!'));const actions=element('div','quiz-actions');actions.append(button('再試一次','重新測驗',()=>{Object.assign(state,freshQuiz());draw();}),button('回故事','回到故事',options.back));card.append(actions);return;}
 const q=questions[state.index];let choice=[...(state.answers[state.index]||[])];let checked=Boolean(state.attempted[state.index]);
 card.append(element('div','quiz-count',`${state.index+1} / ${questions.length}`));const heading=element('h1','',q.prompt);card.append(heading);
 const speak=button('♫','朗讀題目',()=>options.say(q.audio||q.prompt));speak.classList.add('quiz-listen');card.append(speak);
 card.classList.toggle('scene-question',Boolean(q.image));if(q.image){const picture=document.createElement('img');picture.className='quiz-scene-image';picture.src=q.image;picture.alt=q.imageAlt||'故事場景';card.append(picture);}else if(q.art)card.append(quizArt(q.art));
 const grid=element('div','quiz-options'+(q.options.every(o=>o.art)?' picture-options':''));
 if(q.kind==='sequence')grid.style.gridTemplateColumns=`repeat(${q.options.length},minmax(0,1fr))`;
 const feedback=element('p','quiz-feedback');feedback.setAttribute('role','status');
 const next=button('提交答案','提交答案',()=>{if(!checked){if(choice.length===q.answer.length)mark();return;}if(state.index===questions.length-1){state.complete=true;options.save(quizScore(state,questions));}else state.index++;draw();});
 function sync(){next.textContent=checked?(state.index===questions.length-1?'完成 →':'下一題 →'):'提交答案';next.setAttribute('aria-label',checked?'下一題':'提交答案');next.disabled=!checked&&choice.length!==q.answer.length;
 Array.from(grid.children).forEach((n,i)=>{const b=n as HTMLButtonElement;b.setAttribute('aria-pressed',String(choice.includes(i)));b.classList.toggle('selected-answer',!checked&&choice.includes(i));b.classList.toggle('correct',checked&&q.kind==='choice'&&q.answer.includes(i));b.classList.toggle('incorrect',checked&&q.kind==='choice'&&choice.includes(i)&&!q.answer.includes(i));if(q.kind==='sequence'&&choice.includes(i))b.dataset.order=String(choice.indexOf(i)+1);else delete b.dataset.order;});}
 function mark(){state.answers[state.index]=[...choice];state.attempted[state.index]=true;checked=true;const right=correctOrder(choice,q.answer);feedback.textContent=(right?'✓ Great! ':'再看看：')+q.explanation;options.say(feedback.textContent.replace('再看看：','Let’s learn. '));sync();}
 q.options.forEach((o,i)=>{const b=button(o.text,o.text||`選擇${o.art?artNames[o.art]:i+1}`,()=>{const spoken=o.text||(o.art==='pip'?'dragon':o.art==='jump'?'jump':o.art==='gail'?'Gail':o.art)||'';options.say(spoken);if(checked)return;if(q.kind==='sequence'){choice=choice.includes(i)?choice.filter(n=>n!==i):[...choice,i];}else choice=[i];state.answers[state.index]=[...choice];feedback.textContent=q.kind==='sequence'?'依序選圖，再提交；再點已選圖卡可取消。':'已選取，按「提交答案」確認。';sync();});b.className='quiz-option';if(o.art)b.prepend(quizArt(o.art));grid.append(b);});
 sync();
 card.append(grid,feedback);if(checked)feedback.textContent=q.explanation;
 const actions=element('div','quiz-actions');actions.append(button('← 故事','回到故事',options.back),next);card.append(actions);
 }
 draw();
}
