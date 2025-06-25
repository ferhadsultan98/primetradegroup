import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import './Header.scss';
import Logo
const Header = ({ sectionRefs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (section) => {
    const ref = sectionRefs.current[section];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const servicesItems = [
    'Supply Chain Management',
    'Procurement Services',
    'Vendor Management',
    'Logistics Solutions',
    'Risk Assessment'
  ];

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
          <img src="" alt="" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktopNav">
          <ul className="navList">
            <li className="navItem">
              <a href="#home" className="navLink" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="navItem">
              <a href="#about" className="navLink" onClick={() => scrollToSection('about')}>About Us</a>
            </li>
            <li className="navItem dropdownContainer">
              <a href="#services" className="navLink" onClick={() => scrollToSection('services')}>Services</a>
              <ul className="dropdownMenu">
                {servicesItems.map((service, index) => (
                  <li key={index} className="dropdownItem">
                    <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="dropdownLink">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="navItem">
              <a href="#why-us" className="navLink" onClick={() => scrollToSection('whyus')}>Why Us?</a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="mobileMenuToggle">
          <Hamburger
            toggled={isMenuOpen}
            toggle={toggleMenu}
            size={24}
            color="white"
            duration={0.3}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobileNav ${isMenuOpen ? 'mobileNavOpen' : ''}`}>
        <nav className="mobileNavContent">
          <ul className="mobileNavList">
            <li className="mobileNavItem">
              <a href="#home" className="mobileNavLink" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="mobileNavItem">
              <a href="#about" className="mobileNavLink" onClick={() => scrollToSection('about')}>About Us</a>
            </li>
            <li className="mobileNavItem mobileDropdownContainer">
              <a href="#services" className="mobileNavLink" onClick={() => scrollToSection('services')}>Services</a>
              <ul className="mobileDropdownMenu">
                {servicesItems.map((service, index) => (
                  <li key={index} className="mobileDropdownItem">
                    <a 
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="mobileDropdownLink"
                      onClick={closeMenu}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mobileNavItem">
              <a href="#why-us" className="mobileNavLink" onClick={() => scrollToSection('whyus')}>Why Us?</a>
            </li>
            <li className="mobileNavItem">
              <a href="#contact" className="mobileNavLink" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;