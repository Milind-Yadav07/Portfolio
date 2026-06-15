import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import './QuoteSection.scss';

const QuoteSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "end 20%"]
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    ["0% 0%", "100% 0%"] // Animates from 0% (fully white) to 100% (fully blue)
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 1]
  );

  return (
    <section
      className="quote-section"
      ref={sectionRef}
      style={{ position: 'relative' }}
    >
      <img src="/patterns/right-pattern.svg" alt="Right Pattern" className="right-pattern" />
      <Motion.p
        className="quote-text"
        style={{
          opacity
        }}
      >
        "I have a{" "}
        <Motion.span
          className="highlight-blue"
          style={{ backgroundPosition }}
        >
          strong obsession
        </Motion.span>{" "}
        for attention to detail"
      </Motion.p>
    </section>
  );
};

export default QuoteSection;
