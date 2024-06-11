import React from "react";
import HeroImage from "../assets/images/hero.svg";
import SiteLogo from "../assets/images/logo.svg";
import TextTypingEffect from "./TextTypingEffect";

const HeroSection = () => {
  const animatedTexts = [
    "Development of mobile applications",
    "Development and implementation ERP systems",
    "User interface, user experience and design",
    "Optimization IT consulting infrastructure",
  ];

  return (
    <div className="hero-section mx-auto mb-20 px-4 flex max-w-6xl justify-between pt-36">
      <div className="flex w-full items-center justify-between">
        <div className="hero-content w-[45%]">
          <img className="site-logo mb-6 transform transition-transform duration-500 hover:scale-110" src={SiteLogo} alt="Site Logo" />
          <p className="company-title mb-5 text-[40px] font-extrabold leading-[54px] text-[#464359] transition-colors duration-500 hover:text-[#333]">
            IT-Outsourcing Company
          </p>
          <p className="animated-text mb-6 text-[40px] font-extrabold leading-[54px] text-[#1b5bf7] transition-colors duration-500 hover:text-[#0a3f99]">
            <TextTypingEffect texts={animatedTexts} />
          </p>
          <button className="contact-button mb-4 h-14 w-60 rounded-lg bg-[#1b5bf7] text-xl font-semibold leading-[30px] text-white transition-transform duration-500 hover:scale-110 hover:bg-[#0a3f99]">
            Contact
          </button>
        </div>
        <div className="hero-image-container transform transition-transform duration-500 hover:scale-105">
          <img src={HeroImage} alt="Hero Img" className="hero-image transform transition-transform duration-500 hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
