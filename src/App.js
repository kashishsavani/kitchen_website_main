import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HeroSection from "./components/Section1";
import VectorImage from "./components/VectorImage";
import AboutSection from "./components/AboutSection";
import Product from "./components/Product";
import ReviewCarousel from "./components/ReviewCarousel";
import FAQ from "./components/FAQ";
import Wave from "./components/Wave";

function App() {
  return (
    <Router>  {/* Ensure the entire App is inside BrowserRouter */}
      <Routes>
        {/* Layout wraps all routes to provide Navbar/Footer */}
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
          <Route path="product" element={<Product />} />
          <Route path="review" element={<ReviewCarousel />} />
          <Route path="faq" element={<FAQ />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
