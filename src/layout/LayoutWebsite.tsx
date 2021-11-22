import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
const LayoutWebsite: React.FC = () => {
  return (
    <div>
      <Header />
      
      
      
      <Outlet />
      <Footer />
    </div>
  );
};
export default LayoutWebsite;
