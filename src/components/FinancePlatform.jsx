import React from "react";
import FinanceBackground from "../assets/images/imanbg.png";
import FinanceText from "../assets/images/iman.svg";
import FinanceIcon from "../assets/images/finance.svg";

import WebsiteIcon from "../assets/images/website.svg";
import AdminPanelIcon from "../assets/images/adminpanel.svg";
import CrossPlatformIcon from "../assets/images/crossplatform.svg";
import WebDesignIcon from "../assets/images/webdesign.svg";
import MobileDesignIcon from "../assets/images/mobile.svg";

const FinancePlatform = () => {
  return (
    <div className="finance-platform py-20">
      <div className="container mx-auto flex max-w-6xl items-center gap-8">
        <div className="content-left w-[50%]">
          <img
            className="finance-text mb-8 transform transition-transform duration-500 hover:scale-110"
            src={FinanceText}
            alt="Finance Text"
          />
          <span className="finance-tag mb-8 flex w-[142px] items-center gap-2 rounded-full bg-[#CCF4EF] px-4 py-1 transform transition-transform duration-500 hover:scale-110">
            <img src={FinanceIcon} alt="Finance Icon" />
            <p className="text-sm text-[#01CAB0]">Finance</p>
          </span>
          <p className="description mb-8 text-xl font-semibold text-[#464359] transition-colors duration-500 hover:text-[#333]">
            Iman - It is a mutual financing platform based on the principles of
            Islamic Finance. Buyers, sellers and investors meet here.
          </p>
          <h3 className="title mb-6 text-2xl font-semibold transition-colors duration-500 hover:text-[#0a3f99]">
            What we did?
          </h3>
          <div className="services grid grid-cols-3 gap-6">
            <div className="service-item w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-110">
              <img src={WebsiteIcon} alt="Website" />
              <p className="service-title text-lg font-semibold leading-[30px]">Website</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-110">
              <img src={AdminPanelIcon} alt="Admin Panel" />
              <p className="service-title text-lg font-semibold leading-[30px]">Admin panel</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#E0E8FF] p-3 transform transition-transform duration-500 hover:scale-110">
              <img src={CrossPlatformIcon} alt="CrossPlatform" />
              <p className="service-title text-lg font-semibold leading-[30px]">Crossplatform</p>
            </div>
          </div>
        </div>
        <div className="content-right w-[50%]">
          <img
            className="finance-background transform transition-transform duration-500 hover:scale-105"
            src={FinanceBackground}
            alt="Finance Background"
          />
        </div>
      </div>
    </div>
  );
};

export default FinancePlatform;
