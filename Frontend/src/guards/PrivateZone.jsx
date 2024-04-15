import { Navigate, json } from "react-router-dom";

const PrivateZone = ({ children }) => {
    const user = localStorage.getItem('user')
    return user ? children : <Navigate to='/login' />
}

export default PrivateZone