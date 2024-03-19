import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authSlice'
import { useEffect, useState } from 'react'
import {
    HomeOutlined,
    LogoutOutlined,
    LoginOutlined,
    IdcardOutlined,
    AuditOutlined,
} from '@ant-design/icons'
import { Menu, Input } from 'antd'
// PENDING import { logout } from '../../authSlice' ???


const TheHeader = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [text, setText] = useState('')

    const handleLogout = () => {
        dispatch(logout())
        console.log('user succesfully disconected')
    }

    return(
        <nav>
            {user ? (
                <>
                    <Link to='/profile'>Profile |</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to='/login' >Login |</Link>
                    <Link to='/register'>Register</Link>
                </>
            )}
            
        </nav>
    )
}

export default TheHeader
