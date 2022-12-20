import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";

import { NavBar } from "../components/NavBar";
export const Layout = () => {
  return (
    <>
      {/* <Loader /> */}
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
