import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from './Nav';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div className='header-area2 header_nav_03'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'transparent'
      }}
    >
      <div className="cs_top_header">
        <div className="container-fluid">
          <div className="cs_top_header_in">

          <div className="cs_top_header_left">
              <ul className="cs_header_contact_list cs_mp_0">
                <li>
                <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+111(564)56825">{t('header.contact.phone')}</a>
                </li>
                <li>
                <i className="bi bi-envelope-fill"></i>
                  <a href="mailto:cripar@gmail.com">{t('header.contact.email')}</a>
                </li>
                <li>
                <i className="bi bi-geo-alt-fill"></i>
                  <span>{t('header.contact.address')}</span>
                </li>
              </ul>
            </div>

            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links">
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
                <LanguageSwitcher />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
            <div className="cs_logo_wrap">
              <Link className="cs_site_branding" to="/">
                <img src="/assets/img/Fauget__4_-removebg-preview.png" alt="Logo" />
              </Link>
              <div className="cs_logo_bg_shape cs_accent_color">
                  <svg width="509" height="141" viewBox="0 0 509 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74 0H487L508.5 70.5L473.5 141H74V0Z" fill="currentColor"/>
                    <path d="M54 141H472.5L488.5 70.5L443.5 0H54V141Z" fill="white"/>
                    <path d="M0 0H443L464.5 70.5L443 141H0V0Z" fill="currentColor"/>
                  </svg>
                  <img src="/assets/img/logo_shape_pattern.svg" alt="" />
                </div>             
              </div>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_fs_18 cs_semibold cs_heading_color cs_heading_font">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
     //// <LanguageSwitcher />
    
  );
}
