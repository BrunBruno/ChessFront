import classes from "./LearnSection.module.scss";

function LearnBlock(props) {
  return (
    <div
      className={classes.learn__block}
      onClick={(event) => props.onExpandContent(event, props.index)}
    >
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default LearnBlock;
