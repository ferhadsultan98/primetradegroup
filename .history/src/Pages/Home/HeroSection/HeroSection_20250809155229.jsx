import React, { useState, useEffect } from "react";
import Slide1 from "../../../../public/assets/Home/slide1.jpg";
import Slide2 from "../../../../public/assets/Home/slide2.jpg";
import Slide3 from "../../../../public/assets/Home/slide3.jpg";
import { useTranslation } from "react-i18next";
import './HeroSection.scss';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: t("homeSection.slides.globalSupplyChain.title"),
      subtitle: t("homeSection.slides.globalSupplyChain.subtitle"),
      image: Slide1,
      alt: t("homeSection.slides.globalSupplyChain.alt"),
    },
    {
      title: t("homeSection.slides.strategicProcurement.title"),
      subtitle: t("homeSection.slides.strategicProcurement.subtitle"),
      image: Slide2,
      alt: t("homeSection.slides.strategicProcurement.alt"),
    },
    {
      title: t("homeSection.slides.digitalTransformation.title"),
      subtitle: t("homeSection.slides.digitalTransformation.subtitle"),
      image: Slide3,
      alt: t("homeSection.slides.digitalTransformation.alt"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="sliderContainer">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slideItem ${index === currentSlide ? "slideActive" : ""}`}
        >
          <img src={slide.image} alt={slide.alt} className="slideImage" />
          <div className="slideOverlay">
            <div className="HeroSectioncontentWrapper">
              <div className="slideContent">
                <h1 className="slideTitle">{slide.title}</h1>
                <h2 className="slideSubtitle">{slide.subtitle}</h2>
                <div className="buttonGroup">
                  <button className="servicesButton"></button>
                  <button className="contactButton">{t("homeSection.buttons.contact")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;