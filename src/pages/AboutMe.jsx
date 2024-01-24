import React from "react";
import "./AboutMe.css";
import avatarImage from '../assets/my-avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <img
        src={avatarImage} 
        alt="William L. Haynes"
        className="about-me-avatar"
      />
      <h1>Hi, I'm William L. Haynes</h1>
      <p>
        With a decade dedicated to shaping minds as an English and ESOL teacher
        in inner-city San Antonio, I bring a wealth of experience to the table.
        My academic journey, crowned with a BA and MA in English from Texas A&M
        International University, underpins my creative and analytical prowess.
        I thrive on intuition and creativity, which fuels my ability to think
        outside the box and devise innovative solutions. Beyond the science of
        education, my teaching career has honed my leadership skills, instilling
        in me the fine art of guiding and inspiring. From managing time to
        orchestrating behavior, my path as an educator has been as enlightening
        as it has been fulfilling.
      </p>
      {/* More to come! */}
    </section>
  );
}

export default AboutMe;
