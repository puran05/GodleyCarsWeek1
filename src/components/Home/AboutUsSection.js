import carimagetwo from "../../assets/car2.png";

const AboutUsSection = () => (
  <section className="h-screen flex flex-wrap items-center justify-center py-20">
    <div className="w-full md:w-1/2 lg:w-1/2">
      <img src={carimagetwo} className="w-full h-auto"></img>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 px-10 ">
      <h2 className="text-center text-3xl font-customFont pt-7">About Us </h2>
      <p className="pt-7 font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
        nisl ac leo laoreet hendrerit. Fusce tristique, neque sit amet tincidunt
        aliquam, dolor mauris fermentum arcu, ut pharetra magna erat nec dolor.
        Vivamus at neque auctor, consectetur lacus a, vehicula erat. Integer
        pretium, felis eget consequat elementum, libero urna cursus libero, eget
        finibus justo ex vel lectus. Nam in elit eget urna feugiat eleifend.
        Maecenas ut odio sit amet felis aliquet facilisis. Nullam quis eros ac
        risus ullamcorper tincidunt.
      </p>
    </div>
  </section>
);

export default AboutUsSection;
