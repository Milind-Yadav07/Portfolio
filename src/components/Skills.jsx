import React, { useEffect, useRef } from 'react';
import './Skills.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import htmlIcon from '../assets/html.svg';
import bootstrapIcon from '../assets/bootstrap.svg';
import framermotionIcon from '../assets/framermotion.svg';
import gsapIcon from '../assets/gsap.svg';
import photoshopIcon from '../assets/photoshop.svg';
import cssIcon from '../assets/css.svg';
import jsIcon from '../assets/javascript.svg';
import tsIcon from '../assets/typescript.svg';
import sassIcon from '../assets/sass.svg';
import nodeIcon from '../assets/nodejs.svg';
import viteIcon from '../assets/vite.svg';
import firebaseIcon from '../assets/firebase.svg';
import figmaIcon from '../assets/figma.svg';
import reactIcon from '../assets/react.svg';
import reduxIcon from '../assets/redux.svg';
import nextjsIcon from '../assets/nextjs.svg';
import tailwindIcon from '../assets/tailwindcss.svg';
import rightPattern from '../projectSVG/right-pattern.svg';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '150px bottom',
          end: 'center center',
          scrub: 0,
        },
      });

      tl.fromTo(
        '.staggered-reveal',
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <img src={rightPattern} alt="Right Pattern" className="right-pattern-svg" />
      <p className="skills-label staggered-reveal">SKILLS</p>
      <h2 className="skills-title staggered-reveal">My Skills</h2>
      <p className="skills-description staggered-reveal">
        I like to take responsibility to craft aesthetic user experience <br />
        using modern frontend architecture.
      </p>
      <div className="skills-icons-section">
        <h3 className="skills-subtitle staggered-reveal">LANGUAGES AND TOOLS</h3>
        <div className="skills-icons-row staggered-reveal">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={tsIcon} alt="TypeScript" />
          <img src={figmaIcon} alt="Figma" />
          <img src={photoshopIcon} alt="photoshop" />
        </div>
        <br/>
        <h3 className="skills-subtitle staggered-reveal">LIBRARIES AND FRAMEWORKS</h3>
        <div className="skills-icons-row staggered-reveal">
          <img src={reactIcon} alt="React" />
          <img src={reduxIcon} alt="Redux" />
          <img src={nextjsIcon} alt="Next.js" />
          <img src={tailwindIcon} alt="Tailwind CSS" />
          <img src={sassIcon} alt="Sass" />
          <img src={nodeIcon} alt="Node.js" />
          <img src={viteIcon} alt="Vite" />
          <img src={firebaseIcon} alt="Firebase" />
          <img src={bootstrapIcon} alt="Firebase" />
          <img src={gsapIcon} alt="Firebase" />
          <img src={framermotionIcon} alt="Firebase" />

        </div>
      </div>
    </section>
  );
};

export default Skills;

