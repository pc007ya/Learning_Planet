import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Original toy hatchback body; photo references are documented in CAR_ART_V4.md. */
export function buildCarBody(shell: T.Group) {
  const enamel = () => new T.MeshPhysicalMaterial({ color: 0x168eac, metalness: .48, roughness: .24, clearcoat: 1, clearcoatRoughness: .13 });
  const material = (color: number, metalness = .2) => new T.MeshStandardMaterial({ color, metalness, roughness: .3 });
  const add = (geometry: T.BufferGeometry, mat: T.Material, x=0,y=0,z=0) => {
    const mesh = new T.Mesh(geometry,mat); mesh.position.set(x,y,z); shell.add(mesh); return mesh;
  };
  const box = (w:number,h:number,d:number,color:number,x:number,y:number,z=0) => add(new RoundedBoxGeometry(w,h,d,3,Math.min(w,h,d)*.28),material(color),x,y,z);
  const profile = new T.Shape();
  profile.moveTo(-1.96,-.22); profile.lineTo(-1.754,-.22);
  profile.absarc(-1.18,-.30,.58,Math.PI-.14,.14,true);
  profile.lineTo(.606,-.22); profile.absarc(1.18,-.30,.58,Math.PI-.14,.14,true);
  profile.lineTo(1.96,-.22); profile.bezierCurveTo(2.06,-.02,2.02,.34,1.84,.48);
  profile.bezierCurveTo(1.39,.60,.87,.57,.54,.58); profile.lineTo(-1.55,.58);
  profile.bezierCurveTo(-1.91,.56,-2.03,.22,-1.96,-.22); profile.closePath();
  add(new T.ExtrudeGeometry(profile,{depth:1.5,bevelEnabled:true,bevelSize:.045,bevelThickness:.045,bevelSegments:3,curveSegments:32}),enamel(),0,0,-.75);
  const cabin = new T.Shape(); cabin.moveTo(-1.43,.52); cabin.lineTo(-1.02,1.31);
  cabin.quadraticCurveTo(-.96,1.38,-.80,1.38); cabin.lineTo(.23,1.38);
  cabin.quadraticCurveTo(.33,1.38,.40,1.27); cabin.lineTo(.88,.55); cabin.closePath();
  add(new T.ExtrudeGeometry(cabin,{depth:1.24,bevelEnabled:true,bevelSize:.045,bevelThickness:.04,bevelSegments:3}),enamel(),0,0,-.62);
  const patch = (points:number[][], color=0x132a3b) => {
    const geometry = new T.BufferGeometry(); geometry.setAttribute('position',new T.Float32BufferAttribute(points.flat(),3));
    geometry.setIndex([0,1,2,0,2,3]); geometry.computeVertexNormals();
    const mat=material(color,.35); mat.side=T.DoubleSide; mat.roughness=.16; return add(geometry,mat);
  };
  for (const side of [-1,1]) {
    const z=.667*side;
    patch([[-1.29,.65,z],[-.98,1.27,z],[-.54,1.27,z],[-.54,.65,z]]);
    patch([[-.47,.65,z],[-.47,1.27,z],[.26,1.27,z],[.72,.65,z]]);
    box(.055,.66,.038,0x18252e,-.50,.97,z);
    box(3.16,.026,.04,0xb9d6db,-.03,.55,.801*side);
    box(.27,.06,.06,0xe2e7e9,-.12,.43,.815*side);
    box(1.08,.085,.045,0x202d35,0,-.22,.815*side);
    const mirror=add(new T.SphereGeometry(.13,20,12),material(0xf1eee5),.67,.68,.89*side); mirror.scale.set(1.15,.8,.66);
    for (const x of [-1.18,1.18]) add(new T.TorusGeometry(.588,.045,8,36,Math.PI),material(0x25323a),x,-.30,.805*side);
    const seam = new T.CatmullRomCurve3([new T.Vector3(-.49,.51,.802*side),new T.Vector3(-.49,-.10,.802*side),new T.Vector3(.48,-.10,.802*side),new T.Vector3(.64,.50,.802*side)]);
    add(new T.TubeGeometry(seam,28,.007,4,false),material(0x166178));
  }
  // Front and rear glazing have their own tilted planes, not a side-window sticker.
  // Keep glazing outside the beveled cabin surface so the paint cannot hide it.
  patch([[.90,.65,-.54],[.90,.65,.54],[.46,1.28,.54],[.46,1.28,-.54]]).name='front-glazing';
  patch([[-1.43,.65,.53],[-1.43,.65,-.53],[-1.10,1.28,-.53],[-1.10,1.28,.53]]).name='rear-glazing';
  box(1.60,.07,1.40,0x172d36,-.33,1.38);
  box(1.65,.15,1.44,0xf7f0df,-.33,1.45);
  for (const z of [-.20,.20]) box(.81,.015,.10,0xf1eedc,1.20,.59,z);
  for (const z of [-.50,.50]) {
    const lamp=add(new T.SphereGeometry(.18,24,16),material(0xfff4ce,.45),1.985,.25,z); lamp.scale.x=.27;
    const rim=add(new T.TorusGeometry(.185,.024,8,32),material(0xdbe1e3,.8),2.0,.25,z); rim.rotation.y=Math.PI/2;
    const tail=add(new T.SphereGeometry(.14,20,12),material(0xbc233e),-1.98,.24,z); tail.scale.set(.25,1.3,.7);
  }
  box(.075,.19,.66,0x17242e,2.03,-.015);
  for (const y of [-.055,0,.055]) box(.084,.014,.55,0xa6b7bd,2.04,y);
  box(.14,.12,1.24,0xc2cdd1,1.98,-.20); box(.14,.12,1.24,0xc2cdd1,-1.98,-.20);
}
