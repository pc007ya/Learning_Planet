// Presentation-only collision avoidance. Course world positions never move.
export function artActorReserve(projection,width,height,padding=12){
 const body=projection?.actorBounds;
 if(body){
  if(![body.left,body.right,body.top,body.bottom].every(Number.isFinite))return null;
  if(body.right<=0||body.left>=1||body.bottom<=0||body.top>=1)return null;
  return {left:Math.max(0,body.left*width-padding),right:Math.min(width,body.right*width+padding),top:Math.max(0,body.top*height-padding),bottom:Math.min(height,body.bottom*height+padding)};
 }
 // Older test/renderer adapters may provide only the actor centre. This fallback
 // also applies to desktop, overview and manual camera modes, never only follow.
 if(projection&&'actorBounds' in projection)return null;
 const point=projection?.bodyFocus;
 return point?.length===2&&point.every(Number.isFinite)?{left:point[0]*width-36,right:point[0]*width+36,top:point[1]*height-50,bottom:point[1]*height+50}:null;
}

export function measureArtLabel(element){
 const button=element?.getBoundingClientRect?.();
 if(!button||![button.width,button.height].every(Number.isFinite)||button.width<=0||button.height<=0)return null;
 const star=element.querySelector?.('.math-planet-near-difficulty')?.getBoundingClientRect();
 const outward=value=>Math.ceil(value-.001);
 return {buttonWidth:outward(button.width),width:outward(Math.max(button.width,star?.width||0)),height:outward(button.height),extra:outward(Math.max(0,star?button.top-star.top:0))};
}
export function arrangeArtLabels(input,width,height,reserved=[]){
 const gap=9,top=60,bottom=height-12,placed=[];
 const sorted=[...input].sort((a,b)=>Number(!!b.nearby)-Number(!!a.nearby)||Number(!!b.selected)-Number(!!a.selected)||a.y-b.y||a.id.localeCompare(b.id));
 for(const item of sorted){
  const w=Math.max(item.width||104,item.nearby?112:0),h=item.height||64,extra=item.extra??(item.nearby?64:0);
  if(w>width-18||h+extra>bottom-top)continue;
  const clampX=x=>Math.max(w/2+9,Math.min(width-w/2-9,x));
  const clampY=y=>Math.max(top+h+extra,Math.min(bottom,y));
  let best=null;
  const vertical=[...Array.from({length:21},(_,i)=>-280+i*28),top+h+extra-item.y,bottom-item.y,...reserved.flatMap(r=>[r.top-gap-1-item.y,r.bottom+gap+h+extra+1-item.y])];
  for(const dy of vertical)for(const dx of [0,-28,28,-56,56,-84,84,...reserved.flatMap(r=>[r.right+gap+w/2+1-item.x,r.left-gap-w/2-1-item.x])]){
   const x=clampX(item.x+dx),y=clampY(item.y+dy),box={left:x-w/2,right:x+w/2,top:y-h-extra,bottom:y};
   const overlap=placed.reduce((sum,p)=>sum+(box.right+gap>p.box.left&&box.left-gap<p.box.right&&box.bottom+gap>p.box.top&&box.top-gap<p.box.bottom?1:0),0);
   const blocked=reserved.some(r=>box.right+gap>r.left&&box.left-gap<r.right&&box.bottom+gap>r.top&&box.top-gap<r.bottom);
   const score=Number(blocked)*100000000+overlap*1000000+(x-item.x)**2*1.2+(y-item.y)**2;
   if(!best||score<best.score)best={...item,x,y,width:w,height:h,box,score,blocked,overlap};
  }
  // If a compact viewport has no free slot, keep the lower-priority entry in the catalog.
  if(best&&!best.blocked&&best.overlap===0){
   const buttonWidth=item.buttonWidth||item.width||104;
   best.leader={from:[item.x,item.y],to:[Math.max(best.x-buttonWidth/2,Math.min(best.x+buttonWidth/2,item.x)),Math.max(best.y-h,Math.min(best.y,item.y))]};
   placed.push(best);
  }
 }
 return new Map(placed.map(item=>[item.id,item]));
}
