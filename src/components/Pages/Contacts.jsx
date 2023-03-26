import { Button, TextField } from "@mui/material";
import React from "react";
// import logo from "../img/logo.png";
function Contacts() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-[86px]">Контакты</h1>
      {/* section */}
      <section className="py-[143px]">
        <form className="grid m-auto px-10 md:w-[40%]">
          <h1 className=" font-mono text-lg text-center ">Напишите нам:</h1>
          <TextField required variant="standard" label="Имя" />
          <TextField required variant="standard" label=" Телефон" type="tel" />
          <TextField required variant="standard" label=" Эл. Адрес" />
          <TextField required variant="filled" label="Сообщение" multiline />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ bgcolor: "purple" }}
          >
            Отправить
          </Button>
        </form>
      </section>

      {/* section */}
    </div>
  );
}

export default Contacts;
