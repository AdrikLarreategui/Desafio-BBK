import React from "react";
import ReactDOM from 'react-dom'
import { useState } from "react";
import Register from "./assets/components/Register/Register";
import CompanyRegister from "./assets/components/Register/CompanyRegister";
import TalentRegister from "./assets/components/Register/TalentRegister";
import TheHeader from "./assets/components/TheHeader/TheHeader";
import Home from "../src/assets/components/Home/Home";
import Profile from "../src/assets/components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login/Login";
import Admin from "../src/assets/components/Admin/Admin";
import NotFound from "../src/assets/components/NotFound/NotFound";
import "bootswatch/dist/darkly/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerCompany" element={<CompanyRegister />} />
          <Route path="/registerTalent" element={<TalentRegister />}/>
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              //<PrivateZone>
              <Profile />
              //  </PrivateZone>
            }
          />
          <Route
            path="/admin"
            element={
              //<AdminZone>
              <Admin />
              //  </AdminZone>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
