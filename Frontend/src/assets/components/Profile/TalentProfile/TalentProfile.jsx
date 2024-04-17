import React from "react";
import { useSelector } from "react-redux";
//import { talentUser } from "../../../redux/auth/talentAuthSlice"
const foto12 = "../images/foto12.jpg"
const TalentProfile = () => {

    // const { talentUser } = useSelector((state) => state.talentAuth);
    const talentUser = JSON.parse(localStorage.getItem('talentUser'))

    return (
        <>
            <section className="tp">
                <article>
                    <img src={foto12} alt="" />
                </article>
                <article>
                    <h2>
                        Datos personales
                    </h2>
                    <p>
                        email: {talentUser.email}
                    </p>
                    <p>
                        password
                    </p>
                    <p>
                        surnames: {talentUser.surnames}
                    </p>
                    <p>
                        {talentUser.telephone}
                    </p>
                    <p>
                        {talentUser.birthdate}
                    </p>
                    <p>
                        {talentUser.streetAddress}
                    </p>
                    <p>
                        {talentUser.city}
                    </p>
                    <p>
                        código postal : {talentUser.postalCode}
                    </p>
                    <p>
                        Formación : {talentUser.education}
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


                        {/*
                         {talentUser.languages}
                        {talentUser.languages.language}
                        {talentUser.languages.proficiency}
                    */}
                    </p>
                    <p>Skills: {talentUser.skills.map((skill, index) => (

                        <span key={index}>
                            <p>
                                {skill}
                            </p>
                        </span>

                    ))}</p>
                    <p>Intereses: 
                        {talentUser.interests.map((interest, index)=>(
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
