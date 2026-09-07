import {CubeView,CUBE_FACES,CUBE_COLORS} from './cube-view';
import {cubeSolved,matchedWhiteCrossEdges,inverseCubeMoves,applyCubeMoves,solvedCube} from './cube-state';
import {SceneNarration} from './narration';
import {CAR_ART} from './car-art';
import {SceneRecorder} from './scene-recorder';

const button=(id:string,icon:string,label:string)=>`<button type="button" data-cube="${id}" aria-label="${label}" title="${label}">${icon}</button>`;
const parts=[['core','核心','6 根軸連著中心，讓各層有旋轉的方向。這是簡化結構示意，不是特定品牌的工程圖。'],['center','中心塊','一種顏色，共 6 塊。中心決定每面的顏色，彼此的位置不會交換。'],['edge','邊塊','兩種顏色，共 12 塊。內側的腳部幫助扣住相鄰零件。'],['corner','角塊','三種顏色，共 8 塊。角塊和邊塊的內側形狀配合，轉動時一起滑動。']] as const;
const shots=[
  {id:'overview',label:'看全貌',voice:'這顆彩色方塊，為什麼轉來轉去都不會散開呢？'},
  {id:'turn',label:'轉一層',voice:'看！右面這一層一起轉，顏色就換了位置。'},
  {id:'explode',label:'拆開看',voice:'拆開看看！裡面有核心，六根軸連著六個中心。'},
  {id:'core',label:'找核心',voice:parts[0][2]},
  {id:'edge',label:'找邊塊',voice:parts[2][2]},
  {id:'corner',label:'找角塊',voice:parts[3][2]},
  {id:'assemble',label:'合起來',voice:'再合起來。你也可以轉動、縮放，從不同方向找出方塊的小祕密！'}
] as const;

export class CubeLab {
  private view:CubeView;private voice=new SceneNarration();private abort=new AbortController();private history:string[]=[];
  private face='F';private page='play';private mode='view';private shot=-1;private sequence=0;private dead=false;private previewURL?:string;
  private root:HTMLElement;private status:HTMLElement;private explanation:HTMLElement;private savedHistory:string[]=[];private recorder?:SceneRecorder;private recording=false;
  constructor(private host:HTMLElement){
    host.innerHTML=`<section class="cube-lab" aria-label="魔術方塊工坊">
      <header class="cube-heading">${button('back','←','返回實驗星球')}<h2>方塊工坊</h2><div class="cube-header-tools">${button('voice','🔇','開啟語音')}${button('replay','↻','重聽')}${button('quiz',`<img src="${CAR_ART}pencil.png" alt="">`,'考題')}${button('help','?','機構、公式與素材')}</div></header>
      <div class="cube-layout"><section class="cube-scene" aria-label="3D 實驗場景"><div class="cube-stage"></div><div class="cube-badge" role="status">用手轉轉看</div><div class="cube-camera">${button('zoom-in','＋','放大')}${button('zoom-out','−','縮小')}${button('home','⌂','正面三面視角')}</div><div class="cube-quiz" hidden></div></section>
      <aside class="cube-tools"><div class="cube-play-tools"><div class="cube-modes">${button('view','⤢<small>轉視角</small>','轉視角模式')}${button('turn','↶<small>轉一層</small>','转一層模式')}${button('inspect','◇<small>拆解</small>','拆解開關')}</div><div class="cube-face-grid">${CUBE_FACES.map(f=>`<button data-face="${f.id}" aria-label="選${f.name}" title="${f.name}" style="--face:#${CUBE_COLORS[f.color].toString(16).padStart(6,'0')}"><i></i><small>${f.id}</small></button>`).join('')}</div><div class="cube-arrows">${button('ccw','↶','選取面逆時針轉四分之一圈')}${button('cw','↷','選取面順時針轉四分之一圈')}</div><div class="cube-part-grid" hidden>${parts.map((p,i)=>button(p[0],`${i+1}<small>${p[1]}</small>`,p[1])).join('')}${button('all','◈<small>全部</small>','顯示全部零件')}</div><p class="cube-explanation">選一個面，再轉轉看</p><div class="cube-bottom-tools">${button('shuffle','⤨','打亂')}${button('undo','↩','退一步')}${button('reset','⟲','重新開始')}${button('demo','▶','分鏡導覽')}</div></div><div class="cube-help-tools" hidden><div class="cube-help-tabs">${button('mechanism','◇','機構')}${button('formula','R′','公式')}${button('hint','💡','還原提示')}${button('assets','▧','影片素材')}</div><div class="cube-help-content"></div></div><div class="cube-shot-nav" hidden>${button('previous','‹','上一鏡')}<span data-shot></span>${button('next','›','下一鏡')}${button('stop-demo','■','結束導覽')}</div></aside></div>
    </section>`;
    this.root=host.querySelector('.cube-lab')!;this.status=this.root.querySelector('.cube-badge')!;this.explanation=this.root.querySelector('.cube-explanation')!;
    this.view=new CubeView(this.root.querySelector('.cube-stage')!);this.view.onFace=f=>{this.face=f;this.update();};this.view.onDragTurn=m=>{void this.turn(m);};
    this.root.addEventListener('click',e=>{const b=(e.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b)return;if(b.dataset.face){this.face=b.dataset.face;this.setMode('turn');this.update();this.tell(`${CUBE_FACES.find(f=>f.id===this.face)!.name}。箭頭以正看這一面為準。`);return;}if(b.dataset.answer){this.answer(b.dataset.answer);return;}void this.action(b.dataset.cube||'');},{signal:this.abort.signal});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){this.voice.stop();this.sequence++;this.recorder?.destroy();}},{signal:this.abort.signal});this.update();
  }
  private tell(text:string,short=text){this.explanation.textContent=short;this.explanation.title=text;this.explanation.setAttribute('aria-label',text);this.voice.say(text);const caption=this.root.querySelector('.cube-part-caption');if(caption)caption.textContent=text;}
  private update(){this.view.select(this.face);this.root.querySelectorAll<HTMLButtonElement>('[data-face]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.face===this.face)));for(const m of ['view','turn','inspect'])this.root.querySelector(`[data-cube=${m}]`)!.setAttribute('aria-pressed',String(m===this.mode));
    this.root.querySelector<HTMLElement>('.cube-part-grid')!.hidden=this.mode!=='inspect';this.root.querySelector<HTMLElement>('.cube-face-grid')!.hidden=this.mode==='inspect';this.root.querySelector<HTMLElement>('.cube-arrows')!.hidden=this.mode==='inspect';
    this.root.querySelector<HTMLButtonElement>('[data-cube=undo]')!.disabled=!this.history.length;
    this.status.textContent=this.mode==='inspect'?'結構示意 · 拖動看背面':cubeSolved(this.view.state)?'六面完成 ✦':`白十字對齊 ${matchedWhiteCrossEdges(this.view.state)} / 4`;
  }
  private async setMode(m:string){if(this.view.busy)return;this.mode=m;this.view.showAll();if(this.view.exploded!==(m==='inspect'))await this.view.inspect(m==='inspect');this.view.mode(m as 'view'|'turn'|'inspect');this.update();}
  private async turn(move:string,record=true){if(this.view.busy||this.view.exploded)return;if(await this.view.move(move)){if(record)this.history.push(move);this.update();}}
  private setPage(page:string){this.page=page;this.root.dataset.page=page;this.root.querySelector<HTMLElement>('.cube-play-tools')!.hidden=page==='help';this.root.querySelector<HTMLElement>('.cube-help-tools')!.hidden=page!=='help';this.root.querySelector<HTMLElement>('.cube-quiz')!.hidden=page!=='quiz';this.root.querySelector('[data-cube=quiz]')!.setAttribute('aria-pressed',String(page==='quiz'));this.root.querySelector('[data-cube=help]')!.setAttribute('aria-pressed',String(page==='help'));}
  private async action(id:string){
    if(id==='back'){this.host.closest('.il-shell')?.querySelector<HTMLButtonElement>('.il-back')?.click();return;}
    if(id==='voice'){this.voice.enabled=!this.voice.enabled;const b=this.root.querySelector('[data-cube=voice]')!;b.textContent=this.voice.enabled?'🔊':'🔇';b.setAttribute('aria-pressed',String(this.voice.enabled));b.setAttribute('aria-label',this.voice.enabled?'關閉語音':'開啟語音');if(this.voice.enabled)this.voice.replay();else this.voice.stop();return;}
    if(id==='replay'){this.voice.replay();return;}
    if(this.recording)return;
    if(id==='quiz'){this.setPage(this.page==='quiz'?'play':'quiz');if(this.page==='quiz')this.quiz();return;}
    if(id==='help'){this.setPage(this.page==='help'?'play':'help');if(this.page==='help')this.help('mechanism');return;}
    if(['mechanism','formula','hint','assets'].includes(id)){this.help(id);return;}
    if(id==='zoom-in'){this.view.zoom(.85);return;}if(id==='zoom-out'){this.view.zoom(1.18);return;}if(id==='home'){this.view.home();return;}
    if(this.view.busy)return;
    if(['view','turn','inspect'].includes(id)){await this.setMode(id==='inspect'&&this.mode==='inspect'?'view':id);this.tell(this.mode==='inspect'?'拆開了！點零件，聽聽它的工作。':'轉視角是轉整顆；轉一層會改變顏色位置。',this.mode==='inspect'?'點零件找祕密':'用手轉動 · 雙指縮放');}
    else if(id==='cw'||id==='ccw'){await this.turn(this.face+(id==='ccw'?"'":""));}
    else if(id==='undo'){const move=this.history.at(-1);if(move&&!this.view.exploded){await this.turn(inverseCubeMoves([move])[0],false);this.history.pop();this.update();}}
    else if(id==='reset'){this.sequence++;this.view.reset();this.history=[];this.mode='view';this.update();this.tell('重新開始！六面的顏色都回來了。');}
    else if(id==='shuffle'){await this.setMode('turn');const token=++this.sequence;for(let i=0;i<8&&!this.dead&&token===this.sequence;i++){await this.turn(CUBE_FACES[Math.floor(Math.random()*6)].id+(Math.random()<.5?"'":""));}this.tell('換你挑戰！也可以點問號，依照操作紀錄退回去。','打亂完成 · 換你試試');}
    else if(parts.some(p=>p[0]===id)){if(!this.view.exploded)await this.setMode('inspect');const p=parts.find(p=>p[0]===id)!;this.view.focusPart(p[0]);if(p[0]==='core')this.view.focusCore();else this.view.home();this.tell(p[2],p[1]);}
    else if(id==='all'){this.view.showAll();this.view.home();}
    else if(id==='demo'){this.savedHistory=[...this.history];this.shot=0;this.root.querySelector<HTMLElement>('.cube-shot-nav')!.hidden=false;await this.showShot();}
    else if(id==='previous'||id==='next'){this.shot=Math.max(0,Math.min(shots.length-1,this.shot+(id==='next'?1:-1)));await this.showShot();}
    else if(id==='stop-demo'){this.shot=-1;this.root.querySelector<HTMLElement>('.cube-shot-nav')!.hidden=true;this.view.reset(applyCubeMoves(solvedCube(),this.savedHistory));this.history=[...this.savedHistory];this.mode='view';this.update();}
    else if(id==='hint-step'){if(this.view.exploded)await this.setMode('turn');const move=this.history.at(-1);if(move){await this.turn(inverseCubeMoves([move])[0],false);this.history.pop();this.help('hint');this.update();}}
    else if(id==='formula-play'){await this.setMode('turn');for(const m of ['R','U',"R'","U'"])if(!this.dead)await this.turn(m);this.help('formula');}
    else if(id==='capture'){const blob=await this.view.snapshot();if(this.previewURL)URL.revokeObjectURL(this.previewURL);this.previewURL=URL.createObjectURL(blob);const target=this.root.querySelector('.cube-help-content')!;target.innerHTML=`<h3>透明物件圖</h3><img class="cube-export" alt="目前方塊的透明圖" src="${this.previewURL}"><a download="cube-object.png" href="${this.previewURL}">下載 PNG</a>`;}
    else if(id==='record'){await this.record();}
  }
  private async showShot(){
    this.view.reset();this.history=[];this.mode='view';const s=shots[this.shot];this.root.querySelector('[data-shot]')!.textContent=`${this.shot+1}/${shots.length}`;
    if(s.id==='turn')await this.turn('R');else if(['explode','core','edge','corner'].includes(s.id)){await this.setMode('inspect');if(s.id!=='explode'){this.view.focusPart(s.id as 'core'|'edge'|'corner');if(s.id==='core')this.view.focusCore();}}
    this.update();this.tell(s.voice,s.label);this.status.textContent=s.label;
  }
  private help(tab:string){const box=this.root.querySelector('.cube-help-content')!;this.root.querySelectorAll('[data-cube=mechanism],[data-cube=formula],[data-cube=hint],[data-cube=assets]').forEach(b=>b.setAttribute('aria-pressed',String((b as HTMLElement).dataset.cube===tab)));
    if(tab==='mechanism'){box.innerHTML=`<h3>裡面的小祕密</h3><div class="cube-part-grid">${parts.map((p,i)=>button(p[0],`${i+1}<small>${p[1]}</small>`,p[1])).join('')}</div>${button('inspect','◇ 拆開','拆解開關')}<p class="cube-part-caption">簡化結構示意</p>`;this.tell('先拆開，再選核心、中心塊、邊塊或角塊，就可以分開觀察。');}
    if(tab==='formula'){box.innerHTML=`<h3>跟著轉一次</h3><div class="cube-formula">R → U<br>R′ → U′</div>${button('formula-play','▶','播放四步公式')}<p>正看該面：↷ 順轉<br>′ 反轉 · 2 半圈</p><small>這是動作練習，不是万能解法。</small>`;this.tell('R 是右面，U 是上面。正看那一面，順時針轉四分之一圈；多一撇是反方向。順序不同，結果也不同。');}
    if(tab==='hint'){box.innerHTML=`<h3>一步一步回去</h3><div class="cube-formula">${this.history.length?inverseCubeMoves([this.history.at(-1)!])[0]:'✓'}</div>${button('hint-step','↩','執行下一步還原')}<p>剩 ${this.history.length} 步</p><small>依本次操作紀錄倒轉，非最短解。</small>`;this.tell('這個提示記得你剛才怎麼轉，反方向一步一步回去。它不是所有打亂情況的最短解法。');}
    if(tab==='assets'){box.innerHTML=`<h3>共用素材</h3>${button('capture','▧ 物件圖','匯出透明物件圖')}${button('demo','▶ 分鏡','分鏡導覽')}${button('record','● 示範影片','錄製無聲示範影片')}<a href="data/experiments/cube-mechanism-v1/playback.json" download>分鏡與語音腳本</a><a href="images/experiments/shared-classroom/v1/classroom.png" download>教室底圖</a><small>影片不含裝置語音，配音腳本另附。</small>`;this.tell('教室底圖、透明物件圖、分鏡和語音腳本，可以分開使用。');}
  }
  private async record(){
    this.recording=true;const previous=[...this.history],token=++this.sequence;this.recorder=new SceneRecorder();const box=this.root.querySelector('.cube-help-content')!;box.innerHTML='<h3>正在錄製…</h3><p>約 30 秒，請留在這一頁。</p><small>無聲示範 · 配音腳本另附</small>';
    try{await this.recorder.start(this.view.renderer.domElement,'images/experiments/shared-classroom/v1/classroom.png',()=>this.status.textContent||'',()=>this.view.renderer.render(this.view.scene,this.view.camera));
      for(let i=0;i<shots.length&&!this.dead&&token===this.sequence;i++){this.shot=i;await this.showShot();await new Promise(resolve=>setTimeout(resolve,3200));}
      const blob=await this.recorder.finish();if(this.dead)return;if(!blob||token!==this.sequence)throw new Error('錄製已停止，請保持頁面開啟再試一次。');
      if(this.previewURL)URL.revokeObjectURL(this.previewURL);
      // A self-contained preview also survives browsers that cannot save blob: URLs.
      this.previewURL=await new Promise<string>((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result));reader.onerror=()=>reject(new Error('影片匯出失敗'));reader.readAsDataURL(blob);});
      if(this.dead)return;box.innerHTML=`<h3>示範影片</h3><video class="cube-export" aria-label="方塊拆解示範影片" src="${this.previewURL}" controls playsinline></video><a href="${this.previewURL}" download="cube-demonstration.${blob.type.includes('mp4')?'mp4':'webm'}">下載影片</a><small>無聲 · 配音請搭配腳本。</small>`;
    }catch(error){if(!this.dead){box.replaceChildren();const p=document.createElement('p');p.textContent=error instanceof Error?error.message:'影片錄製失敗';box.append(p);}}
    finally{this.recorder?.destroy();this.recorder=undefined;this.recording=false;if(!this.dead){this.view.reset(applyCubeMoves(solvedCube(),previous));this.history=previous;this.mode='view';this.shot=-1;this.update();}}
  }
  private quiz(){const box=this.root.querySelector('.cube-quiz')!;box.innerHTML=`<h3>哪個是「邊塊」？</h3><div class="cube-picture-answers">${[1,2,3].map(n=>`<button data-answer="${n}" aria-label="${n} 種顏色的小塊"><svg viewBox="0 0 140 150" role="img" aria-label="${n} 色小塊"><path d="M70 15L125 45L70 78L15 45Z" fill="#fff8de"/><path d="M15 45L70 78V140L15 106Z" fill="${n>1?'#14b683':'#1b2939'}"/><path d="M70 78L125 45V106L70 140Z" fill="${n>2?'#f14b59':'#1b2939'}"/><path d="M70 15L125 45V106L70 140L15 106V45Z M15 45L70 78L125 45 M70 78V140" stroke="#101928" stroke-width="5" fill="none"/></svg></button>`).join('')}</div><div class="cube-answer-result" role="status"></div>`;this.voice.say('看圖片，哪一塊有兩種顏色，是邊塊呢？');}
  private answer(value:string){const right=value==='2';this.root.querySelector('.cube-answer-result')!.textContent=right?'○ 兩種顏色！':'再看看顏色';this.voice.say(right?'答對了！邊塊有兩種顏色，一共有十二塊。':'再看一次，邊塊有兩種顏色喔。');}
  destroy(){this.dead=true;this.sequence++;this.recorder?.destroy();this.voice.stop();this.abort.abort();this.view.destroy();if(this.previewURL)URL.revokeObjectURL(this.previewURL);this.host.replaceChildren();}
}
