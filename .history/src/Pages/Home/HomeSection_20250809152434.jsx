import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./HomeSection.scss";
import TestimonialsSection from "./TestimonialSection/TestimonialSection";
import CTASection from "./CTASection/CTASection";
import ProcessSection from "./ProcessSection/ProcessSection";
import ExpertiseSection from "./HomeAbout/HomeAbout";
import FAQSection from "./FAQSection/FAQSection";


const HomeSection = () => {


  
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
      <
        <ExpertiseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection/>
        <CTASection />
      </section>
    </>
  );
};

export default HomeSection;
