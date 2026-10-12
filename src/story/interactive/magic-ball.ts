import type {StoryQuestion} from './dragon-quiz';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import data from './magic-ball-data.json';
import {magicBallQuestions,magicBallQuizRows} from './magic-ball-quiz';

export const magicBallBookFromPath=(path:string)=>path.endsWith('/magic-ball-storybook.html');
export function magicBallBook(){
 const objects=data.objects as Record<string,ObjectSpec>,scenes=data.scenes as Record<string,SceneSpec>;
 const pages=(level:ReadingLevel):StoryPage[]=>data.rows.map(row=>{
  const {text,chinese,...page}=row;
  const placements:Record<string,Partial<ObjectSpec>>={};
  for(const [id,spec] of Object.entries(page.placements))if(spec)placements[id]={...spec};
  return {...page,lines:[...text[level]],translation:chinese[level].join('|'),objects:[...page.objects],placements,mission:{...page.mission,type:'tap',prompt:page.mission.answer==='guide'?'Find the broom charm.':page.mission.prompt}};
 });
 const questions=(level:ReadingLevel):StoryQuestion[]=>magicBallQuestions(level).map((question,i)=>{const {image,...rest}=question,p=pages(level)[magicBallQuizRows[i].imageScene-1];return {...rest,sceneImage:{background:p.scene==='bedroom'?'images/story/books28-29-gail-v1/bedroom.webp':'images/story/magic-ball-v1/'+(scenes[p.scene].backgroundImage||p.scene+'.png'),assetBase:'images/story/magic-ball-v1/',objects:p.objects.map(id=>({...objects[id],...p.placements?.[id]}))}};});
 return {key:'magic-ball' as const,title:data.title,chineseTitle:data.chineseTitle,asset:'images/story/magic-ball-v1/',coverImage:'images/story/magic-ball-v1/cover.webp',objects,scenes,pages,words:data.words,questions,entries:data.entries,chinese:(page:number,level:ReadingLevel)=>[...data.rows[page].chinese[level]],choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})};
}
