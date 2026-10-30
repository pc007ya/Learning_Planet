import {tideAmplitude,wrap} from '../tides/model';

export const CHALLENGES=[
 {id:'spring',title:'排出大潮',target:'日月近乎一直線，示意潮差至少 2.85。',hint:'移動月球，讓日、地、月排成一直線。'},
 {id:'neap',title:'排出小潮',target:'日月近乎直角，示意潮差不超過 1.14。',hint:'把月球移到太陽方向的直角處；小潮仍有潮汐。'},
 {id:'middle',title:'找出中間潮差',target:'把示意潮差調到 1.90–2.10。',hint:'離開一直線與直角，慢慢拖月球或用方向鍵微調。'}
] as const;
export type ChallengeId=typeof CHALLENGES[number]['id'];
export function judgeChallenge(id:ChallengeId,angle:number,moved:boolean){
 const range=2*tideAmplitude(angle),a=wrap(angle);
 if(!Number.isFinite(a))return {passed:false,range,message:'請先移動月球。'};
 if(!moved)return {passed:false,range,message:'先親手移動月球，再按檢查。示範播放不會代替你完成。'};
 const lineDistance=Math.min(a%180,180-a%180),rightDistance=Math.abs(a%180-90);
 const passed=id==='spring'?lineDistance<=8&&range>=2.85:id==='neap'?rightDistance<=8&&range<=1.14:range>=1.90&&range<=2.10;
 const cause=id==='spring'?'日月近乎一直線，兩者的潮汐效應加強。':id==='neap'?'日月近乎直角，潮差較小，仍有潮汐。':'月球位於一直線與直角之間，潮差也在中間。';
 const retry=id==='spring'?'還沒排成一直線，試著把月球移向太陽方向或相反方向。':id==='neap'?'還沒排成直角，試著把月球移到太陽方向的側邊。':range>2.10?'潮差還偏大，試著更靠近日月直角的位置。':'潮差還偏小，試著更靠近日月一直線的位置。';
 return {passed,range,message:passed?`完成！${cause}`:`目前潮差 ${range.toFixed(2)}。${retry}`};
}
