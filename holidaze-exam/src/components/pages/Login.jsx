import React from 'react'
import LoginForm from '../LoginForm'
import undraw from '../../images/undraw.png'

const Login = () => {
  return (
         <>
            <div className='login'>
                <h1>Welcome to Holidaze</h1>
                <p>Log in to see bookings, messages and to edit enquiries.</p>
                <LoginForm />
                <p>Forgot your Password? Click here.</p>
             
            </div>
      </>
    )
}

export default Login