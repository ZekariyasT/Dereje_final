import { useEffect } from "react";
import { useBeforeAfterImageStore } from "../../../../services/beforeAfterImage";
import { useTranslation } from "react-i18next";
const HOST = import.meta.env.VITE_HOST;

const BeforeAfter = ({ title, subTitle }) => {
  const { t } = useTranslation();
  const { beforeAfterImages, fetchBeforeAfterImages } =
    useBeforeAfterImageStore();

  useEffect(() => {
    fetchBeforeAfterImages();
  }, [fetchBeforeAfterImages]);

  return (
    <section className="cs_before_after_slider cs_style_1 position-relative cs_heading_bg">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
            {subTitle}
          </h3>
          <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">
            {title}
          </h2>
        </div>

        <div className="row g-4">
          {beforeAfterImages.length > 0 ? (
            beforeAfterImages.map((img) => (
              <>
                {/* Before Image Card */}
                <div key={`before-${img._id}`} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white h-100">
                    <div className="position-relative">
                      <img
                        src={`${HOST}/api/uploads/${img.beforeImage.data}`}
                        alt="Before Restoration"
                        className="w-100 object-fit-cover"
                        style={{ height: "400px" }}
                      />
                      <div className="position-absolute top-0 start-0 m-3 badge bg-primary">
                        {t("projects.before")}
                      </div>
                    </div>
                    {img.description && (
                      <div className="card-body">
                        <p className="card-text">{img.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* After Image Card */}
                <div key={`after-${img._id}`} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white h-100">
                    <div className="position-relative">
                      <img
                        src={`${HOST}/api/uploads/${img.afterImage.data}`}
                        alt="After Restoration"
                        className="w-100 object-fit-cover"
                        style={{ height: "400px" }}
                      />
                      <div className="position-absolute top-0 start-0 m-3 badge bg-success">
                        {t("projects.after")}
                      </div>
                    </div>
                    {img.description && (
                      <div className="card-body">
                        <p className="card-text">{img.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center text-white">No images available.</p>
            </div>
          )}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default BeforeAfter;
