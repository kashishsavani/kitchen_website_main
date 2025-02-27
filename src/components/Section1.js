import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import "../HeroSection.css"; // Import the custom CSS file

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center text-center text-md-start text-lg-start herosectioncontain">
  <div className="container">
    <div className="row align-items-center justify-content-md-start justify-content-lg-start justify-content-center">
      <div className="col-lg-6">
        <h2 className="fw-bold kitchen-heading text-dark animate__animated animate__lightSpeedInLeft">
          Premium Stainless Steel <br /> Kitchen Tools Since 1983
        </h2>
        <p className="lead text-dark animate__animated animate__jackInTheBox hero-text">
          Explore our wide range of tools designed to make your tasks easier.
        </p>
        <div className="d-flex justify-content-start justify-content-md-start">
          <a href="#" className="btn btn-danger hero-btn">
            <FontAwesomeIcon icon={faWhatsapp} /> Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



  );
};

export default HeroSection;
