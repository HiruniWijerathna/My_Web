import React, { useState } from 'react';
import "./Nav.css";
import 'boxicons/css/boxicons.min.css';

// Import images
import logoImg from '../../assets/logo.png';

function Nav() {
  const [navActive, setNavActive] = useState(false);

  const toggleNavbar = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
  

      <header className="header">
        <a href="#home" className="logo">
          <div className="logo-img">
            <img src={logoImg} alt="Hiruni Wijerathna" />
          </div>
        </a>

        <i
        className={`bx ${navActive ? 'bx-x' : 'bx-menu'}`} // toggle icon class
        id="menu-icon"
        onClick={toggleNavbar}
        ></i>

        <nav className={`navbar ${navActive ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#resume">Resume</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      
    </div>
  );
}

export default Nav;
