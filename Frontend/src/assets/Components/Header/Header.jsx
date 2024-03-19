import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import { logout } from '../../redux/auth/authSlice'
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

    return (
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






















































/*import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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
    const [current, setCurrent] = useState('home')
    const [text, setText] = useState('')
    let items = {}
    const handleMenu = () => {

        if (user) {
            items = [{
                label: 'Home',
                key: 'home',
                icon: <HomeOutlined />
            },
            {
                label: 'Profile',
                key: 'profile',
                icon: <IdcardOutlined />

            },
            {
                label: 'Log out',
                key: 'logout',
                icon: <LogoutOutlined />
            }]
        }

        else {
            items = [
                {
                    label: 'Home',
                    key: 'home',
                    icon: <HomeOutlined />

                },
                {
                    label: 'Log in',
                    key: 'login',
                    icon: <LoginOutlined />
                },
                {
                    label: 'Register',
                    key: 'register',
                    icon: <AuditOutlined />
                }
            ]
        }
    }
    handleMenu()


    useEffect(() => {
        handleMenu()
    },
        [user])


    const onLogout = (e) => {
        e.preventDefault()
        //        dispatch(logout())
        navigate('/login')
    }

    const onClick = (e) => {
        console.log('click', e)
        setCurrent(e.key)

        switch (e.key) {
            case 'home':
                navigate('/')
                break
            case 'profile':
                navigate('/profile')
                break
            case 'login':
                navigate('/login')
                break
            case 'logout':
                onLogout()
                break
            case 'register':
                navigate('/register')
                break
        }
        return (
            <nav>
                <Link to='/'> Home </Link>
                {user ?
                    (
                        <>
                            <button onClick={onLogout}>Logout</button>
                            <Link to="/profile">{user.name}</Link>
                        </>
                    )
                    : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>

                    )
                }
                <input onKeyUp={handleChange} placeholder='search post' name='text' />
            </nav>
        )


    }


}

export default TheHeader

<>
       <Menu
           onClick={onClick}
           selectedKeys={[current]}
           mode="horizontal"
           items={items}
           style={{
               display: 'flex',
               justifyContent: 'center',
           }}
       />
   </>*/