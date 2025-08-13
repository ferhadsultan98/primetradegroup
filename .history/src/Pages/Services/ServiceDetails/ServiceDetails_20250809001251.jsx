import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../Firebase/Server";
import { ref, get } from "firebase/database";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceRef = ref(db, `services/${id}`);
        const serviceSnapshot = await get(serviceRef);
        if (serviceSnapshot.exists()) {
          setService({ id, ...serviceSnapshot.val() });
        } else {
          console.error("Xidmət tapılmadı!");
        }

        const detailsRef = ref(db, "serviceDetails");
        const detailsSnapshot = await get(detailsRef);
        if (detailsSnapshot.exists()) {
          const detailsData = Object.entries(detailsSnapshot.val())
            .map(([detailId, data]) => ({ id: detailId, ...data }))
            .filter((detail) => detail.serviceId === id);
          setServiceDetails(detailsData);
        }

        const categoriesRef = ref(db, "categories");
        const categoriesSnapshot = await get(categoriesRef);
        if (categoriesSnapshot.exists()) {
          const categoriesData = Object.entries(categoriesSnapshot.val())
            .map(([catId, data]) => ({ id: catId, ...data }))
            .filter((category) => category.serviceId === id);
          setCategories([{ id: "all", category: "Bütün kateqoriyalar" }, ...categoriesData]);
        }
      } catch (error) {
        console.error("Məlumatlar əldə edilərkən xəta: ", error);
      }
    };
    fetchData();
  }, [id]);

  if (!service) {
    return <div>Xidmət tapılmadı!</div>;
  }

  const filteredDetails =
    selectedCategory === "all"
      ? serviceDetails
      : serviceDetails.filter((detail) => detail.categoryId === selectedCategory);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.category : "Kateqoriyasız";
  };

  return (
    <>
    <div className="serviceDetailsContainer">
      <Helmet>
        <title>{`${service.title} - PRIME TRADE GROUP MMC`}</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        

        <div className="categoryFilter">
          <div className="categoryScroll">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`categoryButton ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        <section className="serviceDetailsSection">
          <div className="serviceDetailsContent">
            <h2 className="serviceTitle">{service.title}</h2>

            <div className="productsContainer">
              {filteredDetails.length > 0 ? (
                filteredDetails.map((detail) => (
                  <div key={detail.id} className="productCard">
                    <div className="categoryBadge">
                      {getCategoryName(detail.categoryId)}
                    </div>
                    <div className="productImageContainer">
                      {detail.image && (
                        <img
                          src={detail.image}
                          alt={detail.name}
                          className="productImage"
                        />
                      )}
                    </div>
                    <div className="productInfo">
                      <h3 className="productName">{detail.name}</h3>
                      <div className="productDetails">
                        <p className="productDescription">{detail.description}</p>

                       


                        {(detail.volume || detail.origin || detail.ingredients) && (
                          <div className="additionalInfoSection">
                        
                           
                            {detail.origin && (
                              <p>
                                <strong>Mənşə:</strong> {detail.origin}
                              </p>
                            )}
                            
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Heç bir detal tapılmadı</p>
              )}
            </div>

            <button
              className="backButton"
              onClick={() => navigate("/services")}
            >
              Geri
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default ServiceDetails;