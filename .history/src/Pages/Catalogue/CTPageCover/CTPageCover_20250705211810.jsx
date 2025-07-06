import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaInstagram } from 'react-icons/fa';
import './CTPageCover.scss';
import CTCoverLogo from '../../../../public/assets/ptglogo.png'

const CTPageCover = () => {
  return (
    <div className="CTPageCoverBookCatalog">
      <div className="CTPageCoverCatalogHeader">
        <img className="CTPageCoverLogo" src={CTCoverLogo} alt="Şirkət Logosu" />
        <h1 className="CTPageCoverCatalogTitle">Xidmət Kataloqu</h1>
        <p className="CTPageCoverCatalogSubtitle">Keyfiyyətli xidmətlərimizlə tanış olun</p>
      </div>
      <div className="CTPageCoverBookContainer">
        <div className="CTPageCoverBookWrapper">
          <div className="CTPageCoverBookCover">
            <div className="CTPageCoverPageContent" style={{ backgroundImage: 'url(/path/to/cover-image.jpg)' }}>
              <div className="CTPageCoverContactInfo">
                <div className="CTPageCoverContactItem">
                  <FaPhone className="CTPageCoverContactIcon" />
            
                  <a href="tel:+994 12 345 67 89" target="_blank" rel="noopener noreferrer">+994 12 345 67 89</a>
                </div>
                <div className="CTPageCoverContactItem">
                  <FaEnvelope className="CTPageCoverContactIcon" />
             
                    <a href="https://www.sirket.az" target="_blank" rel="noopener noreferrer">info@sirket.az</a>
                </div>
                <div className="CTPageCoverContactItem">
                  <FaGlobe className="CTPageCoverContactIcon" />
                  <a href="https://www.sirket.az" target="_blank" rel="noopener noreferrer">www.sirket.az</a>
                </div>
                <div className="CTPageCoverContactItem">
                  <FaInstagram className="CTPageCoverContactIcon" />
                  <a href="https://www.instagram.com/sirket" target="_blank" rel="noopener noreferrer">sirket</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTPageCover;