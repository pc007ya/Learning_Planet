import * as T from 'three';

/** Curved, tapering tubes are shared by the living stem, petioles and branching roots. */
export function taperedPlantTube(curve:T.CatmullRomCurve3,radius:number,tipRadius:number,material:T.Material,segments=28){
 const frames=curve.computeFrenetFrames(segments,false),positions:number[]=[],uv:number[]=[],indices:number[]=[];const sides=8;
 for(let i=0;i<=segments;i++){const t=i/segments,p=curve.getPointAt(t),r=T.MathUtils.lerp(radius,tipRadius,Math.pow(t,.8));for(let j=0;j<=sides;j++){const a=j/sides*Math.PI*2,v=p.clone().addScaledVector(frames.normals[i],Math.cos(a)*r).addScaledVector(frames.binormals[i],Math.sin(a)*r);positions.push(v.x,v.y,v.z);uv.push(t,j/sides);}}
 for(let i=0;i<segments;i++)for(let j=0;j<sides;j++){const a=i*(sides+1)+j,b=a+sides+1;indices.push(a,b,a+1,a+1,b,b+1);}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return new T.Mesh(g,material);
}

// An ovate blade: broad rounded shoulders, a narrow base, a drawn-out tip,
// raised midrib and gently curled margins. Veins sample this same surface.
export function leafSurface(length:number,width:number,t:number,across:number){
 const shape=Math.pow(Math.sin(Math.PI*t),.72)*(1.16-.48*t);
 const margin=1+.025*Math.sin(t*Math.PI*14)*Math.pow(Math.abs(across),5);
 const x=length*t,z=width*shape*across*margin;
 const y=.19*Math.sin(Math.PI*t)-.065*t*t-.075*across*across*Math.sin(Math.PI*t)+.035*across*Math.sin(t*Math.PI*1.6)*Math.sin(Math.PI*t);
 return new T.Vector3(x,y,z);
}
export function organicLeafGeometry(length:number,width:number){
 const positions:number[]=[],uv:number[]=[],colors:number[]=[],indices:number[]=[];const rows=28,cols=12,count=(rows+1)*(cols+1);
 for(let layer=0;layer<2;layer++)for(let i=0;i<=rows;i++)for(let j=0;j<=cols;j++){const t=i/rows,a=j/cols*2-1,p=leafSurface(length,width,t,a);p.y+=(layer===0?1:-1)*.006*Math.sin(Math.PI*t);positions.push(p.x,p.y,p.z);uv.push(t,j/cols);const v=(layer===0?1:.83)*(1-.12*Math.abs(a)+.025*Math.sin(t*43+a*19));colors.push(v*.90,v,v*.83);}
 for(let i=0;i<rows;i++)for(let j=0;j<cols;j++){const a=i*(cols+1)+j,b=a+cols+1;indices.push(a,a+1,b,a+1,b+1,b);indices.push(a+count,b+count,a+1+count,a+1+count,b+count,b+1+count);}
 for(let i=0;i<rows;i++)for(const edge of [0,cols]){const a=i*(cols+1)+edge,b=a+cols+1;indices.push(a,b,a+count,b,b+count,a+count);}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setAttribute('color',new T.Float32BufferAttribute(colors,3));g.setIndex(indices);g.computeVertexNormals();return g;
}
export function addLeafVeins(parent:T.Group,length:number,width:number,material:T.Material){
 const main=Array.from({length:9},(_,i)=>leafSurface(length,width,i/8,0).add(new T.Vector3(0,.009,0)));
 parent.add(taperedPlantTube(new T.CatmullRomCurve3(main),.013,.002,material,24));
 for(let i=1;i<7;i++)for(const side of [-1,1]){const t=i/8;const points=[leafSurface(length,width,t,0),leafSurface(length,width,Math.min(.98,t+.065),side*.45),leafSurface(length,width,Math.min(.99,t+.12),side*.94)].map(p=>p.add(new T.Vector3(0,.008,0)));parent.add(taperedPlantTube(new T.CatmullRomCurve3(points),.0045,.001,material,12));
  // Fine veinlets join side ribs; restrained contrast avoids a white wire skeleton.
  if(i<6)for(const a of [.42,.69]){const start=leafSurface(length,width,t+.08,side*a),end=leafSurface(length,width,t+.16,side*Math.min(.94,a+.12));start.y+=.008;end.y+=.008;parent.add(taperedPlantTube(new T.CatmullRomCurve3([start,start.clone().lerp(end,.5),end]),.002,.0008,material,6));}
 }
}
