import React from "react";
import Button from "./Button";

const ServiceCard = ({ imageUrl, title, text, btnUrl, direction }) => {
  return (
    <div
      className={
        "flex flex-col md:gap-5 xl:gap-[108px] px-5 md:px-10 my-[60px] lg:px-[152px] lg:my-20 xl:px-[188px] items-center " +
        direction
      }
    >
      <div className="px-[30px] md:px-0 flex-none">
        <img
          src={imageUrl}
          alt={title}
          className="w-[275px] md:h-[275px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[414px]"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="font-poppins font-semibold text-heading text-center md:text-start text-primary tracking-wide leading-[33px] pb-5">
          {title}
        </p>
        <p className="text-center md:text-start leading-[19.36px] font-normal pb-5">
          {text}
        </p>
        <Button url={btnUrl}>learn more</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
