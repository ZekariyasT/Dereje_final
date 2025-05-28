import { useTranslation } from 'react-i18next';
import About1 from "../Components/About/About1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import Blog from "../Components/Blog/Blog";
import Services from "../Components/Services/Services";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Process from "../Components/Process/Process";

// Import required CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/main.css";
import Process2 from '../Components/Process/Process2';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="homepage">
            <HeroBanner1 />
            <About1
                expNumber="25"
                expYers={t('about.stats.experience')}
                expTitle={t('about.stats.title')}
                subTitle={t('about.subtitle')}
                Title={t('about.title')}
                Content={t('about.description')}
                feature1={t('services.items.design.title')}
                feature2={t('services.items.modification.title')}
                listItem={[
                    t('about.values.items.quality'),
                    t('about.values.items.integrity'),
                    t('about.values.items.innovation')
                ]}
                name="Dereje Tura"
                designation={t('about.founder')}
            />
            <Services />
            <BeforeAfter 
                title={t('projects.title')}
                subTitle={t('projects.subtitle')}
                beforeImg="/assets/img/before.jpg"
                afterImg="/assets/img/after.jpg"
                beforeTitle={t('projects.before')}
                afterTitle={t('projects.after')}
            />
            <Testimonial1
                subtitle={t('testimonials.subtitle')}
                title={t('testimonials.title')}
            />
            <Process2 />
            <Blog />
        </div>
    );
};

export default Home;