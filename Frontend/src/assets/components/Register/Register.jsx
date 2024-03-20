import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password: ''
    })

    const { name, email, password } = formData
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isSuccess, messsage, isError } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isSuccess) {
            notification.success({
                message: 'Success',
                description: 'message',
            })
            dispatch(reset())
            setTimeout(()=> {
                navigate('/login')
            }, 1500)
            
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
			[e.target.name]: e.target.value,
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
                <button type='submit'>Register</button>
        </>
    )
}

export default Register