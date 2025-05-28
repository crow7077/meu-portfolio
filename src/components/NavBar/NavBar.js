import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../img/logo-ns.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Usar Link para a logo também, levando para a Home */}
        <Link to="/" onClick={toggleMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          {/* Atualize os <a> para <Link> */}
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>{" "}
          {/* Mudei para Home, conforme sua descrição */}
          <li>
            <Link to="/portfolio" onClick={toggleMenu}>
              Portifólio
            </Link>
          </li>
          <li>
            <Link to="/sobre-mim" onClick={toggleMenu}>
              Sobre mim
            </Link>
          </li>{" "}
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;
