import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authSlice";


//CÓDIGO CHATGPT
function EmpresaFormulario({ onSubmit, onReturn }) {
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sitioWeb, setSitioWeb] = useState('');
  const [numTrabajadores, setNumTrabajadores] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombreEmpresa, tipoEmpresa, ubicacion, telefono, sitioWeb, numTrabajadores, descripcion });
    setTimeout(() => {
      onReturn();
    }, 1500); // 1.5 segundos
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre de la empresa" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} required />
      <input type="text" placeholder="Tipo de empresa" value={tipoEmpresa} onChange={(e) => setTipoEmpresa(e.target.value)} required />
      <input type="text" placeholder="Ubicación" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} required />
      <input type="tel" placeholder="Número de teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      <input type="text" placeholder="Sitio web" value={sitioWeb} onChange={(e) => setSitioWeb(e.target.value)} required />
      <input type="number" placeholder="Número de trabajadores" value={numTrabajadores} onChange={(e) => setNumTrabajadores(e.target.value)} required />
      <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

function Register() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowForm(true);
  };

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
          <button onClick={() => handleOptionClick('talento')}>Talento</button>
          <button onClick={() => handleOptionClick('empresa')}>Empresa</button>
        </div>
      )}
      {selectedOption === 'empresa' && showForm && (
        <EmpresaFormulario onSubmit={handleEmpresaSubmit} onReturn={handleReturnHome} />
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






