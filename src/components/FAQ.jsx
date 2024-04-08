import React, { useState } from "react";

const FAQ = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-6 mb-[15px] bg-faqCardBg">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span
          className={`font-medium leading-[1.75rem] text-[20px] md:text-[22px] pr-10 text-start ${
            accordionOpen ? "text-primary" : ""
          }`}
        >
          {title}
        </span>
        <svg
          className={`${
            accordionOpen ? "fill-primary" : "fill-black"
          }  text-medium shrink-0 mt-2`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-textColorLight2 leading-[30px] md:text-[18px] pt-[13px] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
