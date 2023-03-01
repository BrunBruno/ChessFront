import classes from "./HeroSection.module.scss";

function HeroSection(props) {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.hero__content}>
        <div className={classes.hero__content__intro}>
          <h1>PLAY CHESS!!!</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eius soluta laborum quasi qui quia sapiente quas deleniti nisi.
            Dolorum esse eum reprehenderit nam quam blanditiis, deleniti aperiam
            incidunt. Ab!
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
