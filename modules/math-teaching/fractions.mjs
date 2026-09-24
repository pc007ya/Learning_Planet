import {fractionLesson,fractionSteps} from './fraction-model.mjs';
import {resultColorBands} from './fraction-colors.mjs';
import {FractionView} from './three-view.js';
const root=document.querySelector('#math-teaching'),params=new URLSearchParams(location.search);
let same=params.get('same')==='1',s=fractionLesson(1,4,1,4,params.get('op')==='sub'?'sub':'add'),step=0,mode='demo',shape='circle',timer=null,hint=false,solved=false,feedback='',view;
const btn=(id,label,disabled=false,pressed)=>`<button type="button" data-action="${id}" ${disabled?'disabled':''} ${pressed===undefined?'':`aria-pressed="${pressed}"`}>${label}</button>`;
const relation=()=>s.left===s.right?'＝':s.left>s.right?'＞':'＜';
const fraction=(n,d)=>`<span class="stacked-fraction" role="math" aria-label="${d} 分之 ${n}"><span>${n}</span><span>${d}</span></span>`;
const typeset=text=>text.replace(/(-?\d+)\/(\d+)/g,(_,n,d)=>fraction(n,d));
function stop(){clearTimeout(timer);timer=null;}
try{view=new FractionView((side,n)=>{if(mode!=='practice'||step!==0)return;s=fractionLesson(side===0?n:s.a,s.d,side===1?n:s.b,s.e,s.op);solved=false;render();});}catch{feedback='此裝置使用平面分數條，仍可完成操作。';}
function flat(scene){
  const bands=resultColorBands(s),result=step>=2&&s.op!=='compare';
  const bar=(n,d,color,label,p=0)=>{const stops=result?bands.flatMap(b=>{const a=Math.max(0,b.start-p),z=Math.min(1,b.end-p);return z>a?[`${b.color?'#ecb245':'#31aabe'} ${a*100}% ${z*100}%`]:[]}).join(','): `${color} 0 ${n/d*100}%`;return `<div><p>${label}</p><div style="height:180px;width:110px;position:relative;background:linear-gradient(to top,${stops?stops+',':''}#e3dbcb ${result?Math.max(0,Math.min(1,Math.abs(s.numerator/s.denominator)-p))*100:n/d*100}% 100%)">${Array.from({length:d-1},(_,i)=>`<i style="position:absolute;left:0;right:0;bottom:${(i+1)/d*100}%;border-top:1px solid #273547"></i>`).join('')}</div></div>`;};
  scene.innerHTML='<div class="flat-bars">'+(result?Array.from({length:Math.max(1,Math.ceil(Math.abs(s.numerator/s.denominator)))},(_,p)=>bar(0,step===3?s.reducedDenominator:s.denominator,'','結果'+(s.numerator<0?'（負值大小）':''),p)).join(''):bar(step?s.left:s.a,step?s.denominator:s.d,'#31aabe','左邊')+bar(step?s.right:s.b,step?s.denominator:s.e,'#ecb245','右邊'))+'</div>';
}
function render(replay=false){
  const focus=document.activeElement?.dataset.action,compare=s.op==='compare',steps=fractionSteps(s),den=step===3?s.reducedDenominator:s.denominator,num=step===3?s.reducedNumerator:s.numerator;
  const field=(name,label,value,max,readonly=false)=>`<input name="${name}" aria-label="${label}" title="${label}" type="number" min="${name==='d'||name==='e'?1:0}" max="${max}" value="${value}" ${readonly?'readonly':''} required>`;
  root.innerHTML=`<div class="mw"><header>${btn('exit','← 返回數學')}<div><small>LEARNING PLANET · PREVIEW</small><h1>分數實驗桌 · 加減與比大小</h1></div></header>
  <div class="layout"><section class="desk"><div class="view-switch">${btn('circle','◯ 圓餅',false,shape==='circle')}${btn('bar','▥ 分數條',false,shape==='bar')}${btn('denmode',same?'同分母 ▣':'異分母 ▢',false,same)}</div>
  <form class="fraction-form equation-editor" aria-label="直接輸入分數算式"><div class="editable-fraction blue-fraction">${field('a','左分子',s.a,s.d)}${field('d','左分母',s.d,10)}</div><div class="operation-symbols" role="group" aria-label="運算方式">${[['add','＋','加法'],['sub','−','減法'],['compare','≷','比大小']].map(([op,symbol,label])=>`<button type="button" data-action="op-${op}" aria-label="${label}" title="${label}" aria-pressed="${s.op===op}">${op==='compare'&&compare&&step>=2?relation():symbol}</button>`).join('')}</div><div class="editable-fraction orange-fraction">${field('b','右分子',s.b,s.e)}${field('e','右分母',s.e,10,same)}</div>${step>=2&&!compare?`<span class="equation-result">${compare?relation():'＝'} ${compare?'':fraction(num,den)}</span>`:''}<button class="apply-fractions" type="submit">套用</button></form>
  <div class="fraction-labels">${step===1||compare&&step>1?`<span>藍 ${fraction(s.left,s.denominator)}</span><span>橘 ${fraction(s.right,s.denominator)}</span>`:step>=2?`<span>左方保留原題 · 等號右方是結果${num<0?'（負號＋差的大小）':''}</span>`:'<span>分子在上、分母在下 · 分母 1～10</span>'}</div><div id="fraction-scene"></div>
  <p class="fraction-note">${typeset(steps[step])}</p><p class="fraction-note legend">${compare?'相同大小的整體、相同大小的切片，才方便比較。':'加法保留藍、橘兩種來源色；減法留下較多一方的顏色。黑線代表等份；色界不一定是切線。'}</p>
  <div class="step-actions">${btn('prev','上一步',step===0)}${btn('next',['看通分切片',compare?'比較份數':'計算加減',compare?'比較結論':'看約分合併','已完成'][step],step===3)}${btn('replay','重播切分動畫',step!==1&&(step!==3||compare))}</div></section>
  <aside><div class="modes">${btn('demo','示範',false,mode==='demo')}${btn('practice','操作',false,mode==='practice')}${btn('review','回顧',!solved,mode==='review')}</div><h3>${['認識分數','通分',compare?'比大小':'加減切片',compare?'比較結論':'約分'][step]}</h3>
  ${mode==='review'?steps.map(t=>`<p>${typeset(t)}</p>`).join(''):`<p>${mode==='practice'&&step===0?'點選教具調整分子，或直接在算式內輸入分子、分母後按套用。':'先看份量，再觀察切線如何改變。'}</p>`}
  ${hint?`<p class="hint">${typeset(steps[step])} ${compare?'每片一樣大時，比較份數。':'分母不相加減；約分時，分子分母一起除以同一個數。'}</p>`:''}
  ${mode==='practice'&&step===2&&!solved?(compare?`<p>左邊和右邊的關係？</p><div class="step-actions">${btn('answer-less','＜')}${btn('answer-equal','＝')}${btn('answer-more','＞')}</div>`:'<form class="answer"><div class="editable-fraction"><input name="n" aria-label="答案分子" type="number" required><input name="d" aria-label="答案分母" type="number" min="1" required></div><button>確認答案</button></form>'):''}
  <p role="status">${feedback}</p><div class="actions">${mode==='demo'?btn('play',timer?'暫停示範':'播放示範'):btn('hint','給我提示')}${btn('reset','重新觀察')}</div><p class="caption">通分最多 90 等份。可隨時切換教具，題目與份量不變。此版尚未部署。</p></aside></div></div>`;
  const scene=root.querySelector('#fraction-scene');if(view){scene.append(view.element);view.update(s,step,mode==='practice'&&step===0,shape,replay);}else flat(scene);
  if(focus)root.querySelector(`[data-action="${focus}"]`)?.focus({preventScroll:true});
}
root.addEventListener('input',e=>{if(!e.target.closest('.fraction-form'))return;const f=e.target.form;if(e.target.name==='d'){f.elements.a.max=e.target.value;if(same){f.elements.e.value=e.target.value;f.elements.b.max=e.target.value;}}if(e.target.name==='e')f.elements.b.max=e.target.value;});
root.addEventListener('focusin',e=>{if(e.target.closest('form')){stop();const b=root.querySelector('[data-action="play"]');if(b)b.textContent='播放示範';}});
function answer(ok){solved=ok;feedback=ok?'答對了！可以看回顧。':'再試一次：先通分，再比較或計算份數。';if(ok)step=3;render();}
root.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);stop();if(e.target.classList.contains('fraction-form')){try{s=fractionLesson(Number(data.get('a')),Number(data.get('d')),Number(data.get('b')),Number(data.get(same?'d':'e')),s.op);step=0;solved=false;feedback='';hint=false;}catch(err){feedback=err.message;}render();}else answer(Number(data.get('n'))===s.reducedNumerator&&Number(data.get('d'))===s.reducedDenominator);});
root.addEventListener('click',e=>{const el=e.target.closest('button'),id=el?.dataset.action;if(!id||el.disabled)return;if(id==='exit'){stop();if(parent!==window)parent.postMessage({type:'math-teaching-close'},location.origin);else location.href='index.html';return;}
  if(id==='play'){if(timer){stop();render();return;}if(step===3)step=0;const tick=()=>{step++;if(step<3)timer=setTimeout(tick,3200);else timer=null;render();};timer=setTimeout(tick,3200);render();return;}
  stop();feedback='';hint=false;if(id.startsWith('answer-')){answer({'answer-less':'＜','answer-equal':'＝','answer-more':'＞'}[id]===relation());return;}
  if(id.startsWith('op-')){const form=root.querySelector('.fraction-form');if(!form.reportValidity())return;const data=new FormData(form);try{s=fractionLesson(Number(data.get('a')),Number(data.get('d')),Number(data.get('b')),Number(data.get(same?'d':'e')),id.slice(3));step=0;solved=false;}catch(err){feedback=err.message;}render();return;}
  if(id==='circle'||id==='bar')shape=id;if(id==='denmode'){same=!same;if(same)s=fractionLesson(s.a,s.d,Math.min(s.b,s.d),s.d,s.op);step=0;solved=false;}
  if(id==='next')step=Math.min(3,step+1);if(id==='prev')step=Math.max(0,step-1);if(id==='hint')hint=true;if(id==='reset')step=0;if(id==='demo'||id==='practice'){mode=id;step=0;solved=false;}if(id==='review'&&solved){mode='review';step=3;}render(id==='replay');
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();render();}});window.addEventListener('pagehide',()=>{stop();view?.destroy();});render();
