import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Me</h2>
      <p>
        If you have any questions or would like to work together, feel free to
        reach out!
      </p>

      <form className="contact-form" role="form">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" placeholder="Your Name" required />

        <label htmlFor="email">Your Email</label>
        <input id="email" type="email" placeholder="Your Email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">Reach me @ wileland7@gmail.com!</div>
    </section>
  );
}

export default Contact;
