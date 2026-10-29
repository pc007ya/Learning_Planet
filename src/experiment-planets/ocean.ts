import * as THREE from 'three';
import { box, mat, sphere, Stage, tube, type World } from './core';
import { buoyancyModel, displacedFraction, WATER_DENSITY, type WaterKind } from './science';

type SampleId = 'wood' | 'stone' | 'ball' | 'neutral' | 'submarine' | 'boat';
const samples: Record<SampleId, { label: string; mass: number; volume: number; color: number; shape: 'round' | 'block' }> = {
  wood: { label: '木塊', mass: 50, volume: 100, color: 0xe3a763, shape: 'block' },
  stone: { label: '石頭', mass: 270, volume: 100, color: 0x9ca5b4, shape: 'round' },
  ball: { label: '充氣球', mass: 40, volume: 300, color: 0xff8c91, shape: 'round' },
  neutral: { label: '密度球', mass: 100, volume: 100, color: 0xbca6fa, shape: 'round' },
  submarine: { label: '小潛水艇', mass: 100, volume: 100, color: 0xffd75b, shape: 'round' },
  boat: { label: '空心船', mass: 35, volume: 180, color: 0xf2d7aa, shape: 'block' },
};
const factor: Record<string, number> = { light: .7, normal: 1, heavy: 1.3 };
function seaweed(root: THREE.Group, x: number, z: number, height: number) {
  const m = tube(.04, height, 0x63d4a4);
  m.position.set(x, -2.05 + height / 2, z);
  m.rotation.z = .16 * Math.sin(x * 3);
  root.add(m);
  const leaf = sphere(.17, 0x61bca4);
  leaf.scale.set(.45, 1.1, .7); leaf.position.set(x + .08, -2.05 + height, z);
  root.add(leaf);
}
function fish(color: number): THREE.Group {
  const f = new THREE.Group();
  const body = sphere(.32, color); body.scale.set(1.35, .7, .7); f.add(body);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(.23, .42, 3), mat(color));
  tail.rotation.z = -Math.PI / 2; tail.position.x = -.49; f.add(tail);
  const eye = sphere(.045, 0x172849); eye.position.set(.28, .06, .20); f.add(eye);
  return f;
}
function miniSub(): THREE.Group {
  const group = new THREE.Group();
  const main = tube(.38, 1.25, 0xffd365);
  main.rotation.z = Math.PI / 2; group.add(main);
  for (const x of [-.62,.62]) { const cap = sphere(.38,0xffd365);cap.position.x=x;group.add(cap); }
  const window = sphere(.24, 0x9feafe); window.scale.set(.38, 1, .9); window.position.set(.49,.02,.33); group.add(window);
  const tower = box(.35,.35,.36,0xffbb55); tower.position.set(-.15,.48,0);group.add(tower);
  const prop = box(.12,.7,.10,0x5e9bba);prop.position.set(-1.07,0,0);group.add(prop);
  group.position.set(-2.6,-.72,1);
  return group;
}

export function createOcean(stage: Stage): World {
  const root = stage.worldRoot;
  stage.scene.background = new THREE.Color(0x075b73);
  stage.scene.fog = new THREE.Fog(0x075b73, 12, 35);
  const floor = box(11,.55,8,0xd9c59a); floor.position.set(0,-2.37,0); root.add(floor);
  for (let i=0;i<20;i++) seaweed(root, -4.7+(i*2.17)%9, -3+(i*1.43)%6, .5+(i%4)*.22);
  for (let i=0;i<8;i++) {
    const coral = sphere(.26+(i%3)*.07, [0xb27ce8,0xf58cb3,0x87ded2][i%3]);
    coral.position.set(-4+(i*1.31)%8,-1.94,-2.5+(i*.89)%5); coral.scale.set(.6,1.8,.6);root.add(coral);
  }
  const waterTop = new THREE.Mesh(new THREE.PlaneGeometry(11,8), new THREE.MeshBasicMaterial({color:0x8dddeb,transparent:true,opacity:.18,side:THREE.DoubleSide,depthWrite:false}));
  waterTop.rotation.x=-Math.PI/2; waterTop.position.y=1.08;root.add(waterTop);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(11,5),new THREE.MeshBasicMaterial({color:0x1889a0,transparent:true,opacity:.12,side:THREE.DoubleSide,depthWrite:false}));
  back.position.set(0,-.25,-3.9);root.add(back);
  const fishList = Array.from({ length: 7 },(_,i) => {
    const f=fish([0xffc77b,0x79dfdd,0xc7a3f2,0xff9fba][i%4]);
    f.position.set(-4.4+i*1.4,-1+i*.25,-1.5+i*.33);
    f.scale.setScalar(.6+(i%3)*.2);
    root.add(f);
    return f;
  });
  const submarine = miniSub();root.add(submarine);
  const targetGroup = new THREE.Group(); targetGroup.position.set(2.1,2.05,1.15);root.add(targetGroup);
  const data: Record<string,string>={ object:'wood', water:'fresh', mass:'normal', volume:'normal' };
  const seen = new Set<string>();
  let ready = false, verticalSpeed = 0, time = 0;
  let target: THREE.Mesh | null = null;
  let visualHeight = .9;
  let dragging: number | null = null;
  const abort=new AbortController();
  const configs = [
    { id:'object',title:'選一個寶物',values:(Object.entries(samples) as [SampleId,typeof samples[SampleId]][]).map(([id,o])=>({id,label:o.label})) },
    { id:'water',title:'水的種類',values:[{id:'fresh',label:'淡水'},{id:'sea',label:'海水'}] },
    { id:'mass',title:'重量',values:[{id:'light',label:'減輕'},{id:'normal',label:'原來'},{id:'heavy',label:'加重'}] },
    { id:'volume',title:'體積',values:[{id:'light',label:'縮小'},{id:'normal',label:'原來'},{id:'heavy',label:'放大'}] },
  ] as const;
  function params() {
    const item=samples[data.object as SampleId];
    const mass=item.mass*factor[data.mass],volume=item.volume*factor[data.volume], water=WATER_DENSITY[data.water as WaterKind];
    return {item,mass,volume,water,result:buoyancyModel(mass,volume,water)};
  }
  function refresh() {
    const p=params();
    if (target) { targetGroup.remove(target);target.geometry.dispose();(target.material as THREE.Material).dispose(); }
    visualHeight=Math.min(1.4,Math.max(.55,.85*Math.cbrt(p.volume/100)));
    target=p.item.shape==='round'?sphere(.47,p.item.color):box(.9,.84,.75,p.item.color);
    target.scale.setScalar(visualHeight/.9);
    targetGroup.add(target);
    targetGroup.position.set(2.1,2.15,1.15);
    verticalSpeed=0;ready=false;
  }
  refresh();
  function observe() {
    const marker=[data.object,data.water,data.mass,data.volume].join('|');
    seen.add(marker);
    targetGroup.position.set(2.1,2.28,1.15);
    verticalSpeed=0;ready=true;
  }
  function completed(): boolean[] {
    return [
      [...seen].some(k=>k.startsWith('wood|'))&&[...seen].some(k=>k.startsWith('stone|')),
      seen.has('neutral|fresh|normal|light')&&seen.has('neutral|fresh|normal|heavy'),
      seen.has('neutral|fresh|normal|normal')&&seen.has('neutral|sea|normal|normal'),
      [...seen].some(k=>k.startsWith('submarine|')&&k.includes('|light|'))&&[...seen].some(k=>k.startsWith('submarine|')&&k.includes('|heavy|')),
      seen.has('neutral|fresh|normal|normal'),
    ];
  }
  const canvas=stage.renderer?.domElement;
  if (canvas) {
    canvas.style.touchAction='none';
    canvas.addEventListener('pointerdown',e=>{
      if(!ready)return;
      dragging=e.pointerId;canvas.setPointerCapture(e.pointerId);
    },{signal:abort.signal});
    canvas.addEventListener('pointermove',e=>{
      if(dragging!==e.pointerId)return;
      const rect=canvas.getBoundingClientRect();
      targetGroup.position.x=Math.max(-.4,Math.min(4,(e.clientX-rect.left)/rect.width*8-3));
    },{signal:abort.signal});
    for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,e=>{if(dragging===(e as PointerEvent).pointerId)dragging=null;},{signal:abort.signal});
  }
  const world: World = {
    name:'海洋浮力實驗星球',
    intro:'在海底選寶物，先猜，再放入水中。調整重量、體積與水的種類，觀察浮沉。',
    controls:configs,
    missions:[
      {title:'浮與沉',detail:'把木塊和石頭各放進水中一次'},
      {title:'體積的秘密',detail:'密度球選「淡水／原來重量」，試過縮小與放大體積'},
      {title:'海水不一樣',detail:'密度球保持原來大小，分別測淡水和海水'},
      {title:'潛水艇壓載',detail:'讓小潛水艇試過減輕與加重'},
      {title:'中性浮力',detail:'密度球在淡水中，重量和體積都選原來，再觀察'},
    ],
    quiz:{question:'為什麼很重的充氣大球也能浮起來？',answers:['因為球是紅色的','因為排開的水能提供足夠的浮力','只要體積大就一定浮','下沉的物體不會受到浮力'],correct:1,explanation:'物體是否浮起，要比較整體重量與完全浸入時最多能排開的水的重量。沉在水中的物體也會受到浮力。'},
    selected(id){return data[id]||'';},
    choose(id,value){if (!configs.some(c=>c.id===id&&c.values.some(v=>v.id===value)))return;data[id]=value;refresh();},
    observe,
    completed,
    readout(){
      const p=params();const label=p.result.tendency==='float'?'會浮起':p.result.tendency==='sink'?'會沉下':'接近中性浮力';
      return p.item.label+'｜密度 '+p.result.objectDensity.toFixed(2)+' g/cm³｜'+(data.water==='sea'?'海水':'淡水')+'｜'+label+'（理想化模型）';
    },
    tick(dt){
      time+=dt;
      fishList.forEach((f,i)=>{f.position.x=-4.5+((time*(.32+i*.045)+i*1.3)%9);f.position.y=-1.25+Math.sin(time*(.7+i*.07)+i)*.47;f.rotation.y=Math.sin(time+i)*.12;});
      submarine.rotation.z=Math.sin(time*.9)*.06;
      if(!ready||dragging!==null)return;
      const p=params();
      const fraction=displacedFraction(targetGroup.position.y,1.08,visualHeight);
      const force=buoyancyModel(p.mass,p.volume,p.water,fraction);
      const acceleration=Math.max(-9.81,Math.min(9.81,force.netUpN/(p.mass/1000)));
      verticalSpeed=(verticalSpeed+acceleration*dt)*Math.exp(-2.3*dt);
      targetGroup.position.y+=verticalSpeed*dt;
      const minY=-2.02+visualHeight/2, maxY=2.75;
      if(targetGroup.position.y<minY){targetGroup.position.y=minY;verticalSpeed=0;}
      if(targetGroup.position.y>maxY){targetGroup.position.y=maxY;verticalSpeed=Math.min(0,verticalSpeed);}
    },
    move(direction){
      const d=.28;
      submarine.position.x=Math.max(-4.1,Math.min(1.2,submarine.position.x+(direction==='right'?d:direction==='left'?-d:0)));
      submarine.position.y=Math.max(-1.65,Math.min(.45,submarine.position.y+(direction==='up'?d:direction==='down'?-d:0)));
    },
    reset(){seen.clear();Object.assign(data,{object:'wood',water:'fresh',mass:'normal',volume:'normal'});refresh();submarine.position.set(-2.6,-.72,1);},
    dispose(){abort.abort();},
  };
  return world;
}
