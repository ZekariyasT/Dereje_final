import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer1 = () => {
    const { t } = useTranslation();

    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
        
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">{t('footer.about')}</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>{t('footer.aboutDescription')}</p>
                  </div>
                  <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
               
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">{t('footer.contact')}</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                      {t('header.contact.address')}
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href={`tel:${t('header.contact.phone')}`}>{t('header.contact.phone')}</a> <br/>
                      <a href={`tel:${t('header.contact.phone')}`}>{t('header.contact.phone')}</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href={`mailto:${t('header.contact.email')}`}>{t('header.contact.email')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">{t('footer.workingHours')}</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    <li>
                      <span>{t('footer.weekdays')}</span>
                      <span>{t('footer.weekdayHours')}</span>
                    </li>
                    <li>
                      <span>{t('footer.saturday')}</span>
                      <span>{t('footer.saturdayHours')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright">
                {t('footer.copyright')} <a href="#">DerejeTureEngineering</a>. {t('footer.rights')}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer1;