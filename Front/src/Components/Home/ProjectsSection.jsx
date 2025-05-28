import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
    const { t } = useTranslation();
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            title: 'Classic Car Restoration',
            category: 'restoration',
            beforeImage: '/assets/img/projects/classic-car-before.jpg',
            afterImage: '/assets/img/projects/classic-car-after.jpg',
            description: 'Complete restoration of a vintage automobile to its original glory.'
        },
        {
            title: 'Accident Repair',
            category: 'repair',
            beforeImage: '/assets/img/projects/accident-before.jpg',
            afterImage: '/assets/img/projects/accident-after.jpg',
            description: 'Professional repair and restoration of accident-damaged vehicle.'
        },
        {
            title: 'Custom Modification',
            category: 'custom',
            beforeImage: '/assets/img/projects/custom-before.jpg',
            afterImage: '/assets/img/projects/custom-after.jpg',
            description: 'Custom body modifications for enhanced performance and aesthetics.'
        }
    ];

    return (
        <section className="cs_projects_section">
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                    <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold cs_fs_18">
                        {t('projects.subtitle')}
                    </h3>
                    <h2 className="cs_section_title cs_fs_45 cs_semibold">
                        {t('projects.title')}
                    </h2>
                </div>
                
                <div className="cs_projects_showcase">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cs_project_images position-relative">
                                <div className="cs_before_after_slider">
                                    <div className="cs_before_image" style={{
                                        backgroundImage: `url(${projects[activeProject].beforeImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '10px'
                                    }}>
                                        <span className="cs_label">Before</span>
                                    </div>
                                    <div className="cs_after_image" style={{
                                        backgroundImage: `url(${projects[activeProject].afterImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '10px'
                                    }}>
                                        <span className="cs_label">After</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cs_project_info cs_ml_30">
                                <h3 className="cs_fs_30 cs_semibold cs_mb_20">
                                    {projects[activeProject].title}
                                </h3>
                                <p className="cs_mb_30">{projects[activeProject].description}</p>
                                <div className="cs_project_nav cs_mb_30">
                                    {projects.map((project, index) => (
                                        <button
                                            key={index}
                                            className={`cs_project_nav_btn ${activeProject === index ? 'active' : ''}`}
                                            onClick={() => setActiveProject(index)}
                                        >
                                            {project.title}
                                        </button>
                                    ))}
                                </div>
                                <Link to="/projects" className="cs_btn cs_style_1">
                                    <span>{t('projects.viewMore')}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

 