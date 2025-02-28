import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Sirf /about page ke liye margin-top apply karein
  const isAboutPage = location.pathname === "/about";

  // Footer hide karne ke liye specific pages
  const hideFooterRoutes = new Set(["/about","/review", "/product", "/faq"]);
  const shouldShowFooter = !hideFooterRoutes.has(location.pathname);

  return (
    <>
      <Navbar />
      <div style={isAboutPage ? { marginTop: "10%" } : {}}>
        <Outlet />
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default Layout;
