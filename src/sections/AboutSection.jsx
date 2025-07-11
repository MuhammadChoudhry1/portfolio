import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import gradPhoto from '../assets/No.jpg';
import './AboutSection.css';

function AboutSection({ aboutSlides, aboutSlide, setAboutSlide }) {
  const [ref, isVisible, hasExited] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const getAnimationState = () => {
    if (hasExited) return "exit";
    if (isVisible) return "visible";
    return "hidden";
  };

  return (
    <motion.div 
      className="about-section" 
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={getAnimationState()}
    >
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-underline" />
        <div className="about-slideshow-row">
          <button
            className="about-arrow"
            onClick={() => setAboutSlide((aboutSlide + aboutSlides.length - 1) % aboutSlides.length)}
            aria-label="Previous"
          >
            &#8592;
          </button>
          {aboutSlide === 0 && (
            <img
              src={gradPhoto}
              alt="Graduation"
              style={{
                width: '270px',
                height: '310px',
                objectFit: 'cover',
                borderRadius: '14px',
                marginRight: '1.5rem',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)'
              }}
            />
          )}
          <motion.div 
            className="about-slide-content project-card horizontal"
            variants={itemVariants}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="project-title-main">{aboutSlides[aboutSlide].title}</div>
              <div className="project-year">{aboutSlides[aboutSlide].year}</div>
            </div>
            <div className="project-type">{aboutSlides[aboutSlide].type?.toUpperCase()}</div>
            <div className="about-slide-subtitle" style={{ fontWeight: 500, color: '#0077ff', marginBottom: '0.7rem' }}>{aboutSlides[aboutSlide].subtitle}</div>
            <div className="project-desc">{aboutSlides[aboutSlide].content}</div>
          </motion.div>
          <button
            className="about-arrow"
            onClick={() => setAboutSlide((aboutSlide + 1) % aboutSlides.length)}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
