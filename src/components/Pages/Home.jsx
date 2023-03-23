import React from "react";
import { Button } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import MicIcon from "@mui/icons-material/Mic";
import logo from "../img/logo.png";
import fozilov from "../img/Fozilov.jpg";
import Dilnaze from "../img/Dilnaze.jpg";
import ZANJABIL from "../img/ZANJABIL.JPG";
import Jonon from "../img/JONON.PNG";
import azizRahima from "../img/AZIZ & Rahima.PNG";
import zarka from "../img/ZARKA.PNG";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import humo from "../img/Humo_logo.png";
import kayhon from "../img/kayhon.png";
import kfc from "../img/Kfc_logo.png";
import siyoma from "../img/siyoma.png";
import tamosho from "../img/tamosho.jfif";
import megafon from "../img/мегафон.png";
import alif from "../img/alif_en.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className=" bg-[#ffffff4a] md:w-[80%] m-auto pt-10">
        <section className="py-[7%] lg:container m-auto">
          <div className=" flex items-center justify-center">
            <img className=" lg:w-[15%]" src={logo} alt="logo" />
            <div className="font-bold text-[#CC0909] md:text-5xl text-5xl">
              MEDIA <br /> BOZOR
            </div>
          </div>
          <div className="px-5 md:w-[60%] m-auto text-center mt-[40px]">
            <h1 className="font-bold md:text-[35px] sm:text-3xl xs:text-md ">
              Увлеченная команда видеоблогеров и профессионалов рекламы
            </h1>
            <p className="text-[10px]  md:text-[15px] my-10">
              Мы реализуем рекламные проекты у блогеров, создавая решения для
              достижения наилучшего результата. Наши проекты повышают лояльность
              к бренду и увеличивают продажи.
            </p>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "50%" }}
              className="animate-pulse"
            >
              СОВЕТ
            </Button>
          </div>
        </section>
        {/*  */}
        <section className="container m-auto my-16">
          <h1 className="text-center font-bold text-2xl md:text-4xl my-20">
            Работая с нами, вы получаете:
          </h1>
          <div className=" grid grid-cols-2 lg:grid-cols-3 text-center gap-10 md:w-[70%] m-auto md:gap-28 my-10">
            <div className="">
              <div>
                <CampaignIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Надежного
                <span className="font-bold"> партнера, которому доверяют </span>
                крупные компании и известные бренды
              </p>
            </div>
            <div className="">
              <div>
                <WorkHistoryIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Тот результат,
                <span className="font-bold">
                  {" "}
                  который вы хотите от рекламы{" "}
                </span>
                , за те деньги, которые готовы отдать
              </p>
            </div>
            <div className="">
              <div>
                <VolunteerActivismIcon
                  color="error"
                  sx={{ fontSize: "100px" }}
                />
              </div>
              <p className="text-[15px] md:text-md">
                Cамый
                <span className="font-bold">
                  {" "}
                  эффективный способ размещения{" "}
                </span>
                у блогеров
              </p>
            </div>
            <div className="">
              <div>
                <ThumbUpIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Охват любой аудитории с
                <span className="font-bold">
                  максимально высокой конверсией
                </span>
              </p>
            </div>
            <div>
              <div className="">
                <SpatialAudioOffIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Возможность
                <span className="font-bold"> создать индивидуальное шоу </span>
                под ваш продукт
              </p>
            </div>
            <div className="">
              <div>
                <MicIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Возможность привлечь в рекламную кампанию
                <span className="font-bold"> любого блогера Таджнета</span>
              </p>
            </div>
          </div>
        </section>
        {/* blogger cards  */}
        <section className=" py-10 lg:container m-auto">
          <h1 className="text-center font-bold text-4xl mb-10"> БЛОГЕРЫ </h1>
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5">
            {/* FOZILOV */}
            <div className="m-auto hover:text-[#CC0909] hover:scale-105 cursor-pointer  rounded-md bg-red-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
              <h1>ILhomjon</h1>
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
              <h1>Dilnaze</h1>
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
              <h1>ZanjabilBro</h1>
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
              <h1>Zarka</h1>
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
          </div>
          {/* ALL BLOGGERS BUTTON */}
          <div className="m-auto text-center mt-20">
            <Link to="/Blogers">
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ width: "50%", fontFamily: "unset" }}
              >
                ВСЕ БЛОГЕРЫ
              </Button>
            </Link>
          </div>
        </section>
        {/* clients */}
        <section className="container m-auto py-20">
          <h1 className="text-center pb-10 font-bold text-3xl">
            НАШИ КЛИЕНТЫ:
          </h1>
          <section className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[50%] lg:w-[75%] m-auto">
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
          </section>
        </section>
      </div>
    </div>
  );
}

export default Home;
