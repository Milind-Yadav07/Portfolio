import { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import './Collaboration.scss';

const Collaboration = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: headingScroll } = useScroll({
    target: headingRef,
    offset: ["start 80%", "end 20%"]
  });

  // Calculate slide distance based on screen width
  const xLeft = useTransform(scrollYProgress, [0, 1], [-800, 800]);
  const xRight = useTransform(scrollYProgress, [0, 1], [800, -800]);

  const backgroundPosition = useTransform(
    headingScroll,
    [0, 1],
    ["0% 0%", "100% 0%"]
  );

  const opacity = useTransform(
    headingScroll,
    [0, 0.2],
    [0, 1]
  );

  const firstLineText = "Data Structure Software Engineering Object Oriented Programming ".repeat(3);
  const thirdLineText = "Algorithms Logic Building Artificial Intelligence Problem Solving ".repeat(3);

  return (
    <section className="collaboration-section" ref={sectionRef}>
      <Motion.div
        className="background-text first-line"
        style={{ x: xLeft }}
        aria-hidden="true"
      >
        {firstLineText}
      </Motion.div>

      <Motion.h2
        className="main-heading"
        ref={headingRef}
        style={{
          backgroundPosition,
          opacity
        }}
        initial={{ z: 50 }}
        whileInView={{ z: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Experience and Achievements✨
      </Motion.h2>

      <Motion.div
        className="background-text third-line"
        style={{ x: xRight }}
        aria-hidden="true"
      >
        {thirdLineText}
      </Motion.div>
    </section>
  );
};

export default Collaboration;
