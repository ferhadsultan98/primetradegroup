import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Truck,
  Globe,
  Users,
  Award,
  Target,
  Shield,
  CheckCircle,
} from "lucide-react";
import "./About.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutContainer">
      <Helmet>
        <title>HAQQIMIZDA - PRIME TRADE GROUP MMC</title>
        <meta
          name="description"
          content="PRIME TRADE GROUP MMC haqqında ətraflı məlumat əldə edin – missiyamız, baxışımız, dəyərlərimiz və qlobal təchizat zəncirinin idarə olunması, logistika, satınalma və risklərin idarə olunmasındakı peşəkarlığımız."
        />
        <meta
          name="keywords"
          content="PRIME TRADE GROUP, təchizat zəncirinin idarə olunması, logistika, qlobal satınalma, risklərin idarə olunması"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Mission Section */}
      <section className="missionSection">
        <div className="containerWrapper">
          <SectionHeader
            title={t("about.section_header.title")}
            subtitle={t("about.section_header.subtitle")}
          />
          <div className="missionGrid">
            <div className="missionCard">
              <Target className="missionIcon" />
              <h3 className="missionTitle">{t("about.mission.title")}</h3>
              <p className="missionText">{t("about.mission.text")}</p>
            </div>
            <div className="missionCard">
              <Award className="missionIcon" />
              <h3 className="missionTitle">{t("about.vision.title")}</h3>
              <p className="missionText">{t("about.vision.text")}</p>
            </div>
            <div className="missionCard">
              <Shield className="missionIcon" />
              <h3 className="missionTitle">{t("about.values.title")}</h3>
              <p className="missionText">{t("about.values.text")}</p>
            </div>
          </div>
            {/* Company Overview Section */}
      <section className="companyOverviewSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">{t("about.company_overview.title")}</h2>
          <div className="overviewContent">
            <p className="overviewText">{t("about.company_overview.text")}</p>
          </div>
        </div>
      </section>
        </div>
      </section>

    

      {/* Services Section */}
      <section className="servicesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">{t("about.services.title")}</h2>
          <div className="servicesGrid">
            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Truck className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">{t("about.services.logistics.title")}</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t("about.services.logistics.features.tracking")}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t("about.services.logistics.features.route")}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t("about.services.logistics.features.updates")}</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Globe className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">{t("about.services.procurement.title")}</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t("about.services.procurement.features.network")}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t("about.services.procurement.features.quality")}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t("about.services.procurement.features.cost")}</span>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;