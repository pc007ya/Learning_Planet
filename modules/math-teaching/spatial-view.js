import * as T from 'three';
import {GeometryView} from './geometry-view.js';
export class SpatialView extends GeometryView {
  solid(geometry,color=0x58d5cf,opacity=1) {
    const mesh=new T.Mesh(geometry,new T.MeshStandardMaterial({color,transparent:opacity<1,opacity,roughness:.35,metalness:.05}));this.group.add(mesh);return mesh;
  }
  updateSpatial(state) {
    this.clear();this.s=(state.mode==='count'||state.mode==='space')?{...state.dimensions,h:state.dimensions.h+(state.dimensions.h-1)*.8}:{l:4,w:4,h:4};this.mode='spatial';this.moving=null;
    if(state.mode==='shapes'){
      const k=state.shape,g=k==='cube'?new T.BoxGeometry(2.3,2.3,2.3):k==='cuboid'?new T.BoxGeometry(3.1,1.8,2):k==='sphere'?new T.SphereGeometry(1.3,40,24):k==='cone'?new T.ConeGeometry(1.2,2.5,40):new T.CylinderGeometry(1.1,1.1,2.4,40);
      const obj=this.solid(g);obj.position.y=-1.5+({cube:1.15,cuboid:.9,sphere:1.3,cone:1.25,cylinder:1.2}[k]);this.moving=obj;
      if(k==='cylinder'&&state.side){obj.rotation.z=Math.PI/2;obj.position.y=-.4;}
      if(state.stack&&['cube','cuboid','cylinder'].includes(k)&&!(k==='cylinder'&&state.side)){
        const other=this.solid(g.clone(),0xffc66c);other.position.y=obj.position.y+(k==='cuboid'?1.8:k==='cube'?2.3:2.4);
      }
      const floor=this.solid(new T.BoxGeometry(7,.08,5),0x223e58);floor.position.y=-1.54;
      this.label(state.shapeName,[0,state.stack?3.8:2.2,0]);
    }else if(state.mode==='capacity'){
      const size=4,level=state.water/1000*size;
      // Back faces keep the front glass transparent and water legible.
      const glass=this.solid(new T.BoxGeometry(size,size,size),0xadcfff,.12);glass.material.side=T.BackSide;
      this.group.add(new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(size,size,size)),new T.LineBasicMaterial({color:0xa3d8fa})));
      if(level>0){const water=this.solid(new T.BoxGeometry(3.94,level,3.94),0x42cbe5,.7);water.position.y=-2+level/2;}
      for(let i=0;i<=10;i++)this.line([[2.02,-2+i*.4,2.02],[2.22,-2+i*.4,2.02]],i%5===0?0xffcd79:0x88bbce);
      this.label('內部長、寬、高各 10 cm',[0,-2.65,0]);this.label(`${state.water} mL`,[2.65,-2+level,2]);
      this.label('滿杯 1000 mL',[0,2.55,0]);
    }else{
      const isSpace=state.mode==='space',{l,w,h}=state.dimensions,cx=(l-1)/2,cz=(w-1)/2;
      const all=state.cubes.filter(c=>c.y<state.layers);
      for(const c of all){const mesh=this.solid(new T.BoxGeometry(.92,.92,.92),state.counted.has(c.id)?0xffc66c:[0x5dd7cc,0x79a8fa,0xb49af0][c.y%3]);mesh.position.set(c.x-cx,c.y-(h-1)/2+c.y*state.spread,c.z-cz);mesh.userData.face=c.id;this.faceMeshes.push(mesh);}
      if(isSpace&&state.showGaps)for(const c of state.gaps){const mesh=this.solid(new T.BoxGeometry(.9,.9,.9),0xffffff,.18);mesh.position.set(c.x-cx,c.y-(h-1)/2+c.y*state.spread,c.z-cz);mesh.userData.face=c.id;this.faceMeshes.push(mesh);const edges=new T.LineSegments(new T.EdgesGeometry(mesh.geometry),new T.LineBasicMaterial({color:0xffffff}));edges.position.copy(mesh.position);this.group.add(edges);}
      const floor=this.solid(new T.BoxGeometry(l+2,.06,w+2),0x223e58);floor.position.y=-h/2-.05;
      if(state.reveal)this.label(`${state.cubes.length} 個小正方體`,[0,h/2+(h-1)*state.spread+.6,0]);
    }
    this.draw();
  }
  angle(kind){const d=Math.max(12,Math.max(this.s.l,this.s.w,this.s.h)*2.6)*Math.max(1,1/this.camera.aspect);this.setProjection(kind==='top',d);this.camera.position.set(...({front:[0,2,d],side:[d,2,0],top:[0,d,.001],home:[d*.65,d*.6,d*.85]}[kind]||[8,7,10]));this.controls.target.set(0,0,0);this.controls.update();this.draw();}
}
