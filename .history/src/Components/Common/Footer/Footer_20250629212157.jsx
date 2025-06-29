import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';
import LogoFooter from '../../../../public/assets/logo.png'
const Footer = () => {
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
              We are committed to providing excellent service and innovative solutions 
              to meet all your business needs.
            </p>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">Quick Links</h3>
            <ul className="linkList">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">Services</h3>
            <ul className="linkList">
              <li><a href="#web-design">Web Design</a></li>
              <li><a href="#development">Development</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#maintenance">Maintenance</a></li>
            </ul>
          </div>
          
          <div className="footerSection">
            <h3 className="sectionTitle">Contact Info</h3>
            <div className="contactInfo">
              <div className="contactItem">
                <FaMapMarkerAlt className="contactIcon" />
                <span>123 Business Street, City 12345</span>
              </div>
              <div className="contactItem">
                <FaPhone className="contactIcon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contactItem">
                <FaEnvelope className="contactIcon" />
                <span>info@company.com</span>
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
              © 2025 Your Company Name. All rights reserved.
            </p>
            <div className="bottomLinks">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;