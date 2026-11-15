import {toWorld} from './nav.mjs';
// Preserve authored horizontal routes and all collisions; replace stale nav heights
// with the exact visible mesh surface, then reject any genuinely unsafe edge.
export function groundNavigation(THREE,data,physics){
 const nodes=data.nodes.map(n=>{const [x,,z]=toWorld(n.p),y=physics.floor(x,z);return {...n,p:[n.p[0],n.p[1],y??n.p[2]]};});
 const points=new Map(nodes.map(n=>[n.id,new THREE.Vector3(...toWorld(n.p))]));
 const edges=data.edges.filter(([a,b])=>points.has(a)&&points.has(b)&&physics.lineSafe(points.get(a),points.get(b)));
 return {...data,nodes,edges};
}
