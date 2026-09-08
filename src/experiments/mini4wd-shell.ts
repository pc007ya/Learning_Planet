import * as T from 'three';

/** One shared sculpted surface for the body, glazing and livery. +X is the nose. */
export function shellSurface(x:number,u:number):T.Vector3{
  const cabin=Math.exp(-Math.pow((x+.20)/.53,4));
  const width=.465+.09*Math.exp(-Math.pow((x+.9)/.36,2))+.10*Math.exp(-Math.pow((x-.92)/.36,2))-.12*Math.pow(Math.abs(x)/1.43,8);
  const shoulder=.85+.025*Math.exp(-Math.pow((x+.85)/.45,2))-.26*Math.pow(Math.max(0,x)/1.43,3);
  const roof=shoulder+.025+.205*cabin;
  const a=Math.abs(u);
  // Raised lower edges keep the independent wheels visible and clear at both sizes.
  const wheelArch=.055*Math.exp(-Math.pow((Math.abs(x)-.96)/.34,4));
  const edge=.735+wheelArch-.19*Math.pow(Math.abs(x)/1.43,8);
  const y=a<.65?T.MathUtils.lerp(roof,shoulder,(1-Math.cos(Math.PI*a/.65))/2):T.MathUtils.lerp(shoulder,edge,Math.sin((a-.65)/.35*Math.PI/2));
  return new T.Vector3(x,y,u*width);
}

function patch(x0:number,x1:number,u0:number,u1:number,lift=0,nx=48,nu=24){
  const p:number[]=[],ix:number[]=[];
  for(let i=0;i<=nx;i++)for(let j=0;j<=nu;j++){
    const v=shellSurface(T.MathUtils.lerp(x0,x1,i/nx),T.MathUtils.lerp(u0,u1,j/nu));v.y+=lift;p.push(v.x,v.y,v.z);
  }
  for(let i=0;i<nx;i++)for(let j=0;j<nu;j++){const a=i*(nu+1)+j,b=a+nu+1;ix.push(a,a+1,b,b,a+1,b+1);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(ix);g.computeVertexNormals();return g;
}

export function makeSportsShell(){
  const root=new T.Group(),wing=new T.Group(),street=new T.Group(),racer=new T.Group();root.add(street,racer);street.name='streamline-shell';racer.name='open-wheel-shell';racer.visible=false;
  const paint=new T.MeshPhysicalMaterial({color:0x29c9ff,metalness:.42,roughness:.24,clearcoat:1,side:T.DoubleSide});
  const glass=new T.MeshPhysicalMaterial({color:0x17374d,metalness:.25,roughness:.08,clearcoat:1,side:T.DoubleSide});
  glass.transparent=true;glass.opacity=.88;glass.depthWrite=false;glass.userData.normalOpacity=.88;
  const dark=new T.MeshStandardMaterial({color:0x101b2c,roughness:.55,metalness:.25,side:T.DoubleSide});
  const stripe=new T.MeshStandardMaterial({color:0xe8f5ff,roughness:.3,metalness:.25,side:T.DoubleSide});
  const lamp=new T.MeshStandardMaterial({color:0xbffaff,emissive:0x65dfff,emissiveIntensity:.6});
  const tail=new T.MeshStandardMaterial({color:0xff3452,emissive:0xff1738,emissiveIntensity:.5});
  const add=(g:T.BufferGeometry,m:T.Material,parent=street)=>{const o=new T.Mesh(g,m);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;};
  const box=(w:number,h:number,d:number,x:number,y:number,z:number,m:T.Material,parent=street)=>{const o=add(new T.BoxGeometry(w,h,d),m,parent);o.position.set(x,y,z);return o;};
  add(patch(-1.43,1.43,-1,1),paint);
  // Moulded side walls close the tray gap; raised wheel zones form curved arches.
  for(const side of [-1,1]){
    const p:number[]=[],idx:number[]=[];
    for(let i=0;i<=80;i++){const x=-1.43+i*2.86/80,v=shellSurface(x,side),bottom=.43+.28*Math.exp(-Math.pow((Math.abs(x)-.96)/.34,4));p.push(v.x,v.y,v.z,v.x,Math.min(v.y,bottom),v.z);if(i<80){const a=i*2;idx.push(a,a+1,a+2,a+1,a+3,a+2);}}
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(idx);g.computeVertexNormals();add(g,paint);
  }
  // End faces close the envelope instead of leaving the old open loft visible.
  for(const x of [-1.43,1.43]){
    const p:number[]=[],ind:number[]=[];
    for(let j=0;j<=32;j++){const v=shellSurface(x,j/16-1);p.push(v.x,v.y,v.z,v.x,.40,v.z);if(j<32){const a=j*2;ind.push(a,a+1,a+2,a+1,a+3,a+2);}}
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(ind);g.computeVertexNormals();add(g,paint);
  }
  add(patch(.02,.48,-.58,.58,.007,28,24),glass); // curved glazing, not a flat black box
  add(patch(-.79,-.44,-.57,.57,.007,20,20),glass);
  for(const side of [-1,1]){
    add(patch(-.47,.03,side*.50,side*.80,.009,28,16),glass);
    // Narrow racing ribbons continue over the hood, not across the glass.
    add(patch(.65,1.36,side*.23,side*.33,.010,24,4),stripe);
    add(patch(-1.35,-.83,side*.23,side*.33,.010,20,4),stripe);
    add(patch(-.42,.13,side*.24,side*.32,.010,18,4),stripe);
    // Recessed side intake and restrained sill.
    add(patch(-.72,-.38,side*.83,side*.98,.008,14,6),dark);
    box(1.40,.035,.045,0,.425,side*.50,dark);
    const head=add(patch(1.18,1.225,side*.47,side*.84,.015,8,10),lamp);head.name='headlight';
    box(.018,.025,.20,1.44,.525,side*.235,lamp);
    box(.015,.032,.28,-1.44,.71,side*.205,tail);
  }
  box(.018,.055,.45,1.437,.465,0,dark); // front air inlet
  box(.16,.035,.88,1.36,.402,0,dark);
  box(.17,.045,.88,-1.36,.40,0,dark);
  for(const z of [-.27,-.09,.09,.27])box(.24,.065,.025,-1.32,.39,z,dark);
  root.add(wing);
  const foil=box(.30,.045,1.15,-1.16,1.03,0,paint,wing);foil.rotation.z=-.10;
  for(const z of [-.38,.38])box(.065,.25,.045,-1.16,.885,z,dark,wing);
  for(const z of [-.59,.59])box(.31,.12,.035,-1.16,1.05,z,paint,wing);
  // A genuinely different narrow-bodied competition shell on the same chassis.
  const spine=patch(-1.40,1.43,-1,1);spine.scale(1,1,.62);add(spine,paint,racer);
  const canopy=patch(-.65,.43,-.55,.55,.012);canopy.scale(1,1,.62);add(canopy,glass,racer);
  for(const side of [-1,1]){
    const pod=patch(-.58,.80,side*.45,side*.99,.015);add(pod,paint,racer);
    const wall:number[]=[],faces:number[]=[];
    for(let i=0;i<=32;i++){const x=-.58+i*1.38/32,v=shellSurface(x,side*.99);wall.push(x,v.y+.015,v.z,x,.45,v.z);if(i<32){const a=i*2;faces.push(a,a+1,a+2,a+1,a+3,a+2);}}
    const sidewall=new T.BufferGeometry();sidewall.setAttribute('position',new T.Float32BufferAttribute(wall,3));sidewall.setIndex(faces);sidewall.computeVertexNormals();add(sidewall,paint,racer);
    const intake=patch(-.31,.23,side*.80,side*.95,.021);add(intake,dark,racer);
    const ribbon=patch(.53,1.36,side*.24,side*.39,.012);ribbon.scale(1,1,.62);add(ribbon,stripe,racer);
    box(.24,.045,.47,1.25,.48,side*.40,paint,racer);
    box(.27,.11,.035,1.25,.51,side*.63,dark,racer);
    box(.055,.025,.15,1.37,.53,side*.32,lamp,racer);
    box(.025,.19,.24,.79,.65,side*.32,paint,racer);
  }
  wing.visible=false;
  return {root,wing,street,racer,paint,materials:[paint,glass,dark,stripe,lamp,tail]};
}
