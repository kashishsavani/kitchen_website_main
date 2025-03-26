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
      {/* <img src={images[currentIndex]} alt="Product" className="slider-img" /> */}
      <img
  src={images[currentIndex]}
  alt="Product"
  className={`slider-img ${
    (images[currentIndex] === "/img/5+44/1.jpg" || images[currentIndex] === "/img/5+44/4.jpg" || images[currentIndex] === "/img/3+15-1/4.jpg" || images[currentIndex] === "/img/3+20-1/4.jpg" || images[currentIndex] === "/img/3+25-1/4.jpg" || images[currentIndex] === "/img/3+30-1/4.jpg" || images[currentIndex] === "/img/4+36-1/4.jpg" || images[currentIndex] === "/img/5+44-1/4.jpg" || images[currentIndex] === "/img/41.jpg" || images[currentIndex] === "/img/5+39/4.jpg" || images[currentIndex] === "/img/4+39/4.jpg" || images[currentIndex] === "/img/4+33/4.jpg" || images[currentIndex] === "/img/4+27/4.jpg" || images[currentIndex] === "/img/6+52/4.jpg" || images[currentIndex] === "/img/6+42/3.jpg")
      ? "large-img"
      : ""
  }`}
/>

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
