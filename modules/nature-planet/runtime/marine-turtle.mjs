/** Owned, articulated surface-swimming turtle. No borrowed GLB resources. */
export function createMarineTurtle(T){
 const root=new T.Group();root.name='SurfaceSeaTurtle';const resources=new Set(),parts={};
 const mat=(color,roughness=.75)=>{const m=new T.MeshStandardMaterial({color,roughness});resources.add(m);return m;},shell=mat('#466641'),rim=mat('#b4ad70'),skin=mat('#70885c'),scute=mat('#344e31'),eye=mat('#17231b',.3),shine=mat('#e7ead4',.25);
 const ellipsoid=(parent,name,pos,scale,material,segments=28)=>{const g=new T.SphereGeometry(1,segments,18);resources.add(g);const mesh=new T.Mesh(g,material);mesh.name=name;mesh.position.set(...pos);mesh.scale.set(...scale);parent.add(mesh);return mesh;};
 ellipsoid(root,'Turtle_shell_rim',[0,.01,0],[.64,.16,.88],rim);ellipsoid(root,'Turtle_domed_shell',[0,.1,-.03],[.61,.38,.83],shell);
 // Individual raised scutes follow the dome rather than a flat decal.
 for(let row=-2;row<=2;row++)for(let col=-1;col<=1;col++){const x=col*.29+(row%2?.04:0),z=row*.26;if((x/.58)**2+(z/.8)**2>.85)continue;const y=.1+.38*Math.sqrt(Math.max(0,1-(x/.61)**2-(z/.83)**2));ellipsoid(root,`Turtle_scute_${row}_${col}`,[x,y,z-.03],[.145,.025,.13],scute,12);}
 const head=new T.Group();head.name='Turtle_head_joint';head.position.set(0,.04,.79);root.add(head);parts.head=head;
 ellipsoid(head,'Turtle_neck',[0,0,.04],[.18,.15,.24],skin);ellipsoid(head,'Turtle_head',[0,.035,.25],[.23,.19,.29],skin);
 for(const side of [-1,1]){ellipsoid(head,'Turtle_eye',[side*.18,.12,.36],[.048,.046,.055],eye,16);ellipsoid(head,'Turtle_eye_glint',[side*.2,.137,.388],[.013,.013,.014],shine,12);ellipsoid(head,'Turtle_nostril',[side*.065,.085,.52],[.018,.016,.012],eye,12);}
 parts.flippers=[];for(const side of [-1,1])for(const front of [true,false]){const joint=new T.Group();joint.name=`Turtle_flipper_${side}_${front}`;joint.position.set(side*.49,.03,front?.39:-.56);root.add(joint);const fin=ellipsoid(joint,'Turtle_flipper',[side*.28,-.03,front?.15:-.13],[front?.49:.29,.075,front?.19:.16],skin);fin.rotation.y=side*(front?-.45:.4);parts.flippers.push({joint,side,front});}
 ellipsoid(root,'Turtle_tail',[0,-.02,-.91],[.08,.065,.21],skin,16);
 let dead=false;return{root,parts,dispose(){if(dead)return;dead=true;root.removeFromParent();for(const r of resources)r.dispose();resources.clear();}};
}
