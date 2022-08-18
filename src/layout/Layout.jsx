import React from "react";
import { NavBar } from "../components/NavBar";
import "../styles/Inicio.css";

export const Layout = ({ children }) => {
  return (
    <div id="canvas">
      <NavBar />
      {children}
    </div>
  );
};
