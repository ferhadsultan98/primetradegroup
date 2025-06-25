import React, { useState, useEffect } from 'react';
import './Home.scss';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Optimize Your Supply Chain",
      subtitle: "Transform your business with advanced supply chain management solutions",
      description: "Streamline operations, reduce costs, and enhance efficiency with our comprehensive supply chain optimization services.",
      buttonText: "Get Started"
    },
    {
      title: "Strategic Procurement Excellence",
      subtitle: "Drive value through intelligent procurement strategies",
      description: "Maximize savings and minimize risks with our data-driven procurement solutions and vendor management expertise.",
      buttonText: "Learn More"
    },
    {
      title: "Global Logistics Solutions",
      subtitle: "Seamless logistics management worldwide",
      description: "Connect your business globally with our integrated logistics platform and worldwide network of partners.",
      buttonText: "Explore Services"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="heroSection">
      <div className="heroSlider">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`heroSlide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="heroOverlay"></div>
            <div className="heroContent">
              <div className="heroText">
                <h1 className="heroTitle">{slide.title}</h1>
                <h2 className="heroSubtitle">{slide.subtitle}</h2>
                <p className="heroDescription">{slide.description}</p>
                <div className="heroButtons">
                  <button className="ctaButton primary">{slide.buttonText}</button>
                  <button className="ctaButton secondary">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="sliderControls">
        <button className="sliderButton prev" onClick={prevSlide} aria-label="Previous slide">
          ‹
        </button>
        <div className="sliderDots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`sliderDot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="sliderButton next" onClick={nextSlide} aria-label="Next slide">
          ›
        </button>
      </div>
    </section>
  );
};

export default Home;