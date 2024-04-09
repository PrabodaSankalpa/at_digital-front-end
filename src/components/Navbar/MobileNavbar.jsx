import React from "react";

import logo from "../../assets/Logo.png";

const MobileNavbar = () => {
  return (
    <nav className="bg-white text-black">
      <div className="flex justify-between h-[100vh] pt-4 px-5">
        <div className="hidden">
          <a href="#">
            <img src={logo} alt="AT Digital Logo" />
          </a>
        </div>
        <div className="flex flex-col flex-1 text-xs uppercase font-medium">
          <a href="#" className="hover:text-secondary mb-8">
            Services
          </a>
          <a href="#" className="hover:text-secondary mb-8">
            About Us
          </a>
          <a href="#" className="hover:text-secondary mb-8">
            Contact Us
          </a>
          <a href="#" className="hover:text-secondary mb-8">
            Careers
          </a>
        </div>

        {/* here is the close navbar close btn */}
        <input type="checkbox" id="check" hidden />
        <label htmlFor="check" className="text-4xl float-none">
          <i className="fa-solid fa-xmark"></i>
        </label>
      </div>
    </nav>
  );
};

export default MobileNavbar;
