import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
import content from './little-robot-content.json';
import quizzes from './little-robot-quiz.json';
import images from './little-robot-images.json';

/** URL lookup only: never starts image requests or preloads another page. */
export const robotFromPath=(path:string)=>path.endsWith('/little-robot-storybook.html');
export const robotCover=()=>images.cover;
/** Full formal cover shell: never creates a temporary character or scene img. */
export function robotCoverMarkup(){
 return `<div class="cover-copy"><span class="eyebrow">GAIL’S MAGICAL STORYBOOK · 35</span><h1>${content.title}</h1><p>${content.chineseTitle}</p><div class="cover-meta">20 場景 · A / B / C · 20 單字 · 16 題</div></div><div class="closed-book"><div class="cover-border"></div></div>`;
}

export function robotImage(page:number){
 if(!Number.isInteger(page)||page<0||page>=images.pages.length)throw new RangeError('Invalid story page');
 return images.pages[page];
}
export const robotReadingTargets={A:'跟讀 · Read Along',B:'設計目標 BR–100L',C:'設計目標 190L–530L'};
export const robotWordPages:Record<string,number>={"robot":3,"button":13,"switch":7,"lever":7,"gear":1,"machine":7,"press":14,"command":13,"program":13,"sequence":11,"code":13,"instruction":9,"task":4,"sensor":8,"battery":8,"charge":8,"reset":17,"respond":18,"exact":16,"follow":9};
export function robotBook(){
 const objects:Record<string,ObjectSpec>={illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}};
 const scenes=content.scenes as Record<string,SceneSpec>;
 return {
  key:'little-robot' as const,title:content.title,chineseTitle:content.chineseTitle,asset:content.asset,
  words:content.words,entries:content.entries,extensionWords:content.extensionWords,extensionNote:content.extensionNote,objects,scenes,
  pages:(level:ReadingLevel):StoryPage[]=>content.levels[level].pages.map(p=>({...p,objects:['illustration'],mission:{type:'tap',answer:'illustration',prompt:'Explore the picture.',hint:'看一看這頁的故事圖片，點圖片或用鍵盤探索。'},action:'explore'})),
  chinese:(page:number,level:ReadingLevel)=>content.levels[level].chinese[page],
  questions:(level:ReadingLevel):StoryQuestion[]=>quizzes[level].map(q=>({...q,kind:'choice',options:q.options.map(o=>({...o})),answer:[...q.answer]})),
  choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})
 };
}

/** A complete source illustration supplies context; no old cast or prop layers. */
export function robotCard(word:string):HTMLElement{
 const wrap=document.createElement('div');wrap.className='layered-word-visual';
 const page=robotWordPages[word];if(!page)return wrap;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word;wrap.append(cue);
 let loaded=false;
 const showImage=()=>{if(loaded||!wrap.isConnected)return;loaded=true;const pic=robotImage(page-1);const img=document.createElement('img');img.src=pic.image;img.alt=pic.alt;wrap.prepend(img);};
 wrap.onclick=showImage;
 // The shared word-book creates all20 cards. Only a clicked card may fetch its art.
 queueMicrotask(()=>{if(wrap.isConnected)wrap.closest('.vocab-card')?.addEventListener('click',showImage,{once:true});});
 return wrap;
}
