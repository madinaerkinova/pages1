import React from "react";
import GoodzoneImage from "../assets/images/goodzone.png";
import GoodzoneTextImage from "../assets/images/goodzonetext.png";
import EcommerceIcon from "../assets/images/ecommerce.svg";

import WebsiteImage from "../assets/images/website.svg";
import AdminPanelImage from "../assets/images/adminpanel.svg";
import CrossPlatformImage from "../assets/images/crossplatform.svg";
import WebDesignImage from "../assets/images/webdesign.svg";
import MobileDesignImage from "../assets/images/mobile.svg";

const GoodzoneService = () => {
  return (
    <div className="py-20">
      <div className="mx-auto flex max-w-6xl items-center gap-8">
        <div className="w-[50%] transform transition-transform duration-500 hover:scale-105">
          <img src={GoodzoneImage} alt="Goodzone Image" />
        </div>
        <div className="w-[50%]">
          <img className="mb-8 transform transition-transform duration-500 hover:scale-105" src={GoodzoneTextImage} alt="Goodzone Text" />
          <span className="mb-8 flex w-[150px] items-center gap-2 rounded-full bg-[#FDCCCC] px-4 py-1 transition-colors duration-500 hover:bg-[#F9A8A8]">
            <img src={EcommerceIcon} alt="Ecommerce Icon" className="transition-transform duration-500 hover:rotate-12" />
            <p className="text-sm text-[#F72626] transition-colors duration-500 hover:text-[#D22D2D]">E-commerce</p>
          </span>
          <p className="mb-8 text-xl font-semibold text-[#464359]">
            Goodzone - Internet shop of household appliances in Uzbekistan.
          </p>
          <h3 className="mb-6 text-2xl font-semibold">What we did?</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-105">
              <img src={WebsiteImage} alt="Website" className="mb-2 transition-transform duration-500 hover:rotate-12" />
              <p className="text-lg font-semibold leading-[30px]">Website</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-105">
              <img src={AdminPanelImage} alt="Admin Panel" className="mb-2 transition-transform duration-500 hover:rotate-12" />
              <p className="text-lg font-semibold leading-[30px]">
                Admin panel
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-105">
              <img src={CrossPlatformImage} alt="Cross Platform" className="mb-2 transition-transform duration-500 hover:rotate-12" />
              <p className="text-lg font-semibold leading-[30px]">
                Crossplatform
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-105">
              <img src={WebDesignImage} alt="Web Design" className="mb-2 transition-transform duration-500 hover:rotate-12" />
              <p className="text-lg font-semibold leading-[30px]">Web design</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-105">
              <img src={MobileDesignImage} alt="Mobile Design" className="mb-2 transition-transform duration-500 hover:rotate-12" />
              <p className="text-lg font-semibold leading-[30px]">
                Mobile design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodzoneService;
