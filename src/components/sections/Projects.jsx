import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import './Projects.scss';
import { projectsData } from '@/data/projectsData';

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const brightness = useTransform(mouseY, [-0.5, 0.5], [1.2, 0.8]);

  return (
    <Motion.div
      className="project-tile"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        {/* Background Layer */}
        <div
          className="tile-bg-gradient"
          style={{ background: project.gradient }}
        />
        <div
          className="tile-bg-svg"
          style={{ backgroundImage: "url('/projects/project-bg.svg')" }}
        />

        {/* Image Layer */}
        <div className="project-image-container">
          <Motion.img
            src={project.image}
            alt={project.title}
            className="project-image"
            style={{ filter: `brightness(${brightness})` }}
          />
        </div>

        {/* Hover Overlay */}
        <div className="project-hover-overlay">
          <div className="overlay-content">
            <h3 className="overlay-title">{project.title}</h3>
          </div>
        </div>


      </a>
    </Motion.div>
  );
};

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section id="projects" ref={targetRef} className="projects-section-container">
      <div className="projects-sticky-wrapper">
        <div className="projects-header-area">
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="projects-subheading"
          >
            PROJECTS
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="projects-heading"
          >
            My Works
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="projects-text"
          >
            I have contributed in over 20+ projects ranging from Full-stack<br />
            Development to open source
          </Motion.p>
        </div>

        <div className="horizontal-scroll-container">
          <Motion.div style={{ x }} className="projects-track">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
