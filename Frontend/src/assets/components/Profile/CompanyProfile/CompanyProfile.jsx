import React from 'react'
import { useSelector } from 'react-redux'
//import {  } from "../../../redux/auth/companyAuthSlice"

const CompanyProfile = () => {

    const companyUser = JSON.parse(localStorage.getItem('companyUser'))

    return (
        <>
            <section>
                <article>
                    <h2>
                        Datos personales
                    </h2>
                    <p>
                        email: {companyUser.email}
                    </p>
                    <p>
                        CIF: {companyUser.CIF}
                    </p>
                    <p>
                        Número de teléfono: {companyUser.telephoneNumber}
                    </p>
                    <p>
                        Tipo de empresa: {companyUser.typeCompany}
                    </p>
                    <p>
                        Sector: {companyUser.field}
                    </p>
                    <p>
                        Número de empleados: {companyUser.workersNumber}
                    </p>
                    <p>
                        Descripción de empresa : {companyUser.description}
                    </p>
                    <p>
                        Ubicación : {companyUser.location}
                    </p>

                    <p> Website {companyUser.website}</p>
                    <p>Ofertas creadas: {companyUser.createdOffers}</p>
                    <p>Talentos guardados: {companyUser.likedTalents}</p>

                </article>

            </section>
        </>

    )
}

export default CompanyProfile