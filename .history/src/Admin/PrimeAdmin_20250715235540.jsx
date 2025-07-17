import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { db } from "../firebaseConfig";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./Admin.scss";

const iconMap = {
  Droplet,
  Shirt,
  Monitor,
  Warehouse,
  Sofa,
  Wrench,
  Book,
};

const Admin = () => {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    id: "",
    translations: { en: { title: "", details: "" }, az: { title: "", details: "" }, ru: { title: "", details: "" } },
    icon: "Droplet",
    products: [],
  });
  const [newProduct, setNewProduct] = useState({
    id: "",
    translations: { en: { name: "", description: "", usage: "" }, az: { name: "", description: "", usage: "" }, ru: { name: "", description: "", usage: "" } },
    image: "",
    features: [{ en: "", az: "", ru: "" }],
    volume: "",
    ingredients: { en: "", az: "", ru: "" },
    origin: "",
    safety: { en: "", az: "", ru: "" },
    releaseDate: "",
    hashtags: [],
  });
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const handleAddService = async () => {
    if (!newService.id) return alert(t("admin.errorId"));
    try {
      await setDoc(doc(db, "services", newService.id), newService);
      setServices([...services, newService]);
      setNewService({
        id: "",
        translations: { en: { title: "", details: "" }, az: { title: "", details: "" }, ru: { title: "", details: "" } },
        icon: "Droplet",
        products: [],
      });
    } catch (error) {
      console.error("Error adding service:", error);
      alert(t("admin.errorSave"));
    }
  };

  const handleAddProduct = async () => {
    if (!selectedServiceId || !newProduct.id) return alert(t("admin.errorId"));
    try {
      const updatedService = services.find((s) => s.id === selectedServiceId);
      updatedService.products.push(newProduct);
      await setDoc(doc(db, "services", selectedServiceId), updatedService);
      setServices(services.map((s) => (s.id === selectedServiceId ? updatedService : s)));
      setNewProduct({
        id: "",
        translations: { en: { name: "", description: "", usage: "" }, az: { name: "", description: "", usage: "" }, ru: { name: "", description: "", usage: "" } },
        image: "",
        features: [{ en: "", az: "", ru: "" }],
        volume: "",
        ingredients: { en: "", az: "", ru: "" },
        origin: "",
        safety: { en: "", az: "", ru: "" },
        releaseDate: "",
        hashtags: [],
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert(t("admin.errorSave"));
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="adminContainer">
      <Helmet>
        <title>{t("admin.title")} - PRIME TRADE GROUP MMC</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="languageSwitcher">
        <button onClick={() => changeLanguage("en")} className={language === "en" ? "active" : ""}>EN</button>
        <button onClick={() => changeLanguage("az")} className={language === "az" ? "active" : ""}>AZ</button>
        <button onClick={() => changeLanguage("ru")} className={language === "ru" ? "active" : ""}>RU</button>
      </div>

      <h1>{t("admin.title")}</h1>

      <section className="addServiceSection">
        <h2>{t("admin.addService")}</h2>
        <input
          type="text"
          placeholder={t("admin.serviceId")}
          value={newService.id}
          onChange={(e) => setNewService({ ...newService, id: e.target.value })}
        />
        <input
          type="text"
          placeholder={t("admin.serviceTitle")}
          value={newService.translations[language].title}
          onChange={(e) =>
            setNewService({
              ...newService,
              translations: { ...newService.translations, [language]: { ...newService.translations[language], title: e.target.value } },
            })
          }
        />
        <textarea
          placeholder={t("admin.serviceDetails")}
          value={newService.translations[language].details}
          onChange={(e) =>
            setNewService({
              ...newService,
              translations: { ...newService.translations, [language]: { ...newService.translations[language], details: e.target.value } },
            })
          }
        />
        <select
          value={newService.icon}
          onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
        >
          {Object.keys(iconMap).map((icon) => (
            <option key={icon} value={icon}>{icon}</option>
          ))}
        </select>
        <button onClick={handleAddService}>{t("admin.saveService")}</button>
      </section>

      <section className="addProductSection">
        <h2>{t("admin.addProduct")}</h2>
        <select onChange={(e) => setSelectedServiceId(e.target.value)} value={selectedServiceId}>
          <option value="">{t("admin.selectService")}</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.translations[language].title}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder={t("admin.productId")}
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
        />
        <input
          type="text"
          placeholder={t("admin.productName")}
          value={newProduct.translations[language].name}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              translations: { ...newProduct.translations, [language]: { ...newProduct.translations[language], name: e.target.value } },
            })
          }
        />
        <textarea
          placeholder={t("admin.productDescription")}
          value={newProduct.translations[language].description}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              translations: { ...newProduct.translations, [language]: { ...newProduct.translations[language], description: e.target.value } },
            })
          }
        />
        <textarea
          placeholder={t("admin.productUsage")}
          value={newProduct.translations[language].usage}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              translations: { ...newProduct.translations, [language]: { ...newProduct.translations[language], usage: e.target.value } },
            })
          }
        />
        <input
          type="text"
          placeholder={t("admin.productImage")}
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <input
          type="text"
          placeholder={t("admin.productFeatures")}
          onChange={(e) => {
            const features = e.target.value.split(",").map((f) => ({ en: f.trim(), az: f.trim(), ru: f.trim() }));
            setNewProduct({ ...newProduct, features });
          }}
        />
        <input
          type="text"
          placeholder={t("admin.productVolume")}
          value={newProduct.volume}
          onChange={(e) => setNewProduct({ ...newProduct, volume: e.target.value })}
        />
        <input
          type="text"
          placeholder={t("admin.productIngredients")}
          value={newProduct.ingredients[language]}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              ingredients: { ...newProduct.ingredients, [language]: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder={t("admin.productOrigin")}
          value={newProduct.origin}
          onChange={(e) => setNewProduct({ ...newProduct, origin: e.target.value })}
        />
        <input
          type="text"
          placeholder={t("admin.productSafety")}
          value={newProduct.safety[language]}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              safety: { ...newProduct.safety, [language]: e.target.value },
            })
          }
        />
        <input
          type="date"
          placeholder={t("admin.productReleaseDate")}
          value={newProduct.releaseDate}
          onChange={(e) => setNewProduct({ ...newProduct, releaseDate: e.target.value })}
        />
        <input
          type="text"
          placeholder={t("admin.productHashtags")}
          value={newProduct.hashtags.join(",")}
          onChange={(e) => setNewProduct({ ...newProduct, hashtags: e.target.value.split(",").map((h) => h.trim()) })}
        />
        <button onClick={handleAddProduct}>{t("admin.saveProduct")}</button>
      </section>
    </div>
  );
};

export default Admin;