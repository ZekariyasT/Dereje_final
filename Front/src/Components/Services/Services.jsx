import { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import servicesData from '../../Data/services1.json';
import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [expandedServices, setExpandedServices] = useState({});

  const toggleContent = (serviceId) => {
    setExpandedServices(prev => {
      const newState = { ...prev };
      newState[serviceId] = !prev[serviceId];
      return newState;
    });
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider ref={sliderRef} {...settings}>
                {servicesData.map((item, index) => (
                  <div key={index} className="cs_slide">
                    <div className="cs_card cs_style_1">
                      
                      <div className="cs_card_thumbnail">
                        <img src={item.img} alt="Service Image" />
                      </div>
                      
                      <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                        
                      
                        <h3 className="cs_card_title cs_fs_30 cs_mb_8">{item.title}</h3>
                        <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                        <div className="d-flex flex-column align-items-center gap-2">
                          <button 
                            onClick={() => toggleContent(index)}
                            className="cs_text_btn cs_style_1 cs_bold cs_heading_color btn-sm px-2 py-0"
                          >
                            <span className="cs_btn_text text-uppercase fs-12">
                              {expandedServices[index] ? t('common.showLess') : t('common.learnMore')}
                            </span>
                            <span className="cs_btn_icon cs_center">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </button>
                          <a 
                            href={item.pdfUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cs_text_btn cs_style_1 cs_bold cs_accent_color btn-sm px-2 py-0"
                          >
                            <span className="cs_btn_text text-uppercase fs-12">
                              {t('common.detailedPdf')}
                            </span>
                            <span className="cs_btn_icon cs_center">
                              <i className="bi bi-eye"></i>
                            </span>
                          </a>
                        </div>
                        {expandedServices[index] && (
                          <div className="cs_expanded_content mt-3">
                            <p>{item.desc}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="cs_slider_arrows cs_style_1 cs_hide_mobile">
              <div className="cs_left_arrow cs_slider_arrow cs_accent_color" onClick={previous}>
                <i className="bi bi-chevron-left"></i>
              </div>
              <div className="cs_right_arrow cs_slider_arrow cs_accent_color" onClick={next}>
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Services; 