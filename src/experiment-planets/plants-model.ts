/** Qualitative plant transport model. All outputs are dimensionless indices, not agronomic predictions. */
export type PlantLight='enough'|'shade'|'strong';
export type PlantWater='enough'|'dry'|'flood';
export interface PlantConditions {light:PlantLight;water:PlantWater;soil:'rich'|'poor';air:'normal'|'low';days:'one'|'seven'}
export const PLANT_DEFAULTS:PlantConditions={light:'enough',water:'enough',soil:'rich',air:'normal',days:'one'};
const clamp=(v:number)=>Math.max(0,Math.min(1,v));
export function plantBalance(c:PlantConditions,hydration?:number){
 const rootOxygen=c.water==='flood'?.38:1;
 const soilWater=c.water==='dry'?.12:c.water==='flood'?1:.78;
 const light=c.light==='shade'?.20:c.light==='strong'?.96:.9;
 const heatDemand=c.light==='strong'?1.35:1;
 const targetHydration=clamp((soilWater*.96*rootOxygen)/(c.light==='shade'?.86:heatDemand));
 const turgor=clamp(hydration??targetHydration);
 const stomata=clamp((turgor-.10)/.65);
 const waterSupply=clamp((turgor-.08)/.62);
 const carbonDioxide=c.air==='normal'?1:.2;
 const nutrition=c.soil==='rich'?1:.43;
 const photosynthesis=clamp(Math.min(light,waterSupply,carbonDioxide)*(.74+.26*nutrition));
 const uptake=clamp(soilWater*rootOxygen*(.35+.65*stomata));
 const transpiration=clamp(stomata*(.22+.6*light)*heatDemand);
 const growth=photosynthesis*nutrition*(c.days==='seven'?1:.38);
 return {soilWater,rootOxygen,targetHydration,turgor,stomata,photosynthesis,uptake,transpiration,growth,light,carbonDioxide,nutrition};
}
export function advancePlantHydration(hydration:number,c:PlantConditions,seconds:number){
 if(!Number.isFinite(seconds)||seconds<0)throw new RangeError('示意時間必須為非負有限數');
 const target=plantBalance(c).targetHydration;
 return clamp(target+(clamp(hydration)-target)*Math.exp(-Math.min(30,seconds)*.65));
}
export function plantRecoveryGoal(c:PlantConditions,hydration:number,observedDry:boolean){
 const p=plantBalance(c,hydration);
 if(!observedDry)return {passed:false,message:'先讓植物缺水，觀察葉片下垂和低水分讀數，再試著救回它。'};
 if(c.water==='flood')return {passed:false,message:'土壤積水會讓根部缺氧。把水改成適量，並保持排水。'};
 if(c.water!=='enough')return {passed:false,message:'根部還缺水。給適量的水，看看藍色路徑如何回到葉片。'};
 if(c.light!=='enough'||c.air==='low'||c.soil==='poor')return {passed:false,message:'水已改善，還要有適量光、空氣和土壤養分，才能支持生長。'};
 if(p.turgor<.70)return {passed:false,message:'條件已改善，葉片還在恢復。播放示範時間，等水分指數至少 70。'};
 return {passed:true,message:'救回來了！根吸水、莖運送，葉片的膨壓恢復；這是加速的理想示意。'};
}
