import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faIndianRupeeSign, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import ReviewCarousel from "./ReviewCarousel";
import FAQ from "./FAQ";
import VectorImage from "./VectorImage";
import "../Product.css";
import { RiWhatsappFill } from "react-icons/ri";


// Product Data
const products = [
  { id: 1, name: "Pipe and Wooden Handle Spatula", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 01 5.png" },
  { id: 2, name: "Goti Spatula", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 14 1.png" },
  { id: 3, name: "Pipe and Wooden Handle Spatula", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 19 5.png" },
  { id: 4, name: "Walking Stick", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 28 6.png" },
  { id: 5, name: "Pipe and Wooden Handle Spatula", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 01 5.png" },
  { id: 6, name: "Goti Spatula", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 14 1.png" },
  { id: 7, name: "Pipe and Wooden Handle Spatula", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 19 5.png" },
  { id: 8, name: "Walking Stick", size: "3.25", length: "15", price: "85.00", imgSrc: "/img/All Size 28 6.png" },
];

const Product = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.name === selectedCategory);

  return (
    <section className="product py-5 min-vh-100">
  <div className="container text-center">
  <h2 className="product-heading text-dark animate__animated animate__fadeInDown">
    Product
</h2>
        {/* Filter Buttons */}
        <div className="d-flex flex-wrap text-light  justify-content-center gap-2 my-3">
          <button className={`btn ${selectedCategory === "All" ? "btn-danger" : " custom-bg "}`} onClick={() => setSelectedCategory("All")}>
            All
          </button>
          <button className={`btn ${selectedCategory === "Pipe and Wooden Handle Spatula" ? "  btn-danger" : " custom-bg "}`} onClick={() => setSelectedCategory("Pipe and Wooden Handle Spatula")}>
            Pipe and Wooden Handle Spatula
          </button>
          <button className={`btn ${selectedCategory === "Goti Spatula" ? "btn-danger" : " custom-bg "}`} onClick={() => setSelectedCategory("Goti Spatula")}>
            Goti Spatula
          </button>
          <button className={`btn ${selectedCategory === "Walking Stick" ? "btn-danger" : " custom-bg "}`} onClick={() => setSelectedCategory("Walking Stick")}>
            Walking Stick
          </button>
        </div>

        {/* See All Button */}
        <div className="d-flex justify-content-center justify-content-md-end mt-4">
          <a href="#" className="btn btn-light px-4 py-2 fw-bold">
            See All <FontAwesomeIcon icon={faGreaterThan} className="ms-2" />
          </a>
        </div>

        {/* Product Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-4">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className=" h-100 custom-card">
                <img src={product.imgSrc} className="card-img-top p-3" alt={product.name} />
                <div className="card-body text-start ">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="mb-1 mt-2 small">Size: {product.size}</p>
                  <p className="mb-1 small">Length: {product.length}</p>
                  <p className="text-danger mt-2 fw-bold">
                    <FontAwesomeIcon icon={faIndianRupeeSign} /> {product.price}
                  </p>
                  <a href="#" className="btn btn-light fw-bold w-90 small-text">
  <RiWhatsappFill icon={faSquareWhatsapp} className="text-success" /> Order on WhatsApp
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render ReviewCarousel and FAQ only on the Product page */}
      {location.pathname === "/product" && (
        <>
          <ReviewCarousel />
          <FAQ />
          <VectorImage />
        </>
      )}
    </section>
  );
};

export default Product;
