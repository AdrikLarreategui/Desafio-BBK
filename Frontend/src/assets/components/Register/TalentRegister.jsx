import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerTalent } from "../../redux/auth/talentAuthSlice";
import "./TalentRegister.css";

const TalentRegister = () => {
  const [formData, setFormData] = useState({
    dni: "",
    name: "",
    surnames: "",
    telephone: "",
    birthdate: "",
    email: "",
    password: "",
    password2: "",
    education: [],
    skills: [],
    interests: [],
    languages: [],
    aboutTheTalent: "",
  });

  const {
    dni,
    name,
    surnames,
    telephone,
    birthdate,
    email,
    password,
    password2,
    education,
    skills,
    interests,
    languages,
    aboutTheTalent,
  } = formData;

  const { isSuccess, message, isError } = useSelector(
    (state) => state.talentAuth
  );

  const languageLevels = [
    "Principiante",
    "Básico",
    "Intermedio",
    "Intermedio-Alto",
    "Avanzado",
    "Nativo",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFieldChange = (field, index, property, e) => {
    const newValue = [...formData[field]];
    if (property) {
      newValue[index][property] = e.target.value;
    } else {
      newValue[index] = e.target.value;
    }
    setFormData({
      ...formData,
      [field]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== password2) {
      alert("Error: Las contraseñas no coinciden");
    } else {
      console.log("form", formData);
      console.log(skills);
      if (isError) {
        alert("Error");
      } else {
        dispatch(registerTalent(formData));
        navigate("/login");
      }
    }
  };
  const [dateInputType, setDateInputType] = useState("text");
  const [inputInterest, setInputInterest] = useState("");
  const [inputLanguage, setInputLanguage] = useState({
    language: "",
    proficiency: "",
  });

  const [inputSkill, setInputSkill] = useState("");

  const handleInputSkillChange = (e) => {
    setInputSkill(e.target.value);
  };
  const handleInputInterestChange = (e) => {
    setInputInterest(e.target.value);
  };
  const handleInputLanguageChange = (e) => {
    setInputLanguage({ ...inputLanguage, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (inputSkill) {
      setFormData({
        ...formData,
        skills: [...skills, inputSkill],
      });
      setInputSkill("");
    }
  };
  const removeSkill = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: prevFormData.skills.filter((_, index) => index !== indexToRemove),
    }));
  };

  const addInterest = () => {
    if (inputInterest === "") {
      setInputInterest(inputInterest);
    }
    if (inputInterest) {
      setFormData({
        ...formData,
        interests: [...interests, inputInterest],
      });
      console.log(interests);
      setInputInterest("");
    }
  };
  const removeInterest = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      interests: prevFormData.interests.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;
    let languages = [...formData.languages];
    languages[index] = { ...languages[index], [name]: value };
    setFormData({ ...formData, languages });
  };

  const addLanguage = () => {
    if (inputLanguage.language && inputLanguage.proficiency) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: [...prevFormData.languages, inputLanguage],
      }));

      console.log(languages);
      setInputLanguage({ language: "", proficiency: "" });
    }
  };
  const removeLanguage = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      languages: prevFormData.languages.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const handleAddLanguage = () => {
    if (inputLanguage.language || inputLanguage.proficiency) {
      addLanguage();
    }
  };
  const removeItem = (indexToRemove, setter) => {
    setter((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <>
      <div>
        <h1>Registrar Talento</h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <Form.Control
              type="text"
              name="dni"
              value={dni}
              onChange={handleChange}
              placeholder="DNI/NIE/Pasaporte"
              maxLength="25"
            />
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Nombre"
              maxLength="25"
            />
            <Form.Control
              type="text"
              name="surnames"
              value={surnames}
              onChange={handleChange}
              placeholder="Apellidos"
              maxLength="50"
            />
            <Form.Control
              className="no-spinners"
              type="number"
              name="telephone"
              value={telephone}
              onChange={handleChange}
              placeholder="Teléfono"
              maxLength="9"
            />
            <Form.Control
              type={dateInputType}
              name="birthdate"
              value={birthdate}
              onChange={handleChange}
              placeholder="Fecha de nacimiento"
              onFocus={() => setDateInputType("date")}
              onBlur={() => setDateInputType("text")}
            />
            <Form.Control
              type="text"
              name="education"
              value={education}
              onChange={handleChange}
              placeholder="Formación"
              maxLength="150"
            />
            <div>
              <h3>Habilidades</h3>
              <div className="inputButtonContainer">
                <Form.Control
                  type="text"
                  name="skills"
                  value={inputSkill}
                  onChange={handleInputSkillChange}
                  placeholder="Añadir una habilidad"
                  maxLength="25"
                />
                <Button variant="primary" type="button" onClick={addSkill}>
                  +
                </Button>
              </div>
              <div className="addedFieledContainer">
                {skills.map((skill, index) => (
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

            <div>
              <h3>Intereses</h3>
              <div className="inputButtonContainer">
                <Form.Control
                  type="text"
                  name="interests"
                  value={inputInterest}
                  onChange={handleInputInterestChange}
                  placeholder="Interests"
                  maxLength="25"
                />
                <Button variant="primary" type="button" onClick={addInterest}>
                  +
                </Button>
              </div>
              <div className="addedFieledContainer">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="addedFormField"
                    onClick={() => removeInterest(index)}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3>Idiomas</h3>
              <div className="addedFieledContainer">
                {languages.map(
                  (language, index) =>
                    (language.language || language.proficiency) && (
                      <span
                        key={index}
                        className="addedFormField"
                        onClick={() => removeLanguage(index)}
                      >
                        {language.language && language.proficiency
                          ? `${language.language} (${language.proficiency})`
                          : language.language || language.proficiency}
                      </span>
                    )
                )}
              </div>

              <Form.Control
                type="text"
                name="language"
                value={inputLanguage.language}
                onChange={handleInputLanguageChange}
                placeholder="Language"
                maxLength="25"
              />

              <div className="inputButtonContainer">
                <Form.Control
                  as="select"
                  name="proficiency"
                  value={inputLanguage.proficiency}
                  onChange={handleInputLanguageChange}
                  placeholder="Nivel"
                  // required
                >
                  <option value="">Nivel</option>
                  {languageLevels.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Control>
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleAddLanguage}
                >
                  +
                </Button>
              </div>
            </div>

            <Form.Control
              as="textarea"
              rows={4}
              name="aboutTheTalent"
              value={aboutTheTalent}
              onChange={handleChange}
              placeholder="Sobre ti"
              maxLength="5500"
            />
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              maxLength="75"
              required
            />
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Constraseña"
              required
              maxLength="50"
            />
            <Form.Control
              type="password"
              name="password2"
              value={password2}
              onChange={handleChange}
              placeholder="Confirma la contraseña"
              required
              maxLength="50"
            />
          </div>
          <button className="talent" variant="primary" type="submit">
            Register Talent
          </button>
        </Form>
      </div>
    </>
  );
};

export default TalentRegister;
