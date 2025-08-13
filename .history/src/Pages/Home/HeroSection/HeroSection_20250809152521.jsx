import React from "react";
import Slide1 from "../../../";
import Slide2 from "../../../public/assets/Home/slide2.jpg";
import Slide3 from "../../../public/assets/Home/slide3.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {

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
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);1

  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

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
                <p className="slideDescription">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
