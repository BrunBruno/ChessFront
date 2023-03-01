import { useEffect, useRef } from "react";

import classes from "./Header.module.scss";

import HeaderIcons from "./HeaderIcons";

function Header() {
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

  const activateIcon = (event) => {
    const elements = event.currentTarget.parentNode.children;
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(classes.active);
    }

    event.currentTarget.classList.add(classes.active);
  };

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.header__background}></div>
      <div className={classes.header__logo}>
        <img src="images/logo.png" />
      </div>

      <nav className={classes.header__navigation}>
        <a href="#" onClick={activateIcon} className={classes.active}>
          <span className={classes.text}>Home</span>
          <span className={classes.icon}>
            <HeaderIcons icon="home" />
          </span>
        </a>
        <a href="#learn" onClick={activateIcon}>
          <span className={classes.text}>Learn</span>
          <span className={classes.icon}>
            <HeaderIcons icon="learn" />
          </span>
        </a>
        <a href="#" onClick={activateIcon}>
          <span className={classes.text}>idk</span>
          <span className={classes.icon}>
            <HeaderIcons icon="i" />
          </span>
        </a>
        <a href="#" onClick={activateIcon}>
          <span className={classes.text}>idk</span>
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
