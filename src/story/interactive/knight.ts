import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {knightText,knightTitles} from './knight-text';
export const knightVocabulary='knight helmet shield flag race fast win lose team partner push pull balance steady tent peg hammer check ready cheer'.split(' ');
export const knightObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:21,y:71,w:22,h:48},
knight:{id:'knight',word:'knight',image:'knight.png',x:76,y:71,w:24,h:48},
girl:{id:'girl',word:'partner',image:'helper-girl.png',x:85,y:74,w:21,h:43},
boy:{id:'boy',word:'team',image:'helper-boy.png',x:38,y:74,w:21,h:43},
adult:{id:'adult',word:'hammer',image:'adult.png',x:79,y:79,w:29,h:32},
shield:{id:'shield',word:'shield',image:'shield.png',x:57,y:79,w:21,h:26},
flag:{id:'flag',word:'flag',image:'flag.png',x:84,y:41,w:19,h:43},
flat:{id:'flat',word:'tent',image:'tent-flat.png',x:52,y:83,w:43,h:23},
tent:{id:'tent',word:'tent',image:'tent.png',x:54,y:55,w:54,h:64},
peg:{id:'peg',word:'peg',image:'peg.png',x:58,y:88,w:8,h:17},
hammer:{id:'hammer',word:'hammer',image:'hammer.png',x:73,y:88,w:12,h:14},
};
export const knightScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'A PLACE ON THE TEAM',alt:'瑜瑜熟悉的星空臥室'},festival:{name:'騎士嘉年華',caption:'A WIN FOR THE WHOLE TEAM',alt:'飄著藍金旗幟的嘉年華草地'}};
const words=[['shield'],['knight','helmet'],['race','ready'],['fast','win'],['tent'],['pull'],['push'],['lose'],['team'],['partner'],['steady'],['balance'],['peg'],['hammer'],['ready','pull'],['check'],['flag'],['cheer'],['win'],['shield']];
export function knightPages(level:ReadingLevel):StoryPage[]{return knightText.map((t,i)=>{
let objects=['gail','knight'],placements:StoryPage['placements']={};
if(i===0||i===19){objects=['gail','shield'];placements.gail={image:gailPoseImage('kneeling'),x:28,y:78,w:29,h:37};}
if(i>=1&&i<=3)objects.push('flag');
if(i===1||i>=4)placements.knight={image:'knight-hold.png'};
if(i>=4&&i<=10)objects.push('flat');
if(i===7)placements.knight={image:'knight-tired.png',y:80,h:29};
if(i>=8&&i<=11){objects.push('girl','boy');placements.knight={image:'knight-hold.png',x:69,y:72,w:21,h:45};placements.gail={x:15,w:18,h:43,y:74};}
if(i===11){objects.push('flat','tent');placements.boy={x:35};}
if(i>=12&&i<=15){objects=['gail','knight','tent','adult','peg'];placements.gail={x:14,w:19,h:43,y:72};placements.knight={image:'knight-hold.png',x:32,w:20,h:43,y:72};}
if(i===14){objects=['gail','knight','girl','boy','tent'];placements.knight={image:'knight-hold.png',x:33,w:20,h:43,y:73};placements.boy={x:65,w:18,h:40,y:75};placements.girl={x:88,w:18,h:40,y:75};placements.gail={x:13,w:18,h:42,y:74};}
if(i>=16&&i<=18){objects=['gail','knight','girl','boy','tent','flag'];placements.gail={x:16,w:20,h:44,y:75};placements.knight={x:38,w:20,h:42,y:76};placements.boy={x:67,w:19,h:40,y:76};placements.girl={x:87,w:19,h:41,y:76};}
const answer=i===0||i===19?'shield':i===4||i===5||i===6||i===11?'flat':i===15?'tent':i===12?'peg':i===13?'adult':i===16?'flag':i===8?'boy':i===9?'girl':'knight';
return {title:knightTitles[i],scene:i===0||i===19?'bedroom':'festival',lines:t[level],objects,placements,words:words[i],mission:{type:'tap',answer,prompt:['Explore the shield.','Meet the knight.','Start the race.','Watch the fast runner.','Find the tent.','Try pulling alone.','Wait for the team.','Listen to the knight.','Meet the team.','Find a partner.','Keep it steady.','Balance both sides.','Watch the adult set the peg.','Watch the adult use the hammer.','Pull together.','Check the tent.','Raise the flag.','Cheer for everyone.','A win for the whole team.','Remember the team.'][i],hint:'點小星星，探索這一幕。'},action:'explore'};
});}
export const knightChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
export const knightWordArt:Record<string,string>={knight:'knight',helmet:'knight',shield:'shield',flag:'flag',race:'knight',fast:'knight',win:'knight',lose:'knight-tired',team:'helper-boy',partner:'helper-girl',push:'knight-hold',pull:'knight-hold',balance:'tent',steady:'tent',tent:'tent',peg:'peg',hammer:'hammer',check:'adult',ready:'knight-hold',cheer:'helper-boy'};

