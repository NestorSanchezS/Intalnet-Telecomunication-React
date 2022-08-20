import React from "react";
import { NavBar } from "../components/NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="preloader">
        <div className="preloader_image"></div>
      </div>
      <div id="canvas">
        <div id="box_wrapper">
          <NavBar />
          {children}
        </div>
      </div>
    </>
  );
};
