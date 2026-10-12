import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
import content from './snow-before-content.json';
import quizzes from './snow-before-quiz.json';
import images from './snow-before-images.json';

/** URL lookup only: never starts image requests or preloads another page. */
export const snowBeforeFromPath=(path:string)=>path.endsWith('/snow-before-storybook.html');
export const snowBeforeCover=()=>images.cover;
export function snowBeforeImage(page:number){
 if(!Number.isInteger(page)||page<0||page>=images.pages.length)throw new RangeError('Invalid story page');
 return images.pages[page];
}
export const snowBeforeReadingTargets={A:'跟讀 · Read Along',B:'設計目標 BR–100L',C:'設計目標 190L–530L'};
export const snowBeforeWordPages:Record<string,number>={town:3,food:9,crop:6,wine:8,store:12,prepare:17,neighbor:15,house:13,weather:18,cold:13,box:3,snow:18,farm:4,farmer:6,pick:5,gather:7,collect:7,sort:9,supply:12,save:10};
export function snowBeforeBook(){
 const objects:Record<string,ObjectSpec>={illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}};
 const scenes=content.scenes as Record<string,SceneSpec>;
 return {
  key:'snow-before' as const,title:content.title,chineseTitle:content.chineseTitle,asset:content.asset,
  words:content.words,entries:content.entries,objects,scenes,
  pages:(level:ReadingLevel):StoryPage[]=>content.levels[level].pages.map(p=>({...p,objects:['illustration'],mission:{type:'tap',answer:'illustration',prompt:'Explore the picture.',hint:'看一看這頁的故事圖片，點圖片或用鍵盤探索。'},action:'explore'})),
  chinese:(page:number,level:ReadingLevel)=>content.levels[level].chinese[page],
  questions:(level:ReadingLevel):StoryQuestion[]=>quizzes[level].map(q=>({...q,kind:'choice',options:q.options.map(o=>({...o})),answer:[...q.answer]})),
  choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})
 };
}

/** A complete source illustration supplies context; no old cast or prop layers. */
export function snowBeforeCard(word:string):HTMLElement{
 const wrap=document.createElement('div');wrap.className='layered-word-visual';
 const page=snowBeforeWordPages[word];if(!page)return wrap;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word==='wine'?'wine · adults only':word;wrap.append(cue);
 let loaded=false;
 const showImage=()=>{if(loaded||!wrap.isConnected)return;loaded=true;const pic=snowBeforeImage(page-1);const img=document.createElement('img');img.src=pic.image;img.alt=pic.alt;wrap.prepend(img);};
 wrap.onclick=showImage;
 // The shared word-book creates all20 cards. Only a clicked card may fetch its art.
 queueMicrotask(()=>{if(wrap.isConnected)wrap.closest('.vocab-card')?.addEventListener('click',showImage,{once:true});});
 return wrap;
}
