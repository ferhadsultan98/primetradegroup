import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import './Header.scss';

const Header = () => {
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
        <a href="/" className="logo">
          SupplyChain Pro
        </a>

        {/* Desktop Navigation */}
        <nav className="desktopNav">
          <ul className="navList">
            <li className="navItem">
              <a href="/" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="/about" className="navLink">About Us</a>
            </li>
            <li className="navItem dropdownContainer">
              <a href="/services" className="navLink">Services</a>
              <ul className="dropdownMenu">
                {servicesItems.map((service, index) => (
                  <li key={index} className="dropdownItem">
                    <a href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="dropdownLink">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="navItem">
              <a href="/why-us" className="navLink">Why Us?</a>
            </li>
            <li className="navItem">
              <a href="/contact" className="navLink">Contact</a>
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
              <a href="/" className="mobileNavLink" onClick={closeMenu}>Home</a>
            </li>
            <li className="mobileNavItem">
              <a href="/about" className="mobileNavLink" onClick={closeMenu}>About Us</a>
            </li>
            <li className="mobileNavItem mobileDropdownContainer">
              <a href="/services" className="mobileNavLink" onClick={closeMenu}>Services</a>
              <ul className="mobileDropdownMenu">
                {servicesItems.map((service, index) => (
                  <li key={index} className="mobileDropdownItem">
                    <a 
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
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
              <a href="/why-us" className="mobileNavLink" onClick={closeMenu}>Why Us?</a>
            </li>
            <li className="mobileNavItem">
              <a href="/contact" className="mobileNavLink" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;