import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../ImageSlider.css";  // Custom CSS for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <FaChevronLeft className="slider-btn left" onClick={prevSlide} />
      <img src={images[currentIndex]} alt="Product" className="slider-img" />
      <FaChevronRight className="slider-btn right" onClick={nextSlide} />
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
