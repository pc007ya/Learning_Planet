// Taiwan curriculum summaries; suggested edges never lock a lesson.
export const curriculum = {
  "source": "https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001788",
  "pdf": "https://edu.law.moe.gov.tw/Download.ashx?FileID=31051&id=GL001788&type=LAW",
  "checked": "2026-11-01",
  "title": "十二年國民基本教育數學領域・二年級",
  "pages": "課綱印刷頁 20–23",
  "standards": {
    "N-2-1": "一千以內的數、百的位值與位值換算",
    "N-2-2": "以位值理解加減直式；加法含兩次進位，減法限一次退位",
    "N-2-3": "加減應用問題，連結加減互逆",
    "N-2-4": "生活情境的簡單加減估算，以百位數為主",
    "N-2-5": "操作 100、500、1000 元與較小面額，連結數感與估算",
    "N-2-6": "乘法的意義與應用，從幾個一數建立倍的概念",
    "N-2-7": "十十乘法，以情境與行列模型建立熟練度",
    "N-2-8": "加減乘兩步驟生活問題，不含併式或連乘",
    "N-2-9": "分裝與平分的操作經驗；不列除式，不使用除法名稱",
    "N-2-10": "由連續量等分認識幾分之一，不處理離散量",
    "N-2-11": "公分與公尺的實測、估測、計算及單位換算",
    "N-2-12": "容量、重量、面積的直接與間接比較，不使用常用單位",
    "N-2-13": "鐘面幾時幾分、整時點數；不含秒針",
    "N-2-14": "年、月、星期、日的關係與月曆；不做時間間隔問題",
    "S-2-1": "以實物辨認、描述頂點、角、邊、面等幾何特徵",
    "S-2-2": "操作、辨認、描述與分類平面及立體形體",
    "S-2-3": "操作直尺、報讀公分、畫指定長度線段",
    "S-2-4": "實測平面圖形邊長並連加周界，不使用公式",
    "S-2-5": "以操作比較面積，含相同個別單位",
    "R-2-1": "理解大於、小於符號及大小的前後關係",
    "R-2-2": "操作三數相加，改變順序總數仍相同",
    "R-2-3": "以行列模型觀察交換兩數相乘順序仍相同",
    "R-2-4": "加減互逆，使用加法驗算減法",
    "D-2-1": "蒐集、分類、記錄、呈現，體驗分類後再分類；非正式圖表"
  }
};
export const groups = [
  {
    "id": "number",
    "label": "數與加減",
    "icon": "✦",
    "color": "#8bc8ff"
  },
  {
    "id": "multiply",
    "label": "乘法與分裝",
    "icon": "✦",
    "color": "#c3a2ff"
  },
  {
    "id": "fraction",
    "label": "等分與分數",
    "icon": "✦",
    "color": "#ffb4d5"
  },
  {
    "id": "measure",
    "label": "比較與測量",
    "icon": "✦",
    "color": "#75e4ce"
  },
  {
    "id": "life",
    "label": "錢幣與時間",
    "icon": "✦",
    "color": "#ffda89"
  },
  {
    "id": "shape",
    "label": "圖形與分類",
    "icon": "✦",
    "color": "#9de3b4"
  }
];
export const nodes = [
  {
    "id": "thousand",
    "label": "一千以內的數",
    "group": "number",
    "position": [
      -44,
      28,
      0
    ],
    "standards": [
      "N-2-1",
      "R-2-1"
    ],
    "units": [
      "u113"
    ],
    "goal": "用百、十、個表示一千以內的數，讀寫、比較並換位值。",
    "scope": "core",
    "visual": {
      "art": "modules/math-foundations/icons/u113.svg",
      "caption": "百・十・個",
      "hint": "十個十，換一個百。"
    }
  },
  {
    "id": "add2",
    "label": "二位數加減",
    "group": "number",
    "position": [
      -23,
      28,
      0
    ],
    "standards": [
      "N-2-2"
    ],
    "units": [
      "u5",
      "u37"
    ],
    "goal": "先理解位值對齊，再操作進位與退位。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u5-two-digit-add-sub-v1.png",
      "caption": "二位數加減",
      "hint": "對齊位值，再來算。"
    }
  },
  {
    "id": "add3",
    "label": "三位數加減",
    "group": "number",
    "position": [
      -2,
      28,
      0
    ],
    "standards": [
      "N-2-2"
    ],
    "units": [
      "u23",
      "u24",
      "u25",
      "u26",
      "u13",
      "u47",
      "u48"
    ],
    "goal": "以位值積木理解直式，加法含兩次進位，減法限一次退位。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u13-three-digit-add-sub-v1.png",
      "caption": "三位數加減",
      "hint": "百、十、個，排整齊。"
    },
    "note": "既有挑戰若出現連續退位，屬後續年級延伸。"
  },
  {
    "id": "inverse",
    "label": "加減互相檢查",
    "group": "number",
    "position": [
      -44,
      12,
      0
    ],
    "standards": [
      "N-2-3",
      "R-2-4"
    ],
    "units": [
      "u5"
    ],
    "goal": "從生活故事理解加減的關係，用加法檢查減法。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u37-two-digit-add-sub-challenge-v1.png",
      "caption": "加回去檢查",
      "hint": "拿走的，加回來。"
    },
    "lab": "inverse"
  },
  {
    "id": "estimate",
    "label": "大約有多少",
    "group": "number",
    "position": [
      -23,
      12,
      0
    ],
    "standards": [
      "N-2-4"
    ],
    "units": [],
    "goal": "以接近的百位數估計加減，先判斷大約的範圍。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u23-addition-within-200-v1.png",
      "caption": "大約多少",
      "hint": "先想大約，再算答案。"
    },
    "lab": "estimate2"
  },
  {
    "id": "multiply",
    "label": "幾個一樣多",
    "group": "multiply",
    "position": [
      -3,
      12,
      0
    ],
    "standards": [
      "N-2-6"
    ],
    "units": [
      "u16"
    ],
    "goal": "把每組一樣多的物件連結到乘法與倍的意義。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/multiplication-array-v2.png",
      "caption": "幾個一樣多",
      "hint": "每一組，都一樣多。"
    }
  },
  {
    "id": "table",
    "label": "乘法好朋友",
    "group": "multiply",
    "position": [
      18,
      28,
      0
    ],
    "standards": [
      "N-2-7"
    ],
    "units": [
      "u6"
    ],
    "goal": "用幾個一數和行列模型建立十十乘法，不只背誦。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u6-multiplication-table-v1.png",
      "caption": "乘法好朋友",
      "hint": "一排一排，數得快。"
    }
  },
  {
    "id": "swap",
    "label": "轉一轉一樣多",
    "group": "multiply",
    "position": [
      19,
      12,
      0
    ],
    "standards": [
      "R-2-3"
    ],
    "units": [
      "u16",
      "u6"
    ],
    "goal": "旋轉行列模型，觀察兩數交換相乘順序仍相同。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/multiplication-array-v2.png",
      "caption": "轉一轉",
      "hint": "換個方向，一樣多！"
    },
    "lab": "array"
  },
  {
    "id": "twoSteps",
    "label": "兩步驟生活題",
    "group": "multiply",
    "position": [
      -2,
      -4,
      0
    ],
    "standards": [
      "N-2-8"
    ],
    "units": [
      "u118"
    ],
    "goal": "先找需要的資料，分兩步處理加減與乘的生活情境。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/steps.svg",
      "caption": "分兩步",
      "hint": "先做什麼，再做什麼？"
    }
  },
  {
    "id": "sharing",
    "label": "分裝與平分",
    "group": "multiply",
    "position": [
      19,
      -4,
      0
    ],
    "standards": [
      "N-2-9"
    ],
    "units": [],
    "goal": "操作物件，分成一樣多的幾份，或每份放一樣多。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u9-equal-sharing-v1.png",
      "caption": "分得一樣多",
      "hint": "每一份，都一樣多。"
    },
    "lab": "sharing",
    "note": "小二核心只操作，不列除式。原有正式除法課程放在延伸挑戰。"
  },
  {
    "id": "fraction",
    "label": "認識幾分之一",
    "group": "fraction",
    "position": [
      43,
      28,
      0
    ],
    "standards": [
      "N-2-10"
    ],
    "units": [],
    "goal": "對半摺出等分的長方形，指出其中一份是全部的幾分之一。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u10-fraction-introduction-v1.png",
      "caption": "幾分之一",
      "hint": "分一樣大，拿一份。"
    },
    "lab": "fraction",
    "note": "核心限連續量的單位分數；原分數課的其他題型列在自選延伸。"
  },
  {
    "id": "ruler",
    "label": "公分與公尺",
    "group": "measure",
    "position": [
      -44,
      -5,
      0
    ],
    "standards": [
      "N-2-11",
      "S-2-3"
    ],
    "units": [
      "u8"
    ],
    "goal": "使用直尺，從 0 起點量公分並連結公尺換算。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u8-centimeter-and-meter-v1.png",
      "caption": "用尺量",
      "hint": "對準 0，再看刻度。"
    }
  },
  {
    "id": "area",
    "label": "面積大小比較",
    "group": "measure",
    "position": [
      -44,
      -22,
      0
    ],
    "standards": [
      "N-2-12",
      "S-2-5"
    ],
    "units": [
      "u114"
    ],
    "goal": "用重疊或相同大小的物件比較面積。",
    "scope": "core",
    "visual": {
      "art": "modules/math-foundations/icons/u114.svg",
      "caption": "比面積",
      "hint": "鋪一鋪，哪個比較大？"
    }
  },
  {
    "id": "capacity",
    "label": "容量與重量比較",
    "group": "measure",
    "position": [
      -23,
      -22,
      0
    ],
    "standards": [
      "N-2-12"
    ],
    "units": [
      "u115"
    ],
    "goal": "實際倒水或用天平比較容量、重量，先不引入公升及公斤。",
    "scope": "core",
    "visual": {
      "art": "modules/math-foundations/icons/u115.svg",
      "caption": "比容量重量",
      "hint": "倒一倒，秤一秤。"
    }
  },
  {
    "id": "banknotes",
    "label": "100、500、1000 元",
    "group": "life",
    "position": [
      18,
      -21,
      0
    ],
    "standards": [
      "N-2-5"
    ],
    "units": [],
    "goal": "數出大面額並交換不同面額，感受金額大小。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/coin-stack-v2.png",
      "caption": "數大鈔",
      "hint": "換一換，有多少元？"
    },
    "lab": "banknotes"
  },
  {
    "id": "clock",
    "label": "幾時幾分",
    "group": "life",
    "position": [
      0,
      -21,
      0
    ],
    "standards": [
      "N-2-13"
    ],
    "units": [
      "u7"
    ],
    "goal": "操作鐘面的時針和分針，讀出幾時幾分並點數整時。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u7-clock-and-time-v1.png",
      "caption": "幾時幾分",
      "hint": "看短針，再看長針。"
    }
  },
  {
    "id": "calendar",
    "label": "年、月、星期、日",
    "group": "life",
    "position": [
      0,
      -37,
      0
    ],
    "standards": [
      "N-2-14"
    ],
    "units": [
      "u116"
    ],
    "goal": "觀察月曆，說明一年、月、星期和日的關係。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/calendar.svg",
      "caption": "看月曆",
      "hint": "一年裡，有哪些月份？"
    }
  },
  {
    "id": "shapes",
    "label": "形體特徵與分類",
    "group": "shape",
    "position": [
      43,
      12,
      0
    ],
    "standards": [
      "S-2-1",
      "S-2-2"
    ],
    "units": [],
    "goal": "操作觀察平面與立體形體的邊、角、面，按特徵分類。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/unit-05-solids-v2.png",
      "caption": "找邊角面",
      "hint": "摸摸看，找相同。"
    },
    "lab": "shapes"
  },
  {
    "id": "perimeter",
    "label": "沿著邊走一圈",
    "group": "shape",
    "position": [
      43,
      -5,
      0
    ],
    "standards": [
      "S-2-4"
    ],
    "units": [],
    "goal": "實測每條邊並相加，觀察正方形和長方形的邊長關係。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u8-centimeter-and-meter-v1.png",
      "caption": "走一圈",
      "hint": "沿著邊，加一加。"
    },
    "lab": "perimeter"
  },
  {
    "id": "classify",
    "label": "分類後再分類",
    "group": "shape",
    "position": [
      43,
      -22,
      0
    ],
    "standards": [
      "D-2-1"
    ],
    "units": [],
    "goal": "依顏色或形狀分類，再換一種方式分，不教正式統計圖表。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/counting-magnifier-v2.png",
      "caption": "分了再分",
      "hint": "同一堆，可以怎麼分？"
    },
    "lab": "classify"
  },
  {
    "id": "threeAdd",
    "label": "三數交換順序",
    "group": "number",
    "position": [
      -23,
      -5,
      0
    ],
    "standards": [
      "R-2-2"
    ],
    "units": [
      "u22"
    ],
    "goal": "用三群物件觀察不同加總順序仍有相同總數。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u22-continuous-add-sub-v1.png",
      "caption": "換順序相加",
      "hint": "換個順序，還是一樣。"
    },
    "lab": "threeAdd"
  },
  {
    "id": "chain",
    "label": "連續加減挑戰",
    "group": "number",
    "position": [
      -45,
      -53,
      0
    ],
    "standards": [],
    "units": [
      "u22"
    ],
    "goal": "既有多次運算遊戲，超過核心兩步驟時為延伸。",
    "scope": "extension",
    "note": "既有多次運算遊戲，超過核心兩步驟時為延伸。",
    "visual": {
      "art": "images/math-grade2/v1/u22-continuous-add-sub-v1.png",
      "caption": "連續加減",
      "hint": "自由選擇，試試挑戰。"
    }
  },
  {
    "id": "animals",
    "label": "動物腳數推理",
    "group": "multiply",
    "position": [
      -27,
      -53,
      0
    ],
    "standards": [],
    "units": [
      "u12"
    ],
    "goal": "嘗試更複雜的乘法與數量推理。",
    "scope": "extension",
    "note": "嘗試更複雜的乘法與數量推理。",
    "visual": {
      "art": "images/math-grade2/v1/u12-animal-leg-reasoning-v1.png",
      "caption": "腳數推理",
      "hint": "自由選擇，試試挑戰。"
    }
  },
  {
    "id": "cubes",
    "label": "立方體空間挑戰",
    "group": "shape",
    "position": [
      -9,
      -53,
      0
    ],
    "standards": [],
    "units": [
      "u31",
      "u32"
    ],
    "goal": "層數、遮擋與空間推理超出小二形體辨認核心。",
    "scope": "extension",
    "note": "層數、遮擋與空間推理超出小二形體辨認核心。",
    "visual": {
      "art": "images/math-grade2/v1/u32-cube-spatial-reasoning-v1.png",
      "caption": "數積木挑戰",
      "hint": "自由選擇，試試挑戰。"
    }
  },
  {
    "id": "division",
    "label": "正式除法挑戰",
    "group": "multiply",
    "position": [
      9,
      -53,
      0
    ],
    "standards": [],
    "units": [
      "u18",
      "u9"
    ],
    "goal": "正式除法名稱與除式屬 N-3-4；小二核心另設分裝與平分操作。",
    "scope": "extension",
    "note": "正式除法名稱與除式屬 N-3-4；小二核心另設分裝與平分操作。",
    "visual": {
      "art": "images/math-grade2/v1/u9-equal-sharing-v1.png",
      "caption": "除法挑戰",
      "hint": "自由選擇，試試挑戰。"
    }
  },
  {
    "id": "fractions",
    "label": "分數進階挑戰",
    "group": "fraction",
    "position": [
      27,
      -53,
      0
    ],
    "standards": [],
    "units": [
      "u17",
      "u10",
      "u11"
    ],
    "goal": "非單位分數與分數比較超出小二 N-2-10，保留為自選延伸。",
    "scope": "extension",
    "note": "非單位分數與分數比較超出小二 N-2-10，保留為自選延伸。",
    "visual": {
      "art": "images/math-grade2/v1/u11-fraction-comparison-v1.png",
      "caption": "分數挑戰",
      "hint": "自由選擇，試試挑戰。"
    }
  },
  {
    "id": "measurementChallenge",
    "label": "測量實驗挑戰",
    "group": "measure",
    "position": [
      45,
      -53,
      0
    ],
    "standards": [],
    "units": [
      "u30"
    ],
    "goal": "原測量實驗含角度與標準重量單位；超出小二的部分自選探索。",
    "scope": "extension",
    "note": "角度與公克、公斤不列入小二核心概念。",
    "visual": {
      "art": "images/math-grade2/v1/u30-measurement-lab-v1.png",
      "caption": "測量挑戰",
      "hint": "試試更進階的測量。"
    }
  }
];
export const edges = [
  {
    "from": "thousand",
    "to": "add2",
    "reason": "先探索「一千以內的數」，再把操作經驗連結到「二位數加減」。",
    "strength": "suggested"
  },
  {
    "from": "add2",
    "to": "add3",
    "reason": "先探索「二位數加減」，再把操作經驗連結到「三位數加減」。",
    "strength": "suggested"
  },
  {
    "from": "add2",
    "to": "inverse",
    "reason": "先探索「二位數加減」，再把操作經驗連結到「加減互相檢查」。",
    "strength": "suggested"
  },
  {
    "from": "thousand",
    "to": "estimate",
    "reason": "先探索「一千以內的數」，再把操作經驗連結到「大約有多少」。",
    "strength": "suggested"
  },
  {
    "from": "thousand",
    "to": "banknotes",
    "reason": "先探索「一千以內的數」，再把操作經驗連結到「100、500、1000 元」。",
    "strength": "suggested"
  },
  {
    "from": "estimate",
    "to": "banknotes",
    "reason": "先探索「大約有多少」，再把操作經驗連結到「100、500、1000 元」。",
    "strength": "suggested"
  },
  {
    "from": "multiply",
    "to": "table",
    "reason": "先探索「幾個一樣多」，再把操作經驗連結到「乘法好朋友」。",
    "strength": "suggested"
  },
  {
    "from": "table",
    "to": "swap",
    "reason": "先探索「乘法好朋友」，再把操作經驗連結到「轉一轉一樣多」。",
    "strength": "suggested"
  },
  {
    "from": "multiply",
    "to": "twoSteps",
    "reason": "先探索「幾個一樣多」，再把操作經驗連結到「兩步驟生活題」。",
    "strength": "suggested"
  },
  {
    "from": "inverse",
    "to": "twoSteps",
    "reason": "先探索「加減互相檢查」，再把操作經驗連結到「兩步驟生活題」。",
    "strength": "suggested"
  },
  {
    "from": "table",
    "to": "sharing",
    "reason": "先探索「乘法好朋友」，再把操作經驗連結到「分裝與平分」。",
    "strength": "suggested"
  },
  {
    "from": "sharing",
    "to": "fraction",
    "reason": "先探索「分裝與平分」，再把操作經驗連結到「認識幾分之一」。",
    "strength": "suggested"
  },
  {
    "from": "ruler",
    "to": "perimeter",
    "reason": "先探索「公分與公尺」，再把操作經驗連結到「沿著邊走一圈」。",
    "strength": "suggested"
  },
  {
    "from": "shapes",
    "to": "perimeter",
    "reason": "先探索「形體特徵與分類」，再把操作經驗連結到「沿著邊走一圈」。",
    "strength": "suggested"
  },
  {
    "from": "shapes",
    "to": "classify",
    "reason": "先探索「形體特徵與分類」，再把操作經驗連結到「分類後再分類」。",
    "strength": "suggested"
  },
  {
    "from": "area",
    "to": "shapes",
    "reason": "先探索「面積大小比較」，再把操作經驗連結到「形體特徵與分類」。",
    "strength": "suggested"
  },
  {
    "from": "add2",
    "to": "threeAdd",
    "reason": "先探索「二位數加減」，再把操作經驗連結到「三數交換順序」。",
    "strength": "suggested"
  },
  {
    "from": "clock",
    "to": "calendar",
    "reason": "先探索「幾時幾分」，再把操作經驗連結到「年、月、星期、日」。",
    "strength": "suggested"
  },
  {
    "from": "threeAdd",
    "to": "chain",
    "reason": "先探索「三數交換順序」，再把操作經驗連結到「連續加減挑戰」。",
    "strength": "suggested"
  },
  {
    "from": "multiply",
    "to": "animals",
    "reason": "先探索「幾個一樣多」，再把操作經驗連結到「動物腳數推理」。",
    "strength": "suggested"
  },
  {
    "from": "shapes",
    "to": "cubes",
    "reason": "先探索「形體特徵與分類」，再把操作經驗連結到「立方體空間挑戰」。",
    "strength": "suggested"
  },
  {
    "from": "sharing",
    "to": "division",
    "reason": "先探索「分裝與平分」，再把操作經驗連結到「正式除法挑戰」。",
    "strength": "suggested"
  },
  {
    "from": "fraction",
    "to": "fractions",
    "reason": "先探索「認識幾分之一」，再把操作經驗連結到「分數進階挑戰」。",
    "strength": "suggested"
  }
];
export const courseOrder = [
  "u113",
  "u5",
  "u37",
  "u8",
  "u114",
  "u22",
  "u16",
  "u6",
  "u7",
  "u115",
  "u30",
  "u23",
  "u24",
  "u25",
  "u26",
  "u13",
  "u47",
  "u48",
  "u116",
  "u12",
  "u118",
  "u31",
  "u32",
  "u18",
  "u9",
  "u17",
  "u10",
  "u11"
];
export const routeVisuals = {
  "number": {
    "topic": "thousand",
    "label": "數感"
  },
  "multiply": {
    "topic": "multiply",
    "label": "乘法"
  },
  "fraction": {
    "topic": "fraction",
    "label": "等分"
  },
  "measure": {
    "topic": "ruler",
    "label": "測量"
  },
  "life": {
    "topic": "banknotes",
    "label": "生活"
  },
  "shape": {
    "topic": "shapes",
    "label": "圖形"
  }
};
