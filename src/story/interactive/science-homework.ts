import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
import content from './science-homework-content.json';
import quizzes from './science-homework-quiz.json';
import images from './science-homework-images.json';

/** URL lookup only: never starts image requests or preloads another page. */
export const scienceFromPath=(path:string)=>path.endsWith('/science-homework-storybook.html');
export const scienceCover=()=>images.cover;
export function scienceImage(page:number){
 if(!Number.isInteger(page)||page<0||page>=images.pages.length)throw new RangeError('Invalid story page');
 return images.pages[page];
}
export const scienceReadingTargets={A:'跟讀 · Read Along',B:'設計目標 BR–100L',C:'設計目標 190L–530L'};
export const scienceWordPages:Record<string,number>={"write":18,"study":3,"science":1,"homework":1,"black":8,"blackboard":1,"bookstore":5,"bored":3,"boring":2,"desk":1,"dirty":11,"spider":8,"librarian":6,"pen":14,"pencil":14,"read":7,"web":16,"notebook":19,"ink":15,"observe":10};
export function scienceBook(){
 const objects:Record<string,ObjectSpec>={illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}};
 const scenes=content.scenes as Record<string,SceneSpec>;
 return {
  key:'science-homework' as const,title:content.title,chineseTitle:content.chineseTitle,asset:content.asset,
  words:content.words,entries:content.entries,objects,scenes,
  pages:(level:ReadingLevel):StoryPage[]=>content.levels[level].pages.map(p=>({...p,objects:['illustration'],mission:{type:'tap',answer:'illustration',prompt:'Explore the picture.',hint:'看一看這頁的故事圖片，點圖片或用鍵盤探索。'},action:'explore'})),
  chinese:(page:number,level:ReadingLevel)=>content.levels[level].chinese[page],
  questions:(level:ReadingLevel):StoryQuestion[]=>quizzes[level].map(q=>({...q,kind:'choice',options:q.options.map(o=>({...o})),answer:[...q.answer]})),
  choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})
 };
}

/** A complete source illustration supplies context; no old cast or prop layers. */
export function scienceCard(word:string):HTMLElement{
 const wrap=document.createElement('div');wrap.className='layered-word-visual';
 const page=scienceWordPages[word];if(!page)return wrap;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word;wrap.append(cue);
 let loaded=false;
 const showImage=()=>{if(loaded||!wrap.isConnected)return;loaded=true;const pic=scienceImage(page-1);const img=document.createElement('img');img.src=pic.image;img.alt=pic.alt;wrap.prepend(img);};
 wrap.onclick=showImage;
 // The shared word-book creates all20 cards. Only a clicked card may fetch its art.
 queueMicrotask(()=>{if(wrap.isConnected)wrap.closest('.vocab-card')?.addEventListener('click',showImage,{once:true});});
 return wrap;
}
