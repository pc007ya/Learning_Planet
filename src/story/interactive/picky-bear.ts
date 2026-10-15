import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
import content from './picky-bear-content.json';
import quizzes from './picky-bear-quiz.json';
import images from './picky-bear-images.json';

/** URL lookup only: never starts image requests or preloads another page. */
export const pickyFromPath=(path:string)=>path.endsWith('/picky-bear-storybook.html');
export const pickyCover=()=>images.cover;
export function pickyImage(page:number){
 if(!Number.isInteger(page)||page<0||page>=images.pages.length)throw new RangeError('Invalid story page');
 return images.pages[page];
}
export const pickyReadingTargets={A:'跟讀 · Read Along',B:'設計目標 BR–100L',C:'設計目標 190L–530L'};
export const pickyWordPages:Record<string,number>={"picky":6,"hungry":5,"crunchy":15,"sour":7,"sweet":13,"brave":14,"fresh":16,"colorful":19,"choose":18,"share":19,"picnic":12,"basket":2,"berries":14,"carrot":15,"sandwich":16,"lettuce":9,"cucumber":17,"bite":14,"lunch":18,"favorite":17};
export function pickyBook(){
 const objects:Record<string,ObjectSpec>={illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}};
 const scenes=content.scenes as Record<string,SceneSpec>;
 return {
  key:'picky-bear' as const,title:content.title,chineseTitle:content.chineseTitle,asset:content.asset,
  words:content.words,entries:content.entries,objects,scenes,
  pages:(level:ReadingLevel):StoryPage[]=>content.levels[level].pages.map(p=>({...p,objects:['illustration'],mission:{type:'tap',answer:'illustration',prompt:'Explore the picture.',hint:'看一看這頁的故事圖片，點圖片或用鍵盤探索。'},action:'explore'})),
  chinese:(page:number,level:ReadingLevel)=>content.levels[level].chinese[page],
  questions:(level:ReadingLevel):StoryQuestion[]=>quizzes[level].map(q=>({...q,kind:'choice',options:q.options.map(o=>({...o})),answer:[...q.answer]})),
  choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})
 };
}

/** A complete source illustration supplies context; no old cast or prop layers. */
export function pickyCard(word:string):HTMLElement{
 const wrap=document.createElement('div');wrap.className='layered-word-visual';
 const page=pickyWordPages[word];if(!page)return wrap;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word;wrap.append(cue);
 let loaded=false;
 const showImage=()=>{if(loaded||!wrap.isConnected)return;loaded=true;const pic=pickyImage(page-1);const img=document.createElement('img');img.src=pic.image;img.alt=pic.alt;wrap.prepend(img);};
 wrap.onclick=showImage;
 // The shared word-book creates all20 cards. Only a clicked card may fetch its art.
 queueMicrotask(()=>{if(wrap.isConnected)wrap.closest('.vocab-card')?.addEventListener('click',showImage,{once:true});});
 return wrap;
}
