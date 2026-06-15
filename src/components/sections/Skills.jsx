import { motion as Motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Synchronized with About section
        delayChildren: 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1] // Quintic easeOut for luxury smoothness
      },
    },
  };

  const iconRowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slightly slower icon stagger
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <img src="/patterns/right-pattern.svg" alt="Right Pattern" className="right-pattern-svg" />
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible (between bottom and center)
        variants={containerVariants}
      >
        <Motion.p className="skills-label" variants={itemVariants}>SKILLS</Motion.p>
        <Motion.h2 className="skills-title" variants={itemVariants}>My Skills</Motion.h2>
        <Motion.p className="skills-description" variants={itemVariants}>
          I like to take responsibility to craft AI-driven applications <br />
          using modern frontend and backend architecture.
        </Motion.p>
        <Motion.div className="skills-icons-section" variants={iconRowVariants}>
          <Motion.h3 className="skills-subtitle" variants={itemVariants}>LANGUAGES</Motion.h3>
          <Motion.div className="skills-icons-row" variants={itemVariants}>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/html.svg" alt="HTML" title="HTML" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/css.svg" alt="CSS" title="CSS" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/javascript.svg" alt="JavaScript" title="JavaScript" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/typescript.svg" alt="TypeScript" title="TypeScript" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/java.svg" alt="Java" title="Java" className="upscale-icon" /></Motion.div>
          </Motion.div>
          <br />
          <Motion.h3 className="skills-subtitle" variants={itemVariants}>FRONTEND</Motion.h3>
          <Motion.div className="skills-icons-row" variants={itemVariants}>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/react.svg" alt="React.js" title="React.js" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/next.js.svg" alt="Next.js" title="Next.js" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/bootstrap.svg" alt="Bootstrap" title="Bootstrap" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/tailwindcss.svg" alt="Tailwind CSS" title="Tailwind CSS" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/framer-motion.svg" alt="Framer Motion" title="Framer Motion" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/sass.svg" alt="SASS" title="SASS" /></Motion.div>
          </Motion.div>
          <br />
          <Motion.h3 className="skills-subtitle" variants={itemVariants}>BACKEND</Motion.h3>
          <Motion.div className="skills-icons-row" variants={itemVariants}>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/spring.svg" alt="Spring" title="Spring" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/Langchain.svg" alt="Langchain" title="Langchain" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/node.js.svg" alt="Node.js" title="Node.js" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/mysql.svg" alt="MySQL" title="MySQL" className="upscale-icon" /></Motion.div>
            <Motion.div whileHover={{ scale: 1.2 }}><img src="/tech/mongodb.svg" alt="MongoDB" title="MongoDB" /></Motion.div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Skills;

