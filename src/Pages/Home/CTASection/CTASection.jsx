import React from "react";
import "./CTASection.scss";
import { useTranslation } from "react-i18next"

const CTASection = () => {

  const { t } = useTranslation();
  
  return (
    <div className="ctaSection">
      <div className="ctaContent">
        <div className="ctaTitle">{t("contact.cta.title")}</div>
        <div className="ctaText">{t("contact.cta.text")}</div>
        <div className="ctaButtons">
          <button className="ctaButtonPrimary">
            {t("contact.cta.buttons.consultation")}
          </button>
          <button className="ctaButtonSecondary">
            {t("contact.cta.buttons.quote")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
