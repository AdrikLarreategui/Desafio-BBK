import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../redux/auth/offerAuthSlice";
import { useNavigate } from "react-router-dom";
// import "./CreateOffer.css";

const CreateOffer = () => {
  const initialState = {
    title: "",
    companyName: "",
    location: "",
    workingMode: "",  //Tipo de oferta: remoto, presencial o híbrido.
    publishingDate: "", //Fecha de publicación.
    contractKind: "", //Tipo de contrato: indefinido, De duración determinada, Otros contratos, Fijo discontinuo, Formativo, Autónomo de relevo
    workingDayType: "", //Tipo de jornada: Completa, Parcial/indiferente, Indiferente, Parcial/mañana, Intensiva mañana, Intensiva tarde, Intensiva noche, Turnos rotatorios: mañana, tarde, noche
    salaryRange: "",
    offerOverview: "", //Descripción de la oferta.
  };
  const [formData, setFormData] = useState(initialState);

  const workingMode = [
    "Remoto",
    "Presencial",
    "Híbrido (semipresencial)",
  ]

  const contractKind = [
    "Indefinido",
    "De duración determinada",
    "Otros contratos",
    "Fijo discontinuo",
    "Formativo",
    "Autónomo de relevo",
  ] 

  const workingDayType = [
    "Completa",
    "Parcial/indiferente",
    "Indiferente",
    "Parcial/mañana",
    "Intensiva mañana",
    "Intensiva tarde",
    "Intensiva noche",
    "Turnos rotatorios: mañana, tarde, noche",
  ] 

  const [valueSelected, setValueSelected] = useState('');

  const { title, content } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Title:", title);

    dispatch(create(formData));

    setFormData(initialState);
  };

  const handleChangeV = (event) => {
    setValueSelected(event.target.value);
  };

  return (
    <div>
      <h1>Escribe tu oferta</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicCompanyName">
          <Form.Control name="companyName" type="text" placeholder="Nombre de la empresa" value={companyName} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicLocation">
          <Form.Control name="location" type="text" placeholder="Ubicación" value={location} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicWorkingMode">
            <Form.Control as="select" name="workingMode" value={workingMode} onChange={handleChange}>
            <option value="">Selecciona el modelo puesto de trabajo</option>
            {workingMode.map((type, index) => (
                <option key={index} value={type}>{type}</option>
            ))}
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPublishingDate">
          <Form.Control name="publishingDate" type="date" placeholder="Fecha de publicación" value={publishingDate} onChange={handleChange} />
        </Form.Group>
        
        <Form.Group controlId="formBasicContractKind">
          <Form.Control as="select" name="contractKind" value={contractKind} onChange={handleChange} >
          <option value="">Selecciona el tipo de contrato ofrecido</option>
          {contractKind.map((type, index) =>(
            <option key={index} value={type}>{type}</option>
          ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicWorkingDayType">
          <Form.Control as="select" name="workingDayType" value={workingDayType} onChange={handleChange} >
          <option value="">Selecciona el tipo de jornada ofertada</option>
          {workingDayType.map((type, index) =>(
            <option key={index} value={type}>{type}</option>
          ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicSalaryRange">
          <Form.Control name="salaryRange" type="text" placeholder="Rango salarial" value={salaryRange} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicOfferOverview">
          <Form.Control  as="textarea" rows={3} name="offerOverview" type="text" placeholder="Descripción de la oferta" value={offerOverview} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CreateOffer;

//   return (
//     <div style={{ margin: "15px" }}>
//       <h2>Publicar una oferta</h2>
//       <form onSubmit={handleSubmit} className="create-post-container">
//         <input
//           type="text"
//           placeholder="Title"
//           onChange={handleChange}
//           value={title}
//           name="title"
//           required
//         />
//         <input
//           type="text"
//           onChange={handleChange}
//           value={location}
//           name="location"
//           placeholder="location"
//           required
//         />
//         <input
//           type="text"
//           onChange={handleChange}
//           value={workingMode} //Tipo de oferta: remoto, presencial o híbrido.
//           name="workingMode"  
//           placeholder="workingMode"
//           required
//         />
//         <input
//           type="date"
//           onChange={handleChange}
//           value={publishingDate} //Fecha de publicación.
//           name="publishingDate"  
//           placeholder="publishingDate"
//           required
//         />
//         <input
//           type="text"
//           onChange={handleChange}
//           value={contractKind} //Tipo de contrato: indefinido, De duración determinada, Otros contratos, Fijo discontinuo, Formativo, Autónomo de relevo
//           name="contractKind"  
//           placeholder="contractKind"
//           required
//         />
//         <input
//           type="text"
//           onChange={handleChange}
//           value={workingDayType} //Tipo de jornada: Completa, Parcial/indiferente, Indiferente, Parcial/mañana, Intensiva mañana, Intensiva tarde, Intensiva noche
//           name="workingDayType" 
//           placeholder="workingDayType"
//           required
//         />
//          <input
//           type="text"
//           onChange={handleChange}
//           value={salaryRange}
//           name="salaryRange"  
//           placeholder="salaryRange"
//           required
//         />
//          <input
//           type="text"
//           onChange={handleChange}
//           value={offerOverview} //Descripción de la oferta.
//           name="offerOverview"  
//           placeholder="offerOverview"
//           required
//         />
//         <button type="submit">Publish</button>
//       </form>
//     </div>
//   );
// };

