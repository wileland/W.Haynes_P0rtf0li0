import React from "react";
import "./Resume.css"; // Make sure to create a corresponding CSS file

function Resume() {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>
      <p>
        Download my resume to learn more about my professional background and
        skills.
      </p>
      <a href="/path-to-your-resume.pdf" download>
        Download Resume
      </a>
      {/* You can list your skills and experiences here or in the downloadable resume */}
    </section>
  );
}

export default Resume;
