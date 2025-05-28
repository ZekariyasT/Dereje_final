import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const Video1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/hBPvKna1Adw");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

    return (
        <section className="cs_video cs_style_1 cs_bg_filed position-relative" data-background="/assets/img/video_bg_1.jpg">
        <div className="container">
          <div className="cs_video_overlay cs_heading_bg position-absolute"></div>
          <div className="cs_video_content">
            <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
              <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">We Provide Awesome Video <br/> Get a Car Repair.</h2>
            </div>
            <a onClick={handelClick} className="cs_video_open wow zoomIn" data-wow-delay="0.3s">
              <span className="cs_player_btn cs_center">
                <span></span>
              </span>
            </a>
          </div>
          <div className="cs_video_shape_1 position-absolute">
            <img src="/assets/img/shapes/video_shape_1.svg" alt="Video Shapw" />
          </div>
        </div>
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal>
      </section>
    );
};

export default Video1;