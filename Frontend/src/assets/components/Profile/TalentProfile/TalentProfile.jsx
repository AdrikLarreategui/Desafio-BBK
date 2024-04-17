import React from "react";
import { useSelector } from "react-redux";
//import { talentUser } from "../../../redux/auth/talentAuthSlice"
const foto12 = "../images/foto12.jpg"
import "./TalentProfile.css"
const TalentProfile = () => {

    // const { talentUser } = useSelector((state) => state.talentAuth);
    const talentUser = JSON.parse(localStorage.getItem('talentUser'))

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
                        Email: {talentUser.email}
                    </p>
                    <p>
                        Apellido: {talentUser.surnames}
                    </p>
                    <p>
                        Teléfono: {talentUser.telephone}
                    </p>
                    <p>
                        Fecha de nacimiento: {talentUser.birthdate}
                    </p>
                    <p>
                        Dirección: {talentUser.streetAddress}
                    </p>
                    <p>
                        Ciudad: {talentUser.city}
                    </p>
                    <p>
                        Código postal: {talentUser.postalCode}
                    </p>
                    <p>
                        Formación: {talentUser.education}
                    </p>
                    <p>
                        Idiomas :
                        {talentUser.languages.map((language, index) => (
                            <span key={index}>
                                <p>
                                    {language.language} ({language.proficiency})
                                </p>
                            </span>
                        ))}

                    </p>
                    <p>Skills: {talentUser.skills.map((skill, index) => (

                        <span key={index}>
                            <p>
                                {skill}
                            </p>
                        </span>

                    ))}</p>
                    <p>Intereses:
                        {talentUser.interests.map((interest, index) => (
                            <span key={index}>
                                <p>
                                    {interest}
                                </p>
                            </span>

                        ))}</p>
                    <p>Sobre mí: {talentUser.aboutTheTalent}</p>

                    {/* //SACAR FOTO DE CLOUDINARY */}
                    {/* <p>{talentUser.profileImg}</p> */}
                    {/*                     <p>Ofertas guardadas: {talentUser.likedOffers}</p>
                    
                    <p>Ofertas solicitadas: {talentUser.appliedOffers}</p> */}
                </article>

            </section>
        </>
    )

}

export default TalentProfile;
