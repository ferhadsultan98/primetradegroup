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
  ChevronDown,
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
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

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
          service: formData.service,
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
            service: "",
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

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: 'PRIME TRADE GROUP MMC hansı sahələr üzrə xidmət göstərir?',
      answer: 'Şirkətimiz təchizat, tender və satınalma sahələrində fəaliyyət göstərir. Biz təmizlik məhsulları, mebel, məişət avadanlıqları, informasiya texnologiyaları avadanlıqları, ofis ləvazimatları, santexnika məhsulları və iş geyimləri üzrə məhsulların təmini və satışını həyata keçiririk.',
    },
    {
      question: 'Yalnız dövlət müəssisələri iləmi işləyirsiniz, yoxsa özəl sektora da xidmət göstərirsiniz?',
      answer: 'Hər iki istiqamətdə fəaliyyət göstəririk. Dövlət tenderlərində iştirak etməklə yanaşı, özəl şirkətlərin də fərdi və korporativ ehtiyaclarına uyğun təchizat xidmətləri təqdim edirik.',
    },
    {
      question: 'Məhsullarınızı haradan əldə edirsiniz?',
      answer: 'Məhsullarımızı etibarlı yerli və beynəlxalq istehsalçılardan və rəsmi distribyutorlardan alırıq. Bu, keyfiyyətə və davamlı tədarükə zəmanət verir.',
    },
    {
      question: 'Sifariş prosesi necə həyata keçirilir?',
      answer: 'Sifariş üçün bizimlə əlaqə saxladıqdan sonra ehtiyaclarınız analiz olunur, uyğun məhsullar və qiymət təklifləri hazırlanır. Razılaşmadan sonra təchizat qrafiki müəyyən edilir və məhsullar təhvil verilir.',
    },
    {
      question: 'Minimum sifariş həcmi varmı?',
      answer: 'Xeyr, biz həm kiçik, həm də iri sifarişlərlə işləyirik. İstər bir ofis üçün ləvazimat, istərsə də iri həcmli tender təchizatı – hər bir sifarişi diqqətlə və operativ şəkildə həyata keçiririk.',
    },
    {
      question: 'İş geyimləri və fərdi mühafizə vasitələri üçün xüsusi dizayn və loqo tətbiqi mümkündürmü?',
      answer: 'Bəli, müştərinin istəyinə uyğun olaraq iş geyimlərinə loqo tətbiqi və dizayn fərdiləşdirmə xidmətləri də təklif edirik.',
    },
    {
      question: 'Ödəniş üsulları hansılardır?',
      answer: 'Ödənişlər bank köçürməsi, müqavilə əsasında təxirə salınmış ödəniş və ya nağdsız hesablaşma yolu ilə həyata keçirilir. Müqavilədən asılı olaraq fərqli şərtlər tətbiq oluna bilər.',
    },
    {
      question: 'Sizdən qiymət təklifi necə ala bilərik?',
      answer: 'Əlaqə bölməmiz vasitəsilə bizə müraciət etdikdən sonra ehtiyaclarınızı bildirin. Komandamız sizin üçün ən uyğun məhsulları müəyyən edib, qısa zamanda qiymət təklifi təqdim edəcək.',
    },
  ];

  return (
    <>
      <SectionHeader
        title={t("contact.section_header.title")}
        subtitle={t("contact.section_header.subtitle")}
      />
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
          <div className="contactInfoSection">
            <div className="sectionTitle">{t("contact.info.title")}</div>
            <div className="contactInfoGrid">
              <div className="contactInfoCard">
                <div className="contactIconWrapper">
                  <Phone className="contactIcon" />
                </div>
                <div className="contactTitle">{t("contact.info.phone.title")}</div>
                <div className="contactText">+994 55 644 39 31</div>
                <div className="contactText">+994 70 330 86 07</div>
              </div>

              <div className="contactInfoCard">
                <div className="contactIconWrapper">
                  <Mail className="contactIcon" />
                </div>
                <div className="contactTitle">{t("contact.info.email.title")}</div>
                <div className="contactText">{t("contact.info.email.address1")}</div>
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

          <div className="contentWrapper">
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
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="formInput"
                          required
                        >
                          <option value="" disabled>
                            Fəaliyyət sahələrimiz
                          </option>
                          <option value="Təmizlik Məhsulları">Təmizlik Məhsulları</option>
                          <option value="Mebel">Mebel</option>
                          <option value="Məişət Avadanlıqları">Məişət Avadanlıqları</option>
                          <option value="İnformasiya Texnologiyaları Avadanlıqları">
                            İnformasiya Texnologiyaları Avadanlıqları
                          </option>
                          <option value="Ofis Ləvazimatları">Ofis Ləvazimatları</option>
                          <option value="Santexnika">Santexnika</option>
                          <option value="İş Geyimləri">İş Geyimləri</option>
                        </select>
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

            <div className="contactFaqSection">
              <div className="faqHeader">
                <div className="faqTitle">Tez-tez verilən suallar</div>
              </div>
              <div className="faqContainer">
                {faqData.map((faq, index) => (
                  <div key={index} className="faqItem">
                    <div
                      className="faqQuestion"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`faqIcon ${openAccordion === index ? 'rotate' : ''}`}
                      />
                    </div>
                    <div
                      className={`faqAnswer ${openAccordion === index ? 'open' : ''}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;