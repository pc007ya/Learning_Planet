export type ObjectSpec={id:string;word:string;x:number;y:number;w:number;h:number;kind?:'star'|'girl'|'cat'|'ladder';sprite?:{sheet:string;cell:number;columns:number;clip?:string;rect?:[number,number,number,number];size?:number|[number,number]};image?:string};
export type StoryPage={title:string;scene:string;lines:string[];words:string[];objects:string[];mission:{type:'find'|'tap'|'follow'|'drag'|'sequence';prompt:string;hint:string;answer:string;target?:string;steps?:string[]};action:string;star?:[number,number];placements?:Record<string,Partial<ObjectSpec>>};
export type SceneSpec={name:string;caption:string;alt:string;sheet?:string;cell?:number};
export const scenes:Record<string,SceneSpec>={
 room:{name:'Gail的房間',caption:'GAIL’S BEDROOM',alt:'星空窗戶、床和溫暖的檯燈'},
 garden:{name:'月光花園',caption:'THE MOONLIT GARDEN',alt:'月光下的花園，有樹、花、橋和河流'},
 forest:{name:'螢火蟲森林',caption:'THE FIREFLY FOREST',alt:'發光的螢火蟲、木路牌、紅色蘑菇與森林小徑'},
 pond:{name:'睡蓮池塘',caption:'THE LILY POND',alt:'月光池塘裡的小鴨、粉紅睡蓮、荷葉與岸邊石頭'},
 orchard:{name:'月光果園',caption:'THE APPLE ORCHARD',alt:'紅蘋果掛在樹上，樹下有藤編籃子和燈籠'},
 windmill:{name:'風車草地',caption:'THE WINDMILL MEADOW',alt:'有藍色門的石造風車、白色雛菊與草地圍欄'},
 hill:{name:'星空山丘',caption:'THE STARLIGHT HILL',alt:'山丘上的黃銅望遠鏡、野餐毯與星空月亮'}
};
export const objects:Record<string,ObjectSpec>={
 bed:{id:'bed',word:'bed',x:28,y:59,w:43,h:37},window:{id:'window',word:'window',x:53,y:24,w:25,h:32},lamp:{id:'lamp',word:'lamp',x:75,y:37,w:9,h:17},table:{id:'table',word:'table',x:77,y:53,w:13,h:20},book:{id:'book',word:'book',x:49,y:77,w:13,h:10},
 star:{id:'star',word:'star',x:52,y:30,w:10,h:15,kind:'star'},gail:{id:'gail',word:'Gail',x:90,y:72,w:19,h:46,kind:'girl'},
 flower:{id:'flower',word:'flower',x:13,y:78,w:21,h:19},tree:{id:'tree',word:'tree',x:83,y:34,w:22,h:42},grass:{id:'grass',word:'grass',x:52,y:81,w:23,h:12},bridge:{id:'bridge',word:'bridge',x:27,y:51,w:22,h:17},river:{id:'river',word:'river',x:15,y:62,w:20,h:12},moon:{id:'moon',word:'moon',x:19,y:12,w:12,h:19},home:{id:'home',word:'home',x:46,y:32,w:15,h:20},cat:{id:'cat',word:'cat',x:74,y:68,w:12,h:20,kind:'cat'},ladder:{id:'ladder',word:'ladder',x:38,y:73,w:13,h:29,kind:'ladder'},sky:{id:'sky',word:'sky',x:48,y:12,w:20,h:18},
 firefly:{id:'firefly',word:'firefly',x:49,y:18,w:12,h:16},sign:{id:'sign',word:'sign',x:25,y:41,w:22,h:14},mushroom:{id:'mushroom',word:'mushroom',x:25,y:73,w:22,h:24},path:{id:'path',word:'path',x:42,y:91,w:21,h:12},
 duck:{id:'duck',word:'duck',x:33,y:45,w:11,h:13},lily:{id:'lily',word:'lily',x:60,y:55,w:17,h:16},rock:{id:'rock',word:'rock',x:28,y:72,w:14,h:11},water:{id:'water',word:'water',x:51,y:35,w:15,h:10},
 apple:{id:'apple',word:'apple',x:29,y:33,w:10,h:13},basket:{id:'basket',word:'basket',x:48,y:68,w:19,h:25},lantern:{id:'lantern',word:'lantern',x:74,y:40,w:8,h:15},
 windmill:{id:'windmill',word:'windmill',x:33,y:25,w:29,h:39},door:{id:'door',word:'door',x:33,y:52,w:9,h:15},daisy:{id:'daisy',word:'daisy',x:7,y:76,w:9,h:11},fence:{id:'fence',word:'fence',x:61,y:56,w:19,h:9},
 telescope:{id:'telescope',word:'telescope',x:27,y:40,w:24,h:17},blanket:{id:'blanket',word:'blanket',x:47,y:80,w:28,h:16},hillMoon:{id:'hillMoon',word:'moon',x:25,y:16,w:17,h:23}

};
export const pages:StoryPage[]=[
 {title:'The dark window',scene:'room',lines:['Gail cannot sleep.','She looks out of the window.','Where is her little star?'],words:['bed','window','lamp'],objects:['bed','window','lamp','table','book','gail'],mission:{type:'find',prompt:'Can you find the window?',hint:'找找看，Gail從哪裡看天空？',answer:'window'},action:'window'},
 {title:'A little visitor',scene:'room',lines:['A little star flies into the room.','It lands on the bed.','“Hello, little star!” says Gail.'],words:['star','bed','room'],objects:['bed','window','lamp','star','gail'],star:[36,46],mission:{type:'tap',prompt:'Tap the star on the bed.',hint:'點點床上的小星星。',answer:'star'},action:'shine'},
 {title:'Follow the light',scene:'room',lines:['The star flies up.','It flies out of the window.','“Wait for me!” says Gail.'],words:['up','out','window'],objects:['bed','window','star','gail'],star:[37,49],mission:{type:'follow',prompt:'Follow the star. Tap it three times.',hint:'點小星星三次，跟著它往窗外飛。',answer:'star'},action:'fly'},
 {title:'The moonlit garden',scene:'garden',lines:['Gail walks into the garden.','She sees a pink flower.','The grass is soft.'],words:['flower','grass','walk'],objects:['flower','grass','tree','moon','gail'],mission:{type:'find',prompt:'Find the pink flower.',hint:'找出粉紅色的花。',answer:'flower'},action:'flower'},
 {title:'A new friend',scene:'garden',lines:['A little cat sits under the tree.','“Can you help me?” asks Gail.','The cat looks up.'],words:['cat','under','tree'],objects:['tree','cat','flower','gail'],mission:{type:'find',prompt:'Who is under the tree?',hint:'誰在樹下呢？直接點牠。',answer:'cat'},action:'cat'},
 {title:'Over the bridge',scene:'garden',lines:['Gail sees a bridge.','The river runs under it.','She walks over the bridge.'],words:['bridge','river','over'],objects:['bridge','river','tree','moon','gail'],mission:{type:'find',prompt:'Find the bridge over the river.',hint:'找找河流上面的橋。',answer:'bridge'},action:'cross'},
 {title:'High in the tree',scene:'garden',lines:['The star is high in the tree.','“Help me!” says the star.','Gail has an idea.'],words:['high','help','star'],objects:['star','tree','cat','gail'],star:[81,22],mission:{type:'tap',prompt:'Find the star high in the tree.',hint:'往高處看，小星星在樹上。',answer:'star'},action:'shine'},
 {title:'A little help',scene:'garden',lines:['Gail finds a ladder.','She puts it next to the tree.','The cat climbs up to help.'],words:['ladder','climb','help'],objects:['ladder','tree','cat','star','gail'],star:[81,22],mission:{type:'drag',prompt:'Put the ladder next to the tree.',hint:'拖梯子到樹旁；也可以先點梯子，再點樹。',answer:'ladder',target:'tree'},action:'climb'},
 {title:'Back to the sky',scene:'garden',lines:['The little star is free!','It flies back into the sky.','“Thank you, my friends!”'],words:['sky','fly','friend'],objects:['star','sky','tree','cat','gail'],star:[64,52],mission:{type:'drag',prompt:'Help the star fly into the sky.',hint:'把小星星拖回天空；或先點星星，再點天空。',answer:'star',target:'sky'},action:'sky'},
 {title:'Lights in the forest',scene:'forest',lines:['Gail walks home through the forest.','A firefly lights the path.','She sees a sign and a mushroom.'],words:['firefly','path','mushroom'],objects:['firefly','sign','mushroom','path','gail'],mission:{type:'sequence',prompt:'Tap the sign, then the firefly.',hint:'先點木路牌，再點發光的螢火蟲。',answer:'firefly',steps:['sign','firefly']},action:'firefly'},
 {title:'A duck on the pond',scene:'pond',lines:['Gail stops by a pond.','A yellow duck swims on the water.','A pink lily floats nearby.'],words:['duck','water','lily'],objects:['duck','water','lily','rock','gail'],mission:{type:'find',prompt:'Find the yellow duck on the water.',hint:'找出水面上的黃色小鴨。',answer:'duck'},action:'duck'},
 {title:'Apples in the moonlight',scene:'orchard',lines:['Gail walks into an orchard.','Red apples hang in a tree.','A basket sits under the tree.'],words:['apple','basket','under'],objects:['apple','basket','lantern','gail'],mission:{type:'sequence',prompt:'Tap the apple, then the basket.',hint:'先點樹上的紅蘋果，再點樹下的籃子。',answer:'basket',steps:['apple','basket']},action:'basket'},
 {title:'The blue door',scene:'windmill',lines:['Gail sees a tall windmill.','It has a little blue door.','White flowers grow by the path.'],words:['windmill','door','white'],objects:['windmill','door','daisy','fence','gail'],mission:{type:'find',prompt:'Can you find the blue door?',hint:'找出風車下面的藍色小門。',answer:'door'},action:'door'},
 {title:'One last look',scene:'hill',lines:['Gail looks through a telescope.','She sees the moon and her little star.','The star shines above the hill.'],words:['telescope','moon','above'],objects:['telescope','hillMoon','blanket','star','gail'],star:[65,23],mission:{type:'sequence',prompt:'Tap the telescope, the moon, then the star.',hint:'依序點望遠鏡、月亮、小星星。',answer:'star',steps:['telescope','hillMoon','star']},action:'shine'},
 {title:'Good night, little star',scene:'room',lines:['Gail is home.','She puts her book on the table.','She gets into bed.','“Good night, little star.”'],words:['home','book','table','sleep'],objects:['book','table','bed','window','lamp','gail'],mission:{type:'sequence',prompt:'Tap the book, the table, then the bed.',hint:'依序點書、桌子、床，陪Gail說晚安。',answer:'bed',steps:['book','table','bed']},action:'sleep'}
];
export type Progress={page:number;stars:number[];words:string[]};
export function parseProgress(raw:string|null,count=pages.length):Progress{try{const p=JSON.parse(raw||'{}');return {page:Number.isInteger(p.page)?Math.max(0,Math.min(count-1,p.page)):0,stars:Array.isArray(p.stars)?[...new Set<number>(p.stars.filter((n:unknown)=>typeof n==='number'&&Number.isInteger(n)&&n>=0&&n<count))]:[],words:Array.isArray(p.words)?[...new Set<string>(p.words.filter((w:unknown)=>typeof w==='string'&&w.length<30).map((w:string)=>/^yuyu$/i.test(w)?'Gail':w))]:[]};}catch{return {page:0,stars:[],words:[]};}}
export function dropMatches(x:number,y:number,target:ObjectSpec){return Math.abs(x-target.x)<=target.w/2+5&&Math.abs(y-target.y)<=target.h/2+5;}

/** V1 had ten pages. Its last page is now the fifteenth page. */
export function migrateV1Progress(raw:string|null):Progress{
 const old=parseProgress(raw);
 return {...old,page:old.page===9?pages.length-1:Math.min(old.page,8),stars:old.stars.filter(n=>n<10).map(n=>n===9?pages.length-1:n)};
}
