import React from 'react';
import './HomeAbout.scss';

const HomeAbout = () => {
  return (
    <div className="homeAboutContainer">
      <div className="containerWrapper">
        <div className="companyOverviewSection">
          <span className="whoWeAre">WHO WE ARE</span>
          <h2 className="sectionTitle">Professional Audit & Consulting Services</h2>
          <div className="overviewContent">
            <img
           src={PTGLogo}
              alt="Company Building"
              className="companyImage"
            />
            <p className="overviewText">
              We provide comprehensive audit, accounting and consulting services in
              accordance with international standards. Our expert team ensures your business
              meets all regulatory requirements while optimizing financial performance.
            </p>
            <div className="stats">
              <div className="statItem">250+ <span>Happy Clients</span></div>
              <div className="statItem">98% <span>Success Rate</span></div>
              <div className="statItem">12+ <span>Years Experience</span></div>
            </div>
            <a href="#" className="learnMoreBtn">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;