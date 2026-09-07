import {CubeView,CUBE_FACES,CUBE_COLORS} from './cube-view';
import {cubeSolved,type CubeColor} from './cube-state';
import type {TeachingChapter} from './cube-teaching-plan';
import type {SceneNarration} from './narration';
const names:Record<CubeColor,string>={white:'白',yellow:'黃',red:'紅',orange:'橘',green:'綠',blue:'藍'};
const swatch=(c:CubeColor)=>`<i class="ct-swatch" style="background:#${CUBE_COLORS[c].toString(16)}" aria-label="${names[c]}色"></i>`;
const phases={cross:['白十字','白色旁的顏色，也要對齊中心。','找兩色邊塊，把白色送到白中心旁，另一色對齊同色中心。只有白色拼成十字，還不算完成。'],f2l:['角邊配對','角塊和邊塊，找到同色的家。','看三色角塊和兩色邊塊，共有的兩個顏色是一對。把這一對送回同色中心之間，完成白色這側的兩層。'],oll:['黃色朝外','先讓黃色，都朝向黃中心。','前兩層好了。現在看黃色朝哪邊：先讓黃色都朝向黃色中心，側邊顏色還不一定排好。'],pll:['最後歸位','顏色方向對了，再換回正確位置。','黃色面已經好了。比較側邊與中心的顏色，把邊塊和角塊換到自己的家。這段完成後，六面會全部同色。']} as const;
const control=(id:string,label:string,content=label)=>`<button type="button" data-teach="${id}" aria-label="${label}" title="${label}">${content}</button>`;
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
 explain(){if(this.dead||this.busy||!this.current)return;this.panel.innerHTML=`${this.header()}<h3>怎麼判斷？</h3><p>${phases[this.current.phase][2]}</p><p>中心定顏色<br>邊塊有 2 色 · 角塊有 3 色</p>${control('resume','回到目前這一步','→ 繼續')}`;this.say(phases[this.current.phase][2]);}
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
   this.panel.innerHTML=`${this.header()}<p class="ct-prompt">這一塊，找哪些中心？</p><div class="ct-piece" aria-label="目標零件的顏色">${this.colors.map(swatch).join('')}</div><div class="ct-choices">${ordered.map((colors,i)=>control(`color-${i}`,`${colors.map(c=>names[c]).join('、')}色中心`,colors.map(swatch).join(''))).join('')}</div><p class="ct-feedback" role="status">看亮框，配對顏色</p><small>中心像門牌，不會交換位置。</small>`;
  }else if(this.screen==='moves'){
   const move=c.moves[this.step],face=CUBE_FACES.find(f=>f.id===move[0])!,arrow=move.endsWith("'")?'↶':'↷';
   this.panel.innerHTML=`${this.header()}<p class="ct-prompt">找這個中心 ${swatch(face.color)}</p><div class="ct-face-choices">${CUBE_FACES.map(f=>control(`face-${f.id}`,`教學：選${f.name}`,swatch(f.color))).join('')}</div><div class="ct-move-picture" aria-label="${face.name}，${arrow==='↶'?'逆':'順'}時針四分之一圈">${swatch(face.color)}<b>${arrow}</b><small>¼ 圈</small></div><div class="ct-direction">${control('left','教學：逆時針轉一步','↶')}${control('right','教學：順時針轉一步','↷')}</div><p class="ct-feedback" role="status">${this.selected?'正看這一面，跟箭頭轉':'先找中心，鏡頭會對正'}</p><small>動作 ${this.step+1}/${c.moves.length} · 小段完成會檢查</small>`;
   this.panel.querySelectorAll<HTMLButtonElement>('.ct-direction button').forEach(b=>b.disabled=!this.selected);
  }else if(this.screen==='check'){
   this.panel.innerHTML=`${this.header()}<div class="ct-check">✦</div><h3>這一小段完成！</h3><p>${phases[c.phase][1]}</p>${control('continue','繼續下一小段','→ 繼續')}<small>可以用手轉視角，看看亮框。</small>`;
  }
 }
 private feedback(text:string){const el=this.panel.querySelector('.ct-feedback');if(el)el.textContent=text;this.say(text);}
 private async action(id:string){if(this.dead||this.busy||this.view.busy)return;
  if(id==='exit'){this.exit();return;}
  if(id==='resume'){this.render();return;}
  if(this.screen==='colors'&&id.startsWith('color-')){if(id.slice(6)!==this.answer){this.feedback('再看看，亮框有哪幾個顏色？');return;}this.screen='moves';this.render();this.say(`對了，${this.colors.map(c=>names[c]).join('、')}色中心是它的家。現在照色卡找中心，再跟著箭頭轉。這一小段中間會暫時借位，完成後再檢查。`);return;}
  if(this.screen==='check'&&id==='continue'){this.chapter++;this.startChapter();return;}
  if(this.screen!=='moves')return;
  const move=this.current.moves[this.step];
  if(id.startsWith('face-')){if(id.slice(5)!==move[0]){this.feedback('找和提示色卡一樣的中心喔。');return;}this.selected=true;this.view.faceCamera(move[0]);this.view.controls.enableRotate=false;this.view.highlight([...this.current.targets,CUBE_FACES.find(f=>f.id===move[0])!.normal.join(',')]);this.render();this.say('找對中心了！鏡頭正看這一面，跟著大箭頭轉四分之一圈。');return;}
  if(!['left','right'].includes(id)||!this.selected)return;
  if((id==='left')!==move.endsWith("'")){this.feedback('方向不同喔，看看大箭頭往哪裡彎。');return;}
  this.busy=true;this.panel.querySelectorAll<HTMLButtonElement>('button').forEach(b=>b.disabled=true);
  this.view.faceCamera(move[0]);const applied=await this.view.move(move);this.view.controls.enableRotate=true;this.busy=false;if(this.dead)return;if(!applied){this.render();return;}this.moved(move);this.step++;
  if(this.step===this.current.moves.length&&JSON.stringify(this.view.state)!==JSON.stringify(this.current.checkedState)){this.fail();return;}
  if(this.step===this.current.moves.length){this.screen='check';this.view.highlight(this.current.targets);this.view.home();this.render();this.say(`這一小段完成！${phases[this.current.phase][1]} 轉動視角看看，再按繼續。`);}
  else{this.selected=false;this.render();this.say('轉對了。再找下一個中心色。');}
 }
 destroy(){this.dead=true;clearTimeout(this.timer);this.worker?.terminate();this.abort.abort();this.view.highlight([]);this.view.controls.enableRotate=true;this.view.camera.up.set(0,1,0);this.view.home();this.panel.remove();}
}
