import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {volcanoText,volcanoTitles,volcanoWords} from './volcano-text';
export const volcanoVocabulary='volcano monster steam heat warm hot cool cheek fist shoulder tight loose stomp burst notice signal tense relax smoke calm'.split(' ');
export const volcanoObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:21,y:68,w:25,h:49},
 tobi:{id:'tobi',word:'monster',image:'tobi.png',x:55,y:75,w:29,h:36},
 squirrel:{id:'squirrel',word:'notice',image:'squirrel.png',x:81,y:73,w:24,h:40},
 lane:{id:'lane',word:'calm',image:'lane.png',x:57,y:87,w:33,h:21},
 ball:{id:'ball',word:'signal',image:'ball.png',x:49,y:86,w:5,h:7},
 stone:{id:'stone',word:'warm',image:'stone.png',x:52,y:85,w:12,h:14},
 cup:{id:'cup',word:'steam',image:'cup.png',x:68,y:88,w:10,h:14},
 mountain:{id:'mountain',word:'volcano',x:46,y:17,w:27,h:24}
};
export const volcanoScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'NOTICE, THEN CHOOSE',alt:'熟悉的星空臥室'},square:{name:'火山村廣場',caption:'EVERY FEELING HAS A STORY',alt:'遠方綠色休眠火山下的花朵村莊'},path:{name:'廣場邊的小路',caption:'NOTICE YOUR BODY',alt:'村莊小路旁空曠的石板地'},shade:{name:'花園樹蔭',caption:'ROOM TO SAY HOW YOU FEEL',alt:'綠蔭與木長椅旁的安靜角落'},evening:{name:'傍晚的廣場',caption:'ONE SMALL SIGNAL',alt:'夕陽下平靜的村莊廣場'}};
const tasks=['Find the warm stone.','Find the distant volcano.','Meet Tobi.','Notice Squirrel’s parcel.','Notice Tobi’s face.','Find Tobi’s red cheeks.','Notice the tight fists.','Watch Tobi’s stomp.','Watch the puff rise.','Help Tobi notice a signal.','Find a shady place.','Help Tobi open his hands.','Help Tobi lower his shoulders.','Listen to Tobi.','Listen to Squirrel.','Get ready to take turns.','Notice the small signal.','Roll the ball again.','Find the steam above the cup.','Remember your body’s signals.'];
export function volcanoPages(level:ReadingLevel):StoryPage[]{return volcanoText.map((t,i)=>{
 let scene='square',objects=['gail','tobi'],answer='tobi';const placements:StoryPage['placements']={};
 if(i===0||i===19){scene='bedroom';objects=['gail','stone'];answer='stone';placements.gail={image:gailPoseImage('kneeling'),x:31,y:81,w:28,h:35};}
 else if(i===1){objects=['gail','mountain'];answer='mountain';}
 else if(i===2||i===3){objects.push('squirrel','lane','ball');placements.tobi={x:48,y:68,w:25,h:33};answer=i===3?'squirrel':'tobi';}
 else if(i>=4&&i<=9){scene='path';placements.tobi={image:i>=5&&i<=8?'tobi-angry.png':i===9?'tobi-notice.png':'tobi.png',x:64,y:72,w:34,h:42};placements.gail={x:23,y:70,image:gailPoseImage('surprised')};}
 else if(i>=10&&i<=14){scene='shade';placements.tobi={image:i===11?'tobi-angry.png':i===10?'tobi.png':'tobi-calm.png',x:57,y:78,w:28,h:35};if(i>=13){objects.push('squirrel');answer=i===14?'squirrel':'tobi';}}
 else if(i>=15&&i<=17){scene='square';objects.push('squirrel','lane','ball');placements.tobi={image:i===16?'tobi-notice.png':'tobi-calm.png',x:53,y:62,w:26,h:33};placements.squirrel={image:'squirrel-play-left.png',x:82,y:73};placements.gail={image:gailPoseImage('seated'),x:19,y:76,w:24,h:35};answer=i===16?'tobi':'ball';}
 else if(i===18){scene='evening';objects.push('cup');answer='cup';placements.tobi={image:'tobi-calm.png'};}
 return {title:volcanoTitles[i],scene,lines:t[level],words:volcanoWords[i].filter(w=>volcanoVocabulary.includes(w)),objects,placements,mission:{type:'tap',answer,prompt:tasks[i],hint:'點小星星，留意身體訊號與變化。'},action:'explore'};
});}
export const volcanoChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
