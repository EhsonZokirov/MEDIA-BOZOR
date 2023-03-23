import React from "react";
import humo from "../img/Humo_logo.png";
import kayhon from "../img/kayhon.png";
import kfc from "../img/Kfc_logo.png";
import siyoma from "../img/siyoma.png";
import tamosho from "../img/tamosho.jfif";
import megafon from "../img/мегафон.png";
import alif from "../img/alif_en.png";
function Clients() {
  return (
    <div>
      {/* clients */}
      <section className="container m-auto py-24">
        <h1 className="text-center pb-10 font-bold text-3xl">НАШИ КЛИЕНТЫ:</h1>
        <sect className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[50%] lg:w-[75%] m-auto">
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={humo}
              alt="humo"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={kayhon}
              alt="kayhon"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={alif}
              alt="alif"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={kfc}
              alt="kfc"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={siyoma}
              alt="siyoma"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={megafon}
              alt="megafon"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 w-[150px] transition-all"
              src={tamosho}
              alt="tamosho"
            />
          </div>
          <div className="m-auto flex items-center">
            <img
              className="m-auto hover:scale-110 transition-all"
              src={humo}
              alt="humo"
            />
          </div>
        </sect>
      </section>
    </div>
  );
}

export default Clients;
