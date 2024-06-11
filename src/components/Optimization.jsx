import React from "react";
import Bgpc from "../assets/images/bgpc.png";
import Laptop from "../assets/images/laptop.png";
import Architect from "../assets/images/architect.svg";
import Autotest from "../assets/images/autotest.svg";
import Stress from "../assets/images/stress.svg";
import Load from "../assets/images/load.svg";
import Devops from "../assets/images/devops.svg";
import Cloud from "../assets/images/cloud.svg";
import CI from "../assets/images/ci.svg";

const Optimization = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl py-20">
        <h1 className="mb-10 text-4xl font-semibold leading-[64px] text-blue-500">
          Optimization <br /> Infrastructure
        </h1>
        <div className="flex items-center justify-between">
          <div className="relative">
            <img
              className="h-[426px] w-[500px]"
              src={Bgpc}
              alt="Laptop Bg Img"
            />
            <img className="absolute top-12" src={Laptop} alt="Laptop Img" />
          </div>
          <div className="max-w-[500px]">
            <p className="mb-7 text-lg font-medium leading-10 text-gray-800">
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <div className="grid grid-cols-3 gap-4">
              <ServiceItem
                src={Architect}
                title="Architecture"
                animation="fade-up"
              />
              <ServiceItem
                src={Autotest}
                title="Auto testing"
                animation="fade-up"
              />
              <ServiceItem
                src={Stress}
                title="Stress testing"
                animation="fade-up"
              />
              <ServiceItem
                src={Load}
                title="Load testing"
                animation="fade-up"
              />
              <ServiceItem src={Devops} title="Devops" animation="fade-up" />
              <ServiceItem src={Cloud} title="Cloud" animation="fade-up" />
              <ServiceItem src={CI} title="CI/CD" animation="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ServiceItem = ({ src, title, animation }) => (
  <div
    className={`w-full rounded-lg bg-gray-200 p-3 animate__animated animate__${animation}`}
  >
    <img src={src} alt={`${title} Logo`} />
    <p className="text-lg font-semibold leading-[30px]">{title}</p>
  </div>
);

export default Optimization;
