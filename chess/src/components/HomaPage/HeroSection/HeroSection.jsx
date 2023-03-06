import classes from "./HeroSection.module.scss";

function HeroSection(props) {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.hero__content}>
        <div className={classes.hero__content__intro}>
          <h1>BETTER CHESS</h1>
          <span>
            Welcome to the fascinating world of chess! Chess is one of the most
            popular and enduring games in the world, with millions of people
            playing and enjoying it every day. It is a game of strategy, logic,
            and skill, where players must use their wits and experience to
            outmaneuver their opponents and claim victory on the board.
          </span>
          <div>
            <button>START NOW</button>
            <a href="#learn">
              <button>LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
