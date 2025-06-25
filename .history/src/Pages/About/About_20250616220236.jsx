import React from "react";
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
  Mail,
} from "lucide-react";
import "./About.scss";
const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <Sect
      {/* Mission Section */}
      <section className="missionSection">
        <div className="containerWrapper">
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
    </div>
  );
};

export default AboutUs;
