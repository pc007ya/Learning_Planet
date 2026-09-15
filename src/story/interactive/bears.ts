import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {bearsText,bearsTitles,bearsWords} from './bears-text';
export const bearsVocabulary='shadow flashlight noise branch curtain shape round straight behind beside inside outside guess explain creak wall floor short dark brave'.split(' ');
export const bearsObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:36,y:76,w:22,h:40},
tall:{id:'tall',word:'bear',image:'tall.png',x:81,y:74,w:19,h:42},
middle:{id:'middle',word:'bear',image:'middle.png',x:66,y:79,w:17,h:32},
tiny:{id:'tiny',word:'bear',image:'tiny.png',x:54,y:84,w:13,h:23},
flashlight:{id:'flashlight',word:'flashlight',image:'flashlight.png',x:44,y:72,w:10,h:7},
branch:{id:'branch',word:'branch',image:'branch.png',x:93,y:30,w:13,h:30},
shadow:{id:'shadow',word:'shadow',image:'branch.png',x:56,y:37,w:29,h:36},
curtain:{id:'curtain',word:'curtain',image:'curtain.png',x:81,y:41,w:15,h:47},
chair:{id:'chair',word:'creak',image:'chair.png',x:81,y:48,w:19,h:30},
ball:{id:'ball',word:'round',image:'ball.png',x:61,y:78,w:11,h:16},
round:{id:'round',word:'round',image:'ball.png',x:58,y:39,w:18,h:26},
wall:{id:'wall',word:'wall',x:51,y:27,w:25,h:28},
floor:{id:'floor',word:'floor',x:56,y:95,w:25,h:8},
};
export const bearsScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'LOOK AND LEARN TOGETHER',alt:'瑜瑜熟悉的星空臥室'},cottage:{name:'三隻小熊的小屋',caption:'LOOK TOGETHER, UNDERSTAND TOGETHER',alt:'有三張床、窗戶和寬闊牆面的小熊木屋'}};
export function bearsPages(level:ReadingLevel):StoryPage[]{return bearsText.map((t,i)=>{
let objects=['gail','tall','middle','tiny','flashlight'],answer='flashlight',placements:StoryPage['placements']={};
if(i===0||i===19){objects=['gail','flashlight'];placements.gail={image:gailPoseImage('kneeling'),x:30,y:81,w:28,h:35};placements.flashlight={x:52,y:84,w:17,h:10};}
else{
 if(i>=3&&i<=7||i===15||i===16){objects.push('shadow','branch');answer=i===6||i===7?'branch':'shadow';}
 if(i===3)objects.push('wall');
 if(i>=8&&i<=10){objects.push('chair','curtain');answer=i===8?'curtain':'chair';placements.tall={x:69,y:75};placements.middle={x:54,y:81};placements.tiny={x:43,y:87};placements.gail={x:27,y:77};placements.flashlight={x:35,y:73};}
 if(i===11){objects.push('shadow','floor');placements.shadow={x:61,y:90,w:25,h:10};answer='floor';}
 if(i===12||i===14){objects.push('ball','round');answer='ball';}
 if(i===13){objects.push('chair');answer='chair';}
 if(i===15||i===16)answer=i===15?'tiny':'shadow';
 if(i===1||i===2||i===17||i===18)answer='tiny';
}
return {title:bearsTitles[i],scene:i===0||i===19?'bedroom':'cottage',lines:t[level],objects,placements,words:bearsWords[i],mission:{type:'tap',answer,prompt:['Open the beam.','Meet the three bears.','Listen together.','Find the shadow.','Look before you guess.','Trace the shape.','Find the branch outside.','Stay inside together.','Look behind the curtain.','Find the chair.','Listen to the creak.','Look at the floor.','Find a round shape.','Find a straight edge.','Make the shadow smaller.','Help explain the shadow.','Look for the source.','Stay close together.','Say good night.','Remember to look together.'][i],hint:'點小星星，觀察光與影。'},action:'explore'};
});}
export const bearsChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
