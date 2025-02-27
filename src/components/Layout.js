import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";  // Ensure Navbar is a default export
import Footer from "./Footer";  // Ensure Footer is a default export
import { Outlet } from "react-router-dom";  // Ensure react-router-dom is installed

const Layout = () => {
  const location = useLocation();

  const hideFooterRoutes = new Set(["/about", "/review", "/faq"]);
  const shouldShowFooter = !Array.from(hideFooterRoutes).some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default Layout;
