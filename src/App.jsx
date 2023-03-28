import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import Blogers from "./components/Pages/Blogers";
import Clients from "./components/Pages/Clients";
import Partners from "./components/Pages/Partners";
import Contacts from "./components/Pages/Contacts";
import NoMatch from "./components/Pages/NoMatch";
import "./App.css";
import UserById from "./components/Pages/UserById";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* ROUTER */}
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index="/Home" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Blogers" element={<Blogers />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/user/:id" element={<UserById />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
