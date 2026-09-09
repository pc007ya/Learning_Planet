import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {StoryMotion} from './choreography';
import {dragonText,type ReadingLevel} from './dragon-text';
export {dragonText,type ReadingLevel};
export const levelNames={A:'跟讀 · Read Along',B:'初階 · Early Reader',C:'進階 · Independent Reader'};
export const dragonObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:'../little-star-v1/gail-paper.png',x:78,y:70,w:20,h:49},
 pip:{id:'pip',word:'Pip',x:39,y:70,w:33,h:49,sprite:{sheet:'cast.png',cell:0,columns:2}},
 bird:{id:'bird',word:'bird',x:65,y:26,w:14,h:21,sprite:{sheet:'cast.png',cell:3,columns:2,clip:'inset(0 0 0 20%)'}},
 forest:{id:'forest',word:'forest',x:20,y:33,w:23,h:35},cave:{id:'cave',word:'cave',x:25,y:44,w:25,h:32},
 rock:{id:'rock',word:'rock',x:23,y:49,w:27,h:14},nest:{id:'nest',word:'nest',x:76,y:25,w:17,h:15},
 sky:{id:'sky',word:'sky',x:51,y:15,w:29,h:21},wing:{id:'wing',word:'wing',x:27,y:59,w:12,h:20},
};
export const dragonScenes:Record<string,SceneSpec>=Object.fromEntries([
 ['forest','星光森林','THE STARRY FOREST','金色光點照亮森林小徑',0],
 ['cave','山谷洞穴','PIP’S LITTLE CAVE','綠色山谷中的小洞穴',1],
 ['hill','練習的小山坡','ONE SMALL STEP','柔軟草地、低矮石頭與山坡',2],
 ['nest','小鳥的家','A LITTLE COURAGE','大樹枝上的鳥巢與山谷',3]
].map(([id,name,caption,alt,cell])=>[id,{name,caption,alt,sheet:'scenes.png',cell}])) as Record<string,SceneSpec>;
const titles=['The Starry Forest','A crying sound','Meet Pip','What is wrong?','Above the clouds','The windy day','I can’t do it','One small step','Open your wings','A little rock','A tiny jump','I did it!','A higher hill','A little tumble','One more time','A gentle wind','A baby bird','Afraid, but ready','Pip takes flight','Brave little wings'];
const settings=['forest','forest','cave','cave','hill','hill','cave','hill','hill','hill','hill','hill','hill','hill','hill','hill','nest','nest','nest','hill'];
const words=[['forest','quiet'],['hear','valley'],['dragon','cave'],['wing','sad'],['fly','sky'],['wind','afraid'],['afraid','try'],['wing','little'],['open','wing'],['rock','high'],['jump','safe'],['proud','try'],['hill','afraid'],['fall','try'],['practice','try'],['wind','glide'],['bird','nest'],['afraid','brave'],['fly','help'],['brave','believe']];
const answers=['forest','forest','cave','pip','sky','pip','pip','pip','wing','rock','pip','pip','rock','pip','pip','sky','bird','pip','nest','pip'];
export function dragonPages(level:ReadingLevel):StoryPage[]{return dragonText.map((versions,i)=>{
 const ids=['gail',...(i>=2?['pip']:[]),...(i<2?['forest']:settings[i]==='cave'?['cave']:settings[i]==='nest'?['bird','nest']:['rock','sky']),...(i===8?['wing']:[])];
 const placements:StoryPage['placements']={};
 if(i===4||i===5||i===15||i===18)placements.pip={x:i===18?38:46,y:i===18?64:39,sprite:{sheet:'cast.png',cell:2,columns:2},w:39,h:58};
 if([8,9,10,11,12,17,19].includes(i))placements.pip={sprite:{sheet:'cast.png',cell:1,columns:2},w:38,h:57};
 if(i===9||i===10)placements.pip={...placements.pip,x:23,y:28};
 if(i===18)placements.bird={x:69,y:28};
 return {title:titles[i],scene:settings[i],lines:[...versions[level]],words:words[i],objects:ids,placements,action:'explore',mission:i===18?{type:'drag',prompt:'Help the bird reach its nest.',hint:'把小鳥帶回鳥巢；也可以先點小鳥，再點巢。',answer:'bird',target:'nest'}:{type:'find',prompt:`Find ${answers[i]==='pip'?'Pip':`the ${answers[i]}`}.`,hint:'點場景中的物件，聽聽英文。',answer:answers[i]}};
 });}
/** Select the sentence that describes the event, independently for each level. */
export function dragonChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{
 const result:Record<number,Record<number,StoryMotion[]>>={};
 const add=(p:number,pattern:RegExp,cues:StoryMotion[])=>{const ls=dragonText[p][level];const index=Math.max(0,ls.findIndex(s=>pattern.test(s)));result[p]={...(result[p]||{}),[index]:cues};};
 add(0,/walk|follow/i,[{actor:'gail',x:54,y:70,walk:true}]);
 add(1,/hear|stops/i,[{actor:'gail',x:61,y:70,rotate:-5}]);
 add(2,/find|discover|dragon/i,[{actor:'gail',x:61,y:70,walk:true}]);
 add(3,/ask/i,[{actor:'gail',x:63,y:72,rotate:-5}]);
 add(4,/fly|flying/i,[{actor:'pip',x:65,y:28}]);
 add(5,/wind|gust/i,[{actor:'pip',x:46,y:72,rotate:-12}]);
 add(6,/afraid|can’t/i,[{actor:'pip',x:36,y:72,rotate:-5}]);
 add(7,/open/i,[{actor:'gail',x:64,y:70,walk:true}]);
 add(8,/open|stretches/i,[{actor:'pip',x:39,y:67,scale:1.04}]);
 add(9,/stand|climbs/i,[{actor:'gail',x:52,y:70,walk:true}]);
 add(10,/jump/i,[{actor:'pip',x:40,y:42}]);
 const end=dragonText[10][level].length-1;result[10][end]=[{actor:'pip',x:48,y:68}];
 add(11,/smile|did|surprise/i,[{actor:'pip',x:48,y:65,rotate:5}]);
 add(12,/hill/i,[{actor:'gail',x:54,y:59,walk:true},{actor:'pip',x:28,y:44,walk:true}]);
 add(13,/fall|tumble/i,[{actor:'pip',x:42,y:72,rotate:-15}]);
 add(14,/try|sits/i,[{actor:'gail',x:61,y:72,walk:true}]);
 add(15,/lifts|glide/i,[{actor:'pip',x:65,y:42}]);
 add(16,/bird|gust/i,[{actor:'bird',x:69,y:29,rotate:-10}]);
 add(17,/try/i,[{actor:'pip',x:49,y:65,walk:true}]);
 add(18,/flies|runs/i,[{actor:'pip',x:66,y:30}]);
 result[18][dragonText[18][level].length-1]=[{actor:'pip',x:66,y:30},{actor:'bird',x:76,y:24}];
 add(19,/wings|sky|fly/i,[{actor:'pip',x:52,y:43}]);return result;
}
