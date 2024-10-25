import React, { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import carimage from "../assets/car.png";
import Footer from "./Footer";
import Map from "./Map";
import InventorySection from "./Home/InventorySection";
import HoursAndLocation from "./Home/HoursAndLocation";

const AboutUsSection = lazy(() => import("./Home/AboutUsSection"));

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

      <Suspense fallback={<div>Loading..</div>}>
        <AboutUsSection />
        <InventorySection />
        <HoursAndLocation />
      </Suspense>

      <Footer />
    </>
  );
}

export default Home;
