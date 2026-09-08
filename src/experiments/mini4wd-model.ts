import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {PARTS} from './mini4wd-parts';
import type {Setup} from './mini4wd-physics';
import {makeSportsShell} from './mini4wd-shell';

/** Original reusable CAD-style component model. No borrowed character assets. */
export class MiniCarModel{
  root=new T.Group();parts=new Map<string,T.Group>();wheels:T.Group[]=[];gears:T.Group[]=[];rotor=new T.Group();
  private shellMaterials:T.Material[]=[];
  private skins:T.MeshPhysicalMaterial[]=[];private rubber:T.MeshStandardMaterial[]=[];private wheelParts:T.Group[]=[];private wings=new T.Group();private ballast=new T.Group();
  constructor(){
    for(const p of PARTS){const g=new T.Group();g.userData.part=p.id;this.parts.set(p.id,g);this.root.add(g);}
    const mat=(color:number,metalness=.1)=>new T.MeshStandardMaterial({color,metalness,roughness:.35});
    const dark=mat(0x142438,.45),silver=mat(0xcadce3,.8),gold=mat(0xffb957,.55),white=mat(0xe5effb,.25);
    const mesh=(group:T.Group,geo:T.BufferGeometry,material:T.Material,x=0,y=0,z=0)=>{const m=new T.Mesh(geo,material.clone());m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;};
    const box=(group:T.Group,w:number,h:number,d:number,m:T.Material,x=0,y=0,z=0)=>mesh(group,new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.18),m,x,y,z);
    const cyl=(group:T.Group,r:number,len:number,m:T.Material,x:number,y:number,z:number,axis='z')=>{const a=mesh(group,new T.CylinderGeometry(r,r,len,20),m,x,y,z);if(axis==='z')a.rotation.x=Math.PI/2;if(axis==='x')a.rotation.z=Math.PI/2;return a;};
    const ch=this.parts.get('chassis')!;box(ch,2.7,.15,1.18,dark,0,.34);for(const z of [-.55,.55])box(ch,2.6,.19,.09,silver,0,.47,z);
    for(const x of [-1.28,1.28]){box(ch,.18,.12,1.75,dark,x,.39);for(const z of [-.8,.8])cyl(ch,.055,.1,gold,x,.48,z,'y');}
    const motor=this.parts.get('motor')!;cyl(motor,.20,.68,silver,-.74,.62,0);box(motor,.33,.29,.14,dark,-.74,.62,-.4);motor.add(this.rotor);this.rotor.position.set(-.74,.62,.41);box(this.rotor,.31,.055,.05,gold);
    const gs=this.parts.get('gears')!;
    for(const [x,y,z,r] of [[-.74,.62,.44,.10],[-.98,.54,.44,.18],[.94,.43,.43,.18]]){
      const gear=new T.Group();gear.position.set(x,y,z);gs.add(gear);this.gears.push(gear);cyl(gear,r,.075,gold,0,0,0);for(let i=0;i<16;i++){const t=i*Math.PI/8,m=box(gear,.07,.07,.075,gold,Math.cos(t)*r,Math.sin(t)*r,0);m.rotation.z=t;}
    }
    cyl(this.parts.get('shaft')!,.035,1.94,silver,0,.50,.43,'x');
    for(const x of [-.96,.96])cyl(this.parts.get('axles')!,.045,1.62,silver,x,.26,0);
    ['fl','fr','rl','rr'].forEach((id,i)=>{
      const x=i<2?.96:-.96,z=i%2?-.76:.76;
      const rim=this.parts.get('rim-'+id)!,tire=this.parts.get('tire-'+id)!;
      for(const g of [rim,tire]){g.position.set(x,.26,z);g.userData.home=g.position.clone();this.wheelParts.push(g);}
      const rotating=new T.Group();rim.add(rotating);this.wheels.push(rotating);
      const rmat=mat(0x273546);const rubber=cyl(tire,.26,.24,rmat,0,0,0);this.rubber.push(rubber.material as T.MeshStandardMaterial);
      for(const side of [-1,1]){
        cyl(rotating,.175,.025,silver,0,0,.135*side);cyl(rotating,.065,.04,gold,0,0,.152*side);
        for(let j=0;j<5;j++){const t=j*Math.PI*2/5,m=box(rotating,.15,.035,.04,dark,Math.cos(t)*.11,Math.sin(t)*.11,.153*side);m.rotation.z=t;}
        mesh(tire,new T.TorusGeometry(.222,.012,4,24),white,0,0,.124*side);
      }
    });
    const roller=this.parts.get('rollers')!;for(const x of [-1.28,1.28])for(const z of [-.88,.88]){cyl(roller,.13,.11,white,x,.52,z,'y');cyl(roller,.04,.14,gold,x,.54,z,'y');}
    for(const [i,id] of ['battery-a','battery-b'].entries()){
      const g=this.parts.get(id)!,z=i?.22:-.22;cyl(g,.145,1.02,mat(i?0xff8c4c:0x42cbd5),.15,.62,z,'x');cyl(g,.10,.035,silver,i?-.38:.68,.62,z,'x');
      box(g,.015,.085,.018,white,i?-.405:.705,.64,z);box(g,.015,.018,.085,white,i?-.405:.705,.64,z);
    }
    const sw=this.parts.get('switch')!;box(sw,.23,.12,.18,gold,.95,.53,-.3);box(sw,.09,.08,.14,dark,.93,.62,-.3);
    const wire=(pts:number[][],color:number)=>mesh(sw,new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p as [number,number,number]))),20,.017,6,false),mat(color));
    wire([[.95,.55,-.3],[1.15,.5,-.4],[.7,.5,-.4],[.68,.62,-.22]],0xff6856);wire([[-.38,.62,-.22],[-.48,.49,0],[-.38,.62,.22]],0xe4c363);wire([[.68,.62,.22],[.8,.48,.52],[-.7,.48,.52],[-.74,.63,.35]],0x568fff);wire([[-.74,.63,-.35],[-1.1,.5,-.49],[.95,.55,-.3]],0x568fff);
    const shell=this.parts.get('shell')!;
    const body=makeSportsShell();shell.add(body.root);this.wings=body.wing;this.skins=[body.paint];this.shellMaterials=body.materials;
    ch.add(this.ballast);cyl(this.ballast,.16,.08,gold,0,.43,0,'y');
    for(const [id,g] of this.parts){if(!g.userData.home)g.userData.home=g.position.clone();g.name=id;}
  }
  configure(s:Setup){this.skins.forEach(m=>m.color.set(s.color));this.rubber.forEach(m=>{m.color.set(s.tire==='grip'?0x213346:0x687585);m.roughness=s.tire==='grip'?.92:.45;});this.wings.visible=s.shell==='wing';this.ballast.position.x=s.ballast==='rear'?-.67:0;for(const w of this.wheelParts)w.scale.setScalar(s.diameter/26);}
  layout(installed:Set<string>,explode:number,xray:boolean,_selected:string){
    let i=0;for(const [id,g] of this.parts){const home=g.userData.home as T.Vector3;g.visible=installed.has(id);g.position.copy(home);
      if(explode&&id!=='chassis'){const row=Math.floor(i/5),col=i%5;g.position.add(new T.Vector3((col-2)*1.18,(row+1)*.62,(row-1)*1.2));}i++;
    }
    for(const m of this.shellMaterials){if(m.transparent!==xray)m.needsUpdate=true;m.transparent=xray;m.opacity=xray?.12:1;m.depthWrite=!xray;}
  }
  animate(distance:number,powered=false,gear=4,radius=.26){const angle=-distance/radius;for(const w of this.wheels)w.rotation.z=angle;this.gears.forEach((g,i)=>g.rotation.z=angle*(i===0?-gear:1));this.rotor.rotation.z=powered?-angle*gear:0;}
  dispose(){const geos=new Set<T.BufferGeometry>(),mats=new Set<T.Material>();this.root.traverse(o=>{if(o instanceof T.Mesh){geos.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>mats.add(m));}});geos.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());}
}
