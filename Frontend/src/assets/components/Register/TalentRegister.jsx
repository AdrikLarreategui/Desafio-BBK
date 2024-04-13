import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerTalent } from "../../redux/auth/talentAuthSlice";
import "./TalentRegister.css";

const TalentRegister = () =>
  // { onSubmit, onReturn }
  {
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
      languages: [{ language: "", proficiency: "" }],
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

    const languageLevels = [
      "Principiante",
      "Básico",
      "Intermedio",
      "Intermedio-Alto",
      "Avanzado",
      "Nativo",
    ];

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleLanguagesChange = (index, e) => {
      const { name, value } = e.target;
      const newLanguages = [...languages];
      newLanguages[index][name] = value;
      setFormData({
        ...formData,
        languages: newLanguages,
      });
    };

    const handleInterestsChange = (index, e) => {
      const newInterests = [...interests];
      newInterests[index] = e.target.value;
      setFormData({
        ...formData,
        interests: newInterests,
      });
    };

    const handleSkillsChange = (index, e) => {
      const newSkills = [...skills];
      newSkills[index] = e.target.value;
      setFormData({
        ...formData,
        skills: newSkills,
      });
    };

    const addSkill = () => {
      setFormData({
        ...formData,
        skills: [...skills, ""],
      });
    };

    const addInterest = () => {
      setFormData({
        ...formData,
        interests: [...interests, ""],
      });
    };

    const addLanguage = () => {
      setFormData({
        ...formData,
        languages: [...languages, { language: "", proficiency: "" }],
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (password !== password2) {
        alert("Error: Las contraseñas no coinciden");
      } else {
        console.log("form", formData);
        console.log(skills);
        dispatch(registerTalent(formData));
      }
    };
    const [dateInputType, setDateInputType] = useState("text");

    return (
      <>
        <div>
          <h1>Register Talent</h1>
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
              <h3>Habilidades</h3>
              {skills.map((skill, index) => (
                <div key={index}>
                  <Form.Control
                    type="text"
                    name="skills"
                    value={skill}
                    onChange={(e) => handleSkillsChange(index, e)}
                    placeholder="Skills"
                  />
                  {skill}
                </div>
              ))}
              <Button variant="primary" type="button" onClick={addSkill}>
                + skills
              </Button>

              <h3>Intereses</h3>
              {interests.map((interest, index) => (
                <div key={index}>
                  interests
                  <Form.Control
                    type="text"
                    name="interests"
                    value={interest}
                    onChange={(e) => handleInterestsChange(index, e)}
                    placeholder="Interests"
                  />
                  {interest}
                </div>
              ))}
              <Button variant="primary" type="button" onClick={addInterest}>
                + interests
              </Button>
              <div>
                <label htmlFor="languages">
                  <h3>Idiomas</h3>
                </label>
                {languages.map((lang, index) => (
                  <div key={index}>
                    <Form.Control
                      type="text"
                      name="language"
                      value={lang.language}
                      onChange={(e) => handleLanguagesChange(index, e)}
                      placeholder="Idioma"
                    />
                    <Form.Control
                      // type="text"
                      as="select"
                      name="proficiency"
                      value={lang.proficiency}
                      onChange={(e) => handleLanguagesChange(index, e)}
                      placeholder="Nivel"
                    >
                      <option value="">Nivel</option>
                      {languageLevels.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                ))}
                <Button variant="primary" type="button" onClick={addLanguage}>
                  + Idioma
                </Button>
              </div>

              <Form.Control
                as="textarea"
                rows={4}
                name="aboutTheTalent"
                value={aboutTheTalent}
                onChange={handleChange}
                placeholder="Sobre ti"
              />
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
              />
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Constraseña"
                required
              />
              <Form.Control
                type="password"
                name="password2"
                value={password2}
                onChange={handleChange}
                placeholder="Confirma la contraseña"
                required
              />
            </div>
            <Button variant="primary" type="submit">
              Register Talent
            </Button>
          </Form>
        </div>
      </>
    );
  };

// const TalentRegister = () => {
  //   const [selectedOption, setSelectedOption] = useState('');
  //   const [showForm, setShowForm] = useState(false);
  
  //   const handleOptionClick = (option) => {
  //     setSelectedOption(option);
  //     setShowForm(true);
  //   };
  
  //   const handleTalentSubmit = (data) => {
  //     console.log("Datos registrados: ", data);
  //   };
  
  //   const handleCompanySubmit = (data) => {
  //     console.log("Datos de Empresa:", data);
  //   };
  
  //   const handleReturnHome = () => {
  //     setSelectedOption('');
  //     setShowForm(false);
  //     console.log("Volver a la página de inicio");
  //   };
  
  //   return (
  //     <div>
  //       <h1>Registro</h1>
  //       {!showForm && (
  //         <div>
  //           <Button variant="primary" onClick={() => handleOptionClick("talentregister")}>
  //             Talento
  //           </Button>
  //           <Button variant="primary" onClick={() => handleOptionClick("companyregister")}>
  //             Empresa
  //           </Button>
  //         </div>
  //       )}
  //       {selectedOption === "companyregister" && showForm && (
  //         <CompanyRegister onSubmit={handleCompanySubmit} onReturn={handleReturnHome} />
  //       )}
  
  //       {selectedOption === "talentregister" && showForm && (
  //         <TalentRegister onSubmit={handleTalentSubmit} onReturn={handleReturnHome} />
  //       )}
  //     </div>
  //   );
  // }

export default TalentRegister;
