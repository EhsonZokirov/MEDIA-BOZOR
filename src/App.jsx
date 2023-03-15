import React from "react";
import logo from "./img/logo.png";
function App() {
  return (
    <div className="container mx-auto">
      <div className="my-40">
        <div className=" flex items-center justify-center">
          <img className=" w-[15%]" src={logo} alt="logo" />
          <div className="font-bold text-[#CC0909] text-5xl">
            MEDIA <br /> BOZOR
          </div>
        </div>
        <div className="w-[60%] m-auto text-center my-[40px]">
          <h1 className="font-bold text-5xl ">
            Увлеченная команда видеоблогеров и профессионалов рекламы
          </h1>
          <p className=" my-10">
            Мы реализуем рекламные проекты у блогеров, создавая решения для
            достижения наилучшего результата. Наши проекты повышают лояльность к
            бренду и увеличивают продажи.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
