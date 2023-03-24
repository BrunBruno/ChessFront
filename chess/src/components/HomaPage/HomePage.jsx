import { useEffect, useRef } from "react";

import classes from "./HomePage.module.scss";
import clsHeader from "./Header/Header.module.scss";

import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import LearnSection from "./LearnSection/LearnSection";
import PlaySection from "./PlaySection/PlaySection";
import FAQSection from "./FAQSection/FAQSection";

function HomePage() {
  const navRef = useRef([]);
  const playSectionRef = useRef(null);

  useEffect(() => {
    if (navRef) {
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

      navRef.current.forEach((element) => observer.observe(element));
    }
  }, [navRef]);

  return (
    <main>
      <Header playSectionRef={playSectionRef} />
      <div
        id="obs-hero"
        ref={(event) => (navRef.current[0] = event)}
        className={classes.observe}
      />
      <HeroSection />
      <div
        id="obs-learn"
        ref={(event) => (navRef.current[1] = event)}
        className={classes.observe}
      />
      <LearnSection />
      <div
        id="obs-play"
        ref={(event) => (navRef.current[2] = event)}
        className={classes.observe}
      />
      <PlaySection playSectionRef={playSectionRef} />
      <div
        id="obs-faq"
        ref={(event) => (navRef.current[3] = event)}
        className={classes.observe}
      />
      <FAQSection />
      <footer className={classes.footer}>Footer</footer>
    </main>
  );
}

export default HomePage;
