import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import type {StoryMotion} from './choreography';
import {bearText,bearTitles} from './bear-text';
export const bearVocabulary='bear tile clay shelf reach bump crack broken piece hide worried truth tell sorry honest adult gloves sweep repair mosaic'.split(' ');
export const bearObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:22,y:69,w:25,h:57},
 bear:{id:'bear',word:'bear',image:'bear-reaching.png',x:77,y:71,w:27,h:50},
 adult:{id:'adult',word:'adult',image:'adult.png',x:86,y:56,w:27,h:73},
 tile:{id:'tile',word:'tile',image:'tile.png',x:52,y:83,w:16,h:14},
 shelf:{id:'shelf',word:'shelf',image:'shelf-clean.png',x:50,y:80,w:34,h:23},
 pot:{id:'pot',word:'pot',image:'pot.png',x:50,y:59,w:20,h:22},
 piece:{id:'piece',word:'piece',image:'pieces.png',x:50,y:89,w:28,h:17},
 curtain:{id:'curtain',word:'hide',image:'curtain.png',x:50,y:81,w:36,h:33},
 gloves:{id:'gloves',word:'gloves',image:'gloves.png',x:52,y:79,w:19,h:16},
 clay:{id:'clay',word:'clay',image:'clay.png',x:51,y:80,w:15,h:13},
 sweep:{id:'sweep',word:'sweep',image:'sweep.png',x:57,y:84,w:25,h:20},
 repair:{id:'repair',word:'repair',image:'smooth.png',x:48,y:82,w:26,h:18},
 mosaic:{id:'mosaic',word:'mosaic',image:'mosaic.png',x:51,y:55,w:23,h:27}
};
export const bearScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'AN HONEST BEGINNING',alt:'熟悉的星空房間'},workshop:{name:'陶藝小屋',caption:'TELL THE TRUTH. TAKE THE NEXT STEP.',alt:'溫暖陶藝工作室與木地板'},courtyard:{name:'陶藝屋庭院',caption:'PIECE BY PIECE',alt:'陶藝小屋外的石頭庭院'}};
const vocabulary=[['tile'],['tile'],['bear','adult','clay'],['shelf'],['reach'],['bump','crack','broken'],['piece'],['hide'],['worried'],['tell'],['truth'],['adult','tell'],['honest'],['sorry'],['gloves'],['sweep'],['repair'],['mosaic','piece'],['honest'],['tile']];
export function bearPages(level:ReadingLevel):StoryPage[]{return bearText.map((t,i)=>{let objects=['gail','bear','shelf','pot'];const placements:StoryPage['placements']={};
 if(i<2||i===19){objects=['gail','tile'];placements.gail={image:gailPoseImage('kneeling'),x:30,y:77,w:30,h:38};}
 if(i===2)objects=['gail','bear','adult','clay'];
 if(i===5)objects.push('piece');
 if(i>=6&&i<=13){objects=['gail','bear','piece'];placements.bear={image:'bear-worried.png'};if(i>=7&&i<=10)objects.push('curtain');if(i>=11)objects.push('adult');}
 if(i===9||i===10)placements.gail={image:gailPoseImage('seated'),h:39,y:77,w:30};
 if(i===14)objects=['gail','bear','adult','piece','gloves'];
 if(i===15)objects=['gail','bear','adult','piece','sweep'];
 if(i===16)objects=['gail','bear','adult','repair'];
 if(i===17)objects=['gail','bear','adult','shelf','repair','mosaic'];
 if(i===18)objects=['gail','bear','adult','shelf','mosaic'];
 if(objects.includes('adult'))placements.bear={...placements.bear,x:65,y:77,w:23,h:42};
 const answer=['tile','tile','clay','shelf','bear','pot','piece','curtain','bear','bear','bear','adult','bear','bear','gloves','sweep','repair','mosaic','mosaic','tile'][i];
 return {title:bearTitles[i],scene:i<2||i===19?'bedroom':i>=16?'courtyard':'workshop',lines:t[level],objects,placements,words:vocabulary[i],mission:{type:'tap',answer,prompt:['Look closely at the tile.','Follow the blue light.','Find the clay.','Find the shelf.','Watch Bear reach.','Watch what happens.','Stay back from the pieces.','See what Bear hides.','Notice Bear’s face.','Give Bear time to tell.','Listen to the truth.','Tell the adult.','Give an honest answer.','Say sorry, then act.','Find the protective gloves.','Let the adult sweep.','Look at the smooth edges.','Build a mosaic.','Remember the next step.','Take the lesson home.'][i],hint:'點小星星聽發音，探索故事。'},action:'explore'};});}
export function bearChoreography(level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{return Object.fromEntries(bearPages(level).map((p,i)=>[i,{0:p.objects.includes('bear')?[{actor:'bear',x:p.placements?.bear?.x||77,y:p.placements?.bear?.y||71,rotate:-1}]:[]} ]));}
