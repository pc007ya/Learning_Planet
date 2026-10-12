import type {StoryQuestion} from './dragon-quiz';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import data from './market-data.json';
import {marketQuestions,marketQuizRows} from './market-quiz';
export const marketBookFromPath=(path:string)=>path.endsWith('/market-storybook.html');
export function marketBook(){
 const asset='images/story/market-v1/';
 const objects=data.objects as Record<string,ObjectSpec>,scenes=data.scenes as Record<string,SceneSpec>;
 const pages=(level:ReadingLevel):StoryPage[]=>data.rows.map(row=>{
  const {text,chinese,...page}=row;const placements:Record<string,Partial<ObjectSpec>>={};
  for(const [id,spec]of Object.entries(page.placements))if(spec)placements[id]={...spec};
  return {...page,lines:[...text[level]],translation:chinese[level].join('|'),objects:[...page.objects],placements,mission:{...page.mission,type:'tap',prompt:page.mission.answer==='guide'?'Find the gold token.':page.mission.prompt}};
 });
 const questions=(level:ReadingLevel):StoryQuestion[]=>marketQuestions(level).map((question,i)=>{
  const {image,...rest}=question,p=pages(level)[marketQuizRows[i].imageScene-1];
  return {...rest,sceneImage:{background:p.scene==='bedroom'?'images/story/books28-29-gail-v1/bedroom.webp':asset+(scenes[p.scene].backgroundImage||p.scene+'.png'),assetBase:asset,objects:p.objects.map(id=>({...objects[id],...p.placements?.[id]}))}};
 });
 return {key:'market' as const,title:data.title,chineseTitle:data.chineseTitle,asset,coverImage:asset+'cover.webp',objects,scenes,pages,words:data.words,questions,entries:data.entries,chinese:(page:number,level:ReadingLevel)=>[...data.rows[page].chinese[level]],choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})};
}
