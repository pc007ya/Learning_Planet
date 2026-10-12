import type { ReadingLevel } from './dragon-text';
import type { StoryQuestion } from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** First stored choice is correct. Public positions are balanced and deterministic.
 * Evidence pages refer to the unchanged original reader order. */
export const redQuizRows:{id:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "hood",
    "pages": [
      1,
      12
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what color is Gail’s hood?",
        "choices": [
          "Red",
          "Blue",
          "White",
          "Green"
        ],
        "explanation": "Page 1: Gail has a red hood. She puts it on."
      },
      "B": {
        "prompt": "In this story, what does Gail put on before visiting Grandma?",
        "choices": [
          "Her red hood",
          "Grandma’s cap",
          "Grandma’s glasses",
          "Grandma’s coat"
        ],
        "explanation": "On page 1, Gail puts on her red hood for the visit. The cap and glasses belong to the wolf’s later disguise."
      },
      "C": {
        "prompt": "In this story, which pair matches Gail’s clothing and the wolf’s disguise?",
        "choices": [
          "Gail wears a red hood; the wolf uses Grandma’s glasses.",
          "Gail wears Grandma’s glasses; the wolf uses a red hood.",
          "Gail wears Grandma’s coat; the wolf uses her phone.",
          "Gail wears a red hood; the wolf uses Mom’s coat."
        ],
        "explanation": "Pages 1 and 12 distinguish the two characters: Gail puts on her red hood, while the wolf puts on Grandma’s glasses before hiding under the blanket."
      }
    }
  },
  {
    "id": "lunch",
    "pages": [
      2,
      22,
      23
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who is the packed lunch for?",
        "choices": [
          "Grandma",
          "Mom",
          "The manager",
          "The wolf"
        ],
        "explanation": "Page 2: Mom makes soup. Gail packs bread. Lunch is for Grandma."
      },
      "B": {
        "prompt": "In this story, which food does Gail put in the bag?",
        "choices": [
          "Bread for Grandma",
          "Soup for Mom",
          "Bread for the manager",
          "Soup for the wolf"
        ],
        "explanation": "On page 2, Gail puts bread in the bag. The packed lunch is for Grandma, even though the wolf later wants some."
      },
      "C": {
        "prompt": "In this story, how do Mom and Gail prepare Grandma’s lunch?",
        "choices": [
          "Mom makes soup, and Gail packs bread in a bag.",
          "Mom packs bread, and Gail makes soup for the manager.",
          "Mom brings a bowl, and Gail gives bread to the wolf.",
          "Mom makes soup, and Gail puts Grandma’s mail in a bag."
        ],
        "explanation": "Page 2 assigns the preparation: Mom makes soup, Gail packs bread, and both foods are for Grandma. The wolf’s request comes much later."
      }
    }
  },
  {
    "id": "route",
    "pages": [
      3,
      8,
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which path does Gail choose at the fork?",
        "choices": [
          "The main path",
          "The small path",
          "The way to the bench",
          "The way back home"
        ],
        "explanation": "Pages 3 and 9: Mom says to use the main path. Gail stays on it."
      },
      "B": {
        "prompt": "In this story, what does Gail do when the wolf suggests a small path?",
        "choices": [
          "She checks her map and stays on the main path.",
          "She takes the small path with the wolf.",
          "She goes back home to get her phone.",
          "She waits on the bench for Grandma."
        ],
        "explanation": "On pages 8–9, Gail checks her map and says no to the wolf. She keeps to the main path as Mom told her."
      },
      "C": {
        "prompt": "In this story, which choice shows Gail following Mom’s earlier advice?",
        "choices": [
          "She checks her map, declines the small path, and keeps to the main path.",
          "She follows the wolf down the small path to reach Grandma’s home.",
          "She leaves her map at the fork and follows the wolf to the bench.",
          "She returns to Mom instead of continuing to Grandma’s building."
        ],
        "explanation": "Mom’s advice on page 3 is to stay on the main path. Gail’s actions on pages 8–9 carry out that advice when the wolf points to another path."
      }
    }
  },
  {
    "id": "crossing",
    "pages": [
      4
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where does Gail look before crossing?",
        "choices": [
          "Left and right",
          "Up at the birds",
          "Down at her bag",
          "Back at the park"
        ],
        "explanation": "Page 4: Gail stops. She looks left and right. Then she crosses."
      },
      "B": {
        "prompt": "In this story, what does Gail do just before she crosses the street?",
        "choices": [
          "She stops and looks both ways.",
          "She sits on the park bench.",
          "She rings Grandma’s doorbell.",
          "She phones the building manager."
        ],
        "explanation": "Page 4 shows Gail stopping at the crossing and looking both ways. Crossing comes after those actions."
      },
      "C": {
        "prompt": "In this story, which order matches Gail’s actions at the crossing?",
        "choices": [
          "Stop, look both ways, then cross.",
          "Look both ways, cross, then stop.",
          "Cross, stop, then look both ways.",
          "Stop, cross, then look both ways."
        ],
        "explanation": "Page 4 gives a clear order: Gail stops first, checks both directions next, and crosses afterward. Moving the check after crossing reverses the story."
      }
    }
  },
  {
    "id": "park",
    "pages": [
      5,
      6,
      7
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who sings above Gail in the park?",
        "choices": [
          "Birds",
          "Mom",
          "Grandma",
          "The wolf"
        ],
        "explanation": "Page 5: Birds sing above Gail. Tall trees grow by the path."
      },
      "B": {
        "prompt": "In this story, where is the wolf when Gail first sees him?",
        "choices": [
          "On a park bench",
          "At Grandma’s door",
          "Under a blanket",
          "By the crossing"
        ],
        "explanation": "Page 6 places the hungry wolf on a bench in the park. He enters Grandma’s home later."
      },
      "C": {
        "prompt": "In this story, which order matches the first park scenes?",
        "choices": [
          "Birds sing above Gail; the wolf sits on a bench; he asks where she is going.",
          "The wolf asks where she is going; birds sing; she leaves home in her hood.",
          "The wolf hides in bed; birds sing; he sits on the bench.",
          "Birds sing; Gail calls Grandma; the wolf asks where she is going."
        ],
        "explanation": "Pages 5–7 move from birds above the park path to the hungry wolf on the bench and then his question. The bedroom and phone call occur later."
      }
    }
  },
  {
    "id": "mail",
    "pages": [
      10,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Grandma go downstairs to get?",
        "choices": [
          "Her mail",
          "Her glasses",
          "Her bread",
          "Her cap"
        ],
        "explanation": "Page 10: Grandma puts on her coat. She goes downstairs for her mail."
      },
      "B": {
        "prompt": "In this story, why is Grandma downstairs when Gail calls?",
        "choices": [
          "She went there to get her mail.",
          "She went there to make soup.",
          "She went there to find her glasses.",
          "She went there to pack Gail’s bag."
        ],
        "explanation": "On page 10, Grandma goes downstairs for her mail. On page 19, she tells Gail she is downstairs, not in bed."
      },
      "C": {
        "prompt": "In this story, which earlier event explains Grandma’s answer on the phone?",
        "choices": [
          "She put on her coat and went downstairs to collect her mail.",
          "She put on her glasses and hid beneath the blanket.",
          "She went to the park bench to meet the hungry wolf.",
          "She went to Mom’s kitchen to prepare Gail’s lunch."
        ],
        "explanation": "Grandma’s trip for mail on page 10 explains her location when Gail calls on page 19. The glasses-and-blanket scene belongs to the wolf."
      }
    }
  },
  {
    "id": "entry",
    "pages": [
      11,
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who slips into Grandma’s home?",
        "choices": [
          "The wolf",
          "Mom",
          "The manager",
          "Gail"
        ],
        "explanation": "Page 11: The door is not fully closed. The wolf slips inside."
      },
      "B": {
        "prompt": "In this story, how does the wolf enter Grandma’s home?",
        "choices": [
          "He slips through a door that is not quite closed.",
          "He rings the bell and waits for Grandma.",
          "He goes upstairs with Gail and the manager.",
          "He calls Grandma and asks her to open the door."
        ],
        "explanation": "Page 11 says the door is not quite closed and the wolf slips inside. Ringing the bell is Gail’s later action."
      },
      "C": {
        "prompt": "In this story, how do the wolf’s and Gail’s arrivals differ?",
        "choices": [
          "The wolf slips through the partly closed door; Gail rings the bell.",
          "The wolf rings the bell; Gail slips through the partly closed door.",
          "The wolf checks the building number; Gail enters under a blanket.",
          "The wolf calls Mom; Gail follows him through the small path."
        ],
        "explanation": "The wolf enters without asking on page 11. Gail checks the number on page 13 and rings the bell on page 14. These are different arrivals."
      }
    }
  },
  {
    "id": "disguise",
    "pages": [
      12,
      15,
      16,
      21
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the wolf hide under?",
        "choices": [
          "A blanket",
          "A coat",
          "A bag",
          "A bench"
        ],
        "explanation": "Page 12: The wolf puts on glasses. Then he hides under a blanket."
      },
      "B": {
        "prompt": "In this story, which things are part of the wolf’s disguise?",
        "choices": [
          "A cap, glasses, and a blanket",
          "A hood, phone, and map",
          "A coat, mail, and bag",
          "A bowl, bread, and soup"
        ],
        "explanation": "Page 12 has a cap, Grandma’s glasses, and a blanket. The ear, slipping glasses, and falling cap later reveal the disguise."
      },
      "C": {
        "prompt": "In this story, which sequence describes the wolf’s disguise coming apart?",
        "choices": [
          "An ear pops out, glasses slide down, and the cap later falls.",
          "The cap falls, glasses slide down, and an ear later pops out.",
          "Glasses slide down, the cap falls, and an ear later pops out.",
          "An ear pops out, the cap falls, and glasses later slide down."
        ],
        "explanation": "Pages 15 and 16 show the ear and then the slipping glasses. The cap falls to the floor on page 21, after Gail gets help."
      }
    }
  },
  {
    "id": "number",
    "pages": [
      13,
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail check at the building?",
        "choices": [
          "The number",
          "The cap",
          "The bowl",
          "The coat"
        ],
        "explanation": "Page 13: Gail checks the building number. It is the right place."
      },
      "B": {
        "prompt": "In this story, what does Gail check before ringing the bell?",
        "choices": [
          "The building’s number",
          "The wolf’s glasses",
          "Grandma’s mail",
          "Mom’s soup"
        ],
        "explanation": "On page 13, Gail checks the number to see that she has the right building. She rings the bell on page 14."
      },
      "C": {
        "prompt": "In this story, which order matches Gail’s arrival at Grandma’s building?",
        "choices": [
          "Check the number, ring the bell, then stay by the open door.",
          "Ring the bell, go downstairs, then check the number.",
          "Stay by the open door, call Mom, then ring the bell.",
          "Check the number, enter under the blanket, then ring the bell."
        ],
        "explanation": "Pages 13–14 show Gail confirming the building number before ringing the bell. When a deep voice answers, she remains beside the open door."
      }
    }
  },
  {
    "id": "ears-eyes",
    "pages": [
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail notice before the big eyes?",
        "choices": [
          "Big ears",
          "Big teeth",
          "A furry tail",
          "A falling cap"
        ],
        "explanation": "Pages 15–16: Gail notices big ears first. Then she notices big eyes."
      },
      "B": {
        "prompt": "In this story, what does the wolf say his big ears help him do?",
        "choices": [
          "Hear Gail better",
          "See Gail better",
          "Smell the soup better",
          "Read the map better"
        ],
        "explanation": "On page 15, the wolf says his ears help him hear Gail better. Seeing her better is his answer about eyes on page 16."
      },
      "C": {
        "prompt": "In this story, which pair matches the wolf’s two answers?",
        "choices": [
          "Ears for hearing Gail better; eyes for seeing her better.",
          "Ears for seeing Gail better; eyes for hearing her better.",
          "Ears for smelling soup better; eyes for reading Grandma’s mail.",
          "Ears for hearing Mom better; eyes for finding the park path."
        ],
        "explanation": "Pages 15–16 link ears with hearing Gail and eyes with seeing her. The questions concern the visitor in the bedroom, not the wolf’s earlier hunger."
      }
    }
  },
  {
    "id": "teeth",
    "pages": [
      17,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail do when the wolf smiles wide?",
        "choices": [
          "Steps back",
          "Rings the bell",
          "Packs bread",
          "Puts on glasses"
        ],
        "explanation": "Page 17: The wolf smiles wide. Gail takes a step back."
      },
      "B": {
        "prompt": "In this story, which action comes after Gail notices the big teeth?",
        "choices": [
          "She takes a step back.",
          "She puts bread in the bag.",
          "She walks into the park.",
          "She checks the building number."
        ],
        "explanation": "Page 17 puts the wide smile after Gail’s comment about teeth. Gail then steps back; packing and the arrival happened earlier."
      },
      "C": {
        "prompt": "In this story, which pair shows Gail moving away as she notices clues?",
        "choices": [
          "She steps back at the wide smile and walks away after seeing the tail.",
          "She walks away at the bell and steps closer after seeing the tail.",
          "She steps back on the main path and walks away while packing bread.",
          "She walks away from Mom and steps into the bed after seeing the teeth."
        ],
        "explanation": "Pages 17–18 show two movements: a step back after the wide smile, then walking away from the door after noticing a furry tail. Neither movement is a new trip home."
      }
    }
  },
  {
    "id": "tail",
    "pages": [
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what shows Gail this is not Grandma?",
        "choices": [
          "A furry tail",
          "A red hood",
          "A soup bowl",
          "A phone"
        ],
        "explanation": "Page 18: Gail sees a tail. Grandma has no tail."
      },
      "B": {
        "prompt": "In this story, why does Gail know the visitor is not Grandma?",
        "choices": [
          "She sees a furry tail, and Grandma has no tail.",
          "She sees a coat, and Grandma never wears a coat.",
          "She sees glasses, and Grandma never has glasses.",
          "She sees mail, and Grandma never gets mail."
        ],
        "explanation": "Page 18 uses the tail as the clue: Grandma does not have one. The story does show Grandma’s coat, glasses, and mail."
      },
      "C": {
        "prompt": "In this story, which two details confirm the visitor is not Grandma?",
        "choices": [
          "The visitor has a furry tail, and Grandma says she is downstairs.",
          "The visitor has glasses, and Grandma says she is in bed.",
          "The visitor has a cap, and Grandma says she is in the park.",
          "The visitor has a blanket, and Grandma says she is with Mom."
        ],
        "explanation": "Page 18 gives a physical clue that Grandma has no tail. On page 19, the real Grandma says she is downstairs, adding a second check of the visitor’s identity."
      }
    }
  },
  {
    "id": "help",
    "pages": [
      19,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who goes upstairs with Gail and Grandma?",
        "choices": [
          "The manager",
          "Mom",
          "The wolf",
          "A bird"
        ],
        "explanation": "Page 20: Gail and Grandma tell the manager. All three go upstairs."
      },
      "B": {
        "prompt": "In this story, who do Gail and Grandma tell about the visitor?",
        "choices": [
          "The building manager",
          "Mom in the kitchen",
          "The wolf on the bench",
          "The birds in the park"
        ],
        "explanation": "On page 20, Gail meets Grandma downstairs. They tell the building manager and go upstairs with him."
      },
      "C": {
        "prompt": "In this story, which order matches how Gail gets help?",
        "choices": [
          "Call Grandma, meet her downstairs, tell the manager, then go upstairs together.",
          "Tell the manager, call Mom, meet the wolf, then go upstairs alone.",
          "Go upstairs alone, meet Grandma in bed, then call the manager.",
          "Call Mom, follow the small path, then meet Grandma in the park."
        ],
        "explanation": "Pages 19–20 show the phone call followed by meeting Grandma downstairs and telling the manager. The group returns upstairs together, rather than Gail going alone."
      }
    }
  },
  {
    "id": "bread",
    "pages": [
      21,
      22
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the wolf give back?",
        "choices": [
          "Bread",
          "A map",
          "A coat",
          "Mail"
        ],
        "explanation": "Page 22: Gail says to ask first. The wolf gives back the bread."
      },
      "B": {
        "prompt": "In this story, what does Gail tell the wolf after he admits wanting lunch?",
        "choices": [
          "He must ask first.",
          "He must take the small path.",
          "He must check the building number.",
          "He must get Grandma’s mail."
        ],
        "explanation": "On page 22, Gail’s words address taking lunch: he must ask first. The wolf then returns the bread."
      },
      "C": {
        "prompt": "In this story, which action follows Gail’s instruction to ask first?",
        "choices": [
          "The wolf gives back the bread he wanted to take.",
          "The wolf tells Gail to use the small path.",
          "The wolf hides under Grandma’s blanket.",
          "The wolf slips through Grandma’s door."
        ],
        "explanation": "Page 22 connects Gail’s instruction with the wolf returning the bread. His misleading route, entry, and disguise all happened before he was confronted."
      }
    }
  },
  {
    "id": "request",
    "pages": [
      22,
      23
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Grandma bring after the wolf asks for soup?",
        "choices": [
          "One more bowl",
          "A bag of bread",
          "A new map",
          "A red hood"
        ],
        "explanation": "Page 23: The wolf asks for soup. Grandma brings one more bowl."
      },
      "B": {
        "prompt": "In this story, how does the wolf ask for food after returning the bread?",
        "choices": [
          "He says sorry and asks for soup.",
          "He hides under the blanket again.",
          "He points to the small path again.",
          "He slips inside without asking again."
        ],
        "explanation": "On page 23, the wolf apologizes and asks, “May I have some soup?” Grandma brings another bowl after this request."
      },
      "C": {
        "prompt": "In this story, what change in the wolf’s behavior leads to another bowl at lunch?",
        "choices": [
          "He returns the bread, apologizes, and asks politely for soup.",
          "He keeps the bread, hides his tail, and calls in a deep voice.",
          "He points out the small path, leaves the park, and puts on glasses.",
          "He takes Grandma’s mail, closes the door, and checks the number."
        ],
        "explanation": "Pages 22–23 show the wolf giving back the bread and then asking for soup after apologizing. Grandma’s extra bowl follows that request, not his earlier disguise."
      }
    }
  },
  {
    "id": "ending",
    "pages": [
      19,
      24
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who does Gail call at the end?",
        "choices": [
          "Mom",
          "Grandma",
          "The manager",
          "The wolf"
        ],
        "explanation": "Page 24: They share lunch. Gail calls Mom to say they are fine."
      },
      "B": {
        "prompt": "In this story, what does Gail tell Mom at the end?",
        "choices": [
          "She is with Grandma, and they are all fine.",
          "She is on the small path with the wolf.",
          "She is at home packing Grandma’s lunch.",
          "She is on the bench waiting for the manager."
        ],
        "explanation": "On page 24, Gail shares lunch with Grandma and the wolf. She calls Mom and says she is there with Grandma and all are fine."
      },
      "C": {
        "prompt": "In this story, how do Gail’s two phone calls serve different purposes?",
        "choices": [
          "She calls Grandma to check her location, then Mom to say everyone is fine.",
          "She calls Mom to check the visitor, then Grandma to pack the bread.",
          "She calls Grandma to choose the small path, then Mom to find the wolf.",
          "She calls Mom to bring the manager, then Grandma to open the door."
        ],
        "explanation": "On page 19, Gail asks Grandma whether she is in bed. On page 24, the trouble is resolved and Gail tells Mom they are all fine. The calls check a concern and then report the ending."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function redQuestions(level:ReadingLevel):StoryQuestion[]{return redQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:'red-hood-'+row.id,kind:'choice',prompt:track.prompt,image:'images/story/red-hood-v1/cover-v2.png',imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
