import React from 'react';
import './ProjectsSection.css';

function ProjectsSection({ projects, current, setCurrent }) {
  return (
    <div className="projects-section">
      <div className="projects-header-row">
        <div className="projects-header-align">
          <h2 className="projects-title">My Projects</h2>
          <div className="projects-underline" />
        </div>
      </div>
      <div className="projects-slideshow-row">
        <div className="projects-slideshow-content">
          <img
            className="projects-image"
            src={projects[current].image}
            alt={projects[current].name}
            style={{
              width: '320px',
              height: '220px',
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
      </div>
      <div className="projects-dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={"projects-dot" + (idx === current ? " active" : "")}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
      {/* visually hidden for layout only */}
      {/* Intentionally left blank for layout */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}></div>
    </div>
  );
}

export default ProjectsSection;
