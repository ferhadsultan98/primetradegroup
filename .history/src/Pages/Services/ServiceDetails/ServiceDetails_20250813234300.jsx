import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../Firebase/Server";
import { ref, get } from "firebase/database";
import { Search, Star, FileText, ArrowLeft, RotateCcw } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

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
      <SectionHeader
        title={service?.title || "Yüklənir..."}
        subtitle="Xidmətlərimiz haqqında ətraflı məlumat"
      />
      <div className="serviceDetailsContainer">
        <Helmet>
          <title>{`${service?.title || "Xidmət"} - PRIME TRADE GROUP MMC`}</title>
          <meta name="author" content="PRIME TRADE GROUP MMC" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        {isLoading ? (
          <div className="loadingContainer">
            <div className="loader"></div>
            <p>Yüklənir...</p>
          </div>
        ) : !service ? (
          <div>Xidmət tapılmadı!</div>
        ) : (
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
                    <div className="noDataContainer">
                      <div className="noDataCard">
                        <div className="noDataIcon">
                          <Search size={80} className="search-icon" />
                        </div>
                        <div className="noDataContent">
                          <h3 className="noDataTitle">
                            {selectedCategory === "all" 
                              ? "Məlumat mövcud deyil" 
                              : "Bu kateqoriyada məlumat yoxdur"}
                          </h3>
                          <p className="noDataDescription">
                            {selectedCategory === "all"
                              ? "Bu xidmət üçün hələlik heç bir ətraflı məlumat əlavə edilməyib. Zəhmət olmasa daha sonra yenidən yoxlayın."
                              : "Seçdiyiniz kateqoriya üçün məlumat tapılmadı. Digər kateqoriyaları yoxlamağı sınayın."}
                          </p>
                          
                          {selectedCategory !== "all" && (
                            <button
                              className="resetFilterButton"
                              onClick={() => setSelectedCategory("all")}
                            >
                              <RotateCcw size={16} />
                              Bütün kateqoriyaları göstər
                            </button>
                          )}
                        </div>
                        
                        <div className="noDataActions">
                          <div className="actionCard">
                            <div className="actionIcon">
                              <Star size={24} />
                            </div>
                            <div className="actionText">
                              <h4>Keyfiyyətli Xidmət</h4>
                              <p>Peşəkar komandamız sizin ehtiyaclarınıza uyğun həllər təqdim edir</p>
                            </div>
                          </div>
                          
                          <div className="actionCard">
                            <div className="actionIcon">
                              <FileText size={24} />
                            </div>
                            <div className="actionText">
                              <h4>Ətraflı Məlumat</h4>
                              <p>Bizə müraciət edərək xidmətlərimiz haqqında daha çox öyrənin</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className="backButton"
                  onClick={() => navigate("/services")}
                >
                  <ArrowLeft size={16} />
                  Geri
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceDetails;