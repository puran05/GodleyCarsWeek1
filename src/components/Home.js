import React from "react";
import Navbar from "./Navbar";
import carimage from "../assets/car.png";
import carimagetwo from "../assets/car2.png";
import Footer from "./Footer";
import Map from "./Map";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${carimage})` }}
      >
        <div className="text-center">
          <h1 className="[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] text-7xl text-white font-customFont mt-14 ">
            Welcome to
          </h1>
          <h1 className=" [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] text-9xl text-white font-customFont mt-4">
            godley cars
          </h1>
          <button className="bg-custom-orange rounded-full  px-8 py-2 mt- text-lg text-white shadow-xl font-customFont tracking-wider">
            view inventory
          </button>
        </div>
      </section>

      {/* about us section */}

      <section className="h-screen flex flex-wrap items-center justify-center py-20">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src={carimagetwo} className="w-full h-auto"></img>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-10 ">
          <h2 className="text-center text-3xl font-customFont pt-7">
            About Us{" "}
          </h2>
          <p className="pt-7 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non nisl ac leo laoreet hendrerit. Fusce tristique, neque sit amet
            tincidunt aliquam, dolor mauris fermentum arcu, ut pharetra magna
            erat nec dolor. Vivamus at neque auctor, consectetur lacus a,
            vehicula erat. Integer pretium, felis eget consequat elementum,
            libero urna cursus libero, eget finibus justo ex vel lectus. Nam in
            elit eget urna feugiat eleifend. Maecenas ut odio sit amet felis
            aliquet facilisis. Nullam quis eros ac risus ullamcorper tincidunt.
          </p>
        </div>
      </section>

      <section className="h-full flex flex-wrap justify-center text-center border border-red-400">
        <h2 className="text-center text-3xl font-customFont py-12">
          Featured vehicles
        </h2>
        <div className="py-12 container mt-4 border-2 ">boredr around me </div>
        <div className="py-6">
          <button className="bg-custom-orange rounded-full px-4 py-2 text-white shadow-xl font-customFont tracking-wider">
            view inventory
          </button>
        </div>
      </section>

      <section className="flex flex-wrap m-4 h-screen w-full ">
        <div className=" w-full md:w-1/2 lg:w-1/2 justify-center text-center">
          <h2 className=" text-5xl font-customFont py-12">
            {" "}
            hours of operation
          </h2>
          <div className=" w-2/3 flex ml-[15%]">
            <div className="w-1/3">
              <ul className="font-customSecondFont capitalize leading-[3]">
                <li>sunday </li>
                <li>monday</li>
                <li>tuesday </li>
                <li>Wednesday</li>
                <li>thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="font-customSecondFont leading-[3] uppercase">
                <li>10:00 Am -9:00 Pm </li>
                <li>10:00 Am -9:00 Pm </li>
                <li>10:00 Am -9:00 Pm </li>
                <li>10:00 Am -9:00 Pm </li>
                <li>10:00 Am -9:00 Pm </li>
                <li>10:00 Am -9:00 Pm </li>
                <li>Closed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-orange-500 w-full md:w-1/2 lg:w-1/2 mb-40">
          <h2 className="text-center text-5xl font-customFont py-12">
            {" "}
            Location
          </h2>
          <div>
            <Map />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
