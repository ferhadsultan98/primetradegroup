import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Our Activity', href: '#activity' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'headerScrolled' : ''}`}>
      <div className="headerContainer">
        <div className="headerContent">
          <div className="logo">
            <a href="/" onClick={closeMenu}>
              <img 
                src="https://via.placeholder.com/120x40/ffffff/253f57?text=LOGO" 
                alt="Company Logo" 
                className="logoImg"
              />
            </a>
          </div>

          <nav className="desktopNav">
            <ul className="navList">
              {navItems.map((item, index) => (
                <li key={index} className="navItem">
                  <a href={item.href} className="navLink">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className={`hamburgerButton ${isMenuOpen ? 'hamburgerOpen' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
          </button>
        </div>

        <div className={`mobileMenuOverlay ${isMenuOpen ? 'overlayActive' : ''}`}>
          <nav className="mobileNav">
            <ul className="mobileNavList">
              {navItems.map((item, index) => (
                <li key={index} className="mobileNavItem">
                  <a 
                    href={item.href} 
                    className="mobileNavLink"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;