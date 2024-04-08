import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authSlice";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import './Register.scss'

//Registro de empresas
const CompanyForm = ({ onSubmit, onReturn }) => {
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
      role: 'company',
      companyProfile: {
        companyName: '',
        industry: '',
        location: '',
        telephone: '',
        webSite: '',
        socialNumber: '',
        workersNumber: '',
        description: ''
      }
    })


  const { email, password, companyName, industry, location, telephone, webSite, socialNumber, workersNumber, description } = formData
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isSuccess, isError } = useSelector((state) => state.auth);


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
      <Button variant="primary" type="submit">Enviar</Button>
    </Form>
  );
}


//Registro de talento
const TalentForm = () => {
  const [formData, setFormData] = useState({
    DNI: '',
    name: '',
    surname: '',
    telephone: '',
    birthdate: '',
    email: '',
    password: '',
    education: [],
    skills: [],
    interests: [],
    languages: [{ language: '', proficiency: '' }],
    awards: [],
    aboutTheTalent: '',
    //IMAGE
    //LIKEDOFFERS [{}]
    //APPLIEDOFFERS [{}]
    //RATINGS[]
  })

  const { dni, name, surname, telephone, birthdate, email, password, education, skills, interests, languages, awards, aboutTheTalent } = formData

  const dispatch = useDispatch()

  // const { isSuccess, isError } = useSelector((state) => state.auth)

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleLanguagesChange = (index, e) => {
    const { name, value } = e.target
    const newLanguages = [...languages]
    newLanguages[index][name] = value
    setFormData({
      ...formData,
      languages: newLanguages
    })
  }

  const handleInterestsChange = (index, e) => {
    const newInterests = [...interests]
    newInterests[index] = e.target.value
    setFormData({
      ...formData,
      interests: newInterests
    })
  }
  const handleSkillsChange = (index, e) => {
    const newSkills = [...skills]
    newSkills[index] = e.target.value
    setFormData({
      ...formData,
      skills: newSkills
    })
  }

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...skills, '']
    })
  }

  const addInterest = () => {
    setFormData({
      ...formData,
      interests: [...interests, '']
    })
  }

  const addLanguage = () => {
    setFormData({
      ...formData,
      languages: [...languages, { language: '', proficiency: '' }]
    }
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("form", formData)
    dispatch(register(formData))
  }

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
                <Form.Control type="text" name="skills" value={skill} onChange={(e) => handleSkillsChange(index, e)}
                  placeholder="skills" />
                {skill}
              </div>
            ))}
            <Button variant="primary" type="button" onClick={addSkill}> + skills </Button>

            <h3>interests</h3>
            {/* <input type="text" name='interests /> */}
            {interests.map((interest, index) => (
              <div key={index}>interests
                <Form.Control type="text" name="interests" value={interest} onChange={(e) => handleInterestsChange(index, e)} placeholder="interests" />
                {interest}
              </div>
            ))}
            <Button variant="primary" type="button" onClick={addInterest} > + interests</Button>

            <label htmlFor="languages">
              <h3>Languages</h3>
            </label>
            {languages.map((lang, index) => (
              <div key={index}>
                <Form.Control type="text" name="language" value={lang.language} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Idioma" />
                <Form.Control type="text" name="proficiency" value={lang.proficiency} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Nivel" />
              </div>
            ))}
            <Button variant="primary" type="button" onClick={addLanguage}>Add Language</Button>

            <Form.Control type="text" name="awards" value={awards} onChange={handleChange} placeholder="awards" />
            <Form.Control type="text" name="aboutTheTalent" value={aboutTheTalent} onChange={handleChange} placeholder="aboutTheTalent" />
            {/* //input image uploader */}

            <Form.Control type="email" name="email" value={email} onChange={handleChange} placeholder="email" />
            {/*   <input type="text" name="ratings" value={ratings} onChange={handleChange} placeholder="ratings" ></input> */}
            <Form.Control type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
          </div>
          <Button variant="primary" type="submit">Register Talent</Button>
        </Form>
      </div>
    </>
  );
};



const Register = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowForm(true);
  };

  const handleTalentSubmit = (data) => {
    res.send('Datos registrados: ', data)

  }

  const handleEmpresaSubmit = (data) => {
    console.log('Datos de Empresa:', data);
    // Aquí puedes enviar los datos a donde los necesites
  };

  const handleReturnHome = () => {
    setSelectedOption('');
    setShowForm(false);
    // Aquí podrías implementar la navegación a la página de inicio
    console.log('Volver a la página de inicio');
  };

  return (
    <div>
      <h1>Registro</h1>
      {!showForm && (
        <div>
          <Button variant="primary" onClick={() => handleOptionClick('talento')}> Talento </Button>
          <Button variant="primary" onClick={() => handleOptionClick('empresa')}> Empresa </Button>
        </div>
      )}
      {selectedOption === 'empresa' && showForm && (
        <CompanyForm onSubmit={handleEmpresaSubmit} onReturn={handleReturnHome} />
      )}

      {selectedOption === 'talento' && showForm &&
        (
          <TalentForm onSubmit={handleTalentSubmit} onReturn={handleReturnHome} />
        )}


    </div>
  );
}

export default Register







