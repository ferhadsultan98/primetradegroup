import React, { useState, useEffect } from 'react';
import './HomeSection.scss';
import CertificateGenerator from '../Catalogue/Catalogue';

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Global Supply Chain Solutions",
      subtitle: "Streamlining Your Operations Worldwide",
      description: "Comprehensive logistics and procurement services designed to optimize your supply chain efficiency and reduce operational costs.",
      backgroundImage: "linear-gradient(135deg, #253f57 0%, #52585a 100%)"
    },
    {
      title: "Strategic Procurement Excellence",
      subtitle: "Smart Sourcing for Better Results", 
      description: "Advanced procurement strategies that deliver value, ensure quality, and maintain sustainable supplier relationships across industries.",
      backgroundImage: "linear-gradient(45deg, #52585a 0%, #253f57 70%, #52585a 100%)"
    },
    {
      title: "Digital Transformation",
      subtitle: "Technology-Driven Supply Chain",
      description: "Leveraging cutting-edge technology and data analytics to create intelligent, responsive, and resilient supply chain networks.",
      backgroundImage: "linear-gradient(90deg, #253f57 0%, #52585a 50%, #253f57 100%)"
    },
    {
      title: "End-to-End Visibility",
      subtitle: "Complete Supply Chain Transparency",
      description: "Real-time tracking and monitoring solutions that provide complete visibility into your supply chain operations from source to delivery.",
      backgroundImage: "linear-gradient(225deg, #52585a 0%, #253f57 60%, #52585a 100%)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="homeSection">
      <div className="sliderContainer">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slideItem ${index === currentSlide ? 'slideActive' : ''}`}
            style={{ background: slide.backgroundImage }}
          >
            <div className="slideOverlay">
              <div className="contentWrapper">
                <div className="slideContent">
                  <h1 className="slideTitle">{slide.title}</h1>
                  <h2 className="slideSubtitle">{slide.subtitle}</h2>
                  <p className="slideDescription">{slide.description}</p>
                  {/* <div className="actionButtons">
                    <button className="primaryButton">Get Started</button>
                    <button className="secondaryButton">Learn More</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className="slideIndicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicatorDot ${index === currentSlide ? 'indicatorActive' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}

    </section>
  );
};

export default HomeSection;