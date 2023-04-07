import React, { useState } from "react";
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
import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import WcIcon from "@mui/icons-material/Wc";
import Groups2Icon from "@mui/icons-material/Groups2";

function Blogers() {
  const { t } = useTranslation();
  let bloggers = [
    ///////////////////////////////////// FOZILOV
    {
      id: 1,
      name: t("Илхом"),
      img: fozilov,
      inst: "216k",
      youtube: "10k",
      tiktok: "50k",
      gender: "male",
    },
    ///////////////////////////////////// Dilnaze
    {
      id: 2,
      name: t("Дилноза"),
      img: Dilnaze,
      inst: "11k",
      youtube: "0k",
      tiktok: "5k",
      gender: "female",
    },
    ///////////////////////////////////// Zanjabil Bro
    {
      id: 3,
      name: t("Занчабил Бро"),
      img: ZANJABIL,
      inst: "262k",
      youtube: "160k",
      tiktok: "150k",
      gender: "male",
    },
    ///////////////////////////////////// Джонон
    {
      id: 4,
      name: t("Джонон"),
      img: Jonon,
      inst: "265k",
      youtube: "57k",
      tiktok: "70k",
      gender: "female",
    },
    ///////////////////////////////////// Aziz Rahima
    {
      id: 5,
      name: t("Азиз & Рахима"),
      img: azizRahima,
      inst: "730k",
      youtube: "20k",
      tiktok: "450k",
      gender: "Famaly",
    },
    ///////////////////////////////////// Zarka
    {
      id: 6,
      name: t("Зарина"),
      img: zarka,
      inst: "255k",
      youtube: "0k",
      tiktok: "150k",
      gender: "female",
    },
    ///////////////////////////////////// Favik
    {
      id: 7,
      name: t("Фаридун"),
      img: favik,
      inst: "315k",
      youtube: "0k",
      tiktok: "150k",
      gender: "male",
    },
    ///////////////////////////////////// Малоҳат
    {
      id: 8,
      name: t("Малохат"),
      img: selena,
      inst: "185k",
      youtube: "0k",
      tiktok: "22k",
      gender: "female",
    },
    ///////////////////////////////////// Manucher 55
    {
      id: 9,
      name: t("Манучер"),
      img: manucher55,
      inst: "27k",
      youtube: "6k",
      tiktok: "14k",
      gender: "male",
    },
    ///////////////////////////////////// Nasiba 1178
    {
      id: 10,
      name: t("Насиба"),
      img: nasiba,
      inst: "11.2k",
      youtube: "0k",
      tiktok: "5k",
      gender: "female",
    },
    ///////////////////////////////////// РАФАЕЛ ГУЛОВ
    {
      id: 11,
      name: t("Рафаел"),
      img: rafael,
      inst: "250k",
      youtube: "113k",
      tiktok: "150k",
      gender: "male",
    },
    ///////////////////////////////////// Ёсаминбону
    {
      id: 12,
      name: t("Ёсаминбону"),
      img: Yosamin,
      inst: "35.5k",
      youtube: "0",
      tiktok: "0",
      gender: "female",
    },
    ///////////////////////////////////// Nek
    {
      id: 13,
      name: t("Некру"),
      img: nek,
      inst: "800k",
      youtube: "60k",
      tiktok: "620k",
      gender: "male",
    },
    ///////////////////////////////////// Тара
    {
      id: 14,
      name: t("Тара"),
      img: tara,
      inst: "500k",
      youtube: "0",
      tiktok: "200k",
      gender: "female",
    },
    ///////////////////////////////////// AZIK vine
    {
      id: 15,
      name: t("Азиз"),
      img: azik,
      inst: "247k",
      youtube: "0",
      tiktok: "350k",
      gender: "male",
    },
    ///////////////////////////////////// Баҳора
    {
      id: 16,
      name: t("Бахора"),
      img: Bahora,
      inst: "327k",
      youtube: "0",
      tiktok: "1,3m",
      gender: "female",
    },
    ///////////////////////////////////// Мирвайс
    {
      id: 17,
      name: t("Мирвайс"),
      img: Mirvais,
      inst: "100k",
      youtube: "3k",
      tiktok: "20k",
      gender: "male",
    },
    ///////////////////////////////////// Jasmina
    {
      id: 18,
      name: t("Ясмина"),
      img: NazarievaJas,
      inst: "5.2k",
      youtube: "0",
      tiktok: "5k",
      gender: "female",
    },
  ];
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // search
  const [search, setSearch] = useState("");
  return (
    <div>
      {/* blogger cards  */}
      <section className=" py-20 lg:container m-auto">
        <h1 className="text-center font-bold text-4xl mb-10">
          {" "}
          {t("БЛОГЕРЫ")}{" "}
        </h1>
        <div className="flex items-center gap-5 justify-center">
          {/* SEARCH DIV */}
          <div className="flex justify-center py-10 items-center">
            <TextField
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              variant="standard"
              size="small"
              color="error"
              label={t("Поиск")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t("Фильтер")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                size="small"
                variant="standard"
                onChange={handleChange}
              >
                <MenuItem value={0}>
                  <Groups2Icon /> {t("ВСЕ БЛОГЕРЫ")}
                </MenuItem>
                <MenuItem value={10}>
                  <MaleIcon color="primary" /> {t("Мужчины")}
                </MenuItem>
                <MenuItem value={20}>
                  <FemaleIcon color="error" /> {t("Женщины")}
                </MenuItem>
                <MenuItem value={30}>
                  <WcIcon color="success" /> {t("Семейные")}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[75%] px-5 gap-5 transition-all">
          {bloggers
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
              return 0;
            })
            .map((e) => {
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
    </div>
  );
}
export default Blogers;
