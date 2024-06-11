import React from "react";
import DeliveryAppImage from "../assets/images/delever_app.png";
import DeliveryTextImage from "../assets/images/develerimg.svg";
import DeliveryIcon from "../assets/images/delivery.svg";

import WebsiteImage from "../assets/images/website.svg";
import AdminPanelImage from "../assets/images/adminpanel.svg";
import CrossPlatformImage from "../assets/images/crossplatform.svg";
import WebDesignImage from "../assets/images/webdesign.svg";
import MobileDesignImage from "../assets/images/mobile.svg";

const DeliveryService = () => {
  return (
    <div className="delivery-service py-20">
      <div className="mx-auto flex max-w-6xl items-center gap-8">
        <div className="w-[50%]">
          <img src={DeliveryAppImage} alt="Delivery App" />
        </div>
        <div className="w-[50%]">
          <img className="mb-8" src={DeliveryTextImage} alt="Delivery Text" />
          <span className="mb-8 flex w-[118px] items-center gap-2 rounded-full bg-[#FFDDD3] px-4 py-1">
            <img src={DeliveryIcon} alt="Delivery Icon" />
            <p className="text-sm text-[#FF5722]">Delivery</p>
          </span>
          <p className="mb-8 text-xl font-semibold text-[#464359]">
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
          </p>
          <h3 className="mb-6 text-2xl font-semibold">What we did?</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={WebsiteImage} alt="Website" />
              <p className="text-lg font-semibold leading-[30px]">Website</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={AdminPanelImage} alt="Admin Panel" />
              <p className="text-lg font-semibold leading-[30px]">
                Admin panel
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={CrossPlatformImage} alt="Cross Platform" />
              <p className="text-lg font-semibold leading-[30px]">
                Crossplatform
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={WebDesignImage} alt="Web Design" />
              <p className="text-lg font-semibold leading-[30px]">Web design</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={MobileDesignImage} alt="Mobile Design" />
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

export default DeliveryService;
