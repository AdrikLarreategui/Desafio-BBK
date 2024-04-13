import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>Login</div>

      <div>
        <Button as={Link} to="/talent/login" variant="primary">
          Talento
        </Button>

        <Button as={Link} to="/company/login" variant="primary">
          Empresa
        </Button>
      </div>
    </>
  );
};

export default Login;
