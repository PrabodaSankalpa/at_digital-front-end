import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <nav className={`${isChecked ? "hidden" : ""} bg-primary`}>
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

          <input type="checkbox" id="check" hidden onChange={toggleMenu} />
          <label
            htmlFor="check"
            className="float-right text-3xl text-white md:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>
      </nav>

      {/* If user click the hamburger menu btn here is the logic to ckeck and show mobile navbar */}
      {isChecked && <MobileNavbar />}
    </>
  );
};

export default Navbar;
