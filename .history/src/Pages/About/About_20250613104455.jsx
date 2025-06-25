import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
     
      `}</style>
      <section 
        ref={sectionRef} 
        className={`aboutUsSection ${isVisible ? 'fadeIn' : ''}`}
      >
        <div className="aboutUsContainer">
          <div className="aboutUsHeader">
            <h2 className="aboutUsHeadline">About Our Company</h2>
            <p className="aboutUsMissionText">
              We are a leading supply chain and procurement solutions provider, dedicated to optimizing 
              global logistics networks and delivering exceptional value through innovative technology, 
              strategic partnerships, and sustainable practices that drive efficiency and growth for our clients.
            </p>
          </div>
          
          <div className="aboutUsContent">
            <div className="aboutUsImageContainer">
              <div className="aboutUsImagePlaceholder">
                <div className="placeholderContent">
                  <div className="placeholderIcon">📦</div>
                  <span className="placeholderText">Supply Chain Excellence</span>
                </div>
              </div>
            </div>
            
            <div className="aboutUsTextContainer">
              <div className="aboutUsTextContent">
                <h3 className="aboutUsSubheading">Our Mission & Values</h3>
                <p className="aboutUsDescription">
                  With over two decades of experience in supply chain management, we've built our reputation 
                  on reliability, innovation, and client-focused solutions. Our comprehensive approach combines 
                  advanced analytics, strategic sourcing, and sustainable procurement practices to create 
                  value at every stage of the supply chain.
                </p>
                <p className="aboutUsDescription">
                  We believe in fostering long-term partnerships with our clients, suppliers, and stakeholders. 
                  Our commitment to transparency, ethical business practices, and continuous improvement drives 
                  us to exceed expectations and deliver measurable results that support your organization's 
                  growth and success.
                </p>
                
                <div className="aboutUsValues">
                  <div className="valueItem">
                    <h4 className="valueTitle">Innovation</h4>
                    <p className="valueDescription">
                      Leveraging cutting-edge technology to streamline processes and enhance visibility 
                      across your entire supply chain ecosystem.
                    </p>
                  </div>
                  <div className="valueItem">
                    <h4 className="valueTitle">Reliability</h4>
                    <p className="valueDescription">
                      Consistent delivery of high-quality solutions with 99.8% uptime and 24/7 support 
                      to ensure your operations never skip a beat.
                    </p>
                  </div>
                  <div className="valueItem">
                    <h4 className="valueTitle">Sustainability</h4>
                    <p className="valueDescription">
                      Committed to environmentally responsible practices and helping clients achieve 
                      their sustainability goals through optimized logistics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;