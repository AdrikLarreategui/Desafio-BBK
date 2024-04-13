import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CompanyRegister = ({ onSubmit, onReturn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cif: "",
    companyName: "",
    typeCompany: "",
    field: "",
    workersNumber: "",
    description: "",
    location: "",
    telephoneNumber: "",
    website: ""
  });

  const { email, password, cif, companyName, typeCompany, field, workersNumber, description, location, telephoneNumber, website } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    onSubmit(formData);
    setTimeout(() => {
      onReturn();
    }, 1500);
  };
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const typeOfCompany = [
    "Empresa individual",
    "Sociedad limitada (S.L.)",
    "Sociedad Anónima (S.A.)",
    "Asociación sin ánimo de lucro",
    "Sociedad Colectiva",
    "Sociedad Comanditaria",
    "Comunidad de Bienes",
    "Sociedad Cooperativa",
  ]
  const fieldOptions = [
    "Sector primario",
    "Sector secundario",
    "Sector terciario",
    "Sector cuaternario",
    "Sector quinario",
  ]
  const [valueSelected, setValueSelected] = useState('');


  const handleChangeV = (event) => {
    setValueSelected(event.target.value);
  };

  return (
    <div>
      <h1>Inscribe tu organización</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control name="email" type="text" placeholder="email" value={email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control name="password" type="text" placeholder="password" value={password} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formBasicCompanyCIF">
          <Form.Control name="cif" type="text" placeholder="CIF" value={cif} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicCompanyName">
          <Form.Control name="companyName" type="text" placeholder="Nombre de la empresa" value={companyName} onChange={handleChange} />
        </Form.Group>

    {/*     
      <Form.Control name="typeCompany" type="text" placeholder="Tipo de empresa" value={typeCompany} onChange={handleChange} />
    */}


    <Form.Group controlId="formBasicTypeCompany">
        <Form.Control as="select" name="typeCompany" value={typeCompany} onChange={handleChange}>
          <option value="">Selecciona el tipo de empresa</option>
          {typeOfCompany.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </Form.Control>
      </Form.Group> 

        <Form.Group controlId="formBasicField">
          <Form.Control as="select" name="field" value={field} onChange={handleChange} >
          <option value="">Selecciona el sector de la empresa</option>
          {fieldOptions.map((type, index) =>(
            <option key={index} value={type}>{type}</option>
          ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicWorkersNumber">
          <Form.Control name="workersNumber" type="number" placeholder="Número de trabajadores" value={workersNumber} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Control as="textarea" rows={3} name="description" placeholder="description" value={description} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicLocation">
          <Form.Control name="location" type="text" placeholder="Ubicación" value={location} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicTelephone">
          <Form.Control name="telephoneNumber" type="tel" placeholder="Número de teléfono" value={telephoneNumber} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicWebSite">
          <Form.Control name="website" type="text" placeholder="Sitio web" value={website} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CompanyRegister;