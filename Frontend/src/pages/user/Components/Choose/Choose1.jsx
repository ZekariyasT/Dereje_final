import { Link } from "react-router-dom";
import SectionTitle2 from "../Common/SectionTitle2";
import data from '../../Data/choose.json';

const Choose1 = ({img1,content,btnName,btnUrl,img2,img3}) => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
           <SectionTitle2
                SubTitle="WHY CHOOSE US"
                Title="Because Your Car Deserves <br> the Best"
           ></SectionTitle2>
          </div>
          <div className="cs_height_27 cs_height_lg_65"></div>
          <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
            <div className="col-xl-4 wow fadeInLeft">
              <div className="cs_features_thumbnail_1 position-relative">
                <img src={img1} alt="Feature Image" />
              </div>
            </div>
            <div className="col-xl-4 wow fadeInDown">
              <p className="cs_feature_text cs_mb_30">{content}</p>
              {data.map((item, i) => (
              <div key={i} className="cs_iconbox cs_style_2 cs_mb_12">
                <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
                  <img src={item.img} alt="Car Icon" />
                </div>
                <div className="cs_iconbox_info">
                  <h3 className="cs_iconbox_title cs_fs_18 cs_semibold cs_mb_2">{item.title}</h3>
                  <p className="cs_iconbox_subtitle cs_fs_12 mb-0">{item.desc}</p>
                </div>
              </div>
                ))}

              <Link to={btnUrl} className="cs_btn cs_style_1">
                <span>{btnName}</span><i className="bi bi-arrow-right"></i>     
              </Link>
            </div>

            <div className="col-xl-4 wow fadeInRight">
              <div className="cs_features_thumbnail_2 position-relative">
                <img src={img2} alt="Feature Image" />
                <div className="cs_features_thumbnail_3">
                  <img src={img3} alt="Feature Image" />
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="cs_height_120 cs_height_lg_105"></div>
       </section>
    );
};

export default Choose1;