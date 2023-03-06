import LearnIcons from "./LearnIcons";
import classes from "./LearnSection.module.scss";

function LearnSection(props) {
  const onChangeImage = (event) => {
    // const elements = event.currentTarget.parentNode.children;
    // for (let i = 0; i < elements.length; i++) {
    //   elements[i].classList.remove(classes.active);
    // }

    event.currentTarget.classList.add(classes.active);
  };
  const delIcon = (event) => {
    event.currentTarget.classList.remove(classes.active);
    // const elements = event.currentTarget.parentNode.children;
    // for (let i = 0; i < elements.length; i++) {
    //   elements[i].classList.remove(classes.active);
    // }
  };

  return (
    <section id="learn" className={classes.learn}>
      <div
        className={classes.learn__block}
        onMouseEnter={onChangeImage}
        onMouseLeave={delIcon}
      >
        <LearnIcons icon="pawn" />
        <div>
          <h2>Some Title</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ut voluptate sunt nulla. Velit, consectetur maiores! Sit beatae,
            modi iure possimus perspiciatis fugit doloribus qui rem accusamus
            sequi cupiditate nam?
          </span>
        </div>
      </div>
      <div
        className={classes.learn__block}
        onMouseEnter={onChangeImage}
        onMouseLeave={delIcon}
      >
        <LearnIcons icon="table" />
        <div>
          <h2>Some Title</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ut voluptate sunt nulla. Velit, consectetur maiores! Sit beatae,
            modi iure possimus perspiciatis fugit doloribus qui rem accusamus
            sequi cupiditate nam?
          </span>
        </div>
      </div>
      <div></div>
      <div></div>
      <div
        className={classes.learn__block}
        onMouseEnter={onChangeImage}
        onMouseLeave={delIcon}
      >
        <LearnIcons icon="rank" />
        <div>
          <h2>Some Title</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ut voluptate sunt nulla. Velit, consectetur maiores! Sit beatae,
            modi iure possimus perspiciatis fugit doloribus qui rem accusamus
            sequi cupiditate nam?
          </span>
        </div>
      </div>
      <div
        className={classes.learn__block}
        onMouseEnter={onChangeImage}
        onMouseLeave={delIcon}
      >
        <LearnIcons icon="chart" />
        <div>
          <h2>Some Title</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ut voluptate sunt nulla. Velit, consectetur maiores! Sit beatae,
            modi iure possimus perspiciatis fugit doloribus qui rem accusamus
            sequi cupiditate nam?
          </span>
        </div>
      </div>
    </section>
  );
}

export default LearnSection;
