import {chineseStations,activateChineseStation} from './chinese-stations.mjs';
import {stationsOnRing} from './paths.mjs';

const html=value=>String(value??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const levels=['一','二','三','四','五','六'];
const kindText={literacy:'生字詞練習',original:'原創閱讀與能力練習',outline:'僅課次索引（無課文或作答）'};
const publishers=['南一','康軒','翰林'];
const loaders={
 outline:()=>fetch(new URL('../../data/kangxuan-midgrade-115-catalog.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('outline');return r.json();}),
 original:()=>fetch(new URL('../chinese-grade6/chinese-grade6-original-skills.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('original');return r.json();})
};
function addStyles(doc){
 if(doc.querySelector('link[data-chinese-planet]'))return;
 const css=doc.createElement('link');css.rel='stylesheet';css.href=new URL('./map.css',import.meta.url);css.dataset.chinesePlanet='';doc.head.append(css);
}
export function mountChinesePlanet(container,{lessons,lessonDisplayTitle,initialGrade=1,initialPublisher='南一',onClose,openLiteracy,openOriginal,showCatalogDetails,loadMetadata=loaders,loadWorld=()=>import('./world-r9.mjs')}){
 const doc=container.ownerDocument;addStyles(doc);
 let grade=initialGrade,publisher=publishers.includes(initialPublisher)?initialPublisher:'南一',semester='上';
 let world=null,stations=[],current=null,arrived=null,disposer=0,alive=true,walking=false,loaded={},pending=false;
 const button=(a,t)=>`<button type="button" data-map-action="${a}">${t}</button>`;
 container.classList.add('han-map');
 container.innerHTML=`<header class="han-top"><h2>國語星球 · 字旅島</h2>${button('close','← 傳統課程')}</header>
 <nav class="han-regions" aria-label="選擇年級">${levels.map((n,i)=>`<button type="button" data-grade="${i+1}">${n}年級</button>`).join('')}</nav>
 <div class="han-track" role="group" aria-label="教材範圍"></div>
 <div class="han-surface"><div class="han-scene"></div><div class="han-tools">${button('zoom','近景')}${button('stations','站點')}</div>
 <div class="han-stations" hidden></div><div class="han-selected" hidden></div></div>
 <p class="han-status" role="status" aria-live="polite"></p>`;
 const find=selector=>container.querySelector(selector), view=find('.han-scene'),status=find('.han-status'), tracks=find('.han-track'), menu=find('.han-stations'), selected=find('.han-selected');
 const tell=t=>status.textContent=t;
 function clearSelection(){current=null;arrived=null;walking=false;selected.hidden=true;}
 function paintControls(){
  for(const b of container.querySelectorAll('[data-grade]'))b.setAttribute('aria-pressed',String(Number(b.dataset.grade)===grade));
  if(grade===6){tracks.textContent='六年級 · 原創能力練習（非出版社教材）';return;}
  if(!([3,4].includes(grade)&&publisher==='康軒'))semester='上';
  tracks.innerHTML=publishers.map(p=>`<button type="button" data-pub="${p}" aria-pressed="${publisher===p}">${p}</button>`).join('')+
   `<span class="han-term">115學年</span>`+(['上','下'].map(s=>`<button type="button" data-term="${s}" ${s==='下'&&!([3,4].includes(grade)&&publisher==='康軒')?'disabled':''} aria-pressed="${semester===s}">${s}學期</button>`).join(''));
 }
 function paintMenu(){
  menu.innerHTML=stations.map((s,i)=>`<button type="button" data-station="${i}"><strong>${html(s.title)}</strong><small>${kindText[s.kind]}</small></button>`).join('');
 }
 function paintSelection(){
  const item=stations.find(s=>s.id===current);
  selected.hidden=!item;
  if(!item)return;
  selected.innerHTML=`<strong>${html(item.title)}</strong><small>${kindText[item.kind]}</small>`+
   `<button type="button" data-map-action="enter" ${arrived===item.id?'':'disabled'}>${arrived===item.id?item.kind==='outline'?'查看課次索引':'開啟原有課程':'步行前往…'}</button>`;
 }
 function pick(id){
  const item=stations.find(s=>s.id===id);if(!item||!world)return;
  if(current===id&&arrived===id){launch();return;}
  if(walking){tell('瑜瑜正在走路，抵達後可再選另一站。');return;}
  if(!world.select(item)){tell('此站的安全路線暫不可用。');return;}
  current=id;arrived=null;walking=true;menu.hidden=true;menuButton.setAttribute('aria-expanded','false');paintSelection();tell('正在前往「'+item.title+'」。');
 }
 function launch(){
  if(!arrived||arrived!==current)return false;
  return activateChineseStation(stations,current,{openLiteracy,openOriginal,showCatalogDetails});
 }
 const menuButton=find('[data-map-action=stations]'), zoomButton=find('[data-map-action=zoom]');menuButton.setAttribute('aria-expanded','false');zoomButton.setAttribute('aria-pressed','false');
 async function repopulate(){
  const token=++disposer;
  world?.dispose();world=null;pending=true;stations=[];menu.hidden=true;menuButton.setAttribute('aria-expanded','false');zoomButton.setAttribute('aria-pressed','false');zoomButton.textContent='近景';clearSelection();paintControls();paintMenu();
  tell('正在準備 '+levels[grade-1]+'年級地圖…');
  try {
   const type=grade===6?'original':([3,4].includes(grade)&&publisher==='康軒')?'outline':null;
   const request=type&&!loaded[type]?loadMetadata[type]():Promise.resolve(type?loaded[type]:null);
   const [meta,api]=await Promise.all([request,loadWorld()]);
   if(token!==disposer||!alive)return;
   if(type)loaded[type]=meta;
   stations=stationsOnRing(chineseStations({lessons,lessonDisplayTitle,midgrade:loaded.outline,originalUnits:loaded.original?.units||[]},
   grade===6?{grade,track:'original'}:{grade,year:115,semester,publisher,track:'publisher'}));paintMenu();
   if(!stations.length){tell('這個範圍目前沒有可展示的課程站點。');return;}
   world=api.mountWorld(view,stations,grade,{onPick:pick,onArrive:id=>{
    if(!alive||token!==disposer||current!==id)return;
    const s=stations.find(x=>x.id===id);arrived=id;walking=false;paintSelection();tell('已抵達「'+s.title+'」，'+(s.kind==='outline'?'可查看索引。':'可開啟原有課程。'));
   },onUnavailable:t=>{
    world?.dispose();world=null;clearSelection();tell(t);
   },onZoom:near=>{zoomButton.textContent=near?'全島':'近景';zoomButton.setAttribute('aria-pressed',String(near));}});
   tell('點房子或站點讓瑜瑜步行前往。抵達後再點一次，或按開啟。');
  }catch(e){if(alive&&token===disposer){tell('3D 地圖暫時無法開啟。可切回傳統課程。');view.replaceChildren();console.warn('Chinese 3D map unavailable:',e);}}
  finally{if(alive&&token===disposer)pending=false;}
 }
 function click(e){
  const b=e.target.closest('button');if(!b||!container.contains(b)||b.disabled)return;
  const {mapAction,grade:g,pub,term,station}=b.dataset;
  if(mapAction==='close'){onClose?.();return;}
  if(g){const n=Number(g);if(grade!==n||!world&&!pending){grade=n;repopulate();}return;}
  if(pub){if(publisher!==pub||!world&&!pending){publisher=pub;repopulate();}return;}
  if(term){if(semester!==term||!world&&!pending){semester=term;repopulate();}return;}
  if(station!==undefined){const item=stations[Number(station)];if(item)pick(item.id);return;}
  if(mapAction==='stations'){menu.hidden=!menu.hidden;menuButton.setAttribute('aria-expanded',String(!menu.hidden));}
  else if(mapAction==='zoom')world?.setNear(zoomButton.getAttribute('aria-pressed')!=='true');
  else if(mapAction==='enter')launch();
 }
 function key(e){if(e.key==='Escape'){e.preventDefault();if(!menu.hidden){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.focus();}else onClose?.();}}
 container.addEventListener('click',click);container.addEventListener('keydown',key);repopulate();
 find('[data-map-action=close]').focus();
 return {destroy(){if(!alive)return;alive=false;++disposer;world?.dispose();world=null;container.removeEventListener('click',click);container.removeEventListener('keydown',key);container.replaceChildren();}};
}
