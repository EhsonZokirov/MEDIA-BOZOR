import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../img/logo.png";
import "./Layout.css";
// drawer
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import SpeedDial from "@mui/material/SpeedDial";
import TranslateIcon from "@mui/icons-material/Translate";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ru from "../img/russia.png";
import en from "../img/England.png";
import tj from "../img/tajikistan.png";

import { useTranslation } from "react-i18next";
function Layout() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="grid text-center items-start justify-evenly transition-all text-slate-400 bg-[#073648] h-[100vh] ">
        <div className="m-10 space-x-1 text-start ">
          <NavLink to="Blogers">
            <ListItemText primary={t("Блогеры")} />
          </NavLink>
          <NavLink to="Clients">
            <ListItemText primary={t("Клиенты")} />
          </NavLink>
          <NavLink to="Partners">
            <ListItemText primary={t("Партнёры")} />
          </NavLink>
          <NavLink to="Contacts">
            <ListItemText primary={t("Контакты")} />
          </NavLink>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {/* LANGUAGE */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 16,
          height: 300,
          transform: "translateZ(0px)",
          flexGrow: 1,
          zIndex: "9",
        }}
      >
        <SpeedDial
          onChange={(e) => {
            changeLanguage(e.target.value);
          }}
          ariaLabel="SpeedDial basic example"
          icon={<TranslateIcon fontSize="large" />}
        >
          <SpeedDialAction
            onClick={() => {
              changeLanguage("Ru");
            }}
            icon={<img src={ru} alt="Русский" />}
            tooltipTitle="Русский"
          />
          <SpeedDialAction
            onClick={() => {
              changeLanguage("En");
            }}
            icon={<img src={en} alt="English" />}
            tooltipTitle="English"
          />
          <SpeedDialAction
            onClick={() => {
              changeLanguage("Tj");
            }}
            icon={<img src={tj} alt="Тоҷикӣ" />}
            tooltipTitle="Тоҷикӣ"
          />
        </SpeedDial>
      </Box>
      {/* LANGUAGE */}
      <header>
        <nav className="flex justify-between md:justify-center fixed w-[100%] backdrop-blur-[5px] z-10 items-center py-2 px-5 md:px-0 list-none text-slate-300 bg-[#0000004a]">
          <div className="md:m-auto">
            <NavLink to="Home">
              <img className="w-[50px]  transition-all" src={logo} alt="logo" />
            </NavLink>
          </div>

          {/* bar */}
          <div className="hidden transition-all md:flex md:ml-0 m-auto  md:gap-20 lg:gap-32 ">
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Blogers"
            >
              {t("Блогеры")}
            </NavLink>
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Clients"
            >
              {t("Клиенты")}
            </NavLink>
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Partners"
            >
              {t("Партнёры")}
            </NavLink>
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Contacts"
            >
              {t("Контакты")}
            </NavLink>
          </div>
          {/* bar */}
          {/* Drawer */}
          <div className="md:hidden">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  {<MenuIcon color="action" fontSize="large" />}
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          {/* Drawer */}
        </nav>
      </header>

      <Outlet />

      <hr />
      <footer className="flex flex-wrap m-auto gap-5 justify-around p-5 sm:text-xl text-slate-900">
        <div className=" hover:text-white cursor-pointer transition-all">
          zokirov_2000@mail.ru
        </div>
        <address className=" hover:text-white transition-all">
          Dushanbe Tajikistan
        </address>
        <div className=" hover:text-white cursor-pointer transition-all">
          +992 886 47 1212
        </div>
      </footer>
    </div>
  );
}

export default Layout;
