import { useState } from "react";
import Register from "./assets/components/Register/Register";
import Login from "./assets/components/Login/Login";
import TheHeader from "./assets/components/TheHeader/TheHeader";
import Home from "../src/assets/components/Home/Home";
import Profile from '../src/assets/components/Profile/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./assets/components/Login/Login";

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
          <Route path="/profile" element= {<PrivateZone><Profile /></PrivateZone>}/>
          <Route path="/admin" element={<AdminZone><Admin /></AdminZone>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
