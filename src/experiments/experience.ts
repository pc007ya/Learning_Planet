import { LAB_SPECS, type LabKind } from './models';
import { CAR_ART } from './car-art';

/** Shared tablet workspace and opt-in device narration. No remote audio requests. */
export class LabExperience {
  private abort = new AbortController();
  private observer: MutationObserver;
  private enabled = false;
  private lastText = '';
  private voiceButton: HTMLButtonElement;
  private speech?: SpeechSynthesisUtterance;
  private dialog: HTMLDialogElement;
  constructor(private host: HTMLElement, kind: LabKind) {
    host.classList.add('il-workspace');
    const nav = document.createElement('nav'); nav.className = 'il-mission-nav'; nav.setAttribute('aria-label', '實驗小幫手');
    nav.innerHTML = '<button data-helper="voice" aria-pressed="false">🔊 開始語音陪玩</button><button data-helper="replay">🗣 再講一次</button><button data-helper="notes">📒 發現筆記</button><button data-helper="quiz">🌟 小挑戰</button><button data-helper="help">💡 怎麼玩</button><span class="il-voice-state" role="status">點一下，開啟語音</span>';
    host.prepend(nav); this.voiceButton = nav.querySelector('[data-helper="voice"]')!;
    if (kind === 'buoyancy' || kind === 'car' || kind === 'clock') {
      const heading = host.querySelector('.bp-heading')!;
      const back = document.createElement('button'); back.className = 'bp-back-icon';
      back.type = 'button'; back.textContent = '←'; back.setAttribute('aria-label', '返回實驗星球'); back.title = '返回實驗星球';
      back.addEventListener('click', () => host.closest('.il-shell')?.querySelector<HTMLButtonElement>('.il-back')?.click(), { signal: this.abort.signal });
      heading.prepend(back); heading.append(nav);
      const icons: Record<string, string> = { voice: '🔊', replay: '↻', notes: '📒', quiz: '🌟', help: '💡' };
      nav.querySelectorAll<HTMLButtonElement>('button').forEach(button => {
        const label = button.textContent!.replace(/^\S+\s*/, '');
        button.setAttribute('aria-label', label); button.title = label;
        button.textContent = icons[button.dataset.helper!];
      });
      if (kind === 'car' || kind === 'clock') {
        const quiz = nav.querySelector<HTMLButtonElement>('[data-helper="quiz"]')!;
        quiz.innerHTML = `<img src="${CAR_ART}pencil.png" alt="" draggable="false">`; quiz.setAttribute('aria-label', '考題'); quiz.title = '切換考題';
      }
    }
    this.dialog = document.createElement('dialog'); this.dialog.className = 'il-discovery-dialog'; this.dialog.setAttribute('aria-label', '實驗探索卡');
    this.dialog.innerHTML = '<div class="il-dialog-tools"><button data-dialog-replay type="button">🔊 重聽這張卡</button><button data-dialog-stop type="button">⏸ 停止講解</button><button class="il-dialog-close" type="button">✦ 回去玩</button></div><div data-dialog-body></div>';
    host.append(this.dialog);
    const help = document.createElement('section'); help.className = 'il-help';
    help.innerHTML = `<h3>一起來探索！</h3><p>${LAB_SPECS[kind].objective}</p>`;
    const instructions = host.querySelector('.il-controls > p:last-child'); if (instructions) help.append(instructions);
    const details = host.querySelector('aside > details'); if (details) help.append(details);
    const parent = host.querySelector('.mech-parent'); if (parent) help.append(parent);
    const info = host.querySelector('.mech-part-info'); if (info) help.append(info);
    const panels = [host.querySelector('.il-observations')!, host.querySelector('.il-assessment')!, help];
    panels.forEach(panel => { panel.setAttribute('hidden', ''); this.dialog.querySelector('[data-dialog-body]')!.append(panel); });
    const carQuiz = (open: boolean) => {
      host.dataset.carPage = open ? 'quiz' : 'experiment';
      panels[1].toggleAttribute('hidden', !open);
      const button = nav.querySelector<HTMLButtonElement>('[data-helper="quiz"]')!;
      button.innerHTML = open ? '↶' : `<img src="${CAR_ART}pencil.png" alt="" draggable="false">`;
      button.setAttribute('aria-label', open ? '回到實驗' : '考題');
      button.setAttribute('aria-pressed', String(open));
    };
    if (kind === 'car' || kind === 'clock') { host.querySelector('.il-scene-panel')!.append(panels[1]); carQuiz(false); }
    const sayCurrent = () => this.say(this.lastText || `${LAB_SPECS[kind].title}。${help.textContent}` , true);
    nav.addEventListener('click', e => {
      const action = (e.target as HTMLElement).closest<HTMLButtonElement>('button')?.dataset.helper;
      if (action === 'voice') {
        this.enabled = !this.enabled;
        this.voiceButton.setAttribute('aria-pressed', String(this.enabled));
        this.voiceButton.textContent = this.enabled ? '🔊' : '🔇';
        {
          const label = this.enabled ? '關閉語音陪玩' : '開啟語音陪玩';
          this.voiceButton.setAttribute('aria-label', label); this.voiceButton.title = label;
        }
        if (this.enabled) this.say(`嗨，小小探險家！${LAB_SPECS[kind].title}。${LAB_SPECS[kind].objective}。${instructions?.textContent || ''}`);
        else { this.stop(); this.voiceState('語音已關閉'); }
      } else if (action === 'replay') sayCurrent();
      else if (action === 'quiz' && (kind === 'car' || kind === 'clock')) {
        const open = host.dataset.carPage !== 'quiz'; carQuiz(open);
        if (open) this.say(panels[1].textContent || ''); else this.stop();
      } else if (action) {
        if (kind === 'car' || kind === 'clock') carQuiz(false);
        const index = ['notes', 'quiz', 'help'].indexOf(action); if (index < 0) return;
        panels.forEach((panel, i) => panel.toggleAttribute('hidden', i !== index));
        this.dialog.showModal(); this.say(panels[index].textContent || '');
      }
    }, { signal: this.abort.signal });
    this.dialog.querySelector('.il-dialog-close')!.addEventListener('click', () => this.dialog.close(), { signal: this.abort.signal });
    this.dialog.querySelector('[data-dialog-replay]')!.addEventListener('click', () => this.say(panels.find(p => !p.hasAttribute('hidden'))?.textContent || '', true), { signal: this.abort.signal });
    this.dialog.querySelector('[data-dialog-stop]')!.addEventListener('click', () => { this.stop(); this.voiceState('講解已停止'); }, { signal: this.abort.signal });
    this.dialog.addEventListener('close', () => this.stop(), { signal: this.abort.signal });
    host.addEventListener('click', e => {
      const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
      if (kind === 'clock' && b?.hasAttribute('data-rpm-read')) this.say('十字標記是馬達轉子。跟著綠色齒輪看：馬達十二齒帶三十六齒，慢三倍；同軸十二齒再帶四十八齒，慢四倍；再由同軸十二齒帶六十齒，慢五倍。六十齒的軸接著長分針，所以馬達六十圈，長分針一圈。接著看金色輪系：藍色十二齒帶三十六齒，同軸十齒帶四十齒，再慢十二倍，帶動短時針。RPM 是每分鐘轉幾圈。這是完整的教學傳動設計，不是特定品牌機芯。',true);
      if (kind === 'car' && b?.hasAttribute('data-car-read')) this.say(`${LAB_SPECS.car.question}。點選圖片：彈簧、車子的顏色，還是空氣？`, true);
      if (b?.dataset.view) this.say(b.dataset.view === 'whole' ? '合起來！看看完整的外觀，也可以拖動模型來操作。' : b.dataset.view === 'xray' ? '透視眼開啟！外殼變透明了，點零件聽聽它的工作。' : '零件出任務！拆開後，點數字或零件名稱，一起找出它的小祕密。');
      if (b?.dataset.action === 'reset') this.say('重新準備好了！試著只改一個條件，再觀察一次。');
    }, { signal: this.abort.signal });
    host.addEventListener('change', e => {
      const input = e.target as HTMLInputElement;
      if (input.matches('select')) this.say(`${input.closest('label')?.firstChild?.textContent}。${(input as unknown as HTMLSelectElement).selectedOptions[0]?.textContent}。${input.dataset.input === 'object' ? host.querySelector('[data-sample]')?.textContent || '' : ''}`);
      else if (input.matches('[data-input]')) this.say(host.querySelector('[data-readout]')?.textContent || '');
    }, { signal: this.abort.signal });
    this.observer = new MutationObserver(records => {
      // One utterance per interaction; newest explanation replaces older speech.
      const targets = ['.il-feedback', '.mech-quick-info', '.il-live', '.il-log'];
      for (const selector of targets) {
        const el = host.querySelector(selector);
        if (el && records.some(r => el === r.target || el.contains(r.target))) {
          if (selector === '.il-live' && el.textContent?.startsWith('準備好了')) continue;
          this.say(selector === '.il-log' ? el.firstElementChild?.textContent || '' : el.textContent || ''); break;
        }
      }
    });
    for (const selector of ['.il-feedback', '.mech-quick-info', '.il-live', '.il-log']) {
      const el = host.querySelector(selector); if (el) this.observer.observe(el, { childList: true, subtree: true, characterData: true });
    }
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.stop(); }, { signal: this.abort.signal });
  }
  private voiceState(text: string) { this.host.querySelector('.il-voice-state')!.textContent = text; }
  private stop() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); this.speech = undefined; }
  private say(text: string, explicit = false) {
    this.lastText = text;
    if (!this.enabled && !explicit) return;
    if (!('speechSynthesis' in window)) { this.voiceState('此裝置無語音，請看文字講解'); return; }
    this.stop();
    const utterance = new SpeechSynthesisUtterance(text); this.speech = utterance;
    utterance.lang = 'zh-TW'; utterance.rate = .88;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => /^zh[-_]TW$/i.test(v.lang)) || voices.find(v => /^zh/i.test(v.lang));
    if (voice) utterance.voice = voice;
    utterance.onstart = () => { if (this.speech === utterance) this.voiceState('✦ 正在講解…'); };
    utterance.onend = () => { if (this.speech === utterance) this.voiceState('再點一下，繼續探索！'); };
    utterance.onerror = e => { if (this.speech === utterance && !['interrupted', 'canceled'].includes(e.error)) this.voiceState('語音未播放，請點「再講一次」或看文字'); };
    window.speechSynthesis.speak(utterance);
  }
  destroy() { this.stop(); this.observer.disconnect(); this.abort.abort(); this.dialog.close(); }
}
