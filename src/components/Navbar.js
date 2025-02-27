import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm position-relative">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          <img
            src="/img/Frame.png"
            alt="Logo"
            width="120"
            className="animate__animated animate__zoomIn"
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="fs-3 text-dark" />
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show bg-light text-dark p-3 rounded shadow position-absolute top-100 start-0 w-100" : ""}`}
          id="navbarNav"
          style={{ zIndex: isOpen ? 1050 : "auto" }}
        >
          <ul className="navbar-nav mx-auto text-center mt-3 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link py-2 fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2 fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2 fw-bold" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2 fw-bold" to="/review">Review</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2 fw-bold" to="/faq">FAQ</Link>
            </li>
          </ul>

          {/* Contact Details */}
          <div className="d-md-flex flex-column flex-md-row align-items-center text-center text-md-end mt-3 mt-md-0">
            <span className="me-md-3 d-block text-dark fw-bold">
              <FontAwesomeIcon icon={faPhone} className="me-2" /> 9898765432
            </span>
            <span className="d-block text-dark fw-bold">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 4-A, Patel Nagar, Rajkot
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
