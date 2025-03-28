import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider";  // Import the ImageSlider component
import { RiWhatsappFill } from "react-icons/ri";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="row g-4">
        {/* Image Slider Section */}
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body d-flex align-items-center justify-content-center">
              {/* Display the image slider */}
              <ImageSlider images={Array.isArray(product.imgSrc) ? product.imgSrc : [product.imgSrc]} />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex align-items-start justify-content-start flex-column">
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
  );
};

export default ProductDetails;
