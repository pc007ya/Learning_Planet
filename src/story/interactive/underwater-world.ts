import {mountUnderwaterScene} from './underwater-world-image';
import data from '../underwater-world/data.json';
import quizzes from './underwater-world-quiz.json';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
export const underwaterFromPath=(path:string)=>path.endsWith('/underwater-world-storybook.html');
export const underwaterCoverMarkup=()=>'<div class="cover-copy"><span class="eyebrow"></span><h1></h1><p></p><div class="cover-meta"></div></div><div class="closed-book"><div class="cover-border"></div></div>';
export const underwaterCover=()=> 'images/story/underwater-world-v1/ebook-cover-portrait.webp';
export const underwaterId=(id:string)=>id.replaceAll(' ','-');
export function underwaterObjects(page:number):ObjectSpec[]{
 return data.scenes[page].objects.map(o=>({id:underwaterId(o.id),word:o.word,x:o.x,y:o.y,w:o.w,h:o.h,z:o.id==='necklace'||o.id==='bright necklace'?5:3,image:data.assets[o.asset as keyof typeof data.assets].image}));
}
export function underwaterBook(){
 const objects:Record<string,ObjectSpec>={};const scenes:Record<string,SceneSpec>={};
 data.scenes.forEach((s,i)=>{underwaterObjects(i).forEach(o=>objects[o.id]=o);scenes['ocean-'+i]={name:s.title,caption:i===0||i===19?'GAIL’S BEDROOM':'UNDERWATER WORLD',alt:s.title,backgroundImage:s.background};});
 const pages=(level:ReadingLevel):StoryPage[]=>data.scenes.map((s,i)=>({title:s.title,scene:'ocean-'+i,lines:[...s.text[level]],translation:s.chinese[level].join(''),words:data.vocabulary.filter(v=>new RegExp('\\b'+v.word+'(?:s|es)?\\b','i').test(s.text[level].join(' '))).map(v=>v.word),objects:underwaterObjects(i).map(o=>o.id),placements:Object.fromEntries(underwaterObjects(i).map(o=>[o.id,o])),mission:{type:'tap',answer:underwaterId(s.focus),prompt:s.mission.prompt,hint:'點畫面中的小星星，探索故事線索。'},action:'explore'}));
 return {key:'underwater-world' as const,title:data.title,chineseTitle:data.titleZh,asset:'images/story/underwater-world-v1/',objects,scenes,pages,words:[...data.coreWords],entries:data.vocabulary.map(v=>[v.word,v.zh,'✦']),chinese:(page:number,level:ReadingLevel)=>[...data.scenes[page].chinese[level]],questions:(level:ReadingLevel):StoryQuestion[]=>quizzes[level].map(q=>({...q,kind:'choice',promptTranslation:q.chinesePrompt,explanationTranslation:q.explanationZh,options:q.options.map(text=>({text})),answer:[q.answer],imageAlt:data.scenes[q.scene-1].title,renderImage:()=>{const element=document.createElement('div');element.className='quiz-scene-image underwater-quiz-world';element.setAttribute('role','img');element.setAttribute('aria-label',data.scenes[q.scene-1].title);return {element,dispose:mountUnderwaterScene(element,q.scene-1,()=>{},false)};}})),choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})};
}
export function underwaterCard(word:string){
 const frame=document.createElement('div');frame.className='layered-word-visual';
 const item=data.vocabulary.find(v=>v.word===word);if(!item)return frame;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word;frame.append(cue);
 let loaded=false;const load=()=>{if(loaded||!frame.isConnected)return;loaded=true;const asset=data.assets[item.asset as keyof typeof data.assets];const art=document.createElement('span');art.className='underwater-word-art';
 if(word==='whirlpool'){art.classList.add('underwater-swirl');}
 else if('rect' in asset){const [x,y,w,h]=asset.rect;art.style.aspectRatio=`${w}/${h}`;art.style.backgroundImage=`url(images/story/underwater-world-v1/${asset.image})`;art.style.backgroundSize=`${asset.size/w*100}% ${asset.size/h*100}%`;art.style.backgroundPosition=`${x/(asset.size-w)*100}% ${y/(asset.size-h)*100}%`;}
 else{const img=document.createElement('img');img.src='images/story/underwater-world-v1/'+asset.image;img.alt=item.zh;art.append(img);}
 frame.prepend(art);const example=document.createElement('small');example.textContent=item.example;frame.append(example);};
 queueMicrotask(()=>{if(frame.isConnected)frame.closest('.vocab-card')?.addEventListener('click',load,{once:true});});return frame;
}
