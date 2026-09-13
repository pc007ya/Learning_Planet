import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {wizardText} from './wizard-text';
const prop=(cell:number)=>`prop-${cell}.png`;
const cast=(cell:number)=>({sheet:'wizard.png',cell,columns:2});
export const wizardObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:23,y:64,w:23,h:55.2},
 wizard:{id:'wizard',word:'wizard',sprite:cast(0),x:77,y:60,w:40,h:60},
 potion:{id:'potion',word:'potion',image:prop(0),x:51,y:72,w:25,h:37.5},
 broom:{id:'broom',word:'broom',image:prop(1),x:50,y:62,w:20,h:40},
 can:{id:'can',word:'water',image:prop(2),x:46,y:76,w:20,h:30},
 flower:{id:'flower',word:'flower',image:prop(3),x:57,y:76,w:24,h:36},
 bloom:{id:'bloom',word:'flower',image:prop(4),x:55,y:76,w:24,h:36},
 list:{id:'list',word:'list',image:prop(5),x:48,y:66,w:24,h:36},
 spoon:{id:'spoon',word:'stir',image:prop(6),x:38,y:82,w:14,h:21},
 books:{id:'books',word:'book',image:prop(7),x:47,y:80,w:22,h:33},
 wand:{id:'wand',word:'stop',image:prop(8),x:45,y:79,w:18,h:27},
 shelf:{id:'shelf',word:'shelf',x:53,y:30,w:24,h:22},
 door:{id:'door',word:'door',x:76,y:37,w:27,h:35},
 stove:{id:'stove',word:'heat',x:24,y:43,w:19,h:22}
};
export const wizardScenes:Record<string,SceneSpec>={
 cottage:{name:'魔法師的小屋',caption:'A LITTLE VISIT',alt:'圓門石屋與留白石板路'},
 workshop:{name:'藥水工作室',caption:'ONE THING AT A TIME',alt:'暖色魔法工作室，後方有爐子和瓶罐'},
 storeroom:{name:'掃帚儲藏室',caption:'A SMALL STEP',alt:'書架與寬敞木地板的魔法儲藏室'},
 garden:{name:'魔法花園',caption:'START WITH ONE FLOWER',alt:'石牆環繞的陽光花園與草地'}
};
const titles=['A little visit','Always later','A bubbling potion','A burnt surprise','Turn off the heat','The magic broom','A bigger mess','The stop spell','Thirsty flowers','Why not now?','Too many jobs','One small step','Make a start','One flower at a time','One book at a time','Watch and stir','Stop on time','A proud wizard','I will do it now','A little start'];
const settings=['cottage','storeroom','workshop','workshop','workshop','storeroom','storeroom','storeroom','garden','garden','storeroom','garden','garden','garden','storeroom','workshop','storeroom','garden','storeroom','cottage'];
const vocabulary=[['wizard'],['later','mess'],['potion','stir'],['later','burn'],['stop'],['broom','later'],['mess','broom'],['stop'],['garden','water','flower'],['now','help'],['list'],['step','first'],['start','now'],['next','finish'],['help','next'],['stir','potion'],['broom','stop'],['proud','garden'],['now','start'],['step','start']];
const things=[['door'],['books','shelf'],['potion','spoon','stove'],['potion','spoon','stove'],['potion','wand'],['broom','books'],['broom','books'],['broom','wand'],['flower','can'],['flower','can'],['list','books'],['list','can'],['can','list'],['can','flower'],['books','shelf'],['potion','spoon','stove'],['broom','wand'],['bloom','can'],['books','shelf'],['door']];
const target=['wizard','books','spoon','potion','wand','broom','broom','wand','flower','can','list','list','can','can','books','spoon','wand','bloom','books','wizard'];
export function wizardPages(level:ReadingLevel):StoryPage[]{return wizardText.map((text,i)=>{
 const placements:StoryPage['placements']={};
 if([1,3,5,9].includes(i))placements.wizard={sprite:cast(1)};
 if([4,6,10].includes(i))placements.wizard={sprite:cast(2)};
 if([11,12,13].includes(i))placements.wizard={sprite:cast(3),w:35,h:52.5,y:65};
 if([9,11,13].includes(i))placements.gail={image:gailPoseImage('seated'),w:24,h:38.7,y:70};
 if([2,3,4,15].includes(i))placements.gail={x:20};
 if(i===13){placements.can={x:38,y:77};placements.flower={x:56,y:77};}
 let mission:StoryPage['mission']={type:'find',prompt:`Find the ${wizardObjects[target[i]].word}.`,hint:'點場景中的物件，聽聽英文。',answer:target[i]};
 if(i===7||i===16)mission={type:'sequence',prompt:'Tap the wand, then the broom.',hint:'先點魔杖，再點掃帚，用停止咒語。',answer:'broom',steps:['wand','broom']};
 if(i===11)mission={type:'sequence',prompt:'Tap the list, then the can.',hint:'先看清單，再準備水壺，一次一步。',answer:'can',steps:['list','can']};
 if(i===13)mission={type:'drag',prompt:'Water one flower.',hint:'把水壺拖到花朵；也可先點水壺，再點花朵。',answer:'can',target:'flower'};
 if(i===14||i===18)mission={type:'drag',prompt:'Put one book on the shelf.',hint:'把書拖上書架；也可先點書，再點書架。',answer:'books',target:'shelf'};
 if(i===15)mission={type:'sequence',prompt:'Tap the spoon, then the potion.',hint:'先点湯匙，再點藥水，陪魔法師注意攪拌。',answer:'potion',steps:['spoon','potion']};
 return {title:titles[i],scene:settings[i],lines:[...text[level]],words:vocabulary[i],objects:['gail','wizard',...things[i]],placements,mission,action:'explore'};
});}
export function wizardChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{
 const result:Record<number,Record<number,StoryMotion[]>>={};
 const add=(p:number,pattern:RegExp,cues:StoryMotion[])=>{const line=Math.max(0,wizardText[p][level].findIndex(s=>pattern.test(s)));result[p]={...result[p],[line]:cues};};
 add(0,/meets|visits|follows/i,[{actor:'gail',x:36,y:64,walk:true}]);
 add(3,/burn|brown/i,[{actor:'potion',x:51,y:72,rotate:4}]);
 add(5,/broom/i,[{actor:'broom',x:58,y:67,rotate:-18}]);
 add(6,/broom|races/i,[{actor:'broom',x:42,y:45,rotate:36},{actor:'books',x:56,y:54,rotate:-18}]);
 add(7,/stop/i,[{actor:'broom',x:59,y:69,rotate:0}]);
 add(8,/garden|outside/i,[{actor:'gail',x:34,y:64,walk:true}]);
 add(12,/fill|water/i,[{actor:'can',x:47,y:70,rotate:-8}]);
 add(13,/water/i,[{actor:'can',x:65,y:63,rotate:-18}]);
 add(14,/shelf/i,[{actor:'books',x:53,y:30}]);
 add(15,/stir/i,[{actor:'spoon',x:50,y:61,rotate:25}]);
 add(16,/broom/i,[{actor:'broom',x:52,y:69,rotate:-12}]);
 add(18,/away|shelf/i,[{actor:'books',x:53,y:30}]);
 add(19,/goodbye|door/i,[{actor:'gail',x:34,y:64,walk:true}]);
 return result;
}
