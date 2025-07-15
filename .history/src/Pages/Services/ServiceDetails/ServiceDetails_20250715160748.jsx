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
      description: t("services.cleaning.details"),
      products: [
        {
          name: "Fairy Platinum Dishwashing Liquid",
          description: "Powerful dish soap that cuts through grease and tough stains.",
          features: [
            "Removes grease 4x faster than competitors",
            "Concentrated formula for long-lasting use",
            "Leaves dishes sparkling clean",
            "Available in lemon and original scents",
            "Biodegradable surfactants",
          ],
          image: "https://example.com/images/fairy_platinum.jpg",
        },
        {
          name: "ABC Cream Cleanser",
          description: "Multi-surface cream cleanser for tough stains.",
          features: [
            "Contains micro-abrasives for deep cleaning",
            "Safe for ceramic and stainless steel",
            "Removes soap scum and hard water stains",
            "Non-toxic and phosphate-free",
            "Creamy texture for easy application",
          ],
          image: "https://example.com/images/abc_cream.jpg",
        },
        {
          name: "Bon Ami Powder Cleanser",
          description: "Eco-friendly powder cleanser for versatile cleaning.",
          features: [
            "Non-abrasive formula safe for most surfaces",
            "Made with biodegradable ingredients",
            "Effective on grease, stains, and grime",
            "No harsh chemicals or fumes",
            "Ideal for sinks, tiles, and cookware",
          ],
          image: "https://example.com/images/bon_ami.jpg",
        },
        {
          name: "Seventh Generation Dish Soap",
          description: "Plant-based dish soap for eco-conscious cleaning.",
          features: [
            "EPA Safer Choice certified",
            "Free of dyes and synthetic fragrances",
            "Cuts through grease and food residues",
            "Recyclable packaging",
            "Gentle on hands",
          ],
          image: "https://example.com/images/seventh_generation.jpg",
        },
      ],
    },
    {
      id: "workwear",
      title: t("services.workwear.title"),
      icon: Shirt,
      description: t("services.workwear.details"),
      products: [
        {
          name: "Sample Workwear Uniform",
          description: "Durable workwear for industrial use.",
          features: [
            "High-quality cotton blend",
            "Reinforced stitching",
            "Customizable logos",
            "Breathable fabric",
            "Multiple color options",
          ],
          image: "https://example.com/images/workwear_uniform.jpg",
        },
        // Add more workwear products as needed
      ],
    },
    {
      id: "it_equipment",
      title: t("services.it_equipment.title"),
      icon: Monitor,
      description: t("services.it_equipment.details"),
      products: [
        {
          name: "Sample IT Hardware",
          description: "High-performance computing equipment.",
          features: [
            "Latest processor technology",
            "High-speed connectivity",
            "Energy-efficient design",
            "Robust security features",
            "Scalable configurations",
          ],
          image: "https://example.com/images/it_hardware.jpg",
        },
        // Add more IT equipment products as needed
      ],
    },
    {
      id: "household",
      title: t("services.household.title"),
      icon: Warehouse,
      description: t("services.household.details"),
      products: [
        {
          name: "Sample Household Tool",
          description: "Versatile tool for home maintenance.",
          features: [
            "Ergonomic design",
            "Durable materials",
            "Multi-purpose functionality",
            "Easy to store",
            "Safe for home use",
          ],
          image: "https://example.com/images/household_tool.jpg",
        },
        // Add more household products as needed
      ],
    },
    {
      id: "furniture",
      title: t("services.furniture.title"),
      icon: Sofa,
      description: t("services.furniture.details"),
      products: [
        {
          name: "Sample Office Chair",
          description: "Ergonomic chair for office comfort.",
          features: [
            "Adjustable height and tilt",
            "Lumbar support",
            "Breathable mesh fabric",
            "Durable frame",
            "Modern design",
          ],
          image: "https://example.com/images/office_chair.jpg",
        },
        // Add more furniture products as needed
      ],
    },
    {
      id: "plumbing",
      title: t("services.plumbing.title"),
      icon: Wrench,
      description: t("services.plumbing.details"),
      products: [
        {
          name: "Sample Plumbing Pipe",
          description: "High-quality pipe for plumbing systems.",
          features: [
            "Corrosion-resistant material",
            "Easy to install",
            "Long lifespan",
            "Compatible with standard fittings",
            "Leak-proof design",
          ],
          image: "https://example.com/images/plumbing_pipe.jpg",
        },
        // Add more plumbing products as needed
      ],
    },
    {
      id: "office_supplies",
      title: t("services.office_supplies.title"),
      icon: Book,
      description: t("services.office_supplies.details"),
      products: [
        {
          name: "Sample Stationery Set",
          description: "Complete stationery set for office use.",
          features: [
            "High-quality paper",
            "Eco-friendly materials",
            "Variety of pens and pencils",
            "Organized storage",
            "Customizable branding",
          ],
          image: "https://example.com/images/stationery_set.jpg",
        },
        // Add more office supply products as needed
      ],
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
            <p className="serviceDetailsText">{service.description}</p>
          </div>

          <div className="productsGrid">
            {service.products.map((product, index) => (
              <div key={index} className="productCard">
                <div className="productImageWrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="productImage"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300x200")}
                  />
                </div>
                <h3 className="productTitle">{product.name}</h3>
                <p className="productDescription">{product.description}</p>
                <div className="productFeatures">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="featureItem">
                      <div className="featureBullet"></div>
                      <span className="featureText">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="backButton"
            onClick={() => navigate("/services")}
          >
            {t("services.back")}
          </button>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;