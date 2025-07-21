import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./Services.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { database } from "../../Firebase/Server"; // Realtime Database import
import { ref, get } from "firebase/database"; // Realtime Database metodları

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
        const servicesRef = ref(database, "services"); // Realtime Database referansı
        const snapshot = await get(servicesRef);
        if (snapshot.exists()) {
          const services = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
            icon: iconMap[data.icon] || Book, // Varsayılan ikon
          }));
          setServicesData(services);
        } else {
          console.error("No services found!");
        }
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
      {/* ... Geri kalan kod aynı ... */}
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
      {/* ... Geri kalan kod aynı ... */}
    </div>
  );
};

export default Services;