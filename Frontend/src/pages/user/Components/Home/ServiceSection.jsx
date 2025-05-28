import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: 'bi bi-pencil-square',
            key: 'design',
            color: '#FF416C'
        },
        {
            icon: 'bi bi-tools',
            key: 'restoration',
            color: '#2193b0'
        },
        {
            icon: 'bi bi-wrench',
            key: 'repair',
            color: '#11998e'
        },
        {
            icon: 'bi bi-gear',
            key: 'modification',
            color: '#8E2DE2'
        }
    ];

    return (
        <section className="cs_service_section cs_gray_bg">
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                    <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold cs_fs_18">
                        {t('services.subtitle')}
                    </h3>
                    <h2 className="cs_section_title cs_fs_45 cs_semibold">
                        {t('services.title')}
                    </h2>
                    <p className="cs_section_text cs_mt_20">
                        {t('services.description')}
                    </p>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="cs_service_card text-center cs_radius_15 cs_white_bg">
                                <div className="cs_service_icon" style={{
                                    backgroundColor: service.color,
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <i className={`${service.icon} fs-3 text-white`}></i>
                                </div>
                                <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_15">
                                    {t(`services.items.${service.key}.title`)}
                                </h3>
                                <p className="cs_service_text cs_mb_20">
                                    {t(`services.items.${service.key}.description`)}
                                </p>
                                <Link to={`/services#${service.key}`} className="cs_service_btn cs_accent_color">
                                    {t('common.learnMore')} <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center cs_mt_50">
                    <Link to="/services" className="cs_btn cs_style_1">
                        <span>{t('common.viewAll')}</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection; 