import React, { useState } from "react";
import LoginTalent from "./LoginTalent/LoginTalent";
import LoginCompany from "./LoginCompany/LoginCompany";
import { Button, Form } from "react-bootstrap";
import { loginTalent } from "../../redux/auth/talentAuthSlice"
import { loginCompany } from "../../redux/auth/companyAuthSlice"

const Login = () => {
  const [option, setOption] = useState(null);

  const handleOptionClick = (option) => {
    setOption(option);
  };


  //CÓDIGO A IMPLEMENTAR PARA LOS LOGINS
  /*   const handleTalentSubmit = (data) => {
      console.log(data);
      dispatch(loginTalent(data))
    };
  
    const handleCompanySubmit = (data) => {
      console.log(data);
      dispatch(loginCompany(data))
    };
   */

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
