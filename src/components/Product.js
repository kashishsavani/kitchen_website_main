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

// ✅ Unique Product Data with consistent names
const products = [
  {
    id: 1,
    name: "stainless steel Goti Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 01 5.png"
  },
  {
    id: 2,
    name: "stainless steel Adjustable Walking Stick",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "30\", 33\", 36\"",
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
  },
  {
    id: 5,
    name: "stainless steel Goti Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 01 5.png"
  },
  {
    id: 6,
    name: "stainless steel Adjustable Walking Stick",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "30\" to 36\"",
    Handle: "Plastic Handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 14 1.png"
  },
  {
    id: 7,
    name: "stainless steel wooden handle Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 19 5.png"
  },
  {
    id: 8,
    name: "stainless steel wooden handle laddle With Back Support",
    Brand: "Jyoti",
    SteelGrade: "202",
    HandleType: "6\" Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 28 6.png"
  }
];


const Product = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Corrected filtering logic with `.trim()` for accurate matching
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.name.trim() === selectedCategory.trim());

  return (
    <>
      <section className="product py-5">
        <div className="container text-center">
          <h2 className="product-heading text-dark animate__animated animate__fadeInDown">
            Product
          </h2>

          {/* Filter Buttons */}
          <div className="d-flex flex-wrap text-light justify-content-center gap-2 my-3">
            <button
              className={`btn ${selectedCategory === "All" ? "btn-danger" : " custom-bg"}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel Goti Spatula" ? "btn-danger" : " custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel Goti Spatula")}
            >
              Stainless Steel Goti Spatula
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel wooden handle Spatula" ? "btn-danger" : " custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel wooden handle Spatula")}
            >
              stainless steel wooden handle Spatula
            </button>
            

            <button
              className={`btn ${selectedCategory === "stainless steel Adjustable Walking Stick" ? "btn-danger" : " custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel Adjustable Walking Stick")}
            >
              Stainless Steel Adjustable Walking Stick
            </button>

            <button
              className={`btn ${selectedCategory === "stainless steel wooden handle laddle With Back Support" ? "btn-danger" : " custom-bg"}`}
              onClick={() => setSelectedCategory("stainless steel wooden handle laddle With Back Support")}
            >
              Stainless Steel Wooden Handle Laddle With Back Support
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
                <div className="h-100 custom-card">
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
                    <a href="#" className="btn btn-light fw-bold w-90 small-text">
                      <RiWhatsappFill className="text-success" /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render ReviewCarousel and FAQ only on the Product page */}
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
