import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';
import {layeredThreeData,layeredThreeQuiz,layeredThreeQuestionScenes} from './layered-three-data';
export type LayeredBook='witch'|'mirror'|'star-library';
export const layeredBookFromPath=(path:string):LayeredBook|undefined=>(['witch','mirror','star-library'] as const).find(k=>path.endsWith(`/${k}-storybook.html`));
const vocabulary:Record<LayeredBook,string>= {
 witch:'witch spell broomstick hover wobble whisper sparkle swirl chant copy attempt progress skill lesson unsure capable almost yet landing succeed',
 mirror:'mirror reflection portrait medal puzzle dance paint compare similar different equal unique strength talent pace admire value own improve herself',
 'star-library':'library librarian shelf cover page title chapter character setting event clue predict retell meaning summary reason evidence understand remember explain'
};
const chinese:Record<LayeredBook,string>={witch:'女巫 咒語 掃帚 懸停 搖晃 低聲說 閃光 旋轉 吟誦 模仿 嘗試 進步 技巧 課程 沒有把握的 有能力的 幾乎 還 降落 成功',mirror:'鏡子 倒影 肖像 獎牌 拼圖 跳舞 畫畫 比較 相似的 不同的 相等的 獨特的 優點 才能 步調 欣賞 珍惜 自己的 改善 她自己','star-library':'圖書館 圖書館員 書架 封面 書頁 書名 章節 角色 場景 事件 線索 預測 重述 意思 摘要 理由 證據 理解 記得 解釋'};
const targets:Record<LayeredBook,string[]>={
 witch:['guide','guide','mira','mira','teacher','broom','cushion','mira','card-grip','card-grip','broom','broom','mira','hoop1','hoop2','cushion','hoop2','cushion','beginner','guide'],
 mirror:['guide','guide','rabbit','rabbit','swan','owl','gail','mirror','mirror','tile-1','rabbit','gail','rabbit','swan','owl','tile-5','tile-9','mirror','gail','guide'],
 'star-library':['bookmark','bookmark','librarian','book','book','book','gail','book','book','book','book','card-beginning','card-middle','book','card-ending','card-beginning','star0','rabbit','star8','bookmark']
};
export function layeredBook(key:LayeredBook){
 const data=layeredThreeData[key];
 const layouts=data.layouts as {number:number;scene:string;description:string;objects:ObjectSpec[];motion:string}[];
 const words=vocabulary[key].split(' '),glosses=chinese[key].split(' ');
 const objects:Record<string,ObjectSpec>={};layouts.forEach(p=>p.objects.forEach(o=>{objects[o.id]={...o};}));
 const scenes:Record<string,SceneSpec>={};Object.keys(data.backgrounds).forEach(k=>{scenes[k]={name:k==='bedroom'?'瑜瑜的房間':data.chineseTitle,caption:k==='bedroom'?'GAIL’S BEDROOM':key==='witch'?'ONE SMALL STEP AT A TIME':key==='mirror'?'YOUR OWN PACE':'READ, THINK, UNDERSTAND',alt:k==='bedroom'?'固定星星房間':data.chineseTitle+'的場景'};});
 const pages=(level:ReadingLevel):StoryPage[]=>layouts.map((layout,i)=>{
  const row=data.rows[i],li={A:1,B:2,C:3}[level];
  let items=layout.objects.map(o=>({...o}));
  // The final practice turn is a flight, not another lesson at the cards.
  if(key==='witch'&&i===16)items=layouts[14].objects.map(o=>({...o}));
  const answer=targets[key][i];
  return {title:row[0],scene:layout.scene,lines:row[li].split('|'),translation:row[li+3],words:row[7].split(' '),objects:items.map(o=>o.id),placements:Object.fromEntries(items.map(o=>[o.id,o])),mission:{type:'tap',answer,prompt:`Explore ${objects[answer]?.word||answer}.`,hint:'找找畫面中發亮的小星星，點物件聽單字。'},action:'explore'};
 });
 const questions=(level:ReadingLevel):StoryQuestion[]=>layeredThreeQuiz[key].map((row,i)=>{
  const scene=pages(level)[layeredThreeQuestionScenes[key][i]-1];
  const assetBase=`images/story/${key}-v1/`;
  const sceneImage={background:scene.scene==='bedroom'?'images/story/shared-gail-v1/bedroom.png':assetBase+scene.scene+'.png',assetBase,objects:scene.objects.map(id=>({...objects[id],...scene.placements?.[id]}))};
  const options=row.slice(2),correct=options.shift()!;options.splice(i%4,0,correct);
  return {id:`${key}-${i}`,kind:'choice',sceneImage,imageAlt:scene.title,prompt:row[level==='A'?0:1],options:options.map(text=>({text})),answer:[i%4],explanation:correct};
 });
 return {key,title:data.title,chineseTitle:data.chineseTitle,asset:`images/story/${key}-v1/`,objects,scenes,pages,words,questions,
  entries:words.map((w,i)=>[w,glosses[i],'✦']),chinese:(page:number,level:ReadingLevel)=>data.rows[page][{A:4,B:5,C:6}[level]].split('|'),
  choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})};
}
