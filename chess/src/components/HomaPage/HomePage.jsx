import classes from "./HomePage.module.scss";

import Header from "../Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Learnsection from "./LearnSection/LearnSection";
import { useRef } from "react";

function HomePage() {
  const heroRef = useRef(null);
  const learnRef = useRef(null);
  return (
    <main>
      <Header />
      <HeroSection ref={heroRef} />
      <Learnsection ref={learnRef} />
      <footer className={classes.footer}>Footer</footer>
    </main>
  );
}

export default HomePage;
