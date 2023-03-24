import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../img/logo.png";
import "./Layout.css";
// drawer
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
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
      <div className="flex flex-wrap text-center justify-evenly transition-all text-white bg-[#073648] py-3">
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
      
    </Box>
  );

  return (
    <div>
      <header>
        <nav className="flex flex-wrap fixed w-[100%] backdrop-blur-[5px] z-10 items-center sm:font-bold py-2 px-5 md:px-0 justify-between md:justify-evenly list-none bg-[#ffffff4a]">
          <div className="">
            <NavLink to="Home">
              <img className="w-[50px] transition-all" src={logo} alt="logo" />
            </NavLink>
          </div>
          {/* Drawer */}
          <div className="md:hidden ">
            {["top"].map((anchor) => (
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
          <div className="hidden text-lg md:flex sm:gap-40 ">
            <NavLink
              className="hover:text-red-400 cursor-pointer transition"
              to="Blogers"
            >
              Блогеры
            </NavLink>
            <NavLink
              className="hover:text-red-400 cursor-pointer transition"
              to="Clients"
            >
              Клиенты
            </NavLink>
            <NavLink
              className="hover:text-red-400 cursor-pointer transition"
              to="Partners"
            >
              Партнеры
            </NavLink>
            <NavLink
              className="hover:text-red-400 cursor-pointer transition"
              to="Contacts"
            >
              Контакты
            </NavLink>
          </div>
          {/* bar */}
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
