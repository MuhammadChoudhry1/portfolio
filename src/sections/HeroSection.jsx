import React from 'react';
import bgImage from '../assets/bg.jpg';

function HeroSection() {
  return (
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-name">Muhammad Choudhry</h1>
            <h4 className="hero-subtitle">Computer Science</h4>
          </div>
          <div className="hero-right">
            <div className="hero-status-pro">
              <span className="hero-status-dot" /> GRADUATE FROM
            </div>
            <div className="hero-location-pro">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '6px', opacity: 0.7}}><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/></svg>
              ULSTER UNIVERSITY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
