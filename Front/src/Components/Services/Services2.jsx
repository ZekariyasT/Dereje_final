import { Link } from "react-router-dom";
import SectionTitle2 from "../Common/SectionTitle2";
import data from '../../Data/services2.json';
import { useState } from "react";
import parse from 'html-react-parser';

const Services2 = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_mb_50 text-center">
            <SectionTitle2
                SubTitle="Best Services"
                Title="Where Your Car Gets Pride <br> the Best Care"
            ></SectionTitle2>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="cs_card_wrapper cs_style_1">
          {data.map((item, index) => (
            <div key={index} className={`cs_card cs_style_4 cs_hover_active ${selectedIndex === index ? "active" : ""}`} onClick={() => setSelectedIndex(index)} >
              <div className="cs_card_index_wrap cs_heading_bg cs_white_color cs_fs_24 cs_semibold">
                <div className="cs_card_index">{item.title}</div>
              </div>
              <div className="cs_card_content_wrapper cs_white_bg">
                <div className="cs_card_content">
                  <Link to={item.btnLink} className="cs_card_thumbnail">
                    <img src={item.img} alt="Service Image" />
                  </Link>
                  <div className="cs_card_info cs_bg_filed" data-src="/assets/img/card_bg_1.svg">
                    <div className="cs_card_icon cs_mb_20">
                      <img src={item.icon} alt="Wheel Icon" />
                    </div>
                    <h3 className="cs_fs_24 cs_semibold cs_mb_14">
                      <Link to={item.btnLink}>{item.title}</Link>
                    </h3>
                    <p className="cs_mb_38">{parse(item.desc)}</p>
                    <Link to={item.btnLink} className="cs_btn cs_style_1">
                      <span>{item.btnText}</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Services2;