import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../img/logo.png";
import "./Layout.css";
// drawer
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
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
      <List>
        {
          <ListItem >
            <ListItemButton to="Blogers">
              <ListItemText primary="Блогеры" />
            </ListItemButton>
            <ListItemButton to="Clients">
              <ListItemText primary="Клиенты" />
            </ListItemButton>
            <ListItemButton to="Partners">
              <ListItemText primary="Партнёры" />
            </ListItemButton>
            <ListItemButton to="Contacts">
              <ListItemText primary="Контакты" />
            </ListItemButton>
          </ListItem>
        }
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <header>
        <nav className="flex fixed w-[100%] backdrop-blur-[5px] z-10 items-center bg-[#ffffff4a] sm:font-bold p-2 px-10 justify-between sm:justify-center list-none xs:gap-10 sm:gap-20 md:gap-40">
          <div className="pr-20">
            <NavLink to="Home">
              <img className="w-[50px] transition-all" src={logo} alt="logo" />
            </NavLink>
          </div>
          {/* Drawer */}
          <div className="sm:hidden ">
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
          <div className="hidden text-lg sm:flex sm:gap-40">
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
