import Slider from "react-slick";
import data from '../../Data/testimonial1.json';
import parse from 'html-react-parser';

const Testimonial1 = ({subtitle, title}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_heading_bg position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
            <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
              {subtitle}
            </h3>
            <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">{parse(title)}</h2>
          </div>
          <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
          data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="2"
          data-add-slides="2" data-slides-per-view="responsive">
            <div className="cs_slider_wrapper">
            <Slider {...settings}>
            {data.map((item, index)=>(
              <div key={index} className="cs_slide wow fadeInLeft">
                <div className="cs_testimonial cs_style_1 position-relative">
                  <div className="cs_testimonial_content cs_white_bg position-relative">
                    <div className="cs_testimonial_header cs_mb_35">
                      <div className="cs_testimonial_info">
                        <div className="rating-area" >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        </div>
                        <h3 className="cs_fs_24 cs_semibold cs_mb_1">{item.title}</h3>
                        <p className="cs_fs_14 cs_heading_color mb-0">{item.subTitle}</p>
                      </div>
                    </div>
                    <blockquote className="cs_fs_16">{item.desc}</blockquote>
                    <div className="cs_quote_icon position-absolute">
                      <img src="/assets/img/icons/quote_1.svg" alt="Quote Icon" />
                    </div>
                  </div>
                </div>
              </div>
              ))}
              </Slider>
            </div>
          </div>
          </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
       </section>
    );
};

export default Testimonial1;