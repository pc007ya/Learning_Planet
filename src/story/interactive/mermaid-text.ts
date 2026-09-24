import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A shell of light",
  "A shell!|It glows.",
  "A shell glows on the rug.|A bubble opens around Gail.",
  "A shell glows in Gail’s familiar room.|A magical bubble surrounds her and carries her toward an underwater garden.",
  "貝殼！|它發光了。",
  "貝殼在地毯上發光。|泡泡在瑜瑜周圍張開。",
  "一枚貝殼在瑜瑜熟悉的房間發光。|魔法泡泡包圍她，帶她前往水底花園。",
  "shell"
 ],
 [
  "Meet the mermaid",
  "A mermaid!|Hello!",
  "Gail meets a mermaid.|She is tidying her garden.",
  "Inside her magical bubble, Gail meets a mermaid named Abby.|Abby is busy arranging everything in her underwater garden.",
  "美人魚！|你好！",
  "瑜瑜遇見美人魚。|她在整理花園。",
  "瑜瑜待在魔法泡泡裡，遇見名叫艾比的美人魚。|艾比正忙著整理水底花園的一切。",
  "mermaid"
 ],
 [
  "The bright reef",
  "A reef!|So many homes.",
  "The reef is full of life.|Small animals live here.",
  "Abby shows Gail the reef beside her garden.|Its many spaces provide homes for small animals.",
  "珊瑚礁！|好多家。",
  "珊瑚礁充滿生命。|小動物住在這裡。",
  "艾比帶瑜瑜看花園旁的珊瑚礁。|許多大大小小的空間，成了小動物的家。",
  "reef"
 ],
 [
  "Coral has visitors",
  "Pink coral.|A fish hides.",
  "A fish swims by the coral.|It hides among the branches.",
  "A little fish slips between the branches of the coral.|Gail watches without touching its delicate home.",
  "粉紅珊瑚。|魚躲起來。",
  "魚游過珊瑚。|牠躲在枝條間。",
  "小魚鑽進珊瑚的枝條之間。|瑜瑜靜靜看著，不碰牠脆弱的家。",
  "coral"
 ],
 [
  "Not tidy enough",
  "Not tidy!|Abby frowns.",
  "Abby wants a tidy garden.|She wants everything in a row.",
  "Abby thinks the garden is not tidy enough.|She wants every shell and plant arranged in perfectly straight rows.",
  "不整齊！|艾比皺眉。",
  "艾比想要整齊的花園。|她想讓每樣東西排一排。",
  "艾比覺得花園還不夠整齊。|她希望每個貝殼和每株植物都排成筆直的行列。",
  "tidy"
 ],
 [
  "Seaweed sways",
  "Seaweed moves.|Leave it here?",
  "The seaweed bends and sways.|Abby thinks it looks messy.",
  "The seaweed bends gently with the water.|Abby thinks its uneven shapes make the garden look messy.",
  "海草在動。|留在這裡嗎？",
  "海草彎彎搖搖。|艾比覺得看起來凌亂。",
  "海草隨著水流輕輕彎動。|艾比覺得這些不整齊的形狀讓花園看起來凌亂。",
  "seaweed messy"
 ],
 [
  "Only smooth sand",
  "Smooth sand.|Nothing here.",
  "Abby clears the sand.|The little places are gone.",
  "Abby moves the seaweed and loose shells away from the sandy patch.|The sand looks smooth, but the little hiding places have disappeared.",
  "平滑的沙。|這裡空了。",
  "艾比清空沙地。|小小的角落不見了。",
  "艾比把沙地上的海草和空貝殼移到旁邊。|沙地看起來平滑，小小的藏身處卻消失了。",
  "sand"
 ],
 [
  "The crab returns",
  "A crab!|Where is my place?",
  "A crab comes back.|Its hiding place is gone.",
  "A small crab returns to the spot beside a shell.|It pauses in the open sand, looking for the place where it used to hide.",
  "螃蟹！|我的地方呢？",
  "螃蟹回來了。|牠的藏身處不見了。",
  "小螃蟹回到貝殼旁的位置。|牠停在空曠沙地上，尋找以前躲藏的地方。",
  "crab"
 ],
 [
  "A turtle looks around",
  "A turtle!|Where is the green?",
  "The turtle looks for seaweed.|The garden has changed.",
  "A turtle swims past and looks around the bare patch.|Abby begins to notice that her tidy garden has become less welcoming.",
  "海龜！|綠色的東西呢？",
  "海龜尋找海草。|花園變了。",
  "海龜游過，四處看著光禿禿的沙地。|艾比開始發現，整齊的花園變得不那麼適合來訪了。",
  "turtle"
 ],
 [
  "They need shelter",
  "They need shelter.|A place to hide.",
  "The animals need shelter.|A bare garden is not enough.",
  "Gail explains that the animals need shelter as well as open space.|A garden can look neat to Abby while losing the places its visitors need.",
  "牠們需要庇護處。|可以躲藏的地方。",
  "動物需要庇護處。|光禿禿的花園不夠。",
  "瑜瑜解釋，動物除了空間，也需要庇護處。|花園在艾比眼裡很整齊，卻可能失去訪客需要的角落。",
  "shelter"
 ],
 [
  "Must it be spotless?",
  "Spotless?|Not every place.",
  "Abby wants it spotless.|Gail looks at the empty sand.",
  "Abby says she wanted a spotless garden, without a single thing out of place.|Gail asks whether looking perfect matters more than being a good home.",
  "一塵不染？|不是每個地方都要。",
  "艾比希望它一塵不染。|瑜瑜看著空空的沙地。",
  "艾比說，她想要一個一塵不染、沒有東西放錯位置的花園。|瑜瑜問，看起來完美，會比成為好家園更重要嗎？",
  "spotless"
 ],
 [
  "Natural is not dirty",
  "Natural things.|Not all dirty.",
  "Seaweed and shells are natural.|They do not make a bad home.",
  "Gail points to the seaweed and shells that belong in this place.|Natural things are not dirty simply because they do not form straight lines.",
  "自然的東西。|不全是髒的。",
  "海草和貝殼是自然的。|它們不會讓家變糟。",
  "瑜瑜指著原本就屬於這裡的海草和貝殼。|自然的東西不會只因為沒排成直線，就變成髒東西。",
  "natural dirty"
 ],
 [
  "Find the litter",
  "A bottle!|That is litter.",
  "A plastic bottle lies nearby.|This litter does not belong.",
  "Gail notices a discarded plastic bottle beside a rock.|This litter is different from the shells and plants that make the reef a home.",
  "瓶子！|那是垃圾。",
  "塑膠瓶躺在附近。|這個垃圾不屬於這裡。",
  "瑜瑜注意到石頭旁有個被丟棄的塑膠瓶。|這種垃圾和讓珊瑚礁成為家園的貝殼、植物不同。",
  "litter"
 ],
 [
  "Clean with care",
  "Keep it clean.|Take the litter.",
  "Abby picks up the bottle.|She keeps the plants in place.",
  "Abby places the discarded bottle in a collection basket.|Keeping the garden clean can mean removing litter while leaving its living parts alone.",
  "保持乾淨。|帶走垃圾。",
  "艾比撿起瓶子。|她讓植物留在原位。",
  "艾比把被丟棄的瓶子放進收集籃。|保持花園乾淨，可以是移除垃圾，同時不去打擾活著的部分。",
  "clean"
 ],
 [
  "Put the brush down",
  "Do not scrub.|Let it be.",
  "Abby puts her brush down.|She will not scrub the coral.",
  "Abby had planned to scrub every surface until it looked the same.|Now she puts down the brush and leaves the delicate coral untouched.",
  "不要刷洗。|讓它留著。",
  "艾比放下刷子。|她不會刷洗珊瑚。",
  "艾比本來打算刷洗每個表面，直到它們看起來一樣。|現在她放下刷子，不再碰脆弱的珊瑚。",
  "scrub"
 ],
 [
  "A habitat for many",
  "A habitat.|A home for many.",
  "The reef is a habitat.|Many animals need this home.",
  "Gail explains that this whole place is a habitat: a home where animals find what they need.|Its different shapes and spaces help different visitors.",
  "棲地。|許多動物的家。",
  "珊瑚礁是棲地。|許多動物需要這個家。",
  "瑜瑜解釋，整個地方是一處棲地，也就是動物找到所需事物的家。|不同的形狀和空間，能幫助不同的訪客。",
  "habitat"
 ],
 [
  "Help protect it",
  "Protect this home.|Give them space.",
  "Abby will protect the reef.|She leaves room for life.",
  "Abby wants to protect the reef instead of controlling every detail.|She returns the moved shells and lets the seaweed fill its old corner again.",
  "保護這個家。|給牠們空間。",
  "艾比會保護珊瑚礁。|她為生命留下空間。",
  "艾比想保護珊瑚礁，不再控制每個細節。|她放回移走的貝殼，讓海草再次回到原本的角落。",
  "protect"
 ],
 [
  "A place to belong",
  "They belong here.|Welcome back!",
  "The crab comes back.|The animals belong here.",
  "The crab finds shelter, and the little fish returns to the coral.|Abby sees that these visitors belong here, even when their home looks uneven.",
  "牠們屬於這裡。|歡迎回來！",
  "螃蟹回來了。|動物屬於這裡。",
  "螃蟹找到庇護處，小魚也回到珊瑚間。|艾比看見，這些訪客屬於這裡，即使牠們的家看起來不整齊。",
  "belong"
 ],
 [
  "A living garden",
  "A little messy.|Full of life!",
  "The garden is not spotless.|It is full of life.",
  "The garden has waving plants and shells in different places again.|Abby smiles: it is a little messy, but it is a welcoming place to live.",
  "有點凌亂。|充滿生命！",
  "花園不是一塵不染。|它充滿生命。",
  "花園又有搖動的植物和散在不同位置的貝殼。|艾比微笑：它有一點凌亂，卻是適合生活的家。",
  "messy"
 ],
 [
  "Back with the shell",
  "My shell.|A lovely home.",
  "Gail is home again.|She remembers the living reef.",
  "The magical bubble brings Gail back to her familiar room.|Beside the glowing shell, she remembers that a good home does not have to look perfect.",
  "我的貝殼。|美好的家。",
  "瑜瑜回家了。|她記得充滿生命的珊瑚礁。",
  "魔法泡泡帶瑜瑜回到熟悉的房間。|在發光的貝殼旁，她記得好家園不必看起來完美。",
  "shell"
 ]
];
export const mermaidTitles=rows.map(r=>r[0]);
export const mermaidWords=rows.map(r=>r[7].split(' '));
export const mermaidText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function mermaidChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
