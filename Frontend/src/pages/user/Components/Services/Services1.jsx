import { Link } from "react-router-dom";
import Slider from "react-slick";
import data from '../../Data/services1.json';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { useTranslation } from 'react-i18next';

const Services1 = () => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);

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

    const servicesData = [
        {
            img: "/assets/img/service_1.jpg",
            icon: "/assets/img/icons/service_icon_1.svg",
            title: t('services.items.feed_production'),
            desc: t('services.description')
        },
        {
            img: "/assets/img/service_2.jpg",
            icon: "/assets/img/icons/service_icon_2.svg",
            title: t('services.items.nutrition_consulting'),
            desc: t('services.description')
        },
        {
            img: "/assets/img/service_3.jpg",
            icon: "/assets/img/icons/service_icon_3.svg",
            title: t('services.items.quality_testing'),
            desc: t('services.description')
        },
        {
            img: "/assets/img/service_4.jpg",
            icon: "/assets/img/icons/service_icon_4.svg",
            title: t('services.items.custom_formulation'),
            desc: t('services.description')
        }
    ];

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="cs_gray_bg cs_bg_filed position-relative" data-src="assets/img/service_bg_1.jpg">
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
                    <div className="cs_section_heading_left">
                        <SectionTitle
                            SubTitle={t('services.subtitle')}
                            Title={t('services.title')}
                        ></SectionTitle>
                    </div>
                    <div className="cs_section_heading_right mb-0 wow fadeInDown">{t('services.description')}</div>
                </div>
            </div>
            <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
                <div className="container">
                    <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
                        data-variable-width="0" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lg-slides="3"
                        data-add-slides="3" data-slides-per-view="responsive">
                        <div className="cs_slider_wrapper">
                            <Slider ref={sliderRef} {...settings}>
                                {servicesData.map((item, index) => (
                                    <div key={index} className="cs_slide">
                                        <div className="cs_card cs_style_1">
                                            <div className="cs_card_thumbnail">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                                                <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>
                                                <h3 className="cs_card_title cs_fs_30 cs_mb_8">{item.title}</h3>
                                                <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                                                <Link to="#" className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
                                                    <span className="cs_btn_text text-uppercase">{t('common.readMore')}</span>
                                                    <span className="cs_btn_icon cs_center">
                                                        <i className="bi bi-arrow-right"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="cs_slider_arrows cs_style_1">
                            <div className="cs_arrow_wrap cs_arrow_wrap_left cs_center" onClick={previous}>
                                <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                                    <i className="bi bi-arrow-left"></i>
                                </div>
                            </div>
                            <div className="cs_arrow_wrap cs_arrow_wrap_right cs_center" onClick={next}>
                                <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
    );
};

export default Services1;