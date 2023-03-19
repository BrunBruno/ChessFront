import classes from "./LearnSection.module.scss";

function LearnBlock(props) {
  return (
    <div
      className={classes.learn__block}
      onClick={(event) => props.onExpandContent(event, props.index)}
    >
      <div className={classes.outside}>
        <div className={classes.outside__content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          est blanditiis dolores ea omnis corrupti, repellendus libero commodi
          placeat provident suscipit nihil, fuga nisi, magni asperiores
          excepturi? Quo, alias excepturi?
        </div>
      </div>
      <div className={classes.inside}>
        <div className={classes.inside__content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          error! Labore, cupiditate doloremque sint saepe impedit ut blanditiis
          eaque velit fuga animi, iusto maxime fugit architecto error odit!
          Facilis, perferendis.
        </div>
      </div>
    </div>
  );
}

export default LearnBlock;
