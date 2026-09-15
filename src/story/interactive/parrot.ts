import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {parrotText,parrotTitles,parrotWords} from './parrot-text';
export const parrotVocabulary='parrot beak feather perch message envelope stamp address deliver sentence question answer interrupt finish repeat correct wrong clear detail attention'.split(' ');
export const parrotObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:23,y:67,w:25,h:50},
 pippa:{id:'pippa',word:'parrot',image:'pippa.png',x:53,y:61,w:22,h:31},
 perch:{id:'perch',word:'perch',image:'perch.png',x:53,y:81,w:15,h:21},
 hedgehog:{id:'hedgehog',word:'message',image:'hedgehog.png',x:79,y:69,w:25,h:45},
 squirrel:{id:'squirrel',word:'wrong',image:'squirrel.png',x:80,y:67,w:25,h:43},
 rabbit:{id:'rabbit',word:'answer',image:'rabbit.png',x:79,y:67,w:24,h:47},
 envelope:{id:'envelope',word:'envelope',image:'envelope.png',x:63,y:70,w:13,h:15},
 book:{id:'book',word:'book',image:'../fox-v1/sketchbook.png',x:49,y:90,w:27,h:17},
 stamp:{id:'stamp',word:'stamp',image:'stamp.png',x:55,y:87,w:8,h:10},
 feather:{id:'feather',word:'feather',image:'feather.png',x:53,y:54,w:12,h:21},
 door:{id:'door',word:'address',x:72,y:36,w:18,h:36},
 moon:{id:'moon',word:'detail',x:73,y:20,w:9,h:14}
};
export const parrotScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'A LITTLE ROOM TO LISTEN',alt:'熟悉的星空臥室'},office:{name:'魔法郵局',caption:'LISTEN TO THE WHOLE MESSAGE',alt:'木製櫃臺與信件格子的村莊郵局'},wrongdoor:{name:'蘋果標誌的家',caption:'A MISSED DETAIL',alt:'花叢旁棕色門與蘋果標誌'},rightdoor:{name:'月亮標誌的家',caption:'ASK, CHECK, DELIVER',alt:'花叢旁藍色門與月亮標誌'},square:{name:'村莊小路',caption:'ONE CLEAR MESSAGE',alt:'通往各家門前的石板小路'}};
const tasks=['Find the glowing stamp.','Find the message.','Meet Pippa.','Find the wooden perch.','Notice Pippa speaking too soon.','Help Pippa check the address.','Look at the moon envelope.','Find the wrong door.','Compare the two pictures.','Help Pippa listen again.','Let the hedgehog finish.','Repeat the important parts.','Ask the hedgehog a question.','Listen to the clear answer.','Check the moon on the door.','Deliver the envelope to Rabbit.','Wait for Rabbit’s reply.','Give Rabbit your attention.','Bring the reply back.','Remember to listen.'];
export function parrotPages(level:ReadingLevel):StoryPage[]{return parrotText.map((t,i)=>{
 let scene='office',objects=['gail','perch','pippa','hedgehog','envelope'],answer='pippa';const placements:StoryPage['placements']={};
 if(i===0||i===19){scene='bedroom';objects=['gail','book','stamp'];answer='stamp';placements.gail={image:gailPoseImage('kneeling'),x:31,y:81,w:28,h:35};}
 else if(i>=5&&i<=8){scene=i===5?'square':'wrongdoor';objects=['gail','perch','pippa','envelope'];if(i>=7)objects.push('squirrel');if(i>=6)objects.push('door');answer=i===7?'door':'envelope';placements.envelope={x:63,y:69};}
 else if(i>=14&&i<=17){scene='rightdoor';objects=['gail','perch','pippa','rabbit','envelope','moon'];answer=i===14?'moon':i===15?'envelope':'rabbit';}
 else if(i===1)answer='envelope';else if(i===3)answer='perch';else if(i===10||i===12||i===13)answer='hedgehog';
 if(i===4)placements.pippa={image:'pippa-talk.png'};
 if(i>=5&&i<=8||i>=14&&i<=17){objects=objects.filter(o=>o!=='perch');placements.pippa={x:53,y:77};placements.envelope={x:63,y:68};}
 if(i===9||i===10||i===12||i===13||i===16||i===17)placements.pippa={...placements.pippa,image:'pippa.png'};
 if(i===11||i===18)placements.pippa={image:'pippa-talk.png'};
 if(i===9||i===10||i===13||i===16||i===17){placements.gail={image:gailPoseImage('seated'),x:23,y:77,w:26,h:33};}
 return {title:parrotTitles[i],scene,lines:t[level],words:parrotWords[i],objects,placements,mission:{type:'tap',answer,prompt:tasks[i],hint:'點小星星，觀察訊息與角色的動作。'},action:'explore'};
});}
export const parrotChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
