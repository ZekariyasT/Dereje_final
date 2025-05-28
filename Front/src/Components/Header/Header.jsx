import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <header className={`cs_site_header ${isSticky ? 'cs_sticky_header' : ''}`}>
            <div className="cs_header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cs_header_top_left">
                                <div className="cs_header_info">
                                    <i className="bi bi-telephone-fill"></i>
                                    <a href="tel:+251913657022">+251 (913) 657 022</a>
                                </div>
                                <div className="cs_header_info">
                                    <i className="bi bi-envelope-fill"></i>
                                    <a href="mailto:derejetura@gmial.com">derejetura@gmial.com</a>
                                </div>
                                <div className="cs_header_info">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <span>Addis Abeba - Ethiopia</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cs_header_top_right">
                                <div className="cs_social_links">
                                    <a href="#" title="LinkedIn">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#" title="Twitter">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" title="YouTube">
                                        <i className="bi bi-youtube"></i>
                                    </a>
                                    <a href="#" title="Facebook">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </div>
                                <div className="cs_language_select">
                                    <select onChange={changeLanguage} value={i18n.language}>
                                        <option value="en">EN</option>
                                        <option value="am">አማ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_main_header">
                <div className="container">
                    <div className="cs_main_header_in">
                        <div className="cs_main_header_left">
                            <Link to="/" className="cs_site_branding">
                                <img src={logo} alt="Dereje Tura Engineering" />
                            </Link>
                            <nav className={`cs_nav ${isMobileMenuOpen ? 'cs_active' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                            {t('header.nav.home')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                                            {t('header.nav.services')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                                            {t('header.nav.about')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>
                                            {t('header.nav.news')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                                            {t('header.nav.contact')}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button 
                            className="cs_mobile_menu_toggle"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 