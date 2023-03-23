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

function Blogers() {
  return (
    <div>
      {/* blogger cards  */}
      <section className=" py-10 lg:container m-auto">
        <h1 className="text-center font-bold text-4xl mb-10"> БЛОГЕРЫ </h1>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5">
          {/* FOZILOV */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Илхом</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all  "
              src={fozilov}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 216k</span>
              </div>
              <div>
                <YouTubeIcon />
                <span className="hidden md:block"> 9.57k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 50k</span>
              </div>
            </div>
          </div>
          {/* Dilnaze */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Дилноза</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all "
              src={Dilnaze}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 11k</span>
              </div>

              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 5k</span>
              </div>
            </div>
          </div>
          {/* ZANJABIL */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Матеош</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all "
              src={ZANJABIL}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 262k</span>
              </div>
              <div>
                <YouTubeIcon /> <span className="hidden md:block"> 158k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 150k</span>
              </div>
            </div>
          </div>
          {/* JONON */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Jonon</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={Jonon}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 260k</span>
              </div>
              <div>
                <YouTubeIcon /> <span className="hidden md:block"> 57k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 70k</span>
              </div>
            </div>
          </div>
          {/* AZIZ & RAHIMA */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Aziz & Rahima</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={azizRahima}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 729k</span>
              </div>
              <div>
                <YouTubeIcon /> <span className="hidden md:block"> 17k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 450k</span>
              </div>
            </div>
          </div>
          {/* ZARKA */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Зарина</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={zarka}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 255k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 150k</span>
              </div>
            </div>
          </div>
          {/* Фаридун */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Фаридун</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={favik}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 313k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 150k</span>
              </div>
            </div>
          </div>
          {/* Малохат */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Малохат</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={selena}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 185k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 22k</span>
              </div>
            </div>
          </div>
          {/* Манучехр */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Манучехр</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={manucher55}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 26,4k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 14k</span>
              </div>
            </div>
          </div>
          {/* Насиба */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Насиба</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={nasiba}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 11,1k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 5k</span>
              </div>
            </div>
          </div>
          {/* Рафаэль */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Рафаэль</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={rafael}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 249k</span>
              </div>
              <div>
                <YouTubeIcon />
                <span className="hidden md:block"> 113k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 150k</span>
              </div>
            </div>
          </div>
          {/* Ёсамин */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Ёсаминбону</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={Yosamin}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 35,4k</span>
              </div>
            </div>
          </div>
          {/* Некру */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Некру</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={nek}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 634kk</span>
              </div>
              <div>
                <YouTubeIcon />
                <span className="hidden md:block"> 58,8k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 619,2k</span>
              </div>
            </div>
          </div>
          {/* Муатара */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Муатара</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={tara}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 320k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 194k</span>
              </div>
            </div>
          </div>
          {/* azik */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Азиз</h1>
            <img
              className=" m-auto md:active:scale-150 transition-all"
              src={azik}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon />
                <span className="hidden md:block"> 246k</span>
              </div>
              <div>
                <LibraryMusicIcon />
                <span className="hidden md:block"> 150k</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogers;
