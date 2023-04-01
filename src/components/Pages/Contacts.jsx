import { Button, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
// import logo from "../img/logo.png";
function Contacts() {
  const { t } = useTranslation();
  return (
    <div>
      <h1
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="text-4xl font-bold text-center pt-[86px]"
      >
        {t("Контакты")}
      </h1>
      {/* section */}
      <section className="py-[143px]">
        <form className="grid m-auto px-10 md:w-[40%]">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className=" font-mono text-lg text-center "
          >
            {t("Напишите нам")}:
          </h1>
          <TextField
            data-aos="fade-right"
            required
            variant="standard"
            label={t("Имя")}
          />
          <TextField
            data-aos="fade-left"
            required
            variant="standard"
            label={t("Телефон")}
            type="tel"
          />
          <TextField
            data-aos="fade-right"
            required
            variant="standard"
            label={t("Эл. Адрес")}
          />
          <TextField
            data-aos="fade-left"
            required
            variant="filled"
            label={t("Сообщение")}
            multiline
          />

          <NavLink data-aos="fade-up" data-aos-duration="500" to="NoMatch">
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ bgcolor: "purple" }}
            >
              {t("Отправить")}
            </Button>
          </NavLink>
        </form>
      </section>

      {/* section */}
    </div>
  );
}

export default Contacts;
