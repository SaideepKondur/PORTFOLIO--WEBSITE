import React from 'react';
import './Project.scss';

function Project({ title, description, techLogos, videoSrc, imageSrc, link }) {
  return (
    <div className="Project">
      <div className="project-content">
        <div className="left-part">
          <div className="img-container">
            <div className="video-wrapper">
              <video autoPlay loop muted className="video">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <img src={imageSrc} alt="Laptop" className="laptop" />
          </div>
        </div>
        <div className="right-part">
          <h3>{title}</h3>
          <ul className="project-description">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="logo-container">
            {techLogos.map((logo, index) => (
              <img src={logo.src} alt={logo.alt} className="logo" key={index} />
            ))}
          </div>
          <div className="bottom-part">
            <a href={link} className="project-link-button" target="_blank" rel="noopener noreferrer">Project Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
