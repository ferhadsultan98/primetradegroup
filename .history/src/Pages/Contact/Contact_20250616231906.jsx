import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

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

      <style jsx>{`
        .contactContainer {
          font-family: "Arial", sans-serif;
          line-height: 1.6;
          color: #333;

          .containerWrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .contactInfoSection {
            padding: 100px 0;
            background: #f8f9fa;

            .sectionTitle {
              text-align: center;
              font-size: 2.5rem;
              color: #253f57;
              margin-bottom: 60px;
              font-weight: 600;
            }

            .contactInfoGrid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 40px;

              .contactInfoCard {
                background: white;
                padding: 40px 30px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 8px 30px rgba(37, 63, 87, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                border-top: 4px solid #253f57;

                &:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 15px 40px rgba(37, 63, 87, 0.15);
                }

                .contactIconWrapper {
                  background: #253f57;
                  width: 70px;
                  height: 70px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: 0 auto 25px;

                  .contactIcon {
                    width: 35px;
                    height: 35px;
                    color: white;
                  }
                }

                .contactTitle {
                  font-size: 1.4rem;
                  color: #253f57;
                  margin-bottom: 20px;
                  font-weight: 600;
                }

                .contactText {
                  color: #666;
                  font-size: 1rem;
                  line-height: 1.7;
                  margin-bottom: 8px;

                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
            }
          }

          .contactFormSection {
            padding: 100px 0;
            background: white;

            .formContainer {
              max-width: 800px;
              margin: 0 auto;

              .formHeader {
                text-align: center;
                margin-bottom: 50px;

                .formTitle {
                  font-size: 2.5rem;
                  color: #253f57;
                  margin-bottom: 20px;
                  font-weight: 600;
                }

                .formSubtitle {
                  font-size: 1.1rem;
                  color: #666;
                  line-height: 1.7;
                }
              }

              .contactForm {
                .formGrid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 30px;
                  margin-bottom: 30px;
                }

                .inputGroup {
                  .inputWrapper {
                    position: relative;
                    display: flex;
                    align-items: center;

                    .inputIcon {
                      position: absolute;
                      left: 15px;
                      width: 20px;
                      height: 20px;
                      color: #253f57;
                      z-index: 1;
                    }

                    .formInput {
                      width: 100%;
                      padding: 15px 15px 15px 50px;
                      border: 2px solid #e9ecef;
                      border-radius: 8px;
                      font-size: 1rem;
                      transition: border-color 0.3s ease, box-shadow 0.3s ease;
                      background: white;

                      &:focus {
                        outline: none;
                        border-color: #253f57;
                        box-shadow: 0 0 0 3px rgba(37, 63, 87, 0.1);
                      }

                      &::placeholder {
                        color: #999;
                      }
                    }
                  }

                  .textareaWrapper {
                    position: relative;

                    .textareaIcon {
                      position: absolute;
                      top: 15px;
                      left: 15px;
                      width: 20px;
                      height: 20px;
                      color: #253f57;
                      z-index: 1;
                    }

                    .formTextarea {
                      width: 100%;
                      padding: 15px 15px 15px 50px;
                      border: 2px solid #e9ecef;
                      border-radius: 8px;
                      font-size: 1rem;
                      transition: border-color 0.3s ease, box-shadow 0.3s ease;
                      background: white;
                      resize: vertical;
                      min-height: 120px;
                      font-family: inherit;

                      &:focus {
                        outline: none;
                        border-color: #253f57;
                        box-shadow: 0 0 0 3px rgba(37, 63, 87, 0.1);
                      }

                      &::placeholder {
                        color: #999;
                      }
                    }
                  }

                  &.fullWidth {
                    grid-column: 1 / -1;
                    margin-bottom: 40px;
                  }
                }

                .submitButton {
                  background: #253f57;
                  color: white;
                  border: none;
                  padding: 18px 40px;
                  border-radius: 8px;
                  font-size: 1.1rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: background-color 0.3s ease, transform 0.2s ease;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 10px;
                  margin: 0 auto;

                  .submitIcon {
                    width: 20px;
                    height: 20px;
                  }

                  &:hover {
                    background: #1e3245;
                    transform: translateY(-2px);
                  }

                  &:active {
                    transform: translateY(0);
                  }
                }
              }
            }
          }

          .ctaSection {
            padding: 80px 0;
            background: #253f57;
            color: white;

            .ctaContent {
              text-align: center;
              max-width: 700px;
              margin: 0 auto;

              .ctaTitle {
                font-size: 2.2rem;
                font-weight: 600;
                margin-bottom: 20px;
              }

              .ctaText {
                font-size: 1.1rem;
                line-height: 1.8;
                color: #d3d8e8;
                margin-bottom: 30px;
              }

              .ctaButtons {
                display: flex;
                justify-content: center;
                gap: 20px;

                .ctaButtonPrimary {
                  background: #007bff;
                  color: white;
                  border: 16px;
                  padding: 16px 32px;
                  font-size: 1.05rem;
                  font-weight: 600;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: background-color 0.3s ease, transform 0.2s ease;

                  &:hover {
                    background: #0056b3;
                    transform: translateY(-2px);
                  }

                  &:active {
                    transform: translateY(0);
                  }
                }

                .ctaButtonSecondary {
                  background: transparent;
                  color: #d3d7e8;
                  border: 2px solid #ffffff;
                  padding: 16px 14px;
                  font-size: 1.05rem;
                  font-weight: 600;
                  border-radius: 8px;
                  cursor: pointer;
                  transition: background-color: 0.3s ease, color: 0.3s ease, transform: 0.2s ease;

                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    transform: translateY(-2px);
                  }

                  &:active {
                    transform: translateY(0);
                  }
              }
            }
          }
      }
      `}</style>
    </div>
  );
};

export default ContactSection;