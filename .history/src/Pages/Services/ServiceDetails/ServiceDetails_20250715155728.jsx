import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const servicesData = [
    {
      id: "cleaning",
      title: t("services.cleaning.title"),
      icon: Droplet,
      details: t("services.cleaning.details"),
    },
    {
      id: "workwear",
      title: t("services.workwear.title"),
      icon: Shirt,
      details: t("services.workwear.details"),
    },
    {
      id: "it_equipment",
      title: t("services.it_equipment.title"),
      icon: Monitor,
      details: t("services.it_equipment.details"),
    },
    {
      id: "household",
      title: t("services.household.title"),
      icon: Warehouse,
      details: t("services.household.details"),
    },
    {
      id: "furniture",
      title: t("services.furniture.title"),
      icon: Sofa,
      details: t("services.furniture.details"),
    },
    {
      id: "plumbing",
      title: t("services.plumbing.title"),
      icon: Wrench,
      details: t("services.plumbing.details"),
    },
    {
      id: "office_supplies",
      title: t("services.office_supplies.title"),
      icon: Book,
      details: t("services.office_supplies.details"),
    },
  ];

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div>{t("services.not_found")}</div>;
  }

  const IconComponent = service.icon;

  return (
    <div className="serviceDetailsContainer">
      <Helmet>
        <title>{`${service.title} - PRIME TRADE GROUP MMC`}</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <SectionHeader
          title={service.title}
          subtitle={t("services.details.subtitle")}
        />

        <section className="serviceDetailsSection">
          <div className="serviceDetailsContent">
            <div className="serviceIconWrapper">
              <IconComponent className="serviceIcon" />
            </div>
            <h2 className="serviceTitle">{service.title}</h2>
            <p className="serviceDetailsText">{service.details}</p>
            <button
              className="backButton"
              onClick={() => navigate("/services")}
            >
              {t("services.back")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;