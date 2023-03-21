import { transform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import classes from "./FAQSection.module.scss";

function FAQSection() {
  const faqs = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
    "Question6",
  ];
  const faqBlockRef = useRef([]);
  const faqCameraRef = useRef([]);
  const faqContentRef = useRef(null);
  const faqHoloRef = useRef(null);
  const [prevBlock, setPrevBlock] = useState(null);
  const [leftDotStyle, setLeftDotStyle] = useState({
    transform: "",
    width: "0",
    left: "0",
  });
  const [rightDotStyle, setRightDotStyle] = useState({
    transform: "",
    width: "0",
    left: "0",
  });
  let interEle = 0;

  useEffect(() => {
    if (faqBlockRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && interEle < 12) {
            const randClass =
              classes[`bloc-style-${Math.floor(Math.random() * 4) + 1}`];
            entry.target.classList.add(randClass);
            interEle++;
          }
        });
      });
      faqBlockRef.current.forEach((element) => observer.observe(element));
    }
  }, [faqBlockRef]);

  const onExpandContent = (event, index) => {
    faqContentRef.current.classList.remove(classes["expanded-content"]);
    if (prevBlock) {
      prevBlock.classList.remove(classes.expand);
    }

    if (prevBlock != event.currentTarget) {
      event.currentTarget.classList.add(classes.expand);
      setPrevBlock(event.currentTarget);
      setTimeout(() => {
        const content = faqHoloRef.current.getBoundingClientRect();
        const camera = faqCameraRef.current[index].getBoundingClientRect();

        const camx = camera.left + camera.width / 2;
        const camy = camera.top + camera.height / 2;

        const conx1 = content.left;
        const conx2 = content.left + content.width;
        const cony = content.top;

        const d = (x1, x2, y1, y2) => {
          return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        };
        const d1 = d(conx1, camx, cony, camy);
        const d2 = d(conx2, camx, cony, camy);

        const a = (x1, x2, y1, y2) => {
          return (Math.atan((y2 - y1) / (x2 - x1)) * 180) / Math.PI;
        };

        const a1 = a(conx1, camx, cony, camy);
        const a2 = a(conx2, camx, cony, camy);

        setLeftDotStyle(() => {
          const newContent = [];
          newContent[index] = {
            transform: `rotate(${a1}deg)`,
            width: `${2 * d1}px`,
            left: `-${d1 - camera.width / 2}px`,
          };
          return newContent;
        });
        setRightDotStyle(() => {
          const newContent = [];
          newContent[index] = {
            transform: `rotate(${a2}deg)`,
            width: `${2 * d2}px`,
            left: `-${d2 - camera.width / 2}px`,
          };
          return newContent;
        });

        setTimeout(() => {
          faqContentRef.current.classList.add(classes["expanded-content"]);
        }, 500);
      }, 500);
    } else {
      setPrevBlock(null);
    }
  };

  const onExpandClose = () => {
    faqContentRef.current.classList.remove(classes["expanded-content"]);
    prevBlock.classList.remove(classes.expand);
    setPrevBlock(null);
  };

  return (
    <section id="faq" className={classes.faq}>
      <div ref={faqHoloRef} className={classes.faq__holo}>
        <div
          ref={faqContentRef}
          className={classes.faq__holo__content}
          onClick={onExpandClose}
        ></div>
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          ref={(event) => (faqBlockRef.current[index] = event)}
          className={classes.faq__block}
          onClick={(event) => onExpandContent(event, index)}
        >
          <div className={classes.question}>{faq}</div>
          <div
            ref={(event) => (faqCameraRef.current[index] = event)}
            className={classes.camera}
          >
            <div className={classes.string} style={leftDotStyle[index]}>
              <p className={classes["p-left"]} />
            </div>
            <div className={classes.string} style={rightDotStyle[index]}>
              <p className={classes["p-right"]} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQSection;
