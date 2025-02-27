import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Get current route

  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This dynamically renders the matched route */}
      </main>
      {/* Show Footer only if not on the About, Review, or FAQ page */}
      {!["/about", "/review", "/faq"].includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
};

export default Layout;
