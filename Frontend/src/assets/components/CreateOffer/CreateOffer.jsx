import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffer } from "../../redux/auth/offerAuthSlice";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import UploadFoto from "../UploadFoto/UploadFoto";
// import "./CreateOffer.css";

const CreateOffer = () => {
  const initialState = {
    title: "",
    location: "",
    workingMode: "",
    contractKind: "",
    workingDayType: "",
    salaryRange: "",
    content: "",
    requiredSkills: [],
  };
  const [formData, setFormData] = useState(initialState);
  const {
    title,
    location,
    workingMode,
    contractKind,
    workingDayType,
    salaryRange,
    requiredSkills,
    content,
  } = formData;

  const [displaySalary, setDisplaySalary] = useState("");

  const workingModeArray = ["Remoto", "Presencial", "Híbrido (semipresencial)"];

  const contractKindArray = [
    "Indefinido",
    "De duración determinada",
    "Otros contratos",
    "Fijo discontinuo",
    "Formativo",
    "Autónomo de relevo",
  ];

  const workingDayTypeArray = [
    "Completa",
    "Parcial/indiferente",
    "Indiferente",
    "Parcial/mañana",
    "Intensiva mañana",
    "Intensiva tarde",
    "Intensiva noche",
    "Turnos rotatorios: mañana, tarde, noche",
  ];

  const [valueSelected, setValueSelected] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "salaryRange") {
      const salaryValue = value.replace("€", "");
      setDisplaySalary(salaryValue + "€");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: salaryValue,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createOffer(formData));
    setFormData(initialState);
  };

  const [inputSkill, setInputSkill] = useState("");

  const handleInputSkillChange = (e) => {
    setInputSkill(e.target.value);
  };
  const addSkill = () => {
    if (inputSkill) {
      setFormData({
        ...formData,
        requiredSkills: [...requiredSkills, inputSkill],
      });
      setInputSkill("");
    }
  };
  const removeSkill = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      requiredSkills: prevFormData.requiredSkills.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  return (
    <div>
      <h1>Escribe tu oferta</h1>
      <Form.Group controlId="formBasicLocation">
        <Form.Control
          name="title"
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicLocation">
          <Form.Control
            name="location"
            type="text"
            placeholder="Ubicación"
            value={location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicWorkingMode">
          <Form.Control
            as="select"
            name="workingMode"
            value={workingMode}
            onChange={handleChange}
          >
            <option value="">Selecciona el modelo puesto de trabajo</option>
            {workingModeArray.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicContractKind">
          <Form.Control
            as="select"
            name="contractKind"
            value={contractKind}
            onChange={handleChange}
          >
            <option value="">Selecciona el tipo de contrato ofrecido</option>
            {contractKindArray.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicWorkingDayType">
          <Form.Control
            as="select"
            name="workingDayType"
            value={workingDayType}
            onChange={handleChange}
          >
            <option value="">Selecciona el tipo de jornada ofertada</option>
            {workingDayTypeArray.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Control
          name="salaryRange"
          type="text"
          placeholder="Rango salarial"
          value={displaySalary}
          onChange={handleChange}
        />
        <Form.Group controlId="formBasicOfferOverview">
          <Form.Control
            as="textarea"
            rows={10}
            name="content"
            type="text"
            placeholder="Descripción de la oferta"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        <div>
          <h3>Habilidades requeridas</h3>
          <div className="inputButtonContainer">
            <Form.Control
              type="text"
              name="requiredSkills"
              value={inputSkill}
              onChange={handleInputSkillChange}
              placeholder="Añadir una habilidad"
            />
            <Button variant="primary" type="button" onClick={addSkill}>
              +
            </Button>
          </div>
          <div className="addedFieledContainer">
            {requiredSkills.map((skill, index) => (
              <span
                key={index}
                className="addedFormField"
                onClick={() => removeSkill(index)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <Button variant="primary" type="submit">
          Publicar
        </Button>
      </Form>
      <UploadFoto />
    </div>
  );
};

export default CreateOffer;
