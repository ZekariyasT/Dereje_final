
const Form2 = () => {
    return (
        <div className="cs_newsletter cs_style_1">
        <div className="container">
          <div className="cs_newsletter_content_wrapper cs_accent_bg position-relative wow fadeInDown" data-wow-delay="0.6s">
            <div className="cs_newsletter_content">
              <h2 className="cs_newsletter_title cs_fs_30 cs_white_color mb-0">Get An Free Services <br/> From Us </h2>
              <form className="cs_newsletter_form">
                <div className="cs_form_field_wrapper position-relative">
                  <select className="form-select cs_form_field">
                    <option selected disabled>Services Name</option>
                    <option value="car-service">Car Service</option>
                    <option value="car-wash">Car Wash</option>
                    <option value="engine-oil">Engine Oil</option>
                    <option value="motor-service">Motor Cycle</option>
                  </select>
                  <span className="cs_input_icon cs_white_color position-absolute">
                  <i className="bi bi-chevron-down"></i></span>
                </div>
                <div className="cs_form_field_wrapper position-relative">
                  <input type="date" name="date" className="cs_form_field" />
                  <span className="cs_input_icon cs_white_color position-absolute">
                  <i className="bi bi-calendar-fill"></i></span>
                </div>
                <button type="submit" className="cs_text_btn cs_style_1 cs_white_bg cs_heading_color cs_bold">
                  <span className="cs_btn_text text-uppercase">Check Availability</span>
                  <span className="cs_btn_icon cs_center">
                  <i className="bi bi-arrow-right"></i>
                  <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </form>
            </div>
            <div className="cs_newsletter_shape position-absolute">
              <img src="/assets/img/shapes/newsletter_shape_1.svg" alt="Newsletter Shape" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Form2;