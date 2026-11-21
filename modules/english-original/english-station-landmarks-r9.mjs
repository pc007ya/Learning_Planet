// Each override addresses a duplicate R8 landmark on its own grade's map.
// Change gross geometry, topology and primary silhouette, not just tint.
// Local X/Z geometry fits the existing .94 world-unit disk at 1.25×.
export const STATION_LANDMARK_VARIANTS=Object.freeze(Object.fromEntries([
 ['en-g2-03','weather-wardrobe','CLOTHES'],
 ['en-g2-05','helper-workshop','HELPERS'],
 ['en-g2-08','picnic-canopy','PICNIC'],
 ['en-g3-03','taste-bar','TASTES'],
 ['en-g3-06','rescue-bell','HELP BELL'],
 ['en-g3-08','satchel-locker','SCHOOL BAG'],
 ['en-g4-03','frequency-wheel','HOW OFTEN?'],
 ['en-g4-05','calendar-press','CALENDAR'],
 ['en-g4-06','activity-stage','ON STAGE'],
 ['en-g5-04','trip-bus','TRIP BUS'],
 ['en-g5-06','trail-tent','SUNDAY PLAN'],
 ['en-g5-08','field-journal','TRIP REPORT'],
 ['en-g6-01','park-pergola','PARK PLAN'],
 ['en-g6-02','tidal-sandcastle','BEACH'],
 ['en-g6-03','giant-sunflower','SUNFLOWER'],
 ['en-g6-06','reuse-station','REUSE'],
 ['en-g6-07','message-post','MESSAGES'],
 ['en-g6-08','journey-compass','JOURNEY']
].map(([id,kind,label])=>[id,Object.freeze({kind,label})])));
export function buildStationLandmarkVariant(T,g,kind,{mesh,box,ball,cylinder,palette:p}){
 const B=(c,size,pos)=>box(g,size,c,pos);
 const C=(c,rt,rb,h,pos,n=12)=>cylinder(g,rt,rb,h,c,pos,n);
 const S=(c,r,pos,scale)=>ball(g,r,c,pos,scale);
 const turn=X=>{X.rotation.x=Math.PI/2;return X;};
 const G=(geo,c,pos)=>mesh(g,geo,c,pos);
 const bar=(c,r,a,b,n=8)=>{
  const A=new T.Vector3(...a),B=new T.Vector3(...b),v=B.clone().sub(A);
  const m=C(c,r,r,v.length(),A.addScaledVector(v,.5).toArray(),n);
  m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());
  return m;
 };
 const plinth=(c,w=.84,d=.67)=>B(c,[w,.08,d],[0,.055,0]);
 const ring=(c,r,t,pos)=>G(new T.TorusGeometry(r,t,8,24),c,pos);
 const coin=(c,r,t,pos,n)=>turn(C(c,r,r,t,pos,n));
 switch(kind){
 case 'weather-wardrobe':{
  plinth(p.wood); B(p.cream,[.75,.91,.34],[0,.54,-.13]); 
  B(p.teal,[.59,.7,.032],[0,.53,.053]);
  for(const s of [-1,1]){
   B(p.wood,[.14,.70,.28],[s*.37,.53,.14]).rotation.y=-s*.52;
   B(p.gold,[.07,.24,.045],[s*.37,.52,.27]);
  }
  // A raised weather vane gives the tall cabinet a hooked roofline.
  bar(p.ink,.020,[0,1,0],[0,1.28,0]);
  B(p.pink,[.37,.052,.052],[.02,1.22,0]);
  G(new T.ConeGeometry(.075,.15,4),p.gold,[.226,1.22,0]).rotation.z=-Math.PI/2;
  break;}
 case 'helper-workshop':{
  plinth(p.cream); B(p.wood,[.9,.11,.48],[0,.38,.05]);
  for(const x of [-.36,.36])B(p.teal,[.11,.3,.36],[x,.175,.05]);
  B(p.pink,[.28,.2,.28],[-.24,.535,.08]);
  // Pegboard, long diagonal wrench and an open gap above the bench.
  B(p.wood,[.08,.47,.08],[.33,.61,-.22]);B(p.cream,[.45,.29,.065],[.15,.77,-.22]);
  bar(p.blue,.044,[-.31,.45,.11],[.11,.94,.11]);
  ring(p.blue,.1,.033,[.16,1.006,.11]);S(p.gold,.075,[.27,.49,.2]);
  break;}
 case 'picnic-canopy':{
  plinth(p.leaf);
  for(let i=0;i<4;i++)for(let j=0;j<3;j++)B((i+j)%2?p.cream:p.pink,[.2,.015,.19],[i*.2-.3,.104,j*.19-.19]);
  bar(p.wood,.033,[.07,.11,.02],[.18,1.01,.02]);
  G(new T.ConeGeometry(.57,.28,12),p.gold,[.1,.91,.02]).rotation.z=-.09;
  C(p.cream,.535,.535,.042,[.09,.776,.02],12);
  B(p.wood,[.29,.16,.24],[-.27,.199,.18]);
  ring(p.cream,.083,.015,[-.27,.3,.18]);break;}
 case 'taste-bar':{
  plinth(p.cream); C(p.teal,.27,.36,.25,[0,.208,0]);
  C(p.chalk,.49,.32,.21,[0,.44,0]);
  C(p.pink,.47,.47,.033,[0,.551,0]);
  for(const [x,z,c] of [[-.28,.01,p.gold],[.25,.09,p.pink],[.1,-.23,p.leaf]]){
   S(c,.125,[x,.67,z],[1,1.13,1]);bar(p.wood,.021,[x,.761,z],[x+.06,.93,z-.028]);
  }
  bar(p.wood,.029,[-.25,.49,-.2],[-.41,1.018,-.24]);
  S(p.teal,.129,[-.435,1.07,-.24],[.62,1.3,.34]);break;}
 case 'rescue-bell':{
  plinth(p.wood,.85,.62);
  for(const s of [-1,1]){
   bar(p.teal,.065,[s*.40,.10,-.13],[s*.31,1.09,-.13]);
   bar(p.teal,.042,[s*.31,1.09,-.13],[0,1.36,-.13]);
   bar(p.wood,.038,[s*.35,.15,.22],[s*.37,.64,-.13]);
  }
  bar(p.wood,.044,[-.32,1.05,-.13],[.32,1.05,-.13]);
  C(p.gold,.09,.24,.28,[0,.887,-.11]);
  C(p.gold,.243,.261,.067,[0,.71,-.11]);
  S(p.wood,.036,[0,.649,-.11]);S(p.pink,.067,[0,1.36,-.13]);break;}
 case 'satchel-locker':{
  plinth(p.cream,.74,.57);ring(p.wood,.17,.045,[0,1.007,-.06]);
  S(p.blue,.46,[0,.54,-.045],[.95,1.08,.58]);
  S(p.teal,.34,[0,.48,.159],[.9,.75,.48]);
  for(const s of [-1,1]){
   B(p.wood,[.085,.49,.04],[s*.2,.62,.27]);
   B(p.gold,[.11,.084,.046],[s*.2,.5,.29]);
  }
  B(p.cream,[.23,.087,.046],[0,.55,.33]);break;}
 case 'frequency-wheel':{
  plinth(p.wood,.77,.62);
  bar(p.wood,.068,[-.33,.095,.09],[0,.8,-.15]);
  bar(p.wood,.068,[.33,.095,.09],[0,.8,-.15]);
  ring(p.teal,.425,.055,[0,.83,.035]);
  for(let i=0;i<6;i++){
   const a=i*Math.PI/3;
   bar(p.cream,.032,[0,.83,.024],[Math.cos(a)*.4,.83+Math.sin(a)*.4,.024]);
   S([p.pink,p.gold,p.blue][i%3],.069,[Math.cos(a)*.42,.83+Math.sin(a)*.42,.051]);
  }
  S(p.gold,.092,[0,.83,.057]);break;}
 case 'calendar-press':{
  plinth(p.wood,.96,.66);
  for(const s of [-1,1])bar(p.pink,.047,[s*.39,.1,-.25],[s*.32,1.2,-.048]);
  B(p.blue,[.84,.69,.092],[0,.65,.023]).rotation.x=-.15;
  B(p.cream,[.758,.522,.036],[0,.603,.097]).rotation.x=-.15;
  B(p.pink,[.783,.155,.042],[0,.904,.071]).rotation.x=-.15;
  for(let i=0;i<4;i++)for(let j=0;j<3;j++)B((i+j)%4===1?p.gold:p.teal,[.096,.084,.015],[i*.16-.24,j*.13+.442,.142+.019*j]);
  for(const x of [-.245,.245])ring(p.wood,.062,.021,[x,1.019,.033]);
  B(p.wood,[.62,.065,.065],[0,1.186,-.048]);break;}
 case 'activity-stage':{
  plinth(p.wood,1.04,.72);
  C(p.pink,.46,.52,.17,[0,.158,0],6);
  for(const x of [-.38,.38]){
   bar(p.wood,.041,[x,.23,-.23],[x,1.17,-.23]);
   B(p.pink,[.135,.63,.071],[x,.78,-.212]).rotation.z=x*.34;
  }
  B(p.blue,[.93,.13,.39],[0,1.1,-.136]);
  B(p.gold,[.46,.055,.11],[0,1.182,.024]);
  S(p.cream,.113,[-.22,.405,.105]);bar(p.cream,.03,[-.22,.245,.105],[-.22,.396,.105]);
  coin(p.teal,.14,.065,[.22,.472,.137],6);
  bar(p.teal,.029,[.22,.24,.097],[.22,.453,.097]);break;}
 case 'trip-bus':{
  plinth(p.wood,1.05,.64);
  B(p.gold,[.97,.37,.52],[-.02,.373,-.01]);
  B(p.pink,[.74,.33,.46],[-.12,.699,-.01]);
  B(p.cream,[.81,.083,.51],[-.12,.904,-.01]);
  for(const z of [-.283,.265]){
   for(const x of [-.315,-.065,.18]){
    B(p.teal,[.173,.18,.026],[x,.719,z*.86]);
   }
   for(const x of [-.306,.287]){
    coin(p.ink,.12,.056,[x,.247,z]);coin(p.cream,.049,.026,[x,.247,z+Math.sign(z)*.04]);
   }
  }
  B(p.teal,[.04,.22,.34],[.251,.711,-.011]);
  for(const z of [-.155,.147])S(p.cream,.058,[.464,.479,z]);break;}
 case 'trail-tent':{
  plinth(p.leaf,.99,.67);
  const fabric=new T.Shape();fabric.moveTo(-.498,0);fabric.lineTo(.5,0);fabric.lineTo(.134,.8);fabric.lineTo(-.051,.83);fabric.closePath();
  G(new T.ExtrudeGeometry(fabric,{depth:.59,bevelEnabled:false}),p.teal,[0,.112,-.296]);
  const door=new T.Shape();door.moveTo(-.25,0);door.lineTo(.26,0);door.lineTo(.05,.65);door.closePath();
  G(new T.ShapeGeometry(door),p.ink,[0,.118,.298]);
  for(const s of [-1,1])bar(p.gold,.026,[s*.49,.109,.306],[.042,.936,.306]);
  bar(p.wood,.035,[.042,.845,.296],[.042,1.116,.296]);
  G(new T.CircleGeometry(.139,3),p.pink,[.136,1.072,.302]).rotation.z=-Math.PI/6;break;}
 case 'field-journal':{
  plinth(p.wood,.89,.66);
  const y=.63,z=.015;
  for(const s of [-1,1]){
   const page=B(p.blue,[.43,.77,.12],[s*.205,y,z]);
   page.rotation.y=-s*.27;page.rotation.z=-s*.22;
   const face=B(p.cream,[.361,.684,.055],[s*.201,y,z+.085]);face.rotation.copy(page.rotation);
   for(let i=0;i<3;i++)B(p.teal,[.249-i*.036,.025,.027],[s*.196,.51+i*.11,.139]).rotation.z=-s*.22;
  }
  bar(p.gold,.07,[0,.21,.046],[0,.997,.046]);
  bar(p.pink,.037,[-.28,.82,.13],[-.46,1.183,.14]);break;}
 case 'park-pergola':{
  plinth(p.leaf,1.04,.73);
  for(const x of [-.414,.414])for(const z of [-.251,.251])bar(p.wood,.048,[x,.09,z],[x,1.032,z]);
  for(const z of [-.27,.267])B(p.wood,[1.083,.055,.071],[0,1.048,z]);
  for(let i=0;i<5;i++)B(i%2?p.teal:p.leaf,[.103,.078,.685],[i*.225-.45,1.093,0]);
  for(const s of [-1,1]){
   bar(p.wood,.028,[s*.412,.75,.251],[s*.226,1.044,.264]);
   S(p.leaf,.132,[s*.412,.784,-.232],[.71,1.23,.84]);
   S(p.pink,.062,[s*.413,.885,-.174]);
  }
  B(p.wood,[.508,.075,.166],[0,.368,-.099]);
  for(const x of [-.192,.192])B(p.wood,[.048,.25,.13],[x,.225,-.10]);
  break;}
 case 'tidal-sandcastle':{
  plinth(p.gold,1.01,.72);
  B(p.cream,[.45,.31,.36],[0,.247,-.04]);
  for(const [x,h] of [[-.32,.73],[.31,.93]]){
   C(p.cream,.147,.169,h,[x,h/2+.092,-.028],8);
   C(p.gold,.191,.158,.09,[x,h+.103,-.028],8);
   for(let i=0;i<4;i++){
    const a=i*Math.PI/2;
    B(p.cream,[.079,.104,.08],[x+.133*Math.cos(a),h+.175,-.028+.133*Math.sin(a)]);
   }
  }
  B(p.wood,[.127,.216,.034],[0,.216,.153]);
  bar(p.wood,.021,[.31,1.02,-.028],[.31,1.236,-.028]);
  G(new T.CircleGeometry(.091,3),p.pink,[.386,1.19,-.028]);break;}
 case 'giant-sunflower':{
  C(p.wood,.31,.265,.22,[0,.16,0]);
  bar(p.leaf,.055,[0,.266,0],[-.054,.988,.08]);
  S(p.leaf,.179,[-.162,.538,.035],[1.31,.46,.67]).rotation.z=.58;
  S(p.leaf,.172,[.167,.697,.054],[1.19,.50,.67]).rotation.z=.45;
  for(let i=0;i<10;i++){
   const a=i*Math.PI/5;
   S(p.gold,.1,[-.05+.287*Math.cos(a),1.015+.287*Math.sin(a),.07],[1.34,.72,.41]).rotation.z=a;
  }
  coin(p.wood,.181,.097,[-.05,1.015,.087],16);
  for(const x of [-.095,-.005,.085])S(p.gold,.019,[x-.05,1.015,.142]);
  break;}
 case 'reuse-station':{
  plinth(p.cream,1.00,.67);
  for(const [x,c,h] of [[-.33,p.teal,.57],[.01,p.blue,.66],[.34,p.leaf,.47]]){
   B(c,[.26,h,.46],[x,.099+h/2,.035]);B(p.wood,[.28,.06,.46],[x,.105+h,.035]);
   B(p.cream,[.148,.07,.021],[x,h*.66,.272]);
  }
  const cx=.03,cy=.963;
  for(let i=0;i<3;i++){
   const a=i*Math.PI*2/3,b=a+1.38,R=.239;
   bar(p.leaf,.032,[cx+R*Math.cos(a),cy+R*Math.sin(a),-.013],[cx+R*Math.cos(b),cy+R*Math.sin(b),-.013]);
   const t=G(new T.ConeGeometry(.061,.124,3),p.leaf,[cx+R*Math.cos(b),cy+R*Math.sin(b),-.013]);t.rotation.z=(a+b)/2;
  }
  bar(p.wood,.025,[.01,.68,-.014],[.01,.927,-.014]);break;}
 case 'message-post':{
  C(p.cream,.273,.33,.13,[0,.13,0]);
  C(p.teal,.059,.081,.68,[.046,.514,-.02]);
  B(p.blue,[.66,.29,.42],[0,.878,-.024]);
  const lid=C(p.blue,.211,.211,.66,[0,1.003,-.024],14);lid.rotation.z=-Math.PI/2;
  B(p.cream,[.49,.171,.024],[0,.895,.198]);
  for(const s of [-1,1])bar(p.wood,.013,[s*.213,.952,.214],[0,.846,.215]);
  bar(p.pink,.026,[.35,.932,.014],[.35,1.305,.014]);
  B(p.pink,[.18,.102,.045],[.438,1.286,.014]);break;}
 case 'journey-compass':{
  C(p.cream,.334,.384,.15,[0,.148,0]);
  const disk=C(p.blue,.445,.47,.12,[0,.49,0],8);disk.rotation.x=.49;
  const inside=C(p.chalk,.38,.38,.038,[0,.574,.043],24);inside.rotation.x=.49;
  const arrow=(c,s)=>{
   const dir=s>0?1:-1, base=new T.Shape();base.moveTo(0,.345*dir);base.lineTo(-.095,.04*dir);base.lineTo(.095,.04*dir);base.closePath();
   const needle=G(new T.ExtrudeGeometry(base,{depth:.035,bevelEnabled:false}),c,[0,.616,.044]);
   needle.rotation.set(-Math.PI/2+.49,0,-.48);return needle;
  };
  arrow(p.pink,1);arrow(p.teal,-1);S(p.gold,.065,[0,.636,.051]);
  for(const s of [-1,1])bar(p.wood,.054,[s*.257,.2,-.11],[s*.26,.445,-.15]);
  break;}
 default:throw Error('Unknown English station landmark: '+kind);
 }
}
