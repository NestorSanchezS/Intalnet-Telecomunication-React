import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "./components/ContactUs";
import { Home } from "./components/Home";
import { OurCompany } from "./components/OurCompany";
import { Services } from "./components/Services";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ourcompany" element={<OurCompany />} />
          <Route path="services" element={<Services />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
