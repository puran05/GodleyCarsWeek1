import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-custom-off-white mt-20">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="font-customFont text-2xl mt-5 px-2">Godley Cars</h2>

            <div className="flex mt-6 lg:mb-0 mb-6 space-x-3">
              <a href="https://facebook.com" className="hover:text-blue-500">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-700">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>

            <button className="bg-custom-orange rounded-full  px-8 py-2 mt-8 text-lg text-white shadow-xl font-customFont tracking-wider">
              Contact us
            </button>
          </div>

          <div className="mt-6 w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-black font-bold">
                  Useful Links
                </span>
                <ul className="leading-[3]">
                  <li>Work With Us</li>
                  <li>Advertise With Us</li>
                  <li>Support Us</li>
                  <li>Inventory</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-red-500" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            Demo Site , images credit to unsplash or pexels
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
