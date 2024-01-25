import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you'd handle the submission, e.g., sending data to Netlify
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would like to work together, feel free to
        reach out!
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        data-netlify="true"
        name="contact"
      >
        {/* Hidden input field for Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          name="message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: wileland7@gmail.com</p>
        {/* Add social media and other links here */}
      </div>
    </section>
  );
}

export default Contact;
