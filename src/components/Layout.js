import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Get current route

  // Define routes where footer should be hidden
  const hideFooterRoutes = new Set(["/about", "/review", "/faq"]);
  const shouldShowFooter = !Array.from(hideFooterRoutes).some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Outlet /> {/* Dynamically render matched route */}
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default Layout;
