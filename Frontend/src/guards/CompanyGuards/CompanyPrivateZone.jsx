import { Navigate, json } from "react-router-dom";

const CompanyPrivateZone = ({ children }) => {
    const user = localStorage.getItem('user')
    return user ? children : <Navigate to='/company/login' />
}

export default CompanyPrivateZone