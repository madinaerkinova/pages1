import React from "react";
import IOSIcon from "../assets/images/ios.svg";
import AndroidIcon from "../assets/images/android.svg";
import CrossplatformIcon from "../assets/images/crossplatform.svg";
import SwiftIcon from "../assets/images/swift.svg";
import KotlinIcon from "../assets/images/kotlin.svg";
import FlutterIcon from "../assets/images/flutter.svg";
import PhoneImage from "../assets/images/phone.png";
import BackgroundImage from "../assets/images/background.png";

const Mobile = () => {
  return (
    <div className="mobile-app mx-auto px-4 max-w-6xl py-20">
      <h1 className="heading mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
        Development of mobile <br /> applications
      </h1>
      <div className="content flex items-center justify-between">
        <div className="text-section w-[45%]">
          <p className="description mb-7 text-2xl font-medium leading-10 text-[#18191f]">
            In collaboration with startups, we have learned how to create a
            creative and functional user interface for mobile applications.
          </p>
          <div className="platforms mb-10 flex gap-4">
            <div className="platform-item w-[150px] rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={IOSIcon} alt="iOS Logo" />
              <p className="platform-name text-lg font-semibold leading-[30px]">iOS</p>
            </div>
            <div className="platform-item w-[150px] rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={AndroidIcon} alt="Android Logo" />
              <p className="platform-name text-lg font-semibold leading-[30px]">Android</p>
            </div>
            <div className="platform-item w-[150px] rounded-lg bg-[#F4F7FF] p-3 transition-transform duration-300 hover:scale-105">
              <img className="icon h-14 w-14" src={CrossplatformIcon} alt="Crossplatform Logo" />
              <p className="platform-name text-lg font-semibold leading-[30px]">Crossplatform</p>
            </div>
          </div>
          <div className="technologies">
            <p className="subtitle mb-8 text-[32px] font-extrabold leading-10 text-[#464359]">Technologies</p>
            <div className="tech-icons flex gap-12">
              <div className="tech-item">
                <img className="icon mb-2 h-14 w-14" src={SwiftIcon} alt="Swift Logo" />
                <p className="tech-name text-xl font-semibold leading-[30px]">Swift</p>
              </div>
              <div className="tech-item">
                <img className="icon mb-2 h-14 w-14" src={KotlinIcon} alt="Kotlin Logo" />
                <p className="tech-name text-xl font-semibold leading-[30px]">Kotlin</p>
              </div>
              <div className="tech-item">
                <img className="icon mb-2 h-14 w-14" src={FlutterIcon} alt="Flutter Logo" />
                <p className="tech-name text-xl font-semibold leading-[30px]">Flutter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section relative">
          <img className="bg-image" src={BackgroundImage} alt="Background Image" />
          <img className="phone-image absolute top-10 left-10" src={PhoneImage} alt="Phone Image" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
