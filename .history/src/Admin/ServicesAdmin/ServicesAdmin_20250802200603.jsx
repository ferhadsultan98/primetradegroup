import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Server";
import { ref, get, set, remove } from "firebase/database";
import "./ServicesAdmin.scss";

const ServicesAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("services");
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newService, setNewService] = useState({ id: "", title: "", icon: "Book" });
  const [newServiceDetail, setNewServiceDetail] = useState({ serviceId: "", details: "", features: [] });
  const [newCategory, setNewCategory] = useState({ serviceId: "", category: "" });
  const [newFeature, setNewFeature] = useState("");
  const [editingService, setEditingService] = useState(null);
  const [editingDetail, setEditingDetail] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const iconOptions = ["Droplet", "Shirt", "Monitor", "Warehouse", "Sofa", "Wrench", "Book"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Services
        const servicesRef = ref(db, "services");
        const servicesSnapshot = await get(servicesRef);
        if (servicesSnapshot.exists()) {
          const servicesData = Object.entries(servicesSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setServices(servicesData);
        }

        // Fetch Service Details
        const detailsRef = ref(db, "serviceDetails");
        const detailsSnapshot = await get(detailsRef);
        if (detailsSnapshot.exists()) {
          const detailsData = Object.entries(detailsSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setServiceDetails(detailsData);
        }

        // Fetch Categories
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

  // Service Handlers
  const handleAddService = async () => {
    if (!newService.id || !newService.title) return;
    try {
      const serviceRef = ref(db, `services/${newService.id}`);
      await set(serviceRef, { title: newService.title, icon: newService.icon });
      setServices([...services, { id: newService.id, title: newService.title, icon: newService.icon }]);
      setNewService({ id: "", title: "", icon: "Book" });
    } catch (error) {
      console.error("Xidmət əlavə edilərkən xəta: ", error);
    }
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setNewService(service);
  };

  const handleUpdateService = async () => {
    try {
      const serviceRef = ref(db, `services/${editingService.id}`);
      await set(serviceRef, { title: newService.title, icon: newService.icon });
      setServices(services.map((s) => (s.id === editingService.id ? { id: editingService.id, ...newService } : s)));
      setEditingService(null);
      setNewService({ id: "", title: "", icon: "Book" });
    } catch (error) {
      console.error("Xidmət yenilənərkən xəta: ", error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      const serviceRef = ref(db, `services/${id}`);
      await remove(serviceRef);
      setServices(services.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Xidmət silinərkən xəta: ", error);
    }
  };

  // Service Detail Handlers
  const handleAddServiceDetail = async () => {
    if (!newServiceDetail.serviceId || !newServiceDetail.details) return;
    try {
      const detailRef = ref(db, `serviceDetails/${newServiceDetail.serviceId}`);
      await set(detailRef, { details: newServiceDetail.details, features: newServiceDetail.features });
      setServiceDetails([...serviceDetails, { id: newServiceDetail.serviceId, ...newServiceDetail }]);
      setNewServiceDetail({ serviceId: "", details: "", features: [] });
      setNewFeature("");
    } catch (error) {
      console.error("Xidmət təfərrüatı əlavə edilərkən xəta: ", error);
    }
  };

  const handleEditServiceDetail = (detail) => {
    setEditingDetail(detail);
    setNewServiceDetail(detail);
  };

  const handleUpdateServiceDetail = async () => {
    try {
      const detailRef = ref(db, `serviceDetails/${editingDetail.id}`);
      await set(detailRef, { details: newServiceDetail.details, features: newServiceDetail.features });
      setServiceDetails(serviceDetails.map((d) => (d.id === editingDetail.id ? { id: editingDetail.id, ...newServiceDetail } : d)));
      setEditingDetail(null);
      setNewServiceDetail({ serviceId: "", details: "", features: [] });
      setNewFeature("");
    } catch (error) {
      console.error("Xidmət təfərrüatı yenilənərkən xəta: ", error);
    }
  };

  const handleDeleteServiceDetail = async (id) => {
    try {
      const detailRef = ref(db, `serviceDetails/${id}`);
      await remove(detailRef);
      setServiceDetails(serviceDetails.filter((d) => d.id !== id));
    } catch (error) {
      console.error("Xidmət təfərrüatı silinərkən xəta: ", error);
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewServiceDetail({ ...newServiceDetail, features: [...newServiceDetail.features, newFeature] });
      setNewFeature("");
    }
  };

  // Category Handlers
  const handleAddCategory = async () => {
    if (!newCategory.serviceId || !newCategory.category) return;
    try {
      const categoryRef = ref(db, `categories/${newCategory.serviceId}`);
      await set(categoryRef, { category: newCategory.category });
      setCategories([...categories, { id: newCategory.serviceId, ...newCategory }]);
      setNewCategory({ serviceId: "", category: "" });
    } catch (error) {
      console.error("Kateqoriya əlavə edilərkən xəta: ", error);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setNewCategory(category);
  };

  const handleUpdateCategory = async () => {
    try {
      const categoryRef = ref(db, `categories/${editingCategory.id}`);
      await set(categoryRef, { category: newCategory.category });
      setCategories(categories.map((c) => (c.id === editingCategory.id ? { id: editingCategory.id, ...newCategory } : c)));
      setEditingCategory(null);
      setNewCategory({ serviceId: "", category: "" });
    } catch (error) {
      console.error("Kateqoriya yenilənərkən xəta: ", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      const categoryRef = ref(db, `categories/${id}`);
      await remove(categoryRef);
      setCategories(categories.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Kateqoriya silinərkən xəta: ", error);
    }
  };

  return (
    <div className="servicesAdminContainer">
      <Helmet>
        <title>Xidmətlər Admin - PRIME TRADE GROUP MMC</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="servicesAdminWrapper">
        <h2 className="servicesAdminTitle">Xidmətlər Admin</h2>
        <p className="servicesAdminSubtitle">Xidmətləri, təfərrüatları və kateqoriyaları idarə et</p>

        <div className="servicesAdminTabs">
          <button
            className={`servicesAdminTabButton ${activeTab === "services" ? "active" : ""}`}
            onClick={() => setActiveTab("services")}
          >
            Xidmətlər
          </button>
          <button
            className={`servicesAdminTabButton ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Xidmət Təfərrüatları
          </button>
          <button
            className={`servicesAdminTabButton ${activeTab === "categories" ? "active" : ""}`}
            onClick={() => setActiveTab("categories")}
          >
            Kateqoriyalar
          </button>
        </div>

        {activeTab === "services" && (
          <section className="servicesAdminSection">
            <h3 className="servicesAdminSectionTitle">{editingService ? "Xidməti Redaktə Et" : "Yeni Xidmət Əlavə Et"}</h3>
            <div className="servicesAdminForm">
              <div className="servicesAdminInputGroup">
                <label htmlFor="serviceId" className="servicesAdminInputLabel">Xidmət ID</label>
                <input
                  type="text"
                  id="serviceId"
                  className="servicesAdminInputField"
                  value={newService.id}
                  onChange={(e) => setNewService({ ...newService, id: e.target.value })}
                  placeholder="Xidmət ID daxil edin (məsələn, cleaning)"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="title" className="servicesAdminInputLabel">Xidmət Başlığı</label>
                <input
                  type="text"
                  id="title"
                  className="servicesAdminInputField"
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  placeholder="Xidmət başlığını daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="icon" className="servicesAdminInputLabel">İkon</label>
                <select
                  id="icon"
                  className="servicesAdminInputField"
                  value={newService.icon}
                  onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                >
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              <button
                className="servicesAdminSubmitButton"
                onClick={editingService ? handleUpdateService : handleAddService}
              >
                {editingService ? "Xidməti Yenilə" : "Xidmət Əlavə Et"}
              </button>
              {editingService && (
                <button
                  className="servicesAdminCancelButton"
                  onClick={() => {
                    setEditingService(null);
                    setNewService({ id: "", title: "", icon: "Book" });
                  }}
                >
                  Ləğv Et
                </button>
              )}
            </div>
            <h3 className="servicesAdminSectionTitle">Xidmətlər Siyahısı</h3>
            <div className="servicesAdminList">
              {services.map((service) => (
                <div key={service.id} className="servicesAdminServiceCard">
                  <h4 className="servicesAdminServiceTitle">{service.title}</h4>
                  <p className="servicesAdminServiceCategory">{service.id}</p>
                  <div className="servicesAdminButtonGroup">
                    <button
                      className="servicesAdminEditButton"
                      onClick={() => handleEditService(service)}
                    >
                      Redaktə Et
                    </button>
                    <button
                      className="servicesAdminDeleteButton"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "details" && (
          <section className="servicesAdminSection">
            <h3 className="servicesAdminSectionTitle">{editingDetail ? "Təfərrüatı Redaktə Et" : "Yeni Təfərrüat Əlavə Et"}</h3>
            <div className="servicesAdminForm">
              <div className="servicesAdminInputGroup">
                <label htmlFor="detailServiceId" className="servicesAdminInputLabel">Xidmət ID</label>
                <input
                  type="text"
                  id="detailServiceId"
                  className="servicesAdminInputField"
                  value={newServiceDetail.serviceId}
                  onChange={(e) => setNewServiceDetail({ ...newServiceDetail, serviceId: e.target.value })}
                  placeholder="Xidmət ID daxil edin (məsələn, cleaning)"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="details" className="servicesAdminInputLabel">Təfərrüatlar</label>
                <textarea
                  id="details"
                  className="servicesAdminInputField"
                  value={newServiceDetail.details}
                  onChange={(e) => setNewServiceDetail({ ...newServiceDetail, details: e.target.value })}
                  placeholder="Xidmət təfərrüatlarını daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="feature" className="servicesAdminInputLabel">Xüsusiyyətlər</label>
                <div className="servicesAdminFeatureInput">
                  <input
                    type="text"
                    id="feature"
                    className="servicesAdminInputField"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Xüsusiyyəti daxil edin"
                  />
                  <button className="servicesAdminAddButton" onClick={handleAddFeature}>
                    Xüsusiyyət Əlavə Et
                  </button>
                </div>
                <ul className="servicesAdminFeatureList">
                  {newServiceDetail.features.map((feature, index) => (
                    <li key={index} className="servicesAdminFeatureItem">{feature}</li>
                  ))}
                </ul>
              </div>
              <button
                className="servicesAdminSubmitButton"
                onClick={editingDetail ? handleUpdateServiceDetail : handleAddServiceDetail}
              >
                {editingDetail ? "Təfərrüatı Yenilə" : "Təfərrüat Əlavə Et"}
              </button>
              {editingDetail && (
                <button
                  className="servicesAdminCancelButton"
                  onClick={() => {
                    setEditingDetail(null);
                    setNewServiceDetail({ serviceId: "", details: "", features: [] });
                    setNewFeature("");
                  }}
                >
                  Ləğv Et
                </button>
              )}
            </div>
            <h3 className="servicesAdminSectionTitle">Təfərrüatlar Siyahısı</h3>
            <div className="servicesAdminList">
              {serviceDetails.map((detail) => (
                <div key={detail.id} className="servicesAdminServiceCard">
                  <h4 className="servicesAdminServiceTitle">{detail.serviceId}</h4>
                  <p className="servicesAdminServiceCategory">{detail.details}</p>
                  <div className="servicesAdminButtonGroup">
                    <button
                      className="servicesAdminEditButton"
                      onClick={() => handleEditServiceDetail(detail)}
                    >
                      Redaktə Et
                    </button>
                    <button
                      className="servicesAdminDeleteButton"
                      onClick={() => handleDeleteServiceDetail(detail.id)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "categories" && (
          <section className="servicesAdminSection">
            <h3 className="servicesAdminSectionTitle">{editingCategory ? "Kateqoriyanı Redaktə Et" : "Yeni Kateqoriya Əlavə Et"}</h3>
            <div className="servicesAdminForm">
              <div className="servicesAdminInputGroup">
                <label htmlFor="categoryServiceId" className="servicesAdminInputLabel">Xidmət ID</label>
                <input
                  type="text"
                  id="categoryServiceId"
                  className="servicesAdminInputField"
                  value={newCategory.serviceId}
                  onChange={(e) => setNewCategory({ ...newCategory, serviceId: e.target.value })}
                  placeholder="Xidmət ID daxil edin (məsələn, cleaning)"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="category" className="servicesAdminInputLabel">Kateqoriya</label>
                <input
                  type="text"
                  id="category"
                  className="servicesAdminInputField"
                  value={newCategory.category}
                  onChange={(e) => setNewCategory({ ...newCategory, category: e.target.value })}
                  placeholder="Kateqoriyanı daxil edin"
                />
              </div>
              <button
                className="servicesAdminSubmitButton"
                onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
              >
                {editingCategory ? "Kateqoriyanı Yenilə" : "Kateqoriya Əlavə Et"}
              </button>
              {editingCategory && (
                <button
                  className="servicesAdminCancelButton"
                  onClick={() => {
                    setEditingCategory(null);
                    setNewCategory({ serviceId: "", category: "" });
                  }}
                >
                  Ləğv Et
                </button>
              )}
            </div>
            <h3 className="servicesAdminSectionTitle">Kateqoriyalar Siyahısı</h3>
            <div className="servicesAdminList">
              {categories.map((category) => (
                <div key={category.id} className="servicesAdminServiceCard">
                  <h4 className="servicesAdminServiceTitle">{category.serviceId}</h4>
                  <p className="servicesAdminServiceCategory">{category.category}</p>
                  <div className="servicesAdminButtonGroup">
                    <button
                      className="servicesAdminEditButton"
                      onClick={() => handleEditCategory(category)}
                    >
                      Redaktə Et
                    </button>
                    <button
                      className="servicesAdminDeleteButton"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServicesAdmin;