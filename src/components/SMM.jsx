import React from "react";
import Abdullo from "../components/img/ABDULLO (RUZZKE).jpg";
import Marsu from "../components/img/MARSU.jpg";
import Abunasr from "../components/img/ABUNASR.jpg";
import Nasiba from "../components/img/Nasiba.JPG";
import Parvina from "../components/img/Parvina.jpg";
import Mavzuna from "../components/img/Mavzuna.jpg";
import Akmal from "../components/img/Akmal.jpg";
import Sofia from "../components/img/SOFIA.jpg";
function SMM() {
  return (
    <div>
      <section className="pt-32 m-auto">
        <div className="text-center pb-10 ">
          <h1 className=" md:text-2xl">
            <span className="font-semibold md:text-4xl"> SMM </span> —
            сокращение от social media marketing, <br /> что в свою очередь
            переводится как маркетинг в социальных сетях.
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-[80%] m-auto py-10">
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Abdullo} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Adbullo</h1>
              <p className="text-[10px]">dar orzui gashnich va ukrob</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Marsu} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Marsu</h1>
              <p className="text-[10px]"> ЛИЧНЫЙ БЛОГ </p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Abunasr} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Abunasr</h1>
              <p className="text-[10px]">Self development</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Nasiba} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Nasiba</h1>
              <p className="text-[10px]">Блогер / SMM</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Parvina} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Parvina</h1>
              <p className="text-[10px]">Совмешаю SMM и Медицину</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Mavzuna} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Mavzuna</h1>
              <p className="text-[10px]">Делаю ВАУ-ПАУ контент</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Sofia} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">SOFIYA</h1>
              <p className="text-[10px]">от эстетики до продаж</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
          <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Akmal} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Akmal</h1>
              <p className="text-[10px]">искусство продажи</p>
            </div>
            <div className="">
              <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">ПОДРОБНЕЕ</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SMM;
