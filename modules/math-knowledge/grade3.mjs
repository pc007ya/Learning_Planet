// Taiwan curriculum summaries; suggested edges never lock a lesson.
export const curriculum = {
  "source": "https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001788",
  "pdf": "https://edu.law.moe.gov.tw/Download.ashx?FileID=31051&id=GL001788&type=LAW",
  "checked": "2026-11-01",
  "title": "十二年國民基本教育數學領域・三年級",
  "pages": "課綱印刷頁 23–26",
  "standards": {
    "N-3-1": "一萬以內的數、千的位值與位值單位換算",
    "N-3-2": "加減直式，含多次進退位及有 0 的題型",
    "N-3-3": "二、三位數乘一位數，以位值理解直式",
    "N-3-4": "除法的意義、整除與餘數，連結乘法解題",
    "N-3-5": "二、三位數除以一位數，以位值理解直式",
    "N-3-6": "乘除應用問題與乘除互逆",
    "N-3-7": "加減與除、連乘的兩步驟問題；不含併式、連除或乘除混合",
    "N-3-8": "生活中的四則估算，用估算檢驗答案是否合理",
    "N-3-9": "同分母分數比較與加減，分數及結果不超過 2；不使用帶分數",
    "N-3-10": "一位小數、十分位、比較與加減",
    "N-3-11": "從 0 開始的整數數線，連結數序、長度與加減",
    "N-3-12": "毫米、公分、公尺的實測、估測、計算與換算",
    "N-3-13": "角的操作、直接及間接比較、直角；辨別角大小與邊長",
    "N-3-14": "平方公分，數格、實測與估測，不發展一般面積公式",
    "N-3-15": "公升與毫升的量感、測量、換算與計算",
    "N-3-16": "公斤與公克的量感、測量、換算與計算",
    "N-3-17": "日、時、分、秒與換算；時間加減限同單位或無進退位的時分複名數",
    "S-3-1": "角與角度的操作比較、認識直角，同 N-3-13",
    "S-3-2": "依邊與角的特徵判斷正方形和長方形，含斜放的圖形",
    "S-3-3": "圓心、圓周、半徑、直徑，操作圓規畫圓",
    "S-3-4": "平面圖形的分割重組及展開圖的黏合體驗，不做複雜紙筆推理",
    "R-3-1": "乘除互逆，應用於驗算與解題",
    "R-3-2": "觀察與說明一維數量模式，不使用公式",
    "D-3-1": "報讀、說明、製作一維與二維生活表格，含列聯表"
  }
};
export const groups = [
  {
    "id": "number",
    "label": "位值與加減",
    "icon": "✦",
    "color": "#8bc8ff"
  },
  {
    "id": "multiply",
    "label": "乘法與除法",
    "icon": "✦",
    "color": "#c3a2ff"
  },
  {
    "id": "fraction",
    "label": "分數與小數",
    "icon": "✦",
    "color": "#ffb4d5"
  },
  {
    "id": "measure",
    "label": "測量與時間",
    "icon": "✦",
    "color": "#75e4ce"
  },
  {
    "id": "shape",
    "label": "角與圖形",
    "icon": "✦",
    "color": "#ffda89"
  },
  {
    "id": "data",
    "label": "規律與表格",
    "icon": "✦",
    "color": "#9de3b4"
  }
];
export const nodes = [
  {
    "id": "tenThousand",
    "label": "一萬以內的數",
    "group": "number",
    "position": [
      -46,
      29,
      0
    ],
    "standards": [
      "N-3-1"
    ],
    "units": [
      "u58"
    ],
    "goal": "讀寫一萬以內的數，操作千百十個並比較大小。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u58-place-value-ten-thousand-v1.png",
      "caption": "千百十個",
      "hint": "十個百，換一個千。"
    }
  },
  {
    "id": "addSub",
    "label": "四位數加減",
    "group": "number",
    "position": [
      -27,
      29,
      0
    ],
    "standards": [
      "N-3-2"
    ],
    "units": [
      "u59"
    ],
    "goal": "用位值理解多次進退位，處理數字中有 0 的直式。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u59-four-digit-add-sub-v1.png",
      "caption": "四位數加減",
      "hint": "位值對齊，進退位。"
    }
  },
  {
    "id": "estimate",
    "label": "四則估算",
    "group": "number",
    "position": [
      -46,
      12,
      0
    ],
    "standards": [
      "N-3-8"
    ],
    "units": [],
    "goal": "在生活情境中用接近的數估算，檢查答案是否合理。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u59-four-digit-add-sub-v1.png",
      "caption": "先估一估",
      "hint": "答案大約在哪裡？"
    },
    "lab": "estimate3"
  },
  {
    "id": "numberline",
    "label": "整數數線與加減",
    "group": "number",
    "position": [
      -27,
      12,
      0
    ],
    "standards": [
      "N-3-11"
    ],
    "units": [],
    "goal": "從 0 開始報讀數線，在數線上表示加減移動。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/number-line-v2.png",
      "caption": "數線走一走",
      "hint": "加往前，減往回。"
    },
    "lab": "numberline"
  },
  {
    "id": "multiplication",
    "label": "二位數乘一位數",
    "group": "multiply",
    "position": [
      -7,
      29,
      0
    ],
    "standards": [
      "N-3-3"
    ],
    "units": [
      "u27",
      "u28",
      "u49"
    ],
    "goal": "先拆十與個，再理解直式乘法與進位。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade2/v1/u27-tens-times-ones-v1.png",
      "caption": "二位數乘法",
      "hint": "拆成十與個，再乘。"
    }
  },
  {
    "id": "multiply3",
    "label": "三位數乘一位數",
    "group": "multiply",
    "position": [
      13,
      29,
      0
    ],
    "standards": [
      "N-3-3"
    ],
    "units": [
      "u60"
    ],
    "goal": "用位值解釋三位數乘一位數，含數字中有 0 的情形。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u60-multi-digit-multiplication-v1.png",
      "caption": "三位數乘法",
      "hint": "一位一位，乘起來。"
    }
  },
  {
    "id": "division",
    "label": "分裝、平分與餘數",
    "group": "multiply",
    "position": [
      -7,
      12,
      0
    ],
    "standards": [
      "N-3-4"
    ],
    "units": [
      "u39",
      "u40"
    ],
    "goal": "從分裝和平分理解除法，先整除再觀察餘數。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u39-exact-division-v1.png",
      "caption": "分一分",
      "hint": "分完後，還剩幾個？"
    }
  },
  {
    "id": "division2",
    "label": "二位數除法直式",
    "group": "multiply",
    "position": [
      13,
      12,
      0
    ],
    "standards": [
      "N-3-5"
    ],
    "units": [
      "u40"
    ],
    "goal": "用十與個的位值分配理解二位數除以一位數。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u40-two-digit-long-division-v1.png",
      "caption": "二位數除法",
      "hint": "先分十，再分個。"
    }
  },
  {
    "id": "division3",
    "label": "三位數除法直式",
    "group": "multiply",
    "position": [
      -7,
      -5,
      0
    ],
    "standards": [
      "N-3-5"
    ],
    "units": [
      "u41"
    ],
    "goal": "延伸到三位數，說明各位分配與餘數。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u41-three-digit-long-division-v1.png",
      "caption": "三位數除法",
      "hint": "百、十、個，依序分。"
    }
  },
  {
    "id": "check",
    "label": "乘除互相檢查",
    "group": "multiply",
    "position": [
      13,
      -5,
      0
    ],
    "standards": [
      "N-3-6",
      "R-3-1"
    ],
    "units": [
      "u42"
    ],
    "goal": "用商乘除數再加餘數，驗算並解決未知量問題。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u42-division-checking-v1.png",
      "caption": "乘回去檢查",
      "hint": "分完後，乘回去。"
    }
  },
  {
    "id": "twoSteps",
    "label": "兩步驟生活題",
    "group": "multiply",
    "position": [
      -27,
      -5,
      0
    ],
    "standards": [
      "N-3-7"
    ],
    "units": [],
    "goal": "分兩步解決連乘或加減與除的生活情境，不含併式。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/steps.svg",
      "caption": "分兩步",
      "hint": "看圖，一步一步來。"
    },
    "lab": "twoSteps3"
  },
  {
    "id": "fractionCompare",
    "label": "同分母分數比較",
    "group": "fraction",
    "position": [
      33,
      29,
      0
    ],
    "standards": [
      "N-3-9"
    ],
    "units": [
      "u44"
    ],
    "goal": "從相同大小的整體比較同分母分數，數量不超過 2。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u44-same-denominator-comparison-v1.png",
      "caption": "分數比大小",
      "hint": "每份一樣大，比份數。"
    }
  },
  {
    "id": "fractionAdd",
    "label": "同分母分數加法",
    "group": "fraction",
    "position": [
      33,
      12,
      0
    ],
    "standards": [
      "N-3-9"
    ],
    "units": [
      "u45"
    ],
    "goal": "合併相同單位分數，連結和等於 1，結果不超過 2。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u45-same-denominator-addition-v1.png",
      "caption": "分數加一加",
      "hint": "一樣大的小份合起來。"
    }
  },
  {
    "id": "fractionSub",
    "label": "同分母分數減法",
    "group": "fraction",
    "position": [
      33,
      -5,
      0
    ],
    "standards": [
      "N-3-9"
    ],
    "units": [
      "u46"
    ],
    "goal": "從相同單位的分數拿走幾份，說明剩餘份數。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u46-same-denominator-subtraction-v1.png",
      "caption": "分數減一減",
      "hint": "拿走幾份，還剩幾份？"
    }
  },
  {
    "id": "decimal",
    "label": "十分位與一位小數",
    "group": "fraction",
    "position": [
      50,
      -22,
      0
    ],
    "standards": [
      "N-3-10"
    ],
    "units": [
      "u62"
    ],
    "goal": "把 1 等分十份，認識十分位並比較及加減一位小數。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u62-decimal-tenths-v1.png",
      "caption": "認識小數",
      "hint": "一個分十份，連到小數。"
    }
  },
  {
    "id": "millimeter",
    "label": "毫米與長度換算",
    "group": "measure",
    "position": [
      -46,
      -22,
      0
    ],
    "standards": [
      "N-3-12"
    ],
    "units": [
      "u61"
    ],
    "goal": "使用毫米刻度測量，連結公分、公尺與換算。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u61-millimeter-conversion-v1.png",
      "caption": "量到毫米",
      "hint": "小刻度，也能量。"
    }
  },
  {
    "id": "area",
    "label": "平方公分與數格",
    "group": "measure",
    "position": [
      -27,
      -22,
      0
    ],
    "standards": [
      "N-3-14"
    ],
    "units": [
      "u50"
    ],
    "goal": "每格代表 1 平方公分，數格、估測面積，不背一般面積公式。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u50-grid-area-v1.png",
      "caption": "數格看面積",
      "hint": "一格一格，數面積。"
    }
  },
  {
    "id": "capacity",
    "label": "公升與毫升",
    "group": "measure",
    "position": [
      -7,
      -22,
      0
    ],
    "standards": [
      "N-3-15"
    ],
    "units": [
      "u117"
    ],
    "goal": "報讀量杯，體驗容量並換算公升、毫升。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/capacity.svg",
      "caption": "公升毫升",
      "hint": "一公升，是一千毫升。"
    }
  },
  {
    "id": "weight",
    "label": "公斤與公克",
    "group": "measure",
    "position": [
      13,
      -22,
      0
    ],
    "standards": [
      "N-3-16"
    ],
    "units": [
      "u120"
    ],
    "goal": "報讀秤面，體驗重量並換算公斤、公克。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/weight.svg",
      "caption": "公斤公克",
      "hint": "一公斤，是一千公克。"
    }
  },
  {
    "id": "time",
    "label": "時間單位與計算",
    "group": "measure",
    "position": [
      33,
      -22,
      0
    ],
    "standards": [
      "N-3-17"
    ],
    "units": [
      "u122"
    ],
    "goal": "認識日、時、分、秒，處理同單位及無進退位的時分加減。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/unit-09-time-v2.png",
      "caption": "算算時間",
      "hint": "從開始，到結束。"
    }
  },
  {
    "id": "angle",
    "label": "角的比較與直角",
    "group": "shape",
    "position": [
      50,
      29,
      0
    ],
    "standards": [
      "N-3-13",
      "S-3-1"
    ],
    "units": [
      "u51"
    ],
    "goal": "疊合比較角，辨認直角，知道邊較長不代表角較大。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade3/v1/u51-angle-types-v1.png",
      "caption": "比一比角",
      "hint": "看張開多少，不看邊長。"
    },
    "note": "核心以角的比較與直角為主，原課程銳角與鈍角名稱作延伸認識。"
  },
  {
    "id": "rectangle",
    "label": "正方形與長方形",
    "group": "shape",
    "position": [
      50,
      12,
      0
    ],
    "standards": [
      "S-3-2"
    ],
    "units": [],
    "goal": "依邊長及四個直角判斷圖形，斜放仍是同一種圖形。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/flat-shapes-v2.png",
      "caption": "轉了也認得",
      "hint": "看邊和角，別只看方向。"
    },
    "lab": "rectangle"
  },
  {
    "id": "circle",
    "label": "圓心、半徑、直徑",
    "group": "shape",
    "position": [
      13,
      -39,
      0
    ],
    "standards": [
      "S-3-3"
    ],
    "units": [
      "u121"
    ],
    "goal": "找圓心、半徑與直徑，操作圓規畫圓。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/circle.svg",
      "caption": "認識圓",
      "hint": "從圓心，畫出一個圓。"
    }
  },
  {
    "id": "nets",
    "label": "分割重組與展開圖",
    "group": "shape",
    "position": [
      33,
      -39,
      0
    ],
    "standards": [
      "S-3-4"
    ],
    "units": [],
    "goal": "操作平面圖形分割重組，體驗不同展開圖黏合成同一立體。",
    "scope": "core",
    "visual": {
      "art": "images/math-grade1/v2/unit-05-solids-v2.png",
      "caption": "攤開再摺起",
      "hint": "平平的，摺成立體。"
    },
    "lab": "nets"
  },
  {
    "id": "pattern",
    "label": "觀察數量規律",
    "group": "data",
    "position": [
      -46,
      -39,
      0
    ],
    "standards": [
      "R-3-2"
    ],
    "units": [
      "u119"
    ],
    "goal": "觀察數量變化，說出規律並推想下一個，不使用公式。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/pattern.svg",
      "caption": "找規律",
      "hint": "下一個，會是什麼？"
    }
  },
  {
    "id": "table",
    "label": "一維與二維表格",
    "group": "data",
    "position": [
      -27,
      -39,
      0
    ],
    "standards": [
      "D-3-1"
    ],
    "units": [
      "u123"
    ],
    "goal": "報讀、說明並製作生活表格，連結分類與數量模式。",
    "scope": "core",
    "visual": {
      "art": "modules/math-knowledge/icons/table.svg",
      "caption": "看懂表格",
      "hint": "看行、看列，找資料。"
    }
  }
];
export const edges = [
  {
    "from": "tenThousand",
    "to": "addSub",
    "reason": "先探索「一萬以內的數」，再把操作經驗連結到「四位數加減」。",
    "strength": "suggested"
  },
  {
    "from": "addSub",
    "to": "estimate",
    "reason": "先探索「四位數加減」，再把操作經驗連結到「四則估算」。",
    "strength": "suggested"
  },
  {
    "from": "tenThousand",
    "to": "numberline",
    "reason": "先探索「一萬以內的數」，再把操作經驗連結到「整數數線與加減」。",
    "strength": "suggested"
  },
  {
    "from": "numberline",
    "to": "millimeter",
    "reason": "先探索「整數數線與加減」，再把操作經驗連結到「毫米與長度換算」。",
    "strength": "suggested"
  },
  {
    "from": "tenThousand",
    "to": "multiplication",
    "reason": "先探索「一萬以內的數」，再把操作經驗連結到「二位數乘一位數」。",
    "strength": "suggested"
  },
  {
    "from": "multiplication",
    "to": "multiply3",
    "reason": "先探索「二位數乘一位數」，再把操作經驗連結到「三位數乘一位數」。",
    "strength": "suggested"
  },
  {
    "from": "division",
    "to": "division2",
    "reason": "先探索「分裝、平分與餘數」，再把操作經驗連結到「二位數除法直式」。",
    "strength": "suggested"
  },
  {
    "from": "division2",
    "to": "division3",
    "reason": "先探索「二位數除法直式」，再把操作經驗連結到「三位數除法直式」。",
    "strength": "suggested"
  },
  {
    "from": "division",
    "to": "check",
    "reason": "先探索「分裝、平分與餘數」，再把操作經驗連結到「乘除互相檢查」。",
    "strength": "suggested"
  },
  {
    "from": "multiplication",
    "to": "check",
    "reason": "先探索「二位數乘一位數」，再把操作經驗連結到「乘除互相檢查」。",
    "strength": "suggested"
  },
  {
    "from": "check",
    "to": "twoSteps",
    "reason": "先探索「乘除互相檢查」，再把操作經驗連結到「兩步驟生活題」。",
    "strength": "suggested"
  },
  {
    "from": "multiply3",
    "to": "twoSteps",
    "reason": "先探索「三位數乘一位數」，再把操作經驗連結到「兩步驟生活題」。",
    "strength": "suggested"
  },
  {
    "from": "addSub",
    "to": "twoSteps",
    "reason": "先探索「四位數加減」，再把操作經驗連結到「兩步驟生活題」。",
    "strength": "suggested"
  },
  {
    "from": "fractionCompare",
    "to": "fractionAdd",
    "reason": "先探索「同分母分數比較」，再把操作經驗連結到「同分母分數加法」。",
    "strength": "suggested"
  },
  {
    "from": "fractionCompare",
    "to": "fractionSub",
    "reason": "先探索「同分母分數比較」，再把操作經驗連結到「同分母分數減法」。",
    "strength": "suggested"
  },
  {
    "from": "fractionAdd",
    "to": "decimal",
    "reason": "先探索「同分母分數加法」，再把操作經驗連結到「十分位與一位小數」。",
    "strength": "suggested"
  },
  {
    "from": "fractionSub",
    "to": "decimal",
    "reason": "先探索「同分母分數減法」，再把操作經驗連結到「十分位與一位小數」。",
    "strength": "suggested"
  },
  {
    "from": "millimeter",
    "to": "area",
    "reason": "先探索「毫米與長度換算」，再把操作經驗連結到「平方公分與數格」。",
    "strength": "suggested"
  },
  {
    "from": "angle",
    "to": "rectangle",
    "reason": "先探索「角的比較與直角」，再把操作經驗連結到「正方形與長方形」。",
    "strength": "suggested"
  },
  {
    "from": "rectangle",
    "to": "area",
    "reason": "先探索「正方形與長方形」，再把操作經驗連結到「平方公分與數格」。",
    "strength": "suggested"
  },
  {
    "from": "rectangle",
    "to": "nets",
    "reason": "先探索「正方形與長方形」，再把操作經驗連結到「分割重組與展開圖」。",
    "strength": "suggested"
  },
  {
    "from": "angle",
    "to": "circle",
    "reason": "先探索「角的比較與直角」，再把操作經驗連結到「圓心、半徑、直徑」。",
    "strength": "suggested"
  },
  {
    "from": "pattern",
    "to": "table",
    "reason": "先探索「觀察數量規律」，再把操作經驗連結到「一維與二維表格」。",
    "strength": "suggested"
  }
];
export const courseOrder = [
  "u58",
  "u59",
  "u61",
  "u27",
  "u28",
  "u49",
  "u60",
  "u51",
  "u50",
  "u39",
  "u40",
  "u117",
  "u44",
  "u45",
  "u46",
  "u41",
  "u119",
  "u120",
  "u62",
  "u121",
  "u122",
  "u123",
  "u42"
];
export const routeVisuals = {
  "number": {
    "topic": "tenThousand",
    "label": "數感"
  },
  "multiply": {
    "topic": "multiplication",
    "label": "乘除"
  },
  "fraction": {
    "topic": "fractionCompare",
    "label": "分數"
  },
  "measure": {
    "topic": "millimeter",
    "label": "測量"
  },
  "shape": {
    "topic": "angle",
    "label": "圖形"
  },
  "data": {
    "topic": "pattern",
    "label": "發現"
  }
};
