import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider"; 
import { RiWhatsappFill } from "react-icons/ri";
import "../ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
<div
      className="container mt-4"
      style={{
        position: "relative",         
        backgroundImage:  `url('/img/Jyoti_Eng_Logo.jpg')`,  
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",            
        width: "100%",               
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",               
      }}
    >
         <div
         style={{
            position: "fixed",         
            top: 0,
            left: 0,
            width: "100vw",           
            height: "100vh",           
            backgroundColor: "rgba(0, 0, 0, 0.6)",  
            zIndex: 0,               
          }}
      ></div>
    
    <div className="container mt-4">
      <button
        className="btn btn-light fw-bold"
        onClick={() => navigate(-1)}
        style={{
          position: "relative",         
          top: "20px",               
          left: "20px",               
          zIndex: 2,                  
          padding: "10px 20px",
          fontSize: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",  
        }}
      >
        ← Back
      </button>
      

      <div className="row g-4 d-flex flex-column align-items-center justify-content-center">
        {/* Image Slider Section */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body full-size">
              {/* Display the image slider */}
              <ImageSlider className="col-sm-12" images={Array.isArray(product.imgSrc) ? product.imgSrc : [product.imgSrc]} />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6 col-sm-12">
          <div className="card h-100 ">
            <div className="card-body  d-flex align-items-start justify-content-start flex-column">
              <h2>{product.name}</h2>
              <p><strong>Brand:</strong> {product.Brand}</p>
              <p><strong>Steel Grade:</strong> {product.SteelGrade}</p>
              {product.Size && <p><strong>Size:</strong> {product.Size}</p>}
              {product.length && <p><strong>Length:</strong> {product.length}</p>}
              {product.Handle && <p><strong>Handle:</strong> {product.Handle}</p>}
              {product.HandleType && <p><strong>Handle Type:</strong> {product.HandleType}</p>}
              <p><strong>Finish:</strong> {product.Finish}</p>
              <p><strong>Packing:</strong> {product.Packing}</p>
              <p><strong>MOQ:</strong> {product.MOQ}</p>
              <a href="#" className="btn btn-light fw-bold w-100 small-text">
                                    <RiWhatsappFill className="text-success" /> Order on WhatsApp
                                  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProductDetails;
