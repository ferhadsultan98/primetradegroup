import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './Header.scss';
import DefaultLogo from "../../../public/assets/ptglogo.png"; // Default logo
import ScrolledLogo from "../../../public/assets/fullwhitelogo.png"; // Logo when scrolled

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effekti üçün
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route dəyişəndə mobil menunu bağla
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Logo kliki - əgər ana səhifədə deyilsə navigate et, əgər aşağıdaysa yuxarı qaldır
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Mobil menunu bağla
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Haqqımızda', path: '/about' },
    { name: 'Fəaliyyət Sahələrimiz', path: '/ouractivity' },
    { name: 'Niyə Biz', path: '/whyus' },
    { name: 'Əlaqə', path: '/contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'headerScrolled' : ''}`}>
        <div className="headerContainer">
          {/* Logo */}
          <div className="headerLogo">
            <Link to="/" onClick={handleLogoClick} className="logoLink">
              <img 
                src={DefaultLogo}
                alt="Logo" 
                className="logoImage"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="headerNav">
            <ul className="navList">
              {navItems.map((item) => (
                <li key={item.path} className="navItem">
                  <Link 
                    to={item.path} 
                    className={`navLink ${location.pathname === item.path ? 'navLinkActive' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="headerMobileToggle">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              size={24}
              color="#253f57"
              duration={0.3}
              rounded
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobileMenuOverlay ${isMobileMenuOpen ? 'mobileMenuOverlayOpen' : ''}`}>
        <nav className="mobileMenuNav">
          <ul className="mobileNavList">
            {navItems.map((item, index) => (
              <li 
                key={item.path} 
                className="mobileNavItem"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link 
                  to={item.path} 
                  className={`mobileNavLink ${location.pathname === item.path ? 'mobileNavLinkActive' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobileMenuBackdrop" 
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;