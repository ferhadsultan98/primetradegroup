import React from "react";
import { ref, set, remove, push } from "firebase/database";
import { db } from "../../Firebase/Server";

const ServicesTab = ({
  services,
  setServices,
  newService,
  setNewService,
  editingService,
  setEditingService,
  handleImageUpload,
}) => {
  const handleAddService = async () => {
    if (!newService.title) return;
    try {
      const serviceRef = ref(db, "services");
      const newServiceRef = push(serviceRef);
      await set(newServiceRef, { title: newService.title });
      setServices([...services, { id: newServiceRef.key, title: newService.title }]);
      setNewService({ title: "" });
    } catch (error) {
      console.error("Xidmət əlavə edilərkən xəta: ", error);
    }
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setNewService({ title: service.title });
  };

  const handleUpdateService = async () => {
    if (!newService.title) return;
    try {
      const serviceRef = ref(db, `services/${editingService.id}`);
      await set(serviceRef, { title: newService.title });
      setServices(services.map((s) => (s.id === editingService.id ? { id: editingService.id, title: newService.title } : s)));
      setEditingService(null);
      setNewService({ title: "" });
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

  return (
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
              setNewService({ title: "" });
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
  );
};

export default ServicesTab;