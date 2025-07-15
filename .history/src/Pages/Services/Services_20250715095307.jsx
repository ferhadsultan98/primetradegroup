import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {  Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./Services.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t("services.cleaning.title"),
      icon: Soap,
      features: [
        t("services.cleaning.features.detergents"),
        t("services.cleaning.features.equipment"),
        t("services.cleaning.features.professional"),
        t("services.cleaning.features.eco"),
        t("services.cleaning.features.specialized"),
      ],
    },
    {
      title: t("services.workwear.title"),
      icon: Shirt,
      features: [
        t("services.workwear.features.uniforms"),
        t("services.workwear.features.safety"),
        t("services.workwear.features.customized"),
        t("services.workwear.features.durable"),
        t("services.workwear.features.student"),
      ],
    },
    {
      title: t("services.it_equipment.title"),
      icon: Monitor,
      features: [
        t("services.it_equipment.features.hardware"),
        t("services.it_equipment.features.peripherals"),
        t("services.it_equipment.features.networking"),
        t("services.it_equipment.features.software"),
        t("services.it_equipment.features.maintenance"),
      ],
    },
    {
      title: t("services.household.title"),
      icon: Warehouse,
      features: [
        t("services.household.features.tools"),
        t("services.household.features.consumables"),
        t("services.household.features.maintenance"),
        t("services.household.features.industrial"),
        t("services.household.features.custom"),
      ],
    },
    {
      title: t("services.furniture.title"),
      icon: Sofa,
      features: [
        t("services.furniture.features.office"),
        t("services.furniture.features.ergonomic"),
        t("services.furniture.features.custom"),
        t("services.furniture.features.modern"),
        t("services.furniture.features.durable"),
      ],
    },
    {
      title: t("services.plumbing.title"),
      icon: Wrench,
      features: [
        t("services.plumbing.features.pipes"),
        t("services.plumbing.features.fittings"),
        t("services.plumbing.features.tools"),
        t("services.plumbing.features.sanitary"),
        t("services.plumbing.features.installation"),
      ],
    },
    {
      title: t("services.office_supplies.title"),
      icon: Book,
      features: [
        t("services.office_supplies.features.stationery"),
        t("services.office_supplies.features.equipment"),
        t("services.office_supplies.features.organizers"),
        t("services.office_supplies.features.consumables"),
        t("services.office_supplies.features.custom"),
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
              <p className="overviewText">
                Şirkətimiz müxtəlif sektorlarda fəaliyyət göstərən qurumların tələblərinə uyğun məhsulların təchizatını həyata keçirir. Təklif etdiyimiz məhsullar keyfiyyət, funksionallıq və əlçatanlıq baxımından seçilir və müxtəlif istifadə sahələri üzrə çeşidli həlləri əhatə edir. Bu istiqamətdə təqdim etdiyimiz məhsul kateqoriyaları aşağıdakı əsas sahələri əhatə edir:
              </p>
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