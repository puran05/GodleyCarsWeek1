import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-sm p-3 drop-shadow-lg justify-center items-center">
        <img src="favicon.ico" className="flex "></img>
        <div className="flex px-10 space-x-7 text-lg justify-end items-center">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Inventory</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
