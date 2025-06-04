import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        emailjs.sendForm(
            'service_y25yj29',
            'template_rsshjd9',
            form.current,
            'yvInitvaLjz6_RBtz'
        )
        .then((result) => {
            console.log('Success:', result.text);
            setSubmitStatus({
                type: 'success',
                message: t('contact.form.success')
            });
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error:', error.text);
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
                                        <p className="mb-0">
                                            <a href="https://maps.app.goo.gl/3Ww4P5T3GDvDfZe79" target="_blank" rel="noopener noreferrer">
                                                {t('header.contact.address')}
                                            </a>
                                        </p>
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
                                <a href="https://t.me/Tomastura" className="cs_center cs_accent_bg_light" target="_blank" rel="noopener noreferrer" title="Telegram">
                                    <i className="bi bi-telegram"></i>
                                </a>
                                <a href="https://www.tiktok.com/@tom.tom7531?_t=ZM-8wuYYEeFgZR&_r=1" className="cs_center cs_accent_bg_light" target="_blank" rel="noopener noreferrer" title="TikTok">
                                    <i className="bi bi-tiktok"></i>
                                </a>
                                <a href="#" className="cs_center cs_accent_bg_light" title="Facebook">
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
                                    <select 
                                        name="service" 
                                        className="cs_form_field" 
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" disabled>{t('contact.form.service')}</option>
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
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.5633370911287!2d38.67702800000001!3d9.020068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDEnMTIuMiJOIDM4wrA0MCczNy4zIkU!5e0!3m2!1sen!2sus!4v1709925151775!5m2!1sen!2sus"
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