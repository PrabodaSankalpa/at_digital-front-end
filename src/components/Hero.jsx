import React from "react";
import heroImage from "../assets/Hero_Image.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:relative">
      <img
        src={heroImage}
        alt="Hero Image"
        className="w-full xl:max-h-[700px]"
      />
      <div className="pt-[24px] pb-[32px] px-[20px] md:px-[40px] bg-gradient-to-r from-analogous3 to-analogous2 lg:absolute lg:left-20 lg:bottom-10 lg:w-[622px] xl:w-[630px] lg:h-[306px]">
        <p
          className="text-lg md:text-xl font-bold text-white tracking-normal md:tracking-tighter leading-[2.25rem] md:leading-[3rem] text-left"
          style={{ textTransform: "capitalize" }}
        >
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <div className="inline-block pt-5">
          <Button url="#">Get free consultation</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
