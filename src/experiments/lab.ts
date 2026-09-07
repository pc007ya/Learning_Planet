import * as T from 'three';
import { FLOAT_OBJECTS, LAB_SPECS, buoyancy, carDistance, type LabKind } from './models';
import { Mechanism } from './mechanism';
import { LabExperience } from './experience';
import { installCarArtwork } from './car-art';
import { clockDemo } from './clock-demo';
import { clockTransmission,clockRPMLabels } from './clock-transmission';

export class InteractiveLab {
  private renderer?: T.WebGLRenderer;
  private scene = new T.Scene();
  private camera = new T.OrthographicCamera(-5, 5, 3.6, -3.6, 0.1, 100);
  private object = new T.Group();
  private mechanism?: Mechanism;
  private experience?: LabExperience;
  private abort = new AbortController();
  private resize?: ResizeObserver;
  private frame = 0;
  private last = 0;
  private dead = false;
  private active = false;
  private dragging = false;
  private selected = 0;
  private prediction = '';
  private targetY = 0;
  private minutes = 0;
  private demoElapsed = 0;
  private demoStarted = false;
  private demoCue = -1;
  private pull = 0.5;
  private rough = false;
  private travel = 0;
  private runDistance = 0;
  private runElapsed = 0;
  private records = 0;
  private tested = new Set<string>();
  private stage: HTMLElement;
  private status: HTMLElement;
  private log: HTMLElement;
  private answerReady = false;

  constructor(private host: HTMLElement, private kind: LabKind) {
    const spec = LAB_SPECS[kind];
    host.innerHTML = `<div class="il-layout"><section class="il-scene-panel"><div class="il-stage" role="img" aria-label="${spec.title}互動場景"></div><p class="il-live" role="status" aria-live="polite">${spec.objective}</p></section><aside class="il-panel"><p class="il-kicker">EXPERIMENT PLANET · 互動探索</p><h2>${spec.title}</h2><p>${spec.objective}</p><div class="il-controls"></div><button type="button" data-action="reset">↺ 重置目前操作</button><details><summary>模型說明</summary><p>${kind === 'buoyancy' ? '淡水、無水流的簡化模型。物件為示意比例，數值是教學樣本，不是所有同類物品的測量值。浮在水面時，浮力和重量平衡；沉底的物體也受到浮力。' : kind === 'clock' ? '這是指針與齒輪的傳動示意，不是完整鐘錶內部結構。相鄰外齒輪反向轉動；時針与分針由多級齒輪傳動形成 12:1 的轉速關係。石英鐘通常由電池與馬達驅動，機械鐘另有發條或重錘。' : '這是彈簧式回力車的簡化模型：往後拉 → 齒輪使彈簧儲能 → 放手帶動輪軸 → 摩擦使它停下。行駛距離為模型單位，不代表真實車款的公尺數。'}</p></details></aside></div><section class="il-panel il-observations"><h3>觀察紀錄 <span data-count>0 次</span></h3><p>每次只改一個條件，比較結果。紀錄保留於本次實驗，離開後重新開始。</p><ol class="il-log"></ol></section><section class="il-panel il-assessment"><h3>想一想</h3><p>${spec.question}</p><div class="il-answers">${spec.choices.map((s, i) => `<button type="button" data-answer="${i}">${s}</button>`).join('')}</div><p class="il-feedback" role="status">先完成至少一次操作與觀察，再回答。</p></section>`;
    this.stage = host.querySelector('.il-stage')!;
    this.status = host.querySelector('.il-live')!;
    this.log = host.querySelector('.il-log')!;
    const guide = document.createElement('p'); guide.className = 'il-scene-guide';
    guide.textContent = kind === 'buoyancy' ? '選物品 → 預測 → 放入水中 → 比較浮沉' : kind === 'clock' ? '左：指針比例 12:1 ｜ 右：外齒輪反向傳動示意' : '向左回拉 → 彈簧儲能 → 放手帶動輪軸';
    this.stage.append(guide);
    host.querySelector('.il-controls')!.innerHTML = kind === 'buoyancy' ? `<label>① 選物品<select data-input="object">${FLOAT_OBJECTS.map((o, i) => `<option value="${i}">${o.name}</option>`).join('')}</select></label><p data-sample></p><label>② 先預測<select data-input="prediction"><option value="">請選擇</option><option value="float">浮在水面</option><option value="sink">沉到水底</option><option value="unsure">還不確定</option></select></label><button type="button" data-action="run">③ 放入水中</button><p>也可拖動物品，放手入水。可重複測試，猜錯也能學習。</p>` : kind === 'clock' ? `<label>轉動分針（分鐘）<input data-input="minutes" type="range" min="0" max="720" step="1" value="0"></label><p data-readout>12:00</p><button type="button" data-action="step">分針前進一圈（60 分鐘）</button><button type="button" data-action="run">▶ 播放／暫停</button><button type="button" data-action="record">記錄目前時間</button><p>可拖曳鐘面指針；滑桿與按鈕也能操作。</p>` : `<label>① 向後拉多少<input data-input="pull" type="range" min="10" max="100" step="10" value="50"></label><p data-readout>回拉量 50%</p><label>② 路面<select data-input="surface"><option value="smooth">較平滑</option><option value="rough">較粗糙</option></select></label><button type="button" data-action="run">③ 放手出發</button><p>也可把車向左拖，放手前進。比較同一回拉量在不同路面的結果。</p>`;
    if (kind === 'car') {
      const heading = document.createElement('div'); heading.className = 'bp-heading'; heading.innerHTML = '<h2>回力車工坊</h2>';
      host.querySelector('.il-scene-panel')!.prepend(heading);
      host.dataset.road = 'smooth';
      host.querySelector('.il-controls')!.innerHTML = `<input type="hidden" data-input="pull" value="50"><div class="car-roads" role="group" aria-label="選擇路面"><button data-road="smooth" aria-pressed="true" aria-label="平路"><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M8 55 30 5h40l22 50" fill="#547990"/><path d="M50 12v9m0 8v9m0 8v8" stroke="#fff3bb" stroke-width="4"/></svg><span>平路</span></button><button data-road="rough" aria-pressed="false" aria-label="石頭路"><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M8 55 30 5h40l22 50" fill="#675852"/><g fill="#d1b99a" stroke="#8c7664"><path d="m25 37 8-8 12 5-3 11-15 2Z"/><path d="m56 17 8-5 9 7-5 8-12-2Z"/><path d="m52 43 8-10 16 5 3 14-21 3Z"/><path d="m38 15 8-7 6 8-4 9-12-1Z"/></g></svg><span>石頭路</span></button></div><p data-readout>回拉量 50%</p><div class="car-force" role="group" aria-label="回拉力量"><button data-force=".25" aria-label="小力回拉">●</button><button data-force=".5" aria-label="中力回拉">●●</button><button data-force="1" aria-label="大力回拉">●●●</button></div><button data-action="run">🏁 出發</button><p>打開旋轉，用手拖動。打開拆卸，點零件。打開拉力，鏡頭自動轉側面、拉遠；向左拉車，放手出發。也可點圓點選力量，再點出發。</p>`;
      const road = document.createElement('div'); road.className = 'car-track'; road.setAttribute('aria-hidden','true'); this.stage.append(road);
      installCarArtwork(host);
    }
    if (kind === 'clock') {
      host.classList.add('il-clock-play');
      const heading = document.createElement('div'); heading.className = 'bp-heading'; heading.innerHTML = '<h2>時鐘工坊</h2>';
      host.querySelector('.il-scene-panel')!.prepend(heading);
      host.querySelector('.il-controls')!.innerHTML = `<input type="hidden" data-input="minutes" value="0"><p data-readout>12:00</p><button data-action="step" aria-label="分針前進一圈，時針前進一大格">⟳ <span>+1 時</span></button><button data-action="run" aria-label="播放或暫停指針">▶ / Ⅱ</button><button data-action="record" aria-label="記錄目前時間">📒</button><p>調時時，左右拖動鐘面調整時間。打開旋轉開關，用手轉方向；打開拆卸，點右上零件表找零件。</p>`;
      const reset = host.querySelector<HTMLButtonElement>('[data-action="reset"]')!; reset.textContent = '↺'; reset.setAttribute('aria-label','重新開始');
      host.querySelector('[data-action="run"]')!.insertAdjacentHTML('afterend','<button data-action="peek" aria-label="透視刻度盤" title="透視刻度盤" aria-pressed="false"><svg viewBox="0 0 32 24" width="32" height="24" aria-hidden="true"><path d="M2 12Q16-5 30 12Q16 29 2 12Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="16" cy="12" r="5" fill="currentColor"/></svg></button>');
      this.stage.insertAdjacentHTML('beforeend',clockTransmission());
      this.stage.querySelector('.ct-motor')!.insertAdjacentHTML('beforeend','<small data-rpm-motor>動畫 1 RPM（非實機）</small>');
      this.stage.querySelector('.clock-transmission')!.addEventListener('toggle',()=>this.wake(),{signal:this.abort.signal});
      const clockPicture = (hour: number) => `<svg viewBox="0 0 160 160" role="img" aria-label="${hour}點"><circle cx="80" cy="80" r="70" fill="#fff5db" stroke="#cba85c" stroke-width="7"/>${Array.from({length:12},(_,i)=>`<circle cx="${80+59*Math.sin(i*Math.PI/6)}" cy="${80-59*Math.cos(i*Math.PI/6)}" r="3" fill="#294651"/>`).join('')}<path d="M80 80V25" stroke="#168ba8" stroke-width="6" stroke-linecap="round"/><path d="M80 80L${80+36*Math.sin(hour*Math.PI/6)} ${80-36*Math.cos(hour*Math.PI/6)}" stroke="#a47818" stroke-width="9" stroke-linecap="round"/><circle cx="80" cy="80" r="6" fill="#294651"/></svg>`;
      host.querySelector('.il-assessment > p')!.innerHTML = `<span class="clock-question">${clockPicture(12)}<span aria-label="分針前進一圈">⟳ → ?</span></span>`;
      host.querySelector('.il-assessment h3')!.textContent = '分針一圈，時針？';
      host.querySelector('.il-answers')!.innerHTML = [12,12,1].map((hour,i)=>`<button data-answer="${i}" aria-label="${spec.choices[i]}">${clockPicture(hour).replace('</svg>',i===0?'<path d="M92 38A44 44 0 1 1 69 37M65 29 70 39 59 43" fill="none" stroke="#b07e16" stroke-width="5" stroke-linecap="round"/></svg>':i===2?'<path d="M80 37A43 43 0 0 1 102 43" fill="none" stroke="#b07e16" stroke-width="6"/></svg>':'</svg>')}<span>${i===0?'⟳ 一圈':i===1?'不動':'一大格'}</span></button>`).join('');
    }
    host.addEventListener('click', this.click, { signal: this.abort.signal });
    host.addEventListener('input', this.input, { signal: this.abort.signal });
    this.camera.position.set(0, 0, 12);
    this.scene.add(new T.AmbientLight(0xffffff, kind === 'buoyancy' ? 2 : .45));
    const light = new T.DirectionalLight(0xffffff, kind === 'buoyancy' ? 3 : 1.4); light.position.set(-3, 5, 8); this.scene.add(light);
    try {
      this.renderer = new T.WebGLRenderer({ alpha: true, antialias: true });
      this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      this.stage.append(this.renderer.domElement);
      if (kind === 'buoyancy') {
        this.stage.addEventListener('pointerdown', this.pointerDown, { signal: this.abort.signal });
        this.stage.addEventListener('pointermove', this.pointerMove, { signal: this.abort.signal });
        this.stage.addEventListener('pointerup', this.pointerUp, { signal: this.abort.signal });
        this.stage.addEventListener('pointercancel', this.pointerCancel, { signal: this.abort.signal });
      }
      this.resize = new ResizeObserver(() => this.resizeScene()); this.resize.observe(this.stage);
    } catch {
      this.stage.innerHTML = '<p class="il-fallback">此裝置無法顯示 3D。仍可使用旁邊的選單與按鈕操作，並閱讀文字觀察結果。</p>';
    }
    if (kind === 'buoyancy') this.buildTank();
    if (kind !== 'buoyancy') this.mechanism = new Mechanism(kind, this.scene, this.camera, this.stage, host, this.renderer, () => this.wake(), (value, release) => {
      this.active = false;
      if (kind === 'clock') { this.demoStarted=false;this.mechanism?.setClockDemo(false);if (!release) this.minutes = value; this.updateClock(); if (release) this.record(`轉動指針到 ${this.clockText()}，分針和時針一起運動。`); }
      else { if (!release) { this.pull = value; (host.querySelector('[data-input="pull"]') as HTMLInputElement).value = String(Math.round(value * 100)); this.updateCar(); } else this.run(); }
    });
    if (kind !== 'buoyancy') {
      host.querySelector('aside > details > p')!.textContent = kind === 'clock' ? '常見的電池式石英鐘：電池供电，石英與電路提供節拍，馬達和多級齒輪帶動指針。本模型省略部分細小零件，不是維修圖。分針和時針保持 12:1 的轉速關係。' : '彈簧式回力車：回拉讓輪軸、齒輪帶動捲簧儲能，放手後由捲簧驅動車輪。拆解圖省略部分緊固件；行駛距離為教學模型單位，不代表真實車款。';
    }
    this.scene.add(this.object);
    this.reset();
    this.experience = new LabExperience(host, kind);
    document.addEventListener('visibilitychange', () => { this.last = 0; if (!document.hidden) this.wake(); }, { signal: this.abort.signal });
    this.wake();
  }

  private mesh(geometry: T.BufferGeometry, color: number, x = 0, y = 0, z = 0, parent: T.Object3D = this.scene) {
    const mesh = new T.Mesh(geometry, new T.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.12 }));
    mesh.position.set(x, y, z); parent.add(mesh); return mesh;
  }
  private box(w: number, h: number, d: number, color: number, x: number, y: number, z = 0, parent?: T.Object3D) { return this.mesh(new T.BoxGeometry(w, h, d), color, x, y, z, parent); }
  private buildTank() {
    this.box(8.1, .12, .4, 0x8ce4ff, 0, -2.65);
    this.box(.12, 4.8, .4, 0x8ce4ff, -4, -.3); this.box(.12, 4.8, .4, 0x8ce4ff, 4, -.3);
    const water = this.box(7.9, 2.7, .1, 0x116e9e, 0, -1.2, -.8);
    water.material.transparent = true; water.material.opacity = .55;
    this.box(7.9, .045, .1, 0x7deaff, 0, .15, .1);
    for (let i = 0; i < 6; i++) this.box(.2, .035, .1, 0xffffff, -3.85, -2.3 + i * .45, .2);
  }
  private disposeObject(root: T.Object3D) {
    root.traverse(node => { if (node instanceof T.Mesh) { node.geometry.dispose(); const materials = Array.isArray(node.material) ? node.material : [node.material]; materials.forEach(m => m.dispose()); } });
  }
  private buildSample() {
    this.disposeObject(this.object); this.object.clear();
    const o = FLOAT_OBJECTS[this.selected];
    if (o.id === 'stone') { const m = this.mesh(new T.DodecahedronGeometry(.48), o.color, 0, 0, 0, this.object); m.scale.set(1.25, .8, .8); }
    if (o.id === 'key') {
      this.mesh(new T.TorusGeometry(.25, .09, 10, 32), o.color, -.35, .05, 0, this.object);
      this.box(.85, .12, .13, o.color, .25, .05, 0, this.object);
      this.box(.12, .25, .13, o.color, .5, -.08, 0, this.object);
      this.box(.12, .2, .13, o.color, .25, -.05, 0, this.object);
    }
    if (o.id === 'boat') {
      const hull = new T.Shape(); hull.moveTo(-.9, .1); hull.lineTo(.9, .1); hull.lineTo(.5, -.35); hull.lineTo(-.5, -.35); hull.closePath();
      this.mesh(new T.ExtrudeGeometry(hull, { depth: .4, bevelEnabled: false }), o.color, 0, 0, -.2, this.object);
      const fold = new T.Shape(); fold.moveTo(-.5, .1); fold.lineTo(0, .7); fold.lineTo(.5, .1); fold.closePath();
      this.mesh(new T.ShapeGeometry(fold), 0xffca83, 0, 0, .23, this.object);
    }
    if (o.id === 'ball') {
      for (let i = 0; i < 6; i++) this.mesh(new T.SphereGeometry(.7, 12, 24, i * Math.PI / 3, Math.PI / 3), [0xff728f, 0xffffff, 0x5bcbf3, 0xffffff, 0xffd45d, 0xffffff][i], 0, 0, 0, this.object);
    }
    if (o.id === 'wood') this.box(1.1, .65, .5, o.color, 0, 0, 0, this.object);
    if (o.id === 'cork') this.mesh(new T.CylinderGeometry(.25, .25, .7, 24), o.color, 0, 0, 0, this.object).rotation.z = Math.PI / 2;
    if (o.id === 'coin') this.mesh(new T.CylinderGeometry(.35, .35, .08, 32), o.color, 0, 0, 0, this.object).rotation.x = Math.PI / 2;
    if (o.id === 'marble') this.mesh(new T.SphereGeometry(.32, 24, 16), o.color, 0, 0, 0, this.object);
    this.object.position.set(0, 1.4, .4);
    this.host.querySelector('[data-sample]')!.textContent = `${o.note} 教學樣本：${o.mass} g，可排水體積上限 ${o.volume} cm³。`;
  }
  private resizeScene() {
    const w = this.stage.clientWidth, h = this.stage.clientHeight;
    if (!w || !h) return;
    this.camera.left = -5; this.camera.right = 5;
    this.camera.top = Math.max(3.2, 5 * h / w); this.camera.bottom = -this.camera.top;
    this.camera.updateProjectionMatrix(); this.renderer?.setSize(w, h); this.wake();
  }
  private click = (event: Event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button'); if (!button) return;
    if(button.hasAttribute('data-rpm-size')){const panel=this.stage.querySelector('.clock-transmission')!;const large=panel.classList.toggle('is-large');button.setAttribute('aria-pressed',String(large));button.setAttribute('aria-label',large?'縮小轉速面板':'放大轉速面板');this.wake();return;}
    if(button.dataset.rpmSpeed){const fast=button.dataset.rpmSpeed==='60';this.host.querySelectorAll<HTMLButtonElement>('[data-rpm-speed]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const values=clockRPMLabels(fast?60:1);this.host.querySelectorAll('[data-rpm]').forEach((el,i)=>el.textContent=values[i]+' RPM');this.host.querySelector('[data-rpm-motor]')!.textContent=`動畫 ${fast?60:1} RPM（非實機）`;return;}
    if(this.kind==='clock'&&button.dataset.action==='peek'){const on=this.host.dataset.clockPeek!=='true';this.mechanism?.setClockPeek(on);this.status.textContent=on?'透視開啟：看看齒輪怎麼帶動指針。':'刻度盤恢復。';return;}
    if (this.kind === 'clock' && (['quiz','notes','help'].includes(button.dataset.helper || '') || button.hasAttribute('data-clock-rotate') || button.hasAttribute('data-clock-explode') || button.dataset.action === 'step')) { this.active=false; this.updateClock(); }
    if(this.kind==='clock'&&(button.hasAttribute('data-clock-rotate')||button.hasAttribute('data-clock-explode')||button.dataset.action==='step')){this.demoStarted=false;this.mechanism?.setClockDemo(false);}
    if (this.kind === 'car') {
      if (button.dataset.carMode || button.dataset.part) this.active = false;
      if (button.dataset.road) {
        this.active = false; this.rough = button.dataset.road === 'rough'; this.host.dataset.road = button.dataset.road;
        this.host.querySelectorAll<HTMLButtonElement>('[data-road]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
        this.updateCar(); this.status.textContent = this.rough ? '換成石頭路，試試看能跑多遠。' : '換成平路，用相同力量比較看看。';
      }
      if (button.dataset.force) { this.active = false; this.pull = Number(button.dataset.force); this.mechanism?.setCarMode('test'); this.updateCar(); }
    }
    if (button.dataset.answer !== undefined) {
      if (this.kind === 'car') {
        const correct=Number(button.dataset.answer)===LAB_SPECS.car.answer;
        const message=!this.answerReady?'先回到實驗，完成一次拉車試跑，再來選圖片。':correct?'答對了！往後拉車時，能量存在捲簧裡。放手後，捲簧透過齒輪帶動車輪。':'再想想看！回到實驗，拆開車殼看看捲簧，聽聽它的工作。';
        this.host.querySelector('.il-feedback')!.innerHTML=`<span aria-hidden="true">${!this.answerReady?'🚗 ↶':correct?'✓ ⭐':'🔎 ↶'}</span><span class="bp-sr">${message}</span>`;
        this.host.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
        return;
      }
      this.host.querySelector('.il-feedback')!.textContent = !this.answerReady ? '先操作並完成一次觀察，再用證據回答。' : Number(button.dataset.answer) === LAB_SPECS[this.kind].answer ? '✓ 完成！你已把操作結果和原理解釋連起來。可以再改一個條件試試。' : '再看看觀察紀錄。答錯沒關係，回到實驗找證據後再回答。'; return;
    }
    if (button.dataset.action === 'reset') this.reset();
    if (button.dataset.action === 'run') this.run();
    if (button.dataset.action === 'step') { this.minutes += 60; this.updateClock(); this.record(`分針前進一圈：現在 ${this.clockText()}，時針前進一大格。`); }
    if (button.dataset.action === 'record') this.record(`觀察時間 ${this.clockText()}；分針累計 ${Math.floor(this.minutes / 60)} 圈，時針累計 ${(this.minutes / 720).toFixed(2)} 圈。`);
    this.wake();
  };
  private input = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.dataset.input === 'object') { this.selected = Number(input.value); this.reset(); }
    if (input.dataset.input === 'prediction') this.prediction = input.value;
    if (input.dataset.input === 'minutes') { this.active = false; this.minutes = Number(input.value); this.updateClock(); this.answerReady = this.minutes > 0; }
    if (input.dataset.input === 'pull') { this.active = false; this.pull = Number(input.value) / 100; this.updateCar(); }
    if (input.dataset.input === 'surface') { this.active = false; this.rough = input.value === 'rough'; this.updateCar(); }
    this.wake();
  };
  private reset() {
    this.active = false; this.dragging = false; this.last = 0;
    if(this.kind==='clock'){this.demoStarted=false;this.demoElapsed=0;this.mechanism?.setClockDemo(false);this.mechanism?.setClockPeek(false);}
    if (this.kind === 'buoyancy') { this.prediction = ''; (this.host.querySelector('[data-input="prediction"]') as HTMLSelectElement).value = ''; this.buildSample(); }
    if (this.kind === 'clock') { this.minutes = 0; this.updateClock(); }
    if (this.kind === 'car') { this.pull = .5; this.mechanism?.setCarMode('rotate'); (this.host.querySelector('[data-input="pull"]') as HTMLInputElement).value = '50'; this.updateCar(); }
    this.status.textContent = this.kind === 'car' ? '用手左右拖，看看車子的每一面。' : this.kind === 'clock' ? '☝ 拖動調時 · ⟳ 前進一小時' : '準備好了，改變條件後開始觀察。'; this.wake();
  }
  private run() {
    if (this.kind === 'buoyancy') {
      if (this.active) return;
      if (!this.prediction) { this.status.textContent = '請先選擇浮、沉或還不確定，再放入水中。'; return; }
      const o = FLOAT_OBJECTS[this.selected], result = buoyancy(o.mass, o.volume);
      this.targetY = result.floats ? .15 + .3 - .6 * result.fraction : -2.13;
      this.active = true; this.status.textContent = `正在觀察${o.name}…`;
    } else if (this.kind === 'clock') {
      if(!this.demoStarted||this.demoElapsed>=60){this.demoElapsed=0;this.demoStarted=true;this.demoCue=-1;this.minutes=0;}
      this.active=!this.active;this.last=0;this.mechanism?.setClockDemo(true);this.updateClock();
      this.status.textContent=this.active?'60 倍速：一分鐘看完一小時。':'Ⅱ 暫停';
    }
    else { if (this.active) return; this.mechanism?.setCarMode('test'); this.runDistance = carDistance(this.pull, this.rough); this.travel = 0; this.runElapsed = 0; this.object.position.x = -3.2; this.active = true; this.status.textContent = '彈簧釋放能量，透過輪軸帶動車輪前進。'; }
    this.wake();
  }
  private record(text: string) {
    const li = document.createElement('li'); li.textContent = text; this.log.prepend(li);
    if (this.log.children.length > 24) this.log.lastElementChild?.remove();
    this.records++; this.host.querySelector('[data-count]')!.textContent = `${this.records} 次${this.kind === 'buoyancy' ? ` · 已測 ${this.tested.size}/8 種` : ''}`;
    this.answerReady = true;
    if(this.kind==='clock') this.host.querySelector('.il-feedback')!.textContent='看圖選一個。';
  }
  private clockText() { const m = Math.floor(this.minutes) % 720; return `${Math.floor(m / 60) || 12}:${String(m % 60).padStart(2, '0')}`; }
  private updateClock() {
    this.mechanism?.setClock(this.minutes);
    (this.host.querySelector('[data-input="minutes"]') as HTMLInputElement).value = String(this.minutes % 721);
    const readout=this.host.querySelector('[data-readout]')!;const time=this.clockText();if(readout.textContent!==time)readout.textContent=time;
    const play=this.host.querySelector<HTMLButtonElement>('[data-action="run"]')!; const icon=this.active?'Ⅱ':'▶ 1 min';if(play.textContent!==icon)play.textContent=icon;const pressed=String(this.active);if(play.getAttribute('aria-pressed')!==pressed)play.setAttribute('aria-pressed',pressed);const label=this.active?'暫停一分鐘示範':this.demoStarted&&this.demoElapsed<60?'繼續一分鐘示範':'播放一分鐘示範';if(play.getAttribute('aria-label')!==label)play.setAttribute('aria-label',label);
  }
  private updateCar() {
    this.object.position.set(-1.5 - this.pull * 1.7, -1, .2);
    this.mechanism?.setCar(this.pull);
    this.host.querySelector('[data-readout]')!.textContent = `回拉量 ${Math.round(this.pull * 100)}% · ${this.rough ? '較粗糙' : '較平滑'}路面`;
    this.host.querySelectorAll<HTMLButtonElement>('[data-force]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.force)===this.pull)));
  }
  private point(event: PointerEvent) {
    const rect = this.stage.getBoundingClientRect();
    const ray = new T.Raycaster(); ray.setFromCamera(new T.Vector2((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2), this.camera);
    const p = new T.Vector3(); ray.ray.intersectPlane(new T.Plane(new T.Vector3(0, 0, 1), 0), p); return p;
  }
  private pointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    const p = this.point(e);
    if (this.kind === 'clock' ? Math.hypot(p.x + 1.6, p.y - .45) > 1.9 : Math.hypot(p.x - this.object.position.x, p.y - this.object.position.y) > 1.1) return;
    if (this.kind === 'buoyancy' && !this.prediction) { this.status.textContent = '請先選擇你的預測，再拖動物品。'; return; }
    this.dragging = true; this.active = false; this.stage.setPointerCapture(e.pointerId); e.preventDefault();
  };
  private pointerMove = (e: PointerEvent) => {
    if (!this.dragging) return; const p = this.point(e);
    if (this.kind === 'buoyancy') this.object.position.set(Math.max(-3, Math.min(3, p.x)), Math.max(.8, Math.min(2.3, p.y)), .4);
    if (this.kind === 'clock') { const a = Math.atan2(p.x + 1.6, p.y - .45); const m = ((a / (2 * Math.PI) * 60) + 60) % 60; const old = this.minutes % 60; let d = m - old; if (d > 30) d -= 60; if (d < -30) d += 60; this.minutes = Math.max(0, this.minutes + d); this.updateClock(); }
    if (this.kind === 'car') { this.pull = Math.max(.1, Math.min(1, (-p.x - 1.5) / 1.7)); (this.host.querySelector('[data-input="pull"]') as HTMLInputElement).value = String(Math.round(this.pull * 100)); this.updateCar(); }
    this.wake();
  };
  private pointerUp = (e: PointerEvent) => { if (!this.dragging) return; this.dragging = false; if (this.stage.hasPointerCapture(e.pointerId)) this.stage.releasePointerCapture(e.pointerId); if (this.kind === 'clock') this.record(`轉動指針到 ${this.clockText()}，兩根指針一起依比例移動。`); else this.run(); };
  private pointerCancel = () => { this.dragging = false; this.active = false; this.status.textContent = '操作已取消，可重新開始。'; };
  private wake() { if (!this.frame && !this.dead && !document.hidden) this.frame = requestAnimationFrame(this.tick); }
  private tick = (now: number) => {
    this.frame = 0; if (this.dead || document.hidden) { this.last = 0; return; }
    const realDt = this.last ? Math.max(0,(now-this.last)/1000) : 0;
    const dt = Math.min(.05,realDt || .016); this.last = now;
    if (this.active && this.kind === 'buoyancy') {
      this.object.position.y += (this.targetY - this.object.position.y) * Math.min(1, dt * 3);
      if (Math.abs(this.object.position.y - this.targetY) < .015) {
        this.active = false; const o = FLOAT_OBJECTS[this.selected], r = buoyancy(o.mass, o.volume); this.tested.add(o.id);
        const text = `${o.name}：${r.floats ? '浮在水面' : '沉到水底'}。${r.floats ? '漂浮時浮力與重量平衡。' : '最大浮力仍小於重量；沉底後還有水底的支持力。'}`;
        this.status.textContent = text; this.record(`預測：${this.prediction === 'float' ? '浮' : this.prediction === 'sink' ? '沉' : '不確定'} → ${text}`);
      }
    }
    if (this.active && this.kind === 'clock') {
      const demo=clockDemo(this.demoElapsed+realDt);this.demoElapsed=demo.elapsed;this.minutes=demo.minutes;
      const counter=this.host.querySelector('[data-demo-seconds]')!;const seconds=String(Math.floor(demo.elapsed));if(counter.textContent!==seconds)counter.textContent=seconds;
      const cue=Math.min(3,Math.floor(demo.elapsed/20));
      if(cue!==this.demoCue){this.demoCue=cue;this.host.querySelector('.mech-quick-info')!.innerHTML=['<strong>馬達 → 齒輪</strong><p>馬達轉動，經過減速齒輪帶動指針；前段減速在這裡省略。</p>','<strong>分針正在走</strong><p>小齒輪帶大齒輪，轉動就變慢。</p>','<strong>看看短時針</strong><p>分針走得快，時針慢慢前進。</p>','<strong>✓ 一小時！</strong><p>分針一圈，時針一大格。</p>'][cue];}
      if(demo.done){this.active=false;this.record('60 秒示範完成：分針轉一圈，時針轉 30 度，前進一大格。');this.status.textContent='✓ 60 秒 → 1 小時';}
      this.updateClock();
    }
    if (this.active && this.kind === 'car') {
      this.runElapsed += dt; const t = Math.min(1, this.runElapsed / 2.5); this.travel = this.runDistance * (2 * t - t * t); this.object.position.x = -3.2 + this.travel;
      this.mechanism?.setCar(this.pull * (1 - t), this.travel, true);
      if (t === 1) { this.active = false; const text = `回拉 ${Math.round(this.pull * 100)}%／${this.rough ? '較粗糙' : '較平滑'}路面：前進 ${this.travel.toFixed(2)} 模型單位後停下。`; this.status.textContent = text; this.record(text); }
    }
    const transitioning = this.mechanism?.frame(dt);
    this.renderer?.render(this.scene, this.camera);
    if (this.active || transitioning) this.wake(); else this.last = 0;
  };
  destroy() { this.dead = true; this.experience?.destroy(); cancelAnimationFrame(this.frame); this.abort.abort(); this.resize?.disconnect(); this.mechanism?.destroy(); this.disposeObject(this.scene); this.renderer?.dispose(); this.renderer?.domElement.remove(); }
}
