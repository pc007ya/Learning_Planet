import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {genieText,genieTitles,genieWords} from './genie-text';
export const genieVocabulary='genie wish want more less many few toy train balloon crown gold silver shiny huge small space compare decide keep'.split(' ');
export const genieObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:24,y:71,w:23,h:48},
genie:{id:'genie',word:'genie',image:'genie.png',x:79,y:49,w:28,h:57},
girl:{id:'girl',word:'friend',image:'girl.png',x:15,y:81,w:21,h:30},
boy:{id:'boy',word:'friend',image:'boy.png',x:82,y:81,w:21,h:30},
lamp:{id:'lamp',word:'wish',image:'lamp.png',x:56,y:80,w:17,h:19},
train:{id:'train',word:'train',image:'train.png',x:51,y:81,w:28,h:20},
balloon:{id:'balloon',word:'balloon',image:'balloons.png',x:46,y:43,w:16,h:40},
castle:{id:'castle',word:'huge',image:'castle.png',x:48,y:53,w:47,h:64},
gold:{id:'gold',word:'gold',image:'gold.png',x:40,y:84,w:17,h:15},
silver:{id:'silver',word:'silver',image:'silver.png',x:63,y:84,w:17,h:15},
blocks:{id:'blocks',word:'many',image:'blocks.png',x:54,y:85,w:49,h:25},
few:{id:'few',word:'few',x:57,y:79,w:20,h:13},
track:{id:'track',word:'space',image:'track.png',x:51,y:86,w:53,h:23},
};
export const genieScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'THINK BEFORE A WISH',alt:'瑜瑜熟悉的星空臥室'},bazaar:{name:'願望市集',caption:'ROOM TO PLAY TOGETHER',alt:'留有寬闊遊戲空間的童話市集'}};
export function geniePages(level:ReadingLevel):StoryPage[]{return genieText.map((t,i)=>{
let objects=['gail','genie','lamp'],placements:StoryPage['placements']={};
if(i===0||i===19){objects=['gail','lamp'];placements.gail={image:gailPoseImage('kneeling'),x:29,y:78,w:29,h:37};}
if(i>=3&&i<=18){objects.push('train');placements.lamp={x:92,y:88,w:11,h:12};}
if(i>=4&&i<=9)objects.push('balloon');
if(i>=5&&i<=9)objects.push('gold');
if(i>=6&&i<=9)objects.push('silver');
if(i>=7&&i<=10)objects.push('castle');
if(i===8||i===9||i===14)objects.push('blocks');
if(i>=9&&i<=18){placements.gail={image:gailPoseImage('seated'),x:28,y:72,w:23,h:32};placements.genie={image:'genie-think.png',x:82,y:37,w:25,h:45};}
if(i===9){objects.push('girl','boy');placements.gail={image:gailPoseImage('seated'),x:29,y:77,w:23,h:32};}
if(i===10){placements.castle={x:48,y:68,w:25,h:36};placements.train={x:62,y:86,w:27,h:19};}
if(i===14){objects.push('castle','gold','silver');placements.gail={x:18,y:73,image:gailPoseImage('standing')};}
if(i>=15&&i<=18){objects.push('few','girl','boy');placements.genie={x:82,y:33,w:23,h:43};placements.gail={image:gailPoseImage('seated'),x:47,y:64,w:24,h:31};placements.few={x:68,y:90,w:13,h:9};}
if(i>=16&&i<=18){objects.push('track');placements.train={x:50,y:87,w:27,h:17};}
const answer=i===0||i===19?'lamp':i===1||i===2?'genie':i===4?'balloon':i===5?'gold':i===6?'silver':i===7?'castle':i===8||i===14?'blocks':i===9?'girl':i===15?'few':i===16?'track':'train';
return {title:genieTitles[i],scene:i===0||i===19?'bedroom':'bazaar',lines:t[level],objects,placements,words:genieWords[i],mission:{type:'tap',answer,prompt:['Explore the little lamp.','Meet the genie.','Make one wish.','Find the train.','Watch the balloon.','Find the gold crown.','Compare the silver crown.','See the huge castle.','Notice how many toys.','Find room for friends.','Compare the toys.','Look at the small train.','Choose one toy.','Keep your favorite.','Make more space.','Keep just a few.','Join the track.','Send the train along.','Enjoy one good wish.','Remember your choice.'][i],hint:'點小星星，探索這一幕。'},action:'explore'};
});}
export const genieChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
