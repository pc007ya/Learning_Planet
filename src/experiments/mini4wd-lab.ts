import {Mini4wdView} from './mini4wd-view';
import {SceneNarration} from './narration';
import {PARTS,canInstall,completeParts,removePart,setupLabel} from './mini4wd-parts';
import {DEFAULT_SETUP,type Setup,type CarState} from './mini4wd-physics';

const icons:Record<string,string>={back:'M15 5 8 12l7 7M8 12h13',voice:'m4 9 4 0 5-4v14l-5-4H4zM17 8q6 4 0 8',replay:'M5 8a8 8 0 1 1-1 8M5 3v5h5',quiz:'m5 16 11-11 3 3-11 11-4 1zM14 7l3 3',notes:'M5 3h14v18H5zM8 8h8M8 12h8M8 16h5',learn:'M3 5q5-3 9 0 5-3 9 0v15q-5-3-9 0-4-3-9 0zM12 5v15',parts:'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',build:'m4 20 9-9M14 4a5 5 0 0 0 6 6l-4-1-1-4z',tune:'M4 7h16M4 17h16M8 4v6M16 14v6',race:'M5 21V3m0 1h14l-3 5 3 5H5',camera:'M3 7h5l2-3h4l2 3h5v13H3zM15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0',power:'M12 3v9M6 5a9 9 0 1 0 12 0',play:'m8 4 12 8-12 8z',stop:'M6 6h12v12H6z',next:'m9 5 7 7-7 7',prev:'m15 5-7 7 7 7',remove:'M5 12h14',plus:'M5 12h14M12 5v14',explode:'m9 9-6-6m0 5V3h5M15 15l6 6m0-5v5h-5M3 21l6-6M15 9l6-6',eye:'M2 12q10-15 20 0-10 15-20 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0',check:'m4 12 5 5L20 6'};
const icon=(id:string)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[id]||icons.parts}"/></svg>`;
const button=(id:string,label:string,symbol=id)=>`<button type="button" data-m4="${id}" aria-label="${label}" title="${label}">${icon(symbol)}<span>${label}</span></button>`;
type Page='learn'|'parts'|'build'|'tune'|'race'|'notes'|'quiz';
type RecordRow={setup:Setup;time:number;max:number;contacts:number;landings:number;finished:boolean};
const lessons=[
  {title:'電池讓車跑起來',text:'閉合開關，看馬達和四輪轉動。',voice:'電池經過接點和開關，形成完整電路，馬達把電能轉成轉動。按電源，看看馬達和四個輪圈。這台車不需要回拉。',part:'battery-a'},
  {title:'小齒輪，大力量',text:'馬達轉 4 圈，輪軸轉 1 圈。',voice:'現在是四比一減速。馬達轉四圈，輪軸轉一圈。較大的減速比可以增加輪端扭力，但降低空載輪速。',part:'gears'},
  {title:'動力送到四個輪子',text:'沿著長軸，找出前後輪軸。',voice:'馬達帶動減速齒輪，再經過長傳動軸，把動力送到前後輪軸，帶動四個輪圈和輪胎。這是軸傳動四輪驅動的簡化教學模型。',part:'shaft'},
  {title:'怎麼沿著彎道跑？',text:'導輪碰護欄，輪胎抓住地面。',voice:'小導輪受到護欄推力，車身就改變方向。輪胎和地面的摩擦也影響穩定性。第一人稱是車頭攝影機，不是駕駛座。',part:'rollers'}
];

export class Mini4wdLab{
  private root:HTMLElement;private view?:Mini4wdView;private voice=new SceneNarration();private abort=new AbortController();
  private page:Page='learn';private previous:Page='learn';private lesson=0;private partPage=0;private selected='battery-a';private installed=completeParts();private started=false;
  private setup:Setup={...DEFAULT_SETUP};private thumbnails:Record<string,string>={};private exploded=false;private xray=false;private powered=false;private first=false;private sound=false;private reduced=true;private running=false;private recorded=false;private records:RecordRow[]=[];private recordPage=0;private tunePage=0;private quizIndex=0;
  private drag?:{id:string;x:number;y:number;pid:number;ghost:HTMLImageElement;moved:boolean};private sequence=0;private dead=false;
  constructor(private host:HTMLElement){
    host.innerHTML=`<section class="m4-lab" aria-label="四驅車研究所"><header class="m4-header">${button('back','返回')}<h2>四驅車研究所</h2><nav class="m4-helpers" aria-label="實驗小幫手">${button('voice','語音')}${button('replay','重聽')}${button('notes','紀錄')}${button('quiz','考題')}</nav></header><nav class="m4-nav" aria-label="探索步驟">${[['learn','原理'],['parts','零件'],['build','組裝'],['tune','改裝'],['race','試跑']].map(([id,label])=>button(id,label)).join('')}</nav><div class="m4-layout"><section class="m4-scene"><div class="m4-stage"></div><div class="m4-scene-tag">原創教學車 · 星羽 01</div><div class="m4-view-tools">${button('explode','拆開','explode')}${button('xray','透視','eye')}${button('zoom-in','放大','plus')}${button('zoom-out','縮小','remove')}</div><button class="m4-snap" data-m4="install" hidden aria-label="安裝選取零件">${icon('plus')}<span>裝到車上</span></button><div class="m4-hud" hidden><div><b data-speed>0.0</b><small>km/h · 模擬</small></div><div><b data-lap>0 / 3</b><small>完成圈數</small></div><div><b data-time>0.0</b><small>秒</small></div></div><div class="m4-overlay" hidden></div><div class="m4-countdown" hidden></div><p class="m4-status" role="status" aria-live="polite">電池讓車跑起來</p></section><aside class="m4-tools" aria-label="操作面板"></aside></div></section>`;
    this.root=host.querySelector('.m4-lab')!;
    const nav=this.root.querySelector('.m4-nav')!;
    this.root.querySelector('.m4-header')!.insertBefore(nav,this.root.querySelector('.m4-helpers'));
    nav.querySelector('[data-m4="parts"]')!.remove();
    const bom=document.createElement('details');bom.className='m4-bom';
    bom.innerHTML='<summary aria-label="展開或收起零件表">☷</summary><div class="m4-bom-body"></div>';
    this.root.querySelector('.m4-scene')!.append(bom);
    this.root.querySelector('[data-m4="quiz"] svg')!.outerHTML='<img class="m4-pencil" src="images/experiments/car-v4/pencil.png" alt="">';
    try{this.view=new Mini4wdView(this.root.querySelector('.m4-stage')!);this.view.configure(this.setup);this.thumbnails=this.view.thumbnails();this.view.onPick=id=>this.select(id);this.view.onUpdate=c=>this.updateRace(c);}catch(e){console.error('Mini 4WD WebGL',e);this.tell('這個裝置未能開啟 3D。請啟用硬體加速，或換支援 WebGL 的瀏覽器。');}
    this.root.addEventListener('click',e=>{const b=(e.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b)return;if(b.dataset.part)this.select(b.dataset.part);else if(b.dataset.choice)this.choose(b.dataset.choice);else if(b.dataset.answer)this.answer(b.dataset.answer);else this.action(b.dataset.m4||'');},{signal:this.abort.signal});
    this.root.addEventListener('pointerdown',e=>this.dragStart(e),{signal:this.abort.signal});this.root.addEventListener('pointermove',e=>this.dragMove(e),{signal:this.abort.signal});this.root.addEventListener('pointerup',e=>this.dragEnd(e),{signal:this.abort.signal});this.root.addEventListener('pointercancel',()=>this.clearDrag(),{signal:this.abort.signal});
    this.root.addEventListener('mini4wd-error',e=>{this.stop();this.tell((e as CustomEvent).detail);},{signal:this.abort.signal});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){this.stop();this.voice.stop();this.clearDrag();this.render();}},{signal:this.abort.signal});
    this.render();this.voice.last=lessons[0].voice;
  }
  private tell(text:string,spoken=text){this.root.querySelector('.m4-status')!.textContent=text;this.voice.say(this.page==='learn'&&this.lesson===1?`現在是 ${this.setup.gear} 比一減速。馬達轉 ${this.setup.gear} 圈，輪軸轉一圈。減速比增加，輪端扭力增加，但空載輪速降低。`:spoken);}
  private render(){
    this.root.dataset.page=this.page;for(const p of ['learn','build','tune','race'])this.root.querySelector(`[data-m4="${p}"]`)!.setAttribute('aria-pressed',String(p===this.page));
    this.root.querySelector<HTMLElement>('.m4-view-tools')!.hidden=['race','notes','quiz'].includes(this.page);
    this.root.querySelector<HTMLElement>('.m4-hud')!.hidden=this.page!=='race';
    this.root.querySelector<HTMLElement>('.m4-snap')!.hidden=this.page!=='build'||this.installed.has(this.selected);
    this.root.querySelector('[data-m4="explode"]')!.setAttribute('aria-pressed',String(this.exploded));this.root.querySelector('[data-m4="xray"]')!.setAttribute('aria-pressed',String(this.xray));
    const panel=this.root.querySelector('.m4-tools')!;const overlay=this.root.querySelector<HTMLElement>('.m4-overlay')!;overlay.hidden=!['quiz','notes'].includes(this.page);overlay.innerHTML='';
    if(this.page==='learn'){
      const l=lessons[this.lesson];panel.innerHTML=`<div class="m4-eyebrow">原理 ${this.lesson+1} / ${lessons.length}</div><h3>${l.title}</h3><img class="m4-part-hero" src="${this.thumbnails[l.part]||''}" alt="${PARTS.find(p=>p.id===l.part)!.name}"><p>${this.lesson===1?`馬達轉 ${this.setup.gear} 圈，輪軸轉 1 圈。`:l.text}</p><div class="m4-two">${button('power',this.powered?'關閉電源':'開啟電源','power')}${button('replay','聽解說')}</div><div class="m4-pager">${button('lesson-prev','上一步','prev')}<span>${this.lesson+1} / 4</span>${button('lesson-next',this.lesson===3?'去組裝':'下一步','next')}</div>`;
    }else if(this.page==='parts'||this.page==='build'){
      const visible=PARTS.slice(this.partPage*4,this.partPage*4+4);
      panel.innerHTML=`<div class="m4-eyebrow">${this.page==='build'?'我的組裝':'BOM · 教學零件表'} <b>${this.installed.size} / ${PARTS.length}</b></div><div class="m4-part-grid">${visible.map(p=>`<button type="button" data-part="${p.id}" aria-label="${p.name}，${p.count}${p.count===1?'組或件':'件'}${this.installed.has(p.id)?'，已安裝':''}" aria-pressed="${p.id===this.selected}"><img src="${this.thumbnails[p.id]||''}" alt="" draggable="false"><span>${p.name}</span><small>× ${p.count} ${this.installed.has(p.id)?'✓':''}</small></button>`).join('')}</div><div class="m4-pager">${button('part-prev','上一頁','prev')}${this.page==='build'?'<button data-m4="next-part" class="m4-find-next">找下一件</button>':`<span>${this.partPage+1} / ${Math.ceil(PARTS.length/4)}</span>`}${button('part-next','下一頁','next')}</div><p class="m4-part-description"></p><div class="m4-two">${this.page==='build'?button('install','安裝','plus')+button('remove','拆下','remove'):button('build','開始組裝','build')+button('replay','聽用途')}</div>`;
      this.describePart();
    }else if(this.page==='tune')this.renderTune(panel);
    else if(this.page==='race')panel.innerHTML=`<div class="m4-eyebrow">星環測試道</div><h3>讓作品跑三圈</h3><p>直線 · 彎道 · 小跳台</p><div class="m4-race-map" aria-label="封閉橢圓賽道，包含跳台"><svg viewBox="0 0 240 130" aria-hidden="true"><path d="M70 30h100a35 35 0 0 1 0 70H70a35 35 0 0 1 0-70Z" fill="none" stroke="#5bd9f0" stroke-width="18"/><path d="m105 30 17-8v8m-65 7v-14" fill="none" stroke="#ffdb7e" stroke-width="5"/></svg></div><div class="m4-two">${button('camera',this.first?'車頭視角':'追車視角','camera')}${button('sound',this.sound?'聲音開':'聲音關','voice')}</div><button data-m4="motion" aria-pressed="${this.reduced}">穩定鏡頭 ${this.reduced?'✓':''}</button><div class="m4-two">${button('run','開始試跑','play')}${button('stop','停止','stop')}</div>${button('collision','雙車碰撞測試','race')}<p class="m4-small">${this.installed.size===PARTS.length?'試跑結果會加入紀錄。':'先把零件裝齊，再出發。'}</p>`;
    else if(this.page==='notes'){
      const entries=this.records.slice(this.recordPage*2,this.recordPage*2+2);panel.innerHTML=`<h3>我的測試</h3><p>一次只換一個條件，再跑同一條賽道。</p><div class="m4-pager">${button('record-prev','上一頁','prev')}<span>${this.records.length?this.recordPage+1:0} / ${Math.ceil(this.records.length/2)}</span>${button('record-next','下一頁','next')}</div>${button('return','回到實驗','back')}`;
      overlay.innerHTML=`<h3>比較試跑結果</h3>${entries.length?entries.map((r,i)=>`<article class="m4-record"><b>第 ${this.recordPage*2+i+1} 次 · ${r.finished?'完成三圈':'中途停止'}</b><p>${setupLabel(r.setup)}</p><div><strong>${r.time.toFixed(2)} <small>秒</small></strong><strong>${(r.max*.18).toFixed(1)} <small>km/h 最高</small></strong></div><p>護欄撞擊 ${r.contacts} 次 · 落地 ${r.landings} 次</p></article>`).join(''):'<p>還沒有紀錄。把車組好，去試跑吧！</p>'}`;
    }else{
      const questions=[{q:'哪個零件提供電能？',ids:['battery-a','shell','rollers'],answer:'battery-a'},{q:'哪個零件把動力送到前輪？',ids:['shell','shaft','battery-a'],answer:'shaft'},{q:'哪個零件會碰護欄，引導轉彎？',ids:['rollers','battery-a','rim-fl'],answer:'rollers'}];const q=questions[this.quizIndex];
      panel.innerHTML=`<h3>看圖想一想</h3><p>${this.quizIndex+1} / 3</p>${button('replay','聽題目')}${button('quiz-next','下一題','next')}${button('return','回到實驗','back')}`;
      overlay.innerHTML=`<h3>${q.q}</h3><div class="m4-answer-grid">${q.ids.map(id=>`<button data-answer="${id}" aria-label="${PARTS.find(p=>p.id===id)!.name}"><img src="${this.thumbnails[id]||''}" alt="${PARTS.find(p=>p.id===id)!.name}"></button>`).join('')}</div><p class="m4-feedback" role="status">點一張圖片</p>`;
      this.voice.last=q.q;
    }
    if(!this.view)panel.querySelectorAll<HTMLButtonElement>('button').forEach(b=>{if(['run','collision','power'].includes(b.dataset.m4||''))b.disabled=true;});
    for(const key of ['run','collision']){const b=panel.querySelector<HTMLButtonElement>(`[data-m4="${key}"]`);if(b)b.disabled=this.installed.size!==PARTS.length||!this.view||this.running;}
    this.renderBom();
    this.view?.setParts(this.installed,this.exploded,this.xray,this.selected);
  }
  private bomPage=0;
  private renderBom(){
    const panel=this.root.querySelector('.m4-bom-body')!;
    this.root.querySelector<HTMLElement>('.m4-bom')!.hidden=['race','quiz','notes'].includes(this.page);
    panel.innerHTML=PARTS.slice(this.bomPage*4,this.bomPage*4+4).map(p=>'<button data-part="'+p.id+'" aria-pressed="'+(p.id===this.selected)+'"><b>'+(PARTS.indexOf(p)+1)+'</b><span>'+p.name+'</span></button>').join('')+'<div class="m4-pager">'+button('bom-prev','上一頁零件','prev')+'<span>'+(this.bomPage+1)+'/5</span>'+button('bom-next','下一頁零件','next')+'</div>';
  }
  private renderTune(panel:Element){
    const choices=this.tunePage===0?[
      ['齒比',[['gear:3.5','3.5 : 1'],['gear:4','4 : 1'],['gear:5','5 : 1']]],
      ['輪胎',[['tire:grip','抓地胎'],['tire:hard','硬胎']]],
      ['輪徑',[['diameter:26','26 mm'],['diameter:30','30 mm']]]
    ]:[['外殼',[['shell:arrow','箭羽'],['shell:wing','尾翼']]],['配重',[['ballast:center','中央'],['ballast:rear','後方']]],['車色',[['color:#29c9ff','天藍'],['color:#ff794f','橘紅'],['color:#b59aff','星紫']]]];
    panel.innerHTML=`<div class="m4-eyebrow">${this.tunePage===0?'動力與輪胎':'外殼與配重'}</div>${choices.map(([label,items])=>`<fieldset><legend>${label}</legend><div class="m4-choices">${(items as string[][]).map(([v,t])=>{const [key,value]=v.split(':');return `<button data-choice="${v}" aria-pressed="${String(this.setup[key as keyof Setup])===value}">${key==='color'?`<i style="background:${value}"></i>`:''}${t}</button>`;}).join('')}</div></fieldset>`).join('')}<div class="m4-pager">${button('tune-prev','上一頁','prev')}<span>${this.tunePage+1} / 2</span>${button('tune-next','下一頁','next')}</div><p class="m4-small">車色只改外觀。改裝結果以試跑比較。</p>${button('race','去試跑','race')}`;
  }
  private action(id:string){
    if(id==='bom-prev'||id==='bom-next'){this.bomPage=(this.bomPage+(id==='bom-next'?1:4))%5;this.renderBom();return;}
    if(['learn','parts','build','tune','race','notes','quiz'].includes(id)){this.switchPage(id as Page);return;}
    if(id==='back'){this.stop();this.host.closest('.il-shell')?.querySelector<HTMLButtonElement>('.il-back')?.click();}
    else if(id==='voice'){this.voice.enabled=!this.voice.enabled;this.root.querySelector('[data-m4="voice"]')!.setAttribute('aria-pressed',String(this.voice.enabled));if(this.voice.enabled)this.voice.replay();else this.voice.stop();}
    else if(id==='replay')this.voice.replay();
    else if(id==='return')this.switchPage(this.previous);
    else if(id==='explode'){this.exploded=!this.exploded;this.render();}
    else if(id==='xray'){this.xray=!this.xray;this.render();}
    else if(id==='zoom-in'||id==='zoom-out')this.view?.zoom(id==='zoom-in'?-.7:.7);
    else if(id==='power'){if(this.installed.size!==PARTS.length){this.tell('先把車組好，再觀察通電。');return;}this.powered=!this.powered;this.view?.setPower(this.powered);this.tell(this.powered?'電路接通，四輪一起轉。':'電路打開，馬達停止。');this.render();}
    else if(id==='lesson-prev'||id==='lesson-next'){if(id==='lesson-next'&&this.lesson===3){this.switchPage('build');return;}this.lesson=Math.max(0,Math.min(3,this.lesson+(id==='lesson-next'?1:-1)));this.selected=lessons[this.lesson].part;this.render();this.tell(lessons[this.lesson].text,lessons[this.lesson].voice);}
    else if(id==='part-prev'||id==='part-next'){this.partPage=(this.partPage+(id==='part-next'?1:4))%5;this.render();}
    else if(id==='install')this.install();
    else if(id==='remove'){if(removePart(this.selected,this.installed)){this.tell('拆下了。可以再装回去。');this.render();}else this.tell(this.selected==='chassis'?'底盤留在工作台上。':'先拆下裝在它上面的零件。');}
    else if(id==='next-part'){const next=PARTS.find(p=>!this.installed.has(p.id)&&canInstall(p.id,this.installed));if(next){this.partPage=Math.floor(PARTS.indexOf(next)/4);this.select(next.id);this.render();}else this.tell('組裝完成！去改裝，或到賽道試跑。');}
    else if(id==='tune-prev'||id==='tune-next'){this.tunePage=1-this.tunePage;this.render();}
    else if(id==='camera'){this.first=!this.first;this.view?.setCamera(this.first);this.render();}
    else if(id==='sound'){this.sound=!this.sound;this.view?.setSound(this.sound);this.render();}
    else if(id==='motion'){this.reduced=!this.reduced;this.view?.setReduced(this.reduced);this.render();}
    else if(id==='run'||id==='collision')void this.run(id==='collision');
    else if(id==='stop'){this.stop();this.render();}
    else if(id==='record-prev'||id==='record-next'){this.recordPage=Math.max(0,Math.min(Math.ceil(this.records.length/2)-1,this.recordPage+(id==='record-next'?1:-1)));this.render();}
    else if(id==='quiz-next'){this.quizIndex=(this.quizIndex+1)%3;this.render();this.voice.replay();}
  }
  private switchPage(page:Page){
    if(page===this.page)return;if(page==='notes'||page==='quiz'){if(!['notes','quiz'].includes(this.page))this.previous=this.page;}
    this.stop();this.powered=false;this.voice.stop();this.page=page;
    if(page==='build'&&!this.started){this.started=true;this.installed=new Set(['chassis']);this.selected='motor';this.partPage=0;this.exploded=false;this.xray=false;}
    if(page==='learn'){this.selected=lessons[this.lesson].part;}
    if(page==='parts')this.exploded=true;if(page==='tune'||page==='build')this.exploded=false;
    this.view?.setMode(page==='race');this.render();
    const text=page==='build'?'點零件，再點「安裝」。也可以拖到車上。':page==='race'?'三圈試跑。先選鏡頭，再出發！':page==='parts'?'點一個零件，看看它的工作。':page==='tune'?'一次只換一個條件，去試跑比較。':page==='learn'?lessons[this.lesson].text:page==='notes'?'比較同一條賽道的結果。':'看圖，找出答案。';this.tell(text,page==='learn'?lessons[this.lesson].voice:text);if(page==='quiz')this.voice.last=this.root.querySelector('.m4-overlay h3')!.textContent||'';
  }
  private select(id:string){if(!PARTS.some(p=>p.id===id))return;this.selected=id;this.bomPage=Math.floor(PARTS.findIndex(p=>p.id===id)/4);this.renderBom();this.view?.setParts(this.installed,this.exploded,this.xray,id);this.describePart();this.root.querySelectorAll<HTMLButtonElement>('[data-part]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.part===id)));this.root.querySelector<HTMLElement>('.m4-snap')!.hidden=this.page!=='build'||this.installed.has(id);const p=PARTS.find(p=>p.id===id)!;this.tell(p.name,p.voice);}
  private describePart(){const p=PARTS.find(p=>p.id===this.selected)!;const el=this.root.querySelector('.m4-part-description');if(el)el.textContent=p.voice;}
  private install(){if(this.page!=='build')return;if(this.installed.has(this.selected)){this.tell('這個零件已經裝好了。');return;}if(!canInstall(this.selected,this.installed)){const missing=PARTS.find(p=>p.id===this.selected)!.needs.filter(id=>!this.installed.has(id)).map(id=>PARTS.find(p=>p.id===id)!.name);this.tell(`先裝好：${missing.join('、')}`);return;}this.installed.add(this.selected);this.tell(this.installed.size===PARTS.length?'完成了！這台就是你要試跑的車。':'喀！裝好了。找下一個零件吧。');this.render();}
  private choose(choice:string){const [key,v]=choice.split(':');const allowed:Record<string,string[]>= {gear:['3.5','4','5'],tire:['grip','hard'],diameter:['26','30'],shell:['arrow','wing'],ballast:['center','rear'],color:['#29c9ff','#ff794f','#b59aff']};if(!allowed[key]?.includes(v))return;this.setup={...this.setup,[key]:key==='gear'||key==='diameter'?Number(v):v};this.view?.configure(this.setup);this.render();this.tell(key==='color'?'換了車色，性能不變。':key==='gear'?'齒比改好了。比較加速與三圈時間。':'設定改好了，去同一條賽道比較。');}
  private async run(compare:boolean){if(!this.view||this.running||this.installed.size!==PARTS.length)return;this.view.reset();this.running=true;this.recorded=false;const token=++this.sequence;this.render();this.voice.stop();const countdown=this.root.querySelector<HTMLElement>('.m4-countdown')!;countdown.hidden=false;for(const n of ['3','2','1']){if(token!==this.sequence||this.dead)return;countdown.textContent=n;await new Promise(r=>setTimeout(r,650));}if(token!==this.sequence||this.dead)return;countdown.hidden=true;this.tell(compare?'橘車是標準設定，觀察擦撞與掉速。':'出發！觀察彎道和落地。');this.view.run(compare);}
  private stop(){this.sequence++;this.root.querySelector<HTMLElement>('.m4-countdown')!.hidden=true;if(this.running&&this.view&&this.view.state.time>0)this.saveRecord(this.view.state);this.running=false;this.view?.pause();}
  private updateRace(c:CarState){if(this.page!=='race')return;this.root.querySelector('[data-speed]')!.textContent=(Math.hypot(c.vx,c.vz)*.18).toFixed(1);this.root.querySelector('[data-lap]')!.textContent=`${c.lap} / 3`;this.root.querySelector('[data-time]')!.textContent=c.time.toFixed(1);if(this.running&&(c.finished||c.offTrack)){this.running=false;this.saveRecord(c);this.tell(c.finished?`完成三圈！${c.time.toFixed(2)} 秒。`:'車子離開賽道了。回去調整輪胎與配重，再試一次。');this.render();}}
  private saveRecord(c:CarState){if(this.recorded)return;this.recorded=true;this.records.push({setup:{...this.setup},time:c.time,max:c.maxSpeed,contacts:c.contacts,landings:c.landings,finished:c.finished});}
  private answer(id:string){const correct=['battery-a','shaft','rollers'][this.quizIndex];const text=id===correct?'答對了！'+PARTS.find(p=>p.id===correct)!.voice:'再想想。點語音，聽聽題目。';this.root.querySelector('.m4-feedback')!.textContent=text;this.voice.say(text);}
  private dragStart(e:PointerEvent){if(this.page!=='build'||e.button)return;const b=(e.target as HTMLElement).closest<HTMLButtonElement>('[data-part]');if(!b)return;this.select(b.dataset.part!);const ghost=document.createElement('img');ghost.src=this.thumbnails[this.selected];ghost.className='m4-drag';ghost.alt='';ghost.hidden=true;document.body.append(ghost);this.drag={id:this.selected,x:e.clientX,y:e.clientY,pid:e.pointerId,ghost,moved:false};this.root.setPointerCapture(e.pointerId);}
  private dragMove(e:PointerEvent){const d=this.drag;if(!d)return;if(Math.hypot(e.clientX-d.x,e.clientY-d.y)>8)d.moved=true;if(d.moved){d.ghost.hidden=false;d.ghost.style.left=`${e.clientX}px`;d.ghost.style.top=`${e.clientY}px`;}}
  private dragEnd(e:PointerEvent){const d=this.drag;if(!d)return;if(d.moved){const r=this.root.querySelector('.m4-stage')!.getBoundingClientRect();if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom)this.install();else this.tell('拖到車上，放手就會對準安裝位置。');}this.clearDrag();}
  private clearDrag(){if(this.drag){if(this.root.hasPointerCapture(this.drag.pid))this.root.releasePointerCapture(this.drag.pid);this.drag.ghost.remove();this.drag=undefined;}}
  destroy(){this.dead=true;this.stop();this.abort.abort();this.clearDrag();this.voice.stop();this.view?.destroy();}
}
