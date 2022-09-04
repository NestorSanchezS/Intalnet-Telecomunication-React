import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "./components/ContactUs";
import { FrequentQuestions } from "./components/FrequentQuestions";
import { Home } from "./components/Home";
import { OurCompany } from "./components/OurCompany";
import { Monteria } from "./components/Monteria";
import { IntalnetProvider } from "./context/intalnetProvider";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <IntalnetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ourcompany" element={<OurCompany />} />
            <Route path="monteria" element={<Monteria />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="frequentquestions" element={<FrequentQuestions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntalnetProvider>
  );
};
