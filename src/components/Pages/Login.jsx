import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

import React from "react";

function Login() {
  const { t } = useTranslation();
  return (
    <div className="h-[91vh] pt-32">
      <form
        requared
        data-aos="zoom-in"
        className=" w-[95%] xs:w-[80%] sm:w-[60%] md:w-[70%] lg:w-[30%] rounded-md px-5 md:py-10  m-auto bg-[#ffffff53] "
      >
        <h1 className="text-center text-[30px] py-5 font-mono">{t("ВХОД")}</h1>
        <div className="grid gap-2 sm:px-5">
          <TextField required variant="standard" label={t("Логин")} />
          <TextField required variant="standard" label={t("Пароль")} type="password" />
        </div>
        <div className="flex flex-wrap gap-5 m-auto text-center justify-around sm:justify-between sm:px-5 py-5 items-center">
          <label className="flex cursor-pointer gap-1">
            <input type="checkbox" />
            {t("Запомнить")}
          </label>
          <p className="cursor-pointer hover:text-blue-500 underline transition-all ">
            {t("Забыли пароль")} ?
          </p>
        </div>
        <div className="w-[90%] py-5 m-auto  ">
          <button
            type="submit"
            className="flex rounded-[5px] m-auto justify-center w-[100%] py-2 bg-red-500  hover:bg-indigo-500 hover:text-white transition-all "
          >
            {t("Войти")}
          </button>
        </div>
        <div className="text-center text-[12px] sm:text-[15px] pb-5">
          {t("У вас нету аккаунта")} ?{" "}
          <span className="underline hover:text-blue-500 cursor-pointer transition-all">
            {" "}
            {t("Зарегистрироваться")}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
