import React from 'react'
import { useSelector } from 'react-redux'
//import { talentUser } from "../../../redux/auth/talentAuthSlice"

const TalentProfile = () => {

    const { talentUser } = useSelector((state) => state.talentAuth);

    return (
        <>
            <section>
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
                        Idiomas : {talentUser.languages}
                        {talentUser.languages.language}
                        {talentUser.languages.proficiency}
                    </p>
                    <p>Skills: {talentUser.skills}</p>
                    <p>Intereses: {talentUser.interests}</p>
                    <p>Sobre mí: {talentUser.aboutTheTalent}</p>
                    <p>{talentUser.profileImg}</p>
                    <p>Ofertas guardadas: {talentUser.likedOffers}</p>
                    <p>Ofertas solicitadas: {talentUser.appliedOffers}</p>
                </article>

            </section>
        </>
    )

}

export default TalentProfile


