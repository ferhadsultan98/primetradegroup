// src/components/ServiceDetails/ServiceDetails.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { db } from "../../../Firebase/Server";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState([]);
  const iconMap = {
    Droplet: Droplet,
    Shirt: Shirt,
    Monitor: Monitor,
    Warehouse: Warehouse,
    Sofa: Sofa,
    Wrench: Wrench,
    Book: Book,
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const services = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServicesData(services);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetchServices();
  }, []);

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div>{t("services.not_found")}</div>;
  }

  const IconComponent = iconMap[service.icon];

  return (
    <div className="serviceDetailsContainer">
      <Helmet>
        <title>{`${t(service.title)} - PRIME TRADE GROUP MMC`}</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <SectionHeader title={t(service.title)} subtitle={t("services.details.subtitle")} />

        <section className="serviceDetailsSection">
          <div className="serviceDetailsContent">
            <div className="serviceIconWrapper">
              <IconComponent className="serviceIcon" />
            </div>

            <h2 className="serviceTitle">{t(service.title)}</h2>
            <p className="serviceDetailsText">{t(service.details)}</p>

            <div className="productsContainer">
              {service.products.map((product, index) => (
                <div key={index} className={`productCard ${index % 2 === 0 ? "leftAlign" : "rightAlign"}`}>
                  <div className="productImageContainer">
                    <img src={product.image} alt={product.name} className="productImage" />
                  </div>

                  <div className="productInfo">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productDescription">{product.description}</p>

                    <div className="usageSection">
                      <h4 className="sectionTitle">{t("services.usage")}</h4>
                      <p>{product.usage}</p>
                    </div>

                    <div className="featuresSection">
                      <h4 className="sectionTitle">{t("services.features")}</h4>
                      <ul className="featuresList">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="additionalInfoSection">
                      <h4 className="sectionTitle">{t("services.additional_info")}</h4>
                      <p>
                        <strong>{t("services.volume_material")}:</strong>{" "}
                        {product.volume || product.material}
                      </p>
                      <p>
                        <strong>{t("services.origin")}:</strong> {product.origin}
                      </p>
                      <p>
                        <strong>{t("services.safety")}:</strong> {product.safety}
                      </p>
                      <p>
                        <strong>{t("services.release_date")}:</strong> {product.releaseDate}
                      </p>
                      <p>
                        <strong>{t("services.hashtags")}:</strong> {product.hashtags.join(" ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="backButton" onClick={() => navigate("/services")}>
              {t("services.back")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;