import { useState } from "react";
import Register from "./assets/components/Register/Register";

import TheHeader from "./assets/components/TheHeader/TheHeader";
import Home from "../src/assets/components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheHeader from "./assets/Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/Components/Login/Login";
import Home from './assets/Components/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
