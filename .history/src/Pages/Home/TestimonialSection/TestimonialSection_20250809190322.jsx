import React from 'react';
import './TestimonialSection.scss';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Keyfiyyət təsadüf deyil, daim ağıllı səylərin nəticəsidir.",
      author: "John Ruskin",
      image: "/path/to/john-ruskin.jpg"
    },
    {
      quote: "Etibar – qazanılması çətin, itirilməsi isə ani olan ən dəyərli kapitaldır.",
      author: "Warren Buffett",
      image: "/path/to/warren-buffett.jpg"
    },
    {
      quote: "Təchizat zənciri işləri çox mürəkkəbdir.",
      author: "Elon Musk",
      image: "/path/to/elon-musk.jpg"
    }
  ];

  return (
    <section className="testimonialsSection">
      <div className="testimonialsSectionContentWrapper">
        <h2 className="sectionTitle">Tanınmış Şəxslərin Fikirləri</h2>
        <p className="sectionDescription">Sənaye liderlərindən ilhamverici sitatlar.</p>
        <div className="testimonialsGrid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.author} profile`} 
                className="authorImage"
              />
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