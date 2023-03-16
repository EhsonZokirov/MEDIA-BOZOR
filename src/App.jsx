import { Button } from "@mui/material";
import React from "react";
import logo from "./img/logo.png";
import CampaignIcon from "@mui/icons-material/Campaign";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import MicIcon from "@mui/icons-material/Mic";
import fozilov from "./img/Fozilov.PNG";
import nasiba from "./img/Nasiba.JPG";
import ZANJABIL from "./img/ZANJABIL.JPG";
import Jonon from "./img/JONON.PNG";
import azizRahima from "./img/AZIZ & Rahima.PNG";
import zarka from "./img/ZARKA.PNG";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
function App() {
  return (
    <div className="">
      <nav className="flex bg-[#CC0909] sm:font-bold text-white p-5 justify-center list-none gap-1 xs:gap-10 sm:gap-20 md:gap-28">
        <li className="hover:text-slate-800 cursor-pointer transition">
          БЛОГЕРЫ
        </li>
        <li className="hover:text-slate-800 cursor-pointer transition">
          КЛИЕНТЫ
        </li>
        <li className="hover:text-slate-800 cursor-pointer transition">
          ПАРТНЁРЫ
        </li>
        <li className="hover:text-slate-800 cursor-pointer transition">
          КОНТАКТЫ
        </li>
      </nav>
      {/*  */}
      <section className="container  mx-auto md:py-[5.99%] bg-slate-100">
        <div className=" flex items-center justify-center">
          <img
            className=" w-[15% active:scale-150 transition-all]"
            src={logo}
            alt="logo"
          />
          <div className="font-bold text-[#CC0909] md:text-5xl sm:text-3xl xs:text-xs text-[15px]">
            MEDIA <br /> BOZOR
          </div>
        </div>
        <div className="w-[60%] m-auto text-center mt-[40px]">
          <h1 className="font-bold md:text-5xl sm:text-3xl xs:text-md ">
            Увлеченная команда видеоблогеров и профессионалов рекламы
          </h1>
          <p className="text-[10px]  md:text-[20px] my-10">
            Мы реализуем рекламные проекты у блогеров, создавая решения для
            достижения наилучшего результата. Наши проекты повышают лояльность к
            бренду и увеличивают продажи.
          </p>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "25%" }}
            className="animate-pulse"
          >
            ТОП
          </Button>
        </div>
      </section>
      {/*  */}
      <section className="my-16">
        <h1 className="text-center font-bold text-2xl md:text-4xl my-20">
          Работая с нами, вы получаете:
        </h1>
        <div className="slide-top grid sm:grid-cols-2 lg:grid-cols-3 text-center w-[70%] m-auto gap-28 my-10">
          <div className="slide-top">
            <div>
              <CampaignIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Надежного
              <span className="font-bold"> партнера, которому доверяют</span>
              крупные компании и известные бренды
            </p>
          </div>
          <div className="slide-top">
            <div>
              <WorkHistoryIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Тот результат,
              <span className="font-bold"> который вы хотите от рекламы</span>,
              за те деньги, которые готовы отдать
            </p>
          </div>
          <div className="slide-top">
            <div>
              <VolunteerActivismIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Cамый
              <span className="font-bold"> эффективный способ размещения</span>у
              блогеров
            </p>
          </div>
          <div className="slide-top">
            <div>
              <ThumbUpIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Охват любой аудитории с
              <span className="font-bold"> максимально высокой конверсией</span>
            </p>
          </div>
          <div>
            <div className="slide-top">
              <SpatialAudioOffIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Возможность
              <span className="font-bold"> создать индивидуальное шоу </span>
              под ваш продукт
            </p>
          </div>
          <div className="slide-top">
            <div>
              <MicIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Возможность привлечь в рекламную кампанию
              <span className="font-bold"> любого блогера Таджнета</span>
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" bg-slate-100 py-10">
        <h1 className="text-center font-bold text-4xl mb-10"> БЛОГЕРЫ </h1>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5">
          {/* FOZILOV */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 cursor-pointer border rounded-md bg-white md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>ILhomjon</h1>
            <img
              className=" m-auto active:scale-150 transition-all  "
              src={fozilov}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon /> 216k
              </div>
              <div>
                <YouTubeIcon /> 9.57k
              </div>
              <div>
                <LibraryMusicIcon /> 50k
              </div>
            </div>
          </div>
          {/* Nasiba */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer border rounded-md bg-white md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Nasiba</h1>
            <img
              className=" m-auto active:scale-150 transition-all "
              src={nasiba}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon /> 11k
              </div>

              <div>
                <LibraryMusicIcon /> 5k
              </div>
            </div>
          </div>
          {/* ZANJABIL */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer border rounded-md bg-white md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>ZanjabilBro</h1>
            <img
              className=" m-auto active:scale-150 transition-all "
              src={ZANJABIL}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon /> 262k
              </div>
              <div>
                <YouTubeIcon /> 158k
              </div>
              <div>
                <LibraryMusicIcon /> 150k
              </div>
            </div>
          </div>
          {/* JONON */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer border rounded-md bg-white md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Jonon</h1>
            <img
              className=" m-auto active:scale-150 transition-all"
              src={Jonon}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon /> 260k
              </div>
              <div>
                <YouTubeIcon /> 57k
              </div>
              <div>
                <LibraryMusicIcon /> 70k
              </div>
            </div>
          </div>
          {/* AZIZ & RAHIMA */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer border rounded-md bg-white md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Aziz & Rahima</h1>
            <img
              className=" m-auto active:scale-150 transition-all"
              src={azizRahima}
              alt="IMG"
            />
            <div className="p-2 flex  justify-evenly">
              <div>
                <InstagramIcon /> 729k
              </div>
              <div>
                <YouTubeIcon /> 17k
              </div>
              <div>
                <LibraryMusicIcon /> 450k
              </div>
            </div>
          </div>
          {/* ZARKA */}
          <div className="m-auto hover:text-[#CC0909] hover:scale-105 items-center cursor-pointer border rounded-md bg-white md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
            <h1>Zarka</h1>
            <img
              className=" m-auto active:scale-150 transition-all"
              src={zarka}
              alt="IMG"
            />
            <div className="p-2 flex justify-evenly">
              <div>
                <InstagramIcon /> 255k
              </div>
              <div>
                <LibraryMusicIcon /> 150k
              </div>
            </div>
          </div>
        </div>
        {/* ALL BLOGGERS BUTTON */}
        <div className="m-auto text-center mt-20">
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{ width: "50%", fontFamily: "unset" }}
          >
            ВСЕ БЛОГЕРЫ
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
