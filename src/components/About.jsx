import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leftPattern from '../projectSVG/left-pattern.svg';
import './About.scss';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-wrapper',
          start: '100px bottom',
          end: 'center center',
          scrub: 0,
        },
      });

      tl.fromTo(
        '.staggered-reveal',
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 7 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <img src={leftPattern} alt="Left Pattern" className="left-pattern" />
      <div className="about-wrapper">
        <p className="about-text staggered-reveal">
          <span className="staggered-reveal">
            I'm a frontend developer who's focused on building scalable and performant apps.
          </span>{' '}
          <span className="staggered-reveal">
            I take responsibility to craft a good user experience using modern frontend architecture.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;

