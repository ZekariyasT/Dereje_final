import { useTranslation } from "react-i18next";
import About1 from "../Components/About/About1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import Blog from "../Components/Blog/Blog";
import Services from "../Components/Services/Services";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
// import Process from "../Components/Process/Process";

// Import required CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/main.css";
import Process2 from "../Components/Process/Process2";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <HeroBanner1 />
      <About1
        expNumber="25"
        expYers={t("about.stats.experience")}
        expTitle={t("about.stats.title")}
        subTitle={t("about.subtitle")}
        Title={t("about.title")}
        Content={t("about.description")}
        feature1={t("services.items.design.title")}
        feature2={t("services.items.modification.title")}
        listItem={[
          t("about.values.items.quality"),
          t("about.values.items.integrity"),
          t("about.values.items.innovation"),
        ]}
        name="Dereje Tura"
        designation={t("about.founder")}
      />
      <Services />
      <div className="cs_before_after_slider cs_style_1 position-relative cs_heading_bg">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
            <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
              {t("projects.subtitle")}
            </h3>
            <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">
              {t("projects.title")}
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white h-100">
                <div className="position-relative">
                  <img
                    src="/assets/img/before1.png"
                    alt="Before Restoration"
                    className="w-100 object-fit-cover"
                    style={{ height: '550px' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3 badge bg-primary">
                    {t("projects.before")}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white h-100">
                <div className="position-relative">
                  <img
                    src="/assets/img/after1.png"
                    alt="After Restoration"
                    className="w-100 object-fit-cover"
                    style={{ height: '550px' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3 badge bg-success">
                    {t("projects.after")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </div>
      <Testimonial1
        subtitle={t("testimonials.subtitle")}
        title={t("testimonials.title")}
      />
      <Process2 />
      <Blog />
    </div>
  );
};

export default Home;
