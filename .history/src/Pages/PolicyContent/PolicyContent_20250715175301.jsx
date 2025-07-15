import React from "react";
import "./PolicyContent.scss";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { Helmet } from "react-helmet";

const PolicyContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>MƏXFİLİK - PRIME TRADE GROUP MMC</title>
        {/* <meta
          name="description"
          content="PRIME TRADE GROUP MMC haqqında ətraflı məlumat əldə edin – missiyamız, baxışımız, dəyərlərimiz və qlobal təchizat zəncirinin idarə olunması, logistika, satınalma və risklərin idarə olunmasındakı peşəkarlığımız."
        />
        <meta
          name="keywords"
          content="PRIME TRADE GROUP, təchizat zəncirinin idarə olunması, logistika, qlobal satınalma, risklərin idarə olunması"
        /> */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="policyContentContainer">


         title={t("about.section_header.title")}
            subtitle={t("about.section_header.subtitle")}
        <SectionHeader title={t("policyContent.title")} subtitle={t("policyContent.subtitle")}/>
        <div className="policyContent">
          <section className="policySection">
            <h2>{t("policyContent.privacyPolicy.title")}</h2>
            <p>{t("policyContent.privacyPolicy.intro")}</p>
            <p>{t("policyContent.privacyPolicy.dataCollection")}</p>
            <p>{t("policyContent.privacyPolicy.dataUse")}</p>
            <p>{t("policyContent.privacyPolicy.dataSharing")}</p>
            <p>{t("policyContent.privacyPolicy.userRights")}</p>
          </section>
          <section className="policySection">
            <h2>{t("policyContent.termsOfService.title")}</h2>
            <p>{t("policyContent.termsOfService.intro")}</p>
            <p>{t("policyContent.termsOfService.use")}</p>
            <p>{t("policyContent.termsOfService.liability")}</p>
            <p>{t("policyContent.termsOfService.termination")}</p>
          </section>
          <section className="policySection">
            <h2>{t("policyContent.cookiePolicy.title")}</h2>
            <p>{t("policyContent.cookiePolicy.intro")}</p>
            <p>{t("policyContent.cookiePolicy.types")}</p>
            <p>{t("policyContent.cookiePolicy.management")}</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PolicyContent;
