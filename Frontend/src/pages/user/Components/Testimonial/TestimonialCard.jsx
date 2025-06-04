const TestimonialCard = ({name, designation, subtitle, title, content}) => {
    return (
        <div className="cs_testimonial cs_style_2">
        <div className="cs_testimonial_header position-relative">
          <h3 className="cs-testimonial_title cs_fs_24 cs_semibold cs_white_color mb-0">{name}</h3>
          <p className="cs_fs_14 cs_accent_color mb-0">{designation}</p>
          <div className="cs_polygon_shape position-absolute">
            <img src="/assets/img/shapes/polygon.svg" alt="Polygon Shape" />
          </div>
        </div>
        <div className="cs_testimonl_content">
          <div className="cs_section_heading cs_style_1 cs_mb_33">
            <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
              {subtitle}
            </h3>
            <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0">{title}</h2>
          </div>
          <blockquote>{content}</blockquote>
          <div className="cs_rating">
            <div className="rating-area">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TestimonialCard;