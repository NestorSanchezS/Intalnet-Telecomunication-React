import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "../pages/ContactUs";
import { FrequentQuestions } from "../pages/FrequentQuestions";
import { Home } from "../pages/Home";
import { OurCompany } from "../pages/OurCompany";
import { CityService } from "../pages/CityService";
import { IntalnetProvider } from "../context/intalnetProvider";
import { Layout } from "../layout/Layout";
import { TechnologyAccessories } from "../pages/TechnologyAccessories";
export const AppRoutes = () => {
  return (
    <IntalnetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ourcompany" element={<OurCompany />} />
            <Route path="city/:id" element={<CityService />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="frequentquestions" element={<FrequentQuestions />} />
            <Route
              path="technologyaccessories"
              element={<TechnologyAccessories />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntalnetProvider>
  );
};
