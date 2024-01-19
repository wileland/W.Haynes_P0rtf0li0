import React from "react";
import "./Portfolio.css"; // Make sure to create a corresponding CSS file

function Portfolio() {
  // Replace these placeholders with actual projects and links
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      image: "/path-to-project-1-image.jpg", // Replace with path to your project image
      link: "http://link-to-deployed-project-1.com", // Replace with link to your project
      repo: "http://link-to-project-1-repo.com", // Replace with link to your project repo
    },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio-section">
      <h2>My Portfolio</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
