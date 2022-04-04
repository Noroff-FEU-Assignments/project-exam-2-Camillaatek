import React, { useContext } from 'react'
import { userLoginSchema } from '../utils/yupSchemas'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import { AUTH_URL } from '../utils/Api'

const LoginForm = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userLoginSchema),
    })

    const loginUser = async (formData) => {
        const responseData = await axios.post(AUTH_URL, {
            identifier: formData.email,
            password: formData.password,
        })

        setAuth(responseData.data)
        navigate('/admin')
    }

    const onSubmit = (formData) => {
        loginUser(formData).catch(console.error)
    }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder='Your email' />
        {errors.email && <span>{errors.email.message}</span>}
        <input
        {...register('password')}
        type='password'
        placeholder='Your password...'
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button>Send</button>
    </form>
    </>
  )
}

export default LoginForm