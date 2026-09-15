import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {timeText,timeTitles,timeWords} from './time-text';
export const timeVocabulary='clock watch hand tick hour minute second early late today tomorrow yesterday morning evening breakfast lunch ticket suitcase photo enjoy'.split(' ');
export const timeObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:25,y:71,w:24,h:48},
keeper:{id:'keeper',word:'clockkeeper',image:'keeper.png',x:78,y:70,w:26,h:49},
friend:{id:'friend',word:'friend',image:'friend.png',x:78,y:72,w:23,h:43},
watch:{id:'watch',word:'watch',image:'watch.png',x:51,y:78,w:18,h:23},
clock:{id:'clock',word:'clock',image:'clock.svg',x:51,y:44,w:29,h:43},
calendar:{id:'calendar',word:'today',image:'calendar.svg',x:50,y:49,w:34,h:34},
breakfast:{id:'breakfast',word:'breakfast',image:'breakfast.png',x:50,y:75,w:27,h:20},
empty:{id:'empty',word:'plate',image:'empty.png',x:50,y:75,w:27,h:20},
lunch:{id:'lunch',word:'lunch',image:'lunch.png',x:50,y:73,w:28,h:21},
suitcase:{id:'suitcase',word:'suitcase',image:'suitcase.png',x:51,y:81,w:29,h:28},
ticket:{id:'ticket',word:'ticket',image:'ticket.png',x:55,y:57,w:19,h:18},
album:{id:'album',word:'photo',image:'album.png',x:51,y:75,w:32,h:26},
memories:{id:'memories',word:'enjoy',image:'memories.png',x:51,y:75,w:32,h:26},
table:{id:'table',word:'table',image:'table.png',x:51,y:83,w:39,h:29},
thermos:{id:'thermos',word:'thermos',image:'thermos.png',x:66,y:73,w:8,h:18},
};
export const timeScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'MAKE TIME FOR MEMORIES',alt:'熟悉的星空臥室'},castle:{name:'時間城堡',caption:'EVERY MOMENT MATTERS',alt:'金色時鐘城堡大廳'},garden:{name:'早晨花園',caption:'STAY FOR THE LITTLE MOMENTS',alt:'陽光照耀的城堡花園'},station:{name:'傍晚車站',caption:'THE JOURNEY IS PART OF THE DAY',alt:'金色傍晚的火車月台'},train:{name:'火車車廂',caption:'ENJOY THE TIME WE SHARE',alt:'窗外有鄉間風景的木製車廂'}};
export function timePages(level:ReadingLevel):StoryPage[]{return timeText.map((t,i)=>{
let scene='castle',objects=['gail','keeper','watch','clock'],answer='clock',placements:StoryPage['placements']={};
if(i===0||i===19){scene='bedroom';objects=['gail','watch'];answer='watch';placements.gail={image:gailPoseImage('kneeling'),x:30,y:80,w:29,h:36};if(i===19){objects.push('memories');placements.memories={x:67,y:86,w:24,h:20};}}
else if(i>=7&&i<=9){scene='garden';objects=['gail','friend','table','watch',i===9?'empty':'breakfast'];answer=i===7?'friend':i===8?'breakfast':'empty';placements.watch={x:65,y:65,w:12,h:15};if(i===8)objects.push('empty');}
else if(i===10||i===11){scene='station';objects=['gail','suitcase','album','watch'];answer=i===10?'watch':'album';placements.suitcase={x:78,y:82,w:27,h:28};placements.watch={x:52,y:48,w:13,h:16};}
else if(i>=12&&i<=14){objects=['gail','keeper','calendar','watch'];answer='calendar';placements.calendar={image:(i===12?'yesterday':i===14?'tomorrow':'calendar')+'.svg'};}
else if(i===15||i===16){scene='station';objects=['gail','friend','suitcase','ticket'];answer=i===15?'suitcase':'ticket';}
else if(i===17||i===18){scene='train';objects=['gail','friend','table',i===17?'lunch':'memories','thermos'];answer=i===17?'lunch':'memories';placements.gail={image:gailPoseImage('seated'),x:22,y:76,w:30,h:37};placements.friend={x:80,y:73,w:23,h:43};placements.thermos={x:67,y:66,w:8,h:18};}
if(i===3||i===4)answer='watch';
return {title:timeTitles[i],scene,lines:t[level],objects,placements,words:timeWords[i],mission:{type:'tap',answer,prompt:['Open the watch.','Find the clock.','Follow the hand.','Listen for the tick.','Wait one second.','Watch a full turn.','Compare an hour.','Meet your friend.','Watch breakfast change.','Notice the empty plate.','Notice the time.','Look inside the album.','Find yesterday.','Choose today.','Find tomorrow.','Pack your suitcase.','Find your ticket.','Share lunch.','Explore your memories.','Remember the day.'][i],hint:'點小星星，探索這一幕。'},action:'explore'};
});}
export const timeChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
