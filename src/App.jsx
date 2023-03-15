import { Button } from "@mui/material";
import React from "react";
import logo from "./img/logo.png";
import CampaignIcon from "@mui/icons-material/Campaign";
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
      <section>
        <h1 className="text-center font-bold text-4xl my-10">
          Работая с нами, вы получаете:
        </h1>
        <div className="grid grid-cols-3 text-center w-[70%] m-auto gap-60">
          <div>
            <div>
              <CampaignIcon />
            </div>
            <p>
              Возможность привлечь в рекламную кампанию{" "}
              <span className="font-bold">любого блогера Таджнета</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
