import { Navigate, json } from "react-router-dom";

const TalentAdminZone = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user && user.role === "admin" ? children : <Navigate to='/' />
}

export default TalentAdminZone