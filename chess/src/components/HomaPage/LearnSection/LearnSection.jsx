import { useState } from "react";

import classes from "./LearnSection.module.scss";

import LearnBlock from "./LearnBlock";

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

  const [expandContent, setExpandContent] = useState({
    title: "",
    text1: "",
    text2: "",
    text3: "",
  });

  // const onExpandContent = (event) => {
  //   setExpandContent({
  //     title: exp[event][0],
  //     text1: exp[event][1],
  //     text2: exp[event][2],
  //     text3: exp[event][3],
  //   });
  // };

  const blocks = [0, 0, 0, 0, 0];

  const [prevBlock, setPrevBlock] = useState(null);
  const onExpandContent = (event, index) => {
    const openLeft = event.currentTarget.classList.contains(
      classes["active-left"]
    );
    const openRight = event.currentTarget.classList.contains(
      classes["active-right"]
    );

    if (prevBlock) {
      prevBlock.classList.remove(classes["active-left"]);
      prevBlock.classList.remove(classes["active-right"]);
      prevBlock.classList.add(classes["prev-active"]);
      setTimeout(() => {
        prevBlock.classList.remove(classes["prev-active"]);
      }, 1000);
    }

    if (!openRight && index < 2) {
      event.currentTarget.classList.add(classes["active-right"]);
      setPrevBlock(event.currentTarget);
    } else if (!openLeft && index > 1) {
      event.currentTarget.classList.add(classes["active-left"]);
      setPrevBlock(event.currentTarget);
    } else {
      setPrevBlock(null);
    }
  };

  return (
    <section id="learn" className={classes.learnSec}>
      <div className={classes.learn}>
        {blocks.map((count, index) => (
          <LearnBlock
            key={index}
            index={index}
            onExpandContent={onExpandContent}
          />
        ))}
      </div>
    </section>
  );
}

export default LearnSection;
