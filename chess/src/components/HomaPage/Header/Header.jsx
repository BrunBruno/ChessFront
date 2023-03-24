import { useEffect, useRef } from "react";

import classes from "./Header.module.scss";

import HeaderIcons from "./HeaderIcons";

function Header(props) {
  const indicators = ["home", "learn", "play", "faq"];
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const distance =
        window.pageYOffset - props.playSectionRef.current.offsetTop;
      if (
        distance > 0 &&
        distance < props.playSectionRef.current.offsetHeight
      ) {
        headerRef.current.classList.add(classes["trans-header"]);
      } else {
        headerRef.current.classList.remove(classes["trans-header"]);
      }

      if (window.pageYOffset === 0) {
        headerRef.current.classList.remove(classes["header-sticky"]);
      } else {
        headerRef.current.classList.add(classes["header-sticky"]);
      }
    });
  }, []);

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.header__background}>
        <div className={classes.header__background__bottom} />
        <div className={classes.header__background__middle} />
        <div className={classes.header__background__bottom} />
      </div>
      <div
        className={classes.header__logo}
        onClick={() => {
          location.reload();
        }}
      >
        <img src="images/logo.png" />
      </div>

      <nav className={classes.header__navigation}>
        {indicators.map((element, index) =>
          !index ? (
            <a href={"#" + element} key={index} className={classes.active}>
              <span className={classes.text}>{element.toUpperCase()}</span>
              <span className={classes.icon}>
                <HeaderIcons icon={element} />
              </span>
            </a>
          ) : (
            <a href={"#" + element} key={index}>
              <span className={classes.text}>{element.toUpperCase()}</span>
              <span className={classes.icon}>
                <HeaderIcons icon={element} />
              </span>
            </a>
          )
        )}
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
