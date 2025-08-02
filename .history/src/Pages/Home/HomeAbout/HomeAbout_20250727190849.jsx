import React from "react";
import "./ExpertiseSection.scss";

const ExpertiseSection = () => {
  return (
    <div className="expertiseSection">
      <div className="contentWrapper">
        <h2 className="sectionTitle">Bizim Təcrübəmiz</h2>
        <p className="sectionDescription">
          Satınalma və təchizat zənciri mükəmməlliyi üçün xüsusi həllər təqdim edirik.
        </p>
        <div className="expertiseGrid">
          <div className="expertiseCard">
            <h3 className="cardTitle">Tender İdarəetmə</h3>
            <p className="cardDescription">
              Səmərəli tender yaradılması, qiymətləndirilməsi və təchizatçı seçimi üçün sadələşdirilmiş proseslər.
            </p>
          </div>
          <div className="expertiseCard">
            <h3 className="cardTitle">Təchizatçı Optimallaşdırma</h3>
            <p className="cardDescription">
              Qlobal səviyyədə ən yaxşı təchizatçılarla güclü, dayanıqlı əlaqələr qurma.
            </p>
          </div>
          <div className="expertiseCard">
            <h3 className="cardTitle">Xərc Azaltma</h3>
            <p className="cardDescription">
              Keyfiyyətdən ödün vermədən xərcləri minimuma endirmək üçün strateji satınalma.
            </p>
          </div>
          <div className="expertiseCard">
            <h3 className="cardTitle">Risklərin Azaldılması</h3>
            <p className="cardDescription">
              Təchizat zənciri risklərini müəyyən etmək və idarə etmək üçün proaktiv strategiyalar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;