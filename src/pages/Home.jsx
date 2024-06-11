import React from "react";
import Hero from "../components/HeroSection";
import Direction from "./Direction";
import Command from "./Command";
import Services from "./Services";
import Tools from "./Tools";
import Portfolio from "./Portfolio";
import HowWeWork from "./HowWeWork"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
const Home = () => {
  return (
    <div>
      <Hero />
      <Direction />
      <Command />
      <Services />
      <Tools />
      <Portfolio />
      <HowWeWork />
      <ContactUs/>
      <Footer/>
      
    </div>
  );
};

export default Home;
