import React from "react";
import { Helmet } from "react-helmet";
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
import { useTranslation } from "react-i18next";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutContainer">
      <Helmet>
        <title>{t('aboutUs.helmet.title')}</title>
        <meta name="description" content={t('aboutUs.helmet.description')} />
        <meta name="keywords" content={t('aboutUs.helmet.keywords')} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Mission Section */}
      <section className="missionSection">
        <div className="containerWrapper">
          <SectionHeader
            title={t('aboutUs.sectionHeader.title')}
            subtitle={t('aboutUs.sectionHeader.subtitle')}
          />
          <div className="missionGrid">
            <div className="missionCard">
              <Target className="missionIcon" />
              <h3 className="missionTitle">{t('aboutUs.mission.title')}</h3>
              <p className="missionText">{t('aboutUs.mission.text')}</p>
            </div>
            <div className="missionCard">
              <Award className="missionIcon" />
              <h3 className="missionTitle">{t('aboutUs.vision.title')}</h3>
              <p className="missionText">{t('aboutUs.vision.text')}</p>
            </div>
            <div className="missionCard">
              <Shield className="missionIcon" />
              <h3 className="missionTitle">{t('aboutUs.values.title')}</h3>
              <p className="missionText">{t('aboutUs.values.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="companyOverviewSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">{t('aboutUs.companyOverview.title')}</h2>
          <div className="overviewContent">
            <p className="overviewText">{t('aboutUs.companyOverview.text')}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="servicesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">{t('aboutUs.expertise.title')}</h2>
          <div className="servicesGrid">
            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Truck className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">{t('aboutUs.expertise.logistics.title')}</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.logistics.features.tracking')}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.logistics.features.route')}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.logistics.features.updates')}</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Globe className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">{t('aboutUs.expertise.procurement.title')}</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.procurement.features.network')}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.procurement.features.quality')}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.procurement.features.cost')}</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Shield className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">{t('aboutUs.expertise.risk.title')}</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.risk.features.compliance')}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.risk.features.security')}</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>{t('aboutUs.expertise.risk.features.contingency')}</span>
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