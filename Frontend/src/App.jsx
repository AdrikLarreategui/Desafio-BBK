import { useState } from "react";
import Register from "./assets/components/Register/Register";
import Login from "./assets/components/Login/Login";
import TheHeader from "./assets/components/TheHeader/TheHeader";
import Home from "../src/assets/components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TalentRegister from './assets/components/TalentRegister/TalentRegister'
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registertalent" element={<TalentRegister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
