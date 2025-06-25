import React from 'react';
import { 
  Truck, 
  Globe, 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="aboutContainer">
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <div className="heroIconWrapper">
            <Globe className="heroIcon" />
          </div>
          <h1 className="heroTitle">Global Supply Chain Excellence</h1>
          <p className="heroSubtitle">Connecting businesses worldwide through innovative procurement solutions</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="missionSection">
        <div className="containerWrapper">
          <div className="missionGrid">
            <div className="missionCard">
              <Target className="missionIcon" />
              <h3 className="missionTitle">Our Mission</h3>
              <p className="missionText">
                To revolutionize global supply chain management through cutting-edge technology 
                and strategic partnerships that drive efficiency and sustainability.
              </p>
            </div>
            <div className="missionCard">
              <Award className="missionIcon" />
              <h3 className="missionTitle">Our Vision</h3>
              <p className="missionText">
                To be the world's most trusted supply chain partner, enabling businesses 
                to achieve operational excellence and competitive advantage.
              </p>
            </div>
            <div className="missionCard">
              <Shield className="missionIcon" />
              <h3 className="missionTitle">Our Values</h3>
              <p className="missionText">
                Integrity, innovation, and reliability form the foundation of every 
                partnership we build and every solution we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="statsSection">
        <div className="containerWrapper">
          <div className="statsGrid">
            <div className="statCard">
              <TrendingUp className="statIcon" />
              <div className="statNumber">500+</div>
              <div className="statLabel">Global Partners</div>
            </div>
            <div className="statCard">
              <Truck className="statIcon" />
              <div className="statNumber">10M+</div>
              <div className="statLabel">Shipments Managed</div>
            </div>
            <div className="statCard">
              <Users className="statIcon" />
              <div className="statNumber">50+</div>
              <div className="statLabel">Countries Served</div>
            </div>
            <div className="statCard">
              <Clock className="statIcon" />
              <div className="statNumber">15+</div>
              <div className="statLabel">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="servicesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Our Expertise</h2>
          <div className="servicesGrid">
            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Truck className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Logistics Management</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>End-to-end tracking</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Route optimization</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Real-time updates</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Globe className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Global Procurement</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Supplier network</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Quality assurance</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Cost optimization</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Shield className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Risk Management</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Compliance monitoring</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Supply chain security</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Contingency planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contactSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Connect With Us</h2>
          <div className="contactGrid">
            <div className="contactCard">
              <MapPin className="contactIcon" />
              <h4 className="contactTitle">Global Headquarters</h4>
              <p className="contactText">International Trade Center<br />Supply Chain District</p>
            </div>
            <div className="contactCard">
              <Phone className="contactIcon" />
              <h4 className="contactTitle">24/7 Support</h4>
              <p className="contactText">Operations Center<br />Always Available</p>
            </div>
            <div className="contactCard">
              <Mail className="contactIcon" />
              <h4 className="contactTitle">Partnership Inquiries</h4>
              <p className="contactText">Business Development<br />Strategic Alliances</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .aboutContainer {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .heroSection {
          background: linear-gradient(135deg, #253f57 0%, #52585a 100%);
          color: white;
          padding: 120px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .heroSection::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(37, 63, 87, 0.1);
          backdrop-filter: blur(1px);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .heroIconWrapper {
          margin-bottom: 30px;
        }

        .heroIcon {
          width: 80px;
          height: 80px;
          color: rgba(255, 255, 255, 0.9);
        }

        .heroTitle {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .heroSubtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        .containerWrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .missionSection {
          padding: 100px 0;
          background: #f8f9fa;
        }

        .missionGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .missionCard {
          background: white;
          padding: 50px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(37, 63, 87, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 4px solid #253f57;
        }

        .missionCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(37, 63, 87, 0.15);
        }

        .missionIcon {
          width: 60px;
          height: 60px;
          color: #253f57;
          margin-bottom: 25px;
        }

        .missionTitle {
          font-size: 1.5rem;
          color: #253f57;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .missionText {
          color: #666;
          font-size: 1rem;
          line-height: 1.7;
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
        }

        .statCard {
          text-align: center;
          padding: 30px;
        }

        .statIcon {
          width: 50px;
          height: 50px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }

        .statNumber {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }

        .statLabel {
          font-size: 1rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .servicesSection {
          padding: 100px 0;
          background: white;
        }

        .sectionTitle {
          text-align: center;
          font-size: 2.5rem;
          color: #253f57;
          margin-bottom: 60px;
          font-weight: 600;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .serviceCard {
          background: #f8f9fa;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease;
          border: 2px solid transparent;
        }

        .serviceCard:hover {
          transform: translateY(-3px);
          border-color: #253f57;
        }

        .serviceIconWrapper {
          background: #253f57;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }

        .serviceIcon {
          width: 40px;
          height: 40px;
          color: white;
        }

        .serviceTitle {
          font-size: 1.3rem;
          color: #253f57;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .serviceFeatures {
          text-align: left;
        }

        .featureItem {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          color: #666;
        }

        .featureIcon {
          width: 18px;
          height: 18px;
          color: #253f57;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .contactSection {
          padding: 100px 0;
          background: #52585a;
          color: white;
        }

        .contactSection .sectionTitle {
          color: white;
        }

        .contactGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .contactCard {
          text-align: center;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .contactCard:hover {
          transform: translateY(-3px);
        }

        .contactIcon {
          width: 50px;
          height: 50px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
        }

        .contactTitle {
          font-size: 1.2rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .contactText {
          opacity: 0.8;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .heroTitle {
            font-size: 2.5rem;
          }

          .heroSubtitle {
            font-size: 1.1rem;
          }

          .heroIcon {
            width: 60px;
            height: 60px;
          }

          .missionGrid {
            grid-template-columns: 1fr;
          }

          .statsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .servicesGrid {
            grid-template-columns: 1fr;
          }

          .contactGrid {
            grid-template-columns: 1fr;
          }

          .sectionTitle {
            font-size: 2rem;
          }

          .missionSection,
          .servicesSection,
          .contactSection {
            padding: 60px 0;
          }

          .heroSection {
            padding: 80px 20px;
          }
        }

        @media (max-width: 480px) {
          .heroTitle {
            font-size: 2rem;
          }

          .heroSubtitle {
            font-size: 1rem;
          }

          .statsGrid {
            grid-template-columns: 1fr;
          }

          .statNumber {
            font-size: 2.5rem;
          }

          .missionCard,
          .serviceCard,
          .contactCard {
            padding: 30px 20px;
          }

          .containerWrapper {
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;