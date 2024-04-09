import React from "react";

const Button = ({ children, url }) => {
  return (
    <a
      href={url}
      className="bg-secondary py-[12px] px-[20px] rounded text-white uppercase font-bold text-xs inline-block"
    >
      {children}
    </a>
  );
};

export default Button;
