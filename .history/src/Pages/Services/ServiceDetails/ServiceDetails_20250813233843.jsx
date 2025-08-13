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
  const [activity, setActivity] = useState(null);
  const [activityDetails, setActivityDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const activityRef = ref(db, `activities/${id}`);
        const activitySnapshot = await get(activityRef);
        if (activitySnapshot.exists()) {
          setActivity({ id, ...activitySnapshot.val() });
        } else {
          console.error("Fəaliyyət sahəsi tapılmadı!");
        }

        const detailsRef = ref(db, "activityDetails");
        const detailsSnapshot = await get(detailsRef);
        if (detailsSnapshot.exists()) {
          const detailsData = Object.entries(detailsSnapshot.val())
            .map(([detailId, data]) => ({ id: detailId, ...data }))
            .filter((detail) => detail.activityId === id);
          setActivityDetails(detailsData);
        }

        const categoriesRef = ref(db, "categories");
        const categoriesSnapshot = await get(categoriesRef);
        if (categoriesSnapshot.exists()) {
          const categoriesData = Object.entries(categoriesSnapshot.val())
            .map(([catId, data]) => ({ id: catId, ...data }))
            .filter((category) => category.activityId === id);
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
      ? activityDetails
      : activityDetails.filter((detail) => detail.categoryId === selectedCategory);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.category : "Kateqoriyasız";
  };

  return (
    <>
      <SectionHeader
        title={activity?.title || "Yüklənir..."}
        subtitle="Fəaliyyət sahələrimiz haqqında ətraflı məlumat"
      />
      <div className="activityDetailsContainer">
        <Helmet>
          <title>{`${activity?.title || "Fəaliyyət Sahəsi"} - PRIME TRADE GROUP MMC`}</title>
          <meta name="author" content="PRIME TRADE GROUP MMC" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        {isLoading ? (
          <div className="loadingContainer">
            <div className="loader"></div>
            <p>Yüklənir...</p>
          </div>
        ) : !activity ? (
          <div className="noDataContainer">
            <div className="noDataIcon">i</div>
            <h2 className="noDataTitle">Fəaliyyət Sahəsi Tapılmadı</h2>
            <p className="noDataMessage">
              Üzr istəyirik, axtardığınız fəaliyyət sahəsi haqqında məlumat tapa bilmədik.
              Başqa fəaliyyət sahələrimizi kəşf etmək üçün aşağıdakı düyməni sıxın.
            </p>
            <button
              className="noDataButton"
              onClick={() => navigate("/activities")}
            >
              Fəaliyyət Sahələrinə Qayıt
            </button>
          </div>
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

            <section className="activityDetailsSection">
              <div className="activityDetailsContent">
                <h2 className="activityTitle">{activity.title}</h2>

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
                      <div className="noDataIcon">i</div>
                      <h2 className="noDataTitle">Məlumat Tapılmadı</h2>
                      <p className="noDataMessage">
                        Seçilmiş kateqoriyada heç bir məlumat yoxdur. Başqa kateqoriyaları yoxlayın və ya fəaliyyət sahələri səhifəsinə qayıdın.
                      </p>
                      <button
                        className="noDataButton"
                        onClick={() => navigate("/activities")}
                      >
                        Fəaliyyət Sahələrinə Qayıt
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="backButton"
                  onClick={() => navigate("/activities")}
                >
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