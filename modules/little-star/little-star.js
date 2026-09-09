const dt = {
  room: { name: "Gail的房間", caption: "GAIL’S BEDROOM", alt: "星空窗戶、床和溫暖的檯燈" },
  garden: { name: "月光花園", caption: "THE MOONLIT GARDEN", alt: "月光下的花園，有樹、花、橋和河流" },
  forest: { name: "螢火蟲森林", caption: "THE FIREFLY FOREST", alt: "發光的螢火蟲、木路牌、紅色蘑菇與森林小徑" },
  pond: { name: "睡蓮池塘", caption: "THE LILY POND", alt: "月光池塘裡的小鴨、粉紅睡蓮、荷葉與岸邊石頭" },
  orchard: { name: "月光果園", caption: "THE APPLE ORCHARD", alt: "紅蘋果掛在樹上，樹下有藤編籃子和燈籠" },
  windmill: { name: "風車草地", caption: "THE WINDMILL MEADOW", alt: "有藍色門的石造風車、白色雛菊與草地圍欄" },
  hill: { name: "星空山丘", caption: "THE STARLIGHT HILL", alt: "山丘上的黃銅望遠鏡、野餐毯與星空月亮" }
}, ht = {
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
}, ke = [
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
function Me(e, a = ke.length) {
  try {
    const t = JSON.parse(e || "{}");
    return { page: Number.isInteger(t.page) ? Math.max(0, Math.min(a - 1, t.page)) : 0, stars: Array.isArray(t.stars) ? [...new Set(t.stars.filter((i) => typeof i == "number" && Number.isInteger(i) && i >= 0 && i < a))] : [], words: Array.isArray(t.words) ? [...new Set(t.words.filter((i) => typeof i == "string" && i.length < 30).map((i) => /^yuyu$/i.test(i) ? "Gail" : i))] : [] };
  } catch {
    return { page: 0, stars: [], words: [] };
  }
}
function pt(e, a, t) {
  return Math.abs(e - t.x) <= t.w / 2 + 5 && Math.abs(a - t.y) <= t.h / 2 + 5;
}
function gt(e) {
  const a = Me(e);
  return { ...a, page: a.page === 9 ? ke.length - 1 : Math.min(a.page, 8), stars: a.stars.filter((t) => t < 10).map((t) => t === 9 ? ke.length - 1 : t) };
}
const ye = (e, a, t, i) => ({ id: e, word: a, x: i, y: 69, w: 22, h: 54, sprite: { sheet: "cast.png", cell: t, columns: 2, clip: t < 2 ? "inset(0 0 3% 0)" : void 0 } }), Y = (e, a, t, i, s = 14, o = 21) => ({ id: e, word: e, x: t, y: i, w: s, h: o, sprite: { sheet: "props.png", cell: a, columns: 3 } }), b = (e, a, t, i, s, o) => ({ id: e, word: a, x: t, y: i, w: s, h: o }), ze = {
  gail: { id: "gail", word: "Gail", x: 82, y: 72, w: 21, h: 52, image: "gail.png", kind: "girl" },
  wolf: ye("wolf", "wolf", 0, 29),
  grandma: ye("grandma", "Grandma", 1, 27),
  mom: ye("mom", "Mom", 2, 25),
  manager: ye("manager", "manager", 3, 52),
  bread: Y("bread", 0, 50, 76),
  bag: Y("bag", 1, 68, 80, 18, 25),
  soup: Y("soup", 2, 38, 74),
  phone: Y("phone", 3, 74, 69, 11, 18),
  cap: Y("cap", 4, 54, 47),
  glasses: Y("glasses", 5, 65, 65, 15, 12),
  blanket: Y("blanket", 6, 45, 76, 23, 27),
  bowl: Y("bowl", 7, 55, 76),
  map: Y("map", 8, 57, 78, 20, 27),
  hood: b("hood", "hood", 83, 53, 19, 18),
  door: b("door", "door", 11, 39, 18, 66),
  window: b("window", "window", 74, 22, 25, 35),
  left: b("left", "left", 20, 65, 18, 15),
  right: b("right", "right", 73, 65, 18, 15),
  crossing: b("crossing", "crossing", 47, 65, 50, 15),
  bird: b("bird", "bird", 17, 10, 12, 12),
  tree: b("tree", "tree", 48, 22, 24, 34),
  bench: b("bench", "bench", 24, 57, 29, 24),
  path: b("path", "path", 71, 65, 25, 22),
  trail: b("trail", "trail", 21, 63, 23, 24),
  sign: b("sign", "sign", 47, 25, 25, 21),
  mail: b("mail", "mail", 13, 31, 23, 36),
  stairs: b("stairs", "stairs", 76, 50, 25, 37),
  number: b("number", "number", 33, 24, 14, 12),
  bell: b("bell", "bell", 52, 30, 9, 14),
  bed: b("bed", "bed", 25, 44, 43, 31),
  ears: b("ears", "ears", 30, 26, 15, 10),
  eyes: b("eyes", "eyes", 30, 36, 12, 9),
  teeth: b("teeth", "teeth", 30, 43, 11, 8),
  tail: b("tail", "tail", 19, 64, 12, 19),
  away: b("away", "away", 90, 83, 15, 20),
  coat: b("coat", "coat", 28, 51, 18, 18),
  floor: b("floor", "floor", 55, 91, 20, 9)
}, De = {
  home: { name: "Gail 的家", caption: "A LITTLE RED HOOD", alt: "陽光下的紫色玄關與紅色大門", sheet: "interiors.png", cell: 0 },
  kitchen: { name: "溫暖廚房", caption: "LUNCH FOR GRANDMA", alt: "奶油色廚房、木桌和明亮窗戶", sheet: "interiors.png", cell: 1 },
  bedroom: { name: "外婆的房間", caption: "GRANDMA’S ROOM", alt: "外婆的床、拼布棉被、窗戶與門", sheet: "interiors.png", cell: 2 },
  lobby: { name: "公寓大廳", caption: "TOGETHER IS BETTER", alt: "有信箱、電梯與樓梯的公寓大廳", sheet: "interiors.png", cell: 3 },
  street: { name: "街角", caption: "STOP · LOOK · CROSS", alt: "安靜街道上的斑馬線與彩色房屋", sheet: "outdoors.png", cell: 0 },
  park: { name: "城市公園", caption: "THROUGH THE PARK", alt: "林蔭公園步道、長椅與樹上的鳥", sheet: "outdoors.png", cell: 1 },
  fork: { name: "公園岔路", caption: "STAY ON THE MAIN PATH", alt: "寬闊主步道、狹窄土路與木製指標", sheet: "outdoors.png", cell: 2 },
  entrance: { name: "外婆家門口", caption: "DING-DONG!", alt: "綠色公寓大門、門牌、門鈴與盆栽", sheet: "outdoors.png", cell: 3 }
}, ee = [
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
], Oe = {
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
De.dining = { name: "外婆的餐桌", caption: "A BETTER ENDING", alt: "陽光下的木餐桌、椅子與外婆家窗戶" };
for (const e of [21, 22, 23]) ee[e].scene = "dining";
for (const e of [21, 22, 23])
  Object.assign(ee[e].placements, { grandma: { x: 51, y: 42, w: 21, h: 50 }, wolf: { x: 22, y: 51, w: 23, h: 56 }, gail: { x: 80, y: 57, w: 22, h: 54 }, soup: { x: 44, y: 60, w: 14, h: 21 }, bowl: { x: 62, y: 62, w: 14, h: 21 }, phone: { x: 82, y: 57, w: 10, h: 17 } });
Oe[22][2] = [{ actor: "bowl", x: 62, y: 62 }];
for (const e of ee) e.words = e.words.map((a) => a === "gail" ? "Gail" : a === "grandma" ? "Grandma" : a);
ee[0].placements = { ...ee[0].placements, gail: { image: "../little-star-v1/gail-paper.png" }, hood: { image: "cape.png", x: 63, y: 62, w: 19, h: 22 } };
Oe[0][1] = [{ actor: "hood", x: 82, y: 61 }];
for (const e of [14, 15, 16, 17])
  ee[e].placements = { ...ee[e].placements, ears: { x: 30, y: 35, w: 13, h: 10 }, eyes: { x: 31, y: 41, w: 11, h: 8 }, teeth: { x: 32, y: 46, w: 10, h: 8 }, tail: { x: 22, y: 64, w: 10, h: 19 } };
const Be = {
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
}, wt = {
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
}, P = [
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
], Ge = {
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
P[0].lines[0] = "Gail is turning seven today.";
P[6].lines[0] = "Mom adds butter, sugar, and cream.";
P[6].objects.push("cream");
P[9].lines[2] = "She levels the top of the cup.";
P[9].mission = { type: "drag", answer: "flour", target: "cup", prompt: "Move the flour to the cup.", hint: "把麵粉放到量杯" };
Ge[9] = { 2: [{ actor: "flour", x: 69, y: 76, rotate: 20 }] };
P.forEach((e) => {
  ["kitchen", "party"].includes(e.scene) && (e.placements = { ...e.placements, gail: { x: 82, y: 43, w: 21, h: 52 }, mom: { x: 20, y: 40, w: 22, h: 56 } });
});
for (const e of ["plain", "frosted", "decorated", "finished"]) Be[e].word = "cake";
for (const e of P) e.words = e.words.map((a) => ["plain", "frosted", "decorated", "finished"].includes(a) ? "cake" : a);
P[22].words = ["birthday", "candle", "seven"];
P[24].words = ["gift", "care", "love"];
for (const e of P)
  e.scene === "party" && (e.placements.dad = { x: 47, y: 39, w: 32, h: 68 });
Ge[22][0] = [{ actor: "dad", x: 58, y: 39, walk: !0 }];
for (const e of P) {
  const a = e.mission, t = (i) => Be[i].word;
  a.type === "drag" && (a.prompt = `Move the ${t(a.answer)} to the ${t(a.target)}.`), a.type === "sequence" && (a.prompt = `Tap ${a.steps.map(t).join(", then ")}.`);
}
Object.assign(P[11].placements, { butter: { x: 32, y: 76 }, sugar: { x: 70, y: 76 }, whisk: { x: 84, y: 74 } });
Object.assign(P[13].placements, { milk: { x: 32, y: 76 }, flour: { x: 72, y: 76 } });
Object.assign(P[15].placements, { bowl: { x: 34, y: 76 }, pan: { x: 62, y: 78 }, spoon: { x: 82, y: 74 } });
Ge[15] = { 0: [{ actor: "bowl", x: 62, y: 70, rotate: 22 }] };
const ue = [
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
], qe = { A: "跟讀 · Read Along", B: "初階 · Early Reader", C: "進階 · Independent Reader" }, yt = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: "../little-star-v1/gail-paper.png", x: 78, y: 70, w: 20, h: 49 },
  pip: { id: "pip", word: "Pip", x: 39, y: 70, w: 33, h: 49, sprite: { sheet: "cast.png", cell: 0, columns: 2 } },
  bird: { id: "bird", word: "bird", x: 65, y: 26, w: 14, h: 21, sprite: { sheet: "cast.png", cell: 3, columns: 2, clip: "inset(0 0 0 20%)" } },
  forest: { id: "forest", word: "forest", x: 20, y: 33, w: 23, h: 35 },
  cave: { id: "cave", word: "cave", x: 25, y: 44, w: 25, h: 32 },
  rock: { id: "rock", word: "rock", x: 23, y: 49, w: 27, h: 14 },
  nest: { id: "nest", word: "nest", x: 76, y: 25, w: 17, h: 15 },
  sky: { id: "sky", word: "sky", x: 51, y: 15, w: 29, h: 21 },
  wing: { id: "wing", word: "wing", x: 27, y: 59, w: 12, h: 20 }
}, mt = Object.fromEntries([
  ["forest", "星光森林", "THE STARRY FOREST", "金色光點照亮森林小徑", 0],
  ["cave", "山谷洞穴", "PIP’S LITTLE CAVE", "綠色山谷中的小洞穴", 1],
  ["hill", "練習的小山坡", "ONE SMALL STEP", "柔軟草地、低矮石頭與山坡", 2],
  ["nest", "小鳥的家", "A LITTLE COURAGE", "大樹枝上的鳥巢與山谷", 3]
].map(([e, a, t, i, s]) => [e, { name: a, caption: t, alt: i, sheet: "scenes.png", cell: s }])), ut = ["The Starry Forest", "A crying sound", "Meet Pip", "What is wrong?", "Above the clouds", "The windy day", "I can’t do it", "One small step", "Open your wings", "A little rock", "A tiny jump", "I did it!", "A higher hill", "A little tumble", "One more time", "A gentle wind", "A baby bird", "Afraid, but ready", "Pip takes flight", "Brave little wings"], Le = ["forest", "forest", "cave", "cave", "hill", "hill", "cave", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "nest", "nest", "nest", "hill"], ft = [["forest", "quiet"], ["hear", "valley"], ["dragon", "cave"], ["wing", "sad"], ["fly", "sky"], ["wind", "afraid"], ["afraid", "try"], ["wing", "little"], ["open", "wing"], ["rock", "high"], ["jump", "safe"], ["proud", "try"], ["hill", "afraid"], ["fall", "try"], ["practice", "try"], ["wind", "glide"], ["bird", "nest"], ["afraid", "brave"], ["fly", "help"], ["brave", "believe"]], Ce = ["forest", "forest", "cave", "pip", "sky", "pip", "pip", "pip", "wing", "rock", "pip", "pip", "rock", "pip", "pip", "sky", "bird", "pip", "nest", "pip"];
function Ye(e) {
  return ue.map((a, t) => {
    const i = ["gail", ...t >= 2 ? ["pip"] : [], ...t < 2 ? ["forest"] : Le[t] === "cave" ? ["cave"] : Le[t] === "nest" ? ["bird", "nest"] : ["rock", "sky"], ...t === 8 ? ["wing"] : []], s = {};
    return (t === 4 || t === 5 || t === 15 || t === 18) && (s.pip = { x: t === 18 ? 38 : 46, y: t === 18 ? 64 : 39, sprite: { sheet: "cast.png", cell: 2, columns: 2 }, w: 39, h: 58 }), [8, 9, 10, 11, 12, 17, 19].includes(t) && (s.pip = { sprite: { sheet: "cast.png", cell: 1, columns: 2 }, w: 38, h: 57 }), (t === 9 || t === 10) && (s.pip = { ...s.pip, x: 23, y: 28 }), t === 18 && (s.bird = { x: 69, y: 28 }), { title: ut[t], scene: Le[t], lines: [...a[e]], words: ft[t], objects: i, placements: s, action: "explore", mission: t === 18 ? { type: "drag", prompt: "Help the bird reach its nest.", hint: "把小鳥帶回鳥巢；也可以先點小鳥，再點巢。", answer: "bird", target: "nest" } : { type: "find", prompt: `Find ${Ce[t] === "pip" ? "Pip" : `the ${Ce[t]}`}.`, hint: "點場景中的物件，聽聽英文。", answer: Ce[t] } };
  });
}
function _e(e) {
  const a = {}, t = (s, o, l) => {
    const h = ue[s][e], c = Math.max(0, h.findIndex((r) => o.test(r)));
    a[s] = { ...a[s] || {}, [c]: l };
  };
  t(0, /walk|follow/i, [{ actor: "gail", x: 54, y: 70, walk: !0 }]), t(1, /hear|stops/i, [{ actor: "gail", x: 61, y: 70, rotate: -5 }]), t(2, /find|discover|dragon/i, [{ actor: "gail", x: 61, y: 70, walk: !0 }]), t(3, /ask/i, [{ actor: "gail", x: 63, y: 72, rotate: -5 }]), t(4, /fly|flying/i, [{ actor: "pip", x: 65, y: 28 }]), t(5, /wind|gust/i, [{ actor: "pip", x: 46, y: 72, rotate: -12 }]), t(6, /afraid|can’t/i, [{ actor: "pip", x: 36, y: 72, rotate: -5 }]), t(7, /open/i, [{ actor: "gail", x: 64, y: 70, walk: !0 }]), t(8, /open|stretches/i, [{ actor: "pip", x: 39, y: 67, scale: 1.04 }]), t(9, /stand|climbs/i, [{ actor: "gail", x: 52, y: 70, walk: !0 }]), t(10, /jump/i, [{ actor: "pip", x: 40, y: 42 }]);
  const i = ue[10][e].length - 1;
  return a[10][i] = [{ actor: "pip", x: 48, y: 68 }], t(11, /smile|did|surprise/i, [{ actor: "pip", x: 48, y: 65, rotate: 5 }]), t(12, /hill/i, [{ actor: "gail", x: 54, y: 59, walk: !0 }, { actor: "pip", x: 28, y: 44, walk: !0 }]), t(13, /fall|tumble/i, [{ actor: "pip", x: 42, y: 72, rotate: -15 }]), t(14, /try|sits/i, [{ actor: "gail", x: 61, y: 72, walk: !0 }]), t(15, /lifts|glide/i, [{ actor: "pip", x: 65, y: 42 }]), t(16, /bird|gust/i, [{ actor: "bird", x: 69, y: 29, rotate: -10 }]), t(17, /try/i, [{ actor: "pip", x: 49, y: 65, walk: !0 }]), t(18, /flies|runs/i, [{ actor: "pip", x: 66, y: 30 }]), a[18][ue[18][e].length - 1] = [{ actor: "pip", x: 66, y: 30 }, { actor: "bird", x: 76, y: 24 }], t(19, /wings|sky|fly/i, [{ actor: "pip", x: 52, y: 43 }]), a;
}
const te = (...e) => e.map((a) => ({ text: a }));
function bt(e) {
  const a = e === "A", t = e === "C";
  return [
    { id: "dragon", kind: "choice", prompt: "Listen. Find the dragon.", audio: "dragon", options: [{ text: "", art: "bird" }, { text: "", art: "pip" }, { text: "", art: "cave" }, { text: "", art: "nest" }], answer: [1], explanation: "Pip is a little dragon." },
    { id: "wing", kind: "choice", prompt: "Listen. Find the wing.", audio: "wing", options: [{ text: "", art: "rock" }, { text: "", art: "nest" }, { text: "", art: "wing" }, { text: "", art: "bird" }], answer: [2], explanation: "Pip opens his wings to fly." },
    { id: "feeling", kind: "choice", prompt: a ? "How does Pip feel?" : "Pip remembers his fall. How does he feel?", art: "pip", options: te("hungry", "afraid", "sleepy", "angry"), answer: [1], explanation: "Pip is afraid of falling again." },
    { id: "action", kind: "choice", prompt: "What is Pip doing?", art: "jump", options: te("sleeping", "eating", "reading", "trying"), answer: [3], explanation: "Pip is trying a little jump." },
    { id: "sentence", kind: "choice", prompt: t ? "Pip is afraid, but he decides to ____." : "I am afraid, but I can ____.", art: "pip", options: te("try", "cave", "cloud", "sandwich"), answer: [0], explanation: "I am afraid, but I can try." },
    { id: "wings", kind: "choice", prompt: "Pip opens his ____.", art: "wing", options: te("books", "shoes", "wings", "doors"), answer: [2], explanation: "Pip opens his wings." },
    { id: "order", kind: "sequence", prompt: a ? "What happens first? Tap in order." : "Put Pip’s three steps in story order.", options: [{ text: a ? "Help the bird" : "Fly to help the bird", art: "bird" }, { text: "Open his wings", art: "wing" }, { text: "Try a little jump", art: "jump" }], answer: [1, 2, 0], explanation: "First, open the wings. Next, try a little jump. Last, fly to help the bird." },
    { id: "cause", kind: "choice", prompt: a ? "Why is Pip afraid?" : t ? "What made Pip stop flying after his windy flight?" : "Why did Pip stop flying?", art: "pip", options: te(...a ? ["He fell.", "He is hungry.", "He has no wings.", "He is tired."] : ["He fell and became afraid.", "He wanted to swim.", "He did not have wings.", "Gail told him to stop."]), answer: [0], explanation: "A strong wind knocked Pip down. He was safe, but the fall frightened him." },
    { id: "courage", kind: "choice", prompt: a ? "Pip helps the bird. Is he still afraid?" : "How does Pip feel before helping the bird?", art: "bird", options: te(...a ? ["No. Never afraid.", "Yes, but he can try.", "He is angry.", "He wants to sleep."] : ["He is angry with Gail.", "He is afraid but willing to try.", "He wants to sleep.", "He does not care."]), answer: [1], explanation: "Pip still feels afraid. He chooses to try and help." },
    { id: "meaning", kind: "choice", prompt: a ? "What can we do when we feel afraid?" : t ? "What does this story tell us about courage?" : "What does Pip learn?", art: "wing", options: te(...a ? ["Never try.", "Laugh at friends.", "Try one small step.", "Always hide."] : ["Only big dragons can be brave.", "Flying is always easy.", "We can try even when we are afraid.", "Dragons should never fly."]), answer: [2], explanation: "Being brave means trying even when you feel afraid. One small step can help." }
  ];
}
function Ue(e, a) {
  return e.length === a.length && e.every((t, i) => t === a[i]);
}
const Ve = [
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
], V = (e) => {
  const a = { 1: [418, 65, 418, 379], 2: [835, 45, 419, 399], 5: [842, 463, 412, 379], 6: [65, 829, 330, 425], 7: [445, 855, 390, 399], 8: [845, 853, 405, 401] };
  if (a[e]) return { sheet: "support-cast.png", cell: e, columns: 3, rect: a[e], size: 1254 };
  const t = { 0: 0, 2: 3, 3: 1, 4: 2 }[e] || 0;
  return { sheet: "ella-final.png", cell: t, columns: 2, rect: [t % 2 * 611, t < 2 ? 0 : 651, 611, t < 2 ? 651 : 636], size: [1222, 1287] };
}, _ = (e) => ({ sheet: "props.png", cell: e, columns: 3 }), Ke = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: "../little-star-v1/gail-paper.png", x: 27, y: 62, w: 23, h: 55.2 },
  ella: { id: "ella", word: "princess", sprite: V(0), x: 73, y: 64, w: 35, h: 52.5 },
  caregiver: { id: "caregiver", word: "caregiver", sprite: V(6), x: 87, y: 50, w: 25, h: 37.5 },
  boy: { id: "boy", word: "friend", sprite: V(7), x: 15, y: 69, w: 26, h: 39 },
  friend: { id: "friend", word: "friend", sprite: V(8), x: 86, y: 69, w: 26, h: 39 },
  gift: { id: "gift", word: "gift", sprite: _(0), x: 47, y: 72, w: 20, h: 30 },
  block: { id: "block", word: "block", sprite: _(1), x: 50, y: 79, w: 12, h: 18 },
  tower: { id: "tower", word: "tower", sprite: _(2), x: 50, y: 68, w: 27, h: 40.5 },
  blocks: { id: "blocks", word: "blocks", sprite: _(3), x: 50, y: 79, w: 30, h: 30 },
  pinwheel: { id: "pinwheel", word: "pinwheel", sprite: _(4), x: 50, y: 62, w: 20, h: 30 },
  hat: { id: "hat", word: "hat", sprite: _(5), x: 47, y: 68, w: 19, h: 28.5 },
  basket: { id: "basket", word: "basket", sprite: _(6), x: 51, y: 79, w: 22, h: 33 },
  orange: { id: "orange", word: "orange", sprite: _(7), x: 55, y: 84, w: 11, h: 16.5 },
  chair: { id: "chair", word: "chair", sprite: _(8), x: 52, y: 73, w: 22, h: 33 },
  castle: { id: "castle", word: "castle", x: 28, y: 29, w: 34, h: 44 },
  window: { id: "window", word: "window", x: 72, y: 25, w: 30, h: 36 },
  market: { id: "market", word: "market", x: 26, y: 32, w: 36, h: 28 },
  rain: { id: "rain", word: "rain", x: 70, y: 23, w: 30, h: 26 }
}, kt = {
  courtyard: { name: "城堡庭院", caption: "A QUIET CASTLE", alt: "象牙白城堡與花園，前方是寬闊石板路", sheet: "environments.png", cell: 0 },
  room: { name: "城堡遊戲室", caption: "A PLACE FOR A FRIEND", alt: "粉色窗簾、拱窗與寬闊遊戲地毯", sheet: "environments.png", cell: 1 },
  market: { name: "市集廣場", caption: "BETTER TOGETHER", alt: "陽光下的水果攤與寬闊市集廣場", sheet: "environments.png", cell: 2 },
  awning: { name: "雨棚下", caption: "A LITTLE SHARED JOY", alt: "雨中的市集，棚下有乾燥空地與小桌子", sheet: "environments.png", cell: 3 }
}, xt = ["A quiet castle", "The princess at the window", "So many gifts", "A surprise", "Can I help?", "Down come the blocks", "More surprises", "Please stop", "Time to listen", "A friend to play with", "Out together", "A rolling orange", "Helping hands", "A little pinwheel", "Here comes the rain", "Let us fix it", "A funny paper hat", "A little laugh", "Everyone can help", "A place beside me"], vt = ["courtyard", ...Array(9).fill("room"), "courtyard", "market", "market", "market", "awning", "awning", "awning", "awning", "room", "room"], St = [["castle", "listen"], ["princess", "window"], ["gift", "lonely"], ["surprise", "smile"], ["blocks", "help"], ["blocks", "help"], ["surprise", "play"], ["listen"], ["listen", "friend"], ["play", "together"], ["basket", "market"], ["orange", "help"], ["orange", "basket", "together"], ["pinwheel", "share"], ["rain", "pinwheel"], ["help", "together"], ["surprise", "play"], ["laugh", "smile"], ["friend", "share", "blocks"], ["friend", "smile", "together"]], Tt = [["castle"], ["window"], ["gift", "blocks"], ["gift", "blocks"], ["tower", "block"], ["blocks", "block"], ["hat", "pinwheel"], ["hat"], ["window"], ["window"], ["basket", "castle", "caregiver"], ["orange", "market", "caregiver"], ["orange", "basket", "caregiver"], ["pinwheel", "caregiver"], ["rain", "pinwheel", "caregiver"], ["pinwheel", "caregiver"], ["hat", "pinwheel", "caregiver"], ["hat", "caregiver"], ["blocks", "block", "boy", "friend"], ["chair", "blocks"]], $e = ["castle", "window", "gift", "gift", "block", "block", "hat", "ella", "ella", "ella", "basket", "orange", "orange", "pinwheel", "rain", "pinwheel", "hat", "ella", "block", "chair"];
function Je(e) {
  return Ve.map((a, t) => {
    const i = {};
    [1, 2, 3].includes(t) && (i.ella = { sprite: V(1), y: 66 }), [4, 5, 12, 15].includes(t) && (i.ella = { sprite: V(2), w: 27, h: 38.6, y: 69 }), t === 7 && (i.ella = { sprite: V(3) }), t >= 17 && (i.ella = { sprite: V(4) }), [8, 9, 15, 18].includes(t) && (i.gail = { image: "gail-listening-v2.png", sprite: void 0, w: 24, h: 38.7, y: 69 }), t === 0 && (i.gail = { x: 76 }), [10, 11, 12, 13, 14, 15, 16, 17].includes(t) && (i.ella = { ...i.ella, x: 62 }, i.gail = { ...i.gail, x: 24 }), t === 11 && (i.orange = { x: 44, y: 82 }), t === 12 && (i.orange = { x: 37, y: 86 }), (t === 4 || t === 5) && (i.block = { x: 34, y: 84 }), t === 14 && (i.pinwheel = { x: 45, y: 69 }), t === 15 && (i.pinwheel = { x: 45, y: 72 }), t === 18 && (i.ella = { sprite: V(5), w: 26, h: 35.9, y: 70 }, i.gail = { ...i.gail, x: 36 }, i.ella = { ...i.ella, x: 65 }, i.blocks = { x: 50, y: 86, w: 24, h: 24 }, i.block = { x: 51, y: 74 });
    let s = { type: "find", prompt: `Find the ${Ke[$e[t]].word}.`, hint: "點場景中的物件，聽聽英文。", answer: $e[t] };
    return [4, 5, 18].includes(t) && (s = { type: "drag", prompt: "Add a block. Help build together.", hint: "將小積木拖到積木堆；也可以先點小積木，再點積木堆。", answer: "block", target: t === 4 ? "tower" : "blocks" }), t === 12 && (s = { type: "drag", prompt: "Put the orange in the basket.", hint: "把橘子拖進籃子；也可以先點橘子，再點籃子。", answer: "orange", target: "basket" }), t === 13 && (s = { type: "drag", prompt: "Share the pinwheel with Ella.", hint: "把風車拖給 Ella，或依序點風車、Ella。", answer: "pinwheel", target: "ella" }), t === 15 && (s = { type: "sequence", prompt: "Tap Ella, then the pinwheel.", hint: "先點 Ella，再點風車，一起修好。", answer: "pinwheel", steps: ["ella", "pinwheel"] }), { title: xt[t], scene: vt[t], lines: [...a[e]], words: St[t], objects: [.../* @__PURE__ */ new Set(["gail", ...t === 0 ? [] : ["ella"], ...Tt[t]])], placements: i, mission: s, action: "explore" };
  });
}
function Xe(e) {
  const a = {}, t = (i, s, o) => {
    const l = Math.max(0, Ve[i][e].findIndex((h) => s.test(h)));
    a[i] = { ...a[i], [l]: o };
  };
  return t(0, /castle/i, [{ actor: "gail", x: 47, y: 65, walk: !0 }]), t(1, /Gail/i, [{ actor: "gail", x: 43, y: 65, walk: !0 }]), t(3, /blocks|idea/i, [{ actor: "gail", x: 37, y: 65, walk: !0 }]), t(4, /build/i, [{ actor: "block", x: 50, y: 49 }]), t(5, /picks|picks up/i, [{ actor: "block", x: 64, y: 71 }]), t(6, /hat/i, [{ actor: "hat", x: 27, y: 43, rotate: -12 }]), t(7, /puts|stops/i, [{ actor: "hat", x: 46, y: 80, rotate: 12 }]), t(8, /sits/i, [{ actor: "gail", x: 39, y: 68 }]), t(9, /together/i, [{ actor: "gail", x: 43, y: 68 }]), t(10, /walk/i, [{ actor: "gail", x: 41, y: 65, walk: !0 }, { actor: "ella", x: 67, y: 64, walk: !0 }, { actor: "caregiver", x: 85, y: 50, walk: !0 }]), t(11, /roll/i, [{ actor: "orange", x: 35, y: 83, rotate: 100 }]), t(11, /runs/i, [{ actor: "ella", x: 47, y: 65, walk: !0 }]), t(12, /basket/i, [{ actor: "orange", x: 51, y: 77 }]), t(13, /turns|share/i, [{ actor: "pinwheel", x: 60, y: 62, rotate: 20 }]), t(14, /hurry|wet/i, [{ actor: "gail", x: 31, y: 65, walk: !0 }, { actor: "ella", x: 61, y: 65, walk: !0 }, { actor: "pinwheel", x: 46, y: 72, rotate: 35 }]), t(15, /fix|folds/i, [{ actor: "pinwheel", x: 45, y: 72, rotate: 0 }]), t(16, /hat/i, [{ actor: "hat", x: 24, y: 42, rotate: -13 }]), t(16, /slips|tickles/i, [{ actor: "hat", x: 24, y: 48, rotate: -18 }]), t(17, /sneeze|Achoo/i, [{ actor: "hat", x: 33, y: 51, rotate: 25 }]), t(18, /build|adds/i, [{ actor: "block", x: 50, y: 78 }]), t(19, /chair|place/i, [{ actor: "chair", x: 56, y: 73 }]), a;
}
const Gt = (e) => `images/story/princess-v1/quiz/scene-${String(e).padStart(2, "0")}.png`, N = (e, a, t, i, s, o) => ({ id: e, kind: "choice", prompt: a, image: Gt(t), imageAlt: "故事插圖：" + ["Ella 坐在窗邊", "Ella 撿起積木", "Gail 傾聽 Ella", "兩人收橘子", "兩人修風車", "朋友一起玩積木"][t - 1], options: i.map((l) => ({ text: l })), answer: [s], explanation: o });
function At(e) {
  const a = e === "A", t = e === "C", i = [
    N("princess", "Who is Ella?", 1, ["a seller", "a princess", "a dragon", "a teacher"], 1, "Ella is a princess."),
    N("lonely", a ? "How does Ella feel at first?" : "Ella has many gifts. How does she feel at first?", 1, ["hungry", "angry", "lonely", "sleepy"], 2, "Ella feels lonely because she wants a friend to play with."),
    N("blocks", "What is on the rug?", 2, ["blocks", "oranges", "baskets", "pinwheels"], 0, "There are blocks on the rug."),
    N("listen", a ? "What does Gail do?" : "What does Gail do after Ella asks her to stop?", 3, ["She runs away.", "She makes more noise.", "She buys a gift.", "She listens."], 3, "Gail stops and listens to Ella."),
    N("orange", "What are they putting in the basket?", 4, ["gifts", "oranges", "blocks", "hats"], 1, "They put oranges in the basket."),
    N("pinwheel", "What are they fixing?", 5, ["a chair", "a window", "a pinwheel", "a basket"], 2, "They fix the wet pinwheel together."),
    N("wish", a ? "What does Ella want?" : "What does Ella want more than another gift?", 3, ["a friend to play with", "a bigger castle", "more surprises", "a new crown"], 0, "Ella wants a friend to play with."),
    N("rain", a ? "Why is the pinwheel wet?" : "Why does the pinwheel stop turning?", 5, ["It is too sunny.", "A block falls on it.", "Gail paints it.", "Rain makes the paper wet."], 3, "The rain makes the paper wet, so they repair it together."),
    N("laugh", t ? "Why does Ella laugh naturally in the story?" : "Why does Ella begin to laugh?", 6, ["She receives a crown.", "Gail sneezes under a funny hat.", "Someone tells her to smile.", "The castle is empty."], 1, "Gail’s funny hat slips onto her nose. She sneezes, and they laugh together."),
    N("meaning", a ? "What helps a friend?" : t ? "What does Gail learn about friendship?" : "What does Gail learn?", 6, ["Always choosing for them.", "Buying more and more gifts.", "Listening and playing together.", "Making them smile."], 2, "Friends listen, share, and choose things together.")
  ], s = [
    [["Ella runs in the rain.", "Ella sits by the window.", "Ella buys an orange.", "Ella builds a tower."], 1, "Ella sits by the window at the beginning."],
    [["Ella opens a gift.", "Ella holds a pinwheel.", "Ella picks up a block.", "Ella puts on a hat."], 2, "The tower falls, and Ella picks up a block."],
    [["Gail listens to Ella.", "Gail runs to the market.", "Gail collects oranges.", "Gail opens a gift."], 0, "Gail sits down and listens to her friend."],
    [["They build a castle.", "They repair a pinwheel.", "They put on paper hats.", "They put oranges in a basket."], 3, "The friends help collect the oranges."],
    [["They pick up blocks.", "They fix the pinwheel.", "They buy oranges.", "They open gifts."], 1, "Under the awning, they fix the wet pinwheel."],
    [["Ella sits alone.", "They run in the rain.", "The friends play together.", "They collect oranges."], 2, "Back at the castle, everyone joins in."]
  ], o = [["Run in the rain", "Sit by the window", "Buy an orange", "Build a tower"], ["Open a gift", "Hold a pinwheel", "Pick up a block", "Put on a hat"], ["Listen to a friend", "Run to the market", "Collect oranges", "Open a gift"], ["Build a castle", "Fix a pinwheel", "Put on hats", "Collect oranges"], ["Pick up blocks", "Fix a pinwheel", "Buy oranges", "Open gifts"], ["Sit alone", "Run in the rain", "Play together", "Collect oranges"]], l = [
    ["Ella runs through the rain outside.", "Ella sits quietly beside the castle window.", "Ella buys fruit from the seller.", "Ella adds a block to the tower."],
    ["Ella opens another wrapped gift.", "Ella holds the spinning pinwheel.", "Ella picks up a block after the tower falls.", "Ella wears the new paper hat."],
    ["Gail listens while Ella shares her wish.", "Gail hurries alone to the market.", "Gail gathers fruit from the ground.", "Gail opens a surprise for Ella."],
    ["They build a castle out of blocks.", "They fold the wet pinwheel back into shape.", "They try on their paper hats.", "They collect oranges together in a basket."],
    ["They rebuild the fallen block tower.", "They work together to repair the wet pinwheel.", "They buy fruit for a picnic.", "They open the gifts in Ella’s room."],
    ["Ella sits alone among her many gifts.", "The friends hurry through the rain.", "The friends laugh and build with blocks together.", "They return oranges to the market seller."]
  ];
  return [...i, ...s.map(([h, c, r], p) => N("picture-" + (p + 1), a ? "Look. What happens?" : t ? "Which sentence best matches this scene?" : "Which sentence matches the picture?", p + 1, a ? o[p] : t ? l[p] : h, c, r))];
}
function de() {
  return { index: 0, answers: [], attempted: [], complete: !1 };
}
function Ne(e, a) {
  return a.filter((t, i) => e.attempted[i] && Ue(e.answers[i] || [], t.answer)).length;
}
const Qe = { pip: "小龍", bird: "小鳥", wing: "翅膀", gail: "Gail", cave: "洞穴", sky: "天空", rock: "石頭", nest: "鳥巢", jump: "小龍練習跳躍" };
function Ie(e) {
  const a = document.createElement("span");
  a.className = "quiz-art art-" + e, a.setAttribute("role", "img"), a.setAttribute("aria-label", Qe[e]);
  const t = document.createElement("span");
  t.className = "quiz-art-image", a.append(t);
  const i = { pip: 0, wing: 1, jump: 1, bird: 3 }[e];
  if (i !== void 0)
    t.style.backgroundImage = "url('images/story/dragon-v1/cast.png')", t.style.backgroundSize = "200% 200%", t.style.backgroundPosition = `${i % 2 * 100}% ${Math.floor(i / 2) * 100}%`;
  else if (e === "gail") {
    const s = document.createElement("img");
    s.src = "images/story/little-star-v1/gail-paper.png", s.className = "paper-girl", s.alt = "", t.append(s);
  } else
    t.style.backgroundImage = "url('images/story/dragon-v1/scenes.png')", t.style.backgroundSize = e === "nest" ? "500% 500%" : "200% 200%", t.style.backgroundPosition = e === "cave" ? "100% 0" : e === "nest" ? "94% 66%" : "0 100%";
  return a;
}
function Et(e, a, t, i) {
  const s = (c, r = "", p = "") => {
    const m = document.createElement(c);
    return m.className = r, m.textContent = p, m;
  }, o = (c, r, p) => {
    const m = document.createElement("button");
    return m.className = "wood-button", m.textContent = c, m.setAttribute("aria-label", r), m.onclick = p, m;
  }, l = s("section", "story-quiz");
  l.setAttribute("aria-label", "書末小測驗"), e.append(l);
  function h() {
    if (l.replaceChildren(), l.append(s("span", "eyebrow", `STORY CHALLENGE · LEVEL ${i.level}`)), t.complete) {
      const f = Ne(t, a);
      if (i.ending) {
        const j = document.createElement("img");
        j.className = "quiz-ending-image", j.src = i.ending.image, j.alt = "Gail 與 Ella 分享風車", l.append(j);
      } else l.append(Ie("wing"));
      l.append(s("h1", "", i.ending?.title || "Brave Little Dragon"), s("p", "", `完成了！答對 ${f} / ${a.length} 題`), s("p", "", i.ending?.line || "Try once. Try twice. Spread your wings—and touch the sky!"));
      const E = s("div", "quiz-actions");
      E.append(o("再試一次", "重新測驗", () => {
        Object.assign(t, de()), h();
      }), o("回故事", "回到故事", i.back)), l.append(E);
      return;
    }
    const c = a[t.index];
    let r = [...t.answers[t.index] || []], p = !!t.attempted[t.index];
    l.append(s("div", "quiz-count", `${t.index + 1} / ${a.length}`));
    const m = s("h1", "", c.prompt);
    l.append(m);
    const G = o("♫", "朗讀題目", () => i.say(c.audio || c.prompt));
    if (G.classList.add("quiz-listen"), l.append(G), l.classList.toggle("scene-question", !!c.image), c.image) {
      const f = document.createElement("img");
      f.className = "quiz-scene-image", f.src = c.image, f.alt = c.imageAlt || "故事場景", l.append(f);
    } else c.art && l.append(Ie(c.art));
    const C = s("div", "quiz-options" + (c.options.every((f) => f.art) ? " picture-options" : ""));
    c.kind === "sequence" && (C.style.gridTemplateColumns = `repeat(${c.options.length},minmax(0,1fr))`);
    const I = s("p", "quiz-feedback");
    I.setAttribute("role", "status");
    const D = o("提交答案", "提交答案", () => {
      if (!p) {
        r.length === c.answer.length && nt();
        return;
      }
      t.index === a.length - 1 ? (t.complete = !0, i.save(Ne(t, a))) : t.index++, h();
    });
    function se() {
      D.textContent = p ? t.index === a.length - 1 ? "完成 →" : "下一題 →" : "提交答案", D.setAttribute("aria-label", p ? "下一題" : "提交答案"), D.disabled = !p && r.length !== c.answer.length, Array.from(C.children).forEach((f, E) => {
        const j = f;
        j.setAttribute("aria-pressed", String(r.includes(E))), j.classList.toggle("selected-answer", !p && r.includes(E)), j.classList.toggle("correct", p && c.kind === "choice" && c.answer.includes(E)), j.classList.toggle("incorrect", p && c.kind === "choice" && r.includes(E) && !c.answer.includes(E)), c.kind === "sequence" && r.includes(E) ? j.dataset.order = String(r.indexOf(E) + 1) : delete j.dataset.order;
      });
    }
    function nt() {
      t.answers[t.index] = [...r], t.attempted[t.index] = !0, p = !0;
      const f = Ue(r, c.answer);
      I.textContent = (f ? "✓ Great! " : "再看看：") + c.explanation, i.say(I.textContent.replace("再看看：", "Let’s learn. ")), se();
    }
    c.options.forEach((f, E) => {
      const j = o(f.text, f.text || `選擇${f.art ? Qe[f.art] : E + 1}`, () => {
        const lt = f.text || (f.art === "pip" ? "dragon" : f.art === "jump" ? "jump" : f.art === "gail" ? "Gail" : f.art) || "";
        i.say(lt), !p && (c.kind === "sequence" ? r = r.includes(E) ? r.filter((ct) => ct !== E) : [...r, E] : r = [E], t.answers[t.index] = [...r], I.textContent = c.kind === "sequence" ? "依序選圖，再提交；再點已選圖卡可取消。" : "已選取，按「提交答案」確認。", se());
      });
      j.className = "quiz-option", f.art && j.prepend(Ie(f.art)), C.append(j);
    }), se(), l.append(C, I), p && (I.textContent = c.explanation);
    const We = s("div", "quiz-actions");
    We.append(o("← 故事", "回到故事", i.back), D), l.append(We);
  }
  h();
}
function Lt(e) {
  return e.trim() ? [{ text: e, lang: "en-US", start: 0 }] : [];
}
const Ct = {
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
function It(e, a) {
  return Math.max(3200, Math.min(6500, e.trim().split(/\s+/).length * 460)) * 1;
}
const y = document.querySelector("#little-star"), v = location.pathname.endsWith("red-hood-storybook.html") || new URLSearchParams(location.search).get("book") === "red-hood", S = location.pathname.endsWith("birthday-storybook.html"), $ = location.pathname.endsWith("dragon-storybook.html"), L = location.pathname.endsWith("princess-storybook.html"), z = $ || L;
let k = "B";
try {
  const e = localStorage.getItem("gms-reading-level");
  (e === "A" || e === "B" || e === "C") && (k = e);
} catch {
}
const Ze = { A: de(), B: de(), C: de() }, Z = v || S || z;
let w = L ? Je(k) : $ ? Ye(k) : S ? P : v ? ee : ke, le = L ? Ke : $ ? yt : S ? Be : v ? ze : ht, ie = L ? kt : $ ? mt : S ? wt : v ? De : dt, et = L ? Xe(k) : $ ? _e(k) : S ? Ge : v ? Oe : Ct;
const ne = L ? "learning-planet-princess-v1" : $ ? "learning-planet-dragon-v1" : S ? "learning-planet-birthday-v1" : v ? "learning-planet-red-hood-v1" : "learning-planet-little-star-v2", jt = L ? "Gail and the Princess Who Forgot to Smile" : $ ? "Gail and the Little Dragon Who Forgot to Fly" : S ? "Gail’s Birthday Cake" : v ? "Gail and the Big Bad Wolf" : "Where Is My Star?";
y.classList.toggle("red-hood-book", Z);
y.classList.toggle("cake-book", S);
y.classList.toggle("dragon-book", z);
y.classList.toggle("princess-book", L);
y.dataset.level = k;
document.title = jt + " · 學習星球英文繪本";
let T = Me(null);
try {
  const e = localStorage.getItem(ne);
  T = e === null && !Z ? gt(localStorage.getItem("learning-planet-little-star-v1")) : Me(e, w.length);
} catch {
}
let n = T.page, A = "cover", Q = "listen", H = !1, re = !1, pe = 1;
try {
  const e = Number(localStorage.getItem("gms-playback-multiplier-v2"));
  [1.2, 1, 0.9, 0.8, 0.7, 0.6].includes(e) && (pe = e);
} catch {
}
let W = 0, R = !1, B = !1, He = !1, oe = !1, tt = !1, xe = "", M = 0, u, me, g, U, he, fe;
const ve = /* @__PURE__ */ new Set(), O = L ? "images/story/princess-v1/" : $ ? "images/story/dragon-v1/" : S ? "images/story/birthday-v1/" : v ? "images/story/red-hood-v1/" : "images/story/little-star-v1/";
function ge(e, a) {
  const t = setTimeout(() => {
    ve.delete(t), e();
  }, a);
  ve.add(t);
}
function Ae() {
  T.page = n;
  try {
    localStorage.setItem(ne, JSON.stringify(T));
  } catch {
  }
}
function d(e, a = "", t = "") {
  const i = document.createElement(e);
  return i.className = a, i.textContent = t, i;
}
function x(e, a, t, i = "wood-button") {
  const s = d("button", i, e);
  return s.type = "button", s.setAttribute("aria-label", a), s.title = a, s.onclick = t, s;
}
const we = /* @__PURE__ */ new Set();
function at() {
  we.forEach((e) => e.cancel()), we.clear();
}
function qt(e) {
  const a = W;
  if ($) {
    const o = g.querySelector("[data-object=pip] .sprite-art"), l = w[n].lines[e];
    o && /open.*wing|stretches.*wide|spread.*wing/i.test(l) && (o.style.backgroundPosition = "100% 0%", o.style.backgroundSize = "200% 200%"), o && (n === 18 || /glides|flies|take.*sky|reach.*sky|meet.*sky|fly again/i.test(l)) && (o.style.backgroundPosition = "0% 100%", o.style.backgroundSize = "180% 200%");
  }
  const t = et[n]?.[e] || [];
  v && n === 20 && e === 1 && Re(!1);
  const i = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : It(w[n].lines[e]) / (0.9 * pe), s = [];
  for (const o of t) {
    const l = g.querySelector(`[data-object="${o.actor}"]`);
    if (!l) continue;
    const h = getComputedStyle(l), c = l.animate([{ left: h.left, top: h.top, transform: h.transform }, { left: o.x + "%", top: o.y + "%", transform: `translate(-50%,-50%) rotate(${o.rotate || 0}deg) scale(${o.scale || 1})` }], { duration: i, easing: "ease-in-out", fill: "forwards" });
    we.add(c), s.push(c.finished.catch(() => {
    }));
    const r = l.querySelector("img,.sprite-art");
    if (o.walk && r) {
      const p = parseFloat(h.left) / g.clientWidth * 100;
      Math.abs(o.x - p) > 0.5 && (r.style.scale = "", r.style.transform = `scaleX(${o.x < p ? -1 : 1})`);
    }
    if (o.walk && r && i) {
      const p = Math.max(4, Math.round(i / 520)), m = r.animate([{ transform: "translateY(0) rotate(-2deg)" }, { transform: "translateY(-4px) rotate(2deg)", offset: 0.5 }, { transform: "translateY(0) rotate(-2deg)" }], { duration: i / p, iterations: p, easing: "ease-in-out" });
      we.add(m), s.push(m.finished.catch(() => {
      }));
    }
  }
  return Promise.all(s).then(() => {
    if (a === W) {
      if (S) {
        it(e);
        return;
      }
      if (v) {
        if (n === 0 && e === 1) {
          const o = g.querySelector("[data-object=gail] img");
          o && (o.src = O + "gail.png", o.classList.remove("paper-girl"));
          const l = g.querySelector("[data-object=hood]");
          l.querySelector("img").style.opacity = "0", l.style.left = "82%", l.style.top = "61%";
        }
        if (n === 0 && e === 2) {
          const o = g.querySelector("[data-object=hood]");
          o.style.left = "61%";
        }
        n === 11 && e === 2 && Re(!0);
      }
    }
  });
}
function Re(e) {
  const a = g.querySelector("[data-object=wolf]");
  if (!a) return;
  const t = a.querySelector("img,.sprite-art"), i = t?.style.scale || "1 1";
  if (t?.remove(), e) {
    const s = d("img");
    s.src = O + "wolf-dressed.png", s.alt = "", s.style.scale = i, a.prepend(s), a.classList.add("wardrobe-wolf");
  } else {
    const o = Ee({ ...ze.wolf, ...w[n].placements?.wolf }).querySelector(".sprite-art");
    o.style.scale = i, a.prepend(o), a.classList.remove("wardrobe-wolf");
  }
  for (const s of ["cap", "glasses", "blanket"]) g.querySelector(`[data-object=${s}]`)?.classList.toggle("costume-hidden", e);
}
function Pt() {
  if (n === 0 || n === 11 || n === 20)
    for (const e of w[n].objects)
      g.querySelector(`[data-object=${e}]`)?.replaceWith(Ee(J(e)));
}
function st(e) {
  if (e.querySelector(".gail-apron")) return;
  const a = d("img", "gail-apron");
  a.src = O + "apron.svg", a.alt = "", e.append(a);
}
function Mt() {
  for (const e of w[n].objects)
    g.querySelector(`[data-object=${e}]`)?.replaceWith(Ee(J(e)));
  g.querySelector(".candle-flame")?.remove();
}
function it(e) {
  if (n === 8 && e >= 1) {
    const i = g.querySelector("[data-object=gail]");
    i && st(i), g.querySelector("[data-object=apron]")?.classList.add("applied-ingredient");
  }
  n === 11 && e >= 1 && g.querySelector("[data-object=bowl]")?.classList.add("has-batter");
  const t = { 19: ["plain", 1], 20: ["frosted", 2], 21: ["decorated", 3] }[n];
  if (t && e >= (n === 21 ? 2 : 1)) {
    const i = g.querySelector(`[data-object=${t[0]}] .sprite-art`);
    if (i) {
      const l = t[1];
      i.style.backgroundPosition = `${l % 2 * 100}% ${Math.floor(l / 2) * 100}%`, i.style.backgroundSize = `200% ${l > 1 ? 188 : 200}%`;
    }
    const s = n === 19 ? "spatula" : n === 20 ? "strawberries" : "candle", o = g.querySelector(`[data-object=${s}]`);
    o && o.classList.add("applied-ingredient");
  }
  n === 22 && e >= 1 && !g.querySelector(".candle-flame") && g.querySelector("[data-object=finished]")?.append(d("span", "candle-flame")), n === 23 && e === 0 && g.querySelector(".candle-flame")?.remove();
}
function F() {
  H = !1, W++, at(), window.speechSynthesis?.cancel(), R = !1, B = !1, y.querySelectorAll(".spoken,.current-line").forEach((e) => e.classList.remove("spoken", "current-line")), X();
}
function X() {
  const e = y.querySelector("[data-whole-book]");
  e && (e.textContent = H ? B ? "▶" : "Ⅱ" : "▶", e.setAttribute("aria-label", H ? B ? "繼續整本朗讀" : "暫停整本朗讀" : z ? "依目前難度朗讀整本" : "自動朗讀整本"), e.setAttribute("aria-pressed", String(H))), he && (he.textContent = R ? B ? "▶ Continue" : "Ⅱ Pause" : Q === "self" ? "✓ Done · 聽示範" : "▶ Read to me", he.setAttribute("aria-label", R ? B ? "繼續朗讀" : "暫停朗讀" : Q === "self" ? "讀好了，聽示範" : "開始英文朗讀"));
}
function ot(e, a, t, i, s) {
  const o = Lt(e);
  let l = 0;
  const h = () => {
    if (a !== W) return;
    const c = o[l++];
    if (!c) {
      t();
      return;
    }
    const r = new SpeechSynthesisUtterance(c.text);
    r.lang = c.lang, r.rate = 0.9 * pe;
    const p = speechSynthesis.getVoices(), m = p.find((G) => G.lang === c.lang) || p.find((G) => /^en[-_]/i.test(G.lang));
    m && (r.voice = m), r.onstart = () => {
      a === W && s?.(c.start);
    }, r.onboundary = (G) => {
      a === W && G.name === "word" && s?.(c.start + G.charIndex);
    }, r.onend = h, r.onerror = () => {
      a === W && i();
    }, speechSynthesis.speak(r);
  };
  h();
}
function ae(e, a) {
  if (F(), He) {
    a?.();
    return;
  }
  if (!("speechSynthesis" in window)) {
    u.textContent = "此裝置不支援語音，可以點字閱讀。", a?.();
    return;
  }
  ot(e, W, () => a?.(), () => {
    u.textContent = "語音暫時無法播放，仍可閱讀與探索。", a?.();
  });
}
function ce(e = !1) {
  if (R) {
    B = !B, B ? speechSynthesis.pause() : speechSynthesis.resume(), we.forEach((s) => {
      B && s.playState === "running" ? s.pause() : !B && s.playState === "paused" && s.play();
    }), X();
    return;
  }
  if (F(), H = e, He) {
    u.textContent = "請開啟右上角聲音，再聽故事。";
    return;
  }
  if (!("speechSynthesis" in window)) {
    u.textContent = "此裝置不支援語音，可使用自己讀模式。";
    return;
  }
  v && Pt(), (S || z) && Mt(), R = !0, X();
  const a = W;
  let t = 0;
  const i = () => {
    if (a !== W) return;
    if (t >= w[n].lines.length) {
      if (R = !1, X(), y.querySelectorAll(".spoken,.current-line").forEach((l) => l.classList.remove("spoken", "current-line")), H)
        if (n < w.length - 1) {
          R = !0, X();
          const l = () => {
            if (!(a !== W || !H)) {
              if (B) {
                ge(l, 100);
                return;
              }
              n++, q(), ce(!0);
            }
          };
          ge(l, 1500);
        } else
          H = !1, X(), u.textContent = z ? "The end! 整本讀完了，可以點右上角鉛筆做小測驗。" : "The end! 整本讀完了。";
      else u.textContent = "Now explore! 點場景，發現單字。";
      return;
    }
    const s = fe.children[t];
    y.querySelectorAll(".spoken,.current-line").forEach((l) => l.classList.remove("spoken", "current-line")), s.classList.add("current-line");
    let o;
    ot(w[n].lines[t], a, () => {
      (o || Promise.resolve()).then(() => {
        a === W && (t++, i());
      });
    }, () => {
      at(), H = !1, R = !1, X(), u.textContent = "語音暫時無法播放，試試點單字或自己讀。";
    }, (l) => {
      o || (o = qt(t)), s.querySelectorAll("[data-start]").forEach((h) => {
        const c = Number(h.dataset.start), r = l >= c && l < c + (h.textContent?.length || 0);
        h.classList.toggle("spoken", r), r && K(h.textContent?.replace(/[^a-z]/gi, "").toLowerCase() || "");
      });
    });
  };
  i();
}
function K(e) {
  e = w[n].objects.find((t) => t === e || le[t].word.toLowerCase() === e.toLowerCase()) || e;
  const a = g?.querySelector(`[data-object="${e}"]`);
  a && (a.classList.add("glow"), ge(() => a.classList.remove("glow"), 1300));
}
function J(e) {
  const a = { ...le[e], ...w[n].placements?.[e] };
  return S || z ? a : v ? (e === "wolf" && [14, 15, 16, 17, 20].includes(n) && (a.image = "wolf-dressed.png", a.sprite = void 0), a) : (e === "star" && w[n].star && ([a.x, a.y] = w[n].star), e === "gail" && w[n].scene === "garden" ? (a.x = 55, a.y = 73) : e === "gail" && w[n].scene !== "room" && (a.x = 85, a.y = 79, a.w = 16, a.h = 38), a);
}
function je(e, a) {
  e.style.left = a.x + "%", e.style.top = a.y + "%", e.style.width = a.w + "%", e.style.height = a.h + "%";
}
function Se(e) {
  e = e.toLowerCase() === "gail" ? "Gail" : e.toLowerCase() === "grandma" ? "Grandma" : e, e.toLowerCase() === "star" && g?.querySelector("[data-object=star]")?.classList.add("found-star"), T.words.includes(e) || (T.words.push(e), Ae());
}
function rt(e) {
  const a = le[e];
  if (!a) return;
  Se(a.word), K(e);
  const t = g.querySelector(`[data-object="${e}"]`);
  t && (t.classList.add("show-label"), ge(() => t.classList.remove("show-label"), 2200), g.style.transformOrigin = `${t.style.left} ${t.style.top}`, g.classList.add("peek"), ge(() => g.classList.remove("peek"), 1400)), u.textContent = a.word, ae(a.word);
}
function be() {
  if (!T.stars.includes(n)) {
    T.stars.push(n);
    for (const e of w[n].words) Se(e);
  }
  Ae(), xe = "", U.classList.add("solved"), U.replaceChildren(d("span", "mission-star", "★"), d("div", "", "Lovely! 任務完成")), y.querySelectorAll("[data-page]").forEach((e) => {
    Number(e.dataset.page) === n && e.classList.add("earned");
  }), u.textContent = "Great! 你幫故事往前走了一步。", ae("Great!"), Ot();
}
function Ot() {
  if (Z) {
    S && it(2);
    const o = w[n].mission;
    if (K(o.answer), o.type === "drag") {
      const l = g.querySelector(`[data-object="${o.answer}"]`);
      if (l) {
        const h = J(o.target);
        l.style.left = h.x + "%", l.style.top = h.y + "%";
      }
    }
    return;
  }
  const e = w[n].action;
  g.classList.add("action-" + e);
  const a = g.querySelector('[data-object="star"]'), t = g.querySelector('[data-object="gail"]'), i = g.querySelector('[data-object="cat"]'), s = g.querySelector('[data-object="ladder"]');
  e === "sky" && a && (a.style.left = "48%", a.style.top = "12%"), e === "climb" && (s && (s.style.left = "77%", s.style.top = "51%", s.style.transform = "translate(-50%,-50%) rotate(12deg)"), i && (i.style.left = "80%", i.style.top = "36%")), e === "cross" && t && (t.style.left = "29%", t.style.top = "48%", t.style.width = "12%", t.style.height = "30%"), e === "sleep" && t && (t.style.left = "36%", t.style.top = "54%", t.style.transform = "translate(-50%,-50%) rotate(-65deg) scale(.7)"), e === "window" && K("window"), e === "flower" && K("flower"), e === "cat" && K("cat"), ["firefly", "duck", "basket", "door"].includes(e) && K(e);
}
function Fe(e) {
  rt(e);
  const a = w[n].mission;
  if (!T.stars.includes(n)) {
    if (a.type === "drag") {
      e === a.answer ? (xe = e, U.classList.add("holding"), u.textContent = `現在點 ${le[a.target].word}，或把物件拖過去。`, K(a.target)) : xe === a.answer && e === a.target ? be() : u.textContent = a.hint;
      return;
    }
    if (a.type === "sequence") {
      e === a.steps[M] ? (M++, M === a.steps.length ? be() : u.textContent = `Good! 接著點 ${le[a.steps[M]].word}。`) : u.textContent = "Try again! " + a.hint;
      return;
    }
    if (e !== a.answer) {
      u.textContent = "Try again! " + a.hint;
      return;
    }
    if (S && a.type === "tap" && (M++, g.querySelector("[data-object=whisk] .sprite-art")?.animate([{ transform: "rotate(-20deg)" }, { transform: "rotate(20deg)" }, { transform: "rotate(-20deg)" }], { duration: 600 }), M < 3)) {
      u.textContent = `Stir, stir · ${M} / 3`;
      return;
    }
    if (a.type === "follow") {
      M++;
      const t = g.querySelector('[data-object="star"]');
      if (t.style.left = [45, 53, 60][M - 1] + "%", t.style.top = [34, 22, 12][M - 1] + "%", M < 3) {
        u.textContent = `Follow the star · ${M} / 3`;
        return;
      }
    }
    be();
  }
}
function Ee(e) {
  const a = x("", `探索 ${e.word}`, () => Fe(e.id), "scene-object " + (e.kind || "hotspot"));
  a.dataset.object = e.id, Z && [w[n].mission.answer, w[n].mission.target, ...w[n].mission.steps || []].includes(e.id) && (a.style.zIndex = "10"), je(a, e), v && w[n].scene === "dining" && ["gail", "grandma", "wolf"].includes(e.id) && (a.style.clipPath = "inset(0 0 35% 0)"), v && [14, 15, 16, 17, 20].includes(n) && ["cap", "glasses", "blanket"].includes(e.id) && a.classList.add("costume-hidden");
  const t = d("span", "object-label", e.word);
  if (e.sprite) {
    const s = d("span", "sprite-art"), { sheet: o, cell: l, columns: h, clip: c, rect: r, size: p } = e.sprite;
    if (s.style.backgroundImage = `url(${O + o})`, s.style.backgroundSize = `${$ && l === 2 ? 180 : o === "ingredients.png" && e.id === "bowl" ? 285 : h * 100}% ${o.endsWith("cast.png") && e.id === "mom" ? 195 : o === "cakes.png" && l > 1 ? 188 : h * 100}%`, s.style.backgroundPosition = `${l % h / (h - 1) * 100}% ${Math.floor(l / h) / (h - 1) * 100}%`, r && p) {
      const [m, G, C, I] = r, [D, se] = Array.isArray(p) ? p : [p, p];
      s.style.backgroundSize = `${D / C * 100}% ${se / I * 100}%`, s.style.backgroundPosition = `${m / (D - C) * 100}% ${G / (se - I) * 100}%`;
    }
    c && (s.style.clipPath = c), a.classList.add(o.endsWith("cast.png") ? "puppet" : "prop"), a.append(s);
  } else if (e.image || e.kind === "girl" || e.kind === "cat") {
    const s = d("img", e.kind === "girl" ? Z ? "red-gail" : "paper-girl" : "");
    s.src = e.image ? O + e.image : e.kind === "girl" ? O + "gail-paper.png" : "images/math-master/v1/objects/cat-v1.png", s.alt = "", e.image?.includes("gail-paper") && s.classList.add("paper-girl"), a.append(s), (e.id === "wolf" || e.id === "dad") && a.classList.add("wardrobe-wolf");
  } else if (e.kind === "star") a.append(d("span", "star-shape", "★"), d("span", "star-face", "•ᴗ•"));
  else if (e.kind === "ladder") {
    const s = d("span", "ladder-art");
    for (let o = 0; o < 6; o++) s.append(d("i"));
    a.append(s);
  } else v && e.id === "number" ? a.append(d("span", "door-number", "24")) : v && ["left", "right", "away"].includes(e.id) ? a.append(d("span", "direction-cue", e.id === "left" ? "←" : "→")) : a.append(d("span", "hotspot-spark", "✦"));
  if (Z) {
    const s = ["gail", "wolf", "mom", "grandma", "manager", "dad", "pip", "ella", "caregiver", "boy", "friend"], o = a.querySelector("img,.sprite-art"), l = w[n].objects.filter((h) => s.includes(h) && h !== e.id);
    if (o && s.includes(e.id) && l.length) {
      const h = l.reduce((c, r) => c + J(r).x, 0) / l.length;
      o.style.scale = h < e.x ? "-1 1" : "1 1";
    }
    if (L && o && ["ella", "friend"].includes(e.id)) {
      const h = w[n].objects.includes("tower") ? J("tower").x : w[n].objects.includes("blocks") ? J("blocks").x : J("gail").x;
      o.style.scale = "";
      const c = e.sprite?.sheet === "support-cast.png";
      o.style.transform = `scaleX(${h < e.x === c ? 1 : -1})`;
    }
    o && e.id === "hood" && n === 0 && (o.style.scale = "-1 1");
  }
  S && e.id === "gail" && n >= 9 && st(a), S && e.id === "bowl" && n >= 12 && a.classList.add("has-batter"), S && e.id === "finished" && n === 23 && a.append(d("span", "candle-flame")), a.append(t);
  const i = w[n].mission;
  if (i.type === "drag" && e.id === i.answer) {
    a.classList.add("draggable");
    let s = 0, o = 0, l = !1, h = !1;
    a.onclick = () => {
      if (h) {
        h = !1;
        return;
      }
      Fe(e.id);
    }, a.onpointerdown = (c) => {
      T.stars.includes(n) || (s = c.clientX, o = c.clientY, l = !1, a.setPointerCapture(c.pointerId));
    }, a.onpointermove = (c) => {
      if (!a.hasPointerCapture(c.pointerId) || (Math.hypot(c.clientX - s, c.clientY - o) > 6 && (l = !0), !l)) return;
      R && F();
      const r = g.getBoundingClientRect();
      a.style.left = (c.clientX - r.left) / r.width * 100 + "%", a.style.top = (c.clientY - r.top) / r.height * 100 + "%", a.classList.add("dragging");
    }, a.onpointerup = (c) => {
      if (!a.hasPointerCapture(c.pointerId) || (a.releasePointerCapture(c.pointerId), a.classList.remove("dragging"), !l)) return;
      h = !0;
      const r = g.getBoundingClientRect();
      pt((c.clientX - r.left) / r.width * 100, (c.clientY - r.top) / r.height * 100, J(i.target)) ? be() : (je(a, e), u.textContent = "再試一次：" + i.hint);
    }, a.onpointercancel = () => {
      je(a, e), a.classList.remove("dragging");
    };
  }
  return a;
}
function Bt() {
  const e = d("header", "topbar"), a = d("a", "brand");
  a.href = "story-planet.html", a.innerHTML = '<img class="official-brand" src="images/brand/learning-planet-brand-v1.png" alt="Learning Planet 學習星球"><span class="brand-subtitle">英文魔法繪本</span>', a.setAttribute("aria-label", "Learning Planet 學習星球，回故事星球"), e.append(a);
  const t = d("nav", "progress");
  t.setAttribute("aria-label", "故事頁數與星星");
  for (let s = 0; s < w.length; s++) {
    const o = x("★", `第 ${s + 1} 頁${T.stars.includes(s) ? "，已完成" : ""}`, () => {
      n = s, A = "story", q();
    }, "progress-star" + (T.stars.includes(s) ? " earned" : "") + (s === n && A === "story" ? " active" : ""));
    o.dataset.page = String(s), o.setAttribute("aria-current", String(s === n && A === "story")), t.append(o);
  }
  e.append(t);
  const i = d("div", "tools");
  {
    const s = x("▶", z ? "依目前難度朗讀整本" : "自動朗讀整本", () => {
      if (H && R) {
        ce(!0);
        return;
      }
      F(), He = !1, Q = "listen", n = 0, A = "story", q(), ce(!0);
    }, "round");
    s.dataset.wholeBook = "true", s.setAttribute("aria-pressed", "false"), i.append(s);
  }
  return i.append(x("⚙", "閱讀設定", Wt, "round")), z && (i.prepend(Ht()), i.append(x("✎", "書末小測驗", () => {
    A = "quiz", q();
  }, "round"))), e.append(i), e;
}
function Ht() {
  const e = d("div", "level-switch");
  e.setAttribute("role", "group"), e.setAttribute("aria-label", "閱讀難度");
  for (const a of ["A", "B", "C"]) {
    const t = x(a, `Level ${a} ${qe[a]}`, () => {
      if (k === a) return;
      const i = H && !B;
      F(), k = a, w = L ? Je(k) : Ye(k), et = L ? Xe(k) : _e(k), y.dataset.level = k;
      try {
        localStorage.setItem("gms-reading-level", k);
      } catch {
      }
      q(), i && ce(!0);
    }, "level-button");
    t.setAttribute("aria-pressed", String(k === a)), e.append(t);
  }
  return e;
}
function Wt() {
  if (y.querySelector(".settings")) {
    y.querySelector(".settings").remove();
    return;
  }
  const e = d("section", "settings");
  e.setAttribute("aria-label", "閱讀設定"), e.append(d("h2", "", "閱讀設定"));
  const a = d("div", "speed-options");
  a.setAttribute("role", "group"), a.setAttribute("aria-label", "播放速度");
  for (const i of [1.2, 1, 0.9, 0.8, 0.7, 0.6]) {
    const s = x(i + "x", `播放速度 ${i}x`, () => {
      const o = R, l = H;
      F(), pe = i;
      try {
        localStorage.setItem("gms-playback-multiplier-v2", String(i));
      } catch {
      }
      a.querySelectorAll("button").forEach((h) => h.setAttribute("aria-pressed", String(h === s))), o && ce(l);
    }, "speed-choice");
    s.setAttribute("aria-pressed", String(i === pe)), a.append(s);
  }
  const t = x(oe ? "物件提示 · 開" : "物件提示 · 關", "切換物件提示", () => {
    oe = !oe, y.classList.toggle("show-hints", oe), t.textContent = oe ? "物件提示 · 開" : "物件提示 · 關";
  });
  e.append(a, t, d("p", "", "進度儲存在這台裝置。自己讀模式不錄音、不評分。"), x("完成", "關閉設定", () => e.remove())), y.append(e);
}
function $t() {
  const e = d("section", "cover-stage");
  e.innerHTML = `<div class="cover-copy"><span class="eyebrow">A LITTLE LIGHT. A BIG ADVENTURE.</span><h1>Where Is<br>My <em>Star?</em></h1><p>跟著Gail，找回夜空裡的小星星。</p><div class="cover-meta">${w.length} 頁故事 <i>✦</i> 聽、讀、探索</div></div><div class="closed-book"><div class="cover-border"><span class="cover-small">LEARNING PLANET · STORY NO. 01</span><div class="cover-moon">☾</div><h2>Where Is<br>My Star?</h2><img class="cover-girl paper-girl" src="${O}${v ? "gail.png" : "gail-paper.png"}" alt="穿星星睡衣的Gail"><span class="cover-star">★</span><span class="cover-author">Gail的星光冒險</span></div></div>`;
  const a = d("div", "cover-actions");
  if (a.append(x(T.stars.length || n ? "繼續故事 →" : "翻開故事 →", "翻開故事", () => {
    A = "story", q();
  }, "wood-button primary")), (T.stars.length || n) && a.append(x("重新探索", "重新探索，重設本書星星", () => {
    if (T = { page: 0, stars: [], words: [] }, z)
      for (const t of ["A", "B", "C"]) {
        Ze[t] = de();
        try {
          localStorage.removeItem(ne + "-quiz-" + t);
        } catch {
        }
      }
    n = 0, Ae(), A = "story", q();
  }, "text-button")), v) {
    e.querySelector(".cover-copy>.eyebrow").textContent = "A RED HOOD. A SMART LITTLE HERO.", e.querySelector("h1").innerHTML = "Gail and the<br><em>Big Bad Wolf</em>", e.querySelector("h2").innerHTML = "Gail and the<br>Big Bad Wolf", e.querySelector(".cover-copy p").textContent = "跟著 Gail，展開現代小紅帽的暖心冒險。", e.querySelector(".cover-small").textContent = "LEARNING PLANET · STORY NO. 02";
    const t = e.querySelector(".cover-girl");
    t.src = O + "gail.png", t.classList.remove("paper-girl"), t.classList.add("red-gail"), t.alt = "穿紅色連帽短斗篷、戴星星髮夾的 Gail", e.querySelector(".cover-author").textContent = "Gail 的紅斗篷冒險";
  }
  if (S) {
    e.querySelector(".cover-copy>.eyebrow").textContent = "STORY NO. 03 · MADE WITH LOVE", e.querySelector("h1").innerHTML = "Gail’s<br><em>Birthday Cake</em>", e.querySelector(".cover-copy p").textContent = "七歲的驚喜，藏在一起動手的每一步。";
    const t = e.querySelector(".cover-border");
    t.style.backgroundImage = `url(${O}cover.png)`, t.innerHTML = '<span class="cake-cover-series">LEARNING PLANET · 03</span><h2>Gail’s<br>Birthday Cake</h2><p>Made with love</p>';
  }
  if ($) {
    e.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 01", e.querySelector("h1").innerHTML = "Little Dragon,<br><em>Brave Wings</em>", e.querySelector(".cover-copy p").textContent = "瑜瑜與忘記飛翔的小龍", e.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 10 題故事挑戰";
    const t = e.querySelector(".cover-border");
    t.style.backgroundImage = `url(${O}cover.png)`, t.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 01</span><h2>Gail and the<br>Little Dragon<br><small>Who Forgot to Fly</small></h2>';
    const i = d("p", "level-note", qe[k]);
    e.querySelector(".cover-copy").append(i);
    try {
      const s = JSON.parse(localStorage.getItem(ne + "-quiz-" + k) || "null");
      s && Number.isInteger(s.score) && s.score >= 0 && s.score <= 10 && e.querySelector(".cover-copy").append(d("p", "level-note", `上次挑戰 · ${s.score} / 10`));
    } catch {
    }
  }
  if (L) {
    e.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 02", e.querySelector("h1").innerHTML = "A Princess,<br><em>A Little Smile</em>", e.querySelector(".cover-copy p").textContent = "瑜瑜與不會笑的公主", e.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const t = e.querySelector(".cover-border");
    t.style.backgroundImage = `url(${O}cover-composition-v1.png)`, t.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 02</span><h2>Gail and the Princess<br><small>Who Forgot to Smile</small></h2>', e.querySelector(".cover-copy").append(d("p", "level-note", qe[k]));
    try {
      const i = JSON.parse(localStorage.getItem(ne + "-quiz-" + k) || "null");
      i && Number.isInteger(i.score) && i.score >= 0 && i.score <= 16 && e.querySelector(".cover-copy").append(d("p", "level-note", `上次挑戰 · ${i.score} / 16`));
    } catch {
    }
  }
  e.querySelector(".cover-copy").append(a), y.append(e);
}
function Pe(e) {
  re = e, y.classList.toggle("immersive", e && A === "story");
  const a = y.querySelector(".reader-footer"), t = y.querySelector(".story-paper");
  a && t && (e ? t : y).append(a);
  const i = y.querySelector(".immersive-toggle");
  i && (i.textContent = e ? "⤢" : "⛶", i.setAttribute("aria-label", e ? "離開全景閱讀" : "全景閱讀"), i.setAttribute("aria-pressed", String(e)));
}
function q() {
  if (F(), ve.forEach(clearTimeout), ve.clear(), xe = "", M = 0, y.replaceChildren(Bt()), y.classList.toggle("show-hints", oe), y.classList.toggle("zoomed", tt), y.dataset.screen = A, y.classList.toggle("immersive", re && A === "story"), u = d("div", "feedback"), u.setAttribute("role", "status"), u.setAttribute("aria-live", "polite"), A === "cover") {
    $t();
    return;
  }
  if (A === "quiz") {
    const r = L ? At(k) : bt(k);
    Et(y, r, Ze[k], { level: k, say: ae, ending: L ? { title: "A place for a friend", line: "Side by side, we laugh and play. A little friendship lights the day.", image: O + "cover-composition-v1.png" } : void 0, back: () => {
      A = "story", q();
    }, save: (p) => {
      try {
        localStorage.setItem(ne + "-quiz-" + k, JSON.stringify({ score: p, total: r.length, completedAt: Date.now() }));
      } catch {
      }
    } }), y.append(u);
    return;
  }
  if (A === "complete") {
    Nt();
    return;
  }
  Ae();
  const e = w[n], a = d("section", "open-book"), t = d("article", "story-paper");
  t.append(d("div", "eyebrow", `CHAPTER ${String(n + 1).padStart(2, "0")} / ${w.length}`), d("h1", "", e.title)), fe = d("div", "story-lines"), e.lines.forEach((r) => {
    const p = d("p");
    let m = 0;
    r.split(/(\s+)/).forEach((G) => {
      if (!G.trim()) {
        p.append(document.createTextNode(G)), m += G.length;
        return;
      }
      const C = G.replace(/[^a-z]/gi, "").toLowerCase(), I = d("button", "word", G);
      I.dataset.start = String(m), I.setAttribute("aria-label", `朗讀 ${C}`), e.words.some((D) => D.toLowerCase() === C) && I.classList.add("target-word"), I.onclick = () => {
        Se(C), le[C] && e.objects.includes(C) ? rt(C) : ae(C);
      }, p.append(I), m += G.length;
    }), fe.append(p);
  }), $ && [4, 5].includes(n) && t.append(d("span", "memory-label", "Pip remembers…")), t.append(fe, d("div", "paper-note", "點英文聽發音 · 點場景找單字"));
  const i = d("div", "word-chips");
  e.words.forEach((r) => i.append(x(r, `學習 ${r}`, () => {
    Se(r), ae(r), K(r);
  }, "word-chip"))), t.append(i, x("⛶", "全景閱讀", () => Pe(!re), "immersive-toggle"), d("div", "paper-number", String(n * 2 + 1))), me = d("section", "scene"), me.setAttribute("aria-label", ie[e.scene].name + "互動場景"), g = d("div", "scene-world");
  const s = d("img", "scene-bg");
  if (s.src = O + (ie[e.scene].sheet || e.scene + ".png"), s.alt = ie[e.scene].alt, Z && ie[e.scene].sheet) {
    const r = ie[e.scene].cell || 0, p = d("div", "scene-atlas");
    s.style.width = "200%", s.style.height = "200%", s.style.maxWidth = "none", s.style.position = "absolute", s.style.left = -(r % 2) * 100 + "%", s.style.top = -Math.floor(r / 2) * 100 + "%", p.append(s), g.append(p);
  } else g.append(s);
  for (const r of e.objects) g.append(Ee(J(r)));
  if (T.words.includes("star") && g.querySelector("[data-object=star]")?.classList.add("found-star"), S && ["kitchen", "party"].includes(e.scene)) {
    g.classList.add("baking-table");
    const r = g.querySelector(".scene-atlas").cloneNode(!0);
    r.classList.add("table-front"), r.setAttribute("aria-hidden", "true"), g.append(r);
  }
  if (L && n === 6) {
    const r = d("div", "princess-bubbles");
    r.setAttribute("aria-hidden", "true");
    for (let p = 0; p < 7; p++) {
      const m = d("i");
      m.style.left = 20 + p * 9 + "%", m.style.top = 13 + p % 3 * 10 + "%", m.style.animationDelay = p * 0.25 + "s", r.append(m);
    }
    g.append(r);
  }
  me.append(g, d("div", "scene-caption", ie[e.scene].caption)), a.append(t, me), y.append(a);
  const o = d("footer", "reader-footer"), l = x("←", "上一頁", () => Te(-1), "round page-arrow");
  l.disabled = n === 0, he = x("", "開始英文朗讀", () => ce(re), "wood-button read-main"), X();
  const h = d("div", "mode-switch");
  h.append(x("Read to me", "系統朗讀模式", () => {
    Q = "listen", F(), q();
  }, Q === "listen" ? "selected" : ""), x("I’ll read", "自己讀模式", () => {
    Q = "self", F(), q(), u.textContent = "自己讀讀看，讀完按 Done 聽示範。";
  }, Q === "self" ? "selected" : ""));
  const c = d("div", "read-controls");
  if (c.append(he, h), o.append(l, c, x(n === w.length - 1 ? "✓" : "→", n === w.length - 1 ? z ? "開始書末測驗" : "故事完成" : "下一頁", () => Te(1), "round page-arrow")), y.append(o), U = d("aside", "mission"), U.setAttribute("aria-label", "故事任務"), T.stars.includes(n))
    U.classList.add("solved"), U.append(d("span", "mission-star", "★"), d("div", "", "Lovely! 任務完成"));
  else {
    const r = d("div");
    r.append(d("small", "", "YOUR LITTLE MISSION"), d("p", "", e.mission.prompt)), U.append(x("✦", "聽任務提示", () => {
      ae(e.mission.prompt), u.textContent = e.mission.hint;
    }, "mission-star"), r);
  }
  y.append(U, u), Pe(re), requestAnimationFrame(() => y.querySelector(".progress-star.active")?.scrollIntoView({ block: "nearest", inline: "nearest" })), u.textContent = Q === "self" ? "自己讀讀看，讀完按 Done 聽示範。" : "點 Read to me 聽故事，也可以自由探索。";
}
function Te(e) {
  if (e > 0 && n === w.length - 1) {
    A = z ? "quiz" : "complete", q();
    return;
  }
  n = Math.max(0, Math.min(w.length - 1, n + e)), q();
}
function Nt() {
  const e = d("section", "completion");
  e.append(d("div", "completion-stars", "✦ ★ ✦"), d("span", "eyebrow", "THE END · A NEW BEGINNING"), d("h1", "", S ? "Made with love. Shared with joy." : v ? "A happy lunch. A better ending." : "Good night, little star."), d("p", "", `你和Gail一起走完了故事！完成 ${T.stars.length} / ${w.length} 個任務。`));
  const a = d("div", "discovered");
  T.words.forEach((s) => a.append(x(s, `重聽 ${s}`, () => ae(s), "word-chip"))), e.append(d("h2", "", "Words you discovered"), a);
  const t = d("div", "completion-actions");
  t.append(x("再讀一次", "再讀一次", () => {
    n = 0, A = "story", q();
  }), x("找回未完成的星星", "繼續未完成任務", () => {
    n = w.findIndex((s, o) => !T.stars.includes(o)), n < 0 && (n = 0), A = "story", q();
  }));
  const i = d("a", "text-button", "回故事星球");
  if (i.href = "story-planet.html", t.append(i), v) {
    const s = d("a", "wood-button", "下一本：Gail’s Birthday Cake");
    s.href = "birthday-storybook.html", t.append(s);
  }
  if (!Z) {
    const s = d("a", "wood-button", "下一本：Gail and the Big Bad Wolf");
    s.href = "red-hood-storybook.html", t.append(s);
  }
  e.append(t), y.append(e, u);
}
window.addEventListener("keydown", (e) => {
  e.key === "Escape" && (re && Pe(!1), y.querySelector(".settings")?.remove(), tt = !1, y.classList.remove("zoomed")), !(A !== "story" || y.querySelector(".settings")) && (e.key === "ArrowRight" && (e.preventDefault(), Te(1)), e.key === "ArrowLeft" && (e.preventDefault(), Te(-1)));
});
document.addEventListener("visibilitychange", () => {
  document.hidden && F();
});
window.addEventListener("pagehide", F);
q();
