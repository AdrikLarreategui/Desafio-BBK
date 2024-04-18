import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h2 className="h2reg">Registro</h2>
      <div>
        <Link to="/company/register">
          <button className="talent">Talento</button>
        </Link>
        <Link to="/talent/register">
          <button className="company">Empresa</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
