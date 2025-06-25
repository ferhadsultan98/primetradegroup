// ContactSection.jsx
import React from 'react';
import './ContactSection.scss'; // SCSS dosyasını import ediyoruz

function ContactSection() {
  return (
    <div className="contact-container">
      <div className="header-section">
        <h1>We’re here to help</h1>
        <a href="#contact" className="get-in-touch">Get in Touch</a>
      </div>
      <div className="form-section">
        <h2>Contact Us</h2>
        <h3>We’re excited to work with you to create a brighter future</h3>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;