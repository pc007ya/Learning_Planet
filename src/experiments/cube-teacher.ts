import {CubeView,CUBE_FACES,CUBE_COLORS} from './cube-view';
import {cubeSolved,type CubeColor} from './cube-state';
import type {TeachingChapter} from './cube-teaching-plan';
import type {SceneNarration} from './narration';
const names:Record<CubeColor,string>={white:'白',yellow:'黃',red:'紅',orange:'橘',green:'綠',blue:'藍'};
const swatch=(c:CubeColor)=>`<i class="ct-swatch" style="background:#${CUBE_COLORS[c].toString(16)}" aria-label="${names[c]}色"></i>`;
const phases={cross:['白十字','白色旁的顏色，也要對齊中心。','找兩色邊塊，把白色送到白中心旁，另一色對齊同色中心。只有白色拼成十字，還不算完成。'],f2l:['角邊配對','角塊和邊塊，找到同色的家。','看三色角塊和兩色邊塊，共有的兩個顏色是一對。把這一對送回同色中心之間，完成白色這側的兩層。'],oll:['黃色朝外','先讓黃色，都朝向黃中心。','前兩層好了。現在看黃色朝哪邊：先讓黃色都朝向黃色中心，側邊顏色還不一定排好。'],pll:['最後歸位','顏色方向對了，再換回正確位置。','黃色面已經好了。比較側邊與中心的顏色，把邊塊和角塊換到自己的家。這段完成後，六面會全部同色。']} as const;
const control=(id:string,label:string,content=label)=>`<button type="button" data-teach="${id}" aria-label="${label}" title="${label}">${content}</button>`;
const sliceMeta={
 M:{label:'M 中間直層',camera:'L',why:'M 是左右兩面之間的中層，方向以 L 面為參考。它能直接搬動中間四條邊與中心框架，不必用外層繞一大圈。'},
 E:{label:'E 中間橫層',camera:'D',why:'E 是上下兩面之間的中層，方向以 D 面為參考。它常用來調整中層邊塊與整體相對位置。'},
 S:{label:'S 前後中層',camera:'F',why:'S 是前後兩面之間的中層，方向以 F 面為參考。它讓中間切片直接轉動，適合解釋 slice move。'}
} as const;
const isSlice=(move:string):move is `${keyof typeof sliceMeta}${string}`=>move.length>0&&move[0] in sliceMeta;
const moveCamera=(move:string)=>isSlice(move)?sliceMeta[move[0] as keyof typeof sliceMeta].camera:move[0];
const approachNotes={
 cross:{
  beginner:['先找白色邊塊','把白色送到白中心旁，再檢查側色有沒有對到同色中心。','容易看懂，但常要先把邊塊移到好操作的位置。'],
  cfop:['同時看 4 條白色邊','十字不是只看白面；四條側色也要和中心排成直線。','會提早規劃下一條邊，通常能少繞路。'],
  search:['看整顆方塊的狀態','搜尋器比較多個候選轉法，選擇能讓後續狀態更接近目標的路徑。','它知道路徑，但小朋友仍要用顏色理解為什麼。']
 },
 f2l:{
  beginner:['先找一個白角，再找同色邊','角塊有 3 色、邊塊有 2 色；共有的兩個側色就是同一組。','一次完成一組，觀察負擔較小。'],
  cfop:['找角邊配對','先把角與邊在上層配成一對，再一起插入兩個中心之間。','重點是配對關係，不只盯著單一貼紙。'],
  search:['看已完成區域與可移動區域','搜尋器會避免破壞已完成區域，並比較哪些轉法能同時改善角、邊位置。','有時看似先借位，其實是在換取更短的後續。']
 },
 oll:{
  beginner:['數黃色朝上的數量與形狀','先只處理方向，不急著管側面位置。','把問題拆成「方向」與「位置」兩件事。'],
  cfop:['辨認黃色圖形','用黃色面圖形判斷 OLL 類型，再套對應轉法。','辨認圖形比逐顆追蹤更快。'],
  search:['看所有黃色貼紙的朝向','搜尋器比較哪些轉法能一次改善最多朝向，同時保留前兩層。','它不需要背圖形，但會評估整體狀態。']
 },
 pll:{
  beginner:['先找已經對齊中心的側面','黃色方向完成後，再找哪些角、邊只是站錯位置。','最後只交換位置，不再翻轉黃色方向。'],
  cfop:['辨認側邊色帶與相鄰關係','看角、邊的排列型態，辨認 PLL 類型。','從整圈側色判斷，比只看一顆更可靠。'],
  search:['看剩餘置換','搜尋器直接比較角、邊的排列差異，尋找能回到 solved state 的路徑。','最後階段常會出現看似繞一下、其實是必要交換。']
 }
} as const;
/** A child-paced lesson. A worker supplies verified chapters; every turn remains
 * an explicit child action. Wrong answers never mutate the cube. */
export class CubeTeacher{
 private worker?:Worker;private timer?:ReturnType<typeof setTimeout>;private dead=false;private busy=false;
 private chapters:TeachingChapter[]=[];private chapter=0;private step=0;private screen='loading';private answer='';private colors:CubeColor[]=[];private selected=false;
 private abort=new AbortController();
 constructor(private panel:HTMLElement,private view:CubeView,private voice:SceneNarration,private badge:HTMLElement,private moved:(move:string)=>void,private exit:()=>void){
  panel.addEventListener('click',e=>{const b=(e.target as HTMLElement).closest<HTMLButtonElement>('[data-teach]');if(b)void this.action(b.dataset.teach!);},{signal:this.abort.signal});
  this.load();
 }
 private say(text:string){this.panel.setAttribute('aria-description',text);this.panel.title=text;this.voice.say(text);}
 explain(){if(this.dead||this.busy||!this.current)return;this.showReason();}
 private showReason(){const c=this.current;if(!c)return;const move=c.moves[this.step]||c.moves[c.moves.length-1]||'';const face=move?CUBE_FACES.find(f=>f.id===move[0]):undefined;const note=approachNotes[c.phase];
  this.panel.innerHTML=`${this.header()}<h3>為什麼下一步這樣判斷？</h3>
  <p><b>先觀察：</b>${note.beginner[0]}</p>
  <p>${note.beginner[1]}</p>
  ${move&&face?`<p><b>下一步 ${move}</b>：先以 ${names[face.color]}色中心當座標。這一步的目的不是只把一張貼紙轉漂亮，而是讓目標零件更接近「自己的中心組合」，或先騰出不破壞已完成區域的位置。</p>`:move&&isSlice(move)?`<p><b>下一步 ${move}</b>：${sliceMeta[move[0] as keyof typeof sliceMeta].why}</p>`:''}
  <details open><summary>初學層先法怎麼看</summary><p>${note.beginner[1]}</p><small>${note.beginner[2]}</small></details>
  <details><summary>CFOP 怎麼看</summary><p>${note.cfop[1]}</p><small>${note.cfop[2]}</small></details>
  <details><summary>搜尋器怎麼看</summary><p>${note.search[1]}</p><small>${note.search[2]}</small></details>
  <p><b>共同原則：</b>中心是座標；邊塊看 2 色；角塊看 3 色。不同解法的差別主要在「一次觀察多少資訊」與「是否提前規劃後續」。</p>
  ${control('resume','回到目前這一步','→ 回到這一步')}`;
  this.say(`先看${note.beginner[0]}。${note.beginner[1]}${move?` 下一步是 ${move}，先用中心顏色判斷方向。`:''}`);
 }
 private load(){this.panel.innerHTML=`<h3>看顏色，找方法…</h3>${control('exit','回到自由操作','←')}`;this.badge.textContent='正在讀取目前的顏色';
  this.worker=new Worker(new URL('./cube-teacher.worker.ts',import.meta.url),{type:'module'});
  this.timer=setTimeout(()=>this.fail(),8000);this.worker.onerror=()=>this.fail();
  this.worker.onmessage=e=>{clearTimeout(this.timer);this.worker?.terminate();this.worker=undefined;if(this.dead)return;if(e.data.error){this.fail();return;}this.chapters=e.data.chapters;this.startChapter();};
  this.worker.postMessage(this.view.state);
 }
 private fail(){clearTimeout(this.timer);this.worker?.terminate();this.worker=undefined;if(this.dead)return;this.screen='error';this.panel.innerHTML=`<h3>暫時找不到可靠提示</h3><p>方塊保留原樣</p>${control('exit','回到自由操作','← 回去')}`;this.badge.textContent='請稍後再試';}
 private get current(){return this.chapters[this.chapter];}
 private startChapter(){this.step=0;this.selected=false;
  if(!this.current){this.screen='done';this.view.highlight([]);this.view.home();this.badge.textContent=cubeSolved(this.view.state)?'六面完成！你做到了 ✦':'再觀察一次';this.panel.innerHTML=`<h3>🌟 六面同色</h3><div class="ct-finish">${CUBE_FACES.map(f=>swatch(f.color)).join('')}</div><p>中心定顏色<br>邊塊 2 色 · 角塊 3 色</p>${control('exit','自己再試一次','↶ 自己試')}`;this.say('你完成了！記得，中心決定顏色，邊塊找兩色的家，角塊找三色的家。可以回去打亂，再試一次。');return;}
  this.screen='colors';const target=this.view.state.find(p=>p.id===this.current.targets[0])||this.view.state.find(p=>p.stickers.length===2&&p.stickers.some(s=>s.color==='yellow'))!;
  this.colors=target.stickers.map(s=>s.color);this.view.highlight([target.id]);this.view.showPiece(target.id);
  this.render();this.say(`${phases[this.current.phase][2]} 看亮框這一塊，找出和它顏色相同的中心組合。`);
 }
 private header(){return `<div class="ct-head">${control('exit','離開教學','←')}<h3>${phases[this.current.phase][0]}</h3></div><div class="ct-phases" aria-label="解法階段">${Object.entries(phases).map(([p,v])=>`<span class="${p===this.current.phase?'active':''}" title="${v[0]}">${v[0]}</span>`).join('')}</div>`;}
 private render(){const c=this.current;if(!c)return;
  this.badge.textContent=`${phases[c.phase][0]} · 小段 ${this.chapter+1}/${this.chapters.length}`;
  if(this.screen==='colors'){
   const wrong=[...this.colors];wrong[wrong.length-1]=CUBE_FACES.map(f=>f.color).find(color=>!wrong.includes(color))!;
   const wrong2=[...this.colors];wrong2[0]=CUBE_FACES.map(f=>f.color).reverse().find(color=>!wrong2.includes(color))!;
   const choices=[this.colors,wrong,wrong2];const rotate=this.chapter%3;const ordered=choices.slice(rotate).concat(choices.slice(0,rotate));this.answer=String(ordered.indexOf(this.colors));
   this.panel.innerHTML=`${this.header()}<p class="ct-prompt">這一塊，找哪些中心？</p><div class="ct-piece" aria-label="目標零件的顏色">${this.colors.map(swatch).join('')}</div><div class="ct-choices">${ordered.map((colors,i)=>control(`color-${i}`,`${colors.map(c=>names[c]).join('、')}色中心`,colors.map(swatch).join(''))).join('')}</div><p class="ct-feedback" role="status">看亮框，配對顏色</p><small>中心是座標。一般外層轉動時中心位置固定；M / E / S 會讓中層中心框架一起改變朝向。</small>`;
  }else if(this.screen==='moves'){
   const move=c.moves[this.step],face=CUBE_FACES.find(f=>f.id===move[0]),slice=isSlice(move)?sliceMeta[move[0] as keyof typeof sliceMeta]:undefined,arrow=move.endsWith("'")?'↶':'↷';
   const chooser=CUBE_FACES.map(f=>control(`face-${f.id}`,`教學：選${f.name}`,swatch(f.color))).join('')+
    Object.entries(sliceMeta).map(([id,m])=>control(`face-${id}`,`教學：選${m.label}`,`<b>${id}</b><small>中層</small>`)).join('');
   const prompt=face?`找這個中心 ${swatch(face.color)}`:`找 ${slice!.label}`;
   const picture=face?`${swatch(face.color)}<b>${arrow}</b><small>¼ 圈</small>`:`<b>${move[0]} ${arrow}</b><small>中層 ¼ 圈</small>`;
   const aria=face?`${face.name}，${arrow==='↶'?'逆':'順'}時針四分之一圈`:`${slice!.label}，${arrow==='↶'?'反向':'正向'}四分之一圈`;
   this.panel.innerHTML=`${this.header()}<p class="ct-prompt">${prompt}</p><div class="ct-face-choices">${chooser}</div><div class="ct-move-picture" aria-label="${aria}">${picture}</div><div class="ct-direction">${control('left','教學：反向轉一步','↶')}${control('right','教學：正向轉一步','↷')}</div><p class="ct-feedback" role="status">${this.selected?(slice?'已標出中層，跟箭頭轉':'正看這一面，跟箭頭轉'):(slice?'先選 M / E / S 中層':'先找中心，鏡頭會對正')}</p>${control('reason','看判斷原因','為什麼是這一步？')}<small>動作 ${this.step+1}/${c.moves.length}${c.usesSlices?' · 此段含中層轉動':''} · 小段完成會檢查</small>`;
   this.panel.querySelectorAll<HTMLButtonElement>('.ct-direction button').forEach(b=>b.disabled=!this.selected);
  }else if(this.screen==='check'){
   this.panel.innerHTML=`${this.header()}<div class="ct-check">✦</div><h3>這一小段完成！</h3><p>${phases[c.phase][1]}</p>${control('continue','繼續下一小段','→ 繼續')}<small>可以用手轉視角，看看亮框。</small>`;
  }
 }
 private feedback(text:string){const el=this.panel.querySelector('.ct-feedback');if(el)el.textContent=text;this.say(text);}
 private async action(id:string){if(this.dead||this.busy||this.view.busy)return;
  if(id==='exit'){this.exit();return;}
  if(id==='resume'){this.render();return;}
  if(id==='reason'){this.showReason();return;}
  if(this.screen==='colors'&&id.startsWith('color-')){if(id.slice(6)!==this.answer){this.feedback('再看看，亮框有哪幾個顏色？');return;}this.screen='moves';this.render();this.say(`對了，${this.colors.map(c=>names[c]).join('、')}色中心是它的家。現在照色卡找中心，再跟著箭頭轉。這一小段中間會暫時借位，完成後再檢查。`);return;}
  if(this.screen==='check'&&id==='continue'){this.chapter++;this.startChapter();return;}
  if(this.screen!=='moves')return;
  const move=this.current.moves[this.step];
  if(id.startsWith('face-')){if(id.slice(5)!==move[0]){this.feedback(isSlice(move)?'這一步要選正確的 M、E 或 S 中層。':'找和提示色卡一樣的中心喔。');return;}this.selected=true;this.view.faceCamera(moveCamera(move));this.view.controls.enableRotate=false;if(isSlice(move))this.view.highlightSlice(move[0] as 'M'|'E'|'S');else this.view.highlight([...this.current.targets,CUBE_FACES.find(f=>f.id===move[0])!.normal.join(',')]);this.render();this.say(isSlice(move)?`${sliceMeta[move[0] as keyof typeof sliceMeta].why} 跟著箭頭轉四分之一圈。`:'找對中心了！鏡頭正看這一面，跟著大箭頭轉四分之一圈。');return;}
  if(!['left','right'].includes(id)||!this.selected)return;
  if((id==='left')!==move.endsWith("'")){this.feedback('方向不同喔，看看大箭頭往哪裡彎。');return;}
  this.busy=true;this.panel.querySelectorAll<HTMLButtonElement>('button').forEach(b=>b.disabled=true);
  this.view.faceCamera(moveCamera(move));const applied=await this.view.move(move);this.view.controls.enableRotate=true;this.busy=false;if(this.dead)return;if(!applied){this.render();return;}this.moved(move);this.step++;
  if(this.step===this.current.moves.length&&JSON.stringify(this.view.state)!==JSON.stringify(this.current.checkedState)){this.fail();return;}
  if(this.step===this.current.moves.length){this.screen='check';this.view.highlight(this.current.targets);this.view.home();this.render();this.say(`這一小段完成！${phases[this.current.phase][1]} 轉動視角看看，再按繼續。`);}
  else{this.selected=false;this.render();this.say('轉對了。再找下一個中心色。');}
 }
 destroy(){this.dead=true;clearTimeout(this.timer);this.worker?.terminate();this.abort.abort();this.view.highlight([]);this.view.controls.enableRotate=true;this.view.camera.up.set(0,1,0);this.view.home();this.panel.remove();}
}
