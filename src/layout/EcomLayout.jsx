import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const EcomLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the specific page component like Home, Shop, or Blog */}
      </main>
      <Footer />
    </>
  );
};

export default EcomLayout;