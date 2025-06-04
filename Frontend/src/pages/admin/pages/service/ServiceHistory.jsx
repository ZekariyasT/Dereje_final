import React, { useEffect, useState } from "react";
import { useServiceStore } from "../../../../services/service";
import { FaTrash, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HOST = import.meta.env.VITE_HOST;

const ServiceHistory = () => {
  const { t } = useTranslation();
  const { fetchServices, deleteService, services } = useServiceStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    try {
      fetchServices();
      setLoading(false);
    } catch (err) {
      setError(t('admin.service.history.error'), err);
      setLoading(false);
    }
  }, [fetchServices, t]);

  const handleDelete = async (id) => {
    if (window.confirm(t('admin.service.history.confirmDelete'))) {
      try {
        const result = await deleteService(id);
        if (result.success) {
          alert(t('admin.service.history.deleteSuccess'));
        } else {
          alert(t('admin.service.history.deleteError'));
        }
      } catch (err) {
        alert(t('admin.service.history.deleteError'));
      }
    }
  };

  // **Reverse the array so the latest items appear first**
  const reversedServices = [...services].reverse();

  // **Pagination Logic**
  const totalPages = Math.ceil(reversedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedServices = reversedServices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading)
    return <div className="text-center text-xl">{t('admin.common.loading')}</div>;
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
              <th className="py-3 px-4 text-left">{t('admin.service.create.serviceTitle')}</th>
              <th className="py-3 px-4 text-left">{t('admin.service.create.description')}</th>
              <th className="py-3 px-4 text-left">{t('admin.service.create.price')}</th>
              <th className="py-3 px-4 text-center">{t('admin.service.create.image')}</th>
              <th className="py-3 px-4 text-center">{t('admin.service.create.pdf')}</th>
              <th className="py-3 px-4 text-center">{t('admin.common.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {displayedServices.length > 0 ? (
              displayedServices.map((service, index) => (
                <tr key={service._id || index} className="border-t">
                  <td className="py-4 px-4 text-center text-gray-600">
                    {reversedServices.length - (startIndex + index)}
                  </td>
                  <td className="py-4 px-4 text-gray-800">{service.title}</td>
                  <td className="py-4 px-4 text-gray-800">
                    {service.description}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{service.price}</td>
                  <td className="py-4 px-4 text-center">
                    <a
                      href={`${HOST}/uploads/${service.image.data}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('admin.common.preview')}
                    >
                      <img
                        src={`${HOST}/uploads/${service.image.data}`}
                        alt={service.title}
                        className="w-12 h-12 object-cover rounded-full mx-auto"
                      />
                    </a>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <a
                      href={`${HOST}/uploads/${service.file.data}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                      title={t('admin.common.download')}
                    >
                      <FaFilePdf className="text-2xl" />
                    </a>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all"
                      onClick={() => handleDelete(service._id)}
                      title={t('admin.common.delete')}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 text-center text-gray-500">
                  {t('admin.service.history.noServices')}
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
      </div>
    </div>
  );
};

export default ServiceHistory;
