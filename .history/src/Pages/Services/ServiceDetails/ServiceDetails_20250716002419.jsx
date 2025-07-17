import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  const iconMap = {
    Droplet,
    Shirt,
    Monitor,
    Warehouse,
    Sofa,
    Wrench,
    Book,
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const docRef = doc(db, "services", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setService({
            id: docSnap.id,
            ...docSnap.data(),
            icon: iconMap[docSnap.data().icon],
          });
        } else {
          console.error("No such service!");
        }
      } catch (error) {
        console.error("Error fetching service: ", error);
      }
    };
    fetchService();
  }, [id]);

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

            <div className="productsContainer">
              {service.products.map((product, index) => (
                <div key={index} className={`productCard ${index % 2 === 0 ? "leftAlign" : "rightAlign"}`}>
                  <div className="productImageContainer">
                    <img src={product.image} alt={product.name} className="productImage" />
                  </div>

                  <div className="productInfo">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productDescription">{product.description}</p>

                    <div className "reuseSection">
                      <h4 className="sectionTitle">İstifadə</h4>
                      <p>{product.usage}</p>
                    </div>

                    <div className="featuresSection">
                      <h4 className="sectionTitle">Əsas Xüsusiyyətlər</h4>
                      <ul className="featuresList">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="additionalInfoSection">
                      <h4 className="sectionTitle">Əlavə Məlumat</h4>
                      <p><strong>Həcm/Material:</strong> {product.volume || product.material}</p>
                      <p><strong>Mənşə:</strong> {product.origin}</p>
                      <p><strong>Təhlükəsizlik:</strong> {product.safety}</p>
                      <p><strong>Buraxılış Tarixi:</strong> {product.releaseDate}</p>
                      <p><strong>Haştaqlar:</strong> {product.hashtags.join(" ")}</p>
                    </div>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;