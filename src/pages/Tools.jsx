import React from "react";
import AkfaMedline from "../assets/client_img/akfaMedline.svg";
import Cspace from "../assets/client_img/cspace.svg";
import Delever from "../assets/client_img/delever.svg";
import Fonon from "../assets/client_img/fonon.svg";
import Hamkorbank from "../assets/client_img/hamkorbank.svg";
import Hoshimov from "../assets/client_img/hoshimov.svg";
import Iman from "../assets/client_img/iman.svg";

import Maxtrack from "../assets/client_img/maxtrack.svg";
import ShefBurger from "../assets/client_img/shefBurger.svg";
import Mytaxi from "../assets/client_img/mytaxi.svg";
import Workly from "../assets/client_img/workly.svg";
import Rabota from "../assets/client_img/rabota.svg";
import Goodzone from "../assets/client_img/goodzone.svg";
import SMSUZ from "../assets/client_img/smsuz.svg";

const Tools = () => {
  return (
    <div className="bg-[#f4f7ff] py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
          Tools
        </h1>
        <div className="flex gap-5 py-5 overflow-x-auto">
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={AkfaMedline}
            alt="AkfaMedline"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Cspace}
            alt="Cspace"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Delever}
            alt="Delever"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Fonon}
            alt="Fonon"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Hamkorbank}
            alt="Hamkorbank"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Hoshimov}
            alt="Hoshimov"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Iman}
            alt="Iman"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Maxtrack}
            alt="Maxtrack"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={ShefBurger}
            alt="ShefBurger"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Mytaxi}
            alt="Mytaxi"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Workly}
            alt="Workly"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Rabota}
            alt="Rabota"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={Goodzone}
            alt="Goodzone"
          />
          <img
            className="h-32 w-[213px] transition duration-300 hover:scale-[1.07]"
            src={SMSUZ}
            alt="SMSUZ"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
