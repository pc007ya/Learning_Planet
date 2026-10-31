import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const alloy=new THREE.MeshStandardMaterial({color:0xc4d4dc,metalness:.78,roughness:.27});
const dark=new THREE.MeshStandardMaterial({color:0x172733,metalness:.3,roughness:.52});
function rounded(w:number,h:number,d:number,r:number,mat:THREE.Material){return new THREE.Mesh(new RoundedBoxGeometry(w,h,d,5,r),mat);}
function turned(profile:number[][],mat:THREE.Material){return new THREE.Mesh(new THREE.LatheGeometry(profile.map(([r,y])=>new THREE.Vector2(r,y)),64),mat);}
export function hardwareBolt(parent:THREE.Object3D,x:number,y:number,z:number,scale=1){
 const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.034*scale,.034*scale,.018*scale,6),alloy);bolt.position.set(x,y,z);parent.add(bolt);
 const slot=rounded(.039*scale,.003,.006*scale,.001,dark);slot.position.set(x,y+.01*scale,z);parent.add(slot);
}
export function trolleyShell(){
 const group=new THREE.Group();
 const paint=new THREE.MeshStandardMaterial({color:0x087f9b,metalness:.48,roughness:.24});
 const shell=rounded(1.42,.25,.94,.10,paint);shell.position.y=.29;shell.castShadow=true;group.add(shell);
 const lower=rounded(1.28,.075,.82,.035,dark);lower.position.y=.145;group.add(lower);
 const deck=rounded(1.18,.065,.79,.055,alloy);deck.position.y=.455;group.add(deck);
 const inset=rounded(.82,.018,.59,.04,new THREE.MeshStandardMaterial({color:0x304552,roughness:.65}));inset.position.y=.497;group.add(inset);
 for(const x of [-.53,.53])for(const z of [-.32,.32])hardwareBolt(group,x,.499,z,.8);
 // Moulded end bumpers, inset lateral trim and visible axle bearing blocks.
 for(const x of [-.73,.73]){const bumper=rounded(.10,.17,.78,.045,dark);bumper.position.set(x,.28,0);group.add(bumper);}
 for(const z of [-.478,.478]){const trim=rounded(.83,.035,.012,.005,alloy);trim.position.set(0,.30,z);group.add(trim);}
 for(const x of [-.49,.49])for(const z of [-.37,.37]){const bearing=rounded(.20,.16,.13,.025,alloy);bearing.position.set(x,.06,z);group.add(bearing);}
 return group;
}
export function trolleyWheel(){
 const group=new THREE.Group();
 // Continuous rounded shoulder profile: no polygonal flat cylinder rim.
 const rubber=new THREE.MeshStandardMaterial({color:0x152028,metalness:0,roughness:.8});
 const tire=turned([[.16,-.092],[.235,-.092],[.265,-.078],[.28,-.05],[.282,.05],[.265,.078],[.235,.092],[.16,.092]],rubber);tire.rotation.x=Math.PI/2;group.add(tire);
 const hub=turned([[0,-.099],[.105,-.099],[.153,-.083],[.163,-.065],[.163,.065],[.153,.083],[.105,.099],[0,.099]],alloy);hub.rotation.x=Math.PI/2;group.add(hub);
 for(const side of [-1,1]){
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.132,.012,8,48),dark);ring.position.z=side*.102;group.add(ring);
  const cap=new THREE.Mesh(new THREE.CylinderGeometry(.067,.067,.025,24),alloy);cap.rotation.x=Math.PI/2;cap.position.z=side*.112;group.add(cap);
  for(let k=0;k<6;k++){const a=k*Math.PI/3;const recess=new THREE.Mesh(new THREE.CircleGeometry(.024,12),dark);recess.position.set(Math.sin(a)*.101,Math.cos(a)*.101,side*.105);if(side<0)recess.rotation.y=Math.PI;group.add(recess);}
 }
 for(const offset of [-.045,.045]){const groove=new THREE.Mesh(new THREE.TorusGeometry(.281,.004,6,64),dark);groove.position.z=offset;group.add(groove);}
 return group;
}
export function brassMass(){
 const brass=new THREE.MeshStandardMaterial({color:0xb98c3e,metalness:.78,roughness:.29});
 const weight=turned([[0,-.125],[.295,-.125],[.335,-.112],[.348,-.085],[.348,.075],[.332,.102],[.29,.12],[.10,.12],[.10,.16],[.075,.177],[0,.177]],brass);
 const handle=new THREE.Mesh(new THREE.TorusGeometry(.10,.018,10,32,Math.PI),alloy);handle.position.y=.17;handle.name='mass-folding-handle';weight.add(handle);
 const rim=new THREE.Mesh(new THREE.TorusGeometry(.341,.006,6,64),alloy);rim.rotation.x=Math.PI/2;rim.position.y=-.07;weight.add(rim);weight.castShadow=true;return weight;
}
export function gateDetails(gate:THREE.Group){
 const black=new THREE.MeshStandardMaterial({color:0x122331,metalness:.25,roughness:.3});
 for(const z of [-1.04,1.04]){
  const sensor=rounded(.24,.22,.18,.04,black);sensor.position.set(0,-.28,z);gate.add(sensor);
  const lens=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.014,24),new THREE.MeshStandardMaterial({color:0x9c2030,emissive:0x5b0c18,roughness:.2}));lens.rotation.x=Math.PI/2;lens.position.set(0,-.28,z-Math.sign(z)*.097);gate.add(lens);
  hardwareBolt(gate,-.12,-.80,z,.8);hardwareBolt(gate,.12,-.80,z,.8);
 }
}
