import React from 'react';
import './HomeAbout.scss';
import PTGLogo from '../../../../public/assets/ptglogo.png';

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
          <p className="homeAboutDescription">
            Şirkətimiz müasir texnologiyalardan istifadə edərək, hər bir müştərinin tələblərinə 
            uyğun fərdi yanaşma tətbiq edir. Keyfiyyətli məhsullar, rəqabətli qiymətlər və 
            vaxtında çatdırılma bizim əsas prinsiplərimizdir.
          </p>
          
          <div className="homeAboutStats">
            <div className="homeAboutStat">
              <span className="stat-number">2025</span>
              <span className="stat-label">Təsis ili</span>
            </div>
            <div className="homeAboutStat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Sahə</span>
            </div>
            <div className="homeAboutStat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Məhsul</span>
            </div>
            <div className="homeAboutStat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Dəstək</span>
            </div>
          </div>
        </div>
        
        <div className="homeAboutImageWrapper">
          <img src={PTGLogo} alt="PRIME TRADE GROUP" className="homeAboutImage" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;