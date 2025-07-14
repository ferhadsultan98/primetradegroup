import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Zap,
  DollarSign,
  Network,
  ThumbsUp,
  Headphones,
  Lightbulb,
  Star,
  Users2,
  Building2,
  Timer,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import "./WhyUs.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="whyUsContainer">
      <Helmet>
        <title>{t("whyus.title")}</title>
        <meta name="description" content={t("whyus.meta_description")} />
        <meta name="keywords" content={t("whyus.meta_keywords")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <section className="benefitsSection">
        <div className="containerWrapper">
          <SectionHeader
            title={t("whyus.section_header.title")}
            subtitle={t("whyus.section_header.subtitle")}
          />
          <div className="benefitsGrid">
            <div className="benefitCard">
              <DollarSign className="benefitIcon" />
              <h3 className="benefitTitle">{t("whyus.benefits.cost_reduction.title")}</h3>
              <p className="benefitText">{t("whyus.benefits.cost_reduction.text")}</p>
            </div>
            <div className="benefitCard">
              <Timer className="benefitIcon" />
              <h3 className="benefitTitle">{t("whyus.benefits.speed_efficiency.title")}</h3>
              <p className="benefitText">{t("whyus.benefits.speed_efficiency.text")}</p>
            </div>
            <div className="benefitCard">
              <Network className="benefitIcon" />
              <h3 className="benefitTitle">{t("whyus.benefits.global_network.title")}</h3>
              <p className="benefitText">{t("whyus.benefits.global_network.text")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="advantagesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">{t("whyus.advantages.title")}</h2>
          <div className="advantagesGrid">
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Lightbulb className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">{t("whyus.advantages.innovation.title")}</h4>
              <ul className="advantageList">
                <li>{t("whyus.advantages.innovation.features.supplier_matching")}</li>
                <li>{t("whyus.advantages.innovation.features.demand_planning")}</li>
                <li>{t("whyus.advantages.innovation.features.contract_management")}</li>
              </ul>
            </div>
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <ShieldCheck className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">{t("whyus.advantages.risk_mitigation.title")}</h4>
              <ul className="advantageList">
                <li>{t("whyus.advantages.risk_mitigation.features.supplier_audits")}</li>
                <li>{t("whyus.advantages.risk_mitigation.features.supply_chain_visibility")}</li>
                <li>{t("whyus.advantages.risk_mitigation.features.risk_assessment")}</li>
              </ul>
            </div>
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Headphones className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">{t("whyus.advantages.support.title")}</h4>
              <ul className="advantageList">
                <li>{t("whyus.advantages.support.features.account_managers")}</li>
                <li>{t("whyus.advantages.support.features.monitoring")}</li>
                <li>{t("whyus.advantages.support.features.emergency_protocols")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="successSection">
        <div className="containerWrapper">
          <div className="successGrid">
            <div className="successCard">
              <TrendingDown className="successIcon" />
              <div className="successNumber">{t("whyus.success.cost_reduction.number")}</div>
              <div className="successLabel">{t("whyus.success.cost_reduction.label")}</div>
            </div>
            <div className="successCard">
              <Zap className="successIcon" />
              <div className="successNumber">{t("whyus.success.procurement_cycles.number")}</div>
              <div className="successLabel">{t("whyus.success.procurement_cycles.label")}</div>
            </div>
            <div className="successCard">
              <ThumbsUp className="successIcon" />
              <div className="successNumber">{t("whyus.success.satisfaction.number")}</div>
              <div className="successLabel">{t("whyus.success.satisfaction.label")}</div>
            </div>
            <div className="successCard">
              <Building2 className="successIcon" />
              <div className="successNumber">{t("whyus.success.projects.number")}</div>
              <div className="successLabel">{t("whyus.success.projects.label")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">{t("whyus.trust.title")}</h2>
          <div className="trustGrid">
            <div className="trustCard">
              <Users2 className="trustIcon" />
              <h4 className="trustTitle">{t("whyus.trust.fortune.title")}</h4>
              <p className="trustText">{t("whyus.trust.fortune.text")}</p>
            </div>
            <div className="trustCard">
              <Star className="trustIcon" />
              <h4 className="trustTitle">{t("whyus.trust.recognition.title")}</h4>
              <p className="trustText">{t("whyus.trust.recognition.text")}</p>
            </div>
            <div className="trustCard">
              <ShieldCheck className="trustIcon" />
              <h4 className="trustTitle">{t("whyus.trust.certified.title")}</h4>
              <p className="trustText">{t("whyus.trust.certified.text")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;