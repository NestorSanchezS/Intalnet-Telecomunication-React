import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

import { NavBar } from "../components/NavBar";
export const Layout = () => {
  return (
    <>
      <div className="preloader">
        <div className="preloader_image"></div>
      </div>
      <div id="canvas">
        <div id="box_wrapper">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};
