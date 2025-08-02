import React from "react";
import "./ProcessSection.scss";

const ProcessSection = () => {
  const processData = {
    title: "Bizim Prosesimiz",
    description: "Sürətli, etibarlı və peşəkar nəticələrə nail olmaq üçün sübut edilmiş yanaşma.",
    steps: {
      demandIdentification: {
        step: "1",
        title: "Tələbatın Müəyyən Olunması",
        description: "Müştərinin ehtiyacları dəqiq öyrənilir və uyğun məhsul/xidmət kateqoriyaları müəyyənləşdirilir. Məsələn, ofis üçün mebel, texnika və ya təmizlik məhsulları."
      },
      productResearch: {
        step: "2",
        title: "Məhsul Araşdırması və Təklif",
        description: "Bazar araşdırması aparılır, uyğun məhsullar seçilir və optimal qiymət təklifi (xüsusiyyətlər, miqdar, qiymət, təhvil müddəti ilə) hazırlanır."
      },
      agreement: {
        step: "3",
        title: "Razılaşma və Müqavilələşmə",
        description: "Təklif qəbul olunduqdan sonra müqavilə bağlanır. Qiymət, çatdırılma, zəmanət və ödəniş şərtləri rəsmi sənədlərlə təsdiqlənir."
      },
      supplyDelivery: {
        step: "4",
        title: "Təchizat və Çatdırılma",
        description: "Məhsullar sifariş edilir və vaxtında, zədəsiz çatdırılır. Azərbaycanın bütün bölgələrinə operativ çatdırılma həyata keçirilir."
      },
  
      warrantyService: {
        step: "6",
        title: "Zəmanət və Satış Sonrası Xidmət",
        description: "Məhsul və xidmətlərə zəmanət verilir. Problemlər müştəri dəstək komandamız tərəfindən qısa zamanda həll edilir."
      }
    }
  };

  return (
    <div className="processSection">
      <div className="contentWrapper">
        <h2 className="sectionTitle">{processData.title}</h2>
        <p className="sectionDescription">{processData.description}</p>
        <div className="processGrid">
          {Object.keys(processData.steps).map((key, index) => (
            <div key={index} className="processCard">
              <div className="stepNumber">{processData.steps[key].step}</div>
              <h3 className="cardTitle">{processData.steps[key].title}</h3>
              <p className="cardDescription">{processData.steps[key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;