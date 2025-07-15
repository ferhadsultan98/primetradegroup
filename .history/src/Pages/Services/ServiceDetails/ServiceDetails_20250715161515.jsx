import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

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
      products: [
        {
          name: "Fairy Ultra Concentrate Original Dishwashing Liquid",
          description: "Fairy Ultra Concentrate is a highly effective dishwashing liquid designed to tackle tough grease and grime. Its concentrated formula ensures long-lasting suds, providing a thorough clean with just a few drops.",
          features: [
            "Cuts through grease instantly with LiftAction technology.",
            "Long-lasting suds for efficient cleaning.",
            "Gentle on hands, endorsed by the British Skin Foundation.",
            "Suitable for dishes, pots, pans, and even surfaces like windows and mirrors."
          ],
          usage: "Add 1 capful (10ml) to a 40-50L sink of warm water for dishwashing. For surfaces, dilute a few drops in a 600ml spray bottle with water, spray, and wipe with a damp cloth. Rinse thoroughly after use.",
          image: "https://www.fairydishwashing.com.au/assets/products/ultra-concentrate-original.png"
        },
        {
          name: "Cif Cream Cleaner",
          description: "Cif Cream Cleaner is a versatile cleaning product that removes stubborn dirt and grease from various surfaces, leaving them sparkling clean. Its micro-particle formula ensures deep cleaning without scratching.",
          features: [
            "Removes tough stains like grease, burnt-on food, and limescale.",
            "Safe for use on kitchen surfaces, bathrooms, and stainless steel.",
            "Creamy texture for easy application and rinsing.",
            "Leaves a fresh, clean scent."
          ],
          usage: "Apply directly to the surface using a damp cloth or sponge. Rub gently, then rinse thoroughly with water. For tough stains, let it sit for a minute before wiping. Avoid use on delicate surfaces like polished marble.",
          image: "https://www.cifclean.co.uk/assets/products/cif-cream-cleaner.jpg"
        },
        {
          name: "Dettol Antibacterial Surface Spray",
          description: "Dettol Antibacterial Surface Spray is a powerful cleaner that kills 99.9% of bacteria and viruses, ensuring a hygienic environment. Ideal for high-touch areas in kitchens and bathrooms.",
          features: [
            "Kills 99.9% of bacteria, including E. coli and Salmonella.",
            "Non-bleach formula, safe for food preparation areas.",
            "Quick-drying with no residue.",
            "Fresh fragrance for a clean-smelling home."
          ],
          usage: "Spray directly onto the surface, leave for 1 minute, then wipe with a clean cloth. For food contact surfaces, rinse thoroughly after use. Do not use on polished wood or painted surfaces.",
          image: "https://www.dettol.co.uk/assets/products/antibacterial-surface-spray.png"
        }
      ]
    },
    {
      id: "workwear",
      title: t("services.workwear.title"),
      icon: Shirt,
      details: t("services.workwear.details"),
      products: []
    },
    {
      id: "it_equipment",
      title: t("services.it_equipment.title"),
      icon: Monitor,
      details: t("services.it_equipment.details"),
      products: []
    },
    {
      id: "household",
      title: t("services.household.title"),
      icon: Warehouse,
      details: t("services.household.details"),
      products: []
    },
    {
      id: "furniture",
      title: t("services.furniture.title"),
      icon: Sofa,
      details: t("services.furniture.details"),
      products: []
    },
    {
      id: "plumbing",
      title: t("services.plumbing.title"),
      icon: Wrench,
      details: t("services.plumbing.details"),
      products: []
    },
    {
      id: "office_supplies",
      title: t("services.office_supplies.title"),
      icon: Book,
      details: t("services.office_supplies.details"),
      products: []
    }
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
            {service.products && service.products.length > 0 && (
              <div className="productsSection">
                <h3 className="productsTitle">{t("services.products.title")}</h3>
                <div className="productsGrid">
                  {service.products.map((product, index) => (
                    <div key={index} className="productCard">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="productImage"
                      />
                      <h4 className="productName">{product.name}</h4>
                      <p className="productDescription">{product.description}</p>
                      <div className="productFeatures">
                        <h5>{t("services.products.features")}</h5>
                        <ul>
                          {product.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="productUsage">
                        <h5>{t("services.products.usage")}</h5>
                        <p>{product.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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