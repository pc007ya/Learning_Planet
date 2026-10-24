import {splitBookSentences} from './shared-book-sentences';
import {mountAmusementScene} from './amusement-park-image';
import data from '../amusement-park/data.json';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
export const amusementFromPath=(path:string)=>path.endsWith('/amusement-park-storybook.html');
export const amusementCoverMarkup=()=>'<div class="cover-copy"><span class="eyebrow"></span><h1></h1><p></p><div class="cover-meta"></div></div><div class="closed-book"><div class="cover-border"></div></div>';
export const amusementCover=()=> 'images/story/amusement-park-v1/portrait.png';
export const amusementId=(id:string)=>id.replaceAll(' ','-');
export function amusementObjects(page:number):ObjectSpec[]{
 return data.scenes[page].objects.map(o=>({id:amusementId(o.id),word:o.word,x:o.x,y:o.y,w:o.w,h:o.h,z:'z' in o?o.z:2,image:data.assets[o.asset as keyof typeof data.assets].image}));
}
export function amusementBook(){
 const objects:Record<string,ObjectSpec>={};const scenes:Record<string,SceneSpec>={};
 data.scenes.forEach((s,i)=>{amusementObjects(i).forEach(o=>objects[o.id]=o);scenes['ocean-'+i]={name:s.title,caption:i===0||i===19?'GAIL’S BEDROOM':'UNDERWATER WORLD',alt:s.title,backgroundImage:s.background};});
 const pages=(level:ReadingLevel):StoryPage[]=>data.scenes.map((s,i)=>({title:s.title,scene:'ocean-'+i,lines:splitBookSentences(s.text[level]),translation:s.chinese[level].join(''),words:data.vocabulary.filter(v=>new RegExp('\\b'+v.word+'(?:s|es)?\\b','i').test(s.text[level].join(' '))).map(v=>v.word),objects:amusementObjects(i).map(o=>o.id),placements:Object.fromEntries(amusementObjects(i).map(o=>[o.id,o])),mission:{type:'tap',answer:amusementId(s.focus),prompt:s.mission,hint:'點畫面中的小星星，探索故事線索。'},action:'explore'}));
 return {key:'amusement-park' as const,title:data.title,chineseTitle:data.titleZh,asset:'images/story/amusement-park-v1/',objects,scenes,pages,words:[...data.coreWords],entries:data.vocabulary.map(v=>[v.word,v.zh,'✦']),chinese:(page:number,level:ReadingLevel)=>[...data.scenes[page].chinese[level]],questions:(level:ReadingLevel):StoryQuestion[]=>data.quiz.map(q=>({id:'park-'+q.number,kind:'choice',prompt:q.prompt[level],promptTranslation:q.zh,explanation:q.explanation,options:q.options.map(text=>({text})),answer:[q.answer],imageAlt:data.scenes[q.scene-1].title,renderImage:()=>{const element=document.createElement('div');element.className='quiz-scene-image amusement-quiz-world';element.setAttribute('role','img');element.setAttribute('aria-label',q.picture?'測驗圖 '+q.picture:data.scenes[q.scene-1].title);if(q.picture){element.style.backgroundImage='url(images/story/amusement-park-v1/quiz.png)';element.style.backgroundSize='300% 200%';element.style.backgroundPosition=`${(q.picture-1)%3*50}% ${Math.floor((q.picture-1)/3)*100}%`;return {element,dispose:()=>element.remove()};}return {element,dispose:mountAmusementScene(element,q.scene-1,()=>{},false)};}})),choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})};
}
export function amusementCard(word:string){
 const frame=document.createElement('div');frame.className='layered-word-visual';
 const item=data.vocabulary.find(v=>v.word===word);if(!item)return frame;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word;frame.append(cue);
 let loaded=false;const load=()=>{if(loaded||!frame.isConnected)return;loaded=true;const asset=data.assets[item.asset as keyof typeof data.assets];const art=document.createElement('span');art.className='amusement-word-art';
 const img=document.createElement('img');img.src='images/story/amusement-park-v1/'+asset.image;img.alt=item.zh;art.append(img);
 frame.prepend(art);const example=document.createElement('small');example.textContent=item.example;frame.append(example);};
 queueMicrotask(()=>{if(frame.isConnected)frame.closest('.vocab-card')?.addEventListener('click',load,{once:true});});return frame;
}
