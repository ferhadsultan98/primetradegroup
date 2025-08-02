import React from 'react';
import './HomeAbout.scss';
import placeholderImage from ''

const HomeAbout = () => {
  return (
    <section className="homeAboutSection">
      <div className="homeAboutContainer">
        <div className="homeAboutContent">
          <h2 className="homeAboutTitle">Haqqımızda</h2>
          <p className="homeAboutDescription">
            2025-ci ildən fəaliyyət göstərən PRIME TRADE GROUP MMC müştərilərinə təmizlik
            məhsulları, mebel, məişət və İT avadanlıqları, santexnika və iş geyimləri üzrə
            etibarlı və keyfiyyətli təchizat xidmətləri təqdim edir. Peşəkar komandamızla
            operativ və sərfəli həllər üçün yanınızdayıq.
          </p>
        </div>
        <div className="homeAboutImageWrapper">
          <img src={placeholderImage} alt="PRIME TRADE GROUP" className="homeAboutImage" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;