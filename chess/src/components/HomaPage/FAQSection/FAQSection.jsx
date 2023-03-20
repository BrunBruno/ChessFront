import { transform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import classes from "./FAQSection.module.scss";

function FAQSection() {
  const faqs = [0, 0, 0, 0, 0, 0];
  const faqBlockRef = useRef([]);
  const faqCameraRef = useRef([]);
  const faqContentRef = useRef(null);
  const [prevBlock, setPrevBlock] = useState(null);

  const [cameraContent, setCameraContent] = useState({
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
        const content = faqContentRef.current.getBoundingClientRect();
        const camera = faqCameraRef.current[index].getBoundingClientRect();
        const camx = camera.left + camera.width / 2;
        const camy = camera.top + camera.height / 2;
        const conx = content.left;
        const cony = content.top;
        const d = Math.sqrt(
          Math.pow(conx - camx, 2) + Math.pow(cony - camy, 2)
        );
        const a = (cony - camy) / (conx - camx);
        const alfa = (Math.atan(a) * 180) / Math.PI;

        setCameraContent(() => {
          const newContent = [];
          newContent[index] = {
            transform: `rotate(${alfa}deg)`,
            width: `${2 * d}px`,
            left: `-${d - camera.width / 2}px`,
          };
          return newContent;
        });

        setTimeout(() => {
          faqContentRef.current.classList.add(classes["expanded-content"]);
        }, 3000);
      }, 1000);
    } else {
      setPrevBlock(null);
    }
  };

  return (
    <section id="faq" className={classes.faq}>
      <div ref={faqContentRef} className={classes.faq__content}></div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          ref={(event) => (faqBlockRef.current[index] = event)}
          className={classes.faq__block}
          onClick={(event) => onExpandContent(event, index)}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            veniam ipsam harum culpa illo quaerat eveniet nesciunt perspiciatis!
            Omnis atque minus a obcaecati laborum consequuntur consequatur
            cumque porro nulla tempora.
          </p>
          <div
            ref={(event) => (faqCameraRef.current[index] = event)}
            className={classes.camera}
          >
            <div className={classes.string} style={cameraContent[index]}>
              <p />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQSection;
