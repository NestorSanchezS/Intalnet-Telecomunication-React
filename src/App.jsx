import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contactenos } from "./components/Contactenos";
import { Inicio } from "./components/Inicio";
import { InternetSano } from "./components/InternetSano";
import { NuestraEmpresa } from "./components/NuestraEmpresa";
import { Preguntas } from "./components/Preguntas";
import { Regulacion } from "./components/Regulacion";
import { Servicios } from "./components/Servicios";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="nuestraempresa" element={<NuestraEmpresa />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="regulacion" element={<Regulacion />} />
        <Route path="preguntas" element={<Preguntas />} />
        <Route path="internetsano" element={<InternetSano />} />
        <Route path="Contactenos" element={<Contactenos />} />
      </Routes>
    </BrowserRouter>
  );
};
