import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Logout } from '../../redux/auth/authSlice'
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

    const onLogout = (e) => {
        e.preventDefault();
    
        dispatch(Logout());
        navigate("/login");
      };

    const handleChange = (e) => {
        setText(e.target.value)
        if(e.key==='Enter') {
            navigate(`/search/${text}`)
        }
    }

    // const isAdmin = user?.role === 'admin'

    return(
        <nav>
            <Link to='/'>Home |</Link>
            {user ? (
                <>
                    <Link to='/profile'>Profile |</Link>
                    <Link onClick={onLogout}>Logout | </Link>

                    {/* {isAdmin && <Link to="/admin">Admin Panel | </Link>} */}

                    <input
                        onKeyUp={handleChange}
                        placeholder="Enter the title of the post "
                        name="text"
                    />

                </>
            ) : (
                <>
                    <Link to='/login' >Login |</Link>
                    <Link to='/register'>Register |</Link>
                </>
            )}
        </nav>
    )
}

export default TheHeader
