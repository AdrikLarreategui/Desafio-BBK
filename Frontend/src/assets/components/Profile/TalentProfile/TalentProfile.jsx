import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { talentUser } from "../../../redux/auth/talentAuthSlice"
const foto12 = "../images/foto12.jpg"
const edit = "../images/edit.png"
import "./TalentProfile.css"
import UpdateTalent from "../UpdateTalentProfil/UpdateTalentProfile";
import { useNavigate } from "react-router-dom";


const TalentProfile = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.talentAuth);
    //const talentUser = JSON.parse(localStorage.getItem('talentUser'))



    const dispatch = useDispatch()

    return (
        <>
            <h2 className="h2tp">
                Datos personales
            </h2>
            <section className="tp">
                <article className="fototp">
                    <img src={foto12} alt="" />
                </article>
                <article>
                    <p>
                        Email: {user.email}
                    </p>
                    <p>
                        Apellido: {user.surnames}
                    </p>
                    <p>
                        Teléfono: {user.telephone}
                    </p>
                    <p>
                        Fecha de nacimiento: {user.birthdate}
                    </p>
                    <p>
                        Dirección: {user.streetAddress}
                    </p>
                    <p>
                        Ciudad: {user.city}
                    </p>
                    <p>
                        Código postal: {user.postalCode}
                    </p>
                    <p>
                        Formación: {user.education}
                    </p>
                    <p>
                        Idiomas :
                        {user && user.languages.map((language, index) => (
                            <span key={index}>
                                <p>
                                    {language.language} ({language.proficiency})
                                </p>
                            </span>
                        ))}

                    </p>
                    <p>Skills: {user && user.skills.map((skill, index) => (

                        <span key={index}>
                            <p>
                                {skill}
                            </p>
                        </span>

                    ))}</p>
                    <p>Intereses:
                        {user && user.interests.map((interest, index) => (
                            <span key={index}>
                                <p>
                                    {interest}
                                </p>
                            </span>

                        ))}</p>
                    <p>Sobre mí: {user.aboutTheTalent}</p>

                    {/* //SACAR FOTO DE CLOUDINARY */}
                    {/* <p>{talentUser.profileImg}</p> */}
                    {/*                     <p>Ofertas guardadas: {talentUser.likedOffers}</p>
                    
                    <p>Ofertas solicitadas: {talentUser.appliedOffers}</p> */}
                </article>
                <img src={edit} onClick={() => navigate('/talent/update')} />
            </section>
        </>
    )

}

export default TalentProfile;
