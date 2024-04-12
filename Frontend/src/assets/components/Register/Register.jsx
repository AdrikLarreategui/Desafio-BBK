import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TalentRegister from "./TalentRegister";
import CompanyRegister from "./CompanyRegister";
import "./Register.css";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowForm(true);
  };

  const handleTalentSubmit = (data) => {
    console.log("Datos registrados: ", data);
  };

  const handleCompanySubmit = (data) => {
    console.log("Datos de Empresa:", data);
  };

  const handleReturnHome = () => {
    setSelectedOption('');
    setShowForm(false);
    console.log("Volver a la página de inicio");
  };

  return (
    <div>
      <h1>Registro</h1>
      {!showForm && (
        <div>
          <Button variant="primary" onClick={() => handleOptionClick("talentregister")}>
            Talento
          </Button>
          <Button variant="primary" onClick={() => handleOptionClick("companyregister")}>
            Empresa
          </Button>
        </div>
      )}
      {selectedOption === "companyregister" && showForm && (
        <CompanyRegister onSubmit={handleCompanySubmit} onReturn={handleReturnHome} />
      )}

      {selectedOption === "talentregister" && showForm && (
        <TalentRegister onSubmit={handleTalentSubmit} onReturn={handleReturnHome} />
      )}
    </div>
  );
}

export default Register;



