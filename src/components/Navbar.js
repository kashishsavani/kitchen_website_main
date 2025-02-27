import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light  py-3  ">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/img/Frame.png" alt="Logo" width="120" className="animate__animated animate__zoomIn" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse bg-light  navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn py-2" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn py-2" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn py-2" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn py-2" to="/review">Review</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn py-2" to="/faq">FAQ</Link>
            </li>
          </ul>

          {/* Contact Details - Stack on Small Screens */}
          <div className="d-flex flex-column flex-lg-row text-center text-lg-end mt-3 mt-lg-0">
            <span className="me-lg-3 d-block animate__animated animate__fadeInRight">
              <FontAwesomeIcon icon={faPhone} className="me-2" /> 9898765432
            </span>
            <span className="d-block">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 4-A, Patel Nagar, Rajkot
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
