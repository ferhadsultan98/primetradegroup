import React from 'react';
import { 
  FaTruck, 
  FaWarehouse, 
  FaChartLine, 
  FaHandshake, 
  FaGlobe, 
  FaShieldAlt,
  FaArrowRight,
  FaPlay
} from 'react-icons/fa';
import './HomeSection.scss';

const HomeSection = () => {
  return (
    <section className="homeSection">
      <div className="heroContainer">
        <div className="heroContent">
          <div className="heroText">
            <h1 className="heroTitle">
              Streamline Your Supply Chain Excellence
            </h1>
            <p className="heroDescription">
              Transform your procurement processes with our cutting-edge solutions. 
              From sourcing to delivery, we optimize every link in your supply chain.
            </p>
            <div className="heroButtons">
              <button className="primaryButton">
                Get Started <FaArrowRight className="buttonIcon" />
              </button>
              <button className="secondaryButton">
                <FaPlay className="playIcon" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="heroVisual">
            <div className="visualGrid">
              <div className="visualCard cardLarge">
                <FaGlobe className="cardIcon" />
              </div>
              <div className="visualCard cardMedium">
                <FaTruck className="cardIcon" />
              </div>
              <div className="visualCard cardSmall">
                <FaWarehouse className="cardIcon" />
              </div>
              <div className="visualCard cardMedium">
                <FaChartLine className="cardIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featuresSection">
        <div className="featuresContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Core Capabilities</h2>
            <p className="sectionSubtitle">
              Comprehensive solutions for modern supply chain management
            </p>
          </div>
          
          <div className="featuresGrid">
            <div className="featureCard">
              <div className="featureIcon">
                <FaTruck />
              </div>
              <h3 className="featureTitle">Logistics Management</h3>
              <p className="featureDescription">
                Optimize transportation routes and reduce delivery costs with intelligent logistics planning.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <FaWarehouse />
              </div>
              <h3 className="featureTitle">Inventory Control</h3>
              <p className="featureDescription">
                Real-time inventory tracking and automated reordering to prevent stockouts.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <FaHandshake />
              </div>
              <h3 className="featureTitle">Supplier Relations</h3>
              <p className="featureDescription">
                Build stronger partnerships with comprehensive supplier management tools.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <FaChartLine />
              </div>
              <h3 className="featureTitle">Analytics Dashboard</h3>
              <p className="featureDescription">
                Data-driven insights to optimize performance and identify opportunities.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <FaShieldAlt />
              </div>
              <h3 className="featureTitle">Risk Management</h3>
              <p className="featureDescription">
                Proactive risk assessment and mitigation strategies for supply chain resilience.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <FaGlobe />
              </div>
              <h3 className="featureTitle">Global Network</h3>
              <p className="featureDescription">
                Seamless integration with worldwide suppliers and distribution networks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="statsSection">
        <div className="statsContainer">
          <div className="statItem">
            <div className="statNumber">500+</div>
            <div className="statLabel">Global Partners</div>
          </div>
          <div className="statItem">
            <div className="statNumber">99.9%</div>
            <div className="statLabel">Uptime</div>
          </div>
          <div className="statItem">
            <div className="statNumber">2M+</div>
            <div className="statLabel">Transactions</div>
          </div>
          <div className="statItem">
            <div className="statNumber">24/7</div>
            <div className="statLabel">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;