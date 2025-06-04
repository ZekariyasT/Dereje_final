import React, { useState } from "react";
import { useServiceStore } from "../../../../services/service";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
  const [newService, setNewService] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    pdf: "",
  });
  const { createService } = useServiceStore();
  
  const handleAddService = async () => {
    if (
      !newService.title ||
      !newService.image ||
      !newService.price ||
      !newService.pdf ||
      !newService.description
    ) {
      alert(t('admin.service.create.validation.requiredFields'));
      return;
    }

    try {
      const response = await createService(newService);

      if (response.success) {
        alert(t('admin.service.create.success'));
        setNewService({
          title: "",
          image: "",
          description: "",
          price: "",
          pdf: "",
        });
      } else {
        alert(t('admin.service.create.error'));
      }
    } catch (error) {
      console.error("Error uploading Service:", error);
      alert(t('admin.service.create.error'));
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <h3 className="text-center mb-4">{t('admin.service.create.title')}</h3>

        {/* Title Input */}
        <input
          type="text"
          className="form-control mb-2"
          placeholder={t('admin.service.create.placeholders.title')}
          name="title"
          value={newService.title}
          onChange={(e) =>
            setNewService((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        {/* description Input */}
        <textarea
          className="form-control mb-2"
          placeholder={t('admin.service.create.placeholders.description')}
          rows="5"
          name="description"
          value={newService.content}
          onChange={(e) =>
            setNewService({ ...newService, description: e.target.value })
          }
        ></textarea>

        {/* Image Upload */}
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            name="image"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setNewService((prev) => ({
                  ...prev,
                  image: e.target.files[0],
                }));
              }
            }}
          />
          <label className="input-group-text">{t('admin.service.create.uploadImage')}</label>
        </div>

        {/* Price Input */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder={t('admin.service.create.placeholders.price')}
          name="price"
          value={newService.price}
          onChange={(e) =>
            setNewService((prev) => ({ ...prev, price: e.target.value }))
          }
        />

        {/* PDF Upload */}
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            name="pdf"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setNewService((prev) => ({ ...prev, pdf: e.target.files[0] }));
              }
            }}
          />
          <label className="input-group-text">{t('admin.service.create.uploadPdf')}</label>
        </div>

        <button className="btn btn-primary w-100" onClick={handleAddService}>
          {t('admin.common.save')}
        </button>
      </div>
    </div>
  );
};

export default Service;
