import React from "react";
import { ReactComponent as LogoIcon } from "../assets/favicon.svg";
import { Link, Outlet } from "react-router-dom";
import Services from "./Services";

function Navbar() {
  return (
    <>
      <div className="bg-custom-orange">
        <p className="text-white text-center p-2 uppercase font-customFont tracking-widest">
          View our inventory!Call us at today at 111-111-1111
        </p>
      </div>
      <nav className="bg-white   p-3 drop-shadow-lg flex justify-between items-center">
        <div className="flex items-start">
          <LogoIcon className=" block h-15 w-15 " />
        </div>
        <div className="flex px-7 space-x-10 justify-end items-center font-customFont tracking-wide sm:text-2xl text-sm">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="/inventory">
            Inventory
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <button className="bg-custom-orange sm:rounded-full sm:px-5 sm:py-3 px-3 text-white shadow-xl">
            Call Us{" "}
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
