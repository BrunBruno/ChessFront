import { useState } from "react";
import classes from "./PlaySection.module.scss";

function PlaySection() {
  const [prevCls, setPrevCls] = useState(classes.active0);
  const divs = ["Div 1", "Div 2", "Div 3", "Div 4"];
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

    const elements = event.currentTarget.parentNode.children;
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(prevCls);
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(cls);
    }
    setPrevCls(cls);
  };
  return (
    <section id="play" className={classes.play}>
      {divs.map((div, index) => (
        <div
          key={index}
          className={classes.play__cube}
          onMouseEnter={(event) => onRotate(event, index)}
        >
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PlaySection;
