import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    'Supply Chain Management',
    'Procurement Services',
    'Vendor Management',
    'Logistics Solutions',
    'Risk Assessment',
    'Inventory Optimization'
  ];

  const quickLinks = [
    'Home',
    'About Us',
    'Why Us?',
    'Case Studies',
    'Blog',
    'Careers'
  ];

  const contactInfo = {
    address: '123 Business District, Supply Chain Ave, City 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@supplychainpro.com',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM'
  };

  return (
    <footer className="footerContainer">
      <div className="footerContent">
        {/* Main Footer Content */}
        <div className="footerMain">
          {/* Company Info Section */}
          <div className="footerSection companySection">
            <div className="footerLogo">
              <h3>SupplyChain Pro</h3>
            </div>
            <p className="companyDescription">
              Leading the future of supply chain management with innovative solutions, 
              strategic procurement services, and comprehensive logistics support for 
              businesses worldwide.
            </p>
            <div className="socialLinks">
              <a href="#" className="socialLink" aria-label="LinkedIn">
                <span className="socialIcon">in</span>
              </a>
              <a href="#" className="socialLink" aria-label="Twitter">
                <span className="socialIcon">tw</span>
              </a>
              <a href="#" className="socialLink" aria-label="Facebook">
                <span className="socialIcon">fb</span>
              </a>
              <a href="#" className="socialLink" aria-label="YouTube">
                <span className="socialIcon">yt</span>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="footerSection">
            <h4 className="footerHeading">Our Services</h4>
            <ul className="footerLinks">
              {servicesLinks.map((service, index) => (
                <li key={index} className="footerLinkItem">
                  <a 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="footerLink"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footerSection">
            <h4 className="footerHeading">Quick Links</h4>
            <ul className="footerLinks">
              {quickLinks.map((link, index) => (
                <li key={index} className="footerLinkItem">
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-').replace('?', '')}`} 
                    className="footerLink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footerSection contactSection">
            <h4 className="footerHeading">Contact Info</h4>
            <div className="contactInfo">
              <div className="contactItem">
                <span className="contactIcon">📍</span>
                <p className="contactText">{contactInfo.address}</p>
              </div>
              <div className="contactItem">
                <span className="contactIcon">📞</span>
                <p className="contactText">{contactInfo.phone}</p>
              </div>
              <div className="contactItem">
                <span className="contactIcon">✉️</span>
                <p className="contactText">{contactInfo.email}</p>
              </div>
              <div className="contactItem">
                <span className="contactIcon">🕒</span>
                <p className="contactText">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletterSection">
          <div className="newsletterContent">
            <h4 className="newsletterHeading">Stay Updated</h4>
            <p className="newsletterText">
              Subscribe to our newsletter for the latest supply chain insights and industry updates.
            </p>
            <form className="newsletterForm">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletterInput"
                required
              />
              <button type="submit" className="newsletterButton">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="footerBottomContent">
            <p className="copyright">
              © {currentYear} SupplyChain Pro. All rights reserved.
            </p>
            <div className="legalLinks">
              <a href="/privacy-policy" className="legalLink">Privacy Policy</a>
              <span className="linkSeparator">|</span>
              <a href="/terms-of-service" className="legalLink">Terms of Service</a>
              <span className="linkSeparator">|</span>
              <a href="/cookie-policy" className="legalLink">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;