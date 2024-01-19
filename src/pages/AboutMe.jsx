import React from "react";
import "./AboutMe.css";

function AboutMe() {
  // This is a placeholder for your actual content
  return (
    <section className="about-me">
      <img
        src="/path-to-your-avatar.jpg" /*ADD AVATAR HERE*/
        alt="Your Avatar"
        className="about-me-avatar"
      />
      <h1>Hi, I'm [William L. Haynes]</h1>
      <p>
        I am a web developer with a passion for creating beautiful and
        functional web applications. Here you can find some of the work I've
        done and get in touch with me for future projects or collaborations.
      </p>
      {/* Add more about your experience, education, skills, etc. */}
    </section>
  );
}

export default AboutMe;
