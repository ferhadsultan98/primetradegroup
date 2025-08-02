import React from 'react';
import './HomeAbout.scss';
import PTGLogo from '../../../../public/assets/'
const HomeAbout = () => {
  return (
    <div className="homeAboutContainer">
      <div className="containerWrapper">
        <div className="companyOverviewSection">
          <h2 className="sectionTitle">Professional Audit & Consulting Services</h2>
          <div className="overviewContent">
            <img
              src="path-to-your-image.jpg"
              alt="Company Building"
              className="companyImage"
            />
            <p className="overviewText">
              2025-ci ildən fəaliyyət göstərən PRIME TRADE GROUP MMC müştərilərinə təmizlik
              məhsulları, mebel, məişət və İT avadanlıqları, santexnika və iş geyimləri üzrə
              etibarlı və keyfiyyətli təchizat xidmətləri təqdim edir. Peşəkar komandamızla
              operativ və sərfəli həllər üçün yanınızdayıq.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;