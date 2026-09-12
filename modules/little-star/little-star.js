const Mc = {
  room: { name: "Gail的房間", caption: "GAIL’S BEDROOM", alt: "星空窗戶、床和溫暖的檯燈" },
  garden: { name: "月光花園", caption: "THE MOONLIT GARDEN", alt: "月光下的花園，有樹、花、橋和河流" },
  forest: { name: "螢火蟲森林", caption: "THE FIREFLY FOREST", alt: "發光的螢火蟲、木路牌、紅色蘑菇與森林小徑" },
  pond: { name: "睡蓮池塘", caption: "THE LILY POND", alt: "月光池塘裡的小鴨、粉紅睡蓮、荷葉與岸邊石頭" },
  orchard: { name: "月光果園", caption: "THE APPLE ORCHARD", alt: "紅蘋果掛在樹上，樹下有藤編籃子和燈籠" },
  windmill: { name: "風車草地", caption: "THE WINDMILL MEADOW", alt: "有藍色門的石造風車、白色雛菊與草地圍欄" },
  hill: { name: "星空山丘", caption: "THE STARLIGHT HILL", alt: "山丘上的黃銅望遠鏡、野餐毯與星空月亮" }
}, Ec = {
  bed: { id: "bed", word: "bed", x: 28, y: 59, w: 43, h: 37 },
  window: { id: "window", word: "window", x: 53, y: 24, w: 25, h: 32 },
  lamp: { id: "lamp", word: "lamp", x: 75, y: 37, w: 9, h: 17 },
  table: { id: "table", word: "table", x: 77, y: 53, w: 13, h: 20 },
  book: { id: "book", word: "book", x: 49, y: 77, w: 13, h: 10 },
  star: { id: "star", word: "star", x: 52, y: 30, w: 10, h: 15, kind: "star" },
  gail: { id: "gail", word: "Gail", x: 90, y: 72, w: 19, h: 46, kind: "girl" },
  flower: { id: "flower", word: "flower", x: 13, y: 78, w: 21, h: 19 },
  tree: { id: "tree", word: "tree", x: 83, y: 34, w: 22, h: 42 },
  grass: { id: "grass", word: "grass", x: 52, y: 81, w: 23, h: 12 },
  bridge: { id: "bridge", word: "bridge", x: 27, y: 51, w: 22, h: 17 },
  river: { id: "river", word: "river", x: 15, y: 62, w: 20, h: 12 },
  moon: { id: "moon", word: "moon", x: 19, y: 12, w: 12, h: 19 },
  home: { id: "home", word: "home", x: 46, y: 32, w: 15, h: 20 },
  cat: { id: "cat", word: "cat", x: 74, y: 68, w: 12, h: 20, kind: "cat" },
  ladder: { id: "ladder", word: "ladder", x: 38, y: 73, w: 13, h: 29, kind: "ladder" },
  sky: { id: "sky", word: "sky", x: 48, y: 12, w: 20, h: 18 },
  firefly: { id: "firefly", word: "firefly", x: 49, y: 18, w: 12, h: 16 },
  sign: { id: "sign", word: "sign", x: 25, y: 41, w: 22, h: 14 },
  mushroom: { id: "mushroom", word: "mushroom", x: 25, y: 73, w: 22, h: 24 },
  path: { id: "path", word: "path", x: 42, y: 91, w: 21, h: 12 },
  duck: { id: "duck", word: "duck", x: 33, y: 45, w: 11, h: 13 },
  lily: { id: "lily", word: "lily", x: 60, y: 55, w: 17, h: 16 },
  rock: { id: "rock", word: "rock", x: 28, y: 72, w: 14, h: 11 },
  water: { id: "water", word: "water", x: 51, y: 35, w: 15, h: 10 },
  apple: { id: "apple", word: "apple", x: 29, y: 33, w: 10, h: 13 },
  basket: { id: "basket", word: "basket", x: 48, y: 68, w: 19, h: 25 },
  lantern: { id: "lantern", word: "lantern", x: 74, y: 40, w: 8, h: 15 },
  windmill: { id: "windmill", word: "windmill", x: 33, y: 25, w: 29, h: 39 },
  door: { id: "door", word: "door", x: 33, y: 52, w: 9, h: 15 },
  daisy: { id: "daisy", word: "daisy", x: 7, y: 76, w: 9, h: 11 },
  fence: { id: "fence", word: "fence", x: 61, y: 56, w: 19, h: 9 },
  telescope: { id: "telescope", word: "telescope", x: 27, y: 40, w: 24, h: 17 },
  blanket: { id: "blanket", word: "blanket", x: 47, y: 80, w: 28, h: 16 },
  hillMoon: { id: "hillMoon", word: "moon", x: 25, y: 16, w: 17, h: 23 }
}, ss = [
  { title: "The dark window", scene: "room", lines: ["Gail cannot sleep.", "She looks out of the window.", "Where is her little star?"], words: ["bed", "window", "lamp"], objects: ["bed", "window", "lamp", "table", "book", "gail"], mission: { type: "find", prompt: "Can you find the window?", hint: "找找看，Gail從哪裡看天空？", answer: "window" }, action: "window" },
  { title: "A little visitor", scene: "room", lines: ["A little star flies into the room.", "It lands on the bed.", "“Hello, little star!” says Gail."], words: ["star", "bed", "room"], objects: ["bed", "window", "lamp", "star", "gail"], star: [36, 46], mission: { type: "tap", prompt: "Tap the star on the bed.", hint: "點點床上的小星星。", answer: "star" }, action: "shine" },
  { title: "Follow the light", scene: "room", lines: ["The star flies up.", "It flies out of the window.", "“Wait for me!” says Gail."], words: ["up", "out", "window"], objects: ["bed", "window", "star", "gail"], star: [37, 49], mission: { type: "follow", prompt: "Follow the star. Tap it three times.", hint: "點小星星三次，跟著它往窗外飛。", answer: "star" }, action: "fly" },
  { title: "The moonlit garden", scene: "garden", lines: ["Gail walks into the garden.", "She sees a pink flower.", "The grass is soft."], words: ["flower", "grass", "walk"], objects: ["flower", "grass", "tree", "moon", "gail"], mission: { type: "find", prompt: "Find the pink flower.", hint: "找出粉紅色的花。", answer: "flower" }, action: "flower" },
  { title: "A new friend", scene: "garden", lines: ["A little cat sits under the tree.", "“Can you help me?” asks Gail.", "The cat looks up."], words: ["cat", "under", "tree"], objects: ["tree", "cat", "flower", "gail"], mission: { type: "find", prompt: "Who is under the tree?", hint: "誰在樹下呢？直接點牠。", answer: "cat" }, action: "cat" },
  { title: "Over the bridge", scene: "garden", lines: ["Gail sees a bridge.", "The river runs under it.", "She walks over the bridge."], words: ["bridge", "river", "over"], objects: ["bridge", "river", "tree", "moon", "gail"], mission: { type: "find", prompt: "Find the bridge over the river.", hint: "找找河流上面的橋。", answer: "bridge" }, action: "cross" },
  { title: "High in the tree", scene: "garden", lines: ["The star is high in the tree.", "“Help me!” says the star.", "Gail has an idea."], words: ["high", "help", "star"], objects: ["star", "tree", "cat", "gail"], star: [81, 22], mission: { type: "tap", prompt: "Find the star high in the tree.", hint: "往高處看，小星星在樹上。", answer: "star" }, action: "shine" },
  { title: "A little help", scene: "garden", lines: ["Gail finds a ladder.", "She puts it next to the tree.", "The cat climbs up to help."], words: ["ladder", "climb", "help"], objects: ["ladder", "tree", "cat", "star", "gail"], star: [81, 22], mission: { type: "drag", prompt: "Put the ladder next to the tree.", hint: "拖梯子到樹旁；也可以先點梯子，再點樹。", answer: "ladder", target: "tree" }, action: "climb" },
  { title: "Back to the sky", scene: "garden", lines: ["The little star is free!", "It flies back into the sky.", "“Thank you, my friends!”"], words: ["sky", "fly", "friend"], objects: ["star", "sky", "tree", "cat", "gail"], star: [64, 52], mission: { type: "drag", prompt: "Help the star fly into the sky.", hint: "把小星星拖回天空；或先點星星，再點天空。", answer: "star", target: "sky" }, action: "sky" },
  { title: "Lights in the forest", scene: "forest", lines: ["Gail walks home through the forest.", "A firefly lights the path.", "She sees a sign and a mushroom."], words: ["firefly", "path", "mushroom"], objects: ["firefly", "sign", "mushroom", "path", "gail"], mission: { type: "sequence", prompt: "Tap the sign, then the firefly.", hint: "先點木路牌，再點發光的螢火蟲。", answer: "firefly", steps: ["sign", "firefly"] }, action: "firefly" },
  { title: "A duck on the pond", scene: "pond", lines: ["Gail stops by a pond.", "A yellow duck swims on the water.", "A pink lily floats nearby."], words: ["duck", "water", "lily"], objects: ["duck", "water", "lily", "rock", "gail"], mission: { type: "find", prompt: "Find the yellow duck on the water.", hint: "找出水面上的黃色小鴨。", answer: "duck" }, action: "duck" },
  { title: "Apples in the moonlight", scene: "orchard", lines: ["Gail walks into an orchard.", "Red apples hang in a tree.", "A basket sits under the tree."], words: ["apple", "basket", "under"], objects: ["apple", "basket", "lantern", "gail"], mission: { type: "sequence", prompt: "Tap the apple, then the basket.", hint: "先點樹上的紅蘋果，再點樹下的籃子。", answer: "basket", steps: ["apple", "basket"] }, action: "basket" },
  { title: "The blue door", scene: "windmill", lines: ["Gail sees a tall windmill.", "It has a little blue door.", "White flowers grow by the path."], words: ["windmill", "door", "white"], objects: ["windmill", "door", "daisy", "fence", "gail"], mission: { type: "find", prompt: "Can you find the blue door?", hint: "找出風車下面的藍色小門。", answer: "door" }, action: "door" },
  { title: "One last look", scene: "hill", lines: ["Gail looks through a telescope.", "She sees the moon and her little star.", "The star shines above the hill."], words: ["telescope", "moon", "above"], objects: ["telescope", "hillMoon", "blanket", "star", "gail"], star: [65, 23], mission: { type: "sequence", prompt: "Tap the telescope, the moon, then the star.", hint: "依序點望遠鏡、月亮、小星星。", answer: "star", steps: ["telescope", "hillMoon", "star"] }, action: "shine" },
  { title: "Good night, little star", scene: "room", lines: ["Gail is home.", "She puts her book on the table.", "She gets into bed.", "“Good night, little star.”"], words: ["home", "book", "table", "sleep"], objects: ["book", "table", "bed", "window", "lamp", "gail"], mission: { type: "sequence", prompt: "Tap the book, the table, then the bed.", hint: "依序點書、桌子、床，陪Gail說晚安。", answer: "bed", steps: ["book", "table", "bed"] }, action: "sleep" }
];
function $a(n, e = ss.length) {
  try {
    const t = JSON.parse(n || "{}");
    return { page: Number.isInteger(t.page) ? Math.max(0, Math.min(e - 1, t.page)) : 0, stars: Array.isArray(t.stars) ? [...new Set(t.stars.filter((i) => typeof i == "number" && Number.isInteger(i) && i >= 0 && i < e))] : [], words: Array.isArray(t.words) ? [...new Set(t.words.filter((i) => typeof i == "string" && i.length < 30).map((i) => /^yuyu$/i.test(i) ? "Gail" : i))] : [] };
  } catch {
    return { page: 0, stars: [], words: [] };
  }
}
function Tc(n, e, t) {
  return Math.abs(n - t.x) <= t.w / 2 + 5 && Math.abs(e - t.y) <= t.h / 2 + 5;
}
function Ac(n) {
  const e = $a(n);
  return { ...e, page: e.page === 9 ? ss.length - 1 : Math.min(e.page, 8), stars: e.stars.filter((t) => t < 10).map((t) => t === 9 ? ss.length - 1 : t) };
}
const Mr = (n, e, t, i) => ({ id: n, word: e, x: i, y: 69, w: 22, h: 54, sprite: { sheet: "cast.png", cell: t, columns: 2, clip: t < 2 ? "inset(0 0 3% 0)" : void 0 } }), yn = (n, e, t, i, r = 14, s = 21) => ({ id: n, word: n, x: t, y: i, w: r, h: s, sprite: { sheet: "props.png", cell: e, columns: 3 } }), lt = (n, e, t, i, r, s) => ({ id: n, word: e, x: t, y: i, w: r, h: s }), _l = {
  gail: { id: "gail", word: "Gail", x: 82, y: 72, w: 21, h: 52, image: "gail.png", kind: "girl" },
  wolf: Mr("wolf", "wolf", 0, 29),
  grandma: Mr("grandma", "Grandma", 1, 27),
  mom: Mr("mom", "Mom", 2, 25),
  manager: Mr("manager", "manager", 3, 52),
  bread: yn("bread", 0, 50, 76),
  bag: yn("bag", 1, 68, 80, 18, 25),
  soup: yn("soup", 2, 38, 74),
  phone: yn("phone", 3, 74, 69, 11, 18),
  cap: yn("cap", 4, 54, 47),
  glasses: yn("glasses", 5, 65, 65, 15, 12),
  blanket: yn("blanket", 6, 45, 76, 23, 27),
  bowl: yn("bowl", 7, 55, 76),
  map: yn("map", 8, 57, 78, 20, 27),
  hood: lt("hood", "hood", 83, 53, 19, 18),
  door: lt("door", "door", 11, 39, 18, 66),
  window: lt("window", "window", 74, 22, 25, 35),
  left: lt("left", "left", 20, 65, 18, 15),
  right: lt("right", "right", 73, 65, 18, 15),
  crossing: lt("crossing", "crossing", 47, 65, 50, 15),
  bird: lt("bird", "bird", 17, 10, 12, 12),
  tree: lt("tree", "tree", 48, 22, 24, 34),
  bench: lt("bench", "bench", 24, 57, 29, 24),
  path: lt("path", "path", 71, 65, 25, 22),
  trail: lt("trail", "trail", 21, 63, 23, 24),
  sign: lt("sign", "sign", 47, 25, 25, 21),
  mail: lt("mail", "mail", 13, 31, 23, 36),
  stairs: lt("stairs", "stairs", 76, 50, 25, 37),
  number: lt("number", "number", 33, 24, 14, 12),
  bell: lt("bell", "bell", 52, 30, 9, 14),
  bed: lt("bed", "bed", 25, 44, 43, 31),
  ears: lt("ears", "ears", 30, 26, 15, 10),
  eyes: lt("eyes", "eyes", 30, 36, 12, 9),
  teeth: lt("teeth", "teeth", 30, 43, 11, 8),
  tail: lt("tail", "tail", 19, 64, 12, 19),
  away: lt("away", "away", 90, 83, 15, 20),
  coat: lt("coat", "coat", 28, 51, 18, 18),
  floor: lt("floor", "floor", 55, 91, 20, 9)
}, xl = {
  home: { name: "Gail 的家", caption: "A LITTLE RED HOOD", alt: "陽光下的紫色玄關與紅色大門", sheet: "interiors.png", cell: 0 },
  kitchen: { name: "溫暖廚房", caption: "LUNCH FOR GRANDMA", alt: "奶油色廚房、木桌和明亮窗戶", sheet: "interiors.png", cell: 1 },
  bedroom: { name: "外婆的房間", caption: "GRANDMA’S ROOM", alt: "外婆的床、拼布棉被、窗戶與門", sheet: "interiors.png", cell: 2 },
  lobby: { name: "公寓大廳", caption: "TOGETHER IS BETTER", alt: "有信箱、電梯與樓梯的公寓大廳", sheet: "interiors.png", cell: 3 },
  street: { name: "街角", caption: "STOP · LOOK · CROSS", alt: "安靜街道上的斑馬線與彩色房屋", sheet: "outdoors.png", cell: 0 },
  park: { name: "城市公園", caption: "THROUGH THE PARK", alt: "林蔭公園步道、長椅與樹上的鳥", sheet: "outdoors.png", cell: 1 },
  fork: { name: "公園岔路", caption: "STAY ON THE MAIN PATH", alt: "寬闊主步道、狹窄土路與木製指標", sheet: "outdoors.png", cell: 2 },
  entrance: { name: "外婆家門口", caption: "DING-DONG!", alt: "綠色公寓大門、門牌、門鈴與盆栽", sheet: "outdoors.png", cell: 3 }
}, Zn = [
  {
    title: "The red hood",
    scene: "home",
    lines: [
      "Gail has a red hood.",
      "She puts it on.",
      "Today she will visit Grandma."
    ],
    words: [
      "hood",
      "gail"
    ],
    objects: [
      "gail",
      "hood",
      "door",
      "mom"
    ],
    mission: {
      type: "find",
      answer: "hood",
      prompt: "Find the hood.",
      hint: "依序點選：hood"
    },
    action: "red",
    placements: {}
  },
  {
    title: "A warm lunch",
    scene: "kitchen",
    lines: [
      "Mom makes some soup.",
      "Gail puts bread in a bag.",
      "The lunch is for Grandma."
    ],
    words: [
      "bread",
      "bag",
      "gail"
    ],
    objects: [
      "gail",
      "mom",
      "soup",
      "bread",
      "bag"
    ],
    mission: {
      type: "drag",
      answer: "bread",
      target: "bag",
      prompt: "Put the bread in the bag.",
      hint: "把麵包拖進袋子，或先點麵包再點袋子。"
    },
    action: "red",
    placements: {}
  },
  {
    title: "Ready to go",
    scene: "home",
    lines: [
      "Gail takes her phone.",
      "Mom shows her the way.",
      "“Stay on the main path,” says Mom."
    ],
    words: [
      "phone",
      "map",
      "gail"
    ],
    objects: [
      "gail",
      "mom",
      "phone",
      "map",
      "door"
    ],
    mission: {
      type: "sequence",
      answer: "map",
      prompt: "Tap phone, then map.",
      hint: "依序點選：phone → map",
      steps: [
        "phone",
        "map"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "Stop and look",
    scene: "street",
    lines: [
      "Gail stops at the crossing.",
      "She looks both ways.",
      "Now she can cross."
    ],
    words: [
      "left",
      "right",
      "gail"
    ],
    objects: [
      "gail",
      "left",
      "right",
      "crossing"
    ],
    mission: {
      type: "sequence",
      answer: "right",
      prompt: "Tap left, then right.",
      hint: "依序點選：left → right",
      steps: [
        "left",
        "right"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "Into the park",
    scene: "park",
    lines: [
      "Gail walks into the park.",
      "Tall trees grow by the path.",
      "Birds sing above her."
    ],
    words: [
      "bird",
      "gail"
    ],
    objects: [
      "gail",
      "tree",
      "bird",
      "path"
    ],
    mission: {
      type: "find",
      answer: "bird",
      prompt: "Find the bird.",
      hint: "依序點選：bird"
    },
    action: "red",
    placements: {}
  },
  {
    title: "A hungry wolf",
    scene: "park",
    lines: [
      "A wolf sits on a bench.",
      "His tummy makes a loud noise.",
      "He smells the warm soup."
    ],
    words: [
      "wolf",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "bench",
      "soup"
    ],
    mission: {
      type: "find",
      answer: "wolf",
      prompt: "Find the wolf.",
      hint: "依序點選：wolf"
    },
    action: "red",
    placements: {
      wolf: {
        x: 26,
        y: 56,
        w: 20,
        h: 47
      }
    }
  },
  {
    title: "Hello, Gail",
    scene: "park",
    lines: [
      "“Hello! Where are you going?” asks the wolf.",
      "“To see my grandma,” says Gail.",
      "She keeps walking."
    ],
    words: [
      "path",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "path"
    ],
    mission: {
      type: "find",
      answer: "path",
      prompt: "Find the path.",
      hint: "依序點選：path"
    },
    action: "red",
    placements: {}
  },
  {
    title: "The long way",
    scene: "fork",
    lines: [
      "The wolf points to a small path.",
      "“Try this way!” he says.",
      "Gail looks at her map."
    ],
    words: [
      "map",
      "path",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "map",
      "sign",
      "path",
      "trail"
    ],
    mission: {
      type: "sequence",
      answer: "path",
      prompt: "Tap map, then path.",
      hint: "依序點選：map → path",
      steps: [
        "map",
        "path"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "The right path",
    scene: "fork",
    lines: [
      "“No, thank you,” says Gail.",
      "She stays on the main path.",
      "The wolf runs away."
    ],
    words: [
      "path",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "path",
      "trail"
    ],
    mission: {
      type: "find",
      answer: "path",
      prompt: "Find the path.",
      hint: "依序點選：path"
    },
    action: "red",
    placements: {}
  },
  {
    title: "Grandma goes out",
    scene: "lobby",
    lines: [
      "Grandma puts on her coat.",
      "She goes downstairs to get her mail.",
      "Her door clicks shut."
    ],
    words: [
      "coat",
      "mail",
      "gail"
    ],
    objects: [
      "grandma",
      "coat",
      "mail",
      "stairs"
    ],
    mission: {
      type: "sequence",
      answer: "mail",
      prompt: "Tap coat, then mail.",
      hint: "依序點選：coat → mail",
      steps: [
        "coat",
        "mail"
      ]
    },
    action: "red",
    placements: {
      grandma: {
        x: 41,
        y: 71
      },
      coat: {
        x: 41,
        y: 56
      }
    }
  },
  {
    title: "A sneaky visitor",
    scene: "entrance",
    lines: [
      "The wolf reaches the door.",
      "It is not quite closed.",
      "He slips inside."
    ],
    words: [
      "door",
      "gail"
    ],
    objects: [
      "wolf",
      "door",
      "bell"
    ],
    mission: {
      type: "find",
      answer: "door",
      prompt: "Find the door.",
      hint: "依序點選：door"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "A silly plan",
    scene: "bedroom",
    lines: [
      "The wolf finds a cap.",
      "He puts on Grandma’s glasses.",
      "Then he hides under a blanket."
    ],
    words: [
      "cap",
      "glasses",
      "blanket"
    ],
    objects: [
      "wolf",
      "cap",
      "glasses",
      "blanket",
      "bed"
    ],
    mission: {
      type: "sequence",
      answer: "blanket",
      prompt: "Tap cap, then glasses, then blanket.",
      hint: "依序點選：cap → glasses → blanket",
      steps: [
        "cap",
        "glasses",
        "blanket"
      ]
    },
    action: "red",
    placements: {
      wolf: {
        x: 29,
        y: 60
      }
    }
  },
  {
    title: "Here at last",
    scene: "entrance",
    lines: [
      "Gail comes to Grandma’s building.",
      "She checks the number.",
      "Yes, this is the right place."
    ],
    words: [
      "number",
      "gail"
    ],
    objects: [
      "gail",
      "number",
      "map",
      "door"
    ],
    mission: {
      type: "find",
      answer: "number",
      prompt: "Find the number.",
      hint: "依序點選：number"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "Ding-dong!",
    scene: "entrance",
    lines: [
      "Gail rings the bell.",
      "“Come in!” calls a deep voice.",
      "Gail stays by the open door."
    ],
    words: [
      "bell",
      "gail"
    ],
    objects: [
      "gail",
      "bell",
      "door"
    ],
    mission: {
      type: "find",
      answer: "bell",
      prompt: "Find the bell.",
      hint: "依序點選：bell"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "What big ears!",
    scene: "bedroom",
    lines: [
      "“Grandma, what big ears you have!” says Gail.",
      "“To hear you better,” says the wolf.",
      "One ear pops out."
    ],
    words: [
      "ears",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "ears",
      "cap",
      "glasses",
      "blanket"
    ],
    mission: {
      type: "find",
      answer: "ears",
      prompt: "Find the ears.",
      hint: "依序點選：ears"
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "What big eyes!",
    scene: "bedroom",
    lines: [
      "“What big eyes you have!” says Gail.",
      "“To see you better,” says the wolf.",
      "His glasses slide down."
    ],
    words: [
      "eyes",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "eyes",
      "cap",
      "glasses",
      "blanket"
    ],
    mission: {
      type: "find",
      answer: "eyes",
      prompt: "Find the eyes.",
      hint: "依序點選：eyes"
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "What big teeth!",
    scene: "bedroom",
    lines: [
      "“What big teeth you have!” says Gail.",
      "The wolf gives a wide smile.",
      "Gail takes a step back."
    ],
    words: [
      "teeth",
      "away",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "teeth",
      "cap",
      "glasses",
      "blanket",
      "away"
    ],
    mission: {
      type: "sequence",
      answer: "away",
      prompt: "Tap teeth, then away.",
      hint: "依序點選：teeth → away",
      steps: [
        "teeth",
        "away"
      ]
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "That is not Grandma",
    scene: "bedroom",
    lines: [
      "Gail sees a furry tail.",
      "Grandma does not have a tail!",
      "Gail walks away from the door."
    ],
    words: [
      "tail",
      "away",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "tail",
      "blanket",
      "away"
    ],
    mission: {
      type: "sequence",
      answer: "away",
      prompt: "Tap tail, then away.",
      hint: "依序點選：tail → away",
      steps: [
        "tail",
        "away"
      ]
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "A quick call",
    scene: "entrance",
    lines: [
      "Gail calls Grandma.",
      "“Are you in bed?” she asks.",
      "“No, I am downstairs!” says Grandma."
    ],
    words: [
      "phone",
      "gail"
    ],
    objects: [
      "gail",
      "phone",
      "door"
    ],
    mission: {
      type: "find",
      answer: "phone",
      prompt: "Find the phone.",
      hint: "依序點選：phone"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "Help is here",
    scene: "lobby",
    lines: [
      "Gail meets Grandma downstairs.",
      "They tell the building manager.",
      "The three go upstairs together."
    ],
    words: [
      "grandma",
      "manager",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "manager",
      "stairs"
    ],
    mission: {
      type: "sequence",
      answer: "manager",
      prompt: "Tap grandma, then manager.",
      hint: "依序點選：grandma → manager",
      steps: [
        "grandma",
        "manager"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "We can see you",
    scene: "bedroom",
    lines: [
      "“Come out, Wolf,” says Grandma.",
      "The wolf drops the blanket.",
      "His cap falls to the floor."
    ],
    words: [
      "cap",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "cap",
      "blanket",
      "floor"
    ],
    mission: {
      type: "find",
      answer: "cap",
      prompt: "Find the cap.",
      hint: "依序點選：cap"
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  },
  {
    title: "Ask first",
    scene: "kitchen",
    lines: [
      "“I wanted your lunch,” says the wolf.",
      "“You must ask first,” says Gail.",
      "The wolf gives back the bread."
    ],
    words: [
      "bread",
      "bag",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "bread",
      "bag"
    ],
    mission: {
      type: "drag",
      answer: "bread",
      target: "bag",
      prompt: "Put the bread in the bag.",
      hint: "把麵包拖進袋子，或先點麵包再點袋子。"
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  },
  {
    title: "May I have some?",
    scene: "kitchen",
    lines: [
      "“I am sorry,” says the wolf.",
      "“May I have some soup?”",
      "Grandma brings one more bowl."
    ],
    words: [
      "bowl",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "soup",
      "bowl"
    ],
    mission: {
      type: "find",
      answer: "bowl",
      prompt: "Find the bowl.",
      hint: "依序點選：bowl"
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  },
  {
    title: "A better ending",
    scene: "kitchen",
    lines: [
      "Gail, Grandma, and the wolf share lunch.",
      "Gail calls Mom.",
      "“I am here with Grandma. We are all fine!”"
    ],
    words: [
      "gail",
      "grandma",
      "wolf"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "soup",
      "bowl",
      "phone"
    ],
    mission: {
      type: "sequence",
      answer: "wolf",
      prompt: "Tap gail, then grandma, then wolf.",
      hint: "依序點選：gail → grandma → wolf",
      steps: [
        "gail",
        "grandma",
        "wolf"
      ]
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  }
], Ka = {
  0: {
    1: [
      {
        actor: "gail",
        x: 77,
        y: 72,
        walk: !0
      }
    ],
    2: [
      {
        actor: "gail",
        x: 61,
        y: 72,
        walk: !0
      }
    ]
  },
  1: {
    0: [
      {
        actor: "soup",
        x: 64,
        y: 77,
        walk: !1
      }
    ],
    1: [
      {
        actor: "bread",
        x: 68,
        y: 80,
        walk: !1
      }
    ]
  },
  2: {
    0: [
      {
        actor: "phone",
        x: 77,
        y: 65,
        walk: !1
      }
    ],
    1: [
      {
        actor: "map",
        x: 58,
        y: 63,
        walk: !1
      }
    ]
  },
  3: {
    1: [
      {
        actor: "gail",
        x: 76,
        y: 73,
        walk: !1
      }
    ],
    2: [
      {
        actor: "gail",
        x: 29,
        y: 71,
        walk: !0
      }
    ]
  },
  4: {
    0: [
      {
        actor: "gail",
        x: 52,
        y: 70,
        walk: !0
      }
    ]
  },
  5: {
    0: [
      {
        actor: "wolf",
        x: 26,
        y: 54,
        walk: !1
      }
    ],
    2: [
      {
        actor: "wolf",
        x: 36,
        y: 61,
        walk: !0
      }
    ]
  },
  6: {
    2: [
      {
        actor: "gail",
        x: 60,
        y: 70,
        walk: !0
      }
    ]
  },
  7: {
    0: [
      {
        actor: "wolf",
        x: 35,
        y: 65,
        walk: !0
      }
    ],
    2: [
      {
        actor: "map",
        x: 74,
        y: 64,
        walk: !1
      }
    ]
  },
  8: {
    1: [
      {
        actor: "gail",
        x: 66,
        y: 62,
        walk: !0
      }
    ],
    2: [
      {
        actor: "wolf",
        x: 12,
        y: 60,
        walk: !0
      }
    ]
  },
  9: {
    1: [
      {
        actor: "grandma",
        x: 28,
        y: 73,
        walk: !0
      }
    ]
  },
  10: {
    0: [
      {
        actor: "wolf",
        x: 43,
        y: 69,
        walk: !0
      }
    ],
    2: [
      {
        actor: "wolf",
        x: 33,
        y: 53,
        walk: !0
      }
    ]
  },
  11: {
    0: [
      {
        actor: "cap",
        x: 29,
        y: 31,
        walk: !1
      }
    ],
    1: [
      {
        actor: "glasses",
        x: 29,
        y: 42,
        walk: !1
      }
    ],
    2: [
      {
        actor: "blanket",
        x: 29,
        y: 70,
        walk: !1
      }
    ]
  },
  12: {
    0: [
      {
        actor: "gail",
        x: 63,
        y: 71,
        walk: !0
      }
    ]
  },
  13: {
    0: [
      {
        actor: "gail",
        x: 62,
        y: 69,
        walk: !0
      }
    ]
  },
  14: {
    2: [
      {
        actor: "cap",
        x: 33,
        y: 25,
        walk: !1
      }
    ]
  },
  15: {
    2: [
      {
        actor: "glasses",
        x: 30,
        y: 44,
        walk: !1
      }
    ]
  },
  16: {
    2: [
      {
        actor: "gail",
        x: 91,
        y: 75,
        walk: !0
      }
    ]
  },
  17: {
    2: [
      {
        actor: "gail",
        x: 93,
        y: 76,
        walk: !0
      }
    ]
  },
  18: {
    0: [
      {
        actor: "phone",
        x: 75,
        y: 57,
        walk: !1
      }
    ]
  },
  19: {
    0: [
      {
        actor: "gail",
        x: 73,
        y: 73,
        walk: !0
      }
    ],
    2: [
      {
        actor: "grandma",
        x: 65,
        y: 56,
        walk: !0
      },
      {
        actor: "manager",
        x: 76,
        y: 61,
        walk: !0
      },
      {
        actor: "gail",
        x: 84,
        y: 67,
        walk: !0
      }
    ]
  },
  20: {
    1: [
      {
        actor: "blanket",
        x: 43,
        y: 89,
        walk: !1
      }
    ],
    2: [
      {
        actor: "cap",
        x: 56,
        y: 91,
        walk: !1
      }
    ]
  },
  21: {
    2: [
      {
        actor: "bread",
        x: 67,
        y: 85,
        walk: !1
      }
    ]
  },
  22: {
    2: [
      {
        actor: "bowl",
        x: 64,
        y: 83,
        walk: !1
      }
    ]
  },
  23: {
    1: [
      {
        actor: "phone",
        x: 78,
        y: 61,
        walk: !1
      }
    ]
  }
};
xl.dining = { name: "外婆的餐桌", caption: "A BETTER ENDING", alt: "陽光下的木餐桌、椅子與外婆家窗戶" };
for (const n of [21, 22, 23]) Zn[n].scene = "dining";
for (const n of [21, 22, 23])
  Object.assign(Zn[n].placements, { grandma: { x: 51, y: 42, w: 21, h: 50 }, wolf: { x: 22, y: 51, w: 23, h: 56 }, gail: { x: 80, y: 57, w: 22, h: 54 }, soup: { x: 44, y: 60, w: 14, h: 21 }, bowl: { x: 62, y: 62, w: 14, h: 21 }, phone: { x: 82, y: 57, w: 10, h: 17 } });
Ka[22][2] = [{ actor: "bowl", x: 62, y: 62 }];
for (const n of Zn) n.words = n.words.map((e) => e === "gail" ? "Gail" : e === "grandma" ? "Grandma" : e);
Zn[0].placements = { ...Zn[0].placements, gail: { image: "../little-star-v1/gail-paper.png" }, hood: { image: "cape.png", x: 63, y: 62, w: 19, h: 22 } };
Ka[0][1] = [{ actor: "hood", x: 82, y: 61 }];
for (const n of [14, 15, 16, 17])
  Zn[n].placements = { ...Zn[n].placements, ears: { x: 30, y: 35, w: 13, h: 10 }, eyes: { x: 31, y: 41, w: 11, h: 8 }, teeth: { x: 32, y: 46, w: 10, h: 8 }, tail: { x: 22, y: 64, w: 10, h: 19 } };
const Za = {
  gail: {
    id: "gail",
    word: "Gail",
    x: 82,
    y: 69,
    w: 21,
    h: 52,
    kind: "girl",
    image: "../little-star-v1/gail-paper.png"
  },
  mom: {
    id: "mom",
    word: "Mom",
    x: 20,
    y: 66,
    w: 22,
    h: 56,
    sprite: {
      sheet: "../red-hood-v1/cast.png",
      cell: 2,
      columns: 2
    }
  },
  dad: {
    id: "dad",
    word: "Dad",
    x: 48,
    y: 63,
    w: 24,
    h: 62,
    image: "dad.png"
  },
  flour: {
    id: "flour",
    word: "flour",
    x: 36,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 0,
      columns: 3
    }
  },
  milk: {
    id: "milk",
    word: "milk",
    x: 53,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 1,
      columns: 3
    }
  },
  eggs: {
    id: "eggs",
    word: "eggs",
    x: 70,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 2,
      columns: 3
    }
  },
  strawberries: {
    id: "strawberries",
    word: "strawberries",
    x: 36,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 3,
      columns: 3
    }
  },
  butter: {
    id: "butter",
    word: "butter",
    x: 53,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 4,
      columns: 3
    }
  },
  sugar: {
    id: "sugar",
    word: "sugar",
    x: 70,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 5,
      columns: 3
    }
  },
  bowl: {
    id: "bowl",
    word: "bowl",
    x: 52,
    y: 76,
    w: 19,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 6,
      columns: 3
    }
  },
  whisk: {
    id: "whisk",
    word: "whisk",
    x: 68,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 7,
      columns: 3
    }
  },
  basket: {
    id: "basket",
    word: "basket",
    x: 58,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 8,
      columns: 3
    }
  },
  plain: {
    id: "plain",
    word: "plain",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 0,
      columns: 2
    }
  },
  frosted: {
    id: "frosted",
    word: "frosted",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 1,
      columns: 2
    }
  },
  decorated: {
    id: "decorated",
    word: "decorated",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 2,
      columns: 2
    }
  },
  finished: {
    id: "finished",
    word: "finished",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 3,
      columns: 2
    }
  },
  calendar: {
    id: "calendar",
    word: "calendar",
    x: 54,
    y: 35,
    w: 14,
    h: 22,
    image: "calendar.svg"
  },
  stall: {
    id: "stall",
    word: "stall",
    x: 50,
    y: 28,
    w: 30,
    h: 30,
    image: "stall.svg"
  },
  door: {
    id: "door",
    word: "door",
    x: 9,
    y: 40,
    w: 16,
    h: 60,
    image: "door.svg"
  },
  sink: {
    id: "sink",
    word: "sink",
    x: 83,
    y: 30,
    w: 20,
    h: 18,
    image: "sink.svg"
  },
  apron: {
    id: "apron",
    word: "apron",
    x: 53,
    y: 62,
    w: 15,
    h: 30,
    image: "apron.svg"
  },
  cup: {
    id: "cup",
    word: "cup",
    x: 69,
    y: 76,
    w: 14,
    h: 21,
    image: "cup.svg"
  },
  cloth: {
    id: "cloth",
    word: "cloth",
    x: 65,
    y: 77,
    w: 16,
    h: 16,
    image: "cloth.svg"
  },
  pan: {
    id: "pan",
    word: "pan",
    x: 54,
    y: 78,
    w: 24,
    h: 20,
    image: "pan.svg"
  },
  spoon: {
    id: "spoon",
    word: "spoon",
    x: 70,
    y: 74,
    w: 12,
    h: 28,
    image: "spoon.svg"
  },
  oven: {
    id: "oven",
    word: "oven",
    x: 18,
    y: 39,
    w: 24,
    h: 32,
    image: "oven.svg"
  },
  timer: {
    id: "timer",
    word: "timer",
    x: 67,
    y: 65,
    w: 13,
    h: 18,
    image: "timer.svg"
  },
  rack: {
    id: "rack",
    word: "rack",
    x: 55,
    y: 83,
    w: 29,
    h: 12,
    image: "rack.svg"
  },
  cream: {
    id: "cream",
    word: "cream",
    x: 34,
    y: 76,
    w: 16,
    h: 22,
    image: "cream.svg"
  },
  spatula: {
    id: "spatula",
    word: "spatula",
    x: 70,
    y: 72,
    w: 12,
    h: 28,
    image: "spatula.svg"
  },
  candle: {
    id: "candle",
    word: "candle",
    x: 73,
    y: 61,
    w: 11,
    h: 26,
    image: "candle.svg"
  },
  slice: {
    id: "slice",
    word: "slice",
    x: 40,
    y: 76,
    w: 18,
    h: 24,
    image: "slice.svg"
  },
  plate: {
    id: "plate",
    word: "plate",
    x: 67,
    y: 82,
    w: 24,
    h: 15,
    image: "plate.svg"
  },
  heart: {
    id: "heart",
    word: "heart",
    x: 53,
    y: 43,
    w: 16,
    h: 22,
    image: "heart.svg"
  }
}, Rc = {
  home: {
    name: "Gail 的家",
    caption: "A LITTLE BIRTHDAY SECRET",
    alt: "溫暖客廳與彩色生日布旗",
    sheet: "scenes.png",
    cell: 0
  },
  market: {
    name: "街角市場",
    caption: "A BASKET FULL OF POSSIBILITIES",
    alt: "蔬果攤、雜貨店和石板街道",
    sheet: "scenes.png",
    cell: 1
  },
  kitchen: {
    name: "親子烘焙廚房",
    caption: "A LITTLE FLOUR. A LOT OF LOVE.",
    alt: "薄荷綠廚房和乾淨木製料理桌",
    sheet: "scenes.png",
    cell: 2
  },
  party: {
    name: "生日餐桌",
    caption: "SEVEN CANDLES IN MY HEART",
    alt: "溫暖生日餐廳、彩旗和慶生桌",
    sheet: "scenes.png",
    cell: 3
  }
}, Ft = [
  {
    title: "Seven soon",
    scene: "home",
    lines: [
      "Gail will be seven tomorrow.",
      "“What is my birthday gift?” she asks.",
      "Mom smiles. “Come with me!”"
    ],
    words: [
      "calendar"
    ],
    objects: [
      "gail",
      "mom",
      "calendar"
    ],
    mission: {
      type: "find",
      answer: "calendar",
      prompt: "Find the calendar.",
      hint: "點選 calendar"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "A little surprise",
    scene: "home",
    lines: [
      "“Is it a toy?” asks Gail.",
      "“Not yet! We have something to do,” says Mom.",
      "Gail picks up a basket."
    ],
    words: [
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "basket"
    ],
    mission: {
      type: "find",
      answer: "basket",
      prompt: "Find the basket.",
      hint: "點選 basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Off to the market",
    scene: "market",
    lines: [
      "Gail and Mom walk to the market.",
      "The stalls are full of colors.",
      "Gail holds the basket with both hands."
    ],
    words: [
      "basket",
      "stall"
    ],
    objects: [
      "gail",
      "mom",
      "basket",
      "stall"
    ],
    mission: {
      type: "find",
      answer: "stall",
      prompt: "Find the stall.",
      hint: "點選 stall"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "A bag of flour",
    scene: "market",
    lines: [
      "“First, we need flour,” says Mom.",
      "The flour is soft and white.",
      "Gail puts one bag in the basket."
    ],
    words: [
      "flour",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "flour",
      "basket"
    ],
    mission: {
      type: "drag",
      answer: "flour",
      prompt: "Move the flour to the basket.",
      hint: "把 flour 放到 basket",
      target: "basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Red strawberries",
    scene: "market",
    lines: [
      "Gail sees bright red strawberries.",
      "“These smell sweet!” she says.",
      "She picks a bowl of ripe strawberries."
    ],
    words: [
      "strawberries",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "strawberries",
      "basket"
    ],
    mission: {
      type: "drag",
      answer: "strawberries",
      prompt: "Move the strawberries to the basket.",
      hint: "把 strawberries 放到 basket",
      target: "basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Milk and eggs",
    scene: "market",
    lines: [
      "Next, they buy milk and eggs.",
      "Gail carries the eggs gently.",
      "“I will keep them safe,” she says."
    ],
    words: [
      "milk",
      "eggs",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "milk",
      "eggs",
      "basket"
    ],
    mission: {
      type: "sequence",
      answer: "milk",
      prompt: "Tap milk, then eggs.",
      hint: "依序點選 milk, eggs",
      steps: [
        "milk",
        "eggs"
      ]
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Two more things",
    scene: "market",
    lines: [
      "Mom adds butter and sugar.",
      "Gail looks inside the basket.",
      "“Are we making something yummy?”"
    ],
    words: [
      "butter",
      "sugar",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "butter",
      "sugar",
      "basket"
    ],
    mission: {
      type: "sequence",
      answer: "butter",
      prompt: "Tap butter, then sugar.",
      hint: "依序點選 butter, sugar",
      steps: [
        "butter",
        "sugar"
      ]
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Home with our basket",
    scene: "home",
    lines: [
      "The basket is heavy now.",
      "Mom and Gail carry it together.",
      "At home, they put everything away."
    ],
    words: [
      "basket",
      "door"
    ],
    objects: [
      "gail",
      "mom",
      "basket",
      "door"
    ],
    mission: {
      type: "find",
      answer: "basket",
      prompt: "Find the basket.",
      hint: "點選 basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Ready to bake",
    scene: "kitchen",
    lines: [
      "“We will make your birthday cake!” says Mom.",
      "Gail washes her hands and ties her apron.",
      "“I can help!” she says."
    ],
    words: [
      "sink",
      "apron"
    ],
    objects: [
      "gail",
      "mom",
      "sink",
      "apron"
    ],
    mission: {
      type: "sequence",
      answer: "sink",
      prompt: "Tap sink, then apron.",
      hint: "依序點選 sink, apron",
      steps: [
        "sink",
        "apron"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Measure the flour",
    scene: "kitchen",
    lines: [
      "Mom shows Gail a measuring cup.",
      "Gail fills it with flour.",
      "She tips the flour into the bowl."
    ],
    words: [
      "flour",
      "bowl",
      "cup"
    ],
    objects: [
      "gail",
      "mom",
      "flour",
      "bowl",
      "cup"
    ],
    mission: {
      type: "drag",
      answer: "flour",
      prompt: "Move the flour to the bowl.",
      hint: "把 flour 放到 bowl",
      target: "bowl"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Oops, a little cloud",
    scene: "kitchen",
    lines: [
      "Poof! Some flour lands on the table.",
      "Gail looks worried.",
      "“It is all right. We can clean it up.”"
    ],
    words: [
      "flour",
      "cloth",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "flour",
      "cloth",
      "bowl"
    ],
    mission: {
      type: "find",
      answer: "cloth",
      prompt: "Find the cloth.",
      hint: "點選 cloth"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Butter and sugar",
    scene: "kitchen",
    lines: [
      "Gail puts butter and sugar in the bowl.",
      "She stirs until the mixture is soft.",
      "“Round and round,” says Mom."
    ],
    words: [
      "butter",
      "sugar",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "butter",
      "sugar",
      "bowl",
      "whisk"
    ],
    mission: {
      type: "sequence",
      answer: "butter",
      prompt: "Tap butter, then sugar, then whisk.",
      hint: "依序點選 butter, sugar, whisk",
      steps: [
        "butter",
        "sugar",
        "whisk"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Crack the eggs",
    scene: "kitchen",
    lines: [
      "Mom helps Gail crack the eggs.",
      "They add them one at a time.",
      "No shells go into the bowl!"
    ],
    words: [
      "eggs",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "eggs",
      "bowl"
    ],
    mission: {
      type: "drag",
      answer: "eggs",
      prompt: "Move the eggs to the bowl.",
      hint: "把 eggs 放到 bowl",
      target: "bowl"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Pour the milk",
    scene: "kitchen",
    lines: [
      "Gail pours in a little milk.",
      "Mom adds the measured flour.",
      "The mixture turns smooth and creamy."
    ],
    words: [
      "milk",
      "flour",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "milk",
      "flour",
      "bowl"
    ],
    mission: {
      type: "drag",
      answer: "milk",
      prompt: "Move the milk to the bowl.",
      hint: "把 milk 放到 bowl",
      target: "bowl"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "My arms are tired",
    scene: "kitchen",
    lines: [
      "Gail stirs the batter slowly.",
      "“My arms are tired,” she says.",
      "Mom helps, and Gail tries again."
    ],
    words: [
      "bowl",
      "whisk"
    ],
    objects: [
      "gail",
      "mom",
      "bowl",
      "whisk"
    ],
    mission: {
      type: "tap",
      answer: "whisk",
      prompt: "Tap the whisk three times.",
      hint: "點攪拌器三次"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Into the cake pan",
    scene: "kitchen",
    lines: [
      "They pour the batter into a cake pan.",
      "Gail scrapes the bowl with a spoon.",
      "“Every little bit!” she says."
    ],
    words: [
      "bowl",
      "pan",
      "spoon"
    ],
    objects: [
      "gail",
      "mom",
      "bowl",
      "pan",
      "spoon"
    ],
    mission: {
      type: "drag",
      answer: "bowl",
      prompt: "Move the bowl to the pan.",
      hint: "把 bowl 放到 pan",
      target: "pan"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Mom uses the oven",
    scene: "kitchen",
    lines: [
      "Mom puts the pan in the hot oven.",
      "Gail stands back and watches.",
      "They set a timer and wait."
    ],
    words: [
      "pan",
      "oven",
      "timer"
    ],
    objects: [
      "gail",
      "mom",
      "pan",
      "oven",
      "timer"
    ],
    mission: {
      type: "sequence",
      answer: "oven",
      prompt: "Tap oven, then timer.",
      hint: "依序點選 oven, timer",
      steps: [
        "oven",
        "timer"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "While we wait",
    scene: "kitchen",
    lines: [
      "Gail washes the strawberries.",
      "She dries them with a clean cloth.",
      "Mom cuts them into little pieces."
    ],
    words: [
      "strawberries",
      "sink",
      "cloth"
    ],
    objects: [
      "gail",
      "mom",
      "strawberries",
      "sink",
      "cloth"
    ],
    mission: {
      type: "drag",
      answer: "strawberries",
      prompt: "Move the strawberries to the sink.",
      hint: "把 strawberries 放到 sink",
      target: "sink"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Ding! A golden cake",
    scene: "kitchen",
    lines: [
      "Ding! The kitchen smells wonderful.",
      "Mom takes out the golden cake.",
      "They let it cool on a rack."
    ],
    words: [
      "plain",
      "rack",
      "timer"
    ],
    objects: [
      "gail",
      "mom",
      "plain",
      "rack",
      "timer"
    ],
    mission: {
      type: "drag",
      answer: "plain",
      prompt: "Move the plain to the rack.",
      hint: "把 plain 放到 rack",
      target: "rack"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Soft white cream",
    scene: "kitchen",
    lines: [
      "The cake is cool now.",
      "Gail spreads soft white cream on top.",
      "“Slowly, all the way around,” says Mom."
    ],
    words: [
      "plain",
      "cream",
      "spatula"
    ],
    objects: [
      "gail",
      "mom",
      "plain",
      "cream",
      "spatula"
    ],
    mission: {
      type: "drag",
      answer: "spatula",
      prompt: "Move the spatula to the plain.",
      hint: "把 spatula 放到 plain",
      target: "plain"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "A strawberry crown",
    scene: "kitchen",
    lines: [
      "Gail places strawberries on the cream.",
      "One here, one there, all around!",
      "Her cake looks like a little crown."
    ],
    words: [
      "frosted",
      "strawberries"
    ],
    objects: [
      "gail",
      "mom",
      "frosted",
      "strawberries"
    ],
    mission: {
      type: "drag",
      answer: "strawberries",
      prompt: "Move the strawberries to the frosted.",
      hint: "把 strawberries 放到 frosted",
      target: "frosted"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "One special candle",
    scene: "party",
    lines: [
      "Gail puts the cake on the table.",
      "Mom gives her a number-seven candle.",
      "Gail places it on top of the cake."
    ],
    words: [
      "decorated",
      "candle"
    ],
    objects: [
      "gail",
      "mom",
      "decorated",
      "candle"
    ],
    mission: {
      type: "drag",
      answer: "candle",
      prompt: "Move the candle to the decorated.",
      hint: "把 candle 放到 decorated",
      target: "decorated"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  },
  {
    title: "Happy birthday, Gail!",
    scene: "party",
    lines: [
      "Dad comes in and hugs Gail.",
      "Mom lights the candle. They sing together.",
      "“Happy birthday, Gail! You are seven!”"
    ],
    words: [
      "finished"
    ],
    objects: [
      "gail",
      "mom",
      "dad",
      "finished"
    ],
    mission: {
      type: "sequence",
      answer: "dad",
      prompt: "Tap mom, then dad.",
      hint: "依序點選 mom, dad",
      steps: [
        "mom",
        "dad"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  },
  {
    title: "A wish and a slice",
    scene: "party",
    lines: [
      "Gail makes a wish and blows out the candle.",
      "Dad helps her cut the cake.",
      "She shares a slice with Mom and Dad."
    ],
    words: [
      "finished",
      "slice",
      "plate"
    ],
    objects: [
      "gail",
      "mom",
      "dad",
      "finished",
      "slice",
      "plate"
    ],
    mission: {
      type: "drag",
      answer: "slice",
      prompt: "Move the slice to the plate.",
      hint: "把 slice 放到 plate",
      target: "plate"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  },
  {
    title: "Made with love",
    scene: "party",
    lines: [
      "“This is my favorite gift,” says Gail.",
      "“I made it with you, and I will enjoy every bite.”",
      "Her cake is full of work, care, and love."
    ],
    words: [
      "slice",
      "heart"
    ],
    objects: [
      "gail",
      "mom",
      "dad",
      "slice",
      "heart"
    ],
    mission: {
      type: "find",
      answer: "heart",
      prompt: "Find the heart.",
      hint: "點選 heart"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  }
], ps = {
  0: {
    1: [
      {
        actor: "calendar",
        x: 54,
        y: 32,
        rotate: 5
      }
    ]
  },
  1: {
    1: [
      {
        actor: "basket",
        x: 58,
        y: 73,
        rotate: 5
      }
    ]
  },
  2: {
    0: [
      {
        actor: "gail",
        x: 63,
        y: 69,
        walk: !0
      },
      {
        actor: "mom",
        x: 30,
        y: 66,
        walk: !0
      }
    ]
  },
  3: {
    2: [
      {
        actor: "flour",
        x: 58,
        y: 76
      }
    ]
  },
  4: {
    2: [
      {
        actor: "strawberries",
        x: 58,
        y: 76
      }
    ]
  },
  5: {
    1: [
      {
        actor: "milk",
        x: 53,
        y: 73,
        rotate: 5
      }
    ]
  },
  6: {
    1: [
      {
        actor: "butter",
        x: 53,
        y: 73,
        rotate: 5
      }
    ]
  },
  7: {
    0: [
      {
        actor: "basket",
        x: 52,
        y: 73
      }
    ],
    1: [
      {
        actor: "gail",
        x: 64,
        y: 69,
        walk: !0
      }
    ]
  },
  8: {
    1: [
      {
        actor: "sink",
        x: 83,
        y: 27,
        rotate: 5
      }
    ]
  },
  9: {
    2: [
      {
        actor: "flour",
        x: 52,
        y: 76
      }
    ]
  },
  10: {
    1: [
      {
        actor: "cloth",
        x: 65,
        y: 74,
        rotate: 5
      }
    ]
  },
  11: {
    0: [
      {
        actor: "butter",
        x: 52,
        y: 73
      },
      {
        actor: "sugar",
        x: 54,
        y: 72
      }
    ],
    1: [
      {
        actor: "whisk",
        x: 53,
        y: 69,
        rotate: 25
      }
    ]
  },
  12: {
    2: [
      {
        actor: "eggs",
        x: 52,
        y: 76
      }
    ]
  },
  13: {
    2: [
      {
        actor: "milk",
        x: 52,
        y: 76
      }
    ]
  },
  14: {
    0: [
      {
        actor: "whisk",
        x: 50,
        y: 70,
        rotate: -25
      }
    ],
    2: [
      {
        actor: "whisk",
        x: 55,
        y: 70,
        rotate: 25
      }
    ]
  },
  15: {
    2: [
      {
        actor: "bowl",
        x: 54,
        y: 78
      }
    ]
  },
  16: {
    0: [
      {
        actor: "pan",
        x: 18,
        y: 39,
        scale: 0.65
      }
    ],
    2: [
      {
        actor: "timer",
        x: 67,
        y: 63,
        rotate: 6
      }
    ]
  },
  17: {
    2: [
      {
        actor: "strawberries",
        x: 83,
        y: 30
      }
    ]
  },
  18: {
    2: [
      {
        actor: "plain",
        x: 55,
        y: 83
      }
    ]
  },
  19: {
    1: [
      {
        actor: "spatula",
        x: 51,
        y: 63,
        rotate: -25
      }
    ]
  },
  20: {
    1: [
      {
        actor: "strawberries",
        x: 53,
        y: 64
      }
    ]
  },
  21: {
    2: [
      {
        actor: "candle",
        x: 53,
        y: 55
      }
    ]
  },
  22: {
    0: [
      {
        actor: "dad",
        x: 56,
        y: 43,
        walk: !0
      }
    ]
  },
  23: {
    2: [
      {
        actor: "slice",
        x: 67,
        y: 82
      }
    ]
  },
  24: {
    1: [
      {
        actor: "heart",
        x: 53,
        y: 40,
        rotate: 5
      }
    ]
  }
};
Ft[0].lines[0] = "Gail is turning seven today.";
Ft[6].lines[0] = "Mom adds butter, sugar, and cream.";
Ft[6].objects.push("cream");
Ft[9].lines[2] = "She levels the top of the cup.";
Ft[9].mission = { type: "drag", answer: "flour", target: "cup", prompt: "Move the flour to the cup.", hint: "把麵粉放到量杯" };
ps[9] = { 2: [{ actor: "flour", x: 69, y: 76, rotate: 20 }] };
Ft.forEach((n) => {
  ["kitchen", "party"].includes(n.scene) && (n.placements = { ...n.placements, gail: { x: 82, y: 43, w: 21, h: 52 }, mom: { x: 20, y: 40, w: 22, h: 56 } });
});
for (const n of ["plain", "frosted", "decorated", "finished"]) Za[n].word = "cake";
for (const n of Ft) n.words = n.words.map((e) => ["plain", "frosted", "decorated", "finished"].includes(e) ? "cake" : e);
Ft[22].words = ["birthday", "candle", "seven"];
Ft[24].words = ["gift", "care", "love"];
for (const n of Ft)
  n.scene === "party" && (n.placements.dad = { x: 47, y: 39, w: 32, h: 68 });
ps[22][0] = [{ actor: "dad", x: 58, y: 39, walk: !0 }];
for (const n of Ft) {
  const e = n.mission, t = (i) => Za[i].word;
  e.type === "drag" && (e.prompt = `Move the ${t(e.answer)} to the ${t(e.target)}.`), e.type === "sequence" && (e.prompt = `Tap ${e.steps.map(t).join(", then ")}.`);
}
Object.assign(Ft[11].placements, { butter: { x: 32, y: 76 }, sugar: { x: 70, y: 76 }, whisk: { x: 84, y: 74 } });
Object.assign(Ft[13].placements, { milk: { x: 32, y: 76 }, flour: { x: 72, y: 76 } });
Object.assign(Ft[15].placements, { bowl: { x: 34, y: 76 }, pan: { x: 62, y: 78 }, spoon: { x: 82, y: 74 } });
ps[15] = { 0: [{ actor: "bowl", x: 62, y: 70, rotate: 22 }] };
const Kr = [
  {
    A: [
      "Gail walks into the forest.",
      "The forest is bright and quiet."
    ],
    B: [
      "Gail follows a little path into the Starry Forest.",
      "Tiny lights shine between the trees."
    ],
    C: [
      "One afternoon, Gail follows an unfamiliar path deep into the Starry Forest.",
      "Tiny golden lights flicker between the trees like little stars."
    ]
  },
  {
    A: [
      "Gail hears a sound.",
      "“Who is crying?”"
    ],
    B: [
      "Suddenly, Gail hears someone crying.",
      "The sound comes from the valley."
    ],
    C: [
      "Suddenly, a soft crying sound drifts through the trees.",
      "Gail stops and listens carefully.",
      "It seems to come from the valley ahead."
    ]
  },
  {
    A: [
      "A little dragon is in the cave.",
      "His name is Pip."
    ],
    B: [
      "Inside a small cave, Gail finds a little dragon named Pip.",
      "He looks very sad."
    ],
    C: [
      "Inside a small cave beneath the cliffs, Gail discovers a little dragon named Pip.",
      "His wings are folded tightly against his back."
    ]
  },
  {
    A: [
      "“What’s wrong?” asks Gail.",
      "“I can’t fly,” says Pip."
    ],
    B: [
      "“What happened?” Gail asks.",
      "Pip looks at his wings.",
      "“I can’t fly anymore.”"
    ],
    C: [
      "Gail gently asks what is wrong.",
      "Pip lowers his head and stares at his wings.",
      "“I can’t fly anymore,” he whispers."
    ]
  },
  {
    A: [
      "Pip could fly before.",
      "He loved the sky."
    ],
    B: [
      "Pip used to fly high above the valley.",
      "Flying was his favorite thing."
    ],
    C: [
      "Pip explains that he once loved flying above the valley.",
      "He would chase clouds and glide through the warm wind for hours."
    ]
  },
  {
    A: [
      "A strong wind blew Pip down.",
      "Pip became afraid."
    ],
    B: [
      "One day, a strong wind pushed Pip from the sky.",
      "He was safe, but he became afraid of flying."
    ],
    C: [
      "One windy afternoon, a powerful gust knocked Pip off balance.",
      "He landed safely in the grass, but the frightening fall stayed in his mind."
    ]
  },
  {
    A: [
      "“I can’t do it,” says Pip."
    ],
    B: [
      "“I will fall again,” says Pip.",
      "“I can’t do it.”"
    ],
    C: [
      "Pip shakes his head.",
      "“If I try again, I might fall.",
      "I’m too afraid.”"
    ]
  },
  {
    A: [
      "“Open your wings,” says Gail.",
      "“Just a little.”"
    ],
    B: [
      "Gail does not ask Pip to fly.",
      "“Let’s just open your wings first.”"
    ],
    C: [
      "Instead of telling Pip to fly, Gail suggests something much smaller.",
      "“Let’s begin by opening your wings.”"
    ]
  },
  {
    A: [
      "Pip opens his wings.",
      "They shake a little."
    ],
    B: [
      "Pip hesitates.",
      "Then he slowly opens his wings."
    ],
    C: [
      "Pip hesitates for a moment.",
      "His wings tremble, but little by little, he stretches them wide."
    ]
  },
  {
    A: [
      "Pip stands on a small rock.",
      "He is still afraid."
    ],
    B: [
      "Next, Pip stands on a small rock.",
      "It is not very high."
    ],
    C: [
      "For the next step, Pip climbs onto a low rock.",
      "It is only a little higher than the grass, but his heart still beats quickly."
    ]
  },
  {
    A: [
      "Pip jumps.",
      "He lands safely."
    ],
    B: [
      "Pip jumps from the rock.",
      "His wings open, and he lands safely."
    ],
    C: [
      "Pip takes a tiny jump.",
      "Without thinking, his wings spread open.",
      "A moment later, he lands safely on the soft grass."
    ]
  },
  {
    A: [
      "“I did it!” says Pip."
    ],
    B: [
      "Pip smiles.",
      "“I did it!”",
      "“You did the first step,” says Gail."
    ],
    C: [
      "Pip stares at his wings in surprise.",
      "“I did it!” Gail smiles.",
      "“Yes.",
      "And that was only your first step.”"
    ]
  },
  {
    A: [
      "The hill is higher.",
      "Pip feels afraid again."
    ],
    B: [
      "They try a higher hill.",
      "Pip becomes afraid again."
    ],
    C: [
      "Soon they reach a slightly higher hill.",
      "Pip looks down and feels the old fear return."
    ]
  },
  {
    A: [
      "Pip falls.",
      "“I can’t do it.”"
    ],
    B: [
      "Pip tries, but he falls onto the grass.",
      "“I knew I couldn’t do it.”"
    ],
    C: [
      "Pip tries again, but this time he tumbles into the grass.",
      "Embarrassed and disappointed, he says, “See?",
      "I knew I couldn’t fly.”"
    ]
  },
  {
    A: [
      "“Try one more time,” says Gail."
    ],
    B: [
      "“One fall does not mean you have failed,” says Gail.",
      "“Let’s try one more time.”"
    ],
    C: [
      "Gail sits beside him.",
      "“One fall does not decide the whole story,” she says.",
      "“We can try one more time.”"
    ]
  },
  {
    A: [
      "Pip jumps again.",
      "The wind lifts him."
    ],
    B: [
      "Pip tries again.",
      "A gentle wind lifts his wings.",
      "He glides!"
    ],
    C: [
      "Pip spreads his wings and jumps again.",
      "A gentle wind slides beneath them.",
      "For the first time since his fall, he glides across the grass."
    ]
  },
  {
    A: [
      "A baby bird is in danger."
    ],
    B: [
      "Suddenly, a baby bird slips toward the edge of its nest.",
      "It needs help."
    ],
    C: [
      "Suddenly, a strong gust shakes the tallest tree.",
      "A baby bird slips toward the edge of its nest and cries for help."
    ]
  },
  {
    A: [
      "“I am afraid,” says Pip.",
      "“But I can try.”"
    ],
    B: [
      "Pip is still afraid.",
      "“But I can try,” he says."
    ],
    C: [
      "Pip’s legs tremble.",
      "He is still afraid, but this time he does not turn away.",
      "“I’m afraid,” he says, “but I can try.”"
    ]
  },
  {
    A: [
      "Pip flies!",
      "He saves the little bird."
    ],
    B: [
      "Pip runs, jumps, and opens his wings.",
      "He flies to the nest and helps the baby bird."
    ],
    C: [
      "Pip runs forward, leaps into the air, and spreads his wings.",
      "The wind catches him.",
      "He rises toward the treetop and gently returns the baby bird to its nest."
    ]
  },
  {
    A: [
      "Afraid? That’s okay.",
      "Try, try, try again.",
      "Open your wings—",
      "and fly again!"
    ],
    B: [
      "You can feel afraid.",
      "You can still try.",
      "Spread your wings,",
      "and reach the sky!"
    ],
    C: [
      "Being brave does not mean fear is gone.",
      "Feel the fear.",
      "Take one more try.",
      "Spread your wings—and meet the sky."
    ]
  }
], Zr = { A: "跟讀 · Read Along", B: "初階 · Early Reader", C: "進階 · Independent Reader" }, Cc = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: "../little-star-v1/gail-paper.png", x: 78, y: 70, w: 20, h: 49 },
  pip: { id: "pip", word: "Pip", x: 39, y: 70, w: 33, h: 49, sprite: { sheet: "cast.png", cell: 0, columns: 2 } },
  bird: { id: "bird", word: "bird", x: 65, y: 26, w: 14, h: 21, sprite: { sheet: "cast.png", cell: 3, columns: 2, clip: "inset(0 0 0 20%)" } },
  forest: { id: "forest", word: "forest", x: 20, y: 33, w: 23, h: 35 },
  cave: { id: "cave", word: "cave", x: 25, y: 44, w: 25, h: 32 },
  rock: { id: "rock", word: "rock", x: 23, y: 49, w: 27, h: 14 },
  nest: { id: "nest", word: "nest", x: 76, y: 25, w: 17, h: 15 },
  sky: { id: "sky", word: "sky", x: 51, y: 15, w: 29, h: 21 },
  wing: { id: "wing", word: "wing", x: 27, y: 59, w: 12, h: 20 }
}, Pc = Object.fromEntries([
  ["forest", "星光森林", "THE STARRY FOREST", "金色光點照亮森林小徑", 0],
  ["cave", "山谷洞穴", "PIP’S LITTLE CAVE", "綠色山谷中的小洞穴", 1],
  ["hill", "練習的小山坡", "ONE SMALL STEP", "柔軟草地、低矮石頭與山坡", 2],
  ["nest", "小鳥的家", "A LITTLE COURAGE", "大樹枝上的鳥巢與山谷", 3]
].map(([n, e, t, i, r]) => [n, { name: e, caption: t, alt: i, sheet: "scenes.png", cell: r }])), Lc = ["The Starry Forest", "A crying sound", "Meet Pip", "What is wrong?", "Above the clouds", "The windy day", "I can’t do it", "One small step", "Open your wings", "A little rock", "A tiny jump", "I did it!", "A higher hill", "A little tumble", "One more time", "A gentle wind", "A baby bird", "Afraid, but ready", "Pip takes flight", "Brave little wings"], Ss = ["forest", "forest", "cave", "cave", "hill", "hill", "cave", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "nest", "nest", "nest", "hill"], Ic = [["forest", "quiet"], ["hear", "valley"], ["dragon", "cave"], ["wing", "sad"], ["fly", "sky"], ["wind", "afraid"], ["afraid", "try"], ["wing", "little"], ["open", "wing"], ["rock", "high"], ["jump", "safe"], ["proud", "try"], ["hill", "afraid"], ["fall", "try"], ["practice", "try"], ["wind", "glide"], ["bird", "nest"], ["afraid", "brave"], ["fly", "help"], ["brave", "believe"]], bs = ["forest", "forest", "cave", "pip", "sky", "pip", "pip", "pip", "wing", "rock", "pip", "pip", "rock", "pip", "pip", "sky", "bird", "pip", "nest", "pip"];
function vl(n) {
  return Kr.map((e, t) => {
    const i = ["gail", ...t >= 2 ? ["pip"] : [], ...t < 2 ? ["forest"] : Ss[t] === "cave" ? ["cave"] : Ss[t] === "nest" ? ["bird", "nest"] : ["rock", "sky"], ...t === 8 ? ["wing"] : []], r = {};
    return (t === 4 || t === 5 || t === 15 || t === 18) && (r.pip = { x: t === 18 ? 38 : 46, y: t === 18 ? 64 : 39, sprite: { sheet: "cast.png", cell: 2, columns: 2 }, w: 39, h: 58 }), [8, 9, 10, 11, 12, 17, 19].includes(t) && (r.pip = { sprite: { sheet: "cast.png", cell: 1, columns: 2 }, w: 38, h: 57 }), (t === 9 || t === 10) && (r.pip = { ...r.pip, x: 23, y: 28 }), t === 18 && (r.bird = { x: 69, y: 28 }), { title: Lc[t], scene: Ss[t], lines: [...e[n]], words: Ic[t], objects: i, placements: r, action: "explore", mission: t === 18 ? { type: "drag", prompt: "Help the bird reach its nest.", hint: "把小鳥帶回鳥巢；也可以先點小鳥，再點巢。", answer: "bird", target: "nest" } : { type: "find", prompt: `Find ${bs[t] === "pip" ? "Pip" : `the ${bs[t]}`}.`, hint: "點場景中的物件，聽聽英文。", answer: bs[t] } };
  });
}
function yl(n) {
  const e = {}, t = (r, s, a) => {
    const o = Kr[r][n], c = Math.max(0, o.findIndex((l) => s.test(l)));
    e[r] = { ...e[r] || {}, [c]: a };
  };
  t(0, /walk|follow/i, [{ actor: "gail", x: 54, y: 70, walk: !0 }]), t(1, /hear|stops/i, [{ actor: "gail", x: 61, y: 70, rotate: -5 }]), t(2, /find|discover|dragon/i, [{ actor: "gail", x: 61, y: 70, walk: !0 }]), t(3, /ask/i, [{ actor: "gail", x: 63, y: 72, rotate: -5 }]), t(4, /fly|flying/i, [{ actor: "pip", x: 65, y: 28 }]), t(5, /wind|gust/i, [{ actor: "pip", x: 46, y: 72, rotate: -12 }]), t(6, /afraid|can’t/i, [{ actor: "pip", x: 36, y: 72, rotate: -5 }]), t(7, /open/i, [{ actor: "gail", x: 64, y: 70, walk: !0 }]), t(8, /open|stretches/i, [{ actor: "pip", x: 39, y: 67, scale: 1.04 }]), t(9, /stand|climbs/i, [{ actor: "gail", x: 52, y: 70, walk: !0 }]), t(10, /jump/i, [{ actor: "pip", x: 40, y: 42 }]);
  const i = Kr[10][n].length - 1;
  return e[10][i] = [{ actor: "pip", x: 48, y: 68 }], t(11, /smile|did|surprise/i, [{ actor: "pip", x: 48, y: 65, rotate: 5 }]), t(12, /hill/i, [{ actor: "gail", x: 54, y: 59, walk: !0 }, { actor: "pip", x: 28, y: 44, walk: !0 }]), t(13, /fall|tumble/i, [{ actor: "pip", x: 42, y: 72, rotate: -15 }]), t(14, /try|sits/i, [{ actor: "gail", x: 61, y: 72, walk: !0 }]), t(15, /lifts|glide/i, [{ actor: "pip", x: 65, y: 42 }]), t(16, /bird|gust/i, [{ actor: "bird", x: 69, y: 29, rotate: -10 }]), t(17, /try/i, [{ actor: "pip", x: 49, y: 65, walk: !0 }]), t(18, /flies|runs/i, [{ actor: "pip", x: 66, y: 30 }]), e[18][Kr[18][n].length - 1] = [{ actor: "pip", x: 66, y: 30 }, { actor: "bird", x: 76, y: 24 }], t(19, /wings|sky|fly/i, [{ actor: "pip", x: 52, y: 43 }]), e;
}
const ni = (...n) => n.map((e) => ({ text: e }));
function Dc(n) {
  const e = n === "A", t = n === "C";
  return [
    { id: "dragon", kind: "choice", prompt: "Listen. Find the dragon.", audio: "dragon", options: [{ text: "", art: "bird" }, { text: "", art: "pip" }, { text: "", art: "cave" }, { text: "", art: "nest" }], answer: [1], explanation: "Pip is a little dragon." },
    { id: "wing", kind: "choice", prompt: "Listen. Find the wing.", audio: "wing", options: [{ text: "", art: "rock" }, { text: "", art: "nest" }, { text: "", art: "wing" }, { text: "", art: "bird" }], answer: [2], explanation: "Pip opens his wings to fly." },
    { id: "feeling", kind: "choice", prompt: e ? "How does Pip feel?" : "Pip remembers his fall. How does he feel?", art: "pip", options: ni("hungry", "afraid", "sleepy", "angry"), answer: [1], explanation: "Pip is afraid of falling again." },
    { id: "action", kind: "choice", prompt: "What is Pip doing?", art: "jump", options: ni("sleeping", "eating", "reading", "trying"), answer: [3], explanation: "Pip is trying a little jump." },
    { id: "sentence", kind: "choice", prompt: t ? "Pip is afraid, but he decides to ____." : "I am afraid, but I can ____.", art: "pip", options: ni("try", "cave", "cloud", "sandwich"), answer: [0], explanation: "I am afraid, but I can try." },
    { id: "wings", kind: "choice", prompt: "Pip opens his ____.", art: "wing", options: ni("books", "shoes", "wings", "doors"), answer: [2], explanation: "Pip opens his wings." },
    { id: "order", kind: "sequence", prompt: e ? "What happens first? Tap in order." : "Put Pip’s three steps in story order.", options: [{ text: e ? "Help the bird" : "Fly to help the bird", art: "bird" }, { text: "Open his wings", art: "wing" }, { text: "Try a little jump", art: "jump" }], answer: [1, 2, 0], explanation: "First, open the wings. Next, try a little jump. Last, fly to help the bird." },
    { id: "cause", kind: "choice", prompt: e ? "Why is Pip afraid?" : t ? "What made Pip stop flying after his windy flight?" : "Why did Pip stop flying?", art: "pip", options: ni(...e ? ["He fell.", "He is hungry.", "He has no wings.", "He is tired."] : ["He fell and became afraid.", "He wanted to swim.", "He did not have wings.", "Gail told him to stop."]), answer: [0], explanation: "A strong wind knocked Pip down. He was safe, but the fall frightened him." },
    { id: "courage", kind: "choice", prompt: e ? "Pip helps the bird. Is he still afraid?" : "How does Pip feel before helping the bird?", art: "bird", options: ni(...e ? ["No. Never afraid.", "Yes, but he can try.", "He is angry.", "He wants to sleep."] : ["He is angry with Gail.", "He is afraid but willing to try.", "He wants to sleep.", "He does not care."]), answer: [1], explanation: "Pip still feels afraid. He chooses to try and help." },
    { id: "meaning", kind: "choice", prompt: e ? "What can we do when we feel afraid?" : t ? "What does this story tell us about courage?" : "What does Pip learn?", art: "wing", options: ni(...e ? ["Never try.", "Laugh at friends.", "Try one small step.", "Always hide."] : ["Only big dragons can be brave.", "Flying is always easy.", "We can try even when we are afraid.", "Dragons should never fly."]), answer: [2], explanation: "Being brave means trying even when you feel afraid. One small step can help." }
  ];
}
function wl(n, e) {
  return n.length === e.length && n.every((t, i) => t === e[i]);
}
const Sl = [
  { A: ["Gail sees a castle.", "She hears a sigh."], B: ["Gail walks to a quiet castle.", "She hears a little sigh.", "Who is inside?"], C: ["Gail follows a path to a quiet castle.", "A little sigh comes through an open window.", "She stops to listen."] },
  { A: ["Ella is a princess.", "She sits by the window."], B: ["Princess Ella sits by the window.", "She watches children play outside.", "Gail comes into the room."], C: ["Princess Ella sits beside a tall window.", "Outside, children are playing together.", "Gail steps inside and wonders why Ella looks so quiet."] },
  { A: ["Ella has a gift.", "But she feels lonely."], B: ["Ella has many gifts.", "She has blocks and toys.", "But she feels lonely."], C: ["The room is full of gifts, blocks, and toys.", "Yet Ella has no friend beside her.", "A room full of things can still feel lonely."] },
  { A: ["Gail wants to help Ella smile.", "A surprise for Ella!"], B: ["Gail wants to help Ella smile.", "“I have a surprise!” she says.", "She reaches for the blocks."], C: ["Gail wants to help, so she plans a surprise.", "Perhaps a wonderful tower will make Ella smile.", "She reaches for a box of blocks."] },
  { A: ["Gail builds with blocks.", "Ella wants to help."], B: ["Gail builds a tall tower.", "“Can I help?” asks Ella.", "“Wait! It is a surprise,” says Gail."], C: ["Gail carefully builds a tall tower with the blocks.", "Ella reaches out and asks to help.", "“Wait until it is finished!” says Gail, keeping her surprise a secret."] },
  { A: ["The blocks fall.", "Ella picks one up."], B: ["Oh no! The tower falls.", "Gail looks down at the blocks.", "Ella picks up a block to help."], C: ["The tall tower wobbles and falls across the rug.", "Gail looks disappointed.", "Ella picks up a block, hoping they can rebuild it together."] },
  { A: ["Gail makes bubbles.", "She tries a funny hat."], B: ["Gail tries more surprises.", "She makes bubbles and plays music.", "Then she puts on a funny hat."], C: ["Gail tries bubbles, music, and a funny paper hat.", "She is so busy making surprises that she forgets to ask Ella.", "The room becomes noisy."] },
  { A: ["“Please stop,” says Ella.", "Gail stops to listen."], B: ["Ella covers her ears.", "“Please stop,” she says.", "Gail stops and puts the hat down."], C: ["Ella covers her ears and quietly asks Gail to stop.", "Gail puts down the paper hat.", "At last, the room is quiet enough to listen."] },
  { A: ["Gail sits with Ella.", "She listens to her friend."], B: ["Gail sits beside Ella.", "“What would you like?” she asks.", "This time, she listens."], C: ["Gail sits down at Ella’s side instead of making another surprise.", "“What would you like to do?” she asks.", "Then she waits and listens to her friend."] },
  { A: ["“Play with me,” says Ella.", "“Let us play together!”"], B: ["“I want a friend,” says Ella.", "“Will you play with me?”", "“Yes! Let us play together,” says Gail."], C: ["Ella points to the children beyond the window.", "“I do not need another gift. I want a friend to play with.”", "Gail smiles. “Let us choose something together.”"] },
  { A: ["They take a basket.", "They walk to the market."], B: ["They ask Ella’s caregiver to come.", "They take a basket to the market.", "The three walk out together."], C: ["With her caregiver’s permission, Ella chooses a trip to the market.", "Gail brings a basket, and the caregiver comes with them.", "Together, they walk out through the castle gate."] },
  { A: ["An orange rolls away.", "Ella runs to help."], B: ["An orange rolls from a market stall.", "Ella runs after it.", "Gail follows her to help."], C: ["At the market, an orange rolls away from a fruit stall.", "Ella spots it and runs a few steps to help.", "Gail follows while their caregiver waits nearby."] },
  { A: ["They pick up oranges.", "The oranges go in the basket."], B: ["They pick up the oranges together.", "Gail holds the basket for Ella.", "“Thank you!” says the seller."], C: ["Ella picks up the oranges while Gail holds the basket.", "They return the fruit to the grateful seller.", "Working together feels better than watching a surprise."] },
  { A: ["Gail has a pinwheel.", "They share it."], B: ["Gail shows Ella a paper pinwheel.", "They take turns in the open square.", "It is fun to share."], C: ["In the open square, Gail takes out a paper pinwheel.", "She and Ella take turns running while their caregiver watches.", "The little paper wings spin as the friends share."] },
  { A: ["Here comes the rain.", "The pinwheel is wet."], B: ["Drops of rain begin to fall.", "They hurry under an awning.", "The wet pinwheel stops turning."], C: ["Suddenly, rain patters across the square.", "The friends and their caregiver hurry under an awning.", "Their soggy paper pinwheel will no longer turn."] },
  { A: ["“I can help,” says Ella.", "They fix the pinwheel."], B: ["“Let us fix it,” says Ella.", "Gail holds the paper for her.", "They make the pinwheel turn again."], C: ["Ella has an idea for repairing the pinwheel.", "Gail holds the paper while Ella folds it carefully.", "They straighten the wings together until it turns again."] },
  { A: ["Ella makes a paper hat.", "It slips over Gail’s nose!"], B: ["Ella makes Gail a funny paper hat.", "The hat is a little too big.", "It slips down over Gail’s nose."], C: ["With a spare piece of paper, Ella folds a funny hat for Gail.", "Gail puts it on, but one corner slips down.", "It tickles the tip of her nose."] },
  { A: ["“Achoo!” says Gail.", "The friends laugh together."], B: ["“Achoo!” Gail gives a tiny sneeze.", "Ella begins to laugh.", "Soon both friends are laughing."], C: ["Gail gives a tiny sneeze, and the crooked hat bounces.", "Ella begins to laugh, and Gail laughs too.", "Nobody planned this smile; it grew from their shared fun."] },
  { A: ["The friends play with blocks.", "They build together."], B: ["Back at the castle, more friends join them.", "They share the blocks.", "This time, everyone helps to build."], C: ["Back at the castle, two children join Gail and Ella on the rug.", "They share the blocks and build a little castle together.", "Ella adds a piece of her own this time."] },
  { A: ["Ella saves a place for Gail.", "“Come and play, my friend!”"], B: ["Ella pulls out a chair for Gail.", "“Will you come and play tomorrow?”", "Side by side, we laugh and play. A little friendship lights the day."], C: ["Ella pulls out a chair and saves a place beside her.", "“Will you come back tomorrow?” she asks her new friend.", "Side by side, we laugh and play. A little friendship lights the day."] }
], Pn = (n) => {
  const e = { 1: [418, 65, 418, 379], 2: [835, 45, 419, 399], 5: [842, 463, 412, 379], 6: [65, 829, 330, 425], 7: [445, 855, 390, 399], 8: [845, 853, 405, 401] };
  if (e[n]) return { sheet: "support-cast.png", cell: n, columns: 3, rect: e[n], size: 1254 };
  const t = { 0: 0, 2: 3, 3: 1, 4: 2 }[n] || 0;
  return { sheet: "ella-final.png", cell: t, columns: 2, rect: [t % 2 * 611, t < 2 ? 0 : 651, 611, t < 2 ? 651 : 636], size: [1222, 1287] };
}, wn = (n) => ({ sheet: "props.png", cell: n, columns: 3 }), bl = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: "../little-star-v1/gail-paper.png", x: 27, y: 62, w: 23, h: 55.2 },
  ella: { id: "ella", word: "princess", sprite: Pn(0), x: 73, y: 64, w: 35, h: 52.5 },
  caregiver: { id: "caregiver", word: "caregiver", sprite: Pn(6), x: 87, y: 50, w: 25, h: 37.5 },
  boy: { id: "boy", word: "friend", sprite: Pn(7), x: 15, y: 69, w: 26, h: 39 },
  friend: { id: "friend", word: "friend", sprite: Pn(8), x: 86, y: 69, w: 26, h: 39 },
  gift: { id: "gift", word: "gift", sprite: wn(0), x: 47, y: 72, w: 20, h: 30 },
  block: { id: "block", word: "block", sprite: wn(1), x: 50, y: 79, w: 12, h: 18 },
  tower: { id: "tower", word: "tower", sprite: wn(2), x: 50, y: 68, w: 27, h: 40.5 },
  blocks: { id: "blocks", word: "blocks", sprite: wn(3), x: 50, y: 79, w: 30, h: 30 },
  pinwheel: { id: "pinwheel", word: "pinwheel", sprite: wn(4), x: 50, y: 62, w: 20, h: 30 },
  hat: { id: "hat", word: "hat", sprite: wn(5), x: 47, y: 68, w: 19, h: 28.5 },
  basket: { id: "basket", word: "basket", sprite: wn(6), x: 51, y: 79, w: 22, h: 33 },
  orange: { id: "orange", word: "orange", sprite: wn(7), x: 55, y: 84, w: 11, h: 16.5 },
  chair: { id: "chair", word: "chair", sprite: wn(8), x: 52, y: 73, w: 22, h: 33 },
  castle: { id: "castle", word: "castle", x: 28, y: 29, w: 34, h: 44 },
  window: { id: "window", word: "window", x: 72, y: 25, w: 30, h: 36 },
  market: { id: "market", word: "market", x: 26, y: 32, w: 36, h: 28 },
  rain: { id: "rain", word: "rain", x: 70, y: 23, w: 30, h: 26 }
}, Uc = {
  courtyard: { name: "城堡庭院", caption: "A QUIET CASTLE", alt: "象牙白城堡與花園，前方是寬闊石板路", sheet: "environments.png", cell: 0 },
  room: { name: "城堡遊戲室", caption: "A PLACE FOR A FRIEND", alt: "粉色窗簾、拱窗與寬闊遊戲地毯", sheet: "environments.png", cell: 1 },
  market: { name: "市集廣場", caption: "BETTER TOGETHER", alt: "陽光下的水果攤與寬闊市集廣場", sheet: "environments.png", cell: 2 },
  awning: { name: "雨棚下", caption: "A LITTLE SHARED JOY", alt: "雨中的市集，棚下有乾燥空地與小桌子", sheet: "environments.png", cell: 3 }
}, Nc = ["A quiet castle", "The princess at the window", "So many gifts", "A surprise", "Can I help?", "Down come the blocks", "More surprises", "Please stop", "Time to listen", "A friend to play with", "Out together", "A rolling orange", "Helping hands", "A little pinwheel", "Here comes the rain", "Let us fix it", "A funny paper hat", "A little laugh", "Everyone can help", "A place beside me"], Fc = ["courtyard", ...Array(9).fill("room"), "courtyard", "market", "market", "market", "awning", "awning", "awning", "awning", "room", "room"], kc = [["castle", "listen"], ["princess", "window"], ["gift", "lonely"], ["surprise", "smile"], ["blocks", "help"], ["blocks", "help"], ["surprise", "play"], ["listen"], ["listen", "friend"], ["play", "together"], ["basket", "market"], ["orange", "help"], ["orange", "basket", "together"], ["pinwheel", "share"], ["rain", "pinwheel"], ["help", "together"], ["surprise", "play"], ["laugh", "smile"], ["friend", "share", "blocks"], ["friend", "smile", "together"]], Oc = [["castle"], ["window"], ["gift", "blocks"], ["gift", "blocks"], ["tower", "block"], ["blocks", "block"], ["hat", "pinwheel"], ["hat"], ["window"], ["window"], ["basket", "castle", "caregiver"], ["orange", "market", "caregiver"], ["orange", "basket", "caregiver"], ["pinwheel", "caregiver"], ["rain", "pinwheel", "caregiver"], ["pinwheel", "caregiver"], ["hat", "pinwheel", "caregiver"], ["hat", "caregiver"], ["blocks", "block", "boy", "friend"], ["chair", "blocks"]], _o = ["castle", "window", "gift", "gift", "block", "block", "hat", "ella", "ella", "ella", "basket", "orange", "orange", "pinwheel", "rain", "pinwheel", "hat", "ella", "block", "chair"];
function Ml(n) {
  return Sl.map((e, t) => {
    const i = {};
    [1, 2, 3].includes(t) && (i.ella = { sprite: Pn(1), y: 66 }), [4, 5, 12, 15].includes(t) && (i.ella = { sprite: Pn(2), w: 27, h: 38.6, y: 69 }), t === 7 && (i.ella = { sprite: Pn(3) }), t >= 17 && (i.ella = { sprite: Pn(4) }), [8, 9, 15, 18].includes(t) && (i.gail = { image: "gail-listening-v2.png", sprite: void 0, w: 24, h: 38.7, y: 69 }), t === 0 && (i.gail = { x: 76 }), [10, 11, 12, 13, 14, 15, 16, 17].includes(t) && (i.ella = { ...i.ella, x: 62 }, i.gail = { ...i.gail, x: 24 }), t === 11 && (i.orange = { x: 44, y: 82 }), t === 12 && (i.orange = { x: 37, y: 86 }), (t === 4 || t === 5) && (i.block = { x: 34, y: 84 }), t === 14 && (i.pinwheel = { x: 45, y: 69 }), t === 15 && (i.pinwheel = { x: 45, y: 72 }), t === 18 && (i.ella = { sprite: Pn(5), w: 26, h: 35.9, y: 70 }, i.gail = { ...i.gail, x: 36 }, i.ella = { ...i.ella, x: 65 }, i.blocks = { x: 50, y: 86, w: 24, h: 24 }, i.block = { x: 51, y: 74 });
    let r = { type: "find", prompt: `Find the ${bl[_o[t]].word}.`, hint: "點場景中的物件，聽聽英文。", answer: _o[t] };
    return [4, 5, 18].includes(t) && (r = { type: "drag", prompt: "Add a block. Help build together.", hint: "將小積木拖到積木堆；也可以先點小積木，再點積木堆。", answer: "block", target: t === 4 ? "tower" : "blocks" }), t === 12 && (r = { type: "drag", prompt: "Put the orange in the basket.", hint: "把橘子拖進籃子；也可以先點橘子，再點籃子。", answer: "orange", target: "basket" }), t === 13 && (r = { type: "drag", prompt: "Share the pinwheel with Ella.", hint: "把風車拖給 Ella，或依序點風車、Ella。", answer: "pinwheel", target: "ella" }), t === 15 && (r = { type: "sequence", prompt: "Tap Ella, then the pinwheel.", hint: "先點 Ella，再點風車，一起修好。", answer: "pinwheel", steps: ["ella", "pinwheel"] }), { title: Nc[t], scene: Fc[t], lines: [...e[n]], words: kc[t], objects: [.../* @__PURE__ */ new Set(["gail", ...t === 0 ? [] : ["ella"], ...Oc[t]])], placements: i, mission: r, action: "explore" };
  });
}
function El(n) {
  const e = {}, t = (i, r, s) => {
    const a = Math.max(0, Sl[i][n].findIndex((o) => r.test(o)));
    e[i] = { ...e[i], [a]: s };
  };
  return t(0, /castle/i, [{ actor: "gail", x: 47, y: 65, walk: !0 }]), t(1, /Gail/i, [{ actor: "gail", x: 43, y: 65, walk: !0 }]), t(3, /blocks|idea/i, [{ actor: "gail", x: 37, y: 65, walk: !0 }]), t(4, /build/i, [{ actor: "block", x: 50, y: 49 }]), t(5, /picks|picks up/i, [{ actor: "block", x: 64, y: 71 }]), t(6, /hat/i, [{ actor: "hat", x: 27, y: 43, rotate: -12 }]), t(7, /puts|stops/i, [{ actor: "hat", x: 46, y: 80, rotate: 12 }]), t(8, /sits/i, [{ actor: "gail", x: 39, y: 68 }]), t(9, /together/i, [{ actor: "gail", x: 43, y: 68 }]), t(10, /walk/i, [{ actor: "gail", x: 41, y: 65, walk: !0 }, { actor: "ella", x: 67, y: 64, walk: !0 }, { actor: "caregiver", x: 85, y: 50, walk: !0 }]), t(11, /roll/i, [{ actor: "orange", x: 35, y: 83, rotate: 100 }]), t(11, /runs/i, [{ actor: "ella", x: 47, y: 65, walk: !0 }]), t(12, /basket/i, [{ actor: "orange", x: 51, y: 77 }]), t(13, /turns|share/i, [{ actor: "pinwheel", x: 60, y: 62, rotate: 20 }]), t(14, /hurry|wet/i, [{ actor: "gail", x: 31, y: 65, walk: !0 }, { actor: "ella", x: 61, y: 65, walk: !0 }, { actor: "pinwheel", x: 46, y: 72, rotate: 35 }]), t(15, /fix|folds/i, [{ actor: "pinwheel", x: 45, y: 72, rotate: 0 }]), t(16, /hat/i, [{ actor: "hat", x: 24, y: 42, rotate: -13 }]), t(16, /slips|tickles/i, [{ actor: "hat", x: 24, y: 48, rotate: -18 }]), t(17, /sneeze|Achoo/i, [{ actor: "hat", x: 33, y: 51, rotate: 25 }]), t(18, /build|adds/i, [{ actor: "block", x: 50, y: 78 }]), t(19, /chair|place/i, [{ actor: "chair", x: 56, y: 73 }]), e;
}
const Bc = (n) => `images/story/princess-v1/quiz/scene-${String(n).padStart(2, "0")}.png`, tn = (n, e, t, i, r, s) => ({ id: n, kind: "choice", prompt: e, image: Bc(t), imageAlt: "故事插圖：" + ["Ella 坐在窗邊", "Ella 撿起積木", "Gail 傾聽 Ella", "兩人收橘子", "兩人修風車", "朋友一起玩積木"][t - 1], options: i.map((a) => ({ text: a })), answer: [r], explanation: s });
function Gc(n) {
  const e = n === "A", t = n === "C", i = [
    tn("princess", "Who is Ella?", 1, ["a seller", "a princess", "a dragon", "a teacher"], 1, "Ella is a princess."),
    tn("lonely", e ? "How does Ella feel at first?" : "Ella has many gifts. How does she feel at first?", 1, ["hungry", "angry", "lonely", "sleepy"], 2, "Ella feels lonely because she wants a friend to play with."),
    tn("blocks", "What is on the rug?", 2, ["blocks", "oranges", "baskets", "pinwheels"], 0, "There are blocks on the rug."),
    tn("listen", e ? "What does Gail do?" : "What does Gail do after Ella asks her to stop?", 3, ["She runs away.", "She makes more noise.", "She buys a gift.", "She listens."], 3, "Gail stops and listens to Ella."),
    tn("orange", "What are they putting in the basket?", 4, ["gifts", "oranges", "blocks", "hats"], 1, "They put oranges in the basket."),
    tn("pinwheel", "What are they fixing?", 5, ["a chair", "a window", "a pinwheel", "a basket"], 2, "They fix the wet pinwheel together."),
    tn("wish", e ? "What does Ella want?" : "What does Ella want more than another gift?", 3, ["a friend to play with", "a bigger castle", "more surprises", "a new crown"], 0, "Ella wants a friend to play with."),
    tn("rain", e ? "Why is the pinwheel wet?" : "Why does the pinwheel stop turning?", 5, ["It is too sunny.", "A block falls on it.", "Gail paints it.", "Rain makes the paper wet."], 3, "The rain makes the paper wet, so they repair it together."),
    tn("laugh", t ? "Why does Ella laugh naturally in the story?" : "Why does Ella begin to laugh?", 6, ["She receives a crown.", "Gail sneezes under a funny hat.", "Someone tells her to smile.", "The castle is empty."], 1, "Gail’s funny hat slips onto her nose. She sneezes, and they laugh together."),
    tn("meaning", e ? "What helps a friend?" : t ? "What does Gail learn about friendship?" : "What does Gail learn?", 6, ["Always choosing for them.", "Buying more and more gifts.", "Listening and playing together.", "Making them smile."], 2, "Friends listen, share, and choose things together.")
  ], r = [
    [["Ella runs in the rain.", "Ella sits by the window.", "Ella buys an orange.", "Ella builds a tower."], 1, "Ella sits by the window at the beginning."],
    [["Ella opens a gift.", "Ella holds a pinwheel.", "Ella picks up a block.", "Ella puts on a hat."], 2, "The tower falls, and Ella picks up a block."],
    [["Gail listens to Ella.", "Gail runs to the market.", "Gail collects oranges.", "Gail opens a gift."], 0, "Gail sits down and listens to her friend."],
    [["They build a castle.", "They repair a pinwheel.", "They put on paper hats.", "They put oranges in a basket."], 3, "The friends help collect the oranges."],
    [["They pick up blocks.", "They fix the pinwheel.", "They buy oranges.", "They open gifts."], 1, "Under the awning, they fix the wet pinwheel."],
    [["Ella sits alone.", "They run in the rain.", "The friends play together.", "They collect oranges."], 2, "Back at the castle, everyone joins in."]
  ], s = [["Run in the rain", "Sit by the window", "Buy an orange", "Build a tower"], ["Open a gift", "Hold a pinwheel", "Pick up a block", "Put on a hat"], ["Listen to a friend", "Run to the market", "Collect oranges", "Open a gift"], ["Build a castle", "Fix a pinwheel", "Put on hats", "Collect oranges"], ["Pick up blocks", "Fix a pinwheel", "Buy oranges", "Open gifts"], ["Sit alone", "Run in the rain", "Play together", "Collect oranges"]], a = [
    ["Ella runs through the rain outside.", "Ella sits quietly beside the castle window.", "Ella buys fruit from the seller.", "Ella adds a block to the tower."],
    ["Ella opens another wrapped gift.", "Ella holds the spinning pinwheel.", "Ella picks up a block after the tower falls.", "Ella wears the new paper hat."],
    ["Gail listens while Ella shares her wish.", "Gail hurries alone to the market.", "Gail gathers fruit from the ground.", "Gail opens a surprise for Ella."],
    ["They build a castle out of blocks.", "They fold the wet pinwheel back into shape.", "They try on their paper hats.", "They collect oranges together in a basket."],
    ["They rebuild the fallen block tower.", "They work together to repair the wet pinwheel.", "They buy fruit for a picnic.", "They open the gifts in Ella’s room."],
    ["Ella sits alone among her many gifts.", "The friends hurry through the rain.", "The friends laugh and build with blocks together.", "They return oranges to the market seller."]
  ];
  return [...i, ...r.map(([o, c, l], h) => tn("picture-" + (h + 1), e ? "Look. What happens?" : t ? "Which sentence best matches this scene?" : "Which sentence matches the picture?", h + 1, e ? s[h] : t ? a[h] : o, c, l))];
}
const zc = [
  { A: ["What is that light?"], B: ["Gail sees a tiny light outside her window.", "“What is that?” she asks."], C: ["One quiet night, Gail sees a tiny blue-gold light dancing outside her bedroom window.", "“What is that?” she wonders."] },
  { A: ["Hello, little light."], B: ["The light flies into the room.", "It is a little moth!"], C: ["The light floats into the room and circles Gail.", "It is a gentle little moth with glowing wings."] },
  { A: ["Wait for me!"], B: ["The moth flies to the window.", "“Wait for me!” says Gail."], C: ["The moth sweeps toward the open window, leaving a sparkling trail.", "Gail follows. “Wait for me!”"] },
  { A: ["Wow! A garden!"], B: ["Gail steps into a moonlight garden.", "Everything is big and bright."], C: ["Beyond the window, Gail steps into a vast moonlight garden.", "Giant leaves shimmer around her like a secret world."] },
  { A: ["The flowers are sleeping."], B: ["All the flowers are closed.", "“Why are they sleeping?” asks Gail."], C: ["Every flower in the garden is tightly closed.", "“Why are the flowers still sleeping under the moon?” Gail asks."] },
  { A: ["Can you hear it?"], B: ["A tiny bell rings far away.", "Gail stops to listen."], C: ["A tiny silver sound drifts through the garden.", "Gail cups her ear. “Can you hear it?”"] },
  { A: ["Let’s follow the light."], B: ["Blue lights make a path.", "Gail follows them."], C: ["A trail of blue lights curls through the tall grass.", "“Let’s follow the light,” Gail says."] },
  { A: ["The bridge is in the fog."], B: ["A little bridge hides in the fog.", "Gail walks slowly."], C: ["Silver fog rolls across a little bridge and hides the other side.", "Gail takes one careful step forward."] },
  { A: ["Are you lost?"], B: ["A little frog sits by the pond.", "“Are you lost?” Gail asks."], C: ["Beside the pond, Gail hears a tiny worried sound.", "A little frog is looking around. “Are you lost?” she asks."] },
  { A: ["This way!"], B: ["Gail helps the frog onto a lily pad.", "The frog points to the hill."], C: ["Gail helps the frog reach a broad lily pad.", "The frog smiles and points toward a distant hill. “This way!”"] },
  { A: ["So many mushrooms!"], B: ["They walk into a mushroom forest.", "The path winds between them."], C: ["Together they enter a forest of enormous glowing mushrooms.", "The winding path twists deeper into the night."] },
  { A: ["It is dark."], B: ["A cloud covers the moon.", "The forest becomes dark."], C: ["A heavy cloud slides across the moon, and the mushroom forest turns dark.", "Gail holds the frog close."] },
  { A: ["We have light!"], B: ["The moth and fireflies shine.", "“We have light!” says Gail."], C: ["The moth lifts its glowing wings, and dozens of fireflies answer.", "“We have light!” Gail cheers."] },
  { A: ["I found the path!"], B: ["The lights show a hidden path.", "The grass opens for them."], C: ["The fireflies gather over a path hidden in the grass.", "“I found the path!” Gail says as the leaves part."] },
  { A: ["There is the bell!"], B: ["A silver bell hangs in the moon tree.", "It is very high."], C: ["At the top of the hill stands a giant moon tree.", "A silver bell is tangled high among its curling branches."] },
  { A: ["How can we reach it?"], B: ["Gail cannot reach the bell.", "Everyone stops to think."], C: ["Gail stretches as high as she can, but the bell is still too far away.", "“How can we reach it?” she asks."] },
  { A: ["We can do it together."], B: ["The frog jumps.", "Gail and the moth help."], C: ["The frog springs from a smooth stone while the moth guides Gail’s hands.", "Working together, they loosen the bell."] },
  { A: ["Ring, ring!"], B: ["The silver bell rings.", "Moonlight flows through the garden."], C: ["The silver bell rings clear and bright.", "Moonlight pours from the tree like shining water and races through the garden."] },
  { A: ["The flowers are awake!"], B: ["Every flower opens.", "The garden is full of color."], C: ["One by one, every sleeping flower opens its glowing petals.", "“The flowers are awake!” Gail cries."] },
  { A: ["Good night, Moonlight Garden."], B: ["Gail is back in bed.", "A moonlight flower rests beside her."], C: ["When Gail opens her eyes, she is safely back in bed.", "A tiny moonlight flower rests on her pillow. “Good night, Moonlight Garden.”"] }
], Tl = [
  "瑜瑜在窗外看見一點神祕微光。",
  "微光飛進房間，原來是一隻發亮的小飛蛾。",
  "小飛蛾飛向窗外，瑜瑜趕緊跟上。",
  "瑜瑜踏進巨大的月光花園。",
  "花園裡的花全都緊緊閉著。",
  "遠方傳來一聲細小的鈴響。",
  "藍色光點在草間排成一條路。",
  "小橋被銀白色的霧遮住了。",
  "池塘邊有一隻迷路的小青蛙。",
  "瑜瑜幫青蛙跳上荷葉，青蛙指向山丘。",
  "他們走進巨大的蘑菇森林。",
  "雲遮住月亮，四周暗了下來。",
  "小飛蛾與螢火蟲一起照亮森林。",
  "光點找出了藏在草裡的小路。",
  "山丘上的月亮樹纏著一只銀鈴。",
  "銀鈴太高了，大家一起想辦法。",
  "瑜瑜、青蛙和小飛蛾合作取下銀鈴。",
  "鈴聲響起，月光流遍整座花園。",
  "所有花朵一朵一朵醒來綻放。",
  "瑜瑜回到床上，枕邊留著一朵月光花。"
], Et = (n, e, t, i, r = 18, s = 18) => ({ id: n, word: e, x: t, y: i, w: r, h: s }), Al = {
  light: Et("light", "light", 73, 25, 18, 22),
  moth: Et("moth", "moth", 75, 23, 18, 23),
  window: Et("window", "window", 77, 30, 28, 45),
  garden: Et("garden", "garden", 50, 45, 38, 42),
  flower: Et("flower", "flower", 74, 59, 26, 35),
  bell: Et("bell", "bell", 66, 15, 14, 20),
  path: Et("path", "path", 57, 72, 30, 25),
  bridge: Et("bridge", "bridge", 67, 47, 30, 27),
  fog: Et("fog", "fog", 53, 63, 42, 29),
  frog: Et("frog", "frog", 66, 65, 18, 24),
  lily: Et("lily", "lily pad", 67, 68, 27, 22),
  mushroom: Et("mushroom", "mushroom", 22, 36, 28, 48),
  moon: Et("moon", "moon", 78, 13, 16, 20),
  firefly: Et("firefly", "firefly", 70, 25, 27, 27),
  tree: Et("tree", "moon tree", 63, 33, 44, 54),
  together: Et("together", "together", 50, 54, 48, 56),
  bed: Et("bed", "bed", 48, 67, 58, 42)
}, Rl = ["bedroom", "visitor", "window", "garden", "sleeping-flowers", "bell-sound", "light-path", "fog-bridge", "lost-frog", "lily-pad", "mushroom-forest", "dark-forest", "firefly-light", "hidden-path", "moon-tree", "reach-bell", "teamwork", "moonlight-flow", "flowers-awake", "good-night"], Hc = ["A TINY LIGHT", "A LITTLE VISITOR", "WAIT FOR ME", "THE MOONLIGHT GARDEN", "SLEEPING FLOWERS", "A DISTANT BELL", "FOLLOW THE LIGHT", "THE FOGGY BRIDGE", "A LOST FRIEND", "THIS WAY", "THE MUSHROOM FOREST", "WHEN THE MOON HIDES", "WE HAVE LIGHT", "THE HIDDEN PATH", "THE MOON TREE", "HOW CAN WE REACH IT?", "TOGETHER", "RING, RING!", "THE GARDEN AWAKES", "GOOD NIGHT"], Vc = Object.fromEntries(Rl.map((n, e) => [n, { name: Tl[e], caption: Hc[e], alt: `《瑜瑜與月光花園》第 ${e + 1} 幕手繪插畫`, sheet: `scenes-${String(Math.floor(e / 4) * 4 + 1).padStart(2, "0")}-${String(Math.floor(e / 4) * 4 + 4).padStart(2, "0")}.webp`, cell: e % 4 }])), Wc = ["A tiny light", "A little visitor", "Wait for me", "The Moonlight Garden", "Sleeping flowers", "A distant bell", "Follow the light", "The foggy bridge", "A lost friend", "This way", "The mushroom forest", "When the moon hides", "We have light", "The hidden path", "The moon tree", "How can we reach it?", "Together", "Ring, ring!", "The garden awakes", "Good night"], Xc = [["light", "window"], ["moth", "light"], ["window", "follow"], ["garden", "moon"], ["flower", "sleep"], ["bell", "hear"], ["path", "light"], ["bridge", "fog"], ["frog", "lost"], ["lily", "help"], ["mushroom", "forest"], ["dark", "moon"], ["firefly", "light"], ["path", "find"], ["tree", "bell"], ["reach", "think"], ["together", "help"], ["bell", "moonlight"], ["flower", "awake"], ["bed", "good night"]], qc = ["light", "moth", "window", "garden", "flower", "bell", "path", "bridge", "frog", "lily", "mushroom", "moon", "firefly", "path", "bell", "bell", "together", "bell", "flower", "bed"], Yc = {
  0: { light: { x: 75, y: 20 } },
  1: { moth: { x: 74, y: 23 } },
  2: { moth: { x: 72, y: 24 } },
  3: { garden: { x: 50, y: 50 } },
  4: { flower: { x: 76, y: 54 } },
  5: { bell: { x: 82, y: 13 } },
  6: { path: { x: 66, y: 72 } },
  7: { bridge: { x: 68, y: 47 } },
  8: { frog: { x: 65, y: 64 } },
  9: { frog: { x: 66, y: 60 }, lily: { x: 70, y: 70 } },
  10: { mushroom: { x: 18, y: 32 } },
  11: { moon: { x: 74, y: 12 } },
  12: { firefly: { x: 76, y: 25 } },
  13: { path: { x: 76, y: 68 } },
  14: { tree: { x: 64, y: 34 }, bell: { x: 70, y: 12 } },
  15: { bell: { x: 68, y: 13 } },
  16: { together: { x: 53, y: 52 } },
  17: { bell: { x: 69, y: 13 } },
  18: { flower: { x: 76, y: 53 } },
  19: { bed: { x: 52, y: 68 } }
}, jc = /* @__PURE__ */ new Set([4, 8, 11, 15, 18]);
function Cl(n) {
  return zc.map((e, t) => {
    const i = qc[t], r = [i, ...i !== "moth" && [1, 2, 12].includes(t) ? ["moth"] : [], ...i !== "frog" && t >= 8 && t <= 18 ? ["frog"] : [], ...i !== "bell" && t >= 14 && t <= 18 ? ["bell"] : [], ...t === 15 ? ["together"] : []], s = t === 8 ? { type: "find", prompt: "Who is lost?", hint: "找一找池塘邊需要幫助的小朋友。", answer: "frog" } : t === 15 ? { type: "sequence", prompt: "Tap Gail’s team, then the bell.", hint: "先點一起想辦法的夥伴，再點樹上的銀鈴。", answer: "bell", steps: ["together", "bell"] } : t === 18 ? { type: "sequence", prompt: "What happens after the bell rings? Tap bell, then flower.", hint: "依照故事因果順序點銀鈴，再點盛開的花。", answer: "flower", steps: ["bell", "flower"] } : { type: "find", prompt: `Find the ${Al[i].word}.`, hint: "在插畫裡找一找，再點它聽英文。", answer: i };
    return { title: Wc[t], scene: Rl[t], lines: [...e[n]], translation: Tl[t], words: Xc[t], objects: [...new Set(r)], placements: Yc[t], mission: s, checkpoint: jc.has(t), action: "dream" };
  });
}
function Pl(n) {
  return {};
}
const Sn = (...n) => n.map((e) => ({ text: e }));
function $c(n) {
  const e = n === "A", t = n === "C";
  return [
    { id: "moth", kind: "choice", prompt: e ? "Who flies into Gail’s room?" : "What is the tiny light that visits Gail?", art: "moth", options: Sn("A frog", "A moth", "A bird", "A flower"), answer: [1], explanation: "A little glowing moth flies into Gail’s room." },
    { id: "garden", kind: "choice", prompt: "Where does Gail go?", art: "garden", options: Sn("A moonlight garden", "A busy station", "A classroom", "A shop"), answer: [0], explanation: "Gail enters the Moonlight Garden." },
    { id: "flowers", kind: "choice", prompt: e ? "What is sleeping?" : "What is unusual about the garden?", art: "flower", options: Sn("The flowers are closed.", "The bridge is red.", "The frog is flying.", "The sun is bright."), answer: [0], explanation: "All the flowers are closed and sleeping." },
    { id: "frog", kind: "choice", prompt: e ? "Who is lost?" : "Why does Gail stop beside the pond?", art: "frog", options: Sn("The moth", "The frog", "The moon", "The bell"), answer: [1], explanation: "Gail finds a little lost frog beside the pond." },
    { id: "dark", kind: "choice", prompt: t ? "What causes the mushroom forest to become dark?" : "Why does it get dark?", art: "mushroom", options: Sn("A cloud covers the moon.", "The bell falls.", "Gail closes a door.", "The frog sleeps."), answer: [0], explanation: "A cloud covers the moon, so the forest becomes dark." },
    { id: "light", kind: "choice", prompt: "Who helps make light in the dark?", art: "firefly", options: Sn("Fireflies and the moth", "The bridge", "The flowers", "The rocks"), answer: [0], explanation: "The moth and fireflies glow together." },
    { id: "bell", kind: "choice", prompt: "Where is the silver bell?", art: "bell", options: Sn("Under the bed", "In the moon tree", "On a lily pad", "Inside a mushroom"), answer: [1], explanation: "The silver bell is tangled in the moon tree." },
    { id: "teamwork", kind: "choice", prompt: t ? "How do Gail and her friends solve the problem?" : "How do they reach the bell?", art: "tree", options: Sn("They work together.", "They go home.", "They wait for morning.", "They close the flowers."), answer: [0], explanation: "Gail, the frog, and the moth work together." },
    { id: "order", kind: "sequence", prompt: "Put the story in order.", options: [{ text: "Meet the frog", art: "frog" }, { text: "Find the bell", art: "bell" }, { text: "Follow the lights", art: "path" }, { text: "Flowers open", art: "flower" }], answer: [2, 0, 1, 3], explanation: "First follow the lights, meet the frog, find the bell, and then the flowers open." },
    { id: "cause", kind: "choice", prompt: t ? "Why do the flowers finally open?" : "What wakes the flowers?", art: "flower", options: Sn("The silver bell rings.", "The frog jumps away.", "Gail reads a book.", "The fog grows thicker."), answer: [0], explanation: "When the silver bell rings, moonlight flows through the garden and wakes the flowers." }
  ];
}
const Ja = "180", Kc = 0, xo = 1, Zc = 2, Ll = 1, Jc = 2, Cn = 3, Jn = 0, Bt = 1, Ln = 2, jn = 0, Bi = 1, as = 2, vo = 3, yo = 4, Qc = 5, di = 100, eh = 101, th = 102, nh = 103, ih = 104, rh = 200, sh = 201, ah = 202, oh = 203, sa = 204, aa = 205, lh = 206, ch = 207, hh = 208, dh = 209, uh = 210, fh = 211, ph = 212, mh = 213, gh = 214, oa = 0, la = 1, ca = 2, Hi = 3, ha = 4, da = 5, ua = 6, fa = 7, Il = 0, _h = 1, xh = 2, $n = 0, vh = 1, yh = 2, wh = 3, Sh = 4, bh = 5, Mh = 6, Eh = 7, Dl = 300, Vi = 301, Wi = 302, pa = 303, ma = 304, ms = 306, os = 1e3, fi = 1001, ga = 1002, hn = 1003, Th = 1004, Er = 1005, _n = 1006, Ms = 1007, pi = 1008, Fn = 1009, Ul = 1010, Nl = 1011, ar = 1012, Qa = 1013, _i = 1014, Un = 1015, mr = 1016, eo = 1017, to = 1018, or = 1020, Fl = 35902, kl = 35899, Ol = 1021, Bl = 1022, cn = 1023, lr = 1026, cr = 1027, Gl = 1028, no = 1029, zl = 1030, io = 1031, ro = 1033, Jr = 33776, Qr = 33777, es = 33778, ts = 33779, _a = 35840, xa = 35841, va = 35842, ya = 35843, wa = 36196, Sa = 37492, ba = 37496, Ma = 37808, Ea = 37809, Ta = 37810, Aa = 37811, Ra = 37812, Ca = 37813, Pa = 37814, La = 37815, Ia = 37816, Da = 37817, Ua = 37818, Na = 37819, Fa = 37820, ka = 37821, Oa = 36492, Ba = 36494, Ga = 36495, za = 36283, Ha = 36284, Va = 36285, Wa = 36286, Ah = 3200, Rh = 3201, Ch = 0, Ph = 1, qn = "", qt = "srgb", Xi = "srgb-linear", ls = "linear", Ze = "srgb", yi = 7680, wo = 519, Lh = 512, Ih = 513, Dh = 514, Hl = 515, Uh = 516, Nh = 517, Fh = 518, kh = 519, So = 35044, bo = "300 es", xn = 2e3, cs = 2001;
class $i {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? !1 : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const r = i[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Rt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Es = Math.PI / 180, Xa = 180 / Math.PI;
function gr() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Rt[n & 255] + Rt[n >> 8 & 255] + Rt[n >> 16 & 255] + Rt[n >> 24 & 255] + "-" + Rt[e & 255] + Rt[e >> 8 & 255] + "-" + Rt[e >> 16 & 15 | 64] + Rt[e >> 24 & 255] + "-" + Rt[t & 63 | 128] + Rt[t >> 8 & 255] + "-" + Rt[t >> 16 & 255] + Rt[t >> 24 & 255] + Rt[i & 255] + Rt[i >> 8 & 255] + Rt[i >> 16 & 255] + Rt[i >> 24 & 255]).toLowerCase();
}
function Ve(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Oh(n, e) {
  return (n % e + e) % e;
}
function Ts(n, e, t) {
  return (1 - t) * n + t * e;
}
function Ji(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ot(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Qe {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    Qe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, i = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * i + r[6], this.y = r[1] * t + r[4] * i + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ve(i, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Ve(i, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const i = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * i - a * r + e.x, this.y = s * r + a * i + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class _r {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, i = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed  in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, i, r, s, a, o) {
    let c = i[r + 0], l = i[r + 1], h = i[r + 2], d = i[r + 3];
    const f = s[a + 0], m = s[a + 1], _ = s[a + 2], v = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = _, e[t + 3] = v;
      return;
    }
    if (d !== v || c !== f || l !== m || h !== _) {
      let p = 1 - o;
      const u = c * f + l * m + h * _ + d * v, A = u >= 0 ? 1 : -1, b = 1 - u * u;
      if (b > Number.EPSILON) {
        const T = Math.sqrt(b), C = Math.atan2(T, u * A);
        p = Math.sin(p * C) / T, o = Math.sin(o * C) / T;
      }
      const y = o * A;
      if (c = c * p + f * y, l = l * p + m * y, h = h * p + _ * y, d = d * p + v * y, p === 1 - o) {
        const T = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        c *= T, l *= T, h *= T, d *= T;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, i, r, s, a) {
    const o = i[r], c = i[r + 1], l = i[r + 2], h = i[r + 3], d = s[a], f = s[a + 1], m = s[a + 2], _ = s[a + 3];
    return e[t] = o * _ + h * d + c * m - l * f, e[t + 1] = c * _ + h * f + l * d - o * m, e[t + 2] = l * _ + h * m + o * f - c * d, e[t + 3] = h * _ - o * d - c * f - l * m, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, i, r) {
    return this._x = e, this._y = t, this._z = i, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const i = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(i / 2), h = o(r / 2), d = o(s / 2), f = c(i / 2), m = c(r / 2), _ = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * d + l * m * _, this._y = l * m * d - f * h * _, this._z = l * h * _ + f * m * d, this._w = l * h * d - f * m * _;
        break;
      case "YXZ":
        this._x = f * h * d + l * m * _, this._y = l * m * d - f * h * _, this._z = l * h * _ - f * m * d, this._w = l * h * d + f * m * _;
        break;
      case "ZXY":
        this._x = f * h * d - l * m * _, this._y = l * m * d + f * h * _, this._z = l * h * _ + f * m * d, this._w = l * h * d - f * m * _;
        break;
      case "ZYX":
        this._x = f * h * d - l * m * _, this._y = l * m * d + f * h * _, this._z = l * h * _ - f * m * d, this._w = l * h * d + f * m * _;
        break;
      case "YZX":
        this._x = f * h * d + l * m * _, this._y = l * m * d + f * h * _, this._z = l * h * _ - f * m * d, this._w = l * h * d - f * m * _;
        break;
      case "XZY":
        this._x = f * h * d - l * m * _, this._y = l * m * d - f * h * _, this._z = l * h * _ + f * m * d, this._w = l * h * d + f * m * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const i = t / 2, r = Math.sin(i);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], d = t[10], f = i + o + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (a - r) * m;
    } else if (i > o && i > d) {
      const m = 2 * Math.sqrt(1 + i - o - d);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + l) / m;
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - i - d);
      this._w = (s - l) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - i - o);
      this._w = (a - r) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ve(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const r = Math.min(1, t / i);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const i = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = i * h + a * o + r * l - s * c, this._y = r * h + a * c + s * o - i * l, this._z = s * h + a * l + i * c - r * o, this._w = a * h - i * o - r * c - s * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + i * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = i, this._y = r, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * i + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), d = Math.sin((1 - t) * h) / l, f = Math.sin(t * h) / l;
    return this._w = a * d + this._w * f, this._x = i * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), r = Math.sqrt(1 - i), s = Math.sqrt(i);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, i = 0) {
    F.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(Mo.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Mo.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6] * r, this.y = s[1] * t + s[4] * i + s[7] * r, this.z = s[2] * t + s[5] * i + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, i = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * i), h = 2 * (o * t - s * r), d = 2 * (s * i - a * t);
    return this.x = t + c * l + a * d - o * h, this.y = i + c * h + o * l - s * d, this.z = r + c * d + s * h - a * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * i + s[8] * r, this.y = s[1] * t + s[5] * i + s[9] * r, this.z = s[2] * t + s[6] * i + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this.z = Ve(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this.z = Ve(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ve(i, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const i = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - i * c, this.z = i * o - r * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return As.copy(this).projectOnVector(e), this.sub(As);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(As.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Ve(i, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, r = this.z - e.z;
    return t * t + i * i + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, i) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(i), this.y = Math.cos(t) * e, this.z = r * Math.cos(i), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const As = /* @__PURE__ */ new F(), Mo = /* @__PURE__ */ new _r();
class Fe {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, i, r, s, a, o, c, l) {
    Fe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, r, s, a, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, i, r, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = i, h[7] = a, h[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const i = e.elements, r = t.elements, s = this.elements, a = i[0], o = i[3], c = i[6], l = i[1], h = i[4], d = i[7], f = i[2], m = i[5], _ = i[8], v = r[0], p = r[3], u = r[6], A = r[1], b = r[4], y = r[7], T = r[2], C = r[5], R = r[8];
    return s[0] = a * v + o * A + c * T, s[3] = a * p + o * b + c * C, s[6] = a * u + o * y + c * R, s[1] = l * v + h * A + d * T, s[4] = l * p + h * b + d * C, s[7] = l * u + h * y + d * R, s[2] = f * v + m * A + _ * T, s[5] = f * p + m * b + _ * C, s[8] = f * u + m * y + _ * R, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - i * s * h + i * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = h * a - o * l, f = o * c - h * s, m = l * s - a * c, _ = t * d + i * f + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return e[0] = d * v, e[1] = (r * l - h * i) * v, e[2] = (o * i - r * a) * v, e[3] = f * v, e[4] = (h * t - r * c) * v, e[5] = (r * s - o * t) * v, e[6] = m * v, e[7] = (i * c - l * t) * v, e[8] = (a * t - i * s) * v, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, i, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      i * c,
      i * l,
      -i * (c * a + l * o) + a + e,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(Rs.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Rs.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Rs.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      i,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== i[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Rs = /* @__PURE__ */ new Fe();
function Vl(n) {
  for (let e = n.length - 1; e >= 0; --e)
    if (n[e] >= 65535) return !0;
  return !1;
}
function hr(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Bh() {
  const n = hr("canvas");
  return n.style.display = "block", n;
}
const Eo = {};
function dr(n) {
  n in Eo || (Eo[n] = !0, console.warn(n));
}
function Gh(n, e, t) {
  return new Promise(function(i, r) {
    function s() {
      switch (n.clientWaitSync(e, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          r();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          i();
      }
    }
    setTimeout(s, t);
  });
}
const To = /* @__PURE__ */ new Fe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Ao = /* @__PURE__ */ new Fe().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function zh() {
  const n = {
    enabled: !0,
    workingColorSpace: Xi,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === Ze && (r.r = Nn(r.r), r.g = Nn(r.g), r.b = Nn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ze && (r.r = Gi(r.r), r.g = Gi(r.g), r.b = Gi(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === qn ? ls : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, s) {
      return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), n.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), n.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({
    [Xi]: {
      primaries: e,
      whitePoint: i,
      transfer: ls,
      toXYZ: To,
      fromXYZ: Ao,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: qt },
      outputColorSpaceConfig: { drawingBufferColorSpace: qt }
    },
    [qt]: {
      primaries: e,
      whitePoint: i,
      transfer: Ze,
      toXYZ: To,
      fromXYZ: Ao,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: qt }
    }
  }), n;
}
const qe = /* @__PURE__ */ zh();
function Nn(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Gi(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let wi;
class Hh {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let i;
    if (e instanceof HTMLCanvasElement)
      i = e;
    else {
      wi === void 0 && (wi = hr("canvas")), wi.width = e.width, wi.height = e.height;
      const r = wi.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), i = wi;
    }
    return i.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = hr("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Nn(s[a] / 255) * 255;
      return i.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Nn(t[i] / 255) * 255) : t[i] = Nn(t[i]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Vh = 0;
class so {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Vh++ }), this.uuid = gr(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Cs(r[a].image)) : s.push(Cs(r[a]));
      } else
        s = Cs(r);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function Cs(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Hh.getDataURL(n) : n.data ? {
    data: Array.from(n.data),
    width: n.width,
    height: n.height,
    type: n.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Wh = 0;
const Ps = /* @__PURE__ */ new F();
class Nt extends $i {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = Nt.DEFAULT_IMAGE, t = Nt.DEFAULT_MAPPING, i = fi, r = fi, s = _n, a = pi, o = cn, c = Fn, l = Nt.DEFAULT_ANISOTROPY, h = qn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Wh++ }), this.uuid = gr(), this.name = "", this.source = new so(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Qe(0, 0), this.repeat = new Qe(1, 1), this.center = new Qe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Ps).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Ps).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Ps).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && i && r.isVector2 && i.isVector2 || r && i && r.isVector3 && i.isVector3 || r && i && r.isMatrix3 && i.isMatrix3 ? r.copy(i) : this[t] = i;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== Dl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case os:
          e.x = e.x - Math.floor(e.x);
          break;
        case fi:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ga:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case os:
          e.y = e.y - Math.floor(e.y);
          break;
        case fi:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ga:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Nt.DEFAULT_IMAGE = null;
Nt.DEFAULT_MAPPING = Dl;
Nt.DEFAULT_ANISOTROPY = 1;
class pt {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, i = 0, r = 1) {
    pt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = i, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, i, r) {
    return this.x = e, this.y = t, this.z = i, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, i = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * i + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * i + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * i + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * i + a[11] * r + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, i, r, s;
    const c = e.elements, l = c[0], h = c[4], d = c[8], f = c[1], m = c[5], _ = c[9], v = c[2], p = c[6], u = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(l + m + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, y = (m + 1) / 2, T = (u + 1) / 2, C = (h + f) / 4, R = (d + v) / 4, N = (_ + p) / 4;
      return b > y && b > T ? b < 0.01 ? (i = 0, r = 0.707106781, s = 0.707106781) : (i = Math.sqrt(b), r = C / i, s = R / i) : y > T ? y < 0.01 ? (i = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), i = C / r, s = N / r) : T < 0.01 ? (i = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(T), i = R / s, r = N / s), this.set(i, r, s, t), this;
    }
    let A = Math.sqrt((p - _) * (p - _) + (d - v) * (d - v) + (f - h) * (f - h));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (p - _) / A, this.y = (d - v) / A, this.z = (f - h) / A, this.w = Math.acos((l + m + u - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this.z = Ve(this.z, e.z, t.z), this.w = Ve(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this.z = Ve(this.z, e, t), this.w = Ve(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Ve(i, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Xh extends $i {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: _n,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, i), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new pt(0, 0, e, t), this.scissorTest = !1, this.viewport = new pt(0, 0, e, t);
    const r = { width: e, height: t, depth: i.depth }, s = new Nt(r);
    this.textures = [];
    const a = i.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: _n,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++)
      this.textures[i].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = i, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new so(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class xi extends Xh {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}
class Wl extends Nt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = hn, this.minFilter = hn, this.wrapR = fi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class qh extends Nt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = hn, this.minFilter = hn, this.wrapR = fi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class xr {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), t = new F(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(nn.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(nn.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const i = nn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, nn) : nn.fromBufferAttribute(s, a), nn.applyMatrix4(e.matrixWorld), this.expandByPoint(nn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Tr.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Tr.copy(i.boundingBox)), Tr.applyMatrix4(e.matrixWorld), this.union(Tr);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, nn), nn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Qi), Ar.subVectors(this.max, Qi), Si.subVectors(e.a, Qi), bi.subVectors(e.b, Qi), Mi.subVectors(e.c, Qi), Bn.subVectors(bi, Si), Gn.subVectors(Mi, bi), ii.subVectors(Si, Mi);
    let t = [
      0,
      -Bn.z,
      Bn.y,
      0,
      -Gn.z,
      Gn.y,
      0,
      -ii.z,
      ii.y,
      Bn.z,
      0,
      -Bn.x,
      Gn.z,
      0,
      -Gn.x,
      ii.z,
      0,
      -ii.x,
      -Bn.y,
      Bn.x,
      0,
      -Gn.y,
      Gn.x,
      0,
      -ii.y,
      ii.x,
      0
    ];
    return !Ls(t, Si, bi, Mi, Ar) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ls(t, Si, bi, Mi, Ar)) ? !1 : (Rr.crossVectors(Bn, Gn), t = [Rr.x, Rr.y, Rr.z], Ls(t, Si, bi, Mi, Ar));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, nn).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(nn).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (bn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), bn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), bn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), bn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), bn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), bn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), bn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), bn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(bn), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const bn = [
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F()
], nn = /* @__PURE__ */ new F(), Tr = /* @__PURE__ */ new xr(), Si = /* @__PURE__ */ new F(), bi = /* @__PURE__ */ new F(), Mi = /* @__PURE__ */ new F(), Bn = /* @__PURE__ */ new F(), Gn = /* @__PURE__ */ new F(), ii = /* @__PURE__ */ new F(), Qi = /* @__PURE__ */ new F(), Ar = /* @__PURE__ */ new F(), Rr = /* @__PURE__ */ new F(), ri = /* @__PURE__ */ new F();
function Ls(n, e, t, i, r) {
  for (let s = 0, a = n.length - 3; s <= a; s += 3) {
    ri.fromArray(n, s);
    const o = r.x * Math.abs(ri.x) + r.y * Math.abs(ri.y) + r.z * Math.abs(ri.z), c = e.dot(ri), l = t.dot(ri), h = i.dot(ri);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Yh = /* @__PURE__ */ new xr(), er = /* @__PURE__ */ new F(), Is = /* @__PURE__ */ new F();
class gs {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new F(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Yh.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, i.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    er.subVectors(e, this.center);
    const t = er.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), r = (i - this.radius) * 0.5;
      this.center.addScaledVector(er, r / i), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Is.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(er.copy(e.center).add(Is)), this.expandByPoint(er.copy(e.center).sub(Is))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Box3} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const Mn = /* @__PURE__ */ new F(), Ds = /* @__PURE__ */ new F(), Cr = /* @__PURE__ */ new F(), zn = /* @__PURE__ */ new F(), Us = /* @__PURE__ */ new F(), Pr = /* @__PURE__ */ new F(), Ns = /* @__PURE__ */ new F();
class Xl {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new F(), t = new F(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, Mn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = Mn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Mn.copy(this.origin).addScaledVector(this.direction, t), Mn.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, i, r) {
    Ds.copy(e).add(t).multiplyScalar(0.5), Cr.copy(t).sub(e).normalize(), zn.copy(this.origin).sub(Ds);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Cr), o = zn.dot(this.direction), c = -zn.dot(Cr), l = zn.lengthSq(), h = Math.abs(1 - a * a);
    let d, f, m, _;
    if (h > 0)
      if (d = a * c - o, f = a * o - c, _ = s * h, d >= 0)
        if (f >= -_)
          if (f <= _) {
            const v = 1 / h;
            d *= v, f *= v, m = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
          } else
            f = s, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
        else
          f = -s, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
      else
        f <= -_ ? (d = Math.max(0, -(-a * s + o)), f = d > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -d * d + f * (f + 2 * c) + l) : f <= _ ? (d = 0, f = Math.min(Math.max(-s, -c), s), m = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * s + o)), f = d > 0 ? s : Math.min(Math.max(-s, -c), s), m = -d * d + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -s : s, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
    return i && i.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(Ds).addScaledVector(Cr, f), m;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    Mn.subVectors(e.center, this.origin);
    const i = Mn.dot(this.direction), r = Mn.dot(Mn) - i * i, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = i - a, c = i + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let i, r, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (i = (e.min.x - f.x) * l, r = (e.max.x - f.x) * l) : (i = (e.max.x - f.x) * l, r = (e.min.x - f.x) * l), h >= 0 ? (s = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), i > a || s > r || ((s > i || isNaN(i)) && (i = s), (a < r || isNaN(r)) && (r = a), d >= 0 ? (o = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (o = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), i > c || o > r) || ((o > i || i !== i) && (i = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(i >= 0 ? i : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, Mn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, i, r, s) {
    Us.subVectors(t, e), Pr.subVectors(i, e), Ns.crossVectors(Us, Pr);
    let a = this.direction.dot(Ns), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    zn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Pr.crossVectors(zn, Pr));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Us.cross(zn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * zn.dot(Ns);
    return h < 0 ? null : this.at(h / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class _t {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, i, r, s, a, o, c, l, h, d, f, m, _, v, p) {
    _t.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, r, s, a, o, c, l, h, d, f, m, _, v, p);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, i, r, s, a, o, c, l, h, d, f, m, _, v, p) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = i, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = c, u[2] = l, u[6] = h, u[10] = d, u[14] = f, u[3] = m, u[7] = _, u[11] = v, u[15] = p, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new _t().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, i) {
    return this.set(
      e.x,
      t.x,
      i.x,
      0,
      e.y,
      t.y,
      i.y,
      0,
      e.z,
      t.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    const t = this.elements, i = e.elements, r = 1 / Ei.setFromMatrixColumn(e, 0).length(), s = 1 / Ei.setFromMatrixColumn(e, 1).length(), a = 1 / Ei.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * r, t[1] = i[1] * r, t[2] = i[2] * r, t[3] = 0, t[4] = i[4] * s, t[5] = i[5] * s, t[6] = i[6] * s, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, r = e.y, s = e.z, a = Math.cos(i), o = Math.sin(i), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * h, m = a * d, _ = o * h, v = o * d;
      t[0] = c * h, t[4] = -c * d, t[8] = l, t[1] = m + _ * l, t[5] = f - v * l, t[9] = -o * c, t[2] = v - f * l, t[6] = _ + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const f = c * h, m = c * d, _ = l * h, v = l * d;
      t[0] = f + v * o, t[4] = _ * o - m, t[8] = a * l, t[1] = a * d, t[5] = a * h, t[9] = -o, t[2] = m * o - _, t[6] = v + f * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const f = c * h, m = c * d, _ = l * h, v = l * d;
      t[0] = f - v * o, t[4] = -a * d, t[8] = _ + m * o, t[1] = m + _ * o, t[5] = a * h, t[9] = v - f * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const f = a * h, m = a * d, _ = o * h, v = o * d;
      t[0] = c * h, t[4] = _ * l - m, t[8] = f * l + v, t[1] = c * d, t[5] = v * l + f, t[9] = m * l - _, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const f = a * c, m = a * l, _ = o * c, v = o * l;
      t[0] = c * h, t[4] = v - f * d, t[8] = _ * d + m, t[1] = d, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = m * d + _, t[10] = f - v * d;
    } else if (e.order === "XZY") {
      const f = a * c, m = a * l, _ = o * c, v = o * l;
      t[0] = c * h, t[4] = -d, t[8] = l * h, t[1] = f * d + v, t[5] = a * h, t[9] = m * d - _, t[2] = _ * d - m, t[6] = o * h, t[10] = v * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(jh, e, $h);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, i) {
    const r = this.elements;
    return Vt.subVectors(e, t), Vt.lengthSq() === 0 && (Vt.z = 1), Vt.normalize(), Hn.crossVectors(i, Vt), Hn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Vt.x += 1e-4 : Vt.z += 1e-4, Vt.normalize(), Hn.crossVectors(i, Vt)), Hn.normalize(), Lr.crossVectors(Vt, Hn), r[0] = Hn.x, r[4] = Lr.x, r[8] = Vt.x, r[1] = Hn.y, r[5] = Lr.y, r[9] = Vt.y, r[2] = Hn.z, r[6] = Lr.z, r[10] = Vt.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const i = e.elements, r = t.elements, s = this.elements, a = i[0], o = i[4], c = i[8], l = i[12], h = i[1], d = i[5], f = i[9], m = i[13], _ = i[2], v = i[6], p = i[10], u = i[14], A = i[3], b = i[7], y = i[11], T = i[15], C = r[0], R = r[4], N = r[8], S = r[12], w = r[1], L = r[5], B = r[9], H = r[13], j = r[2], W = r[6], q = r[10], K = r[14], G = r[3], ae = r[7], de = r[11], Me = r[15];
    return s[0] = a * C + o * w + c * j + l * G, s[4] = a * R + o * L + c * W + l * ae, s[8] = a * N + o * B + c * q + l * de, s[12] = a * S + o * H + c * K + l * Me, s[1] = h * C + d * w + f * j + m * G, s[5] = h * R + d * L + f * W + m * ae, s[9] = h * N + d * B + f * q + m * de, s[13] = h * S + d * H + f * K + m * Me, s[2] = _ * C + v * w + p * j + u * G, s[6] = _ * R + v * L + p * W + u * ae, s[10] = _ * N + v * B + p * q + u * de, s[14] = _ * S + v * H + p * K + u * Me, s[3] = A * C + b * w + y * j + T * G, s[7] = A * R + b * L + y * W + T * ae, s[11] = A * N + b * B + y * q + T * de, s[15] = A * S + b * H + y * K + T * Me, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], i = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], d = e[6], f = e[10], m = e[14], _ = e[3], v = e[7], p = e[11], u = e[15];
    return _ * (+s * c * d - r * l * d - s * o * f + i * l * f + r * o * m - i * c * m) + v * (+t * c * m - t * l * f + s * a * f - r * a * m + r * l * h - s * c * h) + p * (+t * l * d - t * o * m - s * a * d + i * a * m + s * o * h - i * l * h) + u * (-r * o * h - t * c * d + t * o * f + r * a * d - i * a * f + i * c * h);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, i) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = i), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = e[9], f = e[10], m = e[11], _ = e[12], v = e[13], p = e[14], u = e[15], A = d * p * l - v * f * l + v * c * m - o * p * m - d * c * u + o * f * u, b = _ * f * l - h * p * l - _ * c * m + a * p * m + h * c * u - a * f * u, y = h * v * l - _ * d * l + _ * o * m - a * v * m - h * o * u + a * d * u, T = _ * d * c - h * v * c - _ * o * f + a * v * f + h * o * p - a * d * p, C = t * A + i * b + r * y + s * T;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / C;
    return e[0] = A * R, e[1] = (v * f * s - d * p * s - v * r * m + i * p * m + d * r * u - i * f * u) * R, e[2] = (o * p * s - v * c * s + v * r * l - i * p * l - o * r * u + i * c * u) * R, e[3] = (d * c * s - o * f * s - d * r * l + i * f * l + o * r * m - i * c * m) * R, e[4] = b * R, e[5] = (h * p * s - _ * f * s + _ * r * m - t * p * m - h * r * u + t * f * u) * R, e[6] = (_ * c * s - a * p * s - _ * r * l + t * p * l + a * r * u - t * c * u) * R, e[7] = (a * f * s - h * c * s + h * r * l - t * f * l - a * r * m + t * c * m) * R, e[8] = y * R, e[9] = (_ * d * s - h * v * s - _ * i * m + t * v * m + h * i * u - t * d * u) * R, e[10] = (a * v * s - _ * o * s + _ * i * l - t * v * l - a * i * u + t * o * u) * R, e[11] = (h * o * s - a * d * s - h * i * l + t * d * l + a * i * m - t * o * m) * R, e[12] = T * R, e[13] = (h * v * r - _ * d * r + _ * i * f - t * v * f - h * i * p + t * d * p) * R, e[14] = (_ * o * r - a * v * r - _ * i * c + t * v * c + a * i * p - t * o * p) * R, e[15] = (a * d * r - h * o * r + h * i * c - t * d * c - a * i * f + t * o * f) * R, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, i = e.x, r = e.y, s = e.z;
    return t[0] *= i, t[4] *= r, t[8] *= s, t[1] *= i, t[5] *= r, t[9] *= s, t[2] *= i, t[6] *= r, t[10] *= s, t[3] *= i, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const i = Math.cos(t), r = Math.sin(t), s = 1 - i, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + i,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      h * o + i,
      h * c - r * a,
      0,
      l * c - r * o,
      h * c + r * a,
      s * c * c + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, i) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, i, r, s, a) {
    return this.set(
      1,
      i,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, i) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, d = o + o, f = s * l, m = s * h, _ = s * d, v = a * h, p = a * d, u = o * d, A = c * l, b = c * h, y = c * d, T = i.x, C = i.y, R = i.z;
    return r[0] = (1 - (v + u)) * T, r[1] = (m + y) * T, r[2] = (_ - b) * T, r[3] = 0, r[4] = (m - y) * C, r[5] = (1 - (f + u)) * C, r[6] = (p + A) * C, r[7] = 0, r[8] = (_ + b) * R, r[9] = (p - A) * R, r[10] = (1 - (f + v)) * R, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, i) {
    const r = this.elements;
    let s = Ei.set(r[0], r[1], r[2]).length();
    const a = Ei.set(r[4], r[5], r[6]).length(), o = Ei.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], rn.copy(this);
    const l = 1 / s, h = 1 / a, d = 1 / o;
    return rn.elements[0] *= l, rn.elements[1] *= l, rn.elements[2] *= l, rn.elements[4] *= h, rn.elements[5] *= h, rn.elements[6] *= h, rn.elements[8] *= d, rn.elements[9] *= d, rn.elements[10] *= d, t.setFromRotationMatrix(rn), i.x = s, i.y = a, i.z = o, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, i, r, s, a, o = xn, c = !1) {
    const l = this.elements, h = 2 * s / (t - e), d = 2 * s / (i - r), f = (t + e) / (t - e), m = (i + r) / (i - r);
    let _, v;
    if (c)
      _ = s / (a - s), v = a * s / (a - s);
    else if (o === xn)
      _ = -(a + s) / (a - s), v = -2 * a * s / (a - s);
    else if (o === cs)
      _ = -a / (a - s), v = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, i, r, s, a, o = xn, c = !1) {
    const l = this.elements, h = 2 / (t - e), d = 2 / (i - r), f = -(t + e) / (t - e), m = -(i + r) / (i - r);
    let _, v;
    if (c)
      _ = 1 / (a - s), v = a / (a - s);
    else if (o === xn)
      _ = -2 / (a - s), v = -(a + s) / (a - s);
    else if (o === cs)
      _ = -1 / (a - s), v = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== i[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const Ei = /* @__PURE__ */ new F(), rn = /* @__PURE__ */ new _t(), jh = /* @__PURE__ */ new F(0, 0, 0), $h = /* @__PURE__ */ new F(1, 1, 1), Hn = /* @__PURE__ */ new F(), Lr = /* @__PURE__ */ new F(), Vt = /* @__PURE__ */ new F(), Ro = /* @__PURE__ */ new _t(), Co = /* @__PURE__ */ new _r();
class kn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, i = 0, r = kn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, i, r = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], h = r[9], d = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ve(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ve(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ve(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ve(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ve(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ve(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, i) {
    return Ro.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ro, t, i);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return Co.setFromEuler(this), this.setFromQuaternion(Co, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
kn.DEFAULT_ORDER = "XYZ";
class ql {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Kh = 0;
const Po = /* @__PURE__ */ new F(), Ti = /* @__PURE__ */ new _r(), En = /* @__PURE__ */ new _t(), Ir = /* @__PURE__ */ new F(), tr = /* @__PURE__ */ new F(), Zh = /* @__PURE__ */ new F(), Jh = /* @__PURE__ */ new _r(), Lo = /* @__PURE__ */ new F(1, 0, 0), Io = /* @__PURE__ */ new F(0, 1, 0), Do = /* @__PURE__ */ new F(0, 0, 1), Uo = { type: "added" }, Qh = { type: "removed" }, Ai = { type: "childadded", child: null }, Fs = { type: "childremoved", child: null };
class Gt extends $i {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Kh++ }), this.uuid = gr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Gt.DEFAULT_UP.clone();
    const e = new F(), t = new kn(), i = new _r(), r = new F(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s), i._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new _t()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Fe()
      }
    }), this.matrix = new _t(), this.matrixWorld = new _t(), this.matrixAutoUpdate = Gt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ql(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return Ti.setFromAxisAngle(e, t), this.quaternion.multiply(Ti), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Ti.setFromAxisAngle(e, t), this.quaternion.premultiply(Ti), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Lo, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Io, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Do, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Po.copy(e).applyQuaternion(this.quaternion), this.position.add(Po.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Lo, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Io, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Do, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(En.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, i) {
    e.isVector3 ? Ir.copy(e) : Ir.set(e, t, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? En.lookAt(tr, Ir, this.up) : En.lookAt(Ir, tr, this.up), this.quaternion.setFromRotationMatrix(En), r && (En.extractRotation(r.matrixWorld), Ti.setFromRotationMatrix(En), this.quaternion.premultiply(Ti.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Uo), Ai.child = e, this.dispatchEvent(Ai), Ai.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Qh), Fs.child = e, this.dispatchEvent(Fs), Fs.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), En.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), En.multiply(e.parent.matrixWorld)), e.applyMatrix4(En), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Uo), Ai.child = e, this.dispatchEvent(Ai), Ai.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, i);
    return i;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, e, Zh), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, Jh, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            s(e.shapes, d);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), d = a(e.shapes), f = a(e.skeletons), m = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (i.geometries = o), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), h.length > 0 && (i.images = h), d.length > 0 && (i.shapes = d), f.length > 0 && (i.skeletons = f), m.length > 0 && (i.animations = m), _.length > 0 && (i.nodes = _);
    }
    return i.object = r, i;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
Gt.DEFAULT_UP = /* @__PURE__ */ new F(0, 1, 0);
Gt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const sn = /* @__PURE__ */ new F(), Tn = /* @__PURE__ */ new F(), ks = /* @__PURE__ */ new F(), An = /* @__PURE__ */ new F(), Ri = /* @__PURE__ */ new F(), Ci = /* @__PURE__ */ new F(), No = /* @__PURE__ */ new F(), Os = /* @__PURE__ */ new F(), Bs = /* @__PURE__ */ new F(), Gs = /* @__PURE__ */ new F(), zs = /* @__PURE__ */ new pt(), Hs = /* @__PURE__ */ new pt(), Vs = /* @__PURE__ */ new pt();
class on {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new F(), t = new F(), i = new F()) {
    this.a = e, this.b = t, this.c = i;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, i, r) {
    r.subVectors(i, t), sn.subVectors(e, t), r.cross(sn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, i, r, s) {
    sn.subVectors(r, t), Tn.subVectors(i, t), ks.subVectors(e, t);
    const a = sn.dot(sn), o = sn.dot(Tn), c = sn.dot(ks), l = Tn.dot(Tn), h = Tn.dot(ks), d = a * l - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / d, m = (l * c - o * h) * f, _ = (a * h - o * c) * f;
    return s.set(1 - m - _, _, m);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, i, r) {
    return this.getBarycoord(e, t, i, r, An) === null ? !1 : An.x >= 0 && An.y >= 0 && An.x + An.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, i, r, s, a, o, c) {
    return this.getBarycoord(e, t, i, r, An) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, An.x), c.addScaledVector(a, An.y), c.addScaledVector(o, An.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, i, r, s, a) {
    return zs.setScalar(0), Hs.setScalar(0), Vs.setScalar(0), zs.fromBufferAttribute(e, t), Hs.fromBufferAttribute(e, i), Vs.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(zs, s.x), a.addScaledVector(Hs, s.y), a.addScaledVector(Vs, s.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, i, r) {
    return sn.subVectors(i, t), Tn.subVectors(e, t), sn.cross(Tn).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, i, r) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, i, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return sn.subVectors(this.c, this.b), Tn.subVectors(this.a, this.b), sn.cross(Tn).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return on.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return on.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, i, r, s) {
    return on.getInterpolation(e, this.a, this.b, this.c, t, i, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return on.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return on.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Ri.subVectors(r, i), Ci.subVectors(s, i), Os.subVectors(e, i);
    const c = Ri.dot(Os), l = Ci.dot(Os);
    if (c <= 0 && l <= 0)
      return t.copy(i);
    Bs.subVectors(e, r);
    const h = Ri.dot(Bs), d = Ci.dot(Bs);
    if (h >= 0 && d <= h)
      return t.copy(r);
    const f = c * d - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(i).addScaledVector(Ri, a);
    Gs.subVectors(e, s);
    const m = Ri.dot(Gs), _ = Ci.dot(Gs);
    if (_ >= 0 && m <= _)
      return t.copy(s);
    const v = m * l - c * _;
    if (v <= 0 && l >= 0 && _ <= 0)
      return o = l / (l - _), t.copy(i).addScaledVector(Ci, o);
    const p = h * _ - m * d;
    if (p <= 0 && d - h >= 0 && m - _ >= 0)
      return No.subVectors(s, r), o = (d - h) / (d - h + (m - _)), t.copy(r).addScaledVector(No, o);
    const u = 1 / (p + v + f);
    return a = v * u, o = f * u, t.copy(i).addScaledVector(Ri, a).addScaledVector(Ci, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Yl = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Vn = { h: 0, s: 0, l: 0 }, Dr = { h: 0, s: 0, l: 0 };
function Ws(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class $e {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, i);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = qt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, i, r = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, qe.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, i, r = qe.workingColorSpace) {
    if (e = Oh(e, 1), t = Ve(t, 0, 1), i = Ve(i, 0, 1), t === 0)
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - s;
      this.r = Ws(a, s, e + 1 / 3), this.g = Ws(a, s, e), this.b = Ws(a, s, e - 1 / 3);
    }
    return qe.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = qt) {
    function i(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = qt) {
    const i = Yl[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = Nn(e.r), this.g = Nn(e.g), this.b = Nn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Gi(e.r), this.g = Gi(e.g), this.b = Gi(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = qt) {
    return qe.workingToColorSpace(Ct.copy(this), e), Math.round(Ve(Ct.r * 255, 0, 255)) * 65536 + Math.round(Ve(Ct.g * 255, 0, 255)) * 256 + Math.round(Ve(Ct.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = qt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = qe.workingColorSpace) {
    qe.workingToColorSpace(Ct.copy(this), t);
    const i = Ct.r, r = Ct.g, s = Ct.b, a = Math.max(i, r, s), o = Math.min(i, r, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = h <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case i:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - i) / d + 2;
          break;
        case s:
          c = (i - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = qe.workingColorSpace) {
    return qe.workingToColorSpace(Ct.copy(this), t), e.r = Ct.r, e.g = Ct.g, e.b = Ct.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = qt) {
    qe.workingToColorSpace(Ct.copy(this), e);
    const t = Ct.r, i = Ct.g, r = Ct.b;
    return e !== qt ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, i) {
    return this.getHSL(Vn), this.setHSL(Vn.h + e, Vn.s + t, Vn.l + i);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(Vn), e.getHSL(Dr);
    const i = Ts(Vn.h, Dr.h, t), r = Ts(Vn.s, Dr.s, t), s = Ts(Vn.l, Dr.l, t);
    return this.setHSL(i, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, i = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * i + s[6] * r, this.g = s[1] * t + s[4] * i + s[7] * r, this.b = s[2] * t + s[5] * i + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ct = /* @__PURE__ */ new $e();
$e.NAMES = Yl;
let ed = 0;
class vr extends $i {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ed++ }), this.uuid = gr(), this.name = "", this.type = "Material", this.blending = Bi, this.side = Jn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = sa, this.blendDst = aa, this.blendEquation = di, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new $e(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Hi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = yi, this.stencilZFail = yi, this.stencilZPass = yi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[t] = i;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== Bi && (i.blending = this.blending), this.side !== Jn && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== sa && (i.blendSrc = this.blendSrc), this.blendDst !== aa && (i.blendDst = this.blendDst), this.blendEquation !== di && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== Hi && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wo && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== yi && (i.stencilFail = this.stencilFail), this.stencilZFail !== yi && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== yi && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a);
    }
    return i;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const r = t.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s)
        i[s] = t[s].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class ao extends vr {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new $e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new kn(), this.combine = Il, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const mt = /* @__PURE__ */ new F(), Ur = /* @__PURE__ */ new Qe();
let td = 0;
class dn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: td++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = So, this.updateRanges = [], this.gpuType = Un, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        Ur.fromBufferAttribute(this, t), Ur.applyMatrix3(e), this.setXY(t, Ur.x, Ur.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = Ji(i, this.array)), i;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, i) {
    return this.normalized && (i = Ot(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Ot(t, this.array), i = Ot(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, i, r) {
    return e *= this.itemSize, this.normalized && (t = Ot(t, this.array), i = Ot(i, this.array), r = Ot(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, i, r, s) {
    return e *= this.itemSize, this.normalized && (t = Ot(t, this.array), i = Ot(i, this.array), r = Ot(r, this.array), s = Ot(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== So && (e.usage = this.usage), e;
  }
}
class jl extends dn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class $l extends dn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class gi extends dn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let nd = 0;
const $t = /* @__PURE__ */ new _t(), Xs = /* @__PURE__ */ new Gt(), Pi = /* @__PURE__ */ new F(), Wt = /* @__PURE__ */ new xr(), nr = /* @__PURE__ */ new xr(), bt = /* @__PURE__ */ new F();
class On extends $i {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: nd++ }), this.uuid = gr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Vl(e) ? $l : jl)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e) {
    return this.indirect = e, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, i = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: i
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Fe().getNormalMatrix(e);
      i.applyNormalMatrix(s), i.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return $t.makeRotationFromQuaternion(e), this.applyMatrix4($t), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return $t.makeRotationX(e), this.applyMatrix4($t), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return $t.makeRotationY(e), this.applyMatrix4($t), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return $t.makeRotationZ(e), this.applyMatrix4($t), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, i) {
    return $t.makeTranslation(e, t, i), this.applyMatrix4($t), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, i) {
    return $t.makeScale(e, t, i), this.applyMatrix4($t), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return Xs.lookAt(e), Xs.updateMatrix(), this.applyMatrix4(Xs.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Pi).negate(), this.translate(Pi.x, Pi.y, Pi.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new gi(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let r = 0; r < i; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new xr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new F(-1 / 0, -1 / 0, -1 / 0),
        new F(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          Wt.setFromBufferAttribute(s), this.morphTargetsRelative ? (bt.addVectors(this.boundingBox.min, Wt.min), this.boundingBox.expandByPoint(bt), bt.addVectors(this.boundingBox.max, Wt.max), this.boundingBox.expandByPoint(bt)) : (this.boundingBox.expandByPoint(Wt.min), this.boundingBox.expandByPoint(Wt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new gs());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Wt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          nr.setFromBufferAttribute(o), this.morphTargetsRelative ? (bt.addVectors(Wt.min, nr.min), Wt.expandByPoint(bt), bt.addVectors(Wt.max, nr.max), Wt.expandByPoint(bt)) : (Wt.expandByPoint(nr.min), Wt.expandByPoint(nr.max));
        }
      Wt.getCenter(i);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        bt.fromBufferAttribute(e, s), r = Math.max(r, i.distanceToSquared(bt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            bt.fromBufferAttribute(o, l), c && (Pi.fromBufferAttribute(e, l), bt.add(Pi)), r = Math.max(r, i.distanceToSquared(bt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new dn(new Float32Array(4 * i.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let N = 0; N < i.count; N++)
      o[N] = new F(), c[N] = new F();
    const l = new F(), h = new F(), d = new F(), f = new Qe(), m = new Qe(), _ = new Qe(), v = new F(), p = new F();
    function u(N, S, w) {
      l.fromBufferAttribute(i, N), h.fromBufferAttribute(i, S), d.fromBufferAttribute(i, w), f.fromBufferAttribute(s, N), m.fromBufferAttribute(s, S), _.fromBufferAttribute(s, w), h.sub(l), d.sub(l), m.sub(f), _.sub(f);
      const L = 1 / (m.x * _.y - _.x * m.y);
      isFinite(L) && (v.copy(h).multiplyScalar(_.y).addScaledVector(d, -m.y).multiplyScalar(L), p.copy(d).multiplyScalar(m.x).addScaledVector(h, -_.x).multiplyScalar(L), o[N].add(v), o[S].add(v), o[w].add(v), c[N].add(p), c[S].add(p), c[w].add(p));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: e.count
    }]);
    for (let N = 0, S = A.length; N < S; ++N) {
      const w = A[N], L = w.start, B = w.count;
      for (let H = L, j = L + B; H < j; H += 3)
        u(
          e.getX(H + 0),
          e.getX(H + 1),
          e.getX(H + 2)
        );
    }
    const b = new F(), y = new F(), T = new F(), C = new F();
    function R(N) {
      T.fromBufferAttribute(r, N), C.copy(T);
      const S = o[N];
      b.copy(S), b.sub(T.multiplyScalar(T.dot(S))).normalize(), y.crossVectors(C, S);
      const L = y.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, b.x, b.y, b.z, L);
    }
    for (let N = 0, S = A.length; N < S; ++N) {
      const w = A[N], L = w.start, B = w.count;
      for (let H = L, j = L + B; H < j; H += 3)
        R(e.getX(H + 0)), R(e.getX(H + 1)), R(e.getX(H + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new dn(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let f = 0, m = i.count; f < m; f++)
          i.setXYZ(f, 0, 0, 0);
      const r = new F(), s = new F(), a = new F(), o = new F(), c = new F(), l = new F(), h = new F(), d = new F();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const _ = e.getX(f + 0), v = e.getX(f + 1), p = e.getX(f + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, v), a.fromBufferAttribute(t, p), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), o.fromBufferAttribute(i, _), c.fromBufferAttribute(i, v), l.fromBufferAttribute(i, p), o.add(h), c.add(h), l.add(h), i.setXYZ(_, o.x, o.y, o.z), i.setXYZ(v, c.x, c.y, c.z), i.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), i.setXYZ(f + 0, h.x, h.y, h.z), i.setXYZ(f + 1, h.x, h.y, h.z), i.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      bt.fromBufferAttribute(e, t), bt.normalize(), e.setXYZ(t, bt.x, bt.y, bt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, d = o.normalized, f = new l.constructor(c.length * h);
      let m = 0, _ = 0;
      for (let v = 0, p = c.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = c[v] * o.data.stride + o.offset : m = c[v] * h;
        for (let u = 0; u < h; u++)
          f[_++] = l[m++];
      }
      return new dn(f, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new On(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, i);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, d = l.length; h < d; h++) {
        const f = l[h], m = e(f, i);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const i = this.attributes;
    for (const c in i) {
      const l = i[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone());
    const r = e.attributes;
    for (const l in r) {
      const h = r[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], d = s[l];
      for (let f = 0, m = d.length; f < m; f++)
        h.push(d[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Fo = /* @__PURE__ */ new _t(), si = /* @__PURE__ */ new Xl(), Nr = /* @__PURE__ */ new gs(), ko = /* @__PURE__ */ new F(), Fr = /* @__PURE__ */ new F(), kr = /* @__PURE__ */ new F(), Or = /* @__PURE__ */ new F(), qs = /* @__PURE__ */ new F(), Br = /* @__PURE__ */ new F(), Oo = /* @__PURE__ */ new F(), Gr = /* @__PURE__ */ new F();
class Jt extends Gt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new On(), t = new ao()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const i = this.geometry, r = i.attributes.position, s = i.morphAttributes.position, a = i.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Br.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], d = s[c];
        h !== 0 && (qs.fromBufferAttribute(d, e), a ? Br.addScaledVector(qs, h) : Br.addScaledVector(qs.sub(t), h));
      }
      t.add(Br);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const i = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Nr.copy(i.boundingSphere), Nr.applyMatrix4(s), si.copy(e.ray).recast(e.near), !(Nr.containsPoint(si.origin) === !1 && (si.intersectSphere(Nr, ko) === null || si.origin.distanceToSquared(ko) > (e.far - e.near) ** 2)) && (Fo.copy(s).invert(), si.copy(e.ray).applyMatrix4(Fo), !(i.boundingBox !== null && si.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, si)));
  }
  _computeIntersections(e, t, i) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, d = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_], u = a[p.materialIndex], A = Math.max(p.start, m.start), b = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let y = A, T = b; y < T; y += 3) {
            const C = o.getX(y), R = o.getX(y + 1), N = o.getX(y + 2);
            r = zr(this, u, e, i, l, h, d, C, R, N), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
        for (let p = _, u = v; p < u; p += 3) {
          const A = o.getX(p), b = o.getX(p + 1), y = o.getX(p + 2);
          r = zr(this, a, e, i, l, h, d, A, b, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_], u = a[p.materialIndex], A = Math.max(p.start, m.start), b = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
          for (let y = A, T = b; y < T; y += 3) {
            const C = y, R = y + 1, N = y + 2;
            r = zr(this, u, e, i, l, h, d, C, R, N), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start), v = Math.min(c.count, m.start + m.count);
        for (let p = _, u = v; p < u; p += 3) {
          const A = p, b = p + 1, y = p + 2;
          r = zr(this, a, e, i, l, h, d, A, b, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function id(n, e, t, i, r, s, a, o) {
  let c;
  if (e.side === Bt ? c = i.intersectTriangle(a, s, r, !0, o) : c = i.intersectTriangle(r, s, a, e.side === Jn, o), c === null) return null;
  Gr.copy(o), Gr.applyMatrix4(n.matrixWorld);
  const l = t.ray.origin.distanceTo(Gr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Gr.clone(),
    object: n
  };
}
function zr(n, e, t, i, r, s, a, o, c, l) {
  n.getVertexPosition(o, Fr), n.getVertexPosition(c, kr), n.getVertexPosition(l, Or);
  const h = id(n, e, t, i, Fr, kr, Or, Oo);
  if (h) {
    const d = new F();
    on.getBarycoord(Oo, Fr, kr, Or, d), r && (h.uv = on.getInterpolatedAttribute(r, o, c, l, d, new Qe())), s && (h.uv1 = on.getInterpolatedAttribute(s, o, c, l, d, new Qe())), a && (h.normal = on.getInterpolatedAttribute(a, o, c, l, d, new F()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new F(),
      materialIndex: 0
    };
    on.getNormal(Fr, kr, Or, f.normal), h.face = f, h.barycoord = d;
  }
  return h;
}
class yr extends On {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], d = [];
    let f = 0, m = 0;
    _("z", "y", "x", -1, -1, i, t, e, a, s, 0), _("z", "y", "x", 1, -1, i, t, -e, a, s, 1), _("x", "z", "y", 1, 1, e, i, t, r, a, 2), _("x", "z", "y", 1, -1, e, i, -t, r, a, 3), _("x", "y", "z", 1, -1, e, t, i, r, s, 4), _("x", "y", "z", -1, -1, e, t, -i, r, s, 5), this.setIndex(c), this.setAttribute("position", new gi(l, 3)), this.setAttribute("normal", new gi(h, 3)), this.setAttribute("uv", new gi(d, 2));
    function _(v, p, u, A, b, y, T, C, R, N, S) {
      const w = y / R, L = T / N, B = y / 2, H = T / 2, j = C / 2, W = R + 1, q = N + 1;
      let K = 0, G = 0;
      const ae = new F();
      for (let de = 0; de < q; de++) {
        const Me = de * L - H;
        for (let Ge = 0; Ge < W; Ge++) {
          const tt = Ge * w - B;
          ae[v] = tt * A, ae[p] = Me * b, ae[u] = j, l.push(ae.x, ae.y, ae.z), ae[v] = 0, ae[p] = 0, ae[u] = C > 0 ? 1 : -1, h.push(ae.x, ae.y, ae.z), d.push(Ge / R), d.push(1 - de / N), K += 1;
        }
      }
      for (let de = 0; de < N; de++)
        for (let Me = 0; Me < R; Me++) {
          const Ge = f + Me + W * de, tt = f + Me + W * (de + 1), st = f + (Me + 1) + W * (de + 1), Ye = f + (Me + 1) + W * de;
          c.push(Ge, tt, Ye), c.push(tt, st, Ye), G += 6;
        }
      o.addGroup(m, G, S), m += G, f += K;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new yr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function qi(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const r = n[t][i];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = r.clone() : Array.isArray(r) ? e[t][i] = r.slice() : e[t][i] = r;
    }
  }
  return e;
}
function Ut(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = qi(n[t]);
    for (const r in i)
      e[r] = i[r];
  }
  return e;
}
function rd(n) {
  const e = [];
  for (let t = 0; t < n.length; t++)
    e.push(n[t].clone());
  return e;
}
function Kl(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const sd = { clone: qi, merge: Ut };
var ad = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, od = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qn extends vr {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ad, this.fragmentShader = od, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = qi(e.uniforms), this.uniformsGroups = rd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Zl extends Gt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new _t(), this.projectionMatrix = new _t(), this.projectionMatrixInverse = new _t(), this.coordinateSystem = xn, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wn = /* @__PURE__ */ new F(), Bo = /* @__PURE__ */ new Qe(), Go = /* @__PURE__ */ new Qe();
class an extends Zl {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Xa * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Es * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Xa * 2 * Math.atan(
      Math.tan(Es * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, i) {
    Wn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Wn.x, Wn.y).multiplyScalar(-e / Wn.z), Wn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Wn.x, Wn.y).multiplyScalar(-e / Wn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Bo, Go), t.subVectors(Go, Bo);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, i, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Es * 0.5 * this.fov) / this.zoom, i = 2 * t, r = this.aspect * i, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * i / l, r *= a.width / c, i *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Li = -90, Ii = 1;
class ld extends Gt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new an(Li, Ii, e, t);
    r.layers = this.layers, this.add(r);
    const s = new an(Li, Ii, e, t);
    s.layers = this.layers, this.add(s);
    const a = new an(Li, Ii, e, t);
    a.layers = this.layers, this.add(a);
    const o = new an(Li, Ii, e, t);
    o.layers = this.layers, this.add(o);
    const c = new an(Li, Ii, e, t);
    c.layers = this.layers, this.add(c);
    const l = new an(Li, Ii, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === xn)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === cs)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const v = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0, r), e.render(t, s), e.setRenderTarget(i, 1, r), e.render(t, a), e.setRenderTarget(i, 2, r), e.render(t, o), e.setRenderTarget(i, 3, r), e.render(t, c), e.setRenderTarget(i, 4, r), e.render(t, l), i.texture.generateMipmaps = v, e.setRenderTarget(i, 5, r), e.render(t, h), e.setRenderTarget(d, f, m), e.xr.enabled = _, i.texture.needsPMREMUpdate = !0;
  }
}
class Jl extends Nt {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = Vi, i, r, s, a, o, c, l, h) {
    super(e, t, i, r, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class cd extends xi {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const i = { width: e, height: e, depth: 1 }, r = [i, i, i, i, i, i];
    this.texture = new Jl(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new yr(5, 5, 5), s = new Qn({
      name: "CubemapFromEquirect",
      uniforms: qi(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: Bt,
      blending: jn
    });
    s.uniforms.tEquirect.value = t;
    const a = new Jt(r, s), o = t.minFilter;
    return t.minFilter === pi && (t.minFilter = _n), new ld(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, i = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, i, r);
    e.setRenderTarget(s);
  }
}
class Hr extends Gt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const hd = { type: "move" };
class Ys {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Hr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Hr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Hr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const i of e.hand.values())
          this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, i) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, i), u = this._getHandJoint(l, v);
          p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = h.position.distanceTo(d.position), m = 0.02, _ = 5e-3;
        l.inputState.pinching && f > m + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= m - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, i), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, i), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(hd)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new Hr();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class dd extends Gt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new kn(), this.environmentIntensity = 1, this.environmentRotation = new kn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const js = /* @__PURE__ */ new F(), ud = /* @__PURE__ */ new F(), fd = /* @__PURE__ */ new Fe();
class ci {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new F(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, i, r) {
    return this.normal.set(e, t, i), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, i) {
    const r = js.subVectors(i, t).cross(ud.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(e, t) {
    const i = e.delta(js), r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const i = t || fd.getNormalMatrix(e), r = this.coplanarPoint(js).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const ai = /* @__PURE__ */ new gs(), pd = /* @__PURE__ */ new Qe(0.5, 0.5), Vr = /* @__PURE__ */ new F();
class Ql {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new ci(), t = new ci(), i = new ci(), r = new ci(), s = new ci(), a = new ci()) {
    this.planes = [e, t, i, r, s, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, i, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      t[i].copy(e.planes[i]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = xn, i = !1) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], h = s[4], d = s[5], f = s[6], m = s[7], _ = s[8], v = s[9], p = s[10], u = s[11], A = s[12], b = s[13], y = s[14], T = s[15];
    if (r[0].setComponents(l - a, m - h, u - _, T - A).normalize(), r[1].setComponents(l + a, m + h, u + _, T + A).normalize(), r[2].setComponents(l + o, m + d, u + v, T + b).normalize(), r[3].setComponents(l - o, m - d, u - v, T - b).normalize(), i)
      r[4].setComponents(c, f, p, y).normalize(), r[5].setComponents(l - c, m - f, u - p, T - y).normalize();
    else if (r[4].setComponents(l - c, m - f, u - p, T - y).normalize(), t === xn)
      r[5].setComponents(l + c, m + f, u + p, T + y).normalize();
    else if (t === cs)
      r[5].setComponents(c, f, p, y).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ai);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    ai.center.set(0, 0, 0);
    const t = pd.distanceTo(e.center);
    return ai.radius = 0.7071067811865476 + t, ai.applyMatrix4(e.matrixWorld), this.intersectsSphere(ai);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, i = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(i) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = t[i];
      if (Vr.x = r.normal.x > 0 ? e.max.x : e.min.x, Vr.y = r.normal.y > 0 ? e.max.y : e.min.y, Vr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Vr) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      if (t[i].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class ec extends vr {
  /**
   * Constructs a new points material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new $e(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const zo = /* @__PURE__ */ new _t(), qa = /* @__PURE__ */ new Xl(), Wr = /* @__PURE__ */ new gs(), Xr = /* @__PURE__ */ new F();
class md extends Gt {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(e = new On(), t = new ec()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes intersection points between a casted ray and this point cloud.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const i = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Wr.copy(i.boundingSphere), Wr.applyMatrix4(r), Wr.radius += s, e.ray.intersectsSphere(Wr) === !1) return;
    zo.copy(r).invert(), qa.copy(e.ray).applyMatrix4(zo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = i.index, d = i.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let _ = f, v = m; _ < v; _++) {
        const p = l.getX(_);
        Xr.fromBufferAttribute(d, p), Ho(Xr, p, c, r, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(d.count, a.start + a.count);
      for (let _ = f, v = m; _ < v; _++)
        Xr.fromBufferAttribute(d, _), Ho(Xr, _, c, r, e, t, this);
    }
  }
  /**
   * Sets the values of {@link Points#morphTargetDictionary} and {@link Points#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Ho(n, e, t, i, r, s, a) {
  const o = qa.distanceSqToPoint(n);
  if (o < t) {
    const c = new F();
    qa.closestPointToPoint(n, c), c.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class tc extends Nt {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, i = _i, r, s, a, o = hn, c = hn, l, h = lr, d = 1) {
    if (h !== lr && h !== cr)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: d };
    super(f, r, s, a, o, c, h, i, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new so(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class nc extends Nt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class wr extends On {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: i,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(i), c = Math.floor(r), l = o + 1, h = c + 1, d = e / o, f = t / c, m = [], _ = [], v = [], p = [];
    for (let u = 0; u < h; u++) {
      const A = u * f - a;
      for (let b = 0; b < l; b++) {
        const y = b * d - s;
        _.push(y, -A, 0), v.push(0, 0, 1), p.push(b / o), p.push(1 - u / c);
      }
    }
    for (let u = 0; u < c; u++)
      for (let A = 0; A < o; A++) {
        const b = A + l * u, y = A + l * (u + 1), T = A + 1 + l * (u + 1), C = A + 1 + l * u;
        m.push(b, y, C), m.push(y, T, C);
      }
    this.setIndex(m), this.setAttribute("position", new gi(_, 3)), this.setAttribute("normal", new gi(v, 3)), this.setAttribute("uv", new gi(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new wr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class gd extends vr {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ah, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class _d extends vr {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const $s = {
  /**
   * Whether caching is enabled or not.
   *
   * @static
   * @type {boolean}
   * @default false
   */
  enabled: !1,
  /**
   * A dictionary that holds cached files.
   *
   * @static
   * @type {Object<string,Object>}
   */
  files: {},
  /**
   * Adds a cache entry with a key to reference the file. If this key already
   * holds a file, it is overwritten.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @param {Object} file -  The file to be cached.
   */
  add: function(n, e) {
    this.enabled !== !1 && (this.files[n] = e);
  },
  /**
   * Gets the cached value for the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @return {Object|undefined} The cached file. If the key does not exist `undefined` is returned.
   */
  get: function(n) {
    if (this.enabled !== !1)
      return this.files[n];
  },
  /**
   * Removes the cached file associated with the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   */
  remove: function(n) {
    delete this.files[n];
  },
  /**
   * Remove all values from the cache.
   *
   * @static
   */
  clear: function() {
    this.files = {};
  }
};
class xd {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(e, t, i) {
    const r = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.abortController = new AbortController(), this.itemStart = function(h) {
      o++, s === !1 && r.onStart !== void 0 && r.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, r.onProgress !== void 0 && r.onProgress(h, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, d) {
      return l.push(h, d), this;
    }, this.removeHandler = function(h) {
      const d = l.indexOf(h);
      return d !== -1 && l.splice(d, 2), this;
    }, this.getHandler = function(h) {
      for (let d = 0, f = l.length; d < f; d += 2) {
        const m = l[d], _ = l[d + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return _;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}
const vd = /* @__PURE__ */ new xd();
class oo {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : vd, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @abstract
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(r, s) {
      i.load(e, r, t, s);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @abstract
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials}.
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header]{@link https://developer.mozilla.org/en-US/docs/Glossary/Request_header}
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  /**
   * This method can be implemented in loaders for aborting ongoing requests.
   *
   * @abstract
   * @return {Loader} A reference to this instance.
   */
  abort() {
    return this;
  }
}
oo.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Di = /* @__PURE__ */ new WeakMap();
class yd extends oo {
  /**
   * Constructs a new image loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and passes the loaded image
   * to the `onLoad()` callback. The method also returns a new `Image` object which can
   * directly be used for texture creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Image)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Image} The image.
   */
  load(e, t, i, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = $s.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === !0)
        s.manager.itemStart(e), setTimeout(function() {
          t && t(a), s.manager.itemEnd(e);
        }, 0);
      else {
        let d = Di.get(a);
        d === void 0 && (d = [], Di.set(a, d)), d.push({ onLoad: t, onError: r });
      }
      return a;
    }
    const o = hr("img");
    function c() {
      h(), t && t(this);
      const d = Di.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        m.onLoad && m.onLoad(this);
      }
      Di.delete(this), s.manager.itemEnd(e);
    }
    function l(d) {
      h(), r && r(d), $s.remove(`image:${e}`);
      const f = Di.get(this) || [];
      for (let m = 0; m < f.length; m++) {
        const _ = f[m];
        _.onError && _.onError(d);
      }
      Di.delete(this), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), $s.add(`image:${e}`, o), s.manager.itemStart(e), o.src = e, o;
  }
}
class wd extends oo {
  /**
   * Constructs a new texture loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and pass the fully loaded texture
   * to the `onLoad()` callback. The method also returns a new texture object which can
   * directly be used for material creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Texture)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Texture} The texture.
   */
  load(e, t, i, r) {
    const s = new Nt(), a = new yd(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, i, r), s;
  }
}
class ic extends Zl {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, i, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = i - e, a = i + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Sd extends an {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
function Vo(n, e, t, i) {
  const r = bd(i);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Ol:
      return n * e;
    case Gl:
      return n * e / r.components * r.byteLength;
    case no:
      return n * e / r.components * r.byteLength;
    case zl:
      return n * e * 2 / r.components * r.byteLength;
    case io:
      return n * e * 2 / r.components * r.byteLength;
    case Bl:
      return n * e * 3 / r.components * r.byteLength;
    case cn:
      return n * e * 4 / r.components * r.byteLength;
    case ro:
      return n * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Jr:
    case Qr:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case es:
    case ts:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case xa:
    case ya:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case _a:
    case va:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case wa:
    case Sa:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ba:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Ma:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ea:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ta:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Aa:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ra:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ca:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Pa:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case La:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ia:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Da:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ua:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Na:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Fa:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ka:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Oa:
    case Ba:
    case Ga:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case za:
    case Ha:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case Va:
    case Wa:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function bd(n) {
  switch (n) {
    case Fn:
    case Ul:
      return { byteLength: 1, components: 1 };
    case ar:
    case Nl:
    case mr:
      return { byteLength: 2, components: 1 };
    case eo:
    case to:
      return { byteLength: 2, components: 4 };
    case _i:
    case Qa:
    case Un:
      return { byteLength: 4, components: 1 };
    case Fl:
    case kl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ja
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ja);
function rc() {
  let n = null, e = !1, t = null, i = null;
  function r(s, a) {
    t(s, a), i = n.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (i = n.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      n.cancelAnimationFrame(i), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      n = s;
    }
  };
}
function Md(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, h = o.usage, d = l.byteLength, f = n.createBuffer();
    n.bindBuffer(c, f), n.bufferData(c, l, h), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array)
      m = n.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = n.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = n.HALF_FLOAT : m = n.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      m = n.SHORT;
    else if (l instanceof Uint32Array)
      m = n.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      m = n.INT;
    else if (l instanceof Int8Array)
      m = n.BYTE;
    else if (l instanceof Uint8Array)
      m = n.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      m = n.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: f,
      type: m,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function i(o, c, l) {
    const h = c.array, d = c.updateRanges;
    if (n.bindBuffer(l, o), d.length === 0)
      n.bufferSubData(l, 0, h);
    else {
      d.sort((m, _) => m.start - _.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const _ = d[f], v = d[m];
        v.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          v.start + v.count - _.start
        ) : (++f, d[f] = v);
      }
      d.length = f + 1;
      for (let m = 0, _ = d.length; m < _; m++) {
        const v = d[m];
        n.bufferSubData(
          l,
          v.start * h.BYTES_PER_ELEMENT,
          h,
          v.start,
          v.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (n.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var Ed = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Td = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Ad = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Rd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Cd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Pd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ld = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Id = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Dd = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Ud = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Nd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Fd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, kd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Od = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Bd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Gd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, zd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Hd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Vd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Wd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Xd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, qd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Yd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, jd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, $d = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Kd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Zd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Jd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Qd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, eu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, tu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", nu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, iu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ru = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, su = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, au = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ou = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, lu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, cu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, hu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, du = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, uu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, fu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, pu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, mu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, gu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, _u = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, xu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, vu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, yu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, wu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Su = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, bu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Mu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Eu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Tu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Au = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ru = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Cu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Pu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Lu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Iu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Du = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Uu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Fu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ku = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Ou = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Bu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Gu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, zu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Hu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Vu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Wu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Xu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, qu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Yu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, ju = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, $u = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ku = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Zu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ju = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Qu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, ef = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, tf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, nf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, rf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, sf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, af = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, of = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, lf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, cf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, hf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, df = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, uf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ff = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, pf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, mf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, gf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, _f = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, xf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, vf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, yf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, wf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Sf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, bf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Mf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ef = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Tf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Af = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Rf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Pf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Lf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, If = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Df = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Uf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Nf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ff = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, kf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Of = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Bf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Gf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Wf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, qf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Yf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $f = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Kf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Qf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, ep = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, tp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, np = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, ip = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, rp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Oe = {
  alphahash_fragment: Ed,
  alphahash_pars_fragment: Td,
  alphamap_fragment: Ad,
  alphamap_pars_fragment: Rd,
  alphatest_fragment: Cd,
  alphatest_pars_fragment: Pd,
  aomap_fragment: Ld,
  aomap_pars_fragment: Id,
  batching_pars_vertex: Dd,
  batching_vertex: Ud,
  begin_vertex: Nd,
  beginnormal_vertex: Fd,
  bsdfs: kd,
  iridescence_fragment: Od,
  bumpmap_pars_fragment: Bd,
  clipping_planes_fragment: Gd,
  clipping_planes_pars_fragment: zd,
  clipping_planes_pars_vertex: Hd,
  clipping_planes_vertex: Vd,
  color_fragment: Wd,
  color_pars_fragment: Xd,
  color_pars_vertex: qd,
  color_vertex: Yd,
  common: jd,
  cube_uv_reflection_fragment: $d,
  defaultnormal_vertex: Kd,
  displacementmap_pars_vertex: Zd,
  displacementmap_vertex: Jd,
  emissivemap_fragment: Qd,
  emissivemap_pars_fragment: eu,
  colorspace_fragment: tu,
  colorspace_pars_fragment: nu,
  envmap_fragment: iu,
  envmap_common_pars_fragment: ru,
  envmap_pars_fragment: su,
  envmap_pars_vertex: au,
  envmap_physical_pars_fragment: _u,
  envmap_vertex: ou,
  fog_vertex: lu,
  fog_pars_vertex: cu,
  fog_fragment: hu,
  fog_pars_fragment: du,
  gradientmap_pars_fragment: uu,
  lightmap_pars_fragment: fu,
  lights_lambert_fragment: pu,
  lights_lambert_pars_fragment: mu,
  lights_pars_begin: gu,
  lights_toon_fragment: xu,
  lights_toon_pars_fragment: vu,
  lights_phong_fragment: yu,
  lights_phong_pars_fragment: wu,
  lights_physical_fragment: Su,
  lights_physical_pars_fragment: bu,
  lights_fragment_begin: Mu,
  lights_fragment_maps: Eu,
  lights_fragment_end: Tu,
  logdepthbuf_fragment: Au,
  logdepthbuf_pars_fragment: Ru,
  logdepthbuf_pars_vertex: Cu,
  logdepthbuf_vertex: Pu,
  map_fragment: Lu,
  map_pars_fragment: Iu,
  map_particle_fragment: Du,
  map_particle_pars_fragment: Uu,
  metalnessmap_fragment: Nu,
  metalnessmap_pars_fragment: Fu,
  morphinstance_vertex: ku,
  morphcolor_vertex: Ou,
  morphnormal_vertex: Bu,
  morphtarget_pars_vertex: Gu,
  morphtarget_vertex: zu,
  normal_fragment_begin: Hu,
  normal_fragment_maps: Vu,
  normal_pars_fragment: Wu,
  normal_pars_vertex: Xu,
  normal_vertex: qu,
  normalmap_pars_fragment: Yu,
  clearcoat_normal_fragment_begin: ju,
  clearcoat_normal_fragment_maps: $u,
  clearcoat_pars_fragment: Ku,
  iridescence_pars_fragment: Zu,
  opaque_fragment: Ju,
  packing: Qu,
  premultiplied_alpha_fragment: ef,
  project_vertex: tf,
  dithering_fragment: nf,
  dithering_pars_fragment: rf,
  roughnessmap_fragment: sf,
  roughnessmap_pars_fragment: af,
  shadowmap_pars_fragment: of,
  shadowmap_pars_vertex: lf,
  shadowmap_vertex: cf,
  shadowmask_pars_fragment: hf,
  skinbase_vertex: df,
  skinning_pars_vertex: uf,
  skinning_vertex: ff,
  skinnormal_vertex: pf,
  specularmap_fragment: mf,
  specularmap_pars_fragment: gf,
  tonemapping_fragment: _f,
  tonemapping_pars_fragment: xf,
  transmission_fragment: vf,
  transmission_pars_fragment: yf,
  uv_pars_fragment: wf,
  uv_pars_vertex: Sf,
  uv_vertex: bf,
  worldpos_vertex: Mf,
  background_vert: Ef,
  background_frag: Tf,
  backgroundCube_vert: Af,
  backgroundCube_frag: Rf,
  cube_vert: Cf,
  cube_frag: Pf,
  depth_vert: Lf,
  depth_frag: If,
  distanceRGBA_vert: Df,
  distanceRGBA_frag: Uf,
  equirect_vert: Nf,
  equirect_frag: Ff,
  linedashed_vert: kf,
  linedashed_frag: Of,
  meshbasic_vert: Bf,
  meshbasic_frag: Gf,
  meshlambert_vert: zf,
  meshlambert_frag: Hf,
  meshmatcap_vert: Vf,
  meshmatcap_frag: Wf,
  meshnormal_vert: Xf,
  meshnormal_frag: qf,
  meshphong_vert: Yf,
  meshphong_frag: jf,
  meshphysical_vert: $f,
  meshphysical_frag: Kf,
  meshtoon_vert: Zf,
  meshtoon_frag: Jf,
  points_vert: Qf,
  points_frag: ep,
  shadow_vert: tp,
  shadow_frag: np,
  sprite_vert: ip,
  sprite_frag: rp
}, se = {
  common: {
    diffuse: { value: /* @__PURE__ */ new $e(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Fe() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Fe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Fe() },
    normalScale: { value: /* @__PURE__ */ new Qe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Fe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new $e(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new $e(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Fe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new $e(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Qe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  }
}, gn = {
  basic: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) },
        specular: { value: /* @__PURE__ */ new $e(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.roughnessmap,
      se.metalnessmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.gradientmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ut([
      se.points,
      se.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ut([
      se.sprite,
      se.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Fe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Fe() }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ut([
      se.common,
      se.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new F() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ut([
      se.lights,
      se.fog,
      {
        color: { value: /* @__PURE__ */ new $e(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
gn.physical = {
  uniforms: /* @__PURE__ */ Ut([
    gn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Qe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new $e(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Qe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new $e(0) },
      specularColor: { value: /* @__PURE__ */ new $e(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Fe() },
      anisotropyVector: { value: /* @__PURE__ */ new Qe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Fe() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const qr = { r: 0, b: 0, g: 0 }, oi = /* @__PURE__ */ new kn(), sp = /* @__PURE__ */ new _t();
function ap(n, e, t, i, r, s, a) {
  const o = new $e(0);
  let c = s === !0 ? 0 : 1, l, h, d = null, f = 0, m = null;
  function _(b) {
    let y = b.isScene === !0 ? b.background : null;
    return y && y.isTexture && (y = (b.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function v(b) {
    let y = !1;
    const T = _(b);
    T === null ? u(o, c) : T && T.isColor && (u(T, 1), y = !0);
    const C = n.xr.getEnvironmentBlendMode();
    C === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, a), (n.autoClear || y) && (i.buffers.depth.setTest(!0), i.buffers.depth.setMask(!0), i.buffers.color.setMask(!0), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function p(b, y) {
    const T = _(y);
    T && (T.isCubeTexture || T.mapping === ms) ? (h === void 0 && (h = new Jt(
      new yr(1, 1, 1),
      new Qn({
        name: "BackgroundCubeMaterial",
        uniforms: qi(gn.backgroundCube.uniforms),
        vertexShader: gn.backgroundCube.vertexShader,
        fragmentShader: gn.backgroundCube.fragmentShader,
        side: Bt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, R, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), oi.copy(y.backgroundRotation), oi.x *= -1, oi.y *= -1, oi.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (oi.y *= -1, oi.z *= -1), h.material.uniforms.envMap.value = T, h.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(oi)), h.material.toneMapped = qe.getTransfer(T.colorSpace) !== Ze, (d !== T || f !== T.version || m !== n.toneMapping) && (h.material.needsUpdate = !0, d = T, f = T.version, m = n.toneMapping), h.layers.enableAll(), b.unshift(h, h.geometry, h.material, 0, 0, null)) : T && T.isTexture && (l === void 0 && (l = new Jt(
      new wr(2, 2),
      new Qn({
        name: "BackgroundMaterial",
        uniforms: qi(gn.background.uniforms),
        vertexShader: gn.background.vertexShader,
        fragmentShader: gn.background.fragmentShader,
        side: Jn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = T, l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, l.material.toneMapped = qe.getTransfer(T.colorSpace) !== Ze, T.matrixAutoUpdate === !0 && T.updateMatrix(), l.material.uniforms.uvTransform.value.copy(T.matrix), (d !== T || f !== T.version || m !== n.toneMapping) && (l.material.needsUpdate = !0, d = T, f = T.version, m = n.toneMapping), l.layers.enableAll(), b.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function u(b, y) {
    b.getRGB(qr, Kl(n)), i.buffers.color.setClear(qr.r, qr.g, qr.b, y, a);
  }
  function A() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(b, y = 1) {
      o.set(b), c = y, u(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(b) {
      c = b, u(o, c);
    },
    render: v,
    addToRenderList: p,
    dispose: A
  };
}
function op(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, r = f(null);
  let s = r, a = !1;
  function o(w, L, B, H, j) {
    let W = !1;
    const q = d(H, B, L);
    s !== q && (s = q, l(s.object)), W = m(w, H, B, j), W && _(w, H, B, j), j !== null && e.update(j, n.ELEMENT_ARRAY_BUFFER), (W || a) && (a = !1, y(w, L, B, H), j !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(j).buffer));
  }
  function c() {
    return n.createVertexArray();
  }
  function l(w) {
    return n.bindVertexArray(w);
  }
  function h(w) {
    return n.deleteVertexArray(w);
  }
  function d(w, L, B) {
    const H = B.wireframe === !0;
    let j = i[w.id];
    j === void 0 && (j = {}, i[w.id] = j);
    let W = j[L.id];
    W === void 0 && (W = {}, j[L.id] = W);
    let q = W[H];
    return q === void 0 && (q = f(c()), W[H] = q), q;
  }
  function f(w) {
    const L = [], B = [], H = [];
    for (let j = 0; j < t; j++)
      L[j] = 0, B[j] = 0, H[j] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: B,
      attributeDivisors: H,
      object: w,
      attributes: {},
      index: null
    };
  }
  function m(w, L, B, H) {
    const j = s.attributes, W = L.attributes;
    let q = 0;
    const K = B.getAttributes();
    for (const G in K)
      if (K[G].location >= 0) {
        const de = j[G];
        let Me = W[G];
        if (Me === void 0 && (G === "instanceMatrix" && w.instanceMatrix && (Me = w.instanceMatrix), G === "instanceColor" && w.instanceColor && (Me = w.instanceColor)), de === void 0 || de.attribute !== Me || Me && de.data !== Me.data) return !0;
        q++;
      }
    return s.attributesNum !== q || s.index !== H;
  }
  function _(w, L, B, H) {
    const j = {}, W = L.attributes;
    let q = 0;
    const K = B.getAttributes();
    for (const G in K)
      if (K[G].location >= 0) {
        let de = W[G];
        de === void 0 && (G === "instanceMatrix" && w.instanceMatrix && (de = w.instanceMatrix), G === "instanceColor" && w.instanceColor && (de = w.instanceColor));
        const Me = {};
        Me.attribute = de, de && de.data && (Me.data = de.data), j[G] = Me, q++;
      }
    s.attributes = j, s.attributesNum = q, s.index = H;
  }
  function v() {
    const w = s.newAttributes;
    for (let L = 0, B = w.length; L < B; L++)
      w[L] = 0;
  }
  function p(w) {
    u(w, 0);
  }
  function u(w, L) {
    const B = s.newAttributes, H = s.enabledAttributes, j = s.attributeDivisors;
    B[w] = 1, H[w] === 0 && (n.enableVertexAttribArray(w), H[w] = 1), j[w] !== L && (n.vertexAttribDivisor(w, L), j[w] = L);
  }
  function A() {
    const w = s.newAttributes, L = s.enabledAttributes;
    for (let B = 0, H = L.length; B < H; B++)
      L[B] !== w[B] && (n.disableVertexAttribArray(B), L[B] = 0);
  }
  function b(w, L, B, H, j, W, q) {
    q === !0 ? n.vertexAttribIPointer(w, L, B, j, W) : n.vertexAttribPointer(w, L, B, H, j, W);
  }
  function y(w, L, B, H) {
    v();
    const j = H.attributes, W = B.getAttributes(), q = L.defaultAttributeValues;
    for (const K in W) {
      const G = W[K];
      if (G.location >= 0) {
        let ae = j[K];
        if (ae === void 0 && (K === "instanceMatrix" && w.instanceMatrix && (ae = w.instanceMatrix), K === "instanceColor" && w.instanceColor && (ae = w.instanceColor)), ae !== void 0) {
          const de = ae.normalized, Me = ae.itemSize, Ge = e.get(ae);
          if (Ge === void 0) continue;
          const tt = Ge.buffer, st = Ge.type, Ye = Ge.bytesPerElement, X = st === n.INT || st === n.UNSIGNED_INT || ae.gpuType === Qa;
          if (ae.isInterleavedBufferAttribute) {
            const Z = ae.data, pe = Z.stride, Ie = ae.offset;
            if (Z.isInstancedInterleavedBuffer) {
              for (let be = 0; be < G.locationSize; be++)
                u(G.location + be, Z.meshPerAttribute);
              w.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else
              for (let be = 0; be < G.locationSize; be++)
                p(G.location + be);
            n.bindBuffer(n.ARRAY_BUFFER, tt);
            for (let be = 0; be < G.locationSize; be++)
              b(
                G.location + be,
                Me / G.locationSize,
                st,
                de,
                pe * Ye,
                (Ie + Me / G.locationSize * be) * Ye,
                X
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let Z = 0; Z < G.locationSize; Z++)
                u(G.location + Z, ae.meshPerAttribute);
              w.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let Z = 0; Z < G.locationSize; Z++)
                p(G.location + Z);
            n.bindBuffer(n.ARRAY_BUFFER, tt);
            for (let Z = 0; Z < G.locationSize; Z++)
              b(
                G.location + Z,
                Me / G.locationSize,
                st,
                de,
                Me * Ye,
                Me / G.locationSize * Z * Ye,
                X
              );
          }
        } else if (q !== void 0) {
          const de = q[K];
          if (de !== void 0)
            switch (de.length) {
              case 2:
                n.vertexAttrib2fv(G.location, de);
                break;
              case 3:
                n.vertexAttrib3fv(G.location, de);
                break;
              case 4:
                n.vertexAttrib4fv(G.location, de);
                break;
              default:
                n.vertexAttrib1fv(G.location, de);
            }
        }
      }
    }
    A();
  }
  function T() {
    N();
    for (const w in i) {
      const L = i[w];
      for (const B in L) {
        const H = L[B];
        for (const j in H)
          h(H[j].object), delete H[j];
        delete L[B];
      }
      delete i[w];
    }
  }
  function C(w) {
    if (i[w.id] === void 0) return;
    const L = i[w.id];
    for (const B in L) {
      const H = L[B];
      for (const j in H)
        h(H[j].object), delete H[j];
      delete L[B];
    }
    delete i[w.id];
  }
  function R(w) {
    for (const L in i) {
      const B = i[L];
      if (B[w.id] === void 0) continue;
      const H = B[w.id];
      for (const j in H)
        h(H[j].object), delete H[j];
      delete B[w.id];
    }
  }
  function N() {
    S(), a = !0, s !== r && (s = r, l(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: N,
    resetDefaultState: S,
    dispose: T,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: R,
    initAttributes: v,
    enableAttribute: p,
    disableUnusedAttributes: A
  };
}
function lp(n, e, t) {
  let i;
  function r(l) {
    i = l;
  }
  function s(l, h) {
    n.drawArrays(i, l, h), t.update(h, i, 1);
  }
  function a(l, h, d) {
    d !== 0 && (n.drawArraysInstanced(i, l, h, d), t.update(h, i, d));
  }
  function o(l, h, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, h, 0, d);
    let m = 0;
    for (let _ = 0; _ < d; _++)
      m += h[_];
    t.update(m, i, 1);
  }
  function c(l, h, d, f) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let _ = 0; _ < l.length; _++)
        a(l[_], h[_], f[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(i, l, 0, h, 0, f, 0, d);
      let _ = 0;
      for (let v = 0; v < d; v++)
        _ += h[v] * f[v];
      t.update(_, i, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function cp(n, e, t, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      r = n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(R) {
    return !(R !== cn && i.convert(R) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(R) {
    const N = R === mr && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(R !== Fn && i.convert(R) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    R !== Un && !N);
  }
  function c(R) {
    if (R === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0)
        return "highp";
      R = "mediump";
    }
    return R === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const d = t.logarithmicDepthBuffer === !0, f = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"), m = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), _ = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = n.getParameter(n.MAX_TEXTURE_SIZE), p = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), u = n.getParameter(n.MAX_VERTEX_ATTRIBS), A = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), b = n.getParameter(n.MAX_VARYING_VECTORS), y = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), T = _ > 0, C = n.getParameter(n.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: f,
    maxTextures: m,
    maxVertexTextures: _,
    maxTextureSize: v,
    maxCubemapSize: p,
    maxAttributes: u,
    maxVertexUniforms: A,
    maxVaryings: b,
    maxFragmentUniforms: y,
    vertexTextures: T,
    maxSamples: C
  };
}
function hp(n) {
  const e = this;
  let t = null, i = 0, r = !1, s = !1;
  const a = new ci(), o = new Fe(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    i !== 0 || r;
    return r = f, i = d.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = h(d, f, 0);
  }, this.setState = function(d, f, m) {
    const _ = d.clippingPlanes, v = d.clipIntersection, p = d.clipShadows, u = n.get(d);
    if (!r || _ === null || _.length === 0 || s && !p)
      s ? h(null) : l();
    else {
      const A = s ? 0 : i, b = A * 4;
      let y = u.clippingState || null;
      c.value = y, y = h(_, f, b, m);
      for (let T = 0; T !== b; ++T)
        y[T] = t[T];
      u.clippingState = y, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(d, f, m, _) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = c.value, _ !== !0 || p === null) {
        const u = m + v * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (p === null || p.length < u) && (p = new Float32Array(u));
        for (let b = 0, y = m; b !== v; ++b, y += 4)
          a.copy(d[b]).applyMatrix4(A, o), a.normal.toArray(p, y), p[y + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function dp(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === pa ? a.mapping = Vi : o === ma && (a.mapping = Wi), a;
  }
  function i(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === pa || o === ma)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new cd(c.height);
            return l.fromEquirectangularTexture(n, a), e.set(a, l), a.addEventListener("dispose", r), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: s
  };
}
const Fi = 4, Wo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ui = 20, Ks = /* @__PURE__ */ new ic(), Xo = /* @__PURE__ */ new $e();
let Zs = null, Js = 0, Qs = 0, ea = !1;
const hi = (1 + Math.sqrt(5)) / 2, Ui = 1 / hi, qo = [
  /* @__PURE__ */ new F(-hi, Ui, 0),
  /* @__PURE__ */ new F(hi, Ui, 0),
  /* @__PURE__ */ new F(-Ui, 0, hi),
  /* @__PURE__ */ new F(Ui, 0, hi),
  /* @__PURE__ */ new F(0, hi, -Ui),
  /* @__PURE__ */ new F(0, hi, Ui),
  /* @__PURE__ */ new F(-1, 1, -1),
  /* @__PURE__ */ new F(1, 1, -1),
  /* @__PURE__ */ new F(-1, 1, 1),
  /* @__PURE__ */ new F(1, 1, 1)
], up = /* @__PURE__ */ new F();
class Yo {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.renderTarget=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, i = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = up
    } = s;
    Zs = this._renderer.getRenderTarget(), Js = this._renderer.getActiveCubeFace(), Qs = this._renderer.getActiveMipmapLevel(), ea = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, i, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ko(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = $o(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Zs, Js, Qs), this._renderer.xr.enabled = ea, e.scissorTest = !1, Yr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Vi || e.mapping === Wi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Zs = this._renderer.getRenderTarget(), Js = this._renderer.getActiveCubeFace(), Qs = this._renderer.getActiveMipmapLevel(), ea = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = {
      magFilter: _n,
      minFilter: _n,
      generateMipmaps: !1,
      type: mr,
      format: cn,
      colorSpace: Xi,
      depthBuffer: !1
    }, r = jo(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = jo(e, t, i);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = fp(s)), this._blurMaterial = pp(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Jt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ks);
  }
  _sceneToCubeUV(e, t, i, r, s) {
    const c = new an(90, 1, t, i), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, m = d.toneMapping;
    d.getClearColor(Xo), d.toneMapping = $n, d.autoClear = !1, d.state.buffers.depth.getReversed() && (d.setRenderTarget(r), d.clearDepth(), d.setRenderTarget(null));
    const v = new ao({
      name: "PMREM.Background",
      side: Bt,
      depthWrite: !1,
      depthTest: !1
    }), p = new Jt(new yr(), v);
    let u = !1;
    const A = e.background;
    A ? A.isColor && (v.color.copy(A), e.background = null, u = !0) : (v.color.copy(Xo), u = !0);
    for (let b = 0; b < 6; b++) {
      const y = b % 3;
      y === 0 ? (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + h[b], s.y, s.z)) : y === 1 ? (c.up.set(0, 0, l[b]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + h[b], s.z)) : (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + h[b]));
      const T = this._cubeSize;
      Yr(r, y * T, b > 2 ? T : 0, T, T), d.setRenderTarget(r), u && d.render(p, c), d.render(e, c);
    }
    p.geometry.dispose(), p.material.dispose(), d.toneMapping = m, d.autoClear = f, e.background = A;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, r = e.mapping === Vi || e.mapping === Wi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ko()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = $o());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Jt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Yr(t, 0, 0, 3 * c, 2 * c), i.setRenderTarget(t), i.render(a, Ks);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = qo[(r - s - 1) % qo.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = i;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, i, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      i,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      i,
      i,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, i, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new Jt(this._lodPlanes[r], l), f = l.uniforms, m = this._sizeLods[i] - 1, _ = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * ui - 1), v = s / _, p = isFinite(s) ? 1 + Math.floor(h * v) : ui;
    p > ui && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);
    const u = [];
    let A = 0;
    for (let R = 0; R < ui; ++R) {
      const N = R / v, S = Math.exp(-N * N / 2);
      u.push(S), R === 0 ? A += S : R < p && (A += 2 * S);
    }
    for (let R = 0; R < u.length; R++)
      u[R] = u[R] / A;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = u, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    f.dTheta.value = _, f.mipInt.value = b - i;
    const y = this._sizeLods[r], T = 3 * y * (r > b - Fi ? r - b + Fi : 0), C = 4 * (this._cubeSize - y);
    Yr(t, T, C, 3 * y, 2 * y), c.setRenderTarget(t), c.render(d, Ks);
  }
}
function fp(n) {
  const e = [], t = [], i = [];
  let r = n;
  const s = n - Fi + 1 + Wo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let c = 1 / o;
    a > n - Fi ? c = Wo[a - n + Fi - 1] : a === 0 && (c = 0), i.push(c);
    const l = 1 / (o - 2), h = -l, d = 1 + l, f = [h, h, d, h, d, d, h, h, d, d, h, d], m = 6, _ = 6, v = 3, p = 2, u = 1, A = new Float32Array(v * _ * m), b = new Float32Array(p * _ * m), y = new Float32Array(u * _ * m);
    for (let C = 0; C < m; C++) {
      const R = C % 3 * 2 / 3 - 1, N = C > 2 ? 0 : -1, S = [
        R,
        N,
        0,
        R + 2 / 3,
        N,
        0,
        R + 2 / 3,
        N + 1,
        0,
        R,
        N,
        0,
        R + 2 / 3,
        N + 1,
        0,
        R,
        N + 1,
        0
      ];
      A.set(S, v * _ * C), b.set(f, p * _ * C);
      const w = [C, C, C, C, C, C];
      y.set(w, u * _ * C);
    }
    const T = new On();
    T.setAttribute("position", new dn(A, v)), T.setAttribute("uv", new dn(b, p)), T.setAttribute("faceIndex", new dn(y, u)), e.push(T), r > Fi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function jo(n, e, t) {
  const i = new xi(n, e, t);
  return i.texture.mapping = ms, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function Yr(n, e, t, i, r) {
  n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r);
}
function pp(n, e, t) {
  const i = new Float32Array(ui), r = new F(0, 1, 0);
  return new Qn({
    name: "SphericalGaussianBlur",
    defines: {
      n: ui,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${n}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: lo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function $o() {
  return new Qn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: lo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ko() {
  return new Qn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: lo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function lo() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function mp(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === pa || c === ma, h = c === Vi || c === Wi;
      if (l || h) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return t === null && (t = new Yo(n)), d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const m = o.image;
          return l && m && m.height > 0 || h && m && r(m) ? (t === null && (t = new Yo(n)), d = l ? t.fromEquirectangular(o) : t.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), o.addEventListener("dispose", s), d.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: i,
    dispose: a
  };
}
function gp(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0)
      return e[i];
    let r;
    switch (i) {
      case "WEBGL_depth_texture":
        r = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = n.getExtension(i);
    }
    return e[i] = r, r;
  }
  return {
    has: function(i) {
      return t(i) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(i) {
      const r = t(i);
      return r === null && dr("THREE.WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function _p(n, e, t, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes)
      e.remove(f.attributes[_]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", a), r[f.id] = !0, t.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const m in f)
      e.update(f[m], n.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [], m = d.index, _ = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let b = 0, y = A.length; b < y; b += 3) {
        const T = A[b + 0], C = A[b + 1], R = A[b + 2];
        f.push(T, C, C, R, R, T);
      }
    } else if (_ !== void 0) {
      const A = _.array;
      v = _.version;
      for (let b = 0, y = A.length / 3 - 1; b < y; b += 3) {
        const T = b + 0, C = b + 1, R = b + 2;
        f.push(T, C, C, R, R, T);
      }
    } else
      return;
    const p = new (Vl(f) ? $l : jl)(f, 1);
    p.version = v;
    const u = s.get(d);
    u && e.remove(u), s.set(d, p);
  }
  function h(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function xp(n, e, t) {
  let i;
  function r(f) {
    i = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function c(f, m) {
    n.drawElements(i, m, s, f * a), t.update(m, i, 1);
  }
  function l(f, m, _) {
    _ !== 0 && (n.drawElementsInstanced(i, m, s, f * a, _), t.update(m, i, _));
  }
  function h(f, m, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, m, 0, s, f, 0, _);
    let p = 0;
    for (let u = 0; u < _; u++)
      p += m[u];
    t.update(p, i, 1);
  }
  function d(f, m, _, v) {
    if (_ === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let u = 0; u < f.length; u++)
        l(f[u] / a, m[u], v[u]);
    else {
      p.multiDrawElementsInstancedWEBGL(i, m, 0, s, f, 0, v, 0, _);
      let u = 0;
      for (let A = 0; A < _; A++)
        u += m[A] * v[A];
      t.update(u, i, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = d;
}
function vp(n) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, a, o) {
    switch (t.calls++, a) {
      case n.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case n.LINES:
        t.lines += o * (s / 2);
        break;
      case n.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case n.LINE_LOOP:
        t.lines += o * s;
        break;
      case n.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i
  };
}
function yp(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), r = new pt();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = h !== void 0 ? h.length : 0;
    let f = i.get(o);
    if (f === void 0 || f.count !== d) {
      let w = function() {
        N.dispose(), i.delete(o), o.removeEventListener("dispose", w);
      };
      var m = w;
      f !== void 0 && f.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, u = o.morphAttributes.position || [], A = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let y = 0;
      _ === !0 && (y = 1), v === !0 && (y = 2), p === !0 && (y = 3);
      let T = o.attributes.position.count * y, C = 1;
      T > e.maxTextureSize && (C = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
      const R = new Float32Array(T * C * 4 * d), N = new Wl(R, T, C, d);
      N.type = Un, N.needsUpdate = !0;
      const S = y * 4;
      for (let L = 0; L < d; L++) {
        const B = u[L], H = A[L], j = b[L], W = T * C * 4 * L;
        for (let q = 0; q < B.count; q++) {
          const K = q * S;
          _ === !0 && (r.fromBufferAttribute(B, q), R[W + K + 0] = r.x, R[W + K + 1] = r.y, R[W + K + 2] = r.z, R[W + K + 3] = 0), v === !0 && (r.fromBufferAttribute(H, q), R[W + K + 4] = r.x, R[W + K + 5] = r.y, R[W + K + 6] = r.z, R[W + K + 7] = 0), p === !0 && (r.fromBufferAttribute(j, q), R[W + K + 8] = r.x, R[W + K + 9] = r.y, R[W + K + 10] = r.z, R[W + K + 11] = j.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: d,
        texture: N,
        size: new Qe(T, C)
      }, i.set(o, f), o.addEventListener("dispose", w);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(n, "morphTexture", a.morphTexture, t);
    else {
      let _ = 0;
      for (let p = 0; p < l.length; p++)
        _ += l[p];
      const v = o.morphTargetsRelative ? 1 : 1 - _;
      c.getUniforms().setValue(n, "morphTargetBaseInfluence", v), c.getUniforms().setValue(n, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(n, "morphTargetsTexture", f.texture, t), c.getUniforms().setValue(n, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function wp(n, e, t, i) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = i.render.frame, h = c.geometry, d = e.get(c, h);
    if (r.get(d) !== l && (e.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (t.update(c.instanceMatrix, n.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, n.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      r.get(f) !== l && (f.update(), r.set(f, l));
    }
    return d;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const sc = /* @__PURE__ */ new Nt(), Zo = /* @__PURE__ */ new tc(1, 1), ac = /* @__PURE__ */ new Wl(), oc = /* @__PURE__ */ new qh(), lc = /* @__PURE__ */ new Jl(), Jo = [], Qo = [], el = new Float32Array(16), tl = new Float32Array(9), nl = new Float32Array(4);
function Ki(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = e * t;
  let s = Jo[r];
  if (s === void 0 && (s = new Float32Array(r), Jo[r] = s), e !== 0) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, n[a].toArray(s, o);
  }
  return s;
}
function yt(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++)
    if (n[t] !== e[t]) return !1;
  return !0;
}
function wt(n, e) {
  for (let t = 0, i = e.length; t < i; t++)
    n[t] = e[t];
}
function _s(n, e) {
  let t = Qo[e];
  t === void 0 && (t = new Int32Array(e), Qo[e] = t);
  for (let i = 0; i !== e; ++i)
    t[i] = n.allocateTextureUnit();
  return t;
}
function Sp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function bp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (yt(t, e)) return;
    n.uniform2fv(this.addr, e), wt(t, e);
  }
}
function Mp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (yt(t, e)) return;
    n.uniform3fv(this.addr, e), wt(t, e);
  }
}
function Ep(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (yt(t, e)) return;
    n.uniform4fv(this.addr, e), wt(t, e);
  }
}
function Tp(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (yt(t, e)) return;
    n.uniformMatrix2fv(this.addr, !1, e), wt(t, e);
  } else {
    if (yt(t, i)) return;
    nl.set(i), n.uniformMatrix2fv(this.addr, !1, nl), wt(t, i);
  }
}
function Ap(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (yt(t, e)) return;
    n.uniformMatrix3fv(this.addr, !1, e), wt(t, e);
  } else {
    if (yt(t, i)) return;
    tl.set(i), n.uniformMatrix3fv(this.addr, !1, tl), wt(t, i);
  }
}
function Rp(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (yt(t, e)) return;
    n.uniformMatrix4fv(this.addr, !1, e), wt(t, e);
  } else {
    if (yt(t, i)) return;
    el.set(i), n.uniformMatrix4fv(this.addr, !1, el), wt(t, i);
  }
}
function Cp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function Pp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (yt(t, e)) return;
    n.uniform2iv(this.addr, e), wt(t, e);
  }
}
function Lp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (yt(t, e)) return;
    n.uniform3iv(this.addr, e), wt(t, e);
  }
}
function Ip(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (yt(t, e)) return;
    n.uniform4iv(this.addr, e), wt(t, e);
  }
}
function Dp(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function Up(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (yt(t, e)) return;
    n.uniform2uiv(this.addr, e), wt(t, e);
  }
}
function Np(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (yt(t, e)) return;
    n.uniform3uiv(this.addr, e), wt(t, e);
  }
}
function Fp(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (yt(t, e)) return;
    n.uniform4uiv(this.addr, e), wt(t, e);
  }
}
function kp(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === n.SAMPLER_2D_SHADOW ? (Zo.compareFunction = Hl, s = Zo) : s = sc, t.setTexture2D(e || s, r);
}
function Op(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTexture3D(e || oc, r);
}
function Bp(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTextureCube(e || lc, r);
}
function Gp(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTexture2DArray(e || ac, r);
}
function zp(n) {
  switch (n) {
    case 5126:
      return Sp;
    // FLOAT
    case 35664:
      return bp;
    // _VEC2
    case 35665:
      return Mp;
    // _VEC3
    case 35666:
      return Ep;
    // _VEC4
    case 35674:
      return Tp;
    // _MAT2
    case 35675:
      return Ap;
    // _MAT3
    case 35676:
      return Rp;
    // _MAT4
    case 5124:
    case 35670:
      return Cp;
    // INT, BOOL
    case 35667:
    case 35671:
      return Pp;
    // _VEC2
    case 35668:
    case 35672:
      return Lp;
    // _VEC3
    case 35669:
    case 35673:
      return Ip;
    // _VEC4
    case 5125:
      return Dp;
    // UINT
    case 36294:
      return Up;
    // _VEC2
    case 36295:
      return Np;
    // _VEC3
    case 36296:
      return Fp;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return kp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Op;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Bp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Gp;
  }
}
function Hp(n, e) {
  n.uniform1fv(this.addr, e);
}
function Vp(n, e) {
  const t = Ki(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function Wp(n, e) {
  const t = Ki(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function Xp(n, e) {
  const t = Ki(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function qp(n, e) {
  const t = Ki(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function Yp(n, e) {
  const t = Ki(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function jp(n, e) {
  const t = Ki(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function $p(n, e) {
  n.uniform1iv(this.addr, e);
}
function Kp(n, e) {
  n.uniform2iv(this.addr, e);
}
function Zp(n, e) {
  n.uniform3iv(this.addr, e);
}
function Jp(n, e) {
  n.uniform4iv(this.addr, e);
}
function Qp(n, e) {
  n.uniform1uiv(this.addr, e);
}
function em(n, e) {
  n.uniform2uiv(this.addr, e);
}
function tm(n, e) {
  n.uniform3uiv(this.addr, e);
}
function nm(n, e) {
  n.uniform4uiv(this.addr, e);
}
function im(n, e, t) {
  const i = this.cache, r = e.length, s = _s(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), wt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || sc, s[a]);
}
function rm(n, e, t) {
  const i = this.cache, r = e.length, s = _s(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), wt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || oc, s[a]);
}
function sm(n, e, t) {
  const i = this.cache, r = e.length, s = _s(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), wt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || lc, s[a]);
}
function am(n, e, t) {
  const i = this.cache, r = e.length, s = _s(t, r);
  yt(i, s) || (n.uniform1iv(this.addr, s), wt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || ac, s[a]);
}
function om(n) {
  switch (n) {
    case 5126:
      return Hp;
    // FLOAT
    case 35664:
      return Vp;
    // _VEC2
    case 35665:
      return Wp;
    // _VEC3
    case 35666:
      return Xp;
    // _VEC4
    case 35674:
      return qp;
    // _MAT2
    case 35675:
      return Yp;
    // _MAT3
    case 35676:
      return jp;
    // _MAT4
    case 5124:
    case 35670:
      return $p;
    // INT, BOOL
    case 35667:
    case 35671:
      return Kp;
    // _VEC2
    case 35668:
    case 35672:
      return Zp;
    // _VEC3
    case 35669:
    case 35673:
      return Jp;
    // _VEC4
    case 5125:
      return Qp;
    // UINT
    case 36294:
      return em;
    // _VEC2
    case 36295:
      return tm;
    // _VEC3
    case 36296:
      return nm;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return im;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return rm;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return sm;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return am;
  }
}
class lm {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = zp(t.type);
  }
}
class cm {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = om(t.type);
  }
}
class hm {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], i);
    }
  }
}
const ta = /(\w+)(\])?(\[|\.)?/g;
function il(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function dm(n, e, t) {
  const i = n.name, r = i.length;
  for (ta.lastIndex = 0; ; ) {
    const s = ta.exec(i), a = ta.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      il(t, l === void 0 ? new lm(o, n, e) : new cm(o, n, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new hm(o), il(t, d)), t = d;
    }
  }
}
class ns {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      dm(s, a, this);
    }
  }
  setValue(e, t, i, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    const r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = i[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function rl(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const um = 37297;
let fm = 0;
function pm(n, e) {
  const t = n.split(`
`), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
const sl = /* @__PURE__ */ new Fe();
function mm(n) {
  qe._getMatrix(sl, qe.workingColorSpace, n);
  const e = `mat3( ${sl.elements.map((t) => t.toFixed(4))} )`;
  switch (qe.getTransfer(n)) {
    case ls:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function al(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), s = (n.getShaderInfoLog(e) || "").trim();
  if (i && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + pm(n.getShaderSource(e), o);
  } else
    return s;
}
function gm(n, e) {
  const t = mm(e);
  return [
    `vec4 ${n}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function _m(n, e) {
  let t;
  switch (e) {
    case vh:
      t = "Linear";
      break;
    case yh:
      t = "Reinhard";
      break;
    case wh:
      t = "Cineon";
      break;
    case Sh:
      t = "ACESFilmic";
      break;
    case Mh:
      t = "AgX";
      break;
    case Eh:
      t = "Neutral";
      break;
    case bh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const jr = /* @__PURE__ */ new F();
function xm() {
  qe.getLuminanceCoefficients(jr);
  const n = jr.x.toFixed(4), e = jr.y.toFixed(4), t = jr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function vm(n) {
  return [
    n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ir).join(`
`);
}
function ym(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function wm(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === n.FLOAT_MAT2 && (o = 2), s.type === n.FLOAT_MAT3 && (o = 3), s.type === n.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: n.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function ir(n) {
  return n !== "";
}
function ol(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ll(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Sm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ya(n) {
  return n.replace(Sm, Mm);
}
const bm = /* @__PURE__ */ new Map();
function Mm(n, e) {
  let t = Oe[e];
  if (t === void 0) {
    const i = bm.get(e);
    if (i !== void 0)
      t = Oe[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ya(t);
}
const Em = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function cl(n) {
  return n.replace(Em, Tm);
}
function Tm(n, e, t, i) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function hl(n) {
  let e = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return n.precision === "highp" ? e += `
#define HIGH_PRECISION` : n.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Am(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === Ll ? e = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Jc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === Cn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Rm(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case Vi:
      case Wi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ms:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Cm(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  return n.envMap && n.envMapMode === Wi && (e = "ENVMAP_MODE_REFRACTION"), e;
}
function Pm(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case Il:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case _h:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case xh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Lm(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: i, maxMip: t };
}
function Im(n, e, t, i) {
  const r = n.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = Am(t), l = Rm(t), h = Cm(t), d = Pm(t), f = Lm(t), m = vm(t), _ = ym(s), v = r.createProgram();
  let p, u, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ir).join(`
`), p.length > 0 && (p += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ir).join(`
`), u.length > 0 && (u += `
`)) : (p = [
    hl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ir).join(`
`), u = [
    hl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== $n ? "#define TONE_MAPPING" : "",
    t.toneMapping !== $n ? Oe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== $n ? _m("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    gm("linearToOutputTexel", t.outputColorSpace),
    xm(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ir).join(`
`)), a = Ya(a), a = ol(a, t), a = ll(a, t), o = Ya(o), o = ol(o, t), o = ll(o, t), a = cl(a), o = cl(o), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, u = [
    "#define varying in",
    t.glslVersion === bo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === bo ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + u);
  const b = A + p + a, y = A + u + o, T = rl(r, r.VERTEX_SHADER, b), C = rl(r, r.FRAGMENT_SHADER, y);
  r.attachShader(v, T), r.attachShader(v, C), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function R(L) {
    if (n.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(v) || "", H = r.getShaderInfoLog(T) || "", j = r.getShaderInfoLog(C) || "", W = B.trim(), q = H.trim(), K = j.trim();
      let G = !0, ae = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (G = !1, typeof n.debug.onShaderError == "function")
          n.debug.onShaderError(r, v, T, C);
        else {
          const de = al(r, T, "vertex"), Me = al(r, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + W + `
` + de + `
` + Me
          );
        }
      else W !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", W) : (q === "" || K === "") && (ae = !1);
      ae && (L.diagnostics = {
        runnable: G,
        programLog: W,
        vertexShader: {
          log: q,
          prefix: p
        },
        fragmentShader: {
          log: K,
          prefix: u
        }
      });
    }
    r.deleteShader(T), r.deleteShader(C), N = new ns(r, v), S = wm(r, v);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && R(this), N;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && R(this), S;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return w === !1 && (w = r.getProgramParameter(v, um)), w;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = fm++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = T, this.fragmentShader = C, this;
}
let Dm = 0;
class Um {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(i), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new Nm(e), t.set(e, i)), i;
  }
}
class Nm {
  constructor(e) {
    this.id = Dm++, this.code = e, this.usedTimes = 0;
  }
}
function Fm(n, e, t, i, r, s, a) {
  const o = new ql(), c = new Um(), l = /* @__PURE__ */ new Set(), h = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(S) {
    return l.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, w, L, B, H) {
    const j = B.fog, W = H.geometry, q = S.isMeshStandardMaterial ? B.environment : null, K = (S.isMeshStandardMaterial ? t : e).get(S.envMap || q), G = K && K.mapping === ms ? K.image.height : null, ae = _[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const de = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, Me = de !== void 0 ? de.length : 0;
    let Ge = 0;
    W.morphAttributes.position !== void 0 && (Ge = 1), W.morphAttributes.normal !== void 0 && (Ge = 2), W.morphAttributes.color !== void 0 && (Ge = 3);
    let tt, st, Ye, X;
    if (ae) {
      const je = gn[ae];
      tt = je.vertexShader, st = je.fragmentShader;
    } else
      tt = S.vertexShader, st = S.fragmentShader, c.update(S), Ye = c.getVertexShaderID(S), X = c.getFragmentShaderID(S);
    const Z = n.getRenderTarget(), pe = n.state.buffers.depth.getReversed(), Ie = H.isInstancedMesh === !0, be = H.isBatchedMesh === !0, We = !!S.map, At = !!S.matcap, E = !!K, at = !!S.aoMap, Ue = !!S.lightMap, Pe = !!S.bumpMap, _e = !!S.normalMap, ot = !!S.displacementMap, xe = !!S.emissiveMap, ke = !!S.metalnessMap, St = !!S.roughnessMap, ft = S.anisotropy > 0, M = S.clearcoat > 0, g = S.dispersion > 0, U = S.iridescence > 0, V = S.sheen > 0, $ = S.transmission > 0, z = ft && !!S.anisotropyMap, Se = M && !!S.clearcoatMap, ne = M && !!S.clearcoatNormalMap, ve = M && !!S.clearcoatRoughnessMap, ye = U && !!S.iridescenceMap, ee = U && !!S.iridescenceThicknessMap, he = V && !!S.sheenColorMap, Re = V && !!S.sheenRoughnessMap, we = !!S.specularMap, le = !!S.specularColorMap, Ne = !!S.specularIntensityMap, P = $ && !!S.transmissionMap, te = $ && !!S.thicknessMap, ie = !!S.gradientMap, fe = !!S.alphaMap, J = S.alphaTest > 0, Y = !!S.alphaHash, ge = !!S.extensions;
    let De = $n;
    S.toneMapped && (Z === null || Z.isXRRenderTarget === !0) && (De = n.toneMapping);
    const nt = {
      shaderID: ae,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: tt,
      fragmentShader: st,
      defines: S.defines,
      customVertexShaderID: Ye,
      customFragmentShaderID: X,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: be,
      batchingColor: be && H._colorsTexture !== null,
      instancing: Ie,
      instancingColor: Ie && H.instanceColor !== null,
      instancingMorph: Ie && H.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: Z === null ? n.outputColorSpace : Z.isXRRenderTarget === !0 ? Z.texture.colorSpace : Xi,
      alphaToCoverage: !!S.alphaToCoverage,
      map: We,
      matcap: At,
      envMap: E,
      envMapMode: E && K.mapping,
      envMapCubeUVHeight: G,
      aoMap: at,
      lightMap: Ue,
      bumpMap: Pe,
      normalMap: _e,
      displacementMap: f && ot,
      emissiveMap: xe,
      normalMapObjectSpace: _e && S.normalMapType === Ph,
      normalMapTangentSpace: _e && S.normalMapType === Ch,
      metalnessMap: ke,
      roughnessMap: St,
      anisotropy: ft,
      anisotropyMap: z,
      clearcoat: M,
      clearcoatMap: Se,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: ve,
      dispersion: g,
      iridescence: U,
      iridescenceMap: ye,
      iridescenceThicknessMap: ee,
      sheen: V,
      sheenColorMap: he,
      sheenRoughnessMap: Re,
      specularMap: we,
      specularColorMap: le,
      specularIntensityMap: Ne,
      transmission: $,
      transmissionMap: P,
      thicknessMap: te,
      gradientMap: ie,
      opaque: S.transparent === !1 && S.blending === Bi && S.alphaToCoverage === !1,
      alphaMap: fe,
      alphaTest: J,
      alphaHash: Y,
      combine: S.combine,
      //
      mapUv: We && v(S.map.channel),
      aoMapUv: at && v(S.aoMap.channel),
      lightMapUv: Ue && v(S.lightMap.channel),
      bumpMapUv: Pe && v(S.bumpMap.channel),
      normalMapUv: _e && v(S.normalMap.channel),
      displacementMapUv: ot && v(S.displacementMap.channel),
      emissiveMapUv: xe && v(S.emissiveMap.channel),
      metalnessMapUv: ke && v(S.metalnessMap.channel),
      roughnessMapUv: St && v(S.roughnessMap.channel),
      anisotropyMapUv: z && v(S.anisotropyMap.channel),
      clearcoatMapUv: Se && v(S.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && v(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ve && v(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ye && v(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: ee && v(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: he && v(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Re && v(S.sheenRoughnessMap.channel),
      specularMapUv: we && v(S.specularMap.channel),
      specularColorMapUv: le && v(S.specularColorMap.channel),
      specularIntensityMapUv: Ne && v(S.specularIntensityMap.channel),
      transmissionMapUv: P && v(S.transmissionMap.channel),
      thicknessMapUv: te && v(S.thicknessMap.channel),
      alphaMapUv: fe && v(S.alphaMap.channel),
      //
      vertexTangents: !!W.attributes.tangent && (_e || ft),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!W.attributes.uv && (We || fe),
      fog: !!j,
      useFog: S.fog === !0,
      fogExp2: !!j && j.isFogExp2,
      flatShading: S.flatShading === !0 && S.wireframe === !1,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: pe,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: W.morphAttributes.position !== void 0,
      morphNormals: W.morphAttributes.normal !== void 0,
      morphColors: W.morphAttributes.color !== void 0,
      morphTargetsCount: Me,
      morphTextureStride: Ge,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: n.shadowMap.enabled && L.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: De,
      decodeVideoTexture: We && S.map.isVideoTexture === !0 && qe.getTransfer(S.map.colorSpace) === Ze,
      decodeVideoTextureEmissive: xe && S.emissiveMap.isVideoTexture === !0 && qe.getTransfer(S.emissiveMap.colorSpace) === Ze,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Ln,
      flipSided: S.side === Bt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: ge && S.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ge && S.extensions.multiDraw === !0 || be) && i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return nt.vertexUv1s = l.has(1), nt.vertexUv2s = l.has(2), nt.vertexUv3s = l.has(3), l.clear(), nt;
  }
  function u(S) {
    const w = [];
    if (S.shaderID ? w.push(S.shaderID) : (w.push(S.customVertexShaderID), w.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const L in S.defines)
        w.push(L), w.push(S.defines[L]);
    return S.isRawShaderMaterial === !1 && (A(w, S), b(w, S), w.push(n.outputColorSpace)), w.push(S.customProgramCacheKey), w.join();
  }
  function A(S, w) {
    S.push(w.precision), S.push(w.outputColorSpace), S.push(w.envMapMode), S.push(w.envMapCubeUVHeight), S.push(w.mapUv), S.push(w.alphaMapUv), S.push(w.lightMapUv), S.push(w.aoMapUv), S.push(w.bumpMapUv), S.push(w.normalMapUv), S.push(w.displacementMapUv), S.push(w.emissiveMapUv), S.push(w.metalnessMapUv), S.push(w.roughnessMapUv), S.push(w.anisotropyMapUv), S.push(w.clearcoatMapUv), S.push(w.clearcoatNormalMapUv), S.push(w.clearcoatRoughnessMapUv), S.push(w.iridescenceMapUv), S.push(w.iridescenceThicknessMapUv), S.push(w.sheenColorMapUv), S.push(w.sheenRoughnessMapUv), S.push(w.specularMapUv), S.push(w.specularColorMapUv), S.push(w.specularIntensityMapUv), S.push(w.transmissionMapUv), S.push(w.thicknessMapUv), S.push(w.combine), S.push(w.fogExp2), S.push(w.sizeAttenuation), S.push(w.morphTargetsCount), S.push(w.morphAttributeCount), S.push(w.numDirLights), S.push(w.numPointLights), S.push(w.numSpotLights), S.push(w.numSpotLightMaps), S.push(w.numHemiLights), S.push(w.numRectAreaLights), S.push(w.numDirLightShadows), S.push(w.numPointLightShadows), S.push(w.numSpotLightShadows), S.push(w.numSpotLightShadowsWithMaps), S.push(w.numLightProbes), S.push(w.shadowMapType), S.push(w.toneMapping), S.push(w.numClippingPlanes), S.push(w.numClipIntersection), S.push(w.depthPacking);
  }
  function b(S, w) {
    o.disableAll(), w.supportsVertexTextures && o.enable(0), w.instancing && o.enable(1), w.instancingColor && o.enable(2), w.instancingMorph && o.enable(3), w.matcap && o.enable(4), w.envMap && o.enable(5), w.normalMapObjectSpace && o.enable(6), w.normalMapTangentSpace && o.enable(7), w.clearcoat && o.enable(8), w.iridescence && o.enable(9), w.alphaTest && o.enable(10), w.vertexColors && o.enable(11), w.vertexAlphas && o.enable(12), w.vertexUv1s && o.enable(13), w.vertexUv2s && o.enable(14), w.vertexUv3s && o.enable(15), w.vertexTangents && o.enable(16), w.anisotropy && o.enable(17), w.alphaHash && o.enable(18), w.batching && o.enable(19), w.dispersion && o.enable(20), w.batchingColor && o.enable(21), w.gradientMap && o.enable(22), S.push(o.mask), o.disableAll(), w.fog && o.enable(0), w.useFog && o.enable(1), w.flatShading && o.enable(2), w.logarithmicDepthBuffer && o.enable(3), w.reversedDepthBuffer && o.enable(4), w.skinning && o.enable(5), w.morphTargets && o.enable(6), w.morphNormals && o.enable(7), w.morphColors && o.enable(8), w.premultipliedAlpha && o.enable(9), w.shadowMapEnabled && o.enable(10), w.doubleSided && o.enable(11), w.flipSided && o.enable(12), w.useDepthPacking && o.enable(13), w.dithering && o.enable(14), w.transmission && o.enable(15), w.sheen && o.enable(16), w.opaque && o.enable(17), w.pointsUvs && o.enable(18), w.decodeVideoTexture && o.enable(19), w.decodeVideoTextureEmissive && o.enable(20), w.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function y(S) {
    const w = _[S.type];
    let L;
    if (w) {
      const B = gn[w];
      L = sd.clone(B.uniforms);
    } else
      L = S.uniforms;
    return L;
  }
  function T(S, w) {
    let L;
    for (let B = 0, H = h.length; B < H; B++) {
      const j = h[B];
      if (j.cacheKey === w) {
        L = j, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new Im(n, w, S, s), h.push(L)), L;
  }
  function C(S) {
    if (--S.usedTimes === 0) {
      const w = h.indexOf(S);
      h[w] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function R(S) {
    c.remove(S);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: u,
    getUniforms: y,
    acquireProgram: T,
    releaseProgram: C,
    releaseShaderCache: R,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: N
  };
}
function km() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return n.has(a);
  }
  function t(a) {
    let o = n.get(a);
    return o === void 0 && (o = {}, n.set(a, o)), o;
  }
  function i(a) {
    n.delete(a);
  }
  function r(a, o, c) {
    n.get(a)[o] = c;
  }
  function s() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: i,
    update: r,
    dispose: s
  };
}
function Om(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function dl(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function ul() {
  const n = [];
  let e = 0;
  const t = [], i = [], r = [];
  function s() {
    e = 0, t.length = 0, i.length = 0, r.length = 0;
  }
  function a(d, f, m, _, v, p) {
    let u = n[e];
    return u === void 0 ? (u = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: _,
      renderOrder: d.renderOrder,
      z: v,
      group: p
    }, n[e] = u) : (u.id = d.id, u.object = d, u.geometry = f, u.material = m, u.groupOrder = _, u.renderOrder = d.renderOrder, u.z = v, u.group = p), e++, u;
  }
  function o(d, f, m, _, v, p) {
    const u = a(d, f, m, _, v, p);
    m.transmission > 0 ? i.push(u) : m.transparent === !0 ? r.push(u) : t.push(u);
  }
  function c(d, f, m, _, v, p) {
    const u = a(d, f, m, _, v, p);
    m.transmission > 0 ? i.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || Om), i.length > 1 && i.sort(f || dl), r.length > 1 && r.sort(f || dl);
  }
  function h() {
    for (let d = e, f = n.length; d < f; d++) {
      const m = n[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: r,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Bm() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let a;
    return s === void 0 ? (a = new ul(), n.set(i, [a])) : r >= s.length ? (a = new ul(), s.push(a)) : a = s[r], a;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Gm() {
  const n = {};
  return {
    get: function(e) {
      if (n[e.id] !== void 0)
        return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new F(),
            color: new $e()
          };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new $e(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new F(),
            color: new $e(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new F(),
            skyColor: new $e(),
            groundColor: new $e()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new $e(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F()
          };
          break;
      }
      return n[e.id] = t, t;
    }
  };
}
function zm() {
  const n = {};
  return {
    get: function(e) {
      if (n[e.id] !== void 0)
        return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qe()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qe()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return n[e.id] = t, t;
    }
  };
}
let Hm = 0;
function Vm(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function Wm(n) {
  const e = new Gm(), t = zm(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) i.probe.push(new F());
  const r = new F(), s = new _t(), a = new _t();
  function o(l) {
    let h = 0, d = 0, f = 0;
    for (let S = 0; S < 9; S++) i.probe[S].set(0, 0, 0);
    let m = 0, _ = 0, v = 0, p = 0, u = 0, A = 0, b = 0, y = 0, T = 0, C = 0, R = 0;
    l.sort(Vm);
    for (let S = 0, w = l.length; S < w; S++) {
      const L = l[S], B = L.color, H = L.intensity, j = L.distance, W = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += B.r * H, d += B.g * H, f += B.b * H;
      else if (L.isLightProbe) {
        for (let q = 0; q < 9; q++)
          i.probe[q].addScaledVector(L.sh.coefficients[q], H);
        R++;
      } else if (L.isDirectionalLight) {
        const q = e.get(L);
        if (q.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const K = L.shadow, G = t.get(L);
          G.shadowIntensity = K.intensity, G.shadowBias = K.bias, G.shadowNormalBias = K.normalBias, G.shadowRadius = K.radius, G.shadowMapSize = K.mapSize, i.directionalShadow[m] = G, i.directionalShadowMap[m] = W, i.directionalShadowMatrix[m] = L.shadow.matrix, A++;
        }
        i.directional[m] = q, m++;
      } else if (L.isSpotLight) {
        const q = e.get(L);
        q.position.setFromMatrixPosition(L.matrixWorld), q.color.copy(B).multiplyScalar(H), q.distance = j, q.coneCos = Math.cos(L.angle), q.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), q.decay = L.decay, i.spot[v] = q;
        const K = L.shadow;
        if (L.map && (i.spotLightMap[T] = L.map, T++, K.updateMatrices(L), L.castShadow && C++), i.spotLightMatrix[v] = K.matrix, L.castShadow) {
          const G = t.get(L);
          G.shadowIntensity = K.intensity, G.shadowBias = K.bias, G.shadowNormalBias = K.normalBias, G.shadowRadius = K.radius, G.shadowMapSize = K.mapSize, i.spotShadow[v] = G, i.spotShadowMap[v] = W, y++;
        }
        v++;
      } else if (L.isRectAreaLight) {
        const q = e.get(L);
        q.color.copy(B).multiplyScalar(H), q.halfWidth.set(L.width * 0.5, 0, 0), q.halfHeight.set(0, L.height * 0.5, 0), i.rectArea[p] = q, p++;
      } else if (L.isPointLight) {
        const q = e.get(L);
        if (q.color.copy(L.color).multiplyScalar(L.intensity), q.distance = L.distance, q.decay = L.decay, L.castShadow) {
          const K = L.shadow, G = t.get(L);
          G.shadowIntensity = K.intensity, G.shadowBias = K.bias, G.shadowNormalBias = K.normalBias, G.shadowRadius = K.radius, G.shadowMapSize = K.mapSize, G.shadowCameraNear = K.camera.near, G.shadowCameraFar = K.camera.far, i.pointShadow[_] = G, i.pointShadowMap[_] = W, i.pointShadowMatrix[_] = L.shadow.matrix, b++;
        }
        i.point[_] = q, _++;
      } else if (L.isHemisphereLight) {
        const q = e.get(L);
        q.skyColor.copy(L.color).multiplyScalar(H), q.groundColor.copy(L.groundColor).multiplyScalar(H), i.hemi[u] = q, u++;
      }
    }
    p > 0 && (n.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = se.LTC_FLOAT_1, i.rectAreaLTC2 = se.LTC_FLOAT_2) : (i.rectAreaLTC1 = se.LTC_HALF_1, i.rectAreaLTC2 = se.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = d, i.ambient[2] = f;
    const N = i.hash;
    (N.directionalLength !== m || N.pointLength !== _ || N.spotLength !== v || N.rectAreaLength !== p || N.hemiLength !== u || N.numDirectionalShadows !== A || N.numPointShadows !== b || N.numSpotShadows !== y || N.numSpotMaps !== T || N.numLightProbes !== R) && (i.directional.length = m, i.spot.length = v, i.rectArea.length = p, i.point.length = _, i.hemi.length = u, i.directionalShadow.length = A, i.directionalShadowMap.length = A, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = y, i.spotShadowMap.length = y, i.directionalShadowMatrix.length = A, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = y + T - C, i.spotLightMap.length = T, i.numSpotLightShadowsWithMaps = C, i.numLightProbes = R, N.directionalLength = m, N.pointLength = _, N.spotLength = v, N.rectAreaLength = p, N.hemiLength = u, N.numDirectionalShadows = A, N.numPointShadows = b, N.numSpotShadows = y, N.numSpotMaps = T, N.numLightProbes = R, i.version = Hm++);
  }
  function c(l, h) {
    let d = 0, f = 0, m = 0, _ = 0, v = 0;
    const p = h.matrixWorldInverse;
    for (let u = 0, A = l.length; u < A; u++) {
      const b = l[u];
      if (b.isDirectionalLight) {
        const y = i.directional[d];
        y.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), d++;
      } else if (b.isSpotLight) {
        const y = i.spot[m];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(p), y.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), m++;
      } else if (b.isRectAreaLight) {
        const y = i.rectArea[_];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(p), a.identity(), s.copy(b.matrixWorld), s.premultiply(p), a.extractRotation(s), y.halfWidth.set(b.width * 0.5, 0, 0), y.halfHeight.set(0, b.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), _++;
      } else if (b.isPointLight) {
        const y = i.point[f];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(p), f++;
      } else if (b.isHemisphereLight) {
        const y = i.hemi[v];
        y.direction.setFromMatrixPosition(b.matrixWorld), y.direction.transformDirection(p), v++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: i
  };
}
function fl(n) {
  const e = new Wm(n), t = [], i = [];
  function r(h) {
    l.camera = h, t.length = 0, i.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: i,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: s,
    pushShadow: a
  };
}
function Xm(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new fl(n), e.set(r, [o])) : s >= a.length ? (o = new fl(n), a.push(o)) : o = a[s], o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: i
  };
}
const qm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ym = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function jm(n, e, t) {
  let i = new Ql();
  const r = new Qe(), s = new Qe(), a = new pt(), o = new gd({ depthPacking: Rh }), c = new _d(), l = {}, h = t.maxTextureSize, d = { [Jn]: Bt, [Bt]: Jn, [Ln]: Ln }, f = new Qn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Qe() },
      radius: { value: 4 }
    },
    vertexShader: qm,
    fragmentShader: Ym
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new On();
  _.setAttribute(
    "position",
    new dn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Jt(_, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ll;
  let u = this.type;
  this.render = function(C, R, N) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || C.length === 0) return;
    const S = n.getRenderTarget(), w = n.getActiveCubeFace(), L = n.getActiveMipmapLevel(), B = n.state;
    B.setBlending(jn), B.buffers.depth.getReversed() === !0 ? B.buffers.color.setClear(0, 0, 0, 0) : B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
    const H = u !== Cn && this.type === Cn, j = u === Cn && this.type !== Cn;
    for (let W = 0, q = C.length; W < q; W++) {
      const K = C[W], G = K.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      r.copy(G.mapSize);
      const ae = G.getFrameExtents();
      if (r.multiply(ae), s.copy(G.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ae.x), r.x = s.x * ae.x, G.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ae.y), r.y = s.y * ae.y, G.mapSize.y = s.y)), G.map === null || H === !0 || j === !0) {
        const Me = this.type !== Cn ? { minFilter: hn, magFilter: hn } : {};
        G.map !== null && G.map.dispose(), G.map = new xi(r.x, r.y, Me), G.map.texture.name = K.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(G.map), n.clear();
      const de = G.getViewportCount();
      for (let Me = 0; Me < de; Me++) {
        const Ge = G.getViewport(Me);
        a.set(
          s.x * Ge.x,
          s.y * Ge.y,
          s.x * Ge.z,
          s.y * Ge.w
        ), B.viewport(a), G.updateMatrices(K, Me), i = G.getFrustum(), y(R, N, G.camera, K, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === Cn && A(G, N), G.needsUpdate = !1;
    }
    u = this.type, p.needsUpdate = !1, n.setRenderTarget(S, w, L);
  };
  function A(C, R) {
    const N = e.update(v);
    f.defines.VSM_SAMPLES !== C.blurSamples && (f.defines.VSM_SAMPLES = C.blurSamples, m.defines.VSM_SAMPLES = C.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), C.mapPass === null && (C.mapPass = new xi(r.x, r.y)), f.uniforms.shadow_pass.value = C.map.texture, f.uniforms.resolution.value = C.mapSize, f.uniforms.radius.value = C.radius, n.setRenderTarget(C.mapPass), n.clear(), n.renderBufferDirect(R, null, N, f, v, null), m.uniforms.shadow_pass.value = C.mapPass.texture, m.uniforms.resolution.value = C.mapSize, m.uniforms.radius.value = C.radius, n.setRenderTarget(C.map), n.clear(), n.renderBufferDirect(R, null, N, m, v, null);
  }
  function b(C, R, N, S) {
    let w = null;
    const L = N.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (L !== void 0)
      w = L;
    else if (w = N.isPointLight === !0 ? c : o, n.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0 || R.alphaToCoverage === !0) {
      const B = w.uuid, H = R.uuid;
      let j = l[B];
      j === void 0 && (j = {}, l[B] = j);
      let W = j[H];
      W === void 0 && (W = w.clone(), j[H] = W, R.addEventListener("dispose", T)), w = W;
    }
    if (w.visible = R.visible, w.wireframe = R.wireframe, S === Cn ? w.side = R.shadowSide !== null ? R.shadowSide : R.side : w.side = R.shadowSide !== null ? R.shadowSide : d[R.side], w.alphaMap = R.alphaMap, w.alphaTest = R.alphaToCoverage === !0 ? 0.5 : R.alphaTest, w.map = R.map, w.clipShadows = R.clipShadows, w.clippingPlanes = R.clippingPlanes, w.clipIntersection = R.clipIntersection, w.displacementMap = R.displacementMap, w.displacementScale = R.displacementScale, w.displacementBias = R.displacementBias, w.wireframeLinewidth = R.wireframeLinewidth, w.linewidth = R.linewidth, N.isPointLight === !0 && w.isMeshDistanceMaterial === !0) {
      const B = n.properties.get(w);
      B.light = N;
    }
    return w;
  }
  function y(C, R, N, S, w) {
    if (C.visible === !1) return;
    if (C.layers.test(R.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && w === Cn) && (!C.frustumCulled || i.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, C.matrixWorld);
      const H = e.update(C), j = C.material;
      if (Array.isArray(j)) {
        const W = H.groups;
        for (let q = 0, K = W.length; q < K; q++) {
          const G = W[q], ae = j[G.materialIndex];
          if (ae && ae.visible) {
            const de = b(C, ae, S, w);
            C.onBeforeShadow(n, C, R, N, H, de, G), n.renderBufferDirect(N, null, H, de, C, G), C.onAfterShadow(n, C, R, N, H, de, G);
          }
        }
      } else if (j.visible) {
        const W = b(C, j, S, w);
        C.onBeforeShadow(n, C, R, N, H, W, null), n.renderBufferDirect(N, null, H, W, C, null), C.onAfterShadow(n, C, R, N, H, W, null);
      }
    }
    const B = C.children;
    for (let H = 0, j = B.length; H < j; H++)
      y(B[H], R, N, S, w);
  }
  function T(C) {
    C.target.removeEventListener("dispose", T);
    for (const N in l) {
      const S = l[N], w = C.target.uuid;
      w in S && (S[w].dispose(), delete S[w]);
    }
  }
}
const $m = {
  [oa]: la,
  [ca]: ua,
  [ha]: fa,
  [Hi]: da,
  [la]: oa,
  [ua]: ca,
  [fa]: ha,
  [da]: Hi
};
function Km(n, e) {
  function t() {
    let P = !1;
    const te = new pt();
    let ie = null;
    const fe = new pt(0, 0, 0, 0);
    return {
      setMask: function(J) {
        ie !== J && !P && (n.colorMask(J, J, J, J), ie = J);
      },
      setLocked: function(J) {
        P = J;
      },
      setClear: function(J, Y, ge, De, nt) {
        nt === !0 && (J *= De, Y *= De, ge *= De), te.set(J, Y, ge, De), fe.equals(te) === !1 && (n.clearColor(J, Y, ge, De), fe.copy(te));
      },
      reset: function() {
        P = !1, ie = null, fe.set(-1, 0, 0, 0);
      }
    };
  }
  function i() {
    let P = !1, te = !1, ie = null, fe = null, J = null;
    return {
      setReversed: function(Y) {
        if (te !== Y) {
          const ge = e.get("EXT_clip_control");
          Y ? ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.ZERO_TO_ONE_EXT) : ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.NEGATIVE_ONE_TO_ONE_EXT), te = Y;
          const De = J;
          J = null, this.setClear(De);
        }
      },
      getReversed: function() {
        return te;
      },
      setTest: function(Y) {
        Y ? Z(n.DEPTH_TEST) : pe(n.DEPTH_TEST);
      },
      setMask: function(Y) {
        ie !== Y && !P && (n.depthMask(Y), ie = Y);
      },
      setFunc: function(Y) {
        if (te && (Y = $m[Y]), fe !== Y) {
          switch (Y) {
            case oa:
              n.depthFunc(n.NEVER);
              break;
            case la:
              n.depthFunc(n.ALWAYS);
              break;
            case ca:
              n.depthFunc(n.LESS);
              break;
            case Hi:
              n.depthFunc(n.LEQUAL);
              break;
            case ha:
              n.depthFunc(n.EQUAL);
              break;
            case da:
              n.depthFunc(n.GEQUAL);
              break;
            case ua:
              n.depthFunc(n.GREATER);
              break;
            case fa:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          fe = Y;
        }
      },
      setLocked: function(Y) {
        P = Y;
      },
      setClear: function(Y) {
        J !== Y && (te && (Y = 1 - Y), n.clearDepth(Y), J = Y);
      },
      reset: function() {
        P = !1, ie = null, fe = null, J = null, te = !1;
      }
    };
  }
  function r() {
    let P = !1, te = null, ie = null, fe = null, J = null, Y = null, ge = null, De = null, nt = null;
    return {
      setTest: function(je) {
        P || (je ? Z(n.STENCIL_TEST) : pe(n.STENCIL_TEST));
      },
      setMask: function(je) {
        te !== je && !P && (n.stencilMask(je), te = je);
      },
      setFunc: function(je, vn, pn) {
        (ie !== je || fe !== vn || J !== pn) && (n.stencilFunc(je, vn, pn), ie = je, fe = vn, J = pn);
      },
      setOp: function(je, vn, pn) {
        (Y !== je || ge !== vn || De !== pn) && (n.stencilOp(je, vn, pn), Y = je, ge = vn, De = pn);
      },
      setLocked: function(je) {
        P = je;
      },
      setClear: function(je) {
        nt !== je && (n.clearStencil(je), nt = je);
      },
      reset: function() {
        P = !1, te = null, ie = null, fe = null, J = null, Y = null, ge = null, De = null, nt = null;
      }
    };
  }
  const s = new t(), a = new i(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, v = !1, p = null, u = null, A = null, b = null, y = null, T = null, C = null, R = new $e(0, 0, 0), N = 0, S = !1, w = null, L = null, B = null, H = null, j = null;
  const W = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, K = 0;
  const G = n.getParameter(n.VERSION);
  G.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(G)[1]), q = K >= 1) : G.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), q = K >= 2);
  let ae = null, de = {};
  const Me = n.getParameter(n.SCISSOR_BOX), Ge = n.getParameter(n.VIEWPORT), tt = new pt().fromArray(Me), st = new pt().fromArray(Ge);
  function Ye(P, te, ie, fe) {
    const J = new Uint8Array(4), Y = n.createTexture();
    n.bindTexture(P, Y), n.texParameteri(P, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(P, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let ge = 0; ge < ie; ge++)
      P === n.TEXTURE_3D || P === n.TEXTURE_2D_ARRAY ? n.texImage3D(te, 0, n.RGBA, 1, 1, fe, 0, n.RGBA, n.UNSIGNED_BYTE, J) : n.texImage2D(te + ge, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, J);
    return Y;
  }
  const X = {};
  X[n.TEXTURE_2D] = Ye(n.TEXTURE_2D, n.TEXTURE_2D, 1), X[n.TEXTURE_CUBE_MAP] = Ye(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), X[n.TEXTURE_2D_ARRAY] = Ye(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), X[n.TEXTURE_3D] = Ye(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), Z(n.DEPTH_TEST), a.setFunc(Hi), Pe(!1), _e(xo), Z(n.CULL_FACE), at(jn);
  function Z(P) {
    h[P] !== !0 && (n.enable(P), h[P] = !0);
  }
  function pe(P) {
    h[P] !== !1 && (n.disable(P), h[P] = !1);
  }
  function Ie(P, te) {
    return d[P] !== te ? (n.bindFramebuffer(P, te), d[P] = te, P === n.DRAW_FRAMEBUFFER && (d[n.FRAMEBUFFER] = te), P === n.FRAMEBUFFER && (d[n.DRAW_FRAMEBUFFER] = te), !0) : !1;
  }
  function be(P, te) {
    let ie = m, fe = !1;
    if (P) {
      ie = f.get(te), ie === void 0 && (ie = [], f.set(te, ie));
      const J = P.textures;
      if (ie.length !== J.length || ie[0] !== n.COLOR_ATTACHMENT0) {
        for (let Y = 0, ge = J.length; Y < ge; Y++)
          ie[Y] = n.COLOR_ATTACHMENT0 + Y;
        ie.length = J.length, fe = !0;
      }
    } else
      ie[0] !== n.BACK && (ie[0] = n.BACK, fe = !0);
    fe && n.drawBuffers(ie);
  }
  function We(P) {
    return _ !== P ? (n.useProgram(P), _ = P, !0) : !1;
  }
  const At = {
    [di]: n.FUNC_ADD,
    [eh]: n.FUNC_SUBTRACT,
    [th]: n.FUNC_REVERSE_SUBTRACT
  };
  At[nh] = n.MIN, At[ih] = n.MAX;
  const E = {
    [rh]: n.ZERO,
    [sh]: n.ONE,
    [ah]: n.SRC_COLOR,
    [sa]: n.SRC_ALPHA,
    [uh]: n.SRC_ALPHA_SATURATE,
    [hh]: n.DST_COLOR,
    [lh]: n.DST_ALPHA,
    [oh]: n.ONE_MINUS_SRC_COLOR,
    [aa]: n.ONE_MINUS_SRC_ALPHA,
    [dh]: n.ONE_MINUS_DST_COLOR,
    [ch]: n.ONE_MINUS_DST_ALPHA,
    [fh]: n.CONSTANT_COLOR,
    [ph]: n.ONE_MINUS_CONSTANT_COLOR,
    [mh]: n.CONSTANT_ALPHA,
    [gh]: n.ONE_MINUS_CONSTANT_ALPHA
  };
  function at(P, te, ie, fe, J, Y, ge, De, nt, je) {
    if (P === jn) {
      v === !0 && (pe(n.BLEND), v = !1);
      return;
    }
    if (v === !1 && (Z(n.BLEND), v = !0), P !== Qc) {
      if (P !== p || je !== S) {
        if ((u !== di || y !== di) && (n.blendEquation(n.FUNC_ADD), u = di, y = di), je)
          switch (P) {
            case Bi:
              n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case as:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case vo:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case yo:
              n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case Bi:
              n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case as:
              n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
              break;
            case vo:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case yo:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        A = null, b = null, T = null, C = null, R.set(0, 0, 0), N = 0, p = P, S = je;
      }
      return;
    }
    J = J || te, Y = Y || ie, ge = ge || fe, (te !== u || J !== y) && (n.blendEquationSeparate(At[te], At[J]), u = te, y = J), (ie !== A || fe !== b || Y !== T || ge !== C) && (n.blendFuncSeparate(E[ie], E[fe], E[Y], E[ge]), A = ie, b = fe, T = Y, C = ge), (De.equals(R) === !1 || nt !== N) && (n.blendColor(De.r, De.g, De.b, nt), R.copy(De), N = nt), p = P, S = !1;
  }
  function Ue(P, te) {
    P.side === Ln ? pe(n.CULL_FACE) : Z(n.CULL_FACE);
    let ie = P.side === Bt;
    te && (ie = !ie), Pe(ie), P.blending === Bi && P.transparent === !1 ? at(jn) : at(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const fe = P.stencilWrite;
    o.setTest(fe), fe && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), xe(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? Z(n.SAMPLE_ALPHA_TO_COVERAGE) : pe(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Pe(P) {
    w !== P && (P ? n.frontFace(n.CW) : n.frontFace(n.CCW), w = P);
  }
  function _e(P) {
    P !== Kc ? (Z(n.CULL_FACE), P !== L && (P === xo ? n.cullFace(n.BACK) : P === Zc ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : pe(n.CULL_FACE), L = P;
  }
  function ot(P) {
    P !== B && (q && n.lineWidth(P), B = P);
  }
  function xe(P, te, ie) {
    P ? (Z(n.POLYGON_OFFSET_FILL), (H !== te || j !== ie) && (n.polygonOffset(te, ie), H = te, j = ie)) : pe(n.POLYGON_OFFSET_FILL);
  }
  function ke(P) {
    P ? Z(n.SCISSOR_TEST) : pe(n.SCISSOR_TEST);
  }
  function St(P) {
    P === void 0 && (P = n.TEXTURE0 + W - 1), ae !== P && (n.activeTexture(P), ae = P);
  }
  function ft(P, te, ie) {
    ie === void 0 && (ae === null ? ie = n.TEXTURE0 + W - 1 : ie = ae);
    let fe = de[ie];
    fe === void 0 && (fe = { type: void 0, texture: void 0 }, de[ie] = fe), (fe.type !== P || fe.texture !== te) && (ae !== ie && (n.activeTexture(ie), ae = ie), n.bindTexture(P, te || X[P]), fe.type = P, fe.texture = te);
  }
  function M() {
    const P = de[ae];
    P !== void 0 && P.type !== void 0 && (n.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function g() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function U() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function V() {
    try {
      n.texSubImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function $() {
    try {
      n.texSubImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function z() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Se() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ne() {
    try {
      n.texStorage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ve() {
    try {
      n.texStorage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ye() {
    try {
      n.texImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ee() {
    try {
      n.texImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function he(P) {
    tt.equals(P) === !1 && (n.scissor(P.x, P.y, P.z, P.w), tt.copy(P));
  }
  function Re(P) {
    st.equals(P) === !1 && (n.viewport(P.x, P.y, P.z, P.w), st.copy(P));
  }
  function we(P, te) {
    let ie = l.get(te);
    ie === void 0 && (ie = /* @__PURE__ */ new WeakMap(), l.set(te, ie));
    let fe = ie.get(P);
    fe === void 0 && (fe = n.getUniformBlockIndex(te, P.name), ie.set(P, fe));
  }
  function le(P, te) {
    const fe = l.get(te).get(P);
    c.get(te) !== fe && (n.uniformBlockBinding(te, fe, P.__bindingPointIndex), c.set(te, fe));
  }
  function Ne() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(!0, !0, !0, !0), n.clearColor(0, 0, 0, 0), n.depthMask(!0), n.depthFunc(n.LESS), a.setReversed(!1), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), h = {}, ae = null, de = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, v = !1, p = null, u = null, A = null, b = null, y = null, T = null, C = null, R = new $e(0, 0, 0), N = 0, S = !1, w = null, L = null, B = null, H = null, j = null, tt.set(0, 0, n.canvas.width, n.canvas.height), st.set(0, 0, n.canvas.width, n.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: Z,
    disable: pe,
    bindFramebuffer: Ie,
    drawBuffers: be,
    useProgram: We,
    setBlending: at,
    setMaterial: Ue,
    setFlipSided: Pe,
    setCullFace: _e,
    setLineWidth: ot,
    setPolygonOffset: xe,
    setScissorTest: ke,
    activeTexture: St,
    bindTexture: ft,
    unbindTexture: M,
    compressedTexImage2D: g,
    compressedTexImage3D: U,
    texImage2D: ye,
    texImage3D: ee,
    updateUBOMapping: we,
    uniformBlockBinding: le,
    texStorage2D: ne,
    texStorage3D: ve,
    texSubImage2D: V,
    texSubImage3D: $,
    compressedTexSubImage2D: z,
    compressedTexSubImage3D: Se,
    scissor: he,
    viewport: Re,
    reset: Ne
  };
}
function Zm(n, e, t, i, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Qe(), h = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(M, g) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(M, g)
    ) : hr("canvas");
  }
  function v(M, g, U) {
    let V = 1;
    const $ = ft(M);
    if (($.width > U || $.height > U) && (V = U / Math.max($.width, $.height)), V < 1)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap || typeof VideoFrame < "u" && M instanceof VideoFrame) {
        const z = Math.floor(V * $.width), Se = Math.floor(V * $.height);
        d === void 0 && (d = _(z, Se));
        const ne = g ? _(z, Se) : d;
        return ne.width = z, ne.height = Se, ne.getContext("2d").drawImage(M, 0, 0, z, Se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + z + "x" + Se + ")."), ne;
      } else
        return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), M;
    return M;
  }
  function p(M) {
    return M.generateMipmaps;
  }
  function u(M) {
    n.generateMipmap(M);
  }
  function A(M) {
    return M.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : M.isWebGL3DRenderTarget ? n.TEXTURE_3D : M.isWebGLArrayRenderTarget || M.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function b(M, g, U, V, $ = !1) {
    if (M !== null) {
      if (n[M] !== void 0) return n[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let z = g;
    if (g === n.RED && (U === n.FLOAT && (z = n.R32F), U === n.HALF_FLOAT && (z = n.R16F), U === n.UNSIGNED_BYTE && (z = n.R8)), g === n.RED_INTEGER && (U === n.UNSIGNED_BYTE && (z = n.R8UI), U === n.UNSIGNED_SHORT && (z = n.R16UI), U === n.UNSIGNED_INT && (z = n.R32UI), U === n.BYTE && (z = n.R8I), U === n.SHORT && (z = n.R16I), U === n.INT && (z = n.R32I)), g === n.RG && (U === n.FLOAT && (z = n.RG32F), U === n.HALF_FLOAT && (z = n.RG16F), U === n.UNSIGNED_BYTE && (z = n.RG8)), g === n.RG_INTEGER && (U === n.UNSIGNED_BYTE && (z = n.RG8UI), U === n.UNSIGNED_SHORT && (z = n.RG16UI), U === n.UNSIGNED_INT && (z = n.RG32UI), U === n.BYTE && (z = n.RG8I), U === n.SHORT && (z = n.RG16I), U === n.INT && (z = n.RG32I)), g === n.RGB_INTEGER && (U === n.UNSIGNED_BYTE && (z = n.RGB8UI), U === n.UNSIGNED_SHORT && (z = n.RGB16UI), U === n.UNSIGNED_INT && (z = n.RGB32UI), U === n.BYTE && (z = n.RGB8I), U === n.SHORT && (z = n.RGB16I), U === n.INT && (z = n.RGB32I)), g === n.RGBA_INTEGER && (U === n.UNSIGNED_BYTE && (z = n.RGBA8UI), U === n.UNSIGNED_SHORT && (z = n.RGBA16UI), U === n.UNSIGNED_INT && (z = n.RGBA32UI), U === n.BYTE && (z = n.RGBA8I), U === n.SHORT && (z = n.RGBA16I), U === n.INT && (z = n.RGBA32I)), g === n.RGB && (U === n.UNSIGNED_INT_5_9_9_9_REV && (z = n.RGB9_E5), U === n.UNSIGNED_INT_10F_11F_11F_REV && (z = n.R11F_G11F_B10F)), g === n.RGBA) {
      const Se = $ ? ls : qe.getTransfer(V);
      U === n.FLOAT && (z = n.RGBA32F), U === n.HALF_FLOAT && (z = n.RGBA16F), U === n.UNSIGNED_BYTE && (z = Se === Ze ? n.SRGB8_ALPHA8 : n.RGBA8), U === n.UNSIGNED_SHORT_4_4_4_4 && (z = n.RGBA4), U === n.UNSIGNED_SHORT_5_5_5_1 && (z = n.RGB5_A1);
    }
    return (z === n.R16F || z === n.R32F || z === n.RG16F || z === n.RG32F || z === n.RGBA16F || z === n.RGBA32F) && e.get("EXT_color_buffer_float"), z;
  }
  function y(M, g) {
    let U;
    return M ? g === null || g === _i || g === or ? U = n.DEPTH24_STENCIL8 : g === Un ? U = n.DEPTH32F_STENCIL8 : g === ar && (U = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === _i || g === or ? U = n.DEPTH_COMPONENT24 : g === Un ? U = n.DEPTH_COMPONENT32F : g === ar && (U = n.DEPTH_COMPONENT16), U;
  }
  function T(M, g) {
    return p(M) === !0 || M.isFramebufferTexture && M.minFilter !== hn && M.minFilter !== _n ? Math.log2(Math.max(g.width, g.height)) + 1 : M.mipmaps !== void 0 && M.mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? g.mipmaps.length : 1;
  }
  function C(M) {
    const g = M.target;
    g.removeEventListener("dispose", C), N(g), g.isVideoTexture && h.delete(g);
  }
  function R(M) {
    const g = M.target;
    g.removeEventListener("dispose", R), w(g);
  }
  function N(M) {
    const g = i.get(M);
    if (g.__webglInit === void 0) return;
    const U = M.source, V = f.get(U);
    if (V) {
      const $ = V[g.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && S(M), Object.keys(V).length === 0 && f.delete(U);
    }
    i.remove(M);
  }
  function S(M) {
    const g = i.get(M);
    n.deleteTexture(g.__webglTexture);
    const U = M.source, V = f.get(U);
    delete V[g.__cacheKey], a.memory.textures--;
  }
  function w(M) {
    const g = i.get(M);
    if (M.depthTexture && (M.depthTexture.dispose(), i.remove(M.depthTexture)), M.isWebGLCubeRenderTarget)
      for (let V = 0; V < 6; V++) {
        if (Array.isArray(g.__webglFramebuffer[V]))
          for (let $ = 0; $ < g.__webglFramebuffer[V].length; $++) n.deleteFramebuffer(g.__webglFramebuffer[V][$]);
        else
          n.deleteFramebuffer(g.__webglFramebuffer[V]);
        g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer[V]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let V = 0; V < g.__webglFramebuffer.length; V++) n.deleteFramebuffer(g.__webglFramebuffer[V]);
      else
        n.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && n.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer)
        for (let V = 0; V < g.__webglColorRenderbuffer.length; V++)
          g.__webglColorRenderbuffer[V] && n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);
      g.__webglDepthRenderbuffer && n.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const U = M.textures;
    for (let V = 0, $ = U.length; V < $; V++) {
      const z = i.get(U[V]);
      z.__webglTexture && (n.deleteTexture(z.__webglTexture), a.memory.textures--), i.remove(U[V]);
    }
    i.remove(M);
  }
  let L = 0;
  function B() {
    L = 0;
  }
  function H() {
    const M = L;
    return M >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + r.maxTextures), L += 1, M;
  }
  function j(M) {
    const g = [];
    return g.push(M.wrapS), g.push(M.wrapT), g.push(M.wrapR || 0), g.push(M.magFilter), g.push(M.minFilter), g.push(M.anisotropy), g.push(M.internalFormat), g.push(M.format), g.push(M.type), g.push(M.generateMipmaps), g.push(M.premultiplyAlpha), g.push(M.flipY), g.push(M.unpackAlignment), g.push(M.colorSpace), g.join();
  }
  function W(M, g) {
    const U = i.get(M);
    if (M.isVideoTexture && ke(M), M.isRenderTargetTexture === !1 && M.isExternalTexture !== !0 && M.version > 0 && U.__version !== M.version) {
      const V = M.image;
      if (V === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (V.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(U, M, g);
        return;
      }
    } else M.isExternalTexture && (U.__webglTexture = M.sourceTexture ? M.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D, U.__webglTexture, n.TEXTURE0 + g);
  }
  function q(M, g) {
    const U = i.get(M);
    if (M.isRenderTargetTexture === !1 && M.version > 0 && U.__version !== M.version) {
      X(U, M, g);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, U.__webglTexture, n.TEXTURE0 + g);
  }
  function K(M, g) {
    const U = i.get(M);
    if (M.isRenderTargetTexture === !1 && M.version > 0 && U.__version !== M.version) {
      X(U, M, g);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, U.__webglTexture, n.TEXTURE0 + g);
  }
  function G(M, g) {
    const U = i.get(M);
    if (M.version > 0 && U.__version !== M.version) {
      Z(U, M, g);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, U.__webglTexture, n.TEXTURE0 + g);
  }
  const ae = {
    [os]: n.REPEAT,
    [fi]: n.CLAMP_TO_EDGE,
    [ga]: n.MIRRORED_REPEAT
  }, de = {
    [hn]: n.NEAREST,
    [Th]: n.NEAREST_MIPMAP_NEAREST,
    [Er]: n.NEAREST_MIPMAP_LINEAR,
    [_n]: n.LINEAR,
    [Ms]: n.LINEAR_MIPMAP_NEAREST,
    [pi]: n.LINEAR_MIPMAP_LINEAR
  }, Me = {
    [Lh]: n.NEVER,
    [kh]: n.ALWAYS,
    [Ih]: n.LESS,
    [Hl]: n.LEQUAL,
    [Dh]: n.EQUAL,
    [Fh]: n.GEQUAL,
    [Uh]: n.GREATER,
    [Nh]: n.NOTEQUAL
  };
  function Ge(M, g) {
    if (g.type === Un && e.has("OES_texture_float_linear") === !1 && (g.magFilter === _n || g.magFilter === Ms || g.magFilter === Er || g.magFilter === pi || g.minFilter === _n || g.minFilter === Ms || g.minFilter === Er || g.minFilter === pi) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(M, n.TEXTURE_WRAP_S, ae[g.wrapS]), n.texParameteri(M, n.TEXTURE_WRAP_T, ae[g.wrapT]), (M === n.TEXTURE_3D || M === n.TEXTURE_2D_ARRAY) && n.texParameteri(M, n.TEXTURE_WRAP_R, ae[g.wrapR]), n.texParameteri(M, n.TEXTURE_MAG_FILTER, de[g.magFilter]), n.texParameteri(M, n.TEXTURE_MIN_FILTER, de[g.minFilter]), g.compareFunction && (n.texParameteri(M, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(M, n.TEXTURE_COMPARE_FUNC, Me[g.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (g.magFilter === hn || g.minFilter !== Er && g.minFilter !== pi || g.type === Un && e.has("OES_texture_float_linear") === !1) return;
      if (g.anisotropy > 1 || i.get(g).__currentAnisotropy) {
        const U = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(M, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), i.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function tt(M, g) {
    let U = !1;
    M.__webglInit === void 0 && (M.__webglInit = !0, g.addEventListener("dispose", C));
    const V = g.source;
    let $ = f.get(V);
    $ === void 0 && ($ = {}, f.set(V, $));
    const z = j(g);
    if (z !== M.__cacheKey) {
      $[z] === void 0 && ($[z] = {
        texture: n.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, U = !0), $[z].usedTimes++;
      const Se = $[M.__cacheKey];
      Se !== void 0 && ($[M.__cacheKey].usedTimes--, Se.usedTimes === 0 && S(g)), M.__cacheKey = z, M.__webglTexture = $[z].texture;
    }
    return U;
  }
  function st(M, g, U) {
    return Math.floor(Math.floor(M / U) / g);
  }
  function Ye(M, g, U, V) {
    const z = M.updateRanges;
    if (z.length === 0)
      t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, g.width, g.height, U, V, g.data);
    else {
      z.sort((ee, he) => ee.start - he.start);
      let Se = 0;
      for (let ee = 1; ee < z.length; ee++) {
        const he = z[Se], Re = z[ee], we = he.start + he.count, le = st(Re.start, g.width, 4), Ne = st(he.start, g.width, 4);
        Re.start <= we + 1 && le === Ne && st(Re.start + Re.count - 1, g.width, 4) === le ? he.count = Math.max(
          he.count,
          Re.start + Re.count - he.start
        ) : (++Se, z[Se] = Re);
      }
      z.length = Se + 1;
      const ne = n.getParameter(n.UNPACK_ROW_LENGTH), ve = n.getParameter(n.UNPACK_SKIP_PIXELS), ye = n.getParameter(n.UNPACK_SKIP_ROWS);
      n.pixelStorei(n.UNPACK_ROW_LENGTH, g.width);
      for (let ee = 0, he = z.length; ee < he; ee++) {
        const Re = z[ee], we = Math.floor(Re.start / 4), le = Math.ceil(Re.count / 4), Ne = we % g.width, P = Math.floor(we / g.width), te = le, ie = 1;
        n.pixelStorei(n.UNPACK_SKIP_PIXELS, Ne), n.pixelStorei(n.UNPACK_SKIP_ROWS, P), t.texSubImage2D(n.TEXTURE_2D, 0, Ne, P, te, ie, U, V, g.data);
      }
      M.clearUpdateRanges(), n.pixelStorei(n.UNPACK_ROW_LENGTH, ne), n.pixelStorei(n.UNPACK_SKIP_PIXELS, ve), n.pixelStorei(n.UNPACK_SKIP_ROWS, ye);
    }
  }
  function X(M, g, U) {
    let V = n.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (V = n.TEXTURE_2D_ARRAY), g.isData3DTexture && (V = n.TEXTURE_3D);
    const $ = tt(M, g), z = g.source;
    t.bindTexture(V, M.__webglTexture, n.TEXTURE0 + U);
    const Se = i.get(z);
    if (z.version !== Se.__version || $ === !0) {
      t.activeTexture(n.TEXTURE0 + U);
      const ne = qe.getPrimaries(qe.workingColorSpace), ve = g.colorSpace === qn ? null : qe.getPrimaries(g.colorSpace), ye = g.colorSpace === qn || ne === ve ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ye);
      let ee = v(g.image, !1, r.maxTextureSize);
      ee = St(g, ee);
      const he = s.convert(g.format, g.colorSpace), Re = s.convert(g.type);
      let we = b(g.internalFormat, he, Re, g.colorSpace, g.isVideoTexture);
      Ge(V, g);
      let le;
      const Ne = g.mipmaps, P = g.isVideoTexture !== !0, te = Se.__version === void 0 || $ === !0, ie = z.dataReady, fe = T(g, ee);
      if (g.isDepthTexture)
        we = y(g.format === cr, g.type), te && (P ? t.texStorage2D(n.TEXTURE_2D, 1, we, ee.width, ee.height) : t.texImage2D(n.TEXTURE_2D, 0, we, ee.width, ee.height, 0, he, Re, null));
      else if (g.isDataTexture)
        if (Ne.length > 0) {
          P && te && t.texStorage2D(n.TEXTURE_2D, fe, we, Ne[0].width, Ne[0].height);
          for (let J = 0, Y = Ne.length; J < Y; J++)
            le = Ne[J], P ? ie && t.texSubImage2D(n.TEXTURE_2D, J, 0, 0, le.width, le.height, he, Re, le.data) : t.texImage2D(n.TEXTURE_2D, J, we, le.width, le.height, 0, he, Re, le.data);
          g.generateMipmaps = !1;
        } else
          P ? (te && t.texStorage2D(n.TEXTURE_2D, fe, we, ee.width, ee.height), ie && Ye(g, ee, he, Re)) : t.texImage2D(n.TEXTURE_2D, 0, we, ee.width, ee.height, 0, he, Re, ee.data);
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          P && te && t.texStorage3D(n.TEXTURE_2D_ARRAY, fe, we, Ne[0].width, Ne[0].height, ee.depth);
          for (let J = 0, Y = Ne.length; J < Y; J++)
            if (le = Ne[J], g.format !== cn)
              if (he !== null)
                if (P) {
                  if (ie)
                    if (g.layerUpdates.size > 0) {
                      const ge = Vo(le.width, le.height, g.format, g.type);
                      for (const De of g.layerUpdates) {
                        const nt = le.data.subarray(
                          De * ge / le.data.BYTES_PER_ELEMENT,
                          (De + 1) * ge / le.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, De, le.width, le.height, 1, he, nt);
                      }
                      g.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, 0, le.width, le.height, ee.depth, he, le.data);
                } else
                  t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, J, we, le.width, le.height, ee.depth, 0, le.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              P ? ie && t.texSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, 0, le.width, le.height, ee.depth, he, Re, le.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, J, we, le.width, le.height, ee.depth, 0, he, Re, le.data);
        } else {
          P && te && t.texStorage2D(n.TEXTURE_2D, fe, we, Ne[0].width, Ne[0].height);
          for (let J = 0, Y = Ne.length; J < Y; J++)
            le = Ne[J], g.format !== cn ? he !== null ? P ? ie && t.compressedTexSubImage2D(n.TEXTURE_2D, J, 0, 0, le.width, le.height, he, le.data) : t.compressedTexImage2D(n.TEXTURE_2D, J, we, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? ie && t.texSubImage2D(n.TEXTURE_2D, J, 0, 0, le.width, le.height, he, Re, le.data) : t.texImage2D(n.TEXTURE_2D, J, we, le.width, le.height, 0, he, Re, le.data);
        }
      else if (g.isDataArrayTexture)
        if (P) {
          if (te && t.texStorage3D(n.TEXTURE_2D_ARRAY, fe, we, ee.width, ee.height, ee.depth), ie)
            if (g.layerUpdates.size > 0) {
              const J = Vo(ee.width, ee.height, g.format, g.type);
              for (const Y of g.layerUpdates) {
                const ge = ee.data.subarray(
                  Y * J / ee.data.BYTES_PER_ELEMENT,
                  (Y + 1) * J / ee.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, Y, ee.width, ee.height, 1, he, Re, ge);
              }
              g.clearLayerUpdates();
            } else
              t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, he, Re, ee.data);
        } else
          t.texImage3D(n.TEXTURE_2D_ARRAY, 0, we, ee.width, ee.height, ee.depth, 0, he, Re, ee.data);
      else if (g.isData3DTexture)
        P ? (te && t.texStorage3D(n.TEXTURE_3D, fe, we, ee.width, ee.height, ee.depth), ie && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, he, Re, ee.data)) : t.texImage3D(n.TEXTURE_3D, 0, we, ee.width, ee.height, ee.depth, 0, he, Re, ee.data);
      else if (g.isFramebufferTexture) {
        if (te)
          if (P)
            t.texStorage2D(n.TEXTURE_2D, fe, we, ee.width, ee.height);
          else {
            let J = ee.width, Y = ee.height;
            for (let ge = 0; ge < fe; ge++)
              t.texImage2D(n.TEXTURE_2D, ge, we, J, Y, 0, he, Re, null), J >>= 1, Y >>= 1;
          }
      } else if (Ne.length > 0) {
        if (P && te) {
          const J = ft(Ne[0]);
          t.texStorage2D(n.TEXTURE_2D, fe, we, J.width, J.height);
        }
        for (let J = 0, Y = Ne.length; J < Y; J++)
          le = Ne[J], P ? ie && t.texSubImage2D(n.TEXTURE_2D, J, 0, 0, he, Re, le) : t.texImage2D(n.TEXTURE_2D, J, we, he, Re, le);
        g.generateMipmaps = !1;
      } else if (P) {
        if (te) {
          const J = ft(ee);
          t.texStorage2D(n.TEXTURE_2D, fe, we, J.width, J.height);
        }
        ie && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, he, Re, ee);
      } else
        t.texImage2D(n.TEXTURE_2D, 0, we, he, Re, ee);
      p(g) && u(V), Se.__version = z.version, g.onUpdate && g.onUpdate(g);
    }
    M.__version = g.version;
  }
  function Z(M, g, U) {
    if (g.image.length !== 6) return;
    const V = tt(M, g), $ = g.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, M.__webglTexture, n.TEXTURE0 + U);
    const z = i.get($);
    if ($.version !== z.__version || V === !0) {
      t.activeTexture(n.TEXTURE0 + U);
      const Se = qe.getPrimaries(qe.workingColorSpace), ne = g.colorSpace === qn ? null : qe.getPrimaries(g.colorSpace), ve = g.colorSpace === qn || Se === ne ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      const ye = g.isCompressedTexture || g.image[0].isCompressedTexture, ee = g.image[0] && g.image[0].isDataTexture, he = [];
      for (let Y = 0; Y < 6; Y++)
        !ye && !ee ? he[Y] = v(g.image[Y], !0, r.maxCubemapSize) : he[Y] = ee ? g.image[Y].image : g.image[Y], he[Y] = St(g, he[Y]);
      const Re = he[0], we = s.convert(g.format, g.colorSpace), le = s.convert(g.type), Ne = b(g.internalFormat, we, le, g.colorSpace), P = g.isVideoTexture !== !0, te = z.__version === void 0 || V === !0, ie = $.dataReady;
      let fe = T(g, Re);
      Ge(n.TEXTURE_CUBE_MAP, g);
      let J;
      if (ye) {
        P && te && t.texStorage2D(n.TEXTURE_CUBE_MAP, fe, Ne, Re.width, Re.height);
        for (let Y = 0; Y < 6; Y++) {
          J = he[Y].mipmaps;
          for (let ge = 0; ge < J.length; ge++) {
            const De = J[ge];
            g.format !== cn ? we !== null ? P ? ie && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge, 0, 0, De.width, De.height, we, De.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge, Ne, De.width, De.height, 0, De.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : P ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge, 0, 0, De.width, De.height, we, le, De.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge, Ne, De.width, De.height, 0, we, le, De.data);
          }
        }
      } else {
        if (J = g.mipmaps, P && te) {
          J.length > 0 && fe++;
          const Y = ft(he[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, fe, Ne, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++)
          if (ee) {
            P ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, he[Y].width, he[Y].height, we, le, he[Y].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ne, he[Y].width, he[Y].height, 0, we, le, he[Y].data);
            for (let ge = 0; ge < J.length; ge++) {
              const nt = J[ge].image[Y].image;
              P ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge + 1, 0, 0, nt.width, nt.height, we, le, nt.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge + 1, Ne, nt.width, nt.height, 0, we, le, nt.data);
            }
          } else {
            P ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, we, le, he[Y]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ne, we, le, he[Y]);
            for (let ge = 0; ge < J.length; ge++) {
              const De = J[ge];
              P ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge + 1, 0, 0, we, le, De.image[Y]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ge + 1, Ne, we, le, De.image[Y]);
            }
          }
      }
      p(g) && u(n.TEXTURE_CUBE_MAP), z.__version = $.version, g.onUpdate && g.onUpdate(g);
    }
    M.__version = g.version;
  }
  function pe(M, g, U, V, $, z) {
    const Se = s.convert(U.format, U.colorSpace), ne = s.convert(U.type), ve = b(U.internalFormat, Se, ne, U.colorSpace), ye = i.get(g), ee = i.get(U);
    if (ee.__renderTarget = g, !ye.__hasExternalTextures) {
      const he = Math.max(1, g.width >> z), Re = Math.max(1, g.height >> z);
      $ === n.TEXTURE_3D || $ === n.TEXTURE_2D_ARRAY ? t.texImage3D($, z, ve, he, Re, g.depth, 0, Se, ne, null) : t.texImage2D($, z, ve, he, Re, 0, Se, ne, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, M), xe(g) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, V, $, ee.__webglTexture, 0, ot(g)) : ($ === n.TEXTURE_2D || $ >= n.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, V, $, ee.__webglTexture, z), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function Ie(M, g, U) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, M), g.depthBuffer) {
      const V = g.depthTexture, $ = V && V.isDepthTexture ? V.type : null, z = y(g.stencilBuffer, $), Se = g.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ne = ot(g);
      xe(g) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ne, z, g.width, g.height) : U ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ne, z, g.width, g.height) : n.renderbufferStorage(n.RENDERBUFFER, z, g.width, g.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, Se, n.RENDERBUFFER, M);
    } else {
      const V = g.textures;
      for (let $ = 0; $ < V.length; $++) {
        const z = V[$], Se = s.convert(z.format, z.colorSpace), ne = s.convert(z.type), ve = b(z.internalFormat, Se, ne, z.colorSpace), ye = ot(g);
        U && xe(g) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ye, ve, g.width, g.height) : xe(g) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ye, ve, g.width, g.height) : n.renderbufferStorage(n.RENDERBUFFER, ve, g.width, g.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function be(M, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(n.FRAMEBUFFER, M), !(g.depthTexture && g.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const V = i.get(g.depthTexture);
    V.__renderTarget = g, (!V.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), W(g.depthTexture, 0);
    const $ = V.__webglTexture, z = ot(g);
    if (g.depthTexture.format === lr)
      xe(g) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, $, 0, z) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, $, 0);
    else if (g.depthTexture.format === cr)
      xe(g) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, $, 0, z) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function We(M) {
    const g = i.get(M), U = M.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== M.depthTexture) {
      const V = M.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), V) {
        const $ = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, V.removeEventListener("dispose", $);
        };
        V.addEventListener("dispose", $), g.__depthDisposeCallback = $;
      }
      g.__boundDepthTexture = V;
    }
    if (M.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (U) throw new Error("target.depthTexture not supported in Cube render targets");
      const V = M.texture.mipmaps;
      V && V.length > 0 ? be(g.__webglFramebuffer[0], M) : be(g.__webglFramebuffer, M);
    } else if (U) {
      g.__webglDepthbuffer = [];
      for (let V = 0; V < 6; V++)
        if (t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[V]), g.__webglDepthbuffer[V] === void 0)
          g.__webglDepthbuffer[V] = n.createRenderbuffer(), Ie(g.__webglDepthbuffer[V], M, !1);
        else {
          const $ = M.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, z = g.__webglDepthbuffer[V];
          n.bindRenderbuffer(n.RENDERBUFFER, z), n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, z);
        }
    } else {
      const V = M.texture.mipmaps;
      if (V && V.length > 0 ? t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[0]) : t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0)
        g.__webglDepthbuffer = n.createRenderbuffer(), Ie(g.__webglDepthbuffer, M, !1);
      else {
        const $ = M.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, z = g.__webglDepthbuffer;
        n.bindRenderbuffer(n.RENDERBUFFER, z), n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, z);
      }
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function At(M, g, U) {
    const V = i.get(M);
    g !== void 0 && pe(V.__webglFramebuffer, M, M.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), U !== void 0 && We(M);
  }
  function E(M) {
    const g = M.texture, U = i.get(M), V = i.get(g);
    M.addEventListener("dispose", R);
    const $ = M.textures, z = M.isWebGLCubeRenderTarget === !0, Se = $.length > 1;
    if (Se || (V.__webglTexture === void 0 && (V.__webglTexture = n.createTexture()), V.__version = g.version, a.memory.textures++), z) {
      U.__webglFramebuffer = [];
      for (let ne = 0; ne < 6; ne++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          U.__webglFramebuffer[ne] = [];
          for (let ve = 0; ve < g.mipmaps.length; ve++)
            U.__webglFramebuffer[ne][ve] = n.createFramebuffer();
        } else
          U.__webglFramebuffer[ne] = n.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let ne = 0; ne < g.mipmaps.length; ne++)
          U.__webglFramebuffer[ne] = n.createFramebuffer();
      } else
        U.__webglFramebuffer = n.createFramebuffer();
      if (Se)
        for (let ne = 0, ve = $.length; ne < ve; ne++) {
          const ye = i.get($[ne]);
          ye.__webglTexture === void 0 && (ye.__webglTexture = n.createTexture(), a.memory.textures++);
        }
      if (M.samples > 0 && xe(M) === !1) {
        U.__webglMultisampledFramebuffer = n.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let ne = 0; ne < $.length; ne++) {
          const ve = $[ne];
          U.__webglColorRenderbuffer[ne] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, U.__webglColorRenderbuffer[ne]);
          const ye = s.convert(ve.format, ve.colorSpace), ee = s.convert(ve.type), he = b(ve.internalFormat, ye, ee, ve.colorSpace, M.isXRRenderTarget === !0), Re = ot(M);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, Re, he, M.width, M.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ne, n.RENDERBUFFER, U.__webglColorRenderbuffer[ne]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), M.depthBuffer && (U.__webglDepthRenderbuffer = n.createRenderbuffer(), Ie(U.__webglDepthRenderbuffer, M, !0)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (z) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, V.__webglTexture), Ge(n.TEXTURE_CUBE_MAP, g);
      for (let ne = 0; ne < 6; ne++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let ve = 0; ve < g.mipmaps.length; ve++)
            pe(U.__webglFramebuffer[ne][ve], M, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ne, ve);
        else
          pe(U.__webglFramebuffer[ne], M, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0);
      p(g) && u(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Se) {
      for (let ne = 0, ve = $.length; ne < ve; ne++) {
        const ye = $[ne], ee = i.get(ye);
        let he = n.TEXTURE_2D;
        (M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (he = M.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(he, ee.__webglTexture), Ge(he, ye), pe(U.__webglFramebuffer, M, ye, n.COLOR_ATTACHMENT0 + ne, he, 0), p(ye) && u(he);
      }
      t.unbindTexture();
    } else {
      let ne = n.TEXTURE_2D;
      if ((M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (ne = M.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(ne, V.__webglTexture), Ge(ne, g), g.mipmaps && g.mipmaps.length > 0)
        for (let ve = 0; ve < g.mipmaps.length; ve++)
          pe(U.__webglFramebuffer[ve], M, g, n.COLOR_ATTACHMENT0, ne, ve);
      else
        pe(U.__webglFramebuffer, M, g, n.COLOR_ATTACHMENT0, ne, 0);
      p(g) && u(ne), t.unbindTexture();
    }
    M.depthBuffer && We(M);
  }
  function at(M) {
    const g = M.textures;
    for (let U = 0, V = g.length; U < V; U++) {
      const $ = g[U];
      if (p($)) {
        const z = A(M), Se = i.get($).__webglTexture;
        t.bindTexture(z, Se), u(z), t.unbindTexture();
      }
    }
  }
  const Ue = [], Pe = [];
  function _e(M) {
    if (M.samples > 0) {
      if (xe(M) === !1) {
        const g = M.textures, U = M.width, V = M.height;
        let $ = n.COLOR_BUFFER_BIT;
        const z = M.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, Se = i.get(M), ne = g.length > 1;
        if (ne)
          for (let ye = 0; ye < g.length; ye++)
            t.bindFramebuffer(n.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ye, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, Se.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ye, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, Se.__webglMultisampledFramebuffer);
        const ve = M.texture.mipmaps;
        ve && ve.length > 0 ? t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Se.__webglFramebuffer[0]) : t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Se.__webglFramebuffer);
        for (let ye = 0; ye < g.length; ye++) {
          if (M.resolveDepthBuffer && (M.depthBuffer && ($ |= n.DEPTH_BUFFER_BIT), M.stencilBuffer && M.resolveStencilBuffer && ($ |= n.STENCIL_BUFFER_BIT)), ne) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, Se.__webglColorRenderbuffer[ye]);
            const ee = i.get(g[ye]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, ee, 0);
          }
          n.blitFramebuffer(0, 0, U, V, 0, 0, U, V, $, n.NEAREST), c === !0 && (Ue.length = 0, Pe.length = 0, Ue.push(n.COLOR_ATTACHMENT0 + ye), M.depthBuffer && M.resolveDepthBuffer === !1 && (Ue.push(z), Pe.push(z), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, Pe)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, Ue));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), ne)
          for (let ye = 0; ye < g.length; ye++) {
            t.bindFramebuffer(n.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ye, n.RENDERBUFFER, Se.__webglColorRenderbuffer[ye]);
            const ee = i.get(g[ye]).__webglTexture;
            t.bindFramebuffer(n.FRAMEBUFFER, Se.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ye, n.TEXTURE_2D, ee, 0);
          }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Se.__webglMultisampledFramebuffer);
      } else if (M.depthBuffer && M.resolveDepthBuffer === !1 && c) {
        const g = M.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function ot(M) {
    return Math.min(r.maxSamples, M.samples);
  }
  function xe(M) {
    const g = i.get(M);
    return M.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
  }
  function ke(M) {
    const g = a.render.frame;
    h.get(M) !== g && (h.set(M, g), M.update());
  }
  function St(M, g) {
    const U = M.colorSpace, V = M.format, $ = M.type;
    return M.isCompressedTexture === !0 || M.isVideoTexture === !0 || U !== Xi && U !== qn && (qe.getTransfer(U) === Ze ? (V !== cn || $ !== Fn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), g;
  }
  function ft(M) {
    return typeof HTMLImageElement < "u" && M instanceof HTMLImageElement ? (l.width = M.naturalWidth || M.width, l.height = M.naturalHeight || M.height) : typeof VideoFrame < "u" && M instanceof VideoFrame ? (l.width = M.displayWidth, l.height = M.displayHeight) : (l.width = M.width, l.height = M.height), l;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = B, this.setTexture2D = W, this.setTexture2DArray = q, this.setTexture3D = K, this.setTextureCube = G, this.rebindTextures = At, this.setupRenderTarget = E, this.updateRenderTargetMipmap = at, this.updateMultisampleRenderTarget = _e, this.setupDepthRenderbuffer = We, this.setupFrameBufferTexture = pe, this.useMultisampledRTT = xe;
}
function Jm(n, e) {
  function t(i, r = qn) {
    let s;
    const a = qe.getTransfer(r);
    if (i === Fn) return n.UNSIGNED_BYTE;
    if (i === eo) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === to) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Fl) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === kl) return n.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === Ul) return n.BYTE;
    if (i === Nl) return n.SHORT;
    if (i === ar) return n.UNSIGNED_SHORT;
    if (i === Qa) return n.INT;
    if (i === _i) return n.UNSIGNED_INT;
    if (i === Un) return n.FLOAT;
    if (i === mr) return n.HALF_FLOAT;
    if (i === Ol) return n.ALPHA;
    if (i === Bl) return n.RGB;
    if (i === cn) return n.RGBA;
    if (i === lr) return n.DEPTH_COMPONENT;
    if (i === cr) return n.DEPTH_STENCIL;
    if (i === Gl) return n.RED;
    if (i === no) return n.RED_INTEGER;
    if (i === zl) return n.RG;
    if (i === io) return n.RG_INTEGER;
    if (i === ro) return n.RGBA_INTEGER;
    if (i === Jr || i === Qr || i === es || i === ts)
      if (a === Ze)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (i === Jr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === Qr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === es) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === ts) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (i === Jr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === Qr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === es) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === ts) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (i === _a || i === xa || i === va || i === ya)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (i === _a) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === xa) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === va) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === ya) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (i === wa || i === Sa || i === ba)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (i === wa || i === Sa) return a === Ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === ba) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (i === Ma || i === Ea || i === Ta || i === Aa || i === Ra || i === Ca || i === Pa || i === La || i === Ia || i === Da || i === Ua || i === Na || i === Fa || i === ka)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (i === Ma) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === Ea) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === Ta) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === Aa) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === Ra) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === Ca) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === Pa) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === La) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === Ia) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === Da) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === Ua) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === Na) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === Fa) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === ka) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (i === Oa || i === Ba || i === Ga)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (i === Oa) return a === Ze ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === Ba) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === Ga) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (i === za || i === Ha || i === Va || i === Wa)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (i === za) return s.COMPRESSED_RED_RGTC1_EXT;
        if (i === Ha) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === Va) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === Wa) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return i === or ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const Qm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, eg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class tg {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const i = new nc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new Qn({
        vertexShader: Qm,
        fragmentShader: eg,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Jt(new wr(20, 20), i);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class ng extends $i {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const i = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, d = null, f = null, m = null, _ = null;
    const v = typeof XRWebGLBinding < "u", p = new tg(), u = {}, A = t.getContextAttributes();
    let b = null, y = null;
    const T = [], C = [], R = new Qe();
    let N = null;
    const S = new an();
    S.viewport = new pt();
    const w = new an();
    w.viewport = new pt();
    const L = [S, w], B = new Sd();
    let H = null, j = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let Z = T[X];
      return Z === void 0 && (Z = new Ys(), T[X] = Z), Z.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let Z = T[X];
      return Z === void 0 && (Z = new Ys(), T[X] = Z), Z.getGripSpace();
    }, this.getHand = function(X) {
      let Z = T[X];
      return Z === void 0 && (Z = new Ys(), T[X] = Z), Z.getHandSpace();
    };
    function W(X) {
      const Z = C.indexOf(X.inputSource);
      if (Z === -1)
        return;
      const pe = T[Z];
      pe !== void 0 && (pe.update(X.inputSource, X.frame, l || a), pe.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function q() {
      r.removeEventListener("select", W), r.removeEventListener("selectstart", W), r.removeEventListener("selectend", W), r.removeEventListener("squeeze", W), r.removeEventListener("squeezestart", W), r.removeEventListener("squeezeend", W), r.removeEventListener("end", q), r.removeEventListener("inputsourceschange", K);
      for (let X = 0; X < T.length; X++) {
        const Z = C[X];
        Z !== null && (C[X] = null, T[X].disconnect(Z));
      }
      H = null, j = null, p.reset();
      for (const X in u)
        delete u[X];
      e.setRenderTarget(b), m = null, f = null, d = null, r = null, y = null, Ye.stop(), i.isPresenting = !1, e.setPixelRatio(N), e.setSize(R.width, R.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(X) {
      l = X;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d === null && v && (d = new XRWebGLBinding(r, t)), d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(X) {
      if (r = X, r !== null) {
        if (b = e.getRenderTarget(), r.addEventListener("select", W), r.addEventListener("selectstart", W), r.addEventListener("selectend", W), r.addEventListener("squeeze", W), r.addEventListener("squeezestart", W), r.addEventListener("squeezeend", W), r.addEventListener("end", q), r.addEventListener("inputsourceschange", K), A.xrCompatible !== !0 && await t.makeXRCompatible(), N = e.getPixelRatio(), e.getSize(R), v && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let pe = null, Ie = null, be = null;
          A.depth && (be = A.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, pe = A.stencil ? cr : lr, Ie = A.stencil ? or : _i);
          const We = {
            colorFormat: t.RGBA8,
            depthFormat: be,
            scaleFactor: s
          };
          d = this.getBinding(), f = d.createProjectionLayer(We), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), y = new xi(
            f.textureWidth,
            f.textureHeight,
            {
              format: cn,
              type: Fn,
              depthTexture: new tc(f.textureWidth, f.textureHeight, Ie, void 0, void 0, void 0, void 0, void 0, void 0, pe),
              stencilBuffer: A.stencil,
              colorSpace: e.outputColorSpace,
              samples: A.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const pe = {
            antialias: A.antialias,
            alpha: !0,
            depth: A.depth,
            stencil: A.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, pe), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), y = new xi(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: cn,
              type: Fn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: A.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        y.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), Ye.setContext(r), Ye.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function K(X) {
      for (let Z = 0; Z < X.removed.length; Z++) {
        const pe = X.removed[Z], Ie = C.indexOf(pe);
        Ie >= 0 && (C[Ie] = null, T[Ie].disconnect(pe));
      }
      for (let Z = 0; Z < X.added.length; Z++) {
        const pe = X.added[Z];
        let Ie = C.indexOf(pe);
        if (Ie === -1) {
          for (let We = 0; We < T.length; We++)
            if (We >= C.length) {
              C.push(pe), Ie = We;
              break;
            } else if (C[We] === null) {
              C[We] = pe, Ie = We;
              break;
            }
          if (Ie === -1) break;
        }
        const be = T[Ie];
        be && be.connect(pe);
      }
    }
    const G = new F(), ae = new F();
    function de(X, Z, pe) {
      G.setFromMatrixPosition(Z.matrixWorld), ae.setFromMatrixPosition(pe.matrixWorld);
      const Ie = G.distanceTo(ae), be = Z.projectionMatrix.elements, We = pe.projectionMatrix.elements, At = be[14] / (be[10] - 1), E = be[14] / (be[10] + 1), at = (be[9] + 1) / be[5], Ue = (be[9] - 1) / be[5], Pe = (be[8] - 1) / be[0], _e = (We[8] + 1) / We[0], ot = At * Pe, xe = At * _e, ke = Ie / (-Pe + _e), St = ke * -Pe;
      if (Z.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(St), X.translateZ(ke), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), be[10] === -1)
        X.projectionMatrix.copy(Z.projectionMatrix), X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);
      else {
        const ft = At + ke, M = E + ke, g = ot - St, U = xe + (Ie - St), V = at * E / M * ft, $ = Ue * E / M * ft;
        X.projectionMatrix.makePerspective(g, U, V, $, ft, M), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function Me(X, Z) {
      Z === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(Z.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (r === null) return;
      let Z = X.near, pe = X.far;
      p.texture !== null && (p.depthNear > 0 && (Z = p.depthNear), p.depthFar > 0 && (pe = p.depthFar)), B.near = w.near = S.near = Z, B.far = w.far = S.far = pe, (H !== B.near || j !== B.far) && (r.updateRenderState({
        depthNear: B.near,
        depthFar: B.far
      }), H = B.near, j = B.far), B.layers.mask = X.layers.mask | 6, S.layers.mask = B.layers.mask & 3, w.layers.mask = B.layers.mask & 5;
      const Ie = X.parent, be = B.cameras;
      Me(B, Ie);
      for (let We = 0; We < be.length; We++)
        Me(be[We], Ie);
      be.length === 2 ? de(B, S, w) : B.projectionMatrix.copy(S.projectionMatrix), Ge(X, B, Ie);
    };
    function Ge(X, Z, pe) {
      pe === null ? X.matrix.copy(Z.matrixWorld) : (X.matrix.copy(pe.matrixWorld), X.matrix.invert(), X.matrix.multiply(Z.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(Z.projectionMatrix), X.projectionMatrixInverse.copy(Z.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = Xa * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return B;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return c;
    }, this.setFoveation = function(X) {
      c = X, f !== null && (f.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(B);
    }, this.getCameraTexture = function(X) {
      return u[X];
    };
    let tt = null;
    function st(X, Z) {
      if (h = Z.getViewerPose(l || a), _ = Z, h !== null) {
        const pe = h.views;
        m !== null && (e.setRenderTargetFramebuffer(y, m.framebuffer), e.setRenderTarget(y));
        let Ie = !1;
        pe.length !== B.cameras.length && (B.cameras.length = 0, Ie = !0);
        for (let E = 0; E < pe.length; E++) {
          const at = pe[E];
          let Ue = null;
          if (m !== null)
            Ue = m.getViewport(at);
          else {
            const _e = d.getViewSubImage(f, at);
            Ue = _e.viewport, E === 0 && (e.setRenderTargetTextures(
              y,
              _e.colorTexture,
              _e.depthStencilTexture
            ), e.setRenderTarget(y));
          }
          let Pe = L[E];
          Pe === void 0 && (Pe = new an(), Pe.layers.enable(E), Pe.viewport = new pt(), L[E] = Pe), Pe.matrix.fromArray(at.transform.matrix), Pe.matrix.decompose(Pe.position, Pe.quaternion, Pe.scale), Pe.projectionMatrix.fromArray(at.projectionMatrix), Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(), Pe.viewport.set(Ue.x, Ue.y, Ue.width, Ue.height), E === 0 && (B.matrix.copy(Pe.matrix), B.matrix.decompose(B.position, B.quaternion, B.scale)), Ie === !0 && B.cameras.push(Pe);
        }
        const be = r.enabledFeatures;
        if (be && be.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && v) {
          d = i.getBinding();
          const E = d.getDepthInformation(pe[0]);
          E && E.isValid && E.texture && p.init(E, r.renderState);
        }
        if (be && be.includes("camera-access") && v) {
          e.state.unbindTexture(), d = i.getBinding();
          for (let E = 0; E < pe.length; E++) {
            const at = pe[E].camera;
            if (at) {
              let Ue = u[at];
              Ue || (Ue = new nc(), u[at] = Ue);
              const Pe = d.getCameraImage(at);
              Ue.sourceTexture = Pe;
            }
          }
        }
      }
      for (let pe = 0; pe < T.length; pe++) {
        const Ie = C[pe], be = T[pe];
        Ie !== null && be !== void 0 && be.update(Ie, Z, l || a);
      }
      tt && tt(X, Z), Z.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: Z }), _ = null;
    }
    const Ye = new rc();
    Ye.setAnimationLoop(st), this.setAnimationLoop = function(X) {
      tt = X;
    }, this.dispose = function() {
    };
  }
}
const li = /* @__PURE__ */ new kn(), ig = /* @__PURE__ */ new _t();
function rg(n, e) {
  function t(p, u) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix);
  }
  function i(p, u) {
    u.color.getRGB(p.fogColor.value, Kl(n)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function r(p, u, A, b, y) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), d(p, u)) : u.isMeshPhongMaterial ? (s(p, u), h(p, u)) : u.isMeshStandardMaterial ? (s(p, u), f(p, u), u.isMeshPhysicalMaterial && m(p, u, y)) : u.isMeshMatcapMaterial ? (s(p, u), _(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), v(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (a(p, u), u.isLineDashedMaterial && o(p, u)) : u.isPointsMaterial ? c(p, u, A, b) : u.isSpriteMaterial ? l(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(p, u) {
    p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === Bt && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === Bt && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const A = e.get(u), b = A.envMap, y = A.envMapRotation;
    b && (p.envMap.value = b, li.copy(y), li.x *= -1, li.y *= -1, li.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (li.y *= -1, li.z *= -1), p.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(li)), p.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap && (p.lightMap.value = u.lightMap, p.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, p.lightMapTransform)), u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform));
  }
  function a(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform));
  }
  function o(p, u) {
    p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale;
  }
  function c(p, u, A, b) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * A, p.scale.value = b * 0.5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function l(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function h(p, u) {
    p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function d(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function f(p, u) {
    p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), u.envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function m(p, u, A) {
    p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === Bt && p.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (p.dispersion.value = u.dispersion), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function v(p, u) {
    const A = e.get(u).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function sg(n, e, t, i) {
  let r = {}, s = {}, a = [];
  const o = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(A, b) {
    const y = b.program;
    i.uniformBlockBinding(A, y);
  }
  function l(A, b) {
    let y = r[A.id];
    y === void 0 && (_(A), y = h(A), r[A.id] = y, A.addEventListener("dispose", p));
    const T = b.program;
    i.updateUBOMapping(A, T);
    const C = e.render.frame;
    s[A.id] !== C && (f(A), s[A.id] = C);
  }
  function h(A) {
    const b = d();
    A.__bindingPointIndex = b;
    const y = n.createBuffer(), T = A.__size, C = A.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, y), n.bufferData(n.UNIFORM_BUFFER, T, C), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, b, y), y;
  }
  function d() {
    for (let A = 0; A < o; A++)
      if (a.indexOf(A) === -1)
        return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const b = r[A.id], y = A.uniforms, T = A.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, b);
    for (let C = 0, R = y.length; C < R; C++) {
      const N = Array.isArray(y[C]) ? y[C] : [y[C]];
      for (let S = 0, w = N.length; S < w; S++) {
        const L = N[S];
        if (m(L, C, S, T) === !0) {
          const B = L.__offset, H = Array.isArray(L.value) ? L.value : [L.value];
          let j = 0;
          for (let W = 0; W < H.length; W++) {
            const q = H[W], K = v(q);
            typeof q == "number" || typeof q == "boolean" ? (L.__data[0] = q, n.bufferSubData(n.UNIFORM_BUFFER, B + j, L.__data)) : q.isMatrix3 ? (L.__data[0] = q.elements[0], L.__data[1] = q.elements[1], L.__data[2] = q.elements[2], L.__data[3] = 0, L.__data[4] = q.elements[3], L.__data[5] = q.elements[4], L.__data[6] = q.elements[5], L.__data[7] = 0, L.__data[8] = q.elements[6], L.__data[9] = q.elements[7], L.__data[10] = q.elements[8], L.__data[11] = 0) : (q.toArray(L.__data, j), j += K.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, B, L.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function m(A, b, y, T) {
    const C = A.value, R = b + "_" + y;
    if (T[R] === void 0)
      return typeof C == "number" || typeof C == "boolean" ? T[R] = C : T[R] = C.clone(), !0;
    {
      const N = T[R];
      if (typeof C == "number" || typeof C == "boolean") {
        if (N !== C)
          return T[R] = C, !0;
      } else if (N.equals(C) === !1)
        return N.copy(C), !0;
    }
    return !1;
  }
  function _(A) {
    const b = A.uniforms;
    let y = 0;
    const T = 16;
    for (let R = 0, N = b.length; R < N; R++) {
      const S = Array.isArray(b[R]) ? b[R] : [b[R]];
      for (let w = 0, L = S.length; w < L; w++) {
        const B = S[w], H = Array.isArray(B.value) ? B.value : [B.value];
        for (let j = 0, W = H.length; j < W; j++) {
          const q = H[j], K = v(q), G = y % T, ae = G % K.boundary, de = G + ae;
          y += ae, de !== 0 && T - de < K.storage && (y += T - de), B.__data = new Float32Array(K.storage / Float32Array.BYTES_PER_ELEMENT), B.__offset = y, y += K.storage;
        }
      }
    }
    const C = y % T;
    return C > 0 && (y += T - C), A.__size = y, A.__cache = {}, this;
  }
  function v(A) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (b.boundary = 4, b.storage = 4) : A.isVector2 ? (b.boundary = 8, b.storage = 8) : A.isVector3 || A.isColor ? (b.boundary = 16, b.storage = 12) : A.isVector4 ? (b.boundary = 16, b.storage = 16) : A.isMatrix3 ? (b.boundary = 48, b.storage = 48) : A.isMatrix4 ? (b.boundary = 64, b.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), b;
  }
  function p(A) {
    const b = A.target;
    b.removeEventListener("dispose", p);
    const y = a.indexOf(b.__bindingPointIndex);
    a.splice(y, 1), n.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function u() {
    for (const A in r)
      n.deleteBuffer(r[A]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: u
  };
}
class ag {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Bh(),
      context: i = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = i.getContextAttributes().alpha;
    } else
      m = a;
    const _ = new Uint32Array(4), v = new Int32Array(4);
    let p = null, u = null;
    const A = [], b = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = $n, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const y = this;
    let T = !1;
    this._outputColorSpace = qt;
    let C = 0, R = 0, N = null, S = -1, w = null;
    const L = new pt(), B = new pt();
    let H = null;
    const j = new $e(0);
    let W = 0, q = t.width, K = t.height, G = 1, ae = null, de = null;
    const Me = new pt(0, 0, q, K), Ge = new pt(0, 0, q, K);
    let tt = !1;
    const st = new Ql();
    let Ye = !1, X = !1;
    const Z = new _t(), pe = new F(), Ie = new pt(), be = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let We = !1;
    function At() {
      return N === null ? G : 1;
    }
    let E = i;
    function at(x, I) {
      return t.getContext(x, I);
    }
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ja}`), t.addEventListener("webglcontextlost", ie, !1), t.addEventListener("webglcontextrestored", fe, !1), t.addEventListener("webglcontextcreationerror", J, !1), E === null) {
        const I = "webgl2";
        if (E = at(I, x), E === null)
          throw at(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Ue, Pe, _e, ot, xe, ke, St, ft, M, g, U, V, $, z, Se, ne, ve, ye, ee, he, Re, we, le, Ne;
    function P() {
      Ue = new gp(E), Ue.init(), we = new Jm(E, Ue), Pe = new cp(E, Ue, e, we), _e = new Km(E, Ue), Pe.reversedDepthBuffer && f && _e.buffers.depth.setReversed(!0), ot = new vp(E), xe = new km(), ke = new Zm(E, Ue, _e, xe, Pe, we, ot), St = new dp(y), ft = new mp(y), M = new Md(E), le = new op(E, M), g = new _p(E, M, ot, le), U = new wp(E, g, M, ot), ee = new yp(E, Pe, ke), ne = new hp(xe), V = new Fm(y, St, ft, Ue, Pe, le, ne), $ = new rg(y, xe), z = new Bm(), Se = new Xm(Ue), ye = new ap(y, St, ft, _e, U, m, c), ve = new jm(y, U, Pe), Ne = new sg(E, ot, Pe, _e), he = new lp(E, Ue, ot), Re = new xp(E, Ue, ot), ot.programs = V.programs, y.capabilities = Pe, y.extensions = Ue, y.properties = xe, y.renderLists = z, y.shadowMap = ve, y.state = _e, y.info = ot;
    }
    P();
    const te = new ng(y, E);
    this.xr = te, this.getContext = function() {
      return E;
    }, this.getContextAttributes = function() {
      return E.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Ue.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Ue.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (G = x, this.setSize(q, K, !1));
    }, this.getSize = function(x) {
      return x.set(q, K);
    }, this.setSize = function(x, I, k = !0) {
      if (te.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = x, K = I, t.width = Math.floor(x * G), t.height = Math.floor(I * G), k === !0 && (t.style.width = x + "px", t.style.height = I + "px"), this.setViewport(0, 0, x, I);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(q * G, K * G).floor();
    }, this.setDrawingBufferSize = function(x, I, k) {
      q = x, K = I, G = k, t.width = Math.floor(x * k), t.height = Math.floor(I * k), this.setViewport(0, 0, x, I);
    }, this.getCurrentViewport = function(x) {
      return x.copy(L);
    }, this.getViewport = function(x) {
      return x.copy(Me);
    }, this.setViewport = function(x, I, k, O) {
      x.isVector4 ? Me.set(x.x, x.y, x.z, x.w) : Me.set(x, I, k, O), _e.viewport(L.copy(Me).multiplyScalar(G).round());
    }, this.getScissor = function(x) {
      return x.copy(Ge);
    }, this.setScissor = function(x, I, k, O) {
      x.isVector4 ? Ge.set(x.x, x.y, x.z, x.w) : Ge.set(x, I, k, O), _e.scissor(B.copy(Ge).multiplyScalar(G).round());
    }, this.getScissorTest = function() {
      return tt;
    }, this.setScissorTest = function(x) {
      _e.setScissorTest(tt = x);
    }, this.setOpaqueSort = function(x) {
      ae = x;
    }, this.setTransparentSort = function(x) {
      de = x;
    }, this.getClearColor = function(x) {
      return x.copy(ye.getClearColor());
    }, this.setClearColor = function() {
      ye.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ye.getClearAlpha();
    }, this.setClearAlpha = function() {
      ye.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, I = !0, k = !0) {
      let O = 0;
      if (x) {
        let D = !1;
        if (N !== null) {
          const Q = N.texture.format;
          D = Q === ro || Q === io || Q === no;
        }
        if (D) {
          const Q = N.texture.type, ce = Q === Fn || Q === _i || Q === ar || Q === or || Q === eo || Q === to, me = ye.getClearColor(), ue = ye.getClearAlpha(), Ae = me.r, Le = me.g, Ee = me.b;
          ce ? (_[0] = Ae, _[1] = Le, _[2] = Ee, _[3] = ue, E.clearBufferuiv(E.COLOR, 0, _)) : (v[0] = Ae, v[1] = Le, v[2] = Ee, v[3] = ue, E.clearBufferiv(E.COLOR, 0, v));
        } else
          O |= E.COLOR_BUFFER_BIT;
      }
      I && (O |= E.DEPTH_BUFFER_BIT), k && (O |= E.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), E.clear(O);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ie, !1), t.removeEventListener("webglcontextrestored", fe, !1), t.removeEventListener("webglcontextcreationerror", J, !1), ye.dispose(), z.dispose(), Se.dispose(), xe.dispose(), St.dispose(), ft.dispose(), U.dispose(), le.dispose(), Ne.dispose(), V.dispose(), te.dispose(), te.removeEventListener("sessionstart", pn), te.removeEventListener("sessionend", ho), ei.stop();
    };
    function ie(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function fe() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const x = ot.autoReset, I = ve.enabled, k = ve.autoUpdate, O = ve.needsUpdate, D = ve.type;
      P(), ot.autoReset = x, ve.enabled = I, ve.autoUpdate = k, ve.needsUpdate = O, ve.type = D;
    }
    function J(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Y(x) {
      const I = x.target;
      I.removeEventListener("dispose", Y), ge(I);
    }
    function ge(x) {
      De(x), xe.remove(x);
    }
    function De(x) {
      const I = xe.get(x).programs;
      I !== void 0 && (I.forEach(function(k) {
        V.releaseProgram(k);
      }), x.isShaderMaterial && V.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, I, k, O, D, Q) {
      I === null && (I = be);
      const ce = D.isMesh && D.matrixWorld.determinant() < 0, me = xc(x, I, k, O, D);
      _e.setMaterial(O, ce);
      let ue = k.index, Ae = 1;
      if (O.wireframe === !0) {
        if (ue = g.getWireframeAttribute(k), ue === void 0) return;
        Ae = 2;
      }
      const Le = k.drawRange, Ee = k.attributes.position;
      let He = Le.start * Ae, Ke = (Le.start + Le.count) * Ae;
      Q !== null && (He = Math.max(He, Q.start * Ae), Ke = Math.min(Ke, (Q.start + Q.count) * Ae)), ue !== null ? (He = Math.max(He, 0), Ke = Math.min(Ke, ue.count)) : Ee != null && (He = Math.max(He, 0), Ke = Math.min(Ke, Ee.count));
      const ut = Ke - He;
      if (ut < 0 || ut === 1 / 0) return;
      le.setup(D, O, me, k, ue);
      let rt, et = he;
      if (ue !== null && (rt = M.get(ue), et = Re, et.setIndex(rt)), D.isMesh)
        O.wireframe === !0 ? (_e.setLineWidth(O.wireframeLinewidth * At()), et.setMode(E.LINES)) : et.setMode(E.TRIANGLES);
      else if (D.isLine) {
        let Te = O.linewidth;
        Te === void 0 && (Te = 1), _e.setLineWidth(Te * At()), D.isLineSegments ? et.setMode(E.LINES) : D.isLineLoop ? et.setMode(E.LINE_LOOP) : et.setMode(E.LINE_STRIP);
      } else D.isPoints ? et.setMode(E.POINTS) : D.isSprite && et.setMode(E.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), et.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
        else if (Ue.get("WEBGL_multi_draw"))
          et.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
        else {
          const Te = D._multiDrawStarts, ct = D._multiDrawCounts, Xe = D._multiDrawCount, zt = ue ? M.get(ue).bytesPerElement : 1, vi = xe.get(O).currentProgram.getUniforms();
          for (let Ht = 0; Ht < Xe; Ht++)
            vi.setValue(E, "_gl_DrawID", Ht), et.render(Te[Ht] / zt, ct[Ht]);
        }
      else if (D.isInstancedMesh)
        et.renderInstances(He, ut, D.count);
      else if (k.isInstancedBufferGeometry) {
        const Te = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, ct = Math.min(k.instanceCount, Te);
        et.renderInstances(He, ut, ct);
      } else
        et.render(He, ut);
    };
    function nt(x, I, k) {
      x.transparent === !0 && x.side === Ln && x.forceSinglePass === !1 ? (x.side = Bt, x.needsUpdate = !0, br(x, I, k), x.side = Jn, x.needsUpdate = !0, br(x, I, k), x.side = Ln) : br(x, I, k);
    }
    this.compile = function(x, I, k = null) {
      k === null && (k = x), u = Se.get(k), u.init(I), b.push(u), k.traverseVisible(function(D) {
        D.isLight && D.layers.test(I.layers) && (u.pushLight(D), D.castShadow && u.pushShadow(D));
      }), x !== k && x.traverseVisible(function(D) {
        D.isLight && D.layers.test(I.layers) && (u.pushLight(D), D.castShadow && u.pushShadow(D));
      }), u.setupLights();
      const O = /* @__PURE__ */ new Set();
      return x.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite))
          return;
        const Q = D.material;
        if (Q)
          if (Array.isArray(Q))
            for (let ce = 0; ce < Q.length; ce++) {
              const me = Q[ce];
              nt(me, k, D), O.add(me);
            }
          else
            nt(Q, k, D), O.add(Q);
      }), u = b.pop(), O;
    }, this.compileAsync = function(x, I, k = null) {
      const O = this.compile(x, I, k);
      return new Promise((D) => {
        function Q() {
          if (O.forEach(function(ce) {
            xe.get(ce).currentProgram.isReady() && O.delete(ce);
          }), O.size === 0) {
            D(x);
            return;
          }
          setTimeout(Q, 10);
        }
        Ue.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let je = null;
    function vn(x) {
      je && je(x);
    }
    function pn() {
      ei.stop();
    }
    function ho() {
      ei.start();
    }
    const ei = new rc();
    ei.setAnimationLoop(vn), typeof self < "u" && ei.setContext(self), this.setAnimationLoop = function(x) {
      je = x, te.setAnimationLoop(x), x === null ? ei.stop() : ei.start();
    }, te.addEventListener("sessionstart", pn), te.addEventListener("sessionend", ho), this.render = function(x, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), te.enabled === !0 && te.isPresenting === !0 && (te.cameraAutoUpdate === !0 && te.updateCamera(I), I = te.getCamera()), x.isScene === !0 && x.onBeforeRender(y, x, I, N), u = Se.get(x, b.length), u.init(I), b.push(u), Z.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), st.setFromProjectionMatrix(Z, xn, I.reversedDepth), X = this.localClippingEnabled, Ye = ne.init(this.clippingPlanes, X), p = z.get(x, A.length), p.init(), A.push(p), te.enabled === !0 && te.isPresenting === !0) {
        const Q = y.xr.getDepthSensingMesh();
        Q !== null && ys(Q, I, -1 / 0, y.sortObjects);
      }
      ys(x, I, 0, y.sortObjects), p.finish(), y.sortObjects === !0 && p.sort(ae, de), We = te.enabled === !1 || te.isPresenting === !1 || te.hasDepthSensing() === !1, We && ye.addToRenderList(p, x), this.info.render.frame++, Ye === !0 && ne.beginShadows();
      const k = u.state.shadowsArray;
      ve.render(k, x, I), Ye === !0 && ne.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const O = p.opaque, D = p.transmissive;
      if (u.setupLights(), I.isArrayCamera) {
        const Q = I.cameras;
        if (D.length > 0)
          for (let ce = 0, me = Q.length; ce < me; ce++) {
            const ue = Q[ce];
            fo(O, D, x, ue);
          }
        We && ye.render(x);
        for (let ce = 0, me = Q.length; ce < me; ce++) {
          const ue = Q[ce];
          uo(p, x, ue, ue.viewport);
        }
      } else
        D.length > 0 && fo(O, D, x, I), We && ye.render(x), uo(p, x, I);
      N !== null && R === 0 && (ke.updateMultisampleRenderTarget(N), ke.updateRenderTargetMipmap(N)), x.isScene === !0 && x.onAfterRender(y, x, I), le.resetDefaultState(), S = -1, w = null, b.pop(), b.length > 0 ? (u = b[b.length - 1], Ye === !0 && ne.setGlobalState(y.clippingPlanes, u.state.camera)) : u = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null;
    };
    function ys(x, I, k, O) {
      if (x.visible === !1) return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup)
          k = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(I);
        else if (x.isLight)
          u.pushLight(x), x.castShadow && u.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || st.intersectsSprite(x)) {
            O && Ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);
            const ce = U.update(x), me = x.material;
            me.visible && p.push(x, ce, me, k, Ie.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || st.intersectsObject(x))) {
          const ce = U.update(x), me = x.material;
          if (O && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Ie.copy(x.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), Ie.copy(ce.boundingSphere.center)), Ie.applyMatrix4(x.matrixWorld).applyMatrix4(Z)), Array.isArray(me)) {
            const ue = ce.groups;
            for (let Ae = 0, Le = ue.length; Ae < Le; Ae++) {
              const Ee = ue[Ae], He = me[Ee.materialIndex];
              He && He.visible && p.push(x, ce, He, k, Ie.z, Ee);
            }
          } else me.visible && p.push(x, ce, me, k, Ie.z, null);
        }
      }
      const Q = x.children;
      for (let ce = 0, me = Q.length; ce < me; ce++)
        ys(Q[ce], I, k, O);
    }
    function uo(x, I, k, O) {
      const D = x.opaque, Q = x.transmissive, ce = x.transparent;
      u.setupLightsView(k), Ye === !0 && ne.setGlobalState(y.clippingPlanes, k), O && _e.viewport(L.copy(O)), D.length > 0 && Sr(D, I, k), Q.length > 0 && Sr(Q, I, k), ce.length > 0 && Sr(ce, I, k), _e.buffers.depth.setTest(!0), _e.buffers.depth.setMask(!0), _e.buffers.color.setMask(!0), _e.setPolygonOffset(!1);
    }
    function fo(x, I, k, O) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      u.state.transmissionRenderTarget[O.id] === void 0 && (u.state.transmissionRenderTarget[O.id] = new xi(1, 1, {
        generateMipmaps: !0,
        type: Ue.has("EXT_color_buffer_half_float") || Ue.has("EXT_color_buffer_float") ? mr : Fn,
        minFilter: pi,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qe.workingColorSpace
      }));
      const Q = u.state.transmissionRenderTarget[O.id], ce = O.viewport || L;
      Q.setSize(ce.z * y.transmissionResolutionScale, ce.w * y.transmissionResolutionScale);
      const me = y.getRenderTarget(), ue = y.getActiveCubeFace(), Ae = y.getActiveMipmapLevel();
      y.setRenderTarget(Q), y.getClearColor(j), W = y.getClearAlpha(), W < 1 && y.setClearColor(16777215, 0.5), y.clear(), We && ye.render(k);
      const Le = y.toneMapping;
      y.toneMapping = $n;
      const Ee = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), u.setupLightsView(O), Ye === !0 && ne.setGlobalState(y.clippingPlanes, O), Sr(x, k, O), ke.updateMultisampleRenderTarget(Q), ke.updateRenderTargetMipmap(Q), Ue.has("WEBGL_multisampled_render_to_texture") === !1) {
        let He = !1;
        for (let Ke = 0, ut = I.length; Ke < ut; Ke++) {
          const rt = I[Ke], et = rt.object, Te = rt.geometry, ct = rt.material, Xe = rt.group;
          if (ct.side === Ln && et.layers.test(O.layers)) {
            const zt = ct.side;
            ct.side = Bt, ct.needsUpdate = !0, po(et, k, O, Te, ct, Xe), ct.side = zt, ct.needsUpdate = !0, He = !0;
          }
        }
        He === !0 && (ke.updateMultisampleRenderTarget(Q), ke.updateRenderTargetMipmap(Q));
      }
      y.setRenderTarget(me, ue, Ae), y.setClearColor(j, W), Ee !== void 0 && (O.viewport = Ee), y.toneMapping = Le;
    }
    function Sr(x, I, k) {
      const O = I.isScene === !0 ? I.overrideMaterial : null;
      for (let D = 0, Q = x.length; D < Q; D++) {
        const ce = x[D], me = ce.object, ue = ce.geometry, Ae = ce.group;
        let Le = ce.material;
        Le.allowOverride === !0 && O !== null && (Le = O), me.layers.test(k.layers) && po(me, I, k, ue, Le, Ae);
      }
    }
    function po(x, I, k, O, D, Q) {
      x.onBeforeRender(y, I, k, O, D, Q), x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), D.onBeforeRender(y, I, k, O, x, Q), D.transparent === !0 && D.side === Ln && D.forceSinglePass === !1 ? (D.side = Bt, D.needsUpdate = !0, y.renderBufferDirect(k, I, O, D, x, Q), D.side = Jn, D.needsUpdate = !0, y.renderBufferDirect(k, I, O, D, x, Q), D.side = Ln) : y.renderBufferDirect(k, I, O, D, x, Q), x.onAfterRender(y, I, k, O, D, Q);
    }
    function br(x, I, k) {
      I.isScene !== !0 && (I = be);
      const O = xe.get(x), D = u.state.lights, Q = u.state.shadowsArray, ce = D.state.version, me = V.getParameters(x, D.state, Q, I, k), ue = V.getProgramCacheKey(me);
      let Ae = O.programs;
      O.environment = x.isMeshStandardMaterial ? I.environment : null, O.fog = I.fog, O.envMap = (x.isMeshStandardMaterial ? ft : St).get(x.envMap || O.environment), O.envMapRotation = O.environment !== null && x.envMap === null ? I.environmentRotation : x.envMapRotation, Ae === void 0 && (x.addEventListener("dispose", Y), Ae = /* @__PURE__ */ new Map(), O.programs = Ae);
      let Le = Ae.get(ue);
      if (Le !== void 0) {
        if (O.currentProgram === Le && O.lightsStateVersion === ce)
          return go(x, me), Le;
      } else
        me.uniforms = V.getUniforms(x), x.onBeforeCompile(me, y), Le = V.acquireProgram(me, ue), Ae.set(ue, Le), O.uniforms = me.uniforms;
      const Ee = O.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Ee.clippingPlanes = ne.uniform), go(x, me), O.needsLights = yc(x), O.lightsStateVersion = ce, O.needsLights && (Ee.ambientLightColor.value = D.state.ambient, Ee.lightProbe.value = D.state.probe, Ee.directionalLights.value = D.state.directional, Ee.directionalLightShadows.value = D.state.directionalShadow, Ee.spotLights.value = D.state.spot, Ee.spotLightShadows.value = D.state.spotShadow, Ee.rectAreaLights.value = D.state.rectArea, Ee.ltc_1.value = D.state.rectAreaLTC1, Ee.ltc_2.value = D.state.rectAreaLTC2, Ee.pointLights.value = D.state.point, Ee.pointLightShadows.value = D.state.pointShadow, Ee.hemisphereLights.value = D.state.hemi, Ee.directionalShadowMap.value = D.state.directionalShadowMap, Ee.directionalShadowMatrix.value = D.state.directionalShadowMatrix, Ee.spotShadowMap.value = D.state.spotShadowMap, Ee.spotLightMatrix.value = D.state.spotLightMatrix, Ee.spotLightMap.value = D.state.spotLightMap, Ee.pointShadowMap.value = D.state.pointShadowMap, Ee.pointShadowMatrix.value = D.state.pointShadowMatrix), O.currentProgram = Le, O.uniformsList = null, Le;
    }
    function mo(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = ns.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function go(x, I) {
      const k = xe.get(x);
      k.outputColorSpace = I.outputColorSpace, k.batching = I.batching, k.batchingColor = I.batchingColor, k.instancing = I.instancing, k.instancingColor = I.instancingColor, k.instancingMorph = I.instancingMorph, k.skinning = I.skinning, k.morphTargets = I.morphTargets, k.morphNormals = I.morphNormals, k.morphColors = I.morphColors, k.morphTargetsCount = I.morphTargetsCount, k.numClippingPlanes = I.numClippingPlanes, k.numIntersection = I.numClipIntersection, k.vertexAlphas = I.vertexAlphas, k.vertexTangents = I.vertexTangents, k.toneMapping = I.toneMapping;
    }
    function xc(x, I, k, O, D) {
      I.isScene !== !0 && (I = be), ke.resetTextureUnits();
      const Q = I.fog, ce = O.isMeshStandardMaterial ? I.environment : null, me = N === null ? y.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : Xi, ue = (O.isMeshStandardMaterial ? ft : St).get(O.envMap || ce), Ae = O.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Le = !!k.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), Ee = !!k.morphAttributes.position, He = !!k.morphAttributes.normal, Ke = !!k.morphAttributes.color;
      let ut = $n;
      O.toneMapped && (N === null || N.isXRRenderTarget === !0) && (ut = y.toneMapping);
      const rt = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, et = rt !== void 0 ? rt.length : 0, Te = xe.get(O), ct = u.state.lights;
      if (Ye === !0 && (X === !0 || x !== w)) {
        const Dt = x === w && O.id === S;
        ne.setState(O, x, Dt);
      }
      let Xe = !1;
      O.version === Te.__version ? (Te.needsLights && Te.lightsStateVersion !== ct.state.version || Te.outputColorSpace !== me || D.isBatchedMesh && Te.batching === !1 || !D.isBatchedMesh && Te.batching === !0 || D.isBatchedMesh && Te.batchingColor === !0 && D.colorTexture === null || D.isBatchedMesh && Te.batchingColor === !1 && D.colorTexture !== null || D.isInstancedMesh && Te.instancing === !1 || !D.isInstancedMesh && Te.instancing === !0 || D.isSkinnedMesh && Te.skinning === !1 || !D.isSkinnedMesh && Te.skinning === !0 || D.isInstancedMesh && Te.instancingColor === !0 && D.instanceColor === null || D.isInstancedMesh && Te.instancingColor === !1 && D.instanceColor !== null || D.isInstancedMesh && Te.instancingMorph === !0 && D.morphTexture === null || D.isInstancedMesh && Te.instancingMorph === !1 && D.morphTexture !== null || Te.envMap !== ue || O.fog === !0 && Te.fog !== Q || Te.numClippingPlanes !== void 0 && (Te.numClippingPlanes !== ne.numPlanes || Te.numIntersection !== ne.numIntersection) || Te.vertexAlphas !== Ae || Te.vertexTangents !== Le || Te.morphTargets !== Ee || Te.morphNormals !== He || Te.morphColors !== Ke || Te.toneMapping !== ut || Te.morphTargetsCount !== et) && (Xe = !0) : (Xe = !0, Te.__version = O.version);
      let zt = Te.currentProgram;
      Xe === !0 && (zt = br(O, I, D));
      let vi = !1, Ht = !1, Zi = !1;
      const ht = zt.getUniforms(), Yt = Te.uniforms;
      if (_e.useProgram(zt.program) && (vi = !0, Ht = !0, Zi = !0), O.id !== S && (S = O.id, Ht = !0), vi || w !== x) {
        _e.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), ht.setValue(E, "projectionMatrix", x.projectionMatrix), ht.setValue(E, "viewMatrix", x.matrixWorldInverse);
        const kt = ht.map.cameraPosition;
        kt !== void 0 && kt.setValue(E, pe.setFromMatrixPosition(x.matrixWorld)), Pe.logarithmicDepthBuffer && ht.setValue(
          E,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && ht.setValue(E, "isOrthographic", x.isOrthographicCamera === !0), w !== x && (w = x, Ht = !0, Zi = !0);
      }
      if (D.isSkinnedMesh) {
        ht.setOptional(E, D, "bindMatrix"), ht.setOptional(E, D, "bindMatrixInverse");
        const Dt = D.skeleton;
        Dt && (Dt.boneTexture === null && Dt.computeBoneTexture(), ht.setValue(E, "boneTexture", Dt.boneTexture, ke));
      }
      D.isBatchedMesh && (ht.setOptional(E, D, "batchingTexture"), ht.setValue(E, "batchingTexture", D._matricesTexture, ke), ht.setOptional(E, D, "batchingIdTexture"), ht.setValue(E, "batchingIdTexture", D._indirectTexture, ke), ht.setOptional(E, D, "batchingColorTexture"), D._colorsTexture !== null && ht.setValue(E, "batchingColorTexture", D._colorsTexture, ke));
      const jt = k.morphAttributes;
      if ((jt.position !== void 0 || jt.normal !== void 0 || jt.color !== void 0) && ee.update(D, k, zt), (Ht || Te.receiveShadow !== D.receiveShadow) && (Te.receiveShadow = D.receiveShadow, ht.setValue(E, "receiveShadow", D.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Yt.envMap.value = ue, Yt.flipEnvMap.value = ue.isCubeTexture && ue.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && I.environment !== null && (Yt.envMapIntensity.value = I.environmentIntensity), Ht && (ht.setValue(E, "toneMappingExposure", y.toneMappingExposure), Te.needsLights && vc(Yt, Zi), Q && O.fog === !0 && $.refreshFogUniforms(Yt, Q), $.refreshMaterialUniforms(Yt, O, G, K, u.state.transmissionRenderTarget[x.id]), ns.upload(E, mo(Te), Yt, ke)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (ns.upload(E, mo(Te), Yt, ke), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && ht.setValue(E, "center", D.center), ht.setValue(E, "modelViewMatrix", D.modelViewMatrix), ht.setValue(E, "normalMatrix", D.normalMatrix), ht.setValue(E, "modelMatrix", D.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const Dt = O.uniformsGroups;
        for (let kt = 0, ws = Dt.length; kt < ws; kt++) {
          const ti = Dt[kt];
          Ne.update(ti, zt), Ne.bind(ti, zt);
        }
      }
      return zt;
    }
    function vc(x, I) {
      x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
    }
    function yc(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(x, I, k) {
      const O = xe.get(x);
      O.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, O.__autoAllocateDepthBuffer === !1 && (O.__useRenderToTexture = !1), xe.get(x.texture).__webglTexture = I, xe.get(x.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer ? void 0 : k, O.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, I) {
      const k = xe.get(x);
      k.__webglFramebuffer = I, k.__useDefaultFramebuffer = I === void 0;
    };
    const wc = E.createFramebuffer();
    this.setRenderTarget = function(x, I = 0, k = 0) {
      N = x, C = I, R = k;
      let O = !0, D = null, Q = !1, ce = !1;
      if (x) {
        const ue = xe.get(x);
        if (ue.__useDefaultFramebuffer !== void 0)
          _e.bindFramebuffer(E.FRAMEBUFFER, null), O = !1;
        else if (ue.__webglFramebuffer === void 0)
          ke.setupRenderTarget(x);
        else if (ue.__hasExternalTextures)
          ke.rebindTextures(x, xe.get(x.texture).__webglTexture, xe.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Ee = x.depthTexture;
          if (ue.__boundDepthTexture !== Ee) {
            if (Ee !== null && xe.has(Ee) && (x.width !== Ee.image.width || x.height !== Ee.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            ke.setupDepthRenderbuffer(x);
          }
        }
        const Ae = x.texture;
        (Ae.isData3DTexture || Ae.isDataArrayTexture || Ae.isCompressedArrayTexture) && (ce = !0);
        const Le = xe.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Le[I]) ? D = Le[I][k] : D = Le[I], Q = !0) : x.samples > 0 && ke.useMultisampledRTT(x) === !1 ? D = xe.get(x).__webglMultisampledFramebuffer : Array.isArray(Le) ? D = Le[k] : D = Le, L.copy(x.viewport), B.copy(x.scissor), H = x.scissorTest;
      } else
        L.copy(Me).multiplyScalar(G).floor(), B.copy(Ge).multiplyScalar(G).floor(), H = tt;
      if (k !== 0 && (D = wc), _e.bindFramebuffer(E.FRAMEBUFFER, D) && O && _e.drawBuffers(x, D), _e.viewport(L), _e.scissor(B), _e.setScissorTest(H), Q) {
        const ue = xe.get(x.texture);
        E.framebufferTexture2D(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_CUBE_MAP_POSITIVE_X + I, ue.__webglTexture, k);
      } else if (ce) {
        const ue = I;
        for (let Ae = 0; Ae < x.textures.length; Ae++) {
          const Le = xe.get(x.textures[Ae]);
          E.framebufferTextureLayer(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0 + Ae, Le.__webglTexture, k, ue);
        }
      } else if (x !== null && k !== 0) {
        const ue = xe.get(x.texture);
        E.framebufferTexture2D(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_2D, ue.__webglTexture, k);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(x, I, k, O, D, Q, ce, me = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ue = xe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ce !== void 0 && (ue = ue[ce]), ue) {
        _e.bindFramebuffer(E.FRAMEBUFFER, ue);
        try {
          const Ae = x.textures[me], Le = Ae.format, Ee = Ae.type;
          if (!Pe.textureFormatReadable(Le)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Pe.textureTypeReadable(Ee)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= x.width - O && k >= 0 && k <= x.height - D && (x.textures.length > 1 && E.readBuffer(E.COLOR_ATTACHMENT0 + me), E.readPixels(I, k, O, D, we.convert(Le), we.convert(Ee), Q));
        } finally {
          const Ae = N !== null ? xe.get(N).__webglFramebuffer : null;
          _e.bindFramebuffer(E.FRAMEBUFFER, Ae);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, I, k, O, D, Q, ce, me = 0) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ue = xe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ce !== void 0 && (ue = ue[ce]), ue)
        if (I >= 0 && I <= x.width - O && k >= 0 && k <= x.height - D) {
          _e.bindFramebuffer(E.FRAMEBUFFER, ue);
          const Ae = x.textures[me], Le = Ae.format, Ee = Ae.type;
          if (!Pe.textureFormatReadable(Le))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Pe.textureTypeReadable(Ee))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const He = E.createBuffer();
          E.bindBuffer(E.PIXEL_PACK_BUFFER, He), E.bufferData(E.PIXEL_PACK_BUFFER, Q.byteLength, E.STREAM_READ), x.textures.length > 1 && E.readBuffer(E.COLOR_ATTACHMENT0 + me), E.readPixels(I, k, O, D, we.convert(Le), we.convert(Ee), 0);
          const Ke = N !== null ? xe.get(N).__webglFramebuffer : null;
          _e.bindFramebuffer(E.FRAMEBUFFER, Ke);
          const ut = E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return E.flush(), await Gh(E, ut, 4), E.bindBuffer(E.PIXEL_PACK_BUFFER, He), E.getBufferSubData(E.PIXEL_PACK_BUFFER, 0, Q), E.deleteBuffer(He), E.deleteSync(ut), Q;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, I = null, k = 0) {
      const O = Math.pow(2, -k), D = Math.floor(x.image.width * O), Q = Math.floor(x.image.height * O), ce = I !== null ? I.x : 0, me = I !== null ? I.y : 0;
      ke.setTexture2D(x, 0), E.copyTexSubImage2D(E.TEXTURE_2D, k, 0, 0, ce, me, D, Q), _e.unbindTexture();
    };
    const Sc = E.createFramebuffer(), bc = E.createFramebuffer();
    this.copyTextureToTexture = function(x, I, k = null, O = null, D = 0, Q = null) {
      Q === null && (D !== 0 ? (dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = D, D = 0) : Q = 0);
      let ce, me, ue, Ae, Le, Ee, He, Ke, ut;
      const rt = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (k !== null)
        ce = k.max.x - k.min.x, me = k.max.y - k.min.y, ue = k.isBox3 ? k.max.z - k.min.z : 1, Ae = k.min.x, Le = k.min.y, Ee = k.isBox3 ? k.min.z : 0;
      else {
        const jt = Math.pow(2, -D);
        ce = Math.floor(rt.width * jt), me = Math.floor(rt.height * jt), x.isDataArrayTexture ? ue = rt.depth : x.isData3DTexture ? ue = Math.floor(rt.depth * jt) : ue = 1, Ae = 0, Le = 0, Ee = 0;
      }
      O !== null ? (He = O.x, Ke = O.y, ut = O.z) : (He = 0, Ke = 0, ut = 0);
      const et = we.convert(I.format), Te = we.convert(I.type);
      let ct;
      I.isData3DTexture ? (ke.setTexture3D(I, 0), ct = E.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (ke.setTexture2DArray(I, 0), ct = E.TEXTURE_2D_ARRAY) : (ke.setTexture2D(I, 0), ct = E.TEXTURE_2D), E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL, I.flipY), E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), E.pixelStorei(E.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Xe = E.getParameter(E.UNPACK_ROW_LENGTH), zt = E.getParameter(E.UNPACK_IMAGE_HEIGHT), vi = E.getParameter(E.UNPACK_SKIP_PIXELS), Ht = E.getParameter(E.UNPACK_SKIP_ROWS), Zi = E.getParameter(E.UNPACK_SKIP_IMAGES);
      E.pixelStorei(E.UNPACK_ROW_LENGTH, rt.width), E.pixelStorei(E.UNPACK_IMAGE_HEIGHT, rt.height), E.pixelStorei(E.UNPACK_SKIP_PIXELS, Ae), E.pixelStorei(E.UNPACK_SKIP_ROWS, Le), E.pixelStorei(E.UNPACK_SKIP_IMAGES, Ee);
      const ht = x.isDataArrayTexture || x.isData3DTexture, Yt = I.isDataArrayTexture || I.isData3DTexture;
      if (x.isDepthTexture) {
        const jt = xe.get(x), Dt = xe.get(I), kt = xe.get(jt.__renderTarget), ws = xe.get(Dt.__renderTarget);
        _e.bindFramebuffer(E.READ_FRAMEBUFFER, kt.__webglFramebuffer), _e.bindFramebuffer(E.DRAW_FRAMEBUFFER, ws.__webglFramebuffer);
        for (let ti = 0; ti < ue; ti++)
          ht && (E.framebufferTextureLayer(E.READ_FRAMEBUFFER, E.COLOR_ATTACHMENT0, xe.get(x).__webglTexture, D, Ee + ti), E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER, E.COLOR_ATTACHMENT0, xe.get(I).__webglTexture, Q, ut + ti)), E.blitFramebuffer(Ae, Le, ce, me, He, Ke, ce, me, E.DEPTH_BUFFER_BIT, E.NEAREST);
        _e.bindFramebuffer(E.READ_FRAMEBUFFER, null), _e.bindFramebuffer(E.DRAW_FRAMEBUFFER, null);
      } else if (D !== 0 || x.isRenderTargetTexture || xe.has(x)) {
        const jt = xe.get(x), Dt = xe.get(I);
        _e.bindFramebuffer(E.READ_FRAMEBUFFER, Sc), _e.bindFramebuffer(E.DRAW_FRAMEBUFFER, bc);
        for (let kt = 0; kt < ue; kt++)
          ht ? E.framebufferTextureLayer(E.READ_FRAMEBUFFER, E.COLOR_ATTACHMENT0, jt.__webglTexture, D, Ee + kt) : E.framebufferTexture2D(E.READ_FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_2D, jt.__webglTexture, D), Yt ? E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER, E.COLOR_ATTACHMENT0, Dt.__webglTexture, Q, ut + kt) : E.framebufferTexture2D(E.DRAW_FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_2D, Dt.__webglTexture, Q), D !== 0 ? E.blitFramebuffer(Ae, Le, ce, me, He, Ke, ce, me, E.COLOR_BUFFER_BIT, E.NEAREST) : Yt ? E.copyTexSubImage3D(ct, Q, He, Ke, ut + kt, Ae, Le, ce, me) : E.copyTexSubImage2D(ct, Q, He, Ke, Ae, Le, ce, me);
        _e.bindFramebuffer(E.READ_FRAMEBUFFER, null), _e.bindFramebuffer(E.DRAW_FRAMEBUFFER, null);
      } else
        Yt ? x.isDataTexture || x.isData3DTexture ? E.texSubImage3D(ct, Q, He, Ke, ut, ce, me, ue, et, Te, rt.data) : I.isCompressedArrayTexture ? E.compressedTexSubImage3D(ct, Q, He, Ke, ut, ce, me, ue, et, rt.data) : E.texSubImage3D(ct, Q, He, Ke, ut, ce, me, ue, et, Te, rt) : x.isDataTexture ? E.texSubImage2D(E.TEXTURE_2D, Q, He, Ke, ce, me, et, Te, rt.data) : x.isCompressedTexture ? E.compressedTexSubImage2D(E.TEXTURE_2D, Q, He, Ke, rt.width, rt.height, et, rt.data) : E.texSubImage2D(E.TEXTURE_2D, Q, He, Ke, ce, me, et, Te, rt);
      E.pixelStorei(E.UNPACK_ROW_LENGTH, Xe), E.pixelStorei(E.UNPACK_IMAGE_HEIGHT, zt), E.pixelStorei(E.UNPACK_SKIP_PIXELS, vi), E.pixelStorei(E.UNPACK_SKIP_ROWS, Ht), E.pixelStorei(E.UNPACK_SKIP_IMAGES, Zi), Q === 0 && I.generateMipmaps && E.generateMipmap(ct), _e.unbindTexture();
    }, this.initRenderTarget = function(x) {
      xe.get(x).__webglFramebuffer === void 0 && ke.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? ke.setTextureCube(x, 0) : x.isData3DTexture ? ke.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? ke.setTexture2DArray(x, 0) : ke.setTexture2D(x, 0), _e.unbindTexture();
    }, this.resetState = function() {
      C = 0, R = 0, N = null, _e.reset(), le.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return xn;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = qe._getDrawingBufferColorSpace(e), t.unpackColorSpace = qe._getUnpackColorSpace();
  }
}
function og(n, e, t) {
  const i = new ag({ alpha: !0, antialias: !0, powerPreference: "high-performance" });
  i.setPixelRatio(Math.min(devicePixelRatio, 1.5)), i.domElement.className = "moonlight-webgl", i.domElement.setAttribute("aria-hidden", "true"), n.prepend(i.domElement);
  const r = new dd(), s = new ic(-1, 1, 1, -1, 0.1, 10);
  s.position.z = 2;
  const a = new wr(2, 2), o = new wd();
  let c, l;
  o.load(e, (b) => {
    b.colorSpace = qt, b.wrapS = b.wrapT = os, b.repeat.set(0.5, 0.5), b.offset.set(t % 2 * 0.5, t < 2 ? 0.5 : 0);
    const y = new ao({ map: b });
    c = new Jt(a, y), r.add(c);
    const T = y.clone();
    T.transparent = !0, T.opacity = 0.07, T.blending = as, l = new Jt(a, T), l.position.z = 0.04, l.scale.set(1.025, 1.025, 1), r.add(l);
  });
  const h = 38, d = new Float32Array(h * 3);
  for (let b = 0; b < h; b++)
    d[b * 3] = Math.random() * 2 - 1, d[b * 3 + 1] = Math.random() * 2 - 1, d[b * 3 + 2] = 0.08 + Math.random() * 0.25;
  const f = new On();
  f.setAttribute("position", new dn(d, 3));
  const m = new md(f, new ec({ color: 16770976, size: 0.016, transparent: !0, opacity: 0.48, blending: as }));
  r.add(m);
  const _ = () => {
    const b = n.getBoundingClientRect();
    if (!b.width || !b.height) return;
    i.setSize(b.width, b.height, !1);
    const y = b.width / b.height;
    s.left = -y, s.right = y, s.top = 1, s.bottom = -1, s.updateProjectionMatrix(), c && l && (c.scale.x = y, l.scale.x = y * 1.025, l.scale.y = 1.025);
  }, v = new ResizeObserver(_);
  v.observe(n), _();
  const p = performance.now();
  let u = 0;
  const A = (b) => {
    const y = (b - p) / 1e3;
    s.zoom = 1.035 - Math.min(1, y / 1.4) * 0.035, s.position.x = Math.sin(y * 0.22) * 0.012, s.position.y = Math.cos(y * 0.18) * 8e-3, s.updateProjectionMatrix(), m.rotation.z = y * 8e-3;
    const T = f.getAttribute("position");
    for (let C = 0; C < h; C++) {
      let R = T.getY(C) + 45e-5 * (C % 3 + 1);
      R > 1 && (R = -1), T.setY(C, R);
    }
    T.needsUpdate = !0, i.render(r, s), u = requestAnimationFrame(A);
  };
  return u = requestAnimationFrame(A), () => {
    cancelAnimationFrame(u), v.disconnect(), i.dispose(), a.dispose(), f.dispose(), m.material.dispose(), r.traverse((b) => {
      b instanceof Jt && b.material.dispose();
    }), i.domElement.remove();
  };
}
function rr() {
  return { index: 0, answers: [], attempted: [], complete: !1 };
}
function pl(n, e) {
  return e.filter((t, i) => n.attempted[i] && wl(n.answers[i] || [], t.answer)).length;
}
const cc = { pip: "小龍", bird: "小鳥", wing: "翅膀", gail: "Gail", cave: "洞穴", sky: "天空", rock: "石頭", nest: "鳥巢", jump: "小龍練習跳躍", moth: "發光小飛蛾", garden: "月光花園", flower: "月光花", frog: "小青蛙", mushroom: "蘑菇森林", firefly: "螢火蟲", bell: "銀鈴", tree: "月亮樹", path: "發光小路" };
function na(n) {
  const e = document.createElement("span");
  e.className = "quiz-art art-" + n, e.setAttribute("role", "img"), e.setAttribute("aria-label", cc[n]);
  const t = document.createElement("span");
  t.className = "quiz-art-image", e.append(t);
  const i = { moth: ["scenes-01-04.webp", 1], garden: ["scenes-01-04.webp", 3], flower: ["scenes-17-20.webp", 2], frog: ["scenes-09-12.webp", 0], mushroom: ["scenes-09-12.webp", 2], firefly: ["scenes-13-16.webp", 0], bell: ["scenes-13-16.webp", 2], tree: ["scenes-13-16.webp", 2], path: ["scenes-05-08.webp", 2] };
  if (i[n]) {
    const [s, a] = i[n];
    return t.style.backgroundImage = `url('images/story/moonlight-garden-v1/${s}')`, t.style.backgroundSize = "200% 200%", t.style.backgroundPosition = `${a % 2 * 100}% ${Math.floor(a / 2) * 100}%`, e;
  }
  const r = { pip: 0, wing: 1, jump: 1, bird: 3 }[n];
  if (r !== void 0)
    t.style.backgroundImage = "url('images/story/dragon-v1/cast.png')", t.style.backgroundSize = "200% 200%", t.style.backgroundPosition = `${r % 2 * 100}% ${Math.floor(r / 2) * 100}%`;
  else if (n === "gail") {
    const s = document.createElement("img");
    s.src = "images/story/little-star-v1/gail-paper.png", s.className = "paper-girl", s.alt = "", t.append(s);
  } else
    t.style.backgroundImage = "url('images/story/dragon-v1/scenes.png')", t.style.backgroundSize = n === "nest" ? "500% 500%" : "200% 200%", t.style.backgroundPosition = n === "cave" ? "100% 0" : n === "nest" ? "94% 66%" : "0 100%";
  return e;
}
function lg(n, e, t, i) {
  const r = (c, l = "", h = "") => {
    const d = document.createElement(c);
    return d.className = l, d.textContent = h, d;
  }, s = (c, l, h) => {
    const d = document.createElement("button");
    return d.className = "wood-button", d.textContent = c, d.setAttribute("aria-label", l), d.onclick = h, d;
  }, a = r("section", "story-quiz");
  a.setAttribute("aria-label", "書末小測驗"), n.append(a);
  function o() {
    if (a.replaceChildren(), a.append(r("span", "eyebrow", `STORY CHALLENGE · LEVEL ${i.level}`)), t.complete) {
      const b = pl(t, e);
      if (i.ending) {
        const T = document.createElement("img");
        T.className = "quiz-ending-image", T.src = i.ending.image, T.alt = "Gail 與 Ella 分享風車", a.append(T);
      } else a.append(na("wing"));
      a.append(r("h1", "", i.ending?.title || "Brave Little Dragon"), r("p", "", `完成了！答對 ${b} / ${e.length} 題`), r("p", "", i.ending?.line || "Try once. Try twice. Spread your wings—and touch the sky!"));
      const y = r("div", "quiz-actions");
      y.append(s("再試一次", "重新測驗", () => {
        Object.assign(t, rr()), o();
      }), s("回故事", "回到故事", i.back)), a.append(y);
      return;
    }
    const c = e[t.index];
    let l = [...t.answers[t.index] || []], h = !!t.attempted[t.index];
    a.append(r("div", "quiz-count", `${t.index + 1} / ${e.length}`));
    const d = r("h1", "", c.prompt);
    a.append(d);
    const f = s("♫", "朗讀題目", () => i.say(c.audio || c.prompt));
    if (f.classList.add("quiz-listen"), a.append(f), a.classList.toggle("scene-question", !!c.image), c.image) {
      const b = document.createElement("img");
      b.className = "quiz-scene-image", b.src = c.image, b.alt = c.imageAlt || "故事場景", a.append(b);
    } else c.art && a.append(na(c.art));
    const m = r("div", "quiz-options" + (c.options.every((b) => b.art) ? " picture-options" : ""));
    c.kind === "sequence" && (m.style.gridTemplateColumns = `repeat(${c.options.length},minmax(0,1fr))`);
    const _ = r("p", "quiz-feedback");
    _.setAttribute("role", "status");
    const v = s("提交答案", "提交答案", () => {
      if (!h) {
        l.length === c.answer.length && u();
        return;
      }
      t.index === e.length - 1 ? (t.complete = !0, i.save(pl(t, e))) : t.index++, o();
    });
    function p() {
      v.textContent = h ? t.index === e.length - 1 ? "完成 →" : "下一題 →" : "提交答案", v.setAttribute("aria-label", h ? "下一題" : "提交答案"), v.disabled = !h && l.length !== c.answer.length, Array.from(m.children).forEach((b, y) => {
        const T = b;
        T.setAttribute("aria-pressed", String(l.includes(y))), T.classList.toggle("selected-answer", !h && l.includes(y)), T.classList.toggle("correct", h && c.kind === "choice" && c.answer.includes(y)), T.classList.toggle("incorrect", h && c.kind === "choice" && l.includes(y) && !c.answer.includes(y)), c.kind === "sequence" && l.includes(y) ? T.dataset.order = String(l.indexOf(y) + 1) : delete T.dataset.order;
      });
    }
    function u() {
      t.answers[t.index] = [...l], t.attempted[t.index] = !0, h = !0;
      const b = wl(l, c.answer);
      _.textContent = (b ? "✓ Great! " : "再看看：") + c.explanation, i.say(_.textContent.replace("再看看：", "Let’s learn. ")), p();
    }
    c.options.forEach((b, y) => {
      const T = s(b.text, b.text || `選擇${b.art ? cc[b.art] : y + 1}`, () => {
        const C = b.text || (b.art === "pip" ? "dragon" : b.art === "jump" ? "jump" : b.art === "gail" ? "Gail" : b.art) || "";
        i.say(C), !h && (c.kind === "sequence" ? l = l.includes(y) ? l.filter((R) => R !== y) : [...l, y] : l = [y], t.answers[t.index] = [...l], _.textContent = c.kind === "sequence" ? "依序選圖，再提交；再點已選圖卡可取消。" : "已選取，按「提交答案」確認。", p());
      });
      T.className = "quiz-option", b.art && T.prepend(na(b.art)), m.append(T);
    }), p(), a.append(m, _), h && (_.textContent = c.explanation);
    const A = r("div", "quiz-actions");
    A.append(s("← 故事", "回到故事", i.back), v), a.append(A);
  }
  o();
}
function cg(n) {
  return n.trim() ? [{ text: n, lang: "en-US", start: 0 }] : [];
}
const hg = {
  0: { 1: [{ actor: "gail", x: 62, y: 52, walk: !0 }] },
  1: { 0: [{ actor: "star", x: 53, y: 29 }], 1: [{ actor: "star", x: 36, y: 46 }] },
  2: { 0: [{ actor: "star", x: 42, y: 22 }], 1: [{ actor: "star", x: 54, y: 12 }], 2: [{ actor: "gail", x: 62, y: 52, walk: !0 }] },
  3: { 0: [{ actor: "gail", x: 34, y: 73, walk: !0 }], 1: [{ actor: "gail", x: 24, y: 74, rotate: -7 }] },
  4: { 1: [{ actor: "gail", x: 63, y: 68, walk: !0 }], 2: [{ actor: "cat", x: 74, y: 66, rotate: -8 }] },
  5: { 2: [{ actor: "gail", x: 29, y: 48, walk: !0, scale: 0.72 }] },
  6: { 2: [{ actor: "gail", x: 64, y: 68, walk: !0 }] },
  7: { 0: [{ actor: "gail", x: 47, y: 73, walk: !0 }], 1: [{ actor: "ladder", x: 77, y: 51, rotate: 12 }], 2: [{ actor: "cat", x: 80, y: 36 }] },
  8: { 1: [{ actor: "star", x: 48, y: 12 }] },
  9: { 0: [{ actor: "gail", x: 51, y: 72, walk: !0, scale: 0.88 }], 2: [{ actor: "gail", x: 38, y: 68, walk: !0, scale: 0.82 }] },
  10: { 0: [{ actor: "gail", x: 69, y: 75, walk: !0 }] },
  11: { 0: [{ actor: "gail", x: 61, y: 72, walk: !0 }], 1: [{ actor: "gail", x: 55, y: 70, rotate: -6 }] },
  12: { 0: [{ actor: "gail", x: 52, y: 70, walk: !0 }], 1: [{ actor: "gail", x: 44, y: 69, walk: !0 }] },
  13: { 0: [{ actor: "gail", x: 39, y: 56, walk: !0, scale: 0.85 }], 1: [{ actor: "gail", x: 39, y: 56, rotate: -10, scale: 0.85 }] },
  14: { 0: [{ actor: "gail", x: 70, y: 70, walk: !0 }], 1: [{ actor: "gail", x: 67, y: 64, walk: !0 }], 2: [{ actor: "gail", x: 36, y: 54, walk: !0, rotate: -65, scale: 0.7 }] }
};
function dg(n, e) {
  return Math.max(3200, Math.min(6500, n.trim().split(/\s+/).length * 460)) * 1;
}
const ze = document.querySelector("#little-star"), gt = location.pathname.endsWith("red-hood-storybook.html") || new URLSearchParams(location.search).get("book") === "red-hood", xt = location.pathname.endsWith("birthday-storybook.html"), en = location.pathname.endsWith("dragon-storybook.html"), Tt = location.pathname.endsWith("princess-storybook.html"), Lt = location.pathname.endsWith("moonlight-garden-storybook.html") || new URLSearchParams(location.search).get("book") === "moonlight-garden", fn = en || Tt || Lt;
let Je = "B";
try {
  const n = localStorage.getItem("gms-reading-level");
  (n === "A" || n === "B" || n === "C") && (Je = n);
} catch {
}
const hc = { A: rr(), B: rr(), C: rr() }, Kn = gt || xt || fn;
let Be = Lt ? Cl(Je) : Tt ? Ml(Je) : en ? vl(Je) : xt ? Ft : gt ? Zn : ss, Yi = Lt ? Al : Tt ? bl : en ? Cc : xt ? Za : gt ? _l : Ec, Rn = Lt ? Vc : Tt ? Uc : en ? Pc : xt ? Rc : gt ? xl : Mc, dc = Lt ? Pl() : Tt ? El(Je) : en ? yl(Je) : xt ? ps : gt ? Ka : hg;
const zi = Lt ? "learning-planet-moonlight-garden-v1" : Tt ? "learning-planet-princess-v1" : en ? "learning-planet-dragon-v1" : xt ? "learning-planet-birthday-v1" : gt ? "learning-planet-red-hood-v1" : "learning-planet-little-star-v2", ug = Lt ? "Gail and the Moonlight Garden" : Tt ? "Gail and the Princess Who Forgot to Smile" : en ? "Gail and the Little Dragon Who Forgot to Fly" : xt ? "Gail’s Birthday Cake" : gt ? "Gail and the Big Bad Wolf" : "Where Is My Star?";
ze.classList.toggle("red-hood-book", Kn);
ze.classList.toggle("cake-book", xt);
ze.classList.toggle("dragon-book", fn);
ze.classList.toggle("princess-book", Tt);
ze.classList.toggle("moonlight-book", Lt);
ze.dataset.level = Je;
document.title = ug + " · 學習星球英文繪本";
let vt = $a(null);
try {
  const n = localStorage.getItem(zi);
  vt = n === null && !Kn ? Ac(localStorage.getItem("learning-planet-little-star-v1")) : $a(n, Be.length);
} catch {
}
let re = vt.page, Mt = "cover", Yn = "listen", Zt = !1, ki = !1, Oi = !0;
try {
  Oi = localStorage.getItem("moonlight-motion") !== "off";
} catch {
}
let ia = () => {
}, ur = 1;
try {
  const n = Number(localStorage.getItem("gms-playback-multiplier-v2"));
  [1.2, 1, 0.9, 0.8, 0.7, 0.6].includes(n) && (ur = n);
} catch {
}
let Qt = 0, ln = !1, Kt = !1, co = !1, Ni = !1, uc = !1, hs = "", Xt = 0, it, $r, Ce, mn, sr, is;
const ds = /* @__PURE__ */ new Set(), Pt = Lt ? "images/story/moonlight-garden-v1/" : Tt ? "images/story/princess-v1/" : en ? "images/story/dragon-v1/" : xt ? "images/story/birthday-v1/" : gt ? "images/story/red-hood-v1/" : "images/story/little-star-v1/";
function fr(n, e) {
  const t = setTimeout(() => {
    ds.delete(t), n();
  }, e);
  ds.add(t);
}
function xs() {
  vt.page = re;
  try {
    localStorage.setItem(zi, JSON.stringify(vt));
  } catch {
  }
}
function oe(n, e = "", t = "") {
  const i = document.createElement(n);
  return i.className = e, i.textContent = t, i;
}
function dt(n, e, t, i = "wood-button") {
  const r = oe("button", i, n);
  return r.type = "button", r.setAttribute("aria-label", e), r.title = e, r.onclick = t, r;
}
const pr = /* @__PURE__ */ new Set();
function fc() {
  pr.forEach((n) => n.cancel()), pr.clear();
}
function fg(n) {
  const e = Qt;
  if (en) {
    const s = Ce.querySelector("[data-object=pip] .sprite-art"), a = Be[re].lines[n];
    s && /open.*wing|stretches.*wide|spread.*wing/i.test(a) && (s.style.backgroundPosition = "100% 0%", s.style.backgroundSize = "200% 200%"), s && (re === 18 || /glides|flies|take.*sky|reach.*sky|meet.*sky|fly again/i.test(a)) && (s.style.backgroundPosition = "0% 100%", s.style.backgroundSize = "180% 200%");
  }
  const t = dc[re]?.[n] || [];
  gt && re === 20 && n === 1 && ml(!1);
  const i = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : dg(Be[re].lines[n]) / (0.9 * ur), r = [];
  for (const s of t) {
    const a = Ce.querySelector(`[data-object="${s.actor}"]`);
    if (!a) continue;
    const o = getComputedStyle(a), c = a.animate(
      [
        { left: o.left, top: o.top, transform: o.transform },
        {
          left: s.x + "%",
          top: s.y + "%",
          transform: `translate(-50%,-50%) rotate(${s.rotate || 0}deg) scale(${s.scale || 1})`
        }
      ],
      { duration: i, easing: "ease-in-out", fill: "forwards" }
    );
    pr.add(c), r.push(c.finished.catch(() => {
    }));
    const l = a.querySelector("img,.sprite-art");
    if (s.walk && l) {
      const h = parseFloat(o.left) / Ce.clientWidth * 100;
      Math.abs(s.x - h) > 0.5 && (l.style.scale = "", l.style.transform = `scaleX(${s.x < h ? -1 : 1})`);
    }
    if (s.walk && l && i) {
      const h = Math.max(4, Math.round(i / 520)), d = l.animate([{ transform: "translateY(0) rotate(-2deg)" }, { transform: "translateY(-4px) rotate(2deg)", offset: 0.5 }, { transform: "translateY(0) rotate(-2deg)" }], {
        duration: i / h,
        iterations: h,
        easing: "ease-in-out"
      });
      pr.add(d), r.push(d.finished.catch(() => {
      }));
    }
  }
  return Promise.all(r).then(() => {
    if (e === Qt) {
      if (xt) {
        mc(n);
        return;
      }
      if (gt) {
        if (re === 0 && n === 1) {
          const s = Ce.querySelector("[data-object=gail] img");
          s && (s.src = Pt + "gail.png", s.classList.remove("paper-girl"));
          const a = Ce.querySelector("[data-object=hood]");
          a.querySelector("img").style.opacity = "0", a.style.left = "82%", a.style.top = "61%";
        }
        if (re === 0 && n === 2) {
          const s = Ce.querySelector("[data-object=hood]");
          s.style.left = "61%";
        }
        re === 11 && n === 2 && ml(!0);
      }
    }
  });
}
function ml(n) {
  const e = Ce.querySelector("[data-object=wolf]");
  if (!e) return;
  const t = e.querySelector("img,.sprite-art"), i = t?.style.scale || "1 1";
  if (t?.remove(), n) {
    const r = oe("img");
    r.src = Pt + "wolf-dressed.png", r.alt = "", r.style.scale = i, e.prepend(r), e.classList.add("wardrobe-wolf");
  } else {
    const s = vs({
      ..._l.wolf,
      ...Be[re].placements?.wolf
    }).querySelector(".sprite-art");
    s.style.scale = i, e.prepend(s), e.classList.remove("wardrobe-wolf");
  }
  for (const r of ["cap", "glasses", "blanket"]) Ce.querySelector(`[data-object=${r}]`)?.classList.toggle("costume-hidden", n);
}
function pg() {
  if (re === 0 || re === 11 || re === 20)
    for (const n of Be[re].objects)
      Ce.querySelector(`[data-object=${n}]`)?.replaceWith(vs(Dn(n)));
}
function pc(n) {
  if (n.querySelector(".gail-apron")) return;
  const e = oe("img", "gail-apron");
  e.src = Pt + "apron.svg", e.alt = "", n.append(e);
}
function mg() {
  for (const n of Be[re].objects)
    Ce.querySelector(`[data-object=${n}]`)?.replaceWith(vs(Dn(n)));
  Ce.querySelector(".candle-flame")?.remove();
}
function mc(n) {
  if (re === 8 && n >= 1) {
    const i = Ce.querySelector("[data-object=gail]");
    i && pc(i), Ce.querySelector("[data-object=apron]")?.classList.add("applied-ingredient");
  }
  re === 11 && n >= 1 && Ce.querySelector("[data-object=bowl]")?.classList.add("has-batter");
  const t = {
    19: ["plain", 1],
    20: ["frosted", 2],
    21: ["decorated", 3]
  }[re];
  if (t && n >= (re === 21 ? 2 : 1)) {
    const i = Ce.querySelector(`[data-object=${t[0]}] .sprite-art`);
    if (i) {
      const a = t[1];
      i.style.backgroundPosition = `${a % 2 * 100}% ${Math.floor(a / 2) * 100}%`, i.style.backgroundSize = `200% ${a > 1 ? 188 : 200}%`;
    }
    const r = re === 19 ? "spatula" : re === 20 ? "strawberries" : "candle", s = Ce.querySelector(`[data-object=${r}]`);
    s && s.classList.add("applied-ingredient");
  }
  re === 22 && n >= 1 && !Ce.querySelector(".candle-flame") && Ce.querySelector("[data-object=finished]")?.append(oe("span", "candle-flame")), re === 23 && n === 0 && Ce.querySelector(".candle-flame")?.remove();
}
function un() {
  Zt = !1, Qt++, fc(), window.speechSynthesis?.cancel(), ln = !1, Kt = !1, ze.querySelectorAll(".spoken,.current-line").forEach((n) => n.classList.remove("spoken", "current-line")), Xn();
}
function Xn() {
  const n = ze.querySelector("[data-whole-book]");
  n && (n.textContent = Zt ? Kt ? "▶" : "Ⅱ" : "▶", n.setAttribute("aria-label", Zt ? Kt ? "繼續整本朗讀" : "暫停整本朗讀" : fn ? "依目前難度朗讀整本" : "自動朗讀整本"), n.setAttribute("aria-pressed", String(Zt))), sr && (sr.textContent = ln ? Kt ? "▶ Continue" : "Ⅱ Pause" : Yn === "self" ? "✓ Done · 聽示範" : "▶ Read to me", sr.setAttribute("aria-label", ln ? Kt ? "繼續朗讀" : "暫停朗讀" : Yn === "self" ? "讀好了，聽示範" : "開始英文朗讀"));
}
function gc(n, e, t, i, r) {
  const s = cg(n);
  let a = 0;
  const o = () => {
    if (e !== Qt) return;
    const c = s[a++];
    if (!c) {
      t();
      return;
    }
    const l = new SpeechSynthesisUtterance(c.text);
    l.lang = c.lang, l.rate = 0.9 * ur;
    const h = speechSynthesis.getVoices(), d = h.find((f) => f.lang === c.lang) || h.find((f) => /^en[-_]/i.test(f.lang));
    d && (l.voice = d), l.onstart = () => {
      e === Qt && r?.(c.start);
    }, l.onboundary = (f) => {
      e === Qt && f.name === "word" && r?.(c.start + f.charIndex);
    }, l.onend = o, l.onerror = () => {
      e === Qt && i();
    }, speechSynthesis.speak(l);
  };
  o();
}
function mi(n, e) {
  if (un(), co) {
    e?.();
    return;
  }
  if (!("speechSynthesis" in window)) {
    it.textContent = "此裝置不支援語音，可以點字閱讀。", e?.();
    return;
  }
  gc(
    n,
    Qt,
    () => e?.(),
    () => {
      it.textContent = "語音暫時無法播放，仍可閱讀與探索。", e?.();
    }
  );
}
function ji(n = !1) {
  if (ln) {
    Kt = !Kt, Kt ? speechSynthesis.pause() : speechSynthesis.resume(), pr.forEach((r) => {
      Kt && r.playState === "running" ? r.pause() : !Kt && r.playState === "paused" && r.play();
    }), Xn();
    return;
  }
  if (un(), Zt = n, co) {
    it.textContent = "請開啟右上角聲音，再聽故事。";
    return;
  }
  if (!("speechSynthesis" in window)) {
    it.textContent = "此裝置不支援語音，可使用自己讀模式。";
    return;
  }
  gt && pg(), (xt || fn) && mg(), ln = !0, Xn();
  const e = Qt;
  let t = 0;
  const i = () => {
    if (e !== Qt) return;
    if (t >= Be[re].lines.length) {
      if (ln = !1, Xn(), ze.querySelectorAll(".spoken,.current-line").forEach((a) => a.classList.remove("spoken", "current-line")), Zt)
        if (re < Be.length - 1) {
          ln = !0, Xn();
          const a = () => {
            if (!(e !== Qt || !Zt)) {
              if (Kt) {
                fr(a, 100);
                return;
              }
              re++, It(), ji(!0);
            }
          };
          fr(a, 1500);
        } else
          Zt = !1, Xn(), it.textContent = fn ? "The end! 整本讀完了，可以點右上角鉛筆做小測驗。" : "The end! 整本讀完了。";
      else it.textContent = "Now explore! 點場景，發現單字。";
      return;
    }
    const r = is.children[t];
    ze.querySelectorAll(".spoken,.current-line").forEach((a) => a.classList.remove("spoken", "current-line")), r.classList.add("current-line");
    let s;
    gc(
      Be[re].lines[t],
      e,
      () => {
        (s || Promise.resolve()).then(() => {
          e === Qt && (t++, i());
        });
      },
      () => {
        fc(), Zt = !1, ln = !1, Xn(), it.textContent = "語音暫時無法播放，試試點單字或自己讀。";
      },
      (a) => {
        s || (s = fg(t)), r.querySelectorAll("[data-start]").forEach((o) => {
          const c = Number(o.dataset.start), l = a >= c && a < c + (o.textContent?.length || 0);
          o.classList.toggle("spoken", l), l && In(o.textContent?.replace(/[^a-z]/gi, "").toLowerCase() || "");
        });
      }
    );
  };
  i();
}
function In(n) {
  n = Be[re].objects.find((t) => t === n || Yi[t].word.toLowerCase() === n.toLowerCase()) || n;
  const e = Ce?.querySelector(`[data-object="${n}"]`);
  e && (e.classList.add("glow"), fr(() => e.classList.remove("glow"), 1300));
}
function Dn(n) {
  const e = { ...Yi[n], ...Be[re].placements?.[n] };
  return xt || fn ? e : gt ? (n === "wolf" && [14, 15, 16, 17, 20].includes(re) && (e.image = "wolf-dressed.png", e.sprite = void 0), e) : (n === "star" && Be[re].star && ([e.x, e.y] = Be[re].star), n === "gail" && Be[re].scene === "garden" ? (e.x = 55, e.y = 73) : n === "gail" && Be[re].scene !== "room" && (e.x = 85, e.y = 79, e.w = 16, e.h = 38), e);
}
function ra(n, e) {
  n.style.left = e.x + "%", n.style.top = e.y + "%", n.style.width = e.w + "%", n.style.height = e.h + "%";
}
function us(n) {
  n = n.toLowerCase() === "gail" ? "Gail" : n.toLowerCase() === "grandma" ? "Grandma" : n, n.toLowerCase() === "star" && Ce?.querySelector("[data-object=star]")?.classList.add("found-star"), vt.words.includes(n) || (vt.words.push(n), xs());
}
function _c(n) {
  const e = Yi[n];
  if (!e) return;
  us(e.word), In(n);
  const t = Ce.querySelector(`[data-object="${n}"]`);
  t && (t.classList.add("show-label"), fr(() => t.classList.remove("show-label"), 2200), Ce.style.transformOrigin = `${t.style.left} ${t.style.top}`, Ce.classList.add("peek"), fr(() => Ce.classList.remove("peek"), 1400)), it.textContent = e.word, mi(e.word);
}
function rs() {
  if (!vt.stars.includes(re)) {
    vt.stars.push(re);
    for (const n of Be[re].words) us(n);
  }
  xs(), hs = "", mn.classList.add("solved"), mn.replaceChildren(oe("span", "mission-star", "★"), oe("div", "", "Lovely! 任務完成")), ze.querySelectorAll("[data-page]").forEach((n) => {
    Number(n.dataset.page) === re && n.classList.add("earned");
  }), it.textContent = "Great! 你幫故事往前走了一步。", mi("Great!"), gg();
}
function gg() {
  if (Kn) {
    xt && mc(2);
    const s = Be[re].mission;
    if (In(s.answer), s.type === "drag") {
      const a = Ce.querySelector(`[data-object="${s.answer}"]`);
      if (a) {
        const o = Dn(s.target);
        a.style.left = o.x + "%", a.style.top = o.y + "%";
      }
    }
    return;
  }
  const n = Be[re].action;
  Ce.classList.add("action-" + n);
  const e = Ce.querySelector('[data-object="star"]'), t = Ce.querySelector('[data-object="gail"]'), i = Ce.querySelector('[data-object="cat"]'), r = Ce.querySelector('[data-object="ladder"]');
  n === "sky" && e && (e.style.left = "48%", e.style.top = "12%"), n === "climb" && (r && (r.style.left = "77%", r.style.top = "51%", r.style.transform = "translate(-50%,-50%) rotate(12deg)"), i && (i.style.left = "80%", i.style.top = "36%")), n === "cross" && t && (t.style.left = "29%", t.style.top = "48%", t.style.width = "12%", t.style.height = "30%"), n === "sleep" && t && (t.style.left = "36%", t.style.top = "54%", t.style.transform = "translate(-50%,-50%) rotate(-65deg) scale(.7)"), n === "window" && In("window"), n === "flower" && In("flower"), n === "cat" && In("cat"), ["firefly", "duck", "basket", "door"].includes(n) && In(n);
}
function gl(n) {
  _c(n);
  const e = Be[re].mission;
  if (!vt.stars.includes(re)) {
    if (e.type === "drag") {
      n === e.answer ? (hs = n, mn.classList.add("holding"), it.textContent = `現在點 ${Yi[e.target].word}，或把物件拖過去。`, In(e.target)) : hs === e.answer && n === e.target ? rs() : it.textContent = e.hint;
      return;
    }
    if (e.type === "sequence") {
      n === e.steps[Xt] ? (Xt++, Xt === e.steps.length ? rs() : it.textContent = `Good! 接著點 ${Yi[e.steps[Xt]].word}。`) : it.textContent = "Try again! " + e.hint;
      return;
    }
    if (n !== e.answer) {
      it.textContent = "Try again! " + e.hint;
      return;
    }
    if (xt && e.type === "tap" && (Xt++, Ce.querySelector("[data-object=whisk] .sprite-art")?.animate([{ transform: "rotate(-20deg)" }, { transform: "rotate(20deg)" }, { transform: "rotate(-20deg)" }], { duration: 600 }), Xt < 3)) {
      it.textContent = `Stir, stir · ${Xt} / 3`;
      return;
    }
    if (e.type === "follow") {
      Xt++;
      const t = Ce.querySelector('[data-object="star"]');
      if (t.style.left = [45, 53, 60][Xt - 1] + "%", t.style.top = [34, 22, 12][Xt - 1] + "%", Xt < 3) {
        it.textContent = `Follow the star · ${Xt} / 3`;
        return;
      }
    }
    rs();
  }
}
function vs(n) {
  const e = dt("", `探索 ${n.word}`, () => gl(n.id), "scene-object " + (n.kind || "hotspot"));
  e.dataset.object = n.id, Kn && [Be[re].mission.answer, Be[re].mission.target, ...Be[re].mission.steps || []].includes(n.id) && (e.style.zIndex = "10"), ra(e, n), gt && Be[re].scene === "dining" && ["gail", "grandma", "wolf"].includes(n.id) && (e.style.clipPath = "inset(0 0 35% 0)"), gt && [14, 15, 16, 17, 20].includes(re) && ["cap", "glasses", "blanket"].includes(n.id) && e.classList.add("costume-hidden");
  const t = oe("span", "object-label", n.word);
  if (n.sprite) {
    const r = oe("span", "sprite-art"), { sheet: s, cell: a, columns: o, clip: c, rect: l, size: h } = n.sprite;
    if (r.style.backgroundImage = `url(${Pt + s})`, r.style.backgroundSize = `${en && a === 2 ? 180 : s === "ingredients.png" && n.id === "bowl" ? 285 : o * 100}% ${s.endsWith("cast.png") && n.id === "mom" ? 195 : s === "cakes.png" && a > 1 ? 188 : o * 100}%`, r.style.backgroundPosition = `${a % o / (o - 1) * 100}% ${Math.floor(a / o) / (o - 1) * 100}%`, l && h) {
      const [d, f, m, _] = l, [v, p] = Array.isArray(h) ? h : [h, h];
      r.style.backgroundSize = `${v / m * 100}% ${p / _ * 100}%`, r.style.backgroundPosition = `${d / (v - m) * 100}% ${f / (p - _) * 100}%`;
    }
    c && (r.style.clipPath = c), e.classList.add(s.endsWith("cast.png") ? "puppet" : "prop"), e.append(r);
  } else if (n.image || n.kind === "girl" || n.kind === "cat") {
    const r = oe("img", n.kind === "girl" ? Kn ? "red-gail" : "paper-girl" : "");
    r.src = n.image ? Pt + n.image : n.kind === "girl" ? Pt + "gail-paper.png" : "images/math-master/v1/objects/cat-v1.png", r.alt = "", n.image?.includes("gail-paper") && r.classList.add("paper-girl"), e.append(r), (n.id === "wolf" || n.id === "dad") && e.classList.add("wardrobe-wolf");
  } else if (n.kind === "star") e.append(oe("span", "star-shape", "★"), oe("span", "star-face", "•ᴗ•"));
  else if (n.kind === "ladder") {
    const r = oe("span", "ladder-art");
    for (let s = 0; s < 6; s++) r.append(oe("i"));
    e.append(r);
  } else gt && n.id === "number" ? e.append(oe("span", "door-number", "24")) : gt && ["left", "right", "away"].includes(n.id) ? e.append(oe("span", "direction-cue", n.id === "left" ? "←" : "→")) : e.append(oe("span", "hotspot-spark", "✦"));
  if (Kn) {
    const r = ["gail", "wolf", "mom", "grandma", "manager", "dad", "pip", "ella", "caregiver", "boy", "friend"], s = e.querySelector("img,.sprite-art"), a = Be[re].objects.filter((o) => r.includes(o) && o !== n.id);
    if (s && r.includes(n.id) && a.length) {
      const o = a.reduce((c, l) => c + Dn(l).x, 0) / a.length;
      s.style.scale = o < n.x ? "-1 1" : "1 1";
    }
    if (Tt && s && ["ella", "friend"].includes(n.id)) {
      const o = Be[re].objects.includes("tower") ? Dn("tower").x : Be[re].objects.includes("blocks") ? Dn("blocks").x : Dn("gail").x;
      s.style.scale = "";
      const c = n.sprite?.sheet === "support-cast.png";
      s.style.transform = `scaleX(${o < n.x === c ? 1 : -1})`;
    }
    s && n.id === "hood" && re === 0 && (s.style.scale = "-1 1");
  }
  xt && n.id === "gail" && re >= 9 && pc(e), xt && n.id === "bowl" && re >= 12 && e.classList.add("has-batter"), xt && n.id === "finished" && re === 23 && e.append(oe("span", "candle-flame")), e.append(t);
  const i = Be[re].mission;
  if (i.type === "drag" && n.id === i.answer) {
    e.classList.add("draggable");
    let r = 0, s = 0, a = !1, o = !1;
    e.onclick = () => {
      if (o) {
        o = !1;
        return;
      }
      gl(n.id);
    }, e.onpointerdown = (c) => {
      vt.stars.includes(re) || (r = c.clientX, s = c.clientY, a = !1, e.setPointerCapture(c.pointerId));
    }, e.onpointermove = (c) => {
      if (!e.hasPointerCapture(c.pointerId) || (Math.hypot(c.clientX - r, c.clientY - s) > 6 && (a = !0), !a)) return;
      ln && un();
      const l = Ce.getBoundingClientRect();
      e.style.left = (c.clientX - l.left) / l.width * 100 + "%", e.style.top = (c.clientY - l.top) / l.height * 100 + "%", e.classList.add("dragging");
    }, e.onpointerup = (c) => {
      if (!e.hasPointerCapture(c.pointerId) || (e.releasePointerCapture(c.pointerId), e.classList.remove("dragging"), !a)) return;
      o = !0;
      const l = Ce.getBoundingClientRect();
      Tc((c.clientX - l.left) / l.width * 100, (c.clientY - l.top) / l.height * 100, Dn(i.target)) ? rs() : (ra(e, n), it.textContent = "再試一次：" + i.hint);
    }, e.onpointercancel = () => {
      ra(e, n), e.classList.remove("dragging");
    };
  }
  return e;
}
function _g() {
  const n = oe("header", "topbar"), e = oe("a", "brand");
  e.href = "story-planet.html", e.innerHTML = '<img class="official-brand" src="images/brand/learning-planet-brand-v1.png" alt="Learning Planet 學習星球"><span class="brand-subtitle">英文魔法繪本</span>', e.setAttribute("aria-label", "Learning Planet 學習星球，回故事星球"), n.append(e);
  const t = oe("nav", "progress");
  t.setAttribute("aria-label", "故事頁數與星星");
  for (let r = 0; r < Be.length; r++) {
    const s = dt(
      "★",
      `第 ${r + 1} 頁${vt.stars.includes(r) ? "，已完成" : ""}`,
      () => {
        re = r, Mt = "story", It();
      },
      "progress-star" + (vt.stars.includes(r) ? " earned" : "") + (r === re && Mt === "story" ? " active" : "")
    );
    s.dataset.page = String(r), s.setAttribute("aria-current", String(r === re && Mt === "story")), t.append(s);
  }
  n.append(t);
  const i = oe("div", "tools");
  {
    const r = dt(
      "▶",
      fn ? "依目前難度朗讀整本" : "自動朗讀整本",
      () => {
        if (Zt && ln) {
          ji(!0);
          return;
        }
        un(), co = !1, Yn = "listen", re = 0, Mt = "story", It(), ji(!0);
      },
      "round"
    );
    r.dataset.wholeBook = "true", r.setAttribute("aria-pressed", "false"), i.append(r);
  }
  return i.append(dt("⚙", "閱讀設定", vg, "round")), fn && (i.prepend(xg()), i.append(
    dt(
      "✎",
      "書末小測驗",
      () => {
        Mt = "quiz", It();
      },
      "round"
    )
  )), n.append(i), n;
}
function xg() {
  const n = oe("div", "level-switch");
  n.setAttribute("role", "group"), n.setAttribute("aria-label", "閱讀難度");
  for (const e of ["A", "B", "C"]) {
    const t = dt(
      e,
      `Level ${e} ${Zr[e]}`,
      () => {
        if (Je === e) return;
        const i = Zt && !Kt;
        un(), Je = e, Be = Lt ? Cl(Je) : Tt ? Ml(Je) : vl(Je), dc = Lt ? Pl() : Tt ? El(Je) : yl(Je), ze.dataset.level = Je;
        try {
          localStorage.setItem("gms-reading-level", Je);
        } catch {
        }
        It(), i && ji(!0);
      },
      "level-button"
    );
    t.setAttribute("aria-pressed", String(Je === e)), n.append(t);
  }
  return n;
}
function vg() {
  if (ze.querySelector(".settings")) {
    ze.querySelector(".settings").remove();
    return;
  }
  const n = oe("section", "settings");
  n.setAttribute("aria-label", "閱讀設定"), n.append(oe("h2", "", "閱讀設定"));
  const e = oe("div", "speed-options");
  e.setAttribute("role", "group"), e.setAttribute("aria-label", "播放速度");
  for (const i of [1.2, 1, 0.9, 0.8, 0.7, 0.6]) {
    const r = dt(
      i + "x",
      `播放速度 ${i}x`,
      () => {
        const s = ln, a = Zt;
        un(), ur = i;
        try {
          localStorage.setItem("gms-playback-multiplier-v2", String(i));
        } catch {
        }
        e.querySelectorAll("button").forEach((o) => o.setAttribute("aria-pressed", String(o === r))), s && ji(a);
      },
      "speed-choice"
    );
    r.setAttribute("aria-pressed", String(i === ur)), e.append(r);
  }
  const t = dt(Ni ? "物件提示 · 開" : "物件提示 · 關", "切換物件提示", () => {
    Ni = !Ni, ze.classList.toggle("show-hints", Ni), t.textContent = Ni ? "物件提示 · 開" : "物件提示 · 關";
  });
  n.append(e, t), Lt && n.append(
    dt(Oi ? "2.5D 動態 · 開" : "2.5D 動態 · 關", "切換月光花園 2.5D 動態", () => {
      Oi = !Oi;
      try {
        localStorage.setItem("moonlight-motion", Oi ? "on" : "off");
      } catch {
      }
      It();
    })
  ), n.append(
    oe("p", "", "進度儲存在這台裝置。自己讀模式不錄音、不評分。"),
    dt("完成", "關閉設定", () => n.remove())
  ), ze.append(n);
}
function yg() {
  const n = oe("section", "cover-stage");
  n.innerHTML = `<div class="cover-copy"><span class="eyebrow">A LITTLE LIGHT. A BIG ADVENTURE.</span><h1>Where Is<br>My <em>Star?</em></h1><p>跟著Gail，找回夜空裡的小星星。</p><div class="cover-meta">${Be.length} 頁故事 <i>✦</i> 聽、讀、探索</div></div><div class="closed-book"><div class="cover-border"><span class="cover-small">LEARNING PLANET · STORY NO. 01</span><div class="cover-moon">☾</div><h2>Where Is<br>My Star?</h2><img class="cover-girl paper-girl" src="${Pt}${gt ? "gail.png" : "gail-paper.png"}" alt="穿星星睡衣的Gail"><span class="cover-star">★</span><span class="cover-author">Gail的星光冒險</span></div></div>`;
  const e = oe("div", "cover-actions");
  if (e.append(
    dt(
      vt.stars.length || re ? "繼續故事 →" : "翻開故事 →",
      "翻開故事",
      () => {
        Mt = "story", It();
      },
      "wood-button primary"
    )
  ), (vt.stars.length || re) && e.append(
    dt(
      "重新探索",
      "重新探索，重設本書星星",
      () => {
        if (vt = { page: 0, stars: [], words: [] }, fn)
          for (const t of ["A", "B", "C"]) {
            hc[t] = rr();
            try {
              localStorage.removeItem(zi + "-quiz-" + t);
            } catch {
            }
          }
        re = 0, xs(), Mt = "story", It();
      },
      "text-button"
    )
  ), gt) {
    n.querySelector(".cover-copy>.eyebrow").textContent = "A RED HOOD. A SMART LITTLE HERO.", n.querySelector("h1").innerHTML = "Gail and the<br><em>Big Bad Wolf</em>", n.querySelector("h2").innerHTML = "Gail and the<br>Big Bad Wolf", n.querySelector(".cover-copy p").textContent = "跟著 Gail，展開現代小紅帽的暖心冒險。", n.querySelector(".cover-small").textContent = "LEARNING PLANET · STORY NO. 02";
    const t = n.querySelector(".cover-girl");
    t.src = Pt + "gail.png", t.classList.remove("paper-girl"), t.classList.add("red-gail"), t.alt = "穿紅色連帽短斗篷、戴星星髮夾的 Gail", n.querySelector(".cover-author").textContent = "Gail 的紅斗篷冒險";
  }
  if (xt) {
    n.querySelector(".cover-copy>.eyebrow").textContent = "STORY NO. 03 · MADE WITH LOVE", n.querySelector("h1").innerHTML = "Gail’s<br><em>Birthday Cake</em>", n.querySelector(".cover-copy p").textContent = "七歲的驚喜，藏在一起動手的每一步。";
    const t = n.querySelector(".cover-border");
    t.style.backgroundImage = `url(${Pt}cover.png)`, t.innerHTML = '<span class="cake-cover-series">LEARNING PLANET · 03</span><h2>Gail’s<br>Birthday Cake</h2><p>Made with love</p>';
  }
  if (en) {
    n.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 01", n.querySelector("h1").innerHTML = "Little Dragon,<br><em>Brave Wings</em>", n.querySelector(".cover-copy p").textContent = "瑜瑜與忘記飛翔的小龍", n.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 10 題故事挑戰";
    const t = n.querySelector(".cover-border");
    t.style.backgroundImage = `url(${Pt}cover.png)`, t.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 01</span><h2>Gail and the<br>Little Dragon<br><small>Who Forgot to Fly</small></h2>';
    const i = oe("p", "level-note", Zr[Je]);
    n.querySelector(".cover-copy").append(i);
    try {
      const r = JSON.parse(localStorage.getItem(zi + "-quiz-" + Je) || "null");
      r && Number.isInteger(r.score) && r.score >= 0 && r.score <= 10 && n.querySelector(".cover-copy").append(oe("p", "level-note", `上次挑戰 · ${r.score} / 10`));
    } catch {
    }
  }
  if (Tt) {
    n.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 02", n.querySelector("h1").innerHTML = "A Princess,<br><em>A Little Smile</em>", n.querySelector(".cover-copy p").textContent = "瑜瑜與不會笑的公主", n.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const t = n.querySelector(".cover-border");
    t.style.backgroundImage = `url(${Pt}cover-composition-v1.png)`, t.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 02</span><h2>Gail and the Princess<br><small>Who Forgot to Smile</small></h2>', n.querySelector(".cover-copy").append(oe("p", "level-note", Zr[Je]));
    try {
      const i = JSON.parse(localStorage.getItem(zi + "-quiz-" + Je) || "null");
      i && Number.isInteger(i.score) && i.score >= 0 && i.score <= 16 && n.querySelector(".cover-copy").append(oe("p", "level-note", `上次挑戰 · ${i.score} / 16`));
    } catch {
    }
  }
  if (Lt) {
    n.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 03", n.querySelector("h1").innerHTML = "Gail and the<br><em>Moonlight Garden</em>", n.querySelector(".cover-copy p").textContent = "跟著微光，喚醒沉睡的月光花園。", n.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 5 個 Checkpoint · 10 題挑戰";
    const t = n.querySelector(".cover-border");
    t.style.backgroundImage = `url(${Pt}scenes-01-04.webp)`, t.style.backgroundSize = "200% 200%", t.style.backgroundPosition = "100% 100%", t.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 03</span><h2>Gail and the<br>Moonlight Garden</h2><span class="moonlight-cover-mark">✦</span>', n.querySelector(".cover-copy").append(oe("p", "level-note", Zr[Je]));
  }
  n.querySelector(".cover-copy").append(e), ze.append(n);
}
function ja(n) {
  ki = n, ze.classList.toggle("immersive", n && Mt === "story");
  const e = ze.querySelector(".reader-footer"), t = ze.querySelector(".story-paper");
  e && t && (n ? t : ze).append(e);
  const i = ze.querySelector(".immersive-toggle");
  i && (i.textContent = n ? "⤢" : "⛶", i.setAttribute("aria-label", n ? "離開全景閱讀" : "全景閱讀"), i.setAttribute("aria-pressed", String(n)));
}
function It() {
  if (ia(), ia = () => {
  }, un(), ds.forEach(clearTimeout), ds.clear(), hs = "", Xt = 0, ze.replaceChildren(_g()), ze.classList.toggle("show-hints", Ni), ze.classList.toggle("zoomed", uc), ze.dataset.screen = Mt, ze.classList.toggle("immersive", ki && Mt === "story"), it = oe("div", "feedback"), it.setAttribute("role", "status"), it.setAttribute("aria-live", "polite"), Mt === "cover") {
    yg();
    return;
  }
  if (Mt === "quiz") {
    const l = Lt ? $c(Je) : Tt ? Gc(Je) : Dc(Je);
    lg(ze, l, hc[Je], {
      level: Je,
      say: mi,
      ending: Lt ? {
        title: "The garden is awake!",
        line: "Follow the light. Help a friend. We can do it together.",
        image: Pt + "scenes-17-20.webp"
      } : Tt ? {
        title: "A place for a friend",
        line: "Side by side, we laugh and play. A little friendship lights the day.",
        image: Pt + "cover-composition-v1.png"
      } : void 0,
      back: () => {
        Mt = "story", It();
      },
      save: (h) => {
        try {
          localStorage.setItem(
            zi + "-quiz-" + Je,
            JSON.stringify({
              score: h,
              total: l.length,
              completedAt: Date.now()
            })
          );
        } catch {
        }
      }
    }), ze.append(it);
    return;
  }
  if (Mt === "complete") {
    wg();
    return;
  }
  xs();
  const n = Be[re], e = oe("section", "open-book"), t = oe("article", "story-paper");
  t.append(oe("div", "eyebrow", `CHAPTER ${String(re + 1).padStart(2, "0")} / ${Be.length}`), oe("h1", "", n.title)), is = oe("div", "story-lines"), n.lines.forEach((l) => {
    const h = oe("p");
    let d = 0;
    l.split(/(\s+)/).forEach((f) => {
      if (!f.trim()) {
        h.append(document.createTextNode(f)), d += f.length;
        return;
      }
      const m = f.replace(/[^a-z]/gi, "").toLowerCase(), _ = oe("button", "word", f);
      _.dataset.start = String(d), _.setAttribute("aria-label", `朗讀 ${m}`), n.words.some((v) => v.toLowerCase() === m) && _.classList.add("target-word"), _.onclick = () => {
        us(m), Yi[m] && n.objects.includes(m) ? _c(m) : mi(m);
      }, h.append(_), d += f.length;
    }), is.append(h);
  }), en && [4, 5].includes(re) && t.append(oe("span", "memory-label", "Pip remembers…")), t.append(is), n.translation && t.append(oe("p", "story-translation", n.translation)), t.append(oe("div", "paper-note", "點英文聽發音 · 點場景找單字"));
  const i = oe("div", "word-chips");
  n.words.forEach(
    (l) => i.append(
      dt(
        l,
        `學習 ${l}`,
        () => {
          us(l), mi(l), In(l);
        },
        "word-chip"
      )
    )
  ), t.append(
    i,
    dt("⛶", "全景閱讀", () => ja(!ki), "immersive-toggle"),
    oe("div", "paper-number", String(re * 2 + 1))
  ), $r = oe("section", "scene"), $r.setAttribute("aria-label", Rn[n.scene].name + "互動場景"), Ce = oe("div", "scene-world");
  const r = oe("img", "scene-bg");
  if (r.src = Pt + (Rn[n.scene].sheet || n.scene + ".png"), r.alt = Rn[n.scene].alt, Kn && Rn[n.scene].sheet) {
    const l = Rn[n.scene].cell || 0, h = oe("div", "scene-atlas");
    r.style.width = "200%", r.style.height = "200%", r.style.maxWidth = "none", r.style.position = "absolute", r.style.left = -(l % 2) * 100 + "%", r.style.top = -Math.floor(l / 2) * 100 + "%", h.append(r), Ce.append(h);
  } else Ce.append(r);
  for (const l of n.objects) Ce.append(vs(Dn(l)));
  if (vt.words.includes("star") && Ce.querySelector("[data-object=star]")?.classList.add("found-star"), xt && ["kitchen", "party"].includes(n.scene)) {
    Ce.classList.add("baking-table");
    const l = Ce.querySelector(".scene-atlas").cloneNode(!0);
    l.classList.add("table-front"), l.setAttribute("aria-hidden", "true"), Ce.append(l);
  }
  if (Tt && re === 6) {
    const l = oe("div", "princess-bubbles");
    l.setAttribute("aria-hidden", "true");
    for (let h = 0; h < 7; h++) {
      const d = oe("i");
      d.style.left = 20 + h * 9 + "%", d.style.top = 13 + h % 3 * 10 + "%", d.style.animationDelay = h * 0.25 + "s", l.append(d);
    }
    Ce.append(l);
  }
  if (Lt && Oi && Rn[n.scene].sheet)
    try {
      Ce.classList.add("is-dream-3d"), ia = og(Ce, Pt + Rn[n.scene].sheet, Rn[n.scene].cell || 0);
    } catch {
      Ce.classList.remove("is-dream-3d");
    }
  $r.append(Ce, oe("div", "scene-caption", Rn[n.scene].caption)), e.append(t, $r), ze.append(e);
  const s = oe("footer", "reader-footer"), a = dt("←", "上一頁", () => fs(-1), "round page-arrow");
  a.disabled = re === 0, sr = dt("", "開始英文朗讀", () => ji(ki), "wood-button read-main"), Xn();
  const o = oe("div", "mode-switch");
  o.append(
    dt(
      "Read to me",
      "系統朗讀模式",
      () => {
        Yn = "listen", un(), It();
      },
      Yn === "listen" ? "selected" : ""
    ),
    dt(
      "I’ll read",
      "自己讀模式",
      () => {
        Yn = "self", un(), It(), it.textContent = "自己讀讀看，讀完按 Done 聽示範。";
      },
      Yn === "self" ? "selected" : ""
    )
  );
  const c = oe("div", "read-controls");
  if (c.append(sr, o), s.append(
    a,
    c,
    dt(re === Be.length - 1 ? "✓" : "→", re === Be.length - 1 ? fn ? "開始書末測驗" : "故事完成" : "下一頁", () => fs(1), "round page-arrow")
  ), ze.append(s), mn = oe("aside", "mission"), mn.setAttribute("aria-label", "故事任務"), vt.stars.includes(re))
    mn.classList.add("solved"), mn.append(oe("span", "mission-star", "★"), oe("div", "", "Lovely! 任務完成"));
  else {
    const l = oe("div");
    l.append(oe("small", "", n.checkpoint ? "STORY CHECKPOINT" : "YOUR LITTLE MISSION"), oe("p", "", n.mission.prompt)), n.checkpoint && mn.classList.add("checkpoint"), mn.append(
      dt(
        "✦",
        "聽任務提示",
        () => {
          mi(n.mission.prompt), it.textContent = n.mission.hint;
        },
        "mission-star"
      ),
      l
    );
  }
  ze.append(mn, it), ja(ki), requestAnimationFrame(() => ze.querySelector(".progress-star.active")?.scrollIntoView({ block: "nearest", inline: "nearest" })), it.textContent = Yn === "self" ? "自己讀讀看，讀完按 Done 聽示範。" : "點 Read to me 聽故事，也可以自由探索。";
}
function fs(n) {
  if (n > 0 && re === Be.length - 1) {
    Mt = fn ? "quiz" : "complete", It();
    return;
  }
  re = Math.max(0, Math.min(Be.length - 1, re + n)), It();
}
function wg() {
  const n = oe("section", "completion");
  n.append(oe("div", "completion-stars", "✦ ★ ✦"), oe("span", "eyebrow", "THE END · A NEW BEGINNING"), oe("h1", "", xt ? "Made with love. Shared with joy." : gt ? "A happy lunch. A better ending." : "Good night, little star."), oe("p", "", `你和Gail一起走完了故事！完成 ${vt.stars.length} / ${Be.length} 個任務。`));
  const e = oe("div", "discovered");
  vt.words.forEach((r) => e.append(dt(r, `重聽 ${r}`, () => mi(r), "word-chip"))), n.append(oe("h2", "", "Words you discovered"), e);
  const t = oe("div", "completion-actions");
  t.append(
    dt("再讀一次", "再讀一次", () => {
      re = 0, Mt = "story", It();
    }),
    dt("找回未完成的星星", "繼續未完成任務", () => {
      re = Be.findIndex((r, s) => !vt.stars.includes(s)), re < 0 && (re = 0), Mt = "story", It();
    })
  );
  const i = oe("a", "text-button", "回故事星球");
  if (i.href = "story-planet.html", t.append(i), gt) {
    const r = oe("a", "wood-button", "下一本：Gail’s Birthday Cake");
    r.href = "birthday-storybook.html", t.append(r);
  }
  if (Tt) {
    const r = oe("a", "wood-button", "下一本：Moonlight Garden");
    r.href = "moonlight-garden-storybook.html", t.append(r);
  }
  if (!Kn) {
    const r = oe("a", "wood-button", "下一本：Gail and the Big Bad Wolf");
    r.href = "red-hood-storybook.html", t.append(r);
  }
  n.append(t), ze.append(n, it);
}
window.addEventListener("keydown", (n) => {
  n.key === "Escape" && (ki && ja(!1), ze.querySelector(".settings")?.remove(), uc = !1, ze.classList.remove("zoomed")), !(Mt !== "story" || ze.querySelector(".settings")) && (n.key === "ArrowRight" && (n.preventDefault(), fs(1)), n.key === "ArrowLeft" && (n.preventDefault(), fs(-1)));
});
document.addEventListener("visibilitychange", () => {
  document.hidden && un();
});
window.addEventListener("pagehide", un);
It();
