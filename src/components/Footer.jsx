import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-primary px-5 md:px-10 lg:px-[60px] xl:px-20 pt-10 pb-5 text-white">
      <div className="lg:flex lg:justify-between">
        <div className="mb-[60px] md:w-[413px]">
          <img src={logo} alt="Logo" className="h-[25px]" />
          <p className="pt-5 font-lato font-normal leading-[19.2px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="md:flex xl:gap-[128px]">
          <div className="mb-10 w-[216px] lg:w-[255px] xl:w-[197px] md:mb-0">
            <p className="font-semibold text-sm pb-3">Our Technologies</p>
            <div className="text-xs font-medium">
              <p className="pb-3">ReactJS</p>
              <p className="pb-3">Gatsby</p>
              <p className="pb-3">NextJS</p>
              <p className="pb-3 md:pb-0">NodeJS</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm pb-3">Our Services</p>
            <div className="text-xs font-medium">
              <p className="pb-3">Social media Marketing</p>
              <p className="pb-3">Web & Mobile App Development</p>
              <p className="pb-3">Data & Analytics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-2 border-solid text-center text-xs font-medium pt-2 md:mx-[29px] lg:mx-[225px] xl:mx-[325px]">
        <a href="">Privacy Policy</a> | <a href="">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
