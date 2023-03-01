import { useEffect, useRef } from "react";

import classes from "./HomePage.module.scss";

import HeroSection from "./HeroSection/HeroSection";
import LearnSection from "./LearnSection/LearnSection";
import PlaySection from "./PlaySection/PlaySection";
import FAQSection from "./FAQSection/FAQSection";

function HomePage() {
  const heroRef = useRef(null);
  const learnRef = useRef(null);
  const playRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elements = document.getElementsByTagName("a");
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(clsHeader.active);
          }
          if (entry.target.id === "obs-hero") {
            elements[0].classList.add(clsHeader.active);
          }
          if (entry.target.id === "obs-learn") {
            elements[1].classList.add(clsHeader.active);
          }
          if (entry.target.id === "obs-play") {
            elements[2].classList.add(clsHeader.active);
          }
          if (entry.target.id === "obs-faq") {
            elements[3].classList.add(clsHeader.active);
          }
        }
      });
    });

    observer.observe(heroRef.current);
    observer.observe(learnRef.current);
    observer.observe(playRef.current);
    observer.observe(faqRef.current);
  }, []);

  return (
    <main>
      <Header />
      <div id="obs-hero" ref={heroRef} className={classes.observe} />
      <HeroSection />
      <div id="obs-learn" ref={learnRef} className={classes.observe} />
      <LearnSection />
      <div id="obs-play" ref={playRef} className={classes.observe} />
      <PlaySection />
      <div id="obs-faq" ref={faqRef} className={classes.observe} />
      <FAQSection />
      <footer className={classes.footer}>Footer</footer>
    </main>
  );
}

export default HomePage;
