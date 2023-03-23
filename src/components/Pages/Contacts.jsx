import { Button, TextField } from "@mui/material";
import React from "react";
// import logo from "../img/logo.png";
function Contacts() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-[86px]">Контакты</h1>
      {/* section */}
      <section className="py-[100px]">
        <form className="grid m-auto px-10 md:w-[40%]">
          <h1 className=" font-bold text-lg ">Напишите нам:</h1>
          <TextField required variant="standard" label="Имя" />
          <TextField required variant="standard" label=" Телефон" type="tel" />
          <TextField required variant="standard" label=" Эл. Адрес" />
          <TextField required variant="filled" label="Сообщение" multiline />
          <Button type="submit"> Отправить</Button>
        </form>
      </section>

      {/* section */}
    </div>
  );
}

export default Contacts;
