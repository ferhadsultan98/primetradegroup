import React, { useEffect, useState } from 'react';
import './HomeAbout.scss';
import PTGLogo from '../../../../public/assets/ptglogo.png';

const HomeAbout = () => {
  const [year, setYear] = useState(0);
  const [fields, setFields] = useState(0);
  const [products, setProducts] = useState(0);
  const [support, setSupport] = useState(0);

  useEffect(() => {
    const animateCount = (setFunction, target, duration) => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setFunction(Math.floor(start));
      }, 16);
    };

    animateCount(setYear, 2025, 2000); // 2 seconds for 2025
    animateCount(setFields, 5, 1000); // 1 second for 5
    animateCount(setProducts, 100, 1500); // 1.5 seconds for 100
    // For 24/7, we'll keep it static as it's not a number to animate
  }, []);

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
              <span className="stat-number">{year}</span>
              <span className="stat-label">Təsis ili</span>
            </div>
            <div className="homeAboutStat">
              <span className="stat-number">{fields}+</span>
              <span className="stat-label">Sahə</span>
            </div>
            <div className="homeAboutStat">
              <span className="stat-number">{products}+</span>
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