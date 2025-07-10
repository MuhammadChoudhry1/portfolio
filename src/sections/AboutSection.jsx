import React from 'react';
import gradPhoto from '../assets/No.jpg';
import './AboutSection.css';

function AboutSection({ aboutSlides, aboutSlide, setAboutSlide }) {
  return (
    <div className="about-section" id="about">
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
          <div className="about-slide-content project-card horizontal">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="project-title-main">{aboutSlides[aboutSlide].title}</div>
              <div className="project-year">{aboutSlides[aboutSlide].year}</div>
            </div>
            <div className="project-type">{aboutSlides[aboutSlide].type?.toUpperCase()}</div>
            <div className="about-slide-subtitle" style={{ fontWeight: 500, color: '#0077ff', marginBottom: '0.7rem' }}>{aboutSlides[aboutSlide].subtitle}</div>
            <div className="project-desc">{aboutSlides[aboutSlide].content}</div>
          </div>
          <button
            className="about-arrow"
            onClick={() => setAboutSlide((aboutSlide + 1) % aboutSlides.length)}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
