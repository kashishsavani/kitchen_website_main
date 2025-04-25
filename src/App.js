import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HeroSection from "./components/Section1";
import VectorImage from "./components/VectorImage";
import AboutSection from "./components/AboutSection";
import Product from "./components/Product";
import ReviewCarousel from "./components/ReviewCarousel";
import FAQ from "./components/FAQ";
import Wave from "./components/Wave";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./components/ProductDetails";

const AppContent = () => {
  const location = useLocation();

  // Add conditional CSS class
  const noFooter = location.pathname.includes("/product/");

  return (
    <div className={noFooter ? "no-footer" : ""}>
      <Routes>
        {/* Layout wraps all main routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <HeroSection />
              <VectorImage />
              <AboutSection />
              <Product />
              <ReviewCarousel />
              <FAQ />
              <Wave />
            </>
          } />
          <Route path="about" element={<AboutSection />} />
          <Route path="review" element={<ReviewCarousel />} />
          <Route path="faq" element={<FAQ />} />
          
          {/* Product Details without footer */}
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
