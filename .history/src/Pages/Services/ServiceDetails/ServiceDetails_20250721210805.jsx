import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { database } from "../../../Firebase/Server";
import { ref, get } from "firebase/database";

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
        const serviceRef = ref(database, `services/${id}`);
        const snapshot = await get(serviceRef);
        if (snapshot.exists()) {
          setService({
            id,
            ...snapshot.val(),
            icon: iconMap[snapshot.val().icon] || Book,
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
      {/* ... Geri kalan kod aynı ... */}
    </div>
  );
};

export default ServiceDetails;