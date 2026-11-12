export const toWorld = ([x,y,z=0]) => [x,z,-y];
export function dijkstra(nodes,edges,start,goal){
 const by=new Map(nodes.map(n=>[n.id,n])),dist=new Map([[start,0]]),prev=new Map(),open=new Set(nodes.map(n=>n.id));
 while(open.size){let u=null,best=Infinity;for(const id of open)if((dist.get(id)??Infinity)<best){u=id;best=dist.get(id);}if(u===null)break;open.delete(u);if(u===goal)break;
 for(const [a,b] of edges){const v=a===u?b:b===u?a:null;if(v===null||!open.has(v)||!by.has(v))continue;const p=by.get(u).p,q=by.get(v).p;const nd=best+Math.hypot(...p.map((x,i)=>x-q[i]));if(nd<(dist.get(v)??Infinity)){dist.set(v,nd);prev.set(v,u);}}
 }if(!dist.has(goal))return [];const path=[goal];while(path[0]!==start){if(!prev.has(path[0]))return [];path.unshift(prev.get(path[0]));}return path;
}
export function circleBlocked(x,z,obstacles,radius=.38){return obstacles.some(o=>Math.hypot(x-o.x,z+o.y)<o.r+radius);}
export class SelectionGate{constructor(){this.id=0;this.controller=null;}next(){this.controller?.abort();this.controller=new AbortController();return {id:++this.id,signal:this.controller.signal};}current(id){return id===this.id;}}
