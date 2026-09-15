import type {StoryMotion} from './choreography';
import {gailPoseImage} from './gail-poses';
import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {ReadingLevel} from './dragon-text';
import {musicText,musicTitles,musicWords} from './music-text';
export const musicVocabulary='music drum flute violin piano trumpet sound silent beat rhythm clap tap shake soft volume tune song band conductor bow'.split(' ');
export const musicObjects:Record<string,ObjectSpec>={
gail:{id:'gail',word:'Gail',kind:'girl',image:gailPoseImage('standing'),x:50,y:73,w:22,h:47},
rabbit:{id:'rabbit',word:'drum',image:'rabbit.png',x:15,y:65,w:23,h:46},
fox:{id:'fox',word:'flute',image:'fox.png',x:33,y:72,w:22,h:43},
bear:{id:'bear',word:'violin',image:'bear.png',x:75,y:67,w:26,h:55},
owl:{id:'owl',word:'conductor',image:'owl.png',x:55,y:40,w:18,h:30},
box:{id:'box',word:'music',image:'box.png',x:57,y:80,w:17,h:20},
drum:{id:'drum',word:'drum',image:'drum.png',x:15,y:83,w:21,h:24},
flute:{id:'flute',word:'flute',image:'flute.png',x:48,y:83,w:25,h:10},
violin:{id:'violin',word:'violin',image:'violin.png',x:61,y:80,w:14,h:25},
piano:{id:'piano',word:'piano',image:'piano.png',x:85,y:83,w:27,h:31},
trumpet:{id:'trumpet',word:'trumpet',image:'trumpet.png',x:50,y:88,w:21,h:16},
shakers:{id:'shakers',word:'shake',image:'shakers.png',x:57,y:65,w:11,h:17},
};
export const musicScenes:Record<string,SceneSpec>={bedroom:{name:'瑜瑜的固定房間',caption:'LISTEN, THEN JOIN',alt:'瑜瑜熟悉的星空臥室'},stage:{name:'音樂王國舞台',caption:'A PLACE FOR EVERY SOUND',alt:'藍金色布幕與城堡背景的木頭舞台'}};
export function musicPages(level:ReadingLevel):StoryPage[]{return musicText.map((t,i)=>{
let objects=['gail','rabbit','fox','bear','drum'],placements:StoryPage['placements']={};
if(i===0||i===19){objects=['gail','box'];placements.gail={image:gailPoseImage('kneeling'),x:29,y:78,w:29,h:37};}
if(i===5){objects=['gail','piano','trumpet'];placements.gail={x:26};placements.piano={x:65,y:72,w:43,h:49};}
if(i===11)objects.push('shakers');
if(i>=12&&i<=18)objects.push('owl');
if(i>=15&&i<=17){objects.push('piano');placements.gail={image:gailPoseImage('piano-seated'),x:51,y:75,w:23,h:43};placements.piano={x:68,y:77,w:30,h:40};placements.bear={x:88,y:62,w:22,h:46};}
if(i===18)placements.owl={image:'owl-bow.png'};
const answer=i===0||i===19?'box':i===1?'fox':i===2||i===9?'drum':i===3||i===13?'fox':i===4||i===14?'bear':i===5||i===15?'piano':i===11?'shakers':i===12||i===18?'owl':'gail';
return {title:musicTitles[i],scene:i===0||i===19?'bedroom':'stage',lines:t[level],objects,placements,words:musicWords[i],mission:{type:'tap',answer,prompt:['Open the music box.','Meet the band.','Hear the drum.','Listen to the flute.','Listen to the violin.','Explore the piano.','Lower the volume.','Notice the silence.','Clap with Gail.','Tap and wait.','Follow the rhythm.','Shake softly.','Watch the conductor.','Invite the flute.','Let the violin join.','Add piano notes.','Follow the song.','Listen together.','Take a bow.','Remember the rhythm.'][i],hint:'點小星星，探索這一幕。'},action:'explore'};
});}
export const musicChoreography=(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>=>({});
