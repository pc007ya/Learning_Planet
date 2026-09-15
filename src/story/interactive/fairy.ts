import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {fairyText,fairyTitles} from './fairy-text';
export const fairyVocabulary='fairy wand yes no please busy tired rest carry bucket parcel ribbon heavy full empty enough choose promise picnic kind'.split(' ');
export const fairyObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:23,y:68,w:23,h:53},
fairy:{id:'fairy',word:'fairy',image:'fairy.png',x:73,y:66,w:24,h:51},
squirrel:{id:'squirrel',word:'squirrel',image:'squirrel.png',x:14,y:79,w:21,h:31},
hedgehog:{id:'hedgehog',word:'hedgehog',image:'hedgehog.png',x:89,y:82,w:19,h:25},
wand:{id:'wand',word:'wand',image:'wand.png',x:58,y:77,w:18,h:25},
bucket:{id:'bucket',word:'bucket',image:'bucket.png',x:42,y:80,w:15,h:21},
parcel:{id:'parcel',word:'parcel',image:'parcel.png',x:55,y:82,w:17,h:18},
ribbon:{id:'ribbon',word:'ribbon',image:'ribbon.png',x:70,y:62,w:13,h:15},
cart:{id:'cart',word:'full',image:'loaded-cart.png',x:49,y:72,w:39,h:37},
emptycart:{id:'emptycart',word:'empty',image:'empty-cart.png',x:49,y:81,w:39,h:24},
blanket:{id:'blanket',word:'empty',x:53,y:88,w:34,h:12},
picnic:{id:'picnic',word:'picnic',image:'picnic.png',x:53,y:87,w:50,h:22},
};
export const fairyScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'A KIND YES. A KIND NO.',alt:'瑜瑜熟悉的星空臥室'},meadow:{name:'仙女的草地村莊',caption:'KIND TO FRIENDS. KIND TO YOURSELF.',alt:'樹旁的草地與遠方村莊'}};
const words=[['wand','ribbon'],['fairy'],['yes','bucket'],['parcel','please'],['busy'],['heavy'],['full'],['empty'],['tired'],['rest'],['promise'],['enough'],['no'],['kind'],['choose'],['carry'],['empty'],['picnic'],['kind'],['yes','no']];
export function fairyPages(level:ReadingLevel):StoryPage[]{return fairyText.map((t,i)=>{
let objects=['gail','fairy'],placements:StoryPage['placements']={};
if(i<2||i===19){objects=['gail','wand'];placements.gail={image:gailPoseImage('kneeling'),x:28,y:77,w:29,h:38};}
if(i===2){objects.push('squirrel','bucket');placements.gail={x:36,w:20,h:48,y:69};}
if(i===3){objects.push('hedgehog','parcel');placements.gail={x:24};}
if(i>=4&&i<=12){objects.push('cart');placements.gail={x:19};placements.fairy={x:78};}
if(i===4)objects.push('parcel');
if(i===7)objects.push('blanket');
if(i>=8&&i<=11){placements.fairy={image:'fairy-tired.png',x:76,y:80,w:27,h:31};placements.gail={image:gailPoseImage('seated'),x:21,y:78,w:25,h:34};}
if(i===12)placements.fairy={image:'fairy-no.png'};
if(i===13){objects.push('squirrel','hedgehog');placements.gail={x:39};placements.fairy={x:65};}
if(i===14)objects.push('ribbon');
if(i===15){objects=['gail','fairy','squirrel','hedgehog','bucket','parcel','emptycart'];placements.gail={x:32,w:19,h:44,y:69};placements.fairy={x:67,w:20,h:44,y:68};placements.emptycart={x:50,y:87,w:22,h:17};placements.bucket={x:47,y:78,w:11,h:16};placements.parcel={x:55,y:78,w:12,h:12};}
if(i>=16&&i<=18){objects=['gail','fairy','squirrel','hedgehog','picnic'];placements.gail={image:gailPoseImage('seated'),x:33,y:72,w:24,h:33};placements.fairy={x:65,y:67,w:20,h:40};if(i===16)objects.push('emptycart');placements.emptycart={x:88,y:53,w:20,h:14};}
const answer=i<2||i===19?'wand':i===2?'bucket':i===3?'parcel':i>=4&&i<=7?'cart':i===14?'ribbon':i===15?'bucket':i===16?'emptycart':i===17?'picnic':'fairy';
return {title:fairyTitles[i],scene:i<2||i===19?'bedroom':'meadow',lines:t[level],objects,placements,words:words[i],mission:{type:'tap',answer,prompt:['Explore the wand.','Follow the ribbon.','Find the bucket.','Find the parcel.','Notice the busy cart.','Try moving the cart.','Look at the full cart.','Notice the empty picnic place.','Notice Fairy’s face.','Give Fairy time to rest.','Listen to Fairy.','One job is enough.','Try a kind no.','Notice the friends.','Choose the ribbon.','Share the carrying.','Find the empty cart.','Join the picnic.','Be kind to yourself.','Remember yes and no.'][i],hint:'點小星星，探索這一幕。'},action:'explore'};
});}
export const fairyChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
export const fairyWordArt:Record<string,string>={fairy:'fairy',wand:'wand',yes:'fairy',no:'fairy-no',please:'parcel',busy:'loaded-cart',tired:'fairy-tired',rest:'fairy-tired',carry:'bucket',bucket:'bucket',parcel:'parcel',ribbon:'ribbon',heavy:'loaded-cart',full:'loaded-cart',empty:'empty-cart',enough:'ribbon',choose:'ribbon',promise:'fairy',picnic:'picnic',kind:'fairy'};

