import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useTranslation } from "react-i18next";

const Testimonial2 = () => {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(0);
    const testimonials = t('testimonials.items', { returnObjects: true });

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="cs_tabs cs_style_2 cs_bg_filed position-relative" data-background="/assets/img/testimonial_bg_2.jpg">
            <div className="cs_tabs_overlay cs_heading_bg position-absolute"></div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="row cs_gap_y_40">
                    <div className="cs_tab_body p-0">
                        {testimonials.map((item, index) => (
                            <div key={index} className={`cs_tab ${isActive === index ? 'active' : ''}`}>
                                <TestimonialCard
                                    name={item.title}
                                    designation={item.subTitle}
                                    subtitle={t('testimonials.subtitle')}
                                    title={t('testimonials.title')}
                                    content={item.desc}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <div className="cs_tab_links cs_style_2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`btn btn-link ${isActive === index ? 'active' : ''}`}
                                    onClick={() => setIsActive(index)}
                                >
                                    <span className="cs_dot"></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
    );
};

export default Testimonial2;