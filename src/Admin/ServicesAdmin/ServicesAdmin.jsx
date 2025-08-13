import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Server";
import { ref, get, set, remove, push } from "firebase/database";
import "./ServicesAdmin.scss";
import ServicesTab from "./ServicesTab.jsx";
import CategoriesTab from "./CategoriesTab.jsx";
import DetailsTab from "./DetailsTab.jsx";

const ServicesAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("services");
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newService, setNewService] = useState({ title: "" });
  const [newServiceDetail, setNewServiceDetail] = useState({
    serviceId: "",
    categoryId: "",
    name: "",
    description: "",
    features: [],
    ingredients: "",
    origin: "",
    usage: "",
    volume: "",
    image: null,
  });
  const [newCategory, setNewCategory] = useState({ serviceId: "", category: "" });
  const [newFeature, setNewFeature] = useState("");
  const [editingService, setEditingService] = useState(null);
  const [editingDetail, setEditingDetail] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesRef = ref(db, "services");
        const servicesSnapshot = await get(servicesRef);
        if (servicesSnapshot.exists()) {
          const servicesData = Object.entries(servicesSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setServices(servicesData);
        }

        const detailsRef = ref(db, "serviceDetails");
        const detailsSnapshot = await get(detailsRef);
        if (detailsSnapshot.exists()) {
          const detailsData = Object.entries(detailsSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setServiceDetails(detailsData);
        }

        const categoriesRef = ref(db, "categories");
        const categoriesSnapshot = await get(categoriesRef);
        if (categoriesSnapshot.exists()) {
          const categoriesData = Object.entries(categoriesSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setCategories(categoriesData);
        }
      } catch (error) {
        console.error("Məlumatları əldə edərkən xəta: ", error);
      }
    };
    fetchData();
  }, []);

  const handleImageUpload = async (file) => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "primetradegroup");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dofykgfkn/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) throw new Error(`Cloudinary upload failed: ${response.statusText}`);
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Şəkil yüklənərkən xəta: ", error);
      return null;
    }
  };

  return (
    <div className="servicesAdminContainer">
      <div className="servicesAdminWrapper">
        <h2 className="servicesAdminTitle">Xidmətlər Admin</h2>
        <div className="servicesAdminTabs">
          <button
            className={`servicesAdminTabButton ${activeTab === "services" ? "active" : ""}`}
            onClick={() => setActiveTab("services")}
          >
            Xidmətlər
          </button>
          <button
            className={`servicesAdminTabButton ${activeTab === "categories" ? "active" : ""}`}
            onClick={() => setActiveTab("categories")}
          >
            Kateqoriyalar
          </button>
          <button
            className={`servicesAdminTabButton ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Xidmət Təfərrüatları
          </button>
        </div>

        {activeTab === "services" && (
          <ServicesTab
            services={services}
            setServices={setServices}
            newService={newService}
            setNewService={setNewService}
            editingService={editingService}
            setEditingService={setEditingService}
            handleImageUpload={handleImageUpload}
          />
        )}

        {activeTab === "categories" && (
          <CategoriesTab
            categories={categories}
            setCategories={setCategories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            editingCategory={editingCategory}
            setEditingCategory={setEditingCategory}
            services={services}
            setServiceDetails={setServiceDetails}
            serviceDetails={serviceDetails}
          />
        )}

        {activeTab === "details" && (
          <DetailsTab
            serviceDetails={serviceDetails}
            setServiceDetails={setServiceDetails}
            newServiceDetail={newServiceDetail}
            setNewServiceDetail={setNewServiceDetail}
            newFeature={newFeature}
            setNewFeature={setNewFeature}
            editingDetail={editingDetail}
            setEditingDetail={setEditingDetail}
            imageFile={imageFile}
            setImageFile={setImageFile}
            error={error}
            setError={setError}
            services={services}
            categories={categories}
            handleImageUpload={handleImageUpload}
          />
        )}
      </div>
    </div>
  );
};

export default ServicesAdmin;