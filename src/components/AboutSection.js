import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { useEffect } from "react";
import "../AboutSection.css"; 
import ReviewCarousel from "./ReviewCarousel";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Wave from "./Wave";
import { useLocation } from "react-router-dom";
import Product from "./Product";

const AboutSection = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <section className="container about-section animate__animated animate__fadeIn">
     <div className="text-center">
  <h2 className="about-heading text-dark animate__animated animate__fadeInDown">
    About
  </h2>
</div>

      <div className="row align-items-center mt-4 Engineerss">
        <div className="col-lg-6 text-center">
          <img
            src="./img/Rectangle 285.png"
            className="img-fluid animate__animated animate__zoomIn about-image"
            alt="About Jyoti Engineers"
          />
        </div>
        <div className="col-lg-6 animate__animated animate__fadeInRight Engineers ">
          <h3>About Jyoti Engineers</h3>
          <p className="text-muted">Crafting Kitchenware Excellence Since 1983</p>
          <p>
            We are Jyoti Engineers, a trusted name in stainless steel kitchenware
            since 1983. Based in Rajkot, we specialize in high-quality, durable,
            and stylish products that elevate your cooking experience.
          </p>
          <ul className="list-unstyled about-list">
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-danger" /> Over 40 years of experience in kitchenware
              manufacturing.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-danger" /> Wide range of stainless steel products with
              premium quality.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-danger" /> Trusted by thousands of customers across India.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="text-danger" /> Commitment to innovation and customer
              satisfaction.
            </li>
          </ul>
          <p className="fw-bold text-danger animate__animated animate__fadeInUp animate__delay-1s about-quote">
            "Discover Our Range Of Premium Kitchen Tools And Experience The Difference."
          </p>
        </div>
      </div>
    </section>
    {location.pathname === "/about" && (
        <>
          <Product/>
          <FAQ/>
          <Wave/>
          <Footer/>
        </>
      )}
    </>
  );
};

export default AboutSection;
