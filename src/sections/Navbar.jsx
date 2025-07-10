import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  // Smooth scroll handler for Project link
  const handleProjectClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll handler for About link
  const handleAboutClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll handler for Contact link
  const handleContactClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
        <div className="navbar-cnmtainer">
            <div className="navbar-logo-container">
                <a href="#home" className="navbar-logo-link">
                <img src={logo} alt="Logo" className="navbar-logo" />
                </a>
            </div>
            <ul className="navbar-list">
                <li>
                  <a href="#projects" onClick={handleProjectClick}>Project</a>
                </li>
                <li>
                  <a href="#about" onClick={handleAboutClick}>About</a>
                </li>
                <li>
                  <a href="#contact" onClick={handleContactClick}>Contact</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/muhammad-choudhry-7528aa295/" target="_blank" rel="noopener noreferrer" className="navbar-icon-link">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><circle cx="8" cy="7" r="1"/></svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MuhammadChoudhry1" target="_blank" rel="noopener noreferrer" className="navbar-icon-link">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                  </a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
