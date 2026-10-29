import * as THREE from 'three';
import { box, mat, sphere, Stage, tube, type World } from './core';
import { motionAcceleration } from './science';

type OtherId = 'magnet' | 'earth-moon' | 'plants' | 'weather' | 'force-motion';
type Choice = { id: string; label: string };
type Group = { id: string; title: string; values: Choice[] };
type Mission = { title: string; detail: string; check: (seen: Set<string>) => boolean };
const has = (seen: Set<string>, term: string) => [...seen].some(s => s.includes(term));
const options = (id:string,title:string,values:[string,string][]):Group=>({id,title,values:values.map(([key,label])=>({id:key,label}))});
const configs: Record<OtherId,{name:string;intro:string;controls:Group[];missions:Mission[];quiz:World['quiz']}> = {
  magnet:{
    name:'磁鐵星球',intro:'改變磁鐵的相對磁極與距離，觀察吸引、排斥；再試試鐵與塑膠。',
    controls:[
      options('pole','面對面的磁極',[['opposite','N 對 S'],['same','N 對 N']]),
      options('distance','距離',[['near','靠近'],['far','遠離']]),
      options('material','物品',[['iron','鐵釘'],['plastic','塑膠']]),
    ],
    missions:[
      {title:'相吸',detail:'試試 N 對 S 的磁鐵',check:s=>has(s,'pole=opposite')},
      {title:'相斥',detail:'試試 N 對 N 的磁鐵',check:s=>has(s,'pole=same')},
      {title:'磁性材料',detail:'測試鐵釘和塑膠',check:s=>has(s,'material=iron')&&has(s,'material=plastic')},
    ],
    quiz:{question:'兩塊磁鐵靠近，哪種情況會互相排斥？',answers:['N 極對 S 極','N 極對 N 極','磁鐵放在木桌上','磁鐵拿得比較高'],correct:1,explanation:'磁鐵同極相斥、異極相吸。鐵會被磁鐵吸引，但一般塑膠不會。'},
  },
  'earth-moon':{
    name:'地球月球星球',intro:'移動月球到不同位置，觀察太陽光如何照亮地球與月球。',
    controls:[
      options('phase','月球位置',[['new','朔（新月）'],['quarter','上弦'],['full','望（滿月）'],['last','下弦']]),
      options('spin','地球自轉',[['on','轉動'],['off','暫停']]),
    ],
    missions:[
      {title:'月亮在哪裡',detail:'觀察新月和滿月的位置',check:s=>has(s,'phase=new')&&has(s,'phase=full')},
      {title:'白天與黑夜',detail:'地球轉動與暫停各觀察一次',check:s=>has(s,'spin=on')&&has(s,'spin=off')},
      {title:'四個月相',detail:'觀察四種月球位置',check:s=>['new','quarter','full','last'].every(x=>has(s,'phase='+x))},
    ],
    quiz:{question:'從地球看月亮，為什麼會有不同的月相？',answers:['月球每天變大變小','月球會自己發亮','看到的月球受陽光照亮部分不同','太陽每天熄滅'],correct:2,explanation:'月球不會自己發光。它繞地球移動，我們從地球看到的受陽光照亮部分形狀會改變。模型沒有模擬軌道傾角，不能拿它預測日月食。'},
  },
  plants:{
    name:'植物星球',intro:'觀察一盆小植物。調整光照、水分與經過的日子，比較示意生長。',
    controls:[
      options('light','光照',[['enough','充足'],['shade','太少']]),
      options('water','水分',[['enough','適量'],['dry','缺水']]),
      options('days','過了幾天',[['one','第 1 天'],['seven','第 7 天']]),
    ],
    missions:[
      {title:'健康生長',detail:'選充足光照、適量水分與第 7 天',check:s=>has(s,'light=enough|water=enough|days=seven')},
      {title:'缺水會怎樣',detail:'試試缺水的植物',check:s=>has(s,'water=dry')},
      {title:'光照比較',detail:'試試光照太少',check:s=>has(s,'light=shade')},
    ],
    quiz:{question:'植物健康生長通常需要哪些條件？',answers:['只有泥土','適當的水、光、空氣與養分','只要多澆水就行','一直放在黑暗裡'],correct:1,explanation:'這是簡化的成長示意：植物需要光、水、空氣、養分及適合的環境，並非七天必然長到圖中高度。'},
  },
  weather:{
    name:'天氣星球',intro:'改變日照、水氣與空氣是否變冷，觀察蒸發、凝結及降水。',
    controls:[
      options('sun','太陽加熱',[['strong','較強'],['weak','較弱']]),
      options('humidity','空氣水氣',[['wet','較多'],['dry','較少']]),
      options('air','空氣狀態',[['cool','變冷'],['warm','溫暖']]),
    ],
    missions:[
      {title:'蒸發',detail:'提高日照加熱，觀察蒸發',check:s=>has(s,'sun=strong')},
      {title:'水氣凝結',detail:'讓潮濕空氣變冷',check:s=>has(s,'humidity=wet|air=cool')},
      {title:'降雨條件',detail:'比較濕冷與乾暖的情境',check:s=>has(s,'humidity=wet|air=cool')&&has(s,'humidity=dry|air=warm')},
    ],
    quiz:{question:'潮濕的空氣冷卻時，水氣可能發生什麼事？',answers:['全部變成火','凝結成小水滴形成雲','直接變成石頭','讓地球停止轉動'],correct:1,explanation:'水氣冷卻達到適當條件會凝結成雲滴；下雨還需要雲滴成長等條件，這個場景僅示意水循環。'},
  },
  'force-motion':{
    name:'力與運動星球',intro:'改變推力、車子的質量與地面摩擦，比較小車加速情形。',
    controls:[
      options('force','推力',[['weak','小力'],['strong','大力']]),
      options('mass','小車質量',[['light','較輕'],['heavy','較重']]),
      options('surface','地面',[['smooth','平滑'],['rough','粗糙']]),
    ],
    missions:[
      {title:'推得更快',detail:'比較小力和大力',check:s=>has(s,'force=weak')&&has(s,'force=strong')},
      {title:'重量比較',detail:'比較輕車和重車',check:s=>has(s,'mass=light')&&has(s,'mass=heavy')},
      {title:'摩擦力',detail:'比較平滑與粗糙的路',check:s=>has(s,'surface=smooth')&&has(s,'surface=rough')},
    ],
    quiz:{question:'同一台小車、同一地面，推力變大通常會怎樣？',answers:['加速度增加','質量瞬間變零','摩擦力消失','物體一定向上飛'],correct:0,explanation:'在其餘條件相同時，淨力越大，加速度越大。地面摩擦力會抵消部分推力。'},
  },
};

function worldMaterial(id:OtherId) {
  const colors: Record<OtherId,number>={magnet:0x536c99,'earth-moon':0x182f54,plants:0xb4c7a1,weather:0x8dd1e5,'force-motion':0xaaa6ca};
  return colors[id];
}
function magnetStage(group:THREE.Group) {
  for(let i=0;i<2;i++) {
    const bar=new THREE.Group();
    const red=box(.85,.5,.55,0xf56b78); red.position.x=-.42;bar.add(red);
    const blue=box(.85,.5,.55,0x86bffa); blue.position.x=.42;bar.add(blue);
    group.add(bar);
    bar.position.x=i===0?-1.55:1.55;
    bar.name=i===0?'magnet-left':'magnet-right';
  }
  const nail=tube(.09,.9,0xe4e8ec);nail.rotation.z=Math.PI/2;nail.position.set(0,-.9,1.1);nail.name='nail';group.add(nail);
  const field=sphere(.28,0x91fff0);field.position.set(0,.85,0);field.name='field';group.add(field);
}
function earthStage(group:THREE.Group) {
  const sun=sphere(1,0xffd56c);sun.position.set(-4,1,.1);group.add(sun);
  const sunGlow=sphere(1.25,0xffedaa);(sunGlow.material as THREE.MeshStandardMaterial).transparent=true;(sunGlow.material as THREE.MeshStandardMaterial).opacity=.22;sunGlow.position.copy(sun.position);group.add(sunGlow);
  const axis=new THREE.Group();axis.rotation.z=.409; axis.name='earth-axis';group.add(axis);
  const earth=sphere(1.05,0x5ca7ef,32);earth.name='earth';axis.add(earth);
  for(let i=0;i<5;i++){const patch=sphere(.34,0x69c99b);patch.scale.set(1,.55,.7);patch.position.set(Math.cos(i*2)*.8,Math.sin(i*3)*.55,Math.sin(i*2)*.7);earth.add(patch);}
  const moon=sphere(.32,0xd3d9de);moon.name='moon';moon.position.set(2,0,0);group.add(moon);
  const ray=new THREE.ArrowHelper(new THREE.Vector3(1,0,0),new THREE.Vector3(-2.6,1,0),1.3,0xffe8a2,.23,.14);group.add(ray);
}
function plantStage(group:THREE.Group) {
  const pot=new THREE.Mesh(new THREE.CylinderGeometry(.92,.7,1.2,10),mat(0xda9b76));pot.position.y=-1;group.add(pot);
  const soil=tube(.83,.06,0x765747);soil.position.y=-.38;group.add(soil);
  const stem=tube(.10,2.1,0x519f68);stem.position.y=.75;stem.name='stem';group.add(stem);
  for(let i=0;i<6;i++) {
    const leaf=sphere(.43,0x61ba7f);leaf.scale.set(1,.2,.5);
    leaf.position.set(i%2?-.45:.45,.15+i*.35,0);leaf.rotation.z=(i%2?-.4:.4);
    leaf.name='leaf';group.add(leaf);
  }
  const sun=sphere(.55,0xffdc8c);sun.position.set(-2.7,2.4,-.8);sun.name='sun';group.add(sun);
  const drop=sphere(.23,0x7dcaed);drop.position.set(2,2,0);drop.name='drop';group.add(drop);
}
function weatherStage(group:THREE.Group) {
  const sea=box(12,.25,7,0x5bb9d9);sea.position.y=-1.65;group.add(sea);
  const sun=sphere(.75,0xffd36d);sun.position.set(-3,2.2,0);sun.name='sun';group.add(sun);
  const cloud=new THREE.Group();cloud.name='cloud';
  for(let i=0;i<6;i++){const puff=sphere(.62+(i%2)*.1,0xe8f4ff);puff.position.set((i-2.5)*.48,(i%2)*.16,0);cloud.add(puff);}
  cloud.position.set(.4,1.65,0);group.add(cloud);
  for(let i=0;i<11;i++){const rain=sphere(.075,0x8fe4ff);rain.scale.set(.6,1.8,.6);rain.position.set(-.7+(i%5)*.43,.8-(i%3)*.48,.3);rain.name='rain';group.add(rain);}
  const steam=new THREE.Group();steam.name='steam';
  for(let i=0;i<5;i++){const drop=sphere(.06,0x9fe6ff);drop.position.set(-2+i*.3,-.8+i*.22,.4);steam.add(drop);}group.add(steam);
}
function forceStage(group:THREE.Group) {
  const track=box(12,.28,2.4,0xc7d0d6);track.position.y=-1.38;group.add(track);
  const car=new THREE.Group();car.name='car';
  const body=box(1.35,.65,.8,0xffbe70);body.position.y=.4;car.add(body);
  for(const x of [-.48,.48])for(const z of [-.47,.47]){const wheel=tube(.27,.16,0x333a59);wheel.rotation.x=Math.PI/2;wheel.position.set(x,0,z);car.add(wheel);}
  car.position.set(-3,-.92,0);group.add(car);
  const arrow=new THREE.ArrowHelper(new THREE.Vector3(1,0,0),new THREE.Vector3(-3,.62,0),1.2,0x77f1bd,.3,.2);arrow.name='force-arrow';group.add(arrow);
}
export function createOther(stage:Stage, id:string):World {
  if (!(id in configs)) throw new Error('未知的實驗星球');
  const slug=id as OtherId;
  const spec=configs[slug];
  const state:Record<string,string>={};
  for(const c of spec.controls)state[c.id]=c.values[0].id;
  const seen=new Set<string>();
  const root=stage.worldRoot;
  stage.scene.background=new THREE.Color(slug==='plants'?0x42625a:slug==='weather'?0x427d9b:0x111d3a);
  stage.scene.fog=new THREE.Fog(stage.scene.background,17,40);
  if(slug!=='weather'&&slug!=='force-motion'){
    const plate=box(10,.35,6,worldMaterial(slug));plate.position.y=-1.9;root.add(plate);
  }
  if(slug==='magnet')magnetStage(root);
  if(slug==='earth-moon')earthStage(root);
  if(slug==='plants')plantStage(root);
  if(slug==='weather')weatherStage(root);
  if(slug==='force-motion')forceStage(root);
  let elapsed=0,carSpeed=0,carMoving=false;
  function marker(){return Object.entries(state).map(([k,v])=>k+'='+v).join('|');}
  function visual(){
    if(slug==='magnet'){
      const right=root.getObjectByName('magnet-right') as THREE.Group;
      if(right){right.position.x=state.distance==='far'?3:1.55;right.rotation.y=state.pole==='same'?Math.PI:0;}
      const field=root.getObjectByName('field');if(field)field.scale.setScalar(state.distance==='near'?1.4:.7);
      const nail=root.getObjectByName('nail');if(nail)nail.visible=state.material==='iron';
    }
    if(slug==='earth-moon'){
      const moon=root.getObjectByName('moon');
      const places:Record<string,[number,number,number]>={new:[-2.2,0,0],quarter:[0,0,2.2],full:[2.2,0,0],last:[0,0,-2.2]};
      moon?.position.set(...places[state.phase]);
    }
    if(slug==='plants'){
      const healthy=state.water==='enough'&&state.light==='enough';
      const size=state.days==='seven'?(healthy?1.27:.8):.75;
      const stem=root.getObjectByName('stem');
      if(stem){stem.scale.y=size;stem.position.y=.75*size;}
      root.traverse(o=>{if(o.name==='leaf'){o.scale.y=healthy?.24:.12;(o as THREE.Mesh).material instanceof THREE.MeshStandardMaterial&&((o as THREE.Mesh).material as THREE.MeshStandardMaterial).color.setHex(healthy?0x61ba7f:0xb1a56b);}});
      const sun=root.getObjectByName('sun');if(sun)sun.visible=state.light==='enough';
      const drop=root.getObjectByName('drop');if(drop)drop.visible=state.water==='enough';
    }
    if(slug==='weather'){
      const wet=state.humidity==='wet',cool=state.air==='cool';
      const cloud=root.getObjectByName('cloud');if(cloud){cloud.scale.setScalar(wet&&cool?1.1:.65);cloud.visible=wet;}
      root.traverse(o=>{if(o.name==='rain')o.visible=wet&&cool;});
      const steam=root.getObjectByName('steam');if(steam)steam.visible=state.sun==='strong';
      const sun=root.getObjectByName('sun');if(sun)sun.scale.setScalar(state.sun==='strong'?1.15:.75);
    }
    if(slug==='force-motion'){
      carMoving=false; carSpeed=0;elapsed=0;
      const car=root.getObjectByName('car');if(car)car.position.x=-3;
      const arrow=root.getObjectByName('force-arrow');if(arrow)arrow.scale.x=state.force==='strong'?1.4:.7;
    }
  }
  visual();
  const world:World={
    name:spec.name,intro:spec.intro,controls:spec.controls,
    missions:spec.missions.map(x=>({title:x.title,detail:x.detail})),
    quiz:spec.quiz,
    selected(key){return state[key]||'';},
    choose(key,value){const group=spec.controls.find(x=>x.id===key);if(!group?.values.some(v=>v.id===value))return;state[key]=value;visual();},
    observe(){seen.add(marker());if(slug==='force-motion'){carMoving=true;carSpeed=0;elapsed=0;}},
    completed(){return spec.missions.map(m=>m.check(seen));},
    readout(){
      if(slug==='magnet')return (state.pole==='same'?'同極相斥':'異極相吸')+'｜'+(state.distance==='near'?'距離較近，作用較明顯':'距離較遠，作用較弱')+'；'+(state.material==='iron'?'鐵可被吸引':'一般塑膠不被磁鐵吸引');
      if(slug==='earth-moon')return ({new:'新月：月球約在日地之間',quarter:'上弦：觀察亮面的一半',full:'滿月：地球約在日月之間',last:'下弦：觀察另一側亮面'} as Record<string,string>)[state.phase]+'｜自轉'+(state.spin==='on'?'中':'暫停');
      if(slug==='plants')return (state.light==='enough'&&state.water==='enough'?'光和水條件適當':'生長條件不足')+'｜'+(state.days==='seven'?'第 7 天':'第 1 天')+'｜示意模型，不代表實際生長速度';
      if(slug==='weather')return state.humidity==='wet'&&state.air==='cool'?'水氣較多且遇冷，容易凝結成雲滴（雨滴為概念演示）':state.sun==='strong'?'加熱可促進蒸發，但不代表一定下雨':'需要合適水氣與冷卻條件，才可能凝結成雲';
      const a=motionAcceleration(state.force==='strong'?8:3,state.mass==='light'?1:2,state.surface==='rough'?.28:.09);
      return '推力 '+(state.force==='strong'?'8':'3')+' N｜加速度約 '+a.toFixed(2)+' m/s²（簡化平面模型）';
    },
    tick(dt){
      elapsed+=dt;
      if(slug==='earth-moon'&&state.spin==='on'){const earth=root.getObjectByName('earth');if(earth)earth.rotation.y+=dt*.48;}
      if(slug==='weather'){const steam=root.getObjectByName('steam');if(steam)steam.position.y=Math.sin(elapsed*1.4)*.2;}
      if(slug==='force-motion'&&carMoving){
        const a=motionAcceleration(state.force==='strong'?8:3,state.mass==='light'?1:2,state.surface==='rough'?.28:.09);
        carSpeed=Math.min(8,carSpeed+a*dt);
        const car=root.getObjectByName('car');if(car){car.position.x+=carSpeed*dt;if(car.position.x>=4.15){car.position.x=4.15;carMoving=false;}}
      }
    },
    reset(){seen.clear();for(const c of spec.controls)state[c.id]=c.values[0].id;visual();},
    dispose(){},
  };
  return world;
}
