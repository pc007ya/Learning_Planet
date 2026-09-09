import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {StoryMotion} from './choreography';
import type {ReadingLevel} from './dragon-text';
import {princessText} from './princess-text';
const cast=(cell:number):NonNullable<ObjectSpec['sprite']>=>{
 const support:Record<number,[number,number,number,number]>={1:[418,65,418,379],2:[835,45,419,399],5:[842,463,412,379],6:[65,829,330,425],7:[445,855,390,399],8:[845,853,405,401]};
 if(support[cell])return {sheet:'support-cast.png',cell,columns:3,rect:support[cell],size:1254};
 const slot=({0:0,2:3,3:1,4:2} as Record<number,number>)[cell]||0;
 return {sheet:'ella-final.png',cell:slot,columns:2,rect:[slot%2*611,slot<2?0:651,611,slot<2?651:636],size:[1222,1287]};
};
const prop=(cell:number)=>({sheet:'props.png',cell,columns:3});
export const princessObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:'../little-star-v1/gail-paper.png',x:27,y:62,w:23,h:55.2},
 ella:{id:'ella',word:'princess',sprite:cast(0),x:73,y:64,w:35,h:52.5},
 caregiver:{id:'caregiver',word:'caregiver',sprite:cast(6),x:87,y:50,w:25,h:37.5},
 boy:{id:'boy',word:'friend',sprite:cast(7),x:15,y:69,w:26,h:39},
 friend:{id:'friend',word:'friend',sprite:cast(8),x:86,y:69,w:26,h:39},
 gift:{id:'gift',word:'gift',sprite:prop(0),x:47,y:72,w:20,h:30},
 block:{id:'block',word:'block',sprite:prop(1),x:50,y:79,w:12,h:18},
 tower:{id:'tower',word:'tower',sprite:prop(2),x:50,y:68,w:27,h:40.5},
 blocks:{id:'blocks',word:'blocks',sprite:prop(3),x:50,y:79,w:30,h:30},
 pinwheel:{id:'pinwheel',word:'pinwheel',sprite:prop(4),x:50,y:62,w:20,h:30},
 hat:{id:'hat',word:'hat',sprite:prop(5),x:47,y:68,w:19,h:28.5},
 basket:{id:'basket',word:'basket',sprite:prop(6),x:51,y:79,w:22,h:33},
 orange:{id:'orange',word:'orange',sprite:prop(7),x:55,y:84,w:11,h:16.5},
 chair:{id:'chair',word:'chair',sprite:prop(8),x:52,y:73,w:22,h:33},
 castle:{id:'castle',word:'castle',x:28,y:29,w:34,h:44},
 window:{id:'window',word:'window',x:72,y:25,w:30,h:36},
 market:{id:'market',word:'market',x:26,y:32,w:36,h:28},
 rain:{id:'rain',word:'rain',x:70,y:23,w:30,h:26}
};
export const princessScenes:Record<string,SceneSpec>={
 courtyard:{name:'城堡庭院',caption:'A QUIET CASTLE',alt:'象牙白城堡與花園，前方是寬闊石板路',sheet:'environments.png',cell:0},
 room:{name:'城堡遊戲室',caption:'A PLACE FOR A FRIEND',alt:'粉色窗簾、拱窗與寬闊遊戲地毯',sheet:'environments.png',cell:1},
 market:{name:'市集廣場',caption:'BETTER TOGETHER',alt:'陽光下的水果攤與寬闊市集廣場',sheet:'environments.png',cell:2},
 awning:{name:'雨棚下',caption:'A LITTLE SHARED JOY',alt:'雨中的市集，棚下有乾燥空地與小桌子',sheet:'environments.png',cell:3}
};
const titles=['A quiet castle','The princess at the window','So many gifts','A surprise','Can I help?','Down come the blocks','More surprises','Please stop','Time to listen','A friend to play with','Out together','A rolling orange','Helping hands','A little pinwheel','Here comes the rain','Let us fix it','A funny paper hat','A little laugh','Everyone can help','A place beside me'];
const settings=['courtyard',...Array(9).fill('room'),'courtyard','market','market','market','awning','awning','awning','awning','room','room'];
const vocabulary=[['castle','listen'],['princess','window'],['gift','lonely'],['surprise','smile'],['blocks','help'],['blocks','help'],['surprise','play'],['listen'],['listen','friend'],['play','together'],['basket','market'],['orange','help'],['orange','basket','together'],['pinwheel','share'],['rain','pinwheel'],['help','together'],['surprise','play'],['laugh','smile'],['friend','share','blocks'],['friend','smile','together']];
const props=[['castle'],['window'],['gift','blocks'],['gift','blocks'],['tower','block'],['blocks','block'],['hat','pinwheel'],['hat'],['window'],['window'],['basket','castle','caregiver'],['orange','market','caregiver'],['orange','basket','caregiver'],['pinwheel','caregiver'],['rain','pinwheel','caregiver'],['pinwheel','caregiver'],['hat','pinwheel','caregiver'],['hat','caregiver'],['blocks','block','boy','friend'],['chair','blocks']];
const targets=['castle','window','gift','gift','block','block','hat','ella','ella','ella','basket','orange','orange','pinwheel','rain','pinwheel','hat','ella','block','chair'];
export function princessPages(level:ReadingLevel):StoryPage[]{return princessText.map((versions,i)=>{
 const placements:StoryPage['placements']={};
 if([1,2,3].includes(i))placements.ella={sprite:cast(1),y:66};
 if([4,5,12,15].includes(i))placements.ella={sprite:cast(2),w:27,h:38.6,y:69};
 if(i===7)placements.ella={sprite:cast(3)};
 if(i>=17)placements.ella={sprite:cast(4)};
 if([8,9,15,18].includes(i))placements.gail={image:'gail-listening-v2.png',sprite:undefined,w:24,h:38.7,y:69};
 if(i===0)placements.gail={x:76};
 if([10,11,12,13,14,15,16,17].includes(i)){placements.ella={...placements.ella,x:62};placements.gail={...placements.gail,x:24};}
 if(i===11)placements.orange={x:44,y:82};
 if(i===12)placements.orange={x:37,y:86};
 if(i===4||i===5)placements.block={x:34,y:84};
 if(i===14)placements.pinwheel={x:45,y:69};
 if(i===15)placements.pinwheel={x:45,y:72};
 if(i===18){placements.ella={sprite:cast(5),w:26,h:35.9,y:70};placements.gail={...placements.gail,x:36};placements.ella={...placements.ella,x:65};placements.blocks={x:50,y:86,w:24,h:24};placements.block={x:51,y:74};}
 let mission:StoryPage['mission']={type:'find',prompt:`Find the ${princessObjects[targets[i]].word}.`,hint:'點場景中的物件，聽聽英文。',answer:targets[i]};
 if([4,5,18].includes(i))mission={type:'drag',prompt:'Add a block. Help build together.',hint:'將小積木拖到積木堆；也可以先點小積木，再點積木堆。',answer:'block',target:i===4?'tower':'blocks'};
 if(i===12)mission={type:'drag',prompt:'Put the orange in the basket.',hint:'把橘子拖進籃子；也可以先點橘子，再點籃子。',answer:'orange',target:'basket'};
 if(i===13)mission={type:'drag',prompt:'Share the pinwheel with Ella.',hint:'把風車拖給 Ella，或依序點風車、Ella。',answer:'pinwheel',target:'ella'};
 if(i===15)mission={type:'sequence',prompt:'Tap Ella, then the pinwheel.',hint:'先點 Ella，再點風車，一起修好。',answer:'pinwheel',steps:['ella','pinwheel']};
 return {title:titles[i],scene:settings[i],lines:[...versions[level]],words:vocabulary[i],objects:[...new Set(['gail',...(i===0?[]:['ella']),...props[i]])],placements,mission,action:'explore'};
 });}
export function princessChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{
 const result:Record<number,Record<number,StoryMotion[]>>={};
 const add=(p:number,pattern:RegExp,cues:StoryMotion[])=>{const line=Math.max(0,princessText[p][level].findIndex(s=>pattern.test(s)));result[p]={...result[p],[line]:cues};};
 add(0,/castle/i,[{actor:'gail',x:47,y:65,walk:true}]);
 add(1,/Gail/i,[{actor:'gail',x:43,y:65,walk:true}]);
 add(3,/blocks|idea/i,[{actor:'gail',x:37,y:65,walk:true}]);
 add(4,/build/i,[{actor:'block',x:50,y:49}]);
 add(5,/picks|picks up/i,[{actor:'block',x:64,y:71}]);
 add(6,/hat/i,[{actor:'hat',x:27,y:43,rotate:-12}]);
 add(7,/puts|stops/i,[{actor:'hat',x:46,y:80,rotate:12}]);
 add(8,/sits/i,[{actor:'gail',x:39,y:68}]);
 add(9,/together/i,[{actor:'gail',x:43,y:68}]);
 add(10,/walk/i,[{actor:'gail',x:41,y:65,walk:true},{actor:'ella',x:67,y:64,walk:true},{actor:'caregiver',x:85,y:50,walk:true}]);
 add(11,/roll/i,[{actor:'orange',x:35,y:83,rotate:100}]);
 add(11,/runs/i,[{actor:'ella',x:47,y:65,walk:true}]);
 add(12,/basket/i,[{actor:'orange',x:51,y:77}]);
 add(13,/turns|share/i,[{actor:'pinwheel',x:60,y:62,rotate:20}]);
 add(14,/hurry|wet/i,[{actor:'gail',x:31,y:65,walk:true},{actor:'ella',x:61,y:65,walk:true},{actor:'pinwheel',x:46,y:72,rotate:35}]);
 add(15,/fix|folds/i,[{actor:'pinwheel',x:45,y:72,rotate:0}]);
 add(16,/hat/i,[{actor:'hat',x:24,y:42,rotate:-13}]);
 add(16,/slips|tickles/i,[{actor:'hat',x:24,y:48,rotate:-18}]);
 add(17,/sneeze|Achoo/i,[{actor:'hat',x:33,y:51,rotate:25}]);
 add(18,/build|adds/i,[{actor:'block',x:50,y:78}]);
 add(19,/chair|place/i,[{actor:'chair',x:56,y:73}]);
 return result;
}
