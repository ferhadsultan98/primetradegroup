import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Droplet,
  Shirt,
  Monitor,
  Warehouse,
  Sofa,
  Wrench,
  Book,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Services.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { db } from "../../";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState([]);

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
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const services = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          icon: iconMap[doc.data().icon],
        }));
        setServicesData(services);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetchServices();
  }, []);

  const handleLearnMore = (id) => {
    navigate(`/services/${id}`);
  };

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
                Şirkətimiz müxtəlif sektorlarda fəaliyyət göstərən qurumların
                tələblərinə uyğun məhsulların təchizatını həyata keçirir. Təklif
                etdiyimiz məhsullar keyfiyyət, funksionallıq və əlçatanlıq
                baxımından seçilir və müxtəlif istifadə sahələri üzrə çeşidli
                həlləri əhatə edir. Bu istiqamətdə təqdim etdiyimiz məhsul
                kateqoriyaları aşağıdakı əsas sahələri əhatə edir:
              </p>
            </div>
          </div>
        </section>

        <div className="servicesSection">
          <div className="servicesGrid">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="serviceCard">
                  <div className="serviceIconWrapper">
                    <IconComponent className="serviceIcon" />
                  </div>
                  <h3 className="serviceTitle">{service.title}</h3>
                  <div className="serviceFeatures">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="featureItem">
                        <span className="featureText">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="serviceButton"
                    onClick={() => handleLearnMore(service.id)}
                  >
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
