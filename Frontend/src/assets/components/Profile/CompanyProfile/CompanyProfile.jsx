import React from 'react'
import { useSelector } from 'react-redux'
//import {  } from "../../../redux/auth/companyAuthSlice"
import "./CompanyProfile.css"
const foto13 = "../images/foto13.jpg"

const CompanyProfile = () => {

    const companyUser = JSON.parse(localStorage.getItem('companyUser'))

    return (
        <>
                    <h2>
                        Datos de la organización
                    </h2>
            <section className='cp'>
                <article>
                    <img src={foto13} alt="" />
                </article>
                <article>
                    <p>
                        email: {companyUser.email}
                    </p>
                    <p>
                        CIF: {companyUser.cif}
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