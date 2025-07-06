import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Header.scss";
import Logo from "../../../../public/assets/fullwhitelogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN"); // Default language
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

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

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLanguageDropdownOpen(false); // Close language dropdown when toggling mobile menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false); // Close language dropdown when closing menu
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    // Add logic here for language change (e.g., i18n integration)
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className={`headerContainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="headerContent">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </Link>

        <nav className="desktopNav">
          <ul className="navList">
           /
            <li className="navItem">
              <Link to="/about" className="navLink" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="navItem">
              <Link to="/services" className="navLink" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link to="/why-us" className="navLink" onClick={closeMenu}>
                Why Us?
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="navItem languageSelector" ref={dropdownRef}>
              <div
                className="navLink languageToggle"
                onClick={toggleLanguageDropdown}
              >
                {selectedLanguage} <span className="dropdownArrow">▼</span>
              </div>
              {isLanguageDropdownOpen && (
                <ul className="languageDropdown">
                  <li
                    className="languageItem"
                    onClick={() => handleLanguageSelect("AZ")}
                  >
                    AZ
                  </li>
                  <li
                    className="languageItem"
                    onClick={() => handleLanguageSelect("EN")}
                  >
                    EN
                  </li>
                  <li
                    className="languageItem"
                    onClick={() => handleLanguageSelect("RU")}
                  >
                    RU
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

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

      <div className={`mobileNav ${isMenuOpen ? "mobileNavOpen" : ""}`}>
        <nav className="mobileNavContent">
          <ul className="mobileNavList">
            <li className="mobileNavItem">
              <Link to="/" className="mobileNavLink" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/about" className="mobileNavLink" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/services" className="mobileNavLink" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/why-us" className="mobileNavLink" onClick={closeMenu}>
                Why Us?
              </Link>
            </li>
            <li className="mobileNavItem">
              <Link to="/contact" className="mobileNavLink" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="mobileNavItem languageSelector" ref={dropdownRef}>
              <div
                className="mobileNavLink languageToggle"
                onClick={toggleLanguageDropdown}
              >
                {selectedLanguage} <span className="dropdownArrow">▼</span>
              </div>
              {isLanguageDropdownOpen && (
                <ul className="languageDropdown">
                  <li
                    className="languageItem"
                    onClick={() => handleLanguageSelect("AZ")}
                  >
                    AZ
                  </li>
                  <li
                    className="languageItem"
                    onClick={() => handleLanguageSelect("EN")}
                  >
                    EN
                  </li>
                  <li
                    className="languageItem"
                    onClick={() => handleLanguageSelect("RU")}
                  >
                    RU
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;