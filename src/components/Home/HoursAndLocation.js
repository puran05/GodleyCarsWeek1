import Map from "../Map";

const HoursAndLocation = () => (
  <section className="flex flex-wrap m-4 h-screen w-full ">
    <div className=" w-full md:w-1/2 lg:w-1/2 justify-center text-center">
      <h2 className=" text-5xl font-customFont py-12"> hours of operation</h2>
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
      <h2 className="text-center text-5xl font-customFont py-12"> Location</h2>
      <div>
        <Map />
      </div>
    </div>
  </section>
);

export default HoursAndLocation;
