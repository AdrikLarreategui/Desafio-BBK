import { useState } from "react";
import Login  from "./assets/redux/auth/authSlice";
import  Register  from "./assets/redux/auth/authSlice";
import TheHeader from "./assets/components/TheHeader/TheHeader";
import Home from '../src/assets/components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TheHeader />

      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
