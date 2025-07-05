import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.scss';
import projectBg from '../projectSVG/project-bg.svg';
import codeeditorBg from '../projectSVG/code-editor.png';
import languagetranslatorBg from '../projectSVG/Language-Translator.png';
import expensetrackerBg from '../projectSVG/expense tracker.png';
import zollaCreationsBg from '../projectSVG/zolla-creations.png';
import duoGraphicsBg from '../projectSVG/duo.png';
import gameBg from '../projectSVG/game.png';


gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'Code Editor',
    description: 'Description for project 1',
    image: codeeditorBg,
  },
  {
    title: 'Zolla Creations',
    description: 'Description for project 4',
    image: zollaCreationsBg,
  },
  {
    title: 'DockX',
    description: 'Description for project 3',
    image: languagetranslatorBg,
  },
  {
    title: 'Expense Tracker',
    description: 'Description for project 2',
    image: expensetrackerBg,
  },
  {
    title: 'DUO Graphics',
    description: 'Description for project 5',
    image: duoGraphicsBg,
  },
  {
    title: '2048 Game',
    description: 'Description for project 6',
    image: gameBg,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Remove animation from subtitle (projects-subheading)
      // No animation applied to subtitleRef.current

      // Horizontal scroll animation with pinning
      const totalScrollWidth = projectsContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const extraPadding = 96; // Increased padding to 96px (3rem * 32px) to account for margin on last project tile
      gsap.to(projectsContainerRef.current, {
        x: () => `-${totalScrollWidth - viewportWidth + extraPadding}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScrollWidth + extraPadding}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // New staggered opacity animation similar to Contact.jsx
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects-wrapper',
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

      // Remove horizontal movement animation on titleRef (projects-heading)
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-wrapper">
        <div className="projects-title-area">
          <p className="projects-subheading staggered-reveal" ref={subtitleRef}>PROJECTS</p>
          <h2 className="projects-heading staggered-reveal" ref={titleRef}>My Projects</h2>
          <p className="projects-description staggered-reveal">
            Some projects that I've built with my frontend development skills.
          </p>
        </div>
        <div className="projects-container staggered-reveal" ref={projectsContainerRef}>
          {projectsData.map((project, index) => (
            <div className="project-tile" key={index}>
              {project.title === 'Zolla Creations' ? (
                <a href="https://zolla-clone.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : project.title === 'DockX' ? (
                <a href="https://doc-x.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : project.title === 'Code Editor' ? (
                <a href="https://coder-editor-my.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : project.title === '2048 Game' ? (
                <a href="https://2048gamer.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : project.title === 'Expense Tracker' ? (
                <a href="https://expense-trackey.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : project.title === 'DUO Graphics' ? (
                <a href="https://duo-x.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
