import React from 'react';
import './PolicyContent.scss';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';


const PolicyContent = () => {
  const { t } = useTranslation();

  return (
    <div className="policyContentContainer">
      <SectionHeader/>
      <div className="policyContent">
        <section className="policySection">
          <h2>{t('policyContent.privacyPolicy.title')}</h2>
          <p>{t('policyContent.privacyPolicy.intro')}</p>
          <p>{t('policyContent.privacyPolicy.dataCollection')}</p>
          <p>{t('policyContent.privacyPolicy.dataUse')}</p>
          <p>{t('policyContent.privacyPolicy.dataSharing')}</p>
          <p>{t('policyContent.privacyPolicy.userRights')}</p>
        </section>
        <section className="policySection">
          <h2>{t('policyContent.termsOfService.title')}</h2>
          <p>{t('policyContent.termsOfService.intro')}</p>
          <p>{t('policyContent.termsOfService.use')}</p>
          <p>{t('policyContent.termsOfService.liability')}</p>
          <p>{t('policyContent.termsOfService.termination')}</p>
        </section>
        <section className="policySection">
          <h2>{t('policyContent.cookiePolicy.title')}</h2>
          <p>{t('policyContent.cookiePolicy.intro')}</p>
          <p>{t('policyContent.cookiePolicy.types')}</p>
          <p>{t('policyContent.cookiePolicy.management')}</p>
        </section>
      </div>
    </div>
  );
};

export default PolicyContent;