import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./HomeSection.scss";
import TestimonialsSection from "./TestimonialSection/TestimonialSection";
import FAQSection from "./FaqSection/FaqSection";
import CTASection from "./CTASection/CTASection";
import ProcessSection from "./ProcessSection/ProcessSection";
import ExpertiseSection from "./HomeAbout/HomeAbout";

const HomeSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t("homeSection.slides.globalSupplyChain.title"),
      subtitle: t("homeSection.slides.globalSupplyChain.subtitle"),
      description: t("homeSection.slides.globalSupplyChain.description"),
      backgroundImage: "linear-gradient(135deg, #253f57 0%, #52585a 100%)",
    },
    {
      title: t("homeSection.slides.strategicProcurement.title"),
      subtitle: t("homeSection.slides.strategicProcurement.subtitle"),
      description: t("homeSection.slides.strategicProcurement.description"),
      backgroundImage:
        "linear-gradient(45deg, #52585a 0%, #253f57 70%, #52585a 100%)",
    },
    {
      title: t("homeSection.slides.digitalTransformation.title"),
      subtitle: t("homeSection.slides.digitalTransformation.subtitle"),
      description: t("homeSection.slides.digitalTransformation.description"),
      backgroundImage:
        "linear-gradient(90deg, #253f57 0%, #52585a 50%, #253f57 100%)",
    },
    {
      title: t("homeSection.slides.endToEndVisibility.title"),
      subtitle: t("homeSection.slides.endToEndVisibility.subtitle"),
      description: t("homeSection.slides.endToEndVisibility.description"),
      backgroundImage:
        "linear-gradient(225deg, #52585a 0%, #253f57 60%, #52585a 100%)",
    },
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
              style={{ background: slide.backgroundImage }}
            >
              <div className="slideOverlay">
                <div className="contentWrapper">
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
