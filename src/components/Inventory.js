import React from "react";

function Inventory() {
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
        <div className="flex w-full justify-center">
          <form className="flex w-3/4 ml-5">
            <div className="relative w-full">
              <input
                className="shadow apperance-none border w-full rounded-sm focus:outline-none py-3 px-10 bg-gray-100"
                for="carmodel"
                placeholder="Enter make model "
              ></input>
              <div
                class="absolute inset-y-3 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <i class="fas fa-search text-gray-400"></i>
              </div>
            </div>
            <button className="ml-3 px-4 py-3 border border-black text-lg">
              {" "}
              Search{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Inventory;
