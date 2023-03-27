import React from "react";
import fozilov from "../img/Fozilov.jpg";
import Dilnaze from "../img/Dilnaze.jpg";
import ZANJABIL from "../img/ZANJABIL.JPG";
import Jonon from "../img/JONON.PNG";
import azizRahima from "../img/AZIZ & Rahima.PNG";
import zarka from "../img/ZARKA.PNG";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import favik from "../img/FAVIK.jpg";
import nasiba from "../img/Nasiba.JPG";
import selena from "../img/Selena.jpg";
import Yosamin from "../img/Yosamin Musoeva.jpg";
import rafael from "../img/Гулов.jpg";
import manucher55 from "../img/Манучер55.jpg";
import azik from "../img/azik.jpg";
import nek from "../img/nek.jpg";
import tara from "../img/tara.jpg";
import Cards from "../Cards";

function Blogers() {
  return (
    <div>
      {/* blogger cards  */}
      <section className=" py-20 lg:container m-auto">
        <h1 className="text-center font-bold text-4xl mb-10"> БЛОГЕРЫ </h1>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5">
          {/* FOZILOV */}
          <Cards
            img={fozilov}
            name="Илхом"
            inst="216k"
            youtube="9.58k"
            tiktok="50k"
          />
          {/* Dilnaze */}
          <Cards
            img={Dilnaze}
            name="Дилноза"
            inst="11k"
            youtube="0"
            tiktok="5k"
          />
          {/* ZANJABIL */}
          <Cards
            img={ZANJABIL}
            name="Матеош"
            inst="262k"
            youtube="158k"
            tiktok="150k"
          />
          {/* JONON */}
          <Cards
            img={Jonon}
            name="Ҷонон"
            inst="260k"
            youtube="57k"
            tiktok="70k"
          />
          {/* AZIZ & RAHIMA */}
          <Cards
            img={azizRahima}
            name="Азиз ва Раҳима"
            inst="729k"
            youtube="17k"
            tiktok="450k"
          />
          {/* ZARKA */}
          <Cards
            img={zarka}
            name="Зарина"
            inst="255k"
            youtube="0"
            tiktok="150k"
          />
          {/* Фаридун */}
          <Cards
            img={favik}
            name="Фаридун"
            inst="313k"
            youtube="0"
            tiktok="150k"
          />
          {/* Малохат */}
          <Cards
            img={selena}
            name="Малоҳат"
            inst="185k"
            youtube="0"
            tiktok="22k"
          />
          {/* Манучехр */}
          <Cards
            img={manucher55}
            name="Манучеҳр"
            inst="26.4k"
            youtube="6k"
            tiktok="14k"
          />
          {/* Насиба */}
          <Cards
            img={nasiba}
            name="Насиба"
            inst="11.1k"
            youtube="0"
            tiktok="5k"
          />
          {/* Рафаэль */}
          <Cards
            img={rafael}
            name="Рафаел"
            inst="249k"
            youtube="113k"
            tiktok="150k"
          />
          {/* Ёсамин */}
          <Cards
            img={Yosamin}
            name="Ёсаминбону"
            inst="35,5k"
            youtube="0"
            tiktok="0"
          />

          {/* Некру */}
          <Cards
            img={nek}
            name="Некру"
            inst="703k"
            youtube="58.8"
            tiktok="619.2k"
          />
          {/* Муатара */}
          <Cards img={tara} name="Тара" inst="430k" youtube="0" tiktok="200k" />

          {/* azik */}
          <Cards img={azik} name="Азиз" inst="247k" youtube="0" tiktok="350k" />
        </div>
      </section>
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5"></div>
    </div>
  );
}

export default Blogers;
