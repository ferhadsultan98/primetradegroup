import React from 'react';
import { Zap, Shield, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="aboutContainer">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .aboutContainer {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #253f57;
        }

        .heroSection {
          background: linear-gradient(135deg, #253f57, #52585a);
          color: white;
          padding: 100px 0;
          text-align: center;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heroContent {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .heroTitle {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .heroSubtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 0;
        }

        .companyOverview {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .containerWrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contentGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .textContent {
          padding-right: 20px;
        }

        .sectionTitle {
          font-size: 2.5rem;
          color: #253f57;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #52585a;
          margin-bottom: 20px;
        }

        .imageContent {
          padding-left: 20px;
        }

        .placeholderImage {
          background: linear-gradient(45deg, #253f57, #52585a);
          height: 300px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .valuesSection {
          padding: 80px 0;
          background: white;
        }

        .sectionTitleCenter {
          font-size: 2.5rem;
          color: #253f57;
          text-align: center;
          margin-bottom: 60px;
          font-weight: 600;
        }

        .valuesGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .valueCard {
          background: #f8f9fa;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }

        .valueCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(37, 63, 87, 0.15);
          border-color: #253f57;
        }

        .valueIcon {
          width: 70px;
          height: 70px;
          background: #253f57;
          border-radius: 50%;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .valueTitle {
          font-size: 1.4rem;
          color: #253f57;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .valueDescription {
          color: #52585a;
          line-height: 1.6;
        }

        .statsSection {
          padding: 80px 0;
          background: #253f57;
          color: white;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .statItem {
          padding: 20px;
        }

        .statNumber {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }

        .statLabel {
          font-size: 1.1rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .servicesSection {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }

        .serviceCard {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .serviceCard:hover {
          transform: translateY(-3px);
        }

        .serviceTitle {
          font-size: 1.3rem;
          color: #253f57;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .serviceDescription {
          color: #52585a;
          line-height: 1.6;
        }

        .contactSection {
          padding: 80px 0;
          background: #52585a;
          color: white;
          text-align: center;
        }

        .contactTitle {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .contactDescription {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .heroTitle {
            font-size: 2.5rem;
          }

          .heroSubtitle {
            font-size: 1.1rem;
          }

          .contentGrid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .textContent,
          .imageContent {
            padding: 0;
          }

          .sectionTitle,
          .sectionTitleCenter {
            font-size: 2rem;
          }

          .valuesGrid,
          .servicesGrid {
            grid-template-columns: 1fr;
          }

          .statsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .statNumber {
            font-size: 2.5rem;
          }

          .heroSection,
          .companyOverview,
          .valuesSection,
          .statsSection,
          .servicesSection,
          .contactSection {
            padding: 60px 0;
          }
        }

        @media (max-width: 480px) {
          .heroTitle {
            font-size: 2rem;
          }

          .containerWrapper {
            padding: 0 15px;
          }

          .valueCard,
          .serviceCard {
            padding: 30px 20px;
          }

          .statsGrid {
            grid-template-columns: 1fr;
          }

          .sectionTitle,
          .sectionTitleCenter {
            font-size: 1.8rem;
          }
        }
      `}</style>
    <div className="aboutContainer">
      <header className="heroSection">
        <div className="heroContent">
          <h1 className="heroTitle">About Our Company</h1>
          <p className="heroSubtitle">Leading Excellence in Supply Chain & Procurement Solutions</p>
        </div>
      </header>

      <section className="companyOverview">
        <div className="containerWrapper">
          <div className="contentGrid">
            <div className="textContent">
              <h2 className="sectionTitle">Who We Are</h2>
              <p className="description">
                We are a premier supply chain and procurement company dedicated to optimizing 
                global logistics and sourcing solutions. With over two decades of industry 
                experience, we help businesses streamline their operations and reduce costs 
                while maintaining the highest quality standards.
              </p>
              <p className="description">
                Our comprehensive approach combines cutting-edge technology with deep industry 
                expertise to deliver measurable results for our clients across various sectors.
              </p>
            </div>
            <div className="imageContent">
              <div className="placeholderImage">
                <span className="imageText">Supply Chain Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="valuesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitleCenter">Our Core Values</h2>
          <div className="valuesGrid">
            <div className="valueCard">
              <div className="valueIcon">
                <Zap size={32} />
              </div>
              <h3 className="valueTitle">Efficiency</h3>
              <p className="valueDescription">
                Optimizing processes to deliver maximum value with minimal waste
              </p>
            </div>
            <div className="valueCard">
              <div className="valueIcon">
                <Shield size={32} />
              </div>
              <h3 className="valueTitle">Reliability</h3>
              <p className="valueDescription">
                Consistent delivery and dependable partnerships you can trust
              </p>
            </div>
            <div className="valueCard">
              <div className="valueIcon">
                <Globe size={32} />
              </div>
              <h3 className="valueTitle">Global Reach</h3>
              <p className="valueDescription">
                Worldwide network enabling seamless international operations
              </p>
            </div>
            <div className="valueCard">
              <div className="valueIcon">
                <Lightbulb size={32} />
              </div>
              <h3 className="valueTitle">Innovation</h3>
              <p className="valueDescription">
                Leveraging latest technology to stay ahead of market demands
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="statsSection">
        <div className="containerWrapper">
          <div className="statsGrid">
            <div className="statItem">
              <div className="statNumber">500+</div>
              <div className="statLabel">Global Clients</div>
            </div>
            <div className="statItem">
              <div className="statNumber">20+</div>
              <div className="statLabel">Years Experience</div>
            </div>
            <div className="statItem">
              <div className="statNumber">50+</div>
              <div className="statLabel">Countries Served</div>
            </div>
            <div className="statItem">
              <div className="statNumber">99.8%</div>
              <div className="statLabel">On-Time Delivery