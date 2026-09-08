import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Open moulded tray: compartments remain visible when the shell is removed. */
export function makeChassis(){
  const root=new T.Group();root.name='moulded-chassis';
  const polymer=new T.MeshStandardMaterial({color:0x354b60,roughness:.8,metalness:.12});
  const rib=new T.MeshStandardMaterial({color:0x648297,roughness:.65,metalness:.15});
  const metal=new T.MeshStandardMaterial({color:0xbac9cd,roughness:.28,metalness:.8});
  const brass=new T.MeshStandardMaterial({color:0xdcae65,roughness:.3,metalness:.7});
  function box(name:string,w:number,h:number,d:number,x:number,y:number,z:number,mat=polymer){const m=new T.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.2),mat);m.name=name;m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;root.add(m);return m;}
  // Thin floor, raised perimeter and an actual open battery bay, not a solid block.
  box('tray-floor',2.62,.075,1.06,0,.315,0);
  for(const side of [-1,1]){
    box('perimeter-rail',2.52,.16,.065,0,.415,side*.53);
    box('battery-cradle',1.14,.055,.12,.15,.465,side*.22,rib);
    box('battery-bay-wall',1.17,.17,.045,.15,.44,side*.40);
    for(const x of [-.43,.73])box('battery-contact',.025,.15,.23,x,.57,side*.22,brass);
    for(const x of [-1.1,-.45,.45,1.1])box('cross-rib',.045,.06,.16,x,.38,side*.43,rib);
    box('motor-saddle',.41,.12,.08,-.74,.435,side*.23,rib);
  }
  box('battery-divider',1.17,.10,.045,.15,.41,0,rib);
  for(const x of [-1.03,.98]){
    box('axle-housing',.25,.13,1.10,x,.36,0);
    for(const z of [-.43,.43])box('bearing-seat',.16,.17,.14,x,.36,z,rib);
    box('gearbox-base',.44,.055,.26,x,.40,.43,rib);
    for(const z of [.30,.56])box('gearbox-wall',.42,.16,.035,x,.47,z);
  }
  for(const x of [-1.28,1.28]){
    box('bumper-spine',.12,.095,1.72,x,.405,0);
    for(const side of [-1,1]){
      const strut=box('roller-brace',.52,.075,.10,x*.83,.385,side*.65,rib);strut.rotation.y=side*x*.48;
      const boss=new T.Mesh(new T.CylinderGeometry(.085,.10,.10,16),rib);boss.position.set(x,.46,side*.88);boss.name='roller-mount';root.add(boss);
      const screw=new T.Mesh(new T.CylinderGeometry(.035,.035,.02,12),metal);screw.position.set(x,.517,side*.88);screw.name='mount-screw';root.add(screw);
    }
  }
  for(const x of [-1.15,.83])for(const z of [-.34,.34])box('shell-latch',.12,.16,.075,x,.47,z,rib);
  return root;
}
