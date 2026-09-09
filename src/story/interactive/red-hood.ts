import type {ObjectSpec,StoryPage,SceneSpec} from './book';
import type {StoryMotion} from './choreography';
const puppet=(id:string,word:string,cell:number,x:number):ObjectSpec=>({id,word,x,y:69,w:22,h:54,sprite:{sheet:'cast.png',cell,columns:2,clip:cell<2?'inset(0 0 3% 0)':undefined}});
const prop=(id:string,cell:number,x:number,y:number,w=14,h=21):ObjectSpec=>({id,word:id,x,y,w,h,sprite:{sheet:'props.png',cell,columns:3}});
const hot=(id:string,word:string,x:number,y:number,w:number,h:number):ObjectSpec=>({id,word,x,y,w,h});
export const redObjects:Record<string,ObjectSpec>={
 gail:{id:'gail',word:'Gail',x:82,y:72,w:21,h:52,image:'gail.png',kind:'girl'},
 wolf:puppet('wolf','wolf',0,29),grandma:puppet('grandma','Grandma',1,27),mom:puppet('mom','Mom',2,25),manager:puppet('manager','manager',3,52),
 bread:prop('bread',0,50,76),bag:prop('bag',1,68,80,18,25),soup:prop('soup',2,38,74),phone:prop('phone',3,74,69,11,18),cap:prop('cap',4,54,47),glasses:prop('glasses',5,65,65,15,12),blanket:prop('blanket',6,45,76,23,27),bowl:prop('bowl',7,55,76),map:prop('map',8,57,78,20,27),
 hood:hot('hood','hood',83,53,19,18),door:hot('door','door',11,39,18,66),window:hot('window','window',74,22,25,35),
 left:hot('left','left',20,65,18,15),right:hot('right','right',73,65,18,15),crossing:hot('crossing','crossing',47,65,50,15),
 bird:hot('bird','bird',17,10,12,12),tree:hot('tree','tree',48,22,24,34),bench:hot('bench','bench',24,57,29,24),
 path:hot('path','path',71,65,25,22),trail:hot('trail','trail',21,63,23,24),sign:hot('sign','sign',47,25,25,21),
 mail:hot('mail','mail',13,31,23,36),stairs:hot('stairs','stairs',76,50,25,37),number:hot('number','number',33,24,14,12),bell:hot('bell','bell',52,30,9,14),
 bed:hot('bed','bed',25,44,43,31),ears:hot('ears','ears',30,26,15,10),eyes:hot('eyes','eyes',30,36,12,9),teeth:hot('teeth','teeth',30,43,11,8),tail:hot('tail','tail',19,64,12,19),
 away:hot('away','away',90,83,15,20),coat:hot('coat','coat',28,51,18,18),floor:hot('floor','floor',55,91,20,9),
};
export const redScenes:Record<string,SceneSpec>={
 home:{name:'Gail 的家',caption:'A LITTLE RED HOOD',alt:'陽光下的紫色玄關與紅色大門',sheet:'interiors.png',cell:0},
 kitchen:{name:'溫暖廚房',caption:'LUNCH FOR GRANDMA',alt:'奶油色廚房、木桌和明亮窗戶',sheet:'interiors.png',cell:1},
 bedroom:{name:'外婆的房間',caption:'GRANDMA’S ROOM',alt:'外婆的床、拼布棉被、窗戶與門',sheet:'interiors.png',cell:2},
 lobby:{name:'公寓大廳',caption:'TOGETHER IS BETTER',alt:'有信箱、電梯與樓梯的公寓大廳',sheet:'interiors.png',cell:3},
 street:{name:'街角',caption:'STOP · LOOK · CROSS',alt:'安靜街道上的斑馬線與彩色房屋',sheet:'outdoors.png',cell:0},
 park:{name:'城市公園',caption:'THROUGH THE PARK',alt:'林蔭公園步道、長椅與樹上的鳥',sheet:'outdoors.png',cell:1},
 fork:{name:'公園岔路',caption:'STAY ON THE MAIN PATH',alt:'寬闊主步道、狹窄土路與木製指標',sheet:'outdoors.png',cell:2},
 entrance:{name:'外婆家門口',caption:'DING-DONG!',alt:'綠色公寓大門、門牌、門鈴與盆栽',sheet:'outdoors.png',cell:3},
};

// Story text and page-specific missions are appended below.
export const redPages:StoryPage[]=[
 {
  "title": "The red hood",
  "scene": "home",
  "lines": [
   "Gail has a red hood.",
   "She puts it on.",
   "Today she will visit Grandma."
  ],
  "words": [
   "hood",
   "gail"
  ],
  "objects": [
   "gail",
   "hood",
   "door",
   "mom"
  ],
  "mission": {
   "type": "find",
   "answer": "hood",
   "prompt": "Find the hood.",
   "hint": "依序點選：hood"
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "A warm lunch",
  "scene": "kitchen",
  "lines": [
   "Mom makes some soup.",
   "Gail puts bread in a bag.",
   "The lunch is for Grandma."
  ],
  "words": [
   "bread",
   "bag",
   "gail"
  ],
  "objects": [
   "gail",
   "mom",
   "soup",
   "bread",
   "bag"
  ],
  "mission": {
   "type": "drag",
   "answer": "bread",
   "target": "bag",
   "prompt": "Put the bread in the bag.",
   "hint": "把麵包拖進袋子，或先點麵包再點袋子。"
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "Ready to go",
  "scene": "home",
  "lines": [
   "Gail takes her phone.",
   "Mom shows her the way.",
   "“Stay on the main path,” says Mom."
  ],
  "words": [
   "phone",
   "map",
   "gail"
  ],
  "objects": [
   "gail",
   "mom",
   "phone",
   "map",
   "door"
  ],
  "mission": {
   "type": "sequence",
   "answer": "map",
   "prompt": "Tap phone, then map.",
   "hint": "依序點選：phone → map",
   "steps": [
    "phone",
    "map"
   ]
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "Stop and look",
  "scene": "street",
  "lines": [
   "Gail stops at the crossing.",
   "She looks both ways.",
   "Now she can cross."
  ],
  "words": [
   "left",
   "right",
   "gail"
  ],
  "objects": [
   "gail",
   "left",
   "right",
   "crossing"
  ],
  "mission": {
   "type": "sequence",
   "answer": "right",
   "prompt": "Tap left, then right.",
   "hint": "依序點選：left → right",
   "steps": [
    "left",
    "right"
   ]
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "Into the park",
  "scene": "park",
  "lines": [
   "Gail walks into the park.",
   "Tall trees grow by the path.",
   "Birds sing above her."
  ],
  "words": [
   "bird",
   "gail"
  ],
  "objects": [
   "gail",
   "tree",
   "bird",
   "path"
  ],
  "mission": {
   "type": "find",
   "answer": "bird",
   "prompt": "Find the bird.",
   "hint": "依序點選：bird"
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "A hungry wolf",
  "scene": "park",
  "lines": [
   "A wolf sits on a bench.",
   "His tummy makes a loud noise.",
   "He smells the warm soup."
  ],
  "words": [
   "wolf",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "bench",
   "soup"
  ],
  "mission": {
   "type": "find",
   "answer": "wolf",
   "prompt": "Find the wolf.",
   "hint": "依序點選：wolf"
  },
  "action": "red",
  "placements": {
   "wolf": {
    "x": 26,
    "y": 56,
    "w": 20,
    "h": 47
   }
  }
 },
 {
  "title": "Hello, Gail",
  "scene": "park",
  "lines": [
   "“Hello! Where are you going?” asks the wolf.",
   "“To see my grandma,” says Gail.",
   "She keeps walking."
  ],
  "words": [
   "path",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "path"
  ],
  "mission": {
   "type": "find",
   "answer": "path",
   "prompt": "Find the path.",
   "hint": "依序點選：path"
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "The long way",
  "scene": "fork",
  "lines": [
   "The wolf points to a small path.",
   "“Try this way!” he says.",
   "Gail looks at her map."
  ],
  "words": [
   "map",
   "path",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "map",
   "sign",
   "path",
   "trail"
  ],
  "mission": {
   "type": "sequence",
   "answer": "path",
   "prompt": "Tap map, then path.",
   "hint": "依序點選：map → path",
   "steps": [
    "map",
    "path"
   ]
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "The right path",
  "scene": "fork",
  "lines": [
   "“No, thank you,” says Gail.",
   "She stays on the main path.",
   "The wolf runs away."
  ],
  "words": [
   "path",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "path",
   "trail"
  ],
  "mission": {
   "type": "find",
   "answer": "path",
   "prompt": "Find the path.",
   "hint": "依序點選：path"
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "Grandma goes out",
  "scene": "lobby",
  "lines": [
   "Grandma puts on her coat.",
   "She goes downstairs to get her mail.",
   "Her door clicks shut."
  ],
  "words": [
   "coat",
   "mail",
   "gail"
  ],
  "objects": [
   "grandma",
   "coat",
   "mail",
   "stairs"
  ],
  "mission": {
   "type": "sequence",
   "answer": "mail",
   "prompt": "Tap coat, then mail.",
   "hint": "依序點選：coat → mail",
   "steps": [
    "coat",
    "mail"
   ]
  },
  "action": "red",
  "placements": {
   "grandma": {
    "x": 41,
    "y": 71
   },
   "coat": {
    "x": 41,
    "y": 56
   }
  }
 },
 {
  "title": "A sneaky visitor",
  "scene": "entrance",
  "lines": [
   "The wolf reaches the door.",
   "It is not quite closed.",
   "He slips inside."
  ],
  "words": [
   "door",
   "gail"
  ],
  "objects": [
   "wolf",
   "door",
   "bell"
  ],
  "mission": {
   "type": "find",
   "answer": "door",
   "prompt": "Find the door.",
   "hint": "依序點選：door"
  },
  "action": "red",
  "placements": {
   "door": {
    "x": 33,
    "y": 38,
    "w": 25,
    "h": 56
   }
  }
 },
 {
  "title": "A silly plan",
  "scene": "bedroom",
  "lines": [
   "The wolf finds a cap.",
   "He puts on Grandma’s glasses.",
   "Then he hides under a blanket."
  ],
  "words": [
   "cap",
   "glasses",
   "blanket"
  ],
  "objects": [
   "wolf",
   "cap",
   "glasses",
   "blanket",
   "bed"
  ],
  "mission": {
   "type": "sequence",
   "answer": "blanket",
   "prompt": "Tap cap, then glasses, then blanket.",
   "hint": "依序點選：cap → glasses → blanket",
   "steps": [
    "cap",
    "glasses",
    "blanket"
   ]
  },
  "action": "red",
  "placements": {
   "wolf": {
    "x": 29,
    "y": 60
   }
  }
 },
 {
  "title": "Here at last",
  "scene": "entrance",
  "lines": [
   "Gail comes to Grandma’s building.",
   "She checks the number.",
   "Yes, this is the right place."
  ],
  "words": [
   "number",
   "gail"
  ],
  "objects": [
   "gail",
   "number",
   "map",
   "door"
  ],
  "mission": {
   "type": "find",
   "answer": "number",
   "prompt": "Find the number.",
   "hint": "依序點選：number"
  },
  "action": "red",
  "placements": {
   "door": {
    "x": 33,
    "y": 38,
    "w": 25,
    "h": 56
   }
  }
 },
 {
  "title": "Ding-dong!",
  "scene": "entrance",
  "lines": [
   "Gail rings the bell.",
   "“Come in!” calls a deep voice.",
   "Gail stays by the open door."
  ],
  "words": [
   "bell",
   "gail"
  ],
  "objects": [
   "gail",
   "bell",
   "door"
  ],
  "mission": {
   "type": "find",
   "answer": "bell",
   "prompt": "Find the bell.",
   "hint": "依序點選：bell"
  },
  "action": "red",
  "placements": {
   "door": {
    "x": 33,
    "y": 38,
    "w": 25,
    "h": 56
   }
  }
 },
 {
  "title": "What big ears!",
  "scene": "bedroom",
  "lines": [
   "“Grandma, what big ears you have!” says Gail.",
   "“To hear you better,” says the wolf.",
   "One ear pops out."
  ],
  "words": [
   "ears",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "ears",
   "cap",
   "glasses",
   "blanket"
  ],
  "mission": {
   "type": "find",
   "answer": "ears",
   "prompt": "Find the ears.",
   "hint": "依序點選：ears"
  },
  "action": "red",
  "placements": {
   "wolf": {
    "x": 30,
    "y": 57,
    "w": 24,
    "h": 63
   },
   "cap": {
    "x": 30,
    "y": 23,
    "w": 18,
    "h": 13
   },
   "glasses": {
    "x": 30,
    "y": 37,
    "w": 14,
    "h": 10
   },
   "blanket": {
    "x": 30,
    "y": 72,
    "w": 28,
    "h": 36
   }
  }
 },
 {
  "title": "What big eyes!",
  "scene": "bedroom",
  "lines": [
   "“What big eyes you have!” says Gail.",
   "“To see you better,” says the wolf.",
   "His glasses slide down."
  ],
  "words": [
   "eyes",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "eyes",
   "cap",
   "glasses",
   "blanket"
  ],
  "mission": {
   "type": "find",
   "answer": "eyes",
   "prompt": "Find the eyes.",
   "hint": "依序點選：eyes"
  },
  "action": "red",
  "placements": {
   "wolf": {
    "x": 30,
    "y": 57,
    "w": 24,
    "h": 63
   },
   "cap": {
    "x": 30,
    "y": 23,
    "w": 18,
    "h": 13
   },
   "glasses": {
    "x": 30,
    "y": 37,
    "w": 14,
    "h": 10
   },
   "blanket": {
    "x": 30,
    "y": 72,
    "w": 28,
    "h": 36
   }
  }
 },
 {
  "title": "What big teeth!",
  "scene": "bedroom",
  "lines": [
   "“What big teeth you have!” says Gail.",
   "The wolf gives a wide smile.",
   "Gail takes a step back."
  ],
  "words": [
   "teeth",
   "away",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "teeth",
   "cap",
   "glasses",
   "blanket",
   "away"
  ],
  "mission": {
   "type": "sequence",
   "answer": "away",
   "prompt": "Tap teeth, then away.",
   "hint": "依序點選：teeth → away",
   "steps": [
    "teeth",
    "away"
   ]
  },
  "action": "red",
  "placements": {
   "wolf": {
    "x": 30,
    "y": 57,
    "w": 24,
    "h": 63
   },
   "cap": {
    "x": 30,
    "y": 23,
    "w": 18,
    "h": 13
   },
   "glasses": {
    "x": 30,
    "y": 37,
    "w": 14,
    "h": 10
   },
   "blanket": {
    "x": 30,
    "y": 72,
    "w": 28,
    "h": 36
   }
  }
 },
 {
  "title": "That is not Grandma",
  "scene": "bedroom",
  "lines": [
   "Gail sees a furry tail.",
   "Grandma does not have a tail!",
   "Gail walks away from the door."
  ],
  "words": [
   "tail",
   "away",
   "gail"
  ],
  "objects": [
   "gail",
   "wolf",
   "tail",
   "blanket",
   "away"
  ],
  "mission": {
   "type": "sequence",
   "answer": "away",
   "prompt": "Tap tail, then away.",
   "hint": "依序點選：tail → away",
   "steps": [
    "tail",
    "away"
   ]
  },
  "action": "red",
  "placements": {
   "wolf": {
    "x": 30,
    "y": 57,
    "w": 24,
    "h": 63
   },
   "cap": {
    "x": 30,
    "y": 23,
    "w": 18,
    "h": 13
   },
   "glasses": {
    "x": 30,
    "y": 37,
    "w": 14,
    "h": 10
   },
   "blanket": {
    "x": 30,
    "y": 72,
    "w": 28,
    "h": 36
   }
  }
 },
 {
  "title": "A quick call",
  "scene": "entrance",
  "lines": [
   "Gail calls Grandma.",
   "“Are you in bed?” she asks.",
   "“No, I am downstairs!” says Grandma."
  ],
  "words": [
   "phone",
   "gail"
  ],
  "objects": [
   "gail",
   "phone",
   "door"
  ],
  "mission": {
   "type": "find",
   "answer": "phone",
   "prompt": "Find the phone.",
   "hint": "依序點選：phone"
  },
  "action": "red",
  "placements": {
   "door": {
    "x": 33,
    "y": 38,
    "w": 25,
    "h": 56
   }
  }
 },
 {
  "title": "Help is here",
  "scene": "lobby",
  "lines": [
   "Gail meets Grandma downstairs.",
   "They tell the building manager.",
   "The three go upstairs together."
  ],
  "words": [
   "grandma",
   "manager",
   "gail"
  ],
  "objects": [
   "gail",
   "grandma",
   "manager",
   "stairs"
  ],
  "mission": {
   "type": "sequence",
   "answer": "manager",
   "prompt": "Tap grandma, then manager.",
   "hint": "依序點選：grandma → manager",
   "steps": [
    "grandma",
    "manager"
   ]
  },
  "action": "red",
  "placements": {}
 },
 {
  "title": "We can see you",
  "scene": "bedroom",
  "lines": [
   "“Come out, Wolf,” says Grandma.",
   "The wolf drops the blanket.",
   "His cap falls to the floor."
  ],
  "words": [
   "cap",
   "gail"
  ],
  "objects": [
   "gail",
   "grandma",
   "wolf",
   "cap",
   "blanket",
   "floor"
  ],
  "mission": {
   "type": "find",
   "answer": "cap",
   "prompt": "Find the cap.",
   "hint": "依序點選：cap"
  },
  "action": "red",
  "placements": {
   "grandma": {
    "x": 51,
    "y": 61,
    "w": 19,
    "h": 45
   },
   "wolf": {
    "x": 25,
    "y": 64,
    "w": 20,
    "h": 49
   },
   "gail": {
    "x": 80,
    "y": 72,
    "w": 19,
    "h": 48
   },
   "bread": {
    "x": 39,
    "y": 77
   },
   "bowl": {
    "x": 64,
    "y": 83
   },
   "soup": {
    "x": 43,
    "y": 84
   },
   "bag": {
    "x": 67,
    "y": 85
   }
  }
 },
 {
  "title": "Ask first",
  "scene": "kitchen",
  "lines": [
   "“I wanted your lunch,” says the wolf.",
   "“You must ask first,” says Gail.",
   "The wolf gives back the bread."
  ],
  "words": [
   "bread",
   "bag",
   "gail"
  ],
  "objects": [
   "gail",
   "grandma",
   "wolf",
   "bread",
   "bag"
  ],
  "mission": {
   "type": "drag",
   "answer": "bread",
   "target": "bag",
   "prompt": "Put the bread in the bag.",
   "hint": "把麵包拖進袋子，或先點麵包再點袋子。"
  },
  "action": "red",
  "placements": {
   "grandma": {
    "x": 51,
    "y": 61,
    "w": 19,
    "h": 45
   },
   "wolf": {
    "x": 25,
    "y": 64,
    "w": 20,
    "h": 49
   },
   "gail": {
    "x": 80,
    "y": 72,
    "w": 19,
    "h": 48
   },
   "bread": {
    "x": 39,
    "y": 77
   },
   "bowl": {
    "x": 64,
    "y": 83
   },
   "soup": {
    "x": 43,
    "y": 84
   },
   "bag": {
    "x": 67,
    "y": 85
   }
  }
 },
 {
  "title": "May I have some?",
  "scene": "kitchen",
  "lines": [
   "“I am sorry,” says the wolf.",
   "“May I have some soup?”",
   "Grandma brings one more bowl."
  ],
  "words": [
   "bowl",
   "gail"
  ],
  "objects": [
   "gail",
   "grandma",
   "wolf",
   "soup",
   "bowl"
  ],
  "mission": {
   "type": "find",
   "answer": "bowl",
   "prompt": "Find the bowl.",
   "hint": "依序點選：bowl"
  },
  "action": "red",
  "placements": {
   "grandma": {
    "x": 51,
    "y": 61,
    "w": 19,
    "h": 45
   },
   "wolf": {
    "x": 25,
    "y": 64,
    "w": 20,
    "h": 49
   },
   "gail": {
    "x": 80,
    "y": 72,
    "w": 19,
    "h": 48
   },
   "bread": {
    "x": 39,
    "y": 77
   },
   "bowl": {
    "x": 64,
    "y": 83
   },
   "soup": {
    "x": 43,
    "y": 84
   },
   "bag": {
    "x": 67,
    "y": 85
   }
  }
 },
 {
  "title": "A better ending",
  "scene": "kitchen",
  "lines": [
   "Gail, Grandma, and the wolf share lunch.",
   "Gail calls Mom.",
   "“I am here with Grandma. We are all fine!”"
  ],
  "words": [
   "gail",
   "grandma",
   "wolf"
  ],
  "objects": [
   "gail",
   "grandma",
   "wolf",
   "soup",
   "bowl",
   "phone"
  ],
  "mission": {
   "type": "sequence",
   "answer": "wolf",
   "prompt": "Tap gail, then grandma, then wolf.",
   "hint": "依序點選：gail → grandma → wolf",
   "steps": [
    "gail",
    "grandma",
    "wolf"
   ]
  },
  "action": "red",
  "placements": {
   "grandma": {
    "x": 51,
    "y": 61,
    "w": 19,
    "h": 45
   },
   "wolf": {
    "x": 25,
    "y": 64,
    "w": 20,
    "h": 49
   },
   "gail": {
    "x": 80,
    "y": 72,
    "w": 19,
    "h": 48
   },
   "bread": {
    "x": 39,
    "y": 77
   },
   "bowl": {
    "x": 64,
    "y": 83
   },
   "soup": {
    "x": 43,
    "y": 84
   },
   "bag": {
    "x": 67,
    "y": 85
   }
  }
 }
];
export const redChoreography:Record<number,Record<number,StoryMotion[]>>={
 "0": {
  "1": [
   {
    "actor": "gail",
    "x": 77,
    "y": 72,
    "walk": true
   }
  ],
  "2": [
   {
    "actor": "gail",
    "x": 61,
    "y": 72,
    "walk": true
   }
  ]
 },
 "1": {
  "0": [
   {
    "actor": "soup",
    "x": 64,
    "y": 77,
    "walk": false
   }
  ],
  "1": [
   {
    "actor": "bread",
    "x": 68,
    "y": 80,
    "walk": false
   }
  ]
 },
 "2": {
  "0": [
   {
    "actor": "phone",
    "x": 77,
    "y": 65,
    "walk": false
   }
  ],
  "1": [
   {
    "actor": "map",
    "x": 58,
    "y": 63,
    "walk": false
   }
  ]
 },
 "3": {
  "1": [
   {
    "actor": "gail",
    "x": 76,
    "y": 73,
    "walk": false
   }
  ],
  "2": [
   {
    "actor": "gail",
    "x": 29,
    "y": 71,
    "walk": true
   }
  ]
 },
 "4": {
  "0": [
   {
    "actor": "gail",
    "x": 52,
    "y": 70,
    "walk": true
   }
  ]
 },
 "5": {
  "0": [
   {
    "actor": "wolf",
    "x": 26,
    "y": 54,
    "walk": false
   }
  ],
  "2": [
   {
    "actor": "wolf",
    "x": 36,
    "y": 61,
    "walk": true
   }
  ]
 },
 "6": {
  "2": [
   {
    "actor": "gail",
    "x": 60,
    "y": 70,
    "walk": true
   }
  ]
 },
 "7": {
  "0": [
   {
    "actor": "wolf",
    "x": 35,
    "y": 65,
    "walk": true
   }
  ],
  "2": [
   {
    "actor": "map",
    "x": 74,
    "y": 64,
    "walk": false
   }
  ]
 },
 "8": {
  "1": [
   {
    "actor": "gail",
    "x": 66,
    "y": 62,
    "walk": true
   }
  ],
  "2": [
   {
    "actor": "wolf",
    "x": 12,
    "y": 60,
    "walk": true
   }
  ]
 },
 "9": {
  "1": [
   {
    "actor": "grandma",
    "x": 28,
    "y": 73,
    "walk": true
   }
  ]
 },
 "10": {
  "0": [
   {
    "actor": "wolf",
    "x": 43,
    "y": 69,
    "walk": true
   }
  ],
  "2": [
   {
    "actor": "wolf",
    "x": 33,
    "y": 53,
    "walk": true
   }
  ]
 },
 "11": {
  "0": [
   {
    "actor": "cap",
    "x": 29,
    "y": 31,
    "walk": false
   }
  ],
  "1": [
   {
    "actor": "glasses",
    "x": 29,
    "y": 42,
    "walk": false
   }
  ],
  "2": [
   {
    "actor": "blanket",
    "x": 29,
    "y": 70,
    "walk": false
   }
  ]
 },
 "12": {
  "0": [
   {
    "actor": "gail",
    "x": 63,
    "y": 71,
    "walk": true
   }
  ]
 },
 "13": {
  "0": [
   {
    "actor": "gail",
    "x": 62,
    "y": 69,
    "walk": true
   }
  ]
 },
 "14": {
  "2": [
   {
    "actor": "cap",
    "x": 33,
    "y": 25,
    "walk": false
   }
  ]
 },
 "15": {
  "2": [
   {
    "actor": "glasses",
    "x": 30,
    "y": 44,
    "walk": false
   }
  ]
 },
 "16": {
  "2": [
   {
    "actor": "gail",
    "x": 91,
    "y": 75,
    "walk": true
   }
  ]
 },
 "17": {
  "2": [
   {
    "actor": "gail",
    "x": 93,
    "y": 76,
    "walk": true
   }
  ]
 },
 "18": {
  "0": [
   {
    "actor": "phone",
    "x": 75,
    "y": 57,
    "walk": false
   }
  ]
 },
 "19": {
  "0": [
   {
    "actor": "gail",
    "x": 73,
    "y": 73,
    "walk": true
   }
  ],
  "2": [
   {
    "actor": "grandma",
    "x": 65,
    "y": 56,
    "walk": true
   },
   {
    "actor": "manager",
    "x": 76,
    "y": 61,
    "walk": true
   },
   {
    "actor": "gail",
    "x": 84,
    "y": 67,
    "walk": true
   }
  ]
 },
 "20": {
  "1": [
   {
    "actor": "blanket",
    "x": 43,
    "y": 89,
    "walk": false
   }
  ],
  "2": [
   {
    "actor": "cap",
    "x": 56,
    "y": 91,
    "walk": false
   }
  ]
 },
 "21": {
  "2": [
   {
    "actor": "bread",
    "x": 67,
    "y": 85,
    "walk": false
   }
  ]
 },
 "22": {
  "2": [
   {
    "actor": "bowl",
    "x": 64,
    "y": 83,
    "walk": false
   }
  ]
 },
 "23": {
  "1": [
   {
    "actor": "phone",
    "x": 78,
    "y": 61,
    "walk": false
   }
  ]
 }
};

redScenes.dining={name:'外婆的餐桌',caption:'A BETTER ENDING',alt:'陽光下的木餐桌、椅子與外婆家窗戶'};
for(const i of [21,22,23])redPages[i].scene='dining';
for(const i of [21,22,23]){
 Object.assign(redPages[i].placements!,{grandma:{x:51,y:42,w:21,h:50},wolf:{x:22,y:51,w:23,h:56},gail:{x:80,y:57,w:22,h:54},soup:{x:44,y:60,w:14,h:21},bowl:{x:62,y:62,w:14,h:21},phone:{x:82,y:57,w:10,h:17}});
}
redChoreography[22][2]=[{actor:'bowl',x:62,y:62}];

for(const p of redPages)p.words=p.words.map(w=>w==='gail'?'Gail':w==='grandma'?'Grandma':w);

// A separate cape is placed over Gail before the final costume is shown.
redPages[0].placements={...redPages[0].placements,gail:{image:'../little-star-v1/gail-paper.png'},hood:{image:'cape.png',x:63,y:62,w:19,h:22}};
redChoreography[0][1]=[{actor:'hood',x:82,y:61}];
for(const index of [14,15,16,17]){
 redPages[index].placements={...redPages[index].placements,ears:{x:30,y:35,w:13,h:10},eyes:{x:31,y:41,w:11,h:8},teeth:{x:32,y:46,w:10,h:8},tail:{x:22,y:64,w:10,h:19}};
}
