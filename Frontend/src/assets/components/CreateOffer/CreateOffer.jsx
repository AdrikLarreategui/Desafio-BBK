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
    workingDayType: "", //Tipo de jornada: Completa, Parcial/indiferente, Indiferente, Parcial/mañana, Intensiva mañana, Intensiva tarde, Intensiva noche
    salaryRange: "",
    offerOverview: "", //Descripción de la oferta.
  };
  const [formData, setFormData] = useState(initialState);

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

  return (
    <div style={{ margin: "15px" }}>
      <h2>Publicar una oferta</h2>
      <form onSubmit={handleSubmit} className="create-post-container">
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={title}
          name="title"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          value={location}
          name="location"
          placeholder="location"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          value={workingMode} //Tipo de oferta: remoto, presencial o híbrido.
          name="workingMode"  
          placeholder="workingMode"
          required
        />
        <input
          type="date"
          onChange={handleChange}
          value={publishingDate} //Fecha de publicación.
          name="publishingDate"  
          placeholder="publishingDate"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          value={contractKind} //Tipo de contrato: indefinido, De duración determinada, Otros contratos, Fijo discontinuo, Formativo, Autónomo de relevo
          name="contractKind"  
          placeholder="contractKind"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          value={workingDayType} //Tipo de jornada: Completa, Parcial/indiferente, Indiferente, Parcial/mañana, Intensiva mañana, Intensiva tarde, Intensiva noche
          name="workingDayType" 
          placeholder="workingDayType"
          required
        />
         <input
          type="text"
          onChange={handleChange}
          value={salaryRange}
          name="salaryRange"  
          placeholder="salaryRange"
          required
        />
         <input
          type="text"
          onChange={handleChange}
          value={offerOverview} //Descripción de la oferta.
          name="offerOverview"  
          placeholder="offerOverview"
          required
        />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreateOffer;