import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';
import LogoFooter from '../../../../public/assets/lightlogo.png';
import translations from './translations.json';

const Footer = () => {
  const t = translations.footer;

  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerTop">
          <div className="footerSection logoSection">
            <img 
              src={LogoFooter} 
              alt="Company Logo" 
              className="companyLogo"
            />
            <h2>PRIME TRADE GROUP</h2>
            <p className="companyDescription">
              {t.companyDescription}
            </p>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">{t.quickLinks}</h3>
            <ul className="linkList">
              <li><a href="#home">{t.home}</a></li>
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#services">{t.services}</a></li>
              <li><a href="#products">{t.products}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">{t.servicesTitle}</h3>
            <ul className="linkList">
              <li><a href="#web-design">{t.webDesign}</a></li>
              <li><a href="#development">{t.development}</a></li>
              <li><a href="#consulting">{t.consulting}</a></li>
              <li><a href="#support">{t.support}</a></li>
              <li><a href="#maintenance">{t.maintenance}</a></li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">{t.contactInfo}</h3>
            <div className="contactInfo">
              <div className="contactItem">
                <FaMapMarkerAlt className="contactIcon" />
                <span>{t.address}</span>
              </div>
              <div className="contactItem">
                <FaPhone className="contactIcon" />
                <span>{t.phone}</span>
              </div>
              <div className="contactItem">
                <FaEnvelope className="contactIcon" />
                <span>{t.email}</span>
              </div>
            </div>
            
            <div className="socialMedia">
              <a href="#facebook" className="socialLink">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="socialLink">
                <FaTwitter />
              </a>
              <a href="#instagram" className="socialLink">
                <FaInstagram />
              </a>
              <a href="#linkedin" className="socialLink">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footerBottom">
          <div className="bottomContent">
            <p className="copyrightText">
              {t.copyright}
            </p>
            <div className="bottomLinks">
              <a href="#privacy">{t.privacy}</a>
              <a href="#terms">{t.terms}</a>
              <a href="#cookies">{t.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;