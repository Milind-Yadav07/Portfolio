import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About2.scss';
import rightPattern from '../projectSVG/right-pattern.svg';

const About2 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isSmall: "(max-width: 768px)",
        isLarge: "(min-width: 769px)",
      },
      (context) => {
        // Fade in quote on scroll
        gsap.fromTo(
          quoteRef.current,
          { autoAlpha: 0, z: 50 },
          {
            autoAlpha: 1,
            z: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate quote text color gradient from left to right on scroll
        gsap.to(quoteRef.current, {
          backgroundPosition: "100% 0%",
          ease: "none",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.revert();
    };
  }, []);

  return (
    <section
      className="about2-section"
      ref={sectionRef}
      style={{ paddingTop: clientHeight, paddingBottom: clientHeight, position: 'relative' }}
    >
      <img src={rightPattern} alt="Right Pattern" className="right-pattern" />
      <p className="about2-quote" ref={quoteRef}>
        "I have a strong obession for attention to detail."
      </p>
    </section>
  );
};

export default About2;
