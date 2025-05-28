import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    const { t } = useTranslation();

    const recentNews = [
        {
            id: 1,
            image: '/assets/img/news/news1.jpg',
            category: 'company',
            date: '2024-03-15',
            title: 'New State-of-the-Art Equipment Installation',
            excerpt: 'Expanding our capabilities with cutting-edge automotive repair and restoration equipment.'
        },
        {
            id: 2,
            image: '/assets/img/news/news2.jpg',
            category: 'industry',
            date: '2024-03-10',
            title: 'Latest Trends in Automotive Design',
            excerpt: 'Exploring the newest developments in car body design and manufacturing techniques.'
        },
        {
            id: 3,
            image: '/assets/img/news/news3.jpg',
            category: 'technology',
            title: 'Advanced Paint Technology',
            date: '2024-03-05',
            excerpt: 'Introducing eco-friendly and durable paint solutions for vehicle restoration.'
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    return (
        <section className="cs_news_section cs_gray_bg">
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                    <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold cs_fs_18">
                        {t('news.subtitle')}
                    </h3>
                    <h2 className="cs_section_title cs_fs_45 cs_semibold">
                        {t('news.title')}
                    </h2>
                </div>
                
                <div className="row">
                    {recentNews.map((news) => (
                        <div key={news.id} className="col-lg-4 col-md-6">
                            <div className="cs_news_card cs_radius_15 cs_white_bg">
                                <div className="cs_news_img">
                                    <Link to={`/news/${news.id}`}>
                                        <img 
                                            src={news.image} 
                                            alt={news.title}
                                            className="w-100 cs_radius_15_top" 
                                        />
                                    </Link>
                                </div>
                                <div className="cs_news_content p-4">
                                    <div className="cs_news_meta cs_mb_15">
                                        <span className="cs_news_category cs_accent_color">
                                            {t(`news.categories.${news.category}`)}
                                        </span>
                                        <span className="cs_news_date cs_text_gray">
                                            {formatDate(news.date)}
                                        </span>
                                    </div>
                                    <h3 className="cs_news_title cs_fs_24 cs_semibold cs_mb_15">
                                        <Link to={`/news/${news.id}`} className="cs_text_black">
                                            {news.title}
                                        </Link>
                                    </h3>
                                    <p className="cs_news_excerpt cs_mb_20">
                                        {news.excerpt}
                                    </p>
                                    <Link to={`/news/${news.id}`} className="cs_news_btn cs_accent_color">
                                        {t('news.readMore')} <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center cs_mt_50">
                    <Link to="/news" className="cs_btn cs_style_1">
                        <span>{t('common.viewAll')}</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsSection; 