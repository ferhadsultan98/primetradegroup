import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./HomeSection.scss";
import TestimonialsSection from "./TestimonialSection/TestimonialSection";
import FAQSection from "./FaqSection/FaqSection";
import CTASection from "./CTASection/CTASection";
import ProcessSection from "./ProcessSection/ProcessSection";
import ExpertiseSection from "./HomeAbout/HomeAbout";
import SlideOne from '../../../public/assets/Home/slide1.jpg'
const HomeSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "path/to/image1.jpg",
      alt: t("homeSection.slides.globalSupplyChain.alt"),
    },
    {
      image: "path/to/image2.jpg",
      alt: t("homeSection.slides.strategicProcurement.alt"),
    },
    {
      image: "path/to/image3.jpg",
      alt: t("homeSection.slides.digitalTransformation.alt"),
    },
    {
      image: "path/to/image4.jpg",
      alt: t("homeSection.slides.endToEndVisibility.alt"),
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
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="slideImage"
              />
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