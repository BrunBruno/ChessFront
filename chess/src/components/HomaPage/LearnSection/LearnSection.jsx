import { useRef, useState } from "react";

import classes from "./LearnSection.module.scss";

import LearnBlock from "./LearnBlock";
import LearnExpand from "./LearnExpand";

function LearnSection() {
  const exp = {
    Play: [
      "Play Chess",
      "Chess is a game of strategy and skill that has been played for centuries. The game has a long and rich history, with origins dating back to ancient India. Chess is played by two players, each of whom controls a set of 16 pieces on a square board made up of 64 squares.",
      "The goal of the game is to checkmate the opponent's king, which means putting the king in a position where it is under attack and cannot escape capture. This is achieved by moving the pieces strategically across the board, with each piece having its own unique movement pattern.",
      "Playing chess requires a combination of analytical skills, tactical acumen, and creativity. It is often compared to a battle of wits, with each player trying to outmaneuver the other and gain an advantage. A skilled chess player must be able to anticipate their opponent's moves, think several moves ahead, and adjust their strategy on the fly.",
    ],
    Learn: [
      "Learn to Play",
      "requires a combination of strategic thinking, analytical skills, and creativity. It is a great way to exercise your mind and develop your problem-solving abilities.",
      "There are many resources available for those who want to learn how to play chess. Online tutorials, instructional videos, and chess software can all be helpful in learning the game. In addition, many schools and community centers offer chess classes and clubs for both children and adults.",
      "When learning to play chess, it is important to start with the basics. This includes learning the names and movements of each piece, as well as the rules for capturing and checkmating. As you progress, you can begin to explore different strategies and opening moves.",
    ],
    Compete: [
      "Compete with Other Players",
      "Competing in chess can be a thrilling and challenging experience. Chess is a game that rewards strategic thinking, tactical acumen, and creative problem-solving, and competing against other skilled players can provide a unique and exciting challenge.",
      "There are many different types of chess competitions, ranging from local tournaments to international championships. Some competitions are open to all players, while others are restricted to specific age groups or skill levels. Regardless of the type of competition, the goal is always to win as many games as possible and advance to the next round.",
      "Preparing for a chess competition requires dedication and practice. This can involve studying classic chess games, analyzing your own games for weaknesses, and honing your opening strategies and tactics. Many chess players also work with coaches or trainers to help them improve their skills and prepare for competition.",
    ],
    Improve: [
      "Improve your Skills",
      "ImprImproving your chess skills can be a rewarding and challenging journey. Chess is a game that rewards strategic thinking, analytical skills, and creative problem-solving, and there is always something new to learn and discover.ove",
      "One of the best ways to improve your chess skills is to study classic chess games. This can help you develop an understanding of different strategies and opening moves, as well as gain insight into the thought process of experienced players. Many books and online resources are available that analyze and explain classic games, making it easier to learn from them.",
      "Another important aspect of improving your chess skills is practice. Regularly playing against other players, whether in person or online, can help you develop your tactical and strategic abilities. You can also practice on your own by solving puzzles and working through different scenarios.",
    ],
  };
  const expandRef = useRef(null);
  const blockRef = useRef(null);
  const [expandContent, setExpandContent] = useState({
    title: "",
    text1: "",
    text2: "",
    text3: "",
  });

  const onExpandContent = (event) => {
    setExpandContent({
      title: exp[event][0],
      text1: exp[event][1],
      text2: exp[event][2],
      text3: exp[event][3],
    });
  };

  const onExpanClose = () => {
    expandRef.current.classList.remove(classes["expand-active"]);
    const childs = blockRef.current.children;
    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.remove(classes.hidden);
    }
  };

  const blocks = [];
  for (let i = 0; i < 6; i++) {
    if (i % 2 == 1) {
      blocks.push(Math.floor(Math.random() * (5 - blocks[i - 1])));
    } else {
      blocks.push(Math.floor(Math.random() * 5));
    }
  }

  const makeBlocks = (count) => {
    let divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(<div />);
    }
    return divs;
  };

  return (
    <section id="learn" className={classes.learnSec}>
      <LearnExpand
        expandRef={expandRef}
        expandContent={expandContent}
        onExpanClose={onExpanClose}
      />

      <div className={classes.learn} ref={blockRef}>
        {blocks.map((count, index) => (
          <>
            {makeBlocks(count)}
            <LearnBlock
              key={index}
              expandRef={expandRef}
              onExpandContent={onExpandContent}
              icon="table"
              title="Play"
              text="Chess is a game that has been played for centuries, and its enduring popularity is a testament to its depth and complexity."
            />
          </>
        ))}

        {/* <LearnBlock
          expandRef={expandRef}
          onExpandContent={onExpandContent}
          icon="table"
          title="Play"
          text="Chess is a game that has been played for centuries, and its enduring popularity is a testament to its depth and complexity."
        />
        <LearnBlock
          expandRef={expandRef}
          onExpandContent={onExpandContent}
          icon="pawn"
          title="Learn"
          text="Learning to play chess is a rewarding experience that can benefit you in many ways."
        />

        <LearnBlock
          expandRef={expandRef}
          onExpandContent={onExpandContent}
          icon="rank"
          title="Compete"
          text="Competing in chess can be a thrilling and rewarding experience for players of all skill levels."
        />
        <LearnBlock
          expandRef={expandRef}
          onExpandContent={onExpandContent}
          icon="chart"
          title="Improve"
          text="Improving your chess skills is an ongoing journey that can be both challenging and rewarding."
        />

        <LearnBlock
          expandRef={expandRef}
          onExpandContent={onExpandContent}
          icon="rank"
          title="Compete"
          text="Competing in chess can be a thrilling and rewarding experience for players of all skill levels."
        />

        <LearnBlock
          expandRef={expandRef}
          onExpandContent={onExpandContent}
          icon="chart"
          title="Improve"
          text="Improving your chess skills is an ongoing journey that can be both challenging and rewarding."
        /> */}
      </div>
    </section>
  );
}

export default LearnSection;
