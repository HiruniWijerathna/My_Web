import React, { useState } from 'react';
import "./Nav.css";
import 'boxicons/css/boxicons.min.css';
import logoImg from '../../assets/logo.png';

function Nav() {
  const [navActive, setNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleNavbar = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNavActive(false); // 👈 close menu on mobile
  };

  return (
    <header className="header">
      <a href="#home" className="logo" onClick={() => handleLinkClick('home')}>
        <div className="logo-img">
          <img src={logoImg} alt="Hiruni Wijerathna" />
        </div>
      </a>

      <i
        className={`bx ${navActive ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={toggleNavbar}
      ></i>

      <nav className={`navbar ${navActive ? 'active' : ''}`}>
        <a
          href="#home"
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>

        <a
          href="#services"
          className={activeLink === 'services' ? 'active' : ''}
          onClick={() => handleLinkClick('services')}
        >
          Services
        </a>

        <a
          href="#resume"
          className={activeLink === 'resume' ? 'active' : ''}
          onClick={() => handleLinkClick('resume')}
        >
          Resume
        </a>

        <a
          href="#portfolio"
          className={activeLink === 'portfolio' ? 'active' : ''}
          onClick={() => handleLinkClick('portfolio')}
        >
          Portfolio
        </a>

        <a
          href="#contact"
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Nav;
