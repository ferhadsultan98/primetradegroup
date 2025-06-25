import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import './Header.scss';
import Logo from '../../../../public/assets/fullwhitelogo.png';

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
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktopNav">
          <ul className="navList">
            {/* <li className="navItem">
              <Link to="/home" className="navLink" onClick={closeMenu}>Home</Link>
            </li> */}
            <li className="navItem">
              <Link to="/about" className="navLink" onClick={closeMenu}>About Us</Link>
            </li>
            <li className="navItem dropdownContainer">
              <Link to="/services" className="navLink" onClick={closeMenu}>Services</Link>
              <ul className="dropdownMenu">
                {servicesItems.map((service, index) => (
                  <li key={index} className="dropdownItem">
                    <Link 
                      to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="dropdownLink"
                      onClick={closeMenu}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="navItem">
              <Link to="/why-us" className="navLink" onClick={closeMenu}>Why Us?</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink" onClick={closeMenu}>Contact</Link>
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
              <Link to="/home" className="mobileNavLink" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/about" className="mobileNavLink" onClick={closeMenu}>About Us</Link>
            </li>
            <li className="mobileNavItem mobileDropdownContainer">
              <Link to="/services" className="mobileNavLink" onClick={closeMenu}>Services</Link>
              <ul className="mobileDropdownMenu">
                {servicesItems.map((service, index) => (
                  <li key={index} className="mobileDropdownItem">
                    <Link 
                      to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="mobileDropdownLink"
                      onClick={closeMenu}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mobileNavItem">
              <Link to="/why-us" className="mobileNavLink" onClick={closeMenu}>Why Us?</Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/contact" className="mobileNavLink" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;