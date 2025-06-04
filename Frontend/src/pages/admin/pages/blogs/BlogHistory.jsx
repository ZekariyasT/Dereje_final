import React, { useEffect, useState } from "react";
import { useBlogStore } from "../../../../services/blog"; // Import Zustand store
import { FaTrash } from "react-icons/fa"; // Import trash icon for deleting
import { useTranslation } from "react-i18next";

const HOST = import.meta.env.VITE_HOST;

const BlogHistory = () => {
  const { t } = useTranslation();
  const { fetchBlogs, deleteBlog, blogs } = useBlogStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of blogs per page

  useEffect(() => {
    try {
      fetchBlogs();
      setLoading(false);
    } catch (err) {
      setError(t("admin.blog.history.error"), err);
      setLoading(false);
    }
  }, [fetchBlogs, t]);

  const handleDelete = async (id) => {
    if (window.confirm(t("admin.blog.history.confirmDelete"))) {
      try {
        const result = await deleteBlog(id);
        if (result.success) {
          alert(t("admin.blog.history.deleteSuccess"));
        } else {
          alert(t("admin.blog.history.deleteError"));
        }
      } catch (err) {
        alert(t("admin.blog.history.deleteError"), err);
      }
    }
  };

  // **Reverse blogs so the latest appears first**
  const reversedBlogs = [...blogs].reverse();

  // **Pagination Logic**
  const totalPages = Math.ceil(reversedBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedBlogs = reversedBlogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading)
    return (
      <div className="text-center text-xl">{t("admin.common.loading")}</div>
    );
  if (error)
    return <div className="text-center text-xl text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        {/* Table */}
        <table className="min-w-full bg-white table-auto text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-center">#</th>
              <th className="py-3 px-4 text-left">
                {t("admin.blog.create.blogTitle")}
              </th>
              <th className="py-3 px-4 text-left">
                {t("admin.blog.create.content")}
              </th>
              <th className="py-3 px-4 text-center">
                {t("admin.blog.create.image")}
              </th>
              <th className="py-3 px-4 text-center">
                {t("admin.common.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedBlogs.length > 0 ? (
              displayedBlogs.map((blog, index) => (
                <tr key={blog._id || index} className="border-t">
                  <td className="py-4 px-4 text-center text-gray-600">
                    {reversedBlogs.length - (startIndex + index)}
                  </td>
                  <td className="py-4 px-4 text-gray-800">{blog.title}</td>
                  <td className="py-4 px-4 text-gray-600">
                    {blog.content.substring(0, 50)}...
                  </td>
                  <td className="py-4 px-4 text-center">
                    <a
                      href={`${HOST}/uploads/${blog.image.data}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${HOST}/api/uploads/${blog.image.data}`}
                        alt={blog.title}
                        className="w-12 h-12 object-cover rounded-full mx-auto"
                      />
                    </a>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all"
                      onClick={() => handleDelete(blog._id)}
                      title={t("admin.common.delete")}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  {t("admin.blog.history.noBlogs")}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 py-4 space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md disabled:bg-gray-300"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {t("common.previous")}
            </button>
            <span className="flex items-center text-lg text-gray-700">
              {t("common.page")} {currentPage} {t("common.of")} {totalPages}
            </span>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md disabled:bg-gray-300"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {t("common.next")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHistory;
