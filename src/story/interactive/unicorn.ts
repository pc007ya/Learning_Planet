import rows from './unicorn-story.json';
import vocabulary from './unicorn-vocabulary.json';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
import type {StoryMotion} from './choreography';

const asset='images/story/unicorn-v1/';
const glosses=['獨角獸','樹林','微光；發光','奔馳','鬃毛','路標','小樹林','捷徑','岔路','樹冠','彎曲的','小跑','下垂','林地的','蹄子','長滿青苔的','閃爍','輕聲嘶鳴','詢問','方向；指引'];
export const unicornWordArt:Record<string,[string,string,string?]>={
 unicorn:['lumi.png',''],woods:['woods.png',''],glow:['glow.svg','✦'],gallop:['lumi.png','→ → →','run fast'],mane:['lumi.png','↑','hair on a horse’s neck'],
 signpost:['signpost.svg',''],grove:['grove.png',''],shortcut:['map.svg','↗','a quicker way'],fork:['signpost.svg','↖ ↗','where the path splits'],canopy:['woods.png','↑','leafy roof'],
 crooked:['mark.svg','↝','not straight'],trot:['lumi.png','→ →','small running steps'],droop:['lumi.png','↓','hang down'],woodland:['woods.png',''],hooves:['lumi.png','↓','unicorn feet'],
 mossy:['riverbank.png','↓','covered with soft moss'],shimmer:['moonflower.svg','✧ ✦ ✧'],nicker:['mother.png','♫','a gentle horse sound'],ask:['../parrot-v1/rabbit.png','? → 💬'],directions:['map.svg','↗','which way to go']
};
export function unicornCard(word:string):HTMLElement{
 const [file,cue,caption]=unicornWordArt[word]||['glow.svg','',''];const frame=document.createElement('div');frame.className='layered-word-visual';
 const image=document.createElement('img');image.src=asset+file;image.alt='';frame.append(image);
 if(cue){const mark=document.createElement('span');mark.className='concept-cue';mark.textContent=cue;frame.append(mark);}
 if(caption){const label=document.createElement('small');label.textContent=caption;frame.append(label);}return frame;
}
const base:Record<string,ObjectSpec>={
 gail:{id:'gail',image:'../shared-gail-v1/standing.png',x:23,y:69,w:25,h:57,word:'Gail',z:4},
 lumi:{id:'lumi',image:'lumi.png',x:73,y:67,w:32,h:59,word:'unicorn',z:4,flipX:true},
 mother:{id:'mother',image:'mother.png',x:78,y:58,w:30,h:70,word:'unicorn',z:3,flipX:true},
 glow:{id:'glow',image:'glow.svg',x:68,y:37,w:11,h:17,word:'glow',z:5},
 signpost:{id:'signpost',image:'signpost.svg',x:51,y:60,w:17,h:59,word:'signpost',z:2},
 map:{id:'map',image:'map.svg',x:53,y:77,w:22,h:22,word:'directions',z:5},
 mark:{id:'mark',image:'mark.svg',x:52,y:49,w:10,h:18,word:'crooked',z:5},
 rabbit:{id:'rabbit',image:'../parrot-v1/rabbit.png',x:80,y:78,w:16,h:28,word:'woodland',z:4},
 flower:{id:'flower',image:'moonflower.svg',x:61,y:73,w:12,h:28,word:'shimmer',z:5},
 portal:{id:'portal',image:'portal.svg',x:68,y:49,w:32,h:80,word:'glow',z:1}
};
type Layout={scene:string;objects:string[];target:string;positions?:Record<string,Partial<ObjectSpec>>};
const layouts:Layout[]=[
 {scene:'woods',objects:['gail','glow'],target:'glow',positions:{gail:{x:25,y:69}}},
 {scene:'woods',objects:['gail','lumi','glow'],target:'lumi',positions:{lumi:{x:76,y:65},glow:{x:86,y:28,w:7,h:11}}},
 {scene:'woods',objects:['gail','lumi'],target:'lumi'},
 {scene:'woods',objects:['gail','lumi','glow'],target:'lumi',positions:{glow:{x:80,y:24,w:7,h:12}}},
 {scene:'woods',objects:['gail','lumi','signpost'],target:'signpost',positions:{gail:{x:18},lumi:{x:81,w:25},signpost:{x:48}}},
 {scene:'grove',objects:['gail','lumi'],target:'lumi',positions:{lumi:{x:75}}},
 {scene:'grove',objects:['gail','lumi','map','signpost'],target:'map',positions:{signpost:{x:80,w:12,h:42},map:{x:48,y:77}}},
 {scene:'woods',objects:['gail','lumi','mark'],target:'mark',positions:{mark:{x:47,y:33}}},
 {scene:'woods',objects:['gail','lumi','mark'],target:'mark',positions:{mark:{x:47,y:33},lumi:{x:77,y:72,h:52}}},
 {scene:'woods',objects:['gail','lumi','rabbit'],target:'rabbit',positions:{rabbit:{x:51,y:79},lumi:{x:83}}},
 {scene:'riverbank',objects:['gail','lumi'],target:'lumi',positions:{gail:{x:16,y:75,w:22},lumi:{x:38,y:68,w:28}}},
 {scene:'riverbank',objects:['gail','lumi','glow'],target:'glow',positions:{gail:{x:16,y:75,w:22},lumi:{x:38,y:68,w:28},glow:{x:78,y:21,w:9,h:15}}},
 {scene:'riverbank',objects:['gail','lumi'],target:'lumi',positions:{gail:{x:18,y:77,w:22,image:'../shared-gail-v1/kneeling.png',h:49},lumi:{x:39,y:73,w:29,h:52}}},
 {scene:'riverbank',objects:['gail','lumi'],target:'gail',positions:{gail:{x:19,y:76,w:23,image:'../shared-gail-v1/kneeling.png',h:49},lumi:{x:41,y:74,w:29,h:52}}},
 {scene:'riverbank',objects:['gail','lumi','map'],target:'map',positions:{gail:{x:17,y:76,w:22,image:'../shared-gail-v1/kneeling.png',h:49},lumi:{x:42,y:70,w:28},map:{x:35,y:87,w:21}}},
 {scene:'woods',objects:['gail','lumi','rabbit','flower'],target:'rabbit',positions:{rabbit:{x:75,y:78},lumi:{x:51,y:69,w:29},flower:{x:91,y:79,w:8,h:22}}},
 {scene:'meadow',objects:['gail','lumi','flower'],target:'flower',positions:{gail:{x:23},lumi:{x:68},flower:{x:48,y:75,w:13}}},
 {scene:'meadow',objects:['gail','lumi','mother','flower'],target:'mother',positions:{gail:{x:17,y:70,w:23},lumi:{x:49,y:72,w:27,h:50},mother:{x:82,y:61,w:30,h:66},flower:{x:63,y:81,w:9,h:19}}},
 {scene:'meadow',objects:['gail','lumi','mother'],target:'lumi',positions:{gail:{x:16,y:73,w:22},lumi:{x:48,y:73,w:28,h:53},mother:{x:81,y:61,w:31,h:66}}},
 {scene:'meadow',objects:['gail','lumi','mother','flower'],target:'flower',positions:{gail:{x:17,y:74,w:23},lumi:{x:48,y:71,w:30,h:56},mother:{x:83,y:61,w:30,h:66},flower:{x:64,y:79,w:9,h:20}}}
];
const scenes:Record<string,SceneSpec>={woods:{name:'魔法森林',caption:'A SILVER GLOW IN THE WOODS',alt:'陽光穿過樹木的魔法森林'},grove:{name:'巨型蘑菇林',caption:'THE MUSHROOM GROVE',alt:'發光的巨型蘑菇與消失的小路'},riverbank:{name:'黃昏河岸',caption:'THE RUSHING RIVER',alt:'夕陽下沒有橋梁的湍急河流'},meadow:{name:'月光草原',caption:'MOONLIGHT MEADOW',alt:'月光下閃爍的草原與遠方瀑布'}};
const pageWords=[['woods','glow'],['unicorn','gallop','mane'],['ask'],['unicorn'],['signpost','fork'],['grove','shortcut'],['fork'],['canopy','crooked'],['trot','droop'],['woodland','ask'],['unicorn'],['woods'],['hooves'],['mane'],['mossy','directions'],['ask','directions'],['shimmer'],['nicker'],['ask'],['ask','directions']];
const pagePrompts=['Find the silver glow.','Find Lumi the unicorn.','Tap Lumi when he says he knows the way.','Who wants to go home?','Find the signpost before Lumi runs left.','Find Lumi in the mushroom grove.','Find the map that Gail offers.','Look for the mark by the crooked tree.','Find the mark that Gail remembers.','Find the rabbit they could ask.','Tap Lumi at the river.','Find the last light in the sky.','Tap Lumi when he tells the truth.','Tap Gail when she offers help.','Find the map clues.','Find the rabbit who shows the way.','Find a glowing moon flower.','Find Lumi’s mother.','Tap Lumi when he explains how he got home.','Find the flower on the way home.'];
const pageHints=['銀白色的光在樹林前方。','看白色、淡紫鬃毛的小獨角獸。','點小獨角獸 Lumi。','Lumi 想回月光草原。','先看木製路標。','蘑菇林裡找 Lumi。','地圖可以指引方向。','同一棵樹有特別的記號。','樹上的記號說明來過這裡。','兔子可以幫忙指路。','河岸邊的 Lumi 停下來了。','看看夕陽旁的亮光。','Lumi 終於說出不知道。','瑜瑜陪 Lumi 一起找。','地圖上有河、山、月亮。','兔子知道花朵的方向。','花朵照亮回家的小路。','媽媽在草原上迎接 Lumi。','Lumi 說他開口求助了。','停下、看一看，再開口問。'];
const quizRows:[number,string,string,string,string[]][]=[
 [1,'What does Gail see?','What does Gail see in the woods?','What does Gail spot deep in the magical woods?',['a silver glow','a golden apple','a red kite','a blue bird']],
 [2,'Who runs by?','Who runs down the path?','Which animal nearly bumps into Gail?',['a little unicorn','a fox','a bear','a dragon']],
 [3,'What does Lumi say?','What does Lumi say when Gail asks if he is lost?','How does Lumi answer when Gail asks if he is lost?',['“I know the way!”','“I am hungry.”','“I want to sleep.”','“Please carry me.”']],
 [4,'Where is Lumi going?','Where does Lumi want to go?','Where is Lumi trying to return?',['Moonlight Meadow','a sandy beach','a pirate harbor','a stone castle']],
 [5,'Which way does Lumi go?','Which path does Lumi choose?','What does Lumi do before Gail reads the signpost?',['He runs left.','He reads the map.','He asks the rabbit.','He waits for Gail.']],
 [6,'What is in the grove?','What fills the strange grove?','What plants fill Lumi’s first supposed shortcut?',['giant mushrooms','sunflowers','apple trees','roses']],
 [7,'What does Gail have?','What does Gail take from her bag?','What does Gail offer to use at the second fork?',['a colorful map','a lamp','a compass','a book']],
 [8,'What do they see again?','What shows they walked in a circle?','Which clue reveals that they have walked in a circle?',['the same crooked tree','a new bridge','the moon flowers','the unicorn herd']],
 [9,'What does Gail point to?','What mark does Gail notice?','What does Gail notice on the tree’s bark?',['a familiar mark','a golden key','a broken branch','a little nest']],
 [10,'Who hops by?','Who could give them directions?','Which woodland animal does Lumi hurry past?',['a friendly rabbit','an owl','a squirrel','a deer']],
 [11,'What blocks their way?','What stops Gail and Lumi?','Why can they not keep going forward?',['a wide river with no bridge','a locked gate','a mountain of snow','a fallen tower']],
 [13,'What does Lumi say?','What does Lumi finally admit?','What does Lumi honestly say to Gail as night falls?',['“I don’t know.”','“I won!”','“I have a boat.”','“I see my house.”']],
 [14,'What does Gail do?','How does Gail help Lumi feel safe?','How does Gail respond when Lumi admits he does not know?',['She says they can find out together.','She laughs at him.','She walks away.','She hides the map.']],
 [15,'What do they read?','How do they use the map?','Which three landmarks help the map make sense?',['the river, mountain, and moon','the sea, ship, and sun','the bridge, gate, and tower','the apple, basket, and tree']],
 [16,'Who helps them?','Whom does Lumi ask for help?','Whose directions lead them to the glowing flowers?',['the friendly rabbit','the giant mushroom','the castle guard','the river fish']],
 [20,'What can we do?','What is the story’s lesson?','What helps Lumi find his way home?',['Stop, look, and ask for help.','Pretend to know every way.','Run without looking.','Never speak to a friend.']]
];
export function unicornBook(){
 const objects:Record<string,ObjectSpec>={...base};
 const pages=(level:ReadingLevel):StoryPage[]=>rows.map((row,i)=>{
  const layout=layouts[i];const placements=Object.fromEntries(layout.objects.map(id=>[id,{...base[id],...layout.positions?.[id]}]));
  return {title:row.title,scene:layout.scene,lines:row[level],translation:row[`zh${level}`].join(' '),words:pageWords[i],objects:layout.objects,placements,mission:{type:'tap',answer:layout.target,prompt:pagePrompts[i],hint:pageHints[i]},action:'explore'};
 });
 const questions=(level:ReadingLevel):StoryQuestion[]=>quizRows.map(([number,a,b,c,choices],i)=>{
  const p=pages(level)[number-1],layout=layouts[number-1],shift=(i*3+1)%4;
  const options=[...choices.slice(1)];options.splice(shift,0,choices[0]);
  return {id:`unicorn-${i+1}`,kind:'choice',prompt:level==='A'?a:level==='B'?b:c,options:options.map(text=>({text})),answer:[shift],explanation:choices[0],imageAlt:p.title,sceneImage:{background:asset+p.scene+'.png',assetBase:asset,objects:p.objects.map(id=>({...base[id],...layout.positions?.[id]}))}};
 });
 return {key:'unicorn' as const,title:'Gail and the Lost Unicorn',chineseTitle:'瑜瑜與迷路的獨角獸',asset,objects,scenes,pages,words:vocabulary,questions,entries:vocabulary.map((word,i)=>[word,glosses[i],'✦']),chinese:(page:number,level:ReadingLevel)=>rows[page][`zh${level}`],choreography:(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({})};
}
