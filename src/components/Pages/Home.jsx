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
import humo from "../img/Humo_logo.png";
import kayhon from "../img/kayhon.png";
import kfc from "../img/Kfc_logo.png";
import siyoma from "../img/siyoma.png";
import tamosho from "../img/tamosho.jfif";
import megafon from "../img/мегафон.png";
import alif from "../img/alif_en.png";
import { Link } from "react-router-dom";
import Cards from "../Cards";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import LanguageIcon from "@mui/icons-material/Language";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ru from "../img/russia.png";
import usa from "../img/usa.png";
import tj from "../img/tajikistan.png";

const actions = [
  { icon: <img src={ru} />, name: "Russian" },
  { icon: <img src={usa} />, name: "English" },
  { icon: <img src={tj} />, name: "Tajik" },
];
function Home() {
  let sovet = () => {
    return alert(`
       +992 886 47 1212 
    занг бза чақ чақ менем`);
  };

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 16,
          height: 360,
          transform: "translateZ(0px)",
          flexGrow: 1,
          zIndex: "9",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<LanguageIcon fontSize="large" />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
      <div className=" bg-[#ffffff4a] md:w-[80%] m-auto pt-10">
        <section className="py-[7%] lg:container m-auto">
          <div className=" flex items-center justify-center">
            <img
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className=" lg:w-[15%]"
              src={logo}
              alt="logo"
            />
            <div
              data-aos="flip-up"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="font-bold text-[#CC0909] md:text-5xl text-5xl"
            >
              MEDIA <br /> BOZOR
            </div>
          </div>
          <div className="px-5 md:w-[60%] m-auto text-center mt-[40px]">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-bold md:text-[35px] sm:text-3xl xs:text-md "
            >
              Увлеченная команда видеоблогеров и профессионалов рекламы
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1800"
              className="text-[10px]  md:text-[15px] my-10"
            >
              Мы реализуем рекламные проекты у блогеров, создавая решения для
              достижения наилучшего результата. Наши проекты повышают лояльность
              к бренду и увеличивают продажи.
            </p>
            <Button
              data-aos="fade-up"
              data-aos-duration="2000"
              variant="contained"
              color="error"
              sx={{ width: "50%" }}
              className="animate-pulse"
              onClick={() => {
                sovet();
              }}
            >
              СОВЕТ
            </Button>
          </div>
        </section>
        {/* work s nami */}
        <section className="container m-auto my-16">
          <h1 className="text-center font-bold text-2xl md:text-4xl my-20">
            Работая с нами, вы получаете:
          </h1>
          <div className=" grid grid-cols-2 lg:grid-cols-3 text-center gap-10 md:w-[70%] m-auto md:gap-28 my-10">
            <div data-aos="flip-up" className="">
              <div>
                <CampaignIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Надежного
                <span className="font-bold"> партнера, которому доверяют </span>
                крупные компании и известные бренды
              </p>
            </div>
            <div data-aos="flip-down" className="">
              <div>
                <WorkHistoryIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Тот результат,
                <span className="font-bold">который вы хотите от рекламы</span>,
                за те деньги, которые готовы отдать
              </p>
            </div>
            <div data-aos="flip-up" className="">
              <div>
                <VolunteerActivismIcon
                  color="error"
                  sx={{ fontSize: "100px" }}
                />
              </div>
              <p className="text-[15px] md:text-md">
                Cамый
                <span className="font-bold">эффективный способ размещения</span>
                у блогеров
              </p>
            </div>
            <div data-aos="flip-up" className="">
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
            <div data-aos="flip-down">
              <div className="">
                <SpatialAudioOffIcon color="error" sx={{ fontSize: "100px" }} />
              </div>
              <p className="text-[15px] md:text-md">
                Возможность
                <span className="font-bold"> создать индивидуальное шоу </span>
                под ваш продукт
              </p>
            </div>
            <div data-aos="flip-up" className="">
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
            <Link to="/user/1/">
              <Cards
                img={fozilov}
                name="Илхом"
                inst="216k"
                youtube="9.58k"
                tiktok="50k"
              />
            </Link>
            {/* Dilnaze */}
            <Link to="/user/5">
              <Cards
                img={Dilnaze}
                name="Дилноза"
                inst="11k"
                youtube="0"
                tiktok="5k"
              />
            </Link>
            {/* ZANJABIL */}
            <Cards
              img={ZANJABIL}
              name="ZanjabilBro"
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
          </div>
          {/* ALL BLOGGERS BUTTON */}
          <div data-aos="zoom-in-up" className="m-auto text-center mt-20">
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
