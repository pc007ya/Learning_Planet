// Owned, additive candidate. No imports, fetches, DOM, clock or world mutation.
// Local +Y is up; -Z is the doorway. The caller alone places the root.
export const CREWED_CRAFT_VERSION='crewed-explorer-v1';
export function createCrewedCraft(T){
 const root=new T.Group();root.name='CrewedExplorerRoot';
 const geometries=new Set(),materials=new Set(),shellMeshes=[],walkMeshes=[],doors=[],doorMeshes=[],legMeshes=[],rampMeshes=[];
 const mat=(name,color,opts={})=>{const m=new T.MeshStandardMaterial({color,roughness:.68,metalness:.08,side:T.DoubleSide,...opts});m.name=name;materials.add(m);return m;};
 const ivory=mat('porcelain',0xf4e8d4),lavender=mat('lavender',0xaa98d2),copper=mat('copper',0xb67848,{metalness:.5}),teal=mat('teal',0x568f92),slate=mat('slate',0x354854),glass=mat('dark_glass',0x244551,{transparent:true,opacity:.35,roughness:.15}),floorMat=mat('cabin_floor',0xb1b8b0),glow=mat('warm_instrument',0xf3cd7f,{emissive:0x735020,emissiveIntensity:.3});
 function mesh(name,g,m,parent=root,group=shellMeshes){const o=new T.Mesh(g,m);o.name=name;parent.add(o);geometries.add(g);o.castShadow=true;o.receiveShadow=true;group?.push(o);return o;}
 function box(name,size,pos,m,parent=root,group=shellMeshes){const o=mesh(name,new T.BoxGeometry(...size),m,parent,group);o.position.set(...pos);return o;}
 function arc(name,r0,r1,y0,y1,a0,a1,m,parent=root,group=shellMeshes){
  const p=[],ix=[],steps=Math.max(2,Math.ceil((a1-a0)*24));
  function face(a,b,c,d){const i=p.length/3;p.push(...a,...b,...c,...d);ix.push(i,i+1,i+2,i,i+2,i+3);}
  const v=(r,y,a)=>[r*Math.sin(a),y,-r*Math.cos(a)];
  for(let j=0;j<steps;j++){const a=a0+(a1-a0)*j/steps,b=a0+(a1-a0)*(j+1)/steps;
   face(v(r1,y0,a),v(r1,y1,a),v(r1,y1,b),v(r1,y0,b));face(v(r0,y0,b),v(r0,y1,b),v(r0,y1,a),v(r0,y0,a));
   face(v(r0,y1,a),v(r0,y1,b),v(r1,y1,b),v(r1,y1,a));face(v(r0,y0,b),v(r0,y0,a),v(r1,y0,a),v(r1,y0,b));
  }
  for(const a of[a0,a1])face(v(r0,y0,a),v(r0,y1,a),v(r1,y1,a),v(r1,y0,a));
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(ix);g.computeVertexNormals();return mesh(name,g,m,parent,group);
 }
 function disk(name,r,y0,y1,m,group=shellMeshes){const o=mesh(name,new T.CylinderGeometry(r,r,y1-y0,64),m,root,group);o.position.y=(y0+y1)/2;return o;}
 const outer=1.26,inner=1.18,cut=.80,floorY=.30,doorTop=2.90;
 arc('Cabin_RightShell',inner,outer,.17,doorTop,cut,Math.PI-.28,ivory);
 arc('Cabin_LeftShell',inner,outer,.17,doorTop,Math.PI+.28,Math.PI*2-cut,ivory);
 arc('Cabin_RearLower',inner,outer,.17,1.80,Math.PI-.28,Math.PI+.28,ivory);
 arc('Cabin_RealRearWindow',inner,outer,1.80,2.45,Math.PI-.28,Math.PI+.28,glass);
 arc('Cabin_RearUpper',inner,outer,2.45,doorTop,Math.PI-.28,Math.PI+.28,ivory);
 arc('Cabin_Header',inner,outer,doorTop,3.22,0,Math.PI*2,ivory);
 disk('Cabin_Ceiling',inner,3.10,3.22,ivory);
 disk('Craft_Belly',1.15,.04,.17,slate);
 // The front cap is genuinely absent, not a solid disk hidden behind the ramp.
 const floorCut=Math.acos(.82/outer),outline=[];for(let i=0;i<=64;i++){const a=floorCut+(Math.PI*2-2*floorCut)*i/64;outline.push(new T.Vector2(outer*Math.sin(a),-outer*Math.cos(a)));}
 const triangles=T.ShapeUtils.triangulateShape(outline,[]),pos=[],indices=[];
 for(const y of[.22,floorY])for(const p of outline)pos.push(p.x,y,p.y);
 const n=outline.length;for(const [a,b,c]of triangles)indices.push(a,c,b,a+n,b+n,c+n);
 for(let i=0;i<n;i++){const j=(i+1)%n;indices.push(i,j,j+n,i,j+n,i+n);}
 const fg=new T.BufferGeometry();fg.setAttribute('position',new T.Float32BufferAttribute(pos,3));fg.setIndex(indices);fg.computeVertexNormals();mesh('Walk_CabinFloor',fg,floorMat,root,walkMeshes);
 const nose=new T.LatheGeometry([[1.26,3.22],[1.24,3.32],[1.16,3.50],[.97,3.75],[.70,3.98],[.38,4.17],[0,4.30]].map(([r,y])=>new T.Vector2(r,y)),64);mesh('Lavender_ExplorerNose',nose,lavender);
 // Side-sliding curved leaves reside outside the main shell, never inside the cabin.
 for(const [side,s]of[['Left',-1],['Right',1]]){
  const door=new T.Group();door.name='Door_'+side;root.add(door);doors.push(door);
  const from=s<0?-.81:0,to=s<0?0:.81;
  arc('Door_'+side+'_IvoryPanel',1.285,1.325,.17,doorTop,from,to,ivory,door,doorMeshes);
  arc('Door_'+side+'_CopperTrim',1.326,1.342,.18,.24,from,to,copper,door,doorMeshes);
  const handle=box('Door_'+side+'_Handle',[.045,.23,.045],[s*.12,1.48,-1.35],copper,door,doorMeshes);
 }
 arc('Upper_DoorTrack',1.275,1.355,2.92,2.96,-1.72,1.72,copper);
 // Tracked doors must fully clear before this panel can deploy. The panel stows INSIDE,
 // not at the outside tangent where its corners would intersect the curved closed leaves.
 const ramp=new T.Group();ramp.name='RampHinge';ramp.position.set(0,floorY,-.82);root.add(ramp);
 const run=1.88,drop=.24,length=Math.hypot(run,drop),angle=-Math.atan2(drop,run);
 function plate(name,width,thickness,backBevel,toeBevel,m,x=0){
  const w=width/2,g=new T.BufferGeometry(),p=[-w,0,0,w,0,0,w,0,-length,-w,0,-length,-w,-thickness,-backBevel,w,-thickness,-backBevel,w,-thickness,-length+toeBevel,-w,-thickness,-length+toeBevel];
  g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0]);g.computeVertexNormals();const o=mesh(name,g,m,ramp,rampMeshes);o.position.x=x;return o;
 }
 // Real beveled hinge/toe avoids the plate thickness sweeping through the fixed floor.
 plate('Walk_Ramp',1.50,.055,.070,.470,floorMat);
 // Narrow copper edge strips are flush with the walk face (not raised trip hazards).
 for(const s of[-1,1])plate('Ramp_FlushEdge_'+s,.025,.002,.003,.020,copper,s*.736);
 walkMeshes.push(rampMeshes[0]);
 // Three feet are all on the side/rear. There is no forward leg in the doorway/ramp.
 for(const [id,x,z]of[['Right',1.46,0],['Left',-1.46,0],['Rear',0,1.46]]){
  const foot=box('LandingFoot_'+id,[.28,.10,.28],[x,.05,z],slate,root,legMeshes);
  const a=new T.Vector3(x/1.46*1.10,.12,z/1.46*1.10),b=new T.Vector3(x,.10,z),d=b.clone().sub(a),leg=mesh('CopperLeg_'+id,new T.CylinderGeometry(.020,.025,d.length(),12),copper,root,legMeshes);leg.position.copy(a).add(b).multiplyScalar(.5);leg.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());
  const fin=box('Teal_LegSocket_'+id,[.16,.05,.16],[x/1.46*1.28,.13,z/1.46*1.28],teal,root,legMeshes);
  const finAngle=id==='Rear'?Math.PI:id==='Right'?2.20:-2.20,fp=[],fi=[];for(const tangent of[-.06,.06])for(const[r,y]of[[1.27,.23],[1.27,1.58],[1.53,.19]])fp.push(r*Math.sin(finAngle)+tangent*Math.cos(finAngle),y,-r*Math.cos(finAngle)+tangent*Math.sin(finAngle));
  fi.push(0,1,2,3,5,4,0,3,4,0,4,1,1,4,5,1,5,2,2,5,3,2,3,0);const fg=new T.BufferGeometry();fg.setAttribute('position',new T.Float32BufferAttribute(fp,3));fg.setIndex(fi);fg.computeVertexNormals();mesh('Teal_ExplorerFin_'+id,fg,teal,root,legMeshes);
 }
 shellMeshes.push(...legMeshes);
 // Rear instruments stay at the rear wall, outside the designated standing envelope.
 box('Rear_HelmBody',[.55,.25,.14],[0,1.23,1.035],slate);
 for(const [x,c]of[[-.16,teal],[0,glow],[.16,glow]])box('Rear_HelmIndicator_'+x,[.09,.07,.012],[x,1.26,.958],c);
 const standing=mesh('Aboard_StandingMark',new T.RingGeometry(.30,.315,48),copper,root,null);standing.rotation.x=-Math.PI/2;standing.position.set(0,.3008,.10);standing.userData.decorative=true;
 const anchor=(name,p)=>{const a=new T.Object3D();a.name=name;a.position.set(...p);root.add(a);return a;};
 const anchors={craftBase:anchor('Anchor_CraftBase',[0,0,0]),cabinStand:anchor('Anchor_CabinStand',[0,.30,.10]),innerThreshold:anchor('Anchor_InnerThreshold',[0,.30,-.82]),outerThreshold:anchor('Anchor_OuterThreshold',[0,.24382978723404253,-1.26]),rampTop:anchor('Anchor_RampTop',[0,.30,-.82]),rampBottom:anchor('Anchor_RampBottom',[0,.06,-2.70]),padWaiting:anchor('Anchor_PadWaiting',[0,.06,-3.40]),groundApproach:anchor('Anchor_GroundApproach',[0,0,-7])};
 // Moving bottom anchor expresses the real panel endpoint for geometry checks.
 const tip=new T.Object3D();tip.name='Anchor_MovingRampBottom';tip.position.set(0,0,-length);ramp.add(tip);anchors.movingRampBottom=tip;
 let doorOpen=0,rampOpen=0,disposed=false;
 function setDoor(value){if(disposed)return false;doorOpen=T.MathUtils.clamp(Number.isFinite(value)?value:0,0,1);doors[0].rotation.y=.88*doorOpen;doors[1].rotation.y=-.88*doorOpen;root.updateMatrixWorld(true);return true;}
 function setRamp(value){if(disposed)return false;rampOpen=T.MathUtils.clamp(Number.isFinite(value)?value:0,0,1);ramp.rotation.x=Math.PI/2+(angle-Math.PI/2)*rampOpen;root.updateMatrixWorld(true);return true;}
 setDoor(0);setRamp(0);
 const spec={version:CREWED_CRAFT_VERSION,coordinateSystem:'Three Y-up, local -Z front, fixed authored scale 1; host base at [0,.16,11]',outerRadius:outer,innerRadius:inner,floorY,ceilingY:3.10,height:4.30,opening:{angularHalfWidth:cut,widthAtInnerJamb:2*inner*Math.sin(cut),height:doorTop-floorY,minY:floorY,maxY:doorTop,jambX:inner*Math.sin(cut),jambZ:-inner*Math.cos(cut)},door:{motion:'two curved leaves rotate around Y outside cabin',rotationPerLeaf:.88,closedInnerRadius:1.285,closedOuterRadius:1.342},ramp:{width:1.50,thickness:.055,length,run,drop,openAngle:angle,closedAngle:Math.PI/2,top:[0,.30,-.82],bottom:[0,.06,-2.70],floorEquation:'y=.30+.24*(z+.82)/1.88; -2.70<=z<=-.82',openSlopeDegrees:Math.atan2(drop,run)*180/Math.PI},cabin:{stand:[0,.30,.10],floorFrontZ:-.82,usableRadius:inner,helmBounds:{min:[-.275,1.105,.965],max:[.275,1.355,1.105]}},landedFeet:[{x:1.46,z:0},{x:-1.46,z:0},{x:0,z:1.46}],boardingValidated:false,originalUnmannedAssetModified:false};
 return{root,doors,ramp,anchors,walkMeshes,shellMeshes,doorMeshes,rampMeshes,legMeshes,spec,setDoor,setRamp,getState:()=>({doorOpen,rampOpen,disposed}),dispose(){if(disposed)return;disposed=true;root.removeFromParent();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
