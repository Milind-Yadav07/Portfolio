import React, { useEffect, useRef } from 'react';
import Contact from './components/Contact';
import About2 from './components/About2';
import './index.scss';
import HamburgerMenu from './components/HamburgerMenu.jsx';
import About from './components/About.jsx';
import Collaboration from './components/Collaboration.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub, faSass, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Typed from 'typed.js';
import Cursor from './components/Cursor.jsx';

const App = () => {
  const el = useRef(null);
  const resumeButtonRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'A pragmatic Frontend Developer',
        'I create modern web applications',
        'Build engaging user experiences'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <HamburgerMenu />
      <Cursor />
      <div className="app-container">
        <div className="left-text-container">
          <p className="intro-text staggered-reveal">Hi, my name is</p>
          <h1 className="name-heading staggered-reveal">
            <span className="name-highlight">Milind</span> Yadav
          </h1>
          <p className="subtitle-text staggered-reveal">
            <span ref={el} />
          </p>
          <div className="social-icons staggered-reveal">
            <a href="mailto:milindcs07@gmail.com.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://instagram.com/milind_yadav07" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/in/milind-yadav-a89157326" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Milind-Yadav07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <a href="/frontend-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button staggered-reveal" aria-label="Resume" ref={resumeButtonRef}>
            Resume
          </a>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#CC6699" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Collaboration />
      <Projects />
      <About2 />
      <Contact />
    </>
  );
};

export default App;
