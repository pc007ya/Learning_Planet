import { redPages as originalPages } from './red-hood';
import type { StoryPage } from './book';
import type { ReadingLevel } from './dragon-text';
/** Book #9: approved original events; sentence indices preserve existing motion cues.
 * B BR–100L and C 190L–530L are design targets, not measured Lexile. */
type Text={en:string[];zh:string[]};
export const redText:Record<ReadingLevel,Text>[]=[
  {
    "A": {
      "en": [
        "Gail has a red hood.",
        "She puts it on.",
        "She will visit Grandma."
      ],
      "zh": [
        "瑜瑜有一件紅斗篷。",
        "她穿上它。",
        "她要去看奶奶。"
      ]
    },
    "B": {
      "en": [
        "Gail has a red hood to wear.",
        "She puts on her hood.",
        "Today she will visit Grandma."
      ],
      "zh": [
        "瑜瑜有一件可以穿的紅斗篷。",
        "她穿上斗篷。",
        "今天她要去看奶奶。"
      ]
    },
    "C": {
      "en": [
        "Gail has a red hood for her visit.",
        "She puts it on before leaving home.",
        "Today she is going to see Grandma."
      ],
      "zh": [
        "瑜瑜有一件探望奶奶時要穿的紅斗篷。",
        "出門前，她穿上斗篷。",
        "今天她要去看奶奶。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Mom makes soup.",
        "Gail puts bread in a bag.",
        "Lunch is for Grandma."
      ],
      "zh": [
        "媽媽煮湯。",
        "瑜瑜把麵包放進袋子。",
        "午餐是給奶奶的。"
      ]
    },
    "B": {
      "en": [
        "Mom makes some warm soup.",
        "Gail puts the bread in a bag.",
        "They pack lunch for Grandma."
      ],
      "zh": [
        "媽媽煮了熱湯。",
        "瑜瑜把麵包放進袋子。",
        "她們為奶奶準備午餐。"
      ]
    },
    "C": {
      "en": [
        "Mom prepares warm soup for lunch.",
        "Gail packs bread inside a bag.",
        "The soup and bread are for Grandma to eat."
      ],
      "zh": [
        "媽媽準備了午餐的熱湯。",
        "瑜瑜把麵包裝進袋子裡。",
        "湯和麵包是給奶奶吃的。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail takes her phone.",
        "Mom shows the way.",
        "“Stay on the main path.”"
      ],
      "zh": [
        "瑜瑜帶上手機。",
        "媽媽指給她看路線。",
        "「要走主要道路。」"
      ]
    },
    "B": {
      "en": [
        "Gail takes her phone with her.",
        "Mom shows Gail which way to go.",
        "“Stay on the main path,” says Mom."
      ],
      "zh": [
        "瑜瑜帶著手機。",
        "媽媽指給瑜瑜看該走哪條路。",
        "「要走主要道路。」媽媽說。"
      ]
    },
    "C": {
      "en": [
        "Before setting off, Gail takes her phone.",
        "Mom shows her the route to Grandma’s home.",
        "“Stay on the main path,” Mom reminds her."
      ],
      "zh": [
        "出發前，瑜瑜帶上手機。",
        "媽媽指給她看去奶奶家的路線。",
        "「要走主要道路。」媽媽提醒她。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail stops at the crossing.",
        "She looks left and right.",
        "Now she can cross."
      ],
      "zh": [
        "瑜瑜在穿越道前停下。",
        "她看看左邊和右邊。",
        "現在她可以過馬路。"
      ]
    },
    "B": {
      "en": [
        "Gail stops at the street crossing.",
        "She looks to the left and right.",
        "Then she can cross the street."
      ],
      "zh": [
        "瑜瑜在馬路的穿越道前停下。",
        "她看看左邊和右邊。",
        "接著，她可以過馬路。"
      ]
    },
    "C": {
      "en": [
        "Gail stops before crossing the street.",
        "She checks both the left and the right.",
        "Only after looking both ways does she cross."
      ],
      "zh": [
        "過馬路前，瑜瑜停下來。",
        "她查看左邊和右邊。",
        "看過兩邊後，她才過馬路。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail walks into the park.",
        "Tall trees grow by the path.",
        "Birds sing above her."
      ],
      "zh": [
        "瑜瑜走進公園。",
        "小路旁長著高大的樹。",
        "鳥兒在她上方唱歌。"
      ]
    },
    "B": {
      "en": [
        "Gail walks along the park path.",
        "There are tall trees beside it.",
        "She hears birds singing above her."
      ],
      "zh": [
        "瑜瑜沿著公園小路走。",
        "路旁有高大的樹。",
        "她聽見鳥兒在上方唱歌。"
      ]
    },
    "C": {
      "en": [
        "Gail enters the park on her way to Grandma’s home.",
        "Tall trees line the path she follows.",
        "Above her, birds sing as she walks along."
      ],
      "zh": [
        "去奶奶家的途中，瑜瑜走進公園。",
        "她走的小路旁排列著高大的樹。",
        "她往前走時，鳥兒在上方唱歌。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "A wolf sits on a bench.",
        "His tummy is loud.",
        "He smells the soup."
      ],
      "zh": [
        "一隻狼坐在長椅上。",
        "牠的肚子響得很大聲。",
        "牠聞到了湯的味道。"
      ]
    },
    "B": {
      "en": [
        "A hungry wolf sits on a bench.",
        "His tummy makes a loud noise.",
        "He smells Gail’s warm soup."
      ],
      "zh": [
        "一隻餓狼坐在長椅上。",
        "牠的肚子發出很大的聲音。",
        "牠聞到瑜瑜帶著的熱湯。"
      ]
    },
    "C": {
      "en": [
        "A hungry wolf is sitting on a park bench.",
        "His tummy rumbles loudly.",
        "The smell of warm soup reaches him from Gail’s lunch."
      ],
      "zh": [
        "一隻餓狼坐在公園長椅上。",
        "牠的肚子大聲咕嚕響。",
        "瑜瑜帶著的午餐飄來熱湯的香味。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“Where are you going?”",
        "“To see Grandma,” says Gail.",
        "Gail keeps walking."
      ],
      "zh": [
        "「你要去哪裡？」",
        "「去看奶奶。」瑜瑜說。",
        "瑜瑜繼續走。"
      ]
    },
    "B": {
      "en": [
        "“Hello! Where are you going?” asks the wolf.",
        "“I am going to see Grandma,” says Gail.",
        "She keeps walking along the path."
      ],
      "zh": [
        "「你好！你要去哪裡？」狼問。",
        "「我要去看奶奶。」瑜瑜說。",
        "她繼續沿著小路走。"
      ]
    },
    "C": {
      "en": [
        "The wolf greets Gail and asks where she is going.",
        "“To see my grandma,” she replies.",
        "After answering him, Gail continues along the path."
      ],
      "zh": [
        "狼向瑜瑜打招呼，問她要去哪裡。",
        "「去看我奶奶。」她回答。",
        "回答之後，瑜瑜繼續沿著小路走。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "The wolf points to a small path.",
        "“Try this way!”",
        "Gail looks at her map."
      ],
      "zh": [
        "狼指向一條小路。",
        "「走這邊吧！」",
        "瑜瑜看著地圖。"
      ]
    },
    "B": {
      "en": [
        "The wolf shows Gail a small path.",
        "“Try this way!” he says.",
        "Gail checks her map."
      ],
      "zh": [
        "狼指給瑜瑜看一條小路。",
        "「走這邊吧！」牠說。",
        "瑜瑜查看地圖。"
      ]
    },
    "C": {
      "en": [
        "At the fork, the wolf points toward a small path.",
        "“Try this way!” he suggests.",
        "Rather than choosing at once, Gail looks at her map."
      ],
      "zh": [
        "在岔路口，狼指向一條小路。",
        "「走這邊吧！」牠提議。",
        "瑜瑜沒有立刻選路，而是先查看地圖。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“No, thank you.”",
        "Gail stays on the main path.",
        "The wolf runs away."
      ],
      "zh": [
        "「不用了，謝謝。」",
        "瑜瑜繼續走主要道路。",
        "狼跑走了。"
      ]
    },
    "B": {
      "en": [
        "“No, thank you,” Gail tells the wolf.",
        "She keeps to the main path.",
        "The wolf runs away from her."
      ],
      "zh": [
        "「不用了，謝謝。」瑜瑜對狼說。",
        "她繼續走主要道路。",
        "狼跑開了。"
      ]
    },
    "C": {
      "en": [
        "Gail politely turns down the wolf’s suggestion.",
        "She stays on the main path, following Mom’s advice.",
        "The wolf runs away while Gail keeps to her route."
      ],
      "zh": [
        "瑜瑜有禮貌地拒絕狼的提議。",
        "她照媽媽的提醒，繼續走主要道路。",
        "瑜瑜走原來的路時，狼跑走了。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Grandma puts on her coat.",
        "She goes down for her mail.",
        "Her door clicks shut."
      ],
      "zh": [
        "奶奶穿上外套。",
        "她下樓拿信。",
        "她的門喀噠一聲關上。"
      ]
    },
    "B": {
      "en": [
        "Grandma puts on a coat.",
        "She goes downstairs to get her mail.",
        "The door clicks shut behind her."
      ],
      "zh": [
        "奶奶穿上外套。",
        "她下樓拿信。",
        "門在她身後喀噠一聲關上。"
      ]
    },
    "C": {
      "en": [
        "Grandma puts on her coat before going out.",
        "She heads downstairs to collect her mail.",
        "Behind her, the door makes a click as it shuts."
      ],
      "zh": [
        "出門前，奶奶穿上外套。",
        "她下樓去拿信。",
        "她身後的門關上時發出喀噠聲。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "The wolf reaches the door.",
        "It is not fully closed.",
        "He slips inside."
      ],
      "zh": [
        "狼來到門前。",
        "門沒有完全關緊。",
        "牠悄悄溜進去。"
      ]
    },
    "B": {
      "en": [
        "The wolf comes to Grandma’s door.",
        "The door is not quite closed.",
        "He slips into her home."
      ],
      "zh": [
        "狼來到奶奶的門前。",
        "門沒有完全關緊。",
        "牠悄悄溜進奶奶家。"
      ]
    },
    "C": {
      "en": [
        "When the wolf reaches Grandma’s door, he finds a gap.",
        "Although it clicked shut, it is not completely closed.",
        "He slips through the gap and goes inside."
      ],
      "zh": [
        "狼來到奶奶門前時，看見一道門縫。",
        "門雖然喀噠關上，卻沒有完全關緊。",
        "牠穿過門縫，悄悄進到裡面。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "The wolf finds a cap.",
        "He puts on Grandma’s glasses.",
        "He hides under a blanket."
      ],
      "zh": [
        "狼找到一頂帽子。",
        "牠戴上奶奶的眼鏡。",
        "牠躲在毯子下面。"
      ]
    },
    "B": {
      "en": [
        "The wolf finds a cap in the room.",
        "He puts on Grandma’s glasses.",
        "Then he hides under her blanket."
      ],
      "zh": [
        "狼在房間裡找到一頂帽子。",
        "牠戴上奶奶的眼鏡。",
        "接著，牠躲在奶奶的毯子下面。"
      ]
    },
    "C": {
      "en": [
        "Inside the room, the wolf finds a cap.",
        "He puts on Grandma’s glasses as part of his disguise.",
        "Then he hides beneath a blanket, pretending to be Grandma."
      ],
      "zh": [
        "在房間裡，狼找到一頂帽子。",
        "牠戴上奶奶的眼鏡來偽裝。",
        "接著，牠躲在毯子下，假裝是奶奶。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail reaches Grandma’s building.",
        "She checks the number.",
        "This is the right place."
      ],
      "zh": [
        "瑜瑜到奶奶的大樓了。",
        "她查看門牌號碼。",
        "就是這裡。"
      ]
    },
    "B": {
      "en": [
        "Gail comes to Grandma’s building.",
        "She looks at the building number.",
        "The number shows she is at the right place."
      ],
      "zh": [
        "瑜瑜來到奶奶的大樓。",
        "她查看大樓的門牌號碼。",
        "號碼顯示她找對地方了。"
      ]
    },
    "C": {
      "en": [
        "Gail arrives at the building where Grandma lives.",
        "She checks its number to confirm her destination.",
        "Yes, she has reached the right place."
      ],
      "zh": [
        "瑜瑜來到奶奶住的大樓。",
        "她查看門牌號碼，確認目的地。",
        "沒錯，她找對地方了。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail rings the bell.",
        "“Come in!” calls a deep voice.",
        "She stays by the open door."
      ],
      "zh": [
        "瑜瑜按門鈴。",
        "「進來！」低沉的聲音喊。",
        "她留在敞開的門旁。"
      ]
    },
    "B": {
      "en": [
        "Gail rings Grandma’s doorbell.",
        "A deep voice calls, “Come in!”",
        "Gail stays beside the open door."
      ],
      "zh": [
        "瑜瑜按了奶奶的門鈴。",
        "一個低沉的聲音喊：「進來！」",
        "瑜瑜留在敞開的門旁。"
      ]
    },
    "C": {
      "en": [
        "After checking the number, Gail rings the bell.",
        "From inside, a deep voice calls for her to come in.",
        "Gail remains beside the open door."
      ],
      "zh": [
        "查看門牌後，瑜瑜按了門鈴。",
        "裡面傳來低沉的聲音，叫她進來。",
        "瑜瑜仍然留在敞開的門旁。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“What big ears!” says Gail.",
        "“To hear you better,” says the wolf.",
        "One ear pops out."
      ],
      "zh": [
        "「好大的耳朵！」瑜瑜說。",
        "「可以更清楚聽妳說話。」狼說。",
        "一隻耳朵露出來了。"
      ]
    },
    "B": {
      "en": [
        "“Grandma, your ears are big!” says Gail.",
        "“I can hear you better,” says the wolf.",
        "One of his ears pops out."
      ],
      "zh": [
        "「奶奶，妳的耳朵好大！」瑜瑜說。",
        "「我可以更清楚聽妳說話。」狼說。",
        "牠的一隻耳朵露出來了。"
      ]
    },
    "C": {
      "en": [
        "Gail notices the large ears and says, “Grandma, what big ears you have!”",
        "“To hear you better,” the wolf answers.",
        "As he speaks, one ear pops out of his disguise."
      ],
      "zh": [
        "瑜瑜注意到大耳朵，說：「奶奶，妳的耳朵好大！」",
        "「可以更清楚聽妳說話。」狼回答。",
        "牠說話時，一隻耳朵從偽裝中露出來。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“What big eyes!” says Gail.",
        "“To see you better,” says the wolf.",
        "His glasses slide down."
      ],
      "zh": [
        "「好大的眼睛！」瑜瑜說。",
        "「可以更清楚看妳。」狼說。",
        "牠的眼鏡滑下來了。"
      ]
    },
    "B": {
      "en": [
        "Gail says, “Your eyes are big!”",
        "“I can see you better,” says the wolf.",
        "His glasses slide down his face."
      ],
      "zh": [
        "瑜瑜說：「妳的眼睛好大！」",
        "「我可以更清楚看妳。」狼說。",
        "牠臉上的眼鏡滑下來了。"
      ]
    },
    "C": {
      "en": [
        "Next, Gail notices the big eyes beneath the glasses.",
        "The wolf claims they help him see her better.",
        "His glasses slide down, revealing more of his face."
      ],
      "zh": [
        "接著，瑜瑜注意到眼鏡下的大眼睛。",
        "狼聲稱那能讓牠更清楚看她。",
        "牠的眼鏡滑下來，露出更多臉部。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“What big teeth!” says Gail.",
        "The wolf smiles wide.",
        "Gail steps back."
      ],
      "zh": [
        "「好大的牙齒！」瑜瑜說。",
        "狼張大嘴微笑。",
        "瑜瑜退後一步。"
      ]
    },
    "B": {
      "en": [
        "Gail notices the wolf’s big teeth.",
        "The wolf gives a wide smile.",
        "Gail takes one step back."
      ],
      "zh": [
        "瑜瑜注意到狼的大牙齒。",
        "狼露出大大的笑容。",
        "瑜瑜往後退一步。"
      ]
    },
    "C": {
      "en": [
        "“What big teeth you have!” Gail says as she looks at him.",
        "The wolf answers with a wide smile.",
        "Seeing those teeth, Gail takes a step back."
      ],
      "zh": [
        "瑜瑜看著牠說：「妳的牙齒好大！」",
        "狼露出大大的笑容作回應。",
        "看見那些牙齒，瑜瑜往後退一步。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail sees a furry tail.",
        "Grandma has no tail!",
        "Gail walks away from the door."
      ],
      "zh": [
        "瑜瑜看見毛茸茸的尾巴。",
        "奶奶沒有尾巴！",
        "瑜瑜走開，離開門邊。"
      ]
    },
    "B": {
      "en": [
        "Gail sees a tail with fur.",
        "Grandma does not have a tail.",
        "Gail moves away from the door."
      ],
      "zh": [
        "瑜瑜看見一條有毛的尾巴。",
        "奶奶沒有尾巴。",
        "瑜瑜離開門邊。"
      ]
    },
    "C": {
      "en": [
        "Gail spots a furry tail sticking out.",
        "Grandma has no tail, so this cannot be Grandma.",
        "Gail walks away from the door after noticing the clue."
      ],
      "zh": [
        "瑜瑜看見一條露出來的毛茸茸尾巴。",
        "奶奶沒有尾巴，所以這不可能是奶奶。",
        "發現這個線索後，瑜瑜離開門邊。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail calls Grandma.",
        "“Are you in bed?”",
        "“No, I am downstairs!”"
      ],
      "zh": [
        "瑜瑜打電話給奶奶。",
        "「妳在床上嗎？」",
        "「不，我在樓下！」"
      ]
    },
    "B": {
      "en": [
        "Gail uses her phone to call Grandma.",
        "“Are you in bed?” she asks.",
        "Grandma says, “No, I am downstairs!”"
      ],
      "zh": [
        "瑜瑜用手機打給奶奶。",
        "「妳在床上嗎？」她問。",
        "奶奶說：「不，我在樓下！」"
      ]
    },
    "C": {
      "en": [
        "Gail calls Grandma to check where she is.",
        "“Are you in bed?” Gail asks over the phone.",
        "Grandma answers that she is downstairs, confirming she is not in bed."
      ],
      "zh": [
        "瑜瑜打電話給奶奶，確認她在哪裡。",
        "「妳在床上嗎？」瑜瑜在電話裡問。",
        "奶奶回答她在樓下，確認她不在床上。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail meets Grandma downstairs.",
        "They tell the manager.",
        "All three go upstairs."
      ],
      "zh": [
        "瑜瑜在樓下見到奶奶。",
        "她們告訴管理員。",
        "三人一起上樓。"
      ]
    },
    "B": {
      "en": [
        "Gail meets Grandma on the lower floor.",
        "They tell the building manager what happened.",
        "Gail, Grandma, and the manager go upstairs together."
      ],
      "zh": [
        "瑜瑜在樓下見到奶奶。",
        "她們把事情告訴大樓管理員。",
        "瑜瑜、奶奶和管理員一起上樓。"
      ]
    },
    "C": {
      "en": [
        "Downstairs, Gail meets the real Grandma.",
        "Together they tell the building manager about the visitor.",
        "The three return upstairs as a group."
      ],
      "zh": [
        "在樓下，瑜瑜見到真正的奶奶。",
        "她們一起把訪客的事告訴大樓管理員。",
        "三人一起回到樓上。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“Come out, Wolf,” says Grandma.",
        "The wolf drops the blanket.",
        "His cap falls to the floor."
      ],
      "zh": [
        "「出來吧，狼。」奶奶說。",
        "狼放下毯子。",
        "牠的帽子掉到地板上。"
      ]
    },
    "B": {
      "en": [
        "Grandma tells the wolf to come out.",
        "He lets the blanket drop.",
        "His cap falls onto the floor."
      ],
      "zh": [
        "奶奶叫狼出來。",
        "牠讓毯子落下。",
        "牠的帽子掉到地板上。"
      ]
    },
    "C": {
      "en": [
        "“Come out, Wolf,” Grandma says when they return.",
        "The wolf drops the blanket that covered him.",
        "As his cap falls to the floor, his disguise comes apart."
      ],
      "zh": [
        "她們回來後，奶奶說：「出來吧，狼。」",
        "狼放下蓋著牠的毯子。",
        "帽子掉到地板上，牠的偽裝散了。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“I wanted your lunch,” says the wolf.",
        "“Ask first,” says Gail.",
        "He gives back the bread."
      ],
      "zh": [
        "「我想要妳的午餐。」狼說。",
        "「要先問。」瑜瑜說。",
        "牠還回麵包。"
      ]
    },
    "B": {
      "en": [
        "The wolf says he wanted Gail’s lunch.",
        "Gail tells him, “You must ask first.”",
        "The wolf returns the bread."
      ],
      "zh": [
        "狼說牠想要瑜瑜的午餐。",
        "瑜瑜對牠說：「你必須先問。」",
        "狼還回麵包。"
      ]
    },
    "C": {
      "en": [
        "“I wanted your lunch,” the wolf admits.",
        "Gail explains that he must ask before taking food.",
        "The wolf gives the bread back instead of keeping it."
      ],
      "zh": [
        "「我想要妳的午餐。」狼承認。",
        "瑜瑜說明，拿食物前必須先問。",
        "狼把麵包還回來，沒有留下它。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "“I am sorry,” says the wolf.",
        "“May I have some soup?”",
        "Grandma brings one more bowl."
      ],
      "zh": [
        "「對不起。」狼說。",
        "「我可以喝一些湯嗎？」",
        "奶奶多拿來一個碗。"
      ]
    },
    "B": {
      "en": [
        "The wolf says he is sorry.",
        "He asks, “May I have some soup?”",
        "Grandma brings another bowl for him."
      ],
      "zh": [
        "狼說牠很抱歉。",
        "牠問：「我可以喝一些湯嗎？」",
        "奶奶為牠多拿來一個碗。"
      ]
    },
    "C": {
      "en": [
        "After returning the bread, the wolf apologizes.",
        "This time, he asks politely for some soup.",
        "Grandma brings one more bowl so he can join lunch."
      ],
      "zh": [
        "還回麵包後，狼道歉。",
        "這一次，牠有禮貌地詢問能否喝湯。",
        "奶奶多拿來一個碗，讓牠一起吃午餐。"
      ]
    }
  },
  {
    "A": {
      "en": [
        "Gail, Grandma, and the wolf share lunch.",
        "Gail calls Mom.",
        "“We are all fine!”"
      ],
      "zh": [
        "瑜瑜、奶奶和狼分享午餐。",
        "瑜瑜打給媽媽。",
        "「我們都很好！」"
      ]
    },
    "B": {
      "en": [
        "Gail eats lunch with Grandma and the wolf.",
        "She calls Mom on her phone.",
        "“I am with Grandma. We are all fine!” she says."
      ],
      "zh": [
        "瑜瑜和奶奶、狼一起吃午餐。",
        "她用手機打給媽媽。",
        "「我和奶奶在一起。我們都很好！」她說。"
      ]
    },
    "C": {
      "en": [
        "Gail, Grandma, and the wolf share the lunch together.",
        "Gail phones Mom after the trouble has been settled.",
        "“I am here with Grandma. We are all fine!” she tells her."
      ],
      "zh": [
        "瑜瑜、奶奶和狼一起分享午餐。",
        "事情解決後，瑜瑜打電話給媽媽。",
        "「我在這裡陪奶奶。我們都很好！」她告訴媽媽。"
      ]
    }
  }
];
export function redPages(level:ReadingLevel):StoryPage[]{return originalPages.map((page,i)=>({...page,lines:redText[i][level].en,translation:redText[i][level].zh.join('|')}));}
export function redChinese(page:number,level:ReadingLevel){return redText[page][level].zh;}
