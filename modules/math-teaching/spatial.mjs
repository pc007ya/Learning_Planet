import {setGeometryIcon,setCameraIcons} from './geometry-icons.mjs';
import {SpatialView} from './three-view.js';
import {SHAPES,cubeDimensions,cubeLayout,missingCubes,capacityValues} from './spatial-model.mjs';
const $=id=>document.getElementById(id),mode=location.pathname.endsWith('/math-capacity.html')?'capacity':new URLSearchParams(location.search).get('mode');
const titles={shapes:'形狀與立體偵探隊',count:'一個一個數積木',space:'空間',capacity:'容積與容量'};
let state={dimensions:mode==='count'?{l:3,w:1,h:3}:{l:3,w:2,h:3},custom:true,stage:'face',pattern:'stepped',seed:1,mode,shape:'cube',shapeName:'正方體',side:false,stack:false,cubes:mode==='space'?cubeLayout(mode,{l:3,w:1,h:3},'stepped'):cubeLayout(mode),gaps:[],layers:3,spread:0,counted:new Set(),showGaps:false,reveal:false,water:0};
let phase='demo',step=0,timer=null,animation=null,voice=false,view;
document.body.classList.add('spatial-desk');
$('dimensions').hidden=true;$('layer-control').hidden=true;$('spread-control').hidden=true;$('face-buttons').hidden=true;
if(mode==='count'||mode==='space'){
 $('dimensions').hidden=false;
 $('dimensions').innerHTML=['l','w','h'].map((key,i)=>`<label>${['長','寬','高'][i]}<input name="${key}" aria-label="${['長','寬','高'][i]}" type="number" min="1" max="5" value="${state.dimensions[key]}" required></label>`).join('')+'<button class="icon-button" aria-label="套用尺寸" title="套用尺寸">✓</button><button type="button" id="layout-full" aria-label="完整排列" title="完整排列">▦</button><button type="button" id="layout-stepped" aria-label="高低排列" title="高低排列">▥</button><button type="button" id="layout-random" class="icon-button" aria-label="隨機排列" title="隨機排列">⚄</button>';
 $('dimensions').onsubmit=e=>{e.preventDefault();try{const data=new FormData(e.target);state.dimensions=cubeDimensions(...['l','w','h'].map(k=>Number(data.get(k))));state.custom=true;reset();}catch(err){note(err.message);}};
}
$('scene').insertAdjacentHTML('beforebegin','<div id="spatial-tools" class="spatial-tools"></div>');
$('scene').querySelector('.scene-hint').textContent='拖曳旋轉 · 點選積木 · 雙指縮放';
$('home').insertAdjacentHTML('afterend','<button id="front">正面</button><button id="side">側面</button>');
setCameraIcons();
$('concept').before(Object.assign(document.createElement('div'),{id:'phase-tabs',className:'phase-tabs'}));
$('phase-tabs').innerHTML='<button data-phase="demo">示範</button><button data-phase="try">操作</button><button data-phase="review" class="icon-button" aria-label="回顧" title="回顧">⟳</button>';
$('result').after(Object.assign(document.createElement('div'),{id:'answer-box'}));
$('answer-box').innerHTML='<form id="answer-form"><label id="answer-label" for="guess">你認為共有幾個？</label><div class="answer-row"><input id="guess" type="number" min="0" max="1000" required aria-label="你的答案"><button class="icon-button" aria-label="確認答案" title="確認答案">✓</button></div></form>';
$('demo').parentElement.innerHTML='<button id="play" class="icon-button" aria-label="播放示範" title="播放示範">▶</button><button id="next" class="icon-button" aria-label="下一步" title="下一步">&gt;&gt;</button><button id="try">換我試試</button><button id="reset" class="icon-button" aria-label="這題重來" title="這題重來">↶</button><button id="voice" class="icon-button" aria-label="開啟聲音" title="開啟聲音">🔇</button>';
$('concept').textContent=titles[mode];
$('voice').setAttribute('aria-pressed','false');document.querySelector('header .preview').replaceWith($('voice'));
document.querySelectorAll('nav [data-mode]').forEach(b=>b.setAttribute('aria-pressed','false'));
$('scene').querySelector('.scene-hint').textContent=(mode==='count'||mode==='space')?'拖曳旋轉 · 點選積木 · 雙指縮放':'拖曳旋轉 · 雙指縮放';
function stop(){clearTimeout(timer);timer=null;cancelAnimationFrame(animation);animation=null;window.speechSynthesis?.cancel();}
function say(text){if(!voice)return;window.speechSynthesis?.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='zh-TW';u.rate=.88;window.speechSynthesis.speak(u);}
function note(text){$('feedback').textContent=text;say(text);}
function dimensions(){return {...state.dimensions,w:state.stage==='face'&&mode==='space'?1:state.dimensions.w};}
function newLayout(){let seed=state.seed;return cubeLayout(mode,dimensions(),state.pattern,()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;});}
function setStage(stage){state.stage=stage;state.cubes=newLayout();state.layers=dimensions().h;state.spread=0;state.counted=new Set();state.showGaps=false;state.reveal=false;$('guess').value='';$('feedback').textContent='';}
function reset(){stop();step=mode==='space'&&state.stage==='solid'?2:0;state={...state,side:false,stack:false,cubes:newLayout(),layers:dimensions().h,spread:0,counted:new Set(),showGaps:false,reveal:false,water:0};$('guess').value='';$('feedback').textContent='';render();view?.angle(mode==='space'&&state.stage==='face'?'front':'home');}
function shapeText(){const s=SHAPES[state.shape];return `${s.note} ${s.faces} 個平面。`;}
function layerCounts(){return Array.from({length:dimensions().h},(_,y)=>state.cubes.filter(c=>c.y===y).length);}
function cubeFormula(){if(mode==='space'&&state.stage==='face')return `${Array.from({length:state.dimensions.l},(_,x)=>state.cubes.filter(c=>c.x===x).length).join(' ＋ ')} ＝ ${state.cubes.length}`;return `${layerCounts().join(' ＋ ')} ＝ ${state.cubes.length}`;}
function boxFormula(){const {l,w,h}=dimensions();return `${l} × ${w} × ${h} ＝ ${l*w*h}`;}
function steps(){return {
 shapes:['轉一轉，看看物體的外形。',shapeText(),'換個方向，觀察平面、曲面與尖端。','試試堆疊：上下接觸處需要穩定的平面。'],
 count:['先猜一猜共有幾個，不急著看答案。','點一塊、數一塊；數過的變成金色。',`由下往上：${layerCounts().join('、')} 個。`,`${cubeFormula()} 個。每塊只算一次。`],
 space:['只有一排，從左到右數積木。',`每柱分開數：${cubeFormula()} 個。`,`疊成立體，拆層數：${cubeFormula()} 個。`,`轉一轉，找出遮住的積木。完整 ${boxFormula()}；還缺 ${state.gaps.length} 個。`],
 capacity:['透明容器的內部長、寬、高各是 10 公分。','加入 100 毫升，水深 1 公分，佔 100 立方公分。','加到 500 毫升，剛好半杯，也就是 0.5 公升。','裝滿 1000 毫升，等於 1 公升，也等於 1000 立方公分。']
 }[mode];}
function tools(){
 const host=$('spatial-tools');
 if(mode==='shapes')host.innerHTML=Object.entries(SHAPES).map(([k,v])=>`<button data-shape="${k}" aria-pressed="${state.shape===k}">${v.name}</button>`).join('')+'<button id="stack">試試堆疊</button>';
 else if(mode==='capacity')host.innerHTML=`<button id="less">−100 mL</button><label>水量 <input id="water" type="range" min="0" max="1000" step="100" value="${state.water}" aria-label="水量"></label><button id="more">＋100 mL</button>`;
 else if(mode==='space'&&state.stage==='face')host.innerHTML='<button id="count-one">數下一塊</button>';
 else host.innerHTML=`<button id="all">完整積木</button><button id="split">${state.spread?'合回去':'拆層觀察'}</button><button id="layer">只看${state.layers===state.dimensions.h?'底層':'全部'}</button>${mode==='space'?'<button id="count-one">數下一塊</button><button id="gaps">補成長方體</button><button id="fill">放入一塊</button>':'<button id="count-one">數下一塊</button>'}`;
 if(mode==='space')host.insertAdjacentHTML('afterbegin',`<button data-stage="face" aria-pressed="${state.stage==='face'}">▦ 單面</button><button data-stage="solid" aria-pressed="${state.stage==='solid'}">▧ 立體</button>`);
}
function updateToolIcons(){
 const actions={all:['all','完整積木'],split:[state.spread?'merge':'split',state.spread?'合回去':'拆層觀察'],layer:[state.layers===state.dimensions.h?'bottom':'all',state.layers===state.dimensions.h?'只看底層':'顯示全部'], 'count-one':['count',state.stage==='face'?'數下一塊':'數下一塊'],gaps:['gaps','補成長方體'],fill:['fill','放入一塊']};
 for(const [id,[icon,label]] of Object.entries(actions))setGeometryIcon($(id),icon,label);
 $('split')?.setAttribute('aria-pressed',String(!!state.spread));
 $('layer')?.setAttribute('aria-pressed',String(state.layers===1));
 $('gaps')?.setAttribute('aria-pressed',String(state.showGaps));
}
function render(){
 state.shapeName=SHAPES[state.shape].name;state.gaps=missingCubes(state.cubes,dimensions().l,dimensions().w,dimensions().h);
 tools();updateToolIcons();if(mode==='count'||mode==='space'){document.querySelectorAll('#dimensions input').forEach(input=>input.value=state.dimensions[input.name]);$('dimensions').elements.w.closest('label').hidden=state.stage==='face';$('layout-random').setAttribute('aria-pressed',String(state.pattern==='random'));$('layout-full').setAttribute('aria-pressed',String(state.custom&&state.pattern==='full'));$('layout-stepped').setAttribute('aria-pressed',String(!state.custom||state.pattern==='stepped'));}document.querySelectorAll('[data-phase]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.phase===phase));
 document.querySelectorAll('nav a').forEach(a=>{if(new URL(a.href).searchParams.get('mode')===mode)a.setAttribute('aria-current','page');});
 $('concept').textContent=mode==='space'?(state.stage==='face'?'單排積木':'立體空間'):titles[mode];
 const reveal=state.reveal||phase==='review',isCubes=mode==='count'||mode==='space';
 $('answer-box').hidden=phase!=='try'||mode==='shapes';$('answer-label').textContent=mode==='capacity'?'任務：加入 600 毫升，換算成幾立方公分？':state.stage==='face'?'共有幾個積木？':'共有幾個積木？';
 $('result').textContent=mode==='shapes'?state.shapeName:mode==='capacity'?`${state.water} mL`:reveal?`${state.cubes.length} 個`:`已點數 ${state.counted.size} 個`;
 $('formula').textContent=mode==='capacity'?`${capacityValues(state.water).litres} L ＝ ${state.water} cm³`:mode==='shapes'?`${SHAPES[state.shape].faces} 個平面`:reveal?(mode==='space'&&state.stage==='solid'?`完整 ${boxFormula()}；已放 ${state.cubes.length} 個`:cubeFormula()):'先觀察，再數一數';
 const text=phase==='demo'?steps()[step]:phase==='review'?steps()[mode==='space'&&state.stage==='face'?1:3]:mode==='shapes'?'選一個形體，旋轉觀察或試試堆疊。':mode==='capacity'?'操作水量到 600 毫升，再填入立方公分數。':state.stage==='face'?'點一塊、數一塊。':'點選積木做記號，旋轉或拆層找出全部，再輸入答案。';
 $('steps').innerHTML=`<p>${phase==='demo'?`第 ${step+1} / 4 步 · `:''}${text}</p>`;
 $('scene-count').textContent=isCubes?`金色：已點數 ${state.counted.size} 個${state.showGaps?' · 透明格可點選補入':''}`:mode==='capacity'?'每一格刻度 100 mL':'旋轉看看平面與曲面';
 $('play').hidden=phase!=='demo';$('next').hidden=phase!=='demo';$('play').textContent=timer?'Ⅱ':'▶';$('play').setAttribute('aria-label',timer?'暫停示範':'播放示範');$('play').title=timer?'暫停示範':'播放示範';$('next').disabled=step===3;
 $('try').textContent=phase==='try'?'重新操作':'換我試試';
 $('note-unused')?.remove();document.querySelector('.note').textContent=mode==='capacity'?'容器內部尺寸固定為 10 × 10 × 10 cm。水位與水量按比例顯示。':mode==='shapes'?'觀察平面、曲面與尖端。':'拖曳旋轉不會計數；輕點同一塊只記一次。也可使用按鈕逐步操作。';
 view?.updateSpatial({...state,dimensions:dimensions(),reveal});
}
function pick(id){
 if(state.showGaps&&id.startsWith('gap-')){const c=state.gaps.find(c=>c.id===id);if(c){if(c.y>0&&!state.cubes.some(b=>b.x===c.x&&b.z===c.z&&b.y===c.y-1)){note('先補下面的空位，讓上面的積木有支撐。');return;}state.cubes.push(c);state.counted.add(id);state.reveal=false;render();note(state.gaps.length?`放入一塊，還有 ${state.gaps.length} 個空位。`:`已補成完整長方體，共 ${state.cubes.length} 個！`);}return;}
 if(!state.counted.has(id)){state.counted.add(id);render();note(`數到 ${state.counted.size} 個。`);}
}
function stacking(){stop();state.side=false;state.stack=SHAPES[state.shape].stack;render();note(state.stack?'兩個穩定的平面接在一起，可以堆疊。':'這個形體上方是曲面或尖端，不適合穩定堆疊。');}
function applyStep(){
 if(mode==='space'&&state.stage!==(step<2?'face':'solid')){setStage(step<2?'face':'solid');view?.updateSpatial({...state,dimensions:dimensions()});view?.angle(step<2?'front':'home');}
 if(mode==='shapes'){if(step===2)view?.angle('side');if(step===3){stacking();return;}}
 if(mode==='count'||(mode==='space'&&step<2)){state.counted=new Set(step>=2?state.cubes.map(c=>c.id):[]);state.spread=step===2?.8:0;state.reveal=step===3;}
 if(mode==='space'&&step>=2){state.spread=step>=2?.6:0;state.reveal=step>=2;state.showGaps=step===3;}
 if(mode==='capacity')state.water=[0,100,500,1000][step];
 render();if((mode==='count'||mode==='space')&&step===1){const started=performance.now();let previous=0;const countTick=now=>{const n=Math.min(state.cubes.length,Math.floor((now-started)/Math.min(400,2400/state.cubes.length))+1);if(n!==previous){previous=n;state.counted=new Set(state.cubes.slice(0,n).map(c=>c.id));render();}if(n<state.cubes.length)animation=requestAnimationFrame(countTick);else animation=null;};animation=requestAnimationFrame(countTick);}note(steps()[step]);
}
function changePhase(next){stop();phase=next;reset();if(phase==='review'){state.reveal=true;if(mode==='capacity')state.water=1000;if(mode==='space'&&state.stage==='solid')state.showGaps=true;render();note(steps()[mode==='space'&&state.stage==='face'?1:3]);}else if(next==='try')note(mode==='capacity'?'請把水量調到 600 毫升，再換算成幾立方公分。':'可以開始操作了。');}
try{view=new SpatialView($('scene'),pick);}catch{$('scene').insertAdjacentHTML('beforeend','<p>此裝置無法顯示 3D，仍可用按鈕與文字完成操作。</p>');}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.mode){stop();location.href=`math-geometry.html?mode=${b.dataset.mode}`;return;}
 if(b.dataset.stage){stop();setStage(b.dataset.stage);step=b.dataset.stage==='face'?0:2;render();view?.angle(b.dataset.stage==='face'?'front':'home');return;}
 if(b.dataset.phase){changePhase(b.dataset.phase);return;}
 if(b.dataset.shape){stop();step=0;state.shape=b.dataset.shape;state.side=false;state.stack=false;render();note(shapeText());return;}
 const cameras={home:'home',front:'front',side:'side',top:'top'};if(cameras[b.id]){view?.angle(cameras[b.id]);return;}
 if(['all','count-one','gaps','fill','layer','split'].includes(b.id))stop();
 switch(b.id){
 case 'stack':stacking();break;
 case 'layout-random':state.custom=true;state.pattern='random';state.seed=(Math.random()*4294967296)>>>0;reset();break;
 case 'layout-full':case 'layout-stepped':state.custom=true;state.pattern=b.id==='layout-full'?'full':'stepped';reset();break;
 case 'split':stop();state.spread=state.spread?0:.8;render();break;
 case 'layer':stop();state.layers=state.layers===state.dimensions.h?1:state.dimensions.h;state.showGaps=false;render();break;
 case 'all':state.layers=state.dimensions.h;state.spread=0;render();break;
 case 'count-one':{const next=state.cubes.find(c=>c.y<state.layers&&!state.counted.has(c.id));if(next)pick(next.id);else note('這個畫面上的積木都數過了。');break;}
 case 'gaps':state.layers=state.dimensions.h;state.showGaps=!state.showGaps;render();note('透明格是空位，點選空位或按「放入一塊」補滿。');break;
 case 'fill':state.layers=state.dimensions.h;state.showGaps=true;if(state.gaps.length)pick(state.gaps[0].id);else note('已經補滿了。');break;
 case 'more':case 'less':stop();state.water=Math.max(0,Math.min(1000,state.water+(b.id==='more'?100:-100)));render();break;
 case 'next':stop();step=Math.min(3,step+1);applyStep();break;
 case 'play':if(timer){stop();render();break;}if(step===3){step=0;if(mode==='space')setStage('face');}applyStep();{const tick=()=>{if(step<3){step++;applyStep();if(step<3)timer=setTimeout(tick,3200);else timer=null;}render();};timer=setTimeout(tick,3200);render();}break;
 case 'try':changePhase('try');break;case 'reset':reset();break;
 case 'voice':if(!window.speechSynthesis||typeof SpeechSynthesisUtterance==='undefined'){note('此瀏覽器沒有語音，請看文字說明。');break;}voice=!voice;$('voice').textContent=voice?'🔊':'🔇';$('voice').setAttribute('aria-label',voice?'關閉聲音':'開啟聲音');$('voice').title=voice?'關閉聲音':'開啟聲音';$('voice').setAttribute('aria-pressed',String(voice));if(voice)say(steps()[step]);else window.speechSynthesis.cancel();break;
 }
});
document.addEventListener('input',e=>{if(e.target.id==='water'){stop();state.water=Number(e.target.value);$('result').textContent=`${state.water} mL`;$('formula').textContent=`${state.water/1000} L ＝ ${state.water} cm³`;view?.updateSpatial(state);}});
$('answer-form').onsubmit=e=>{e.preventDefault();const answer=Number($('guess').value),correct=mode==='capacity'?state.water===600&&answer===600:answer===state.cubes.length;
 if(correct){state.reveal=true;render();note(mode==='capacity'?'答對了！600 毫升＝600 立方公分＝0.6 公升。':`答對了！共 ${state.cubes.length} 個。`);}else note(mode==='capacity'?'先確認水量是 600 毫升；每 1 毫升對應 1 立方公分。':state.stage==='face'?'再一塊一塊數看看。':'再轉一轉或拆層看看，藏在後面的積木也要算。');};
$('back').onclick=e=>{stop();if(parent!==window){e.preventDefault();parent.postMessage({type:'math-teaching-close'},location.origin);}};
window.addEventListener('pagehide',()=>{stop();view?.destroy();});document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();render();}});
render();view?.angle(mode==='space'?'front':'home');
