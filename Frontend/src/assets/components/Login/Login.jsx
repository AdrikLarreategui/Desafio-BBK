import React, { useState } from "react";
//import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const foto9 = "../images/foto9.jpg"
import "./Login.css"

const Login = () => {
  return (
    <>
      <h2 className="lg">Login</h2>
    <section className="firstLogin">
      <article className="foto9">
        <img src={foto9} alt="" />
      </article>

      <div>
        <Link to="/talent/login">
          <button className="talent">TALENTO</button>
        </Link>
        <Link to="/company/login">
          <button className="company">ORGANIZACIÓN</button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Login;
