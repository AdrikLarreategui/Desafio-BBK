import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CompanyRegister = ({ onSubmit, onReturn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "company",
    companyProfile: {
      companyName: "",
      industry: "",
      location: "",
      telephone: "",
      webSite: "",
      socialNumber: "",
      workersNumber: "",
      description: "",
    },
  });

  const { email, password, companyName, industry, location, telephone, webSite, socialNumber, workersNumber, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ companyName, industry, location, telephone, webSite, socialNumber, workersNumber, description });
    setTimeout(() => {
      onReturn();
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control name="email" type="text" placeholder="email" value={email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control name="password" type="text" placeholder="password" value={password} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicCompanyName">
        <Form.Control name="companyName" type="text" placeholder="Nombre de la empresa" value={companyName} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicIndustry">
        <Form.Control name="industry" type="text" placeholder="Tipo de empresa" value={industry} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicLocation">
        <Form.Control name="location" type="text" placeholder="Ubicación" value={location} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicTelephone">
        <Form.Control name="telephone" type="tel" placeholder="Número de teléfono" value={telephone} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicWebSite">
        <Form.Control name="webSite" type="text" placeholder="Sitio web" value={webSite} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicSocialNumber">
        <Form.Control name="socialNumber" type="text" placeholder="CIF" value={socialNumber} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicWorkersNumber">
        <Form.Control name="workersNumber" type="number" placeholder="Número de trabajadores" value={workersNumber} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formBasicDescription">
        <Form.Control as="textarea" rows={3} placeholder="description" value={description} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default CompanyRegister;
