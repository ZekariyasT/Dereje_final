import { useEffect } from "react";
import { useBeforeAfterImageStore } from "../../../../services/beforeAfterImage";
const HOST = import.meta.env.VITE_HOST;

const BeforeAfter = ({ title, subTitle }) => {
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

        <div className="cs_before_after-in">
          {beforeAfterImages.length > 0 ? (
            beforeAfterImages.map((img) => (
              <div className="cs_before_after" key={img._id}>
                <div
                  className="cs_after cs_single_slide"
                  style={{
                    backgroundImage: `url(${HOST}/uploads/${img.afterImage.data})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="cs_after_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                    After
                  </div>
                </div>
                <div
                  className="cs_before cs_single_slide"
                  style={{
                    backgroundImage: `url(${HOST}/uploads/${img.beforeImage.data})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="cs_before_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                    Before
                  </div>
                </div>
                <div className="cs_handle_before_after">
                  <span></span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No images available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
