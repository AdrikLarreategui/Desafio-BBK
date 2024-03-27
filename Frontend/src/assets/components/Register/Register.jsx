import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authSlice";
//import './Register.scss'


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
  const { isSuccess, isError } = useSelector((state) => state.auth);


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
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="email" value={email} onChange={handleChange} required />
      <input name="password" type="text" placeholder="password" value={password} onChange={handleChange} required />
      <input name="companyName" type="text" placeholder="Nombre de la empresa" value={companyName} onChange={handleChange} required />
      <input name="industry" type="text" placeholder="Tipo de empresa" value={industry} onChange={handleChange} required />
      <input name="location" type="text" placeholder="Ubicación" value={location} onChange={handleChange} required />
      <input name="telephone" type="tel" placeholder="Número de teléfono" value={telephone} onChange={handleChange} required />
      <input name="webSite" type="text" placeholder="Sitio web" value={webSite} onChange={handleChange} required />
      <input name="socialNumber" type="text" placeholder="CIF" value={socialNumber} onChange={handleChange} required />
      <input name="workersNumber" type="number" placeholder="Número de trabajadores" value={workersNumber} onChange={handleChange} required />
      <textarea placeholder="description" value={description} onChange={handleChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}
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

  const { isSuccess, isError } = useSelector((state) => state.auth)

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
        <form onSubmit={handleSubmit}>
          <div>

            <input type="text" name="dni" value={dni} onChange={handleChange} placeholder="DNI" ></input>
            <input type="text" name="name" value={name} onChange={handleChange} placeholder="nombre" ></input>
            <input type="text" name="surname" value={surname} onChange={handleChange} placeholder="apellido" ></input>
            <input type="number" name="telephone" value={telephone} onChange={handleChange} placeholder="teléfono" ></input>
            <input type="date" name="birthdate" value={birthdate} onChange={handleChange} placeholder="Fecha de nacimiento" ></input>
            <input type="text" name="education" value={education} onChange={handleChange} placeholder="educación" ></input>
            <h3>skills</h3>

            {skills.map((skill, index) => (
              <div key={index}>
                <input type="text" name="skills" value={skill} onChange={(e) => handleSkillsChange(index, e)}
                  placeholder="skills" ></input>
                {skill}
              </div>
            ))}
            <button type="button" onClick={addSkill}> + skills </button>

            <h3>interests</h3>
            {/* <input type="text" name='interests /> */}
            {interests.map((interest, index) => (
              <div key={index}>interests
                <input type="text" name="interests" value={interest} onChange={(e) => handleInterestsChange(index, e)} placeholder="interests"></input>
                {interest}
              </div>
            ))}
            <button type="button" onClick={addInterest} > + interests</button>

            <label htmlFor="languages">
              <h3>Languages</h3>
            </label>
            {languages.map((lang, index) => (
              <div key={index}>
                <input type="text" name="language" value={lang.language} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Idioma" />
                <input type="text" name="proficiency" value={lang.proficiency} onChange={(e) => handleLanguagesChange(index, e)} placeholder="Nivel" />
              </div>
            ))}
            <button type="button" onClick={addLanguage}>Add Language</button>

            <input type="text" name="awards" value={awards} onChange={handleChange} placeholder="awards" ></input>
            <input type="text" name="aboutTheTalent" value={aboutTheTalent} onChange={handleChange} placeholder="aboutTheTalent" ></input>
            {/* //input image uploader */}

            <input type="email" name="email" value={email} onChange={handleChange} placeholder="email">
            </input>
            {/*   <input type="text" name="ratings" value={ratings} onChange={handleChange} placeholder="ratings" ></input> */}
            <input type="password" name="password" value={password} onChange={handleChange} placeholder="password"></input>
          </div>
          <button type="submit">Register Talent</button>
        </form>
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
          <button onClick={() => handleOptionClick('talento')}> Talento </button>
          <button onClick={() => handleOptionClick('empresa')}> Empresa </button>
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

export default Register;





