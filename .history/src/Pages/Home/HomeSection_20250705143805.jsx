import React, { useState, useEffect } from 'react';
import './HomeSection.scss';
import Catalog from '../Catalogue/Catalogue';

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

  const expertiseItems = [
    { title: "Tender Management", description: "Streamlined processes for efficient tender creation, evaluation, and supplier selection." },
    { title: "Supplier Optimization", description: "Building strong, sustainable relationships with top-tier suppliers globally." },
    { title: "Cost Reduction", description: "Strategic sourcing to minimize costs without compromising quality." },
    { title: "Risk Mitigation", description: "Proactive strategies to identify and manage supply chain risks." }
  ];

  const caseStudies = [
    { title: "Global Retail Chain", description: "Reduced logistics costs by 20% through optimized supplier networks." },
    { title: "Manufacturing Giant", description: "Implemented real-time tracking for 100% supply chain visibility." },
    { title: "Energy Sector", description: "Streamlined tender processes, saving 15% on procurement costs." }
  ];

  const processSteps = [
    { step: "1", title: "Analysis", description: "Assess your current supply chain and procurement needs." },
    { step: "2", title: "Strategy", description: "Develop tailored solutions for maximum efficiency." },
    { step: "3", title: "Execution", description: "Implement strategies with precision and transparency." },
    { step: "4", title: "Optimization", description: "Continuously monitor and improve performance." }
  ];

  const testimonials = [
    { quote: "Transformed our supply chain with unmatched efficiency.", author: "John Doe, CEO" },
    { quote: "Their tender management saved us millions annually.", author: "Jane Smith, Procurement Lead" },
    { quote: "Innovative solutions for a complex global network.", author: "Mike Brown, Operations Director" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Hero Slider Section */}
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
                    <div className="actionButtons">
                      <button className="primaryButton">Get Started</button>
                      <button className="secondaryButton">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
   
      </section>

      {/* Our Expertise Section */}
      <section className="expertiseSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">Our Expertise</h2>
          <p className="sectionDescription">Delivering tailored solutions for procurement and supply chain excellence.</p>
          <div className="expertiseGrid">
            {expertiseItems.map((item, index) => (
              <div key={index} className="expertiseCard">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardDescription">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="caseStudiesSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">Case Studies</h2>
          <p className="sectionDescription">Real-world success stories from our clients.</p>
          <div className="caseStudiesGrid">
            {caseStudies.map((study, index) => (
              <div key={index} className="caseStudyCard">
                <h3 className="cardTitle">{study.title}</h3>
                <p className="cardDescription">{study.description}</p>
                <button className="secondaryButton">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="processSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">Our Process</h2>
          <p className="sectionDescription">A proven approach to deliver results.</p>
          <div className="processGrid">
            {processSteps.map((step, index) => (
              <div key={index} className="processCard">
                <div className="stepNumber">{step.step}</div>
                <h3 className="cardTitle">{step.title}</h3>
                <p className="cardDescription">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonialsSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">What Our Clients Say</h2>
          <p className="sectionDescription">Trusted by industry leaders worldwide.</p>
          <div className="testimonialsGrid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonialCard">
                <p className="testimonialQuote">“{testimonial.quote}”</p>
                <p className="testimonialAuthor">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Book
    </>
  );
};

export default HomeSection;