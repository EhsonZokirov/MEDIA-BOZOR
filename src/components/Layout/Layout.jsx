import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../img/logo.png";
import "./Layout.css";
function Layout() {
  return (
    <div>
      <header>
        <nav className="flex bg-[#ffffff4a] sm:font-bold  p-5 justify-center list-none xs:gap-10 sm:gap-20 md:gap-40">
          <NavLink to="Home">
            <img className="w-[40px] transition-all" src={logo} alt="logo" />
          </NavLink>

          <NavLink
            className="hover:text-slate-500 cursor-pointer transition"
            to="Blogers"
          >
            Блогеры
          </NavLink>

          <NavLink
            className="hover:text-slate-500 cursor-pointer transition"
            to="Clients"
          >
            Клиенты
          </NavLink>

          <NavLink
            className="hover:text-slate-500 cursor-pointer transition"
            to="Partners"
          >
            Партнеры
          </NavLink>

          <NavLink
            className="hover:text-slate-500 cursor-pointer transition"
            to="Contacts"
          >
            Контакты
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>
        <footer className="flex flex-wrap m-auto gap-5 justify-around p-5 text-xl text-slate-500 hover:text-red-500">
          <div>reklamataj@mail.ru</div>
          <address>Dushanbe Tajikistan</address>
          <div>+992 886 47 1212</div>
        </footer>
      </footer>
    </div>
  );
}

export default Layout;