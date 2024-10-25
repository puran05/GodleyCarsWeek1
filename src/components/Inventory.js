import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerImage from "../assets/servicesBanner.jpg";

function Inventory() {
  const [cars, setCars] = useState([]);
  const [load, setLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const response = await axios.get("/api/cars");
      setCars(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <>
      {/* sale is happening now banner and the awards banner */}
      <section>
        <div className=" bg-yellow-500">
          <h2 className="uppercase sm:text-4xl pt-5 font-extrabold text-2xl">
            instant winter saving{" "}
          </h2>
          <p className="pb-5 font-bold text-xl">
            Browse Our Inventory and Find your ride
          </p>
        </div>
        <div className="flex justify-evenly pt-3 pb-3 items-center bg-slate-50">
          <div>
            <h2>Godley Cars</h2>
            <p className="text-2xl font-semibold">Best Voted dealership 2022</p>
          </div>
          <div className="">
            <p className="text-2xl">Winner of the </p>
            <p className="font-serif">Top cars</p>
            <p className="text-2xl">2024 Inventory</p>
          </div>
        </div>
      </section>
      {/* The search bar and all the cars */}
      <section>
        <div className="flex w-full justify-center mt-5 ">
          <form className="flex w-3/4 ml-5">
            <div className="relative w-full">
              <input
                className="shadow apperance-none border w-full rounded-sm focus:outline-none py-3 px-10 bg-gray-100"
                for="carmodel"
                placeholder="Enter make model "
              ></input>
              <div
                className="absolute inset-y-3 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <i className="fas fa-search text-gray-400"></i>
              </div>
            </div>
            <button className="ml-3 px-4 py-3 border border-black text-lg">
              {" "}
              Search{" "}
            </button>
          </form>
        </div>

        {/* Car cards */}
        <div className="flex flex-wrap justify-center mb-10">
          {cars.map((car) => (
            <div
              key={car._id}
              className="w-full sm:w-1/4 rounded shadow-lg mx-3 mt-5 "
            >
              <img src={BannerImage} alt={`${car.model} ${car.make}`}></img>
              <div className="py-4">
                <div className="font-bold text-md uppercase text-left pl-6">
                  <span className="text-gray-500">{car.year}</span> {car.make}{" "}
                  {car.model}
                </div>
              </div>
              <div className="  pl-3 pr-6 pb-5 text-left">
                <span className="inline-block  text-gray-600 px-3">
                  Price: {car.price}
                </span>
                <span className="inline-block  text-gray-600 px-3">
                  Mileage: {car.mileage}
                </span>
                <span className="inline-block  text-gray-600 px-3">
                  Color: {car.color}
                </span>
              </div>
              <hr />
              <div className="text-left pl-3 py-10">
                <span className="inline-block  text-gray-600 px-3">
                  Status: Available
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Inventory;
