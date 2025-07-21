import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./HomeSection.scss";
import { useTranslation } from "react-i18next";

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
          content="PRIME TRADE GROUP MMC-nin qlobal təchizat zəncirinin idarə olunması, strateji satınalma, rəqəmsal transformasiya və digər sahələrdəki peşəkarlığı ilə tanış olun. Praktiki nümunələrimizi və proseslərimizi araşdırın."
        />
        <meta
          name="keywords"
          content="PRIME TRADE GROUP, təchizat zəncirinin idarə olunması, strateji satınalma, rəqəmsal transformasiya, logistika, risklərin azaldılması"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Slider Section */}
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
                    {/* <div className="actionButtons">
                                            <button className="primaryButton">{t('homeSection.buttons.getStarted')}</button>
                                            <button className="secondaryButton">{t('homeSection.buttons.learnMore')}</button>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="expertiseSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">{t("homeSection.expertise.title")}</h2>
          <p className="sectionDescription">
            {t("homeSection.expertise.description")}
          </p>
          <div className="expertiseGrid">
            {[
              "tenderManagement",
              "supplierOptimization",
              "costReduction",
              "riskMitigation",
            ].map((key, index) => (
              <div key={index} className="expertiseCard">
                <h3 className="cardTitle">
                  {t(`homeSection.expertise.items.${key}.title`)}
                </h3>
                <p className="cardDescription">
                  {t(`homeSection.expertise.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="caseStudiesSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">{t("homeSection.caseStudies.title")}</h2>
          <p className="sectionDescription">
            {t("homeSection.caseStudies.description")}
          </p>
          <div className="caseStudiesGrid">
            {["globalRetailChain", "manufacturingGiant", "energySector"].map(
              (key, index) => (
                <div key={index} className="caseStudyCard">
                  <h3 className="cardTitle">
                    {t(`homeSection.caseStudies.items.${key}.title`)}
                  </h3>
                  <p className="cardDescription">
                    {t(`homeSection.caseStudies.items.${key}.description`)}
                  </p>
                  <button className="secondaryButton">
                    {t("homeSection.buttons.readMore")}
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="processSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">{t("homeSection.process.title")}</h2>
          <p className="sectionDescription">
            {t("homeSection.process.description")}
          </p>
          <div className="processGrid">
            {["analysis", "strategy", "execution", "optimization"].map(
              (key, index) => (
                <div key={index} className="processCard">
                  <div className="stepNumber">
                    {t(`homeSection.process.steps.${key}.step`)}
                  </div>
                  <h3 className="cardTitle">
                    {t(`homeSection.process.steps.${key}.title`)}
                  </h3>
                  <p className="cardDescription">
                    {t(`homeSection.process.steps.${key}.description`)}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <>section className="testimonialsSection">
        <div className="contentWrapper">
          <h2 className="sectionTitle">
            {t("homeSection.testimonials.title")}
          </h2>
          <p className="sectionDescription">
            {t("homeSection.testimonials.description")}
          </p>
          <div className="testimonialsGrid">
            {["testimonial1", "testimonial2", "testimonial3"].map(
              (key, index) => (
                <div key={index} className="testimonialCard">
                  <p className="testimonialQuote">
                    {t(`homeSection.testimonials.items.${key}.quote`)}
                  </p>
                  <p className="testimonialAuthor">
                    {t(`homeSection.testimonials.items.${key}.author`)}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </
    </>
  );
};

export default HomeSection;
