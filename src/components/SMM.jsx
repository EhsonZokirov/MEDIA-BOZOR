import React from "react";
import Abdullo from "../components/img/ABDULLO (RUZZKE).jpg";
import Marsu from "../components/img/MARSU.jpg";
import Abunasr from "../components/img/ABUNASR.jpg";
import Nasiba from "../components/img/Nasiba.JPG";
import Parvina from "../components/img/Parvina.jpg";
import Mavzuna from "../components/img/Mavzuna.jpg";
import Umeda from "../components/img/Umeda.jpg";
function SMM() {
  return (
    <div>
      <section className="pt-32 m-auto">
        <div className="text-center pb-10 ">
          <h1 className="text-2xl">
            <span className="font-semibold text-4xl"> SMM </span> — сокращение
            от social media marketing, <br /> что в свою очередь переводится как
            маркетинг в социальных сетях.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5 w-[80%] m-auto">
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Abdullo} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Adbullo</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Marsu} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Marsu</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Abunasr} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Abunasr</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Nasiba} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Nasiba</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Parvina} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Parvina</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Mavzuna} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Abunasr</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
          <div className="w-[65%] bg-[#ffffff2f] m-auto border border-slate-900 rounded-xl">
            <img className="rounded-t-xl" src={Umeda} alt="Adbullo" />
            <div className="text-center p-3">
              <h1 className=" font-semibold text-lg">Umeda</h1>
              <p>dar orzui gashnich va padar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SMM;
