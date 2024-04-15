import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { getAllFilter } from "../../../redux/auth/offerAuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    location: "",
    workingMode: "",
    contractKind: "",
    workingDayType: "",
    salaryRange: "",
    requiredSkills: [],
  };
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState(initialState);
  const [displaySalary, setDisplaySalary] = useState("");
  const {
    title,
    location,
    workingMode,
    contractKind,
    workingDayType,
    salaryRange,
    requiredSkills,
  } = formData;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    for (let key in updatedFormData) {
      if (
        updatedFormData[key] === "" ||
        (Array.isArray(updatedFormData[key]) &&
          updatedFormData[key].length === 0)
      ) {
        delete updatedFormData[key];
      }
    }
    console.log(updatedFormData);
    dispatch(getAllFilter(updatedFormData));
    // setFormData(initialState);
  };

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
  return (
    <>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaFilter /> Filter
      </Button>
      {isOpen && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="location">
            <Form.Control
              type="text"
              name="title"
              placeholder="Título"
              value={title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Control
              type="text"
              name="location"
              placeholder="Ubicación"
              value={location}
              onChange={handleChange}
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
          <Form.Group controlId="salaryRange">
            <Form.Control
              type="text"
              name="salaryRange"
              placeholder="Rango salarial"
              value={salaryRange}
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
          <Button variant="primary" type="submit" className="mt-0 mb-5">
            Buscar
          </Button>
        </Form>
      )}
    </>
  );
};

export default Filter;
