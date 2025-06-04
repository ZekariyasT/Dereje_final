import Slider from "react-slick";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './testimonial.css';

const Testimonial1 = () => {
    const { t } = useTranslation();
    
    useEffect(() => {
        // Initialize AOS animation
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true,
        customPaging: (i) => (
            <div className="cs_custom_dot"></div>
        ),
        prevArrow: <button className="cs_slider_btn cs_slider_btn_prev"><i className="bi bi-arrow-left"></i></button>,
        nextArrow: <button className="cs_slider_btn cs_slider_btn_next"><i className="bi bi-arrow-right"></i></button>,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    }; 

    return (
        <section className="cs_testimonial_section position-relative">
            <div className="cs_pattern_1"></div>
            <div className="cs_pattern_2"></div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 cs_mb_47 text-center" data-aos="fade-up">
                    <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                        {t('testimonials.subtitle')}
                    </h3>
                    <h2 className="cs_section_title cs_fs_50 mb-0">{t('testimonials.title')}</h2>
                </div>
                <div className="cs_slider_container" data-aos="fade-up" data-aos-delay="100">
                    <div className="cs_slider_wrapper">
                        <Slider {...settings}>
                            {t('testimonials.items', { returnObjects: true }).map((item, index) => (
                                <div key={index} className="cs_testimonial_slide_wrap">
                                    <div className="cs_testimonial_card">
                                        <div className="cs_testimonial_header">
                                            <div className="cs_quote_icon">
                                                <i className="bi bi-quote"></i>
                                            </div>
                                            <div className="cs_testimonial_meta">
                                                <h3 className="cs_testimonial_name">{item.title}</h3>
                                                <p className="cs_testimonial_designation">{item.subTitle}</p>
                                            </div>
                                        </div>
                                        <div className="cs_testimonial_body">
                                            <p className="cs_testimonial_text">{item.desc}</p>
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