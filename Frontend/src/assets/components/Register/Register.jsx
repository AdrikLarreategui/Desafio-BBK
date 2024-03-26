import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authSlice";


//CÓDIGO CHATGPT
const CompanyForm = ({ onSubmit, onReturn }) => {
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
      role: 'company',
      companyProfile: {
        companyName: '',
        typeCompany: '',
        location: '',
        telephoneNumber: '',
        webSite: '',
        workersNumber: '',
        description: ''
      }
    })


  const { email, password, companyName, typeCompany, location, telephoneNumber, webSite, workersNumber, description } = formData
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ companyName, typeCompany, location, telephoneNumber, webSite, workersNumber, description });
    setTimeout(() => {
      onReturn();
    }, 1500); // 1.5 segundos
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
      <input name="typeCompany" type="text" placeholder="Tipo de empresa" value={typeCompany} onChange={handleChange} required />
      <input name="location" type="text" placeholder="Ubicación" value={location} onChange={handleChange} required />
      <input name="telephoneNumber" type="tel" placeholder="Número de teléfono" value={telephoneNumber} onChange={handleChange} required />
      <input name="webSite" type="text" placeholder="Sitio web" value={webSite} onChange={handleChange} required />
      <input name="workersNumber" type="number" placeholder="Número de trabajadores" value={workersNumber} onChange={handleChange} required />
      <textarea placeholder="description" value={description} onChange={handleChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}
const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    telephone: '',
    bithdate: '',
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

  const { name, surname, telephone, birthdate, email, password, education, skills, interests, languages, awards, aboutTheTalent } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    newLanguages[index][name] = value;
    setFormData({
      ...formData,
      languages: newLanguages
    })
  }

  const addSkill = () => {
    setFormData({
      ...formData,
      skills
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

            <input type="text" name="name" value={name} onChange={handleChange} placeholder="nombre" ></input>
            <input type="text" name="surname" value={surname} onChange={handleChange} placeholder="apellido" ></input>
            <input type="number" name="telephone" value={telephone} onChange={handleChange} placeholder="teléfono" ></input>
            <input type="date" name="birthdate" value={birthdate} onChange={handleChange} placeholder="Fecha de nacimiento" ></input>
            <input type="text" name="education" value={education} onChange={handleChange} placeholder="educación" ></input>
            <input type="text" name="skills" value={skills} onChange={handleChange} placeholder="skills" ></input>

            <button type="button" onClick={addSkill}> Add Skill </button>

            <input type="text" name="interests" value={interests} onChange={handleChange} placeholder="interests"></input>

            <label htmlFor="languages">
              <h3>Languages</h3>
              {/*   <input type="text" name="language" value={languages.language} onChange={handleChange} placeholder="language" > </input>
                            <input type="text" name="proficiency" value={lang.proficiency} onChange={handleChange} placeholder="proficiency" > </input> */}
              {/* {languages.push({ languages.language, languages.proficiency })} */}
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
    reset.send('Datos registrados: ', data)

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


//CÓDIGO APAÑADO
// const companyForm = (onSubmit) => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     typeCompany: '',
//     location: '',
//     telephoneNumber: '',
//     webSite: '',
//     workersNumber: '',
//     description: ''
//   })

//   const { companyName, typeCompany, location, telephoneNumber, webSite, workersNumber, description } = formData
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isSuccess, isError } = useSelector((state) => state.auth);

//     useEffect(() => {
//     if (isSuccess) {
//       console.log("success");
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     }
//     if (isError) {
//       console.log("error");
//     }
//     dispatch(reset());
//   }, [isSuccess, isError]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ companyName, typeCompany, location, telephoneNumber, webSite, workersNumber, description });
//     setTimeout(() => {
//       onReturn();
//     }, 1500);
//   };

//     const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name = 'companyName' placeholder="Nombre de la empresa" value={companyName}  onChange={handleChange} required />
//       <input type="text" name="typeCompany" placeholder="Tipo de empresa" value={typeCompany}  onChange={handleChange} required />
//       <input type="text" name="location" placeholder="Ubicación" value={location}  onChange={handleChange} required />
//       <input type="number" name="telephoneNumber" placeholder="Número de teléfono" value={telephoneNumber}  onChange={handleChange} required />
//       <input type="text" name="webSite" placeholder="Sitio web" value={webSite}  onChange={handleChange} required />
//       <input type="number" name="workersNumber" placeholder="Número de trabajadores" value={workersNumber}  onChange={handleChange} required />
//       <textarea placeholder="Descripción" value={description} required />
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }

// const Register = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setShowForm(true);
//   };

//   const handleEmpresaSubmit = (data) => {
//     console.log('Datos de Empresa:', data);
//     // Aquí puedes enviar los datos a donde los necesites
//   };

//   return (
//     <div>
//       <h1>Registro</h1>
//       {!showForm && (
//         <div>
//           <button onClick={() => handleOptionClick('talento')}>Talento</button>
//           <button onClick={() => handleOptionClick('empresa')}>Empresa</button>
//         </div>
//       )}
//       {selectedOption === 'empresa' && showForm && <companyForm onSubmit={handleEmpresaSubmit} />}
//     </div>
//   );
// }


// export default Register;




// CÓDIGO ORIGINAL
// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const { username, email, password } = formData;

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isSuccess, isError } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (isSuccess) {
//       console.log("success");
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     }
//     if (isError) {
//       console.log("error");
//     }
//     dispatch(reset());
//   }, [isSuccess, isError]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("form", formData);
//     dispatch(register(formData));
//   };

//   return (
//     <>
//       <div>
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={handleChange}
//             placeholder="name"
//           ></input>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             placeholder="email"
//           ></input>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             placeholder="password"
//           />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;






