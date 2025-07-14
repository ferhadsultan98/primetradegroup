import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import './Contact.scss';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const ContactSection = () => {
  const { t } = useTranslation();
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
    alert(t('contact.form.success_message'));
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
      <Helmet>
        <title>{t('contact.title')}</title>
        <meta name="description" content={t('contact.meta_description')} />
        <meta name="keywords" content={t('contact.meta_keywords')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <SectionHeader
          title={t('contact.section_header.title')}
          subtitle={t('contact.section_header.subtitle')}
        />

        <div className="contactInfoSection">
          <div className="sectionTitle">{t('contact.info.title')}</div>
          <div className="contactInfoGrid">
            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Phone className="contactIcon" />
              </div>
              <div className="contactTitle">{t('contact.info.phone.title')}</div>
              <div className="contactText">{t('contact.info.phone.number1')}</div>
              <div className="contactText">{t('contact.info.phone.number2')}</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Mail className="contactIcon" />
              </div>
              <div className="contactTitle">{t('contact.info.email.title')}</div>
              <div className="contactText">{t('contact.info.email.address1')}</div>
              <div className="contactText">{t('contact.info.email.address2')}</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <MapPin className="contactIcon" />
              </div>
              <div className="contactTitle">{t('contact.info.address.title')}</div>
              <div className="contactText">{t('contact.info.address.line1')}</div>
              <div className="contactText">{t('contact.info.address.line2')}</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Clock className="contactIcon" />
              </div>
              <div className="contactTitle">{t('contact.info.hours.title')}</div>
              <div className="contactText">{t('contact.info.hours.weekdays')}</div>
              <div className="contactText">{t('contact.info.hours.saturday')}</div>
            </div>
          </div>
        </div>

        <div className="contactFormSection">
          <div className="formContainer">
            <div className="formHeader">
              <div className="formTitle">{t('contact.form.title')}</div>
              <div className="formSubtitle">{t('contact.form.subtitle')}</div>
            </div>

            <div className="contactForm">
              <div className="formGrid">
                <div className="inputGroup">
                  <div className="inputWrapper">
                    <User className="inputIcon" />
                    <input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.fields.name')}
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
                      placeholder={t('contact.form.fields.email')}
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
                      placeholder={t('contact.form.fields.company')}
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
                      placeholder={t('contact.form.fields.subject')}
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
                    placeholder={t('contact.form.fields.message')}
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
                {t('contact.form.submit')}
              </button>
            </div>
          </div>
        </div>

        <div className="ctaSection">
          <div className="ctaContent">
            <div className="ctaTitle">{t('contact.cta.title')}</div>
            <div className="ctaText">{t('contact.cta.text')}</div>
            <div className="ctaButtons">
              <button className="ctaButtonPrimary">{t('contact.cta.buttons.consultation')}</button>
              <button className="ctaButtonSecondary">{t('contact.cta.buttons.quote')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;