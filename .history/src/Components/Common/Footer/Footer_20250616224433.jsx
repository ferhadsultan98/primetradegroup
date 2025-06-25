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






import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  Building2,
  Users,
  Award,
  Globe
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* Main Footer Content */}
        <div className="footerMain">
          <div className="containerWrapper">
            <div className="footerGrid">
              {/* Company Info */}
              <div className="footerSection companySection">
                <div className="companyLogo">
                  <Building2 className="logoIcon" />
                  <h3 className="companyName">ProcureMax</h3>
                </div>
                <p className="companyDescription">
                  Leading procurement solutions provider delivering excellence in supply chain management, 
                  strategic sourcing, and vendor relations for businesses worldwide.
                </p>
                <div className="socialLinks">
                  <a href="#" className="socialLink">
                    <Facebook className="socialIcon" />
                  </a>
                  <a href="#" className="socialLink">
                    <Twitter className="socialIcon" />
                  </a>
                  <a href="#" className="socialLink">
                    <Linkedin className="socialIcon" />
                  </a>
                  <a href="#" className="socialLink">
                    <Instagram className="socialIcon" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="footerSection">
                <h4 className="sectionTitle">Our Services</h4>
                <ul className="linkList">
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Strategic Sourcing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Vendor Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Contract Negotiation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Supply Chain Optimization
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Risk Management
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="footerSection">
                <h4 className="sectionTitle">Quick Links</h4>
                <ul className="linkList">
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Industry Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footerLink">
                      <ChevronRight className="linkIcon" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footerSection">
                <h4 className="sectionTitle">Contact Info</h4>
                <div className="contactList">
                  <div className="contactItem">
                    <MapPin className="contactIcon" />
                    <div className="contactDetails">
                      <span className="contactText">
                        123 Business District, Corporate Tower<br />
                        New York, NY 10001
                      </span>
                    </div>
                  </div>
                  <div className="contactItem">
                    <Phone className="contactIcon" />
                    <div className="contactDetails">
                      <span className="contactText">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="contactItem">
                    <Mail className="contactIcon" />
                    <div className="contactDetails">
                      <span className="contactText">info@procuremax.com</span>
                    </div>
                  </div>
                  <div className="contactItem">
                    <Clock className="contactIcon" />
                    <div className="contactDetails">
                      <span className="contactText">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 2:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="statsBar">
          <div className="containerWrapper">
            <div className="statsGrid">
              <div className="statItem">
                <Users className="statIcon" />
                <div className="statContent">
                  <span className="statNumber">500+</span>
                  <span className="statLabel">Happy Clients</span>
                </div>
              </div>
              <div className="statItem">
                <Globe className="statIcon" />
                <div className="statContent">
                  <span className="statNumber">25+</span>
                  <span className="statLabel">Countries Served</span>
                </div>
              </div>
              <div className="statItem">
                <Award className="statIcon" />
                <div className="statContent">
                  <span className="statNumber">15+</span>
                  <span className="statLabel">Years Experience</span>
                </div>
              </div>
              <div className="statItem">
                <Building2 className="statIcon" />
                <div className="statContent">
                  <span className="statNumber">$2B+</span>
                  <span className="statLabel">Procurement Volume</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="containerWrapper">
            <div className="bottomContent">
              <div className="copyrightText">
                © 2025 ProcureMax. All rights reserved. | Designed for procurement excellence.
              </div>
              <div className="legalLinks">
                <a href="#" className="legalLink">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#" className="legalLink">Terms of Service</a>
                <span className="separator">|</span>
                <a href="#" className="legalLink">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;