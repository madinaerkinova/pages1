import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Direction from "./pages/Direction";
import Command from "./pages/Command";
import Services from "./pages/Services";
import Tools from "./pages/Tools";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/command" element={<Command />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
