import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import './Contact.scss'
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contactContainer">
     
      <div className="containerWrapper">
         <SectionHeader title="salam" subtitle="sagol"/>
        {/* Contact Info Section */}
        <div className="contactInfoSection">
          <div className="sectionTitle">Get In Touch</div>
          <div className="contactInfoGrid">
            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Phone className="contactIcon" />
              </div>
              <div className="contactTitle">Phone</div>
              <div className="contactText">+994 12 345 67 89</div>
              <div className="contactText">+994 50 123 45 67</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Mail className="contactIcon" />
              </div>
              <div className="contactTitle">Email</div>
              <div className="contactText">info@procurement.az</div>
              <div className="contactText">sales@procurement.az</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <MapPin className="contactIcon" />
              </div>
              <div className="contactTitle">Address</div>
              <div className="contactText">28 May Street, Nizami District</div>
              <div className="contactText">Baku, Azerbaijan AZ1000</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Clock className="contactIcon" />
              </div>
              <div className="contactTitle">Business Hours</div>
              <div className="contactText">Mon - Fri: 9:00 - 18:00</div>
              <div className="contactText">Sat: 9:00 - 14:00</div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contactFormSection">
          <div className="formContainer">
            <div className="formHeader">
              <div className="formTitle">Send Us a Message</div>
              <div className="formSubtitle">
                Ready to streamline your procurement process? Contact us today for a consultation.
              </div>
            </div>

            <div className="contactForm">
              <div className="formGrid">
                <div className="inputGroup">
                  <div className="inputWrapper">
                    <User className="inputIcon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="formInput"
                      required
                    />
                  </div>
                </div>

                <div className="inputGroup">
                  <div className="inputWrapper">
                    <Mail className="inputIcon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="formInput"
                      required
                    />
                  </div>
                </div>

                <div className="inputGroup">
                  <div className="inputWrapper">
                    <MapPin className="inputIcon" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="formInput"
                    />
                  </div>
                </div>

                <div className="inputGroup">
                  <div className="inputWrapper">
                    <MessageSquare className="inputIcon" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="formInput"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="inputGroup fullWidth">
                <div className="textareaWrapper">
                  <MessageSquare className="textareaIcon" />
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="formTextarea"
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>

              <button type="button" onClick={handleSubmit} className="submitButton">
                <Send className="submitIcon" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="ctaSection">
          <div className="ctaContent">
            <div className="ctaTitle">Ready to Optimize Your Procurement?</div>
            <div className="ctaText">
              Join hundreds of companies that trust us with their procurement needs. 
              Let's discuss how we can help streamline your supply chain operations.
            </div>
            <div className="ctaButtons">
              <button className="ctaButtonPrimary">Schedule Consultation</button>
              <button className="ctaButtonSecondary">Request Quote</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactSection;