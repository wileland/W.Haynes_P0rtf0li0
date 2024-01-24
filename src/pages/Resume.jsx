import React from "react";
import "./Resume.css"; // Ensure this CSS file is properly linked and styled
import resumeFile from "../assets/William-Haynes-Resume.pdf"; // Confirm the file path is correct

function Resume() {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>
      <p>
        Download my resume to learn more about my professional background and
        skills.
      </p>
      <a href={resumeFile} download="William-Haynes-Resume.pdf">
        Download Resume
          </a>
          
        {/* List your skills and experiences here or in the downloadable resume */}
        <div>
    <h3>Professional Summary</h3>
    <p>Seasoned educator transitioning into the tech industry as a dynamic Full Stack Web Developer, equipped with a robust background in English language and literature. Expert in crafting engaging web applications and adept at conveying complex concepts in accessible formats. Demonstrated leadership qualities and a unique combination of technical acumen and teaching experience.</p>

    <h3>Education</h3>
    <ul>
      <li>Full Stack Web Development Bootcamp, University of Texas at San Antonio (EdX) - Aug 2023 to Feb 2024</li>
      <li>M.A. in English, Texas A&M International University - May 2020</li>
      <li>B.A. in English/History, Texas A&M International University - Aug 2011</li>
    </ul>

    <h3>Technical Skills</h3>
    <ul>
      <li>Proficient in HTML, CSS, JavaScript, Node.js, React.js, and Git.</li>
      <li>Competent in database management using SQL and MongoDB.</li>
      <li>Developed and deployed nearly 30 full-stack web applications.</li>
      <li>Committed to responsive web design and development best practices.</li>
    </ul>

    <h3>Professional Experience</h3>
    <ul>
      <li>Leadership experience in educational program coordination and team management.</li>
      <li>Experienced in curriculum design and instructional strategies.</li>
      <li>Bilingual in English and Spanish, enhancing team collaboration and client interactions.</li>
    </ul>

    <h3>Personal Projects</h3>
    <ul>
      <li>Completed several time-sensitive group projects, delivering under pressure with an agile work style.</li>
      <li>Designed and developed a language learning app, utilizing interactive storytelling to enhance language acquisition.</li>
      <li>Created a collaborative platform for educators to share resources and best practices, fostering a community of professional development.</li>
      <li>Developed a personal finance management app that helps users track expenses and make informed budgeting decisions.</li>
    </ul>
  </div>

    </section>
  );
}

export default Resume;
