import React from "react";
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
  handleImageUpload,
}) => {
  const handleAddServiceDetail = async () => {
    if (!newServiceDetail.serviceId || !newServiceDetail.categoryId || !newServiceDetail.name || !newServiceDetail.description) {
      setError("Xidmət, kateqoriya, ad və təsvir sahələri mütləq doldurulmalıdır!");
      return;
    }
    try {
      setError("");
      const imageUrl = await handleImageUpload(imageFile);
      const detailRef = ref(db, "serviceDetails");
      const newDetailRef = push(detailRef);
      const detailData = {
        serviceId: newServiceDetail.serviceId,
        categoryId: newServiceDetail.categoryId,
        name: newServiceDetail.name,
        description: newServiceDetail.description,
        features: newServiceDetail.features,
        ingredients: newServiceDetail.ingredients || "",
        origin: newServiceDetail.origin || "",
        usage: newServiceDetail.usage || "",
        volume: newServiceDetail.volume || "",
        image: imageUrl || "",
      };
      await set(newDetailRef, detailData);
      setServiceDetails([...serviceDetails, { id: newDetailRef.key, ...detailData }]);
      setNewServiceDetail({
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
      setNewFeature("");
      setImageFile(null);
    } catch (error) {
      console.error("Xidmət təfərrüatı əlavə edilərkən xəta: ", error);
      setError("Xidmət təfərrüatı əlavə edilərkən xəta baş verdi!");
    }
  };

  const handleEditServiceDetail = (detail) => {
    setEditingDetail(detail);
    setNewServiceDetail({
      serviceId: detail.serviceId,
      categoryId: detail.categoryId || "",
      name: detail.name,
      description: detail.description,
      features: detail.features || [],
      ingredients: detail.ingredients || "",
      origin: detail.origin || "",
      usage: detail.usage || "",
      volume: detail.volume || "",
      image: detail.image || null,
    });
  };

  const handleUpdateServiceDetail = async () => {
    if (!newServiceDetail.serviceId || !newServiceDetail.categoryId || !newServiceDetail.name || !newServiceDetail.description) {
      setError("Xidmət, kateqoriya, ad və təsvir sahələri mütləq doldurulmalıdır!");
      return;
    }
    try {
      setError("");
      const imageUrl = imageFile ? await handleImageUpload(imageFile) : newServiceDetail.image;
      const detailRef = ref(db, `serviceDetails/${editingDetail.id}`);
      const detailData = {
        serviceId: newServiceDetail.serviceId,
        categoryId: newServiceDetail.categoryId,
        name: newServiceDetail.name,
        description: newServiceDetail.description,
        features: newServiceDetail.features,
        ingredients: newServiceDetail.ingredients || "",
        origin: newServiceDetail.origin || "",
        usage: newServiceDetail.usage || "",
        volume: newServiceDetail.volume || "",
        image: imageUrl || "",
      };
      await set(detailRef, detailData);
      setServiceDetails(serviceDetails.map((d) => (d.id === editingDetail.id ? { id: editingDetail.id, ...detailData } : d)));
      setEditingDetail(null);
      setNewServiceDetail({
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
      setNewFeature("");
      setImageFile(null);
    } catch (error) {
      console.error("Xidmət təfərrüatı yenilənərkən xəta: ", error);
      setError("Xidmət təfərrüatı yenilənərkən xəta baş verdi!");
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

  const filteredCategories = newServiceDetail.serviceId
    ? categories.filter((cat) => cat.serviceId === newServiceDetail.serviceId)
    : [];

  return (
    <section className="servicesAdminSection">
      <h3 className="servicesAdminSectionTitle">{editingDetail ? "Təfərrüatı Redaktə Et" : "Yeni Təfərrüat Əlavə Et"}</h3>
      {error && <p className="servicesAdminError">{error}</p>}
      <div className="servicesAdminForm">
        <div className="servicesAdminInputGroup">
          <label htmlFor="detailServiceId" className="servicesAdminInputLabel">Xidmət *</label>
          <select
            id="detailServiceId"
            className="servicesAdminInputField"
            value={newServiceDetail.serviceId}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, serviceId: e.target.value, categoryId: "" })}
            required
          >
            <option value="">Xidmət seçin</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{service.title}</option>
            ))}
          </select>
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="categoryId" className="servicesAdminInputLabel">Kateqoriya *</label>
          <select
            id="categoryId"
            className="servicesAdminInputField"
            value={newServiceDetail.categoryId}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, categoryId: e.target.value })}
            required
          >
            <option value="">Kateqoriya seçin</option>
            {filteredCategories.map((category) => (
              <option key={category.id} value={category.id}>{category.category}</option>
            ))}
          </select>
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
          />
        </div>
        <div className="servicesAdminInputGroup">
          <label htmlFor="origin" className="servicesAdminInputLabel">Mənşə</label>
          <input
            type="text"
            id="origin"
            className="servicesAdminInputField"
            value={newServiceDetail.origin}
            onChange={(e) => setNewServiceDetail({ ...newServiceDetail, origin: e.target.value })}
            placeholder="Mənşəyi daxil edin"
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
              setNewFeature("");
              setImageFile(null);
              setError("");
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
            {detail.image && (
              <img
                src={detail.image}
                alt={detail.name}
                className="servicesAdminServiceImage"
                style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "cover" }}
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
  );
};

export default DetailsTab;