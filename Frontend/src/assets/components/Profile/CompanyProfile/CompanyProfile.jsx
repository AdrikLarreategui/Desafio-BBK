import React from 'react'
import { useSelector } from 'react-redux'
//import { companyProfile } from "../../../redux/auth/companyAuthSlice"

 const CompanyProfile = () => {

    const { companyUser } = useSelector((state) => state.talentAuth);

    return (

            <>

            <p>hola</p>
            </>

    )
} 

export default CompanyProfile