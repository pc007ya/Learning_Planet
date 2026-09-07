import * as T from 'three';
import { FLOAT_OBJECTS, LAB_SPECS, buoyancy, carDistance, type LabKind } from './models';
import { Mechanism } from './mechanism';

export class InteractiveLab {
  private renderer?: T.WebGLRenderer;
  private scene = new T.Scene();
  private camera = new T.OrthographicCamera(-5, 5, 3.6, -3.6, 0.1, 100);
  private object = new T.Group();
  private mechanism?: Mechanism;
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
      if (kind === 'clock') { if (!release) this.minutes = value; this.updateClock(); if (release) this.record(`轉動指針到 ${this.clockText()}，分針和時針一起運動。`); }
      else { if (!release) { this.pull = value; (host.querySelector('[data-input="pull"]') as HTMLInputElement).value = String(Math.round(value * 100)); this.updateCar(); } else this.run(); }
    });
    if (kind !== 'buoyancy') {
      host.querySelector('aside > details > p')!.textContent = kind === 'clock' ? '常見的電池式石英鐘：電池供电，石英與電路提供節拍，馬達和多級齒輪帶動指針。本模型省略部分細小零件，不是維修圖。分針和時針保持 12:1 的轉速關係。' : '彈簧式回力車：回拉讓輪軸、齒輪帶動捲簧儲能，放手後由捲簧驅動車輪。拆解圖省略部分緊固件；行駛距離為教學模型單位，不代表真實車款。';
      host.querySelector('.il-controls > p:last-child')!.textContent = kind === 'clock' ? '完整外觀：左右拖動模型可調整時間。透視或拆開時：拖動模型可轉視角。' : '完整外觀：向左拖車、放手出發。透視或拆開時：拖動模型可轉視角。';
    }
    this.scene.add(this.object);
    this.reset();
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
    if (button.dataset.answer !== undefined) {
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
    if (this.kind === 'buoyancy') { this.prediction = ''; (this.host.querySelector('[data-input="prediction"]') as HTMLSelectElement).value = ''; this.buildSample(); }
    if (this.kind === 'clock') { this.minutes = 0; this.updateClock(); }
    if (this.kind === 'car') { this.pull = .5; (this.host.querySelector('[data-input="pull"]') as HTMLInputElement).value = '50'; this.updateCar(); }
    this.status.textContent = '準備好了，改變條件後開始觀察。'; this.wake();
  }
  private run() {
    if (this.kind === 'buoyancy') {
      if (this.active) return;
      if (!this.prediction) { this.status.textContent = '請先選擇浮、沉或還不確定，再放入水中。'; return; }
      const o = FLOAT_OBJECTS[this.selected], result = buoyancy(o.mass, o.volume);
      this.targetY = result.floats ? .15 + .3 - .6 * result.fraction : -2.13;
      this.active = true; this.status.textContent = `正在觀察${o.name}…`;
    } else if (this.kind === 'clock') { this.active = !this.active; this.status.textContent = this.active ? '加速示範中：分針轉 12 圈，時針轉 1 圈。試試透視，看裡面哪些零件跟著動。' : '已暫停，可以記錄目前時間。'; }
    else { if (this.active) return; this.runDistance = carDistance(this.pull, this.rough); this.travel = 0; this.runElapsed = 0; this.object.position.x = -3.2; this.active = true; this.status.textContent = '彈簧釋放能量，透過輪軸帶動車輪前進。'; }
    this.wake();
  }
  private record(text: string) {
    const li = document.createElement('li'); li.textContent = text; this.log.prepend(li);
    if (this.log.children.length > 24) this.log.lastElementChild?.remove();
    this.records++; this.host.querySelector('[data-count]')!.textContent = `${this.records} 次${this.kind === 'buoyancy' ? ` · 已測 ${this.tested.size}/8 種` : ''}`;
    this.answerReady = true;
  }
  private clockText() { const m = Math.floor(this.minutes) % 720; return `${Math.floor(m / 60) || 12}:${String(m % 60).padStart(2, '0')}`; }
  private updateClock() {
    this.mechanism?.setClock(this.minutes);
    (this.host.querySelector('[data-input="minutes"]') as HTMLInputElement).value = String(this.minutes % 721);
    this.host.querySelector('[data-readout]')!.textContent = `${this.clockText()} · 藍色分針／黃色時針`;
  }
  private updateCar() {
    this.object.position.set(-1.5 - this.pull * 1.7, -1, .2);
    this.mechanism?.setCar(this.pull);
    this.host.querySelector('[data-readout]')!.textContent = `回拉量 ${Math.round(this.pull * 100)}% · ${this.rough ? '較粗糙' : '較平滑'}路面`;
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
    const dt = this.last ? Math.min(.05, (now - this.last) / 1000) : .016; this.last = now;
    if (this.active && this.kind === 'buoyancy') {
      this.object.position.y += (this.targetY - this.object.position.y) * Math.min(1, dt * 3);
      if (Math.abs(this.object.position.y - this.targetY) < .015) {
        this.active = false; const o = FLOAT_OBJECTS[this.selected], r = buoyancy(o.mass, o.volume); this.tested.add(o.id);
        const text = `${o.name}：${r.floats ? '浮在水面' : '沉到水底'}。${r.floats ? '漂浮時浮力與重量平衡。' : '最大浮力仍小於重量；沉底後還有水底的支持力。'}`;
        this.status.textContent = text; this.record(`預測：${this.prediction === 'float' ? '浮' : this.prediction === 'sink' ? '沉' : '不確定'} → ${text}`);
      }
    }
    if (this.active && this.kind === 'clock') { this.minutes += dt * 20; this.updateClock(); }
    if (this.active && this.kind === 'car') {
      this.runElapsed += dt; const t = Math.min(1, this.runElapsed / 2.5); this.travel = this.runDistance * (2 * t - t * t); this.object.position.x = -3.2 + this.travel;
      this.mechanism?.setCar(this.pull * (1 - t), this.travel, true);
      if (t === 1) { this.active = false; const text = `回拉 ${Math.round(this.pull * 100)}%／${this.rough ? '較粗糙' : '較平滑'}路面：前進 ${this.travel.toFixed(2)} 模型單位後停下。`; this.status.textContent = text; this.record(text); }
    }
    const transitioning = this.mechanism?.frame(dt);
    this.renderer?.render(this.scene, this.camera);
    if (this.active || transitioning) this.wake(); else this.last = 0;
  };
  destroy() { this.dead = true; cancelAnimationFrame(this.frame); this.abort.abort(); this.resize?.disconnect(); this.mechanism?.destroy(); this.disposeObject(this.scene); this.renderer?.dispose(); this.renderer?.domElement.remove(); }
}
