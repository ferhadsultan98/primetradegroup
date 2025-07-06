import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Header.scss";
import Logo from "../../../../public/assets/fullwhitelogo.png";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsLanguageDropdownOpen(false);
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
    if (isLanguageDropdownOpen) {
      setIsLanguageDropdownOpen(false);
    }
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className={`headerContainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="headerContent">
        <NavLink to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src={Logo} alt="Logo" />
        </NavLink>

        <nav className={`desktopNav ${isMenuOpen ? "open" : ""}`}>
          <ul className="navList">
            <li className="navItem">
              <NavLink to="/about" className="navLink" onClick={() => setIsMenuOpen(false)}>
                {t("header.about")}
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/services" className="navLink" onClick={() => setIsMenuOpen(false)}>
                {t("header.services")}
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/why-us" className="navLink" onClick={() => setIsMenuOpen(false)}>
                {t("header.whyUs")}
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/contact" className="navLink" onClick={() => setIsMenuOpen(false)}>
                {t("header.contact")}
              </NavLink>
            </li>
            <li className="navItem language-switcher">
              <button className="language-toggle" onClick={toggleLanguageDropdown}>
                <TbWorld className="globe-icon" />
              </button>
              <div className={`language-dropdown ${isLanguageDropdownOpen ? "open" : ""}`}>
                <button className={i18n.language === "az" ? "active" : ""} onClick={() => changeLanguage("az")}>
                  AZ
                </button>
                <button className={i18n.language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>
                  EN
                </button>
                <button className={i18n.language === "ru" ? "active" : ""} onClick={() => changeLanguage("ru")}>
                  RU
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <div className="mobileMenuToggle">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={24} color="white" duration={0.3} />
        </div>
      </div>
    </header>
  );
};

export default Header;