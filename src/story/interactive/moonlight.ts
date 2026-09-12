import type {ObjectSpec,SceneSpec,StoryPage} from './book';
import type {StoryMotion} from './choreography';
import type {ReadingLevel} from './dragon-text';
import {moonlightText,moonlightTranslations} from './moonlight-text';

const spot=(id:string,word:string,x:number,y:number,w=18,h=18):ObjectSpec=>({id,word,x,y,w,h});
export const moonlightObjects:Record<string,ObjectSpec>={
 light:spot('light','light',73,25,18,22),moth:spot('moth','moth',75,23,18,23),window:spot('window','window',77,30,28,45),garden:spot('garden','garden',50,45,38,42),flower:spot('flower','flower',74,59,26,35),bell:spot('bell','bell',66,15,14,20),path:spot('path','path',57,72,30,25),bridge:spot('bridge','bridge',67,47,30,27),fog:spot('fog','fog',53,63,42,29),frog:spot('frog','frog',66,65,18,24),lily:spot('lily','lily pad',67,68,27,22),mushroom:spot('mushroom','mushroom',22,36,28,48),moon:spot('moon','moon',78,13,16,20),firefly:spot('firefly','firefly',70,25,27,27),tree:spot('tree','moon tree',63,33,44,54),together:spot('together','together',50,54,48,56),bed:spot('bed','bed',48,67,58,42)
};

const names=['bedroom','visitor','window','garden','sleeping-flowers','bell-sound','light-path','fog-bridge','lost-frog','lily-pad','mushroom-forest','dark-forest','firefly-light','hidden-path','moon-tree','reach-bell','teamwork','moonlight-flow','flowers-awake','good-night'];
const captions=['A TINY LIGHT','A LITTLE VISITOR','WAIT FOR ME','THE MOONLIGHT GARDEN','SLEEPING FLOWERS','A DISTANT BELL','FOLLOW THE LIGHT','THE FOGGY BRIDGE','A LOST FRIEND','THIS WAY','THE MUSHROOM FOREST','WHEN THE MOON HIDES','WE HAVE LIGHT','THE HIDDEN PATH','THE MOON TREE','HOW CAN WE REACH IT?','TOGETHER','RING, RING!','THE GARDEN AWAKES','GOOD NIGHT'];
export const moonlightScenes:Record<string,SceneSpec>=Object.fromEntries(names.map((id,i)=>[id,{name:moonlightTranslations[i],caption:captions[i],alt:`《瑜瑜與月光花園》第 ${i+1} 幕手繪插畫`,sheet:`scenes-${String(Math.floor(i/4)*4+1).padStart(2,'0')}-${String(Math.floor(i/4)*4+4).padStart(2,'0')}.webp`,cell:i%4}])) as Record<string,SceneSpec>;
const titles=['A tiny light','A little visitor','Wait for me','The Moonlight Garden','Sleeping flowers','A distant bell','Follow the light','The foggy bridge','A lost friend','This way','The mushroom forest','When the moon hides','We have light','The hidden path','The moon tree','How can we reach it?','Together','Ring, ring!','The garden awakes','Good night'];
const vocabulary=[['light','window'],['moth','light'],['window','follow'],['garden','moon'],['flower','sleep'],['bell','hear'],['path','light'],['bridge','fog'],['frog','lost'],['lily','help'],['mushroom','forest'],['dark','moon'],['firefly','light'],['path','find'],['tree','bell'],['reach','think'],['together','help'],['bell','moonlight'],['flower','awake'],['bed','good night']];
const targets=['light','moth','window','garden','flower','bell','path','bridge','frog','lily','mushroom','moon','firefly','path','bell','bell','together','bell','flower','bed'];
const placements:Record<number,Record<string,Partial<ObjectSpec>>>={
 0:{light:{x:75,y:20}},1:{moth:{x:74,y:23}},2:{moth:{x:72,y:24}},3:{garden:{x:50,y:50}},4:{flower:{x:76,y:54}},5:{bell:{x:82,y:13}},6:{path:{x:66,y:72}},7:{bridge:{x:68,y:47}},8:{frog:{x:65,y:64}},9:{frog:{x:66,y:60},lily:{x:70,y:70}},10:{mushroom:{x:18,y:32}},11:{moon:{x:74,y:12}},12:{firefly:{x:76,y:25}},13:{path:{x:76,y:68}},14:{tree:{x:64,y:34},bell:{x:70,y:12}},15:{bell:{x:68,y:13}},16:{together:{x:53,y:52}},17:{bell:{x:69,y:13}},18:{flower:{x:76,y:53}},19:{bed:{x:52,y:68}}
};
export const moonlightCheckpoints=new Set([4,8,11,15,18]);
export function moonlightPages(level:ReadingLevel):StoryPage[]{return moonlightText.map((versions,i)=>{
 const answer=targets[i];const objects=[answer,...(answer!=='moth'&&[1,2,12].includes(i)?['moth']:[]),...(answer!=='frog'&&i>=8&&i<=18?['frog']:[]),...(answer!=='bell'&&i>=14&&i<=18?['bell']:[]),...(i===15?['together']:[])];
 const mission=i===8?{type:'find' as const,prompt:'Who is lost?',hint:'找一找池塘邊需要幫助的小朋友。',answer:'frog'}:i===15?{type:'sequence' as const,prompt:'Tap Gail’s team, then the bell.',hint:'先點一起想辦法的夥伴，再點樹上的銀鈴。',answer:'bell',steps:['together','bell']}:i===18?{type:'sequence' as const,prompt:'What happens after the bell rings? Tap bell, then flower.',hint:'依照故事因果順序點銀鈴，再點盛開的花。',answer:'flower',steps:['bell','flower']}:{type:'find' as const,prompt:`Find the ${moonlightObjects[answer].word}.`,hint:'在插畫裡找一找，再點它聽英文。',answer};
 return {title:titles[i],scene:names[i],lines:[...versions[level]],translation:moonlightTranslations[i],words:vocabulary[i],objects:[...new Set(objects)],placements:placements[i],mission,checkpoint:moonlightCheckpoints.has(i),action:'dream'};
});}
export function moonlightChoreography(_level:ReadingLevel):Record<number,Record<number,StoryMotion[]>>{return {};}
