import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {elfText,elfTitles,elfWords} from './elf-text';
export const elfVocabulary='elf acorn bud bloom ripe unripe change grow learn new old young season spring summer autumn winter melt frozen allow'.split(' ');
export const elfObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:23,y:68,w:22,h:45},
 nori:{id:'nori',word:'elf',image:'nori.png',x:77,y:70,w:23,h:39},
 acorn:{id:'acorn',word:'acorn',image:'acorn.png',x:52,y:70,w:10,h:14},
 bud:{id:'bud',word:'bud',image:'bud.png',x:44,y:75,w:13,h:26},
 bloom:{id:'bloom',word:'bloom',image:'bloom.png',x:44,y:75,w:13,h:26},
 twig:{id:'twig',word:'grow',image:'twig.png',x:52,y:65,w:20,h:40},
 unripe:{id:'unripe',word:'unripe',image:'unripe.png',x:61,y:69,w:10,h:12},
 ripe:{id:'ripe',word:'ripe',image:'ripe.png',x:61,y:69,w:10,h:12},
 young:{id:'young',word:'young',image:'young.png',x:51,y:82,w:14,h:17},
 grown:{id:'grown',word:'grow',image:'grown.png',x:52,y:58,w:20,h:23},
 autumn:{id:'autumn',word:'autumn',image:'autumn.png',x:51,y:61,w:19,h:23},
 winter:{id:'winter',word:'winter',image:'winter.png',x:51,y:60,w:20,h:25},
 canopy:{id:'canopy',word:'summer',x:77,y:17,w:35,h:28},
 home:{id:'home',word:'old',x:89,y:40,w:19,h:30}
};
export const elfScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'ONE DAY AT A TIME',alt:'瑜瑜熟悉的星空臥室'},forest:{name:'諾里的林間空地',caption:'ROOM TO GROW',alt:'暖陽下的林間空地與小精靈的樹屋'}};
export function elfPages(level:ReadingLevel):StoryPage[]{return elfText.map((t,i)=>{
 let scene='forest',objects=['gail','nori'],answer='nori',placements:StoryPage['placements']={};
 if(i===0||i===19){scene='bedroom';objects=['gail','acorn'];answer='acorn';placements.gail={image:gailPoseImage('kneeling'),x:30,y:81,w:28,h:35};placements.acorn={x:54,y:85,w:13,h:17};}
 else if(i===1){objects.push('acorn');}
 else if(i===2||i===8||i===9){objects.push('young');answer='young';if(i===2){objects.push('twig');placements.twig={x:52,y:77,w:20,h:25};placements.young={x:52,y:63};}}
 else if(i===3){objects.push('home');answer='home';}
 else if(i===4||i===5){objects.push('acorn','bud','twig','unripe');answer='acorn';placements.acorn={x:69,y:52};}
 else if(i===6){objects.push('bud');answer='bud';}
 else if(i===7){objects.push('twig','unripe');answer='unripe';}
 else if(i===10){objects.push('bud','autumn');answer='autumn';placements.autumn={x:57,y:64};}
 else if(i===11){objects.push('bud','bloom');answer='bud';}
 else if(i===12){objects.push('canopy');answer='canopy';}
 else if(i===13){objects.push('autumn');answer='autumn';}
 else if(i===14||i===15){objects.push('winter');answer='winter';}
 else if(i===16){objects.push('acorn','bud','bloom');answer='acorn';placements.acorn={x:67,y:55};}
 else if(i===17){objects.push('twig','unripe','ripe');answer='unripe';}
 else if(i===18){objects.push('bloom','grown');answer='grown';placements.nori={image:'nori-happy.png'};}
 if(i>=16&&i<19)placements.nori={image:'nori-happy.png'};
 return {title:elfTitles[i],scene,lines:t[level],objects,placements,words:elfWords[i],mission:{type:'tap',answer,prompt:['Follow the glowing acorn.','Meet Nori.','Find the young bird.','Find the old tree house.','Notice what Nori loves.','Try the acorn’s spell.','Look at the closed bud.','Find the unripe apple.','Look at the little wings.','Help Nori think.','Imagine a changing year.','Imagine a spring bloom.','Imagine summer shade.','Watch an autumn leaf.','Imagine winter snow.','Watch the snow melt.','Let the bud open.','Watch the apple ripen.','Follow the new flight.','Remember one new thing.'][i],hint:'點小星星，看看森林的變化。'},action:'explore'};
});}
export const elfChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
