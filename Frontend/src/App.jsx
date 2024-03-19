import { useState } from "react";
import "./App.css";
import TheHeader from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <TheHeader />
        <h1>New Project BBK</h1>
        <Login />
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
