import React from "react";
import fozilov from "../img/Fozilov.jpg";
import Dilnaze from "../img/Dilnaze.jpg";
import ZANJABIL from "../img/ZANJABIL.JPG";
import Jonon from "../img/JONON.PNG";
import azizRahima from "../img/AZIZ & Rahima.PNG";
import zarka from "../img/ZARKA.PNG";
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
import NazarievaJas from "../img/Nazarieva Jasmina.jpg";
import Bahora from "../img/Ruzieva Bahora.jpg";
import Mirvais from "../img/Mirvais.jpg";
import { useTranslation } from "react-i18next";

function Blogers() {
  const { t } = useTranslation();
  
  let bloggers = [
    {
      ///////////////////////////////////// FOZILOV
      name: t("Илхом"),
      img: fozilov,
      inst: "216k",
      youtube: "10k",
      tiktok: "50k",
      gender: "male",
      instaNik: "fozilov",
    },
    {
      ///////////////////////////////////// Dilnaze
      name: t("Дилноза"),
      img: Dilnaze,
      inst: "11k",
      youtube: "0k",
      tiktok: "5k",
      gender: "female",
    },
    {
      ///////////////////////////////////// Zanjabil Bro
      name: t("Занчабил Бро"),
      img: ZANJABIL,
      inst: "262k",
      youtube: "160k",
      tiktok: "150k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Джонон
      name: t("Джонон"),
      img: Jonon,
      inst: "265k",
      youtube: "57k",
      tiktok: "70k",
      gender: "female",
    },
    {
      ///////////////////////////////////// Aziz Rahima
      name: t("Азиз & Рахима"),
      img: azizRahima,
      inst: "730k",
      youtube: "20k",
      tiktok: "450k",
      gender: "Famaly",
    },
    {
      ///////////////////////////////////// Zarka
      name: t("Зарина"),
      img: zarka,
      inst: "255k",
      youtube: "0k",
      tiktok: "150k",
      gender: "female",
    },
    {
      ///////////////////////////////////// Favik
      name: t("Фаридун"),
      img: favik,
      inst: "315k",
      youtube: "0k",
      tiktok: "150k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Малоҳат
      name: t("Малохат"),
      img: selena,
      inst: "185k",
      youtube: "0k",
      tiktok: "22k",
      gender: "female",
    },
    {
      ///////////////////////////////////// Manucher 55
      name: t("Манучер"),
      img: manucher55,
      inst: "27k",
      youtube: "6k",
      tiktok: "14k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Nasiba 1178
      name: t("Насиба"),
      img: nasiba,
      inst: "11.2k",
      youtube: "0k",
      tiktok: "5k",
      gender: "female",
    },
    {
      ///////////////////////////////////// РАФАЕЛ ГУЛОВ
      name: t("Рафаел"),
      img: rafael,
      inst: "250k",
      youtube: "113k",
      tiktok: "150k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Ёсаминбону
      name: t("Ёсаминбону"),
      img: Yosamin,
      inst: "35.5k",
      youtube: "0",
      tiktok: "0",
      gender: "female",
    },
    {
      ///////////////////////////////////// Nek
      name: t("Некру"),
      img: nek,
      inst: "800k",
      youtube: "60k",
      tiktok: "620k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Тара
      name: t("Тара"),
      img: tara,
      inst: "500k",
      youtube: "0",
      tiktok: "200k",
      gender: "female",
    },
    {
      ///////////////////////////////////// AZIK vine
      name: t("Азиз"),
      img: azik,
      inst: "247k",
      youtube: "0",
      tiktok: "350k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Баҳора
      name: t("Бахора"),
      img: Bahora,
      inst: "327k",
      youtube: "0",
      tiktok: "1,3m",
      gender: "female",
    },
    {
      ///////////////////////////////////// Мирвайс
      name: t("Мирвайс"),
      img: Mirvais,
      inst: "100k",
      youtube: "3",
      tiktok: "20k",
      gender: "male",
    },
    {
      ///////////////////////////////////// Jasmina
      name: t("Ясмина"),
      img: NazarievaJas,
      inst: "5.2k",
      youtube: "0",
      tiktok: "5k",
      gender: "female",
    },
  ];
  
  return (
    <div>
      {/* blogger cards  */}
      <section className=" py-20 lg:container m-auto">
        <h1 className="text-center font-bold text-4xl mb-10">
          {" "}
          {t("БЛОГЕРЫ")}{" "}
        </h1>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5">
          {bloggers.map((e) => {
            return (
              <Cards
                key={e.id}
                name={e.name}
                img={e.img}
                inst={e.inst}
                youtube={e.youtube}
                tiktok={e.tiktok}
              />
            );
          })}
        </div>
      </section>
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[80%] px-5 gap-5"></div>
    </div>
  );
}
export default Blogers;
