import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';
import LogoFooter from '../../../../public/assets/lightlogo.png';
import { useTranslation } from "react-i18next";

const Footer = ({ t }) => {
    const { t, i18n } = useTranslation();
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
              {t('footer.companyDescription')}
            </p>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">{t('footer.quickLinks')}</h3>
            <ul className="linkList">
              <li><a href="#home">{t('footer.home')}</a></li>
              <li><a href="#about">{t('footer.about')}</a></li>
              <li><a href="#services">{t('footer.services')}</a></li>
              <li><a href="#products">{t('footer.products')}</a></li>
              <li><a href="#contact">{t('footer.contact')}</a></li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">{t('footer.servicesTitle')}</h3>
            <ul className="linkList">
              <li><a href="#web-design">{t('footer.webDesign')}</a></li>
              <li><a href="#development">{t('footer.development')}</a></li>
              <li><a href="#consulting">{t('footer.consulting')}</a></li>
              <li><a href="#support">{t('footer.support')}</a></li>
              <li><a href="#maintenance">{t('footer.maintenance')}</a></li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">{t('footer.contactInfo')}</h3>
            <div className="contactInfo">
              <div className="contactItem">
                <FaMapMarkerAlt className="contactIcon" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="contactItem">
                <FaPhone className="contactIcon" />
                <span>{t('footer.phone')}</span>
              </div>
              <div className="contactItem">
                <FaEnvelope className="contactIcon" />
                <span>{t('footer.email')}</span>
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
              {t('footer.copyright')}
            </p>
            <div className="bottomLinks">
              <a href="#privacy">{t('footer.privacy')}</a>
              <a href="#terms">{t('footer.terms')}</a>
              <a href="#cookies">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;