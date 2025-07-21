import React from 'react';
import { useTranslation } from 'react-i18next';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonialsSection">
      <div className="contentWrapper">
        <h2 className="sectionTitle">{t("homeSection.testimonials.title")}</h2>
        <p className="sectionDescription">{t("homeSection.testimonials.description")}</p>
        <div className="testimonialsGrid">
          {["testimonial1", "testimonial2", "testimonial3"].map((key, index) => (
            <div key={index} className="testimonialCard">
              <p className="testimonialQuote">{t(`homeSection.testimonials.items.${key}.quote`)}</p>
              <p className="testimonialAuthor">{t(`homeSection.testimonials.items.${key}.author`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;