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
        .aboutUsSection {
          padding: 80px 20px;
          background-color: #f8f9fa;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .aboutUsSection.fadeIn {
          opacity: 1;
          transform: translateY(0);
        }

        .aboutUsContainer {
          max-width: 1200px;
          margin: 0 auto;
        }

        .aboutUsHeader {
          text-align: center;
          margin-bottom: 60px;
        }

        .aboutUsHeadline {
          font-size: 2.5rem;
          font-weight: 700;
          color: #253f57;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .aboutUsMissionText {
          font-size: 1.125rem;
          color: #52585a;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .aboutUsContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .aboutUsImageContainer {
          order: 2;
        }

        .aboutUsImagePlaceholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #253f57 0%, #52585a 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(37, 63, 87, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .aboutUsImagePlaceholder:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(37, 63, 87, 0.25);
        }

        .placeholderContent {
          text-align: center;
          color: white;
        }

        .placeholderIcon {
          font-size: 4rem;
          margin-bottom: 15px;
          display: block;
        }

        .placeholderText {
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .aboutUsTextContainer {
          order: 1;
        }

        .aboutUsTextContent {
          padding-right: 20px;
        }

        .aboutUsSubheading {
          font-size: 2rem;
          font-weight: 600;
          color: #253f57;
          margin-bottom: 25px;
          line-height: 1.3;
        }

        .aboutUsDescription {
          font-size: 1rem;
          color: #52585a;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .aboutUsValues {
          margin-top: 40px;
        }

        .valueItem {
          margin-bottom: 30px;
          padding-left: 20px;
          border-left: 4px solid #253f57;
        }

        .valueTitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #253f57;
          margin-bottom: 8px;
        }

        .valueDescription {
          font-size: 0.95rem;
          color: #52585a;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .aboutUsSection {
            padding: 60px 15px;
          }

          .aboutUsContainer {
            max-width: 100%;
          }

          .aboutUsHeader {
            margin-bottom: 40px;
          }

          .aboutUsHeadline {
            font-size: 2rem;
          }

          .aboutUsMissionText {
            font-size: 1rem;
          }

          .aboutUsContent {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .aboutUsImageContainer {
            order: 1;
          }

          .aboutUsTextContainer {
            order: 2;
          }

          .aboutUsTextContent {
            padding-right: 0;
          }

          .aboutUsImagePlaceholder {
            height: 300px;
          }

          .placeholderIcon {
            font-size: 3rem;
          }

          .placeholderText {
            font-size: 1rem;
          }

          .aboutUsSubheading {
            font-size: 1.5rem;
          }

          .valueItem {
            padding-left: 15px;
            border-left-width: 3px;
          }
        }

        @media (max-width: 480px) {
          .aboutUsSection {
            padding: 40px 10px;
          }

          .aboutUsHeadline {
            font-size: 1.75rem;
          }

          .aboutUsMissionText {
            font-size: 0.95rem;
          }

          .aboutUsContent {
            gap: 30px;
          }

          .aboutUsImagePlaceholder {
            height: 250px;
          }

          .aboutUsSubheading {
            font-size: 1.375rem;
          }

          .aboutUsDescription {
            font-size: 0.95rem;
          }

          .valueTitle {
            font-size: 1.125rem;
          }

          .valueDescription {
            font-size: 0.9rem;
          }
        }
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