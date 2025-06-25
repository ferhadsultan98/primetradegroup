import React, { useState } from 'react';
import './ContactSection.scss';
import Cgas from '../../../public/assets/cgas.png';

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
        src={Cgas}
        alt="Contact banner"
        className="contactImage"
      />
      <h2>Contact us</h2>
      <p>We're excited to work with you to create a <span className="highlight-text">brighter future</span></p>
      <div className="contactFormContainer">
        <h2 className="formTitle">Write us a message</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="formInput"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="formLabel">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="formInput"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="formLabel">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="formTextarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="formButton">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;