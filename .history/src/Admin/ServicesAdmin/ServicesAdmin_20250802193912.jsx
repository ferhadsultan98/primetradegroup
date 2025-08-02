import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Server";
import { ref, get, set, remove } from "firebase/database";
import "./ServicesAdmin.scss";

const ServicesAdmin = () => {
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
          console.error("Xidmətlər tapılmadı!");
        }
      } catch (error) {
        console.error("Xidmətləri əldə edərkən xəta: ", error);
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
        <title>Xidmətlər Admin - PRIME TRADE GROUP MMC</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="servicesAdminWrapper">
        <h2 className="servicesAdminTitle">Xidmətlər Admin</h2>
        <p className="servicesAdminSubtitle">Xidmətləri idarə et və yeni xidmətlər əlavə et</p>

        <section className="servicesAdminSection">
          <h3 className="servicesAdminSectionTitle">{editingService ? "Xidməti Redaktə Et" : "Yeni Xidmət Əlavə Et"}</h3>
          <div className="servicesAdminForm">
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
            <div className="servicesAdminInputGroup">
              <label htmlFor="category" className="servicesAdminInputLabel">Kateqoriya</label>
              <input
                type="text"
                id="category"
                className="servicesAdminInputField"
                value={newService.category}
                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                placeholder="Kateqoriyanı daxil edin"
              />
            </div>
            <div className="servicesAdminInputGroup">
              <label htmlFor="details" className="servicesAdminInputLabel">Təfərrüatlar</label>
              <textarea
                id="details"
                className="servicesAdminInputField"
                value={newService.details}
                onChange={(e) => setNewService({ ...newService, details: e.target.value })}
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
                {newService.features.map((feature, index) => (
                  <li key={index} className="servicesAdminFeatureItem">{feature}</li>
                ))}
              </ul>
            </div>

            <h4 className="servicesAdminSubSectionTitle">Məhsul Əlavə Et</h4>
            <div className="servicesAdminProductForm">
              <div className="servicesAdminInputGroup">
                <label htmlFor="productName" className="servicesAdminInputLabel">Məhsul Adı</label>
                <input
                  type="text"
                  id="productName"
                  className="servicesAdminInputField"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="Məhsul adını daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productCategory" className="servicesAdminInputLabel">Məhsul Kateqoriyası</label>
                <input
                  type="text"
                  id="productCategory"
                  className="servicesAdminInputField"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  placeholder="Məhsul kateqoriyasını daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productDescription" className="servicesAdminInputLabel">Məhsul Təsviri</label>
                <textarea
                  id="productDescription"
                  className="servicesAdminInputField"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  placeholder="Məhsul təsvirini daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productUsage" className="servicesAdminInputLabel">Məhsul İstifadəsi</label>
                <textarea
                  id="productUsage"
                  className="servicesAdminInputField"
                  value={newProduct.usage}
                  onChange={(e) => setNewProduct({ ...newProduct, usage: e.target.value })}
                  placeholder="Məhsul istifadəsini daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productFeature" className="servicesAdminInputLabel">Məhsul Xüsusiyyətləri</label>
                <div className="servicesAdminFeatureInput">
                  <input
                    type="text"
                    id="productFeature"
                    className="servicesAdminInputField"
                    value={newProductFeature}
                    onChange={(e) => setNewProductFeature(e.target.value)}
                    placeholder="Məhsul xüsusiyyətini daxil edin"
                  />
                  <button className="servicesAdminAddButton" onClick={handleAddProductFeature}>
                    Xüsusiyyət Əlavə Et
                  </button>
                </div>
                <ul className="servicesAdminFeatureList">
                  {newProduct.features.map((feature, index) => (
                    <li key={index} className="servicesAdminFeatureItem">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productVolume" className="servicesAdminInputLabel">Həcm</label>
                <input
                  type="text"
                  id="productVolume"
                  className="servicesAdminInputField"
                  value={newProduct.volume}
                  onChange={(e) => setNewProduct({ ...newProduct, volume: e.target.value })}
                  placeholder="Məhsul həcmini daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productMaterial" className="servicesAdminInputLabel">Material</label>
                <input
                  type="text"
                  id="productMaterial"
                  className="servicesAdminInputField"
                  value={newProduct.material}
                  onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                  placeholder="Məhsul materialını daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productOrigin" className="servicesAdminInputLabel">Mənşə</label>
                <input
                  type="text"
                  id="productOrigin"
                  className="servicesAdminInputField"
                  value={newProduct.origin}
                  onChange={(e) => setNewProduct({ ...newProduct, origin: e.target.value })}
                  placeholder="Məhsul mənşəyini daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productSafety" className="servicesAdminInputLabel">Təhlükəsizlik</label>
                <input
                  type="text"
                  id="productSafety"
                  className="servicesAdminInputField"
                  value={newProduct.safety}
                  onChange={(e) => setNewProduct({ ...newProduct, safety: e.target.value })}
                  placeholder="Təhlükəsizlik məlumatlarını daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productReleaseDate" className="servicesAdminInputLabel">Buraxılış Tarixi</label>
                <input
                  type="text"
                  id="productReleaseDate"
                  className="servicesAdminInputField"
                  value={newProduct.releaseDate}
                  onChange={(e) => setNewProduct({ ...newProduct, releaseDate: e.target.value })}
                  placeholder="Buraxılış tarixini daxil edin"
                />
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productHashtag" className="servicesAdminInputLabel">Haştaqlar</label>
                <div className="servicesAdminFeatureInput">
                  <input
                    type="text"
                    id="productHashtag"
                    className="servicesAdminInputField"
                    value={newProductHashtag}
                    onChange={(e) => setNewProductHashtag(e.target.value)}
                    placeholder="Haştaq daxil edin"
                  />
                  <button className="servicesAdminAddButton" onClick={handleAddProductHashtag}>
                    Haştaq Əlavə Et
                  </button>
                </div>
                <ul className="servicesAdminFeatureList">
                  {newProduct.hashtags.map((hashtag, index) => (
                    <li key={index} className="servicesAdminFeatureItem">{hashtag}</li>
                  ))}
                </ul>
              </div>
              <div className="servicesAdminInputGroup">
                <label htmlFor="productImage" className="servicesAdminInputLabel">Şəkil</label>
                <input
                  type="text"
                  id="productImage"
                  className="servicesAdminInputField"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  placeholder="Şəkil URL-ni daxil edin"
                />
              </div>
              <button className="servicesAdminAddButton" onClick={handleAddProduct}>
                Məhsul Əlavə Et
              </button>
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
                Ləğv Et
              </button>
            )}
          </div>
        </section>

        <section className="servicesAdminListSection">
          <h3 className="servicesAdminSectionTitle">Xidmətlər Siyahısı</h3>
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
      </div>
    </div>
  );
};

export default ServicesAdmin;