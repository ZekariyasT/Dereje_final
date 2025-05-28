import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section className="cs_about_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="cs_about_content">
                            <div className="cs_section_heading cs_style_1">
                                <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold cs_fs_18">
                                    {t('about.subtitle')}
                                </h3>
                                <h2 className="cs_section_title cs_fs_45 cs_semibold">
                                    {t('about.title')}
                                </h2>
                            </div>
                            <div className="cs_about_text cs_mb_30">
                                <p className="cs_mb_20">{t('about.description')}</p>
                            </div>
                            <div className="cs_about_info_wrap cs_mb_30">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="cs_about_info text-center">
                                            <h3 className="cs_fs_30 cs_semibold cs_accent_color">
                                                {t('about.stats.experience')}
                                            </h3>
                                            <p>{t('about.values.items.quality')}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cs_about_info text-center">
                                            <h3 className="cs_fs_30 cs_semibold cs_accent_color">
                                                {t('about.stats.projects')}
                                            </h3>
                                            <p>{t('about.values.items.integrity')}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cs_about_info text-center">
                                            <h3 className="cs_fs_30 cs_semibold cs_accent_color">
                                                {t('about.stats.clients')}
                                            </h3>
                                            <p>{t('about.values.items.customer')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/about" className="cs_btn cs_style_1">
                                <span>{t('common.learnMore')}</span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cs_about_img_wrap">
                            <div className="cs_about_img cs_bg_filed" style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/img/about/about-home.jpg")',
                                borderRadius: '10px',
                                height: '500px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <div className="cs_about_img_text text-center text-white">
                                    <h3 className="cs_fs_24 cs_semibold cs_mb_10">
                                        {t('about.mission.title')}
                                    </h3>
                                    <p>{t('about.mission.text')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection; 