import type {ObjectSpec,StoryPage,SceneSpec} from './book';
import type {StoryMotion} from './choreography';
export const cakeObjects:Record<string,ObjectSpec>={
  "gail": {
    "id": "gail",
    "word": "Gail",
    "x": 82,
    "y": 69,
    "w": 21,
    "h": 52,
    "kind": "girl",
    "image": "../little-star-v1/gail-paper.png"
  },
  "mom": {
    "id": "mom",
    "word": "Mom",
    "x": 20,
    "y": 66,
    "w": 22,
    "h": 56,
    "sprite": {
      "sheet": "../red-hood-v1/cast.png",
      "cell": 2,
      "columns": 2
    }
  },
  "dad": {
    "id": "dad",
    "word": "Dad",
    "x": 48,
    "y": 63,
    "w": 24,
    "h": 62,
    "image": "dad.png"
  },
  "flour": {
    "id": "flour",
    "word": "flour",
    "x": 36,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 0,
      "columns": 3
    }
  },
  "milk": {
    "id": "milk",
    "word": "milk",
    "x": 53,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 1,
      "columns": 3
    }
  },
  "eggs": {
    "id": "eggs",
    "word": "eggs",
    "x": 70,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 2,
      "columns": 3
    }
  },
  "strawberries": {
    "id": "strawberries",
    "word": "strawberries",
    "x": 36,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 3,
      "columns": 3
    }
  },
  "butter": {
    "id": "butter",
    "word": "butter",
    "x": 53,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 4,
      "columns": 3
    }
  },
  "sugar": {
    "id": "sugar",
    "word": "sugar",
    "x": 70,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 5,
      "columns": 3
    }
  },
  "bowl": {
    "id": "bowl",
    "word": "bowl",
    "x": 52,
    "y": 76,
    "w": 19,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 6,
      "columns": 3
    }
  },
  "whisk": {
    "id": "whisk",
    "word": "whisk",
    "x": 68,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 7,
      "columns": 3
    }
  },
  "basket": {
    "id": "basket",
    "word": "basket",
    "x": 58,
    "y": 76,
    "w": 16,
    "h": 26,
    "sprite": {
      "sheet": "ingredients.png",
      "cell": 8,
      "columns": 3
    }
  },
  "plain": {
    "id": "plain",
    "word": "plain",
    "x": 53,
    "y": 74,
    "w": 33,
    "h": 36,
    "sprite": {
      "sheet": "cakes.png",
      "cell": 0,
      "columns": 2
    }
  },
  "frosted": {
    "id": "frosted",
    "word": "frosted",
    "x": 53,
    "y": 74,
    "w": 33,
    "h": 36,
    "sprite": {
      "sheet": "cakes.png",
      "cell": 1,
      "columns": 2
    }
  },
  "decorated": {
    "id": "decorated",
    "word": "decorated",
    "x": 53,
    "y": 74,
    "w": 33,
    "h": 36,
    "sprite": {
      "sheet": "cakes.png",
      "cell": 2,
      "columns": 2
    }
  },
  "finished": {
    "id": "finished",
    "word": "finished",
    "x": 53,
    "y": 74,
    "w": 33,
    "h": 36,
    "sprite": {
      "sheet": "cakes.png",
      "cell": 3,
      "columns": 2
    }
  },
  "calendar": {
    "id": "calendar",
    "word": "calendar",
    "x": 54,
    "y": 35,
    "w": 14,
    "h": 22,
    "image": "calendar.svg"
  },
  "stall": {
    "id": "stall",
    "word": "stall",
    "x": 50,
    "y": 28,
    "w": 30,
    "h": 30,
    "image": "stall.svg"
  },
  "door": {
    "id": "door",
    "word": "door",
    "x": 9,
    "y": 40,
    "w": 16,
    "h": 60,
    "image": "door.svg"
  },
  "sink": {
    "id": "sink",
    "word": "sink",
    "x": 83,
    "y": 30,
    "w": 20,
    "h": 18,
    "image": "sink.svg"
  },
  "apron": {
    "id": "apron",
    "word": "apron",
    "x": 53,
    "y": 62,
    "w": 15,
    "h": 30,
    "image": "apron.svg"
  },
  "cup": {
    "id": "cup",
    "word": "cup",
    "x": 69,
    "y": 76,
    "w": 14,
    "h": 21,
    "image": "cup.svg"
  },
  "cloth": {
    "id": "cloth",
    "word": "cloth",
    "x": 65,
    "y": 77,
    "w": 16,
    "h": 16,
    "image": "cloth.svg"
  },
  "pan": {
    "id": "pan",
    "word": "pan",
    "x": 54,
    "y": 78,
    "w": 24,
    "h": 20,
    "image": "pan.svg"
  },
  "spoon": {
    "id": "spoon",
    "word": "spoon",
    "x": 70,
    "y": 74,
    "w": 12,
    "h": 28,
    "image": "spoon.svg"
  },
  "oven": {
    "id": "oven",
    "word": "oven",
    "x": 18,
    "y": 39,
    "w": 24,
    "h": 32,
    "image": "oven.svg"
  },
  "timer": {
    "id": "timer",
    "word": "timer",
    "x": 67,
    "y": 65,
    "w": 13,
    "h": 18,
    "image": "timer.svg"
  },
  "rack": {
    "id": "rack",
    "word": "rack",
    "x": 55,
    "y": 83,
    "w": 29,
    "h": 12,
    "image": "rack.svg"
  },
  "cream": {
    "id": "cream",
    "word": "cream",
    "x": 34,
    "y": 76,
    "w": 16,
    "h": 22,
    "image": "cream.svg"
  },
  "spatula": {
    "id": "spatula",
    "word": "spatula",
    "x": 70,
    "y": 72,
    "w": 12,
    "h": 28,
    "image": "spatula.svg"
  },
  "candle": {
    "id": "candle",
    "word": "candle",
    "x": 73,
    "y": 61,
    "w": 11,
    "h": 26,
    "image": "candle.svg"
  },
  "slice": {
    "id": "slice",
    "word": "slice",
    "x": 40,
    "y": 76,
    "w": 18,
    "h": 24,
    "image": "slice.svg"
  },
  "plate": {
    "id": "plate",
    "word": "plate",
    "x": 67,
    "y": 82,
    "w": 24,
    "h": 15,
    "image": "plate.svg"
  },
  "heart": {
    "id": "heart",
    "word": "heart",
    "x": 53,
    "y": 43,
    "w": 16,
    "h": 22,
    "image": "heart.svg"
  }
};
export const cakeScenes:Record<string,SceneSpec>={
  "home": {
    "name": "Gail 的家",
    "caption": "A LITTLE BIRTHDAY SECRET",
    "alt": "溫暖客廳與彩色生日布旗",
    "sheet": "scenes.png",
    "cell": 0
  },
  "market": {
    "name": "街角市場",
    "caption": "A BASKET FULL OF POSSIBILITIES",
    "alt": "蔬果攤、雜貨店和石板街道",
    "sheet": "scenes.png",
    "cell": 1
  },
  "kitchen": {
    "name": "親子烘焙廚房",
    "caption": "A LITTLE FLOUR. A LOT OF LOVE.",
    "alt": "薄荷綠廚房和乾淨木製料理桌",
    "sheet": "scenes.png",
    "cell": 2
  },
  "party": {
    "name": "生日餐桌",
    "caption": "SEVEN CANDLES IN MY HEART",
    "alt": "溫暖生日餐廳、彩旗和慶生桌",
    "sheet": "scenes.png",
    "cell": 3
  }
};
export const cakePages:StoryPage[]=[
  {
    "title": "Seven soon",
    "scene": "home",
    "lines": [
      "Gail will be seven tomorrow.",
      "“What is my birthday gift?” she asks.",
      "Mom smiles. “Come with me!”"
    ],
    "words": [
      "calendar"
    ],
    "objects": [
      "gail",
      "mom",
      "calendar"
    ],
    "mission": {
      "type": "find",
      "answer": "calendar",
      "prompt": "Find the calendar.",
      "hint": "點選 calendar"
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "A little surprise",
    "scene": "home",
    "lines": [
      "“Is it a toy?” asks Gail.",
      "“Not yet! We have something to do,” says Mom.",
      "Gail picks up a basket."
    ],
    "words": [
      "basket"
    ],
    "objects": [
      "gail",
      "mom",
      "basket"
    ],
    "mission": {
      "type": "find",
      "answer": "basket",
      "prompt": "Find the basket.",
      "hint": "點選 basket"
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "Off to the market",
    "scene": "market",
    "lines": [
      "Gail and Mom walk to the market.",
      "The stalls are full of colors.",
      "Gail holds the basket with both hands."
    ],
    "words": [
      "basket",
      "stall"
    ],
    "objects": [
      "gail",
      "mom",
      "basket",
      "stall"
    ],
    "mission": {
      "type": "find",
      "answer": "stall",
      "prompt": "Find the stall.",
      "hint": "點選 stall"
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "A bag of flour",
    "scene": "market",
    "lines": [
      "“First, we need flour,” says Mom.",
      "The flour is soft and white.",
      "Gail puts one bag in the basket."
    ],
    "words": [
      "flour",
      "basket"
    ],
    "objects": [
      "gail",
      "mom",
      "flour",
      "basket"
    ],
    "mission": {
      "type": "drag",
      "answer": "flour",
      "prompt": "Move the flour to the basket.",
      "hint": "把 flour 放到 basket",
      "target": "basket"
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "Red strawberries",
    "scene": "market",
    "lines": [
      "Gail sees bright red strawberries.",
      "“These smell sweet!” she says.",
      "She picks a bowl of ripe strawberries."
    ],
    "words": [
      "strawberries",
      "basket"
    ],
    "objects": [
      "gail",
      "mom",
      "strawberries",
      "basket"
    ],
    "mission": {
      "type": "drag",
      "answer": "strawberries",
      "prompt": "Move the strawberries to the basket.",
      "hint": "把 strawberries 放到 basket",
      "target": "basket"
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "Milk and eggs",
    "scene": "market",
    "lines": [
      "Next, they buy milk and eggs.",
      "Gail carries the eggs gently.",
      "“I will keep them safe,” she says."
    ],
    "words": [
      "milk",
      "eggs",
      "basket"
    ],
    "objects": [
      "gail",
      "mom",
      "milk",
      "eggs",
      "basket"
    ],
    "mission": {
      "type": "sequence",
      "answer": "milk",
      "prompt": "Tap milk, then eggs.",
      "hint": "依序點選 milk, eggs",
      "steps": [
        "milk",
        "eggs"
      ]
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "Two more things",
    "scene": "market",
    "lines": [
      "Mom adds butter and sugar.",
      "Gail looks inside the basket.",
      "“Are we making something yummy?”"
    ],
    "words": [
      "butter",
      "sugar",
      "basket"
    ],
    "objects": [
      "gail",
      "mom",
      "butter",
      "sugar",
      "basket"
    ],
    "mission": {
      "type": "sequence",
      "answer": "butter",
      "prompt": "Tap butter, then sugar.",
      "hint": "依序點選 butter, sugar",
      "steps": [
        "butter",
        "sugar"
      ]
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "Home with our basket",
    "scene": "home",
    "lines": [
      "The basket is heavy now.",
      "Mom and Gail carry it together.",
      "At home, they put everything away."
    ],
    "words": [
      "basket",
      "door"
    ],
    "objects": [
      "gail",
      "mom",
      "basket",
      "door"
    ],
    "mission": {
      "type": "find",
      "answer": "basket",
      "prompt": "Find the basket.",
      "hint": "點選 basket"
    },
    "action": "bake",
    "placements": {}
  },
  {
    "title": "Ready to bake",
    "scene": "kitchen",
    "lines": [
      "“We will make your birthday cake!” says Mom.",
      "Gail washes her hands and ties her apron.",
      "“I can help!” she says."
    ],
    "words": [
      "sink",
      "apron"
    ],
    "objects": [
      "gail",
      "mom",
      "sink",
      "apron"
    ],
    "mission": {
      "type": "sequence",
      "answer": "sink",
      "prompt": "Tap sink, then apron.",
      "hint": "依序點選 sink, apron",
      "steps": [
        "sink",
        "apron"
      ]
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Measure the flour",
    "scene": "kitchen",
    "lines": [
      "Mom shows Gail a measuring cup.",
      "Gail fills it with flour.",
      "She tips the flour into the bowl."
    ],
    "words": [
      "flour",
      "bowl",
      "cup"
    ],
    "objects": [
      "gail",
      "mom",
      "flour",
      "bowl",
      "cup"
    ],
    "mission": {
      "type": "drag",
      "answer": "flour",
      "prompt": "Move the flour to the bowl.",
      "hint": "把 flour 放到 bowl",
      "target": "bowl"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Oops, a little cloud",
    "scene": "kitchen",
    "lines": [
      "Poof! Some flour lands on the table.",
      "Gail looks worried.",
      "“It is all right. We can clean it up.”"
    ],
    "words": [
      "flour",
      "cloth",
      "bowl"
    ],
    "objects": [
      "gail",
      "mom",
      "flour",
      "cloth",
      "bowl"
    ],
    "mission": {
      "type": "find",
      "answer": "cloth",
      "prompt": "Find the cloth.",
      "hint": "點選 cloth"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Butter and sugar",
    "scene": "kitchen",
    "lines": [
      "Gail puts butter and sugar in the bowl.",
      "She stirs until the mixture is soft.",
      "“Round and round,” says Mom."
    ],
    "words": [
      "butter",
      "sugar",
      "bowl"
    ],
    "objects": [
      "gail",
      "mom",
      "butter",
      "sugar",
      "bowl",
      "whisk"
    ],
    "mission": {
      "type": "sequence",
      "answer": "butter",
      "prompt": "Tap butter, then sugar, then whisk.",
      "hint": "依序點選 butter, sugar, whisk",
      "steps": [
        "butter",
        "sugar",
        "whisk"
      ]
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Crack the eggs",
    "scene": "kitchen",
    "lines": [
      "Mom helps Gail crack the eggs.",
      "They add them one at a time.",
      "No shells go into the bowl!"
    ],
    "words": [
      "eggs",
      "bowl"
    ],
    "objects": [
      "gail",
      "mom",
      "eggs",
      "bowl"
    ],
    "mission": {
      "type": "drag",
      "answer": "eggs",
      "prompt": "Move the eggs to the bowl.",
      "hint": "把 eggs 放到 bowl",
      "target": "bowl"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Pour the milk",
    "scene": "kitchen",
    "lines": [
      "Gail pours in a little milk.",
      "Mom adds the measured flour.",
      "The mixture turns smooth and creamy."
    ],
    "words": [
      "milk",
      "flour",
      "bowl"
    ],
    "objects": [
      "gail",
      "mom",
      "milk",
      "flour",
      "bowl"
    ],
    "mission": {
      "type": "drag",
      "answer": "milk",
      "prompt": "Move the milk to the bowl.",
      "hint": "把 milk 放到 bowl",
      "target": "bowl"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "My arms are tired",
    "scene": "kitchen",
    "lines": [
      "Gail stirs the batter slowly.",
      "“My arms are tired,” she says.",
      "Mom helps, and Gail tries again."
    ],
    "words": [
      "bowl",
      "whisk"
    ],
    "objects": [
      "gail",
      "mom",
      "bowl",
      "whisk"
    ],
    "mission": {
      "type": "tap",
      "answer": "whisk",
      "prompt": "Tap the whisk three times.",
      "hint": "點攪拌器三次"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Into the cake pan",
    "scene": "kitchen",
    "lines": [
      "They pour the batter into a cake pan.",
      "Gail scrapes the bowl with a spoon.",
      "“Every little bit!” she says."
    ],
    "words": [
      "bowl",
      "pan",
      "spoon"
    ],
    "objects": [
      "gail",
      "mom",
      "bowl",
      "pan",
      "spoon"
    ],
    "mission": {
      "type": "drag",
      "answer": "bowl",
      "prompt": "Move the bowl to the pan.",
      "hint": "把 bowl 放到 pan",
      "target": "pan"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Mom uses the oven",
    "scene": "kitchen",
    "lines": [
      "Mom puts the pan in the hot oven.",
      "Gail stands back and watches.",
      "They set a timer and wait."
    ],
    "words": [
      "pan",
      "oven",
      "timer"
    ],
    "objects": [
      "gail",
      "mom",
      "pan",
      "oven",
      "timer"
    ],
    "mission": {
      "type": "sequence",
      "answer": "oven",
      "prompt": "Tap oven, then timer.",
      "hint": "依序點選 oven, timer",
      "steps": [
        "oven",
        "timer"
      ]
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "While we wait",
    "scene": "kitchen",
    "lines": [
      "Gail washes the strawberries.",
      "She dries them with a clean cloth.",
      "Mom cuts them into little pieces."
    ],
    "words": [
      "strawberries",
      "sink",
      "cloth"
    ],
    "objects": [
      "gail",
      "mom",
      "strawberries",
      "sink",
      "cloth"
    ],
    "mission": {
      "type": "drag",
      "answer": "strawberries",
      "prompt": "Move the strawberries to the sink.",
      "hint": "把 strawberries 放到 sink",
      "target": "sink"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Ding! A golden cake",
    "scene": "kitchen",
    "lines": [
      "Ding! The kitchen smells wonderful.",
      "Mom takes out the golden cake.",
      "They let it cool on a rack."
    ],
    "words": [
      "plain",
      "rack",
      "timer"
    ],
    "objects": [
      "gail",
      "mom",
      "plain",
      "rack",
      "timer"
    ],
    "mission": {
      "type": "drag",
      "answer": "plain",
      "prompt": "Move the plain to the rack.",
      "hint": "把 plain 放到 rack",
      "target": "rack"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "Soft white cream",
    "scene": "kitchen",
    "lines": [
      "The cake is cool now.",
      "Gail spreads soft white cream on top.",
      "“Slowly, all the way around,” says Mom."
    ],
    "words": [
      "plain",
      "cream",
      "spatula"
    ],
    "objects": [
      "gail",
      "mom",
      "plain",
      "cream",
      "spatula"
    ],
    "mission": {
      "type": "drag",
      "answer": "spatula",
      "prompt": "Move the spatula to the plain.",
      "hint": "把 spatula 放到 plain",
      "target": "plain"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "A strawberry crown",
    "scene": "kitchen",
    "lines": [
      "Gail places strawberries on the cream.",
      "One here, one there, all around!",
      "Her cake looks like a little crown."
    ],
    "words": [
      "frosted",
      "strawberries"
    ],
    "objects": [
      "gail",
      "mom",
      "frosted",
      "strawberries"
    ],
    "mission": {
      "type": "drag",
      "answer": "strawberries",
      "prompt": "Move the strawberries to the frosted.",
      "hint": "把 strawberries 放到 frosted",
      "target": "frosted"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      }
    }
  },
  {
    "title": "One special candle",
    "scene": "party",
    "lines": [
      "Gail puts the cake on the table.",
      "Mom gives her a number-seven candle.",
      "Gail places it on top of the cake."
    ],
    "words": [
      "decorated",
      "candle"
    ],
    "objects": [
      "gail",
      "mom",
      "decorated",
      "candle"
    ],
    "mission": {
      "type": "drag",
      "answer": "candle",
      "prompt": "Move the candle to the decorated.",
      "hint": "把 candle 放到 decorated",
      "target": "decorated"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      },
      "dad": {
        "x": 47,
        "y": 43,
        "w": 23,
        "h": 60
      }
    }
  },
  {
    "title": "Happy birthday, Gail!",
    "scene": "party",
    "lines": [
      "Dad comes in and hugs Gail.",
      "Mom lights the candle. They sing together.",
      "“Happy birthday, Gail! You are seven!”"
    ],
    "words": [
      "finished"
    ],
    "objects": [
      "gail",
      "mom",
      "dad",
      "finished"
    ],
    "mission": {
      "type": "sequence",
      "answer": "dad",
      "prompt": "Tap mom, then dad.",
      "hint": "依序點選 mom, dad",
      "steps": [
        "mom",
        "dad"
      ]
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      },
      "dad": {
        "x": 47,
        "y": 43,
        "w": 23,
        "h": 60
      }
    }
  },
  {
    "title": "A wish and a slice",
    "scene": "party",
    "lines": [
      "Gail makes a wish and blows out the candle.",
      "Dad helps her cut the cake.",
      "She shares a slice with Mom and Dad."
    ],
    "words": [
      "finished",
      "slice",
      "plate"
    ],
    "objects": [
      "gail",
      "mom",
      "dad",
      "finished",
      "slice",
      "plate"
    ],
    "mission": {
      "type": "drag",
      "answer": "slice",
      "prompt": "Move the slice to the plate.",
      "hint": "把 slice 放到 plate",
      "target": "plate"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      },
      "dad": {
        "x": 47,
        "y": 43,
        "w": 23,
        "h": 60
      }
    }
  },
  {
    "title": "Made with love",
    "scene": "party",
    "lines": [
      "“This is my favorite gift,” says Gail.",
      "“I made it with you, and I will enjoy every bite.”",
      "Her cake is full of work, care, and love."
    ],
    "words": [
      "slice",
      "heart"
    ],
    "objects": [
      "gail",
      "mom",
      "dad",
      "slice",
      "heart"
    ],
    "mission": {
      "type": "find",
      "answer": "heart",
      "prompt": "Find the heart.",
      "hint": "點選 heart"
    },
    "action": "bake",
    "placements": {
      "gail": {
        "x": 82,
        "y": 51,
        "w": 21,
        "h": 49
      },
      "mom": {
        "x": 20,
        "y": 46,
        "w": 22,
        "h": 56
      },
      "dad": {
        "x": 47,
        "y": 43,
        "w": 23,
        "h": 60
      }
    }
  }
];
export const cakeChoreography:Record<number,Record<number,StoryMotion[]>>={
  "0": {
    "1": [
      {
        "actor": "calendar",
        "x": 54,
        "y": 32,
        "rotate": 5
      }
    ]
  },
  "1": {
    "1": [
      {
        "actor": "basket",
        "x": 58,
        "y": 73,
        "rotate": 5
      }
    ]
  },
  "2": {
    "0": [
      {
        "actor": "gail",
        "x": 63,
        "y": 69,
        "walk": true
      },
      {
        "actor": "mom",
        "x": 30,
        "y": 66,
        "walk": true
      }
    ]
  },
  "3": {
    "2": [
      {
        "actor": "flour",
        "x": 58,
        "y": 76
      }
    ]
  },
  "4": {
    "2": [
      {
        "actor": "strawberries",
        "x": 58,
        "y": 76
      }
    ]
  },
  "5": {
    "1": [
      {
        "actor": "milk",
        "x": 53,
        "y": 73,
        "rotate": 5
      }
    ]
  },
  "6": {
    "1": [
      {
        "actor": "butter",
        "x": 53,
        "y": 73,
        "rotate": 5
      }
    ]
  },
  "7": {
    "0": [
      {
        "actor": "basket",
        "x": 52,
        "y": 73
      }
    ],
    "1": [
      {
        "actor": "gail",
        "x": 64,
        "y": 69,
        "walk": true
      }
    ]
  },
  "8": {
    "1": [
      {
        "actor": "sink",
        "x": 83,
        "y": 27,
        "rotate": 5
      }
    ]
  },
  "9": {
    "2": [
      {
        "actor": "flour",
        "x": 52,
        "y": 76
      }
    ]
  },
  "10": {
    "1": [
      {
        "actor": "cloth",
        "x": 65,
        "y": 74,
        "rotate": 5
      }
    ]
  },
  "11": {
    "0": [
      {
        "actor": "butter",
        "x": 52,
        "y": 73
      },
      {
        "actor": "sugar",
        "x": 54,
        "y": 72
      }
    ],
    "1": [
      {
        "actor": "whisk",
        "x": 53,
        "y": 69,
        "rotate": 25
      }
    ]
  },
  "12": {
    "2": [
      {
        "actor": "eggs",
        "x": 52,
        "y": 76
      }
    ]
  },
  "13": {
    "2": [
      {
        "actor": "milk",
        "x": 52,
        "y": 76
      }
    ]
  },
  "14": {
    "0": [
      {
        "actor": "whisk",
        "x": 50,
        "y": 70,
        "rotate": -25
      }
    ],
    "2": [
      {
        "actor": "whisk",
        "x": 55,
        "y": 70,
        "rotate": 25
      }
    ]
  },
  "15": {
    "2": [
      {
        "actor": "bowl",
        "x": 54,
        "y": 78
      }
    ]
  },
  "16": {
    "0": [
      {
        "actor": "pan",
        "x": 18,
        "y": 39,
        "scale": 0.65
      }
    ],
    "2": [
      {
        "actor": "timer",
        "x": 67,
        "y": 63,
        "rotate": 6
      }
    ]
  },
  "17": {
    "2": [
      {
        "actor": "strawberries",
        "x": 83,
        "y": 30
      }
    ]
  },
  "18": {
    "2": [
      {
        "actor": "plain",
        "x": 55,
        "y": 83
      }
    ]
  },
  "19": {
    "1": [
      {
        "actor": "spatula",
        "x": 51,
        "y": 63,
        "rotate": -25
      }
    ]
  },
  "20": {
    "1": [
      {
        "actor": "strawberries",
        "x": 53,
        "y": 64
      }
    ]
  },
  "21": {
    "2": [
      {
        "actor": "candle",
        "x": 53,
        "y": 55
      }
    ]
  },
  "22": {
    "0": [
      {
        "actor": "dad",
        "x": 56,
        "y": 43,
        "walk": true
      }
    ]
  },
  "23": {
    "2": [
      {
        "actor": "slice",
        "x": 67,
        "y": 82
      }
    ]
  },
  "24": {
    "1": [
      {
        "actor": "heart",
        "x": 53,
        "y": 40,
        "rotate": 5
      }
    ]
  }
};
// Measured dry flour is held separately until it joins the wet mixture.
cakePages[0].lines[0]='Gail is turning seven today.';
cakePages[6].lines[0]='Mom adds butter, sugar, and cream.';
cakePages[6].objects.push('cream');
cakePages[9].lines[2]='She levels the top of the cup.';
cakePages[9].mission={type:'drag',answer:'flour',target:'cup',prompt:'Move the flour to the cup.',hint:'把麵粉放到量杯'};
cakeChoreography[9]={2:[{actor:'flour',x:69,y:76,rotate:20}]};
// Face-to-face baking with the counter masking the lower body naturally.
cakePages.forEach(p=>{if(['kitchen','party'].includes(p.scene)){p.placements={...p.placements,gail:{x:82,y:43,w:21,h:52},mom:{x:20,y:40,w:22,h:56}};}});

for(const id of ['plain','frosted','decorated','finished'])cakeObjects[id].word='cake';
for(const p of cakePages)p.words=p.words.map(w=>['plain','frosted','decorated','finished'].includes(w)?'cake':w);
cakePages[22].words=['birthday','candle','seven'];cakePages[24].words=['gift','care','love'];
for(const p of cakePages){if(p.scene==='party')p.placements!.dad={x:47,y:39,w:32,h:68};}
cakeChoreography[22][0]=[{actor:'dad',x:58,y:39,walk:true}];
for(const p of cakePages){
 const m=p.mission;
 const name=(id:string)=>cakeObjects[id].word;
 if(m.type==='drag')m.prompt=`Move the ${name(m.answer)} to the ${name(m.target!)}.`;
 if(m.type==='sequence')m.prompt=`Tap ${m.steps!.map(name).join(', then ')}.`;
}
// Keep ingredients and their targets independently reachable before combining them.
Object.assign(cakePages[11].placements!,{butter:{x:32,y:76},sugar:{x:70,y:76},whisk:{x:84,y:74}});
Object.assign(cakePages[13].placements!,{milk:{x:32,y:76},flour:{x:72,y:76}});
Object.assign(cakePages[15].placements!,{bowl:{x:34,y:76},pan:{x:62,y:78},spoon:{x:82,y:74}});
cakeChoreography[15]={0:[{actor:'bowl',x:62,y:70,rotate:22}]};
