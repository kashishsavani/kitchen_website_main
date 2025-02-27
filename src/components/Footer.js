import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <img src="/img/Frame.png" alt="Company Logo" className="img-fluid mb-3" />
            <p>
              "Jyoti Engineers is a leading provider of high-quality engineering solutions, committed to innovation and
              customer satisfaction. We deliver reliable products and services that meet industry standards."
            </p>
            <div className="social-icons d-flex gap-3">
              <FontAwesomeIcon icon={faFacebookF} className="text-primary fs-4" />
              <FontAwesomeIcon icon={faWhatsapp} className="text-success fs-4" />
              <FontAwesomeIcon icon={faInstagram} className="text-danger fs-4" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h2>Contact Info</h2>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 4-Patel Nagar, 80 Feet Road, Rajkot
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2" /> 75670 52199
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> jyotiengineers@gmail.com
            </p>
          </div>

          {/* Company Links */}
          <div className="col-lg-4 col-md-12">
            <h2>Company</h2>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Product</li>
              <li>Review</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
