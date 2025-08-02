import React from 'react';
import './HomeAbout.scss';
import companyImage from '../../../'

const HomeAbout = () => {
  return (
    <div className="homeAboutContainer">
      <div className="containerWrapper">
        <section className="companyOverviewSection">
          <h2 className="sectionTitle">Haqqımızda</h2>
          <div className="overviewContent">
            <img
              src={companyImage}
              alt="PRIME TRADE GROUP MMC komandası və məhsulları"
              className="companyImage"
            />
            <p className="overviewText">
              2025-ci ildən fəaliyyət göstərən PRIME TRADE GROUP MMC müştərilərinə təmizlik
              məhsulları, mebel, məişət və İT avadanlıqları, santexnika və iş geyimləri üzrə
              etibarlı və keyfiyyətli təchizat xidmətləri təqdim edir. Peşəkar komandamızla
              operativ və sərfəli həllər üçün yanınızdayıq.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeAbout;