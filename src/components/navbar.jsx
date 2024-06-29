import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages.css'; // Archivo para estilos CSS del navbar

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo.svg" alt="Logo de la empresa" className="logo-img" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
      <ul className={`navbar-nav ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="#About Us" className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a href="#Speakers" className="nav-link">Speakers</a>
        </li>
        <li className="nav-item">
          <a href="#Sponsors" className="nav-link">Sponsors</a>
        </li>
        <li className="nav-item">
          <a href="#Date" className="nav-link">Date</a>
        </li>
        <li className="nav-item">
          <button className="buy-ticket-btn">BUY TICKET</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
