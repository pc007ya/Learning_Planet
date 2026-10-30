export type Rect={x:number;y:number;width:number;height:number};
export type LabelAnchor={id:string;x:number;y:number;width:number;height:number;handle?:number};
export function intersects(a:Rect,b:Rect,gap=0){return a.x<b.x+b.width+gap&&a.x+a.width+gap>b.x&&a.y<b.y+b.height+gap&&a.y+a.height+gap>b.y;}

// Work in CSS pixels, independently of the 3D scale and camera. Priority order
// keeps the Moon/observer captions closest to their controls, then directions.
export function placeLabels(labels:LabelAnchor[],blocked:Rect[],width:number,height:number,gap=10){
 const occupied=[...blocked],result=new Map<string,Rect>();
 for(const item of labels){
  const {x,y,width:w,height:h}=item,offset=(item.handle||0)+8;
  const candidates:Rect[]=[];
  const add=(cx:number,cy:number)=>candidates.push({x:cx-w/2,y:cy-h/2,width:w,height:h});
  if(!item.handle)add(x,y);
  add(x,y+offset+h/2);add(x,y-offset-h/2);add(x+offset+w/2,y);add(x-offset-w/2,y);
  for(const radius of [24,48,80,112,152])for(const [dx,dy] of [[1,0],[-1,0],[0,-1],[0,1],[1,-1],[-1,-1],[1,1],[-1,1]])add(x+dx*radius,y+dy*radius);
  const fits=(r:Rect)=>r.x>=8&&r.y>=8&&r.x+r.width<=width-8&&r.y+r.height<=height-8&&!occupied.some(b=>intersects(r,b,gap));
  let placed=candidates.find(fits);
  if(!placed){
   let score=Infinity;
   for(let cy=8;cy+h<=height-8;cy+=12)for(let cx=8;cx+w<=width-8;cx+=12){const r={x:cx,y:cy,width:w,height:h};const distance=(cx+w/2-x)**2+(cy+h/2-y)**2;if(distance<score&&fits(r)){placed=r;score=distance;}}
  }
  if(placed){result.set(item.id,placed);occupied.push(placed);}
 }
 return result;
}
