import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Package, ShoppingCart, Users, Truck, Shield } from "lucide-react";
import "./Services.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t("services.supply_chain.title"),
      icon: Package,
      features: [
        t("services.supply_chain.features.optimization"),
        t("services.supply_chain.features.tracking"),
        t("services.supply_chain.features.forecasting"),
        t("services.supply_chain.features.risk_management"),
        t("services.supply_chain.features.analytics"),
      ],
    },
    {
      title: t("services.procurement.title"),
      icon: ShoppingCart,
      features: [
        t("services.procurement.features.sourcing"),
        t("services.procurement.features.evaluation"),
        t("services.procurement.features.contract"),
        t("services.procurement.features.cost_reduction"),
        t("services.procurement.features.automation"),
      ],
    },
    {
      title: t("services.vendor.title"),
      icon: Users,
      features: [
        t("services.vendor.features.monitoring"),
        t("services.vendor.features.relationship"),
        t("services.vendor.features.quality"),
        t("services.vendor.features.compliance"),
        t("services.vendor.features.development"),
      ],
    },
    {
      title: t("services.logistics.title"),
      icon: Truck,
      features: [
        t("services.logistics.features.transportation"),
        t("services.logistics.features.warehousing"),
        t("services.logistics.features.route"),
        t("services.logistics.features.last_mile"),
        t("services.logistics.features.shipping"),
      ],
    },
    {
      title: t("services.risk.title"),
      icon: Shield,
      features: [
        t("services.risk.features.identification"),
        t("services.risk.features.continuity"),
        t("services.risk.features.financial"),
        t("services.risk.features.compliance"),
        t("services.risk.features.crisis"),
      ],
    },
  ];

  return (
    <div className="servicesContainer">
      <Helmet>
        <title>XİDMƏTLƏR - PRIME TRADE GROUP MMC</title>

        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <SectionHeader
          title={t("services.section_header.title")}
          subtitle={t("services.section_header.subtitle")}
        />

        <section className="companyOverviewSection">
          <div className="containerWrapper">
            <h2 className="sectionTitle">{t("services.overview.title")}</h2>
            <div className="overviewContent">
              <p className="overviewText">{t("services.overview.text")}</p>
            </div>
          </div>
        </section>

        <div className="servicesSection">
          <div className="servicesGrid">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="serviceCard">
                  <div className="serviceIconWrapper">
                    <IconComponent className="serviceIcon" />
                  </div>
                  <h3 className="serviceTitle">{service.title}</h3>
                  <div className="serviceFeatures">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="featureItem">
                        <div className="featureBullet"></div>
                        <span className="featureText">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="serviceButton">
                    {t("services.learn_more")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ctaSection">
          <div className="ctaContent">
            <h2 className="ctaTitle">{t("services.cta.title")}</h2>
            <p className="ctaText">{t("services.cta.text")}</p>
            <button className="ctaButton">{t("services.cta.button")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
