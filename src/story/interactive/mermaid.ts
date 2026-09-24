import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {mermaidText,mermaidTitles,mermaidWords} from './mermaid-text';
export const mermaidVocabulary='mermaid coral reef seaweed sand shell crab turtle shelter tidy messy clean dirty scrub spotless natural protect habitat belong litter'.split(' ');
export const mermaidObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('seated'),x:22,y:68,w:25,h:33},
mira:{id:'mira',word:'mermaid',image:'mira.png',x:79,y:60,w:26,h:52},
shell:{id:'shell',word:'shell',image:'shell.png',x:47,y:86,w:17,h:18},
seaweed:{id:'seaweed',word:'seaweed',image:'seaweed.png',x:59,y:68,w:17,h:39},
coral:{id:'coral',word:'coral',image:'coral.png',x:90,y:84,w:18,h:29},
fish:{id:'fish',word:'fish',image:'fish.png',x:89,y:67,w:11,h:12},
crab:{id:'crab',word:'crab',image:'crab.png',x:41,y:89,w:12,h:13},
turtle:{id:'turtle',word:'turtle',image:'turtle.png',x:65,y:40,w:17,h:18},
rock:{id:'rock',word:'shelter',image:'rock.png',x:49,y:84,w:20,h:22},
brush:{id:'brush',word:'scrub',image:'brush.png',x:71,y:88,w:13,h:12},
litter:{id:'litter',word:'litter',image:'litter.png',x:50,y:89,w:12,h:14},
basket:{id:'basket',word:'clean',image:'basket.png',x:69,y:84,w:17,h:21},
sand:{id:'sand',word:'sand',x:49,y:76,w:30,h:22},
};
export const mermaidScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'A GOOD HOME NEED NOT BE PERFECT',alt:'瑜瑜熟悉的星空臥室'},reef:{name:'美人魚花園',caption:'ROOM FOR LIFE',alt:'海草與珊瑚環繞的水底花園'},bare:{name:'清空的沙地',caption:'WHOSE HOME IS THIS?',alt:'被整理得光禿禿的水底沙地'}};
export function mermaidPages(level:ReadingLevel):StoryPage[]{return mermaidText.map((t,i)=>{
let scene=i>=6&&i<=15?'bare':'reef',objects=['gail','mira'],answer='mira',placements:StoryPage['placements']={};
if(i===0||i===19){scene='bedroom';objects=['gail','shell'];answer='shell';placements.gail={image:gailPoseImage('kneeling'),x:30,y:81,w:28,h:35};placements.shell={x:54,y:86,w:18,h:20};}
else{
 if(i<6||i>=16){objects.push('shell','seaweed','coral','fish');}
 if(i===2||i===3){answer='coral';}
 if(i===4||i===5){answer=i===4?'shell':'seaweed';}
 if(i===6){objects.push('shell','seaweed','sand');answer='sand';}
 if(i===7||i===8||i===9){objects.push('crab');answer='crab';if(i>=8){objects.push('turtle');answer='turtle';}}
 if(i===10){objects.push('sand');answer='sand';}
 if(i===11){objects.push('shell','seaweed');answer='seaweed';}
 if(i===12||i===13){objects.push('litter','basket');answer='litter';}
 if(i===14){objects.push('brush','coral');answer='brush';}
 if(i===15){objects.push('rock','coral','fish');answer='rock';}
 if(i>=16){objects.push('crab','turtle','rock');placements.mira={image:'mira-happy.png'};answer=i===16?'seaweed':i===17?'crab':'turtle';placements.rock={x:45,y:84};placements.shell={x:38,y:87,w:13,h:14};}
}
return {title:mermaidTitles[i],scene,lines:t[level],objects,placements,words:mermaidWords[i],mission:{type:'tap',answer,prompt:['Follow the glowing shell.','Meet Abby.','Explore the reef.','Find the coral.','Look at the shells.','Watch the seaweed.','Notice the empty sand.','Find the crab.','Follow the turtle.','Look for shelter.','Look at the bare patch.','Find what belongs here.','Find the litter.','Collect the bottle.','Put the brush down.','Explore a habitat.','Give the plants room.','Welcome the crab back.','Enjoy the living garden.','Remember this home.'][i],hint:'點小星星，探索動物的家。'},action:'explore'};
});}
export const mermaidChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
