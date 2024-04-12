import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TalentRegister = ({ onSubmit, onReturn }) => {
  const [formData, setFormData] = useState({
    DNI: "",
    name: "",
    surname: "",
    telephone: "",
    birthdate: "",
    email: "",
    password: "",
    education: [],
    skills: [],
    interests: [],
    languages: [{ language: "", proficiency: "" }],
    awards: [],
    aboutTheTalent: "",
  });

  const { dni, name, surname, telephone, birthdate, email, password, education, skills, interests, languages, awards, aboutTheTalent } = formData;

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
    console.log("form", formData);
    onSubmit(formData);
  };

  return (
    <>
      <div>
        <h1>Register Talent</h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <Form.Control type="text" name="dni" value={dni} onChange={handleChange} placeholder="DNI" />
            <Form.Control type="text" name="name" value={name} onChange={handleChange} placeholder="nombre" />
            <Form.Control type="text" name="surname" value={surname} onChange={handleChange} placeholder="apellido" />
            <Form.Control type="number" name="telephone" value={telephone} onChange={handleChange} placeholder="teléfono" />
            <Form.Control type="date" name="birthdate" value={birthdate} onChange={handleChange} placeholder="Fecha de nacimiento" />
            <Form.Control type="text" name="education" value={education} onChange={handleChange} placeholder="educación" />
            <h3>skills</h3>
            {skills.map((skill, index) => (
              <div key={index}>
                <Form.Control type="text" name="skills" value={skill} onChange={(e) => handleSkillsChange(index, e)} placeholder="skills" />
                {skill}
              </div>
            ))}
            <Button variant="primary" type="button" onClick={addSkill}>
              + skills
            </Button>
            <h3>interests</h3>
            {interests.map((interest, index) => (
              <div key={index}>
                interests
                <Form.Control type="text" name="interests" value={interest} onChange={(e) => handleInterestsChange(index, e)} placeholder="interests" />
                {interest}
              </div>
            ))}
            <Button variant="primary" type="button" onClick={addInterest}>
              + interests
            </Button>
            <label htmlFor="languages">
              <h3>Languages</h3>
            </label>
            {languages.map((lang, index) => (
              <div key={index}>
                <Form.Control type="text" name="language" value={lang.language} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Idioma" />
                <Form.Control type="text" name="proficiency" value={lang.proficiency} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Nivel" />
              </div>
            ))}
            <Button variant="primary" type="button" onClick={addLanguage}>
              Add Language
            </Button>
            <Form.Control type="text" name="awards" value={awards} onChange={handleChange} placeholder="awards" />
            <Form.Control type="text" name="aboutTheTalent" value={aboutTheTalent} onChange={handleChange} placeholder="aboutTheTalent" />
            <Form.Control type="email" name="email" value={email} onChange={handleChange} placeholder="email" />
            <Form.Control type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
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


