// components/Navbar.tsx
import React, { useState, useEffect } from "react";

interface NavbarProps {
  scrollBelowHomePage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrollBelowHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${menuOpen || isScrolled ? "active" : ""} ${
        isScrolled && scrollBelowHomePage ? "full-bg" : ""
      }`}
    >
      <div className="max-width">
        <div className="logo">
          <a href="#home">
            Portfo<span>lio.</span>
          </a>
        </div>
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="menu-btn" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-btn" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#teams" className="menu-btn" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas fa-bars ${menuOpen ? "active" : ""}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
