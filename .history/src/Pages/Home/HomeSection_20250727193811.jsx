import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./HomeSection.scss";
import TestimonialsSection from "./TestimonialSection/TestimonialSection";
import FAQSection from "./FaqSection/FaqSection";
import CTASection from "./CTASection/CTASection";
import ProcessSection from "./ProcessSection/ProcessSection";
import ExpertiseSection from "./HomeAbout/HomeAbout";
import Slide1 from '../../../public/assets/Home/slide1.jpg'
import Slide2 from '../../../public/assets/Home/slide2.jpg'
import Slide3 from '../../../public/assets/Home/slide3.jpg'

const HomeSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t("homeSection.slides.globalSupplyChain.title"),
      subtitle: t("homeSection.slides.globalSupplyChain.subtitle"),
      description: t("homeSection.slides.globalSupplyChain.description"),
      image: Slide1,
      alt: t("homeSection.slides.globalSupplyChain.alt"),
    },
    {
      title: t("homeSection.slides.strategicProcurement.title"),
      subtitle: t("homeSection.slides.strategicProcurement.subtitle"),
      description: t("homeSection.slides.strategicProcurement.description"),
      image: Slide2,
      alt: t("homeSection.slides.strategicProcurement.alt"),
    },
    {
      title: t("homeSection.slides.digitalTransformation.title"),
      subtitle: t("homeSection.slides.digitalTransformation.subtitle"),
      description: t("homeSection.slides.digitalTransformation.description"),
      image: Slide3,
      alt: t("homeSection.slides.digitalTransformation.alt"),
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Helmet>
        <title>ANA SƏHİFƏ - PRIME TRADE GROUP MMC</title>
        <meta
          name="description"
          content="PRIME TRADE GROUP MMC-nin qlobal təchizat zəncirinin idarə olunması, strateji satınalma, rəqəmsal transformasiya və digər sahələrdəki peşəkarlığı ilə tanış olun."
        />
        <meta
          name="keywords"
          content="PRIME TRADE GROUP, təchizat zəncirinin idarə olunması, strateji satınalma, rəqəmsal transformasiya, logistika"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="homeSection">
        <div className="sliderContainer">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slideItem ${
                index === currentSlide ? "slideActive" : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="slideImage"
              />
              <div className="slideOverlay">
                <div className="HeroSectioncontentWrapper">
                  <div className="slideContent">
                    <h1 className="slideTitle">{slide.title}</h1>
                    <h2 className="slideSubtitle">{slide.subtitle}</h2>
                    <p className="slideDescription">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ExpertiseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </section>
    </>
  );
};

export default HomeSection;