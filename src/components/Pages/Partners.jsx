import React from "react";
import logo from "../img/logo.png";
import softClub from "../img/softClub.png";
function Partners() {
  return (
    <div className="py-0 md:py-[17.45%]">
      <section className="grid md:grid-cols-3 self-center gap-5 items-center justify-center md:justify-evenly m-auto w-[80%] md:py-16 py-[27.5%]">
        <div className="flex m-auto md:w-[40%] items-center font-bold">
          {" "}
          <img
            className="w-[100px] md:w-[250px] m-auto text-center"
            src={logo}
            alt="logo"
          />{" "}
          <p className="text-3xl md:text-5xl ">
            <span className="text-indigo-600 ">MEDIA</span> <br />
            <span className="text-[#e10909c7]"> BOZOR </span>
          </p>
        </div>
        <div className=" lg:text-8xl m-auto md:text-5xl sm:text-3xl xs:text-5xl text-5xl font-extrabold animate-pulse transition-all text-center">
          +
        </div>
        <div className="m-auto">
          {" "}
          <img
            className="w-[180px] m-auto md:w-[250px] text-center"
            src={softClub}
            alt="logo"
          />{" "}
        </div>
      </section>
    </div>
  );
}

export default Partners;
