import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './PageBanner.css';

const PageBanner = ({ title, variant }) => {
    const { t } = useTranslation();
    
    const getBannerClass = () => {
        switch(variant) {
            case 'about':
                return 'cs_banner_about';
            case 'services':
                return 'cs_banner_services';
            case 'blog':
                return 'cs_banner_blog';
            case 'contact':
                return 'cs_banner_contact';
            default:
                return 'cs_banner_default';
        }
    };

    return (
        <section className={`cs_page_banner ${getBannerClass()}`}>
            <div className="container">
                <div className="cs_page_banner_text">
                    <h1 className="cs_hero_title cs_fs_70 cs_mb_18 wow fadeInUp" style={{color:"#ffffff", fontFamily: "Oswald"}}>{title}</h1>
                    <ol className="breadcrumb cs_heading_font">
                        <li className="breadcrumb-item">
                            <Link to="/" style={{color: "#ffffff"}}>{t('header.nav.home')}</Link>
                        </li>
                        <li className="breadcrumb-item active" style={{color: "#ffffff"}}>{title}</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default PageBanner; 