import React from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="px-5 md:px-10 lg:px-[60px] xl:px-20 py-[26px] flex items-center justify-between">
        <div>
          <a href="#">
            <img src={logo} alt="AT Digital Logo" />
          </a>
        </div>
        <div className="hidden md:flex space-x-7 text-xs text-white uppercase font-medium">
          <a href="#" className="hover:text-secondary">
            Services
          </a>
          <a href="#" className="hover:text-secondary">
            About Us
          </a>
          <a href="#" className="hover:text-secondary">
            Contact Us
          </a>
          <a href="#" className="hover:text-secondary">
            Careers
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
