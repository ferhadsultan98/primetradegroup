import React, { useState } from 'react';
import './ContactSection.scss';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contactImageContainer">
      <h1 className="contactTitle">Get in touch</h1>
      <p className="contactSubtitle">We’re here to help</p>
      <img
        src="https://via.placeholder.com/1920x150"
        alt="Contact banner"
        className="contactImage"
      />
      <div className="contactFormContainer">
        <h2 className="formTitle">Write us a message</h2>
        <div className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="formInput"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="formInput"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="formTextarea"
            required
          ></textarea>
          <button type="submit" className="formButton">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;