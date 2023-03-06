import { useRef } from "react";

import classes from "./LearnSection.module.scss";

import LearnBlock from "./LearnBlock";
import LearnExpand from "./LearnExpand";

function LearnSection(props) {
  const expandRef = useRef(null);
  const blockRef = useRef(null);
  const expanClose = () => {
    expandRef.current.classList.remove(classes["expand-active"]);
    const childs = blockRef.current.children;
    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.remove(classes.hidden);
    }
  };
  return (
    <section id="learn" className={classes.learnSec}>
      <LearnExpand expandRef={expandRef} expanClose={expanClose} />
      <div className={classes.learn} ref={blockRef}>
        <LearnBlock
          expandRef={expandRef}
          icon="table"
          title="Play"
          text="Chess is a game that has been played for centuries, and its enduring popularity is a testament to its depth and complexity. At its core, chess is a game of strategy, where players must use their wits and experience to outmaneuver their opponents and claim victory on the board."
        />
        <LearnBlock
          expandRef={expandRef}
          icon="pawn"
          title="Learn"
          text="Learning to play chess is a rewarding experience that can benefit you in many ways. Not only is chess a fun and engaging game to play, but it also helps develop important skills such as critical thinking, problem-solving, and decision-making."
        />

        <div />
        <div />

        <LearnBlock
          expandRef={expandRef}
          icon="rank"
          title="Compete"
          text="Competing in chess can be a thrilling and rewarding experience for players of all skill levels. Whether you're a casual player looking to test your skills against others, or a seasoned competitor aiming for the top of the rankings, there are many opportunities to compete in chess."
        />
        <LearnBlock
          expandRef={expandRef}
          icon="chart"
          title="Improve"
          text="Improving your chess skills is an ongoing journey that can be both challenging and rewarding. Whether you're a beginner or an experienced player, there are many ways to improve your game and take your skills to the next level."
        />
      </div>
    </section>
  );
}

export default LearnSection;
