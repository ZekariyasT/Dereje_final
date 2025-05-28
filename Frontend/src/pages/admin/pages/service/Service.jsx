import React, { useState } from "react";
import { useServiceStore } from "../../services/service";

const Service = () => {
  const [newService, setNewService] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    pdf: "",
  });
  const { createService } = useServiceStore();
  const handleAddService = async () => {
    console.log("New Service State:", newService); // Debugging log

    if (
      !newService.title ||
      !newService.image ||
      !newService.price ||
      !newService.pdf ||
      !newService.description
    ) {
      alert("Please fill all fields");
      console.log("Validation Failed:", newService);
      return;
    }

    try {
      const response = await createService(newService);

      if (response.success) {
        alert(response.message);
        setNewService({
          title: "",
          image: "",
          description: "",
          price: "",
          pdf: "",
        });
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error uploading Service:", error);
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
        <h3 className="text-center mb-4">Create Service</h3>

        {/* Title Input */}
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Service Title"
          name="title"
          value={newService.title}
          onChange={(e) =>
            setNewService((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        {/* description Input */}
        <textarea
          className="form-control mb-2"
          placeholder="Write your service description here..."
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
          <label className="input-group-text">Upload Image</label>
        </div>
        {/* Price Input */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Enter Price"
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
          <label className="input-group-text">Upload PDF</label>
        </div>
        <button className="btn btn-primary w-100" onClick={handleAddService}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Service;
