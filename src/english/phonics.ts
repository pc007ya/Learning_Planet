import {SOUND_CARDS,uniqueWords,shuffled,AnswerGate,type SoundCard} from './phonics-data';
type Group='vowels'|'consonants'|'reading';
const names={vowels:'元音',consonants:'輔音',reading:'念讀卡'};
const sound='<img src="images/ui/sound-rounded.svg" alt="">';
const escape=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export class PhonicsLab{
  private group:Group;private page=0;private selected=0;private listen=false;private muted=false;private slow=false;
  private queue:SoundCard[]=[];private question=0;private gate?:AnswerGate;private options:SoundCard[]=[];private correct=0;private note='';private abort=new AbortController();
  constructor(private host:HTMLElement){
    this.group=['vowels','consonants','reading'].includes(host.dataset.phonicsGroup||'')?host.dataset.phonicsGroup as Group:'vowels';
    host.addEventListener('click',e=>{const b=(e.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b||b.disabled)return;const action=b.dataset.action||'';if(b.dataset.select){this.gate?.select(b.dataset.select);this.note='選好了，再按檢查';this.render();return;}if(b.dataset.preview){const c=this.options.find(c=>c.id===b.dataset.preview);if(c)this.say(c.word);return;}if(b.dataset.card){this.selected=Number(b.dataset.card);this.note='';this.render();this.say(this.cards()[this.selected].word);return;}this.action(action);},{signal:this.abort.signal});
    document.addEventListener('visibilitychange',()=>{if(document.hidden)this.stopVoice();},{signal:this.abort.signal});this.render();
  }
  private cards(){return this.group==='reading'?uniqueWords(SOUND_CARDS):SOUND_CARDS.filter(c=>c.group===this.group);}
  private say(text:string){
    if(this.muted)return;if(!('speechSynthesis' in window)){this.note='這個瀏覽器無語音，請和家長一起念';this.render();return;}
    this.stopVoice();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=this.slow?.60:.82;const voice=speechSynthesis.getVoices().find(v=>/^en[-_]US$/i.test(v.lang));if(voice)u.voice=voice;
    u.onerror=e=>{if(!['canceled','interrupted'].includes(e.error)){this.note='語音未播放，請再點一次喇叭';this.render();}};speechSynthesis.speak(u);
  }
  private stopVoice(){if('speechSynthesis' in window)speechSynthesis.cancel();}
  private newQuestion(){const q=this.queue[this.question];if(!q){this.gate=undefined;return;}this.options=shuffled([q,...shuffled(uniqueWords(this.cards()).filter(c=>c.word!==q.word)).slice(0,3)]);this.gate=new AnswerGate(q.id,this.options.map(c=>c.id));}
  private start(){this.listen=true;this.queue=shuffled(uniqueWords(this.cards())).slice(0,10);this.question=0;this.correct=0;this.note='先聽，再選一張';this.newQuestion();this.render();this.say(this.queue[0].word);}
  private action(a:string){
    if(a==='back'){this.stopVoice();this.host.parentElement?.querySelector<HTMLButtonElement>('.phonics-back')?.click();return;}
    if(a in names){this.group=a as Group;this.queue=[];this.gate=undefined;this.listen=false;this.selected=0;this.page=0;this.note='';this.stopVoice();this.render();return;}
    if(a==='listen'){if(this.listen){this.listen=false;this.note='';this.render();}else if(this.queue.length&&this.gate){this.listen=true;this.render();}else this.start();return;}
    if(a==='restart'){this.start();return;}
    if(a==='mute'){this.muted=!this.muted;this.stopVoice();this.render();return;}
    if(a==='slow'){this.slow=!this.slow;this.render();return;}
    if(a==='hear'){const q=this.listen?this.queue[this.question]:this.cards()[this.selected];if(q)this.say(q.word);return;}
    if(a==='sentence'){this.say(this.cards()[this.selected].sentence);return;}
    if(a==='prev'||a==='next'){const pages=Math.ceil(this.cards().length/6);this.page=(this.page+(a==='next'?1:pages-1))%pages;this.selected=this.page*6;this.note='';this.render();return;}
    if(a==='check'){const good=this.gate?.check();if(good===undefined)return;if(good)this.correct++;this.note=good?'✓ 答對了！':'再聽一次：'+this.queue[this.question].word;this.render();this.say(this.queue[this.question].word);return;}
    if(a==='continue'){if(!this.gate?.checked)return;this.question++;this.note='先聽，再選一張';this.newQuestion();this.render();if(this.gate)this.say(this.queue[this.question].word);}
  }
  private render(){
    const cards=this.cards(),card=cards[this.selected],q=this.queue[this.question];
    const confirmation=(this.gate?`<button class="ph-check" data-action="${this.gate.checked?'continue':'check'}" aria-label="${this.gate.checked?'下一題':'確認答案'}" ${!this.gate.selected?'disabled':''}>${this.gate.checked?'下一題 →':'確認 ✓'}</button>`:'');
    const content=this.listen?(!this.gate?`<div class="ph-finish"><strong>✓ ${this.correct} / ${this.queue.length}</strong><p>練習完成</p><button data-action="restart">再玩一次</button></div>`:`<div class="ph-listen-prompt"><button class="ph-big-sound" data-action="hear" aria-label="播放題目發音">${sound}</button><p>聽到哪個單字？</p><small>${this.question+1} / ${this.queue.length}</small><p class="ph-feedback" role="status">${escape(this.note)}</p><div class="ph-confirm-slot">${confirmation}</div></div><div class="ph-answer-grid">${this.options.map(c=>`<div class="ph-answer ${this.gate!.selected===c.id?'is-selected':''} ${this.gate!.checked&&c.id===q.id?'is-correct':''}"><button class="ph-pick" data-select="${c.id}" aria-pressed="${this.gate!.selected===c.id}" ${this.gate!.checked?'disabled':''}><img src="${c.image}" alt=""><strong>${c.word}</strong>${this.gate!.selected===c.id?'<i>✓</i>':''}</button><button class="ph-preview" data-preview="${c.id}" aria-label="試聽 ${c.word}">${sound}</button></div>`).join('')}</div>`):`<div class="ph-card-grid">${cards.slice(this.page*6,this.page*6+6).map((c,i)=>`<button data-card="${this.page*6+i}" aria-pressed="${this.selected===this.page*6+i}" aria-label="${this.group==='reading'?c.word:c.ipa+'，'+c.word}">${this.group==='reading'?`<img src="${c.image}" alt="">`:`<strong class="ph-ipa">/${c.ipa}/</strong>`}<span>${c.word}</span></button>`).join('')}</div><article class="ph-detail"><img src="${card.image}" alt="${card.word==='measure'?'用尺量長度的例字提示':card.word}"><div><strong class="ph-word">${card.word}</strong><span class="ph-symbol">/${card.ipa}/ · ${card.spelling}</span></div><p>${escape(this.group==='reading'?card.sentence:card.hint)}</p><div class="ph-detail-actions"><button data-action="hear" aria-label="聽例字 ${card.word}">${sound}</button><button data-action="sentence" aria-label="聽短句">${sound}<span>短句</span></button></div></article>`;
    const controls=this.listen?'':`<button data-action="prev" aria-label="上一頁">‹</button><span class="ph-page">${this.page+1} / ${Math.ceil(cards.length/6)}</span><button data-action="next" aria-label="下一頁">›</button>`;
    this.host.innerHTML=`<section class="ph-shell" aria-label="一年級發音工坊"><header><button data-action="back" aria-label="返回英文">←</button><h2>發音工坊</h2><div class="ph-header-controls">${controls}</div><button data-action="slow" aria-pressed="${this.slow}" aria-label="慢速發音">0.6×</button><button data-action="mute" aria-pressed="${this.muted}" aria-label="${this.muted?'開啟':'關閉'}語音">${this.muted?'◌':sound}</button></header><nav aria-label="發音單元">${Object.entries(names).map(([id,n])=>`<button data-action="${id}" aria-pressed="${this.group===id&&!this.listen}">${n}</button>`).join('')}<button data-action="listen" aria-pressed="${this.listen}">聽音四選一</button></nav><div class="ph-body ${this.listen?'is-listening':''}">${content}</div>${!this.listen&&this.note?`<p class="ph-notice" role="status">${escape(this.note)}</p>`:''}</section>`;

  }
  destroy(){this.abort.abort();this.stopVoice();}
}
