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

export default function ProcurementFooter() {
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

      <style jsx>{`
        .footer {
          font-family: "Arial", sans-serif;
          color: #333;
          background: #f8f9fa;
        }

        .footerContainer {
          .containerWrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
        }

        .footerMain {
          background: white;
          padding: 80px 0 60px;
          border-bottom: 1px solid rgba(37, 63, 87, 0.1);

          .footerGrid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
            gap: 50px;

            .footerSection {
              &.companySection {
                .companyLogo {
                  display: flex;
                  align-items: center;
                  margin-bottom: 25px;

                  .logoIcon {
                    width: 40px;
                    height: 40px;
                    color: #253f57;
                    margin-right: 12px;
                  }

                  .companyName {
                    font-size: 1.8rem;
                    color: #253f57;
                    font-weight: 700;
                    margin: 0;
                  }
                }

                .companyDescription {
                  color: #666;
                  line-height: 1.7;
                  margin-bottom: 30px;
                  font-size: 1rem;
                }

                .socialLinks {
                  display: flex;
                  gap: 15px;

                  .socialLink {
                    width: 45px;
                    height: 45px;
                    background: #253f57;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    transition: all 0.3s ease;

                    &:hover {
                      background: #1a2b3a;
                      transform: translateY(-2px);
                    }

                    .socialIcon {
                      width: 20px;
                      height: 20px;
                    }
                  }
                }
              }

              .sectionTitle {
                font-size: 1.3rem;
                color: #253f57;
                font-weight: 600;
                margin-bottom: 25px;
                position: relative;
                padding-bottom: 10px;

                &::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 40px;
                  height: 3px;
                  background: #253f57;
                }
              }

              .linkList {
                list-style: none;
                padding: 0;
                margin: 0;

                li {
                  margin-bottom: 12px;

                  .footerLink {
                    color: #666;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;

                    &:hover {
                      color: #253f57;
                      padding-left: 5px;
                    }

                    .linkIcon {
                      width: 14px;
                      height: 14px;
                      margin-right: 8px;
                      flex-shrink: 0;
                    }
                  }
                }
              }

              .contactList {
                .contactItem {
                  display: flex;
                  align-items: flex-start;
                  margin-bottom: 20px;

                  .contactIcon {
                    width: 20px;
                    height: 20px;
                    color: #253f57;
                    margin-right: 15px;
                    margin-top: 2px;
                    flex-shrink: 0;
                  }

                  .contactDetails {
                    .contactText {
                      color: #666;
                      line-height: 1.6;
                      font-size: 0.95rem;
                    }
                  }
                }
              }
            }
          }
        }

        .statsBar {
          background: #253f57;
          padding: 40px 0;

          .statsGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;

            .statItem {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              color: white;

              .statIcon {
                width: 35px;
                height: 35px;
                margin-right: 15px;
                color: rgba(255, 255, 255, 0.8);
              }

              .statContent {
                .statNumber {
                  display: block;
                  font-size: 1.8rem;
                  font-weight: 700;
                  margin-bottom: 5px;
                }

                .statLabel {
                  font-size: 0.9rem;
                  opacity: 0.8;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }
              }
            }
          }
        }

        .footerBottom {
          background: #1a2b3a;
          padding: 25px 0;

          .bottomContent {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;

            .copyrightText {
              line-height: 1.5;
            }

            .legalLinks {
              display: flex;
              align-items: center;
              gap: 15px;

              .legalLink {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                transition: color 0.3s ease;

                &:hover {
                  color: white;
                }
              }

              .separator {
                color: rgba(255, 255, 255, 0.4);
              }
            }
          }
        }

        @media (max-width: 1024px) {
          .footerMain {
            .footerGrid {
              grid-template-columns: 1fr 1fr;
              gap: 40px;
            }
          }

          .statsBar {
            .statsGrid {
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
            }
          }
        }

        @media (max-width: 768px) {
          .footerMain {
            padding: 60px 0 40px;

            .footerGrid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }

          .statsBar {
            .statsGrid {
              grid-template-columns: 1fr;
              gap: 25px;

              .statItem {
                .statIcon {
                  width: 30px;
                  height: 30px;
                }

                .statContent {
                  .statNumber {
                    font-size: 1.5rem;
                  }
                }
              }
            }
          }

          .footerBottom {
            .bottomContent {
              flex-direction: column;
              gap: 15px;
              text-align: center;

              .legalLinks {
                flex-wrap: wrap;
                justify-content: center;
              }
            }
          }
        }

        @media (max-width: 480px) {
          .footerContainer {
            .containerWrapper {
              padding: 0 15px;
            }
          }

          .footerMain {
            padding: 40px 0 30px;

            .footerGrid {
              gap: 30px;

              .footerSection {
                &.companySection {
                  .companyLogo {
                    .companyName {
                      font-size: 1.5rem;
                    }
                  }

                  .socialLinks {
                    justify-content: center;

                    .socialLink {
                      width: 40px;
                      height: 40px;

                      .socialIcon {
                        width: 18px;
                        height: 18px;
                      }
                    }
                  }
                }

                .sectionTitle {
                  font-size: 1.2rem;
                  text-align: center;

                  &::after {
                    left: 50%;
                    transform: translateX(-50%);
                  }
                }

                .linkList {
                  text-align: center;

                  li {
                    .footerLink {
                      justify-content: center;
                    }
                  }
                }

                .contactList {
                  .contactItem {
                    justify-content: center;
                    text-align: left;
                  }
                }
              }
            }
          }

          .statsBar {
            padding: 30px 0;

            .statsGrid {
              .statItem {
                flex-direction: column;
                gap: 10px;

                .statIcon {
                  margin-right: 0;
                }
              }
            }
          }

          .footerBottom {
            padding: 20px 0;

            .bottomContent {
              .legalLinks {
                gap: 10px;
                font-size: 0.85rem;
              }
            }
          }
        }
      `}</style>
    </footer>
  );
}