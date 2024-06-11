import React from "react";
import Team from "../assets/images/team.svg";
import Develop from "../assets/images/develop.svg";
import ERP from "../assets/images/erp.svg";
import Interface from "../assets/images/interface.svg";
import Optimiz from "../assets/images/optimiz.svg";
import Consult from "../assets/images/consult.svg";

const Direction = () => {
  return (
    <div className="mx-auto px-4 max-w-6xl py-[100px]">
      <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
        Our services
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="h-[200px] w-full rounded-lg bg-[#F4F7FF] p-8 flex flex-col justify-center items-center">
          <img src={Team} alt="Icons" className="mb-6" />
          <p className="mb-6 text-xl text-[18191f]">Team</p>
        </div>
        <div className="h-[200px] w-full rounded-lg bg-[#F4F7FF] p-8 flex flex-col justify-center items-center">
          <img src={Develop} alt="Icons" className="mb-6" />
          <p className="mb-6 text-xl text-[18191f]">Development of mobile applications</p>
        </div>
        <div className="h-[200px] w-full rounded-lg bg-[#F4F7FF] p-8 flex flex-col justify-center items-center">
          <img src={ERP} alt="Icons" className="mb-6" />
          <p className="mb-6 text-xl text-[18191f]">Development and implementation ERP systems</p>
        </div>
        <div className="h-[200px] w-full rounded-lg bg-[#F4F7FF] p-8 flex flex-col justify-center items-center">
          <img src={Interface} alt="Icons" className="mb-6" />
          <p className="mb-6 text-xl text-[18191f]">User interface, User experience design</p>
        </div>
        <div className="h-[200px] w-full rounded-lg bg-[#F4F7FF] p-8 flex flex-col justify-center items-center">
          <img src={Optimiz} alt="Icons" className="mb-6" />
          <p className="mb-6 text-xl text-[18191f]">Optimization IT consulting infrastructure</p>
        </div>
        <div className="h-[200px] w-full rounded-lg bg-[#F4F7FF] p-8 flex flex-col justify-center items-center">
          <img src={Consult} alt="Icons" className="mb-6" />
          <p className="mb-6 text-xl text-[18191f]">IT consulting</p>
        </div>
      </div>
    </div>
  );
};

export default Direction;
