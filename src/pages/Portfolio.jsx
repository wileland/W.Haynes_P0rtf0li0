import React from "react";
import Project from "../components/Project/Project";
import "./portfolio.css"; // Make sure the CSS file is named correctly and exists in the same folder
import project1Image from "../assets/Project1.png";
import project2Image from "../assets/Project2.png";
import project3Image from "../assets/Project3.png";

const projects = [
  {
    title: "Pokemon Team Picker",
    description:
      "A tool for Pokémon enthusiasts to create and visualize their dream team...",
    imageUrl: project1Image, // Updated to imported image
    projectUrl: "http://pokemon-team-picker-live-demo.com",
    githubUrl: "https://github.com/Cbaca4/project01-game-picker",
  },
  {
    title: "Jingle Judge: Naughty or Nice edition",
    description:
      "A fun, interactive application that allows users to input names...",
    imageUrl: project2Image, // Updated to imported image
    projectUrl: "http://jingle-judge-live-demo.com",
    githubUrl: "https://github.com/wileland/Jingle-Judge",
  },
  {
    title: "Regex",
    description: "A comprehensive guide and tester for regular expressions...",
    imageUrl: project3Image, // Updated to imported image
    projectUrl: "http://regex-tutorial-live-demo.com",
    githubUrl: "https://github.com/wileland/R3g3x",
  },
];

function Portfolio() {
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
