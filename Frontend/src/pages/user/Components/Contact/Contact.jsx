import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        emailjs.sendForm(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            form.current
        )
        .then((result) => {
            setSubmitStatus({
                type: 'success',
                message: t('contact.form.success')
            });
            form.current.reset();
        })
        .catch((error) => {
            setSubmitStatus({
                type: 'error',
                message: t('contact.form.error')
            });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section className="cs_contact_section">
            <div className="container">
                <div className="row cs_gap_y_50">
                    <div className="col-lg-6">
                        <div className="cs_contact_desc">
                            <h3 className="cs_fs_24 cs_mb_33">{t('contact.title')}</h3>
                            <div className="cs_contact_info_grid">
                                <div className="cs_iconbox cs_style_5">
                                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                        <i className="bi bi-telephone-inbound-fill"></i>
                                    </div>
                                    <div className="cs_iconbox_info">
                                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">{t('header.phone')}:</h3>
                                        <a href="tel:+251913657022">{t('header.contact.phone')}</a>
                                    </div>
                                </div>
                                <div className="cs_iconbox cs_style_5">
                                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div className="cs_iconbox_info">
                                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">{t('header.email')}:</h3>
                                        <a href="mailto:dereje@derejeturaengineering.com">{t('header.contact.email')}</a>
                                    </div>
                                </div>
                                <div className="cs_iconbox cs_style_5">
                                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className="cs_iconbox_info">
                                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">{t('header.location')}:</h3>
                                        <p className="mb-0">{t('header.contact.address')}</p>
                                    </div>
                                </div>
                                <div className="cs_iconbox cs_style_5">
                                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                        <i className="bi bi-clock-fill"></i>
                                    </div>
                                    <div className="cs_iconbox_info">
                                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">{t('footer.workingHours')}:</h3>
                                        <p className="mb-0">{t('footer.weekdays')}: {t('footer.weekdayHours')}</p>
                                        <p className="mb-0">{t('footer.saturday')}: {t('footer.saturdayHours')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_height_44 cs_height_lg_30"></div>
                        <div className="cs_social_desc">
                            <h3 className="cs_fs_24 cs_semibold cs_mb_10">{t('contact.social.title')}</h3>
                            <p className="cs_mb_22">{t('contact.social.description')}</p>
                            <div className="cs_social_btns cs_style_1">
                                <a href="#" className="cs_center cs_accent_bg_light" title={t('contact.social.platforms.linkedin')}>
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="#" className="cs_center cs_accent_bg_light" title={t('contact.social.platforms.twitter')}>
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#" className="cs_center cs_accent_bg_light" title={t('contact.social.platforms.youtube')}>
                                    <i className="bi bi-youtube"></i>
                                </a>
                                <a href="#" className="cs_center cs_accent_bg_light" title={t('contact.social.platforms.facebook')}>
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                            <h3 className="cs_fs_24 cs_mb_33">{t('contact.form.title')}</h3>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="cs_form_field_wrap">
                                    <input 
                                        type="text" 
                                        name="user_name"
                                        placeholder={t('contact.form.name')}
                                        required 
                                        className="cs_form_field"
                                    />
                                </div>
                                <div className="cs_form_field_wrap">
                                    <input 
                                        type="email" 
                                        name="user_email"
                                        placeholder={t('contact.form.email')}
                                        required 
                                        className="cs_form_field"
                                    />
                                </div>
                                <div className="cs_form_field_wrap">
                                    <input 
                                        type="text" 
                                        name="subject"
                                        placeholder={t('contact.form.subject')}
                                        required 
                                        className="cs_form_field"
                                    />
                                </div>
                                <div className="cs_form_field_wrap">
                                    <select name="service" className="cs_form_field" required>
                                        <option value="" disabled selected>{t('contact.form.service')}</option>
                                        <option value="design">{t('services.items.design.title')}</option>
                                        <option value="restoration">{t('services.items.restoration.title')}</option>
                                        <option value="repair">{t('services.items.repair.title')}</option>
                                        <option value="modification">{t('services.items.modification.title')}</option>
                                    </select>
                                </div>
                                <div className="cs_form_field_wrap">
                                    <textarea 
                                        name="message"
                                        placeholder={t('contact.form.message')}
                                        required
                                        className="cs_form_field"
                                        rows="6"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="cs_btn cs_style_1"
                                    disabled={isSubmitting}
                                >
                                    <span>{isSubmitting ? t('common.submitting') : t('contact.form.submit')}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                                {submitStatus.message && (
                                    <div className={`cs_alert cs_${submitStatus.type}`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cs_map_section">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126086.90037244796!2d38.68869755468751!3d8.963489899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1709925151775!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact.map')}
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;