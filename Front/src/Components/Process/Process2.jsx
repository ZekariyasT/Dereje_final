import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle2 from "../Common/SectionTitle2";
import { FaCarCrash } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { RiToolsFill } from 'react-icons/ri';
import { MdEngineering } from 'react-icons/md';

const Process2 = () => {
  const { t } = useTranslation();

  return (
    <section className="cs_working_process_wrap">
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <SectionTitle2
            SubTitle={t('workingProcess.subtitle')}
            Title={t('workingProcess.title')}
          />
        </div>
        <div className="cs_working_process">
          <div className="process_container">
            <div className="process_item">
              <div className="process_icon">
                <FaCarCrash size={40} />
              </div>
              <h2>{t('workingProcess.steps.identify.title')}</h2>
              <p>{t('workingProcess.steps.identify.description')}</p>
            </div>
            <div className="process_item">
              <div className="process_icon">
                <MdEngineering size={40} />
              </div>
              <h2>{t('workingProcess.steps.prepare.title')}</h2>
              <p>{t('workingProcess.steps.prepare.description')}</p>
            </div>
            <div className="process_item">
              <div className="process_icon">
                <RiToolsFill size={40} />
              </div>
              <h2>{t('workingProcess.steps.working.title')}</h2>
              <p>{t('workingProcess.steps.working.description')}</p>
            </div>
            <div className="process_item">
              <div className="process_icon">
                <GiAutoRepair size={40} />
              </div>
              <h2>{t('workingProcess.steps.deliver.title')}</h2>
              <p>{t('workingProcess.steps.deliver.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process2;