import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {foxText} from './fox-text';
export const foxVocabulary=['drop','door','fox','brush','paper','draw','line','sad','try','spill','mistake','wait','turn','river','yellow','stem','leaf','butterfly','share','proud'];
export const foxObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:23,y:65,w:25,h:58},
 fox:{id:'fox',word:'fox',image:'fox-worried.png',x:79,y:65,w:28,h:48},
 table:{id:'table',word:'table',image:'table.png',x:54,y:81,w:50,h:35},
 paper:{id:'paper',word:'paper',image:'paper-blank.png',x:53,y:72,w:36,h:14},
 cup:{id:'cup',word:'paint',image:'cup.png',x:66,y:67,w:6,h:9},
 brush:{id:'brush',word:'brush',image:'brush.png',x:42,y:72,w:10,h:14},
 crumpled:{id:'crumpled',word:'paper',image:'crumpled.png',x:65,y:93,w:17,h:13},
 drop:{id:'drop',word:'drop',image:'drop.png',x:60,y:80,w:10,h:17},
 sketchbook:{id:'sketchbook',word:'book',image:'sketchbook.png',x:56,y:85,w:30,h:22},
 door:{id:'door',word:'door',x:66,y:42,w:22,h:60},
 flags:{id:'flags',word:'party',x:47,y:15,w:48,h:18},
 rabbit:{id:'rabbit',word:'rabbit',image:'rabbit.png',x:12,y:84,w:12,h:27},
 bear:{id:'bear',word:'bear',image:'bear.png',x:91,y:77,w:17,h:38},
};
export const foxScenes:Record<string,SceneSpec>={
 bedroom:{name:'Gail的星光臥室',caption:'ONE LITTLE TRY',alt:'靛藍色星光臥室，床邊留有寬敞地板'},
 path:{name:'森林畫室小徑',caption:'A DOOR INTO A STORY',alt:'苔綠色森林小徑通往樹洞畫室'},
 studio:{name:'小狐狸的畫室',caption:'LOOK AGAIN, TRY AGAIN',alt:'溫暖樹洞畫室，獨立畫桌、人物與畫紙'},
 outside:{name:'森林畫展',caption:'ROOM FOR EVERY IDEA',alt:'樹洞畫室外的掛畫繩與花草'}
};
const titles=['A golden drop','A painted door','The tree studio','A blank page','A party picture','One little line','Not good enough?','One small try','Oops!','A blue mistake','Wait with a friend','Look again','Yellow flowers','A little green stem','A winding vine','My own idea','Room for friends','Our picture','Ready to begin','A line at home'];
const words=[['drop'],['door'],['fox'],['brush','paper'],['draw'],['line'],['sad'],['try'],['spill'],['mistake'],['wait'],['turn','river'],['yellow'],['stem'],['leaf'],['butterfly'],['share'],['proud'],['draw','line'],['try']];
export function foxPages(level:ReadingLevel):StoryPage[]{return foxText.map((text,i)=>{
 const room=i<2||i===19,scene=room?'bedroom':i===2?'path':i===17?'outside':'studio';
 const placements:StoryPage['placements']={};
 let objects=room?['gail','sketchbook','drop']:i===2?['gail','fox','door']:['gail','fox','table','paper','cup'];
 if(room){placements.gail={x:30,y:72,w:27,h:47,image:gailPoseImage('seated')};}
 if(i===1){objects.push('door');placements.drop={x:66,y:30};}
 if(i===4)objects.push('flags');
 if(i===6)objects.push('crumpled');
 if(i===7||i===10)placements.gail={image:gailPoseImage('seated'),y:77,h:35,w:25};
 if(i===8||i===9){placements.gail={image:gailPoseImage('surprised')};placements.fox={image:'fox-surprised.png'};}
 if(i===11)placements.gail={image:gailPoseImage('reaching'),w:30};
 if(i>=13)placements.fox={image:i===17?'fox-happy.png':'fox-painting.png'};
 if(i>=9&&i<=11)placements.paper={image:'paper-spill.png'};
 if(i===12)placements.paper={image:'paper-spill.png'};
 if(i===13)placements.paper={image:'paper-dots.png'};
 if(i===14)placements.paper={image:'paper-stems.png'};
 if(i===15)placements.paper={image:'paper-vine.png'};
 if(i===16||i===17)placements.paper={image:'paper-finished.png'};
 if([5,12,13,14,15,18,19].includes(i))objects.push('brush');
 if(i===16||i===17){objects.push('rabbit','bear');placements.gail={x:24,w:20,h:51};placements.fox={x:75,w:22,h:43,image:'fox-happy.png'};}
 if(i===17){objects=objects.filter(id=>!['table','cup'].includes(id));placements.paper={image:'paper-finished.png',x:51,y:62,w:36,h:39};placements.gail={image:gailPoseImage('raised-hand'),x:25,y:68,w:23,h:58};}
 if(i===19){placements.paper={image:'paper-dots.png',x:56,y:83,w:21,h:13};objects.push('paper');placements.brush={x:70,y:83};}
 const targets=['drop','door','door','brush','flags','brush','crumpled','gail','cup','paper','gail','paper','brush','brush','brush','brush','rabbit','paper','brush','brush'];
 if(i===3)objects.push('brush');
 let mission:StoryPage['mission']={type:'find',answer:targets[i],prompt:`Find ${targets[i]==='gail'?'Gail':'the '+foxObjects[targets[i]].word}.`,hint:'點選場景中的物件，可以聽發音。'};
 if([5,12,13,14,15,18,19].includes(i))mission={type:'drag',answer:'brush',target:'paper',prompt:i===13?'Add a green stem.':i===14?'Add a leaf.':i===15?'Add butterfly wings.':'Bring the brush to the paper.',hint:'把畫筆拖到畫紙；也可以先點畫筆，再點畫紙。'};
 if(i===11)mission={type:'tap',answer:'paper',prompt:'Turn the paper. Find a river.',hint:'點畫紙，換個方向看看。'};
 if(i===16)mission={type:'sequence',answer:'bear',steps:['rabbit','bear'],prompt:'Share with Rabbit, then Bear.',hint:'先點兔子，再點小熊，一起畫畫。'};
 if(i===17)mission={type:'tap',answer:'paper',prompt:'Hang our picture.',hint:'點畫作，一起掛到繩子上。'};
 return {title:titles[i],scene,lines:[...text[level]],words:words[i],objects,placements,mission,action:'explore'};
});}
/** Sentence-timed gestures; same story beats across reading levels. */
export function foxChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{
 const result:Record<number,Record<number,StoryMotion[]>>={};
 const add=(p:number,line:number,cues:StoryMotion[])=>{(result[p]??={})[Math.min(line,foxText[p][level].length-1)]=cues;};
 add(0,0,[{actor:'drop',x:58,y:75,rotate:8}]);
 add(1,0,[{actor:'drop',x:66,y:26}]);add(1,1,[{actor:'gail',x:51,y:70,walk:true}]);
 add(2,0,[{actor:'gail',x:36,y:65,walk:true}]);
 add(3,0,[{actor:'brush',x:63,y:59,rotate:15}]);
 add(4,0,[{actor:'fox',x:78,y:64,rotate:-3}]);
 add(5,0,[{actor:'brush',x:53,y:72,rotate:-12}]);
 add(6,0,[{actor:'fox',x:79,y:67,rotate:-5}]);add(6,1,[{actor:'crumpled',x:69,y:92,rotate:25}]);
 add(7,0,[{actor:'gail',x:30,y:77,rotate:2}]);
 add(8,0,[{actor:'fox',x:81,y:64,rotate:4}]);
 add(9,0,[{actor:'fox',x:79,y:68,rotate:-5}]);
 add(10,0,[{actor:'gail',x:31,y:77,rotate:2}]);
 add(11,0,[{actor:'gail',x:29,y:65,rotate:3}]);add(11,1,[{actor:'fox',x:77,y:65,rotate:-3}]);
 for(const p of [12,13,14,15]){add(p,0,[{actor:'brush',x:51,y:71,rotate:-18}]);add(p,1,[{actor:'brush',x:57,y:72,rotate:12},{actor:'fox',x:78,y:64,rotate:-2}]);}
 add(16,0,[{actor:'rabbit',x:16,y:84,walk:true},{actor:'bear',x:88,y:77,walk:true}]);
 add(17,0,[{actor:'paper',x:51,y:29}]);add(17,1,[{actor:'fox',x:75,y:63,rotate:3}]);
 add(18,0,[{actor:'brush',x:49,y:72,rotate:-12}]);add(18,1,[{actor:'brush',x:57,y:72,rotate:8}]);
 add(19,1,[{actor:'brush',x:57,y:82,rotate:-10}]);
 return result;
}
