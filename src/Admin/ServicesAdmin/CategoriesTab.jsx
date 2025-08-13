import React from "react";
import { ref, set, remove, push } from "firebase/database";
import { db } from "../../Firebase/Server";

const CategoriesTab = ({
  categories,
  setCategories,
  newCategory,
  setNewCategory,
  editingCategory,
  setEditingCategory,
  services,
  setServiceDetails,
  serviceDetails,
}) => {
  const handleAddCategory = async () => {
    if (!newCategory.serviceId || !newCategory.category) return;
    try {
      const categoryRef = ref(db, "categories");
      const newCategoryRef = push(categoryRef);
      await set(newCategoryRef, { serviceId: newCategory.serviceId, category: newCategory.category });
      setCategories([...categories, { id: newCategoryRef.key, serviceId: newCategory.serviceId, category: newCategory.category }]);
      setNewCategory({ serviceId: "", category: "" });
    } catch (error) {
      console.error("Kateqoriya əlavə edilərkən xəta: ", error);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setNewCategory({ serviceId: category.serviceId, category: category.category });
  };

  const handleUpdateCategory = async () => {
    if (!newCategory.serviceId || !newCategory.category) return;
    try {
      const categoryRef = ref(db, `categories/${editingCategory.id}`);
      await set(categoryRef, { serviceId: newCategory.serviceId, category: newCategory.category });
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
      setServiceDetails(serviceDetails.map((d) => (d.categoryId === id ? { ...d, categoryId: "" } : d)));
    } catch (error) {
      console.error("Kateqoriya silinərkən xəta: ", error);
    }
  };

  return (
    <section className="servicesAdminSection">
      <h3 className="servicesAdminSectionTitle">{editingCategory ? "Kateqoriyanı Redaktə Et" : "Yeni Kateqoriya Əlavə Et"}</h3>
      <div className="servicesAdminForm">
        <div className="servicesAdminInputGroup">
          <label htmlFor="categoryServiceId" className="servicesAdminInputLabel">Xidmət</label>
          <select
            id="categoryServiceId"
            className="servicesAdminInputField"
            value={newCategory.serviceId}
            onChange={(e) => setNewCategory({ ...newCategory, serviceId: e.target.value })}
          >
            <option value="">Xidmət seçin</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{service.title}</option>
            ))}
          </select>
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
            <h4 className="servicesAdminServiceTitle">{category.category}</h4>
            <p className="servicesAdminServiceCategory">
              {services.find((s) => s.id === category.serviceId)?.title || category.serviceId}
            </p>
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
  );
};

export default CategoriesTab;