import React, { useState } from "react";
//import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <>
      <h2>Login</h2>

      <div>
        <Link to="/talent/login">
          <button className="talent">TALENTO</button>
        </Link>
        <Link to="/company/login">
          <button className="company">ORGANIZACIÓN</button>
        </Link>
     
      </div>
    </>
  );
};

export default Login;
