import React from 'react'
import LoginForm from '../LoginForm'

const Login = () => {
  return (
    <div className='login'>
        <h1>Welcome to Holidaze</h1>
        <p>Log in to see bookings, messages and to edit enquiries.</p>
        <LoginForm />
    </div>
  )
}

export default Login