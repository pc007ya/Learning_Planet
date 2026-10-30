/** Original classroom buoyancy model. Units: g, cm³, N; scene heights are scaled. */
export type OceanShape='box'|'sphere'|'capsule'|'boat';
export type OceanSample='wood'|'stone'|'ball'|'neutral'|'submarine'|'boat';
export const OCEAN_SAMPLES={
 wood:{label:'木塊',mass:50,volume:100,color:0xd89d55,shape:'box'},
 stone:{label:'石頭',mass:270,volume:100,color:0x7f8993,shape:'sphere'},
 ball:{label:'充氣球',mass:40,volume:300,color:0xf58066,shape:'sphere'},
 neutral:{label:'密度球',mass:100,volume:100,color:0x9d9cdb,shape:'sphere'},
 submarine:{label:'小潛水艇',mass:100,volume:100,color:0xf7bd40,shape:'capsule'},
 boat:{label:'空心船',mass:35,volume:180,color:0xe4ba7b,shape:'boat'},
} as const;
export const OCEAN_FACTORS:Record<string,number>={light:.7,normal:1,heavy:1.3};
const clamp=(x:number)=>Math.max(0,Math.min(1,x));
/** Exact volume fraction below a horizontal plane for the ideal exterior shape. */
export function immersedVolumeFraction(shape:OceanShape,depthFraction:number){
 const h=clamp(depthFraction);
 if(shape==='box')return h;
 const spherical=h*h*(3-2*h);
 if(shape==='sphere')return spherical;
 if(shape==='capsule'){
  // Horizontal cylinder (r=.35, straight length=.95) plus two hemispherical ends.
  const y=1-2*h;
  const cylinder=(Math.acos(y)-y*Math.sqrt(Math.max(0,1-y*y)))/Math.PI;
  const cylinderPart=.95/(.95+4*.35/3);
  return cylinderPart*cylinder+(1-cylinderPart)*spherical;
 }
 // Sealed tapered hull: width and length both increase linearly with depth.
 // Bottom/top dimensions: 1.65→2.0 and .65→1.15; integral of area is cubic.
 const a=1.65*.65,b=1.65*.5+.35*.65,c=.35*.5;
 return (a*h+b*h*h/2+c*h*h*h/3)/(a+b/2+c/3);
}
export function oceanForces(massG:number,volumeCm3:number,fluidDensity:number,fraction:number){
 if(!(massG>0&&volumeCm3>0&&fluidDensity>0)||![massG,volumeCm3,fluidDensity,fraction].every(Number.isFinite))throw new RangeError('浮力參數必須有效且大於零');
 const displacedCm3=volumeCm3*clamp(fraction),weightN=massG*.00981,buoyantN=fluidDensity*displacedCm3*.00981;
 const ratio=massG/(volumeCm3*fluidDensity);
 return {displacedCm3,weightN,buoyantN,netN:buoyantN-weightN,ratio,tendency:Math.abs(ratio-1)<.005?'neutral':ratio<1?'float':'sink'} as const;
}
export function shapeFractionAt(shape:OceanShape,centerY:number,height:number,surfaceY=1.15){
 if(!(height>0))throw new RangeError('物體高度必須大於零');
 return immersedVolumeFraction(shape,(surfaceY-centerY+height/2)/height);
}
export function equilibriumDepth(shape:OceanShape,ratio:number){
 let low=0,high=1;const target=clamp(ratio);
 for(let i=0;i<48;i++){const mid=(low+high)/2;if(immersedVolumeFraction(shape,mid)<target)low=mid;else high=mid;}
 return (low+high)/2;
}
export type OceanTrial={object:OceanSample;water:string;mass:string;volume:string;fraction:number;weightN:number;buoyantN:number;tendency:string;massG?:number;volumeCm3?:number;fluidDensity?:number;elapsedSeconds?:number};
export function judgeOceanChallenge(trials:readonly OceanTrial[],current:OceanTrial,settled:boolean){
 const setup=current.object==='neutral'&&current.water==='fresh'&&current.mass==='normal';
 const prior=trials.some(t=>t.object==='neutral'&&t.water==='fresh'&&t.mass==='normal'&&t.volume==='light'&&t.tendency==='sink'&&t.fraction>.98);
 if(!setup)return {passed:false,message:'先選密度球、淡水與原來重量，只改體積來比較。'};
 if(!prior)return {passed:false,message:'先把體積縮小，放入水中，等球沉到底再來比較。'};
 if(current.volume!=='heavy')return {passed:false,message:'沉下的紀錄留下了！現在只把體積放大，再放入水中。'};
 if(!settled||current.fraction<=0)return {passed:false,message:'讓球自由浮沉，等水位附近穩定後再檢查。'};
 const balanced=Math.abs(current.buoyantN-current.weightN)<=.04;
 return balanced&&current.fraction<.95?{passed:true,message:'完成！重量沒改，體積變大後能排開更多水，最後浮力與重力平衡。'}:{passed:false,message:'再觀察水線與兩支力箭頭，浮起後兩個力應接近平衡。'};
}
export function advanceOceanBody(input:{shape:OceanShape;mass:number;volume:number;fluid:number;height:number;y:number;velocity:number},dt:number){
 let y=input.y,velocity=input.velocity;const duration=Math.max(0,Math.min(.05,dt));
 for(let i=0;i<4;i++){const sub=duration/4,f=oceanForces(input.mass,input.volume,input.fluid,shapeFractionAt(input.shape,y,input.height));const acceleration=Math.max(-15,Math.min(15,f.netN/(input.mass/1000)));velocity=(velocity+acceleration*sub)*Math.exp(-2.6*sub);y+=velocity*sub;const floor=-2.05+input.height/2;if(y<floor){y=floor;velocity=0;}if(y>2.5){y=2.5;velocity=Math.min(0,velocity);}}
 return {y,velocity};
}
/** A turning point is not equilibrium: near-zero speed alone is insufficient. */
export function oceanRestCondition(netForceN:number,velocity:number,supportedAtFloor:boolean){return Math.abs(velocity)<.02&&(Math.abs(netForceN)<.002||supportedAtFloor);}
