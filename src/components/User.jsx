import React from "react";
import SMSUZ from "../assets/images/smsuz.png";
import SmsText from "../assets/images/smstext.svg";
import Mail from "../assets/images/mail.svg";

import Website from "../assets/images/website.svg";
import AdminPanel from "../assets/images/adminpanel.svg";
import CrossPlatform from "../assets/images/crossplatform.svg";
import WebDesign from "../assets/images/webdesign.svg";
import MobileDesign from "../assets/images/mobile.svg";
const User = () => {
  return (
    <div className="py-20">
      <div className="mx-auto flex max-w-6xl items-center gap-8">
        <div className="w-1/2">
          <img className="mb-8" src={SmsText} alt="SMS Text" />
          <span className="mb-8 flex w-36 items-center gap-2 rounded-full bg-blue-100 px-4 py-1 hover:bg-blue-200 hover:text-blue-700 transition duration-300">
            <img src={Mail} alt="Mail Img" />
            <p className="text-sm text-blue-600">Notification</p>
          </span>
          <p className="mb-8 text-xl font-semibold text-gray-700">
            Smsuz.uz - It is a platform for bulk SMS messaging.
          </p>
          <h3 className="mb-6 text-2xl font-semibold">What we did?</h3>
          <div className="grid grid-cols-3 gap-6">
            <ServiceItem
              src={Website}
              title="Website"
            />
            <ServiceItem
              src={AdminPanel}
              title="Admin panel"
            />
            <ServiceItem
              src={CrossPlatform}
              title="Crossplatform"
            />
          </div>
        </div>
        <div className="w-1/2">
          <img src={SMSUZ} alt="SMSuz Img" />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ src, title }) => (
  <div className="w-full rounded-lg bg-gray-100 p-3 hover:bg-gray-200 transition duration-300">
    <img src={src} alt={title} />
    <p className="text-lg font-semibold leading-8">{title}</p>
  </div>
);

export default User;

