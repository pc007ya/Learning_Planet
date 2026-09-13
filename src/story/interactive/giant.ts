import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {giantText} from './giant-text';
export const giantObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:24,y:76,w:16,h:38},
 giant:{id:'giant',word:'giant',image:'giant.png',x:75,y:52,w:38,h:86},
 yellow:{id:'yellow',word:'umbrella',image:'yellow.png',x:64,y:32,w:22,h:33},
 red:{id:'red',word:'red',image:'red.png',x:25,y:48,w:24,h:36},
 blue:{id:'blue',word:'blue',image:'blue.png',x:44,y:56,w:23,h:34.5},
 rope:{id:'rope',word:'rope',image:'rope.png',x:47,y:84,w:21,h:31.5},
 frame:{id:'frame',word:'pole',image:'frame.png',x:50,y:65,w:32,h:48},
 canopy:{id:'canopy',word:'rainbow',image:'canopy.png',x:54,y:35,w:83,h:64},
 boy:{id:'boy',word:'friend',image:'boy.png',x:38,y:77,w:15,h:36},
 friend:{id:'friend',word:'share',image:'friend.png',x:13,y:77,w:15,h:36},
 roof:{id:'roof',word:'roof',x:49,y:12,w:55,h:20},
 rain:{id:'rain',word:'rain',x:35,y:20,w:24,h:30},
 gap:{id:'gap',word:'gap',x:45,y:52,w:12,h:14},
 sun:{id:'sun',word:'sun',x:30,y:17,w:25,h:20}
};
export const giantScenes:Record<string,SceneSpec>={
 village:{name:'雨中的村莊',caption:'A TINY UMBRELLA',alt:'雨中的石板廣場與溫暖村屋'},
 workshop:{name:'屋簷下的工作坊',caption:'MANY SMALL HELPERS',alt:'有高屋頂遮雨的木造工作坊'},
 green:{name:'村莊草地',caption:'LIFT TOGETHER',alt:'細雨中的寬敞村莊草地'},
 sunshine:{name:'雨後的彩虹',caption:'ROOM FOR EVERYONE',alt:'雨停後的草地與天空彩虹'}
};
export const giantVocabulary=['rain','giant','umbrella','tiny','wet','roof','dry','idea','together','share','count','hold','pole','rope','join','knot','gap','wind','strong','lift'];
const titles=['A rainy hello','A tiny umbrella','Can I help?','Under a roof','A bright idea','Many little helpers','Count the colors','A job for everyone','Join the handles','A little gap','Close the gap','A gust of wind','A stronger frame','Check the knots','One, two, three!','Dry at last','Room to share','Step together','After the rain','Small things, big help'];
const settings=['village','village','village','workshop','workshop','workshop','workshop','workshop','workshop','workshop','workshop','green','workshop','workshop','green','green','green','green','sunshine','sunshine'];
const words=[['rain','giant'],['umbrella','tiny','wet'],['umbrella'],['roof','dry'],['idea','together'],['share'],['count'],['hold','pole','rope'],['join','knot'],['gap','lift'],['gap'],['wind'],['strong'],['rope','knot'],['lift','together'],['dry'],['share'],['together'],['dry'],['together','share']];
const props=[['yellow','rain'],['yellow','rain'],['yellow','red'],['roof','yellow'],['red','blue'],['red','blue','boy'],['red','yellow','blue','boy'],['frame','rope','boy'],['red','blue','rope','frame','boy'],['red','blue','gap','boy'],['red','blue','gap','boy'],['canopy','boy'],['frame','rope','boy'],['frame','rope','boy'],['canopy','boy','friend'],['canopy'],['canopy','boy','friend'],['canopy','boy','friend'],['canopy','boy','friend','sun'],['canopy','boy','friend']];
const targets=['rain','yellow','red','roof','red','boy','yellow','frame','rope','gap','blue','canopy','frame','rope','canopy','giant','friend','gail','sun','boy'];
export function giantPages(level:ReadingLevel):StoryPage[]{return giantText.map((text,i)=>{
 const placements:StoryPage['placements']={};
 if(i>=3){placements.giant={x:80,w:34,h:77,y:56};}
 if(i>=4&&i<=10){placements.red={x:35,y:56,w:24,h:36};placements.blue={x:58,y:56,w:24,h:36};placements.yellow={x:47,y:37,w:22,h:33};placements.boy={x:12};}
 if(i>=14){placements.giant={x:66,w:30,h:68,y:60};placements.gail={x:43};placements.boy={x:26};placements.friend={x:82};placements.canopy={x:54,y:38,w:85,h:72};}
 let mission:StoryPage['mission']={type:'find',prompt:targets[i]==='gail'?'Find Gail.':`Find the ${giantObjects[targets[i]].word}.`,hint:'點圖片找單字，也可以先聽提示。',answer:targets[i]};
 if(i===6)mission={type:'sequence',prompt:'Tap red, yellow, then blue.',hint:'依序點紅、黃、藍雨傘。',answer:'blue',steps:['red','yellow','blue']};
 if(i===8||i===12)mission={type:'drag',prompt:'Bring the rope to the pole.',hint:'把繩子拖到支架；也可以先點繩子，再點支架。',answer:'rope',target:'frame'};
 if(i===10)mission={type:'drag',prompt:'Close the gap.',hint:'把藍傘移向紅傘，讓傘緣重疊。',answer:'blue',target:'red'};
 if(i===13)mission={type:'sequence',prompt:'Check the rope, then the pole.',hint:'先點繩結，再點支架。',answer:'frame',steps:['rope','frame']};
 if(i===14)mission={type:'sequence',prompt:'Tap Gail, the friend, then the giant.',hint:'依序點 Gail、小男孩、巨人，一起抬高傘。',answer:'giant',steps:['gail','boy','giant']};
 if(i>=15){placements.giant={image:'giant-canopy.png',x:57,y:50,w:59,h:91};placements.canopy={image:undefined,x:57,y:15,w:58,h:20};placements.gail={x:40,y:76};placements.boy={x:51,y:77};placements.friend={x:70,y:77};}
 return {title:titles[i],scene:settings[i],lines:[...text[level]],words:words[i],objects:['gail','giant',...props[i]],placements,mission,action:'explore'};
});}
export function giantChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{
 const out:Record<number,Record<number,StoryMotion[]>>={};
 const add=(p:number,re:RegExp,cues:StoryMotion[])=>{out[p]={[Math.max(0,giantText[p][level].findIndex(s=>re.test(s)))]:cues};};
 add(0,/Gail|wave/i,[{actor:'gail',x:35,y:76,walk:true}]);
 add(2,/lift|stretches|tries/i,[{actor:'red',x:35,y:40}]);
 add(3,/step|move|stay/i,[{actor:'gail',x:35,y:76,walk:true}]);
 add(5,/bring|offers|share/i,[{actor:'boy',x:32,y:77,walk:true},{actor:'blue',x:42,y:51}]);
 add(8,/tie|pull/i,[{actor:'rope',x:50,y:56,rotate:12}]);
 add(10,/closer|overlap|edge/i,[{actor:'blue',x:48,y:56}]);
 add(11,/wind|gust/i,[{actor:'canopy',x:52,y:35,rotate:8}]);
 add(13,/pull|check/i,[{actor:'rope',x:49,y:58,rotate:-8}]);
 add(14,/lift|raise/i,[{actor:'canopy',x:54,y:31}]);
 add(16,/under|invites|come/i,[{actor:'friend',x:70,y:77,walk:true}]);
 add(17,/walk|steps/i,[{actor:'giant',x:61,y:50,walk:true},{actor:'gail',x:44,y:76,walk:true},{actor:'boy',x:55,y:77,walk:true},{actor:'friend',x:74,y:77,walk:true}]);
 
 return out;
}
