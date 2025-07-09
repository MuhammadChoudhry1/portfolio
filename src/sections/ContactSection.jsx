import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className="contact-section-split">
      <div className="contact-split-col contact-split-left">
        <h2 className="contact-split-title">Contact Details</h2>
        <div className="contact-split-underline" />
        <div className="contact-split-info">
          <div><strong>Email:</strong> choudhrymuhammad73@gmail.com</div>
          <div><strong>Location:</strong> Belfast, UK</div>
        </div>
      </div>
      <div className="contact-split-divider" />
      <div className="contact-split-col contact-split-right">
        <h2 className="contact-split-title">Connect With Me</h2>
        <div className="contact-split-underline" />
        <div className="contact-split-info">
          <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammad-choudhry-7528aa295/" target="_blank" rel="noopener noreferrer">Muhammad Choudhry</a></div>
          <div><strong>GitHub:</strong> <a href="https://github.com/MuhammadChoudhry1" target="_blank" rel="noopener noreferrer">MuhammadChoudhry1</a></div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
