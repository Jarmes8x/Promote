import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faConciergeBell, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <nav className="nav">
        <ul>
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</a></li>
          <li><a href="#services"><FontAwesomeIcon icon={faConciergeBell} /> Services</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="#login" className="login-button"><FontAwesomeIcon icon={faSignInAlt} /> Login</a>
        <a href="#register" className="register-button"><FontAwesomeIcon icon={faUserPlus} /> Register</a>
      </div>
    </header>
  );
}

export default Header;