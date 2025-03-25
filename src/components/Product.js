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
import ImageSlider from "./ImageSlider";

const products = [
  {
    id: 1,
    name: "stainless steel Goti Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "3.25",
    length:"15",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: ["/img/All Size 01 5.png", "/img/Goti Spatula/3+15/1.jpg", "/img/Goti Spatula/3+15/2.jpg", "/img/Goti Spatula/3+15/3.jpg", "/img/Goti Spatula/3+15/4.jpg"],
    
  },
  {
    id: 2,
    name: "stainless steel Walking Stick",
    Brand: "Jyoti",
    SteelGrade: "202",
    length:"35",
    Handle: "Plastic Handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc:[ "/img/All Size 14 1.png"]
  },
  {
    id: 3,
    name: "stainless steel wooden handle Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "3.25",
    length:"15",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: ["/img/All Size 19 5.png"]
  },
  {
    id: 4,
    name: "stainless steel wooden handle laddle With Back Support",
    Brand: "Jyoti",
    SteelGrade: "202",
    length:"No.10",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: ["/img/All Size 28 6.png"]
  },

  
  {
    id: 5,
    name: "stainless steel wooden handle laddle With Back Support",
    Brand: "Jyoti",
    SteelGrade: "202",
    length:"No.5",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 23 2.png"
  },
  {
    id: 6,
    name: "stainless steel wooden handle Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "3.25",
    length:"15",
    HandleType: "Colourful Wooden handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 19 5.png"
  },
  {
    id: 7,
    name: "stainless steel Walking Stick",
    Brand: "Jyoti",
    SteelGrade: "202",
    length:"36",
    Handle: "Plastic Handle",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: "/img/All Size 14 2.png"
  },
  {
    id: 8,
    name: "stainless steel Goti Spatula",
    Brand: "Jyoti",
    SteelGrade: "202",
    Size: "4",
    length:"27",
    Finish: "Buff Finish smooth surfaces",
    Packing: "Packing with Ld Plastic Material or scratch Roll",
    MOQ: "6 Piece",
    imgSrc: ["/img/All Size 4-27.png", "/img/Goti Spatula/3+15/1.jpg","/img/Goti Spatula/3+15/2.jpg"],
  },
 
  
];



//  Unique images for laddle category
const laddleImages = [
  ["/img/Laddle NO 5/1.jpg","/img/Laddle NO 5/2.webp","/img/Laddle NO 5/3.jpg","/img/Laddle NO 5/All Size 23.jpg"],
  ["/img/Laddle NO 6/6.jpg","/img/Laddle NO 6/All Size 24.jpg"],
  ["/img/Laddle NO 7/All Size 25.jpg"],
  ["/img/Laddle NO 8/1e.webp","/img/Laddle NO 8/All Size 26.jpg"],
  ["/img/Laddle NO 5/1.jpg","/img/All Size 27 1.png"],
  ["/img/Laddle NO 8/1e.webp","/img/All Size 28 6.png"],
];

const handle = [
  ["/img/3+15-1/1.jpg","/img/3+15-1/2.png","/img/3+15-1/3.jpg","/img/3+15-1/4.jpg","/img/3+15-1/5.jpg"],
  ["/img/3+20-1/1.jpg","/img/3+20-1/2.png","/img/3+20-1/3.jpg","/img/3+20-1/4.jpg","/img/3+20-1/5.jpg"],
  ["/img/3+25-1/1.jpg","/img/3+25-1/2.png","/img/3+25-1/3.jpg","/img/3+25-1/4.jpg","/img/3+25-1/5.jpg"],
  ["/img/3+30-1/1.jpg","/img/3+30-1/2.png","/img/3+30-1/3.jpg","/img/3+30-1/4.jpg","/img/3+30-1/5.jpg"],
  ["/img/4+36-1/1.jpg","/img/4+36-1/2.jpg","/img/4+36-1/3.jpg","/img/4+36-1/4.jpg","/img/4+36-1/5.jpg"],
  // "/img/All Size 25 1 (1).png",
  ["/img/5+44-1/1.jpg","/img/5+44-1/2.jpg","/img/5+44-1/3.jpg","/img/5+44-1/4.jpg","/img/All Size 15 2.png"],
  ["/img/11.jpg","/img/41.jpg","/img/31.jpg","/img/All Size 16 1 (1).png"],
  ["/img/5+44/1.jpg","/img/3+25/4.jpg","/img/All Size 17 1 (1).png"],
  
  
];

const Goti = [
 
  ["/img/1.jpg","/img/2.png","/img/3.jpg","/img/4.jpg","/img/5.jpg"],
  ["/img/3+20/1.jpg","/img/3+20/2.png","/img/3+20/3.jpg","/img/3+20/4.jpg","/img/3+20/5.jpg"],
  ["/img/3+25/1.jpg","/img/3+25/2.png","/img/3+25/3.jpg","/img/3+25/4.jpg","/img/3+25/5.jpg"],
 ["/img/3+30/1.jpg","/img/3+30/2.png","/img/3+30/3.jpg","/img/3+30/4.jpg","/img/3+30/5.jpg"],
  ["/img/4+27/1.jpg","/img/4+27/2.jpg","/img/4+27/3.jpg","/img/4+27/4.jpg","/img/4+27/5.jpg"],
  ["/img/4+33/1.jpg","/img/4+33/2.jpg","/img/4+33/3.jpg","/img/4+33/4.jpg","/img/4+33/5.jpg"],
  ["/img/4+39/1.jpg","/img/4+39/2.jpg","/img/4+39/3.jpg","/img/4+39/4.jpg","/img/4+39/5.jpg"],
  ["/img/5+39/1.jpg","/img/5+39/2.jpg","/img/5+39/3.jpg","/img/5+39/4.jpg","/img/5+39/5.jpg"],
  ["/img/5+44/1.jpg","/img/5+44/2.jpg","/img/5+44/3.jpg","/img/5+44/4.jpg","/img/5+44/5.jpg"],
  ["/img/5+44/1.jpg","/img/5+44/2.jpg","/img/5+44/3.jpg","/img/5+44/4.jpg","/img/5+44/5.jpg"],
  ["/img/6+52/1.jpg","/img/6+52/2.jpg","/img/6+52/3.jpg","/img/6+52/4.jpg","/img/6+52/5.jpg"],
  ["/img/6+42/1.jpg","/img/6+42/2.jpg","/img/6+42/3.jpg","/img/6+42/4.jpg","/img/6+42/5.jpg"], 
];

const stic = [
 
  ["/img/All Size 14 2.png","/img/All Size 14 2.png"],
  ["/img/All Size 13 6.png","/img/All Size 13 6.png"],
 
  ["/img/All Size 14 1.png","/img/All Size 14 1.png"],
  
];


const sizeOptions = [
  '3.25"', '3.25"', '3.25"', '3.25"',  '4"', '4"','4"', '5"', '5"', '6"', '6"', '8"'
];
const length = [
  '15"', '20"', '25"', '30"', '27"', '33"', '39"', '39"', '44"', '42"', '52"', '79"'
];

const sizeOptionss = [
  '3.25"', '3.25"', '3.25"', '3.25"', '4"', '5"', '6"', '8"'
];
const lengthh = [
  '15"', '20"', '25"', '30"', '36"', '44"', '51"', '79"'
];
const lengthhh = [
  'No.5"', 'No.6"', 'No.7"', 'No.8"','No.9"', 'No.10"'
];
const lengthhhh = [
  '30"', '33"', '36"'
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  // 🛠️ Filter products
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.name === selectedCategory);

    const repeatProducts = () => {
      const repeated = [];
    
      if (selectedCategory === "All") {
        // Combine all categories with their respective repeat counts
        const categories = [
          { name: "stainless steel Goti Spatula", count: 12 },
          { name: "stainless steel wooden handle laddle With Back Support", count: 6 },
          { name: "stainless steel Walking Stick", count: 3 },
          { name: "stainless steel wooden handle Spatula", count: 8 }  // Default repeatCount
        ];
    
        categories.forEach((cat) => {
          const filtered = products.filter((p) => p.name === cat.name);
          let repeatedCat = [];
    
          while (repeatedCat.length < cat.count) {
            repeatedCat.push(...filtered);
          }
    
          repeated.push(...repeatedCat.slice(0, cat.count));
        });
    
      } else {
        // Specific category filtering
        let repeatCount = 8;
    
        if (selectedCategory === "stainless steel Goti Spatula") {
          repeatCount = 12;
        } else if (selectedCategory === "stainless steel wooden handle laddle With Back Support") {
          repeatCount = 6;
        } else if (selectedCategory === "stainless steel Walking Stick") {
          repeatCount = 3;
        }
    
        while (repeated.length < repeatCount) {
          repeated.push(...filteredProducts);
        }
      }
    
      const displayedProducts = repeated.map((product, index) => {
        let updatedProduct = { ...product };
    
        // Image Mapping
        if (product.name === "stainless steel wooden handle laddle With Back Support") {
          updatedProduct.imgSrc = laddleImages[index % laddleImages.length];
        } else if (product.name === "stainless steel wooden handle Spatula") {
          updatedProduct.imgSrc = handle[index % handle.length];
        } else if (product.name === "stainless steel Goti Spatula") {
          updatedProduct.imgSrc = Goti[index % Goti.length];
        } else if (product.name === "stainless steel Walking Stick") {
          updatedProduct.imgSrc = stic[index % stic.length];
        }
    
        // Size & Length Mapping
        if (product.name === "stainless steel Goti Spatula") {
          updatedProduct.Size = sizeOptions[index % sizeOptions.length];
          updatedProduct.length = length[index % length.length];
        } else if (product.name === "stainless steel wooden handle Spatula") {
          updatedProduct.Size = sizeOptionss[index % sizeOptionss.length];
          updatedProduct.length = lengthh[index % lengthh.length];
        } else if (product.name === "stainless steel wooden handle laddle With Back Support") {
          updatedProduct.length = lengthhh[index % lengthhh.length];
        } else if (product.name === "stainless steel Walking Stick") {
          updatedProduct.length = lengthhhh[index % lengthhhh.length];
        }
    
        return updatedProduct;
      });
    
      return displayedProducts;
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
                   {/* Image Slider */}
                   <ImageSlider images={Array.isArray(product.imgSrc) ? product.imgSrc : [product.imgSrc]} />


                  {/* <img src={product.imgSrc} className="card-img-top p-3" alt={product.name} /> */}
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="mb-1 mt-2 small"><strong>Brand:</strong> {product.Brand}</p>
                    <p className="mb-1 small"><strong>Steel Grade:</strong> {product.SteelGrade}</p>
                    {product.Size && <p className="mb-1 small"><strong>Size:</strong> {product.Size}</p>}
{product.length &&<p className="mb-1 small"><strong>Length:</strong> {product.length}</p>}

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

      {/* Proper conditional rendering */}
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
