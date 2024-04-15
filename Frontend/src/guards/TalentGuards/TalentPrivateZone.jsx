import { Navigate, json } from "react-router-dom";

const TalentPrivateZone = ({ children }) => {
    const user = localStorage.getItem('user')
    return user ? children : <Navigate to='/talent/login' />
}

export default TalentPrivateZone