import React from 'react';
import './TestimonialSection.scss';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Keyfiyyət təsadüf deyil, daim ağıllı səylərin nəticəsidir.",
      author: "John Ruskin"
    },
    {
      quote: "Etibar – qazanılması çətin, itirilməsi isə ani olan ən dəyərli kapitaldır.",
      author: "Warren Buffett"
    },
    {
      quote: "Təchizat zənciri işləri çox mürəkkəbdir.",
      author: "Elon Musk"
    }
  ];

  return (
    <section className="testimonialsSection">
      <div className="contentWrapper">
        <h2 className="sectionTitle">Tanınmış Şəxslərin Fikirləri</h2>
        <p className="sectionDescription">Sənaye liderlərindən ilhamverici sitatlar.</p>
        <div className="testimonialsGrid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <p className="testimonialQuote">{testimonial.quote}</p>
              <p className="testimonialAuthor">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;