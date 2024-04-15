import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerCompany } from "../../redux/auth/companyAuthSlice";

const CompanyRegister = () => {
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
    website: "",
    password2: "",
  });

  const {
    email,
    password,
    cif,
    companyName,
    typeCompany,
    field,
    workersNumber,
    description,
    location,
    telephoneNumber,
    website,
    password2,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(registerCompany(formData));
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
  ];
  const fieldOptions = [
    "Sector primario",
    "Sector secundario",
    "Sector terciario",
    "Sector cuaternario",
    "Sector quinario",
  ];
  const [valueSelected, setValueSelected] = useState("");

  const handleChangeV = (event) => {
    setValueSelected(event.target.value);
  };

  return (
    <div>
      <h1>Inscribe tu organización</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicCompanyCIF">
          <Form.Control
            name="cif"
            type="text"
            placeholder="CIF"
            value={cif}
            onChange={handleChange}
            maxLength="50"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCompanyName">
          <Form.Control
            name="companyName"
            type="text"
            placeholder="Nombre de la empresa"
            value={companyName}
            onChange={handleChange}
            maxLength="100"
          />
        </Form.Group>

        {/*     
      <Form.Control name="typeCompany" type="text" placeholder="Tipo de empresa" value={typeCompany} onChange={handleChange} />
    */}

        <Form.Group controlId="formBasicTypeCompany">
          <Form.Control
            as="select"
            name="typeCompany"
            value={typeCompany}
            onChange={handleChange}
          >
            <option value="">Selecciona el tipo de empresa</option>
            {typeOfCompany.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicField">
          <Form.Control
            as="select"
            name="field"
            value={field}
            onChange={handleChange}
          >
            <option value="">Selecciona el sector de la empresa</option>
            {fieldOptions.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicWorkersNumber">
          <Form.Control
            name="workersNumber"
            type="number"
            placeholder="Número de trabajadores"
            value={workersNumber}
            onChange={handleChange}
            maxLength="5"
          />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            placeholder="Descripción"
            value={description}
            onChange={handleChange}
            maxLength="5500"
          />
        </Form.Group>
        <Form.Group controlId="formBasicLocation">
          <Form.Control
            name="location"
            type="text"
            placeholder="Ubicación"
            value={location}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTelephone">
          <Form.Control
            name="telephoneNumber"
            type="tel"
            placeholder="Número de teléfono"
            value={telephoneNumber}
            onChange={handleChange}
            maxLength="9"
          />
        </Form.Group>
        <Form.Group controlId="formBasicWebSite">
          <Form.Control
            name="website"
            type="text"
            placeholder="Sitio web"
            value={website}
            onChange={handleChange}
            maxLength="50"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="text"
            placeholder="Constraseña"
            value={password}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword2">
          <Form.Control
            name="password2"
            type="text"
            placeholder="Confirma la contraseña"
            value={password2}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CompanyRegister;
