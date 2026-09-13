import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {cloudText,cloudTitles} from './cloud-text';
export const cloudVocabulary='lid chime mist float breeze scatter spin thunder rumble loud angry upset name pause breathe slow calm gentle need again'.split(' ');
export const cloudObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:24,y:69,w:25,h:56},
 cloud:{id:'cloud',word:'cloud',image:'cloud-calm.png',x:75,y:45,w:35,h:35},
 chest:{id:'chest',word:'chest',image:'chest-clean.png',x:56,y:82,w:25,h:25},
 lid:{id:'lid',word:'lid',image:'lid.png',x:56,y:70,w:25,h:16},
 bell:{id:'bell',word:'chime',image:'bell.png',x:56,y:73,w:10,h:17},
 pattern:{id:'pattern',word:'again',image:'pattern.png',x:54,y:85,w:32,h:19},
 rotor:{id:'rotor',word:'spin',image:'rotor.png',x:52,y:66,w:15,h:22},
};
for(let i=0;i<6;i++)cloudObjects['leaf'+i]={id:'leaf'+i,word:'leaf',image:'leaf.png',x:40+i*7,y:80+(i%2)*9,w:8,h:10};
export const cloudScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'A LITTLE SPACE TO BREATHE',alt:'熟悉的星空房間'},hill:{name:'雲朵山丘',caption:'PAUSE. BREATHE. BEGIN AGAIN.',alt:'微風吹過石牆與柔和草地的山丘'}};
const words=[['lid'],['chime','mist'],['float'],['breeze'],['scatter'],['spin'],['thunder'],['rumble','loud'],['angry'],['upset'],['name'],['pause'],['breathe'],['slow'],['calm'],['need'],['again'],['gentle'],['calm'],['chime']];
export function cloudPages(level:ReadingLevel):StoryPage[]{return cloudText.map((text,i)=>{let objects=['gail','cloud','pattern'];const placements:StoryPage['placements']={};
 if(i<2||i===19){objects=['gail','chest','lid','bell'];placements.gail={image:gailPoseImage('kneeling'),x:28,y:78,w:30,h:37};if(i===19)placements.bell={x:76,y:86,w:10,h:17};}
 if(i>=4&&i<=16){objects=['gail','cloud',...Array.from({length:6},(_,i)=>'leaf'+i)];if(i===4||i===16)objects.push('pattern');}
 if(i>=6&&i<=8)placements.cloud={image:'cloud-angry.png'};
 if(i>=9&&i<=15)placements.cloud={image:'cloud-upset.png'};
 if(i>=9&&i<=15)placements.gail={image:gailPoseImage('seated'),h:36,y:78,w:29};
 if(i===6||i===7)placements.gail={image:gailPoseImage('surprised'),x:18};
 if(i===12||i===13)objects.push('rotor');
 if(i===16)placements.gail={image:gailPoseImage('reaching'),x:29,y:76,w:30,h:41};
 const answer=i===0?'lid':i===1||i===19?'bell':i===3||i===4||i===16||i===17?'pattern':i===5?'leaf0':i===12||i===13?'rotor':'cloud';
 return {title:cloudTitles[i],scene:i<2||i===19?'bedroom':'hill',lines:text[level],objects,placements,words:words[i],mission:{type:'tap',answer,prompt:['Lift the lid.','Listen to the chime.','Find the floating friend.','Watch the breeze.','Watch the leaves scatter.','Watch a leaf spin.','Hear the thunder.','Hear the rumble.','Notice Cloud’s face.','Stay and listen.','Name the feeling.','Take a pause.','Breathe with the pinwheel.','Watch a slow turn.','Notice the quieter moment.','Ask for what you need.','Begin again together.','Try a gentle breeze.','Remember: you can ask for help.','Remember the quiet chime.'][i],hint:'點小星星，探索這一幕。'},action:'explore'};});}
export function cloudChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{return Object.fromEntries(cloudPages(level).map((p,i)=>[i,{0:p.objects.includes('cloud')?[{actor:'cloud',x:75,y:45,rotate:0}]:[]} ]));}
