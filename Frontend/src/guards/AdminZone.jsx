import { Navigate, json } from "react-router-dom";

const AdminZone = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user && user.role === "admin" ? children : <Navigate to='/' />
}

export default AdminZone