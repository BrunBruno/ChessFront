import classes from "./LearnSection.module.scss";

import LearnIcons from "./LearnIcons";

function LearnBlock(props) {
  const startIcon = (event) => {
    event.currentTarget.classList.add(classes.active);
  };
  const endIcon = (event) => {
    event.currentTarget.classList.remove(classes.active);
  };

  const expandContent = (event) => {
    const elements = event.currentTarget.parentNode.children;
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(classes.hidden);
    }

    props.expandRef.current.classList.add(classes["expand-active"]);
    props.onExpandContent(props.title);
  };

  return (
    <div
      className={classes.learn__block}
      onMouseEnter={startIcon}
      onMouseLeave={endIcon}
      onClick={expandContent}
      name="dupa"
    >
      <LearnIcons icon={props.icon} />
      <div>
        <h2>{props.title}</h2>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

export default LearnBlock;
