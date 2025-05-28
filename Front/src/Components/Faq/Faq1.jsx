import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from '../../Data/faq.json';


const Faq1 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <section className="position-relative">
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6">
              <div className="cs_height_108 cs_height_lg_80"></div>
              <div className="cs_section_heading cs_style_1 cs_mb_47">
                <SectionTitle
                    SubTitle="Our FAQ"
                    Title="Frequently Question & Asking Zone Every One"                       
                ></SectionTitle>
              </div>
              <div className="cs_accordians_wrapper cs_style_1">
              {data.map((item, index)=>(
                <div key={index} className={`cs_accordian cs_style_1 cs_gray_bg wow fadeInDown ${index === openItemIndex ? "active" : "" }`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggle">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-eye-slash"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
                ))}

              </div>
              <div className="cs_height_108 cs_height_lg_0"></div>
            </div>
            <div className="col-lg-6">
              <div className="cs_half_screen_right wow fadeInRight">
                <div className="cs_half_screen_thumbnail cs_bg_filed" data-background="/assets/img/faq_img_1.jpg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Faq1;