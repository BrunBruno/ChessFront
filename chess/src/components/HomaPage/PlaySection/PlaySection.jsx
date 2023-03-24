import { useRef, useState } from "react";
import classes from "./PlaySection.module.scss";

function PlaySection(props) {
  const [prevCls, setPrevCls] = useState(classes.active0);
  const divs = ["WoooW", "Jooo", "Aaaa", "Yeeee"];
  const backgroundRef = useRef(null);

  const onRotate = (event, index) => {
    let cls;
    switch (index) {
      case 0:
        cls = classes.active0;
        break;
      case 1:
        cls = classes.active1;
        break;
      case 2:
        cls = classes.active2;
        break;
      case 3:
        cls = classes.active3;
        break;
    }

    const elements = backgroundRef.current.children;
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(prevCls);
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(cls);
    }
    setPrevCls(cls);
  };

  return (
    <section id="play" ref={props.playSectionRef} className={classes.play}>
      <div className={classes.play__content}>
        {divs.map((div, index) => (
          <div
            key={index}
            className={classes.play__content__cube}
            onMouseEnter={(event) => onRotate(event, index)}
          >
            <span>{div}</span>
          </div>
        ))}
      </div>
      <div ref={backgroundRef} className={classes.play__background}>
        {divs.map((div, index) => (
          <div key={index} className={classes.play__background__cube}>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.decorator} />
    </section>
  );
}

export default PlaySection;
