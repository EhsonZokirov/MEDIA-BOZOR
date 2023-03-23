import { Button, TextField } from "@mui/material";
import React from "react";
// import logo from "../img/logo.png";
function Contacts() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-10">Контакты</h1>

      {/* section */}
      <section className="py-[69px]">
        <form className="grid m-auto w-[40%] py-10">
          <h1 className=" font-bold text-lg">Напишите нам:</h1>
          <TextField variant="standard" label="Имя" />
          <TextField variant="standard" label=" Телефон" type="tel" />
          <TextField variant="standard" label=" Эл. Адрес" type="email" />
          <TextField variant="filled" label="Сообщение" multiline />
          <Button type="submit"> Отправить</Button>
        </form>
      </section>

      {/* section */}
    </div>
  );
}

export default Contacts;
