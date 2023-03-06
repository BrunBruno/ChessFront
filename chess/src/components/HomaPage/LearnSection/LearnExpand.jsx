import classes from "./LearnSection.module.scss";

function LearnExpand(props) {
  return (
    <div
      ref={props.expandRef}
      className={classes.expand}
      onClick={props.expanClose}
    >
      <h2>TITLE HERE</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
        laborum totam maiores corporis facere illum vitae? Assumenda optio hic
        nulla quia. Beatae molestiae et odit. Nemo cum aut soluta!
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
        laborum totam maiores corporis facere illum vitae? Assumenda optio hic
        nulla quia. Beatae molestiae et odit. Nemo cum aut soluta!
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
        laborum totam maiores corporis facere illum vitae? Assumenda optio hic
        nulla quia. Beatae molestiae et odit. Nemo cum aut soluta!
      </span>
    </div>
  );
}

export default LearnExpand;
