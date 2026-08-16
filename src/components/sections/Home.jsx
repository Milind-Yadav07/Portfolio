import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub, faSass, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
import './Home.scss';

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'A pragmatic Software Developer',
                'Build AI-integrated applications',
                'Develop high-performance solutions',
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -150 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <Motion.div
            id="home"
            className="home-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="left-text-container">
                <Motion.p className="intro-text" variants={itemVariants}>Hi👋🏻, my name is</Motion.p>
                <Motion.h1 className="name-heading" variants={itemVariants}>
                    <span className="name-highlight">Milind</span> Yadav
                </Motion.h1>
                <Motion.p className="subtitle-text" variants={itemVariants}>
                    <span ref={el} />
                </Motion.p>
                <Motion.div className="social-icons" variants={itemVariants}>
                    <a href="mailto:milindcs07@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.instagram.com/milind_yadav07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com/in/milind-yadav-a89157326" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Milind-Yadav07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Motion.div>
            </div>
            <Motion.div
                className="stage-cube-cont"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <Motion.div
                    className="cubespinner"
                    animate={{
                        rotateX: [0, 0, 90, 0, 90, 90, 0],
                        rotateY: [0, -90, -90, -180, -270, 0, 0],
                        rotateZ: [0, 90, 0, 90, 0, 0, 0]
                    }}
                    transition={{
                        duration: 12,
                        ease: "easeInOut",
                        times: [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
                        repeat: Infinity
                    }}
                >
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
                </Motion.div>
            </Motion.div>
        </Motion.div>
    );
};

export default Home;
