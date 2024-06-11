import React from "react";
import UX from "../assets/images/ux.svg";
import UI from "../assets/images/ui.svg";
import Prototyping from "../assets/images/prototyping.svg";
import MobileDesign from "../assets/images/mobile.svg";
import WebDesign from "../assets/images/web.svg";
import AtomicDesign from "../assets/images/atomic.svg";
import BG2 from "../assets/images/bg2.png";
import Phone2 from "../assets/images/phone2.png";
import Figma from "../assets/images/figma.svg";
import Sketch from "../assets/images/sketch.svg";
import Lottie from "../assets/images/lottie.svg";
import Illustrator from "../assets/images/illustrator.svg";

const Design = () => {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
          UI / UX design
        </h1>
        <div className="flex items-center justify-between">
          <div className="w-[45%]">
            <p className="mb-7 text-2xl font-medium leading-10 text-[#18191f]">
              Our company takes a human-centered approach to design
            </p>
            <div className="mb-10 grid grid-cols-3 gap-4">
              <ServiceItem image={UX} title="UX" />
              <ServiceItem image={UI} title="UI" />
              <ServiceItem image={Prototyping} title="Prototyping" />
              <ServiceItem image={MobileDesign} title="Mobile Design" />
              <ServiceItem image={WebDesign} title="Web Design" />
              <ServiceItem image={AtomicDesign} title="Atomic Design" />
            </div>
            <div>
              <p className="mb-8 text-[32px] font-extrabold leading-10 text-[#464359]">
                Technologies
              </p>
              <div className="flex gap-12">
                <TechnologyItem image={Figma} title="Figma" />
                <TechnologyItem image={Sketch} title="Sketch" />
                <TechnologyItem image={Lottie} title="Lottie" />
                <TechnologyItem image={Illustrator} title="Illustrator" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[426px] w-[500px]"
              src={BG2}
              alt="Laptop Bg Img"
            />
            <img className="absolute top-12" src={Phone2} alt="Laptop Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ image, title }) => (
  <div className="w-full rounded-lg bg-[#E0E8FF] p-3 transition duration-300 transform hover:bg-blue-200 hover:scale-105">
    <img src={image} alt={title} />
    <p className="text-lg font-semibold leading-[30px]">{title}</p>
  </div>
);

const TechnologyItem = ({ image, title }) => (
  <div>
    <img className="mb-2 h-14 w-14" src={image} alt={`${title} Logo`} />
    <p className="text-xl font-semibold leading-[30px]">{title}</p>
  </div>
);

export default Design;
