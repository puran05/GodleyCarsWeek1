import React from "react";
import BannerImage from "../assets/servicesBanner.jpg";
import Footer from "./Footer";

function Services() {
  return (
    <div>
      {/* image banner section */}
      <section>
        <img src={BannerImage} className="w-full h-[45vh] object-cover"></img>
        <div className="bg-black h-40 pl-20 pt-5 text-start">
          <h1 class=" text-white text-4xl font-bold pt-5">Our Services</h1>
          <p className="text-white pt-2.5">
            {" "}
            Service: Open | Call us at: 817-754-9083
          </p>
        </div>
      </section>

      {/* a short description section */}
      <section>
        <div className="flex flex-wrap">
          <div className="pl-20 pr-20 sm:w-[70%] w-full">
            <h1 class="text-start text-black text-4xl   pt-5">
              Godley Services
            </h1>
            <p className="pt-10 text-left">
              At Godley Cars, our team of highly skilled technicians is
              committed to delivering exceptional service with efficiency and
              care. Whether it's routine maintenance like oil changes or more
              complex tasks such as transmission replacements, we are dedicated
              to providing top-tier service for all car owners, whether your
              vehicle is new or pre-owned. Let our experienced team show you our
              unwavering commitment to excellence.
            </p>
          </div>
          <div className="sm:w-[30%] w-full sm:pl-0 pl-20 pt-10 text-left ">
            <div className="flex ">
              <i className="fa-solid fa-phone pt-2 pr-2"></i>
              <p className="text-xl font-bold">Hours Of Operation:</p>
              <p className="pt-1 pl-2">Mon-Sat</p>
            </div>
            <div className="flex pt-2">
              <i className="fa-solid fa-clock pt-2 pr-2"></i>
              <p className="text-xl font-bold">Phone Num:</p>
              <p className="pt-1 pl-2">123-123-1232</p>
            </div>
            <div className="flex pt-2">
              <i className="fa-solid fa-envelope pt-2 pr-2"></i>
              <p className="text-xl font-bold">Email</p>
              <p className="pt-1 pl-2">call@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap justify-center space-y-6 gap-6 p-4">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-lg p-6 mt-5 m-2 w-full sm:w-1/4 ">
            <div
              className="h-64 bg-cover bg-center  w-full transition-transform duration-300 transform hover:scale-105"
              style={{
                backgroundImage: `url(${BannerImage})`,
              }}
            ></div>

            <h2 className="text-xl font-bold mt-5 mb-2"> Servicing</h2>
            <p>Details about the car, such as make, model, and year.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-lg p-6 mt-5 mb-2 w-full sm:w-1/4 ">
            <div
              className="h-64 bg-cover bg-center  w-full transition-transform duration-300 transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
            <h2 className="text-xl font-bold mt-5 mb-2">Oil Change</h2>
            <p>Additional information about another car or features.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-lg p-6 mt-5 mb-2 w-full sm:w-1/4 ">
            <div
              className="h-64 bg-cover bg-center  w-full transition-transform duration-300 transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1702146713922-613313be011d?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
            <h2 className="text-xl font-bold mt-5 mb-2">Alignment</h2>
            <p>More car-related content, like pricing or special offers.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
