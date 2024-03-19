import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email:'',
        password: ''
    })

    const { name, username, email, password } = formData
    const { isSuccess, messsage, isError } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if(isSuccess) {
            notification.success({
                message: 'Success',
                description: 'message',
            })
            navigate('/login')
        }
        if(isError) {
            notification.error({
                message: 'Error',
                description: 'message'
            })
        }
        dispatch(reset())
    }, [isSuccess, messsage, isError])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form', formData)
        dispatch(register(formData))
    }

    return (
        <>
            <h1>Register</h1>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="name">
                    </input>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={handleChange}
                        placeholder='username'>
                    </input>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="email"
				    >
                    </input>
				    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="password"
				    />
                </form>
                <button type='submit'>Send</button>
        </>
    )
}

export default Register