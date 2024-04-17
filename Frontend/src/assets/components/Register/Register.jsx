import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
  return (
    <div>
      <h2 className="h2reg">Registro</h2>
      <div>
        <button className="talent" as={Link} to="/talent/register" variant="primary">
          Talento
        </button>
        <button className="company" as={Link} to="/company/register" variant="primary">
          Empresa
        </button>
      </div>
    </div>
  );
};

export default Register;
