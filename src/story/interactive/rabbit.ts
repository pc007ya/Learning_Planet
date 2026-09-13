import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {rabbitText,rabbitTitles} from './rabbit-text';
export const rabbitVocabulary='rabbit seed soil root sprout dig bury scoop sprinkle sunshine damp measure ruler record patient daily tall taller big bigger'.split(' ');
export const rabbitObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:23,y:65,w:24,h:59},
 rabbit:{id:'rabbit',word:'rabbit',image:'rabbit.png',x:78,y:69,w:23,h:51},
 pot:{id:'pot',word:'soil',image:'pot.png',x:52,y:85,w:23,h:25},
 seed:{id:'seed',word:'seed',image:'seed.png',x:52,y:68,w:7,h:8},
 scoop:{id:'scoop',word:'scoop',image:'scoop.png',x:39,y:83,w:15,h:12},
 can:{id:'can',word:'sprinkle',image:'can.png',x:40,y:63,w:20,h:24},
 sprout:{id:'sprout',word:'sprout',image:'sprout.png',x:52,y:62,w:17,h:26},
 root:{id:'root',word:'root',image:'root.png',x:51,y:50,w:25,h:40},
 record:{id:'record',word:'record',image:'record.png',x:52,y:77,w:28,h:24},
 sunshine:{id:'sunshine',word:'sunshine',x:60,y:15,w:23,h:22},
 bigger:{id:'bigger',word:'bigger',image:'seed.png',x:59,y:70,w:13,h:16},
};
export const rabbitScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的房間',caption:'A SMALL BEGINNING',alt:'星空臥室與留空木地板'},garden:{name:'小兔的育苗園',caption:'A LITTLE EVERY DAY',alt:'陽光中的育苗園'},shed:{name:'園藝小屋',caption:'NOTICE THE SMALL CHANGES',alt:'通往花園的園藝小屋'},evening:{name:'午後育苗園',caption:'PATIENCE TAKES PRACTICE',alt:'午後溫暖的育苗園'}};
const words=[['soil'],['rabbit'],['seed','big'],['soil','scoop'],['dig'],['bury'],['sprinkle','damp'],['sunshine'],['patient'],['dig'],['root'],['daily','record'],['sprout'],['measure','ruler'],['tall','taller'],['big','bigger'],['daily','record'],['taller'],['patient'],['seed']];
export function rabbitPages(level:ReadingLevel):StoryPage[]{return rabbitText.map((t,i)=>{
 const scene=i<2||i===19?'bedroom':i===10||i===11||i===15?'shed':i>=17?'evening':'garden';
 const placements:StoryPage['placements']={};let objects=['gail','rabbit','pot'];
 if(i===0)objects=['gail','pot'];if(i===19)objects=['gail','seed','record'];
 if([2,5].includes(i))objects.push('seed');if([3,4,9].includes(i))objects.push('scoop');if(i===6)objects.push('can');if(i===7)objects.push('sunshine');
 if(i===10)objects=['gail','rabbit','root'];if([11,16,18].includes(i))objects.push('record');
 if(i>=12&&i!==15&&i!==19)objects.push('sprout');
 if(i===15){objects=['gail','rabbit','seed','bigger'];placements.seed={x:44,y:70};}
 if([8,9].includes(i))placements.rabbit={image:'rabbit-worried.png',h:42,y:74};if([11,16,18].includes(i))placements.rabbit={image:'rabbit-pencil.png'};
 if(i>=14&&i!==15&&i!==19)placements.sprout={image:i>=17?'sunflower.png':'plant.png',h:i>=17?48:38,x:i>=17?55:52,y:i>=17?54:54,w:i>=17?24:21};
 if([0,10,11,19].includes(i))placements.gail={image:gailPoseImage('kneeling'),h:39,w:31,y:75};
 if([11,16,18].includes(i))placements.record={x:69,y:88,w:24,h:18};
 const targets=['pot','rabbit','seed','scoop','scoop','seed','can','sunshine','rabbit','rabbit','root','record','sprout','sprout','sprout','bigger','record','sprout','rabbit','seed'];
 const prompts=['Tap to begin.','Watch Rabbit hop in.','Find the seed.','Find the scoop.','Dig a small hole.','Bury the seed.','Sprinkle gently.','Find the sunshine.','Give Rabbit time.','Let the seed rest.','Find the root.','Make a daily record.','Find the sprout.','Measure the sprout.','See how much taller it is.','Choose the bigger seed.','Check the record.','Watch the growth over weeks.','Celebrate being patient.','A new beginning.'];
 return {title:rabbitTitles[i],scene,lines:t[level],words:words[i],objects,placements,mission:{type:'tap',answer:targets[i],prompt:prompts[i],hint:'點物件聽發音與探索。'},action:'explore'};
});}
export function rabbitChoreography(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{const result:Record<number,Record<number,StoryMotion[]>>={};for(let i=2;i<20;i++)result[i]={0:[{actor:i===19?'gail':'rabbit',x:i===19?23:78,y:i===19?75:([8,9].includes(i)?74:69),rotate:i%2?2:-2}]};return result;}
