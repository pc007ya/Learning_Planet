/** Fixed-location equipment activity. No root, collision or source geometry edits. */
export function evaluateParkedEquipmentIdle(seconds,out={radarAngle:0,windowGlow:0}){
  const t=Number.isFinite(seconds)?seconds:0;
  out.radarAngle=.18*Math.sin(t*.85);
  out.windowGlow=.18+.14*(.5+.5*Math.sin(t*1.1));
  return out;
}
export function createParkedEquipmentIdle(THREE,terrain){
  const radar=terrain.getObjectByName('ExplorerRover__cyan_exploration_radar');
  const lens=terrain.getObjectByName('ExplorerRover__radar_orange_lens');
  const window=terrain.getObjectByName('ArrivalRocket__cyan_pressure_window');
  const pieces=[],glows=[],pose={radarAngle:0,windowGlow:0};
  const q=new THREE.Quaternion(),axis=new THREE.Vector3(1,0,0),v=new THREE.Vector3();
  let disposed=false;
  // The radar's geometric center, expressed in its parent frame, is the pivot.
  // Meshes may have baked vertices or a nonzero translation: handle both.
  const pivot=new THREE.Vector3();
  if(radar?.isMesh&&radar.parent?.name==='ExplorerRover'&&lens?.parent===radar.parent){
    radar.geometry.computeBoundingBox();radar.geometry.boundingBox.getCenter(pivot);
    radar.updateMatrix();pivot.applyMatrix4(radar.matrix);
    for(const node of [radar,lens])pieces.push({node,position:node.position.clone(),quaternion:node.quaternion.clone()});
  }
  if(window?.isMesh&&window.parent?.name==='ArrivalRocket'){
    const original=window.material,materials=Array.isArray(original)?original:[original];
    if(materials.every(m=>m?.emissive&&typeof m.clone==='function')){
      const clones=materials.map(m=>m.clone());window.material=Array.isArray(original)?clones:clones[0];
      glows.push({node:window,original,clones,base:clones.map(m=>({emissive:m.emissive.clone(),intensity:m.emissiveIntensity}))});
    }
  }
  function restore(){
    for(const p of pieces){p.node.position.copy(p.position);p.node.quaternion.copy(p.quaternion);}
    for(const g of glows)g.clones.forEach((m,i)=>{m.emissive.copy(g.base[i].emissive);m.emissiveIntensity=g.base[i].intensity;});
  }
  return {
    get equipmentCount(){return (pieces.length?1:0)+glows.length;},
    update(seconds){
      if(disposed)return;evaluateParkedEquipmentIdle(seconds,pose);q.setFromAxisAngle(axis,pose.radarAngle);
      for(const p of pieces){v.copy(p.position).sub(pivot).applyQuaternion(q).add(pivot);p.node.position.copy(v);p.node.quaternion.copy(q).multiply(p.quaternion);}
      for(const g of glows)for(const m of g.clones){m.emissive.copy(m.color);m.emissiveIntensity=pose.windowGlow;}
    },
    restore,
    dispose(){if(disposed)return;restore();for(const g of glows){g.node.material=g.original;for(const m of g.clones)m.dispose();}disposed=true;},
  };
}
