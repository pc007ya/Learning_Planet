import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Existing ABC story and images are unchanged. Evidence refers to their original page order.
 * First stored choice is correct; each public answer position is balanced deterministically. */
export const genieQuizRows:{id:string;image:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "genie-0",
    "image": "lamp.png",
    "pages": [
      1,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what shines on Gail’s rug at the beginning?",
        "choices": [
          "A little lamp",
          "A wooden train",
          "A gold crown",
          "A silver crown"
        ],
        "explanation": "Page 1: The little lamp shines. Blue light comes out."
      },
      "B": {
        "prompt": "In this story, what comes out of the lamp at the beginning?",
        "choices": [
          "Blue light",
          "A wooden track",
          "A few bridge blocks",
          "A huge toy castle"
        ],
        "explanation": "On page 1, blue sparks rise from the lamp’s spout and open a doorway. The train and other toys appear after Gail meets the genie."
      },
      "C": {
        "prompt": "In this story, how does the lamp’s opening role differ from its role when Gail returns home?",
        "choices": [
          "At first its light opens a doorway; later Gail remembers to think before asking for more.",
          "At first Gail has finished playing; later its light opens her first doorway to the square.",
          "At first it removes the castle; later it gives each friend a new crown.",
          "At first it builds the whole track; later Gail compares the castle with the train."
        ],
        "explanation": "Page 1 gives the lamp’s blue sparks an entrance role. On page 20, Gail sets it on the rug and remembers to think about how she will use something. The return follows the shared train game, not another first visit."
      }
    }
  },
  {
    "id": "genie-1",
    "image": "genie.png",
    "pages": [
      2,
      3
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who welcomes Gail at the market?",
        "choices": [
          "The genie",
          "A knight",
          "A pirate",
          "A little elf"
        ],
        "explanation": "Page 2: Gail meets a friendly genie. He welcomes her."
      },
      "B": {
        "prompt": "In this story, what does the friendly genie offer Gail?",
        "choices": [
          "A wish",
          "A finished bridge",
          "A turn on the track",
          "A trip back home"
        ],
        "explanation": "Page 2 introduces the friendly genie. On page 3, he offers Gail a wish, and she thinks of a toy."
      },
      "C": {
        "prompt": "In this story, which action starts Gail’s toy wishes in the square?",
        "choices": [
          "The friendly genie welcomes her and offers her a wish.",
          "The two friends finish a track before Gail meets the genie.",
          "Gail clears the castle before the genie offers her first wish.",
          "The friends give Gail both crowns before she enters the square."
        ],
        "explanation": "Pages 2–3 place the genie’s welcome and offer before Gail’s toy wishes. Friends arriving, clearing clutter, and shared track building happen later."
      }
    }
  },
  {
    "id": "genie-2",
    "image": "train.png",
    "pages": [
      4,
      5,
      8,
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which toy appears first?",
        "choices": [
          "A wooden train",
          "A bright balloon",
          "A huge castle",
          "Extra blocks"
        ],
        "explanation": "Page 4: A wooden train appears. The balloon comes after it."
      },
      "B": {
        "prompt": "In this story, which toy does Gail want to roll along a track with her friends?",
        "choices": [
          "A wooden train",
          "A bright balloon",
          "A shiny crown",
          "A huge castle"
        ],
        "explanation": "Page 4 gives Gail a wooden train. She wants to roll it along a track with her friends."
      },
      "C": {
        "prompt": "In this story, what does Gail do immediately after the wooden train first appears, before she tries it?",
        "choices": [
          "She spots a balloon and asks for more things.",
          "She clears the castle and crowns from the square.",
          "She finishes a small bridge with her friends.",
          "She finishes joining the track and gives everyone a turn."
        ],
        "explanation": "Page 5 explicitly says Gail notices the balloon before trying the train, then asks for more things. The bridge, joined track, and shared turns belong to the later chosen game."
      }
    }
  },
  {
    "id": "genie-3",
    "image": "silver.png",
    "pages": [
      6,
      7
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what crown color comes after gold?",
        "choices": [
          "Silver",
          "Green",
          "Pink",
          "Black"
        ],
        "explanation": "Pages 6–7: There is a gold crown. Then Gail sees a silver crown."
      },
      "B": {
        "prompt": "In this story, what does Gail decide when the genie also shows a silver crown?",
        "choices": [
          "She asks to keep both colors.",
          "She chooses only the gold crown.",
          "She chooses only the silver crown.",
          "She gives both crowns back at once."
        ],
        "explanation": "Pages 6–7 show Gail liking gold and then wanting silver too. At this point she asks to keep both instead of choosing."
      },
      "C": {
        "prompt": "In this story, how is Gail’s crown choice different from her later train decision?",
        "choices": [
          "At first she keeps both crown colors; later she thinks about shared use and chooses the train.",
          "At first she chooses only silver; later she asks to keep both colors instead of the train.",
          "At first she decides how to share the crowns; later she removes the train to keep them.",
          "At first she keeps no crown; later she asks for more crowns to fill the square."
        ],
        "explanation": "Page 7 has Gail ask for both colors without choosing. Pages 11–14 have her compare toys and decide on the train for shared play. Page 15 then removes the crowns rather than giving them a new shared-game role."
      }
    }
  },
  {
    "id": "genie-4",
    "image": "castle.png",
    "pages": [
      8,
      9,
      10,
      12
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which toy is huge?",
        "choices": [
          "The castle",
          "The train",
          "The balloon",
          "The crown"
        ],
        "explanation": "Page 8: A huge toy castle appears. Its towers rise high."
      },
      "B": {
        "prompt": "In this story, what happens to the space around the train when the huge castle appears?",
        "choices": [
          "There is much less room.",
          "The square becomes empty.",
          "The crowns are removed at once.",
          "The friends finish joining the track."
        ],
        "explanation": "Page 8 says the castle’s high towers leave much less room around the train. More blocks add to the crowding on page 9."
      },
      "C": {
        "prompt": "In this story, what makes the castle and small train different choices for this square?",
        "choices": [
          "The castle takes up room, while the train can leave space for shared play.",
          "The castle clears the path, while the train fills the whole square.",
          "The castle has already been removed, while Gail has not received the train.",
          "The castle is small enough for the track, while the train towers over Gail."
        ],
        "explanation": "Page 8 makes the castle huge and reduces the space around the train. Page 12 contrasts that with a small train that can leave room for everyone. The comparison is about usable space, not simply choosing the largest toy."
      }
    }
  },
  {
    "id": "genie-5",
    "image": "blocks.png",
    "pages": [
      9,
      10,
      15,
      16,
      17,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why can’t they play when the friends first arrive?",
        "choices": [
          "Not enough space",
          "No toys to use",
          "The friends are still away",
          "Only the train is there"
        ],
        "explanation": "Pages 9–10: There are many toys. The friends have too little space to play."
      },
      "B": {
        "prompt": "In this story, what makes playing difficult when the two friends arrive?",
        "choices": [
          "Too many toys leave little space.",
          "They have not received any toys.",
          "Only a tiny train is in the square.",
          "They have already removed the castle."
        ],
        "explanation": "On pages 9–10, toys crowd the square and block a clear path. The friends have arrived, but there is too little space for playing together then."
      },
      "C": {
        "prompt": "In this story, how does the crowded square at the friends’ arrival differ from the later track game?",
        "choices": [
          "The castle and many blocks crowd it at first; later fewer things leave room for the track.",
          "Only a few bridge blocks are there at first; later the castle fills the track’s space.",
          "The train has already been removed at first; later both crowns become the shared game.",
          "The square is empty at first; later more toys make the path easier to reach."
        ],
        "explanation": "Pages 9–10 have many toys and little room when the friends arrive. Pages 15–18 remove the castle and crowns, retain a few useful blocks, and leave space for the track and shared turns. The problem is that early crowded moment, not an inability to play throughout the story."
      }
    }
  },
  {
    "id": "genie-6",
    "image": "train.png",
    "pages": [
      11,
      12,
      13,
      14,
      15
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which toy does Gail choose to keep?",
        "choices": [
          "The train",
          "Both crowns",
          "The huge castle",
          "The balloon"
        ],
        "explanation": "Pages 13–14: Gail chooses the train. She wants to keep it."
      },
      "B": {
        "prompt": "In this story, what does Gail tell the genie after comparing the toys?",
        "choices": [
          "She will keep the train.",
          "She will keep the huge castle instead.",
          "She will keep both crowns instead.",
          "She will ask for another huge castle."
        ],
        "explanation": "On pages 11–14, Gail compares the castle and train, chooses the train, and tells the genie what she wants to keep."
      },
      "C": {
        "prompt": "In this story, why does Gail’s decision follow comparing the castle and train?",
        "choices": [
          "She considers what they can use together in the available space.",
          "She chooses which crown color looks brightest beside the castle.",
          "She decides to keep every shiny thing before thinking about use.",
          "She removes the train so the castle can fill the whole square."
        ],
        "explanation": "Page 11 asks which toy Gail could use with her friends in this space. Page 12 shows the small train can leave room; page 13 then connects her decision with doing something together."
      }
    }
  },
  {
    "id": "genie-7",
    "image": "blocks.png",
    "pages": [
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what makes more room after Gail chooses?",
        "choices": [
          "Removing the castle",
          "Keeping both crowns",
          "Adding more blocks",
          "Keeping the huge castle"
        ],
        "explanation": "Page 15: The castle goes away. There is more space."
      },
      "B": {
        "prompt": "In this story, what stays beside the train after the castle and crowns are removed?",
        "choices": [
          "A few blocks for a small bridge",
          "Both crowns for a tall tower",
          "Enough blocks to fill the whole square",
          "Another huge castle beside the track"
        ],
        "explanation": "Page 15 removes the castle and crowns. Page 16 keeps a few blocks, which the friends use for a small bridge. Fewer things does not mean every other object is gone."
      },
      "C": {
        "prompt": "In this story, which event shows that choosing fewer things still leaves useful objects beside the train?",
        "choices": [
          "A few remaining blocks are used to make a small bridge.",
          "Gail asks to keep both crown colors instead of choosing.",
          "The huge castle’s towers rise above Gail before the friends arrive.",
          "Extra blocks first fill the space around the huge castle."
        ],
        "explanation": "Page 16 gives the remaining blocks a specific use: a small bridge. It contrasts that useful few with filling the whole square. The train stays, and clearing clutter leaves room for friends."
      }
    }
  },
  {
    "id": "genie-8",
    "image": "track.png",
    "pages": [
      12,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who joins the track pieces?",
        "choices": [
          "Gail and her friends",
          "Only the genie",
          "Only Gail",
          "Only her friends"
        ],
        "explanation": "Page 17: Gail and her friends join the wooden track pieces."
      },
      "B": {
        "prompt": "In this story, how do the friends help build the track?",
        "choices": [
          "Each friend adds a piece.",
          "Only Gail joins all the pieces.",
          "Only the genie builds the track.",
          "The friends wait without helping."
        ],
        "explanation": "Page 12 imagines each friend adding track. On page 17, Gail and her friends actually join the wooden pieces, leaving room around the curve."
      },
      "C": {
        "prompt": "In this story, why do they leave enough space around the track’s curve?",
        "choices": [
          "So everyone can reach and take part.",
          "So both crowns can fill the space beside it.",
          "So the huge castle can cover the clear path again.",
          "So another pile of toys can replace the bridge."
        ],
        "explanation": "Page 17 explicitly says they leave room around the curve for everyone to reach. This makes the chosen game shared, rather than repeating the earlier crowded arrangement."
      }
    }
  },
  {
    "id": "genie-9",
    "image": "train.png",
    "pages": [
      12,
      13,
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why does Gail pick the small train?",
        "choices": [
          "Friends can play together",
          "It is the biggest toy",
          "It fills the whole square",
          "It holds all the crowns"
        ],
        "explanation": "Pages 12–13: The train leaves room. Gail and her friends can play together."
      },
      "B": {
        "prompt": "In this story, which reason makes the train useful for their shared game?",
        "choices": [
          "There is room to build track and take turns.",
          "They can keep both crowns for their colors.",
          "They can explore the huge castle’s tall towers.",
          "They can fill the square with more blocks."
        ],
        "explanation": "Page 12 leaves room for friends to add track. Page 13 chooses the train for doing something together, and page 18 gives everyone a turn."
      },
      "C": {
        "prompt": "In this story, which comparison explains why the small train works better for Gail’s plan?",
        "choices": [
          "A shared track leaves room for the friends, unlike the crowded pile of toys.",
          "The castle’s tall towers matter more than room to reach the track.",
          "Keeping both crown colors matters more than deciding how they will use them.",
          "A square filled with extra blocks gives them the most room to play."
        ],
        "explanation": "Pages 12–13 connect the small train with shared use and enough room. Pages 17–19 show the result: friends join the track and take turns. The earlier pile of toys had reduced that usable space."
      }
    }
  },
  {
    "id": "genie-picture-0",
    "image": "quiz/scene-1.jpg",
    "pages": [
      1,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what glows in this opening picture?",
        "choices": [
          "The little lamp",
          "The wooden train",
          "The gold crown",
          "The silver crown"
        ],
        "explanation": "Page 1: The lamp glows. Its blue light opens a way out."
      },
      "B": {
        "prompt": "In this story, which opening event does this room picture recall?",
        "choices": [
          "The lamp’s blue light opens a doorway.",
          "Gail keeps the train after comparing toys.",
          "The genie removes the castle and crowns.",
          "Gail returns home after the shared train game."
        ],
        "explanation": "Page 1 puts the glowing lamp and blue sparks in Gail’s room before the visit. Page 20 is her later return with what she has learned."
      },
      "C": {
        "prompt": "In this story, where does the glowing-lamp scene belong in the sequence?",
        "choices": [
          "Before Gail enters the square and meets the genie.",
          "After the friends have built their bridge but before Gail chooses a toy.",
          "After Gail has compared the toys but before the train first appears.",
          "Before Gail returns home but after the crowns have been removed."
        ],
        "explanation": "Page 1 starts the journey with the lamp’s light opening a doorway. Meeting the genie is page 2, and the toy decisions and removal occur much later. This picture recalls the entrance, not the return."
      }
    }
  },
  {
    "id": "genie-picture-1",
    "image": "quiz/scene-2.jpg",
    "pages": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what toy does the genie hold here?",
        "choices": [
          "A wooden train",
          "A bright balloon",
          "A huge castle",
          "A shiny crown"
        ],
        "explanation": "Page 4: A wooden train appears. Gail wants to play with it."
      },
      "B": {
        "prompt": "In this story, which early wish does this genie-and-train picture recall?",
        "choices": [
          "Gail gets a wooden train to play with.",
          "Gail asks to keep both crown colors.",
          "Gail wishes for the huge castle.",
          "Gail decides to remove the castle and crowns."
        ],
        "explanation": "Pages 2–4 introduce the friendly genie, a toy wish, and the wooden train. The train in his hands fits that early wish, before Gail asks for more things."
      },
      "C": {
        "prompt": "In this story, which order places the train in this picture among Gail’s wishes?",
        "choices": [
          "The train appears before the balloon and the huge castle.",
          "Both crowns appear before the train and then the balloon.",
          "The castle is removed before Gail first receives the train.",
          "The silver crown appears first, then the train, then the gold crown."
        ],
        "explanation": "Page 4 has the train; page 5 adds the balloon; pages 6–8 add the crowns and castle. The picture includes the genie and early train, not just a welcome with no toy yet."
      }
    }
  },
  {
    "id": "genie-picture-2",
    "image": "quiz/scene-3.jpg",
    "pages": [
      8,
      9,
      10,
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what fills the square in this picture?",
        "choices": [
          "Many toys",
          "Only the train",
          "Only a few blocks",
          "One small bridge"
        ],
        "explanation": "Pages 8–9: The castle and more toys crowd the square."
      },
      "B": {
        "prompt": "In this story, which event does this crowded-toy picture recall?",
        "choices": [
          "More toys leave Gail hardly a clear path.",
          "The genie has already removed the castle.",
          "The friends keep only a few bridge blocks.",
          "The friends have finished a spacious track."
        ],
        "explanation": "Pages 8–9 add a huge castle and more blocks. Gail can hardly find a clear path. Clearing clutter and keeping a few useful blocks happen later."
      },
      "C": {
        "prompt": "In this story, what problem will Gail notice when the friends arrive after this crowded scene?",
        "choices": [
          "There is less space for them to play together.",
          "There are no toys for the friends to use.",
          "The castle and crowns have already been removed.",
          "The friends have already left without joining the track."
        ],
        "explanation": "Page 9 crowds the square with toys. Page 10 brings two friends and makes the effect clear: more toys have left less room for shared play. The cleared space belongs to later pages."
      }
    }
  },
  {
    "id": "genie-picture-3",
    "image": "quiz/scene-4.jpg",
    "pages": [
      10,
      11
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do the friends need when they first arrive here?",
        "choices": [
          "Space to play",
          "More huge toys",
          "Another shiny crown",
          "A bigger pile of blocks"
        ],
        "explanation": "Page 10: The friends need space. The square is crowded."
      },
      "B": {
        "prompt": "In this story, which problem does this friends-arriving picture recall?",
        "choices": [
          "They have too little space to play.",
          "They have no toys in the square.",
          "They have already taken turns on the train.",
          "They have already cleared the castle and crowns."
        ],
        "explanation": "Page 10 has two friends arrive at the crowded square. The toys are there, but the shared playing space is too small then."
      },
      "C": {
        "prompt": "In this story, what does the genie ask Gail to compare next after she notices this problem?",
        "choices": [
          "The huge castle and the small train",
          "The gold crown and the silver crown",
          "The lamp and the bright balloon",
          "The bridge and the wooden track"
        ],
        "explanation": "Page 10 identifies the lack of play space. On page 11, the genie asks Gail to compare the castle and train for use with her friends in that space. Choosing both crown colors was an earlier decision."
      }
    }
  },
  {
    "id": "genie-picture-4",
    "image": "quiz/scene-5.jpg",
    "pages": [
      13,
      14,
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail choose to keep in this picture?",
        "choices": [
          "The train",
          "Both crowns",
          "The huge castle",
          "Every extra toy"
        ],
        "explanation": "Pages 13–14: Gail chooses the train and says she will keep it."
      },
      "B": {
        "prompt": "In this story, which decision does this clearer train scene recall?",
        "choices": [
          "Gail keeps the train, and the castle and crowns go away.",
          "Gail keeps both crowns and sends the train away.",
          "Gail chooses the huge castle instead of the train.",
          "Gail asks for more blocks to fill the whole square."
        ],
        "explanation": "Pages 13–15 choose and keep the train, then remove the castle and crowns. The few remaining blocks still have a use on page 16."
      },
      "C": {
        "prompt": "In this story, what useful objects remain besides the train after the castle and crowns go away?",
        "choices": [
          "A few blocks to make a small bridge.",
          "Both crowns to build a new tower.",
          "The huge castle to fill the cleared path.",
          "All the extra toys to cover the track."
        ],
        "explanation": "Page 15 removes the castle and crowns, but page 16 deliberately retains a few blocks for a small bridge. The clearer scene therefore does not mean the train is the only object left."
      }
    }
  },
  {
    "id": "genie-picture-5",
    "image": "quiz/scene-6.jpg",
    "pages": [
      15,
      16,
      17,
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do the friends do beside the track here?",
        "choices": [
          "Play with the train",
          "Ask for more crowns",
          "Compare the huge castle",
          "Go back to Gail’s room"
        ],
        "explanation": "Pages 17–18: The friends build the track. Then they play with the train."
      },
      "B": {
        "prompt": "In this story, what does everyone get as the train rolls along the track?",
        "choices": [
          "A turn to play",
          "A new crown",
          "A huge castle",
          "A second lamp"
        ],
        "explanation": "Page 18 says everyone gets a turn on the train. The chosen game includes the friends instead of leaving them out."
      },
      "C": {
        "prompt": "In this story, which set of choices makes this shared track game possible?",
        "choices": [
          "Keep the train, clear the castle and crowns, retain a few bridge blocks, and leave space around the track.",
          "Keep both crowns and the huge castle, add more blocks, and cover the space around the train.",
          "Remove the train and bridge blocks, keep the castle, and leave each friend to choose a crown.",
          "Keep every extra toy, finish the track inside the crowded pile, and clear the castle only after the game."
        ],
        "explanation": "Pages 15–17 clear the castle and crowns, use a few blocks for a bridge, and leave enough room around the track. Page 18 then gives everyone a turn; page 19 values that shared fun over a mountain of toys."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function genieQuestions(level:ReadingLevel):StoryQuestion[]{return genieQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,image:'images/story/genie-v1/'+row.image,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
