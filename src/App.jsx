import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "./pages/ContactUs";
import { FrequentQuestions } from "./pages/FrequentQuestions";
import { Home } from "./pages/Home";
import { OurCompany } from "./pages/OurCompany";
import { CityService } from "./pages/CityService";
import { IntalnetProvider } from "./context/intalnetProvider";
import { Layout } from "./layout/Layout";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return <AppRoutes />;
};
