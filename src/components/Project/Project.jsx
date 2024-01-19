import React from "react";
import "./project.css"; // Ensure the CSS file name matches and is located in the same folder

// This is a functional component for an individual project
function Project({ title, description, imageUrl, projectUrl, githubUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
