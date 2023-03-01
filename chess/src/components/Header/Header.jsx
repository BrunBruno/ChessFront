import { useEffect, useRef } from "react";

import classes from "./Header.module.scss";

import HeaderIcons from "./HeaderIcons";

function Header(props) {
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        headerRef.current.classList.remove(classes["header-sticky"]);
      } else {
        headerRef.current.classList.add(classes["header-sticky"]);
      }
    });
  }, []);

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.header__background}></div>
      <div className={classes.header__logo}>
        <img src="images/logo.png" />
      </div>

      <nav className={classes.header__navigation}>
        <a href="#" className={classes.active}>
          <span className={classes.text}>HOME</span>
          <span className={classes.icon}>
            <HeaderIcons icon="home" />
          </span>
        </a>
        <a href="#learn">
          <span className={classes.text}>LEARN</span>
          <span className={classes.icon}>
            <HeaderIcons icon="learn" />
          </span>
        </a>
        <a href="#play">
          <span className={classes.text}>PLAY</span>
          <span className={classes.icon}>
            <HeaderIcons icon="play" />
          </span>
        </a>
        <a href="#faq">
          <span className={classes.text}>FAQ</span>
          <span className={classes.icon}>
            <HeaderIcons icon="faq" />
          </span>
        </a>
        <div className={classes.indicator}></div>
      </nav>

      <div className={classes.header__form}>
        <button>Log In</button>
        <button>Register</button>
      </div>
    </header>
  );
}

export default Header;
