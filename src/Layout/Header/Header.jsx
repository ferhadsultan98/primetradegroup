import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Header.scss";
import DefaultLogo from "../../../public/assets/ptglogo.png"; // Default logo
import ScrolledLogo from "../../../public/assets/fullwhitelogo.png"; // Logo when scrolled
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  return (
    <header className={`headerContainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="headerContent">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={isScrolled ? ScrolledLogo : DefaultLogo} alt="Logo" />
        </Link>

        <nav className="desktopNav">
          <ul className="navList">
            <li className="navItem">
              <Link to="/about" className="navLink" onClick={closeMenu}>
                {t("header.about")}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/services" className="navLink" onClick={closeMenu}>
                {t("header.services")}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/whyus" className="navLink" onClick={closeMenu}>
                {t("header.whyUs")}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink" onClick={closeMenu}>
                {t("header.contact")}
              </Link>
            </li>
            {/* <li className="navItem">
              <select
                className="languageDropdown"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="az">AZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </li> */}
          </ul>
        </nav>

        <div className="mobileMenuToggle">
          <Hamburger
            toggled={isMenuOpen}
            toggle={toggleMenu}
            size={24}
          
            duration={0.3}
          />
        </div>
      </div>

      <div className={`mobileNav ${isMenuOpen ? "mobileNavOpen" : ""}`}>
        <nav className="mobileNavContent">
          <ul className="mobileNavList">
            <li className="mobileNavItem">
              <Link to="/about" className="mobileNavLink" onClick={closeMenu}>
                {t("header.about")}
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/services" className="mobileNavLink" onClick={closeMenu}>
                {t("header.services")}
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/whyus" className="mobileNavLink" onClick={closeMenu}>
                {t("header.whyUs")}
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/contact" className="mobileNavLink" onClick={closeMenu}>
                {t("header.contact")}
              </Link>
            </li>
            {/* <li className="mobileNavItem">
              <select
                className="languageDropdown"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="az">AZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;