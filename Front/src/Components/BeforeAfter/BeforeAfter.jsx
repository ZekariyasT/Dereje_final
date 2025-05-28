import { useEffect } from "react";

const BeforeAfter = ({title, subTitle, afterTitle, beforeTitle, beforeImg, afterImg}) => {
    return (
    <section className="cs_before_after_slider cs_style_1 position-relative cs_heading_bg">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
            {subTitle}
          </h3>
          <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">{title}</h2>
        </div>
        <div className="cs_before_after-in">
          <div className="cs_before_after">
            <div className="cs_after cs_single_slide" style={{ backgroundImage: `url(${afterImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="cs_after_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                {afterTitle}
              </div>
            </div>
            <div className="cs_before cs_single_slide" style={{ backgroundImage: `url(${beforeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="cs_before_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                {beforeTitle}
              </div>
            </div>
            <div className="cs_handle_before_after">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default BeforeAfter;