import React, { useEffect, useState } from "react";
import { useBeforeAfterImageStore } from "../../../../services/beforeAfterImage";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HOST = import.meta.env.VITE_HOST;

const BeforeAfterImageHistory = () => {
  const { t } = useTranslation();
  const { fetchBeforeAfterImages, deleteBeforeAfterImage, beforeAfterImages } =
    useBeforeAfterImageStore();

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadImages = async () => {
      await fetchBeforeAfterImages();
      setLoading(false);
    };
    loadImages();
  }, [fetchBeforeAfterImages]);

  const handleDelete = async (id) => {
    if (window.confirm(t('admin.beforeAfter.history.confirmDelete'))) {
      try {
        const result = await deleteBeforeAfterImage(id);
        if (result.success) {
          alert(t('admin.beforeAfter.history.deleteSuccess'));
        } else {
          alert(t('admin.beforeAfter.history.deleteError'));
        }
      } catch (error) {
        alert(t('admin.beforeAfter.history.deleteError'));
      }
    }
  };

  const reversedImages = [...beforeAfterImages].reverse();
  const totalPages = Math.ceil(reversedImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedImages = reversedImages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        {loading ? (
          <div className="text-center text-xl p-8">{t('admin.common.loading')}</div>
        ) : beforeAfterImages.length === 0 ? (
          <div className="text-center text-xl text-gray-500 p-8">
            {t('admin.beforeAfter.history.noImages')}
          </div>
        ) : (
          <>
            <table className="min-w-full bg-white table-auto text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-center">#</th>
                  <th className="py-3 px-4 text-center">{t('admin.beforeAfter.create.beforeImage')}</th>
                  <th className="py-3 px-4 text-center">{t('admin.beforeAfter.create.afterImage')}</th>
                  <th className="py-3 px-4 text-center">{t('admin.common.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {displayedImages.map((item, index) => (
                  <tr key={item._id} className="border-t">
                    <td className="py-4 px-4 text-center text-gray-600">
                      {reversedImages.length - (startIndex + index)}
                    </td>

                    {/* Before Image */}
                    <td className="py-4 px-4">
                      <a
                        href={`${HOST}/uploads/${item.beforeImage.data}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t('admin.common.preview')}
                      >
                        <img
                          src={`${HOST}/uploads/${item.beforeImage.data}`}
                          alt={t('admin.beforeAfter.create.beforeImage')}
                          className="w-16 h-16 object-cover rounded-md mx-auto"
                        />
                      </a>
                    </td>

                    {/* After Image */}
                    <td className="py-4 px-4">
                      <a
                        href={`${HOST}/uploads/${item.afterImage.data}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t('admin.common.preview')}
                      >
                        <img
                          src={`${HOST}/uploads/${item.afterImage.data}`}
                          alt={t('admin.beforeAfter.create.afterImage')}
                          className="w-16 h-16 object-cover rounded-md mx-auto"
                        />
                      </a>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-center">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all"
                        onClick={() => handleDelete(item._id)}
                        title={t('admin.common.delete')}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 py-4 space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md disabled:bg-gray-300"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {t('common.previous')}
                </button>
                <span className="flex items-center text-lg text-gray-700">
                  {t('common.page')} {currentPage} {t('common.of')} {totalPages}
                </span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md disabled:bg-gray-300"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {t('common.next')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BeforeAfterImageHistory;
