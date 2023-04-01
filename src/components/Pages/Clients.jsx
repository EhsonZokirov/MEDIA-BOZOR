import React from "react";
import humo from "../img/Humo_logo.png";
import kayhon from "../img/kayhon.png";
import kfc from "../img/Kfc_logo.png";
import siyoma from "../img/siyoma.png";
import tamosho from "../img/tamosho.jfif";
import megafon from "../img/мегафон.png";
import alif from "../img/alif_en.png";
import { useTranslation } from "react-i18next";
function Clients() {
  const { t } = useTranslation();
  return (
    <div>
      {/* clients */}
      <section
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="container m-auto py-24"
      >
        <h1 className="text-center pb-10 font-bold text-3xl">
          {t("НАШИ КЛИЕНТЫ")}:
        </h1>
        <sect className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:w-[50%] lg:w-[75%] m-auto">
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
