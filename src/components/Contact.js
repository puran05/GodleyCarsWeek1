import React from "react";

function Contact() {
  return (
    <>
      <section>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/4 pl-[10%]">
            <h1 class="text-start text-black text-4xl   pt-5">Contact Us </h1>
            <p className="text-start mt-5">
              Fill out the form below and we'll contact you shortly.
            </p>
            <div className="w-full">
              <form className="w-1/2 mt-7">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold text-left mb-2"
                    for="firstname"
                  >
                    Firstname
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline "
                    for="firstname"
                  ></input>
                </div>
                <div className="mb-4">
                  <label class="block text-gray-700 text-sm font-bold text-left mb-2">
                    Last Name{" "}
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-orange-600"
                    for="lastname"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-left mb-2">
                    Phone Num*
                  </label>
                  <input className="shadow appearance-none border w-full rounded  px-3 py-2 focus:outline-none focus:shadow-orange-600"></input>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-left mb-2">
                    Comments
                  </label>
                  <textarea className="shadow appearance-none border w-full rounded  px-3 py-2 focus:outline-none focus:shadow-orange-600 min-h-30"></textarea>
                </div>
                <div className="text-left">
                  <button className="bg-custom-orange rounded-full  px-8 py-2 mt- text-lg text-white shadow-xl font-customFont tracking-wider">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-10 pl-[10%] lg:pl-0 lg:pt-5">
            <h2 className="text-left text-2xl pb-3 font-bold">About US </h2>
            <div className="flex">
              <i className="fa-solid fa-phone pt-2 pr-2"></i>
              <p className="text-lg font-bold">Hours:</p>
              <p className="pt-1 pl-2">Mon-Sat</p>
            </div>
            <div className="flex pt-2">
              <i className="fa-solid fa-clock pt-2 pr-2"></i>
              <p className="text-lg font-bold">Phone Num:</p>
              <p className="pt-1 pl-2">123-123-1232</p>
            </div>
            <div className="flex pt-2">
              <i className="fa-solid fa-envelope pt-2 pr-2"></i>
              <p className="text-lg font-bold">Email</p>
              <p className="pt-1 pl-2">call@gmail.com</p>
            </div>
            <div className="mt-10 text-left">
              <h2 className="text-left text-2xl pb-3 font-bold">Address</h2>
              <p>One twoo st</p>
              <p> Dallas, Tx 7777</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
