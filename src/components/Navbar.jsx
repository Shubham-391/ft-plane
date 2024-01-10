import React, { useState } from "react";
import logo from "../assets/images/logo.webp";

function Navbar() {
  const [open, setOpen] = useState(false);
  { open == false ? document.body.classList.remove("overflow-hidden") : document.body.classList.add("overflow-hidden") };
  return (
    <>
      <nav className="h-[88px] max-w-[1214px] mx-auto px-3 flex justify-between items-center w-full">
        <div>
          <img
            className="w-[120px] h-[30px] min-[400px]:w-[164px] min-[400px]:h-[34px] relative z-[6]"
            src={logo}
            alt="logo"
          />
        </div>
        <div
          className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col items-center justify-between min-[992px]:hidden z-[6] ${
            open ? "" : "translate-y-[10px]"
          }`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-full h-[5px] duration-300 bg-[#FFF] rounded ${
              open == false ? "" : "rotate-45"
            }`}
          ></span>
          <span
            className={`w-full h-[5px] duration-300 bg-[#FFF] rounded ${
              open == false ? "" : "rotate-[135deg] translate-y-[-20px]"
            }`}
          ></span>
          <span
            className={`w-full h-[5px] duration-300 bg-[#FFF] rounded ${
              open == false ? "" : "hidden"
            }`}
          ></span>
        </div>
        <ul
          className={`duration-300 ease-linear flex items-center gap-[50px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(18,20,78)_0%,#010223_100%)] fixed left-[-100%] top-0 w-full h-full flex-col justify-center min-[992px]:static min-[992px]:bg-none min-[992px]:right-0 min-[992px]:flex-row min-[992px]:justify-end z-[5] ${
            open == false ? "" : "left-[0%]"
          }`}
        >
          <li>
            <a
              href="#first"
              className="text-[#FFF] font-montserrat text-base not-italic font-semibold leading-[28px] duration-300 hover:text-[#313EF7] relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-[#313EF7] after:bottom-[-10px] after:left-[50%] after:duration-300 hover:after:left-0"
              onClick={() => setOpen(false) }
            >
              All Flight
            </a>
          </li>
          <li>
            <a
              href="#second"
              className="text-[#FFF] font-montserrat text-base not-italic font-semibold leading-[28px] duration-300 hover:text-[#313EF7] relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-[#313EF7] after:bottom-[-10px] after:left-[50%] after:duration-300 hover:after:left-0"
              onClick={() => setOpen(false) }
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#third"
              className="text-[#FFF] font-montserrat text-base not-italic font-semibold leading-[28px] duration-300 hover:text-[#313EF7] relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-[#313EF7] after:bottom-[-10px] after:left-[50%] after:duration-300 hover:after:left-0"
              onClick={() => setOpen(false) }
            >
              Passengers
            </a>
          </li>
          <li>
            <a
              href="#fourth"
              className="text-[#FFF] font-montserrat text-base not-italic font-semibold leading-[28px] duration-300 hover:text-[#313EF7] relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-[#313EF7] after:bottom-[-10px] after:left-[50%] after:duration-300 hover:after:left-0"
              onClick={() => setOpen(false) }
            >
              Your Orders
            </a>
          </li>
          <li>
            <a
              href=""
              className="py-[10px] px-[40px] rounded-[59px] border border-solid border-[#FFF] text-[#FFF] font-montserrat text-base not-italic font-semibold leading-[28px] duration-300 relative group overflow-hidden inline-flex"
              onClick={() => setOpen2(!open2)}
            >
              <span className="absolute duration-300 inset-0 bg-[#313EF7] w-0 group-hover:w-full"></span>
              <span className="relative">Let's Fly</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
