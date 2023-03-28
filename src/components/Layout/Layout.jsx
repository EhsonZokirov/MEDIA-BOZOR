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
function Layout() {
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
        <div className="m-10 space-x-1 ">
          <NavLink to="Blogers">
            <ListItemText primary="Блогеры" />
          </NavLink>
          <NavLink to="Clients">
            <ListItemText primary="Клиенты" />
          </NavLink>
          <NavLink to="Partners">
            <ListItemText primary="Партнёры" />
          </NavLink>
          <NavLink to="Contacts">
            <ListItemText primary="Контакты" />
          </NavLink>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <header>
        <nav className="flex flex-wrap fixed w-[100%] backdrop-blur-[5px] z-10 items-center sm:font-bold py-2 px-5 md:px-0 justify-between md:justify-evenly list-none bg-[#ffffff4a]">
          <div className="md:m-auto">
            <NavLink to="Home">
              <img className="w-[50px] transition-all" src={logo} alt="logo" />
            </NavLink>
          </div>
          {/* Drawer */}
          <div className="md:hidden ">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  {<MenuIcon color="error" fontSize="large" />}
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
          {/* bar */}
          <div className="hidden text-lg md:flex text-center m-auto  md:gap-20 lg:gap-40 ">
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Blogers"
            >
              Блогеры
            </NavLink>
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Clients"
            >
              Клиенты
            </NavLink>
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Partners"
            >
              Партнеры
            </NavLink>
            <NavLink
              className="hover:text-white cursor-pointer transition text-center m-auto"
              to="Contacts"
            >
              Контакты
            </NavLink>

            <select className=" cursor-pointer font-serif text-center bg-transparent outline-none">
              <option className="bg-purple-300 " value="">
                Ru
              </option>
              <option className="bg-purple-300 " value="">
                Tj
              </option>
              <option className="bg-purple-300 " value="">
                En
              </option>
            </select>
          </div>
          {/* bar */}
        </nav>
      </header>
      <Outlet />

      <hr />
      <footer className="flex flex-wrap m-auto gap-5 justify-around p-5 text-xl text-slate-900">
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
