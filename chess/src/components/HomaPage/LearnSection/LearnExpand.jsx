import classes from "./LearnSection.module.scss";

function LearnExpand(props) {
  return (
    <div
      ref={props.expandRef}
      className={classes.expand}
      onClick={props.onExpanClose}
    >
      <h2>{props.expandContent.title}</h2>
      <span>{props.expandContent.text1}</span>
      <span>{props.expandContent.text2}</span>
      <span>{props.expandContent.text3}</span>
    </div>
  );
}

export default LearnExpand;
