import Slider from "react-slick";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const HeroBanner1 = () => {
    const { t } = useTranslation();

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const heroData = [
        {
            img: "/assets/img/Untitled design (3).png",
            title: "Expert Car Body Design",
            desc: "Specialized in custom automotive design and manufacturing solutions for your vehicle needs",
            btnName: t('common.readMore'),
            btnUrl: "/services",
            number: t('header.contact.phone')
        },
        {
            img: "/assets/img/2.png",
            title: "Professional Vehicle Restoration",
            desc: "Complete restoration services to bring your damaged vehicle back to life with precision",
            btnName: t('common.learnMore'),
            btnUrl: "/services",
            number: t('header.contact.phone')
        },
        {
            img: "/assets/img/3.png",
            title: "Custom Car Modifications",
            desc: "Transform your vehicle with our expert modification and enhancement services",
            btnName: t('common.contactUs'),
            btnUrl: "/contact",
            number: t('header.contact.phone')
        }
    ];

    return (
        <section className="cs_slider cs_style_1" style={{ marginTop: '117px' }}>
            <div className="cs_slider_container" data-autoplay="1" data-loop="1" data-speed="900" data-center="0" data-variable-width="0" data-slides-per-view="1">
                <div className="cs_slider_wrapper">
                    <Slider {...settings}>
                        {heroData.map((item, index) => (
                            <div key={index} className="cs_slide">
                                <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" data-background={item.img}>
                                    <div className="container">
                                        <div className="cs_hero_text">
                                            <h1 className="cs_hero_title cs_fs_70 cs_mb_18 wow fadeInUp" style={{color:"#d5d1cd", fontFamily: "Oswald"}}>{item.title}</h1>
                                            <p className="cs_hero_subtitle cs_mb_34" style={{ color: "#d0cfce", fontWeight: "bold" }}>{item.desc}</p>
                                            <div className="cs_hero_btns">
                                                <span className="cs_hero_number wow fadeInRight">
                                                    <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                                                        <i className="bi bi-telephone-x-fill"></i>
                                                    </span>
                                                    <a className="cs_fs_24 cs_semibold cs_heading_color">{item.number}</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner1;