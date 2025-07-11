import React from 'react';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  return (
    <>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="menu-overlay">
        <nav className="menu">
          <ul>
            <li><a href="#" onClick={() => document.getElementById('menu-toggle').checked = false}>Home</a></li>
            <li><a href="#skills" onClick={() => document.getElementById('menu-toggle').checked = false}>Skills</a></li>
            <li><a href="#projects" onClick={() => document.getElementById('menu-toggle').checked = false}>Projects</a></li>
            <li><a href="#contact" onClick={() => document.getElementById('menu-toggle').checked = false}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
