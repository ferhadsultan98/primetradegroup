import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Truck,
  Globe,
  Users,
  Award,
  Target,
  Shield,
  CheckCircle,
  Sparkles,
  Monitor,
  Home,
  Shirt,
  Wrench
} from "lucide-react";
import "./About.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
     <SectionHeader
            title="PRIME TRADE GROUP MMC"
            subtitle="2025-ci ildə təsis edilmiş, yüksək keyfiyyətli təchizat, tender və satınalma xidmətləri göstərən etibarlı şirkət"
          />
    <div className="aboutContainer">
      <Helmet>
        <title>HAQQIMIZDA - PRIME TRADE GROUP MMC</title>
        <meta
          name="description"
          content="PRIME TRADE GROUP MMC haqqında ətraflı məlumat əldə edin – 2025-ci ildə təsis edilmiş təchizat, tender və satınalma şirkəti. Yüksək keyfiyyətli xidmətlər və etibarlı həllər."
        />
        <meta
          name="keywords"
          content="PRIME TRADE GROUP, təchizat, tender, satınalma, təmizlik məhsulları, mebel, IT avadanlıqları, ofis ləvazimatları, iş geyimləri, santexnika"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Mission Section */}
      <section className="missionSection">
        <div className="containerWrapper">
         
          <div className="missionGrid">
            <div className="missionCard">
              <Target className="missionIcon" />
              <h3 className="missionTitle">Missiya</h3>
              <p className="missionText">
                Dövlət və özəl sektorda fəaliyyət göstərən müəssisələrin ehtiyaclarına uyğun olaraq, 
                operativ, etibarlı və kompleks təchizat həlləri təqdim etmək.
              </p>
            </div>
            <div className="missionCard">
              <Award className="missionIcon" />
              <h3 className="missionTitle">Vizyon</h3>
              <p className="missionText">
                Təchizat və satınalma sahəsində lider mövqe tutaraq, müştərilərimizə uzunmüddətli 
                və davamlı həllər təqdim etmək.
              </p>
            </div>
            <div className="missionCard">
              <Shield className="missionIcon" />
              <h3 className="missionTitle">Dəyərlər</h3>
              <p className="missionText">
                Etibarlılıq, operativlik, keyfiyyət və müştəri məmnuniyyəti - bizim əsas prinsiplərimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="servicesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Xidmətlərimiz</h2>
          <div className="servicesGrid">
            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Sparkles className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Təmizlik məhsulları</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Sertifikatlı təmizlik vasitələri</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Ofis və ictimai sahələr üçün</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Keyfiyyətli və təhlükəsiz</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Home className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Mebel</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Ofis və məktəb mebeli</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Erqonomik və müasir dizayn</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Quraşdırma xidməti</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Monitor className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">IT avadanlıqları</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Kompüter texnikası</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Server sistemləri</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Şəbəkə avadanlıqları</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Users className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Ofis ləvazimatları</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Kağız məhsulları</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Yazı alətləri</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Təşkilati vasitələr</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Shirt className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">İş geyimləri</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Təhlükəsizlik standartları</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Fərdi mühafizə vasitələri</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Müxtəlif sənaye sahələri</span>
                </div>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIconWrapper">
                <Wrench className="serviceIcon" />
              </div>
              <h4 className="serviceTitle">Santexnika məhsulları</h4>
              <div className="serviceFeatures">
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Müasir və funksional</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Yeni layihələr üçün</span>
                </div>
                <div className="featureItem">
                  <CheckCircle className="featureIcon" />
                  <span>Təmir-təchizat ehtiyacları</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
    </>
  );
};

export default AboutUs;