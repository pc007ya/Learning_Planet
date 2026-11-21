// Each stop in a mounted grade/edition has a different primary geometry.
// Keep the common stone plinth and rail/road network as wayfinding vocabulary;
// color and standing ornaments below are not what distinguishes the stops.
export const CHINESE_LANDMARK_FORMS=Object.freeze([
 '摺扇書齋','圓頂觀字台','層簷字塔','鼓形朗讀館','展頁書屋','橋拱說書亭',
 '六棱燈籠館','字風車工房','帆形故事船','階梯刻字坊','銅鐘聽音亭','連拱字花房','天線字訊站','斜頂故事階'
]);
const tier=[0x4d8786,0xa64e42,0x496883,0xa67146,0xbd6050,0x607f71,0x9a4947,0x61768e,0x367d8a,0x897052,0x466f69,0x567c85,0x9e664b,0x425f78];

export function addChineseLessonLandmark(g,i,{THREE,mesh,cub,oval,tube,timber,hip,columns,color,paper,wood,gold,stone}){
 if(!Number.isInteger(i)||i<0||i>=CHINESE_LANDMARK_FORMS.length)throw new RangeError('A Chinese stop needs a new unique landmark silhouette');
 const form=i;
 g.userData.landmarkForm=CHINESE_LANDMARK_FORMS[form];
 const art=new THREE.Group();art.name='獨立課程地標';art.userData.landmarkIndex=i;g.add(art);
 const a=color(tier[form]),cream=color(0xffdfb2),goldTrim=color(0xc08b49),russet=color(0x964f43),teal=color(0x506d79),glass=color(0x81b8af),dark=color(0x425663);
 const b=(x,y,z,w,h,d,m)=>cub(art,x,y,z,w,h,d,m);
 const o=(x,y,z,w,h,d,m)=>oval(art,x,y,z,w,h,d,m);
 const cy=(x,y,z,w,h,d,m)=>tube(art,x,y,z,w,h,d,m);
 const line=(p,q,r,m)=>timber(art,p,q,r,m);
 function extrude(points,depth,m,z=-.10){
  const sh=new THREE.Shape();points.forEach(([x,y],j)=>j===0?sh.moveTo(x,y):sh.lineTo(x,y));sh.closePath();
  const geom=new THREE.ExtrudeGeometry(sh,{depth,bevelEnabled:false,curveSegments:8,steps:1});
  // Match the indexed vs flat attribute groups expected by the map batching code.
  const uv=geom.getAttribute('uv');for(let k=0;k<uv.count;k++)uv.setXY(k,uv.getX(k)*.5,uv.getY(k)*.5);
  return mesh(art,geom,m,[0,0,z]);
 }
 function roundArc(radius,y,z,r,mat,start=0,end=Math.PI,steps=10){
  const p=k=>{const t=start+(end-start)*k/steps;return [radius*Math.cos(t),y+radius*Math.sin(t),z];};
  for(let k=1;k<=steps;k++)line(p(k-1),p(k),r,mat);
 }
 function ring(y,r,h,m){return cy(0,y,-.05,r,h,r,m);}
 function windows(z,x=.37,y=.66){
  for(const s of [-1,1]){b(s*x,y,z,.248,.31,.034,wood);b(s*x,y,z+.021,.197,.254,.018,gold);b(s*x,y,z+.034,.024,.245,.015,wood);}
 }
 function entrance(z=.53,y=.52,d=.04){b(0,y,z,.32,.58,d,wood);b(0,y,z+.026,.23,.52,.019,teal);o(.070,y-.04,z+.052,.025,.024,.022,goldTrim);}
 switch(form){
 case 0: { // Open fan toward the walking lane.
  b(0,.61,-.08,1.32,.86,1.03,paper);entrance(.46);windows(.48);
  const profile=[[0,.97]];
  for(let j=0;j<=12;j++){const t=.25+2.64*j/12;profile.push([.89*Math.cos(t),1.03+.99*Math.sin(t)]);}
  extrude(profile,.39,a,-.19);
  for(let j=0;j<=10;j++){const t=.29+2.56*j/10;line([0,1.02,.221],[.875*Math.cos(t),1.038+.97*Math.sin(t),.221],.024,j%2?goldTrim:cream);}
  break;
 }
 case 1: { // Observatory with a low cylindrical wall and inward open slit.
  ring(.64,.69,.92,paper);ring(1.095,.75,.155,stone);
  o(0,1.147,-.05,.72,.65,.71,a);
  b(0,1.45,.565,.17,.47,.105,dark);
  line([0,1.58,.40],[0,1.92,.68],.059,goldTrim);
  o(0,1.91,.66,.10,.095,.10,cream);entrance(.638);
  break;
 }
 case 2: { // Three stacked compact eaves.
  b(0,.56,-.08,1.05,.75,.98,paper);entrance(.422,.48);windows(.437,.35,.56);
  hip(art,.94,1.57,1.30,.23,a);
  b(0,1.19,-.08,.79,.38,.73,paper);hip(art,1.38,1.23,1.01,.21,russet);
  b(0,1.56,-.08,.54,.3,.51,paper);hip(art,1.74,.94,.78,.31,a);
  o(0,2.06,-.02,.061,.108,.061,gold);break;
 }
 case 3: { // Reading drum hung sideways upon two supports.
  for(const s of [-1,1]){b(s*.52,.34,-.06,.18,.32,.94,wood);b(s*.47,.75,-.10,.18,.93,.22,wood);}
  const drum=cy(0,1.08,-.08,.69,.73,.69,a);drum.rotation.x=Math.PI/2;
  for(const s of [-1,1]){const cap=cy(0,1.08,-.08+s*.385,.70,.065,.70,cream);cap.rotation.x=Math.PI/2;}
  for(let j=0;j<10;j++){const r=j*Math.PI/5;const x=.60*Math.cos(r),y=1.08+.60*Math.sin(r);o(x,y,.349,.039,.039,.025,goldTrim);}
  for(const s of [-1,1])line([s*.43,1.41,.36],[-s*.27,.73,.37],.036,wood);
  break;
 }
 case 4: { // Open book with curved page edges in front elevation.
  for(const side of [-1,1]){
   const p=[[0,.36],[side*.21,.46],[side*.53,.56],[side*.843,.49],[side*.843,1.48],[side*.60,1.57],[side*.28,1.49],[0,1.28]];
   extrude(p,.78,cream,-.44);extrude(p.map(([x,y])=>[x*1.045,y-.072]),.16,a,-.52);
   for(let j=0;j<4;j++){const y=.65+j*.164;line([side*.11,y,.358],[side*.49,y+.10,.358],.020,goldTrim);line([side*.49,y+.10,.358],[side*.74,y+.092,.358],.020,goldTrim);}
  }
  line([0,.27,.351],[0,1.35,.351],.046,a);break;
 }
 case 5: { // Walk-through theater proscenium, with continuous stone arch.
  for(const s of [-1,1]){b(s*.63,.60,-.05,.27,.90,1.20,a);b(s*.63,1.05,-.05,.34,.115,1.27,stone);}
  for(const z of [-.66,.56]){
   const shape=[];
   for(let j=0;j<=16;j++){const t=Math.PI*j/16;shape.push([Math.cos(t)*.76,1.05+Math.sin(t)*.76]);}
   for(let j=16;j>=0;j--){const t=Math.PI*j/16;shape.push([Math.cos(t)*.49,1.05+Math.sin(t)*.49]);}
   extrude(shape,.14,a,z);roundArc(.50,1.05,z+.147,.025,cream);
  }
  b(0,.29,-.18,.90,.12,.66,wood);b(0,.89,-.46,.70,.95,.10,russet);break;
 }
 case 6: { // Hexagonal body with neck, hanging finial, and ribs.
  const hex=(y,top,bot,h,m)=>mesh(art,new THREE.CylinderGeometry(top,bot,h,6),m,[0,y,-.035]);
  hex(.35,.515,.45,.30,a);hex(.64,.72,.51,.30,a);hex(1.06,.67,.72,.60,a);hex(1.56,.36,.67,.40,a);hex(1.82,.33,.37,.19,goldTrim);
  roundArc(.16,1.91,-.035,.023,wood);
  for(let j=0;j<6;j++){
   const t=j*Math.PI/3,p=(r,y)=>[Math.sin(t)*r,y,-.035+Math.cos(t)*r];
   line(p(.51,.48),p(.725,.79),.032,cream);line(p(.725,.79),p(.675,1.36),.032,cream);line(p(.675,1.36),p(.37,1.75),.032,cream);
  }entrance(.64,.56);break;
 }
 case 7: { // Sail-vane wheel is the primary silhouette.
  extrude([[-.72,.19],[.72,.19],[.46,1.57],[-.46,1.57]],.99,paper,-.54);
  entrance(.46);windows(.48);hip(art,1.57,1.14,1.18,.34,a);
  const hub=new THREE.Group();hub.position.set(0,1.37,.655);hub.rotation.z=.32;art.add(hub);
  for(let j=0;j<4;j++){const blade=new THREE.Group();blade.rotation.z=j*Math.PI/2;hub.add(blade);
   cub(blade,0,.39,0,.045,.78,.054,wood);
   const sail=cub(blade,.065,.548,.015,.19,.414,.045,j%2?cream:a);sail.rotation.z=.12;
   for(let h=0;h<3;h++)cub(blade,.056,.45+h*.115,.047,.163,.018,.015,wood);
  }
  const axle=tube(hub,0,0,.016,.108,.13,.108,goldTrim);axle.rotation.x=Math.PI/2;break;
 }
 case 8: { // Compressed boat hull with an unmistakable triangular sail.
  extrude([[-.86,.62],[-.66,.32],[.48,.32],[.86,.71],[.81,.87],[.47,.68],[-.72,.71]],.93,a,-.54);
  line([-.73,.72,.42],[.55,.67,.42],.04,cream);
  line([-.07,.69,.04],[-.07,2.12,.04],.034,wood);
  extrude([[-.04,.99],[.81,.99],[-.04,2.02]],.11,cream,.055);
  extrude([[-.12,1.08],[-.69,1.08],[-.12,1.78]],.10,russet,.008);
  line([-.12,1.08,.106],[-.69,1.08,.106],.025,goldTrim);break;
 }
 case 9: { // Stepped mass with carved letter-like horizontal relief.
  const steps=[[-.54,.41,.60],[-.17,.65,1.07],[.25,.86,1.49],[.64,1.05,1.91]];
  for(const [x,y,h] of steps){b(x,y,-.095,.43,h,1.08,a);b(x,y+h*.5,.01,.43,.064,1.31,cream);
   for(let j=0;j<Math.floor(h/.34);j++){b(x,.35+j*.30,.458,.27,.041,.024,goldTrim);b(x+.079,.404+j*.30,.459,.034,.151,.026,goldTrim);}
  }
  break;
 }
 case 10: { // Bronze bell hangs in a visibly open frame.
  for(const x of [-.62,.62])for(const z of [-.42,.39])columns(art,x,z,.14,1.68,wood);
  b(0,1.84,-.03,1.62,.16,1.14,a);
  for(const x of [-.72,.72])b(x,1.95,-.04,.14,.12,1.12,cream);
  const bell=new THREE.LatheGeometry([[0.05,0],[.49,0],[.53,.06],[.43,.15],[.30,.54],[.17,.75],[.08,.78]].map(p=>new THREE.Vector2(...p)),16);
  mesh(art,bell,goldTrim,[0,.64,-.048]);ring(.715,.535,.07,russet);o(0,.59,-.05,.098,.108,.098,wood);
  line([0,1.43,-.045],[0,1.84,-.045],.035,wood);break;
 }
 case 11: { // Broad glazed vault plus narrow adjoining vault.
  for(const [x,r,y] of [[-.30,.54,.81],[.49,.30,.67]]){
   b(x,y*.5-.003,-.04,r*2,.75,1.17,glass);
   const shell=[];for(let j=0;j<=12;j++){const t=Math.PI*j/12;shell.push([x+r*Math.cos(t),y+r*Math.sin(t)]);}
   extrude(shell,1.18,glass,-.64);
   for(const z of [-.66,.568]) for(let j=0;j<12;j++){
    const p=k=>[x+(r+.016)*Math.cos(Math.PI*k/12),y+(r+.016)*Math.sin(Math.PI*k/12),z];
    line(p(j),p(j+1),.025,a);
   }
   b(x,.565,.567,r*1.99,.045,.035,a);b(x,.571,.571,.042,.84,.04,a);
  }
  break;
 }
 case 12: { // Satellite reflector on an off-axis tall service mast.
  const d=color(0xbe9859);
  ring(.24,.60,.08,stone);
  for(const x of [-.26,.26]){
   line([x,.29,.39],[0,1.27,-.05],.068,a);
   line([x,.29,-.39],[0,1.27,-.05],.065,a);
  }
  const dish=new THREE.Group();art.add(dish);
  dish.position.set(.035,1.51,-.05);dish.rotation.set(.72,0,-.37);
  const radial=new THREE.LatheGeometry([[0,-.20],[.18,-.18],[.37,-.11],[.55,.003],[.70,.16],[.715,.19],[.69,.20],[.58,.12],[.38,.018],[.17,-.065],[0,-.074]].map(p=>new THREE.Vector2(...p)),24);
  mesh(dish,radial,cream);for(const s of [-1,1])for(const v of [-1,1])timber(dish,[s*.44,.125,v*.44],[0,.49,0],.022,wood);
  oval(dish,0,.49,0,.090,.111,.09,goldTrim);line([.04,.31,.04],[.04,1.50,.04],.053,d);break;
 }
 case 13: { // Long sloped amphitheater roof, open stair theater below.
  for(let j=0;j<5;j++){
   b(0,.21+j*.077,.43-j*.117,1.38-j*.11,.10,.15,j%2?stone:wood);
  }
  for(const x of [-.68,.68]){
   line([x,.19,-.61],[x,1.96,-.56],.041,dark);
   line([x,.22,.48],[x,.92,.47],.038,wood);
   line([x,1.96,-.56],[x,.92,.47],.044,a);
  }
  const cap=new THREE.Group();cap.position.set(0,1.43,-.05);cap.rotation.x=.790;art.add(cap);
  cub(cap,0,0,0,1.69,.12,1.58,a);
  for(let i=-3;i<=3;i++)cub(cap,i*.232,.074,0,.059,.045,1.56,cream);
  b(0,.97,-.608,1.19,1.18,.125,dark);
  b(0,1.109,-.538,.84,.47,.030,teal);
  for(const x of [-.23,0,.23])b(x,1.109,-.517,.11,.36,.016,goldTrim);
  break;
 }
 }
 return art;
}
