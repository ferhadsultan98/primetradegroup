import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import "./Contact.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    emailjs
      .send(
        "service_3dfp3hv",
        "template_73gu8bf",
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        "x4Bhiy0hFd0TSMWG9"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert(t("contact.form.success_message"));
          setFormData({
            name: "",
            email: "",
            company: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email error:", error.text);
          setError(t("contact.form.error_message"));
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contactContainer">
      <Helmet>
        <title>BİZİMLƏ ƏLAQƏ - PRIME TRADE GROUP MMC</title>
        <meta
          name="description"
          content="Bakı, Azərbaycan-da yerləşən PRIME TRADE GROUP MMC ilə əlaqə saxlayın – peşəkar satınalma və təchizat zənciri həlləri üçün bizimlə telefon, e-poçt vasitəsilə əlaqə yaradın və ya məsləhətləşmə təyin edin."
        />
        <meta
          name="keywords"
          content="satınalma xidmətləri ilə əlaqə, təchizat zənciri məsləhətləşməsi, Bakı satınalma, Azərbaycan satınalma, Bakı təchizat zənciri həlləri, biznes məsləhətləşməsi, PRIME TRADE GROUP MMC ilə əlaqə, Bakı Azərbaycan-da satınalma xidmətləri, satınalma üzrə məsləhətləşmə təyin et, təchizat zəncirinin idarə olunması əlaqə, Bakı biznes satınalması, Azərbaycan təchizat zənciri xidmətləri, Nizami rayonu satınalma"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <SectionHeader
          title={t("contact.section_header.title")}
          subtitle={t("contact.section_header.subtitle")}
        />

        <div className="contactInfoSection">
          <div className="sectionTitle">{t("contact.info.title")}</div>
          <div className="contactInfoGrid">
            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Phone className="contactIcon" />
              </div>
              <div className="contactTitle">{t("contact.info.phone.title")}</div>
              <div className="contactText">{t("contact.info.phone.number1")}</div>
              <div className="contactText">{t("contact.info.phone.number2")}</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Mail className="contactIcon" />
              </div>
              <div className="contactTitle">{t("contact.info.email.title")}</div>
              <div className="contactText">{t("contact.info.email.address1")}</div>
              <div className="contactText">{t("contact.info.email.address2")}</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <MapPin className="contactIcon" />
              </div>
              <div className="contactTitle">{t("contact.info.address.title")}</div>
              <div className="contactText">{t("contact.info.address.line1")}</div>
              <div className="contactText">{t("contact.info.address.line2")}</div>
            </div>

            <div className="contactInfoCard">
              <div className="contactIconWrapper">
                <Clock className="contactIcon" />
              </div>
              <div className="contactTitle">{t("contact.info.hours.title")}</div>
              <div className="contactText">{t("contact.info.hours.weekdays")}</div>
              <div className="contactText">{t("contact.info.hours.saturday")}</div>
            </div>
          </div>
        </div>

        <div className="contactFormSection">
          <div className="formContainer">
            <div className="formHeader">
              <div className="formTitle">{t("contact.form.title")}</div>
              <div className="formSubtitle">{t("contact.form.subtitle")}</div>
            </div>

            <div className="contactForm">
              {error && <div className="errorMessage">{error}</div>}
              <div className="formGrid">
                <div className="inputGroup">
                  <div className="inputWrapper">
                    <User className="inputIcon" />
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contact.form.fields.name")}
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
                      placeholder={t("contact.form.fields.email")}
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
                      placeholder={t("contact.form.fields.company")}
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
                      placeholder={t("contact.form.fields.subject")}
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
                    placeholder={t("contact.form.fields.message")}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="formTextarea"
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="submitButton"
                disabled={isSubmitting}
              >
                <Send className="submitIcon" />
                {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
              </button>
            </div>
          </div>
        </div>

        <div className="ctaSection">
          <div className="ctaContent">
            <div className="ctaTitle">{t("contact.cta.title")}</div>
            <div className="ctaText">{t("contact.cta.text")}</div>
            <div className="ctaButtons">
              <button className="ctaButtonPrimary">
                {t("contact.cta.buttons.consultation")}
              </button>
              <button className="ctaButtonSecondary">
                {t("contact.cta.buttons.quote")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;