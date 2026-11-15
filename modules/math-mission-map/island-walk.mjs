export const ISLAND_WALK_SPEED=2.4, ISLAND_CHARACTER_SCALE=.52, ISLAND_WALK_STRIDE=1.2*ISLAND_CHARACTER_SCALE;
/** Conservative feet clearance on visible island decks and real bridges. */
export function createIslandWalk(anchors) {
 const step=.18, radius=1.25, bridgeHalf=.73;
 const obstacles=anchors.flatMap((a,i)=>[[-.88,-.63,1],[-1.14,-.27,.65],[.99,.51,.72]].map(([x,z,s])=>{const t=.18+(i%3)*.22;return{x:a.x+x*Math.cos(t)+z*Math.sin(t),z:a.z-x*Math.sin(t)+z*Math.cos(t),r:.28*s+.16};}));
 const segmentDistance=(p,a,b)=>{const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz||1)));return Math.hypot(p.x-a.x-t*dx,p.z-a.z-t*dz)};
 const safe=p=>Number.isFinite(p.x)&&Number.isFinite(p.z)&&(anchors.some(a=>Math.hypot(p.x-a.x,p.z-a.z)<=radius)||anchors.some((a,i)=>i&&segmentDistance(p,anchors[i-1],a)<=bridgeHalf))&&!obstacles.some(o=>Math.hypot(p.x-o.x,p.z-o.z)<o.r);
 const clear=(a,b)=>{const n=Math.ceil(Math.hypot(a.x-b.x,a.z-b.z)/.045);for(let i=0;i<=n;i++){const t=n?i/n:0;if(!safe({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t}))return false}return true};
 const nodes=new Map();const key=(x,z)=>x+','+z;
 const minX=Math.floor((Math.min(...anchors.map(a=>a.x))-1.3)/step),maxX=Math.ceil((Math.max(...anchors.map(a=>a.x))+1.3)/step),minZ=Math.floor((Math.min(...anchors.map(a=>a.z))-1.3)/step),maxZ=Math.ceil((Math.max(...anchors.map(a=>a.z))+1.3)/step);
 for(let x=minX;x<=maxX;x++)for(let z=minZ;z<=maxZ;z++){const p={x:x*step,z:z*step,gx:x,gz:z};if(safe(p))nodes.set(key(x,z),p)}
 function nearest(p){let best=null,d=Infinity;for(const n of nodes.values()){const v=Math.hypot(n.x-p.x,n.z-p.z);if(v<d&&clear(p,n)){best=n;d=v}}return best}
 function path(from,to){if(!safe(from)||!safe(to))return null;if(clear(from,to))return[to];const a=nearest(from),b=nearest(to);if(!a||!b)return null;const open=[a],cost=new Map([[a,0]]),prev=new Map(),closed=new Set();
 while(open.length){open.sort((x,y)=>(cost.get(x)+Math.hypot(x.x-b.x,x.z-b.z))-(cost.get(y)+Math.hypot(y.x-b.x,y.z-b.z)));const n=open.shift();if(n===b){const out=[to];for(let p=b;p;p=prev.get(p))out.unshift({x:p.x,z:p.z});return out}closed.add(n);for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++){if(!dx&&!dz)continue;const v=nodes.get(key(n.gx+dx,n.gz+dz));if(!v||closed.has(v)||!clear(n,v))continue;const c=cost.get(n)+Math.hypot(dx,dz)*step;if(c<(cost.get(v)??Infinity)){cost.set(v,c);prev.set(v,n);if(!open.includes(v))open.push(v)}}}return null;
 }
 return{safe,clear,path,obstacles};
}
