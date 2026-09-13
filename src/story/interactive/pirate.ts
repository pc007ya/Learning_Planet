import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {pirateText} from './pirate-text';
export const pirateVocabulary=['boat','smoke','dock','seagull','pirate','chest','mine','friend','oar','rope','share','turn','telescope','sail','wave','look','help','beach','together','lifejacket'];
export const pirateObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:21,y:67,w:23,h:55},
 pirate:{id:'pirate',word:'pirate',image:'pirate.png',x:47,y:64,w:25,h:60},
 sailor:{id:'sailor',word:'friend',image:'sailor.png',x:73,y:70,w:19,h:50},
 friend:{id:'friend',word:'friend',image:'friend.png',x:89,y:71,w:17,h:48},
 paperboat:{id:'paperboat',word:'boat',image:'paperboat.png',x:60,y:82,w:17,h:16},
 seagull:{id:'seagull',word:'seagull',image:'seagull.png',x:6,y:35,w:10,h:16},
 chest:{id:'chest',word:'chest',image:'chest.png',x:49,y:84,w:27,h:27},
 telescope:{id:'telescope',word:'telescope',image:'telescope.png',x:41,y:59,w:18,h:9},
 rope:{id:'rope',word:'rope',image:'rope.png',x:48,y:73,w:13,h:19},
 oar:{id:'oar',word:'oar',image:'oar.png',x:54,y:63,w:28,h:9},
 hull:{id:'hull',word:'boat',image:'hull.png',x:50,y:82,w:90,h:28},
 sail:{id:'sail',word:'sail',image:'sail.png',x:52,y:37,w:46,h:68},
 wave:{id:'wave',word:'wave',x:22,y:92,w:30,h:13},
 dock:{id:'dock',word:'dock',x:47,y:93,w:30,h:12},
 beach:{id:'beach',word:'beach',x:82,y:32,w:22,h:20},
 picnic:{id:'picnic',word:'picnic',image:'picnic.png',x:54,y:87,w:46,h:23},
 apple:{id:'apple',word:'apple',image:'apple.png',x:47,y:66,w:7,h:11},
 lifejacket:{id:'lifejacket',word:'lifejacket',x:66,y:65,w:10,h:13},
};
export const pirateScenes:Record<string,SceneSpec>={
 bedroom:{name:'Gail的星光房間',caption:'A LITTLE GOLDEN BOAT',alt:'星光臥室與床邊空地'},
 dock:{name:'陽光碼頭',caption:'A TURN FOR YOU, A TURN FOR ME',alt:'木造碼頭、海港與遠方村屋'},
 bay:{name:'航向發光海灣',caption:'MANY HANDS, ONE ADVENTURE',alt:'藍色海灣，獨立船身、帆、人物與浪花'},
 beach:{name:'共享海灣野餐',caption:'OUR BEST TREASURE',alt:'夕陽下的沙灘與閃亮海面'}
};
const titles=['A little paper boat','Golden smoke','A call at the dock','The pirate’s chest','Mine!','Two willing friends','Too much to hold','The boat must wait','A turn for everyone','Share the oar','Share the rope','A job for the pirate','Ready to go','Splash, splash','Wind in the sail','The shining bay','Your turn, Gail','On dry land','Our best treasure','A little boat at home'];
const words=[['boat'],['smoke'],['dock','seagull'],['pirate','chest'],['mine'],['friend','help'],['oar','rope'],['boat','help'],['share','turn'],['oar'],['rope'],['telescope'],['lifejacket'],['wave'],['sail'],['look','beach'],['turn','share'],['beach'],['together'],['share']];
export function piratePages(level:ReadingLevel):StoryPage[]{return pirateText.map((t,i)=>{
 const room=i<2||i===19,sea=i>=12&&i<=16,shore=i>=17&&i<=18;
 const scene=room?'bedroom':sea?'bay':shore?'beach':'dock';
 const placements:StoryPage['placements']={};
 let objects=room?['gail','paperboat']:['gail','pirate','seagull','chest','telescope','rope','oar'];
 if(room)placements.gail={image:gailPoseImage('kneeling'),x:33,y:76,w:32,h:37};
 if(i===2)objects=['gail','seagull','dock'];
 if(i>=5&&!room)objects.push('sailor','friend');
 if(i===3){placements.telescope={x:48,y:75};placements.rope={x:57,y:80};}
 if(i>=10){placements.oar={x:74,y:67};}
 if(i>=11){placements.rope={x:87,y: 70};}
 if(i===11){placements.telescope={x:28,y:59};placements.gail={image:gailPoseImage('reaching'),w:27};}
 if(sea){
  objects=['sail','sailor','pirate','gail','friend','hull','oar','telescope','rope','wave','beach'];
  placements.gail={image:gailPoseImage('seated-lifejacket'),x:65,y:65,w:27,h:34};
  placements.pirate={image:'pirate-seated.png',x:45,y:62,w:22,h:40};
  placements.sailor={image:'sailor-seated.png',x:26,y:65,w:22,h:36};
  placements.friend={image:'friend-seated.png',x:81,y:65,w:19,h:34};
  placements.oar={x:20,y:78,w:36,h:12};placements.telescope={x:58,y:52,w:17,h:9};placements.rope={x:83,y:70,w:9,h:13};
  if(i===12)objects.push('lifejacket');if(i===16)placements.telescope={x:51,y:52,w:17,h:9};
 }
 if(shore){
  objects=['gail','pirate','sailor','friend','picnic','chest','apple','telescope'];
  placements.gail={image:gailPoseImage('seated'),x:28,y:77,w:27,h:36};
  placements.pirate={x:53,y:60,w:22,h:56};placements.sailor={x:75,y:65,w:19,h:49};placements.friend={x:90,y:66,w:16,h:47};
  placements.chest={image:"chest-picnic.png",x:52,y:85,w:25,h:27};placements.picnic={x:54,y:91,w:64,h:18};placements.telescope={x:15,y:92,w:16,h:9};
 }
 const targets=['paperboat','paperboat','seagull','chest','pirate','sailor','rope','pirate','gail','oar','rope','telescope','lifejacket','oar','sail','telescope','telescope','picnic','apple','paperboat'];
 let mission:StoryPage['mission']={type:'find',answer:targets[i],prompt:`Find ${targets[i]==='gail'?'Gail':'the '+pirateObjects[targets[i]].word}.`,hint:'點物件聽發音，看看故事中的動作。'};
 if(i<2)mission={type:'tap',answer:'paperboat',prompt:'Tap the golden boat.',hint:'點金紙船，讓金色煙霧飄出來。'};
 if([9,10,11,16,18].includes(i)){const target=i===9?'sailor':i===10?'friend':i===11?'pirate':'gail';mission={type:'drag',answer:targets[i],target,prompt:i===16?'Give Gail a turn.':i===18?'Share the apple with Gail.':`Share the ${pirateObjects[targets[i]].word}.`,hint:'先點工具再點朋友，也可以拖曳交給他。'};}
 if(i===13)mission={type:'tap',answer:'oar',prompt:'Pull the oar. Make a splash!',hint:'點船槳，看船前進和浪花。'};
 if(i===14)mission={type:'sequence',answer:'sail',steps:['rope','sail'],prompt:'Tap the rope, then the sail.',hint:'先點繩子，再點船帆。'};
 return {title:titles[i],scene,lines:[...t[level]],words:words[i],objects,placements,mission,action:'explore'};
});}

export function pirateChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{
 const out:Record<number,Record<number,StoryMotion[]>>={};
 const add=(p:number,l:number,cues:StoryMotion[])=>{(out[p]??={})[Math.min(l,pirateText[p][level].length-1)]=cues;};
 add(0,0,[{actor:'paperboat',x:59,y:78,rotate:3}]);add(1,1,[{actor:'gail',x:43,y: 70,rotate:2}]);
 add(2,0,[{actor:'gail',x:28,y:67,walk:true}]);add(3,0,[{actor:'pirate',x:45,y:64,rotate:-2}]);
 add(4,0,[{actor:'rope',x:44,y:70},{actor:'telescope',x:43,y:58}]);
 add(5,0,[{actor:'sailor',x:69,y:70,walk:true},{actor:'friend',x:85,y:71,walk:true}]);
 add(6,1,[{actor:'rope',x:51,y:90,rotate:15}]);add(7,0,[{actor:'pirate',x:46,y:66,rotate:-4}]);
 add(8,0,[{actor:'gail',x:25,y:67,walk:true}]);add(9,0,[{actor:'oar',x:66,y:67,rotate:-75}]);
 add(10,0,[{actor:'rope',x:80,y:70}]);add(11,0,[{actor:'telescope',x:35,y:59}]);
 add(12,0,[{actor:'gail',x:65,y:65,rotate:1}]);add(13,0,[{actor:'oar',x:20,y:78,rotate:-35}]);
 add(14,0,[{actor:'rope',x:82,y:70,rotate:3}]);add(15,0,[{actor:'telescope',x:58,y:52}]);
 add(16,0,[{actor:'telescope',x:55,y:53}]);add(17,0,[{actor:'pirate',x:51,y:60,walk:true}]);
 add(18,1,[{actor:'apple',x:34,y: 70}]);add(19,0,[{actor:'paperboat',x:58,y:80,rotate:-3}]);
 return out;
}
