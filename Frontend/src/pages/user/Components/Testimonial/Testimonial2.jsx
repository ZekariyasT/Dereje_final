import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Testimonial2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const [isActive, setIsActive] = useState('tab2');

    return (
        <section className="cs_tabs cs_style_2 cs_bg_filed position-relative" data-background="/assets/img/testimonial_bg_2.jpg">
        <div className="cs_tabs_overlay cs_heading_bg position-absolute"></div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-10">
              <div className="cs_tab_body p-0">
                <div className={`cs_tab ${isActive === 'tab1' ? 'active' : ''}`} >
                    <TestimonialCard
                        img="/assets/img/avatar_7.png"
                        name="Austin Symphia"
                        designation="Business Lady"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="Signs include unexplained increases in water bills,the sound of running water when no also fixtures are in use problems or anything damp or moldy kind spots on walls or ceilings, and  involving gas lines or major repairs on most services"
                    ></TestimonialCard>
                </div>
                <div className={`cs_tab ${isActive === 'tab2' ? 'active' : ''}`} >
                <TestimonialCard
                        img="/assets/img/avatar_4.png"
                        name="Sophiya Mallinson"
                        designation="Business Woman"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="Signs include unexplained increases in water bills, and the sound of running water when no also fixtures are in use problems or anything involving gas lines or major repairs on most services damp or moldy kind spots on walls or ceilings"
                    ></TestimonialCard>
                </div>
                <div className={`cs_tab ${isActive === 'tab3' ? 'active' : ''}`} >
                <TestimonialCard
                        img="/assets/img/avatar_8.png"
                        name="Cameron Williamson"
                        designation="Business Man"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="Signs include unexplained increases in water bills, damp or moldy kind spots on walls or ceilings, and the sound of running water when no also fixtures are in use problems or anything involving gas lines or major repairs on most services"
                    ></TestimonialCard>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <ul className="cs_tab_links cs_style_2 cs_mp_0">
                <li className={`${isActive === 'tab1' ? 'active' : ''}`} onClick={() => setIsActive('tab1')}><a><img src="/assets/img/avatar_5.png" alt="Avatar" /></a></li>
                <li className={`${isActive === 'tab2' ? 'active' : ''}`} onClick={() => setIsActive('tab2')} ><a><img src="/assets/img/avatar_4.png" alt="Avatar" /></a></li>
                <li className={`${isActive === 'tab3' ? 'active' : ''}`} onClick={() => setIsActive('tab3')}><a><img src="/assets/img/avatar_6.png" alt="Avatar" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Testimonial2;