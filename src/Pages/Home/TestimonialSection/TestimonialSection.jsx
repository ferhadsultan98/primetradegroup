import React from 'react';
import './TestimonialSection.scss';

const TestimonialsSection = () => {
  const quotes = [
    {
      text: "Effektiv satınalma təchizat zəncirinin uğurudur.",
      author: "Jack Ma",
      image: "https://example.com/jack-ma.jpg"
    },
    {
      text: "Keyfiyyətli təchizat biznesin davamlılığını təmin edir.",
      author: "Elon Musk",
      image: "https://example.com/elon-musk.jpg"
    },
    {
      text: "Satınalmada innovasiya rəqabət üstünlüyü yaradır.",
      author: "Jeff Bezos",
      image: "https://example.com/jeff-bezos.jpg"
    }
  ];

  return (
    <section className="testimonialsSection">
      <div className="contentWrapper">
        <h2 className="sectionTitle">Məşhurların satınalma və təchizatla bağlı fikirləri</h2>
        <p className="sectionDescription">Sənayedəki tanınmış simalardan satınalma və təchizat prosesləri haqqında ilhamverici sözlər.</p>
        <div className="testimonialsGrid">
          {quotes.map((quote, index) => (
            <div key={index} className="testimonialCard">
              <img src={quote.image} alt={quote.author} className="authorImage" />
              <p className="testimonialQuote">{quote.text}</p>
              <p className="testimonialAuthor">{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;