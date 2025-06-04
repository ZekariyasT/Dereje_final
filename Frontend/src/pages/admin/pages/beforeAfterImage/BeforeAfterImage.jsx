import React, { useState } from "react";
import { useBeforeAfterImageStore } from "../../../../services/beforeAfterImage.js";
import { useTranslation } from "react-i18next";

const BeforeAfterImage = () => {
  const { t } = useTranslation();
  const [newImages, setNewImages] = useState({
    beforeImage: "",
    afterImage: "",
  });
  const { createBeforeAfterImage } = useBeforeAfterImageStore();

  const handleUploadImages = async () => {
    if (!newImages.beforeImage || !newImages.afterImage) {
      alert(t('admin.beforeAfter.create.validation.bothImages'));
      return;
    }

    try {
      const response = await createBeforeAfterImage(newImages);

      if (response.success) {
        alert(t('admin.beforeAfter.create.success'));
        setNewImages({ beforeImage: "", afterImage: "" });
      } else {
        alert(t('admin.beforeAfter.create.error'));
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      alert(t('admin.beforeAfter.create.error'));
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow col-12 col-md-8 col-lg-6 border-0 rounded-4">
        <h2 className="text-center mb-4 fw-bold">
          {t('admin.beforeAfter.create.title')}
        </h2>

        {/* Before Image Upload */}
        <div className="mb-3">
          <label htmlFor="beforeImageInput" className="form-label fw-semibold">
            {t('admin.beforeAfter.create.beforeImage')}
          </label>
          <input
            type="file"
            className="form-control"
            name="beforeImage"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setNewImages((prev) => ({
                  ...prev,
                  beforeImage: e.target.files[0],
                }));
              }
            }}
          />
        </div>

        {/* After Image Upload */}
        <div className="mb-3">
          <label htmlFor="afterImageInput" className="form-label fw-semibold">
            {t('admin.beforeAfter.create.afterImage')}
          </label>
          <input
            type="file"
            className="form-control"
            name="afterImage"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setNewImages((prev) => ({
                  ...prev,
                  afterImage: e.target.files[0],
                }));
              }
            }}
          />
        </div>

        {/* Upload Button */}
        <button
          className="btn btn-primary w-100 py-2 fw-semibold"
          onClick={handleUploadImages}
        >
          {t('admin.common.save')}
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
