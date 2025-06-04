import React, { useState } from "react";
import { useBlogStore } from "../../../../services/blog";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { createBlog } = useBlogStore();
  const handleAddBlog = async () => {
    if (!newBlog.title || !newBlog.content || !newBlog.image) {
      alert(t('admin.blog.create.validation.allFields'));
      return;
    }

    try {
      const response = await createBlog(newBlog);

      if (response.success) {
        alert(t('admin.blog.create.success'));
        setNewBlog({ title: "", content: "", image: null });
      } else {
        alert(t('admin.blog.create.error'));
      }
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert(t('admin.blog.create.error'));
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg col-12 col-md-8 col-lg-6">
        <h3 className="text-center mb-4">{t('admin.blog.create.title')}</h3>

        {/* Title Input */}
        <input
          type="text"
          className="form-control mb-2"
          placeholder={t('admin.blog.create.placeholders.title')}
          name="title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />

        {/* Content Input */}
        <textarea
          className="form-control mb-2"
          placeholder={t('admin.blog.create.placeholders.content')}
          rows="5"
          name="content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        ></textarea>

        {/* Image Upload */}
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            accept="image/*"
            name="image"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setNewBlog({ ...newBlog, image: e.target.files[0] });
              }
            }}
          />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            {t('admin.common.upload')}
          </label>
        </div>

        {/* Save Button */}
        <button className="btn btn-primary w-100" onClick={handleAddBlog}>
          {t('admin.common.save')}
        </button>
      </div>
    </div>
  );
};

export default Blog;
