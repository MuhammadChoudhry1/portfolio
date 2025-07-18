import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ContactSection.css';

function ContactSection() {
  const [ref, isVisible, hasExited] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const getAnimationState = () => {
    if (hasExited) return "exit";
    if (isVisible) return "visible";
    return "hidden";
  };

  return (
    <motion.div 
      className="contact-section-split" 
      id="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={getAnimationState()}
    >
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
    </motion.div>
  );
}

export default ContactSection;
