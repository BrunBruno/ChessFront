import classes from "./HeroSection.module.scss";

function HeroSection(props) {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.hero__content}></div>
    </section>
  );
}

export default HeroSection;
