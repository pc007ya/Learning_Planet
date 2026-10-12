/** Reading guides mark actual regions of the formal art; no people/props are redrawn. */
export type SnowReadingRegion={id:string;x:number;y:number;w:number;h:number;kind?:'draft'};
const r=(id:string,x:number,y:number,w:number,h:number,kind?:'draft'):SnowReadingRegion=>({id,x,y,w,h,...(kind?{kind}:{})});
export const snowReadingRegions:Record<number,SnowReadingRegion[]>={
 2:[r('closed-crates',12,63,24,32),r('carried-basket',93,51,14,25),r('bell-tower',34,25,18,43)],
 3:[r('apples-on-tree',85,28,24,30),r('grape-vines',13,39,18,42)],
 4:[r('ripe-apple',56,48,13,20),r('green-apples-stay',85,18,22,25),r('apple-basket',56,61,30,22)],
 5:[r('loaded-cart',58,58,42,44),r('storehouse',93,42,14,48)],
 6:[r('grape-basket',39,60,26,27),r('adult-receives-basket',57,49,25,24),r('adult-workshop',85,38,20,47)],
 7:[r('adult-grape-press',17,43,28,47),r('adult-wine-barrel',46,56,28,43),r('gail-juice-bowl',80,64,20,22)],
 8:[r('fruit-basket-one',34,65,34,25),r('fruit-basket-two',69,66,35,24)],
 9:[r('adult-cuts-slices',84,57,24,18),r('ready-slice-tray',34,69,45,28),r('rows-for-drying',65,79,36,32)],
 10:[r('filled-jars',55,68,35,26),r('adult-closes-lid',80,56,20,22),r('gail-checks-jar',26,60,15,28)],
 11:[r('light-jar',64,38,16,20),r('lower-jar-row',80,60,31,29),r('clear-walkway',38,84,34,22)],
 12:[r('door-frame',61,41,18,56),r('window-gap',83,43,16,26,'draft')],
 13:[r('adult-wood-stack',91,46,19,38),r('fallen-wood-piece',79,88,18,11),r('safe-distance-space',48,71,17,30)],
 14:[r('nearly-empty-shelf',86,48,26,50),r('gail-asking-hand',45,55,17,20),r('neighbor-response',68,47,20,22)],
 15:[r('shared-fruit-basket',48,53,28,24),r('sealed-food-jars',88,40,21,39),r('neighbor-receives-food',66,47,22,25)],
 16:[r('stored-food',9,58,16,37),r('secure-door',24,43,16,30),r('clear-neighbor-route',59,84,29,23)],
 18:[r('saved-food-shelves',88,38,23,61),r('older-neighbor-included',70,55,24,63),r('neighbors-together',45,60,36,69)],
 19:[r('familiar-bedroom',16,45,25,43),r('quiet-window-snowflake',80,70,13,19),r('window-looking-ahead',83,34,25,45)]
};
/** Each choice follows the actual narrated words across A/B/C, rather than guessing the level. */
export function snowNarrationRegions(page:number,text:string):SnowReadingRegion[]{
 const all=snowReadingRegions[page];if(!all)return [];
 switch(page){
  case 2:return /square|reaches/i.test(text)?[all[2]]:all.slice(0,2);
  case 3:return /grapes|fruit|orchard/i.test(text)?all:[all[0]];
  case 4:return /green/i.test(text)?all.slice(0,2):/basket|lower|place/i.test(text)?[all[0],all[2]]:[all[0]];
  case 5:return /storehouse|store/i.test(text)?all:[all[0]];
  case 6:return /grown|wine-making/i.test(text)?all.slice(1):/give|pass|adults/i.test(text)?all.slice(0,2):[all[0]];
  case 7:return /wine/i.test(text)&&/juice/i.test(text)?all:/juice|Gail/i.test(text)?[all[2]]:all.slice(0,2);
  case 8:return all; // The artwork does not label which basket is for today/winter.
  case 9:return /adult|cuts/i.test(text)?[all[0]]:all.slice(1);
  case 10:return /Gail|steady/i.test(text)?[all[2]]:/lid|seal/i.test(text)?[all[0],all[1]]:[all[0]];
  case 11:return /walkway|box|blocks/i.test(text)?[all[2]]:/low|between|shelf/i.test(text)?all.slice(0,2):[all[0]];
  case 12:return /gap|air|draft/i.test(text)?[all[1]]:all;
  case 13:return /Gail|distance|away/i.test(text)?all.slice(1):[all[0]];
  case 14:return /asks|plan/i.test(text)?all.slice(1):/tells/i.test(text)?[all[1]]:[all[0]];
  case 15:return /thanks/i.test(text)?[all[2]]:/jars/i.test(text)?all:[all[0],all[2]];
  case 16:return all;
  case 18:return /older|forgotten|together/i.test(text)?all.slice(1):[all[0],all[2]];
  case 19:return /hopes|again|after/i.test(text)?[all[2]]:/snowflake|window/i.test(text)?[all[1]]:[all[0]];
  default:return all;
 }
}
