
const Form3 = () => {
    return (
        <form className="row cs_row_gap_30 cs_gap_y_30">
        <div className="col-sm-6">
          <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" />
        </div>
        <div className="col-sm-6">
          <input type="email" name="email" placeholder="Email Address" className="cs_form_field cs_white_bg" />
        </div>
        <div className="col-sm-12">
          <input type="text" name="subject" placeholder="Subject" className="cs_form_field cs_white_bg" />
        </div>
        <div className="col-sm-12">
          <textarea name="massage" rows="5" placeholder="Massage" className="cs_form_field cs_white_bg"></textarea>
        </div>
        <div className="col-sm-12">
          <button type="submit" className="cs_btn cs_style_1 cs_radius_5">
            <span>Send Message</span>
            <span><i className="bi bi-arrow-right"></i></span>
          </button>
        </div>
      </form>
    );
};

export default Form3;