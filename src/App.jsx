import { Button } from "@mui/material";
import React from "react";
import logo from "./img/logo.png";
import CampaignIcon from "@mui/icons-material/Campaign";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import MicIcon from "@mui/icons-material/Mic";
function App() {
  return (
    <div className="">
      <nav className="flex bg-[#CC0909] font-bold text-white p-5 justify-center list-none gap-28">
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
      <section className="container mx-auto md:py-[5.99%] bg-slate-100">
        <div className=" flex items-center justify-center">
          <img className=" w-[15%]" src={logo} alt="logo" />
          <div className="font-bold text-[#CC0909] text-5xl">
            MEDIA <br /> BOZOR
          </div>
        </div>
        <div className="w-[60%] m-auto text-center mt-[40px]">
          <h1 className="font-bold text-5xl ">
            Увлеченная команда видеоблогеров и профессионалов рекламы
          </h1>
          <p className=" my-10">
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
      <section className="my-10">
        <h1 className="text-center font-bold text-4xl ">
          Работая с нами, вы получаете:
        </h1>
        <div className="grid grid-cols-3 text-center w-[70%] m-auto gap-20">
          <div>
            <div>
              <CampaignIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Надежного
              <span className="font-bold"> партнера, которому доверяют</span>
              крупные компании и известные бренды
            </p>
          </div>
          <div>
            <div>
              <WorkHistoryIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Тот результат,
              <span className="font-bold"> который вы хотите от рекламы</span>,
              за те деньги, которые готовы отдать
            </p>
          </div>
          <div>
            <div>
              <VolunteerActivismIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Cамый
              <span className="font-bold"> эффективный способ размещения</span>у
              блогеров
            </p>
          </div>
          <div>
            <div>
              <ThumbUpIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Охват любой аудитории с
              <span className="font-bold"> максимально высокой конверсией</span>
            </p>
          </div>
          <div>
            <div>
              <SpatialAudioOffIcon color="error" sx={{ fontSize: "100px" }} />
            </div>
            <p className="text-lg">
              Возможность
              <span className="font-bold"> создать индивидуальное шоу</span>
              под ваш продукт
            </p>
          </div>
          <div>
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
    </div>
  );
}

export default App;
