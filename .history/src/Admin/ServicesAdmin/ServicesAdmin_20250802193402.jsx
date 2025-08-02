import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Server";
import { ref, get, set, remove } from "firebase/database";
import "./ServicesAdmin.scss";

const ServicesAdmin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: "",
    icon: "Book",
    category: "",
    details: "",
    features: [],
    products: [],
  });
  const [editingService, setEditingService] = useState(null);
  const [newFeature, setNewFeature] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    description: "",
    usage: "",
    features: [],
    volume: "",
    material: "",
    origin: "",
    safety: "",
    releaseDate: "",
    hashtags: [],
    image: "",
  });
  const [newProductFeature, setNewProductFeature] = useState("");
  const [newProductHashtag, setNewProductHashtag] = useState("");
  const iconOptions = ["Droplet", "Shirt", "Monitor", "Warehouse", "Sofa", "Wrench", "Book"];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesRef = ref(db, "services");
        const snapshot = await get(servicesRef);
        if (snapshot.exists()) {
          const servicesData = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setServices(servicesData);
        } else {
          console.error("No services found!");
        }
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      const newServiceRef = ref(db, `services/${Date.now()}`);
      await set(newServiceRef, newService);
      setServices([...services, { id: Date.now().toString(), ...newService }]);
      setNewService({
        title: "",
        icon: "Book",
        category: "",
        details: "",
        features: [],
        products: [],
      });
      setNewFeature("");
      setNewProduct({
        name: "",
        category: "",
        description: "",
        usage: "",
        features: [],
        volume: "",
        material: "",
        origin: "",
        safety: "",
        releaseDate: "",
        hashtags: [],
        image: "",
      });
    } catch (error) {
      console.error("Error adding service: ", error);
    }
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setNewService(service);
  };

  const handleUpdateService = async () => {
    try {
      const serviceRef = ref(db, `services/${editingService.id}`);
      await set(serviceRef, newService);
      setServices(services.map((s) => (s.id === editingService.id ? { id: editingService.id, ...newService } : s)));
      setEditingService(null);
      setNewService({
        title: "",
        icon: "Book",
        category: "",
        details: "",
        features: [],
        products: [],
      });
      setNewFeature("");
    } catch (error) {
      console.error("Error updating service: ", error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      const serviceRef = ref(db, `services/${id}`);
      await remove(serviceRef);
      setServices(services.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting service: ", error);
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewService({ ...newService, features: [...newService.features, newFeature] });
      setNewFeature("");
    }
  };

  const handleAddProduct = () => {
    if (newProduct.name.trim()) {
      setNewService({
        ...newService,
        products: [...newService.products, newProduct],
      });
      setNewProduct({
        name: "",
        category: "",
        description: "",
        usage: "",
        features: [],
        volume: "",
        material: "",
        origin: "",
        safety: "",
        releaseDate: "",
        hashtags: [],
        image: "",
      });
      setNewProductFeature("");
      setNewProductHashtag("");
    }
  };

  const handleAddProductFeature = () => {
    if (newProductFeature.trim()) {
      setNewProduct({ ...newProduct, features: [...newProduct.features, newProductFeature] });
      setNewProductFeature("");
    }
  };

  const handleAddProductHashtag = () => {
    if (newProductHashtag.trim()) {
      setNewProduct({ ...newProduct, hashtags: [...newProduct.hashtags, newProductHashtag] });
      setNewProductHashtag("");
    }
  };

  return (
    <div className="servicesAdminContainer">
      <Helmet>
        <title>{t("admin.title")} - PRIME TRADE GROUP MMC</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="servicesAdminWrapper">
        <h2 className="servicesAdminTitle">{t("admin.title")}</h2>
        <p className="servicesAdminSubtitle">{t("admin.subtitle")}</p>

        <section className="servicesAdminSection">
          <h3 className="servicesAdminSectionTitle">{editingService ? t("admin.edit_service") : t("admin.add_service")}</h3>
          <div className="servicesAdminForm">
            <div className="servicesAdminInputGroup">
              <label htmlFor="title" className="servicesAdminInputLabel">{t("admin.service_title")}</label>
              <input
                type="text"
                id="title"
                className="servicesAdminInputField"
                value={newService.title}
                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                placeholder={t("admin.service_title_placeholder")}
              />
            </div>
            <div className="servicesAdminInputGroup">
              <label htmlFor="icon" className="servicesAdminInputLabel">{t("admin.icon")}</label>
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
            <div className="servicesAdminInputGroup">
              <label htmlFor="category" className="servicesAdminInputLabel">{t("admin.category")}</label>
              <input
                type="text"
                id="category"
                className="servicesAdminInputField"
                value={newService.category}
                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                placeholder={t("admin.category_placeholder")}
              />
            </div>
            <div className="servicesAdminInputGroup">
              <label htmlFor="details" className="servicesAdminInputLabel">{t("admin.details")}</label>
              <textarea
                id="details"
                className="servicesAdminInputField"
                value={newService.details}
                onChange={(e) => setNewService({ ...newService, details: e.target.value })}
                placeholder={t("admin.details_placeholder")}
              />
            </div>
            <div className="servicesAdminInputGroup">
              <label htmlFor="feature" className="servicesAdminInputLabel">{t("admin.features")}</label>
              <div className="servicesAdminFeatureInput">
                <input
                  type="text"
                  id="feature"
                  className="servicesAdminInputField"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder={t("admin.feature_placeholder")}
                />
                <button className="servicesAdminAddButton" onClick={handleAddFeature}>
                  {t("admin.add_feature")}
                </button>
              </div>
              <ul className="servicesAdminFeatureList">
                {newService.features.map((feature, index) => (
                  <li key={index} className="servicesAdminFeatureItem">{feature}</li>
                ))}
              </ul>
            </div>

            <h4 className="servicesAdminSubSectionTitle">{t("admin.add_product")}</h4>
            <div className="servicesAdminProductForm">
              <div className="servicesAdminInputGroup">
                <label htmlFor="productName" className="servicesAdminInputLabel">{t("admin.product_name")}</label>
                <input
                  type="text"
                  id="productName"
                  className="servicesAdminInputField"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder={t("admin.product_name_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productCategory" className="servicesAdminInputLabel">{t("admin.product_category")}</label>
                <input
                  type="text"
                  id="productCategory"
                  className="servicesAdminInputField"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  placeholder={t("admin.product_category_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productDescription" className="servicesAdminInputLabel">{t("admin.product_description")}</label>
                <textarea
                  id="productDescription"
                  className="servicesAdminInputField"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  placeholder={t("admin.product_description_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productUsage" className="servicesAdminInputLabel">{t("admin.product_usage")}</label>
                <textarea
                  id="productUsage"
                  className="servicesAdminInputField"
                  value={newProduct.usage}
                  onChange={(e) => setNewProduct({ ...newProduct, usage: e.target.value })}
                  placeholder={t("admin.product_usage_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productFeature" className="servicesAdminInputLabel">{t("admin.product_features")}</label>
                <div className="servicesAdminFeatureInput">
                  <input
                    type="text"
                    id="productFeature"
                    className="servicesAdminInputField"
                    value={newProductFeature}
                    onChange={(e) => setNewProductFeature(e.target.value)}
                    placeholder={t("admin.product_feature_placeholder")}
                  />
                  <button className="servicesAdminAddButton" onClick={handleAddProductFeature}>
                    {t("admin.add_product_feature")}
                  </button>
                </div>
                <ul className="servicesAdminFeatureList">
                  {newProduct.features.map((feature, index) => (
                    <li key={index} className="servicesAdminFeatureItem">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productVolume" className="servicesAdminInputLabel">{t("admin.product_volume")}</label>
                <input
                  type="text"
                  id="productVolume"
                  className="servicesAdminInputField"
                  value={newProduct.volume}
                  onChange={(e) => setNewProduct({ ...newProduct, volume: e.target.value })}
                  placeholder={t("admin.product_volume_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productMaterial" className="servicesAdminInputLabel">{t("admin.product_material")}</label>
                <input
                  type="text"
                  id="productMaterial"
                  className="servicesAdminInputField"
                  value={newProduct.material}
                  onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                  placeholder={t("admin.product_material_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productOrigin" className="servicesAdminInputLabel">{t("admin.product_origin")}</label>
                <input
                  type="text"
                  id="productOrigin"
                  className="servicesAdminInputField"
                  value={newProduct.origin}
                  onChange={(e) => setNewProduct({ ...newProduct, origin: e.target.value })}
                  placeholder={t("admin.product_origin_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productSafety" className="servicesAdminInputLabel">{t("admin.product_safety")}</label>
                <input
                  type="text"
                  id="productSafety"
                  className="servicesAdminInputField"
                  value={newProduct.safety}
                  onChange={(e) => setNewProduct({ ...newProduct, safety: e.target.value })}
                  placeholder={t("admin.product_safety_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productReleaseDate" className="servicesAdminInputLabel">{t("admin.product_release_date")}</label>
                <input
                  type="text"
                  id="productReleaseDate"
                  className="servicesAdminInputField"
                  value={newProduct.releaseDate}
                  onChange={(e) => setNewProduct({ ...newProduct, releaseDate: e.target.value })}
                  placeholder={t("admin.product_release_date_placeholder")}
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productHashtag" className="servicesAdminInputLabel">{t("admin.product_hashtags")}</label>
                <div className="servicesAdminFeatureInput">
                  <input
                    type="text"
                    id="productHashtag"
                    className="servicesAdminInputField"
                    value={newProductHashtag}
                    onChange={(e) => setNewProductHashtag(e.target.value)}
                    placeholder={t("admin.product_hashtag_placeholder")}
                  />
                  <button className="servicesAdminAddButton" onClick={handleAddProductHashtag}>
                    {t("admin.add_product_hashtag")}
                  </button>
                </div>
                <ul className="servicesAdminFeatureList">
                  {newProduct.hashtags.map((hashtag, index) => (
                    <li key={index} className="servicesAdminFeatureItem">{hashtag}</li>
                  ))}
                </ul>
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productImage" className="servicesAdminInputLabel">{t("admin.product_image")}</label>
                <input
                  type="text"
                  id="productImage"
                  className="servicesAdminInputField"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  placeholder={t("admin.product_image_placeholder")}
                />
              </div>
              <button className="servicesAdminAddButton" onClick={handleAddProduct}>
                {t("admin.add_product")}
              </button>
            </div>

            <button
              className="servicesAdminSubmitButton"
              onClick={editingService ? handleUpdateService : handleAddService}
            >
              {editingService ? t("admin.update_service") : t("admin.add_service_button")}
            </button>
            {editingService && (
              <button
                className="servicesAdminCancelButton"
                onClick={() => {
                  setEditingService(null);
                  setNewService({
                    title: "",
                    icon: "Book",
                    category: "",
                    details: "",
                    features: [],
                    products: [],
                  });
                  setNewFeature("");
                }}
              >
                {t("admin.cancel")}
              </button>
            )}
          </div>
        </section>

        <section className="servicesAdminListSection">
          <h3 className="servicesAdminSectionTitle">{t("admin.services_list")}</h3>
          <div className="servicesAdminList">
            {services.map((service) => (
              <div key={service.id} className="servicesAdminServiceCard">
                <h4 className="servicesAdminServiceTitle">{service.title}</h4>
                <p className="servicesAdminServiceCategory">{service.category}</p>
                <div className="servicesAdminButtonGroup">
                  <button
                    className="servicesAdminEditButton"
                    onClick={() => handleEditService(service)}
                  >
                    {t("admin.edit")}
                  </button>
                  <button
                    className="servicesAdminDeleteButton"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    {t("admin.delete")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesAdmin;