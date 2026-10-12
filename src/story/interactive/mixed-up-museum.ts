import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
import content from './mixed-up-museum-content.json';
import quizzes from './mixed-up-museum-quiz.json';
import images from './mixed-up-museum-images.json';

/** URL lookup only: never starts image requests or preloads another page. */
export const museumFromPath=(path:string)=>path.endsWith('/mixed-up-museum-storybook.html');
export const museumCover=()=>images.cover;
/** Complete formal cover: no temporary character img or story-page src. */
export function museumCoverMarkup(){
 return `<div class="cover-copy"><span class="eyebrow">GAIL’S MAGICAL STORYBOOK · 33</span><h1>${content.title}</h1><p>${content.chineseTitle}</p><div class="cover-meta">20 場景 · A / B / C · 20 單字 · 16 題</div></div><div class="closed-book"><div class="cover-border"></div></div>`;
}

export function museumImage(page:number){
 if(!Number.isInteger(page)||page<0||page>=images.pages.length)throw new RangeError('Invalid story page');
 return images.pages[page];
}
export const museumReadingTargets={A:'跟讀 · Read Along',B:'設計目標 BR–100L',C:'設計目標 190L–530L'};
export const museumWordPages:Record<string,number>={"museum":3,"exhibit":3,"label":5,"fossil":9,"bone":10,"footprint":10,"statue":12,"frame":8,"display":17,"drawer":14,"group":8,"category":8,"material":8,"wooden":8,"metal":8,"smooth":7,"rough":7,"inspect":6,"identify":15,"pair":12};
export function museumBook(){
 const objects:Record<string,ObjectSpec>={illustration:{id:'illustration',word:'picture',x:50,y:50,w:100,h:100}};
 const scenes=content.scenes as Record<string,SceneSpec>;
 return {
  key:'mixed-up-museum' as const,title:content.title,chineseTitle:content.chineseTitle,asset:content.asset,
  words:content.words,entries:content.entries,objects,scenes,
  pages:(level:ReadingLevel):StoryPage[]=>content.levels[level].pages.map(p=>({...p,objects:['illustration'],mission:{type:'tap',answer:'illustration',prompt:'Explore the picture.',hint:'看一看這頁的故事圖片，點圖片或用鍵盤探索。'},action:'explore'})),
  chinese:(page:number,level:ReadingLevel)=>content.levels[level].chinese[page],
  questions:(level:ReadingLevel):StoryQuestion[]=>quizzes[level].map(q=>({...q,kind:'choice',options:q.options.map(o=>({...o})),answer:[...q.answer]})),
  choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})
 };
}

/** A complete source illustration supplies context; no old cast or prop layers. */
export function museumCard(word:string):HTMLElement{
 const wrap=document.createElement('div');wrap.className='layered-word-visual';
 const page=museumWordPages[word];if(!page)return wrap;
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=word;wrap.append(cue);
 let loaded=false;
 const showImage=()=>{if(loaded||!wrap.isConnected)return;loaded=true;const pic=museumImage(page-1);const img=document.createElement('img');img.src=pic.image;img.alt=pic.alt;wrap.prepend(img);};
 wrap.onclick=showImage;
 // The shared word-book creates all20 cards. Only a clicked card may fetch its art.
 queueMicrotask(()=>{if(wrap.isConnected)wrap.closest('.vocab-card')?.addEventListener('click',showImage,{once:true});});
 return wrap;
}
