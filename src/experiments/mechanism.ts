import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCarBody } from './car-body';

export type ViewMode = 'whole' | 'xray' | 'explode';
export const PARTS = {
  clock: [
    ['case','鐘殼','像安全帽，保護裡面的機芯。','轉到背面，找找裝電池的位置。'],
    ['glass','透明鏡片','擋住灰塵，讓我們看得到時間。','拆開後，鏡片在最前面。'],
    ['dial','刻度盤','12 個大刻度，幫我們讀出幾點。','每相鄰兩個數字相差 5 分鐘。'],
    ['hands','時針與分針','長分針走一圈，短時針走一大格。','試試下面的「前進一小時」。'],
    ['gears','傳動齒輪','一顆帶一顆，把轉動傳到指針。','相鄰的外齒輪轉向相反。這裡省略了部分細小齒輪。'],
    ['motor','線圈與馬達','收到電路的節拍，就推動齒輪轉動。','銅色線圈把電能轉成轉動。'],
    ['quartz','石英與電路','像小小節拍器，幫忙維持規律節奏。','石英不是電池；它負責穩定節拍。'],
    ['battery','電池','供應石英鐘需要的電能。','這是電池式石英鐘，不是上發條的機械鐘。'],
  ],
  car: [
    ['shell','車殼','保護裡面的零件，也讓車子有漂亮外形。','打開拆卸開關，找找裡面的零件。'],
    ['chassis','底盤','像一塊骨架，把零件固定在一起。','輪軸和齒輪箱都裝在底盤上。'],
    ['wheels','輪胎與輪圈','輪胎接觸地面，把轉動變成前進。','較粗糙的路面讓模型比較快停下。'],
    ['axles','前後輪軸','連接左右車輪，讓輪子一起轉。','注意後輪軸連著齒輪箱。'],
    ['housing','齒輪箱外殼','把小齒輪和彈簧保護起來。','拆開後，能看到裡面的傳動零件。'],
    ['spring','捲簧','往後拉時收緊，把你的能量存起來。','放手後，捲簧釋放能量；不是電池在推車。'],
    ['gears','傳動齒輪','連接捲簧與輪軸，傳遞轉動。','同樣的回拉量，換路面再比較。'],
    ['clutch','離合機構','幫忙切換回拉儲能和放手前進。','這是原理示意，不同車款的離合結構會不同。'],
  ],
} as const;
type Kind = keyof typeof PARTS;
const CLOCK_SPREAD: Record<string, number[]> = {
  case: [-3.3,.7,-1.2], glass: [3.4,1.2,1.8], dial: [0,1.3,.8],
  hands: [2.4,-1.8,1.2], gears: [-.8,-1.1,.6], motor: [-2.2,-1.9,.7],
  quartz: [.4,-2.25,.5], battery: [-3.8,-2,.4],
};
type Part = { id: string; group: T.Group; home: T.Vector3; away: T.Vector3; skin: boolean; button: HTMLButtonElement; line: SVGLineElement };

export class Mechanism {
  readonly root = new T.Group();
  private parts: Part[] = [];
  private mode: ViewMode = 'whole';
  private amount = 0;
  private target = 0;
  private yaw: number;
  private handMinute = new T.Group();
  private handHour = new T.Group();
  private gears: T.Group[] = [];
  private wheels: T.Group[] = [];
  private spring?: T.Mesh;
  private labelLayer: HTMLElement;
  private abort = new AbortController();
  private selected = '';
  private dragging: {x: number; minutes: number; moved: boolean} | null = null;
  private minutes = 0;
  private textures: T.Texture[] = [];
  private env?: T.WebGLRenderTarget;
  private partInfo: HTMLElement;
  private seen = new Set<string>();
  private carMode: 'idle' | 'rotate' | 'explode' | 'test' = 'rotate';
  private dragYaw = 0;
  private pullValue = .5;
  private dragPull = .5;

  constructor(private kind: Kind, private scene: T.Scene, private camera: T.OrthographicCamera, private stage: HTMLElement, private host: HTMLElement, renderer: T.WebGLRenderer | undefined, private wake: () => void, private action: (value: number, release: boolean) => void) {
    this.yaw = kind === 'clock' ? -.25 : -.55;
    host.classList.add('il-mechanism'); stage.classList.add('mech-stage');
    stage.setAttribute('role','group');
    if (renderer) {
      const pmrem = new T.PMREMGenerator(renderer), room = new RoomEnvironment();
      this.env = pmrem.fromScene(room, .04); scene.environment = this.env.texture;
      room.dispose(); pmrem.dispose(); renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    }
    this.labelLayer = document.createElement('div'); this.labelLayer.className = 'mech-labels'; this.labelLayer.innerHTML='<svg class="mech-leaders" aria-hidden="true"></svg>'; stage.append(this.labelLayer);
    const tools = document.createElement('div'); tools.className = 'mech-toolbar';
    tools.innerHTML = `<div class="mech-modes" role="group" aria-label="模型觀看方式"><button data-view="whole" aria-pressed="true">完整外觀</button><button data-view="xray" aria-pressed="false">透視裡面</button><button data-view="explode" aria-pressed="false">拆開看看</button></div><div class="mech-adjust"><label>轉個方向<input type="range" data-mech-turn min="-75" max="75" value="${Math.round(this.yaw * 180 / Math.PI)}" aria-label="轉動模型視角"></label><label>拆開多少<input type="range" data-mech-explode min="0" max="100" value="0" aria-label="零件拆開程度"></label></div>`;
    stage.before(tools);
    if (kind === 'car') {
      host.classList.add('il-car-play'); host.dataset.carMode = 'rotate';
      tools.innerHTML = `<div class="car-switches" role="group" aria-label="回力車操作模式"><button role="switch" data-car-mode="rotate" aria-checked="true">⟳ 旋轉<i></i></button><button role="switch" data-car-mode="explode" aria-checked="false">⚙ 拆卸<i></i></button><button role="switch" data-car-mode="test" aria-checked="false">🏁 拉力<i></i></button></div>`;
    }
    const tray = document.createElement('section'); tray.className = 'mech-tray';
    tray.innerHTML = `<div class="mech-tray-title"><strong>點零件，發現小祕密</strong><span data-discovered>0 / 8</span></div><div class="mech-parts">${PARTS[kind].map((p,i)=>`<button data-part="${p[0]}" aria-pressed="false"><span>${i+1}</span>${p[1]}</button>`).join('')}</div><div class="mech-part-info" aria-live="polite"><strong>從外面看，再拆開找找看。</strong><p>點模型上的數字，或點上方的零件名稱。</p></div><details class="mech-parent"><summary>給陪玩的家長</summary><p>先問「你猜這個零件做什麼？」再點名稱一起看。${kind === 'clock' ? '電池 → 石英與電路 → 馬達 → 齒輪 → 指針。' : '手往後拉 → 輪軸與齒輪 → 捲簧儲能 → 放手帶動車輪。'}此模型以常見結構為基礎，省略部分緊固件與細小傳動零件，並非品牌產品的維修拆裝圖。真實拆解請由成人協助，避免小零件與電池被孩子吞食。</p></details>`;
    stage.closest('.il-scene-panel')!.append(tray); this.partInfo = tray.querySelector('.mech-part-info')!;
    const quick=document.createElement('div');quick.className='mech-quick-info';quick.setAttribute('aria-live','polite');quick.innerHTML='<strong>當個小小拆解師</strong><p>選「拆開看看」，再點一個零件。</p>';host.querySelector('aside .il-controls')!.before(quick);
    if (kind === 'car') quick.innerHTML = '<strong>選個開關玩玩看</strong><p>轉一轉、拆一拆，再試跑！</p>';
    host.addEventListener('click', e => {
      const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button'); if (!b) return;
      if (b.dataset.carMode) this.setCarMode(b.dataset.carMode === this.carMode ? 'idle' : b.dataset.carMode as 'rotate' | 'explode' | 'test');
      if (b.dataset.view) { this.setMode(b.dataset.view as ViewMode); tools.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(el=>el.setAttribute('aria-pressed',String(el===b))); (tools.querySelector('[data-mech-explode]') as HTMLInputElement).value = this.mode === 'explode' ? '100' : '0'; }
      if (b.dataset.part) this.select(b.dataset.part, host);
    }, {signal:this.abort.signal});
    tools.addEventListener('input',e=>{const input=e.target as HTMLInputElement;if(input.hasAttribute('data-mech-turn'))this.yaw=Number(input.value)*Math.PI/180;else{this.target=Number(input.value)/100;this.mode=this.target ? 'explode':'whole';tools.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.view===this.mode)));this.skins();}this.wake();},{signal:this.abort.signal});
    if (kind === 'clock') this.clock(); else this.car();
    scene.add(this.root); this.skins();
    stage.addEventListener('pointerdown',e=>{if(e.button || (e.target as HTMLElement).closest('button') || (kind==='car'&&this.carMode==='idle'))return;this.dragYaw=this.yaw;this.dragPull=this.pullValue;this.dragging={x:e.clientX,minutes:this.minutes,moved:false};stage.setPointerCapture(e.pointerId);},{signal:this.abort.signal});
    stage.addEventListener('pointermove',e=>{if(!this.dragging)return;const d=e.clientX-this.dragging.x;if(Math.abs(d)>5)this.dragging.moved=true;if(!this.dragging.moved)return;if(kind==='car'&&this.carMode!=='test'){this.yaw=this.dragYaw+d*.01;}else if(this.mode!=='whole'){this.yaw=Math.max(-1.3,Math.min(1.3,this.dragYaw+d*.01));}else if(kind==='clock'){this.action(Math.max(0,this.dragging.minutes+d/2),false);}else this.action(Math.max(.1,Math.min(1,this.dragPull-d/180)),false);this.wake();},{signal:this.abort.signal});
    stage.addEventListener('pointerup',e=>{if(!this.dragging)return;const moved=this.dragging.moved;this.dragging=null;if(stage.hasPointerCapture(e.pointerId))stage.releasePointerCapture(e.pointerId);if(moved&&this.mode==='whole'&&(kind==='clock'||this.carMode==='test'))this.action(-1,true);else if(!moved){const rect=stage.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2),camera);const hits=ray.intersectObject(this.root,true);for(const hit of hits){let obj:T.Object3D|null=hit.object;while(obj&&!obj.userData.partId)obj=obj.parent;if(obj?.userData.partId){this.select(obj.userData.partId,host);break;}}}},{signal:this.abort.signal});
    stage.addEventListener('pointercancel',()=>{this.dragging=null;},{signal:this.abort.signal});
  }
  setCarMode(mode: 'idle' | 'rotate' | 'explode' | 'test') {
    if (this.kind !== 'car') return;
    if (this.carMode === 'test' && mode !== 'test') this.yaw = -.55;
    this.dragging = null; this.carMode = mode; this.host.dataset.carMode = mode;
    this.setMode(mode === 'explode' ? 'explode' : 'whole');
    if (mode === 'test') { this.yaw = 0; this.amount = 0; }
    this.root.position.x = mode === 'test' ? -this.pullValue * 1.8 : 0;
    this.host.querySelectorAll('[data-car-mode]').forEach(b=>b.setAttribute('aria-checked',String((b as HTMLElement).dataset.carMode===mode)));
    this.host.querySelector('.il-live')!.textContent = mode === 'test' ? '側面就位！向左拉車，放手出發。' : mode === 'explode' ? '點零件聽祕密，也能用手轉方向。' : mode === 'idle' ? '選一個開關，開始探索！' : '用手左右拖，看看車子的每一面。';
    this.wake();
  }
  private material(color: number, metal=.1, rough=.32) { return new T.MeshStandardMaterial({color,metalness:metal,roughness:rough}); }
  private mesh(g:T.BufferGeometry,c:number,parent:T.Object3D,x=0,y=0,z=0,metal=.1) {const m=new T.Mesh(g,this.material(c,metal));m.position.set(x,y,z);parent.add(m);return m;}
  private box(w:number,h:number,d:number,c:number,p:T.Object3D,x=0,y=0,z=0) {return this.mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(w,h,d)*.16),c,p,x,y,z);}
  private disk(r:number,d:number,c:number,p:T.Object3D,x=0,y=0,z=0) {const m=this.mesh(new T.CylinderGeometry(r,r,d,64),c,p,x,y,z,.4);m.rotation.x=Math.PI/2;return m;}
  private part(id:string,home:number[],away:number[],skin=false) {
    const group=new T.Group();group.position.fromArray(home);group.userData.partId=id;this.root.add(group);
    const button=document.createElement('button');button.type='button';button.dataset.part=id;button.textContent=String(PARTS[this.kind].findIndex(p=>p[0]===id)+1);button.setAttribute('aria-label',PARTS[this.kind].find(p=>p[0]===id)![1]);this.labelLayer.append(button);
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');this.labelLayer.querySelector('svg')!.append(line);
    this.parts.push({id,group,home:new T.Vector3(...home),away:new T.Vector3(...(this.kind==='clock'?CLOCK_SPREAD[id]:away)),skin,button,line});return group;
  }
  private gear(r:number,teeth:number,p:T.Object3D,x:number,y:number,z:number,c=0xd9ac5a) {
    const g=new T.Group();g.position.set(x,y,z);p.add(g);const shape=new T.Shape();
    for(let i=0;i<teeth*4;i++){const a=i*Math.PI*2/(teeth*4),radius=r*(i%4===0||i%4===3? .9:1.05);const px=Math.cos(a)*radius,py=Math.sin(a)*radius;if(!i)shape.moveTo(px,py);else shape.lineTo(px,py);}shape.closePath();
    const hole=new T.Path();hole.absarc(0,0,r*.16,0,Math.PI*2,true);shape.holes.push(hole);
    this.mesh(new T.ExtrudeGeometry(shape,{depth:.12,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),c,g,0,0,0,.65);
    this.disk(r*.16,.21,0xd6e5eb,g,0,0,.05);this.gears.push(g);return g;
  }
  private clock() {
    const casing=this.part('case',[0,0,-.2],[-2.6,.35,-1.1],true);
    this.disk(1.8,.5,0x2b7384,casing);this.mesh(new T.TorusGeometry(1.7,.15,16,96),0xc2ad7c,casing,0,0,.32,.8);
    this.box(.3,.65,.5,0x2b7384,casing,-.95,-1.7);this.box(.3,.65,.5,0x2b7384,casing,.95,-1.7);
    const glass=this.part('glass',[0,0,.7],[3.3,.3,1.4],true);
    const lens=this.disk(1.62,.045,0xd6f5ff,glass);lens.material.transparent=true;lens.material.opacity=.10;lens.material.depthWrite=false;
    this.mesh(new T.TorusGeometry(1.64,.035,12,96),0x9fc4ce,glass,0,0,0,.7);
    const dial=this.part('dial',[0,0,.45],[1.5,.2,.8],true);
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=1024;const ctx=canvas.getContext('2d')!;
    ctx.fillStyle='#f8f1df';ctx.fillRect(0,0,1024,1024);ctx.translate(512,512);
    for(let i=0;i<60;i++){ctx.save();ctx.rotate(i*Math.PI/30);ctx.fillStyle='#26444a';ctx.fillRect(-2,-465,4,i%5===0?32:13);ctx.restore();}
    ctx.font='600 72px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#234752';for(let i=1;i<=12;i++){const a=i*Math.PI/6;ctx.fillText(String(i),Math.sin(a)*372,-Math.cos(a)*372);}ctx.font='20px system-ui';ctx.fillText('QUARTZ',0,220);
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;this.textures.push(texture);
    const face=this.mesh(new T.CircleGeometry(1.6,96),0xffffff,dial);face.material.map=texture;face.material.roughness=.7;face.material.side=T.DoubleSide;
    const hands=this.part('hands',[0,0,.57],[2.6,-.2,1.1]);hands.add(this.handMinute,this.handHour);
    this.box(.075,1.31,.04,0x158ea0,this.handMinute,0,.55,.07);this.box(.13,.92,.05,0xb18435,this.handHour,0,.34,.02);this.disk(.10,.12,0xe5bd65,hands,0,0,.13);
    const gears=this.part('gears',[0,.1,.10],[.05,.5,.1]);this.gear(.43,24,gears,0,0,0);this.gear(.28,16,gears,.64,.08,.04);this.gear(.23,12,gears,.21,.56,.02);this.gear(.31,18,gears,-.66,.1,.02,0xebebd8);
    const motor=this.part('motor',[-.55,-.7,.04],[-1.5,-1.25,.35]);this.box(.65,.3,.3,0xb76632,motor);for(let i=0;i<16;i++)this.mesh(new T.TorusGeometry(.16,.013,6,20),0xe5a17a,motor,-.28+i*.036,0,.08,.8).rotation.y=Math.PI/2;this.disk(.19,.15,0x969da6,motor,.4,0,.05);
    const pcb=this.part('quartz',[.45,-.75,.05],[.35,-1.5,.2]);this.box(.72,.46,.06,0x2d7962,pcb);this.box(.22,.18,.07,0x22252a,pcb,-.08,0,.06);this.box(.14,.30,.1,0xc4c6c7,pcb,.23,0,.07);
    const battery=this.part('battery',[0,-1.25,-.48],[-2.6,-1.6,-.1]);this.mesh(new T.CylinderGeometry(.19,.19,1.25,32),0xcbbb80,battery,0,0,0,.6).rotation.z=Math.PI/2;this.mesh(new T.CylinderGeometry(.2,.2,.27,32),0x242e40,battery,.47,0,0).rotation.z=Math.PI/2;this.mesh(new T.CylinderGeometry(.09,.09,.05,16),0xd9dfe4,battery,-.65,0,0,.8).rotation.z=Math.PI/2;
  }
  private car() {
    const shell=this.part('shell',[0,.40,0],[0,1.9,-.1],true);
    buildCarBody(shell);
    const chassis=this.part('chassis',[0,.25,0],[0,-1.2,0]);this.box(3.7,.16,1.38,0x3b414a,chassis);
    for(const x of [-1.3,1.3])for(const z of [-.52,.52]){this.disk(.075,.09,0xd7dade,chassis,x,.05,z).rotation.x=0;}
    const wheels=this.part('wheels',[0,0,0],[0,-.35,0]);
    for(const x of [-1.18,1.18])for(const z of [-.88,.88]){const w=new T.Group();w.position.set(x,.06,z);w.userData.side=z<0?-1:1;wheels.add(w);this.mesh(new T.TorusGeometry(.36,.145,16,48),0x20262b,w).scale.z=1.2;this.disk(.28,.19,0xb9c5cd,w);this.disk(.235,.20,0x25343e,w);this.disk(.09,.25,0xcbd8de,w);const face=z>0?.13:-.13;this.mesh(new T.TorusGeometry(.27,.022,8,40),0xe2e8eb,w,0,0,face,.8);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const spoke=this.box(.048,.17,.035,0xdde5e9,w,Math.sin(a)*.165,Math.cos(a)*.165,face);spoke.rotation.z=-a;}this.wheels.push(w);}
    const axles=this.part('axles',[0,.07,0],[0,-.58,0]);for(const x of [-1.18,1.18])this.disk(.07,1.83,0xcdd2d7,axles,x,0,0);
    const housing=this.part('housing',[-.65,.5,0],[-.95,.7,-1.7],true);this.box(1.25,.65,.8,0xe1dac5,housing);
    const spring=this.part('spring',[-.58,.52,.1],[-1.8,.6,1.1]);
    const points=Array.from({length:300},(_,i)=>{const a=i*.18,r=.035+i*.001;return new T.Vector3(Math.cos(a)*r,Math.sin(a)*r,0);});this.spring=this.mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),300,.022,6,false),0xb8c3ce,spring,0,0,0,.8);
    const gears=this.part('gears',[-.83,.45,.36],[.3,.3,1.2]);this.gear(.27,18,gears,-.2,0,0);this.gear(.16,10,gears,.22,0,.01);this.gear(.25,16,gears,.60,0,.01);
    const clutch=this.part('clutch',[-1.18,.2,.45],[1.8,.35,1.1]);this.gear(.20,10,clutch,0,0,0,0xf1d596);this.box(.24,.07,.08,0xb7bbc1,clutch,.25,.05,.15);
  }
  private setMode(mode:ViewMode) {this.mode=mode;this.target=mode==='explode'?1:0;if(mode!=='whole')this.root.position.x=0;this.skins();this.wake();}
  private skins() {
    this.parts.forEach(p=>p.group.traverse(n=>{if(n instanceof T.Mesh){const m=n.material as T.MeshStandardMaterial;const glass=p.id==='glass';m.transparent=glass||(this.mode==='xray'&&p.skin);m.opacity=glass?.10:this.mode==='xray'&&p.skin?.13:1;m.depthWrite=!m.transparent;}}));
  }
  private select(id:string,host:HTMLElement) {
    if(this.mode==='whole'&&!['case','glass','dial','hands','shell','wheels'].includes(id)) {if(this.kind==='car')this.setCarMode('explode');else this.setMode('xray');host.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view==='xray')));}
    this.selected=id;this.seen.add(id);const data=PARTS[this.kind].find(p=>p[0]===id)!;
    this.partInfo.innerHTML=`<strong>${data[1]}</strong><p>${data[2]}</p><small>${data[3]}</small>`;
    host.querySelector('.mech-quick-info')!.innerHTML=`<strong>${data[1]}</strong><p>${data[2]}</p>`;
    host.querySelector('[data-discovered]')!.textContent=`${this.seen.size} / 8`;
    host.querySelectorAll<HTMLButtonElement>('[data-part]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.part===id)));
    this.parts.forEach(p=>p.group.traverse(n=>{if(n instanceof T.Mesh){const m=n.material as T.MeshStandardMaterial;m.emissive.setHex(p.id===id?0x164b59:0);m.emissiveIntensity=p.id===id?.5:0;}}));this.wake();
  }
  setClock(minutes:number) {this.minutes=minutes;this.handMinute.rotation.z=-minutes*Math.PI/30;this.handHour.rotation.z=-minutes*Math.PI/360;this.gears.forEach((g,i)=>g.rotation.z=minutes*.06*(i%2?-1:1)/(i+1));}
  setCar(pull:number,travel=0,running=false) {this.pullValue=pull;this.root.position.x=this.carMode==='test'?-pull*1.8+travel:0;this.wheels.forEach(w=>w.rotation.z=running?-travel/.5:pull*4);if(this.spring)this.spring.scale.setScalar(1-.25*pull);this.gears.forEach((g,i)=>g.rotation.z=(running?travel*4:pull*6)*(i%2?-1:1));}
  frame(dt:number) {
    this.amount+=(this.target-this.amount)*Math.min(1,dt*9);if(Math.abs(this.amount-this.target)<.001)this.amount=this.target;
    this.root.rotation.set(this.kind==='car'?(this.carMode==='test'?0:.24):.03,this.yaw,0);
    const w=this.stage.clientWidth,h=this.stage.clientHeight;
    if(w&&h){const span=this.kind==='clock'?2.6+this.amount*3.3:this.carMode==='test'?5.8:3.3+this.amount*1.4;const halfHeight=Math.max(this.kind==='clock'?2.45+this.amount*.9:2.35+this.amount*.95,span*h/w);const halfWidth=halfHeight*w/h,center=this.kind==='car'?(this.carMode==='test'?-.445+.28*halfHeight:.45):0;this.camera.left=-halfWidth;this.camera.right=halfWidth;this.camera.top=halfHeight+center;this.camera.bottom=-halfHeight+center;this.camera.updateProjectionMatrix();}
    this.parts.forEach(p=>{p.group.position.copy(p.home).lerp(p.away,this.amount);if(p.id==='wheels')p.group.children.forEach(w=>{w.position.z=(w.userData.side||1)*(.88+this.amount*.75);});});
    this.root.updateMatrixWorld(true);
    const occupied: {x:number;y:number}[]=[];
    this.parts.forEach(p=>{
      const pos=p.group.getWorldPosition(new T.Vector3()).project(this.camera),anchor={x:(pos.x+1)*w/2,y:(1-pos.y)*h/2};
      const candidates=[[0,0],[40,0],[-40,0],[0,40],[0,-40],[40,40],[-40,-40],[60,-40],[-60,40],[0,80]];
      const point=candidates.map(([dx,dy])=>({x:Math.max(20,Math.min(w-20,anchor.x+dx)),y:Math.max(20,Math.min(h-20,anchor.y+dy))})).find(c=>occupied.every(o=>Math.hypot(o.x-c.x,o.y-c.y)>37))||anchor;
      p.button.hidden=this.mode!=='explode'&&p.id!==this.selected;
      if(!p.button.hidden)occupied.push(point);
      p.button.style.left=`${point.x}px`;p.button.style.top=`${point.y}px`;p.button.classList.toggle('selected',p.id===this.selected);
      p.line.setAttribute('x1',String(anchor.x));p.line.setAttribute('y1',String(anchor.y));p.line.setAttribute('x2',String(point.x));p.line.setAttribute('y2',String(point.y));p.line.style.display=p.button.hidden?'none':'';
    });
    return this.amount!==this.target;
  }
  destroy() {this.abort.abort();this.textures.forEach(t=>t.dispose());this.env?.dispose();this.scene.environment=null;}
}
