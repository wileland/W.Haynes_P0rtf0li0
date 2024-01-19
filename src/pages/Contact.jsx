import React from "react";
import "./Contact.css"; // Make sure to create a corresponding CSS file

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would like to work together, feel free to
        reach out!
      </p>

      <form className="contact-form">
        {/* You can add a form handler later */}
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: wileland7@gmail.com</p>
        <p>
          Github:{" "}
          <a
            href="https://github.com/wileland"
            target="_blank"
            rel="noopener noreferrer"
          >
            wileland
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
