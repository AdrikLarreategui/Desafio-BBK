import React, { useState } from "react";
import LoginTalent from "./LoginTalent/LoginTalent";
import LoginCompany from "./LoginCompany/LoginCompany";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [option, setOption] = useState(null);

  const handleOptionClick = (option) => {
    setOption(option);
  };
  return (
    <>
      <div>Login</div>
      {!option && (
        <div>
          <Button
            variant="primary"
            onClick={() => handleOptionClick("talento")}
          >
            Talento{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => handleOptionClick("empresa")}
          >
            Empresa{" "}
          </Button>
        </div>
      )}

      {option === "talento" && <LoginTalent />}
      {option === "empresa" && <LoginCompany />}
    </>
  );
};

export default Login;
