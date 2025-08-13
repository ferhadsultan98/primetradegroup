import React from "react";
import "./CTASection.scss";
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

const CTASection = () => {

  const { t } = useTranslation();
  
  return (
    <div className="ctaSection">
      <div className="ctaContent">
        <div className="ctaTitle">{t("contact.cta.title")}</div>
        <div className="ctaText">{t("contact.cta.text")}</div>
        <div className="ctaButtons">
          <Link to='/contact' className="ctaButtonPrimary">
            {t("contact.cta.buttons.consultation")}
          </Link>
          <Link to='' className="ctaButtonSecondary">
            {t("contact.cta.buttons.quote")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
