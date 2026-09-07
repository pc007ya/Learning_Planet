import { FLOAT_OBJECTS, buoyancy, LAB_SPECS } from './models';
import { LabExperience } from './experience';

export const FLOAT_ART = './images/experiments/buoyancy-v3/';
export function insidePool(x: number, y: number) { return x >= .14 && x <= .86 && y >= .26 && y <= .89; }

/** Art-first touch playground. Physics samples stay shared with the original lab. */
export class BuoyancyPlay {
  private abort = new AbortController();
  private experience: LabExperience;
  private selected = 0;
  private prediction: boolean | null = null;
  private pendingDrop: number | null = null;
  private busy = false;
  private timer?: ReturnType<typeof setTimeout>;
  private tested = new Set<string>();
  private records = 0;
  private drag?: { pointer: number; x: number; y: number; moved: boolean; button: HTMLElement };
  private ghost: HTMLImageElement;
  private stage: HTMLElement;
  private sample: HTMLImageElement;
  constructor(private host: HTMLElement) {
    host.classList.add('il-buoyancy-play');
    host.innerHTML = `<div class="il-layout"><section class="il-scene-panel"><div class="bp-heading"><h2>浮力小水池</h2><span>挑一個 → 猜一猜 → 拖進水池</span></div><div class="il-stage bp-pool" role="group" aria-label="水池，選好預測後可點這裡放入物品"><img class="bp-backdrop" src="${FLOAT_ART}pool.png" alt="透明水池" draggable="false"><img class="bp-sample" draggable="false" alt=""><span class="bp-result" aria-live="polite"></span><span class="bp-ripple" aria-hidden="true"></span></div><div class="bp-prediction"><strong data-prompt>石頭會浮起來嗎？</strong><div class="bp-choices"><button data-predict="float" aria-pressed="false" aria-label="預測會浮"><b aria-hidden="true">○</b><span>會浮</span></button><button data-predict="sink" aria-pressed="false" aria-label="預測會沉"><b aria-hidden="true">×</b><span>會沉</span></button><button data-drop aria-label="把選好的物品放入水池">💧 放入</button></div><p class="il-live bp-sr" role="status" aria-live="polite">先挑一個物品。</p></div></section><aside class="il-panel bp-shelf"><div class="bp-shelf-title"><strong>我的寶物</strong><span data-tested>0 / 8</span></div><div class="bp-items">${FLOAT_OBJECTS.map((o,i)=>`<button data-object="${i}" aria-label="${o.name}，選取或拖進水池" aria-pressed="${i===0}" draggable="false"><img src="${FLOAT_ART}${o.id}.png" alt="" draggable="false"><span>${o.name}</span><i aria-hidden="true"></i></button>`).join('')}</div><div class="il-controls"><p>挑一個寶物，猜它會不會浮。把圖卡拖進水池，或點「放入」。圈圈是會浮，叉叉是會沉，不是答對答錯。</p></div><button data-action="reset">↺ 再玩一次</button><details><summary>給家長</summary><p>淡水中的簡化教學樣本；圖像不是實際大小。紙船未吸水、球已充氣、木塊是輕木。浮起時浮力與重量平衡，沉下去也受到浮力。請勿讓孩子吞食小物件，實際玩水需成人陪同。</p>${FLOAT_OBJECTS.map(o=>`<p>${o.name}：${o.note}</p>`).join('')}</details></aside></div><section class="il-panel il-observations"><h3>我的發現 <span data-count>0 次</span></h3><ol class="il-log"></ol></section><section class="il-panel il-assessment"><h3>小挑戰</h3><p>${LAB_SPECS.buoyancy.question}</p><div class="il-answers">${LAB_SPECS.buoyancy.choices.map((s,i)=>`<button data-answer="${i}">${s}</button>`).join('')}</div><p class="il-feedback" role="status">玩一次，再來挑戰！</p></section>`;
    this.stage = host.querySelector('.bp-pool')!; this.sample = host.querySelector('.bp-sample')!;
    this.ghost = document.createElement('img'); this.ghost.className = 'bp-ghost'; this.ghost.alt = ''; this.ghost.hidden = true; this.ghost.draggable = false; host.append(this.ghost);
    host.addEventListener('click', this.click, { signal: this.abort.signal });
    host.addEventListener('pointerdown', this.down, { signal: this.abort.signal });
    host.addEventListener('pointermove', this.move, { signal: this.abort.signal });
    host.addEventListener('pointerup', this.up, { signal: this.abort.signal });
    host.addEventListener('pointercancel', this.cancelDrag, { signal: this.abort.signal });
    host.addEventListener('dragstart', e => e.preventDefault(), { signal: this.abort.signal });
    this.select(0);
    this.experience = new LabExperience(host, 'buoyancy');
  }
  private announce(text: string) { this.host.querySelector('.il-live')!.textContent = text; }
  private select(index: number) {
    if (this.busy) return;
    this.selected = index; this.prediction = null; this.pendingDrop = null;
    const object = FLOAT_OBJECTS[index];
    this.sample.src = `${FLOAT_ART}${object.id}.png`; this.sample.alt = object.name;
    this.sample.classList.remove('is-moving'); this.sample.style.left = '50%'; this.sample.style.top = '24%';
    this.host.querySelector('[data-prompt]')!.textContent = `${object.name}會浮起來嗎？`;
    this.host.querySelector('.bp-result')!.textContent = '';
    this.host.querySelectorAll<HTMLButtonElement>('[data-object]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.object) === index)));
    this.host.querySelectorAll('[data-predict]').forEach(b => b.setAttribute('aria-pressed','false'));
    this.announce(`${object.name}。你猜它會浮起來嗎？點圈圈猜會浮，點叉叉猜會沉。`);
  }
  private predict(floats: boolean) {
    if (this.busy) return;
    this.prediction = floats;
    this.host.querySelector('[data-prompt]')!.textContent = `${FLOAT_OBJECTS[this.selected].name}會浮起來嗎？`;
    this.host.querySelectorAll<HTMLButtonElement>('[data-predict]').forEach(b => b.setAttribute('aria-pressed',String((b.dataset.predict === 'float') === floats)));
    this.announce(`你猜${floats ? '會浮' : '會沉'}。把${FLOAT_OBJECTS[this.selected].name}拖進水池試試看！`);
    if (this.pendingDrop !== null) this.drop(this.pendingDrop);
  }
  private drop(x = .5) {
    if (this.busy) return;
    if (this.prediction === null) {
      this.pendingDrop = x; this.host.querySelector('[data-prompt]')!.textContent = '先猜猜看！ ○ 還是 ×？';
      this.announce('先猜猜看，圈圈是會浮，叉叉是會沉。點好就會放入水池！'); return;
    }
    this.pendingDrop = null; this.busy = true;
    const object = FLOAT_OBJECTS[this.selected], result = buoyancy(object.mass, object.volume), guess = this.prediction;
    this.host.querySelectorAll<HTMLButtonElement>('[data-object],[data-predict],[data-drop]').forEach(b => b.disabled = true);
    this.sample.style.left = `${Math.max(.23,Math.min(.77,x))*100}%`;
    this.sample.classList.remove('is-moving'); this.sample.style.top = '24%'; void this.sample.offsetHeight;
    this.sample.classList.add('is-moving'); this.sample.style.top = result.floats ? '43%' : '80%';
    this.stage.classList.add('is-testing'); this.announce(`看看${object.name}！`);
    this.timer = setTimeout(() => {
      this.busy = false; this.stage.classList.remove('is-testing'); this.tested.add(object.id); this.records++;
      this.host.querySelectorAll<HTMLButtonElement>('[data-object],[data-predict],[data-drop]').forEach(b => b.disabled = false);
      this.host.querySelector(`[data-object="${this.selected}"]`)!.classList.add('is-tested');
      this.host.querySelector('[data-tested]')!.textContent = `${this.tested.size} / 8`;
      this.host.querySelector('[data-count]')!.textContent = `${this.records} 次`;
      this.host.querySelector('.bp-result')!.textContent = `${result.floats ? '↑ 浮起來了' : '↓ 沉下去了'} · ${guess === result.floats ? '猜中了！' : '新發現！'}`;
      const li = document.createElement('li'); li.textContent = `${object.name}：猜${guess ? '浮' : '沉'} → ${result.floats ? '浮' : '沉'}`;
      this.host.querySelector('.il-log')!.prepend(li); if (this.host.querySelector('.il-log')!.children.length > 24) this.host.querySelector('.il-log')!.lastElementChild?.remove();
      this.announce(`${object.name}${result.floats ? '浮起來了！水向上托住它，浮力和重量平衡。' : '沉下去了！水也有往上托它，但不夠托住它的重量。'}${guess === result.floats ? '你猜中了！' : '這是新的發現，再挑一個試試！'}`);
    }, 1400);
  }
  private click = (event: Event) => {
    const b = (event.target as HTMLElement).closest<HTMLButtonElement>('button');
    if (b?.dataset.object !== undefined) { if (Number(b.dataset.object) !== this.selected) this.select(Number(b.dataset.object)); }
    else if (b?.dataset.predict) this.predict(b.dataset.predict === 'float');
    else if (b?.hasAttribute('data-drop')) this.drop();
    else if (b?.dataset.action === 'reset') { clearTimeout(this.timer); this.busy = false; this.stage.classList.remove('is-testing'); this.host.querySelectorAll<HTMLButtonElement>('[data-object],[data-predict],[data-drop]').forEach(el => el.disabled = false); this.select(this.selected); }
    else if (b?.dataset.answer !== undefined) this.host.querySelector('.il-feedback')!.textContent = !this.records ? '先放一個物品試試看！' : Number(b.dataset.answer) === LAB_SPECS.buoyancy.answer ? '猜對了！要一起看重量和能排開的水量。' : '再試試球和硬幣，找找線索！';
    else if ((event.target as HTMLElement).closest('.bp-pool')) this.drop();
  };
  private down = (e: PointerEvent) => {
    if (this.busy || e.button !== 0) return;
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-object]'); if (!b) return;
    if (Number(b.dataset.object) !== this.selected) this.select(Number(b.dataset.object));
    this.drag = { pointer:e.pointerId, x:e.clientX, y:e.clientY, moved:false, button:b }; b.setPointerCapture(e.pointerId);
    this.ghost.src = this.sample.src; this.ghost.style.left = `${e.clientX}px`; this.ghost.style.top = `${e.clientY}px`;
  };
  private move = (e: PointerEvent) => {
    if (!this.drag || e.pointerId !== this.drag.pointer) return;
    if (Math.hypot(e.clientX-this.drag.x,e.clientY-this.drag.y) > 6) this.drag.moved = true;
    if (!this.drag.moved) return;
    this.ghost.hidden = false; this.ghost.style.left = `${e.clientX}px`; this.ghost.style.top = `${e.clientY}px`;
    const r = this.stage.getBoundingClientRect(); this.stage.classList.toggle('is-drop-target', insidePool((e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height));
  };
  private up = (e: PointerEvent) => {
    if (!this.drag || e.pointerId !== this.drag.pointer) return;
    const moved = this.drag.moved; this.cancelDrag();
    if (!moved) return;
    const r = this.stage.getBoundingClientRect(), x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    if (insidePool(x,y)) this.drop(x); else this.announce('拖到水池裡再放手喔！');
  };
  private cancelDrag = () => {
    if (this.drag?.button.hasPointerCapture(this.drag.pointer)) this.drag.button.releasePointerCapture(this.drag.pointer);
    this.drag = undefined; this.ghost.hidden = true; this.stage.classList.remove('is-drop-target');
  };
  destroy() { clearTimeout(this.timer); this.cancelDrag(); this.abort.abort(); this.experience.destroy(); this.ghost.remove(); }
}
