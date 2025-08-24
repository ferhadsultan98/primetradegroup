import React, { useState, useEffect } from "react";
import { ref, set, remove, push } from "firebase/database";
import { db } from "../../Firebase/Server";

const DetailsTab = ({
  serviceDetails,
  setServiceDetails,
  newServiceDetail,
  setNewServiceDetail,
  newFeature,
  setNewFeature,
  editingDetail,
  setEditingDetail,
  imageFile,
  setImageFile,
  error,
  setError,
  services,
  categories,
  setCategories,
  handleImageUpload,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterServiceId, setFilterServiceId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const resolveCategoryId = async (serviceId, categoryName) => {
    if (!categoryName.trim()) return null;
    setIsLoading(true);
    const lowerName = categoryName.trim().toLowerCase();
    let categoryId;
    try {
      const existingCat = categories.find(
        (c) => c.serviceId === serviceId && c.category.toLowerCase() === lowerName
      );
      if (existingCat) {
        categoryId = existingCat.id;
      } else {
        const categoryRef = ref(db, "categories");
        const newCategoryRef = push(categoryRef);
        await set(newCategoryRef, { serviceId, category: categoryName.trim() });
        categoryId = newCategoryRef.key;
        setCategories([...categories, { id: categoryId, serviceId, category: categoryName.trim() }]);
      }
      return categoryId;
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddServiceDetail = async () => {
    if (!newServiceDetail.serviceId || !newServiceDetail.categoryName || !newServiceDetail.name || !newServiceDetail.description) {
      setError("Xidmət, kateqoriya, ad və təsvir sahələri mütləq doldurulmalıdır!");
      return;
    }
    setIsLoading(true);
    try {
      setError("");
      const categoryId = await resolveCategoryId(newServiceDetail.serviceId, newServiceDetail.categoryName);
      if (!categoryId) {
        setError("Kateqoriya ID-si əldə edilə bilmədi!");
        return;
      }
      const imageUrl = await handleImageUpload(imageFile);
      const detailRef = ref(db, "serviceDetails");
      const newDetailRef = push(detailRef);
      const detailData = {
        serviceId: newServiceDetail.serviceId,
        categoryId,
        name: newServiceDetail.name,
        description: newServiceDetail.description,
        features: newServiceDetail.features,
        image: imageUrl || "",
        origin: newServiceDetail.origin || "",
      };
      await set(newDetailRef, detailData);
      setServiceDetails([...serviceDetails, { id: newDetailRef.key, ...detailData }]);
      setNewServiceDetail({
        serviceId: "",
        categoryName: "",
        name: "",
        description: "",
        features: [],
        image: null,
        origin: "",
      });
      setNewFeature("");
      setImageFile(null);
    } catch (error) {
      console.error("Xidmət təfərrüatı əlavə edilərkən xəta: ", error);
      setError("Xidmət təfərrüatı əlavə edilərkən xəta baş verdi!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditServiceDetail = (detail) => {
    setEditingDetail(detail);
    setNewServiceDetail({
      serviceId: detail.serviceId,
      categoryName: categories.find((c) => c.id === detail.categoryId)?.category || "",
      name: detail.name,
      description: detail.description,
      features: detail.features || [],
      image: detail.image || null,
      origin: detail.origin || "",
    });
  };

  const handleUpdateServiceDetail = async () => {
    if (!newServiceDetail.serviceId || !newServiceDetail.categoryName || !newServiceDetail.name || !newServiceDetail.description) {
      setError("Xidmət, kateqoriya, ad və təsvir sahələri mütləq doldurulmalıdır!");
      return;
    }
    setIsLoading(true);
    try {
      setError("");
      const categoryId = await resolveCategoryId(newServiceDetail.serviceId, newServiceDetail.categoryName);
      if (!categoryId) {
        setError("Kateqoriya ID-si əldə edilə bilmədi!");
        return;
      }
      const imageUrl = imageFile ? await handleImageUpload(imageFile) : newServiceDetail.image;
      const detailRef = ref(db, `serviceDetails/${editingDetail.id}`);
      const detailData = {
        serviceId: newServiceDetail.serviceId,
        categoryId,
        name: newServiceDetail.name,
        description: newServiceDetail.description,
        features: newServiceDetail.features,
        image: imageUrl || "",
        origin: newServiceDetail.origin || "",
      };
      await set(detailRef, detailData);
      setServiceDetails(serviceDetails.map((d) => (d.id === editingDetail.id ? { id: editingDetail.id, ...detailData } : d)));
      setEditingDetail(null);
      setNewServiceDetail({
        serviceId: "",
        categoryName: "",
        name: "",
        description: "",
        features: [],
        image: null,
        origin: "",
      });
      setNewFeature("");
      setImageFile(null);
    } catch (error) {
      console.error("Xidmət təfərrüatı yenilənərkən xəta: ", error);
      setError("Xidmət təfərrüatı yenilənərkən xəta baş verdi!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteServiceDetail = async (id) => {
    setIsLoading(true);
    try {
      const detailRef = ref(db, `serviceDetails/${id}`);
      await remove(detailRef);
      setServiceDetails(serviceDetails.filter((d) => d.id !== id));
    } catch (error) {
      console.error("Xidmət təfərrüatı silinərkən xəta: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewServiceDetail({ ...newServiceDetail, features: [...newServiceDetail.features, newFeature] });
      setNewFeature("");
    }
  };

  const filteredCategories = newServiceDetail.serviceId
    ? categories.filter((cat) => cat.serviceId === newServiceDetail.serviceId)
    : [];

  useEffect(() => {
    if (newServiceDetail.serviceId) {
      const lowerQuery = newServiceDetail.categoryName.toLowerCase();
      const matches = filteredCategories.filter((cat) =>
        cat.category.toLowerCase().includes(lowerQuery)
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  }, [newServiceDetail.categoryName, newServiceDetail.serviceId, categories]);

  const handleSelectSuggestion = (category) => {
    setNewServiceDetail({ ...newServiceDetail, categoryName: category.category });
    setShowSuggestions(false);
  };

  const filteredServiceDetails = serviceDetails
    .filter((detail) => detail.serviceId === (filterServiceId || detail.serviceId))
    .filter((detail) =>
      detail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      detail.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredServiceDetails.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredServiceDetails.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="servicesAdminSection">
      <h3 className="servicesAdminSectionTitle">{editingDetail ? "Təfərrüatı Redaktə Et" : "Yeni Təfərrüat Əlavə Et"}</h3>
      {error && <p className="servicesAdminError">{error}</p>}
      {isLoading && <p className="servicesAdminLoading">Yüklənir...</p>}
      <div className="servicesAdminForm">
        <div className="servicesAdminInputGroup">
          <label htmlFor="detailServiceId" className="servicesAdminInputLabel">Xidmət *</label>
          <select
            id="detailServiceId"
            className="servicesAdminInputField"
            value={newServiceDetail.serviceId}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, serviceId: e.target.value })}
            required
            disabled={isLoading}
          >
            <option value="">Xidmət seçin</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{service.title}</option>
            ))}
          </select>
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="categoryName" className="servicesAdminInputLabel">Kateqoriya *</label>
          <input
            type="text"
            id="categoryName"
            className="servicesAdminInputField"
            value={newServiceDetail.categoryName}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, categoryName: e.target.value })}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            placeholder="Kateqoriya daxil edin və ya seçin"
            required
            disabled={isLoading}
          />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="servicesAdminSuggestionsList">
              {filteredSuggestions.map((category) => (
                <li
                  key={category.id}
                  onClick={() => handleSelectSuggestion(category)}
                  className="servicesAdminSuggestionItem"
                >
                  {category.category}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="name" className="servicesAdminInputLabel">Ad *</label>
          <input
            type="text"
            id="name"
            className="servicesAdminInputField"
            value={newServiceDetail.name}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, name: e.target.value })}
            placeholder="Məhsul adını daxil edin"
            required
            disabled={isLoading}
          />
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="origin" className="servicesAdminInputLabel">Mənşə Ölkə</label>
          <input
            type="text"
            id="origin"
            className="servicesAdminInputField"
            value={newServiceDetail.origin}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, origin: e.target.value })}
            placeholder="Mənşə ölkəni daxil edin"
            disabled={isLoading}
          />
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="description" className="servicesAdminInputLabel">Təsvir *</label>
          <textarea
            id="description"
            className="servicesAdminInputField"
            value={newServiceDetail.description}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, description: e.target.value })}
            placeholder="Məhsul təsvirini daxil edin"
            required
            disabled={isLoading}
          />
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="image" className="servicesAdminInputLabel">Şəkil</label>
          <input
            type="file"
            id="image"
            className="servicesAdminInputField"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            disabled={isLoading}
          />
        </div>
        {newServiceDetail.image && (
          <div className="servicesAdminInputGroup">
            <label className="servicesAdminInputLabel">Cari Şəkil</label>
            <img
              src={newServiceDetail.image}
              alt="Service Detail"
              className="servicesAdminImagePreview"
              style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
        )}
        <button
          className="servicesAdminSubmitButton"
          onClick={editingDetail ? handleUpdateServiceDetail : handleAddServiceDetail}
          disabled={isLoading}
        >
          {editingDetail ? "Təfərrüatı Yenilə" : "Təfərrüat Əlavə Et"}
        </button>
        {editingDetail && (
          <button
            className="servicesAdminCancelButton"
            onClick={() => {
              setEditingDetail(null);
              setNewServiceDetail({
                serviceId: "",
                categoryName: "",
                name: "",
                description: "",
                features: [],
                image: null,
                origin: "",
              });
              setNewFeature("");
              setImageFile(null);
              setError("");
            }}
            disabled={isLoading}
          >
            Ləğv Et
          </button>
        )}
      </div>
      <h3 className="servicesAdminSectionTitle">Təfərrüatlar Siyahısı</h3>
      <div className="servicesAdminFilterGroup">
        <label htmlFor="filterServiceId" className="servicesAdminInputLabel">Xidmətə görə filter</label>
        <select
          id="filterServiceId"
          className="servicesAdminInputField"
          value={filterServiceId}
          onChange={(e) => {
            setFilterServiceId(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">Hamısı</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.title}</option>
          ))}
        </select>
        <div className="servicesAdminInputGroup">
          <label htmlFor="searchQuery" className="servicesAdminInputLabel">Axtarış</label>
          <input
            type="text"
            id="searchQuery"
            className="servicesAdminInputField"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Ad və ya təsvirdə axtar..."
          />
        </div>
      </div>
      <div className="servicesAdminList">
        {currentItems.map((detail) => (
          <div key={detail.id} className="servicesAdminServiceCard">
            {detail.image && (
              <img
                src={detail.image}
                alt={detail.name}
                className="servicesAdminServiceImage"
              />
            )}
            <h4 className="servicesAdminServiceTitle">{detail.name}</h4>
            <p className="servicesAdminServiceCategory">
              {services.find((s) => s.id === detail.serviceId)?.title || detail.serviceId}
              {detail.categoryId && (
                <>
                  {" / "}
                  {categories.find((c) => c.id === detail.categoryId)?.category || detail.categoryId}
                </>
              )}
            </p>
            <p className="servicesAdminServiceOrigin">
              Mənşə: {detail.origin || "Yoxdur"}
            </p>
            <div className="servicesAdminButtonGroup">
              <button
                className="servicesAdminEditButton"
                onClick={() => handleEditServiceDetail(detail)}
                disabled={isLoading}
              >
                Redaktə Et
              </button>
              <button
                className="servicesAdminDeleteButton"
                onClick={() => handleDeleteServiceDetail(detail.id)}
                disabled={isLoading}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="servicesAdminPagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            className={`servicesAdminPageButton ${currentPage === number ? "active" : ""}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DetailsTab;