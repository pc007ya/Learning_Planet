import {solvedCube,applyCubeMoves,inverseCubeMoves,type CubeState,type CubeColor} from './cube-state';
export const BOOK_BASE='modules/interactive-labs/book-v1/';
export const BOOK_COLORS:Record<CubeColor,string>={white:'#fff9e6',yellow:'#ffd53d',red:'#f14355',orange:'#ff8b30',green:'#16b985',blue:'#2686ef'};
export interface BookLesson{id:string;title:string;cue:string;narration:string;goal:string;view:'white'|'yellow';moves:string[];focus:'parts'|'all'|'cross'|'corners'|'middle'|'yellow';}
export const BOOK_LESSONS:BookLesson[]=[
 {id:'families',title:'認識小零件',cue:'1 色中心 · 2 色邊 · 3 色角',goal:'找兩色的邊塊',narration:'先認識三種小零件。中心只有一種顏色，邊塊有兩種，角塊有三種。中心像地址，決定這一面的顏色。看右邊的小圖，找出有兩種顏色的邊塊。',view:'white',moves:[],focus:'parts'},
 {id:'turn',title:'鏡頭和轉層不同',cue:'看同一面 · 每次四分之一圈',goal:'側色也要接成同一排',narration:'轉視角只是換個地方看，不會交換色塊。轉一層才會改變它們的位置。這裡把右面轉回四分之一圈。播放看前後兩張圖，再比較側面有沒有同色。',view:'white',moves:["R'"],focus:'all'},
 {id:'cross',title:'十字還要對側色',cue:'白色在上 · 側色對中心',goal:'白十字的側色也對齊',narration:'這兩張圖，上面都可能是白色。還要看白邊旁的另一個顏色，有沒有和側面中心相同。只拼出白色十字，不代表位置正確。請找側色也對齊的一張。',view:'white',moves:["U'"],focus:'cross'},
 {id:'corners',title:'三個顏色找一個家',cue:'先找角塊 · 比對三個中心',goal:'白角與兩側同色',narration:'角塊不能只看白色。它的另外兩個顏色，也要和兩邊的中心對上。這是單一角塊的歸位例子；不同位置不能直接套用同一串動作。先看目標，再播放小段。',view:'white',moves:["R'","D'",'R'],focus:'corners'},
 {id:'middle',title:'中間層找同色夥伴',cue:'先挑沒有白、黃的邊塊',goal:'邊塊兩色都對中心',narration:'在這顆方塊，中間層的邊塊不會有白色或黃色。先用兩個顏色找出它應該住在哪兩個中心之間。播放的是一個已經擺好方向的例子，不是任何打亂都能直接照轉。',view:'white',moves:['D','R',"D'","R'","D'","B'",'D','B'],focus:'middle'},
 {id:'yellow-cross',title:'先看黃邊的方向',cue:'翻到黃色面 · 先不看角塊',goal:'四條黃邊朝向黃中心',narration:'現在從黃色這一側看。暫時只找中心旁的四個邊塊，不必被角塊干擾。黃色可能還沒朝外。這段示範把黃邊翻正；做完要重新看圖判斷，不能只靠記次數。',view:'yellow',moves:['B','R','D',"R'","D'","B'"],focus:'yellow'},
 {id:'yellow-face',title:'角塊也要翻對',cue:'黃邊好了 · 再看黃角',goal:'整個黃色面朝外',narration:'黃十字完成後，還要看四個角的黃色朝哪裡。先保持前面完成的部分，再處理角塊方向。播放中間可能暫時借位，必須做完這一小段再檢查；不要做一半就換公式。',view:'yellow',moves:['R','D',"R'",'D','R','D','D',"R'"],focus:'yellow'},
 {id:'last-places',title:'同色面不等於全完成',cue:'翻面方向對 · 還要對位置',goal:'側邊每一排都接上中心',narration:'黃色面同色，不代表每塊都回家了。再比較四周側色與中心。這個例子交換最後的邊塊；如果角塊也沒對齊，還要另外處理角塊位置。回到教我還原，可依你目前的方塊繼續。',view:'yellow',moves:['R',"D'",'R','D','R','D','R',"D'","R'","D'",'R','R'],focus:'all'},
 {id:'four-moves',title:'把長動作拆小段',cue:'R → U → R′ → U′',goal:'比較小段前後的變化',narration:'R 是紅色右面，U 是白色上面。沒有撇號是正看該面順轉，有撇號就是反轉。這四步是一種動作練習，不是萬用解法。這裡的起始狀態特別安排過，所以一小段後會回到同色。',view:'white',moves:['R','U',"R'","U'"],focus:'all'}
];
export function lessonFrames(lesson:BookLesson):CubeState[]{let state=applyCubeMoves(solvedCube(),inverseCubeMoves(lesson.moves));const frames=[state];for(const move of lesson.moves){state=applyCubeMoves(state,[move]);frames.push(state);}return frames;}
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function pieceSVG(count:number){const colors=['#fff9e6',count>1?'#16b985':'#23354b',count>2?'#f14355':'#23354b'];return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180"><title>${count} 色零件</title><g stroke="#90d8ec" stroke-width="3" stroke-linejoin="round"><path d="M100 22L170 62L100 102L30 62Z" fill="${colors[0]}"/><path d="M30 62L100 102V168L30 128Z" fill="${colors[1]}"/><path d="M100 102L170 62V128L100 168Z" fill="${colors[2]}"/></g></svg>`;}
/** Original orthographic artwork from exact sticker geometry; no remote artwork. */
export function cubeBookSVG(lesson:BookLesson,state:CubeState){
 const sign=lesson.view==='white'?1:-1;
 const project=([x,y,z]:number[])=>[200+sign*(x-z)*50,180+(x+z)*23-sign*y*54];
 const faces=[[0,sign,0],[0,0,1],[1,0,0]];let tiles='';
 for(const normal of faces){const axis=normal.findIndex(v=>v!==0);const axes=[0,1,2].filter(a=>a!==axis);
  for(const p of state){const s=p.stickers.find(s=>s.normal.every((v,i)=>v===normal[i]));if(!s)continue;
   const relevant=lesson.focus==='all'||lesson.focus==='parts'||(lesson.focus==='yellow'?p.stickers.length===1||p.stickers.some(s=>s.color==='yellow')&&(lesson.id!=='yellow-cross'||p.stickers.length===2):lesson.focus==='cross'?p.stickers.length===1||p.stickers.length===2&&p.stickers.some(s=>s.color==='white'):lesson.focus==='corners'?p.stickers.length===1||p.stickers.length===3&&p.stickers.some(s=>s.color==='white'):p.stickers.length===1||p.stickers.length===2&&!p.stickers.some(s=>['white','yellow'].includes(s.color)));
   const points=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,b])=>{const v=[...p.position];v[axis]+=normal[axis]*.51;v[axes[0]]+=a*.455;v[axes[1]]+=b*.455;return project(v).map(n=>n.toFixed(2)).join(',');}).join(' ');
   tiles+=`<polygon points="${points}" fill="${relevant?BOOK_COLORS[s.color]:'#283b51'}" stroke="${relevant?'#a4d9df':'#597084'}" stroke-width="2.2" stroke-linejoin="round"/>`;
  }
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360"><title>${esc(lesson.title)}</title><desc>原創方塊狀態圖。深藍格為本頁暫不關注的顏色。${lesson.view==='white'?'白':'黃'}色面朝觀察者上方。</desc>${tiles}</svg>`;
}
export function bookStoryboard(){return {schemaVersion:'1.0',id:'cube-picture-book-v1',background:'images/experiments/shared-classroom/v1/classroom.png',sourceNote:'Concept reference only: https://1hrbld.tw/3x3-dab/ . Original text, exercises, state geometry and artwork; not the site’s DAB course or illustrations.',orientation:'Fixed centers: U white, D yellow, F green, R red; yellow-view changes camera, not moves. Apply cameraUp before lookAt.',limits:['Prepared examples, not a universal beginner solver','Existing guided solver remains CFOP','Timing hints need voiceover editing; no new rendered video included'],shots:BOOK_LESSONS.map(l=>({id:l.id,title:l.title,narration:l.narration,caption:l.cue,camera:l.view==='white'?[6,4.5,7]:[6,-4.5,7],cameraUp:l.view==='white'?[0,1,0]:[0,-1,0],focus:l.focus,initialState:lessonFrames(l)[0],moves:l.moves,frames:lessonFrames(l).map((_,i)=>({id:`${l.id}-${i}`,asset:`${BOOK_BASE}${l.id}-${i}.svg`,holdSeconds:i===0?7:2,move:i?l.moves[i-1]:null})),goal:l.goal}))};}
