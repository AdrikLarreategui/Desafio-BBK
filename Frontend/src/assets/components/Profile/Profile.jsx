import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    //const { user } = useSelector((state) => state.auth)

    //    const { talentUser } = useSelector((state) => state.talentAuth) || {};
    const { companyUser } = useSelector((state) => state.companyAuth) || {};

    const talentUser = JSON.parse(localStorage.getItem('talentUser'))
    console.log(talentUser)

    useEffect(() => {
        // Redirige al usuario a la página de perfil correspondiente
        // dependiendo del tipo de usuario autenticado
        if (talentUser) {
            navigate("/talent/profile");
        } else if (companyUser) {
            navigate("/company/profile");
        }
    }, [talentUser, companyUser, navigate]);

    return null
}
export default Profile