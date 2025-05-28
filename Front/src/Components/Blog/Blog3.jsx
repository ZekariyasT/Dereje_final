import { Link } from "react-router-dom";
import data from '../../Data/blog.json';
import SectionTitle from "../Common/SectionTitle";

const Blog3 = () => {
    return (
        <section className="position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
            <div className="cs_section_heading_left wow fadeInDown">
              <SectionTitle
                SubTitle="NEWS & UPDATES"
                Title="Latest New and Blog"                
              ></SectionTitle>
            </div>
            <div className="cs_section_heading_right wow fadeInLeft">
              <Link to="/blog" className="cs_btn cs_style_1">
                <span>View all news</span><i className="bi bi-arrow-right"></i>    
              </Link>
            </div>
          </div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.slice(0,3).map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="cs_post cs_style_1">
                <Link to="/blog/blog-details" className="cs_post_thumbnail">
                  <img src={item.img} alt="Post Image" />
                </Link>
                <div className="cs_post_content_wrapper position-relative">
                  <div className="cs_post_content cs_white_bg">
                    <div className="cs_post_meta_wrapper cs_mb_11">
                      <div className="cs_post_meta">
                        <span className="cs_accent_color"><i className="bi bi-chat-dots"></i></span>
                        <span className="cs_heading_color">02 Comments</span>
                      </div>
                      <div className="cs_post_meta">
                        <span className="cs_accent_color"><i className="bi bi-people"></i></span>
                        <span className="cs_heading_color">Admin</span>
                      </div>
                    </div>
                    <h3 className="cs_fs_20 cs_semibold cs_mb_5"><Link to="/blog/blog-details">{item.title}</Link></h3>
                    <p className="cs_mb_19">{item.desc}</p>
                    <Link to="/blog/blog-details" className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
                      <span className="cs_btn_text text-uppercase">Read More</span>
                      <span className="cs_btn_icon cs_center">
                      <i className="bi bi-arrow-right"></i>    
                        <i className="bi bi-arrow-right"></i>    
                      </span>
                    </Link>
                  </div>
                  <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                </div>
              </div>
            </div>
          ))}

          </div>
          <div className="cs_tyres_shape position-absolute">
            <img src="/assets/img/tyres.svg" alt="Tyres Image" />
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
       </section>
    );
};

export default Blog3;