import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.scss';

const About = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const targetSection = useRef(null);

  // Scroll tracker for Line 1
  const { scrollYProgress: scrollLine1 } = useScroll({
    target: line1Ref,
    offset: ["start center", "end center"]
  });

  // Scroll tracker for Line 2
  const { scrollYProgress: scrollLine2 } = useScroll({
    target: line2Ref,
    offset: ["start center", "end center"]
  });

  // Color for first line
  const color1 = useTransform(
    scrollLine1,
    [0, 0.5, 1],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.2)"]
  );

  // Color for second line
  const color2 = useTransform(
    scrollLine2,
    [0, 0.5, 1],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.2)"]
  );


  return (
    <section ref={targetSection} className="about-section">
      <img src="/patterns/left-pattern.svg" alt="Left Pattern" className="left-pattern" />
      <h1 className="about-text">
        <motion.span
          ref={line1Ref}
          className="about-1"
          style={{ color: color1 }}
        >
          I am a full-stack developer bridging the gap between robust system architecture and design.
        </motion.span>
        <motion.span
          ref={line2Ref}
          className="about-2"
          style={{ color: color2 }}
        >
          I craft high-performance, AI-driven applications focused on seamless and scalable user experiences.
        </motion.span>
      </h1>
    </section>
  );
};

export default About;
