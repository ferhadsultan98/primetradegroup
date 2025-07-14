import React from "react";
import { Helmet } from "react-helmet";
import {
  Zap,
  DollarSign,
  Network,
  ThumbsUp,
  Headphones,
  Lightbulb,
  Star,
  Users2,
  Building2,
  Timer,
  ShieldCheck,
  TrendingDown
} from "lucide-react";
import "./WhyUs.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const WhyUs = () => {
  return (
    <div className="whyUsContainer">
      {/* SEO Meta Tags with Helmet */}
      <Helmet>
        <title>WHY CHOOSE US - PRIME TRADE GROUP MMC</title>
        <meta 
          name="description" 
          content="Discover why PRIME TRADE GROUP MMC is your trusted procurement partner, offering cost reduction, global supplier networks, AI-powered solutions, and 98% client satisfaction." 
        />
        <meta 
          name="keywords" 
          content="strategic procurement, cost reduction, global supplier network, procurement efficiency, AI-powered procurement, risk mitigation, 24/7 support, client satisfaction, supply chain cost savings, automated procurement solutions, global procurement services, trusted procurement partner, ISO 9001 certified procurement, Fortune 500 procurement" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Main Benefits Section */}
      <section className="benefitsSection">
        <div className="containerWrapper">
          <SectionHeader title="Why Choose Us" subtitle="Your Strategic Procurement Partner"/>
          <div className="benefitsGrid">
            <div className="benefitCard">
              <DollarSign className="benefitIcon" />
              <h3 className="benefitTitle">Cost Reduction</h3>
              <p className="benefitText">
                Our strategic sourcing approach delivers average cost savings of 
                15-30% while maintaining superior quality standards across all categories.
              </p>
            </div>
            <div className="benefitCard">
              <Timer className="benefitIcon" />
              <h3 className="benefitTitle">Speed & Efficiency</h3>
              <p className="benefitText">
                Streamlined processes and automated workflows reduce procurement 
                cycle times by up to 60%, accelerating your time-to-market.
              </p>
            </div>
            <div className="benefitCard">
              <Network className="benefitIcon" />
              <h3 className="benefitTitle">Global Network</h3>
              <p className="benefitText">
                Access to our extensive supplier network spanning 80+ countries 
                ensures optimal sourcing options for any requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="advantagesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">What Sets Us Apart</h2>
          <div className="advantagesGrid">
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Lightbulb className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">Innovation First</h4>
              <ul className="advantageList">
                <li>AI-powered supplier matching</li>
                <li>Predictive demand planning</li>
                <li>Automated contract management</li>
              </ul>
            </div>

            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <ShieldCheck className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">Risk Mitigation</h4>
              <ul className="advantageList">
                <li>Comprehensive supplier audits</li>
                <li>Multi-tier supply chain visibility</li>
                <li>Proactive risk assessment</li>
              </ul>
            </div>

            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Headphones className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">24/7 Support</h4>
              <ul className="advantageList">
                <li>Dedicated account managers</li>
                <li>Round-the-clock monitoring</li>
                <li>Emergency response protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stats */}
      <section className="successSection">
        <div className="containerWrapper">
          <div className="successGrid">
            <div className="successCard">
              <TrendingDown className="successIcon" />
              <div className="successNumber">25%</div>
              <div className="successLabel">Average Cost Reduction</div>
            </div>
            <div className="successCard">
              <Zap className="successIcon" />
              <div className="successNumber">60%</div>
              <div className="successLabel">Faster Procurement Cycles</div>
            </div>
            <div className="successCard">
              <ThumbsUp className="successIcon" />
              <div className="successNumber">98%</div>
              <div className="successLabel">Client Satisfaction Rate</div>
            </div>
            <div className="successCard">
              <Building2 className="successIcon" />
              <div className="successNumber">500+</div>
              <div className="successLabel">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trustSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Trusted by Industry Leaders</h2>
          <div className="trustGrid">
            <div className="trustCard">
              <Users2 className="trustIcon" />
              <h4 className="trustTitle">Fortune 500 Companies</h4>
              <p className="trustText">
                Over 150 Fortune 500 companies trust us with their strategic 
                procurement initiatives across diverse industries.
              </p>
            </div>
            <div className="trustCard">
              <Star className="trustIcon" />
              <h4 className="trustTitle">Industry Recognition</h4>
              <p className="trustText">
                Award-winning procurement solutions recognized by leading 
                industry associations and business publications.
              </p>
            </div>
            <div className="trustCard">
              <ShieldCheck className="trustIcon" />
              <h4 className="trustTitle">Certified Excellence</h4>
              <p className="trustText">
                ISO 9001, SOC 2, and industry-specific certifications ensure 
                the highest standards of quality and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;