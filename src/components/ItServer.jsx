import React from "react";
import FrontendIcon from "../assets/images/frontend.svg";
import BackendIcon from "../assets/images/backend.svg";
import ArchitectureIcon from "../assets/images/architecture.svg";
import DevopsIcon from "../assets/images/devops2.svg";
import UxUiIcon from "../assets/images/uxui.svg";
import QAIcon from "../assets/images/qa.svg";
import ConsultingBg from "../assets/images/ITconsulting.svg";

const ItServer = () => {
  return (
    <div className="it-consulting mx-auto max-w-6xl px-4 py-20">
      <h1 className="heading mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
        IT Consulting
      </h1>
      <div className="content flex items-center justify-between">
        <div className="text-section w-[45%]">
          <p className="description mb-7 text-2xl font-medium leading-10 text-[#18191f]">
            We can improve the qualifications of your employees thereby
            increasing the efficiency of your company
          </p>
          <div className="services mb-10 grid grid-cols-3 gap-4">
            <div className="service-item w-full rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={FrontendIcon} alt="Frontend Logo" />
              <p className="service-title text-lg font-semibold leading-[30px]">Frontend</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={BackendIcon} alt="Backend Logo" />
              <p className="service-title text-lg font-semibold leading-[30px]">Backend</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={ArchitectureIcon} alt="Architecture Logo" />
              <p className="service-title text-lg font-semibold leading-[30px]">Architecture</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={DevopsIcon} alt="DevOps Logo" />
              <p className="service-title text-lg font-semibold leading-[30px]">DevOps</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={UxUiIcon} alt="UX/UI Logo" />
              <p className="service-title text-lg font-semibold leading-[30px]">UX/UI</p>
            </div>
            <div className="service-item w-full rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={QAIcon} alt="QA Logo" />
              <p className="service-title text-lg font-semibold leading-[30px]">QA</p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img className="consulting-bg w-[500px] transition-transform duration-300 hover:scale-105" src={ConsultingBg} alt="Consulting Background" />
        </div>
      </div>
    </div>
  );
};

export default ItServer;
