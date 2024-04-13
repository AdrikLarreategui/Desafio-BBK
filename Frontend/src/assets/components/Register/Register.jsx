import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Registro</h1>
      <div>
        <Button as={Link} to="/talent/register" variant="primary">
          Talento
        </Button>
        <Button as={Link} to="/company/register" variant="primary">
          Empresa
        </Button>
      </div>
    </div>
  );
};

export default Register;
