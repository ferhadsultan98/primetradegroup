import React from "react";
import { Helmet } from "react-helmet";
import {
  Network,
  Lightbulb,
  Star,
  Users2,
  Timer,
  ShieldCheck,

} from "lucide-react";
import "./WhyUs.scss";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const WhyUs = () => {
  return (
    <>
    
    <div className="whyUsContainer">
      <Helmet>
        <title>NİYƏ BİZİ SEÇMƏLİSİNİZ - PRIME TRADE GROUP MMC</title>
        <meta
          name="description"
          content="PRIME TRADE GROUP MMC-ni etibarlı satınalma partnyorunuz edən səbəbləri kəşf edin – etibarlı tərəfdaşlıq, geniş məhsul çeşidi, keyfiyyətə zəmanət, operativ xidmət və peşəkar komanda."
        />
        <meta
          name="keywords"
          content="etibarlı tərəfdaşlıq, geniş məhsul çeşidi, keyfiyyətə zəmanət, operativ xidmət, peşəkar komanda, fərdi yanaşma, şəffaflıq, satınalma həlləri, təchizat zənciri, PRIME TRADE GROUP MMC"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <section className="benefitsSection">
        <div className="containerWrapper">
         
          <div className="benefitsGrid">
            <div className="benefitCard">
              <ShieldCheck className="benefitIcon" />
              <h3 className="benefitTitle">Etibarlı Tərəfdaşlıq</h3>
              <p className="benefitText">Şirkətimiz həm dövlət, həm də özəl sektor üçün bir çox uğurlu layihə və təchizat prosesini həyata keçirmişdir. Müştərilərimizin bizə olan güvəni illərlə formalaşan peşəkarlığımızın nəticəsidir.</p>
            </div>
            <div className="benefitCard">
              <Network className="benefitIcon" />
              <h3 className="benefitTitle">Geniş Məhsul Çeşidi</h3>
              <p className="benefitText">Təmizlik məhsullarından tutmuş İT avadanlıqlarına, mebeldən iş geyiminə qədər bir şirkətin ehtiyac duyduğu bütün məhsulları bir mərkəzdən təmin edirik.</p>
            </div>
            <div className="benefitCard">
              <Star className="benefitIcon" />
              <h3 className="benefitTitle">Keyfiyyətə Zəmanət</h3>
              <p className="benefitText">Təqdim etdiyimiz bütün məhsullar beynəlxalq və yerli keyfiyyət standartlarına cavab verir. Rəsmi distribyutorlarla və etibarlı istehsalçılarla əməkdaşlıq edirik.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="advantagesSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Üstünlüklərimiz</h2>
          <div className="advantagesGrid">
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Timer className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">Operativ Xidmət</h4>
              <ul className="advantageList">
                <li>Sürətli təhvil</li>
                <li>Fərdi qiymətləndirmə</li>
                <li>Yüksək dəqiqlik</li>
              </ul>
            </div>
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Users2 className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">Peşəkar Komanda</h4>
              <ul className="advantageList">
                <li>Təcrübəli mütəxəssislər</li>
                <li>Tələblərə uyğun məhsul seçimi</li>
                <li>Hər mərhələdə dəstək</li>
              </ul>
            </div>
            <div className="advantageCard">
              <div className="advantageIconWrapper">
                <Lightbulb className="advantageIcon" />
              </div>
              <h4 className="advantageTitle">Fərdi Yanaşma</h4>
              <ul className="advantageList">
                <li>Fərqli ehtiyaclara uyğun həllər</li>
                <li>Qənaətcil təkliflər</li>
                <li>Fərdi layihə idarəetmə</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="trustSection">
        <div className="containerWrapper">
          <h2 className="sectionTitle">Güvən</h2>
          <div className="trustGrid">
            <div className="trustCard">
              <Users2 className="trustIcon" />
              <h4 className="trustTitle">Dövlət və Özəl Sektor</h4>
              <p className="trustText">Həm dövlət, həm də özəl sektor üçün uğurlu təchizat layihələri ilə etibarlı tərəfdaş kimi tanınırıq.</p>
            </div>
            <div className="trustCard">
              <Star className="trustIcon" />
              <h4 className="trustTitle">Müştəri Güvəni</h4>
              <p className="trustText">Müştərilərimizin bizə olan güvəni illərlə formalaşan peşəkarlığımızın nəticəsidir.</p>
            </div>
            <div className="trustCard">
              <ShieldCheck className="trustIcon" />
              <h4 className="trustTitle">Şəffaflıq və Hüquqi Təminat</h4>
              <p className="trustText">Bütün əməkdaşlıq və təchizat proseslərimiz şəffaf, qanuni və müqavilə əsasında həyata keçirilir.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WhyUs;