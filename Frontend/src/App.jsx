import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Register from "./assets/components/Register/Register";
import CompanyRegister from "./assets/components/Register/CompanyRegister";
import TalentRegister from "./assets/components/Register/TalentRegister";
import TheHeader from "./assets/components/TheHeader/TheHeader";
import Home from "../src/assets/components/Home/Home";
import Profile from "../src/assets/components/Profile/Profile";
import TalentProfile from "./assets/components/Profile/TalentProfile/TalentProfile";
import UpdateTalent from "./assets/components/Profile/UpdateTalentProfil/UpdateTalentProfile";
import CompanyProfile from "./assets/components/Profile/CompanyProfile/CompanyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login/Login";
import Admin from "../src/assets/components/Admin/Admin";
import NotFound from "../src/assets/components/NotFound/NotFound";
// import "bootswatch/dist/darkly/bootstrap.min.css";
import LoginTalent from "./assets/components/Login/LoginTalent/LoginTalent";
import LoginCompany from "./assets/components/Login/LoginCompany/LoginCompany";
import Talents from "./assets/components/Talents/Talents";
import CreateOffer from "./assets/components/CreateOffer/CreateOffer";
import Offers from "./assets/components/Offers/Offers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/talent/register" element={<TalentRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/talent/login" element={<LoginTalent />} />
          <Route path="/company/login" element={<LoginCompany />} />
          <Route path="/company/discover-talents" element={<Talents />} />
          <Route path="/company/createOffer" element={<CreateOffer />} />
          <Route path="/offers" element={<Offers />} />
          {/*     <Route
            path="/talent/profile"
            element={
              // <TalentPrivateZone>
              <Profile />
              // </TalentPrivateZone>
            }
          /> */}
          <Route
            path="/profile"
            element={
              // <CompanyPrivateZone>
              <Profile />
              // </CompanyPrivateZone>
            }
          />
          <Route path="/talent/profile" element={<TalentProfile />} />
          <Route path="/talent/update" element={<UpdateTalent />} />
          <Route path="/company/profile" element={<CompanyProfile />} />

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
