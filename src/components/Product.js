import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import ReviewCarousel from "./ReviewCarousel";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Wave from "./Wave";
import "../Product.css";
import { RiWhatsappFill } from "react-icons/ri";

const products = [
  {
    id: 1,
    name: "stainless steel Goti Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "3.25",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 01 5.png"
  },
  {
    id: 2,
    name: "stainless steel Walking Stick",
    Brand: "Jyoti",
    SteelGrade: "202",
    Handle: "Plastic Handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 14 1.png"
  },
  {
    id: 3,
    name: "stainless steel wooden handle Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "30",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 19 5.png"
  },
  {
    id: 4,
    name: "stainless steel wooden handle laddle With Back Support",
    Brand: "Jyoti",
    SteelGrade: "202",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 28 6.png"
  }
];

const sizeOptions = [
  '3.25"', '3.25"', '3.25"', '3.25"', '4"', '4"', '5"', '5"', '6"', '6"', '6"', '8"'
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  // 🛠️ Filter products
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.name === selectedCategory);

  // ✅ Random sizes only for "stainless steel Goti Spatula"
  const repeatProducts = () => {
    const repeated = [];
    
    let repeatCount = 8; 

    if (selectedCategory === "stainless steel Goti Spatula") {
      repeatCount = 12;  // ✅ 12 cards for Goti Spatula
    }

    while (repeated.length < repeatCount) {
      repeated.push(...filteredProducts);
    }

    const displayedProducts = repeated.slice(0, repeatCount);

    // ✅ Random sizes only for Goti Spatula products
    const productsWithRandomSizes = displayedProducts.map((product, index) => {
      if (
        selectedCategory === "stainless steel Goti Spatula" || 
        selectedCategory === "stainless steel wooden handle Spatula"
      ) {
        return {
          ...product,
          Size: sizeOptions[index % sizeOptions.length]  // ✅ Random sizes
        };
      }
      return product;  // ✅ Original size for other categories
    });

    return productsWithRandomSizes;
  };

  const displayedProducts = repeatProducts();
  return (
    <>
      <section className="product py-5">
        <div className="container text-center">
          <h2 className="product-heading text-dark animate__animated animate__fadeInDown">
            Product
          </h2>

          {/* Filter Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
            <button
              className={`btn button ${selectedCategory === "All" ? "btn-danger" : "custom-bg"}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel Goti Spatula" ? "btn-danger" : "custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel Goti Spatula")}
            >
              stainless steel Goti Spatula
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel wooden handle Spatula" ? "btn-danger" : "custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel wooden handle Spatula")}
            >
              stainless steel wooden handle Spatula
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel Walking Stick" ? "btn-danger" : "custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel Walking Stick")}
            >
              stainless steel Walking Stick
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel wooden handle laddle With Back Support" ? "btn-danger" : "custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel wooden handle laddle With Back Support")}
            >
              stainless steel wooden handle laddle
            </button>
          </div>

          {/* Product Cards */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
            {displayedProducts.map((product, index) => (
              <div className="col" key={index}>
                <div className="card h-100 "  style={{ backgroundColor: "#FFECEC", important: "true" }}  >  
                  <img src={product.imgSrc} className="card-img-top p-3" alt={product.name} />
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="mb-1 mt-2 small"><strong>Brand:</strong> {product.Brand}</p>
                    <p className="mb-1 small"><strong>Steel Grade:</strong> {product.SteelGrade}</p>
                    {product.Size && <p className="mb-1 small"><strong>Size:</strong> {product.Size}</p>}
                    {product.Handle && <p className="mb-1 small"><strong>Handle:</strong> {product.Handle}</p>}
                    {product.HandleType && <p className="mb-1 small"><strong>Handle Type:</strong> {product.HandleType}</p>}
                    <p className="mb-1 small"><strong>Finish:</strong> {product.Finish}</p>
                    <p className="mb-1 small"><strong>Packing:</strong> {product.Packing}</p>
                    <p className="mb-1 small"><strong>MOQ:</strong> {product.MOQ}</p>
                    
                    <a href="#" className="btn btn-light fw-bold w-100 small-text">
                      <RiWhatsappFill className="text-success" /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Proper conditional rendering */}
      {location.pathname === "/product" && (
        <>
          <ReviewCarousel />
          <FAQ />
          <Wave />
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
