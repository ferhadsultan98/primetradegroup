import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const iconMap = {
  Droplet: Droplet,
  Shirt: Shirt,
  Monitor: Monitor,
  Warehouse: Warehouse,
  Sofa: Sofa,
  Wrench: Wrench,
  Book: Book,
};

const ServiceDetails = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchService = async () => {
      const docRef = doc(db, "services", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setService({ id: docSnap.id, ...docSnap.data() });
      } else {
        setService(null);
      }
    };
    fetchService();
  }, [id, db]);

  if (!service) {
    return <div>{t("services.not_found")}</div>;
  }

  const IconComponent = iconMap[service.icon];

  return (
    <div className="serviceDetailsContainer">
      <Helmet>
        <title>{`${service.translations[i18n.language].title} - PRIME TRADE GROUP MMC`}</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <SectionHeader
          title={service.translations[i18n.language].title}
          subtitle={t("services.details.subtitle")}
        />

        <section className="serviceDetailsSection">
          <div className="serviceDetailsContent">
            <div className="serviceIconWrapper">
              <IconComponent className="serviceIcon" />
            </div>

            <h2 className="serviceTitle">{service.translations[i18n.language].title}</h2>
            <p className="serviceDetailsText">{service.translations[i18n.language].details}</p>

            <div className="productsContainer">
              {service.products.map((product, index) => (
                <div key={index} className={`productCard ${index % 2 === 0 ? 'leftAlign' : 'rightAlign'}`}>
                  <div className="productImageContainer">
                    <img src={product.image} alt={product.translations[i18n.language].name} className="productImage" />
                  </div>

                  <div className="productInfo">
                    <h3 className="productName">{product.translations[i18n.language].name}</h3>
                    <p className="productDescription">{product.translations[i18n.language].description}</p>

                    <div className="usageSection">
                      <h4 className="sectionTitle">{t("admin.productUsage")}</h4>
                      <p>{product.translations[i18n.language].usage}</p>
                    </div>

                    <div className="featuresSection">
                      <h4 className="sectionTitle">{t("admin.productFeatures")}</h4>
                      <ul className="featuresList">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature[i18n.language]}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="additionalInfoSection">
                      <h4 className="sectionTitle">{t("admin.additionalInfo")}</h4>
                      <p><strong>{t("admin.productVolume")}:</strong> {product.volume || product.material}</p>
                      <p><strong>{t("admin.productOrigin")}:</strong> {product.origin}</p>
                      <p><strong>{t("admin.productSafety")}:</strong> {product.safety[i18n.language]}</p>
                      <p><strong>{t("admin.productReleaseDate")}:</strong> {product.releaseDate}</p>
                      <p><strong>{t("admin.productHashtags")}:</strong> {product.hashtags.join(" ")}</p>
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