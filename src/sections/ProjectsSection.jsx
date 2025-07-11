import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ProjectsSection.css';

function ProjectsSection({ projects, current, setCurrent }) {
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
        staggerChildren: 0.3,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.9 }
    }
  };

  const getAnimationState = () => {
    if (hasExited) return "exit";
    if (isVisible) return "visible";
    return "hidden";
  };

  return (
    <motion.div 
      className="projects-section" 
      id="projects"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={getAnimationState()}
    >
      <motion.div className="projects-header-row" variants={itemVariants}>
        <div className="projects-header-align">
          <h2 className="projects-title">My Projects</h2>
          <div className="projects-underline" />
        </div>
      </motion.div>
      <motion.div className="projects-slideshow-row" variants={itemVariants}>
        <div className="projects-slideshow-content">
          <img
            className="projects-image"
            src={projects[current].image}
            alt={projects[current].name}
            style={{
              width: '500px',
              height: '340px',
              objectFit: 'cover',
              borderRadius: '18px',
              marginRight: '2.5rem',
              boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
            }}
          />
          <div className="projects-divider" />
          <div className="projects-info">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="project-title-main">{projects[current].name}</div>
              <div className="project-year">{projects[current].year}</div>
            </div>
            <div className="project-type">{projects[current].type?.toUpperCase()}</div>
            <a className="project-link-text" href={projects[current].link} target="_blank" rel="noopener noreferrer">
              View Project <span className="project-link-arrow">↗</span>
            </a>
            <div className="project-desc">{projects[current].desc}</div>
            <div className="project-tech-list">
              {projects[current].tech?.map((t) => (
                <span className="project-tech-pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="projects-dots" variants={itemVariants}>
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={"projects-dot" + (idx === current ? " active" : "")}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </motion.div>
      {/* visually hidden for layout only */}
      {/* Intentionally left blank for layout */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}></div>
    </motion.div>
  );
}

export default ProjectsSection;
