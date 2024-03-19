import { useState } from "react";
import "./App.css";
import TheHeader from "./assets/Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/Components/Login/Login";
import Home from './assets/Components/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
