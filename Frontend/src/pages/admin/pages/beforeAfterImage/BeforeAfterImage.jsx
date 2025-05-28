import React, { useState } from "react";
import { useBeforeAfterImageStore } from "../../services/beforeAfterImage.js";

const BeforeAfterImage = () => {
  const [newImages, setNewImages] = useState({
    beforeImage: "",
    afterImage: "",
  });
  const { createBeforeAfterImage } = useBeforeAfterImageStore();

  const handleUploadImages = async () => {
    console.log("new images state", newImages);
    if (!newImages.beforeImage || !newImages.afterImage) {
      alert("Please select both images");
      console.log("Validation Failed", newImages);
      return;
    }

    try {
      const response = await createBeforeAfterImage(newImages);

      if (response.success) {
        alert(response.message);
        setNewImages({ beforeImage: "", afterImage: "" });
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Upload failed, please try again.");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow col-12 col-md-8 col-lg-6 border-0 rounded-4">
        <h2 className="text-center mb-4 fw-bold">
          Upload Before & After Images
        </h2>

        {/* Before Image Upload */}
        <div className="mb-3">
          <label htmlFor="beforeImageInput" className="form-label fw-semibold">
            Before Image
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
            After Image
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
          Upload Images
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
