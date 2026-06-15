import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="menu-icon" onClick={toggleMenu} style={{ zIndex: 1001 }}>
        <Motion.span
          animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <Motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <Motion.span
          animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            className="menu-overlay"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'auto' }}
          >
            <nav className="menu">
              <ul>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#timelineSection" onClick={closeMenu}>Achievements</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
              </ul>
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
