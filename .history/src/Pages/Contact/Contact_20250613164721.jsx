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
      <p>We're excited to work with you to create a brighter future</p>
      <div className="contactFormContainer">
        <h2 className="formTitle">Write us a message</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
            
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
        </form>
      </div>
    </div>
  );
}

export default ContactSection;