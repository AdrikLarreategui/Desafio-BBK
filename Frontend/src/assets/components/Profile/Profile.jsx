import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    //const { user } = useSelector((state) => state.auth)
    const { talentUser } = useSelector((state) => state.talentAuth) || '';
    const { companyUser } = useSelector((state) => state.companyAuth) || '';

    useEffect(() => {
        // Redirige al usuario a la página de perfil correspondiente
        // dependiendo del tipo de usuario autenticado
        if (talentUser) {
            navigate("/talentProfile");
        } else if (companyUser) {
            navigate("/companyProfile");
        }
    }, [talentUser, companyUser, navigate]);

    return null

}
export default Profile