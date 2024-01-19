import React from "react";
import Project from "../components/Project/Project";
import "./portfolio.css"; // Your portfolio CSS

function Portfolio() {
  const projects = [
    // Add your projects here
    {
      title: "Project 1",
      description: "This is a great project.",
      imageUrl: "/path-to-image.jpg",
      projectUrl: "http://live-demo-link.com",
      githubUrl: "http://github-repo-link.com",
    },
    // More projects...
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
