import React from "react";
import { Helmet } from "react-helmet";
import {
  Truck,
  Globe,
  Users,
  Award,
  Target,
  Shield,
  CheckCircle,
} from "lucide-react";
import "./About.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <Helmet>
        <title>About Us - PRIME TRADE GROUP MMC</title>
        <meta
          name="description"
          content="Learn about PRIME TRADE GROUP MMC, our mission, vision, values, and expertise in global supply chain management, logistics, procurement, and risk management."
        />
        <meta
          name="keywords"
          content="PRIME TRADE GROUP, supply chain management, logistics, global procurement, risk management"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Mission Section */}
      <section className="missionSection">
        <div className="containerWrapper">
          <SectionHeader
            title="About Us"
            subtitle="Get to know who we are and what we do"
          />
          <div className="missionGrid">
            <div className="missionCard">
              <Target className="missionIcon" />
              <h3 className="missionTitle">Our Mission</h3>
              <p className="missionText">
                To revolutionize global supply chain management through
                cutting-edge technology and strategic partnerships that drive
                efficiency and sustainability.
              </p>
            </div>
            <div className="missionCard">
              <Award className="missionIcon" />
              <h3 className="missionTitle">Our Vision</h3>
              <p className="missionText">
                To be the world's most trusted supply chain partner, enabling
                businesses to achieve operational excellence and competitive
                advantage.
              </p>
            </div>
            <div className="missionCard">
              <Shield className="missionIcon" />
              <h3 className="missionTitle">Our Values</h3>
              <p className="missionText">
                Integrity, innovation, and reliability form the foundation of
                every partnership we build and every solution we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="companyOverviewSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Who We Are</h2>
          <div className="overviewContent">
            <p className="overviewText">
              As PRIME TRADE GROUP MMC, we procure goods directly from importing
              and manufacturing companies across various sectors, offering them to
              our clients under competitive terms. Our company stands out with a
              diverse product portfolio, a flexible service mechanism, and a
              commitment to long-term partnerships.
            </p>
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
    </div>
  );
};

export default AboutUs;